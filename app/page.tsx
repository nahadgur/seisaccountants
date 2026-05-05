// app/page.tsx
// Server component. Owns metadata and JSON-LD schema.
// All interactivity lives in HomeClient.tsx.
//
// Note: the site-wide Service ("#referral-service") and its OfferCatalog live
// on the root layout. The homepage only emits WebPage + FAQPage + Breadcrumb
// to avoid an `@id` collision on the Service node.

import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { homepageFaqs } from '@/data/homepage';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: `${siteConfig.name} | Free Matching Service for UK SEIS Accountants`,
  description: siteConfig.description,
  alternates: { canonical: `${siteConfig.url}/` },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/`,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Free Matching Service for UK SEIS Accountants`,
    description: siteConfig.description,
    locale: 'en_GB',
    // Images auto-populated from app/opengraph-image.tsx (file-based convention).
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Free Matching Service for UK SEIS Accountants`,
    description: siteConfig.description,
    // Images auto-populated from app/twitter-image.tsx (file-based convention).
  },
};

export default function HomePage() {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteConfig.url}/#webpage`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: { '@id': `${siteConfig.url}/#referral-service` },
    primaryImageOfPage: `${siteConfig.url}/og-image.png`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homepageFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = buildBreadcrumbSchema([]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HomeClient />
    </>
  );
}
