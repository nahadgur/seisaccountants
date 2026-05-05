// data/geoHeadings.ts
// Conversational H2/H3 headings and direct-answer content per service.
// Mirrors how founders ask questions to voice assistants and AI Overviews.
// Used by ServiceLocationPageClient to render GEO-optimised page structure.

export interface ServiceGeoContent {
  directQuestion: (city: string) => string;
  directAnswer: (city: string) => string;
  h2How: (city: string) => string;
  h2Why: (city: string) => string;
  h2Cost: (city: string) => string;
  h3Steps: (city: string) => string;
  h3Benefits: (city: string) => string;
}

export const geoHeadings: Record<string, ServiceGeoContent> = {
  'seis-advance-assurance': {
    directQuestion: (city) => `How do I get SEIS advance assurance for my ${city} startup?`,
    directAnswer: (city) => `SEIS advance assurance for a ${city} company is filed with HMRC's Venture Capital Reliefs team and typically returned in 4-6 weeks. The application requires a covering letter, business activity narrative, latest accounts or projections, articles of association, an up-to-date cap table, and a list of proposed investors who have indicated interest. Specialist accountants in our ${city} network draft the application to pre-empt the predictable HMRC follow-up queries on excluded trades, control, and use of funds.`,
    h2How: (city) => `How does SEIS advance assurance work for a ${city} startup?`,
    h2Why: (city) => `Why do ${city} angel investors require advance assurance before investing?`,
    h2Cost: (city) => `What does SEIS advance assurance cost in ${city}?`,
    h3Steps: (city) => `What are the steps to SEIS advance assurance for a ${city} company?`,
    h3Benefits: (city) => `What does SEIS advance assurance unlock for a ${city} startup's fundraising?`,
  },
  'eis-advance-assurance': {
    directQuestion: (city) => `When does my ${city} startup need EIS rather than SEIS?`,
    directAnswer: (city) => `Your ${city} company needs EIS once you have used the SEIS lifetime cap of £250,000, or once the company is past the three-year window from start of qualifying trade. EIS gives investors 30 percent income tax relief (versus SEIS's 50 percent), with up to £5 million per year and £12 million lifetime (£10 million and £20 million for knowledge-intensive companies). Most ${city} startups use SEIS for the first round and transition to EIS for series A and beyond.`,
    h2How: (city) => `How does EIS work for a ${city} startup?`,
    h2Why: (city) => `Why do ${city} EIS funds require advance assurance from HMRC?`,
    h2Cost: (city) => `What does EIS advance assurance cost in ${city}?`,
    h3Steps: (city) => `How do I sequence SEIS and EIS in the same ${city} round?`,
    h3Benefits: (city) => `Does my ${city} company qualify for knowledge-intensive EIS?`,
  },
  'share-issuance-cap-table': {
    directQuestion: (city) => `How do I issue SEIS shares correctly in my ${city} company?`,
    directAnswer: (city) => `SEIS share issuance for a ${city} company requires board minutes, subscription documentation, share certificates, an SH01 return of allotments filed at Companies House within one month, and an updated register of members. The shares must be ordinary shares with no preferential rights to dividends, no preferential rights on winding up, and no rights of redemption. ${city} specialists in our network handle the full pack so the share issue documentation matches HMRC's expectations on the SEIS1 review later.`,
    h2How: (city) => `How does SEIS share issuance work for a ${city} startup?`,
    h2Why: (city) => `Why do ${city} founders need a specialist for cap table maintenance?`,
    h2Cost: (city) => `What does SEIS share issuance cost in ${city}?`,
    h3Steps: (city) => `What documents does a ${city} SEIS share issue produce?`,
    h3Benefits: (city) => `How does a clean cap table protect a ${city} startup at series A?`,
  },
  'seis1-eis1-compliance': {
    directQuestion: (city) => `When can I file the SEIS1 for my ${city} company?`,
    directAnswer: (city) => `The SEIS1 compliance statement for a ${city} company can be filed four months after the later of (a) the share issue date or (b) commencement of qualifying trade. HMRC's published service-level for processing is 30 working days. Once approved, HMRC issues the SEIS3 certificates that ${city} investors need to claim their 50 percent income tax relief on their personal tax returns.`,
    h2How: (city) => `How does the SEIS1 process work for a ${city} startup?`,
    h2Why: (city) => `Why do ${city} investors chase the SEIS1 timing so closely?`,
    h2Cost: (city) => `What does SEIS1 filing cost in ${city}?`,
    h3Steps: (city) => `What information does the SEIS1 require for a ${city} company?`,
    h3Benefits: (city) => `What happens after HMRC approves a ${city} startup's SEIS1?`,
  },
  'investor-tax-certificates': {
    directQuestion: (city) => `When do my ${city} SEIS investors receive their SEIS3 certificates?`,
    directAnswer: (city) => `${city} SEIS investors receive their SEIS3 certificates after HMRC approves the company's SEIS1 compliance statement (which can be filed at the earliest four months after share issue) and issues the certificate batch back to the company. Total elapsed time from share issue to investor receipt is typically 5-7 months when the process runs cleanly. Investors then claim 50 percent income tax relief on their personal self-assessment returns using the certificate reference numbers.`,
    h2How: (city) => `How do SEIS3 certificates work for ${city} investors?`,
    h2Why: (city) => `Why does timely SEIS3 distribution matter for ${city} founders?`,
    h2Cost: (city) => `What does investor certificate distribution cost in ${city}?`,
    h3Steps: (city) => `How do ${city} investors claim relief from a SEIS3?`,
    h3Benefits: (city) => `Can ${city} investors carry back SEIS relief to a previous tax year?`,
  },
  'qualifying-period-monitoring': {
    directQuestion: (city) => `What can break SEIS or EIS for my ${city} startup in the three years after share issue?`,
    directAnswer: (city) => `The most common SEIS and EIS clawback events for ${city} startups are: an acquisition that breaches the independence test (cured by a qualifying share-for-share rollover), a return of value to investors through buyback or dividend, a pivot into an excluded trade, or a gross asset position that exceeds the relevant limit. ${city} specialists in our network monitor the qualifying conditions annually and provide transaction-by-transaction clearance for material events before they complete.`,
    h2How: (city) => `How does three-year qualifying-period monitoring work for a ${city} startup?`,
    h2Why: (city) => `Why is qualifying-period monitoring critical for ${city} SEIS rounds?`,
    h2Cost: (city) => `What does qualifying-period monitoring cost in ${city}?`,
    h3Steps: (city) => `What qualifying tests apply during a ${city} SEIS three-year period?`,
    h3Benefits: (city) => `How does monitoring protect ${city} investors from clawback?`,
  },
  'rd-tax-credits': {
    directQuestion: (city) => `How do R&D tax credits work for SEIS-backed ${city} startups?`,
    directAnswer: (city) => `R&D tax credits work alongside SEIS and EIS for ${city} startups: SEIS funding is investor cash via share issue (not state aid), so SEIS-funded R&D is fully claimable under the merged R&D scheme at 20 percent (or 27 percent for R&D-intensive SMEs). A ${city} company spending £100,000 on qualifying R&D can claim back £20,000-£27,000 in addition to the SEIS investor relief. Most early-stage SEIS-backed companies are R&D-intensive in their first two or three years.`,
    h2How: (city) => `How do R&D tax credits work for ${city} startups?`,
    h2Why: (city) => `Which ${city} startups qualify as R&D-intensive SMEs?`,
    h2Cost: (city) => `What R&D expenditure can a ${city} SEIS-backed startup claim against?`,
    h3Steps: (city) => `How does Advance Notification apply to first-time ${city} R&D claimants?`,
    h3Benefits: (city) => `When does the R&D credit cash payment arrive for a ${city} loss-making startup?`,
  },
};

export function getGeoHeadings(serviceSlug: string): ServiceGeoContent | undefined {
  return geoHeadings[serviceSlug];
}
