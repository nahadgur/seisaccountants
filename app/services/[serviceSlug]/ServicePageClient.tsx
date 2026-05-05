'use client';

// app/services/[serviceSlug]/ServicePageClient.tsx - Paper Tape edition
// Client component. Modal state, UI rendering.
// Post 2026-05-02 cull: location search filter and showLocations toggle
// were removed because the kept-list of 12 cities fits in a single
// region-grouped section without needing search/expand functionality.

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Clock, Shield, Star, CheckCircle, ArrowRight, BookOpen } from 'lucide-react';
import { services } from '@/data/services';
import type { Service } from '@/data/services';
import { LOCATIONS, toSlug } from '@/data/locations';
import type { Guide } from '@/data/guides';
import { Header }        from '@/components/Header';
import { Footer }        from '@/components/Footer';
import { TrustBadges }   from '@/components/TrustBadges';
import { FAQ }           from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm }  from '@/components/HeroLeadForm';
import { PricingSection }from '@/components/PricingSection';
import { SlashHero }     from '@/components/SlashHero';
import { serviceContent }from '@/data/serviceContent';

interface Props {
  service: Service;
  totalCities: number;
  combinedFaqs: { question: string; answer: string }[];
  relatedGuide?: Guide | null;
}

function SectionHeading({ number, label, title }: { number: string; label: string; title: React.ReactNode }) {
  return (
    <div className="mb-5">
      <div className="masthead mb-4">
        <span>&sect; {number} &nbsp;&middot;&nbsp; {label}</span>
      </div>
      <h2 className="font-display text-[26px] md:text-[30px] text-ink-900 leading-[1.05] tracking-tight">
        {title}
      </h2>
    </div>
  );
}

export default function ServicePageClient({ service, totalCities, combinedFaqs, relatedGuide }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  const content = serviceContent[service.id] || serviceContent[services[0].id];
  const relatedServices = services.filter(s => s.id !== service.id);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={openModal} />
      <main className="flex-grow">

        <SlashHero
          breadcrumbs={[{ label: 'Services', href: '/services/' }, { label: service.title }]}
          eyebrow={
            <span className="eyebrow">
              &sect; SEIS SPECIALIST ACCOUNTANTS
            </span>
          }
          title={
            <>
              {service.title}<br />
              for <em className="text-accent-600 italic">SEIS founders</em>
            </>
          }
          subtitle={service.description}
          image={service.image}
          bullets={[
            'Compare up to 3 free quotes',
            'Every accountant vetted and insured',
            `${totalCities}+ locations covered`,
          ]}
          mobileBadges={['ACA/ACCA', 'VETTED', `${totalCities}+ LOCATIONS`]}
          right={
            <HeroLeadForm
              service={service.title}
              ctaButton="Get quotes"
            />
          }
        />

        <TrustBadges />

        <div
          className="container-width py-14 md:py-18"
          style={{ backgroundColor: 'var(--paper-100)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            <div className="lg:col-span-2 space-y-14">

              <section>
                <SectionHeading
                  number="01"
                  label="THE OVERVIEW"
                  title={<>{service.title}: <em className="text-brand-500 italic">what you need to know</em></>}
                />
                <div className="space-y-5 font-sans text-[15px] text-ink-700 leading-[1.8]">
                  {content.intro.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </section>

              {/* Guide cross-link. Routes service-page link equity into the
                  corresponding long-form guide and gives readers an obvious
                  next step if they want more depth before (or instead of)
                  requesting a match. See ACTION-PLAN.md H2. */}
              {relatedGuide && (
                <aside
                  className="bg-white border border-ink-900/10 rounded-sm p-6 md:p-8 relative"
                  aria-labelledby="related-guide-heading"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-500" aria-hidden="true" />
                  <div className="flex items-start gap-5">
                    <div
                      className="hidden md:flex w-12 h-12 rounded-sm items-center justify-center text-brand-600 flex-shrink-0"
                      style={{ backgroundColor: 'var(--brand-50)' }}
                    >
                      <BookOpen className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="masthead mb-3 !border-0 !pb-0">
                        <span>&sect; THE FULL GUIDE &nbsp;&middot;&nbsp; {relatedGuide.estimatedReadTime} MIN READ</span>
                      </div>
                      <h2
                        id="related-guide-heading"
                        className="font-display text-[22px] md:text-[26px] text-ink-900 tracking-tight leading-snug mb-2"
                      >
                        {relatedGuide.title}
                      </h2>
                      <p className="font-sans text-[14px] text-ink-700 leading-relaxed mb-4">
                        {relatedGuide.metaDescription}
                      </p>
                      <Link
                        href={`/guides/${relatedGuide.slug}/`}
                        className="inline-flex items-center gap-1.5 font-display italic text-brand-500 hover:text-brand-700 text-[15px]"
                      >
                        Read the complete guide
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </aside>
              )}

              <section>
                <SectionHeading
                  number="02"
                  label="THE BENEFITS"
                  title={<>Benefits of <em className="text-brand-500 italic">{service.title.toLowerCase()}</em></>}
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

              {/* Deep dive — long-form regulatory and mechanical detail */}
              <section>
                <SectionHeading
                  number="03"
                  label="DEEP DIVE"
                  title={<>How {service.title.toLowerCase()} <em className="text-brand-500 italic">actually works</em></>}
                />
                <div className="space-y-5 font-sans text-[15px] text-ink-700 leading-[1.8]">
                  {content.deepDive.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </section>

              {/* Edge cases — nuance and where the standard playbook breaks */}
              <section>
                <SectionHeading
                  number="04"
                  label="EDGE CASES"
                  title={<>Where the standard playbook <em className="text-brand-500 italic">doesn&apos;t apply</em></>}
                />
                <div className="space-y-5 font-sans text-[15px] text-ink-700 leading-[1.8]">
                  {content.edgeCases.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </section>

              {/* Worked examples — real-world scenarios with concrete numbers */}
              <section>
                <SectionHeading
                  number="05"
                  label="WORKED EXAMPLES"
                  title={<>How a real engagement <em className="text-brand-500 italic">plays out</em></>}
                />
                <div className="space-y-4">
                  {content.workedExamples.map((ex, i) => (
                    <div key={i} className="bg-white border border-ink-900/10 rounded-sm p-6 relative">
                      <div className="absolute top-0 left-0 w-1 h-full bg-brand-500" aria-hidden="true" />
                      <div className="masthead mb-3 !border-0 !pb-0">
                        <span>&sect; CASE {String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="font-display text-[18px] md:text-[20px] text-ink-900 mb-3 tracking-tight leading-snug">
                        {ex.title}
                      </h3>
                      <p className="font-sans text-[14px] text-ink-700 leading-relaxed">
                        {ex.body}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Locations — single region-grouped section. Post-cull (12 cities)
                  the previous "Find specialist" + "All locations" + search +
                  toggle approach was overkill; everything fits cleanly here. */}
              <section>
                <SectionHeading
                  number="06"
                  label="LOCATIONS"
                  title={<>Find {service.title.toLowerCase()} <em className="text-brand-500 italic">in your city</em></>}
                />
                <p className="font-sans text-[14px] text-ink-700 mb-6 leading-relaxed">
                  Vetted {service.title.toLowerCase()} specialists across {totalCities} GSC-validated UK city catchments. The matching service covers the whole UK by remote engagement; these are the cities with the strongest local query demand.
                </p>
                <div className="space-y-6">
                  {Object.entries(LOCATIONS).map(([region, cities]) => (
                    <div key={region}>
                      <h3 className="font-display text-[15px] text-ink-900 mb-3 tracking-tight uppercase opacity-70">
                        {region}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                        {cities.map(city => (
                          <Link
                            key={city}
                            href={`/location/${toSlug(city)}/`}
                            className="group flex items-center gap-2 p-3 bg-white border border-ink-900/10 rounded-sm hover:border-brand-500 transition-colors"
                          >
                            <MapPin className="w-3 h-3 text-brand-500 flex-shrink-0" aria-hidden="true" />
                            <span className="font-display text-[13px] text-ink-900 group-hover:text-brand-500 tracking-tight transition-colors">{city}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <SectionHeading
                  number="07"
                  label="FIT CHECK"
                  title={<>Is {service.title.toLowerCase()} <em className="text-brand-500 italic">right for you?</em></>}
                />
                <p className="font-sans text-[15px] text-ink-700 mb-5 leading-relaxed">{content.candidateIntro}</p>
                <div className="bg-white border border-ink-900/10 rounded-sm p-6 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-brand-500" aria-hidden="true" />
                  <ul className="space-y-3">
                    {content.candidates.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 font-sans text-[14px] text-ink-700 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <SectionHeading
                  number="08"
                  label="THE PROCESS"
                  title={<>How the process <em className="text-brand-500 italic">works</em></>}
                />
                <div className="space-y-3">
                  {content.process.map((step, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-5 bg-white border border-ink-900/10 rounded-sm"
                    >
                      <div
                        className="flex-shrink-0 w-8 h-8 rounded-full border border-brand-500 flex items-center justify-center font-display italic text-brand-500 text-[15px]"
                      >
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-display text-[15px] text-ink-900 mb-1 tracking-tight leading-snug">{step.title}</h3>
                        <p className="font-sans text-[13px] text-ink-700 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <PricingSection serviceId={service.id} serviceName={service.title} />

              <div>
                <FAQ faqs={combinedFaqs} title={`${service.title} FAQs`} />
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">

                <div className="bg-white p-6 border border-ink-900/10 rounded-sm">
                  <span className="eyebrow mb-3 block">&sect; GET MATCHED</span>
                  <h3 className="font-display text-[18px] text-ink-900 mb-2 leading-tight tracking-tight">
                    Match for <em className="text-brand-500 italic">{service.title}</em>
                  </h3>
                  <p className="font-sans text-[13px] text-ink-700 mb-5 leading-relaxed">
                    Free, no-obligation match with vetted accountants in your area.
                  </p>
                  <button
                    onClick={openModal}
                    className="btn-primary w-full text-center"
                    type="button"
                  >
                    Find specialists &nbsp;&rarr;
                  </button>
                  <div className="mt-5 pt-5 border-t border-ink-900/10 space-y-3">
                    {[
                      { icon: <Clock className="w-3.5 h-3.5" />, text: 'Consultations this week' },
                      { icon: <Shield className="w-3.5 h-3.5" />, text: 'ACA/ACCA qualified only' },
                      { icon: <Star className="w-3.5 h-3.5" />, text: 'Free, no-obligation' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div
                          className="w-6 h-6 rounded-sm flex items-center justify-center text-brand-600 flex-shrink-0"
                          style={{ backgroundColor: 'var(--brand-50)' }}
                        >
                          {item.icon}
                        </div>
                        <span className="font-sans text-[12.5px] text-ink-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="p-6 rounded-sm"
                  style={{ backgroundColor: 'var(--ink-900)' }}
                >
                  <span
                    className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] uppercase mb-3"
                    style={{ color: '#AFA9EC' }}
                  >
                    &sect; FROM &pound;99/MONTH
                  </span>
                  <h3
                    className="font-display text-[19px] mb-3 tracking-tight leading-tight"
                    style={{ color: 'var(--paper-100)' }}
                  >
                    Fixed monthly <em className="italic" style={{ color: '#AFA9EC' }}>fees available</em>
                  </h3>
                  <p
                    className="font-sans text-[12.5px] mb-4 leading-relaxed"
                    style={{ color: 'rgba(245, 242, 234, 0.82)' }}
                  >
                    Ask about flexible payment plans during your free consultation.
                  </p>
                  <button
                    onClick={openModal}
                    className="block w-full bg-white font-sans font-medium text-[12px] py-3 px-4 rounded-sm hover:bg-paper-100 transition-colors uppercase tracking-[0.15em]"
                    style={{ color: 'var(--brand-700)' }}
                    type="button"
                  >
                    Discuss fees &nbsp;&rarr;
                  </button>
                </div>

                <div className="bg-white border border-ink-900/10 p-6 rounded-sm">
                  <span className="eyebrow mb-4 block">&sect; OTHER SERVICES</span>
                  <div className="space-y-0">
                    {relatedServices.map((s, i) => (
                      <Link
                        key={s.id}
                        href={`/services/${s.slug}/`}
                        className={`flex items-center justify-between font-display text-[13.5px] text-ink-900 hover:text-brand-500 py-3 transition-colors tracking-tight group ${
                          i < relatedServices.length - 1 ? 'border-b border-ink-900/8' : ''
                        }`}
                      >
                        <span>{s.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-brand-500" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
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
              &sect; CLOSING
            </span>
            <h2
              className="font-display text-[30px] md:text-[40px] leading-[1.0] tracking-tight mb-5"
              style={{ color: '#ffffff' }}
            >
              Ready to get<br />{service.title.toLowerCase()}?
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
