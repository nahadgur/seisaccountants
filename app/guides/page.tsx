// app/guides/page.tsx
// Guides index. Server component owning metadata + JSON-LD.
// Restyled 2026-05-02 to match the Paper Tape visual language used
// across services / industries / location indexes.

import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, ArrowRight, Calculator } from 'lucide-react';
import { guides } from '@/data/guides';
import { siteConfig } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';

const pageUrl = `${siteConfig.url}/guides/`;

export const metadata: Metadata = {
  title: 'SEIS, EIS & R&D Guides for UK Founders | Free SEIS Specialist Matching',
  description:
    'Free in-depth guides for UK SEIS and EIS founders: SEIS and EIS eligibility, advance assurance, share issuance, the three-year qualifying period, and R&D tax credits for SEIS-backed companies under the merged scheme.',
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: siteConfig.name,
    title: 'SEIS, EIS & R&D Guides for UK Founders',
    description:
      'In-depth guides for UK SEIS and EIS founders covering scheme eligibility, advance assurance, share issuance, the three-year qualifying period, and the R&D credit interaction with SEIS funding.',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEIS, EIS & R&D Guides for UK Founders',
    description: 'Free in-depth guides for UK SEIS and EIS founders covering scheme eligibility, advance assurance, and R&D credits.',
  },
};

export default function GuidesIndexPage() {
  // CollectionPage schema for the guides index
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#collection`,
    url: pageUrl,
    name: 'SEIS, EIS & R&D Guides for UK Founders',
    description:
      'In-depth guides written for UK SEIS and EIS founders, covering scheme eligibility, advance assurance, and R&D credits.',
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    hasPart: guides.map(g => ({
      '@type': 'Article',
      '@id': `${siteConfig.url}/guides/${g.slug}/`,
      url: `${siteConfig.url}/guides/${g.slug}/`,
      headline: g.title,
      description: g.metaDescription,
      datePublished: g.datePublished ?? g.lastUpdated,
      dateModified: g.lastUpdated,
    })),
  };

  // ItemList schema
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${pageUrl}#itemlist`,
    name: 'SEIS, EIS and R&D guides for UK founders',
    numberOfItems: guides.length,
    itemListElement: guides.map((g, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: g.title,
      url: `${siteConfig.url}/guides/${g.slug}/`,
    })),
  };

  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Guides' }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="flex-grow">

        {/* HERO */}
        <section className="container-width pt-10 md:pt-14 pb-10 md:pb-14">
          <Breadcrumbs items={[{ label: 'Guides' }]} />

          <div className="max-w-3xl mt-8 md:mt-12">
            <div className="masthead mb-5">
              <span>GUIDES &nbsp;&middot;&nbsp; {guides.length} IN-DEPTH PIECES</span>
            </div>
            <h1 className="font-display text-[clamp(2rem,5.5vw,3.6rem)] leading-[1.02] tracking-tight text-ink-900 mb-6">
              SEIS, EIS and R&amp;D <em className="text-accent-600 italic">guides</em>.
            </h1>
            <p className="font-sans text-[16px] md:text-[17px] text-ink-700 leading-[1.7]">
              In-depth guides written for UK SEIS and EIS founders. Each piece covers
              the regulatory mechanics under current legislation, worked examples
              with HMRC data, and where applicable an interactive calculator.
              Skip to the guide that matches your decision.
            </p>
          </div>

          {/* Feature card: SEIS Diagnostic. Sits above the guide grid so
              the most actionable surface is the first thing readers see. */}
          <Link
            href="/tools/seis-diagnostic/"
            className="group block mt-10 bg-ink-900 text-white rounded-sm p-6 md:p-7 hover:bg-brand-700 transition-colors"
          >
            <div className="flex items-start gap-5 flex-wrap md:flex-nowrap">
              <div className="flex-1">
                <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.22em] uppercase text-brand-300 font-semibold mb-3">
                  <Calculator className="w-3 h-3" aria-hidden="true" /> Free tool
                </span>
                <h2 className="font-display text-[24px] md:text-[28px] text-white leading-[1.1] tracking-tight mb-2">
                  Is your company SEIS-eligible? <em className="text-brand-300 italic">Check it now.</em>
                </h2>
                <p className="font-sans text-[14px] text-paper-300 leading-relaxed max-w-xl">
                  Type your UK company name. We pull your record from Companies House
                  and run it through the SEIS, EIS, and knowledge-intensive qualifying
                  tests we can verify from public data. Takes 5 seconds.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 font-display italic text-[15px] text-brand-300 whitespace-nowrap mt-3 md:mt-2 group-hover:translate-x-1 transition-transform">
                Run the check <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </section>

        {/* GUIDE GRID */}
        <section
          className="section-padding border-t border-ink-900/10"
          style={{ backgroundColor: 'var(--paper-100)' }}
        >
          <div className="container-width">
            <div className="masthead mb-4">
              <span>ALL GUIDES</span>
            </div>
            <h2 className="font-display text-[26px] md:text-[32px] text-ink-900 leading-[1.05] tracking-tight mb-10">
              The full <em className="text-brand-500 italic">library</em>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {guides.map((guide, i) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}/`}
                  className="group flex flex-col bg-white border border-ink-900/10 rounded-sm p-6 hover:border-brand-500 transition-colors"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-500 font-medium">
                      GUIDE {String(i + 1).padStart(2, '0')}
                    </span>
                    {guide.hasCalculator && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.18em] uppercase text-ink-500 font-medium">
                        <Calculator className="w-3 h-3" aria-hidden="true" />
                        Calculator
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-[20px] md:text-[22px] text-ink-900 group-hover:text-brand-500 leading-[1.2] tracking-tight mb-3 transition-colors">
                    {guide.title}
                  </h3>

                  <p className="font-sans text-[13.5px] text-ink-700 leading-relaxed mb-6 line-clamp-4 flex-1">
                    {guide.directAnswer}
                  </p>

                  <div className="flex items-center justify-between pt-5 border-t border-ink-900/10">
                    <span className="inline-flex items-center gap-1.5 font-sans text-[12px] text-ink-500">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      {guide.estimatedReadTime} min read
                    </span>
                    <span className="inline-flex items-center gap-1 font-display italic text-[14px] text-brand-500 group-hover:text-brand-700 transition-colors">
                      Read guide
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CROSS-LINK TO LOCATIONS */}
        <section className="section-padding border-t border-ink-900/10">
          <div className="container-width max-w-content">
            <div className="masthead mb-4">
              <span>READY TO MATCH</span>
            </div>
            <h2 className="font-display text-[24px] md:text-[28px] text-ink-900 leading-[1.05] tracking-tight mb-5">
              The guides explain the landscape. <em className="text-brand-500 italic">The matching service connects you.</em>
            </h2>
            <div className="space-y-4 font-sans text-[15px] text-ink-700 leading-[1.7] max-w-3xl mb-8">
              <p>
                Reading the guide is the start. Finding the right specialist accountant
                for your specific sector, stage, and city is the next step. The matching
                service is free, the consultations are free, and there&apos;s no
                obligation at any point.
              </p>
              <p>
                Pick a guide above to read first, or jump straight to the city
                catchments where the network has live engagements:
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/location/"
                className="btn-primary"
              >
                Find an accountant in your city &rarr;
              </Link>
              <Link
                href="/services/"
                className="btn-secondary"
              >
                Browse all services
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
              Ready to find a UK<br />startup accountant?
            </h2>
            <p
              className="font-sans text-[15px] max-w-2xl mx-auto mb-8 leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.88)' }}
            >
              Submit your enquiry in under two minutes. We match you with up to three
              vetted UK accountants for free consultations, transparent quotes, and no
              obligation at any stage.
            </p>
            <Link
              href="/location/"
              className="bg-white font-sans font-medium text-[13px] py-4 px-10 rounded-sm hover:bg-paper-100 transition-colors uppercase tracking-[0.15em] inline-block"
              style={{ color: 'var(--brand-700)' }}
            >
              Get matched now &nbsp;&rarr;
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
