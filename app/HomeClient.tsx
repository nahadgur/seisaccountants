'use client';

// app/HomeClient.tsx - Paper Tape edition
// Client component. Owns modal state and renders the visual homepage.
// Section-by-section restyle of the old layout. All content data
// preserved - only visuals changed.

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin, Shield, Star, Clock, Award, Phone, Zap, TreePine, Cloud,
} from 'lucide-react';
import { services } from '@/data/services';
import { toSlug } from '@/data/locations';
import { pricingTiers } from '@/data/pricing';
import { Header }       from '@/components/Header';
import { Footer }       from '@/components/Footer';
import { Hero }         from '@/components/Hero';
import { TrustBadges }  from '@/components/TrustBadges';
import { FAQ }          from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';
import {
  topAreas, heroContent, problemFraming, propertyTypes,
  serviceCardsHeading, howItWorks, regionalContext, areasSection,
  pricingSection, trustPoints, homepageFaqs, faqSectionTitle,
  ctaSection,
} from '@/data/homepage';

const iconMap: Record<string, React.ReactNode> = {
  Shield:   <Shield   className="w-5 h-5" />,
  TreePine: <TreePine className="w-5 h-5" />,
  Star:     <Star     className="w-5 h-5" />,
  Zap:      <Zap      className="w-5 h-5" />,
  Cloud:    <Cloud    className="w-5 h-5" />,
  Award:    <Award    className="w-5 h-5" />,
  MapPin:   <MapPin   className="w-5 h-5" />,
  Phone:    <Phone    className="w-5 h-5" />,
  Clock:    <Clock    className="w-5 h-5" />,
};

export default function HomeClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={openModal} />

      <main className="flex-grow">

        <Hero
          title={heroContent.title}
          subtitle={heroContent.subtitle}
          image={heroContent.image}
          onOpenModal={openModal}
        />

        <TrustBadges />

        {/* ============ PROBLEM FRAMING ============
            Background: paper-100 (cream) - continues the hero tone.
            Images arranged as 3 polaroid tiles in a staggered collage. */}
        <section
          className="section-padding"
          style={{ backgroundColor: 'var(--paper-100)' }}
        >
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

              {/* Text */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <h2 className="h-display-md mb-6">
                  {problemFraming.heading}
                </h2>
                <div className="space-y-5 font-sans text-[15px] text-ink-700 leading-[1.8]">
                  {problemFraming.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                <button
                  onClick={openModal}
                  className="btn-primary mt-8"
                  type="button"
                >
                  Get matched &nbsp;&rarr;
                </button>
              </div>

              {/* Editorial card stack — matches the hero's tear-sheet
                  aesthetic. Photo card + dark stat card, both tilted with
                  restrained tape strips. Hidden on mobile (text column
                  only); visible from md up. */}
              <div className="hidden lg:block lg:col-span-5 order-1 lg:order-2 relative min-h-[460px]">

                {/* Photo card — back-left, slight left tilt */}
                <div
                  className="absolute top-[4%] left-[2%] w-[68%] z-20 bg-white border border-ink-900/8 p-3 pb-3 shadow-[0_16px_40px_-16px_rgba(60,40,30,0.18),0_4px_12px_-4px_rgba(60,40,30,0.10)]"
                  style={{ transform: 'rotate(-3deg)' }}
                >
                  <span
                    className="absolute -top-[7px] left-[36%] w-[46px] h-[14px] bg-accent-200/60 z-10"
                    style={{ transform: 'rotate(-3deg)' }}
                    aria-hidden="true"
                  />
                  <div className="relative aspect-[4/5] overflow-hidden bg-paper-300">
                    <Image
                      src={problemFraming.images[0].src}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 30vw, 60vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Dark stat card — top-right, opposite tilt */}
                <div
                  className="absolute top-0 right-0 w-[44%] z-30 bg-ink-900 text-white p-5 lg:p-6 shadow-[0_16px_40px_-16px_rgba(60,40,30,0.18),0_4px_12px_-4px_rgba(60,40,30,0.10)]"
                  style={{ transform: 'rotate(4deg)' }}
                >
                  <span
                    className="absolute -top-[6px] right-[18%] w-[42px] h-[13px] bg-brand-300/45 z-10"
                    style={{ transform: 'rotate(3deg)' }}
                    aria-hidden="true"
                  />
                  <p className="font-display text-[42px] lg:text-[48px] leading-none mb-2 tracking-[-0.02em]">
                    <em className="not-italic md:italic text-brand-300 font-normal">3 yrs</em>
                  </p>
                  <p className="font-sans text-[12px] text-paper-300 leading-[1.55]">
                    is the SEIS qualifying-period clock. Most clawback events happen because no one is monitoring it after the round closes.
                  </p>
                </div>

                {/* Footer eyebrow card — bottom-right, slight left tilt */}
                <div
                  className="absolute bottom-[2%] right-[4%] w-[44%] z-30 bg-white border border-ink-900/8 p-5 shadow-[0_16px_40px_-16px_rgba(60,40,30,0.18),0_4px_12px_-4px_rgba(60,40,30,0.10)]"
                  style={{ transform: 'rotate(-2deg)' }}
                >
                  <span
                    className="absolute -top-[5px] left-[14%] w-[38px] h-[12px] bg-accent-200/50 z-10"
                    style={{ transform: 'rotate(-2deg)' }}
                    aria-hidden="true"
                  />
                  <p className="font-display text-[15px] text-ink-900 leading-snug mb-1.5">
                    <em className="text-brand-500 italic">Specialist</em> caseload, not generalist.
                  </p>
                  <p className="font-sans text-[12.5px] text-ink-500 leading-relaxed">
                    Network practices file SEIS work weekly, not yearly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ STARTUP TYPES ============
            Background: white. Cards on paper-50 so they sit softly. */}
        <section
          className="section-padding border-t border-ink-900/10"
          style={{ backgroundColor: '#ffffff' }}
        >
          <div className="container-width">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="h-display-md mb-4 text-center">{propertyTypes.heading}</h2>
              <p className="font-sans text-[15px] text-ink-700 max-w-2xl mx-auto leading-relaxed">
                {propertyTypes.subheading}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {propertyTypes.cards.map((item, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden bg-paper-50 border border-ink-900/10 rounded-sm p-6"
                >
                  {/* Watermark icon - off-centre top-right, low opacity */}
                  <div
                    className="pointer-events-none absolute -top-4 -right-4 text-brand-500 opacity-[0.08] [&_svg]:w-32 [&_svg]:h-32"
                    aria-hidden="true"
                  >
                    {iconMap[item.iconName] || <Award className="w-32 h-32" />}
                  </div>
                  <div className="relative">
                    <h3 className="font-display text-[18px] text-ink-900 mb-2 leading-snug">{item.title}</h3>
                    <p className="font-sans text-[13.5px] text-ink-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ SERVICES GRID ============
            Background: paper-100. Each service card white with subtle
            border. Service title in display serif, hover reveals brand
            accent on arrow. */}
        <section
          className="section-padding border-t border-ink-900/10"
          style={{ backgroundColor: 'var(--paper-100)' }}
        >
          <div className="container-width">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="h-display-md mb-4 text-center">{serviceCardsHeading.title}</h2>
              <p className="font-sans text-[15px] text-ink-700 max-w-2xl mx-auto leading-relaxed">
                {serviceCardsHeading.subtitle}
              </p>
            </div>

            {/* Editorial numbered list. Each service as a row with
                oversized italic numeral. */}
            <div className="bg-white border border-ink-900/10 rounded-sm overflow-hidden">
              {services.map((service, idx) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}/`}
                  className={`group flex items-center gap-5 md:gap-8 p-5 md:p-6 hover:bg-paper-50 transition-colors ${
                    idx > 0 ? 'border-t border-ink-900/8' : ''
                  }`}
                >
                  <span className="font-display italic text-brand-500 text-[32px] md:text-[42px] leading-none w-12 md:w-16 flex-shrink-0">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <div className="flex-grow min-w-0">
                    <h3 className="font-display text-[18px] md:text-[21px] text-ink-900 leading-snug mb-1 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="font-sans text-[13.5px] text-ink-700 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                  <span className="text-brand-500 font-display italic text-[22px] flex-shrink-0 group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============ HOW IT WORKS ============
            Background: white. Steps in a horizontal strip with dotted
            lines between them. */}
        <section
          className="section-padding border-t border-ink-900/10"
          style={{ backgroundColor: '#ffffff' }}
        >
          <div className="container-width">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="h-display-md mb-4 text-center">{howItWorks.heading}</h2>
              <p className="font-sans text-[15px] text-ink-700 max-w-xl mx-auto leading-relaxed">
                {howItWorks.subheading}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
              {howItWorks.steps.map((item, i) => (
                <div key={item.step} className="relative">
                  {/* Dotted connector to next step (desktop only) */}
                  {i < howItWorks.steps.length - 1 && (
                    <div
                      className="hidden md:block absolute top-4 left-full w-full h-px"
                      style={{
                        borderTop: '1px dotted var(--ink-300)',
                        transform: 'translateX(-50%)',
                        width: '50%',
                      }}
                      aria-hidden="true"
                    />
                  )}
                  <div className="bg-white">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center font-display italic text-brand-500 text-[16px] border border-brand-500"
                      >
                        {item.step}
                      </span>
                      <span className="eyebrow">STEP {item.step}</span>
                    </div>
                    <h3 className="font-display text-[19px] text-ink-900 mb-3 leading-snug tracking-tight">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[14px] text-ink-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button onClick={openModal} className="btn-primary" type="button">
                Start free enquiry &nbsp;&rarr;
              </button>
              <p className="font-sans text-[12px] text-ink-500 mt-4 tracking-wide">
                Completely free. No strings. No obligation.
              </p>
            </div>
          </div>
        </section>

        {/* ============ REGIONAL COVERAGE ============
            Background: paper-100. Text left, region cards on right. */}
        <section
          className="section-padding border-t border-ink-900/10"
          style={{ backgroundColor: 'var(--paper-100)' }}
        >
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <h2 className="h-display-md mb-6">{regionalContext.heading}</h2>
                <div className="space-y-5 font-sans text-[15px] text-ink-700 leading-[1.8]">
                  {regionalContext.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-3">
                {regionalContext.regions.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-5 bg-white border border-ink-900/8 rounded-sm"
                  >
                    <span
                      className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center text-brand-600"
                      style={{ backgroundColor: 'var(--brand-50)' }}
                    >
                      <MapPin className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="font-display text-[15px] text-ink-900 mb-1 tracking-tight">
                        {item.label}<span className="text-ink-500">: </span>
                        <span className="text-ink-700 font-sans text-[13px]">{item.towns}</span>
                      </p>
                      <p className="font-sans text-[12.5px] text-ink-700 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ LOCATION LINKS ============
            Background: white. Grid of city links as editorial buttons. */}
        <section
          className="section-padding border-t border-ink-900/10"
          style={{ backgroundColor: '#ffffff' }}
        >
          <div className="container-width">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="h-display-md mb-4 text-center">{areasSection.heading}</h2>
              <p className="font-sans text-[15px] text-ink-700 max-w-2xl mx-auto leading-relaxed">
                {areasSection.subheading}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-10">
              {topAreas.map(area => (
                <Link
                  key={area}
                  href={`/location/${toSlug(area)}/`}
                  className="group flex items-center justify-between gap-2 px-4 py-3 bg-paper-50 border border-ink-900/8 rounded-sm hover:bg-white hover:border-brand-500 transition-colors"
                >
                  <span className="font-display text-[14.5px] text-ink-900 tracking-tight group-hover:text-brand-500 transition-colors">
                    {area}
                  </span>
                  <span className="text-brand-500 text-[15px] font-display italic opacity-0 group-hover:opacity-100 transition-opacity">
                    &rarr;
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link href="/location/" className="btn-secondary">
                {areasSection.browseAllText}
              </Link>
            </div>
          </div>
        </section>

        {/* ============ PRICING ============
            Background: paper-100. Tier cards on white. Finance callout
            on solid ink-900 with paper-100 text (high contrast). */}
        <section
          className="section-padding border-t border-ink-900/10"
          style={{ backgroundColor: 'var(--paper-100)' }}
        >
          <div className="container-width">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="h-display-md mb-4 text-center">{pricingSection.heading}</h2>
              <p className="font-sans text-[15px] text-ink-700 max-w-2xl mx-auto leading-relaxed">
                {pricingSection.subheading}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {pricingTiers.map(tier => (
                <div
                  key={tier.slug}
                  className="bg-white border border-ink-900/10 rounded-sm p-6"
                >
                  <h3 className="font-display text-[19px] text-ink-900 mb-3 tracking-tight">
                    {tier.treatment}
                  </h3>
                  <p className="font-display italic text-brand-500 text-[28px] leading-none mb-2">
                    £{tier.priceFrom.toLocaleString()}
                    <span className="font-display text-[16px] text-ink-500 not-italic">
                      {' '}&ndash; £{tier.priceTo.toLocaleString()}
                    </span>
                  </p>
                  <p className="font-sans text-[10.5px] text-ink-500 mb-4 tracking-[0.15em] uppercase">
                    {tier.serviceIncludes} &middot; {tier.typicalDuration}
                  </p>
                  <p className="font-sans text-[13.5px] text-ink-700 leading-relaxed">
                    {tier.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Finance callout - ink-900 solid with paper-100 heading
                and paper-300/90 body. White button, brand-700 text. */}
            <div
              className="rounded-sm p-8 md:p-10 text-center"
              style={{ backgroundColor: 'var(--ink-900)' }}
            >
              <h3
                className="font-display text-[22px] md:text-[26px] mb-3 tracking-tight"
                style={{ color: 'var(--paper-100)' }}
              >
                {pricingSection.financeHeading}
              </h3>
              <p
                className="font-sans text-[14px] mb-6 max-w-xl mx-auto leading-relaxed"
                style={{ color: 'rgba(245, 242, 234, 0.82)' }}
              >
                {pricingSection.financeSubheading}
              </p>
              <button
                onClick={openModal}
                className="bg-white text-brand-700 font-sans font-medium text-[13px] py-3 px-8 rounded-sm hover:bg-paper-100 transition-colors uppercase tracking-[0.15em]"
                type="button"
              >
                Discuss payment &nbsp;&rarr;
              </button>
            </div>
          </div>
        </section>

        {/* ============ WHY US ============ */}
        <section
          className="section-padding border-t border-ink-900/10"
          style={{ backgroundColor: '#ffffff' }}
        >
          <div className="container-width">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="h-display-md mb-4 text-center">{trustPoints.heading}</h2>
              <p className="font-sans text-[15px] text-ink-700 max-w-2xl mx-auto leading-relaxed">
                {trustPoints.subheading}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {trustPoints.points.map((item, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden bg-paper-50 border border-ink-900/10 rounded-sm p-5"
                >
                  {/* Watermark icon - off-centre top-right, low opacity */}
                  <div
                    className="pointer-events-none absolute -top-4 -right-4 text-brand-500 opacity-[0.08] [&_svg]:w-28 [&_svg]:h-28"
                    aria-hidden="true"
                  >
                    {iconMap[item.iconName] || <Award className="w-28 h-28" />}
                  </div>
                  <div className="relative">
                    <h3 className="font-display text-[16px] text-ink-900 mb-2 tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[13px] text-ink-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section
          className="section-padding border-t border-ink-900/10"
          style={{ backgroundColor: 'var(--paper-100)' }}
        >
          <div className="container-width max-w-3xl">
            <FAQ faqs={homepageFaqs} title={faqSectionTitle} />
          </div>
        </section>

        {/* ============ FINAL CTA ============
            Solid brand-500 purple. WHITE heading. paper-100 body (not
            brand-200 which fails contrast). White button with brand-700
            text. */}
        <section
          className="py-20 md:py-24 border-t border-ink-900/10"
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
              className="font-display text-[32px] md:text-[44px] leading-[1.0] tracking-tight mb-5"
              style={{ color: '#ffffff' }}
            >
              {ctaSection.heading}
            </h2>
            <p
              className="font-sans text-[15px] max-w-2xl mx-auto mb-8 leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.88)' }}
            >
              {ctaSection.subheading}
            </p>
            <button
              onClick={openModal}
              className="bg-white font-sans font-medium text-[13px] py-4 px-10 rounded-sm hover:bg-paper-100 transition-colors uppercase tracking-[0.15em]"
              style={{ color: 'var(--brand-700)' }}
              type="button"
            >
              Get matched now &nbsp;&rarr;
            </button>
            <p
              className="font-sans text-[11px] mt-6 tracking-[0.18em] uppercase"
              style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            >
              2 min &middot; Free &middot; No obligation
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
