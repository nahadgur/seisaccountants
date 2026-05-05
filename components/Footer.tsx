// components/Footer.tsx - Paper Tape edition
// Solid ink-900 (warm near-black) with cream text. Editorial masthead
// column headers. Privacy/Terms/Contact preserved in bottom bar.
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';
import { guides } from '@/data/guides';
import { siteConfig } from '@/data/site';

const COPYRIGHT_YEAR = 2026;

export function Footer() {
  return (
    <footer
      className="pt-16 pb-8"
      style={{ backgroundColor: 'var(--ink-900)', color: 'var(--paper-100)' }}
    >
      <div className="container-width">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand, spans 2 cols on large */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <Image
                src="/logo-mark-white.svg"
                alt=""
                width={32}
                height={32}
                className="h-7 w-auto"
                aria-hidden="true"
              />
              <span className="font-display text-xl text-white tracking-tight">
                seis<em className="text-brand-300">accountants</em>
              </span>
            </div>
            <p className="text-[13.5px] text-paper-100/75 leading-relaxed mb-5 max-w-sm">
              Free matching service for UK founders raising SEIS and EIS. We connect you with vetted, scheme-experienced accountants who handle the full lifecycle from advance assurance through three-year qualifying-period monitoring.
            </p>
            <p className="font-display italic text-[12.5px] text-paper-300/60 border-l-2 border-brand-500 pl-4 leading-relaxed">
              We are a referral and matching service, not an accountancy firm. All services are provided by independent, qualified accountants in our vetted network.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-brand-300 font-semibold uppercase tracking-[0.22em] text-[10px] mb-5">
              Services
            </h4>
            <ul className="space-y-2.5 text-[13.5px]">
              {services.map(s => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="text-paper-100/80 hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h4 className="text-brand-300 font-semibold uppercase tracking-[0.22em] text-[10px] mb-5">
              Guides
            </h4>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <Link href="/guides/" className="font-display italic text-brand-300 hover:text-white">
                  All guides &rarr;
                </Link>
              </li>
              {guides.map(g => (
                <li key={g.slug}>
                  <Link
                    href={`/guides/${g.slug}/`}
                    className="text-paper-100/80 hover:text-white transition-colors"
                  >
                    {g.shortTitle}
                    {g.hasCalculator && (
                      <span className="ml-1 text-[10px] text-brand-300 tracking-widest uppercase">+ tool</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-brand-300 font-semibold uppercase tracking-[0.22em] text-[10px] mb-5">
              About
            </h4>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <Link href="/tools/seis-diagnostic/" className="text-paper-100/80 hover:text-white transition-colors">
                  SEIS eligibility check
                </Link>
              </li>
              <li>
                <Link href="/how-we-vet/" className="text-paper-100/80 hover:text-white transition-colors">
                  How we vet accountants
                </Link>
              </li>
              <li>
                <Link href="/location/" className="text-paper-100/80 hover:text-white transition-colors">
                  Areas we cover
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="text-paper-100/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 text-[12px] text-paper-300/60 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t"
          style={{ borderColor: 'rgba(245,242,234,0.12)' }}
        >
          <p className="max-w-md leading-relaxed">
            &copy; {COPYRIGHT_YEAR} {siteConfig.name}. Matching service, not an accountancy firm.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/contact/" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/privacy/" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms/" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
