'use client';

// components/tools/RdCalculator.tsx - Paper Tape edition
// Interactive R&D tax credit estimator.
// Calculation logic preserved exactly - only visual treatment updated.
// Uses HMRC merged scheme rates (April 2024 onwards).

import { useState, useMemo } from 'react';
import { Calculator, ChevronDown, Info } from 'lucide-react';

interface Inputs {
  staffCost: string;
  contractorCost: string;
  softwareCost: string;
  consumablesCost: string;
  totalExpenditure: string;
  isProfitable: 'yes' | 'no' | '';
  sector: string;
}

const SECTORS = [
  'Software / SaaS',
  'Fintech / Financial Technology',
  'Life Sciences / Biotech',
  'Medtech / Healthtech',
  'Gaming',
  'Advanced Manufacturing',
  'Clean Technology / Renewables',
  'Aerospace / Defence',
  'Agriculture Technology',
  'Other Technology',
];

const CT_RATE = 0.25;
const STANDARD_CREDIT = 0.20;
const INTENSIVE_CREDIT = 0.27;
const CONTRACTOR_RATE = 0.65;
const INTENSIVE_THRESHOLD = 0.30;

function parseCurrency(val: string): number {
  const n = parseFloat(val.replace(/[^0-9.]/g, ''));
  return isNaN(n) ? 0 : n;
}

function formatCurrency(val: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(val);
}

// Editorial step heading inline helper.
function StepHeading({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-baseline gap-3 mb-3">
      <span className="font-display italic text-brand-500 text-[16px] flex-shrink-0">Step {num}.</span>
      <span className="font-display text-[15px] text-ink-900 tracking-tight leading-snug">{label}</span>
    </div>
  );
}

export default function RdCalculator() {
  const [inputs, setInputs] = useState<Inputs>({
    staffCost: '',
    contractorCost: '',
    softwareCost: '',
    consumablesCost: '',
    totalExpenditure: '',
    isProfitable: '',
    sector: '',
  });
  const [showBreakdown, setShowBreakdown] = useState(false);

  const set = (key: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setInputs(prev => ({ ...prev, [key]: e.target.value }));

  const result = useMemo(() => {
    const staff = parseCurrency(inputs.staffCost);
    const contractor = parseCurrency(inputs.contractorCost) * CONTRACTOR_RATE;
    const software = parseCurrency(inputs.softwareCost);
    const consumables = parseCurrency(inputs.consumablesCost);
    const totalRd = staff + contractor + software + consumables;
    const totalExp = parseCurrency(inputs.totalExpenditure);

    if (totalRd === 0) return null;

    const rdIntensityRatio = totalExp > 0 ? totalRd / totalExp : 0;
    const isIntensive = rdIntensityRatio > INTENSIVE_THRESHOLD;
    const creditRate = isIntensive ? INTENSIVE_CREDIT : STANDARD_CREDIT;
    const grossCredit = totalRd * creditRate;

    const isProfitable = inputs.isProfitable === 'yes';
    const cashValue = isProfitable
      ? `${formatCurrency(grossCredit)} reduction in your Corporation Tax bill`
      : `${formatCurrency(grossCredit)} cash payment from HMRC`;

    return {
      staff, contractor, software, consumables,
      totalRd, totalExp, rdIntensityRatio, isIntensive,
      creditRate, grossCredit, cashValue,
      contractorRaw: parseCurrency(inputs.contractorCost),
    };
  }, [inputs]);

  const isComplete = inputs.isProfitable !== '' && result !== null;

  const inputClass =
    'w-full px-4 py-3 rounded-sm border border-ink-900/15 bg-white text-ink-900 placeholder:text-ink-500 text-[14px] focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors';

  return (
    <div className="border border-ink-900/15 rounded-sm overflow-hidden bg-white">
      {/* Header - ink-900 with cream text */}
      <div
        className="px-6 py-5 flex items-center gap-4 border-b border-ink-900/10"
        style={{ backgroundColor: 'var(--ink-900)' }}
      >
        <div
          className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', color: 'var(--paper-100)' }}
        >
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <p
            className="font-display text-[18px] tracking-tight leading-tight"
            style={{ color: 'var(--paper-100)' }}
          >
            R&amp;D tax credit <em className="italic" style={{ color: '#AFA9EC' }}>estimator</em>
          </p>
          <p
            className="font-sans text-[11px] mt-1 tracking-[0.12em] uppercase"
            style={{ color: 'rgba(245, 242, 234, 0.65)' }}
          >
            HMRC merged scheme &middot; April 2024 onwards
          </p>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-8">

        {/* Step 1: Sector */}
        <div>
          <StepHeading num="01" label="Your sector" />
          <select
            value={inputs.sector}
            onChange={set('sector')}
            className={inputClass + ' appearance-none cursor-pointer'}
          >
            <option value="">Select your sector ...</option>
            {SECTORS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {/* Step 2: Qualifying costs */}
        <div>
          <StepHeading num="02" label="Qualifying R&D expenditure (annual)" />
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {[
              { key: 'staffCost' as keyof Inputs, label: 'Staff costs (salary + employer NI + pension)', placeholder: '80000', tooltip: 'Include only the proportion of staff time spent on qualifying R&D projects' },
              { key: 'contractorCost' as keyof Inputs, label: 'Contractor / subcontractor payments', placeholder: '20000', tooltip: 'Entered at full cost, HMRC applies 65% rate automatically' },
              { key: 'softwareCost' as keyof Inputs, label: 'Software licences & cloud computing (R&D use only)', placeholder: '5000', tooltip: 'Include only software used directly in qualifying R&D, not general business tools' },
              { key: 'consumablesCost' as keyof Inputs, label: 'Consumable materials used in R&D', placeholder: '0', tooltip: 'Physical materials consumed or transformed during the R&D process' },
            ].map(field => (
              <div key={field.key}>
                <label className="block font-sans text-[13px] text-ink-900 mb-2 font-medium leading-snug">{field.label}</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-500 text-[14px]">&pound;</span>
                  <input
                    type="number"
                    min="0"
                    placeholder={field.placeholder}
                    value={inputs[field.key]}
                    onChange={set(field.key)}
                    className={inputClass + ' pl-7'}
                  />
                </div>
                <p className="font-sans text-[11px] text-ink-500 mt-2 flex items-start gap-1.5 leading-relaxed">
                  <Info className="w-3 h-3 flex-shrink-0 mt-0.5 text-brand-500" />
                  {field.tooltip}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Step 3: Total expenditure */}
        <div>
          <StepHeading num="03" label="Total company expenditure (annual)" />
          <div className="relative max-w-sm mt-2">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-500 text-[14px]">&pound;</span>
            <input
              type="number"
              min="0"
              placeholder="250000"
              value={inputs.totalExpenditure}
              onChange={set('totalExpenditure')}
              className={inputClass + ' pl-7'}
            />
          </div>
          <p className="font-sans text-[11px] text-ink-500 mt-2 flex items-start gap-1.5 leading-relaxed max-w-sm">
            <Info className="w-3 h-3 flex-shrink-0 mt-0.5 text-brand-500" />
            Used to determine R&amp;D intensity ratio. If qualifying R&amp;D exceeds 30% of total spend, you qualify for the enhanced 27% credit rate.
          </p>
        </div>

        {/* Step 4: Profitable? */}
        <div>
          <StepHeading num="04" label="Is your company currently profitable?" />
          <div className="flex gap-3 mt-2">
            {(['yes', 'no'] as const).map(val => (
              <button
                key={val}
                onClick={() => setInputs(prev => ({ ...prev, isProfitable: val }))}
                className={`flex-1 max-w-[200px] py-3.5 px-4 rounded-sm border text-[13px] font-medium transition-colors tracking-[0.1em] uppercase ${
                  inputs.isProfitable === val
                    ? 'bg-brand-500 text-white border-brand-500'
                    : 'bg-white text-ink-900 border-ink-900/20 hover:border-brand-500'
                }`}
                type="button"
              >
                {val === 'yes' ? 'Yes, paying CT' : 'No, loss-making'}
              </button>
            ))}
          </div>
        </div>

        {/* Result card */}
        {isComplete && result && (
          <div className="border border-ink-900/15 rounded-sm p-6 md:p-7 bg-paper-50 relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-500" aria-hidden="true" />
            <span className="eyebrow mb-3 block">ESTIMATED CREDIT</span>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="font-display italic text-brand-500 text-[44px] leading-none tracking-tight">
                {formatCurrency(result.grossCredit)}
              </span>
              <span className="font-display italic text-brand-500 text-[18px] leading-none">
                / year
              </span>
            </div>
            <p className="font-sans text-[14px] text-ink-700 mb-6 leading-relaxed">{result.cashValue}</p>

            <div className="grid sm:grid-cols-3 gap-2 mb-5">
              <div className="bg-white rounded-sm p-4 border border-ink-900/10">
                <p className="font-mono text-[10px] text-ink-500 mb-2 tracking-[0.12em] uppercase">Total qualifying</p>
                <p className="font-display text-[17px] text-ink-900 tracking-tight">{formatCurrency(result.totalRd)}</p>
              </div>
              <div className="bg-white rounded-sm p-4 border border-ink-900/10">
                <p className="font-mono text-[10px] text-ink-500 mb-2 tracking-[0.12em] uppercase">Credit rate</p>
                <p className="font-display text-[17px] text-ink-900 tracking-tight">
                  {(result.creditRate * 100).toFixed(0)}%
                  {result.isIntensive && <span className="font-sans text-[10px] text-brand-500 ml-2 tracking-wide uppercase">Intensive</span>}
                </p>
              </div>
              <div className="bg-white rounded-sm p-4 border border-ink-900/10">
                <p className="font-mono text-[10px] text-ink-500 mb-2 tracking-[0.12em] uppercase">R&amp;D intensity</p>
                <p className="font-display text-[17px] text-ink-900 tracking-tight">
                  {result.totalExp > 0 ? `${(result.rdIntensityRatio * 100).toFixed(0)}%` : '-'}
                </p>
              </div>
            </div>

            {/* Breakdown toggle */}
            <button
              onClick={() => setShowBreakdown(b => !b)}
              className="flex items-center gap-1.5 font-display italic text-[14px] text-brand-500 hover:text-brand-700 mb-4 transition-colors"
              type="button"
              aria-expanded={showBreakdown}
            >
              <ChevronDown className={`w-4 h-4 transition-transform ${showBreakdown ? 'rotate-180' : ''}`} aria-hidden="true" />
              {showBreakdown ? 'Hide' : 'Show'} cost breakdown
            </button>

            {showBreakdown && (
              <div className="space-y-0 text-[13px] border-t border-ink-900/10 pt-3">
                {[
                  { label: 'Staff costs (100%)', value: result.staff },
                  { label: `Contractor costs (${result.contractorRaw > 0 ? `${formatCurrency(result.contractorRaw)} at 65%` : '-'})`, value: result.contractor },
                  { label: 'Software & cloud costs (100%)', value: result.software },
                  { label: 'Consumable materials (100%)', value: result.consumables },
                ].map(row => row.value > 0 && (
                  <div key={row.label} className="flex justify-between py-2 border-b border-dotted border-ink-300 text-ink-700">
                    <span className="font-sans">{row.label}</span>
                    <span className="font-display italic text-ink-900">{formatCurrency(row.value)}</span>
                  </div>
                ))}
                <div className="flex justify-between py-3 border-t border-ink-900/20 mt-1">
                  <span className="font-display text-[14px] text-ink-900 tracking-tight">Total qualifying expenditure</span>
                  <span className="font-display italic text-[15px] text-ink-900">{formatCurrency(result.totalRd)}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-display text-[14px] text-brand-500 tracking-tight">
                    Credit ({(result.creditRate * 100).toFixed(0)}%)
                  </span>
                  <span className="font-display italic text-[15px] text-brand-500">{formatCurrency(result.grossCredit)}</span>
                </div>
              </div>
            )}

            <div className="mt-5 pt-4 border-t border-ink-900/10">
              <p className="font-sans text-[11.5px] text-ink-500 leading-relaxed mb-5">
                This is an estimate based on HMRC merged scheme rates. Actual qualifying expenditure depends on HMRC&apos;s assessment of your specific activities. A specialist accountant review typically increases claim values by 20 to 40% by identifying costs not included in self-prepared estimates.
              </p>
              <a
                href="#"
                onClick={e => { e.preventDefault(); document.dispatchEvent(new CustomEvent('open-lead-modal')); }}
                className="btn-primary text-center block w-full sm:inline-block sm:w-auto"
              >
                Get matched with an R&amp;D specialist &nbsp;&rarr;
              </a>
            </div>
          </div>
        )}

        {!isComplete && result !== null && (
          <p className="font-sans text-[13px] text-ink-500 text-center py-2 italic">
            Answer all four steps above to see your estimate.
          </p>
        )}
      </div>
    </div>
  );
}
