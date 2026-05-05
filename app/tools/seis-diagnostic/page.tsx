// app/tools/seis-diagnostic/page.tsx
// Server component owning metadata + JSON-LD. Tool itself is a client
// component that hits the Companies House proxy routes.
//
// SEO target queries:
//   - "seis eligibility check"
//   - "is my company seis eligible"
//   - "seis check uk"
//   - "seis eligibility checker"
//   - "companies house seis"
//   - "eis eligibility check"
//   - "seis qualifying company check"
//
// Strategy:
//   - Tight, keyword-rich title and description in metadata
//   - SoftwareApplication + FAQPage + WebApplication structured data
//   - Long-form intro and FAQ sections rendered ABOVE the fold of the
//     tool (the tool stays the primary action; the SEO copy is on-page
//     to satisfy Google + AI overviews)
//   - Internal links from /guides/, the SEIS guide article, and the
//     header nav

import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';
import SeisDiagnosticClient from './SeisDiagnosticClient';

const pageUrl = `${siteConfig.url}/tools/seis-diagnostic/`;

const TITLE = 'SEIS Eligibility Check (UK) | Instant Companies House Diagnostic';
const DESCRIPTION =
  "Free SEIS and EIS eligibility check for UK companies. Type your company name, we pull the record from Companies House and run age, structure, jurisdiction, and excluded-trades tests automatically. Covers knowledge-intensive (KIC) status. No sign-up.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'SEIS eligibility check',
    'is my company SEIS eligible',
    'SEIS qualifying company',
    'EIS eligibility check',
    'SEIS check UK',
    'knowledge-intensive company check',
    'Companies House SEIS',
    'SEIS diagnostic',
    'SEIS calculator',
  ],
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: siteConfig.name,
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: 'How does the SEIS eligibility check work?',
    a: 'Type your UK company name or registration number. We send a request to the Companies House Public Data API, retrieve your record, and run the qualifying tests we can verify from public data: company age (against the SEIS 3-year, EIS 7-year and KIC 10-year windows), active status, UK private-limited structure, jurisdiction, and the SIC codes you have declared against the SEIS/EIS excluded-trades list. We return a verdict per scheme plus a per-test breakdown.',
  },
  {
    q: 'Is this a real SEIS qualification or just a guess?',
    a: "It is a first-pass eligibility check, not a final ruling. The tests we run are the structural ones HMRC and an accountant would run first, and where Companies House data alone says 'fail' (for example, the company is 12 years old) the verdict is reliable. The tests we cannot run from public data — gross assets, employee count, use of funds, control test, risk-to-capital, KIC R&D-spend percentage, SEIS lifetime cap headroom — are flagged for a specialist. Treat it as the same kind of pre-screen a SEIS accountant would do in the first ten minutes of a call.",
  },
  {
    q: 'What does SEIS-eligible mean?',
    a: "A UK company is broadly SEIS-eligible if it is an active, unquoted, UK-incorporated private limited company, fewer than 3 years past the start of its qualifying trade, with gross assets below £350,000 and fewer than 25 full-time-equivalent employees, carrying on a trade that is not on HMRC's excluded-activities list. Investors who subscribe for SEIS shares can claim 50% income tax relief on up to £200,000 per tax year and a capital gains tax exemption on the eventual disposal of the shares (after a three-year holding period).",
  },
  {
    q: "What's the difference between SEIS, EIS, and KIC?",
    a: "SEIS is for the company's first £250,000 of qualifying investment, in the first 3 years of trade, with 50% investor income tax relief. EIS picks up where SEIS ends: up to £5 million per year and £12 million lifetime, available throughout the company's first 7 years of commercial sale, with 30% investor income tax relief. KIC (knowledge-intensive company) is an enhanced EIS variant for R&D-intensive companies: £10 million annual cap, £20 million lifetime, 500 employee limit, and a 10-year commercial sale window. Most growth tech and biotech startups use SEIS for the first round and transition to EIS or KIC-EIS for series A.",
  },
  {
    q: 'Which trades are excluded from SEIS and EIS?',
    a: 'The HMRC excluded-activities list (s192 ITA 2007) includes property development and dealing, financial services and lending, insurance, legal services, accountancy, farming and market gardening, forestry, hotels and similar accommodation, residential care homes, coal and steel production, electricity and gas generation (with limited carve-outs), and shipbuilding. The diagnostic checks each of your declared SIC codes against this list and flags red, amber, or green per code with a plain-language reason. An ancillary excluded activity inside a larger qualifying trade can sometimes still qualify; that is one of the things a specialist confirms.',
  },
  {
    q: 'Why does my old company show as ineligible?',
    a: "SEIS has a hard 3-year window from the start of the qualifying trade; EIS has 7 years from first commercial sale (10 for KIC). If your company is older than these windows, the schemes are off the table for further investment in the existing entity. That does not necessarily mean SEIS is dead for the underlying business — common workarounds include incorporating a new spinout vehicle that licenses the IP, structuring an EIS-extended round around knowledge-intensive status, or carving the qualifying trade into a younger subsidiary. A specialist can model whether any of these are worth the structural cost.",
  },
  {
    q: 'Do I need an accountant to apply for SEIS?',
    a: "Technically no — you can file SEIS advance assurance and the SEIS1 compliance statement yourself. In practice the cost of a mistake is paid by your investors as a relief clawback rather than by you, and the documentation chain has more failure modes than first-time founders realise. Specialist accountants who file dozens of applications a month catch the issues that generalist DIY filers and even general-practice accountants routinely miss — particularly around the use-of-funds narrative and the share-class structure.",
  },
  {
    q: 'Is this tool free? Do you store my search?',
    a: 'Free. No sign-up. We do not store your search, your company name, or any of the diagnostic output. The Companies House API call goes from our server to Companies House and the result comes straight back to your browser — nothing is logged or persisted on our side.',
  },
];

export default function SeisDiagnosticPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { label: 'Tools', href: '/tools/' },
    { label: 'SEIS Diagnostic' },
  ]);

  // SoftwareApplication schema — signals to Google that this page hosts
  // an interactive tool, not just a content page. Bumps eligibility for
  // tool-specific result features.
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${pageUrl}#software`,
    name: 'SEIS Eligibility Check',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: pageUrl,
    description: DESCRIPTION,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
    },
    provider: { '@id': `${siteConfig.url}/#organization` },
    featureList: [
      'Companies House lookup',
      'SEIS 3-year age window check',
      'EIS 7-year age window check',
      'Knowledge-intensive 10-year window check',
      'Active company status check',
      'UK private limited structure check',
      'Jurisdiction check',
      'SIC code excluded-trades check',
    ],
  };

  // FAQPage schema — feeds Google's FAQ rich results and AI overview
  // training. Mirrors the FAQ section rendered below so users and crawlers
  // see the same content.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SeisDiagnosticClient faqs={FAQS} />
    </>
  );
}
