'use client';

// components/CityPageClient.tsx - Paper Tape edition
// Full visual rebuild. Preserved: rich hub content lookup (getCityHubContent),
// regional callout logic for Scotland/Wales/NI, NearbyAreasGrid, services
// grid with local hooks, FAQ set.

import { useState } from 'react';
import Link from 'next/link';
import {
  MapPin, ArrowRight, CheckCircle, Clock, Shield, Star,
  Building2, GraduationCap, Zap, AlertCircle,
} from 'lucide-react';
import { services } from '@/data/services';
import { LocationProfile } from '@/data/locationProfiles';
import { getCityHubContent } from '@/data/cityHubContent';
import { getCityDeepContent } from '@/data/cityDeepContent';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { LeadFormModal } from '@/components/LeadFormModal';
import { VettingStrip } from '@/components/VettingStrip';
import { NearbyAreasGrid } from '@/components/NearbyAreasGrid';

interface Props {
  params: { city: string };
  profile: LocationProfile;
  cityName: string;
}

const REGIONAL_FLAGS = ['scotland', 'wales', 'northern ireland', 'scotland & northern ireland'];

function isRegionalFlag(region: string) {
  return REGIONAL_FLAGS.some(f => region.toLowerCase().includes(f.toLowerCase()));
}

const whyCards = [
  { icon: 'Star',        title: 'Sector-matched',   desc: 'Accountants with hands-on experience in your specific sector, not generalists.' },
  { icon: 'Shield',      title: 'Vetted and insured', desc: 'ACA or ACCA qualification and professional indemnity insurance required before any referral.' },
  { icon: 'Clock',       title: 'Within a week',  desc: 'Most accountants offer an initial consultation within seven days, evenings and weekends available.' },
  { icon: 'CheckCircle', title: 'Up to three quotes', desc: 'Compare fees, approach, and specialism. No pressure or obligation at any stage.' },
];

// Icons rendered at w-28/h-28 for watermark treatment in why-card grid.
// The .[&_svg] container in the consuming component overrides size further
// if needed.
const iconMap: Record<string, React.ReactNode> = {
  Star: <Star className="w-28 h-28" />,
  Shield: <Shield className="w-28 h-28" />,
  Clock: <Clock className="w-28 h-28" />,
  CheckCircle: <CheckCircle className="w-28 h-28" />,
};

function SectionHeading({ number, label, title }: { number: string; label: string; title: React.ReactNode }) {
  return (
    <div className="mb-5">
      <div className="masthead mb-4">
        <span>{number} &nbsp;&middot;&nbsp; {label}</span>
      </div>
      <h2 className="font-display text-[26px] md:text-[30px] text-ink-900 leading-[1.05] tracking-tight">
        {title}
      </h2>
    </div>
  );
}

export default function CityPageClient({ params, profile, cityName }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  const isRegional = isRegionalFlag(profile.region);
  const hub = getCityHubContent(params.city);
  const deep = getCityDeepContent(params.city);

  const cityFaqs = hub?.faqs && hub.faqs.length > 0 ? hub.faqs : [
    {
      question: `What should I look for in a startup accountant in ${cityName}?`,
      answer: `Look for ACA or ACCA qualification, specific startup sector experience, and familiarity with the ${cityName} funding ecosystem, particularly any regional grant programmes, Enterprise Zone benefits, or devolved support schemes relevant to your area. Ask specifically about their R&D credit claim experience and SEIS/EIS advance assurance track record.`,
    },
    {
      question: `How much does a startup accountant in ${cityName} cost?`,
      answer: `Most ${cityName} startup accountants charge on a fixed monthly retainer between £99 and £500 depending on company size and service scope. Year-end accounts, R&D credit claims, and SEIS/EIS applications are typically priced separately. Getting three quotes through our service gives you a realistic picture of current market rates without any obligation.`,
    },
    {
      question: `Can a ${cityName} accountant help me claim R&D tax credits?`,
      answer: `Yes. R&D tax credits are a UK-wide HMRC scheme and any qualified accountant can prepare a claim. However, accountants with specific ${cityName} sector experience, particularly in ${profile.dominantIndustries.slice(0, 2).join(' and ')}, are better placed to identify all qualifying expenditure and present claims in a way that withstands HMRC review.`,
    },
  ];

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={openModal} />
      <main className="flex-grow">

        {/* HERO */}
        <section
          className="border-b border-ink-900/10"
          style={{ backgroundColor: 'var(--paper-100)' }}
        >
          <div className="container-width py-10 md:py-14">
            <Breadcrumbs items={[{ label: 'Locations', href: '/location/' }, { label: cityName }]} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mt-6">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-5">
                  <MapPin className="w-3.5 h-3.5 text-brand-500" aria-hidden="true" />
                  <span className="eyebrow">{profile.region.toUpperCase()}</span>
                </div>

                <h1 className="font-display text-[44px] md:text-[56px] lg:text-[64px] text-ink-900 leading-[0.98] tracking-tighter mb-6">
                  Startup accountants<br />
                  in <em className="text-brand-500 italic">{cityName}</em>
                </h1>

                <p className="font-sans text-[15px] md:text-base text-ink-700 leading-relaxed mb-6 max-w-[540px] whitespace-pre-line">
                  {hub?.introDeep ?? profile.localContext}
                </p>

                {/* Industry chips */}
                <div className="flex flex-wrap gap-x-3 gap-y-2 text-[10px] font-semibold tracking-[0.18em] uppercase text-ink-500">
                  {profile.dominantIndustries.map((ind, i) => (
                    <span key={ind} className="flex items-center gap-3">
                      {i > 0 && <span aria-hidden="true" className="text-ink-300">&middot;</span>}
                      <span>{ind.toUpperCase()}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <HeroLeadForm city={cityName} />
              </div>
            </div>
          </div>
        </section>

        <VettingStrip />

        <div
          className="container-width py-14 md:py-18"
          style={{ backgroundColor: 'var(--paper-100)' }}
        >
          {/* Single full-width column post-sidebar-removal. The sidebar's
              matching CTA / R&D CTA / services list duplicated content
              that's already in the hero, the services grid section, and
              the bottom CTA - removing it tightens the page significantly. */}
          <div className="max-w-content mx-auto">
            <div className="space-y-14">

              {/* Regional callout */}
              {isRegional && (
                <section>
                  <div className="flex items-start gap-4 bg-white border border-ink-900/10 rounded-sm p-6 relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-brand-500" aria-hidden="true" />
                    <AlertCircle className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display text-[17px] text-ink-900 mb-2 tracking-tight">
                        Regional considerations for <em className="text-brand-500 italic">{cityName}</em>
                      </h3>
                      <p className="font-sans text-[14px] text-ink-700 leading-relaxed">
                        {profile.regulatoryNotes}
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* Services grid */}
              <section>
                <SectionHeading
                  number="01"
                  label="SERVICES"
                  title={<>Services available in <em className="text-brand-500 italic">{cityName}</em></>}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {services.map(service => {
                    const blurb = hub?.serviceBlurbs?.find(b => b.serviceSlug === service.slug);
                    return (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}/`}
                        className="group block bg-white border border-ink-900/10 rounded-sm p-5 hover:border-brand-500 transition-colors"
                      >
                        <h3 className="font-display text-[17px] text-ink-900 group-hover:text-brand-500 mb-2 tracking-tight leading-snug transition-colors">
                          {blurb?.headline ?? `${service.title} in ${cityName}`}
                        </h3>
                        <p className="font-sans text-[13px] text-ink-700 mb-4 leading-relaxed line-clamp-3">
                          {blurb?.hook ?? service.description}
                        </p>
                        <span className="inline-flex items-center gap-1 font-display italic text-brand-500 text-[14px]">
                          Get quotes <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </section>

              {/* Long-form deep narrative — post-cull bespoke per-city content */}
              {deep && deep.deepNarrative.length > 0 && (
                <section>
                  <SectionHeading
                    number="02"
                    label="THE LOCAL PICTURE"
                    title={<>Inside the <em className="text-brand-500 italic">{cityName}</em> startup ecosystem</>}
                  />
                  <div className="space-y-5 font-sans text-[15px] text-ink-700 leading-[1.8]">
                    {deep.deepNarrative.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </section>
              )}

              {/* Why specialist matching matters here */}
              {deep && deep.whyMattersHere.length > 0 && (
                <section>
                  <SectionHeading
                    number="03"
                    label="WHY IT MATTERS"
                    title={<>Where specialism <em className="text-brand-500 italic">moves the needle</em> in {cityName}</>}
                  />
                  <div className="space-y-5 font-sans text-[15px] text-ink-700 leading-[1.8]">
                    {deep.whyMattersHere.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </section>
              )}

              {/* Local worked examples */}
              {deep && deep.localExamples.length > 0 && (
                <section>
                  <SectionHeading
                    number="04"
                    label="LOCAL ENGAGEMENTS"
                    title={<>Recent matches in <em className="text-brand-500 italic">{cityName}</em></>}
                  />
                  <div className="space-y-4">
                    {deep.localExamples.map((ex, i) => (
                      <div key={i} className="bg-white border border-ink-900/10 rounded-sm p-6 relative">
                        <div className="absolute top-0 left-0 w-1 h-full bg-brand-500" aria-hidden="true" />
                        <div className="masthead mb-3 !border-0 !pb-0">
                          <span>MATCH {String(i + 1).padStart(2, '0')}</span>
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
              )}

              {/* Ecosystem deep-dive - priority hubs only (legacy field, kept for back-compat) */}
              {hub?.ecosystemDeep && (
                <section>
                  <SectionHeading
                    number="02"
                    label="THE ECOSYSTEM"
                    title={<>Inside the <em className="text-brand-500 italic">{cityName}</em> startup ecosystem</>}
                  />
                  <div className="font-sans text-[15px] text-ink-700 leading-[1.75] whitespace-pre-line">
                    {hub.ecosystemDeep}
                  </div>
                </section>
              )}

              {/* Why match here */}
              {hub?.whyMatchHere && (
                <section>
                  <SectionHeading
                    number="03"
                    label="WHY MATCH HERE"
                    title={<>Why founders in {cityName} choose a <em className="text-brand-500 italic">matched specialist</em></>}
                  />
                  <div className="font-sans text-[15px] text-ink-700 leading-[1.75] whitespace-pre-line">
                    {hub.whyMatchHere}
                  </div>
                </section>
              )}

              {/* Local ecosystem grid - always shown */}
              <section>
                <SectionHeading
                  number={hub?.ecosystemDeep ? '04' : '02'}
                  label="THE LOCAL CONTEXT"
                  title={<>{cityName} <em className="text-brand-500 italic">startup</em> ecosystem</>}
                />
                <div className="grid sm:grid-cols-3 gap-6 bg-white border border-ink-900/10 rounded-sm p-6">
                  <div>
                    <div className="flex items-center gap-2 text-brand-500 mb-3">
                      <Building2 className="w-4 h-4" />
                      <span className="eyebrow">Business hubs</span>
                    </div>
                    <ul className="space-y-2">
                      {profile.keyBusinessHubs.map(h => (
                        <li key={h} className="font-sans text-[13px] text-ink-700 flex items-start gap-2 leading-relaxed">
                          <span className="text-brand-500 mt-0.5" aria-hidden="true">&rarr;</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-brand-500 mb-3">
                      <GraduationCap className="w-4 h-4" />
                      <span className="eyebrow">Universities</span>
                    </div>
                    <ul className="space-y-2">
                      {profile.universities.map(uni => (
                        <li key={uni} className="font-sans text-[13px] text-ink-700 flex items-start gap-2 leading-relaxed">
                          <span className="text-brand-500 mt-0.5" aria-hidden="true">&rarr;</span>
                          <span>{uni}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-brand-500 mb-3">
                      <Zap className="w-4 h-4" />
                      <span className="eyebrow">Accelerators</span>
                    </div>
                    <ul className="space-y-2">
                      {profile.accelerators.map(acc => (
                        <li key={acc} className="font-sans text-[13px] text-ink-700 flex items-start gap-2 leading-relaxed">
                          <span className="text-brand-500 mt-0.5" aria-hidden="true">&rarr;</span>
                          <span>{acc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-4 font-sans text-[12px] text-ink-500 tracking-wide">
                  Local chamber:{' '}
                  <span className="text-ink-700 font-display italic">{profile.chamber}</span>
                </p>
              </section>

              {/* Regulatory notes (non-regional) */}
              {!isRegional && (
                <section>
                  <div className="bg-white border border-ink-900/10 rounded-sm p-6">
                    <span className="eyebrow mb-3 block">CONSIDERATIONS</span>
                    <h3 className="font-display text-[17px] text-ink-900 mb-3 tracking-tight leading-snug">
                      Accounting context for <em className="text-brand-500 italic">{cityName}</em>
                    </h3>
                    <p className="font-sans text-[14px] text-ink-700 leading-relaxed">
                      {profile.regulatoryNotes}
                    </p>
                  </div>
                </section>
              )}

              {/* Why us cards */}
              <section>
                <SectionHeading
                  number={hub?.ecosystemDeep ? '05' : '03'}
                  label="WHY THROUGH US"
                  title={<>What you get when we match you in <em className="text-brand-500 italic">{cityName}</em></>}
                />
                <div className="grid sm:grid-cols-2 gap-3">
                  {whyCards.map((item, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden p-5 bg-white rounded-sm border border-ink-900/10"
                    >
                      <div
                        className="pointer-events-none absolute -top-4 -right-4 text-brand-500 opacity-[0.08] [&_svg]:w-28 [&_svg]:h-28"
                        aria-hidden="true"
                      >
                        {iconMap[item.icon]}
                      </div>
                      <div className="relative">
                        <h3 className="font-display text-[15px] text-ink-900 mb-1.5 tracking-tight leading-snug">{item.title}</h3>
                        <p className="font-sans text-[13px] text-ink-700 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <NearbyAreasGrid cityName={cityName} />

              {/* FAQ */}
              <div>
                <FAQ faqs={cityFaqs} title={`Startup accountants in ${cityName}: common questions`} />
              </div>

              {/* Closer */}
              {hub?.closer && (
                <section>
                  <div className="flex items-start gap-4 bg-white border border-ink-900/10 rounded-sm p-6 relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-brand-500" aria-hidden="true" />
                    <CheckCircle className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <p className="font-sans text-[14px] text-ink-700 leading-[1.7] whitespace-pre-line">
                      {hub.closer}
                    </p>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA - solid purple */}
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
              Ready to find your<br />{cityName} accountant?
            </h2>
            <p
              className="font-sans text-[15px] max-w-2xl mx-auto mb-8 leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.88)' }}
            >
              Submit your enquiry in under two minutes. We match you with up to three vetted {cityName} accountants for free consultations, transparent quotes, and no obligation at any stage.
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
