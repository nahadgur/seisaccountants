// app/location/page.tsx
// Server component. Owns metadata and JSON-LD (CollectionPage + ItemList +
// FAQPage + BreadcrumbList). All interactivity lives in LocationIndexClient.

import type { Metadata } from 'next';
import { LOCATIONS, toSlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';
import LocationIndexClient from './LocationIndexClient';
import { LOCATION_FAQS } from './faqs';

const pageUrl = `${siteConfig.url}/location/`;
const allCities = Object.values(LOCATIONS).flat();

export const metadata: Metadata = {
 title: 'Locations We Cover',
 description: `Vetted UK SEIS/EIS specialists in ${allCities.length} city catchments: London, Manchester, Cambridge, Edgware, and 8 more. Free, no obligation.`,
 alternates: { canonical: pageUrl },
 robots: { index: true, follow: true },
 openGraph: {
 type: 'website',
 url: pageUrl,
 siteName: siteConfig.name,
 title: 'Locations We Cover',
 description: `Vetted UK SEIS and EIS specialist accountants matched in ${allCities.length} city catchments. Free matching, no obligation.`,
 locale: 'en_GB',
 },
 twitter: {
 card: 'summary_large_image',
 title: 'Locations We Cover',
 description: `Vetted UK SEIS/EIS specialists in ${allCities.length} city catchments. Free matching service.`,
 },
};

export default function LocationIndexPage() {
 // CollectionPage schema marking this as the parent of all 12 city pages
 const collectionSchema = {
 '@context': 'https://schema.org',
 '@type': 'CollectionPage',
 '@id': `${pageUrl}#collection`,
 url: pageUrl,
 name: 'Locations We Cover',
 description:
 'UK city catchments where the network has dedicated landing pages and live engagements.',
 isPartOf: { '@id': `${siteConfig.url}/#website` },
 hasPart: allCities.map(city => ({
 '@type': 'WebPage',
 '@id': `${siteConfig.url}/location/${toSlug(city)}/`,
 url: `${siteConfig.url}/location/${toSlug(city)}/`,
 name: `SEIS Accountants in ${city}`,
 })),
 };

 // ItemList schema — surface the city list explicitly so search engines
 // can render rich-result city listings if they choose to.
 const itemListSchema = {
 '@context': 'https://schema.org',
 '@type': 'ItemList',
 '@id': `${pageUrl}#itemlist`,
 name: 'UK city catchments covered by the matching service',
 numberOfItems: allCities.length,
 itemListElement: allCities.map((city, i) => ({
 '@type': 'ListItem',
 position: i + 1,
 name: city,
 url: `${siteConfig.url}/location/${toSlug(city)}/`,
 })),
 };

 // FAQPage schema — mirrors the FAQS array rendered client-side
 const faqSchema = {
 '@context': 'https://schema.org',
 '@type': 'FAQPage',
 '@id': `${pageUrl}#faq`,
 mainEntity: LOCATION_FAQS.map(faq => ({
 '@type': 'Question',
 name: faq.question,
 acceptedAnswer: {
 '@type': 'Answer',
 text: faq.answer,
 },
 })),
 };

 // BreadcrumbList schema
 const breadcrumbSchema = buildBreadcrumbSchema([{ label: 'Locations' }]);

 return (
 <>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
 />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
 />
 <LocationIndexClient pageUrl={pageUrl} />
 </>
 );
}
