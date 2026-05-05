'use client';

// components/tools/RunwayCalculator.tsx
// Interactive cash runway calculator for the cash flow forecasting guide.
// Calculates months of runway given current cash, monthly burn, and
// optional inputs for expected R&D credit receipts and upcoming round.
// Provides a traffic-light assessment of runway health.
//
// Design matches RdCalculator exactly: ink-900 header, step workflow,
// italic step marks, same input class, results panel with CTA.

import { useState, useMemo } from 'react';
import { Gauge } from 'lucide-react';

interface Inputs {
  currentCash: string;
  monthlyBurn: string;
  monthlyRevenue: string;
  expectedRdCredit: string;
  rdCreditMonth: string;
  plannedRaise: string;
}

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

function StepHeading({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-baseline gap-3 mb-3">
      <span className="font-display italic text-brand-500 text-[16px] flex-shrink-0">Step {num}.</span>
      <span className="font-display text-[15px] text-ink-900 tracking-tight leading-snug">{label}</span>
    </div>
  );
}

export default function RunwayCalculator() {
  const [inputs, setInputs] = useState<Inputs>({
    currentCash: '',
    monthlyBurn: '',
    monthlyRevenue: '',
    expectedRdCredit: '',
    rdCreditMonth: '',
    plannedRaise: '',
  });

  const set = (key: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputs(prev => ({ ...prev, [key]: e.target.value }));

  const result = useMemo(() => {
    const cash = parseCurrency(inputs.currentCash);
    const burn = parseCurrency(inputs.monthlyBurn);
    const revenue = parseCurrency(inputs.monthlyRevenue);
    const rdCredit = parseCurrency(inputs.expectedRdCredit);
    const rdMonth = parseCurrency(inputs.rdCreditMonth);
    const netBurn = Math.max(burn - revenue, 0);

    if (cash === 0 || burn === 0) return null;

    // Baseline runway: current cash divided by net burn (burn minus revenue)
    const baselineRunway = netBurn > 0 ? cash / netBurn : Infinity;

    // Runway including R&D credit: if R&D credit expected within the
    // baseline runway window, extend. Otherwise baseline applies.
    let extendedRunway = baselineRunway;
    if (rdCredit > 0 && rdMonth > 0 && rdMonth < baselineRunway && netBurn > 0) {
      // Cash at the point R&D credit arrives, plus the credit itself,
      // then divide remaining cash by net burn for additional months.
      const cashAtCreditMonth = cash - (netBurn * rdMonth);
      const cashAfterCredit = cashAtCreditMonth + rdCredit;
      if (cashAfterCredit > 0) {
        const additionalMonths = cashAfterCredit / netBurn;
        extendedRunway = rdMonth + additionalMonths;
      }
    }

    // Traffic light:
    // - Green: 18+ months (comfortable, can plan next raise deliberately)
    // - Amber: 9-18 months (planning window, start raise prep now)
    // - Red: under 9 months (active raise territory)
    let status: 'green' | 'amber' | 'red';
    let statusLabel: string;
    let statusAdvice: string;
    if (extendedRunway >= 18) {
      status = 'green';
      statusLabel = 'Comfortable';
      statusAdvice = 'With 18+ months of runway, you have time to plan the next round deliberately. Focus on hitting milestones that justify an up-round valuation.';
    } else if (extendedRunway >= 9) {
      status = 'amber';
      statusLabel = 'Planning window';
      statusAdvice = 'With 9-18 months of runway, you are in the typical pre-raise window. Start preparing the data room, financial model, and investor outreach now. Fundraising typically takes 3-6 months end to end.';
    } else {
      status = 'red';
      statusLabel = 'Raise now';
      statusAdvice = 'With less than 9 months of runway, you are in active fundraising territory. Bridge financing, debt, or emergency cost reduction may be needed if the round takes longer than expected. Consider a 3-month contingency.';
    }

    const planned = parseCurrency(inputs.plannedRaise);
    let postRaiseRunway: number | null = null;
    if (planned > 0 && netBurn > 0) {
      postRaiseRunway = (cash + planned + rdCredit) / netBurn;
    }

    return {
      cash,
      burn,
      revenue,
      netBurn,
      rdCredit,
      baselineRunway,
      extendedRunway,
      status,
      statusLabel,
      statusAdvice,
      postRaiseRunway,
    };
  }, [inputs]);

  const inputClass =
    'w-full px-4 py-3 rounded-sm border border-ink-900/15 bg-white text-ink-900 placeholder:text-ink-500 text-[14px] focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors';

  const statusColourMap = {
    green: { bg: 'bg-green-50 border-green-200', text: 'text-green-800', dot: 'bg-green-500' },
    amber: { bg: 'bg-amber-50 border-amber-200', text: 'text-amber-800', dot: 'bg-amber-500' },
    red:   { bg: 'bg-red-50 border-red-200',     text: 'text-red-800',   dot: 'bg-red-500' },
  };

  return (
    <div className="border border-ink-900/15 rounded-sm overflow-hidden bg-white">
      {/* Header */}
      <div
        className="px-6 py-5 flex items-center gap-4 border-b border-ink-900/10"
        style={{ backgroundColor: 'var(--ink-900)' }}
      >
        <div
          className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', color: 'var(--paper-100)' }}
        >
          <Gauge className="w-5 h-5" />
        </div>
        <div>
          <p
            className="font-display text-[18px] tracking-tight leading-tight"
            style={{ color: 'var(--paper-100)' }}
          >
            Startup runway <em className="italic" style={{ color: '#AFA9EC' }}>calculator</em>
          </p>
          <p
            className="font-sans text-[11px] mt-1 tracking-[0.12em] uppercase"
            style={{ color: 'rgba(245, 242, 234, 0.65)' }}
          >
            Cash, burn, R&amp;D credit timing &middot; Scenario planning
          </p>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-8">

        {/* Step 1: Current position */}
        <div>
          <StepHeading num="01" label="Current cash position" />
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="rc-cash" className="block font-sans text-[13px] text-ink-900 mb-2 font-medium">
                Current cash balance
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-500 text-[14px]">&pound;</span>
                <input
                  id="rc-cash"
                  inputMode="numeric"
                  value={inputs.currentCash}
                  onChange={set('currentCash')}
                  placeholder="500000"
                  className={inputClass + ' pl-7'}
                />
              </div>
            </div>
            <div>
              <label htmlFor="rc-burn" className="block font-sans text-[13px] text-ink-900 mb-2 font-medium">
                Monthly gross burn
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-500 text-[14px]">&pound;</span>
                <input
                  id="rc-burn"
                  inputMode="numeric"
                  value={inputs.monthlyBurn}
                  onChange={set('monthlyBurn')}
                  placeholder="60000"
                  className={inputClass + ' pl-7'}
                />
              </div>
            </div>
            <div>
              <label htmlFor="rc-revenue" className="block font-sans text-[13px] text-ink-900 mb-2 font-medium">
                Monthly revenue (optional)
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-500 text-[14px]">&pound;</span>
                <input
                  id="rc-revenue"
                  inputMode="numeric"
                  value={inputs.monthlyRevenue}
                  onChange={set('monthlyRevenue')}
                  placeholder="15000"
                  className={inputClass + ' pl-7'}
                />
              </div>
              <p className="font-sans text-[11px] text-ink-500 mt-1.5 leading-relaxed">
                Net burn = gross burn minus revenue
              </p>
            </div>
          </div>
        </div>

        {/* Step 2: Expected R&D credit */}
        <div>
          <StepHeading num="02" label="Expected R&D credit (optional)" />
          <p className="font-sans text-[13px] text-ink-700 mb-4 leading-relaxed">
            For loss-making startups, the annual R&amp;D credit is often 1-2 months of extra runway. Estimate the amount and how many months until HMRC pays out.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="rc-rd" className="block font-sans text-[13px] text-ink-900 mb-2 font-medium">
                Expected R&amp;D credit payment
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-500 text-[14px]">&pound;</span>
                <input
                  id="rc-rd"
                  inputMode="numeric"
                  value={inputs.expectedRdCredit}
                  onChange={set('expectedRdCredit')}
                  placeholder="80000"
                  className={inputClass + ' pl-7'}
                />
              </div>
            </div>
            <div>
              <label htmlFor="rc-rd-month" className="block font-sans text-[13px] text-ink-900 mb-2 font-medium">
                Months until R&amp;D credit arrives
              </label>
              <input
                id="rc-rd-month"
                inputMode="numeric"
                value={inputs.rdCreditMonth}
                onChange={set('rdCreditMonth')}
                placeholder="4"
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* Step 3: Planned raise */}
        <div>
          <StepHeading num="03" label="Planned raise (optional)" />
          <div>
            <label htmlFor="rc-raise" className="block font-sans text-[13px] text-ink-900 mb-2 font-medium">
              Size of next planned round
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-500 text-[14px]">&pound;</span>
              <input
                id="rc-raise"
                inputMode="numeric"
                value={inputs.plannedRaise}
                onChange={set('plannedRaise')}
                placeholder="1500000"
                className={inputClass + ' pl-7'}
              />
            </div>
            <p className="font-sans text-[11px] text-ink-500 mt-1.5 leading-relaxed">
              Shows runway if the round closes at current burn rate
            </p>
          </div>
        </div>

        {/* Results */}
        {result && (
          <div className="pt-6 border-t border-ink-900/10">
            <p className="eyebrow mb-4">&sect; YOUR RUNWAY</p>

            <div className="grid sm:grid-cols-2 gap-3 mb-5">
              <div className="bg-paper-100 border border-ink-900/10 rounded-sm p-5">
                <p className="font-sans text-[11px] text-ink-500 tracking-[0.14em] uppercase mb-2">
                  Baseline runway
                </p>
                <p className="font-display text-[28px] text-ink-900 leading-none tracking-tight">
                  {isFinite(result.baselineRunway) ? `${result.baselineRunway.toFixed(1)} mo` : 'Indefinite'}
                </p>
                <p className="font-sans text-[12px] text-ink-700 mt-2 leading-relaxed">
                  Cash &divide; net burn ({formatCurrency(result.netBurn)}/mo)
                </p>
              </div>
              <div className="bg-paper-100 border border-ink-900/10 rounded-sm p-5">
                <p className="font-sans text-[11px] text-ink-500 tracking-[0.14em] uppercase mb-2">
                  Including R&amp;D credit
                </p>
                <p className="font-display text-[28px] text-ink-900 leading-none tracking-tight">
                  {isFinite(result.extendedRunway) ? `${result.extendedRunway.toFixed(1)} mo` : 'Indefinite'}
                </p>
                <p className="font-sans text-[12px] text-ink-700 mt-2 leading-relaxed">
                  {result.rdCredit > 0
                    ? `+ ${formatCurrency(result.rdCredit)} HMRC receipt`
                    : 'Add R&D estimate above'}
                </p>
              </div>
            </div>

            {/* Traffic light */}
            <div className={`flex items-start gap-4 border rounded-sm p-5 ${statusColourMap[result.status].bg}`}>
              <span
                className={`w-3 h-3 rounded-full ${statusColourMap[result.status].dot} flex-shrink-0 mt-1.5`}
                aria-hidden="true"
              />
              <div>
                <p className={`font-display text-[15px] mb-1 tracking-tight leading-snug ${statusColourMap[result.status].text}`}>
                  {result.statusLabel}
                </p>
                <p className="font-sans text-[13px] text-ink-700 leading-relaxed">
                  {result.statusAdvice}
                </p>
              </div>
            </div>

            {result.postRaiseRunway !== null && (
              <div className="mt-4 bg-brand-50 border border-brand-200 rounded-sm p-5">
                <p className="font-sans text-[11px] text-brand-700 tracking-[0.14em] uppercase mb-2">
                  Post-raise runway
                </p>
                <p className="font-display text-[24px] text-ink-900 leading-none tracking-tight">
                  {result.postRaiseRunway.toFixed(1)} months
                </p>
                <p className="font-sans text-[12px] text-ink-700 mt-2 leading-relaxed">
                  Assumes current burn rate holds post-raise. Typical Series A targets 18-24 months of post-raise runway.
                </p>
              </div>
            )}

            {/* CTA: result is the conversion moment. Status-aware headline
                keeps it contextual — red gets urgent framing, green gets
                planning framing. */}
            <div className="mt-5">
              <a
                href="#"
                onClick={e => { e.preventDefault(); document.dispatchEvent(new CustomEvent('open-lead-modal')); }}
                className="btn-primary text-center block w-full sm:inline-block sm:w-auto"
              >
                {result.status === 'red'
                  ? 'Talk to a specialist now'
                  : result.status === 'amber'
                  ? 'Get matched with a cash flow specialist'
                  : 'Match with a cash flow specialist'} &nbsp;&rarr;
              </a>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <p className="font-sans text-[11.5px] text-ink-500 leading-relaxed border-t border-ink-900/10 pt-4">
          This calculator provides a planning estimate based on the figures entered. It does not account for seasonal burn variance, CAC payback lag, deferred revenue unwinding, or other cash timing features specific to your business. A specialist accountant can build a proper 13-week rolling cash flow and 18-month integrated forecast fitted to your revenue model.
        </p>
      </div>
    </div>
  );
}
