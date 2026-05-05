'use client';

// app/tools/seis-diagnostic/SeisDiagnosticClient.tsx
// SEIS Diagnostic — Companies House lookup + automatic SEIS/EIS rules check.
//
// UX flow:
// 1) User types a company name OR number into the search input.
// 2) If it looks like a number, we go straight to the diagnostic.
//    Otherwise we hit /api/companies-house/search and show matches.
// 3) User picks a match → we hit /api/companies-house/company/[number] →
//    server returns the full diagnostic payload → we render the verdict.
// 4) "Get matched with a specialist" CTA at the bottom converts the
//    diagnostic into a matching enquiry.

import { useState } from 'react';
import Link from 'next/link';
import { Search, CheckCircle2, AlertTriangle, XCircle, HelpCircle, Loader2, ArrowRight, Info } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';

interface SearchHit {
  company_name: string;
  company_number: string;
  company_status: string;
  company_type: string;
  date_of_creation?: string;
  address_snippet?: string;
}

interface DiagnosticCheck {
  id: string;
  label: string;
  status: 'pass' | 'warn' | 'fail' | 'unknown';
  detail: string;
  recommendation?: string;
}

interface SicMatch {
  code: string;
  description: string;
  verdict: 'red' | 'amber' | 'green';
  reason: string;
}

interface DiagnosticPayload {
  company: {
    name: string;
    number: string;
    status: string;
    type: string;
    incorporated: string;
    ageYears: number;
    jurisdiction: string;
    sicCodes: string[];
  };
  schemes: {
    seis: 'eligible' | 'borderline' | 'ineligible';
    eis:  'eligible' | 'borderline' | 'ineligible';
    kic:  'eligible' | 'borderline' | 'ineligible';
  };
  checks: DiagnosticCheck[];
  sicVerdicts: SicMatch[];
  followUpFromSpecialist: string[];
}

type ViewState =
  | { kind: 'idle' }
  | { kind: 'searching' }
  | { kind: 'matches';     hits: SearchHit[] }
  | { kind: 'diagnosing' }
  | { kind: 'result';      data: DiagnosticPayload }
  | { kind: 'error';       message: string };

const STATUS_ICON: Record<DiagnosticCheck['status'], JSX.Element> = {
  pass:    <CheckCircle2 className="w-5 h-5 text-emerald-700" aria-label="pass" />,
  warn:    <AlertTriangle className="w-5 h-5 text-amber-600"  aria-label="warning" />,
  fail:    <XCircle      className="w-5 h-5 text-red-700"    aria-label="fail" />,
  unknown: <HelpCircle   className="w-5 h-5 text-ink-500"    aria-label="needs review" />,
};

const SCHEME_PILL: Record<DiagnosticPayload['schemes']['seis'], string> = {
  eligible:   'bg-emerald-100 text-emerald-900 border-emerald-300',
  borderline: 'bg-amber-100   text-amber-900   border-amber-300',
  ineligible: 'bg-red-100     text-red-900     border-red-300',
};

const SCHEME_LABEL: Record<DiagnosticPayload['schemes']['seis'], string> = {
  eligible:   'Likely eligible',
  borderline: 'Borderline — review needed',
  ineligible: 'Likely ineligible',
};

// Companies House numbers are 8 chars: either 8 digits (England/Wales) or
// 2 letters + 6 digits (Scotland "SC", NI "NI", LLP "OC", etc.).
// Founders often quote them without leading zeros, so we accept 1-8 digits
// here and pad when querying.
function looksLikeNumber(s: string): boolean {
  return /^[A-Z]{2}\d{6}$/i.test(s.trim()) || /^\d{1,8}$/.test(s.trim());
}

function normaliseNumber(s: string): string {
  const t = s.trim().toUpperCase();
  // 2-letter prefix + 6 digits — already canonical
  if (/^[A-Z]{2}\d{6}$/.test(t)) return t;
  // All digits — left-pad to 8
  if (/^\d{1,8}$/.test(t)) return t.padStart(8, '0');
  return t;
}

export default function SeisDiagnosticClient() {
  const [query, setQuery] = useState('');
  const [view, setView] = useState<ViewState>({ kind: 'idle' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  // Helper: read a fetch response defensively. Returns { ok, status, json,
  // rawText } so the caller can give the user a useful message instead of
  // a generic "Network error" when the server crashes / returns HTML.
  async function readResponse(url: string) {
    const res = await fetch(url);
    const text = await res.text();
    let json: { error?: string; items?: SearchHit[]; diagnostic?: DiagnosticPayload } = {};
    try { json = JSON.parse(text); } catch { /* leave json empty */ }
    return { res, text, json };
  }

  async function runDiagnosticByNumber(number: string) {
    setView({ kind: 'diagnosing' });
    try {
      const { res, text, json } = await readResponse(`/api/companies-house/company/${encodeURIComponent(number)}`);
      if (!res.ok) {
        const msg = json.error || `Lookup failed (HTTP ${res.status}).`;
        const tail = !json.error ? ` See /api/companies-house/health for details.` : '';
        setView({ kind: 'error', message: msg + tail });
        return;
      }
      if (!json.diagnostic) {
        console.error('[seis-diagnostic] unexpected response:', text.slice(0, 500));
        setView({ kind: 'error', message: 'Server returned an unexpected response. Check the dev-server console.' });
        return;
      }
      setView({ kind: 'result', data: json.diagnostic });
    } catch (err) {
      console.error('[seis-diagnostic] fetch failed:', err);
      const detail = err instanceof Error ? err.message : 'unknown';
      setView({ kind: 'error', message: `Could not reach the API (${detail}). Open /api/companies-house/health to diagnose.` });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;

    if (looksLikeNumber(q)) {
      await runDiagnosticByNumber(normaliseNumber(q));
      return;
    }

    setView({ kind: 'searching' });
    try {
      const { res, json } = await readResponse(`/api/companies-house/search?q=${encodeURIComponent(q)}`);
      if (!res.ok) {
        const msg = json.error || `Search failed (HTTP ${res.status}).`;
        const tail = !json.error ? ` See /api/companies-house/health for details.` : '';
        setView({ kind: 'error', message: msg + tail });
        return;
      }
      const hits: SearchHit[] = json.items || [];
      if (hits.length === 0) {
        setView({ kind: 'error', message: 'No companies matched that name. Try the company registration number instead.' });
        return;
      }
      setView({ kind: 'matches', hits });
    } catch (err) {
      console.error('[seis-diagnostic] fetch failed:', err);
      const detail = err instanceof Error ? err.message : 'unknown';
      setView({ kind: 'error', message: `Could not reach the API (${detail}). Open /api/companies-house/health to diagnose.` });
    }
  }

  function handleReset() {
    setQuery('');
    setView({ kind: 'idle' });
  }

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={openModal} />
      <main className="flex-grow">

        <section
          className="border-b border-ink-900/10"
          style={{ backgroundColor: 'var(--paper-100)' }}
        >
          <div className="container-width py-10 md:py-16">
            <Breadcrumbs items={[{ label: 'Tools' }, { label: 'SEIS Diagnostic' }]} />

            <div className="max-w-3xl mt-8 md:mt-12">
              <h1 className="font-display text-[40px] md:text-[52px] lg:text-[60px] leading-[0.98] tracking-tighter text-ink-900 mb-6">
                Is your company <em className="text-brand-500 italic">SEIS-eligible?</em>
              </h1>
              <p className="font-sans text-[15px] md:text-base text-ink-700 leading-[1.7] max-w-[640px] mb-8">
                Type your company name or registration number. We pull your record straight from Companies House and run it through the SEIS, EIS, and knowledge-intensive qualifying tests we can verify from public data. The harder tests (assets, employees, use of funds) get flagged for a specialist.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl">
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Company name or number (e.g. 12345678)"
                  className="form-input flex-1"
                  aria-label="Company name or registration number"
                />
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={view.kind === 'searching' || view.kind === 'diagnosing'}
                >
                  {view.kind === 'searching' || view.kind === 'diagnosing'
                    ? <><Loader2 className="w-4 h-4 animate-spin" /> Checking</>
                    : <><Search className="w-4 h-4" /> Run check</>
                  }
                </button>
              </form>

              <p className="mt-4 font-sans text-[12.5px] text-ink-500 leading-relaxed">
                Source: HMG Companies House public data. We do not store your search.
                This is a first-pass eligibility view, not advice.
              </p>
            </div>
          </div>
        </section>

        {/* Results area */}
        <section className="container-width py-10 md:py-14">

          {view.kind === 'matches' && (
            <MatchList
              hits={view.hits}
              onPick={(num) => runDiagnosticByNumber(num)}
              onReset={handleReset}
            />
          )}

          {view.kind === 'result' && (
            <DiagnosticResult data={view.data} onOpenModal={openModal} onReset={handleReset} />
          )}

          {view.kind === 'error' && (
            <div className="max-w-2xl bg-white border border-red-300 rounded-sm p-6">
              <p className="font-display text-[18px] text-ink-900 mb-2">Couldn&apos;t complete the check</p>
              <p className="font-sans text-[14px] text-ink-700 mb-4">{view.message}</p>
              <button onClick={handleReset} className="btn-secondary">Try another search</button>
            </div>
          )}

          {view.kind === 'idle' && (
            <ExplainerCards />
          )}
        </section>

        <Footer />
      </main>
    </>
  );
}

/* =====================================================================
   Sub-components
   ===================================================================== */

function MatchList({ hits, onPick, onReset }: { hits: SearchHit[]; onPick: (n: string) => void; onReset: () => void }) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-[22px] md:text-[26px] text-ink-900 tracking-tight">
          {hits.length} {hits.length === 1 ? 'match' : 'matches'}. Pick yours.
        </h2>
        <button onClick={onReset} className="text-[13px] text-brand-500 hover:text-brand-700 underline underline-offset-4">
          New search
        </button>
      </div>
      <ul className="space-y-2">
        {hits.map(h => (
          <li key={h.company_number}>
            <button
              type="button"
              onClick={() => onPick(h.company_number)}
              className="w-full text-left bg-white border border-ink-900/10 rounded-sm p-4 hover:border-brand-500 transition-colors group"
            >
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <span className="font-display text-[16px] text-ink-900 group-hover:text-brand-500 transition-colors">
                  {h.company_name}
                </span>
                <span className="font-mono text-[12px] text-ink-500 tracking-wider">
                  {h.company_number}
                </span>
              </div>
              {h.address_snippet && (
                <p className="font-sans text-[12.5px] text-ink-500 mt-1.5">{h.address_snippet}</p>
              )}
              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-[11px] text-ink-500">
                <span className="uppercase tracking-wider">{h.company_status}</span>
                <span aria-hidden="true">·</span>
                <span>{h.company_type}</span>
                {h.date_of_creation && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>incorporated {new Date(h.date_of_creation).toLocaleDateString('en-GB')}</span>
                  </>
                )}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DiagnosticResult({
  data,
  onOpenModal,
  onReset,
}: {
  data: DiagnosticPayload;
  onOpenModal: () => void;
  onReset: () => void;
}) {
  const dateStr = new Date(data.company.incorporated).toLocaleDateString('en-GB', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div className="max-w-3xl">

      {/* Company header */}
      <div className="flex items-start justify-between mb-6 flex-wrap gap-3">
        <div>
          <h2 className="font-display text-[26px] md:text-[32px] text-ink-900 tracking-tight leading-[1.1]">
            {data.company.name}
          </h2>
          <p className="font-mono text-[12px] text-ink-500 tracking-wider mt-1">
            {data.company.number} &middot; incorporated {dateStr} &middot; {data.company.ageYears.toFixed(1)} years old
          </p>
        </div>
        <button onClick={onReset} className="text-[13px] text-brand-500 hover:text-brand-700 underline underline-offset-4">
          New search
        </button>
      </div>

      {/* Scheme verdict pills */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <SchemePill label="SEIS" verdict={data.schemes.seis} />
        <SchemePill label="EIS"  verdict={data.schemes.eis} />
        <SchemePill label="KIC"  verdict={data.schemes.kic} />
      </div>

      {/* Inline CTA - verdict-aware copy. Sits right under the pills so the
          read can act before they scroll into the per-check breakdown. */}
      <PrimaryCta verdicts={data.schemes} onOpenModal={onOpenModal} />

      {/* Checks */}
      <h3 className="font-display text-[18px] text-ink-900 mb-4 mt-10">What we could check from Companies House</h3>
      <ul className="space-y-3 mb-8">
        {data.checks.map(c => (
          <li key={c.id} className="flex items-start gap-3 bg-white border border-ink-900/10 rounded-sm p-4">
            <span className="mt-0.5 flex-shrink-0">{STATUS_ICON[c.status]}</span>
            <div>
              <p className="font-display text-[15px] text-ink-900">{c.label}</p>
              <p className="font-sans text-[13.5px] text-ink-700 leading-relaxed mt-1">{c.detail}</p>
              {c.recommendation && (
                <p className="font-sans italic text-[13px] text-brand-500 mt-1.5">→ {c.recommendation}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* SIC verdicts (only if any are amber/red — green list is implicit) */}
      {data.sicVerdicts.length > 0 && (
        <details className="mb-8 bg-paper-50 border border-ink-900/8 rounded-sm">
          <summary className="cursor-pointer p-4 font-display text-[15px] text-ink-900">
            SIC codes on record ({data.sicVerdicts.length})
          </summary>
          <ul className="px-4 pb-4 space-y-3">
            {data.sicVerdicts.map(s => (
              <li key={s.code} className="flex items-start gap-3 text-[13.5px]">
                <span className={
                  'flex-shrink-0 w-2 h-2 rounded-full mt-2 ' +
                  (s.verdict === 'green' ? 'bg-emerald-600' : s.verdict === 'amber' ? 'bg-amber-500' : 'bg-red-600')
                }/>
                <div>
                  <span className="font-mono text-ink-900">{s.code}</span>
                  <span className="text-ink-700"> &middot; {s.description}</span>
                  <p className="text-ink-500 mt-0.5">{s.reason}</p>
                </div>
              </li>
            ))}
          </ul>
        </details>
      )}

      {/* What still needs a specialist */}
      <div className="bg-paper-50 border border-ink-900/8 rounded-sm p-5 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Info className="w-4 h-4 text-brand-500" aria-hidden="true" />
          <h3 className="font-display text-[15px] text-ink-900">A specialist still needs to confirm</h3>
        </div>
        <ul className="font-sans text-[13.5px] text-ink-700 space-y-1.5 leading-relaxed list-disc pl-5">
          {data.followUpFromSpecialist.map(f => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="bg-ink-900 text-white rounded-sm p-6 md:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="font-display text-[18px] md:text-[20px]">
            Match with a SEIS specialist <em className="not-italic md:italic text-brand-300">in 24 hours</em>
          </p>
          <p className="font-sans text-[13.5px] text-paper-300 mt-1">
            We send your diagnostic to up to three vetted scheme specialists. Free to you, no obligation.
          </p>
        </div>
        <button onClick={onOpenModal} className="btn-primary whitespace-nowrap" type="button">
          Get matched <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function SchemePill({
  label,
  verdict,
}: {
  label: string;
  verdict: DiagnosticPayload['schemes']['seis'];
}) {
  return (
    <div className={`border rounded-sm p-4 ${SCHEME_PILL[verdict]}`}>
      <p className="font-display text-[20px] tracking-tight">{label}</p>
      <p className="font-sans text-[13px] mt-0.5">{SCHEME_LABEL[verdict]}</p>
    </div>
  );
}

/**
 * Inline CTA that adapts its tone to the diagnostic verdict.
 * - All eligible       -> "make it real" — push toward execution
 * - Any borderline     -> "confirm the grey" — push toward expert review
 * - All / any ineligible -> "second opinion" — honest framing about restructuring options
 */
function PrimaryCta({
  verdicts,
  onOpenModal,
}: {
  verdicts: DiagnosticPayload['schemes'];
  onOpenModal: () => void;
}) {
  const arr = [verdicts.seis, verdicts.eis, verdicts.kic];
  const hasFail = arr.includes('ineligible');
  const hasWarn = arr.includes('borderline');
  const allOk  = arr.every(v => v === 'eligible');

  let headline: string;
  let body: string;
  let buttonLabel: string;

  if (allOk) {
    headline = 'Looks clean. Make it real.';
    body = "Public-data tests pass. The next step is the actual paperwork — advance assurance, share issue documents, SEIS1 filing, and SEIS3 distribution. A specialist runs that whole pack so investors see a clean process.";
    buttonLabel = 'Get matched with a specialist';
  } else if (hasFail && !allOk) {
    headline = "Don't write SEIS off yet.";
    body = "Most 'ineligible' verdicts from public data have options around them — a younger trading subsidiary, an IP carve-out into a fresh vehicle, or a knowledge-intensive route. A specialist can model whether any of those open scheme access for your situation.";
    buttonLabel = 'Get a specialist second opinion';
  } else if (hasWarn) {
    headline = 'Confirm the borderline tests.';
    body = "The amber-flagged tests above can swing either way depending on facts public data can't see (gross assets, employees, use of funds). A specialist confirms whether you qualify and drafts the application narrative HMRC needs to see.";
    buttonLabel = 'Talk to a specialist';
  } else {
    headline = 'Want help with the paperwork?';
    body = 'Specialist accountants in our network handle the full SEIS and EIS lifecycle — advance assurance through SEIS1 compliance through three-year monitoring.';
    buttonLabel = 'Get matched';
  }

  return (
    <div className="bg-white border border-ink-900/10 rounded-sm p-5 md:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
      <div className="flex-1">
        <p className="font-display text-[18px] md:text-[20px] text-ink-900 leading-snug mb-1.5">
          {headline}
        </p>
        <p className="font-sans text-[13.5px] text-ink-700 leading-relaxed max-w-2xl">
          {body}
        </p>
      </div>
      <button
        onClick={onOpenModal}
        type="button"
        className="btn-primary whitespace-nowrap self-start sm:self-center"
      >
        {buttonLabel} <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </button>
    </div>
  );
}

function ExplainerCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
      {[
        {
          title: 'What this checks',
          body: 'Company age against SEIS (3y), EIS (7y), and KIC (10y) windows. Active status. UK Ltd structure. SIC codes against the excluded-trades list.',
        },
        {
          title: "What it doesn't check",
          body: 'Gross assets (£350k SEIS / £15m EIS), employee count (25 / 250 / 500), use-of-funds plan, control test, risk-to-capital. These need an accountant.',
        },
        {
          title: 'Source',
          body: 'Companies House public data API. We never store your search. Free to use.',
        },
      ].map((c) => (
        <div key={c.title} className="bg-white border border-ink-900/10 rounded-sm p-5">
          <p className="font-display text-[16px] text-ink-900 mb-2">{c.title}</p>
          <p className="font-sans text-[13.5px] text-ink-700 leading-relaxed">{c.body}</p>
        </div>
      ))}
    </div>
  );
}
