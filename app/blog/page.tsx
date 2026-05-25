// app/blog/page.tsx
// Server component. Owns metadata and CollectionPage JSON-LD.
// Listing + category filter live in BlogIndexClient.tsx.

import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';
import BlogIndexClient from './BlogIndexClient';

const pageUrl = `${siteConfig.url}/blog/`;

export const metadata: Metadata = {
  title: 'SEIS and EIS Insights for UK Founders',
  description:
    'Practical SEIS and EIS articles for UK founders: scheme differences, the 30% connected-person rule, investment limits, and how to plan a relief-bearing round.',
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: siteConfig.name,
    title: 'SEIS and EIS Insights for UK Founders',
    description:
      'Practical SEIS and EIS articles for UK founders, complementing our pillar guides.',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEIS and EIS Insights for UK Founders',
    description:
      'Practical SEIS and EIS articles for UK founders, complementing our pillar guides.',
  },
};

export default function BlogIndexPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#collection`,
    name: 'SEIS and EIS Insights',
    description:
      'Practical SEIS and EIS articles for UK founders, complementing our pillar guides.',
    url: pageUrl,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    publisher: { '@id': `${siteConfig.url}/#organization` },
  };

  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Insights' }]);

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
      <BlogIndexClient />
    </>
  );
}
