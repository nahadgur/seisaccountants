// data/provider.ts
//
// SINGLE SOURCE OF TRUTH for who delivers the service, what may be claimed
// about them, and how the enquiry process is described.
//
// OPERATING MODEL (settled, do not reintroduce the alternative):
// SEIS Accountants is the specialist-facing brand. Accountancy and tax work
// is delivered directly by Tidy Money Ltd. This site is NOT a matching
// service, a marketplace, or a referral network. There is no accountant
// panel, no "up to three quotes", and no city-based partner firms.
//
// EVIDENCE RULE
// Every string below that makes a regulated or factual claim carries an
// `evidence` note. If you cannot point at the evidence, the claim does not
// go on the site. Do not add credentials, insurance amounts, client counts,
// filing volumes, HMRC relationships, or response standards here without
// written confirmation from the practice.
//
// WITHHELD (deliberately absent, do not add back without evidence):
//   - Professional indemnity insurance cover or any figure for it. ACCA firm
//     registration requires PI cover, but we hold no certificate or sum
//     insured on file, so the site does not state it.
//   - Any count of applications filed per week/month/year.
//   - Any privileged, named, or informal relationship with HMRC's Venture
//     Capital Reliefs team beyond submitting and corresponding as agent.
//   - Any success rate, approval rate, or HMRC turnaround promise.

export interface ClaimWording {
  /** The text that may appear on the site. */
  text: string;
  /** Why this wording is permitted, and what the underlying evidence is. */
  evidence: string;
}

/** The legal entity that supplies the professional service. */
export const legalProvider = {
  name: 'Tidy Money Ltd',
  /**
   * Registered company number. Verified 2026-08-03 against the Companies
   * House register: TIDY MONEY LTD, 06509733, status Active, incorporated
   * 20 February 2008, registered office Devonshire House, 582 Honeypot
   * Lane, Stanmore, Middlesex HA7 1JS.
   */
  companiesHouseNumber: '06509733',
  companiesHouseUrl:
    'https://find-and-update.company-information.service.gov.uk/company/06509733',
  registeredOffice: 'Devonshire House, 582 Honeypot Lane, Stanmore, Middlesex HA7 1JS',
  incorporatedOn: '2008-02-20',
  /** Public site a visitor can check the firm against, unaided. */
  verifyUrl: 'https://www.tidymoney.com/',
  verifyLabel: 'tidymoney.com',
  /** Service address. Delivery is national and remote. */
  addressLocality: 'Stanmore, Harrow',
  postalCodeArea: 'HA7',
  addressCountry: 'GB',
  areaServed: 'United Kingdom',
  /** No inbound phone line. Fleet rule: no phone or call-us CTAs. */
  hasInboundPhone: false,
} as const;

/** The named individual professionally responsible for the work. */
export const professionalLead = {
  name: 'Preetesh Parmar',
  designation: 'FCCA',
  designationExpanded: 'Fellow of the Association of Chartered Certified Accountants',
  role: 'Director, Tidy Money Ltd',
  /**
   * Directorship verified 2026-08-03 on the Companies House officers list
   * for 06509733: PARMAR, Preetesh, Director, appointed 20 February 2008,
   * status Active. "Director" is the term the register uses, so the site
   * uses it too. The FCCA designation is separate and comes from the
   * practice, not from Companies House.
   */
  isActiveDirector: true,
  /** No photograph or biography is published: neither has been supplied
   *  and approved for publication. Do not source one from elsewhere. */
  hasApprovedPhoto: false,
  hasApprovedBio: false,
} as const;

/**
 * Approved credential wording. Use these verbatim.
 *
 * The regulated status belongs to Tidy Money Ltd, NOT to the SEIS Accountants
 * brand. Never write "we are ACCA regulated" without naming the practice, and
 * never attach "regulated" or "insured" to this website as an entity.
 */
export const credentialWording: Record<string, ClaimWording> = {
  /** Long form. Preferred wherever there is room. */
  delivery: {
    text: 'Accountancy services on this site are delivered by Tidy Money Ltd (company number 06509733), an ACCA-regulated practice whose director is Preetesh Parmar FCCA. You can check the company on the Companies House register and the practice at tidymoney.com.',
    evidence:
      'Company number, active status and directorship verified 2026-08-03 on the Companies House register. ACCA-regulated status and the FCCA designation published by the practice at tidymoney.com.',
  },
  /** Short form for strips, cards, and schema descriptions. */
  deliveryShort: {
    text: 'Accountancy delivered by Tidy Money Ltd, an ACCA-regulated practice.',
    evidence: 'As above.',
  },
  /** Badge-length. Must still name the practice. */
  deliveryBadge: {
    text: 'ACCA-regulated practice: Tidy Money Ltd',
    evidence: 'As above.',
  },
  cloudPractice: {
    text: 'The practice has run clients on live cloud accounting since 2009 and is listed by FreeAgent as a Gold Partner.',
    evidence:
      'FreeAgent Gold Partner tier confirmed as currently listed by FreeAgent (2026-08-03). The "since 2009" date is stated by the practice and is consistent with incorporation in February 2008; it is not independently verified.',
  },
  national: {
    text: 'The practice works with founders across the UK and runs engagements remotely on cloud accounting software, so there is no requirement to be near an office.',
    evidence: 'Operational fact: single service address in Stanmore HA7, cloud delivery, no branch network.',
  },
};

/**
 * HMRC wording. The permitted claim is that the practice submits to and
 * corresponds with the Venture Capital Reliefs team as part of client work.
 * That is an operational description of agent activity, not a relationship.
 *
 * BANNED: "direct relationship", "our contacts at HMRC", "we know the case
 * workers", "fast-tracked", "pre-approved", or any turnaround promise.
 */
export const hmrcWording: Record<string, ClaimWording> = {
  submissions: {
    text: "Advance assurance applications, SEIS1 and EIS1 compliance statements, and the follow-up correspondence they generate are submitted to HMRC's Venture Capital Reliefs team as part of the day-to-day work of the practice.",
    evidence: 'Operational description of agent activity. Makes no claim about access, influence, or outcome.',
  },
  noGuarantee: {
    text: 'Advance assurance is a non-binding indication given on the facts presented. It is not approval, pre-approval, or certification, and it does not guarantee that investors will ultimately obtain relief.',
    evidence: 'HMRC Venture Capital Schemes Manual: advance assurance is an opinion on the information supplied and can be revisited if the facts change.',
  },
  noTiming: {
    text: 'HMRC sets its own timescales for advance assurance and compliance statements. We do not control them and do not promise a decision date.',
    evidence: 'Factual. Removes the outcome and timing promises that previously appeared on service and city pages.',
  },
};

/**
 * The one enquiry-response standard used across the site.
 *
 * 48 hours is the figure the practice already operates to and is used on the
 * About, Contact, Terms, service, guide, and homepage routes. Nothing on the
 * site may state a different figure. If the operational standard changes,
 * change it HERE and nowhere else.
 */
export const responseStandard = {
  hours: 48,
  /** Sentence form. */
  sentence: 'We come back within 48 hours with a fixed written quote.',
  /** Clause form, for mid-sentence use. */
  clause: 'we come back within 48 hours with a fixed written quote',
  /** Badge form, for the short trust row under a form. */
  badge: '48-hour reply',
  /** What the visitor gets, stated without implying engagement. */
  noObligation: 'There is no obligation to proceed.',
  evidence:
    'Service standard operated by the practice. Used site-wide since the 2026-07 repositioning. Not an HMRC turnaround and must never be presented as one.',
} as const;

/**
 * How the commercial relationship is described. Kept here so no template can
 * reintroduce marketplace language.
 */
export const engagementWording = {
  /** The single primary call to action across the whole site. */
  primaryCta: 'Get a Fixed Quote',
  /** Secondary, used where the visitor is mid-lifecycle rather than pre-quote. */
  secondaryCta: 'Review my SEIS or EIS position',
  /** BANNED CTA strings. Referenced by the model-consistency check. */
  bannedCtas: ['Get matched', 'Get quotes', 'Compare accountants', 'Find an accountant'],
  quoteBasis:
    'Scheme work is priced as a fixed fee per filing or per round rather than hourly. The quote states the scope it covers before you commit.',
  dataHandling:
    'Your enquiry goes to Tidy Money Ltd, which acts as data controller for the accountancy work. It is not passed to any other firm and is not sold.',
} as const;

/**
 * Terms that must not appear in site copy. The repository check in
 * scripts/check-model-consistency.mjs greps for these and fails on a hit.
 */
export const bannedClaimTerms: string[] = [
  'matching service',
  'matched accountant',
  'matched specialist',
  'get matched',
  'up to three',
  'three quotes',
  'three independent quotes',
  'our network',
  'accountant network',
  'in our london network',
  'vetted network',
  'network practice',
  'panel of accountants',
  'independent accountants',
  'recent match',
  'consultations this week',
  '12+ locations',
  'references contacted',
  'professional indemnity',
  'fully insured',
  'approved by hmrc',
  'hmrc approved',
  'guaranteed eligible',
  'prevent clawback',
  'direct relationship with hmrc',
  '100% success',
  '24hr response',
  '24-hour response',
];
