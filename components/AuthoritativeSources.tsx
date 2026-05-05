// components/AuthoritativeSources.tsx
// Renders a clean list of authoritative external references at the
// bottom of guide pages, service pages, and the diagnostic.
//
// Editorial purpose: gives the reader real next steps to verify what
// they have just read against the source authorities (HMRC, Companies
// House, professional bodies). SEO purpose: outbound links to .gov.uk
// and named professional-body domains are read by Google as a quality
// signal for topical authority.
//
// Usage: pass the list of topics you want surfaced. The component
// pulls the matching references from data/externalReferences.ts.

import { ExternalLink } from 'lucide-react';
import { getReferences, type ExternalRef } from '@/data/externalReferences';

interface Props {
  /** Topics to filter by. References are deduplicated automatically. */
  topics: ExternalRef['topics'][number][];
  /** Optional override for the section heading. */
  heading?: string;
  /** Optional override for the section eyebrow. */
  eyebrow?: string;
}

export function AuthoritativeSources({
  topics,
  heading = 'Authoritative sources',
  eyebrow = 'Verify this',
}: Props) {
  const refs = getReferences(topics);
  if (refs.length === 0) return null;

  return (
    <section className="mt-12">
      <div className="max-w-3xl">
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-500 font-medium mb-2">
          {eyebrow}
        </p>
        <h3 className="font-display text-[22px] md:text-[26px] text-ink-900 leading-[1.1] tracking-tight mb-5">
          {heading}
        </h3>
        <p className="font-sans text-[13.5px] text-ink-700 leading-[1.7] mb-6 max-w-2xl">
          We are a matching service, not a primary source. The links below go to the actual HMRC manuals, Companies House, and professional-body resources behind every SEIS / EIS / R&amp;D rule cited on this page.
        </p>
        <ul className="space-y-2.5">
          {refs.map(r => (
            <li key={r.url} className="bg-white border border-ink-900/10 rounded-sm">
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 hover:border-brand-500 group"
              >
                <div className="flex items-start gap-3">
                  <ExternalLink className="w-3.5 h-3.5 text-brand-500 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-[15px] text-ink-900 group-hover:text-brand-500 leading-snug mb-1 transition-colors">
                      {r.label}
                    </p>
                    <p className="font-sans text-[12.5px] text-ink-700 leading-relaxed">
                      {r.description}
                    </p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
