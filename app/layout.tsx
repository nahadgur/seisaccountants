// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Inter, PT_Serif } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/data/site';
import { services } from '@/data/services';

// next/font - eliminates font flash, removes runtime font download.
// Body: Inter. Display: PT Serif - the closest Google-hosted font to
// Georgia's warm bookish feel, with italic support we use extensively
// for the Paper Tape visual language.
const sans = Inter({
 subsets: ['latin'],
 variable: '--font-sans',
 display: 'swap',
 weight: ['400', '500', '600', '700'],
});

const display = PT_Serif({
 subsets: ['latin'],
 variable: '--font-display',
 display: 'swap',
 weight: ['400', '700'],
 style: ['normal', 'italic'],
});

export const metadata: Metadata = {
 metadataBase: new URL(siteConfig.url),
 title: {
 default: `SEIS/EIS Advance Assurance | ${siteConfig.name}`,
 template: `%s | ${siteConfig.name}`,
 },
 description: siteConfig.description,
 alternates: { canonical: siteConfig.url },
 robots: { index: true, follow: true },
 verification: {
 google: [
 'a1n9nuZyqriGqNIGkXbCE1VLxw4Or6duwwWmREmB3q8',
 'T7C5QNd4nvBCnrt8gklkNQUXL6fQJz2rKVfbgtgnpdg',
 ],
 },
 manifest: '/site.webmanifest',
 icons: {
 icon: [
 { url: '/favicon.ico' },
 { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
 { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
 { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
 ],
 apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
 },
 openGraph: {
 type: 'website',
 locale: 'en_GB',
 url: siteConfig.url,
 siteName: siteConfig.name,
 title: `SEIS/EIS Advance Assurance | ${siteConfig.name}`,
 description: siteConfig.description,
 images: [
 { url: '/og-image.png', width: 1200, height: 630, alt: `${siteConfig.name} | SEIS & EIS specialist matching` },
 ],
 },
 twitter: {
 card: 'summary_large_image',
 title: `SEIS/EIS Advance Assurance | ${siteConfig.name}`,
 description: siteConfig.description,
 images: ['/og-image.png'],
 },
};

// Theme colour for the address bar / PWA chrome. Lives on its own export
// in Next 14 (themeColor in metadata is deprecated).
export const viewport: Viewport = {
 themeColor: '#6B1F2E',
};

// Organization schema. "knowsAbout" signals our subject-matter focus.
// parentOrganization names the ACCA-regulated practice that delivers the
// accountancy work so Google and AI crawlers can verify the firm.
const organizationSchema = {
 '@context': 'https://schema.org',
 '@type': 'Organization',
 '@id': `${siteConfig.url}/#organization`,
 name: siteConfig.name,
 url: siteConfig.url,
 logo: `${siteConfig.url}/logo-mark.svg`,
 description:
 'SEIS and EIS accountants for UK founders. We file HMRC advance assurance, draft SEIS1 and EIS1 compliance statements, distribute investor certificates, and monitor the three-year qualifying period. Accountancy services are delivered by Tidy Money Ltd, an ACCA-regulated practice.',
 // Company number, registered office and directorship all verified on
 // the Companies House register (2026-08-03). See data/provider.ts.
 // These are the strongest verifiable trust signals the site has, so
 // they are stated in the graph as well as on /about/.
 parentOrganization: {
 '@type': 'AccountingService',
 name: 'Tidy Money Ltd',
 legalName: 'TIDY MONEY LTD',
 url: 'https://www.tidymoney.com/',
 identifier: {
 '@type': 'PropertyValue',
 propertyID: 'GB-COH',
 value: '06509733',
 },
 sameAs: [
 'https://find-and-update.company-information.service.gov.uk/company/06509733',
 ],
 foundingDate: '2008-02-20',
 address: {
 '@type': 'PostalAddress',
 streetAddress: 'Devonshire House, 582 Honeypot Lane',
 addressLocality: 'Stanmore',
 addressRegion: 'Middlesex',
 postalCode: 'HA7 1JS',
 addressCountry: 'GB',
 },
 employee: {
 '@type': 'Person',
 name: 'Preetesh Parmar',
 honorificSuffix: 'FCCA',
 jobTitle: 'Director',
 },
 },
 areaServed: { '@type': 'Country', name: 'United Kingdom' },
 knowsAbout: [
 'SEIS advance assurance',
 'EIS advance assurance',
 'Knowledge-intensive company status',
 'SEIS1 and EIS1 compliance statements',
 'SEIS3 and EIS3 investor tax certificates',
 'Three-year qualifying period monitoring',
 'Share issuance and cap table for SEIS and EIS',
 'R&D tax credits for SEIS-backed companies',
 ],
 contactPoint: {
 '@type': 'ContactPoint',
 contactType: 'customer service',
 email: siteConfig.contactEmail,
 availableLanguage: 'en-GB',
 },
};

// Service schema declaring the SEIS and EIS accountancy service at the
// organisation level. Uses @id so other schemas (page-level Service
// schemas in GeoSchema.tsx, CollectionPage schemas, etc.) can cite it
// and the whole site reads as one linked graph. Provider = Organization
// above.
const serviceSchema = {
 '@context': 'https://schema.org',
 '@type': 'Service',
 '@id': `${siteConfig.url}/#service`,
 name: `${siteConfig.name} - SEIS and EIS accountancy`,
 serviceType: 'SEIS and EIS accountancy',
 description:
 'SEIS and EIS accountancy for UK founders: advance assurance applications, share issuance and cap table work, SEIS1 and EIS1 compliance statements, SEIS3 and EIS3 investor certificate distribution, and three-year qualifying-period monitoring. Submit a short enquiry and we come back within 48 hours with a fixed written quote, with no obligation.',
 provider: {
 '@type': 'Organization',
 '@id': `${siteConfig.url}/#organization`,
 },
 areaServed: { '@type': 'Country', name: 'United Kingdom' },
 offers: {
 '@type': 'Offer',
 priceCurrency: 'GBP',
 description:
 'Every engagement starts with a fixed written quote based on your round and the scheme work involved. No obligation to proceed.',
 availability: 'https://schema.org/InStock',
 },
 hasOfferCatalog: {
 '@type': 'OfferCatalog',
 name: 'SEIS Accountants Services',
 itemListElement: services.map((s, i) => ({
 '@type': 'Offer',
 position: i + 1,
 itemOffered: {
 '@type': 'Service',
 name: s.title,
 url: `${siteConfig.url}/services/${s.slug}/`,
 },
 })),
 },
 termsOfService: `${siteConfig.url}/terms/`,
 url: siteConfig.url,
 category: 'Accountancy',
};

const websiteSchema = {
 '@context': 'https://schema.org',
 '@type': 'WebSite',
 '@id': `${siteConfig.url}/#website`,
 url: siteConfig.url,
 name: siteConfig.name,
 alternateName: ['SEISAccountants'],
 description: siteConfig.description,
 publisher: { '@id': `${siteConfig.url}/#organization` },
 about: { '@id': `${siteConfig.url}/#service` },
 // potentialAction.SearchAction deliberately omitted: the site has no
 // /search endpoint, so advertising one would point Google at a 404.
 // Reinstate when a real search page exists.
 inLanguage: 'en-GB',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
 <html lang="en-GB" className={`${sans.variable} ${display.variable}`}>
 <body>
 <script
 id="organization-schema"
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
 />
 <script
 id="service-schema"
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
 />
 <script
 id="website-schema"
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
 />
 {siteConfig.gaId && (
 <>
 <Script
 strategy="afterInteractive"
 src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaId}`}
 />
 <Script id="ga-inline" strategy="afterInteractive">
 {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${siteConfig.gaId}');`}
 </Script>
 </>
 )}
 {children}
 </body>
 </html>
 );
}
