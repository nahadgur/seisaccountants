'use client';

// app/contact/ContactPageClient.tsx - Paper Tape edition
import { useState } from 'react';
import Link from 'next/link';
import { Mail, MessageSquare, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { LeadFormModal } from '@/components/LeadFormModal';

export default function ContactPageClient() {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const openModal = () => setIsModalOpen(true);

 return (
 <>
 <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
 <Header onOpenModal={openModal} />

 <main
 className="flex-grow"
 style={{ backgroundColor: 'var(--paper-100)' }}
 >
 <div className="container-width py-12 md:py-16 max-w-4xl">
 <Breadcrumbs items={[{ label: 'Contact' }]} />

 <h1 className="font-display text-[40px] md:text-[52px] text-ink-900 leading-[0.98] tracking-tighter mb-5">
 Contact <em className="text-brand-500 italic">us.</em>
 </h1>
 <p className="font-sans text-[15px] text-ink-700 leading-relaxed mb-12 max-w-2xl">
 We are SEIS and EIS accountants for UK founders. Here is how to reach us depending on what you need.
 </p>

 {/* Option 1: Find an accountant */}
 <section className="mb-10 p-7 md:p-8 bg-white border border-ink-900/10 rounded-sm relative">
 <div className="absolute top-0 left-0 w-1 h-full bg-brand-500" aria-hidden="true" />
 <div className="flex items-start gap-4 mb-5">
 <div
 className="w-11 h-11 rounded-sm flex items-center justify-center flex-shrink-0 text-white"
 style={{ backgroundColor: 'var(--brand-500)' }}
 >
 <CheckCircle className="w-5 h-5" />
 </div>
 <div>
 <h2 className="font-display text-[22px] text-ink-900 mb-3 tracking-tight leading-snug">
 Need SEIS or EIS <em className="text-brand-500 italic">scheme work?</em>
 </h2>
 <p className="font-sans text-[14.5px] text-ink-700 leading-relaxed">
 Submit a short enquiry with your stage and what you need. We come back within 48 hours with a fixed written quote for the scope of work, with no obligation to proceed.
 </p>
 </div>
 </div>
 <button
 onClick={openModal}
 className="btn-primary"
 type="button"
 >
 Start free enquiry &nbsp;&rarr;
 </button>
 </section>

 {/* How it works */}
 <section className="mb-12">
 <h2 className="font-display text-[26px] md:text-[30px] text-ink-900 mb-6 tracking-tight leading-tight">
 How an <em className="text-brand-500 italic">engagement</em> works
 </h2>
 <div className="space-y-3">
 {[
 { num: 1, title: 'You submit your details', desc: 'Tell us your name, contact details, and the SEIS or EIS stage you are at. This takes under 60 seconds, and no sensitive figures are needed at this point.' },
 { num: 2, title: 'We send a fixed written quote', desc: 'We come back within 48 hours with a fixed written quote based on your round and the scheme work involved (for example advance assurance, SEIS1 compliance, or qualifying-period monitoring). The price we quote is the price you pay.' },
 { num: 3, title: 'We prepare and file', desc: 'Once you accept the quote, we prepare the work and file it with HMRC as your authorised agent, well ahead of any round or deadline.' },
 { num: 4, title: 'No obligation', desc: 'There is no obligation to proceed before you accept the quote, and no cost to ask.' },
 ].map(step => (
 <div key={step.num} className="flex gap-4 p-5 bg-white border border-ink-900/10 rounded-sm">
 <div
 className="w-8 h-8 rounded-full border border-brand-500 flex items-center justify-center flex-shrink-0 font-display italic text-brand-500 text-[15px]"
 >
 {step.num}
 </div>
 <div>
 <h3 className="font-display text-[15px] text-ink-900 mb-1.5 tracking-tight leading-snug">{step.title}</h3>
 <p className="font-sans text-[13.5px] text-ink-700 leading-relaxed">{step.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* Other contact reasons */}
 <section className="mb-12">
 <h2 className="font-display text-[26px] md:text-[30px] text-ink-900 mb-6 tracking-tight leading-tight">
 Other reasons to <em className="text-brand-500 italic">get in touch</em>
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

 <div className="relative overflow-hidden p-6 bg-white border border-ink-900/10 rounded-sm">
 <div
 className="pointer-events-none absolute -top-4 -right-4 text-brand-500 opacity-[0.08] [&_svg]:w-32 [&_svg]:h-32"
 aria-hidden="true"
 >
 <MessageSquare className="w-32 h-32" />
 </div>
 <div className="relative">
 <h3 className="font-display text-[17px] text-ink-900 mb-2 tracking-tight leading-snug">General enquiries</h3>
 <p className="font-sans text-[13.5px] text-ink-700 mb-4 leading-relaxed">
 Questions about how the service works, suggestions, or press enquiries.
 </p>
 <a
 href="mailto:hello@seisaccountants.co.uk"
 className="font-display italic text-[14px] text-brand-500 hover:text-brand-700 inline-flex items-center gap-1.5"
 >
 hello@seisaccountants.co.uk
 <ArrowRight className="w-3.5 h-3.5" />
 </a>
 </div>
 </div>

 <div className="relative overflow-hidden p-6 bg-white border border-ink-900/10 rounded-sm">
 <div
 className="pointer-events-none absolute -top-4 -right-4 text-brand-500 opacity-[0.08] [&_svg]:w-32 [&_svg]:h-32"
 aria-hidden="true"
 >
 <Shield className="w-32 h-32" />
 </div>
 <div className="relative">
 <h3 className="font-display text-[17px] text-ink-900 mb-2 tracking-tight leading-snug">Privacy &amp; data requests</h3>
 <p className="font-sans text-[13.5px] text-ink-700 mb-4 leading-relaxed">
 Request a copy of your data, ask us to delete your details, or make a GDPR enquiry.
 </p>
 <a
 href="mailto:hello@seisaccountants.co.uk"
 className="font-display italic text-[14px] text-brand-500 hover:text-brand-700 inline-flex items-center gap-1.5"
 >
 hello@seisaccountants.co.uk
 <ArrowRight className="w-3.5 h-3.5" />
 </a>
 </div>
 </div>

 <div className="relative overflow-hidden p-6 bg-white border border-ink-900/10 rounded-sm">
 <div
 className="pointer-events-none absolute -top-4 -right-4 text-brand-500 opacity-[0.08] [&_svg]:w-32 [&_svg]:h-32"
 aria-hidden="true"
 >
 <Mail className="w-32 h-32" />
 </div>
 <div className="relative">
 <h3 className="font-display text-[17px] text-ink-900 mb-2 tracking-tight leading-snug">Verify the practice</h3>
 <p className="font-sans text-[13.5px] text-ink-700 mb-4 leading-relaxed">
 Accountancy services are delivered by Tidy Money Ltd, an ACCA-regulated practice. You can check the firm independently before you get in touch.
 </p>
 <a
 href="https://www.tidymoney.com/"
 target="_blank"
 rel="noopener"
 className="font-display italic text-[14px] text-brand-500 hover:text-brand-700 inline-flex items-center gap-1.5"
 >
 tidymoney.com
 <ArrowRight className="w-3.5 h-3.5" />
 </a>
 </div>
 </div>

 <div
 className="p-6 rounded-sm border border-ink-900/10"
 style={{ backgroundColor: 'var(--paper-50)' }}
 >
 <div
 className="w-10 h-10 rounded-sm flex items-center justify-center mb-4 text-ink-700"
 style={{ backgroundColor: 'var(--paper-300)' }}
 >
 <CheckCircle className="w-5 h-5" />
 </div>
 <h3 className="font-display text-[17px] text-ink-900 mb-2 tracking-tight leading-snug">Response time</h3>
 <p className="font-sans text-[13.5px] text-ink-700 leading-relaxed">
 We respond to all emails within two working days. Data access requests are answered within the 30-day window set by UK GDPR.
 </p>
 </div>
 </div>
 </section>

 {/* About */}
 <section
 className="mb-10 p-6 rounded-sm border border-ink-900/10"
 style={{ backgroundColor: 'var(--paper-50)' }}
 >
 <h2 className="font-display text-[18px] text-ink-900 mb-3 tracking-tight leading-snug">
 About this service
 </h2>
 <p className="font-sans text-[13.5px] text-ink-700 leading-relaxed mb-3">
 seisaccountants.co.uk provides SEIS and EIS accountancy for UK founders, covering advance assurance, share issuance, SEIS1 and EIS1 compliance, investor certificates, and three-year qualifying-period monitoring. Accountancy services are delivered by Tidy Money Ltd, an ACCA-regulated practice.
 </p>
 <p className="font-sans text-[13.5px] text-ink-700 leading-relaxed">
 See our{' '}
 <Link href="/privacy/" className="font-display italic text-brand-500 hover:text-brand-700">Privacy Policy</Link>
 {' '}for how we handle your data, and our{' '}
 <Link href="/terms/" className="font-display italic text-brand-500 hover:text-brand-700">Terms of Use</Link>
 {' '}for the rules on using this site.
 </p>
 </section>

 </div>
 </main>
 <Footer />
 </>
 );
}
