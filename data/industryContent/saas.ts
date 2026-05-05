// data/industryContent/saas.ts
// Rich content for /industries/saas-startups/
// Mirrors the depth of tier-1 service-location content. Entirely SaaS-specific:
// revenue recognition, R&D claim patterns for platform engineering, SEIS/EIS
// on ARR-based valuations, MRR-led cash modelling. No em dashes. British
// English. Apostrophes escaped as needed in the wrapping TS string.

import type { IndustryContent } from './types';

export const saasContent: IndustryContent = {
  slug: 'saas-startups',

  // Section 01 - Overview. Long-form prose, 3-4 paragraphs, sets the
  // specialism wedge: why SaaS accounting differs from generic startup
  // accounting.
  overview: [
    'UK SaaS startups occupy an unusual accounting position. The revenue looks simple on the invoice (a monthly or annual subscription) but the correct treatment under IFRS 15 or FRS 102 is rarely what the Stripe export suggests. Annual contracts billed upfront create deferred revenue that most founders either collapse into cash receipts or amortise inconsistently across periods. Usage-based pricing, credits, free trials, discount tiers, enterprise contracts with ramp terms, and multi-year deals each carry a specific recognition pattern that has real consequences for monthly management accounts, investor reporting, and the eventual Series A due diligence review.',
    'The second layer of specialism is R&D tax credits. SaaS engineering activity often qualifies, but HMRC\u2019s bar under the merged scheme has risen sharply since August 2023: routine CRUD feature development, standard integrations, and configuration work are not qualifying R&D, and first-time claims built around those activities are increasingly rejected at enquiry. The qualifying work on a typical SaaS product tends to be narrower than founders expect (specific algorithmic work, novel data pipelines, architecture that resolves scientific or technological uncertainty) and broader than they document (cloud compute directly consumed by qualifying development, externally provided workers, specialist subcontractors). Getting the boundary right is the difference between a clean twenty per cent or twenty-seven per cent claim and a multi-year enquiry.',
    'The third layer is fundraising structure. SEIS and EIS valuations for UK SaaS companies are almost always built on ARR multiples, which interacts with advance assurance in ways that generalist accountants frequently miss. The share issue needs to follow the advance assurance, the advance assurance needs to pre-date investor commitment, and the valuation evidence needs to support the subscription price. For R&D-intensive SaaS startups, SEIS and EIS overlap with the enhanced twenty-seven per cent R&D credit rate, but only if qualifying R&D genuinely exceeds thirty per cent of total expenditure (a threshold that ARR growth will break quickly once revenue scales).',
    'Accountants in our network who work with UK SaaS startups handle these three layers as an integrated problem. The revenue recognition policy, the R&D claim methodology, and the SEIS/EIS structure need to be consistent with each other from the first accounting period, because reversing any of them later is expensive and often raises flags that complicate subsequent rounds.',
  ],

  // Section 02 - Benefits. 4 cards. Each specific to SaaS; no generic benefits
  // that could apply to any startup.
  benefits: [
    {
      title: 'Correct ARR and MRR from day one',
      desc: 'Revenue recognition under IFRS 15 or FRS 102 applied to subscriptions, usage, discounts, and multi-year contracts, with deferred revenue modelled alongside MRR and ARR so management accounts and investor dashboards agree.',
    },
    {
      title: 'R&D claim boundary that stands up to HMRC review',
      desc: 'Qualifying engineering activity identified against the post-2023 merged-scheme criteria, with technical narratives and cost allocation between qualifying R&D, routine development, and configuration documented at the point the work happens.',
    },
    {
      title: 'SEIS and EIS tuned for ARR-based valuations',
      desc: 'Advance assurance applications prepared with valuation evidence that reconciles to ARR multiples and pipeline data, plus compliance monitoring through the three-year qualifying holding period.',
    },
    {
      title: 'Cash flow models built for subscription economics',
      desc: '13-week rolling cash flow models that account for deferred revenue, annual prepayments, churn-adjusted MRR, CAC payback, and the R&D credit receipt timing that materially affects runway for loss-making SaaS startups.',
    },
  ],

  // Section 03 - The accounting playbook. Deep, specific, prose.
  // 6-7 subsections, each a genuine specialism. This is the content that
  // justifies the page existing and earns links. ~1500-2000 words total.
  playbook: [
    {
      heading: 'Revenue recognition for SaaS subscriptions',
      body: 'The default SaaS recognition pattern under IFRS 15 is that subscription revenue is recognised rateably over the service period, which sounds simple until it meets reality. An annual contract invoiced upfront for \u00A312,000 is not \u00A312,000 of revenue in month one: it is \u00A31,000 per month of recognised revenue and an opening \u00A311,000 deferred revenue balance that unwinds over the twelve months. Cash receipts and recognised revenue move in different directions, and the gap (deferred revenue on the balance sheet) is often the single largest line item for a growing SaaS startup. Founders who track cash only typically overstate revenue in months with a lot of annual billing and understate it in months with a lot of renewals. Monthly management accounts need to show MRR, ARR, bookings, and recognised revenue as four distinct metrics with explicit reconciliation between them.\n\nUsage-based pricing adds a layer. Variable consideration under IFRS 15 needs to be estimated and constrained: if a customer\u2019s usage-based bill has meaningful variability, the estimate goes into revenue with a constraint for the probability of significant reversal. In practice most UK SaaS startups use the expected value method on a rolling basis with a monthly true-up. Credits, free trials, and month-zero promotions are treated as variable consideration that reduces the transaction price. Multi-year deals with annual price escalators need the escalator modelled into the straight-line recognition unless the increase reflects a material change in the services provided.',
    },
    {
      heading: 'Implementation costs, capitalised development, and SaaS customer setup',
      body: 'Two separate capitalisation questions sit alongside revenue recognition and catch SaaS founders out. First, costs to obtain a contract (sales commissions) are capitalised and amortised over the expected customer life under IFRS 15 where they are incremental and recoverable. For a SaaS startup with meaningful ACV and a multi-year expected customer life, this shifts a substantial cost from immediate P&L recognition to a capitalised asset amortised over three to five years. Second, costs to fulfil a contract (customer onboarding, implementation, setup) are capitalised where they relate to a specific contract, generate or enhance resources used to satisfy future performance obligations, and are expected to be recovered.\n\nSeparately, internally generated intangible assets (platform development capitalisation under IAS 38 or FRS 102 section 18) is a policy choice with material P&L implications. Capitalising platform development shifts engineering cost off the income statement and onto the balance sheet as an intangible asset, amortised over a useful economic life (typically three to five years). For a SaaS startup with significant engineering spend and a desire to report a smaller loss to investors, this is attractive but needs to be consistent with both IAS 38 criteria (technical feasibility, intention to complete, ability to use or sell, probable economic benefit, reliable cost measurement) and with R&D credit claim methodology. Cost that is capitalised as an intangible asset still qualifies for R&D relief if it meets the qualifying criteria, but the claim mechanics differ from expensed R&D. Accountants in our network set the policy at the first accounting period, document the methodology, and apply it consistently to avoid restatements at due diligence.',
    },
    {
      heading: 'R&D tax credits: the qualifying boundary for SaaS engineering',
      body: 'Under the merged scheme, R&D tax credits return twenty per cent of qualifying expenditure, rising to twenty-seven per cent for R&D-intensive SMEs where qualifying R&D exceeds thirty per cent of total expenditure. For a typical UK SaaS startup, the qualifying work tends to concentrate in specific areas: novel algorithm design, machine learning model development where existing approaches are insufficient, significant data pipeline or streaming architecture work, scalability and performance engineering that resolves genuine technical uncertainty, and infrastructure work that goes beyond routine cloud configuration.\n\nWhat does not qualify is the routine majority of SaaS engineering: CRUD feature development, standard REST or GraphQL API wrapping of existing functionality, third-party integration work, UI implementation against an existing design system, routine database schema changes, standard DevOps and deployment configuration, and content or copy work. HMRC\u2019s enquiry activity since August 2023 has focused on claims that extrapolate from a small core of qualifying work to a large percentage of total engineering spend without the underlying evidence. The documentation that stands up to review is contemporaneous: commit logs or project tickets that identify the specific scientific or technological uncertainty, time allocation records that separate qualifying and non-qualifying work at the individual engineer level, cloud and software cost allocation that identifies the compute and tools directly consumed by qualifying work, and clear separation of externally provided workers and subcontractors by the nature of the work they did.\n\nThe under-claimed cost categories for SaaS specifically are cloud compute and data (where genuinely consumed by qualifying development and testing rather than production), externally provided workers (specialist contractors brought in for specific R&D work, at sixty-five per cent for SMEs), and subcontractors (similarly at sixty-five per cent for SMEs, where the work addresses scientific or technological uncertainty). Software licences directly used in R&D (for example, specialist ML tooling, scientific computing platforms, internal observability for R&D environments) also qualify and are often missed.',
    },
    {
      heading: 'SEIS, EIS, and ARR-based valuation',
      body: 'SaaS valuations for SEIS and EIS rounds are almost always built on ARR multiples in the UK market. The valuation evidence HMRC expects for advance assurance and the investor commitment in the term sheet need to be consistent: if the term sheet is priced at a ten times ARR pre-money and the advance assurance submission implies a very different valuation basis, the application slows down. The work at advance assurance is to document the ARR figure, the growth trajectory, the retention and expansion assumptions, the comparable transactions, and the basis for the specific multiple, in a form that matches how the same numbers appear in the pitch deck and data room.\n\nFor R&D-intensive SaaS, the interaction with the enhanced credit rate matters over time. A very early-stage SaaS startup with a large engineering team and small revenue will often qualify for the twenty-seven per cent rate at first claim. As ARR grows, the R&D-intensive threshold (qualifying R&D greater than thirty per cent of total expenditure) breaks, and the rate drops to twenty per cent. Accountants in our network model this transition in the 18-month forecast so the cash flow impact of the rate change is not a surprise in the first year post-Series A.',
    },
    {
      heading: 'Cash flow forecasting for subscription economics',
      body: 'The standard 13-week rolling cash flow model needs specific adjustments for SaaS. Annual prepayment timing creates large month-to-month cash swings that have no relationship to MRR, so the cash forecast and the MRR-led trading forecast need to be explicitly reconciled rather than treated as the same thing. Customer acquisition cost payback periods of six to twenty-four months mean that aggressive new customer acquisition consumes cash in the acquisition month and produces cash a year or more later, which a simple gross margin forecast does not capture. Churn and contraction need to be modelled at the cohort level, not as a blended monthly percentage, because the actual cash impact depends heavily on when cohorts expire and how expansion revenue concentrates.\n\nR&D credit receipt timing matters materially for loss-making SaaS startups where the annual credit is a large single inflow. The credit payment from HMRC typically arrives four to eight weeks after the claim is submitted with the Corporation Tax return, but enquiries extend that to three to six months. For a SaaS startup with fifteen months of runway where two months of runway are the R&D credit, the forecast needs to model the credit as a probability-weighted inflow with a contingency for delay. Accountants in our network build the two-scenario version at first forecast: optimistic with credit received on target date, conservative with credit delayed by three months.',
    },
    {
      heading: 'US flip, Delaware parent, and transfer pricing',
      body: 'UK SaaS startups with meaningful US customer revenue or US-based senior hiring frequently consider a US flip at Series A or Series B: restructuring so a Delaware C-Corp owns the UK subsidiary. The flip ends further SEIS and EIS eligibility at the UK level (no further qualifying share issues to UK investors) and creates a transfer pricing obligation between the UK and US entities for the value of the IP and services flowing across the border. For a SaaS startup, the IP valuation at the point of flip is commercially sensitive and tax-material: the R&D work continues in the UK subsidiary, the customer contracts and revenue sit in the US parent, and the transfer pricing arrangement needs to reflect the economic reality of where value is created.\n\nThe timing decision is rarely clean. Flipping earlier preserves more optionality on US-led rounds but forecloses further UK SEIS/EIS. Flipping later captures more UK relief but complicates the Series B process with US investors. Accountants in our network who work with UK SaaS startups model the full tax impact of both timings (relief captured, ongoing transfer pricing cost, Corporation Tax rate arbitrage, US tax consequences for UK founders) before the decision goes to the board.',
    },
    {
      heading: 'EMI options for SaaS engineering and go-to-market teams',
      body: 'EMI option schemes are standard at SaaS Series A and beyond, but the design and administration has specific SaaS considerations. The option pool size (typically ten to twenty per cent of the post-money fully diluted cap table) needs to accommodate both engineering retention and the go-to-market hires that ARR growth requires, with an explicit plan for pool top-ups before Series B. EMI valuations need to be defensible at HMRC-agreed methodology rather than self-assessed, because a SaaS company with rapidly growing ARR will see the option exercise price need frequent update if the valuation methodology is not agreed in advance.\n\nThe \u00A3250,000 per-employee unexercised option limit and the \u00A33 million scheme-wide cap apply through the life of the scheme, and both are easier to breach at a fast-growing SaaS startup than founders anticipate. For a senior engineer hired early with a large grant, subsequent grants or top-ups can push past the individual limit. The scheme administration and option agreements need to be set up with the growth trajectory in view, not just the founding team\u2019s equity.',
    },
  ],

  // Section 04 - Fit check. Who this is for.
  fitCheckIntro: 'Specialist SaaS accounting is particularly valuable for:',
  fitCheck: [
    'Subscription-based startups where IFRS 15 or FRS 102 revenue recognition does not match billing, and monthly management accounts need MRR, ARR, bookings, and recognised revenue as distinct metrics',
    'Engineering-heavy SaaS startups preparing a first R&D tax credit claim under the post-2023 merged-scheme rules where the qualifying boundary needs to be defined at the point work happens',
    'SaaS startups raising SEIS or EIS rounds on ARR-based valuations where advance assurance evidence needs to reconcile to the pitch deck and term sheet',
    'R&D-intensive SaaS startups where the twenty-seven per cent enhanced credit rate applies now but will transition to twenty per cent as ARR grows through the thirty per cent R&D-intensity threshold',
    'Fast-growing SaaS startups where annual prepayment cash timing, CAC payback periods, and cohort-level churn make blended cash flow models materially inaccurate',
    'UK SaaS startups considering a US flip to a Delaware parent where the transfer pricing arrangement, SEIS/EIS timing, and IP valuation all need to be resolved before the structuring decision',
    'Series A and later SaaS startups setting up EMI option schemes where the pool size, valuation methodology, and individual/scheme limits need to accommodate the engineering and go-to-market hiring plan',
  ],

  // Section 05 - FAQ. SaaS-specific. Gets FAQPage schema. 8 entries, each
  // substantive. Matches depth of service FAQs.
  faqs: [
    {
      question: 'How is SaaS revenue recognised under IFRS 15 or FRS 102?',
      answer: 'Subscription revenue is recognised rateably over the service period, not when cash is received. An annual contract invoiced upfront creates an opening deferred revenue balance that unwinds over the twelve months, not a single revenue spike in month one. Usage-based pricing is variable consideration under IFRS 15, estimated and constrained with a monthly true-up. Credits, free trials, and promotions reduce the transaction price. Multi-year deals with price escalators need the escalator modelled into the straight-line recognition unless the increase reflects a material change in the service. Monthly management accounts should show MRR, ARR, bookings, and recognised revenue as four distinct metrics with explicit reconciliation between them.',
    },
    {
      question: 'Does my SaaS engineering activity qualify for R&D tax credits?',
      answer: 'Typically a narrower slice than founders expect. Qualifying work on a SaaS product concentrates in areas that resolve scientific or technological uncertainty: novel algorithm design, machine learning model development where existing approaches are insufficient, significant data pipeline or streaming architecture work, scalability engineering beyond routine cloud configuration, and infrastructure work that a competent professional in the field could not readily deduce. Routine CRUD feature development, standard API wrapping, third-party integrations, UI implementation, and standard DevOps work do not qualify. The post-August 2023 merged-scheme rules have raised the documentation bar significantly, and enquiries are focused on claims that extrapolate from a small core of qualifying work to a large percentage of total engineering spend.',
    },
    {
      question: 'Should my SaaS startup capitalise platform development costs?',
      answer: 'It is a policy choice with material P&L implications. Capitalising platform development (under IAS 38 or FRS 102 section 18) shifts engineering cost from the income statement to an intangible asset on the balance sheet, amortised over a useful economic life of typically three to five years. This produces a smaller reported loss, which some SaaS startups prefer for investor reporting. The qualifying criteria are specific: technical feasibility, intention to complete, ability to use or sell, probable future economic benefit, and reliable cost measurement. Capitalised development can still qualify for R&D tax relief if the work meets qualifying criteria, but the claim mechanics differ from expensed R&D. The policy should be set at the first accounting period and applied consistently to avoid restatement at due diligence.',
    },
    {
      question: 'How do SEIS and EIS work for SaaS startups with ARR-based valuations?',
      answer: 'SEIS and EIS valuations for UK SaaS startups are almost always built on ARR multiples in the current market. The advance assurance application and the investor term sheet need to be consistent: the ARR figure, growth trajectory, retention assumptions, comparable transactions, and the specific multiple basis should match across the pitch deck, data room, and HMRC submission. SEIS applies to very early-stage companies with gross assets under \u00A3350,000 (fifty per cent income tax relief for investors), and EIS applies to companies with gross assets under \u00A315 million (thirty per cent relief). Most SaaS startups use SEIS for the initial round and transition to EIS for subsequent rounds. Advance assurance must be obtained before share issue, and share issue must be completed within three years of the advance assurance date.',
    },
    {
      question: 'What is R&D intensity and when does it apply to SaaS startups?',
      answer: 'R&D intensity is the merged-scheme test for access to the enhanced twenty-seven per cent credit rate, compared to the standard twenty per cent rate. An SME qualifies as R&D-intensive if qualifying R&D expenditure exceeds thirty per cent of total expenditure for the accounting period. Very early-stage SaaS startups with large engineering teams and small revenue often qualify easily: qualifying R&D might be sixty to seventy per cent of total spend. As ARR grows, go-to-market costs scale, and qualifying R&D as a share of total expenditure drops, the R&D-intensive threshold breaks and the rate falls to twenty per cent. The transition is usually between Series A and Series B for a typical UK SaaS startup, and the cash flow impact should be modelled in the 18-month forecast rather than surfaced as a surprise.',
    },
    {
      question: 'How should a SaaS cash flow forecast model annual prepayments?',
      answer: 'Separately from MRR, with explicit reconciliation. A SaaS startup with meaningful annual contracts will see large month-to-month cash swings that have no relationship to the MRR trajectory. The forecast should distinguish bookings (contracts signed, in the commercial pipeline view), cash (actual bank movements, in the 13-week rolling model), and recognised revenue (the accounting view under IFRS 15). Annual prepayments appear as a lump sum cash inflow and an increase in deferred revenue on the balance sheet, which unwinds to recognised revenue over twelve months. Customer acquisition cost payback periods of six to twenty-four months mean the cash cost of new customer acquisition precedes the cash return by a year or more, which blended gross margin models do not capture.',
    },
    {
      question: 'When should a UK SaaS startup consider a US flip to a Delaware parent?',
      answer: 'The common trigger points are substantial US customer revenue, US-based senior hiring, or a US-led growth round. The most common timing is between Series A and Series B, although it can be done earlier. The flip ends further SEIS and EIS at the UK level, creates ongoing transfer pricing obligations between the UK subsidiary and US parent, and requires an IP valuation at the point of flip. Flipping earlier preserves optionality on US-led rounds but forecloses further UK relief. Flipping later captures more UK relief but complicates the Series B process. The full tax impact (relief captured, ongoing transfer pricing cost, Corporation Tax rate arbitrage, US consequences for UK founders) should be modelled before the decision goes to the board.',
    },
    {
      question: 'How do EMI option schemes work at a SaaS startup?',
      answer: 'An EMI scheme at SaaS Series A typically covers ten to twenty per cent of the post-money fully diluted cap table as the option pool, with individual grants in the 0.1 to 2 per cent range depending on role and seniority. Option exercise prices should be agreed with HMRC using a defensible valuation methodology at the point of grant, not self-assessed, because a rapidly growing SaaS company will see valuations move quickly and undocumented methodology creates exposure. The \u00A3250,000 per-employee unexercised option limit and the \u00A33 million scheme-wide cap apply throughout the life of the scheme. For a senior engineer hired early with a large initial grant, subsequent top-ups can push past the individual limit, and the scheme design should accommodate the go-to-market hiring plan alongside engineering retention.',
    },
  ],
};
