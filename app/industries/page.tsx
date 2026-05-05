// app/industries/page.tsx
// Server component for the /industries/ hub. Owns metadata and
// CollectionPage schema. Rendering lives in IndustriesIndexClient.

import type { Metadata } from 'next';
import { industries } from '@/data/industries';
import { siteConfig } from '@/data/site';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';
import IndustriesIndexClient from './IndustriesIndexClient';

const pageUrl = `${siteConfig.url}/industries/`;

export const metadata: Metadata = {
  title: 'Specialist SEIS Accountants by Industry | Free Matching Service',
  description:
    'Browse SEIS and EIS specialist accountants by industry: SaaS, tech, fintech, ecommerce, life sciences, and creative & media. Vetted ACA/ACCA practitioners with genuine sector expertise. Free matching, no obligation.',
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: siteConfig.name,
    title: 'Specialist SEIS Accountants by Industry | Free Matching Service',
    description:
      'SEIS and EIS specialist accountants by industry: SaaS, tech, fintech, ecommerce, life sciences, and creative & media. Free matching with vetted ACA/ACCA practitioners.',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Specialist SEIS Accountants by Industry',
    description:
      'Free matching with vetted UK SEIS and EIS specialist accountants by industry specialism.',
  },
};

export default function IndustriesIndexPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#collection`,
    name: 'SEIS Accountants by Industry',
    description:
      'The full list of industry verticals we match UK SEIS and EIS founders to specialist accountants for.',
    url: pageUrl,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: { '@id': `${siteConfig.url}/#referral-service` },
    hasPart: industries.map(i => ({
      '@type': 'Service',
      name: `${i.title} Accountant Matching Service`,
      description: i.description,
      url: `${siteConfig.url}/industries/${i.slug}/`,
      provider: { '@id': `${siteConfig.url}/#organization` },
      audience: {
        '@type': 'BusinessAudience',
        audienceType: i.title,
        name: i.title,
      },
    })),
  };

  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Industries' }]);

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
      <IndustriesIndexClient />
    </>
  );
}
