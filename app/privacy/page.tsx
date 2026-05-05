// app/privacy/page.tsx - Paper Tape edition
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How seisaccountants.uk collects, uses, and protects your personal data, and what happens when you submit an enquiry.',
  alternates: { canonical: `${siteConfig.url}/privacy/` },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = '21 April 2026';

// Section number label renders as "§ 01" in the left gutter-style above the
// section heading.
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

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main
        className="flex-grow"
        style={{ backgroundColor: 'var(--paper-100)' }}
      >
        <div className="container-width py-12 md:py-16 max-w-3xl">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

          <span className="eyebrow mb-4 inline-block">POLICY</span>
          <h1 className="font-display text-[40px] md:text-[52px] text-ink-900 leading-[0.98] tracking-tighter mb-4">
            Privacy <em className="text-brand-500 italic">Policy</em>
          </h1>
          <p className="font-mono text-[11px] text-ink-500 mb-10 tracking-wide uppercase">
            Last updated: {LAST_UPDATED}
          </p>

          <div className="space-y-10 text-[14.5px] leading-[1.8] text-ink-700 font-sans">

            <section>
              <SectionH2 num="01">Who we are</SectionH2>
              <p>
                seisaccountants.uk is an independent online matching service that connects UK SEIS and EIS founders with qualified accountants in our partner network. Throughout this policy, &apos;we&apos;, &apos;us&apos; and &apos;our&apos; refer to seisaccountants.uk as the operator of this website and the controller of the personal data you submit.
              </p>
              <p className="mt-3">
                For transparency: this site operates under the trading name &apos;startupaccountants&apos;. We do not yet operate as a separately incorporated legal entity. If you need to identify a named individual for a data protection request, please contact us at <a href="mailto:hello@seisaccountants.uk" className="font-display italic text-brand-500 hover:text-brand-700">hello@seisaccountants.uk</a> and we will provide one.
              </p>
            </section>

            <section>
              <SectionH2 num="02">What we collect</SectionH2>
              <p>When you submit an enquiry through our lead form, we collect:</p>
              <ul className="list-disc pl-6 space-y-1 mt-3 marker:text-brand-500">
                <li>Your full name</li>
                <li>Your phone number</li>
                <li>Your email address</li>
                <li>Your town or postcode</li>
                <li>The page you submitted from (so the accountant knows which service interested you)</li>
              </ul>
              <p className="mt-3">
                We also collect standard web analytics data (pages viewed, approximate location, device type, referring source) through Google Analytics. This data is aggregated and does not identify you personally.
              </p>
            </section>

            <section>
              <SectionH2 num="03">Why we collect it</SectionH2>
              <p>
                We use your enquiry details for one purpose: to pass them to a carefully selected UK accountancy practice in our network, so that a qualified accountant can contact you directly about your startup&apos;s accounting needs. We do not sell your data to advertisers, list brokers, or unrelated third parties.
              </p>
              <p className="mt-3">
                Our lawful basis for processing is your consent, which you give by submitting the enquiry form. You can withdraw consent at any time by emailing us (see section 09).
              </p>
            </section>

            <section>
              <SectionH2 num="04">Who we share it with</SectionH2>
              <p>
                Your enquiry details are shared with <strong className="text-ink-900">a carefully selected UK accountancy practice in our network</strong> for the purpose of them contacting you to discuss your accounting needs. The accountant becomes an independent data controller of your data from that point, and their use of your data is governed by their own privacy policy, which they will share with you.
              </p>
              <p className="mt-3">We also use the following third-party processors to run the site:</p>
              <ul className="list-disc pl-6 space-y-1 mt-3 marker:text-brand-500">
                <li><strong className="text-ink-900">Google (Analytics)</strong>: aggregated site usage statistics</li>
                <li><strong className="text-ink-900">Google (Apps Script / Sheets)</strong>: secure storage of enquiry submissions</li>
                <li><strong className="text-ink-900">Vercel</strong>: website hosting and delivery</li>
              </ul>
              <p className="mt-3">
                We do not transfer your personal data outside the UK or EEA except through these third-party processors, all of whom operate under UK-adequate data protection frameworks.
              </p>
            </section>

            <section>
              <SectionH2 num="05">How long we keep it</SectionH2>
              <p>
                We retain your enquiry details for up to 24 months in our Google Sheets log, to allow us to respond to follow-up queries, audit the matching process, and resolve any disputes. After 24 months, enquiries are deleted. The accountant you were matched with retains your data under their own retention schedule, which they will disclose to you.
              </p>
              <p className="mt-3">
                Analytics data is retained for the standard Google Analytics period (26 months by default).
              </p>
            </section>

            <section>
              <SectionH2 num="06">Cookies</SectionH2>
              <p>
                We use essential cookies required for the site to function and analytics cookies (Google Analytics) to understand how visitors use the site. We do not use advertising or tracking cookies. Your browser can be set to refuse cookies; the site will still work without them.
              </p>
            </section>

            <section>
              <SectionH2 num="07">Your rights under UK GDPR</SectionH2>
              <p>Under UK GDPR and the Data Protection Act 2018, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 mt-3 marker:text-brand-500">
                <li>Access the personal data we hold about you</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion (&apos;right to be forgotten&apos;)</li>
                <li>Restrict or object to processing</li>
                <li>Port your data to another provider</li>
                <li>Withdraw consent at any time</li>
                <li>Complain to the Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="font-display italic text-brand-500 hover:text-brand-700">ico.org.uk</a></li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email us at <a href="mailto:hello@seisaccountants.uk" className="font-display italic text-brand-500 hover:text-brand-700">hello@seisaccountants.uk</a>. We will respond within 30 days.
              </p>
            </section>

            <section>
              <SectionH2 num="08">Security</SectionH2>
              <p>
                We protect your data with HTTPS encryption in transit, restricted access to the enquiry log (only the matching team and the matched accountant see it), and standard Google Workspace security controls. No online service is 100% secure, but we take reasonable steps to protect your information.
              </p>
            </section>

            <section>
              <SectionH2 num="09">Contact</SectionH2>
              <p>
                For any privacy question, data access request, consent withdrawal, or complaint, email <a href="mailto:hello@seisaccountants.uk" className="font-display italic text-brand-500 hover:text-brand-700">hello@seisaccountants.uk</a>.
              </p>
            </section>

            <section>
              <SectionH2 num="10">Changes to this policy</SectionH2>
              <p>
                We may update this policy from time to time. Material changes will be announced at the top of this page, and the &apos;Last updated&apos; date will reflect the change. Continued use of the site after changes indicates your acceptance of the updated policy.
              </p>
            </section>

            <div className="pt-6 border-t border-ink-900/15">
              <p className="font-sans text-[13px] text-ink-500">
                See also our{' '}
                <Link href="/terms/" className="font-display italic text-brand-500 hover:text-brand-700">Terms of Use</Link>
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
