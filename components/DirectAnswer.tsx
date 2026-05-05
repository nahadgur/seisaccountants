'use client';

// components/DirectAnswer.tsx - Paper Tape edition
// Renders the "direct answer" box, the format AI Overviews prefer to cite.
// Place at the top of the main content column on service x location pages.
// The .direct-answer-text class is targeted by GeoSchema speakable selector.

interface DirectAnswerProps {
  question: string;
  answer: string;
  className?: string;
}

export default function DirectAnswer({ question, answer, className = '' }: DirectAnswerProps) {
  return (
    <div
      className={`relative bg-white border border-ink-900/10 rounded-sm p-6 md:p-7 ${className}`}
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-brand-500" aria-hidden="true" />
      <p className="eyebrow mb-3">
        &sect; QUICK ANSWER
      </p>
      <h2 className="font-display text-[20px] md:text-[22px] text-ink-900 mb-4 leading-snug tracking-tight">
        {question}
      </h2>
      <p className="font-sans text-[14px] text-ink-700 leading-[1.7] direct-answer-text">
        {answer}
      </p>
    </div>
  );
}
