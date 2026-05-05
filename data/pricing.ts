// data/pricing.ts
export interface PricingTier { treatment: string; slug: string; priceFrom: number; priceTo: number; typicalDuration: string; serviceIncludes: string; description: string; }
export const pricingTiers: PricingTier[] = [
  { "treatment": "SEIS Advance Assurance", "slug": "seis-advance-assurance", "priceFrom": 750, "priceTo": 2000, "typicalDuration": "Per application", "serviceIncludes": "Eligibility review, application drafting, HMRC submission, follow-up correspondence", "description": "Pricing varies with the complexity of the trade and the cap table. Borderline excluded-trades cases, prior-refusal resubmissions, and combined SEIS/EIS applications sit at the upper end. Most specialists fix the fee per application rather than charging hourly." },
  { "treatment": "EIS Advance Assurance", "slug": "eis-advance-assurance", "priceFrom": 850, "priceTo": 2500, "typicalDuration": "Per application", "serviceIncludes": "Eligibility review, KIC assessment if applicable, application drafting, HMRC submission, follow-up correspondence", "description": "EIS applications are typically priced slightly higher than SEIS because the risk-to-capital condition and the KIC assessment add scope. Where a SEIS file is already on record with HMRC, the EIS application can be fast-tracked at lower cost." },
  { "treatment": "Share Issuance & Cap Table", "slug": "share-issuance-cap-table", "priceFrom": 600, "priceTo": 2500, "typicalDuration": "Per round", "serviceIncludes": "Articles audit, board minutes, subscription documentation, share certificates, SH01 Companies House filing, register of members", "description": "Pricing scales with round size and investor count. A simple SEIS round of 3-5 angels sits at the lower end; a combined SEIS plus EIS round with sequenced share issues and 20+ investors sits at the upper end. Ongoing cap table maintenance typically priced as an annual retainer." },
  { "treatment": "SEIS1 / EIS1 Compliance", "slug": "seis1-eis1-compliance", "priceFrom": 500, "priceTo": 1500, "typicalDuration": "Per round", "serviceIncludes": "Source data assembly, form drafting, reconciliation to accounts, HMRC submission, follow-up handling", "description": "Single SEIS1 or EIS1 filings are typically fixed-fee. Combined rounds requiring two compliance statements, or rounds with nominee-held shares requiring beneficial-owner schedules, sit at the upper end. Investor certificate distribution is included within the engagement." },
  { "treatment": "Investor Tax Certificates", "slug": "investor-tax-certificates", "priceFrom": 200, "priceTo": 750, "typicalDuration": "Per round", "serviceIncludes": "Certificate distribution, covering communication, PDF retention, replacement-certificate handling", "description": "Most specialists include certificate distribution inside the SEIS1 or EIS1 engagement. Standalone certificate work (catch-up distributions, replacement requests, Crowdcube/Seedrs syndicate coordination) is priced at the upper end." },
  { "treatment": "Three-Year Period Monitoring", "slug": "qualifying-period-monitoring", "priceFrom": 600, "priceTo": 2400, "typicalDuration": "Annual retainer", "serviceIncludes": "Annual qualifying-conditions review, transaction clearance, HMRC clearance applications, threshold tracking", "description": "Most specialists offer this as an annual retainer that runs for the duration of the qualifying periods. Companies with multiple live SEIS or EIS rounds, active M&A discussions, or approaching threshold tests pay at the upper end." },
  { "treatment": "R&D Tax Credit Claims", "slug": "rd-tax-credits", "priceFrom": 1500, "priceTo": 8000, "typicalDuration": "Per claim period", "serviceIncludes": "Project scoping, technical narrative, cost schedule, Advance Notification, claim filing, enquiry support", "description": "Fees typically structured as a fixed fee or as a percentage of the credit obtained (10-20 percent in the merged scheme era, lower than the historical SME-scheme range). First-time claimants pay slightly more because the technical narrative has to be built from scratch." }
];
export const servicePricingMap: Record<string, string[]> = {
  "seis-advance-assurance": ["seis-advance-assurance"],
  "eis-advance-assurance": ["eis-advance-assurance"],
  "share-issuance-cap-table": ["share-issuance-cap-table"],
  "seis1-eis1-compliance": ["seis1-eis1-compliance"],
  "investor-tax-certificates": ["investor-tax-certificates"],
  "qualifying-period-monitoring": ["qualifying-period-monitoring"],
  "rd-tax-credits": ["rd-tax-credits"],
};
export function getPricingForService(serviceId: string): PricingTier[] {
  const slugs = servicePricingMap[serviceId] || ['seis-advance-assurance'];
  return pricingTiers.filter(p => slugs.includes(p.slug));
}
export const treatmentIncludes = [
  "Eligibility review, application drafting, HMRC submission, follow-up correspondence",
  "KIC assessment, risk-to-capital narrative, application drafting, HMRC submission",
  "Articles audit, board minutes, subscription documentation, share certificates, SH01 filing",
  "Source data assembly, form drafting, reconciliation to accounts, HMRC submission",
  "Certificate distribution, covering communication, PDF retention, replacement handling",
  "Annual qualifying-conditions review, transaction clearance, HMRC clearance applications",
  "Project scoping, technical narrative, cost schedule, Advance Notification, claim filing"
];
export const financeInfo = { available: true, interestFree: false, monthlyFrom: 149, spreadOver: 'monthly fixed-fee arrangements', description: 'Many accountants in our network offer fixed monthly fees that bundle the SEIS or EIS lifecycle work across a financial year. Payment terms are agreed directly with your matched accountant.' };
