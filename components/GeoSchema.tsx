// components/GeoSchema.tsx
// Honest schema for a UK referral/matching service.
// No LocalBusiness (site is not a shopfront and does not deliver services).
// No AggregateRating (no real reviews on-site).
// No priceRange (partner sets their own fees, not us).
// Types used: Service / CollectionPage / FAQPage / BreadcrumbList / WebPage.

import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';

interface ServiceSchemaProps {
  type: 'serviceLocation';
  serviceName: string;
  serviceSlug: string;
  cityName: string;
  locationSlug: string;
  siteUrl: string;
  siteName: string;
  faqPairs: { question: string; answer: string }[];
}

interface LocationSchemaProps {
  type: 'location';
  cityName: string;
  locationSlug: string;
  siteUrl: string;
  siteName: string;
  region: string;
  dominantIndustries: string[];
}

type GeoSchemaProps = ServiceSchemaProps | LocationSchemaProps;

const SERVICE_DESCRIPTIONS: Record<string, string> = {
  'seis-advance-assurance': 'SEIS advance assurance applications for UK founders raising seed capital, including business activity narrative drafting, cap table review, use-of-funds breakdown, and HMRC Venture Capital Reliefs follow-up correspondence.',
  'eis-advance-assurance': 'EIS advance assurance applications for UK founders raising beyond the SEIS lifetime cap, including knowledge-intensive company assessment, risk-to-capital narrative, and SEIS-to-EIS round sequencing.',
  'share-issuance-cap-table': 'Share issuance and cap table maintenance for SEIS and EIS rounds, including articles audit, board minutes, subscription documentation, share certificates, SH01 Companies House filings, and ongoing qualifying-period tracking.',
  'seis1-eis1-compliance': 'SEIS1 and EIS1 compliance statement drafting and HMRC filing for UK founders post-share-issue, including source-data assembly, account reconciliation, and follow-up query handling.',
  'investor-tax-certificates': 'Distribution of HMRC-issued SEIS3 and EIS3 investor certificates for UK SEIS and EIS rounds, including covering communication, PDF retention, and replacement-certificate handling.',
  'qualifying-period-monitoring': 'Three-year SEIS and EIS qualifying-period monitoring for UK founders, including annual qualifying-conditions review, transaction-by-transaction clearance, and HMRC clearance applications for share-for-share rollovers.',
  'rd-tax-credits': 'R&D tax credit claims under the merged scheme for SEIS and EIS-backed UK companies, including technical narrative drafting, qualifying cost identification, Advance Notification handling, and HMRC enquiry response.',
};

export default function GeoSchema(props: GeoSchemaProps) {
  const schemas: object[] = [];

  if (props.type === 'serviceLocation') {
    const { serviceName, serviceSlug, cityName, locationSlug, siteUrl, siteName, faqPairs } = props;
    const pageUrl = `${siteUrl}/services/${serviceSlug}/${locationSlug}/`;

    // 1. Service schema, the matching service offered in this city, provided by our Organization
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: `${serviceName} Accountant Matching in ${cityName}`,
      description: SERVICE_DESCRIPTIONS[serviceSlug] ?? `${serviceName} matching service for UK SEIS and EIS founders in ${cityName}.`,
      url: pageUrl,
      serviceType: 'Accountant referral and matching service',
      provider: {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
      },
      areaServed: {
        '@type': 'City',
        name: cityName,
        containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'GBP',
        description: 'Free matching service. You are connected with an independent UK accountant who sets their own fees directly with you.',
        availability: 'https://schema.org/InStock',
      },
    });

    // 2. FAQPage
    if (faqPairs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqPairs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    // 3. BreadcrumbList (via shared helper)
    schemas.push(buildBreadcrumbSchema([
      { label: 'Services', href: '/services/' },
      { label: serviceName, href: `/services/${serviceSlug}/` },
      { label: cityName },
    ]));

    // 4. Speakable, marks sections AI assistants should read aloud
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: `${serviceName} in ${cityName}`,
      url: pageUrl,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: [
          'h1',
          '.direct-answer-text',
          '.faq-answer',
          '.local-signal',
        ],
      },
    });
  }

  if (props.type === 'location') {
    const { cityName, locationSlug, siteUrl, siteName, dominantIndustries } = props;
    const pageUrl = `${siteUrl}/location/${locationSlug}/`;

    // 1. CollectionPage, a catalogue of the services we match in this city
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${pageUrl}#collection`,
      name: `SEIS Accountant Matching in ${cityName}`,
      description: `Matching service connecting ${cityName} founders with independent UK accountants specialising in SEIS and EIS advance assurance, share issuance, SEIS1 and EIS1 compliance, investor certificate distribution, and three-year qualifying-period monitoring.`,
      url: pageUrl,
      about: {
        '@type': 'Service',
        name: 'SEIS Accountant Matching',
        serviceType: 'Accountant referral and matching service',
        provider: { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: siteName },
        areaServed: {
          '@type': 'City',
          name: cityName,
          containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'GBP',
          description: 'Free matching. Accountants in our network set their own fees directly with you.',
          availability: 'https://schema.org/InStock',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `SEIS Accounting Services in ${cityName}`,
          itemListElement: [
            { slug: 'seis-advance-assurance', name: 'SEIS Advance Assurance' },
            { slug: 'eis-advance-assurance', name: 'EIS Advance Assurance' },
            { slug: 'share-issuance-cap-table', name: 'Share Issuance & Cap Table' },
            { slug: 'seis1-eis1-compliance', name: 'SEIS1 & EIS1 Compliance' },
            { slug: 'investor-tax-certificates', name: 'Investor Tax Certificates' },
            { slug: 'qualifying-period-monitoring', name: 'Three-Year Qualifying Monitoring' },
            { slug: 'rd-tax-credits', name: 'R&D Tax Credits' },
          ].map((svc, i) => ({
            '@type': 'Offer',
            position: i + 1,
            name: `${svc.name} in ${cityName}`,
            url: `${siteUrl}/services/${svc.slug}/${locationSlug}/`,
          })),
        },
      },
    });

    // 2. FAQPage, city-level questions
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: `How much does a SEIS specialist accountant cost in ${cityName}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `SEIS specialist accountants in ${cityName} typically price scheme work as fixed fees per filing rather than monthly retainers. SEIS advance assurance applications run £750-£2,000, SEIS1 or EIS1 compliance statements run £500-£1,500, and three-year qualifying-period monitoring is typically £600-£2,400 as an annual retainer. Our matching service is free and connects you with up to three SEIS specialists so you can compare real ${cityName} market rates with no obligation.`,
          },
        },
        {
          '@type': 'Question',
          name: `What qualifications should a SEIS specialist accountant in ${cityName} have?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Look for ACA (Institute of Chartered Accountants) or ACCA (Association of Chartered Certified Accountants) qualification as a minimum. Accountants in our ${cityName} network hold one of these qualifications and carry professional indemnity insurance. SEIS and EIS-specific experience, including a live caseload of advance assurance and SEIS1 work with HMRC's Venture Capital Reliefs team, is verified separately from general practice qualification.`,
          },
        },
        {
          '@type': 'Question',
          name: `Do ${cityName} startups in ${dominantIndustries[0]} qualify for SEIS and EIS?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Most ${cityName} startups in ${dominantIndustries[0]} carry on a qualifying trade for SEIS and EIS purposes, provided they meet the asset, employee, and trade-age limits and avoid the excluded-activities list (property, financial services, legal services, accountancy). SEIS supports the first £250,000 of investment in a company's first three years of qualifying trade with 50 percent investor income tax relief; EIS extends to £5 million per year and £12 million lifetime (or £10 million and £20 million for knowledge-intensive companies) at 30 percent investor relief. A specialist accountant should review eligibility before HMRC advance assurance is filed.`,
          },
        },
      ],
    });

    // 3. BreadcrumbList (via shared helper).
    // Links to /location/ rather than /location/ because the latter
    // is a 301 redirect to the former. Schema breadcrumbs should point at
    // the canonical URL, not a redirect source.
    schemas.push(buildBreadcrumbSchema([
      { label: 'Areas We Cover', href: '/location/' },
      { label: cityName },
    ]));

    // 4. Speakable
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: `SEIS Accountants in ${cityName}`,
      url: pageUrl,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.direct-answer-text', '.faq-answer'],
      },
    });
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
