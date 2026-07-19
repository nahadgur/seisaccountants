// app/about/page.tsx
// Server component. Owns metadata and WebPage/AboutPage JSON-LD.
// First-party About page (2026-07 reposition). Replaces the retired
// matching-era /how-we-vet/ page, which 308s here via next.config.js.

import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';
import AboutClient from './AboutClient';

const pageUrl = `${siteConfig.url}/about/`;

export const metadata: Metadata = {
 title: 'About the Practice | SEIS and EIS Accountants',
 description:
 'Accountancy services on this site are delivered by Tidy Money Ltd, an ACCA-regulated cloud practice owned by Preetesh Parmar FCCA. Fixed written quotes within 48 hours, no obligation.',
 alternates: { canonical: pageUrl },
 robots: { index: true, follow: true },
 openGraph: {
 type: 'website',
 url: pageUrl,
 siteName: siteConfig.name,
 title: 'About the Practice | SEIS and EIS Accountants',
 description:
 'Delivered by Tidy Money Ltd, an ACCA-regulated cloud practice. A named, regulated accountant and fixed written quotes.',
 locale: 'en_GB',
 },
 twitter: {
 card: 'summary_large_image',
 title: 'About the Practice',
 description:
 'SEIS and EIS accountancy delivered by Tidy Money Ltd, an ACCA-regulated practice. Fixed written quotes, no obligation.',
 },
};

export default function AboutPage() {
 const webPageSchema = {
 '@context': 'https://schema.org',
 '@type': 'AboutPage',
 '@id': `${pageUrl}#webpage`,
 name: 'About the Practice',
 url: pageUrl,
 description:
 'Accountancy services on this site are delivered by Tidy Money Ltd, an ACCA-regulated cloud practice owned by Preetesh Parmar FCCA.',
 isPartOf: { '@id': `${siteConfig.url}/#website` },
 publisher: { '@id': `${siteConfig.url}/#organization` },
 about: { '@id': `${siteConfig.url}/#service` },
 };

 const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'About' }]);

 return (
 <>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
 />
 <AboutClient />
 </>
 );
}
