// app/guides/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { guides, getGuideBySlug } from '@/data/guides';
import { locationProfiles } from '@/data/locationProfiles';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';
import GuidePageClient from '@/components/GuidePageClient';

interface Props {
 params: { slug: string };
}

export async function generateStaticParams() {
 return guides.map(g => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const guide = getGuideBySlug(params.slug);
 if (!guide) return {};
 return {
 title: guide.metaTitle,
 description: guide.metaDescription,
 alternates: { canonical: `${siteConfig.url}/guides/${guide.slug}/` },
 openGraph: {
 title: guide.metaTitle,
 description: guide.metaDescription,
 url: `${siteConfig.url}/guides/${guide.slug}/`,
 siteName: siteConfig.name,
 type: 'article',
 },
 };
}

export default function GuidePage({ params }: Props) {
 const guide = getGuideBySlug(params.slug);
 if (!guide) notFound();

 const pageUrl = `${siteConfig.url}/guides/${guide.slug}/`;

 // All city slugs for this guide's service spoke links
 const cityLinks = Object.values(locationProfiles).map(p => ({
 slug: p.slug,
 name: p.name,
 region: p.region,
 }));

 // Related guides (all others)
 const relatedGuides = guides.filter(g => g.slug !== guide.slug);

 // Article schema
 const articleSchema = {
 '@context': 'https://schema.org',
 '@type': 'Article',
 headline: guide.title,
 description: guide.metaDescription,
 url: pageUrl,
 datePublished: guide.datePublished ?? guide.lastUpdated,
 dateModified: guide.lastUpdated,
 author: {
 '@type': 'Organization',
 name: siteConfig.name,
 url: siteConfig.url,
 },
 publisher: {
 '@type': 'Organization',
 name: siteConfig.name,
 url: siteConfig.url,
 },
 mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
 about: {
 '@type': 'Service',
 name: guide.shortTitle,
 provider: {
 '@type': 'Organization',
 name: siteConfig.name,
 '@id': `${siteConfig.url}/#organization`,
 },
 },
 };

 // HowTo + FAQ schemas are now data-driven from `data/guides.ts`. Each guide
 // provides its own ordered howToSteps and guide-specific faqs. Guides that
 // aren't process-based can omit howToSteps and the HowTo block simply isn't
 // emitted. The `directAnswer` is prepended to the FAQ list so the
 // above-the-fold direct-answer box is always Question #1 in the schema.
 const howToSchema = guide.howToSteps && guide.howToSteps.length > 0
 ? {
 '@context': 'https://schema.org',
 '@type': 'HowTo',
 name: guide.title,
 description: guide.metaDescription,
 url: pageUrl,
 step: guide.howToSteps.map((s, i) => ({
 '@type': 'HowToStep',
 position: i + 1,
 name: s.name,
 text: s.text,
 })),
 }
 : null;

 const faqSchema = guide.faqs && guide.faqs.length > 0
 ? {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 mainEntity: [
 {
 '@type': 'Question',
 name: guide.directQuestion,
 acceptedAnswer: { '@type': 'Answer', text: guide.directAnswer },
 },
 ...guide.faqs.map((f) => ({
 '@type': 'Question',
 name: f.question,
 acceptedAnswer: { '@type': 'Answer', text: f.answer },
 })),
 ],
 }
 : null;

 // Speakable schema
 const speakableSchema = {
 '@context': 'https://schema.org',
 '@type': 'WebPage',
 name: guide.title,
 url: pageUrl,
 speakable: {
 '@type': 'SpeakableSpecification',
 cssSelector: ['h1', '.direct-answer-text', '.guide-callout-text', '.faq-answer', 'h2'],
 },
 };

 // BreadcrumbList
 const breadcrumbSchema = {
 '@context': 'https://schema.org',
 '@type': 'BreadcrumbList',
 itemListElement: [
 { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
 { '@type': 'ListItem', position: 2, name: 'Guides', item: `${siteConfig.url}/guides/` },
 { '@type': 'ListItem', position: 3, name: guide.shortTitle, item: pageUrl },
 ],
 };

 return (
 <>
 {[articleSchema, howToSchema, faqSchema, speakableSchema, breadcrumbSchema]
 .filter((schema): schema is NonNullable<typeof schema> => schema !== null)
 .map((schema, i) => (
 <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
 ))}
 <GuidePageClient
 guide={guide}
 cityLinks={cityLinks}
 relatedGuides={relatedGuides}
 siteUrl={siteConfig.url}
 />
 </>
 );
}
