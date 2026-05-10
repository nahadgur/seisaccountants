// app/how-we-vet/page.tsx
// Server component. Owns metadata and WebPage JSON-LD.
// All interactivity lives in HowWeVetClient.tsx.

import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';
import HowWeVetClient from './HowWeVetClient';

const pageUrl = `${siteConfig.url}/how-we-vet/`;

export const metadata: Metadata = {
 title: 'How We Vet Our Accountants | 5-Step Verification Process',
 description:
 'Every accountant in our UK network passes a five-step verification: qualification, £1M+ PI insurance, startup experience, client references, and regulatory standing. ~35% of applicants are rejected.',
 alternates: { canonical: pageUrl },
 robots: { index: true, follow: true },
 openGraph: {
 type: 'website',
 url: pageUrl,
 siteName: siteConfig.name,
 title: 'How We Vet Our Accountants | 5-Step Verification',
 description:
 'ACA/ACCA/CIMA qualification, £1M+ professional indemnity cover, startup experience, and regulatory clearance verified before any referral.',
 locale: 'en_GB',
 },
 twitter: {
 card: 'summary_large_image',
 title: 'How We Vet Our Accountants',
 description:
 'Five-step verification: qualification, insurance, startup experience, references, and regulatory standing.',
 },
};

export default function HowWeVetPage() {
 const webPageSchema = {
 '@context': 'https://schema.org',
 '@type': 'WebPage',
 '@id': `${pageUrl}#webpage`,
 name: 'How We Vet Our Accountants',
 url: pageUrl,
 description:
 'Our five-step vetting process ensures every startup accountant in our UK network is qualified, insured, and experienced with early-stage ventures.',
 isPartOf: { '@id': `${siteConfig.url}/#website` },
 publisher: { '@id': `${siteConfig.url}/#organization` },
 about: { '@id': `${siteConfig.url}/#referral-service` },
 };

 const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'How We Vet Our Accountants' }]);

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
 <HowWeVetClient />
 </>
 );
}
