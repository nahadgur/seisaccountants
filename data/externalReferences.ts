// data/externalReferences.ts
// Curated list of authoritative external sources for SEIS / EIS / R&D
// content. Used by the AuthoritativeSources component to render
// reference lists at the bottom of guides, service pages, and the
// diagnostic tool.
//
// Selection criteria:
//   1. Authoritative origin (.gov.uk, HMRC manuals, Companies House,
//      named professional bodies). No marketing pages, no paid-content
//      sources.
//   2. Stable URLs (HMRC moves things occasionally; verify links if
//      anything has been republished).
//   3. Genuinely useful for the SEIS-stage UK founder — not just SEO
//      filler.
//
// Last verified: 2026-05-06.

export interface ExternalRef {
  label: string;
  url: string;
  description: string;
  /** Topic tag(s) so consuming pages can filter to relevant references. */
  topics: ('seis' | 'eis' | 'kic' | 'rd' | 'companies-house' | 'compliance' | 'professional')[];
}

export const externalReferences: ExternalRef[] = [

  // ============== SEIS ==============
  {
    label: 'HMRC: Seed Enterprise Investment Scheme background',
    url: 'https://www.gov.uk/guidance/seed-enterprise-investment-scheme-background',
    description: "HMRC's official overview of SEIS for companies and investors. Authoritative reference for qualifying conditions, investment limits, and relief rates.",
    topics: ['seis'],
  },
  {
    label: 'HMRC: Apply for SEIS or EIS advance assurance',
    url: 'https://www.gov.uk/guidance/venture-capital-schemes-apply-for-advance-assurance',
    description: 'The official advance assurance application process and required information. Submit applications via HMRC Online Services.',
    topics: ['seis', 'eis'],
  },
  {
    label: 'HMRC: SEIS1 compliance statement guidance',
    url: 'https://www.gov.uk/government/publications/seed-enterprise-investment-scheme-compliance-statement-seis1',
    description: 'Form SEIS1 documentation, filing window, and supporting evidence requirements.',
    topics: ['seis', 'compliance'],
  },

  // ============== EIS ==============
  {
    label: 'HMRC: Enterprise Investment Scheme background',
    url: 'https://www.gov.uk/guidance/enterprise-investment-scheme-background',
    description: "HMRC's overview of EIS for companies and investors. Includes the post-2018 risk-to-capital condition and current investment limits.",
    topics: ['eis'],
  },
  {
    label: 'HMRC: EIS1 compliance statement guidance',
    url: 'https://www.gov.uk/government/publications/enterprise-investment-scheme-compliance-statement-eis1',
    description: 'Form EIS1 documentation, the 4-month qualifying period, and HMRC processing service-level.',
    topics: ['eis', 'compliance'],
  },
  {
    label: 'HMRC Venture Capital Schemes Manual (VCM)',
    url: 'https://www.gov.uk/hmrc-internal-manuals/venture-capital-schemes-manual',
    description: "The full HMRC internal manual used by Venture Capital Reliefs officers. The authoritative reference for any borderline qualifying-conditions question.",
    topics: ['seis', 'eis', 'kic'],
  },
  {
    label: 'HMRC VCM3010+: Excluded activities for SEIS and EIS',
    url: 'https://www.gov.uk/hmrc-internal-manuals/venture-capital-schemes-manual/vcm3010',
    description: "HMRC's authoritative list of excluded trades. Reference this when the SIC code or activity description sits near a borderline.",
    topics: ['seis', 'eis'],
  },

  // ============== KIC ==============
  {
    label: 'HMRC: Knowledge-intensive companies for EIS',
    url: 'https://www.gov.uk/guidance/enterprise-investment-scheme-background#knowledge-intensive-companies',
    description: 'KIC qualifying conditions: R&D spend percentages, qualifying staff tests, and the extended caps and commercial-sale window.',
    topics: ['eis', 'kic'],
  },

  // ============== R&D TAX CREDITS ==============
  {
    label: 'HMRC: Research and Development (R&D) tax relief',
    url: 'https://www.gov.uk/guidance/corporation-tax-research-and-development-rd-relief',
    description: "HMRC's official R&D tax credit guidance, including the merged scheme rules effective for accounting periods beginning on or after 1 April 2024.",
    topics: ['rd'],
  },
  {
    label: 'HMRC: R&D Advance Notification',
    url: 'https://www.gov.uk/guidance/tell-hmrc-that-youre-planning-to-claim-research-and-development-rd-tax-relief',
    description: 'The 6-month notification deadline that applies to first-time claimants from accounting periods beginning on or after 1 April 2023. Missing this deadline disqualifies the claim entirely.',
    topics: ['rd'],
  },
  {
    label: 'HMRC R&D tax credits annual statistics',
    url: 'https://www.gov.uk/government/statistics/research-and-development-tax-credits-statistics',
    description: 'Most recent published HMRC data on R&D claim volumes, average claim sizes, and sector breakdowns. Useful for benchmarking.',
    topics: ['rd'],
  },

  // ============== COMPANIES HOUSE ==============
  {
    label: 'Companies House public register',
    url: 'https://find-and-update.company-information.service.gov.uk/',
    description: 'The free public register of all UK incorporated companies. Search by name or number to verify any company referenced in SEIS or EIS work.',
    topics: ['companies-house'],
  },
  {
    label: 'Companies House Public Data API',
    url: 'https://developer.company-information.service.gov.uk/',
    description: 'The API our SEIS Check tool uses to retrieve company records. Free for non-commercial use; requires a registered API key.',
    topics: ['companies-house'],
  },
  {
    label: 'gov.uk SIC 2007 condensed list',
    url: 'https://resources.companieshouse.gov.uk/sic/',
    description: "The UK's Standard Industrial Classification list. Find the right SIC code for your trade before incorporation, or update an existing code at the next confirmation statement.",
    topics: ['companies-house'],
  },

  // ============== PROFESSIONAL BODIES ==============
  {
    label: 'ICAEW (Institute of Chartered Accountants England & Wales)',
    url: 'https://www.icaew.com/',
    description: 'Find an ICAEW-qualified Chartered Accountant. Every accountant in our network holds at least ICAEW (ACA), ACCA, or CIMA qualification.',
    topics: ['professional'],
  },
  {
    label: 'ACCA (Association of Chartered Certified Accountants)',
    url: 'https://www.accaglobal.com/uk/en/member.html',
    description: 'ACCA member directory and professional standards. Network practices that are ACCA-qualified can be verified here.',
    topics: ['professional'],
  },
  {
    label: 'UK Business Angels Association (UKBAA)',
    url: 'https://www.ukbaa.org.uk/',
    description: 'The UK trade body for angel investing. Useful for founders looking for SEIS / EIS investors and for understanding the UK angel market structure.',
    topics: ['seis', 'eis'],
  },
];

/** Filter the references to only those tagged with at least one of the
 *  requested topics. Order is preserved. */
export function getReferences(topics: ExternalRef['topics'][number][]): ExternalRef[] {
  return externalReferences.filter(r => r.topics.some(t => topics.includes(t)));
}
