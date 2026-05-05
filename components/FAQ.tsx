// components/FAQ.tsx - Paper Tape edition
// Sits on cream. White card inside with editorial dotted dividers
// between items. Question in display serif, answer in sans body.
'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

type FAQItem = { question: string; answer: string };

export function FAQ({
  faqs,
  title = 'Frequently Asked Questions',
}: {
  faqs: FAQItem[];
  title?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section>
      {/* Masthead */}
      <div className="masthead mb-8">
        <span>QUESTIONS</span>
      </div>

      <h2 className="h-display-md mb-8 max-w-xl">{title}</h2>

      <div className="bg-white border border-ink-900/10 rounded-sm overflow-hidden">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className={i > 0 ? 'border-t border-ink-900/8' : ''}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-start justify-between gap-4 px-5 md:px-6 py-5 text-left hover:bg-paper-50 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-display text-[17px] md:text-[19px] leading-snug text-ink-900 pr-2">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 mt-1 w-6 h-6 rounded-full border border-brand-500 flex items-center justify-center text-brand-500 transition-transform ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                  aria-hidden="true"
                >
                  <Plus className="w-3.5 h-3.5" strokeWidth={2} />
                </span>
              </button>
              {isOpen && (
                <div className="px-5 md:px-6 pb-6 pt-0">
                  <div className="pt-2 font-sans text-[14px] md:text-[14.5px] text-ink-700 leading-[1.7]">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
