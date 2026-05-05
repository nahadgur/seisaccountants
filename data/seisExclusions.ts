// data/seisExclusions.ts
// Map of UK SIC 2007 codes (and prefix patterns) to SEIS / EIS excluded-
// trade verdicts. Used by the diagnostic to flag companies whose declared
// activity sits inside, near, or clearly outside the s192 ITA 2007
// excluded-activities list.
//
// Verdict scale:
//   'red'   = the activity is on the excluded list. SEIS/EIS unavailable
//             unless this is genuinely ancillary to a qualifying trade.
//   'amber' = the activity sits adjacent to an excluded trade and HMRC
//             will scrutinise. May qualify with the right narrative;
//             needs a specialist review.
//   'green' = clean. Most tech, software, biotech, consumer brands etc.
//
// Source: HMRC's published excluded-activities guidance (VCM3010+) and
// the SIC 2007 condensed list. Last reviewed 2025/26 tax year.

export type SicVerdict = 'red' | 'amber' | 'green';

export interface SicMatch {
  code: string;        // exact SIC 2007 code (5 digits)
  description: string; // plain-language label
  verdict: SicVerdict;
  reason: string;      // why this verdict, shown in the diagnostic
}

// Codes are matched on the leading digits (longest prefix wins).
// Anything not matched defaults to 'green'.
const RULES: SicMatch[] = [

  // ============== AGRICULTURE / FORESTRY (mostly excluded) ==============
  { code: '01',    description: 'Crop / animal production',           verdict: 'red',
    reason: 'Farming and market gardening are excluded trades for SEIS/EIS.' },
  { code: '02',    description: 'Forestry / logging',                 verdict: 'red',
    reason: 'Forestry / timber production is an excluded trade.' },
  { code: '03',    description: 'Fishing / aquaculture',              verdict: 'red',
    reason: 'Fishing and aquaculture are excluded trades.' },

  // ============== EXTRACTION / COAL / STEEL ==============
  { code: '05',    description: 'Mining of coal / lignite',           verdict: 'red',
    reason: 'Coal production is an excluded trade.' },
  { code: '241',   description: 'Iron and steel manufacture',         verdict: 'red',
    reason: 'Steel production is an excluded trade.' },

  // ============== ENERGY GENERATION (broadly excluded since 2015) ==============
  { code: '351',   description: 'Electric power generation',          verdict: 'red',
    reason: 'Electricity generation is generally excluded. Some R&D-stage exceptions exist.' },
  { code: '352',   description: 'Manufacture of gas',                 verdict: 'red',
    reason: 'Gas manufacture is generally excluded.' },
  { code: '353',   description: 'Steam and air conditioning supply',  verdict: 'red',
    reason: 'Steam / district heating supply is generally excluded.' },

  // ============== PROPERTY DEVELOPMENT / DEALING ==============
  { code: '4110',  description: 'Development of building projects',   verdict: 'red',
    reason: 'Property development is an excluded trade.' },
  { code: '412',   description: 'Construction of buildings',          verdict: 'amber',
    reason: 'Trade construction can qualify; speculative property development cannot. Specialist review.' },
  { code: '6810',  description: 'Buying / selling of own real estate', verdict: 'red',
    reason: 'Property dealing is an excluded trade.' },
  { code: '6820',  description: 'Renting / operating of real estate', verdict: 'red',
    reason: 'Property letting is an excluded trade.' },
  { code: '6831',  description: 'Real estate agencies',               verdict: 'red',
    reason: 'Property agency is an excluded trade.' },
  { code: '6832',  description: 'Management of real estate',          verdict: 'red',
    reason: 'Property management is an excluded trade.' },

  // ============== FINANCIAL SERVICES (broadly excluded) ==============
  { code: '64',    description: 'Financial services',                 verdict: 'red',
    reason: 'Banking, lending, leasing and most financial services are excluded.' },
  { code: '65',    description: 'Insurance, reinsurance, pensions',   verdict: 'red',
    reason: 'Insurance is an excluded trade.' },
  { code: '66',    description: 'Activities auxiliary to finance',    verdict: 'red',
    reason: 'Financial-auxiliary activities are excluded.' },

  // ============== LEGAL / ACCOUNTANCY ==============
  { code: '6910',  description: 'Legal activities',                   verdict: 'red',
    reason: 'Legal services are an excluded trade.' },
  { code: '6920',  description: 'Accounting / bookkeeping / audit',   verdict: 'red',
    reason: 'Accountancy is an excluded trade.' },

  // ============== HOTELS / CARE HOMES ==============
  { code: '551',   description: 'Hotels and similar accommodation',   verdict: 'red',
    reason: 'Hotels and inns are excluded trades.' },
  { code: '552',   description: 'Holiday / short-stay accommodation', verdict: 'red',
    reason: 'Holiday accommodation is generally excluded.' },
  { code: '553',   description: 'Camping grounds',                    verdict: 'red',
    reason: 'Camping accommodation is generally excluded.' },
  { code: '8710',  description: 'Residential nursing care',           verdict: 'red',
    reason: 'Nursing homes are an excluded trade.' },
  { code: '8720',  description: 'Residential care for mental health', verdict: 'red',
    reason: 'Residential care is an excluded trade.' },
  { code: '8730',  description: 'Residential care for elderly',       verdict: 'red',
    reason: 'Residential care for the elderly is an excluded trade.' },

  // ============== SHIPBUILDING ==============
  { code: '301',   description: 'Building of ships and boats',        verdict: 'red',
    reason: 'Shipbuilding is an excluded trade.' },

  // ============== AMBER ZONES ==============
  { code: '70221', description: 'Financial management consultancy',   verdict: 'amber',
    reason: 'Borderline. Consultancy is fine; if substantial activity is finance services it shifts to excluded.' },
  { code: '70229', description: 'Other management consultancy',       verdict: 'amber',
    reason: 'Generally fine but HMRC will check what the company actually does versus the SIC label.' },
  { code: '74909', description: 'Other professional / scientific',    verdict: 'amber',
    reason: 'Vague catch-all SIC. HMRC will ask what the company actually does.' },

  // ============== EXPLICITLY GREEN (common SEIS-stage tech/biotech) ==============
  { code: '62012', description: 'Business / domestic software development', verdict: 'green',
    reason: 'Software development is a qualifying trade. Common SEIS profile.' },
  { code: '62020', description: 'IT consultancy',                    verdict: 'green',
    reason: 'IT consultancy is a qualifying trade.' },
  { code: '62090', description: 'Other IT services',                 verdict: 'green',
    reason: 'IT services are a qualifying trade.' },
  { code: '63110', description: 'Data processing, hosting, related',  verdict: 'green',
    reason: 'Data processing and hosting are qualifying trades.' },
  { code: '63120', description: 'Web portals',                       verdict: 'green',
    reason: 'Web portals are a qualifying trade.' },
  { code: '72110', description: 'Research on biotech',               verdict: 'green',
    reason: 'Biotech R&D is a qualifying trade and often R&D-intensive (KIC-eligible).' },
  { code: '72190', description: 'Other natural sciences research',   verdict: 'green',
    reason: 'Scientific R&D is a qualifying trade.' },
  { code: '7320',  description: 'Market research and polling',       verdict: 'green',
    reason: 'Market research is a qualifying trade.' },
];

/**
 * Classify a single SIC code against the excluded-trade rules.
 * Longest matching prefix wins so that more specific rules override.
 */
export function classifySic(code: string): SicMatch {
  const trimmed = (code || '').trim();
  if (!trimmed) {
    return {
      code: trimmed,
      description: 'Unknown SIC code',
      verdict: 'amber',
      reason: 'Empty or unrecognised SIC code; specialist review needed.',
    };
  }

  // Find the longest-prefix matching rule.
  const matches = RULES
    .filter(r => trimmed.startsWith(r.code))
    .sort((a, b) => b.code.length - a.code.length);

  if (matches.length > 0) {
    return { ...matches[0], code: trimmed };
  }

  // Default: not on any list, presumed green.
  return {
    code: trimmed,
    description: 'Unrecognised SIC (not on excluded list)',
    verdict: 'green',
    reason: 'Activity is not on the SEIS/EIS excluded-trades list.',
  };
}
