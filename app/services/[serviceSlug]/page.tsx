// app/services/[serviceSlug]/page.tsx
// Server component. Owns metadata, static params, and JSON-LD.
// All interactivity lives in ServicePageClient.tsx.

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/data/services';
import { LOCATIONS } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { guides } from '@/data/guides';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';
import ServicePageClient from './ServicePageClient';

interface Props {
  params: { serviceSlug: string };
}

export function generateStaticParams() {
  return services.map(s => ({ serviceSlug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) return {};

  const title = `${service.title} for UK Startups | Free Accountant Matching Service`;
  const description = service.description;
  const url = `${siteConfig.url}/services/${service.slug}/`;

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
      images: [{ url: service.image, alt: service.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [service.image],
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.serviceSlug);
  if (!service) notFound();

  const pageUrl = `${siteConfig.url}/services/${service.slug}/`;
  const combinedFaqs = service.faqs ?? [];
  const relatedGuide = guides.find((g) => g.serviceSlug === service.slug) ?? null;

  // Service schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: service.title,
    description: service.description,
    url: pageUrl,
    serviceType: `${service.title} - Accountant referral and matching service`,
    provider: { '@id': `${siteConfig.url}/#organization` },
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
  };

  // FAQPage schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: combinedFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  // BreadcrumbList schema
  const breadcrumbSchema = buildBreadcrumbSchema([
    { label: 'Services', href: '/services/' },
    { label: service.title },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicePageClient
        service={service}
        totalCities={Object.values(LOCATIONS).flat().length}
        combinedFaqs={combinedFaqs}
        relatedGuide={relatedGuide}
      />
    </>
  );
}
