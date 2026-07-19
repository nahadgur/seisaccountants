// app/terms/page.tsx - Paper Tape edition
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
 title: 'Terms of Use',
 description: 'The terms on which you may use seisaccountants.co.uk, SEIS and EIS accountants for UK founders.',
 alternates: { canonical: `${siteConfig.url}/terms/` },
 robots: { index: true, follow: true },
};

const LAST_UPDATED = '21 April 2026';

function SectionH2({ num, children }: { num: string; children: React.ReactNode }) {
 return (
 <div className="flex items-baseline gap-3 mb-3">
 <span className="font-display italic text-brand-500 text-[18px] flex-shrink-0">{num}</span>
 <h2 className="font-display text-[20px] md:text-[22px] text-ink-900 tracking-tight leading-snug">
 {children}
 </h2>
 </div>
 );
}

export default function TermsPage() {
 return (
 <>
 <Header />
 <main
 className="flex-grow"
 style={{ backgroundColor: 'var(--paper-100)' }}
 >
 <div className="container-width py-12 md:py-16 max-w-3xl">
 <Breadcrumbs items={[{ label: 'Terms of Use' }]} />

 <span className="eyebrow mb-4 inline-block">TERMS</span>
 <h1 className="font-display text-[40px] md:text-[52px] text-ink-900 leading-[0.98] tracking-tighter mb-4">
 Terms of <em className="text-brand-500 italic">Use</em>
 </h1>
 <p className="font-mono text-[11px] text-ink-500 mb-10 tracking-wide uppercase">
 Last updated: {LAST_UPDATED}
 </p>

 <div className="space-y-10 text-[14.5px] leading-[1.8] text-ink-700 font-sans">

 <section>
 <SectionH2 num="01">About this service</SectionH2>
 <p>
 seisaccountants.co.uk provides SEIS and EIS accountancy for UK founders. Accountancy services are delivered by Tidy Money Ltd, an ACCA-regulated practice. The guides, blog articles, and calculators on this site are general information and do not by themselves create an engagement or amount to advice.
 </p>
 <p className="mt-3">
 When you submit an enquiry, we come back within 48 hours with a fixed written quote for the scope of work. An engagement begins only once you accept that quote in writing, under our own terms of engagement.
 </p>
 </section>

 <section>
 <SectionH2 num="02">No advice given</SectionH2>
 <p>
 The content on this site, including guides, blog articles, calculators, and tax-relief explanations, is general information only. It is not financial, legal, tax, or accounting advice, and it should not be relied on as such. UK tax law, HMRC rules, and relief thresholds change frequently. You should always confirm specifics with a qualified accountant before making decisions.
 </p>
 </section>

 <section>
 <SectionH2 num="03">Using the site</SectionH2>
 <p>By using this site, you agree that you will:</p>
 <ul className="list-disc pl-6 space-y-1 mt-3 marker:text-brand-500">
 <li>Submit accurate information when you fill in an enquiry form</li>
 <li>Not use the site for any unlawful purpose</li>
 <li>Not attempt to disrupt, reverse-engineer, or scrape the site</li>
 <li>Not submit enquiries on behalf of another person without their consent</li>
 </ul>
 </section>

 <section>
 <SectionH2 num="04">How an engagement works</SectionH2>
 <p>The process is:</p>
 <ul className="list-disc pl-6 space-y-1 mt-3 marker:text-brand-500">
 <li>You submit your enquiry via the form on any page of this site.</li>
 <li>We review your details and come back within 48 hours with a fixed written quote for the scope of work.</li>
 <li>If you accept the quote, we prepare the work and file it with HMRC as your authorised agent.</li>
 <li>There is no obligation to proceed before you accept the quote.</li>
 </ul>
 <p className="mt-3">
 We do not guarantee that we will be able to take on every enquiry, nor do we guarantee any particular outcome of the accounting, tax, or compliance work, which depends on HMRC and on the accuracy of the information you provide.
 </p>
 </section>

 <section>
 <SectionH2 num="05">Cost</SectionH2>
 <p>
 There is no cost to submit an enquiry or to receive a quote. Every engagement starts with a fixed written quote based on your round and the scheme work involved. The price we quote is the price you pay for that work, and there is no obligation to proceed before you accept the quote.
 </p>
 </section>

 <section>
 <SectionH2 num="06">The practice</SectionH2>
 <p>
 Accountancy services on this site are delivered by Tidy Money Ltd, an ACCA-regulated practice owned by Preetesh Parmar FCCA, a Fellow of the Association of Chartered Certified Accountants. You can verify the practice independently at tidymoney.com. If you have a complaint about the work, please raise it with us directly and, if it remains unresolved, with the ACCA.
 </p>
 </section>

 <section>
 <SectionH2 num="07">Limitation of liability</SectionH2>
 <p>
 To the extent permitted by law, we are not liable for any loss, damage, or cost arising from your use of the general information on this site. Liability for accountancy work we carry out under an accepted engagement is governed by our terms of engagement and the professional standards of the ACCA.
 </p>
 <p className="mt-3">
 Nothing in these terms excludes liability for fraud, death or personal injury caused by negligence, or anything else that cannot lawfully be excluded under UK law.
 </p>
 </section>

 <section>
 <SectionH2 num="08">Intellectual property</SectionH2>
 <p>
 All site content, design, and code is owned by seisaccountants.co.uk. You may view and share content for personal, non-commercial purposes. You may not republish, modify, or sell any part of the site without written permission.
 </p>
 </section>

 <section>
 <SectionH2 num="09">Governing law</SectionH2>
 <p>
 These terms are governed by the laws of England and Wales. Any dispute will be subject to the exclusive jurisdiction of the English courts.
 </p>
 </section>

 <section>
 <SectionH2 num="10">Contact</SectionH2>
 <p>
 Questions about these terms? Email <a href="mailto:hello@seisaccountants.co.uk" className="font-display italic text-brand-500 hover:text-brand-700">hello@seisaccountants.co.uk</a>.
 </p>
 </section>

 <div className="pt-6 border-t border-ink-900/15">
 <p className="font-sans text-[13px] text-ink-500">
 See also our{' '}
 <Link href="/privacy/" className="font-display italic text-brand-500 hover:text-brand-700">Privacy Policy</Link>
 {' '}and{' '}
 <Link href="/contact/" className="font-display italic text-brand-500 hover:text-brand-700">Contact page</Link>.
 </p>
 </div>

 </div>
 </div>
 </main>
 <Footer />
 </>
 );
}
