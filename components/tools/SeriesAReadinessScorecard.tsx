'use client';

// components/tools/SeriesAReadinessScorecard.tsx
// Interactive Series A readiness assessment for the growth planning guide.
// Reader answers 8 questions across commercial, financial, operational, and
// structural readiness. Each answer carries a weighted score; the total
// maps to a traffic-light readiness rating with specific next-step advice.
// Design matches RdCalculator and SeisChecker patterns exactly.

import { useState, useMemo } from 'react';
import { Target } from 'lucide-react';

interface Question {
  id: string;
  category: string;
  question: string;
  options: Array<{ label: string; score: number }>;
}

const QUESTIONS: Question[] = [
  // Commercial
  {
    id: 'arr',
    category: 'Commercial',
    question: 'Current annualised revenue (ARR or equivalent annual run rate)',
    options: [
      { label: 'Under \u00A3500k', score: 0 },
      { label: '\u00A3500k to \u00A31m', score: 1 },
      { label: '\u00A31m to \u00A33m', score: 3 },
      { label: 'Over \u00A33m', score: 4 },
    ],
  },
  {
    id: 'growth',
    category: 'Commercial',
    question: 'Revenue growth rate over the last 12 months',
    options: [
      { label: 'Under 50%', score: 0 },
      { label: '50-100%', score: 1 },
      { label: '100-200%', score: 3 },
      { label: 'Over 200%', score: 4 },
    ],
  },
  {
    id: 'retention',
    category: 'Commercial',
    question: 'Net revenue retention (recurring revenue businesses) or gross margin (other models)',
    options: [
      { label: 'Below 80% NRR or under 40% gross margin', score: 0 },
      { label: '80-100% NRR or 40-60% gross margin', score: 1 },
      { label: '100-120% NRR or 60-75% gross margin', score: 3 },
      { label: 'Over 120% NRR or over 75% gross margin', score: 4 },
    ],
  },
  // Financial
  {
    id: 'model',
    category: 'Financial',
    question: 'Financial model maturity',
    options: [
      { label: 'Rough spreadsheet with revenue assumptions', score: 0 },
      { label: 'Three-statement model, monthly granularity for year 1', score: 2 },
      { label: 'Three-statement model tied to operational drivers (customers, ARPU, CAC, churn), 24-month monthly plus 24-month quarterly', score: 4 },
    ],
  },
  {
    id: 'runway',
    category: 'Financial',
    question: 'Current runway on the current burn rate',
    options: [
      { label: 'Under 6 months', score: 0 },
      { label: '6-12 months', score: 1 },
      { label: '12-18 months', score: 3 },
      { label: 'Over 18 months', score: 4 },
    ],
  },
  // Operational
  {
    id: 'accounts',
    category: 'Operational',
    question: 'Statutory and management accounts',
    options: [
      { label: 'Last year\u2019s statutory accounts overdue or in draft', score: 0 },
      { label: 'Filed on time, but no monthly management accounts', score: 1 },
      { label: 'Clean statutory accounts and monthly management accounts bridging to current month', score: 4 },
    ],
  },
  // Structural
  {
    id: 'captable',
    category: 'Structural',
    question: 'Cap table and share class structure',
    options: [
      { label: 'Spreadsheet only, or Companies House filings only', score: 0 },
      { label: 'Cap table maintained, but uses model articles', score: 1 },
      { label: 'Clean cap table, investor-ready articles, vesting and leaver provisions, EMI pool reserved', score: 4 },
    ],
  },
  {
    id: 'ip',
    category: 'Structural',
    question: 'IP assignment and data room readiness',
    options: [
      { label: 'Some contracts have IP assignment, others do not', score: 0 },
      { label: 'Standard contracts include IP assignment, but no data room', score: 2 },
      { label: 'Complete IP assignment from every employee, contractor, and founder; full data room with commercial, financial, tax, and legal folders', score: 4 },
    ],
  },
];

const MAX_SCORE = QUESTIONS.reduce(
  (sum, q) => sum + Math.max(...q.options.map(o => o.score)),
  0
);

function StepHeading({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-baseline gap-3 mb-3">
      <span className="font-display italic text-brand-500 text-[16px] flex-shrink-0">Step {num}.</span>
      <span className="font-display text-[15px] text-ink-900 tracking-tight leading-snug">{label}</span>
    </div>
  );
}

export default function SeriesAReadinessScorecard() {
  const [answers, setAnswers] = useState<Record<string, number | null>>(
    Object.fromEntries(QUESTIONS.map(q => [q.id, null]))
  );

  const answered = Object.values(answers).filter(v => v !== null).length;
  const allAnswered = answered === QUESTIONS.length;

  const score = useMemo(() => {
    if (!allAnswered) return null;
    return QUESTIONS.reduce((sum, q) => {
      const choice = answers[q.id];
      if (choice === null) return sum;
      return sum + q.options[choice].score;
    }, 0);
  }, [answers, allAnswered]);

  const assessment = useMemo(() => {
    if (score === null) return null;
    const pct = (score / MAX_SCORE) * 100;

    if (pct >= 75) {
      return {
        status: 'green' as const,
        label: 'Ready to start conversations',
        body: 'Your commercial metrics, financial infrastructure, and structural readiness are at the level where founders typically start Series A conversations. Preparation from this point is about tightening the pitch, running a competitive process, and selecting the right lead investor rather than fixing fundamentals.',
      };
    }
    if (pct >= 50) {
      return {
        status: 'amber' as const,
        label: 'Close, with 3-6 months of preparation',
        body: 'Commercial metrics or financial infrastructure need tightening before starting investor conversations. The typical preparation window is 3-6 months: fixing the areas scoring low, getting management accounts bridged monthly, completing the data room, and demonstrating 2-3 months of clean reporting before outreach.',
      };
    }
    return {
      status: 'red' as const,
      label: 'Earlier than Series A',
      body: 'Metrics suggest seed-stage or pre-Series A positioning. Raising now as a Series A is likely to result in a challenging process and a weaker valuation than a 6-12 month delay to hit the milestones expected at Series A. Focus on commercial traction and tightening operations before starting investor conversations.',
    };
  }, [score]);

  const categoryScores = useMemo(() => {
    if (!allAnswered) return null;
    const byCategory: Record<string, { earned: number; max: number }> = {};
    QUESTIONS.forEach(q => {
      const choice = answers[q.id];
      const maxQ = Math.max(...q.options.map(o => o.score));
      if (!byCategory[q.category]) byCategory[q.category] = { earned: 0, max: 0 };
      byCategory[q.category].max += maxQ;
      if (choice !== null) {
        byCategory[q.category].earned += q.options[choice].score;
      }
    });
    return byCategory;
  }, [answers, allAnswered]);

  const statusColourMap = {
    green: { bg: 'bg-green-50 border-green-200', text: 'text-green-800', dot: 'bg-green-500' },
    amber: { bg: 'bg-amber-50 border-amber-200', text: 'text-amber-800', dot: 'bg-amber-500' },
    red:   { bg: 'bg-red-50 border-red-200',     text: 'text-red-800',   dot: 'bg-red-500' },
  };

  // Group questions by category for rendering
  const grouped = useMemo(() => {
    const groups: Record<string, Question[]> = {};
    QUESTIONS.forEach(q => {
      if (!groups[q.category]) groups[q.category] = [];
      groups[q.category].push(q);
    });
    return groups;
  }, []);

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
          <Target className="w-5 h-5" />
        </div>
        <div>
          <p
            className="font-display text-[18px] tracking-tight leading-tight"
            style={{ color: 'var(--paper-100)' }}
          >
            Series A readiness <em className="italic" style={{ color: '#AFA9EC' }}>scorecard</em>
          </p>
          <p
            className="font-sans text-[11px] mt-1 tracking-[0.12em] uppercase"
            style={{ color: 'rgba(245, 242, 234, 0.65)' }}
          >
            8 questions &middot; Commercial, financial, operational, structural
          </p>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-8">

        {/* Progress indicator */}
        <div className="flex items-center justify-between pb-4 border-b border-ink-900/10">
          <div>
            <p className="font-sans text-[13px] text-ink-700">
              <span className="font-medium">{answered}</span> of <span className="font-medium">{QUESTIONS.length}</span> answered
            </p>
          </div>
          <div className="w-32 h-1.5 bg-ink-900/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-500 transition-all duration-300"
              style={{ width: `${(answered / QUESTIONS.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Questions grouped by category */}
        {Object.entries(grouped).map(([category, qs], catIndex) => (
          <div key={category}>
            <StepHeading num={String(catIndex + 1).padStart(2, '0')} label={category} />
            <div className="space-y-5">
              {qs.map(q => {
                const current = answers[q.id];
                return (
                  <div key={q.id}>
                    <p className="font-sans text-[13.5px] text-ink-900 font-medium mb-3 leading-snug">
                      {q.question}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((opt, i) => {
                        const isSelected = current === i;
                        return (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setAnswers(prev => ({ ...prev, [q.id]: i }))}
                            className={`w-full text-left px-4 py-3 border rounded-sm transition-colors flex items-start gap-3 ${
                              isSelected
                                ? 'bg-brand-500 border-brand-500 text-white'
                                : 'bg-white border-ink-900/15 text-ink-700 hover:border-brand-500'
                            }`}
                            aria-pressed={isSelected}
                          >
                            <span
                              className={`flex-shrink-0 w-4 h-4 rounded-full border mt-0.5 transition-colors ${
                                isSelected
                                  ? 'bg-white border-white'
                                  : 'border-ink-900/30'
                              }`}
                              aria-hidden="true"
                            >
                              {isSelected && (
                                <span className="block w-2 h-2 bg-brand-500 rounded-full m-auto mt-1" />
                              )}
                            </span>
                            <span className={`font-sans text-[13.5px] leading-snug ${
                              isSelected ? 'text-white' : 'text-ink-900'
                            }`}>
                              {opt.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Results */}
        {score !== null && assessment && categoryScores && (
          <div className="pt-6 border-t border-ink-900/10">
            <p className="eyebrow mb-4">&sect; YOUR ASSESSMENT</p>

            <div className="bg-paper-100 border border-ink-900/10 rounded-sm p-5 mb-4">
              <div className="flex items-baseline justify-between mb-3">
                <p className="font-sans text-[11px] text-ink-500 tracking-[0.14em] uppercase">
                  Total score
                </p>
                <p className="font-display text-[12px] text-ink-700 italic">
                  {Math.round((score / MAX_SCORE) * 100)}% ready
                </p>
              </div>
              <p className="font-display text-[32px] text-ink-900 leading-none tracking-tight mb-4">
                {score} <span className="text-ink-500 text-[20px]">/ {MAX_SCORE}</span>
              </p>

              {/* Category breakdown */}
              <div className="space-y-2 pt-3 border-t border-ink-900/10">
                {Object.entries(categoryScores).map(([cat, s]) => (
                  <div key={cat} className="flex items-center justify-between text-[12px]">
                    <span className="font-sans text-ink-700">{cat}</span>
                    <div className="flex items-center gap-3 flex-1 ml-4">
                      <div className="flex-1 h-1 bg-ink-900/10 rounded-full overflow-hidden max-w-[120px]">
                        <div
                          className="h-full bg-brand-500"
                          style={{ width: `${(s.earned / s.max) * 100}%` }}
                        />
                      </div>
                      <span className="font-sans text-ink-500 text-[11px] tabular-nums w-12 text-right">
                        {s.earned} / {s.max}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Traffic light */}
            <div className={`flex items-start gap-4 border rounded-sm p-5 ${statusColourMap[assessment.status].bg}`}>
              <span
                className={`w-3 h-3 rounded-full ${statusColourMap[assessment.status].dot} flex-shrink-0 mt-1.5`}
                aria-hidden="true"
              />
              <div>
                <p className={`font-display text-[15px] mb-1 tracking-tight leading-snug ${statusColourMap[assessment.status].text}`}>
                  {assessment.label}
                </p>
                <p className="font-sans text-[13px] text-ink-700 leading-relaxed">
                  {assessment.body}
                </p>
              </div>
            </div>

            {/* CTA: result triggers the conversion prompt. Headline is
                status-aware so the framing matches the reader's moment. */}
            <div className="mt-5">
              <a
                href="#"
                onClick={e => { e.preventDefault(); document.dispatchEvent(new CustomEvent('open-lead-modal')); }}
                className="btn-primary text-center block w-full sm:inline-block sm:w-auto"
              >
                {assessment.status === 'green'
                  ? 'Get matched with a Series A specialist'
                  : assessment.status === 'amber'
                  ? 'Start the preparation: match with a specialist'
                  : 'Plan the path: match with a growth specialist'} &nbsp;&rarr;
              </a>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <p className="font-sans text-[11.5px] text-ink-500 leading-relaxed border-t border-ink-900/10 pt-4">
          This scorecard provides a structural readiness indicator across the areas most investors assess. Actual Series A outcomes depend on sector dynamics, specific investor fit, market conditions at the time of raising, and the quality of the narrative and process. A specialist accountant can build the financial infrastructure and data room that investors expect at Series A.
        </p>
      </div>
    </div>
  );
}
