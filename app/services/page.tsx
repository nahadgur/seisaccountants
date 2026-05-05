// app/services/page.tsx
// Server component. Owns metadata and CollectionPage JSON-LD.
// All interactivity lives in ServicesIndexClient.tsx.

import type { Metadata } from 'next';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';
import ServicesIndexClient from './ServicesIndexClient';

const pageUrl = `${siteConfig.url}/services/`;

export const metadata: Metadata = {
  title: 'SEIS & EIS Lifecycle Services for UK Founders | Free Matching Service',
  description:
    'Browse the full SEIS and EIS lifecycle: advance assurance, share issuance, SEIS1 and EIS1 compliance, investor certificates, three-year qualifying-period monitoring, and R&D credits for SEIS-backed companies. Free matching with vetted UK specialists.',
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: siteConfig.name,
    title: 'SEIS & EIS Lifecycle Services for UK Founders | Free Matching Service',
    description:
      'SEIS and EIS specialist accountants for UK founders: advance assurance, share issuance, SEIS1 and EIS1 compliance, investor certificates, qualifying-period monitoring, and R&D credits. Free matching with vetted ACA/ACCA practitioners.',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Accounting Services for UK Businesses',
    description:
      'Free matching with vetted UK SEIS and EIS specialist accountants who handle advance assurance, share issuance, compliance statements, and the three-year qualifying period.',
  },
};

export default function ServicesIndexPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#collection`,
    name: 'SEIS & EIS Lifecycle Services',
    description:
      'The full catalogue of SEIS and EIS specialist services we match UK founders with through our vetted accountant network.',
    url: pageUrl,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: { '@id': `${siteConfig.url}/#referral-service` },
    hasPart: services.map((s) => ({
      '@type': 'Service',
      name: s.title,
      description: s.description,
      url: `${siteConfig.url}/services/${s.slug}/`,
      provider: { '@id': `${siteConfig.url}/#organization` },
    })),
  };

  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Services' }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesIndexClient />
    </>
  );
}
