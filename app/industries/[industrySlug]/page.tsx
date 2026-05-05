// app/industries/[industrySlug]/page.tsx
// Server component. Owns metadata, static params, and JSON-LD.
// All rendering lives in IndustryPageClient.tsx.
//
// Schema approach:
//   - Service @type with audience: BusinessAudience/audienceType = industry name
//     (the schema-correct way to say "startup accounting services for SaaS companies")
//   - FAQPage schema from the industry-specific FAQ block
//   - BreadcrumbList via shared helper
//   - OfferCatalog of the industry-relevant services cross-linked back to
//     /services/[slug]/

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { industries, getIndustryBySlug, getAllIndustrySlugs } from '@/data/industries';
import { services, getServiceBySlug } from '@/data/services';
import { getIndustryContent } from '@/data/industryContent/types';
import { siteConfig } from '@/data/site';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';
import IndustryPageClient from './IndustryPageClient';

interface Props {
  params: { industrySlug: string };
}

// Force static generation for every industry slug and forbid fallback to
// an on-demand dynamic render of anything not in the list.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllIndustrySlugs().map(slug => ({ industrySlug: slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const industry = getIndustryBySlug(params.industrySlug);
  if (!industry) return {};

  const title = `${industry.title} Accountants UK | Specialist Matching Service`;
  const description = industry.description;
  const url = `${siteConfig.url}/industries/${industry.slug}/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
      images: [{ url: industry.image, alt: industry.title }],
      locale: 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [industry.image],
    },
  };
}

export default function IndustryPage({ params }: Props) {
  const industry = getIndustryBySlug(params.industrySlug);
  const content = getIndustryContent(params.industrySlug);

  if (!industry || !content) notFound();

  const pageUrl = `${siteConfig.url}/industries/${industry.slug}/`;

  // Resolve the industry's key services to full Service objects for the
  // cross-link block and for schema.
  const keyServices = industry.keyServiceSlugs
    .map(slug => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  // 1. Service schema for the matching service offered to this industry.
  //    Uses BusinessAudience/audienceType to encode the vertical specialism,
  //    which is the schema-correct pattern (schema.org/audience).
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: `${industry.title} Accountant Matching Service`,
    description: industry.description,
    url: pageUrl,
    serviceType: `Accountant referral and matching for ${industry.title}`,
    provider: { '@id': `${siteConfig.url}/#organization` },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: industry.title,
      name: industry.title,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'United Kingdom',
      containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
      description: 'Free matching service. Accountants in our network set their own fees directly with you.',
      availability: 'https://schema.org/InStock',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Services for ${industry.title}`,
      itemListElement: keyServices.map((s, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: {
          '@type': 'Service',
          name: `${s.title} for ${industry.title}`,
          url: `${siteConfig.url}/services/${s.slug}/`,
        },
      })),
    },
  };

  // 2. FAQPage schema from the industry-specific FAQ block.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  // 3. BreadcrumbList schema.
  const breadcrumbSchema = buildBreadcrumbSchema([
    { label: 'Industries', href: '/industries/' },
    { label: industry.title },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <IndustryPageClient
        industry={industry}
        content={content}
        keyServices={keyServices}
        allIndustries={industries}
        allServices={services}
      />
    </>
  );
}
