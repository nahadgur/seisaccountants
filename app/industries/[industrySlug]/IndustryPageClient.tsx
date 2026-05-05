'use client';

// app/industries/[industrySlug]/IndustryPageClient.tsx
// Client component. Modal state, UI rendering.
// Post 2026-05-02 cleanup: sidebar removed (Match CTA / Key services /
// Other services / Other industries widgets all duplicated content
// elsewhere on the page); city search/toggle removed (12 cities fits
// in a single region-grouped section); related industries moved to
// a strip at the bottom of the article.

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import type { Industry } from '@/data/industries';
import type { Service } from '@/data/services';
import type { IndustryContent } from '@/data/industryContent/types';
import { LOCATIONS, toSlug } from '@/data/locations';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TrustBadges } from '@/components/TrustBadges';
import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { SlashHero } from '@/components/SlashHero';

interface Props {
  industry: Industry;
  content: IndustryContent;
  keyServices: Service[];
  allIndustries: Industry[];
  allServices: Service[];
}

function SectionHeading({ title }: { title: React.ReactNode }) {
  return (
    <div className="mb-5"><h2 className="font-display text-[26px] md:text-[30px] text-ink-900 leading-[1.05] tracking-tight">
        {title}
      </h2>
    </div>
  );
}

export default function IndustryPageClient({
  industry,
  content,
  keyServices,
  allIndustries,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  const totalCities = Object.values(LOCATIONS).flat().length;
  const relatedIndustries = allIndustries.filter(i => i.slug !== industry.slug);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={openModal} />
      <main className="flex-grow">

        <SlashHero
          breadcrumbs={[{ label: 'Industries', href: '/industries/' }, { label: industry.title }]}
          eyebrow={
            <span className="eyebrow">
              SPECIALIST VERTICAL
            </span>
          }
          title={
            <>
              Accountants for<br />
              <em className="text-brand-500 italic">{industry.title.toLowerCase()}</em>
            </>
          }
          subtitle={industry.description}
          image={industry.image}
          bullets={[
            'Vetted ACA/ACCA specialists',
            `${industry.title} accounting expertise`,
            `${totalCities}+ UK locations`,
          ]}
          mobileBadges={['ACA/ACCA', 'VETTED', `${totalCities}+ LOCATIONS`]}
          right={
            <HeroLeadForm
              service={industry.title}
              ctaButton="Get matched"
            />
          }
        />

        <TrustBadges />

        <div
          className="container-width py-14 md:py-18"
          style={{ backgroundColor: 'var(--paper-100)' }}
        >
          {/* Single full-width column post-sidebar-removal. Sidebar's
              Match CTA was duplicated by hero + bottom CTA; Key services
              and Other services were duplicated by the playbook section
              cross-links and the services grid; Other industries moved
              to a related-industries strip below. */}
          <div className="max-w-content mx-auto">
            <div className="space-y-14">

              {/* Section 01 - Overview */}
              <section>
                <SectionHeading
                  title={<>Why <em className="text-brand-500 italic">{industry.title.toLowerCase()}</em> accounting is different</>}
                />
                <div className="space-y-5 font-sans text-[15px] text-ink-700 leading-[1.8]">
                  {content.overview.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </section>

              {/* Section 02 - Benefits */}
              <section>
                <SectionHeading
                  title={<>What a specialist <em className="text-brand-500 italic">brings</em></>}
                />
                <div className="grid sm:grid-cols-2 gap-3">
                  {content.benefits.map((b, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden p-5 bg-white border border-ink-900/10 rounded-sm"
                    >
                      <div
                        className="pointer-events-none absolute -top-4 -right-4 text-brand-500 opacity-[0.08] [&_svg]:w-28 [&_svg]:h-28"
                        aria-hidden="true"
                      >
                        <CheckCircle className="w-28 h-28" />
                      </div>
                      <div className="relative">
                        <h3 className="font-display text-[15px] text-ink-900 mb-1.5 tracking-tight leading-snug">{b.title}</h3>
                        <p className="font-sans text-[13px] text-ink-700 leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 03 - Playbook. Long-form specialist content. */}
              <section>
                <SectionHeading
                  title={<>The {industry.title.toLowerCase()} <em className="text-brand-500 italic">accounting playbook</em></>}
                />
                <div className="space-y-10">
                  {content.playbook.map((p, i) => (
                    <article key={i}>
                      <h3 className="font-display text-[20px] md:text-[22px] text-ink-900 leading-snug tracking-tight mb-4">
                        {p.heading}
                      </h3>
                      <div className="space-y-4 font-sans text-[15px] text-ink-700 leading-[1.8]">
                        {p.body.split('\n\n').map((para, j) => <p key={j}>{para}</p>)}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* Section 04 - Key services cross-links. Routes link equity
                  into the relevant service hub pages with industry-specific
                  framing. */}
              <section>
                <SectionHeading
                  title={<>Services most relevant to <em className="text-brand-500 italic">{industry.title.toLowerCase()}</em></>}
                />
                <div className="space-y-3">
                  {keyServices.map((s, i) => (
                    <Link
                      key={s.id}
                      href={`/services/${s.slug}/`}
                      className="group flex items-center justify-between gap-4 p-5 bg-white border border-ink-900/10 rounded-sm hover:border-brand-500 transition-colors"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-brand-500 flex items-center justify-center font-display italic text-brand-500 text-[14px]">
                          {i + 1}
                        </div>
                        <div>
                          <h3 className="font-display text-[16px] text-ink-900 mb-1 tracking-tight leading-snug group-hover:text-brand-500 transition-colors">
                            {s.title}
                          </h3>
                          <p className="font-sans text-[13px] text-ink-700 leading-relaxed">
                            {s.description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-brand-500 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </section>

              {/* Section 05 - Fit check */}
              <section>
                <SectionHeading
                  title={<>Is a specialist <em className="text-brand-500 italic">right for you?</em></>}
                />
                <p className="font-sans text-[15px] text-ink-700 mb-5 leading-relaxed">{content.fitCheckIntro}</p>
                <div className="bg-white border border-ink-900/10 rounded-sm p-6 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-500" aria-hidden="true" />
                  <ul className="space-y-3">
                    {content.fitCheck.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 font-sans text-[14px] text-ink-700 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Section 06 - Locations. Single region-grouped section
                  post-sidebar-removal (12 cities fits cleanly without
                  the previous "top cities + all locations + search +
                  toggle" complexity). */}
              <section>
                <SectionHeading
                  title={<>Find a {industry.title.toLowerCase()} accountant <em className="text-brand-500 italic">in your city</em></>}
                />
                <p className="font-sans text-[14px] text-ink-700 mb-6 leading-relaxed">
                  Vetted accountants with {industry.title.toLowerCase()} experience across {totalCities} GSC-validated UK city catchments. The matching service covers the whole UK by remote engagement; these are the cities with the strongest local query demand.
                </p>
                <div className="space-y-6">
                  {Object.entries(LOCATIONS).map(([region, cities]) => (
                    <div key={region}>
                      <h3 className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-500 font-medium mb-3">
                        {region.toUpperCase()}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                        {cities.map(city => (
                          <Link
                            key={city}
                            href={`/location/${toSlug(city)}/`}
                            className="group flex items-center justify-between gap-2 p-3 bg-white border border-ink-900/10 rounded-sm hover:border-brand-500 transition-colors"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <MapPin className="w-3 h-3 text-brand-500 flex-shrink-0" aria-hidden="true" />
                              <span className="font-display text-[13px] text-ink-900 group-hover:text-brand-500 tracking-tight transition-colors truncate">{city}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 07 - FAQ */}
              <div>
                <FAQ faqs={content.faqs} title={`${industry.title} accounting FAQs`} />
              </div>

              {/* Related industries strip — replaces the sidebar Other Industries widget */}
              {relatedIndustries.length > 0 && (
                <section className="mt-10 pt-10 border-t border-ink-900/10">
                  <div className="masthead mb-4">
                    <span>OTHER INDUSTRIES</span>
                  </div>
                  <h2 className="font-display text-[24px] md:text-[28px] text-ink-900 leading-[1.05] tracking-tight mb-8">
                    Different vertical? <em className="text-brand-500 italic">Browse another.</em>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {relatedIndustries.map((ind) => (
                      <Link
                        key={ind.slug}
                        href={`/industries/${ind.slug}/`}
                        className="group flex items-start justify-between gap-3 p-4 bg-white border border-ink-900/10 rounded-sm hover:border-brand-500 transition-colors"
                      >
                        <span className="font-display text-[15px] text-ink-900 group-hover:text-brand-500 leading-snug tracking-tight transition-colors">
                          {ind.title}
                        </span>
                        <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-brand-500 flex-shrink-0 mt-0.5 transition-colors" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
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
              Ready for a<br />{industry.title.toLowerCase()} specialist?
            </h2>
            <p
              className="font-sans text-[15px] max-w-2xl mx-auto mb-8 leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.88)' }}
            >
              Submit your enquiry in under two minutes. We match you with up to three vetted specialists. Free consultations. No obligation.
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
