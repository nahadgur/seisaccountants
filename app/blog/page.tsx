// app/blog/page.tsx
// Server component. Owns metadata and CollectionPage JSON-LD.
// All interactivity (category filter, date-gated drip feed) lives in BlogIndexClient.tsx.

import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';
import BlogIndexClient from './BlogIndexClient';

const pageUrl = `${siteConfig.url}/blog/`;

export const metadata: Metadata = {
  title: 'Startup Finance Journal | Practical Guides for UK Founders',
  description:
    'Practical finance, tax, and accounting articles for UK startup founders. Company formation, SEIS/EIS, R&D tax credits, VAT, cash flow, and growth planning.',
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: siteConfig.name,
    title: 'Startup Finance Journal | Practical Guides for UK Founders',
    description:
      'Finance, tax, and accounting articles for UK startup founders.',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Startup Finance Journal | Practical Guides for UK Founders',
    description:
      'Practical finance, tax, and accounting articles for UK startup founders.',
  },
};

export default function BlogIndexPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#collection`,
    name: 'Startup Finance Journal',
    description:
      'Practical finance, tax, and accounting articles for UK startup founders.',
    url: pageUrl,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    publisher: { '@id': `${siteConfig.url}/#organization` },
  };

  const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Blog' }]);

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
