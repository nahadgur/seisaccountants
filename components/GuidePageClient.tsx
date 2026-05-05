'use client';

// components/GuidePageClient.tsx
// - Tool renders via a slug-keyed registry (R&D, SEIS, Runway, Series A).
// - When a tool produces a result, the CTA is the natural next step.
//   No Industry Fit Tool: a second tool after a result introduces
//   friction at the exact moment the reader is primed to convert.
// - Guides without a tool (Tax Relief, Business Registration) still have
//   the standard sidebar and bottom CTAs. They rely on content depth
//   plus standing CTAs rather than a filler mid-page tool.
// - Magazine masthead row deleted from the hero; the UPDATED [date]
//   signal is kept in the inline metadata row.

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Clock, ChevronRight, CheckCircle, AlertTriangle,
  Lightbulb, BarChart2, BookOpen, ArrowRight,
} from 'lucide-react';
import { Guide } from '@/data/guides';
import { rdTaxCreditsContent } from '@/data/guideContent/rdTaxCredits';
import { seisEisContent } from '@/data/guideContent/seisEis';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import RdCalculator from '@/components/tools/RdCalculator';
import SeisChecker from '@/components/tools/SeisChecker';

interface CityLink { slug: string; name: string; region: string; }
interface Props {
  guide: Guide;
  cityLinks: CityLink[];
  relatedGuides: Guide[];
  siteUrl: string;
}

function groupByRegion(cities: CityLink[]): Record<string, CityLink[]> {
  return cities.reduce<Record<string, CityLink[]>>((acc, city) => {
    if (!acc[city.region]) acc[city.region] = [];
    acc[city.region].push(city);
    return acc;
  }, {});
}

const CALLOUT_STYLES = {
  definition: { bg: 'bg-brand-50 border-brand-200',   icon: <BookOpen className="w-5 h-5 text-brand-600" />,      label: 'Definition' },
  data:       { bg: 'bg-blue-50 border-blue-200',     icon: <BarChart2 className="w-5 h-5 text-blue-700" />,      label: 'Data' },
  tip:        { bg: 'bg-green-50 border-green-200',   icon: <Lightbulb className="w-5 h-5 text-green-700" />,     label: 'Tip' },
  warning:    { bg: 'bg-amber-50 border-amber-200',   icon: <AlertTriangle className="w-5 h-5 text-amber-700" />, label: 'Important' },
  example:    { bg: 'bg-paper-200 border-ink-900/15', icon: <CheckCircle className="w-5 h-5 text-ink-700" />,     label: 'Example' },
};

function getContent(slug: string) {
  if (slug === 'rd-tax-credits-uk-startups') return rdTaxCreditsContent;
  if (slug === 'seis-eis-guide-uk-startups') return seisEisContent;
  return null;
}

// Tool registry. Each guide that advertises a calculator/tool has a
// matching component here. If a guide declares hasCalculator: true but
// isn't in this registry, the tool section is silently omitted.
const TOOL_REGISTRY: Record<
  string,
  {
    Component: React.ComponentType;
    sectionEyebrow: string;
    sectionHeading: React.ReactNode;
  }
> = {
  'rd-tax-credits-uk-startups': {
    Component: RdCalculator,
    sectionEyebrow: 'CALCULATOR',
    sectionHeading: <>How much could your company <em className="text-accent-600 italic">claim?</em></>,
  },
  'seis-eis-guide-uk-startups': {
    Component: SeisChecker,
    sectionEyebrow: 'CHECKER',
    sectionHeading: <>Does your company <em className="text-accent-600 italic">qualify?</em></>,
  },
};

function SectionHeading({ id, title }: { id: string; title: string }) {
  return (
    <div id={id} className="scroll-mt-24">
      <div className="masthead mb-4">
        <span>&sect; {title.toUpperCase().slice(0, 30)}</span>
      </div>
      <h2 className="font-display text-[26px] md:text-[30px] text-ink-900 leading-[1.1] tracking-tight mb-5">
        {title}
      </h2>
    </div>
  );
}

export default function GuidePageClient({ guide, cityLinks, relatedGuides }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  useEffect(() => {
    const handler = () => setIsModalOpen(true);
    document.addEventListener('open-lead-modal', handler);
    return () => document.removeEventListener('open-lead-modal', handler);
  }, []);

  const content = getContent(guide.slug);
  const regionGroups = groupByRegion(cityLinks);
  const tocSections = content?.sections.map(s => ({ id: s.id, label: s.h2 })) ?? [];

  const updatedLabel = new Date(guide.lastUpdated).toLocaleDateString('en-GB', {
    month: 'long', year: 'numeric',
  });

  // Resolve tool for this guide from the registry.
  const toolEntry =
    guide.hasCalculator && TOOL_REGISTRY[guide.slug]
      ? TOOL_REGISTRY[guide.slug]
      : null;

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={openModal} />
      <main className="flex-grow">

        {/* HERO - magazine masthead row removed. Kept the GUIDE eyebrow
            and UPDATED date signal in the inline metadata row. */}
        <section
          className="border-b border-ink-900/10"
          style={{ backgroundColor: 'var(--paper-100)' }}
        >
          <div className="container-width py-10 md:py-16">
            <div className="flex items-center gap-2 mb-5">
              <BookOpen className="w-3.5 h-3.5 text-brand-500" aria-hidden="true" />
              <span className="eyebrow">GUIDE &middot; {guide.shortTitle.toUpperCase()}</span>
            </div>

            <div className="max-w-3xl">
              <h1 className="font-display text-[40px] md:text-[52px] lg:text-[60px] text-ink-900 leading-[0.98] tracking-tighter mb-6">
                {guide.heroHeading}
              </h1>
              <p className="font-sans text-[15px] md:text-base text-ink-700 leading-relaxed mb-6">
                {guide.heroSubtitle}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-ink-500">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3" aria-hidden="true" /> {guide.estimatedReadTime} MIN READ
                </span>
                <span aria-hidden="true">&middot;</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-brand-500" aria-hidden="true" /> UPDATED {updatedLabel.toUpperCase()}
                </span>
                {toolEntry && (
                  <>
                    <span aria-hidden="true">&middot;</span>
                    <span className="text-brand-500">{guide.calculatorLabel.toUpperCase()} INCLUDED</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <div
          className="container-width py-12 md:py-16"
          style={{ backgroundColor: 'var(--paper-100)' }}
        >
          {/* Single full-width article post-sidebar-removal. The sidebar's
              TOC was useful but added visual weight; Match CTA was duplicated
              by hero + bottom CTA; Other Guides was duplicated by the
              related-guides strip below. */}
          <div className="max-w-content mx-auto">
            <article>

              {/* Direct answer */}
              <div className="relative bg-white border border-ink-900/10 rounded-sm p-6 md:p-7 mb-10">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-500" aria-hidden="true" />
                <p className="eyebrow mb-3">&sect; QUICK ANSWER</p>
                <h2 className="font-display text-[21px] text-ink-900 mb-4 leading-snug tracking-tight">
                  {guide.directQuestion}
                </h2>
                <p className="font-sans text-[14.5px] text-ink-700 leading-[1.7] direct-answer-text">
                  {guide.directAnswer}
                </p>
              </div>

              {/* Introduction */}
              {content && (
                <div className="mb-12 space-y-5">
                  {content.introduction.map((p, i) => (
                    <p key={i} className="font-sans text-[15px] text-ink-700 leading-[1.75]">{p}</p>
                  ))}
                </div>
              )}

              {/* Tool (registry-driven). The tool result itself is the
                  conversion moment; each tool component carries its own
                  CTA in its results panel. No second tool below it to
                  compete for attention. */}
              {toolEntry && (
                <section id="calculator" className="mb-14 scroll-mt-24">
                  <div className="masthead mb-4">
                    <span>&sect; {toolEntry.sectionEyebrow}</span>
                  </div>
                  <h2 className="font-display text-[26px] md:text-[30px] text-ink-900 leading-[1.1] tracking-tight mb-6">
                    {toolEntry.sectionHeading}
                  </h2>
                  <toolEntry.Component />
                </section>
              )}

              {/* Content sections */}
              {content && content.sections.map(section => (
                <section key={section.id} className="mb-14">
                  <SectionHeading id={section.id} title={section.h2} />

                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="font-sans text-[15px] text-ink-700 leading-[1.75] mb-5">{p}</p>
                  ))}

                  {section.callout && (() => {
                    const style = CALLOUT_STYLES[section.callout.type];
                    return (
                      <div className={`flex items-start gap-4 border rounded-sm p-5 my-6 ${style.bg}`}>
                        <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
                        <div>
                          {section.callout.heading && (
                            <p className="font-display text-[15px] text-ink-900 mb-1 tracking-tight leading-snug">{section.callout.heading}</p>
                          )}
                          <p className="font-sans text-[13.5px] text-ink-700 leading-relaxed guide-callout-text">{section.callout.text}</p>
                        </div>
                      </div>
                    );
                  })()}

                  {section.dataTable && (
                    <div className="my-8 overflow-x-auto">
                      <table className="w-full border border-ink-900/15 bg-white rounded-sm overflow-hidden">
                        <thead>
                          <tr className="bg-ink-900 text-paper-100">
                            {section.dataTable.headers.map((h, i) => (
                              <th key={i} className="text-left px-4 py-3 font-display text-[13px] tracking-tight">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.dataTable.rows.map((row, i) => (
                            <tr key={i} className={i % 2 === 1 ? 'bg-paper-50' : ''}>
                              {row.map((cell, j) => (
                                <td key={j} className="px-4 py-3 font-sans text-[13.5px] text-ink-700 border-t border-ink-900/10 leading-snug">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {section.subsections && section.subsections.map((sub, i) => (
                    <div key={i} className="mt-8">
                      <h3 className="font-display text-[19px] md:text-[21px] text-ink-900 leading-snug tracking-tight mb-3">{sub.h3}</h3>
                      {sub.paragraphs.map((p, j) => (
                        <p key={j} className="font-sans text-[15px] text-ink-700 leading-[1.75] mb-4">{p}</p>
                      ))}
                      {sub.callout && (() => {
                        const style = CALLOUT_STYLES[sub.callout.type];
                        return (
                          <div className={`flex items-start gap-4 border rounded-sm p-5 my-4 ${style.bg}`}>
                            <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
                            <div>
                              {sub.callout.heading && (
                                <p className="font-display text-[15px] text-ink-900 mb-1 tracking-tight leading-snug">{sub.callout.heading}</p>
                              )}
                              <p className="font-sans text-[13.5px] text-ink-700 leading-relaxed guide-callout-text">{sub.callout.text}</p>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  ))}
                </section>
              ))}

              {/* City spoke grid */}
              <section id="by-city" className="mb-14 scroll-mt-24">
                <div className="masthead mb-4">
                  <span>&sect; BY CITY</span>
                </div>
                <h2 className="font-display text-[26px] md:text-[30px] text-ink-900 leading-[1.1] tracking-tight mb-3">
                  Find a <em className="text-brand-500 italic">specialist</em> in your city
                </h2>
                <p className="font-sans text-[14px] text-ink-700 mb-8 leading-relaxed">
                  {content?.citySectionIntro}
                </p>
                <div className="space-y-6">
                  {Object.entries(regionGroups).map(([region, cities]) => (
                    <div key={region}>
                      <h3 className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-500 font-medium mb-3">
                        &sect; {region.toUpperCase()}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                        {cities.map(city => (
                          <Link
                            key={city.slug}
                            href={`/location/${city.slug}/`}
                            className="flex items-center justify-between gap-2 font-display text-[13.5px] text-ink-900 hover:text-brand-500 py-2.5 px-3 rounded-sm border border-ink-900/10 hover:border-brand-500 bg-white transition-colors group tracking-tight"
                          >
                            <span>{city.name}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-brand-500 flex-shrink-0" aria-hidden="true" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Bottom CTA */}
              <div
                className="rounded-sm p-8 md:p-10 text-center"
                style={{ backgroundColor: 'var(--brand-500)' }}
              >
                <span
                  className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] uppercase mb-4"
                  style={{ color: 'rgba(255, 255, 255, 0.75)' }}
                >
                  &sect; READY?
                </span>
                <h2
                  className="font-display text-[26px] md:text-[32px] leading-tight tracking-tight mb-4"
                  style={{ color: '#ffffff' }}
                >
                  Ready to claim your<br />{guide.shortTitle.toLowerCase()}?
                </h2>
                <p
                  className="font-sans text-[14px] max-w-xl mx-auto mb-6 leading-relaxed"
                  style={{ color: 'rgba(255, 255, 255, 0.88)' }}
                >
                  Get matched with a vetted specialist. Free initial consultation, transparent fees, no obligation.
                </p>
                <button
                  onClick={openModal}
                  className="bg-white font-sans font-medium text-[13px] py-3.5 px-8 rounded-sm hover:bg-paper-100 transition-colors uppercase tracking-[0.15em]"
                  style={{ color: 'var(--brand-700)' }}
                  type="button"
                >
                  Get matched &nbsp;&rarr;
                </button>
              </div>
            </article>

            {/* Related guides strip — replaces the sidebar Other Guides widget */}
            {relatedGuides.length > 0 && (
              <section className="mt-16 pt-12 border-t border-ink-900/10">
                <div className="masthead mb-4">
                  <span>&sect; OTHER GUIDES</span>
                </div>
                <h2 className="font-display text-[24px] md:text-[28px] text-ink-900 leading-[1.05] tracking-tight mb-8">
                  Continue with another <em className="text-brand-500 italic">guide</em>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {relatedGuides.slice(0, 6).map((g) => (
                    <Link
                      key={g.slug}
                      href={`/guides/${g.slug}/`}
                      className="group flex items-start justify-between gap-3 p-4 bg-white border border-ink-900/10 rounded-sm hover:border-brand-500 transition-colors"
                    >
                      <div>
                        <h3 className="font-display text-[15px] text-ink-900 group-hover:text-brand-500 leading-snug tracking-tight transition-colors">
                          {g.shortTitle}
                        </h3>
                        {g.estimatedReadTime && (
                          <span className="font-sans text-[11.5px] text-ink-500 mt-1 inline-block">
                            {g.estimatedReadTime} min read
                          </span>
                        )}
                      </div>
                      <ChevronRight className="w-4 h-4 text-ink-400 group-hover:text-brand-500 flex-shrink-0 mt-0.5 transition-colors" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
