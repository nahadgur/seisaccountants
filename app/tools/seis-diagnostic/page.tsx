// app/tools/seis-diagnostic/page.tsx
// Server component owning metadata + JSON-LD. Tool itself is a client
// component that hits the Companies House proxy routes.

import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';
import SeisDiagnosticClient from './SeisDiagnosticClient';

const pageUrl = `${siteConfig.url}/tools/seis-diagnostic/`;

export const metadata: Metadata = {
  title: 'SEIS Diagnostic | Free Companies House Eligibility Check',
  description:
    "Type your UK company name or number and get an instant first-pass SEIS, EIS, and knowledge-intensive eligibility check, drawn straight from Companies House. Highlights age windows, excluded trades, and what your accountant still needs to confirm.",
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: siteConfig.name,
    title: 'SEIS Diagnostic | Free Companies House Eligibility Check',
    description:
      'Instant first-pass SEIS / EIS eligibility check pulled from Companies House data.',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEIS Diagnostic | Companies House Eligibility Check',
    description: 'Instant first-pass SEIS / EIS eligibility check pulled from Companies House.',
  },
};

export default function SeisDiagnosticPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { label: 'Tools', href: '/tools/' },
    { label: 'SEIS Diagnostic' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SeisDiagnosticClient />
    </>
  );
}
