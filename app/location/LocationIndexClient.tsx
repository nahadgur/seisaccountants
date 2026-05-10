'use client';

// app/location/LocationIndexClient.tsx
// Location index hub. 12 cities currently kept (2026-05-02).

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { LOCATIONS, toSlug } from '@/data/locations';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';
import { TrustBadges } from '@/components/TrustBadges';
import { LOCATION_FAQS } from './faqs';

const REGION_BLURBS: Record<string, string> = {
 'London & South East':
 'Highest concentration of UK startup activity. Specialism depth covers fintech, AI, life sciences, deep-tech university spinouts, and creative tech.',
 'Midlands':
 'Logistics-tech and supply-chain technology cluster around the M1/A14 corridor, plus growing healthtech and creative industry presence.',
 'North West':
 'Manchester-anchored ecosystem with strong B2B SaaS, ecommerce, and the MediaCity broadcast / creative-tech cluster in Salford.',
 'North East & Yorkshire':
 'Advanced manufacturing, energy and net-zero technology, plus a growing software cluster anchored on the Newcastle and West Yorkshire universities.',
 'South West & Wales':
 'GCHQ-anchored cyber-security cluster in Cheltenham, marine and offshore renewable specialism in Swansea.',
};

interface Props {
 pageUrl: string;
}

export default function LocationIndexClient({ pageUrl }: Props) {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const openModal = () => setIsModalOpen(true);

 const totalCities = Object.values(LOCATIONS).flat().length;

 return (
 <>
 <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
 <Header onOpenModal={openModal} />
 <main className="flex-grow">

 {/* HERO */}
 <section className="container-width pt-10 md:pt-14 pb-10 md:pb-14">
 <Breadcrumbs items={[{ label: 'Locations' }]} />

 <div className="max-w-3xl mt-8 md:mt-12">
 <div className="masthead mb-5">
 <span>LOCATIONS &nbsp;&middot;&nbsp; {totalCities} CITIES</span>
 </div>
 <h1 className="font-display text-[clamp(2rem,5.5vw,3.6rem)] leading-[1.02] tracking-tight text-ink-900 mb-6">
 Locations <em className="text-brand-500 italic">we cover</em>.
 </h1>
 <p className="font-sans text-[16px] md:text-[17px] text-ink-700 leading-[1.7] mb-8">
 We match UK startups with vetted specialist accountants nationwide.
 These are the {totalCities} city catchments where the network has live
 engagements and dedicated landing pages — although the matching service
 itself covers the whole of the UK by remote and cloud accounting.
 </p>
 <button
 onClick={openModal}
 className="btn-primary"
 type="button"
 >
 Get matched in any UK city &rarr;
 </button>
 </div>
 </section>

 <TrustBadges />

 {/* CITY GRID — region-grouped, card-style */}
 <section
 className="section-padding border-t border-ink-900/10"
 style={{ backgroundColor: 'var(--paper-100)' }}
 >
 <div className="container-width">
 <div className="max-w-2xl mb-10 md:mb-14">
 <div className="masthead mb-4">
 <span>ALL LOCATIONS</span>
 </div>
 <h2 className="font-display text-[26px] md:text-[32px] text-ink-900 leading-[1.05] tracking-tight mb-4">
 Pick your <em className="text-brand-500 italic">city</em>
 </h2>
 <p className="font-sans text-[14px] md:text-[15px] text-ink-700 leading-relaxed">
 Each city page carries hand-written ecosystem context, sector
 specialism notes, recent local engagement examples, and city-specific
 FAQs. The matching service is the same nationwide; the depth of
 local context differs.
 </p>
 </div>

 <div className="space-y-10 md:space-y-14">
 {Object.entries(LOCATIONS).map(([region, cities]) => (
 <div key={region}>
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-6">
 <div className="lg:col-span-4">
 <div className="masthead mb-3">
 <span>{region.toUpperCase()}</span>
 </div>
 <p className="font-sans text-[13.5px] text-ink-700 leading-relaxed">
 {REGION_BLURBS[region] ?? `Cities we cover in ${region}.`}
 </p>
 </div>
 <div className="lg:col-span-8">
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
 {cities.map(city => (
 <Link
 key={city}
 href={`/location/${toSlug(city)}/`}
 className="group flex items-center justify-between gap-3 p-4 bg-white border border-ink-900/10 rounded-sm hover:border-brand-500 transition-colors"
 >
 <div className="flex items-center gap-3">
 <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0" aria-hidden="true" />
 <span className="font-display text-[16px] text-ink-900 group-hover:text-brand-500 tracking-tight transition-colors">
 {city}
 </span>
 </div>
 <ArrowRight className="w-4 h-4 text-ink-500 group-hover:text-brand-500 group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
 </Link>
 ))}
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* OUTSIDE THESE CITIES */}
 <section className="section-padding border-t border-ink-900/10">
 <div className="container-width max-w-content">
 <div className="masthead mb-4">
 <span>OUTSIDE THESE CITIES</span>
 </div>
 <h2 className="font-display text-[24px] md:text-[28px] text-ink-900 leading-[1.05] tracking-tight mb-5">
 Not on the list? <em className="text-brand-500 italic">The match still works.</em>
 </h2>
 <div className="space-y-4 font-sans text-[15px] text-ink-700 leading-[1.7] max-w-3xl">
 <p>
 The network covers the whole of the UK by cloud accounting. Most
 engagements run remote regardless of where the accountant is physically
 based — Xero, QuickBooks, and FreeAgent make geographic proximity
 effectively irrelevant for the day-to-day work. The 12 cities listed
 above are where we have hand-written local content because they earned
 search demand. If your city is not on the list, the matching
 process is exactly the same; the public-facing page is generic.
 </p>
 <p>
 Cities currently watched but not yet added (will appear when query demand
 develops): Hull, Bath, Leeds, Crawley, Birmingham, Bristol, Edinburgh,
 Glasgow, Liverpool, Sheffield, Cardiff, Brighton, Belfast.
 </p>
 </div>
 <button
 onClick={openModal}
 className="btn-primary mt-8"
 type="button"
 >
 Get matched in any UK city &rarr;
 </button>
 </div>
 </section>

 {/* FAQ */}
 <section
 className="section-padding border-t border-ink-900/10"
 style={{ backgroundColor: 'var(--paper-100)' }}
 >
 <div className="container-width max-w-content">
 <FAQ faqs={LOCATION_FAQS} title="Locations: Common Questions" />
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

