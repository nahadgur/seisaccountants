// components/Hero.tsx - Paper Tape hero
// Original title + subtitle props preserved. Visual treatment rebuilt:
// cream paper background, issue masthead, 3 polaroid tiles with
// purple tape, editorial CTAs.

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

export function Hero({ title, subtitle, image, showCta = true, onOpenModal }: HeroProps) {
  // Fallback images if the consumer doesn't pass specific ones
  const primary = image || '/images/hero-main.avif';
  const secondary1 = '/images/rd-tax-credits.avif';
  const secondary2 = '/images/seis-eis-advice.avif';

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--paper-100)' }}
    >
      <div className="container-width pt-10 md:pt-16 pb-6 md:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* TEXT COLUMN */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <span className="eyebrow mb-6 block">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-brand-500"
                aria-hidden="true"
              />
              Free matching service &middot; No obligation
            </span>

            {/* H1 - ORIGINAL COPY PRESERVED */}
            <h1 className="font-display font-normal text-[44px] md:text-[60px] lg:text-[72px] leading-[0.95] tracking-tighter text-ink-900 mb-6">
              {title}
            </h1>

            {/* Subtitle - ORIGINAL COPY PRESERVED */}
            <p className="font-sans text-[15px] md:text-base text-ink-700 leading-relaxed max-w-[540px] mb-8">
              {subtitle}
            </p>

            {/* CTAs */}
            {showCta && (
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                {onOpenModal ? (
                  <button onClick={onOpenModal} className="btn-primary">
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

            {/* Trust strip - editorial dot-separated */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-semibold tracking-[0.18em] text-ink-500">
              {trustPoints.map((p, i) => (
                <span key={p} className="flex items-center gap-4">
                  {i > 0 && <span aria-hidden="true">&middot;</span>}
                  <span>{p}</span>
                </span>
              ))}
            </div>
          </div>

          {/* POLAROID COLLAGE - right column on desktop, below on mobile */}
          <div className="lg:col-span-5 relative min-h-[380px] md:min-h-[440px]">
            {/* Primary polaroid - back-right, tilted slightly right */}
            <div
              className="absolute top-0 right-4 w-[64%] md:w-[70%]"
              style={{ transform: 'rotate(2.5deg)' }}
            >
              <span
                className="tape tape-sm"
                style={{ top: '-9px', right: '22%', transform: 'rotate(4deg)' }}
                aria-hidden="true"
              />
              <div className="bg-white p-2 pb-7 border border-ink-900/8 shadow-sm">
                <div className="relative aspect-[4/5] overflow-hidden bg-paper-300">
                  <Image
                    src={primary}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 35vw, 65vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <span className="polaroid-caption">THE FLOOR</span>
              </div>
            </div>

            {/* Secondary polaroid - front-left, tilted left, overlaps */}
            <div
              className="absolute bottom-4 left-0 w-[54%] md:w-[58%]"
              style={{ transform: 'rotate(-4deg)' }}
            >
              <span
                className="tape tape-sm"
                style={{ top: '-9px', left: '25%', transform: 'rotate(-6deg)' }}
                aria-hidden="true"
              />
              <div className="bg-white p-2 pb-7 border border-ink-900/8 shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden bg-paper-300">
                  <Image
                    src={secondary1}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 28vw, 54vw"
                    className="object-cover"
                  />
                </div>
                <span className="polaroid-caption">THE WORK</span>
              </div>
            </div>

            {/* Third tiny polaroid - bottom-right accent, mostly off-screen */}
            <div
              className="absolute bottom-0 right-0 w-[34%] hidden md:block"
              style={{ transform: 'rotate(6deg)' }}
            >
              <span
                className="tape tape-sm"
                style={{ top: '-8px', left: '30%', transform: 'rotate(3deg)' }}
                aria-hidden="true"
              />
              <div className="bg-white p-2 pb-6 border border-ink-900/8 shadow-sm">
                <div className="relative aspect-square overflow-hidden bg-paper-300 flex items-center justify-center">
                  <Image
                    src={secondary2}
                    alt=""
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
                <span className="polaroid-caption">THE BRIEF</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom keyword strip - editorial edge */}
      <div className="container-width pb-4">
        <div className="flex items-center justify-between pt-3 border-t border-ink-900/20 text-[10px] font-semibold tracking-[0.22em] uppercase text-ink-500">
          <span>&darr; Keep reading</span>
          <span className="hidden md:inline">SEIS &middot; EIS &middot; ADVANCE ASSURANCE &middot; SEIS1 &middot; SEIS3</span>
          <span>&sect; 01</span>
        </div>
      </div>
    </section>
  );
}
