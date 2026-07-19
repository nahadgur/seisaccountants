// components/PracticeCard.tsx
// Compact identity card for the named practice behind the service.
// Paper Tape edition - matches the homepage editorial tokens.
// Generic, verifiable facts only. No fabricated reviews or credentials.
'use client';

import Link from 'next/link';
import { MapPin, Cloud, BadgeCheck, ExternalLink } from 'lucide-react';

interface PracticeCardProps {
  onOpenModal: () => void;
}

export function PracticeCard({ onOpenModal }: PracticeCardProps) {
  return (
    <section
      className="section-padding border-t border-ink-900/10"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="container-width">
        <div className="max-w-3xl mx-auto">
          <h2 className="h-display-md mb-8 text-center">
            The accountant behind this service
          </h2>

          <div className="bg-white border border-ink-900/10 rounded-sm overflow-hidden shadow-[0_16px_40px_-16px_rgba(60,40,30,0.18),0_4px_12px_-4px_rgba(60,40,30,0.10)]">
            {/* Header band - solid ink with paper text, tape strip accent */}
            <div
              className="relative p-6 md:p-8"
              style={{ backgroundColor: 'var(--ink-900)' }}
            >
              <span
                className="absolute -top-[6px] left-[8%] w-[46px] h-[14px] bg-accent-500/60 z-10"
                style={{ transform: 'rotate(-2deg)' }}
                aria-hidden="true"
              />
              <p className="font-display text-[24px] md:text-[28px] leading-none tracking-tight" style={{ color: 'var(--paper-100)' }}>
                Preetesh Parmar, FCCA
              </p>
              <p className="font-sans text-[13px] font-semibold text-brand-300 mt-2">
                Tidy Money Ltd
              </p>
              <p className="font-sans text-[12.5px] mt-3 leading-relaxed" style={{ color: 'rgba(245, 242, 234, 0.82)' }}>
                Fellow of the Association of Chartered Certified Accountants (ACCA)
              </p>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="flex items-center gap-2.5 font-sans text-[13.5px] text-ink-700">
                  <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span>Stanmore, Harrow &middot; HA7</span>
                </div>
                <div className="flex items-center gap-2.5 font-sans text-[13.5px] text-ink-700">
                  <BadgeCheck className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span>FreeAgent Gold Partner</span>
                </div>
                <div className="flex items-center gap-2.5 font-sans text-[13.5px] text-ink-700">
                  <Cloud className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span>Cloud practice since 2009</span>
                </div>
              </div>

              <p className="font-sans text-[14px] text-ink-700 leading-[1.8] mb-6">
                Accountancy work on this site is delivered by Tidy Money Ltd, a cloud-first
                ACCA-regulated practice. Every engagement starts with a fixed written quote,
                and you can verify the practice before you get in touch.
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <button
                  onClick={onOpenModal}
                  className="btn-primary"
                  type="button"
                >
                  Get a fixed quote &nbsp;&rarr;
                </button>
                <Link
                  href="/about/"
                  className="font-display italic text-brand-500 hover:text-brand-700 text-[15px] transition-colors"
                >
                  About the practice
                </Link>
                <a
                  href="https://www.tidymoney.com/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 font-sans text-[13px] text-ink-500 hover:text-brand-500 transition-colors"
                >
                  Verify at tidymoney.com <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
