// lib/seisDiagnostic.ts
// Pure-function rules engine that turns a Companies House profile into a
// first-pass SEIS / EIS qualifying-test diagnostic. Deliberately
// conservative: where Companies House data alone can't decide a test,
// we mark it 'amber' with a "needs specialist review" note rather than
// claiming a verdict we can't defend.
//
// What we CAN check from Companies House:
//   - Company age vs SEIS (3y), EIS (7y), KIC (10y) windows
//   - Company status (must be 'active')
//   - Company type (must be UK Ltd; LLPs and listed PLCs disqualified)
//   - Jurisdiction (must be UK or close enough)
//   - SIC codes vs the excluded-trades list
//
// What we CAN'T check (flagged for the specialist):
//   - Gross assets (£350k SEIS / £15m EIS)
//   - Employee count (25 SEIS / 250 EIS / 500 KIC)
//   - Risk-to-capital condition
//   - Use of funds within the qualifying activity
//   - Control test (corporate shareholders, etc.)
//   - SEIS lifetime cap usage to date

import { CompanyProfile } from './companiesHouse';
import { classifySic, SicMatch } from '@/data/seisExclusions';

export type CheckStatus = 'pass' | 'warn' | 'fail' | 'unknown';

export interface DiagnosticCheck {
  id: string;
  label: string;
  status: CheckStatus;
  detail: string;
  recommendation?: string;
}

export interface DiagnosticResult {
  company: {
    name: string;
    number: string;
    status: string;
    type: string;
    incorporated: string; // ISO date
    ageYears: number;
    jurisdiction: string;
    sicCodes: string[];
  };
  schemes: {
    seis: 'eligible' | 'borderline' | 'ineligible';
    eis: 'eligible' | 'borderline' | 'ineligible';
    kic: 'eligible' | 'borderline' | 'ineligible';
  };
  checks: DiagnosticCheck[];
  sicVerdicts: SicMatch[];
  followUpFromSpecialist: string[];
}

const MS_IN_YEAR = 365.25 * 24 * 60 * 60 * 1000;

function yearsBetween(iso: string, now: Date = new Date()): number {
  const then = new Date(iso).getTime();
  return (now.getTime() - then) / MS_IN_YEAR;
}

function fmtDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

export function runDiagnostic(profile: CompanyProfile): DiagnosticResult {
  const checks: DiagnosticCheck[] = [];
  const ageYears = yearsBetween(profile.date_of_creation);
  const sicVerdicts = (profile.sic_codes || []).map(classifySic);

  // 1. Company status
  if (profile.company_status === 'active') {
    checks.push({
      id: 'status',
      label: 'Company status',
      status: 'pass',
      detail: 'Company is active at Companies House.',
    });
  } else {
    checks.push({
      id: 'status',
      label: 'Company status',
      status: 'fail',
      detail: `Company status is "${profile.company_status}". SEIS and EIS shares can only be issued by an active, going-concern company.`,
      recommendation: 'Restore the company before any share issue.',
    });
  }

  // 2. Company type
  const t = (profile.type || '').toLowerCase();
  if (t === 'ltd' || t === 'private-limited-shares' || t === 'private-limited-guarant-nsc-limited-exemption' || t === 'private-limited-guarant-nsc') {
    checks.push({
      id: 'type',
      label: 'Company structure',
      status: 'pass',
      detail: 'UK private limited company. SEIS and EIS shares can be issued.',
    });
  } else if (t.startsWith('llp') || t === 'limited-partnership') {
    checks.push({
      id: 'type',
      label: 'Company structure',
      status: 'fail',
      detail: 'LLPs and limited partnerships cannot issue SEIS or EIS shares.',
      recommendation: 'Incorporate a UK limited company before raising under SEIS or EIS.',
    });
  } else if (t === 'plc') {
    checks.push({
      id: 'type',
      label: 'Company structure',
      status: 'warn',
      detail: 'PLC structure. SEIS / EIS requires the company to remain unquoted; if shares trade on a recognised exchange (LSE main, AIM listed proper), the company is disqualified.',
      recommendation: 'Confirm with a specialist that the company is unquoted.',
    });
  } else {
    checks.push({
      id: 'type',
      label: 'Company structure',
      status: 'warn',
      detail: `Company type "${profile.type}" is not the standard UK private limited form. SEIS and EIS impose strict structure requirements.`,
      recommendation: 'Specialist review.',
    });
  }

  // 3. Jurisdiction
  const j = (profile.jurisdiction || '').toLowerCase();
  if (j === 'england-wales' || j === 'scotland' || j === 'northern-ireland' || j === 'united-kingdom') {
    checks.push({
      id: 'jurisdiction',
      label: 'UK jurisdiction',
      status: 'pass',
      detail: `Registered in ${profile.jurisdiction}. SEIS and EIS require UK incorporation.`,
    });
  } else {
    checks.push({
      id: 'jurisdiction',
      label: 'UK jurisdiction',
      status: 'warn',
      detail: `Registered jurisdiction is "${profile.jurisdiction}". The company may still qualify if it has a UK permanent establishment.`,
      recommendation: 'Specialist review on UK permanent-establishment test.',
    });
  }

  // 4. Age windows
  // SEIS: under 3 years from start of qualifying trade (we use incorporation as proxy)
  if (ageYears <= 3) {
    checks.push({
      id: 'age-seis',
      label: 'SEIS age window',
      status: 'pass',
      detail: `Incorporated ${fmtDate(profile.date_of_creation)} (${ageYears.toFixed(1)} years ago). Inside the SEIS 3-year window from start of qualifying trade.`,
    });
  } else if (ageYears <= 4) {
    checks.push({
      id: 'age-seis',
      label: 'SEIS age window',
      status: 'warn',
      detail: `Incorporated ${ageYears.toFixed(1)} years ago. SEIS measures from start of trade, not incorporation, so a recent trade-start could still be in window.`,
      recommendation: 'Confirm trade-start date with a specialist.',
    });
  } else {
    checks.push({
      id: 'age-seis',
      label: 'SEIS age window',
      status: 'fail',
      detail: `Incorporated ${ageYears.toFixed(1)} years ago, well past the SEIS 3-year window. EIS may still be available.`,
    });
  }

  // EIS: under 7 years (10 for KIC) from first commercial sale
  if (ageYears <= 7) {
    checks.push({
      id: 'age-eis',
      label: 'EIS age window',
      status: 'pass',
      detail: `Inside the EIS 7-year window from first commercial sale.`,
    });
  } else if (ageYears <= 10) {
    checks.push({
      id: 'age-eis',
      label: 'EIS age window',
      status: 'warn',
      detail: `Past the EIS 7-year standard window but within the 10-year knowledge-intensive company (KIC) extended window.`,
      recommendation: 'Specialist review of KIC eligibility.',
    });
  } else {
    checks.push({
      id: 'age-eis',
      label: 'EIS age window',
      status: 'fail',
      detail: `${ageYears.toFixed(1)} years past incorporation. Outside the EIS / KIC age windows.`,
    });
  }

  // 5. SIC codes
  if (sicVerdicts.length === 0) {
    checks.push({
      id: 'sic',
      label: 'Trade activity',
      status: 'warn',
      detail: 'No SIC code on the Companies House record. Specialist will need to confirm the trade is not on the excluded list.',
      recommendation: 'Add a SIC code at the next confirmation statement.',
    });
  } else {
    const reds = sicVerdicts.filter(v => v.verdict === 'red');
    const ambers = sicVerdicts.filter(v => v.verdict === 'amber');
    if (reds.length > 0) {
      checks.push({
        id: 'sic',
        label: 'Trade activity',
        status: 'fail',
        detail: `${reds.length} of the company's SIC codes sit on the SEIS/EIS excluded-trades list. SEIS/EIS only available if these are genuinely ancillary to a qualifying trade.`,
        recommendation: 'Specialist review to assess whether the substantial trade remains qualifying.',
      });
    } else if (ambers.length > 0) {
      checks.push({
        id: 'sic',
        label: 'Trade activity',
        status: 'warn',
        detail: `${ambers.length} of the company's SIC codes are borderline. HMRC will scrutinise on advance assurance.`,
        recommendation: 'Specialist drafting of the trade-narrative section of the application.',
      });
    } else {
      checks.push({
        id: 'sic',
        label: 'Trade activity',
        status: 'pass',
        detail: 'All declared SIC codes are clear of the excluded-trades list.',
      });
    }
  }

  // 6. Quoted status — Companies House data does not indicate AIM listing,
  // so this is always informational.
  checks.push({
    id: 'unquoted',
    label: 'Unquoted shares',
    status: 'unknown',
    detail: 'SEIS and EIS require shares to remain unquoted (LSE main / AIM listed proper / other recognised exchange disqualifies). Companies House records do not show listing status.',
    recommendation: 'Confirm with a specialist; if your shares trade on a public market, you are out.',
  });

  // ===== Scheme verdicts =====
  function rollup(relevantIds: string[]): 'eligible' | 'borderline' | 'ineligible' {
    const pool = checks.filter(c => relevantIds.includes(c.id));
    if (pool.some(c => c.status === 'fail')) return 'ineligible';
    if (pool.some(c => c.status === 'warn' || c.status === 'unknown')) return 'borderline';
    return 'eligible';
  }

  return {
    company: {
      name: profile.company_name,
      number: profile.company_number,
      status: profile.company_status,
      type: profile.type,
      incorporated: profile.date_of_creation,
      ageYears: Number(ageYears.toFixed(2)),
      jurisdiction: profile.jurisdiction,
      sicCodes: profile.sic_codes || [],
    },
    schemes: {
      seis: rollup(['status', 'type', 'jurisdiction', 'age-seis', 'sic', 'unquoted']),
      eis:  rollup(['status', 'type', 'jurisdiction', 'age-eis',  'sic', 'unquoted']),
      kic:  rollup(['status', 'type', 'jurisdiction', 'age-eis',  'sic', 'unquoted']),
    },
    checks,
    sicVerdicts,
    followUpFromSpecialist: [
      'Gross asset test (£350k SEIS / £15m EIS) at the moment of share issue',
      'Employee count (25 SEIS / 250 EIS / 500 KIC) at the moment of share issue',
      'Use-of-funds plan within the qualifying business activity (within 2 years for EIS, 3 for SEIS)',
      'Control and independence tests (corporate shareholders, group structure)',
      'Risk-to-capital condition for EIS',
      'SEIS lifetime cap (£250k per company) headroom',
      'Knowledge-intensive company status if applicable (R&D spend %, IP / staff qualifications tests)',
    ],
  };
}
