'use client';

// app/industries/IndustriesIndexClient.tsx
// Client component for the /industries/ hub. Restyled 2026-05-02 to match
// the Paper Tape visual language used across services / location / guides
// indexes. Replaces the off-style rounded-2xl + text-gray-X + font-bold
// version with the consistent masthead + brand-italic accent +
// section-padding rhythm used elsewhere on the site.

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { industries } from '@/data/industries';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';
import { TrustBadges } from '@/components/TrustBadges';

export default function IndustriesIndexClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={openModal} />
      <main className="flex-grow">

        {/* HERO */}
        <section className="container-width pt-10 md:pt-14 pb-10 md:pb-14">
          <Breadcrumbs items={[{ label: 'Industries' }]} />

          <div className="max-w-3xl mt-8 md:mt-12">
            <div className="masthead mb-5">
              <span>INDUSTRIES &nbsp;&middot;&nbsp; {industries.length} VERTICALS</span>
            </div>
            <h1 className="font-display text-[clamp(2rem,5.5vw,3.6rem)] leading-[1.02] tracking-tight text-ink-900 mb-6">
              SEIS and EIS specialist accountants <em className="text-brand-500 italic">by industry</em>.
            </h1>
            <p className="font-sans text-[16px] md:text-[17px] text-ink-700 leading-[1.7] mb-6">
              SEIS and EIS qualifying conditions are uniform, but how they apply to
              your sector is not. A SaaS startup raising on ARR projections needs an
              advance assurance narrative that pre-empts HMRC questions on revenue
              recognition. A fintech needs the excluded-trades borderline addressed
              head-on. A biotech needs knowledge-intensive company status documented
              from day one to unlock the £10m EIS annual cap.
            </p>
            <p className="font-sans text-[15px] md:text-[16px] text-ink-700 leading-[1.7]">
              The matching service surfaces accountants against both the service you
              need and the sector you operate in. Pick your vertical below for the
              specialist breakdown, or jump to the matching form.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={openModal}
                className="btn-primary"
                type="button"
              >
                Get matched &rarr;
              </button>
              <Link href="/services/" className="btn-secondary">
                Browse by service
              </Link>
            </div>
          </div>
        </section>

        <TrustBadges />

        {/* INDUSTRY GRID */}
        <section
          className="section-padding border-t border-ink-900/10"
          style={{ backgroundColor: 'var(--paper-100)' }}
        >
          <div className="container-width">
            <div className="masthead mb-4">
              <span>ALL INDUSTRIES</span>
            </div>
            <h2 className="font-display text-[26px] md:text-[32px] text-ink-900 leading-[1.05] tracking-tight mb-10">
              The <em className="text-brand-500 italic">verticals</em> we cover
            </h2>

            {industries.length === 0 ? (
              <p className="font-sans text-[14px] text-ink-700">
                Industry pages coming soon. In the meantime,{' '}
                <Link href="/services/" className="text-brand-500 hover:text-brand-700 underline">
                  browse by service
                </Link>{' '}
                or{' '}
                <Link href="/location/" className="text-brand-500 hover:text-brand-700 underline">
                  by location
                </Link>.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {industries.map((industry, i) => (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}/`}
                    className="group flex gap-5 p-5 md:p-6 bg-white border border-ink-900/10 rounded-sm hover:border-brand-500 transition-colors"
                  >
                    <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-sm overflow-hidden flex-shrink-0">
                      <Image
                        src={industry.image}
                        alt={industry.title}
                        fill
                        sizes="128px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-500 font-medium mb-2">
                        INDUSTRY {String(i + 1).padStart(2, '0')}
                      </div>
                      <h3 className="font-display text-[18px] md:text-[20px] text-ink-900 group-hover:text-brand-500 leading-[1.2] tracking-tight mb-2 transition-colors">
                        {industry.title}
                      </h3>
                      <p className="font-sans text-[13px] md:text-[13.5px] text-ink-700 mb-4 leading-relaxed line-clamp-3 flex-1">
                        {industry.description}
                      </p>
                      <span className="inline-flex items-center gap-1 font-display italic text-[13.5px] text-brand-500 group-hover:text-brand-700 transition-colors">
                        Find specialist accountants
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CROSS-LINK */}
        <section className="section-padding border-t border-ink-900/10">
          <div className="container-width max-w-content">
            <div className="masthead mb-4">
              <span>OTHER WAYS TO BROWSE</span>
            </div>
            <h2 className="font-display text-[24px] md:text-[28px] text-ink-900 leading-[1.05] tracking-tight mb-5">
              Industry isn&apos;t the only axis. <em className="text-brand-500 italic">Browse by service or city.</em>
            </h2>
            <div className="space-y-4 font-sans text-[15px] text-ink-700 leading-[1.7] max-w-3xl mb-8">
              <p>
                Most accountancy engagements span multiple services (R&amp;D claim plus
                annual compliance plus EMI scheme), and the matching service can scope
                across all of them. If you&apos;re clearer on the service or city than
                the sector, start there instead.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/" className="btn-primary">
                Browse by service &rarr;
              </Link>
              <Link href="/location/" className="btn-secondary">
                Browse by location
              </Link>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section
          className="py-20 md:py-24"
          style={{ backgroundColor: 'var(--brand-500)' }}
        >
          <div className="container-width text-center max-w-3xl">
            <span
              className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] uppercase mb-5"
              style={{ color: 'rgba(255, 255, 255, 0.75)' }}
            >
              CLOSING
            </span>
            <h2
              className="font-display text-[30px] md:text-[40px] leading-[1.0] tracking-tight mb-5"
              style={{ color: '#ffffff' }}
            >
              Ready to find your<br />sector specialist?
            </h2>
            <p
              className="font-sans text-[15px] max-w-2xl mx-auto mb-8 leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.88)' }}
            >
              Submit your enquiry in under two minutes. We match you with up to three
              vetted UK accountants for free consultations, transparent quotes, and no
              obligation at any stage.
            </p>
            <button
              onClick={openModal}
              className="bg-white font-sans font-medium text-[13px] py-4 px-10 rounded-sm hover:bg-paper-100 transition-colors uppercase tracking-[0.15em]"
              style={{ color: 'var(--brand-700)' }}
              type="button"
            >
              Get matched now &nbsp;&rarr;
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
