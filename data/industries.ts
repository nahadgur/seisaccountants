// data/industries.ts
// Industry taxonomy. Cumulative: starts with SaaS as the first page shipped.
// New industries get appended as each page is built. Order here controls
// order in the /industries/ hub grid, the header dropdown, and sitemap priority.
//
// Rule of inclusion: an industry only earns a page when there is genuinely
// distinct accounting specialism to write about (revenue recognition quirks,
// sector-specific R&D claim patterns, unique regulatory overlay, specific
// relief interactions). Industries that reduce to "standard startup accounting
// in a different vertical" do not get pages.

export interface Industry {
  /** URL slug under /industries/ */
  slug: string;
  /** Display name for H1, cards, nav */
  title: string;
  /** Short headline label for the hub grid and dropdown */
  shortTitle: string;
  /** Meta description and hub-card summary (~160 chars) */
  description: string;
  /** Hero image, served from /public/images/ */
  image: string;
  /** Which services most often apply to this industry, ordered by relevance.
   *  Used for the "key services" cross-link block on the industry page. */
  keyServiceSlugs: string[];
  /** ISO date, static, updated manually when content materially changes.
   *  Feeds the sitemap lastModified. Never use new Date() here. */
  lastModified: string;
}

export const industries: Industry[] = [
  {
    slug: 'saas-startups',
    title: 'SaaS Startups',
    shortTitle: 'SaaS',
    description: 'SEIS and EIS for UK SaaS founders: advance assurance against ARR-based valuations, share issuance for angel-led seed rounds, EIS extensions for series A, and R&D claims structured around platform development that interact correctly with the SEIS or EIS funding stack.',
    image: '/images/industry-saas.avif',
    keyServiceSlugs: ['seis-advance-assurance', 'eis-advance-assurance', 'rd-tax-credits', 'qualifying-period-monitoring'],
    lastModified: '2026-04-24',
  },
  {
    slug: 'tech-startups',
    title: 'Tech Startups',
    shortTitle: 'Tech',
    description: 'SEIS and EIS for UK tech founders beyond pure SaaS: marketplaces, AI and ML, dev tools, hardware, agencies pivoting to product. Advance assurance, SEIS-to-EIS transition, and SEIS-or-EIS-compatible cap tables that survive series A diligence.',
    image: '/images/industry-tech-startups.avif',
    keyServiceSlugs: ['seis-advance-assurance', 'eis-advance-assurance', 'share-issuance-cap-table', 'rd-tax-credits'],
    lastModified: '2026-04-24',
  },
  {
    slug: 'fintech-startups',
    title: 'Fintech Startups',
    shortTitle: 'Fintech',
    description: 'SEIS and EIS for FCA-regulated UK fintech founders: navigating the excluded-trades borderline at advance assurance, structuring share issues around safeguarding capital, and qualifying-period monitoring through regulatory growth.',
    image: '/images/industry-fintech.avif',
    keyServiceSlugs: ['seis-advance-assurance', 'eis-advance-assurance', 'qualifying-period-monitoring', 'rd-tax-credits'],
    lastModified: '2026-04-24',
  },
  {
    slug: 'ecommerce-startups',
    title: 'Ecommerce Startups',
    shortTitle: 'Ecommerce',
    description: 'SEIS and EIS for UK consumer brands and ecommerce founders: advance assurance for inventory-heavy models, share issuance structured for follow-on capital, and qualifying-period monitoring through customer prepayment and stock cycles.',
    image: '/images/industry-ecommerce.avif',
    keyServiceSlugs: ['seis-advance-assurance', 'eis-advance-assurance', 'share-issuance-cap-table', 'qualifying-period-monitoring'],
    lastModified: '2026-04-24',
  },
  {
    slug: 'life-sciences-startups',
    title: 'Life Sciences & Biotech',
    shortTitle: 'Life Sciences',
    description: 'SEIS and EIS for UK life sciences and biotech founders: knowledge-intensive company status for extended EIS limits, advance assurance against pre-revenue valuations, and grant funding alongside the SEIS or EIS round without breaking either.',
    image: '/images/industry-life-sciences.avif',
    keyServiceSlugs: ['seis-advance-assurance', 'eis-advance-assurance', 'rd-tax-credits', 'qualifying-period-monitoring'],
    lastModified: '2026-04-24',
  },
  {
    slug: 'creative-media-startups',
    title: 'Creative & Media Startups',
    shortTitle: 'Creative & Media',
    description: 'SEIS and EIS for UK creative and media founders: navigating the risk-to-capital condition on production-heavy models, advance assurance for IP-led businesses, and SEIS or EIS interaction with VGEC and AVEC creative reliefs.',
    image: '/images/industry-creative-media.avif',
    keyServiceSlugs: ['seis-advance-assurance', 'eis-advance-assurance', 'rd-tax-credits', 'share-issuance-cap-table'],
    lastModified: '2026-04-24',
  },
];

export function getAllIndustrySlugs(): string[] {
  return industries.map(i => i.slug);
}

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find(i => i.slug === slug);
}
