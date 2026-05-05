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
  title: 'Startup Accounting Services for UK Businesses | Free Matching Service',
  description:
    'Browse specialist startup accounting services: company formation, startup tax relief, R&D tax credits, SEIS/EIS advice, cash flow forecasting, and growth planning. Free matching with vetted UK accountants.',
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: siteConfig.name,
    title: 'Startup Accounting Services for UK Businesses | Free Matching Service',
    description:
      'Specialist accounting for UK startups: company formation, SEIS/EIS, R&D tax credits, cash flow, and growth planning. Free matching with vetted ACA/ACCA practitioners.',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Accounting Services for UK Businesses',
    description:
      'Free matching with vetted UK startup accountants specialising in SEIS/EIS, R&D tax credits, and growth planning.',
  },
};

export default function ServicesIndexPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#collection`,
    name: 'Startup Accounting Services',
    description:
      'The full catalogue of startup accounting services we match UK founders with through our vetted accountant network.',
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
