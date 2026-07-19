'use client';

// app/about/AboutClient.tsx - Paper Tape edition
// First-party About page. Generic, verifiable facts about the practice
// only. No fabricated reviews, no SEIS-specialist credential claimed for
// the firm itself; the SEIS and EIS lifecycle is described as the service
// this site delivers.

import { useState } from 'react';
import Link from 'next/link';
import {
 BadgeCheck, PoundSterling, Cloud, FileCheck, CheckCircle, ArrowRight, ExternalLink, MapPin,
} from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';

const STANDARDS = [
 {
 icon: <BadgeCheck className="w-5 h-5" />,
 title: 'A named, regulated accountant',
 desc: 'Your work is led by Preetesh Parmar FCCA, a Fellow of the Association of Chartered Certified Accountants and owner of Tidy Money Ltd. You can verify the practice independently at tidymoney.com before you send a single figure.',
 },
 {
 icon: <PoundSterling className="w-5 h-5" />,
 title: 'Fixed written quotes',
 desc: 'Every engagement starts with a fixed written quote based on your round and the scheme work involved. The price we quote is the price you pay, and you are under no obligation to proceed.',
 },
 {
 icon: <Cloud className="w-5 h-5" />,
 title: 'Live cloud accounting',
 desc: 'The practice has run clients on live cloud accounting since 2009 and is a FreeAgent Gold Partner. Your records stay current through the year rather than being reconstructed under deal pressure.',
 },
 {
 icon: <FileCheck className="w-5 h-5" />,
 title: 'The full SEIS and EIS lifecycle',
 desc: 'Advance assurance, share issuance and cap table work, SEIS1 and EIS1 compliance statements, SEIS3 and EIS3 investor certificates, and three-year qualifying-period monitoring, handled end to end.',
 },
];

export default function AboutClient() {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const openModal = () => setIsModalOpen(true);

 return (
 <>
 <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
 <Header onOpenModal={openModal} />

 <main className="flex-grow" style={{ backgroundColor: 'var(--paper-100)' }}>
 <div className="container-width py-12 md:py-16 max-w-4xl">
 <Breadcrumbs items={[{ label: 'About' }]} />

 {/* Hero */}
 <h1 className="font-display text-[40px] md:text-[54px] text-ink-900 leading-[0.98] tracking-tighter mb-5">
 The practice behind <em className="text-brand-500 italic">this service</em>
 </h1>
 <p className="font-sans text-[15.5px] text-ink-700 leading-relaxed mb-8 max-w-2xl">
 Accountancy services on this site are delivered by Tidy Money Ltd, an ACCA-regulated cloud practice that has worked this way since 2009. We prepare and file SEIS and EIS scheme work for UK founders, from advance assurance through three-year qualifying-period monitoring.
 </p>
 <div className="flex flex-wrap gap-3 mb-14">
 <button onClick={openModal} className="btn-primary" type="button">
 Get a Fixed Quote &nbsp;&rarr;
 </button>
 <a
 href="https://www.tidymoney.com/"
 target="_blank"
 rel="noopener"
 className="inline-flex items-center gap-1.5 font-display italic text-[14px] text-brand-500 hover:text-brand-700 self-center"
 >
 Verify at tidymoney.com <ExternalLink className="w-3.5 h-3.5" />
 </a>
 </div>

 {/* Who you are dealing with */}
 <section className="mb-14">
 <h2 className="font-display text-[26px] md:text-[30px] text-ink-900 mb-5 tracking-tight leading-tight">
 Who you are <em className="text-brand-500 italic">dealing with</em>
 </h2>
 <div className="space-y-4 font-sans text-[14.5px] text-ink-700 leading-relaxed max-w-2xl">
 <p>
 Accountancy services on this site are provided by Tidy Money Ltd, the practice of Preetesh Parmar, a Fellow of the Association of Chartered Certified Accountants. A named person, a real regulated firm, and a website you can check before you get in touch.
 </p>
 <p>
 The practice is based in Stanmore HA7 and runs on cloud accounting software, so engagements work the same wherever your company is registered in the UK. Most founders never need a face-to-face meeting.
 </p>
 <p>
 For SEIS and EIS rounds, the work covers the full documentation chain that protects investor relief: the advance assurance narrative, the share-issue sequencing, the SEIS1 and EIS1 reconciliation, certificate distribution, and qualifying-period monitoring.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
 {STANDARDS.map((item, i) => (
 <div key={i} className="p-6 bg-white border border-ink-900/10 rounded-sm">
 <div className="mb-3 text-brand-500">{item.icon}</div>
 <h3 className="font-display text-[16px] text-ink-900 mb-2 tracking-tight leading-snug">{item.title}</h3>
 <p className="font-sans text-[13.5px] text-ink-700 leading-relaxed">{item.desc}</p>
 </div>
 ))}
 </div>

 <div className="flex flex-wrap items-center gap-3 mt-6 font-sans text-[13px] text-ink-700">
 <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-brand-500" /> Stanmore, Harrow &middot; HA7</span>
 <span className="inline-flex items-center gap-1.5"><BadgeCheck className="w-3.5 h-3.5 text-brand-500" /> FreeAgent Gold Partner</span>
 <span className="inline-flex items-center gap-1.5"><Cloud className="w-3.5 h-3.5 text-brand-500" /> Cloud practice since 2009</span>
 </div>
 </section>

 {/* How an engagement works */}
 <section className="mb-14">
 <h2 className="font-display text-[26px] md:text-[30px] text-ink-900 mb-6 tracking-tight leading-tight">
 How an <em className="text-brand-500 italic">engagement</em> works
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
 {[
 { step: '01', title: 'Tell us what you need', desc: 'The form takes about a minute: your name, contact details, and the SEIS or EIS stage you are at. No sensitive figures at this point.' },
 { step: '02', title: 'We send a fixed written quote', desc: 'We come back within 48 hours with a fixed written quote based on your round and the scheme work involved. The price we quote is the price you pay.' },
 { step: '03', title: 'We prepare and file', desc: 'Once you accept, we gather your records over secure cloud software, prepare the work, and file with HMRC as your authorised agent, ahead of your round or deadline.' },
 ].map(item => (
 <div key={item.step} className="p-6 bg-white border border-ink-900/10 rounded-sm">
 <div className="font-display italic text-brand-500 text-[20px] mb-3">{item.step}</div>
 <h3 className="font-display text-[16px] text-ink-900 mb-2 tracking-tight leading-snug">{item.title}</h3>
 <p className="font-sans text-[13.5px] text-ink-700 leading-relaxed">{item.desc}</p>
 </div>
 ))}
 </div>
 </section>

 {/* Who we work with */}
 <section className="mb-14">
 <h2 className="font-display text-[24px] md:text-[28px] text-ink-900 mb-5 tracking-tight leading-tight">
 Who we <em className="text-brand-500 italic">work with</em>
 </h2>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
 {[
 'First-time founders raising a SEIS-only seed round',
 'Companies running combined SEIS-and-EIS rounds',
 'Knowledge-intensive companies raising past the SEIS cap',
 'Founders inside a live three-year qualifying period',
 'Companies preparing SEIS1 and EIS1 compliance statements',
 'Startups claiming R&D tax credits alongside scheme work',
 ].map((item, i) => (
 <div key={i} className="flex items-start gap-2.5 p-4 bg-white border border-ink-900/10 rounded-sm">
 <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
 <span className="font-sans text-[13.5px] text-ink-900">{item}</span>
 </div>
 ))}
 </div>
 </section>

 {/* CTA */}
 <section className="p-8 md:p-10 rounded-sm text-center" style={{ backgroundColor: 'var(--ink-900)', color: 'var(--paper-100)' }}>
 <h2 className="font-display text-[26px] md:text-[32px] text-white mb-3 tracking-tight leading-tight">
 Get a fixed quote for your SEIS round
 </h2>
 <p className="font-sans text-[14px] text-paper-100/80 leading-relaxed mb-7 max-w-xl mx-auto">
 Tell us your stage and we come back within 48 hours with a fixed written quote. No obligation to proceed.
 </p>
 <div className="flex flex-col sm:flex-row gap-3 justify-center">
 <button onClick={openModal} className="btn-primary" type="button">
 Get a Fixed Quote &nbsp;&rarr;
 </button>
 <Link
 href="/services/"
 className="inline-flex items-center justify-center gap-2 font-sans text-[14px] text-white border border-white/30 rounded-sm px-6 py-3 hover:bg-white/10 transition-colors"
 >
 Browse Services <ArrowRight className="w-4 h-4" />
 </Link>
 </div>
 </section>

 </div>
 </main>
 <Footer />
 </>
 );
}
