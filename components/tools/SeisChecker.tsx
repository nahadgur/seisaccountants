'use client';

// components/tools/SeisChecker.tsx - Paper Tape edition
// Multi-step SEIS/EIS eligibility checker.
// EVALUATION LOGIC PRESERVED EXACTLY. Only visual treatment updated.

import { useState } from 'react';
import { CheckCircle, XCircle, AlertCircle, ChevronRight, ChevronLeft, RotateCcw } from 'lucide-react';

interface Question {
  id: string;
  text: string;
  subtext?: string;
  type: 'yesno' | 'number' | 'select';
  options?: string[];
  placeholder?: string;
  unit?: string;
}

interface Answers {
  incorporated_uk: string;
  company_age_years: string;
  employees: string;
  gross_assets_k: string;
  previously_listed: string;
  previous_eis_vct: string;
  qualifying_trade: string;
  excluded_activity: string;
  state_aid_received: string;
  profitable: string;
}

const QUESTIONS: Question[] = [
  {
    id: 'incorporated_uk',
    text: 'Is your company incorporated in the United Kingdom?',
    subtext: 'Registered at Companies House in England, Scotland, Wales, or Northern Ireland.',
    type: 'yesno',
  },
  {
    id: 'company_age_years',
    text: 'How old is your company?',
    subtext: 'Count from the date of incorporation at Companies House to today.',
    type: 'select',
    options: [
      'Less than 1 year',
      '1-2 years',
      '2-3 years',
      '3-5 years',
      '5-7 years',
      '7-10 years',
      'Over 10 years',
    ],
  },
  {
    id: 'employees',
    text: 'How many full-time equivalent employees does your company have?',
    subtext: 'Include directors. Part-time employees count proportionally (e.g. two half-time workers = 1 FTE).',
    type: 'select',
    options: [
      'Fewer than 25',
      '25-249',
      '250-499',
      '500 or more',
    ],
  },
  {
    id: 'gross_assets_k',
    text: 'What are your company\'s gross assets immediately before this investment?',
    subtext: 'Total assets on your balance sheet (before deducting liabilities). Use your most recent accounts.',
    type: 'select',
    options: [
      'Under £350,000',
      '£350,000 to £15 million',
      'Over £15 million',
    ],
  },
  {
    id: 'previously_listed',
    text: 'Is your company currently listed on any recognised stock exchange?',
    subtext: 'Includes AIM, Aquis, and any overseas exchanges. Most early-stage startups answer No.',
    type: 'yesno',
  },
  {
    id: 'previous_eis_vct',
    text: 'Has your company previously issued EIS shares or received investment from a Venture Capital Trust (VCT)?',
    subtext: 'Previous SEIS rounds do not affect EIS eligibility. Only previous EIS shares or VCT investment counts here.',
    type: 'yesno',
  },
  {
    id: 'qualifying_trade',
    text: 'Has your company started trading, or does it intend to start a qualifying trade within two years of incorporation?',
    subtext: 'A qualifying trade is almost any commercial business activity. Most tech, software, product, and service companies qualify.',
    type: 'yesno',
  },
  {
    id: 'excluded_activity',
    text: 'Does your company\'s trade substantially consist of any excluded activities?',
    subtext: 'Excluded activities include: property development, financial services (lending, insurance, money-broking), legal/accountancy services, farming, hotels or care homes operated by the company, energy generation, or leasing.',
    type: 'yesno',
  },
  {
    id: 'state_aid_received',
    text: 'Has your company received any State Aid grants of more than \u20AC300,000 in the last three years?',
    subtext: 'Includes Scottish Enterprise, Business Wales, Invest NI, and Innovate UK grants. De minimis aid (under \u20AC300,000) typically does not affect SEIS eligibility.',
    type: 'yesno',
  },
  {
    id: 'profitable',
    text: 'Is your company currently profitable and paying Corporation Tax?',
    subtext: 'This does not affect eligibility, it only determines how investors claim their relief.',
    type: 'yesno',
  },
];

type ResultType = 'both' | 'eis_only' | 'eis_kic' | 'neither' | 'blocked';

interface CheckerResult {
  type: ResultType;
  heading: string;
  summary: string;
  details: string[];
  nextStep: string;
}

// EVALUATE FUNCTION - UNCHANGED FROM ORIGINAL
function evaluate(answers: Answers): CheckerResult {
  const age = answers.company_age_years;
  const employees = answers.employees;
  const assets = answers.gross_assets_k;

  if (answers.incorporated_uk === 'no') {
    return {
      type: 'blocked',
      heading: 'Not eligible for SEIS or EIS',
      summary: 'SEIS and EIS require the company to be incorporated in the United Kingdom.',
      details: ['Only UK-registered companies (Companies House) qualify for SEIS and EIS. Companies with a permanent establishment in the UK but incorporated overseas may qualify for EIS only, this requires specialist advice.'],
      nextStep: 'Speak to a specialist accountant about whether a UK holding company structure could make investment into your group SEIS/EIS eligible.',
    };
  }
  if (answers.previously_listed === 'yes') {
    return {
      type: 'blocked',
      heading: 'Not eligible for SEIS or EIS',
      summary: 'Listed companies cannot issue SEIS or EIS qualifying shares.',
      details: ['Neither SEIS nor EIS is available to companies listed on a recognised stock exchange, including AIM and Aquis.'],
      nextStep: 'Seek advice on alternative investor incentive schemes available to listed companies.',
    };
  }
  if (answers.excluded_activity === 'yes') {
    return {
      type: 'blocked',
      heading: 'Likely not eligible for SEIS or EIS',
      summary: 'Companies whose trade substantially consists of excluded activities do not qualify.',
      details: [
        'Excluded activities include property development, financial services (lending, insurance, money-broking), legal and accountancy services, farming, hotels and care homes, energy generation, and leasing.',
        'If excluded activities are only a minor part of your trade, you may still qualify, the test is whether they constitute a "substantial" proportion. This requires a specialist review.',
      ],
      nextStep: 'Speak to a specialist accountant to confirm whether your excluded activity is "substantial", many companies with mixed trades qualify with proper structuring.',
    };
  }
  if (answers.qualifying_trade === 'no') {
    return {
      type: 'blocked',
      heading: 'Not yet eligible for SEIS or EIS',
      summary: 'Your company must have started trading, or intend to within two years of incorporation.',
      details: ['SEIS and EIS both require the company to carry on a qualifying trade. A company that has not yet traded and has no plan to begin within two years does not qualify at the point of share issuance.'],
      nextStep: 'If your company intends to begin trading within two years, you can still apply for advance assurance based on your intended trade. Speak to a specialist accountant.',
    };
  }

  const overThree = ['2-3 years', '3-5 years', '5-7 years', '7-10 years', 'Over 10 years'].includes(age);
  const overSeven = ['7-10 years', 'Over 10 years'].includes(age);
  const overTen = age === 'Over 10 years';

  const over25employees = !['Fewer than 25'].includes(employees);
  const over250employees = ['250-499', '500 or more'].includes(employees);
  const over500employees = employees === '500 or more';

  const over350k = !['Under £350,000'].includes(assets);
  const over15m = assets === 'Over £15 million';

  const seisEligible =
    !overThree &&
    !over25employees &&
    !over350k &&
    answers.previous_eis_vct !== 'yes' &&
    answers.state_aid_received !== 'yes';

  const eisStandard =
    !overSeven &&
    !over250employees &&
    !over15m;

  const eisKic =
    !overTen &&
    !over500employees &&
    !over15m;

  const stateAidNote = answers.state_aid_received === 'yes'
    ? 'State Aid above de minimis threshold received, SEIS eligibility is likely affected. EIS may still be available if the State Aid does not constitute risk finance under EU rules. Specialist review required.'
    : '';

  if (seisEligible && eisStandard) {
    return {
      type: 'both',
      heading: 'Your company appears eligible for both SEIS and EIS',
      summary: 'Based on your answers, your company meets the criteria for both SEIS and EIS. Most founders issue SEIS shares first to exhaust the £250,000 SEIS lifetime limit, then transition to EIS for subsequent rounds.',
      details: [
        'SEIS: Allows you to raise up to £250,000 in total. Investors receive 50% income tax relief and CGT exemption on exit. Ideal for your first angel or seed round.',
        'EIS: Allows you to raise up to £5m per year (£12m lifetime). Investors receive 30% income tax relief and CGT exemption on exit. Use for subsequent rounds once SEIS is exhausted.',
        'Next step: Apply to HMRC for SEIS advance assurance before issuing any shares. This typically takes 4 to 8 weeks and gives investors confidence before committing funds.',
        stateAidNote,
      ].filter(Boolean),
      nextStep: 'Get a specialist accountant to prepare your SEIS advance assurance application before approaching any investors.',
    };
  }

  if (!seisEligible && eisStandard) {
    const seisBlockReason = overThree
      ? 'SEIS: Your company is more than three years old and cannot issue SEIS shares.'
      : over25employees
      ? 'SEIS: Your company has 25 or more employees, above the SEIS limit.'
      : over350k
      ? 'SEIS: Your gross assets exceed £350,000, above the SEIS limit.'
      : answers.previous_eis_vct === 'yes'
      ? 'SEIS: Your company has previously issued EIS shares or received VCT investment, which disqualifies SEIS.'
      : 'SEIS: Your company does not meet all SEIS criteria.';

    return {
      type: 'eis_only',
      heading: 'Your company appears eligible for EIS but not SEIS',
      summary: 'Based on your answers, your company has grown past the SEIS thresholds but still qualifies for EIS.',
      details: [
        seisBlockReason,
        'EIS: Allows you to raise up to £5m per year under EIS. Investors receive 30% income tax relief and CGT exemption after three years.',
        'Apply to HMRC for EIS advance assurance before issuing any shares to investors.',
        stateAidNote,
      ].filter(Boolean),
      nextStep: 'Get a specialist accountant to prepare your EIS advance assurance application.',
    };
  }

  if (!seisEligible && !eisStandard && eisKic) {
    return {
      type: 'eis_kic',
      heading: 'Your company may qualify for EIS as a Knowledge-Intensive Company',
      summary: 'Standard EIS thresholds are exceeded, but if your company meets the Knowledge-Intensive Company (KIC) criteria, you may still access EIS with higher investment limits.',
      details: [
        'KIC criteria: Your company must have spent more than 15% of operating costs on R&D/innovation in the year preceding investment, OR more than 10% in each of the three preceding years. It must also be creating, acquiring, or licensing intellectual property.',
        'KIC benefits: Up to 500 employees (rather than 250), 10-year age limit (rather than 7), £10m per year investment (rather than £5m).',
        'This requires a specialist accountant to confirm KIC status with HMRC before advance assurance is sought.',
        stateAidNote,
      ].filter(Boolean),
      nextStep: 'Speak to a specialist accountant who can confirm whether your company qualifies as a Knowledge-Intensive Company before applying for EIS advance assurance.',
    };
  }

  return {
    type: 'neither',
    heading: 'Your company does not appear to qualify for SEIS or EIS at this time',
    summary: 'Based on your answers, your company exceeds the eligibility thresholds for both standard EIS and SEIS. The KIC route may also be unavailable.',
    details: [
      overTen ? 'Your company is over 10 years old, beyond both standard EIS (7 years) and KIC EIS (10 years) age limits.' : '',
      over500employees ? 'Your company has 500 or more employees, above the KIC EIS limit.' : '',
      over15m ? 'Your company\'s gross assets exceed £15m, above the EIS and KIC EIS limit.' : '',
      'Speak to a specialist accountant to confirm this assessment, there may be structuring options available that are not captured by this checker.',
    ].filter(Boolean),
    nextStep: 'A specialist accountant can review whether alternative investment structures or a restructured group could restore SEIS or EIS eligibility.',
  };
}

// Paper Tape result card styles - keep semantic colour cues but use white/tinted
// backgrounds with ink-900 text for contrast.
const RESULT_STYLES: Record<ResultType, { bg: string; accent: string; icon: React.ReactNode; tag: string }> = {
  both:     { bg: 'bg-green-50',  accent: 'bg-green-600',  icon: <CheckCircle className="w-6 h-6 text-green-700" />, tag: 'SEIS + EIS ELIGIBLE' },
  eis_only: { bg: 'bg-blue-50',   accent: 'bg-blue-600',   icon: <CheckCircle className="w-6 h-6 text-blue-700" />,  tag: 'EIS ELIGIBLE' },
  eis_kic:  { bg: 'bg-amber-50',  accent: 'bg-amber-600',  icon: <AlertCircle className="w-6 h-6 text-amber-700" />, tag: 'POSSIBLE KIC EIS' },
  blocked:  { bg: 'bg-red-50',    accent: 'bg-red-500',    icon: <XCircle className="w-6 h-6 text-red-600" />,       tag: 'NOT ELIGIBLE' },
  neither:  { bg: 'bg-paper-200', accent: 'bg-ink-500',    icon: <XCircle className="w-6 h-6 text-ink-700" />,       tag: 'NOT ELIGIBLE' },
};

export default function SeisChecker() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Answers>>({});
  const [done, setDone] = useState(false);

  const current = QUESTIONS[step];
  const answer = answers[current?.id as keyof Answers] ?? '';
  const totalSteps = QUESTIONS.length;

  function handleAnswer(val: string) {
    const newAnswers = { ...answers, [current.id]: val };
    setAnswers(newAnswers);

    if (current.type === 'yesno' || current.type === 'select') {
      if (step < totalSteps - 1) {
        setTimeout(() => setStep(s => s + 1), 300);
      } else {
        setTimeout(() => setDone(true), 300);
      }
    }
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setDone(false);
  }

  const result = done ? evaluate(answers as Answers) : null;
  const style = result ? RESULT_STYLES[result.type] : null;

  const progressPct = Math.round(((step + (answer ? 1 : 0)) / totalSteps) * 100);

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
          <CheckCircle className="w-5 h-5" />
        </div>
        <div>
          <p
            className="font-display text-[18px] tracking-tight leading-tight"
            style={{ color: 'var(--paper-100)' }}
          >
            SEIS / EIS <em className="italic" style={{ color: '#AFA9EC' }}>eligibility checker</em>
          </p>
          <p
            className="font-sans text-[11px] mt-1 tracking-[0.12em] uppercase"
            style={{ color: 'rgba(245, 242, 234, 0.65)' }}
          >
            Answer {totalSteps} questions to see which scheme applies
          </p>
        </div>
      </div>

      {!done ? (
        <div className="p-6 md:p-8">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between font-mono text-[11px] text-ink-500 mb-2 tracking-[0.12em] uppercase">
              <span>Question {step + 1} of {totalSteps}</span>
              <span>{progressPct}% complete</span>
            </div>
            <div className="h-[3px] bg-paper-200 overflow-hidden">
              <div
                className="h-full bg-brand-500 transition-all duration-300"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="mb-7">
            <p className="font-display text-[20px] md:text-[22px] text-ink-900 mb-3 leading-snug tracking-tight">
              {current.text}
            </p>
            {current.subtext && (
              <p className="font-sans text-[13.5px] text-ink-700 leading-relaxed">{current.subtext}</p>
            )}
          </div>

          {/* Answer options */}
          {current.type === 'yesno' && (
            <div className="grid grid-cols-2 gap-3">
              {['yes', 'no'].map(val => (
                <button
                  key={val}
                  onClick={() => handleAnswer(val)}
                  className={`py-4 rounded-sm border text-[14px] font-medium transition-colors tracking-[0.1em] uppercase ${
                    answer === val
                      ? 'bg-brand-500 text-white border-brand-500'
                      : 'bg-white text-ink-900 border-ink-900/20 hover:border-brand-500'
                  }`}
                  type="button"
                >
                  {val === 'yes' ? 'Yes' : 'No'}
                </button>
              ))}
            </div>
          )}

          {current.type === 'select' && (
            <div className="space-y-2">
              {current.options?.map(opt => (
                <button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  className={`w-full text-left px-4 py-3.5 rounded-sm border text-[14px] transition-colors flex items-center justify-between group ${
                    answer === opt
                      ? 'bg-brand-500 text-white border-brand-500'
                      : 'bg-white text-ink-900 border-ink-900/15 hover:border-brand-500'
                  }`}
                  type="button"
                >
                  <span className="font-display tracking-tight">{opt}</span>
                  <ChevronRight className={`w-4 h-4 flex-shrink-0 ${answer === opt ? 'text-white' : 'text-ink-300 group-hover:text-brand-500'}`} />
                </button>
              ))}
            </div>
          )}

          {/* Nav */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-ink-900/10">
            <button
              onClick={() => { setStep(s => Math.max(0, s - 1)); }}
              disabled={step === 0}
              className="flex items-center gap-1.5 font-display italic text-[14px] text-ink-700 hover:text-brand-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              type="button"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" /> Previous
            </button>
            {answer && step < totalSteps - 1 && (
              <button
                onClick={() => setStep(s => s + 1)}
                className="flex items-center gap-1.5 font-display italic text-[14px] text-brand-500 hover:text-brand-700 transition-colors"
                type="button"
              >
                Next <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            )}
            {answer && step === totalSteps - 1 && (
              <button
                onClick={() => setDone(true)}
                className="btn-primary"
                type="button"
              >
                See result &nbsp;&rarr;
              </button>
            )}
          </div>
        </div>
      ) : result && style ? (
        /* Result screen */
        <div className={`p-6 md:p-8 ${style.bg} relative`}>
          <div className={`absolute top-0 left-0 w-1 h-full ${style.accent}`} aria-hidden="true" />
          <div className="flex items-start gap-4 mb-5">
            <div className="flex-shrink-0 mt-1">{style.icon}</div>
            <div>
              <span className="inline-block font-mono text-[10px] font-semibold tracking-[0.22em] uppercase text-ink-900 mb-3">
                {style.tag}
              </span>
              <h3 className="font-display text-[22px] md:text-[24px] text-ink-900 mb-3 leading-snug tracking-tight">
                {result.heading}
              </h3>
              <p className="font-sans text-[14px] text-ink-700 leading-relaxed">{result.summary}</p>
            </div>
          </div>

          {result.details.length > 0 && (
            <div className="space-y-2 mb-5">
              {result.details.map((d, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/70 rounded-sm px-4 py-3 border border-ink-900/8">
                  <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="font-sans text-[13.5px] text-ink-700 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          )}

          <div className="bg-white rounded-sm p-5 mb-5 border border-ink-900/10 relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-500" aria-hidden="true" />
            <p className="eyebrow mb-2">NEXT STEP</p>
            <p className="font-display text-[15px] text-ink-900 leading-snug tracking-tight">{result.nextStep}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={reset}
              className="flex items-center justify-center gap-2 font-sans text-[12px] font-medium text-ink-900 border border-ink-900/20 rounded-sm py-3.5 px-5 hover:bg-white transition-colors uppercase tracking-[0.15em]"
              type="button"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" /> Start again
            </button>
            <a
              href="#"
              onClick={e => { e.preventDefault(); document.dispatchEvent(new CustomEvent('open-lead-modal')); }}
              className="btn-primary text-center flex-1 sm:flex-none"
            >
              Get matched with a specialist &nbsp;&rarr;
            </a>
          </div>

          <p className="font-sans text-[11.5px] text-ink-500 mt-5 leading-relaxed">
            This checker provides a preliminary indication only. SEIS and EIS eligibility is determined by HMRC at the point of advance assurance and share issuance. A specialist accountant should review your specific circumstances before any application is submitted.
          </p>
        </div>
      ) : null}
    </div>
  );
}
