// components/Hero.tsx - Editorial tear-sheet hero
// Three rectangular cards laid out like a folded broadsheet: a photo card,
// a dark stat card, and a contents card. Restrained tape strips read as
// paper artifacts rather than brand decoration. Tearsheet stage is hidden
// on mobile (text-only column) and scales fluidly on tablet and desktop.
//
// Original title + subtitle props preserved so HomeClient and the services
// hub can keep passing the same shape.

import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  image?: string;
  showCta?: boolean;
  showTrust?: boolean;
  onOpenModal?: () => void;
}

const trustPoints = [
  'FREE MATCHING',
  'VETTED ACA/ACCA',
  'UK-WIDE',
  'NO OBLIGATION',
];

// Service-list card content. Mirrors four of the seven SEIS lifecycle
// services from data/services.ts at decorative roman numerals so the
// editorial paper-of-record framing reads as a tear-sheet contents page.
const lifecycleSheet = [
  { roman: 'i',   label: 'Advance assurance',         page: '01' },
  { roman: 'ii',  label: 'SEIS1 / EIS1 compliance',   page: '04' },
  { roman: 'iii', label: 'Investor certificates',     page: '05' },
  { roman: 'iv',  label: 'Period monitoring',         page: '06' },
];

export function Hero({ title, subtitle, image, showCta = true, onOpenModal }: HeroProps) {
  const primary = image || '/images/hero-main.avif';

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--paper-100)' }}
    >
      <div className="container-width pt-10 md:pt-14 pb-12 md:pb-20">

        {/* Editorial runner - top-of-page hairline with eyebrow + tagline */}
        <div className="flex items-center justify-between pb-3.5 mb-9 border-b border-ink-900/15 font-display text-[11px] tracking-[0.18em] uppercase text-brand-500 font-medium">
          <span className="truncate">The lifecycle &middot; advance assurance, share issuance, compliance, certificates</span>
          <span className="hidden md:inline font-sans italic normal-case tracking-[0.18em] text-ink-300 font-normal whitespace-nowrap pl-6">
            For UK founders raising SEIS &amp; EIS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center md:min-h-[480px] lg:min-h-[520px]">

          {/* TEXT COLUMN */}
          <div>
            <span className="inline-flex items-center gap-2.5 mb-6 font-display text-[11px] tracking-[0.22em] uppercase text-brand-500 font-medium">
              <span aria-hidden="true" className="inline-block w-6 h-px bg-brand-500" />
              Specialists across the full lifecycle
            </span>

            <h1 className="font-display font-normal text-[34px] sm:text-[40px] md:text-[44px] lg:text-[56px] leading-[1.0] tracking-tighter text-ink-900 mb-6">
              {title}
            </h1>

            <p className="font-sans text-[15px] md:text-base text-ink-700 leading-[1.7] max-w-[480px] mb-8">
              {subtitle}
            </p>

            {showCta && (
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                {onOpenModal ? (
                  <button onClick={onOpenModal} className="btn-primary" type="button">
                    Get matched &nbsp;&rarr;
                  </button>
                ) : (
                  <Link href="/contact/" className="btn-primary">
                    Get matched &nbsp;&rarr;
                  </Link>
                )}
                <Link href="/services/" className="btn-secondary">
                  Browse services
                </Link>
              </div>
            )}

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-semibold tracking-[0.18em] text-ink-500">
              {trustPoints.map((p, i) => (
                <span key={p} className="flex items-center gap-4">
                  {i > 0 && <span aria-hidden="true">&middot;</span>}
                  <span>{p}</span>
                </span>
              ))}
            </div>
          </div>

          {/* TEAR-SHEET STAGE - hidden on mobile, scales on md+ */}
          <div
            className="relative hidden md:block h-[460px] lg:h-[520px]"
            aria-hidden="true"
          >
            {/* Sheet 1: photo + caption (back-left, biggest, slight left tilt) */}
            <div
              className="absolute top-[6%] left-[6%] w-[60%] lg:w-[62%] z-20 bg-white border border-ink-900/8 p-3 pb-4 shadow-[0_16px_40px_-16px_rgba(60,40,30,0.18),0_4px_12px_-4px_rgba(60,40,30,0.10)] transition-transform duration-300 hover:-translate-y-1"
              style={{ transform: 'rotate(-3deg)' }}
            >
              <span
                className="absolute -top-[7px] left-[38%] w-[46px] h-[14px] bg-accent-200/60 z-10"
                style={{ transform: 'rotate(-3deg)' }}
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] overflow-hidden bg-paper-300">
                <Image
                  src={primary}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 30vw, 45vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex justify-between items-baseline gap-3 pt-3 px-1">
                <span className="font-display text-[10px] tracking-[0.22em] uppercase font-medium text-brand-500">
                  Fig. 01
                </span>
                <span className="font-sans italic text-[11px] text-ink-500">
                  At the desk, mid-round.
                </span>
              </div>
            </div>

            {/* Sheet 2: dark stat (top-right, smallest, opposite tilt) */}
            <div
              className="absolute top-0 right-[2%] w-[42%] lg:w-[40%] z-30 bg-ink-900 text-white p-5 lg:p-6 shadow-[0_16px_40px_-16px_rgba(60,40,30,0.18),0_4px_12px_-4px_rgba(60,40,30,0.10)] transition-transform duration-300 hover:-translate-y-1"
              style={{ transform: 'rotate(4deg)' }}
            >
              <span
                className="absolute -top-[6px] right-[18%] w-[42px] h-[13px] bg-brand-300/45 z-10"
                style={{ transform: 'rotate(3deg)' }}
                aria-hidden="true"
              />
              <p className="font-display text-[10px] tracking-[0.22em] uppercase font-medium text-brand-300 mb-3">
                The relief
              </p>
              <p className="font-display text-[42px] lg:text-[48px] leading-none mb-2 tracking-[-0.02em]">
                <em className="not-italic md:italic text-brand-300 font-normal">50%</em>
              </p>
              <p className="font-sans text-[12px] text-paper-300 leading-[1.55]">
                income tax relief for SEIS investors on subscriptions up to &pound;200,000 per tax year.
              </p>
            </div>

            {/* Sheet 3: contents (bottom-right, mid-size, slight left tilt) */}
            <div
              className="absolute bottom-[2%] right-0 w-[46%] lg:w-[44%] z-10 bg-white border border-ink-900/8 p-5 shadow-[0_16px_40px_-16px_rgba(60,40,30,0.18),0_4px_12px_-4px_rgba(60,40,30,0.10)] transition-transform duration-300 hover:-translate-y-1"
              style={{ transform: 'rotate(-2deg)' }}
            >
              <span
                className="absolute -top-[5px] left-[14%] w-[38px] h-[12px] bg-accent-200/50 z-10"
                style={{ transform: 'rotate(-2deg)' }}
                aria-hidden="true"
              />
              <div className="font-display text-[10px] tracking-[0.22em] uppercase font-medium text-brand-500 mb-3 flex justify-between items-baseline">
                <span>Across the lifecycle</span>
                <span className="font-display italic text-ink-300 normal-case tracking-normal">
                  No. 04
                </span>
              </div>
              <ol className="list-none p-0 m-0 font-display">
                {lifecycleSheet.map((item, i) => (
                  <li
                    key={item.roman}
                    className={`flex items-baseline gap-2 text-[13px] text-ink-900 py-1.5 ${
                      i < lifecycleSheet.length - 1 ? 'border-b border-paper-200' : ''
                    }`}
                  >
                    <span className="italic text-brand-500 text-[11px] min-w-[14px]">
                      {item.roman}
                    </span>
                    <span className="flex-1">{item.label}</span>
                    <span className="font-sans italic text-ink-300 text-[11px]">
                      p. {item.page}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
