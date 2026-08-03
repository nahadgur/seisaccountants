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

// Claims here must match data/provider.ts. The regulated status belongs to
// Tidy Money Ltd, not to this brand, and the site does not state insurance
// cover. Nothing on this card set may promise an HMRC outcome or timescale.
const whyCards = [
 { icon: 'Star', title: 'Scheme work, not general practice', desc: 'Advance assurance, share issuance, compliance statements, investor certificates and qualifying-period monitoring are the day-to-day caseload rather than an occasional add-on.' },
 { icon: 'Shield', title: 'A named regulated practice', desc: 'Accountancy is delivered by Tidy Money Ltd, an ACCA-regulated practice owned by Preetesh Parmar FCCA. Verifiable at tidymoney.com before you get in touch.' },
 { icon: 'Clock', title: 'Worked in round order', desc: 'Eligibility first, then advance assurance, then the share issue, then the compliance statement. Steps taken out of order are the most common reason relief fails.' },
 { icon: 'CheckCircle', title: 'Fixed written quote', desc: 'A fixed written quote within 48 hours, priced per filing or per round. No obligation at any stage.' },
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

function SectionHeading({ title }: { title: React.ReactNode }) {
 return (
 <div className="mb-5"><h2 className="font-display text-[26px] md:text-[30px] text-ink-900 leading-[1.05] tracking-tight">
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

 // Fallback set for cities without bespoke hub FAQs. Kept deliberately
 // narrow: no market-rate figures we cannot evidence, no third-party
 // "shop around" framing, and nothing that describes a local adviser.
 const cityFaqs = hub?.faqs && hub.faqs.length > 0 ? hub.faqs : [
 {
 question: `Do I need an accountant in ${cityName} to handle a SEIS or EIS round?`,
 answer: `No. Advance assurance applications, compliance statements and investor certificates are all handled with HMRC electronically, and the supporting records run over cloud accounting software, so the work does not depend on being in the same place as you. What matters far more is whether the scheme work is routine for whoever does it. The practice behind this site is in Stanmore HA7 and works with founders across the UK, including ${cityName}.`,
 },
 {
 question: `What does SEIS and EIS work cost?`,
 answer: `Scheme work is priced as a fixed fee per filing or per round rather than hourly. Advance assurance and compliance statements are quoted separately because they are separate pieces of work at different points in the round, and qualifying-period monitoring is an annual retainer. The quote sets out what is covered and what is not before you commit. Published ranges for each service are on the relevant service page.`,
 },
 {
 question: `Can you claim R&D tax credits alongside the scheme work?`,
 answer: `Yes, and for companies in ${profile.dominantIndustries.slice(0, 2).join(' and ')} the two often run together. It is worth noting they are separate regimes: an R&D claim does not affect whether a company qualifies for SEIS or EIS, but the way costs are categorised in the accounts affects both, and the SEIS or EIS use-of-funds narrative given to HMRC should be consistent with what the R&D claim later says the money was spent on.`,
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
 SEIS accountants<br />
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
 View this service <ArrowRight className="w-3.5 h-3.5" />
 </span>
 </Link>
 );
 })}
 </div>
 </section>

 {/* Local SEIS and EIS deal-flow narrative. Distinct heading from the
 ecosystem section below, which covers the institutions rather than
 the deal flow. Both used to be titled "Inside the X startup
 ecosystem", which put two identical H2s on every hub city page. */}
 {deep && deep.deepNarrative.length > 0 && (
 <section>
 <SectionHeading
 title={<>SEIS and EIS in <em className="text-brand-500 italic">{cityName}</em></>}
 />
 <div className="space-y-5 font-sans text-[15px] text-ink-700 leading-[1.8]">
 {deep.deepNarrative.map((p, i) => <p key={i}>{p}</p>)}
 </div>
 </section>
 )}

 {/* Where specialist scheme work makes a difference here */}
 {deep && deep.whyMattersHere.length > 0 && (
 <section>
 <SectionHeading
 title={<>Where specialism <em className="text-brand-500 italic">moves the needle</em> in {cityName}</>}
 />
 <div className="space-y-5 font-sans text-[15px] text-ink-700 leading-[1.8]">
 {deep.whyMattersHere.map((p, i) => <p key={i}>{p}</p>)}
 </div>
 </section>
 )}

 {/* Illustrative worked examples. These are scenario types, NOT client
 work: no real engagement is described, named or implied. The
 heading and the per-card label must keep saying so. They were
 previously presented as "Recent matches" / "MATCH 01", which read
 as a real client list. */}
 {deep && deep.localExamples.length > 0 && (
 <section>
 <SectionHeading
 title={<>Worked examples for <em className="text-brand-500 italic">{cityName}</em> founders</>}
 />
 <p className="font-sans text-[13.5px] text-ink-500 leading-relaxed mb-4 max-w-2xl">
 Illustrative scenarios showing how the scheme work runs in practice. They are constructed examples, not accounts of client engagements.
 </p>
 <div className="space-y-4">
 {deep.localExamples.map((ex, i) => (
 <div key={i} className="bg-white border border-ink-900/10 rounded-sm p-6 relative">
 <div className="absolute top-0 left-0 w-1 h-full bg-brand-500" aria-hidden="true" />
 <div className="masthead mb-3 !border-0 !pb-0">
 <span>ILLUSTRATIVE EXAMPLE {String(i + 1).padStart(2, '0')}</span>
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
 title={<>Inside the <em className="text-brand-500 italic">{cityName}</em> startup ecosystem</>}
 />
 <div className="font-sans text-[15px] text-ink-700 leading-[1.75] whitespace-pre-line">
 {hub.ecosystemDeep}
 </div>
 </section>
 )}

 {/* What the local ecosystem changes about the scheme work */}
 {hub?.whyMatchHere && (
 <section>
 <SectionHeading
 title={<>What {cityName} <em className="text-brand-500 italic">changes</em> about a SEIS or EIS round</>}
 />
 <div className="font-sans text-[15px] text-ink-700 leading-[1.75] whitespace-pre-line">
 {hub.whyMatchHere}
 </div>
 </section>
 )}

 {/* Local ecosystem grid - always shown */}
 <section>
 <SectionHeading
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
 title={<>What you get on a <em className="text-brand-500 italic">{cityName}</em> engagement</>}
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

 {/* SEIS Diagnostic CTA — sits between local services info and
 the FAQ. City-page readers are typically searching for local
 SEIS expertise; the diagnostic is the lowest-friction first
 step before requesting a match. */}
 <Link
 href="/tools/seis-diagnostic/"
 className="group block bg-ink-900 text-white rounded-sm p-6 hover:bg-brand-700 transition-colors"
 >
 <div className="flex items-start gap-5 flex-wrap md:flex-nowrap">
 <div className="flex-1">
 <span className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.22em] uppercase text-brand-300 font-semibold mb-3">
 Free check &middot; No sign-up
 </span>
 <p className="font-display text-[20px] md:text-[22px] text-white leading-[1.15] tracking-tight mb-2">
 Before you talk to a {cityName} specialist, <em className="text-brand-300 italic">check eligibility.</em>
 </p>
 <p className="font-sans text-[13px] text-paper-300 leading-relaxed max-w-xl">
 Type your company name. We pull your record from Companies House and run the SEIS, EIS, and knowledge-intensive qualifying tests in seconds.
 </p>
 </div>
 <span className="inline-flex items-center gap-2 font-display italic text-[14px] text-brand-300 whitespace-nowrap mt-2 group-hover:translate-x-1 transition-transform">
 Run the check <ArrowRight className="w-4 h-4" aria-hidden="true" />
 </span>
 </div>
 </Link>

 {/* FAQ */}
 <div>
 <FAQ faqs={cityFaqs} title={`SEIS accountants in ${cityName}: common questions`} />
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
 Ready to move your<br />{cityName} round forward?
 </h2>
 <p
 className="font-sans text-[15px] max-w-2xl mx-auto mb-8 leading-relaxed"
 style={{ color: 'rgba(255, 255, 255, 0.88)' }}
 >
 Submit your enquiry in under two minutes and we come back within 48 hours with a fixed written quote for your {cityName} SEIS and EIS work, with no obligation at any stage.
 </p>
 <button
 onClick={openModal}
 className="bg-white font-sans font-medium text-[13px] py-4 px-10 rounded-sm hover:bg-paper-100 transition-colors uppercase tracking-[0.15em]"
 style={{ color: 'var(--brand-700)' }}
 type="button"
 >
 Get a Fixed Quote &nbsp;&rarr;
 </button>
 </div>
 </section>
 </main>
 <Footer />
 </>
 );
}
