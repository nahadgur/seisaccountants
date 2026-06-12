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

// Organization schema. We are the entity that OPERATES the referral
// service. "knowsAbout" signals our subject-matter focus. The description
// makes the referral model explicit so Google and AI crawlers cannot
// misread the site as an accountancy firm.
const organizationSchema = {
 '@context': 'https://schema.org',
 '@type': 'Organization',
 '@id': `${siteConfig.url}/#organization`,
 name: siteConfig.name,
 url: siteConfig.url,
 logo: `${siteConfig.url}/logo-mark.svg`,
 description:
 'Independent UK referral and matching service connecting SEIS and EIS founders with qualified, insured, vetted scheme-specialist accountancy practices. We are not an accountancy firm and do not deliver accountancy services ourselves; all professional work is performed by independent third-party accountants in our partner network.',
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

// Service schema declaring the referral/matching service itself at the
// organisation level. Uses @id so other schemas (page-level Service
// schemas in GeoSchema.tsx, CollectionPage schemas, etc.) can cite it
// and the whole site reads as one linked graph. Provider = Organization
// above. This is the explicit, site-wide statement: what we do is a
// free matching service. Prevents Google/AI crawlers from defaulting to
// "accountancy firm" interpretation based on the domain name.
const referralServiceSchema = {
 '@context': 'https://schema.org',
 '@type': 'Service',
 '@id': `${siteConfig.url}/#referral-service`,
 name: `${siteConfig.name} matching service`,
 serviceType: 'Accountant referral and matching service',
 description:
 'Free matching service connecting UK SEIS and EIS founders with independent, scheme-specialist accountancy practices. Founders submit an enquiry; we match them to a carefully selected practice based on stage and sector; the accountant contacts them directly and sets their own fees. We receive a referral fee from the accountant only if the founder chooses to engage them.',
 provider: {
 '@type': 'Organization',
 '@id': `${siteConfig.url}/#organization`,
 },
 areaServed: { '@type': 'Country', name: 'United Kingdom' },
 offers: {
 '@type': 'Offer',
 price: '0',
 priceCurrency: 'GBP',
 description:
 'Free to the founder. Matched accountants set their own fees directly with the founder. We are paid a referral fee by the accountant only on successful engagement.',
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
 category: 'Professional services referral',
};

const websiteSchema = {
 '@context': 'https://schema.org',
 '@type': 'WebSite',
 '@id': `${siteConfig.url}/#website`,
 url: siteConfig.url,
 name: siteConfig.name,
 description: siteConfig.description,
 publisher: { '@id': `${siteConfig.url}/#organization` },
 about: { '@id': `${siteConfig.url}/#referral-service` },
 // potentialAction.SearchAction deliberately omitted: the site has no
 // /search endpoint, so advertising one would point Google at a 404.
 // Reinstate when a real search page exists.
 inLanguage: 'en-GB',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
 <html lang="en-GB" className={`${sans.variable} ${display.variable}`}>
 <body>
 <Script
 id="organization-schema"
 type="application/ld+json"
 strategy="beforeInteractive"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
 />
 <Script
 id="referral-service-schema"
 type="application/ld+json"
 strategy="beforeInteractive"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(referralServiceSchema) }}
 />
 <Script
 id="website-schema"
 type="application/ld+json"
 strategy="beforeInteractive"
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
