// app/terms/page.tsx - Paper Tape edition
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'The terms on which you may use seisaccountants.uk as a free matching service for UK SEIS and EIS specialist accountants.',
  alternates: { canonical: `${siteConfig.url}/terms/` },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = '21 April 2026';

function SectionH2({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-3 mb-3">
      <span className="font-display italic text-brand-500 text-[18px] flex-shrink-0">&sect; {num}</span>
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

          <span className="eyebrow mb-4 inline-block">&sect; TERMS</span>
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
                seisaccountants.uk is a free online matching service that connects UK SEIS and EIS founders with independent, qualified accountants in our partner network. We are not an accountancy firm, we do not provide accountancy, tax, or legal advice directly, and we do not carry out any accounting work for you.
              </p>
              <p className="mt-3">
                When you submit an enquiry, we match you with a carefully selected UK accountancy practice in our network. That accountancy firm will contact you directly. Any engagement you then enter into is between you and that accountant, under their own terms and fees. We are not a party to that engagement.
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
              <SectionH2 num="04">The matching process</SectionH2>
              <p>Our matching process is:</p>
              <ul className="list-disc pl-6 space-y-1 mt-3 marker:text-brand-500">
                <li>You submit your enquiry via the form on any page of this site.</li>
                <li>We review your details and match you with a qualified accountant in our network based on location and service needs.</li>
                <li>The matched accountant contacts you directly, usually within 24 hours.</li>
                <li>You and the accountant decide whether to work together, on terms agreed between you.</li>
              </ul>
              <p className="mt-3">
                We do not guarantee that a match will be made in every case, nor that the matched accountant will agree to take you on as a client. We also do not guarantee the outcome of any accounting, tax, or compliance work that the accountant carries out for you.
              </p>
            </section>

            <section>
              <SectionH2 num="05">Cost</SectionH2>
              <p>
                Our matching service is free to you. We are paid a referral fee by the accountant when they accept you as a client. You pay the accountant directly for any accounting work they perform, under fees agreed between you and them.
              </p>
            </section>

            <section>
              <SectionH2 num="06">Vetting of accountants</SectionH2>
              <p>
                Accountants in our network are verified as holding ACA, ACCA, or CIMA qualifications and carrying professional indemnity insurance. We do not, however, audit their work, supervise their advice, or take responsibility for their conduct. If you have a complaint about an accountant, you should raise it with the accountant directly and, if unresolved, with their regulatory body (ICAEW, ACCA, or CIMA).
              </p>
            </section>

            <section>
              <SectionH2 num="07">Limitation of liability</SectionH2>
              <p>
                To the extent permitted by law, we are not liable for any loss, damage, or cost arising from your use of information on this site, or from the accounting, tax, or advisory work performed by any accountant in our network. Your remedy for any issue with the accountant&apos;s work lies with the accountant directly and their regulator.
              </p>
              <p className="mt-3">
                Nothing in these terms excludes liability for fraud, death or personal injury caused by negligence, or anything else that cannot lawfully be excluded under UK law.
              </p>
            </section>

            <section>
              <SectionH2 num="08">Intellectual property</SectionH2>
              <p>
                All site content, design, and code is owned by seisaccountants.uk. You may view and share content for personal, non-commercial purposes. You may not republish, modify, or sell any part of the site without written permission.
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
                Questions about these terms? Email <a href="mailto:hello@seisaccountants.uk" className="font-display italic text-brand-500 hover:text-brand-700">hello@seisaccountants.uk</a>.
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
