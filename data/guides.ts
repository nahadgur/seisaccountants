// data/guides.ts

export interface HowToStep {
  name: string;
  text: string;
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  title: string;
  shortTitle: string;
  serviceSlug: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubtitle: string;
  directQuestion: string;
  directAnswer: string;
  estimatedReadTime: number; // minutes
  lastUpdated: string;
  /**
   * Optional YYYY-MM-DD date the guide was first published.
   * If absent, Article `datePublished` falls back to `lastUpdated`.
   */
  datePublished?: string;
  hasCalculator: boolean;
  calculatorLabel: string;
  /**
   * Optional ordered HowTo steps used to emit schema.org/HowTo on the guide
   * page. Each step has a short imperative `name` and a 1-2 sentence `text`.
   * Omit if the guide is not process-based.
   */
  howToSteps?: HowToStep[];
  /**
   * Optional guide-specific FAQs used to emit schema.org/FAQPage on the
   * guide page. Keep these distinct from the `directAnswer` question at the
   * top of the page.
   */
  faqs?: GuideFaq[];
}

export const guides: Guide[] = [
  {
    slug: 'rd-tax-credits-uk-startups',
    title: 'The Complete Guide to R&D Tax Credits for UK SEIS and EIS Founders',
    shortTitle: 'R&D Tax Credits',
    serviceSlug: 'rd-tax-credits',
    metaTitle: 'R&D Tax Credits for UK SEIS and EIS Founders: Complete 2025–26 Guide | How Much Can You Claim?',
    metaDescription: 'Everything UK founders need to know about R&D tax credits in 2025–26. Qualifying activities, merged scheme rates, how to claim, and an interactive calculator. Updated for HMRC merged scheme.',
    heroHeading: 'R&D Tax Credits for UK SEIS and EIS Founders',
    heroSubtitle: 'The complete guide to qualifying, claiming, and maximising R&D tax credits under the 2024 merged scheme. Updated for the current HMRC rates.',
    directQuestion: 'What are R&D tax credits for UK SEIS and EIS founders?',
    directAnswer: 'R&D tax credits are an HMRC scheme that returns between 20% and 27% of a UK company\'s qualifying research and development expenditure, either as a reduction in Corporation Tax or, for loss-making companies, as a direct cash payment. Under the merged scheme introduced in April 2024, most UK startups claim at a 20% credit rate, while R&D-intensive SMEs spending more than 30% of their total expenditure on R&D qualify for the enhanced 27% rate.',
    estimatedReadTime: 18,
    lastUpdated: '2025-11-01',
    hasCalculator: true,
    calculatorLabel: 'R&D Credit Estimator',
    howToSteps: [
      { name: 'Identify qualifying projects', text: 'Review your development activity against HMRC qualifying criteria to identify which projects involve scientific or technological uncertainty that a competent professional could not resolve from existing knowledge.' },
      { name: 'Calculate qualifying expenditure', text: 'Identify and quantify qualifying costs across staff time, contractor payments, software licences, cloud computing, and consumables for each qualifying project.' },
      { name: 'Prepare the technical narrative', text: 'Document each qualifying project: the uncertainty faced, the approach taken, and the outcome, whether successful or not. Contemporaneous records are far stronger than reconstructed ones.' },
      { name: 'Submit with Corporation Tax return', text: 'File the CT600L alongside your CT600 annual return, ensuring the Advance Notification has been submitted within six months of period end if this is your first claim.' },
      { name: 'Receive credit or cash payment', text: 'HMRC processes straightforward claims within 28 days. Loss-making companies receive a cash payment; profitable companies receive a Corporation Tax credit.' },
    ],
    faqs: [
      { question: 'How much can a UK startup claim in R&D tax credits?', answer: 'Under the merged scheme, UK startups claim a 20% credit on qualifying R&D expenditure. R&D-intensive SMEs, where qualifying R&D exceeds 30% of total expenditure, qualify for 27%. A loss-making startup spending £100,000 on qualifying R&D receives £20,000 as a cash payment from HMRC at the standard rate.' },
      { question: 'Does software development qualify for R&D tax credits?', answer: 'Yes. Software development qualifies when it involves resolving scientific or technological uncertainty, meaning your engineers did not know the solution at the start and had to investigate or experiment to find it. Building novel algorithms, developing machine learning systems with uncertain performance characteristics, and creating new database architectures all commonly qualify. Configuring existing frameworks or building standard features does not.' },
      { question: 'How long does an R&D tax credit claim take?', answer: "HMRC's target processing time for straightforward R&D repayment claims is 28 days. Well-prepared claims submitted with a full technical narrative and accurate CT600L are typically processed within four to six weeks. Claims selected for compliance review take three to six months; formal enquiries can take 12 to 18 months." },
      { question: 'Can a loss-making startup claim R&D tax credits?', answer: 'Yes, under the merged scheme, loss-making companies receive the R&D credit as a direct cash payment from HMRC at 20% (or 27% for R&D-intensive SMEs) of qualifying expenditure. This payable credit is subject to a cap of £20,000 plus 300% of total PAYE and NIC liability for the period.' },
      { question: 'What is the Advance Notification requirement?', answer: 'For accounting periods beginning on or after 1 April 2023, first-time claimants (and companies that have not claimed in the preceding three years) must notify HMRC of their intention to claim R&D relief within six months of the end of the accounting period. Missing the Advance Notification window disqualifies the claim entirely, regardless of how strong the underlying R&D activity is.' },
    ],
  },
  {
    slug: 'seis-eis-guide-uk-startups',
    title: 'The Complete Guide to SEIS and EIS Founders’ Guide',
    shortTitle: 'SEIS & EIS',
    serviceSlug: 'seis-advance-assurance',
    metaTitle: 'SEIS and EIS Founders’ Guide: Complete 2025–26 Guide | Eligibility, Advance Assurance & Investor Relief',
    metaDescription: 'Everything UK founders need to know about SEIS and EIS in 2025–26. Eligibility criteria, advance assurance process, investor tax relief, and an interactive eligibility checker.',
    heroHeading: 'SEIS and EIS Founders’ Guide',
    heroSubtitle: 'The definitive guide to SEIS and EIS eligibility, advance assurance, and investor tax relief for UK founders.',
    directQuestion: 'What is SEIS and how does it work for UK SEIS and EIS founders?',
    directAnswer: 'SEIS (Seed Enterprise Investment Scheme) allows early-stage UK startups to offer their investors 50% income tax relief on investments up to £200,000 per investor per year, plus capital gains tax exemption on exit. To use SEIS, your company must be fewer than three years old, have fewer than 25 employees, have gross assets below £350,000, and carry on a qualifying trade. Most tech, software, and product startups qualify.',
    estimatedReadTime: 16,
    lastUpdated: '2025-11-01',
    hasCalculator: true,
    calculatorLabel: 'SEIS/EIS Eligibility Checker',
    howToSteps: [
      { name: 'Confirm your company meets the qualifying tests', text: 'For SEIS: UK company, under 3 years trading, fewer than 25 employees, gross assets under £350,000, carrying on a qualifying trade. For EIS: under 7 years (or 10 for knowledge-intensive companies), under 250 employees, gross assets under £15 million.' },
      { name: 'Prepare the supporting documents', text: 'Business plan with financial forecasts, latest management accounts or opening balance sheet, shareholders register, memorandum and articles of association, and any investor letters of intent.' },
      { name: 'Draft the advance assurance letter', text: 'Cover the qualifying trade explanation, how funds will be used, the risk-to-capital assessment, and confirm the use of funds is not for a disqualifying purpose. Weak use-of-funds descriptions are the most common reason HMRC raises follow-up questions.' },
      { name: 'Submit via the HMRC Advance Assurance online service', text: 'Attach all documents, provide the company registration number, and include details of any lead or indicative investors. Applications without investor detail are slower to process.' },
      { name: 'Respond to HMRC follow-up questions', text: 'Most applications receive at least one round of queries, typically about qualifying trade specifics or use of funds. Responses within 14 days usually keep the end-to-end timeline to six to eight weeks.' },
    ],
    faqs: [
      { question: 'What is the difference between SEIS and EIS eligibility?', answer: 'SEIS is for very early-stage companies: under 3 years old, fewer than 25 employees, gross assets under £350,000, with a £250,000 company lifetime cap on SEIS investment. Investors get 50% income tax relief on up to £200,000 per tax year. EIS is for more established startups: under 7 years trading (10 for knowledge-intensive companies), under 250 employees, gross assets under £15 million. Investors get 30% income tax relief on up to £1 million per tax year, or £2 million if at least £1 million is invested in KICs.' },
      { question: 'Can my company use SEIS and EIS in the same round?', answer: 'Yes. The standard pattern is SEIS then EIS: the first tranche up to the £250,000 company lifetime cap is raised under SEIS, and any capital beyond that in the same round is raised under EIS. The SEIS tranche must close before the EIS tranche opens. Some rounds also include unrelieved investment (where investors do not claim SEIS or EIS), which sits outside both caps.' },
      { question: 'What is knowledge-intensive company status and does it matter?', answer: 'Knowledge-intensive company (KIC) status extends EIS eligibility from 7 to 10 years of trading, raises the annual investment cap to £10 million (from £5 million), and extends the employee limit to 500. To qualify, a company must meet an R&D expenditure threshold (at least 15% of operating costs across any of the preceding three years, or 10% in each) or an innovation condition based on intellectual property creation. KIC status is assessed round-by-round, so a company can be a KIC for some rounds and not others.' },
      { question: 'What happens to investor relief if my company is acquired within three years?', answer: 'SEIS and EIS shares must be held for at least three years from the date of issue to retain income tax relief. If the company is acquired or the investor sells before three years, HMRC claws back the income tax relief and the capital gains exemption is lost. Relief is usually preserved if the acquirer assumes SEIS or EIS status through a share-for-share exchange that satisfies HMRC conditions. Acquisitions within the three-year period should be planned with SEIS/EIS continuity in mind from the outset.' },
      { question: 'Do I need advance assurance before I start raising?', answer: 'Strictly no: a company can raise SEIS or EIS investment without advance assurance, and investors can claim relief after the fact provided all qualifying conditions were met. In practice, advance assurance is what sophisticated investors ask for, and raising without it often means delays or protective clauses. Allow six to eight weeks between submitting advance assurance and closing a round; longer for complex or first-time applications.' },
    ],
  },

  {
    slug: 'seis-eis-advance-assurance-application',
    title: 'SEIS and EIS Advance Assurance: The HMRC Application End-to-End',
    shortTitle: 'Advance Assurance',
    serviceSlug: 'seis-eis-advice',
    metaTitle: 'SEIS EIS Advance Assurance UK 2026 | HMRC Application Guide',
    metaDescription: 'How to file for SEIS and EIS Advance Assurance with HMRC in 2025-26: the qualifying tests, the document pack, wording patterns that trigger queries, response protocols, and post-assurance steps.',
    heroHeading: 'SEIS and EIS Advance Assurance',
    heroSubtitle: 'The HMRC application end-to-end: qualifying tests, document pack, wording patterns, and the response protocol that keeps applications on a 6-week turnaround.',
    directQuestion: 'What is SEIS / EIS Advance Assurance and why do I need it?',
    directAnswer: 'Advance Assurance is a non-binding pre-clearance from HMRC\'s Venture Capital Reliefs team confirming that a UK company appears to qualify for SEIS or EIS. It is not legally required to raise SEIS / EIS investment, but in practice sophisticated UK angel investors and seed funds will not commit without seeing the assurance letter. HMRC processing time is typically 6-8 weeks for a clean application; specialists familiar with the VCR team\'s review patterns target 4-6 weeks on subsequent rounds.',
    estimatedReadTime: 14,
    lastUpdated: '2026-05-14',
    datePublished: '2026-05-14',
    hasCalculator: false,
    calculatorLabel: '',
    faqs: [
      { question: 'How long does HMRC take to issue an Advance Assurance letter?', answer: 'HMRC\'s target processing time is 4-6 weeks for clean applications. In practice, the September-November and February-April peaks push first-time applications to 8-12 weeks. Specialist accountants with ongoing VCR team relationships often see 4-week turnarounds even in peak periods.' },
      { question: 'Can I raise SEIS / EIS without Advance Assurance?', answer: 'Yes, in principle. The investor relief is available after the fact via the SEIS3 / EIS3 certificate as long as the company actually qualifies. In practice, almost all UK angel investors and seed funds require the assurance letter before committing, so raising without it is realistic only for friends-and-family rounds.' },
      { question: 'What is the most common reason applications get queried?', answer: 'Vague use-of-funds descriptions ("working capital and general business purposes") and qualifying-trade language that overlaps with excluded activities (e.g. "financial services platform"). HMRC wants specifics: categorised use-of-funds breakdown, plain-English description of the actual revenue model.' },
      { question: 'Does the assurance letter expire?', answer: 'The assurance is valid for the share issue described in the application. There is no formal expiry, but if the company materially changes its trade, cap-table structure, or use-of-funds between assurance and issue, a fresh application is the cleanest path.' },
    ],
  },

  {
    slug: 'seis-eis-compliance-certificates-s1-s3',
    title: 'SEIS1 / EIS1 and SEIS3 / EIS3 Compliance Certificates: The Investor Relief Chain',
    shortTitle: 'Compliance Certificates',
    serviceSlug: 'seis-eis-advice',
    metaTitle: 'SEIS3 EIS3 Compliance Certificates UK 2026 | Investor Claim Chain',
    metaDescription: 'The SEIS1 / EIS1 compliance statement filing and the SEIS3 / EIS3 certificate distribution to investors: timeline, document requirements, HMRC rejection patterns, partial rejections, three-year qualifying-period monitoring.',
    heroHeading: 'SEIS / EIS Compliance Certificates',
    heroSubtitle: 'The SEIS1 / EIS1 filing chain and the SEIS3 / EIS3 distribution to investors. Where compliance fails at the final hurdle, and how to avoid it.',
    directQuestion: 'What are SEIS1, EIS1, SEIS3, and EIS3 certificates and how do they work?',
    directAnswer: 'SEIS1 and EIS1 are the compliance statements the company files with HMRC after the four-month trading-period test is met following an SEIS or EIS share issue. HMRC reviews the statement and, on approval, issues SEIS3 (for SEIS shares) or EIS3 (for EIS shares) certificates to the company. The company distributes these certificates to each investor, who then uses them to claim income tax relief on their personal Self-Assessment return.',
    estimatedReadTime: 13,
    lastUpdated: '2026-05-14',
    datePublished: '2026-05-14',
    hasCalculator: false,
    calculatorLabel: '',
    faqs: [
      { question: 'When can I file the SEIS1 / EIS1?', answer: 'After the four-month trading-period test: either four months after the share issue, or four months after the start of the qualifying trade if the trade started after the issue. Hard deadline is two years after the end of the tax year of issue, but specialists file as soon as the trading-period test is met to get SEIS3 / EIS3 certificates to investors promptly.' },
      { question: 'How long does HMRC take to process the SEIS1 / EIS1?', answer: 'Typically 4-12 weeks after filing. The compliance statement gets more scrutiny than Advance Assurance because it is the binding test for investor relief. Clean filings move through faster; statements with investor-data inconsistencies or share-rights issues get queried.' },
      { question: 'Can HMRC reject some investors\' relief and approve others?', answer: 'Yes. Partial rejections are common where one investor has a value-received problem (e.g. paid consultancy on non-arm\'s-length terms) but the rest of the round is clean. HMRC issues SEIS3 / EIS3 to the unaffected investors and declines the problem investor.' },
      { question: 'What happens if I lose an investor\'s SEIS3 / EIS3?', answer: 'The investor needs the original certificate to claim relief. Companies should retain copies and distribute certificates within 14 days of receipt from HMRC. Lost certificates can sometimes be reissued by HMRC on request but the process can take 4-8 weeks.' },
    ],
  },

  {
    slug: 'knowledge-intensive-companies-eis-rules',
    title: 'Knowledge-Intensive Companies (KIC) EIS: The Enhanced Regime for R&D-Led Startups',
    shortTitle: 'Knowledge-Intensive EIS',
    serviceSlug: 'seis-eis-advice',
    metaTitle: 'KIC EIS UK 2026 | Knowledge-Intensive Company Rules',
    metaDescription: 'Knowledge-Intensive Company EIS rules 2025-26: the R&D intensity test, the innovation condition, extended company-age and employee limits, £10m annual cap, round-by-round assessment.',
    heroHeading: 'Knowledge-Intensive Companies (KIC) EIS',
    heroSubtitle: 'The enhanced EIS regime for R&D-led startups: 10-year company-age window, £10m annual cap, £20m lifetime, 500 employees.',
    directQuestion: 'What is Knowledge-Intensive Company (KIC) status under EIS?',
    directAnswer: 'KIC status is the enhanced EIS regime for R&D-intensive UK companies. It extends the company-age limit from 7 to 10 years, doubles the annual EIS investment cap from £5m to £10m, raises the employee limit from 250 to 500, and lets individual investors claim relief on up to £2m per year (vs £1m for standard EIS, provided at least £1m is in KICs). Qualifying routes: the R&D intensity test (15 percent of operating costs in one preceding year or 10 percent in each of three) or the innovation condition (IP-creation based, qualitative test).',
    estimatedReadTime: 12,
    lastUpdated: '2026-05-14',
    datePublished: '2026-05-14',
    hasCalculator: false,
    calculatorLabel: '',
    faqs: [
      { question: 'Is KIC EIS a separate scheme from standard EIS?', answer: 'No. KIC is an enhanced regime within EIS. The qualifying tests, share rights, three-year holding period, and SEIS1 / EIS1 compliance flow are identical to standard EIS. What differs are the company-age, employee, and investment limits.' },
      { question: 'Which is easier to qualify for: the R&D intensity test or the innovation condition?', answer: 'The R&D intensity test is more objective. If you have a recent R&D tax credit claim, the qualifying R&D expenditure figure is already documented in the CT600L. The innovation condition requires qualitative judgement from HMRC and a higher evidential bar.' },
      { question: 'Does KIC status carry over from one EIS round to the next?', answer: 'No. KIC status is assessed round-by-round at each share issue. A company that qualified for one round may not qualify for the next if R&D intensity has dropped or the innovation condition is no longer prospective. Each new Advance Assurance has to re-evidence KIC status.' },
      { question: 'Can a company switch from standard EIS to KIC EIS?', answer: 'Yes. The next Advance Assurance can state KIC status and provide the supporting evidence. There is no formal re-designation; the new assurance and subsequent SEIS1 / EIS1 compliance statement evidence the new status.' },
    ],
  },

  {
    slug: 'seis-eis-qualifying-trades',
    title: 'SEIS and EIS Qualifying Trades: Which Activities Are Excluded and Why',
    shortTitle: 'Qualifying Trades',
    serviceSlug: 'seis-eis-advice',
    metaTitle: 'SEIS EIS Qualifying Trades UK 2026 | Excluded Activities List',
    metaDescription: 'The SEIS and EIS qualifying-trade test 2025-26: full list of excluded activities, property and financial-services grey areas, substantial-trade test, wording in Advance Assurance applications.',
    heroHeading: 'SEIS and EIS Qualifying Trades',
    heroSubtitle: 'Which UK trades qualify, which are excluded, and how to structure borderline cases.',
    directQuestion: 'Which UK trades qualify for SEIS and EIS?',
    directAnswer: 'SEIS and EIS define qualifying trades negatively: a trade qualifies if it is not on the list of excluded activities. Excluded activities include property development, dealing in land, banking, insurance, money-lending, asset leasing, legal services, accounting services, and operating hotels or care homes (with narrow exceptions). Software, biotech, hardware, e-commerce, manufacturing, content production, and most services qualify. The substantial-trade test allows mixed activity where excluded activities are not more than 20 percent of the trade.',
    estimatedReadTime: 12,
    lastUpdated: '2026-05-14',
    datePublished: '2026-05-14',
    hasCalculator: false,
    calculatorLabel: '',
    faqs: [
      { question: 'Does my fintech business qualify?', answer: 'Most fintech businesses are software companies wearing a regulated wrapper, and they qualify. Direct financial services (banking, insurance underwriting, FX trading) are excluded; software-led fintech (broker software, banking-app software without taking principal positions) generally qualifies. Structure matters; specialist review is recommended for any business with FCA or PRA permissions.' },
      { question: 'Can a property-tech business qualify?', answer: 'Almost always yes. The qualifying trade is the software or marketplace; the fact that the customers operate in property does not contaminate the SaaS trade. Pure property businesses (development, dealing in land, rental holdings) do not qualify.' },
      { question: 'What is the substantial-trade test?', answer: 'A company with multiple activities qualifies if non-qualifying activities are not a "substantial part" of the trade. HMRC interprets substantial as roughly 20 percent. Applied across turnover, gross assets, time spent, and capital employed.' },
      { question: 'Can I restructure a borderline business to qualify?', answer: 'Yes. The common structural fix is to separate the qualifying activity into a standalone company that raises SEIS / EIS, with non-qualifying activity in a sibling company. Specialists routinely advise on the corporate-structure split before applying for Advance Assurance.' },
    ],
  },

  {
    slug: 'seis-eis-pitfalls-void-relief',
    title: 'SEIS / EIS Pitfalls That Void Relief: Share Rights, Value Received, Connected Parties',
    shortTitle: 'Pitfalls That Void Relief',
    serviceSlug: 'seis-eis-advice',
    metaTitle: 'SEIS EIS Pitfalls UK 2026 | What Voids Investor Relief',
    metaDescription: 'The structural pitfalls that void SEIS / EIS relief: preferred share rights, anti-dilution ratchets, value received by investors, related-party rules, qualifying-period breaches, pre-arranged exits.',
    heroHeading: 'SEIS / EIS Pitfalls That Void Relief',
    heroSubtitle: 'Share-class breaches, value-received-by-investor breaches, related-party rules, qualifying-period breaches, and the rescue options for each.',
    directQuestion: 'What can void SEIS or EIS investor relief?',
    directAnswer: 'SEIS / EIS investor relief is voided by structural breaches: preferred share rights or anti-dilution ratchets on the SEIS / EIS shares; value received by the investor from the company during the three-year qualifying period; the investor being a connected party (founder, director, employee, or close relative of one); the company moving into an excluded trade during the qualifying period; or pre-arranged exit mechanisms that remove the investor\'s capital-loss risk. Some breaches can be cured before HMRC enforces clawback; others are permanently disqualifying.',
    estimatedReadTime: 13,
    lastUpdated: '2026-05-14',
    datePublished: '2026-05-14',
    hasCalculator: false,
    calculatorLabel: '',
    faqs: [
      { question: 'Does anti-dilution void SEIS / EIS shares?', answer: 'Almost always yes. Weighted-average and full-ratchet anti-dilution clauses create a preferential right (protection against down-rounds that the existing ordinary shareholders do not have). HMRC consistently treats anti-dilution as a preferential right and disqualifies the shares.' },
      { question: 'Can my spouse invest in my SEIS round?', answer: 'No. The connected-party rule extends to close relatives (spouse, civil partner, parents, children, siblings, lineal descendants). A founder\'s spouse cannot subscribe for SEIS / EIS shares in the company.' },
      { question: 'What if I take a consultancy payment from the company as an investor?', answer: 'Ordinary commercial consultancy at arm\'s-length rates is fine. Non-arm\'s-length payments, payments without genuine services delivered, or payments timed around the SEIS / EIS investment trigger the "value received" rule and void the investor relief.' },
      { question: 'Can a share-class breach be fixed after the issue?', answer: 'Sometimes. Amending Articles to remove preferential rights can re-qualify the shares from the amendment date forward, but does not retrospectively cure the period the breach existed. Pre-issue specialist review is much cheaper than post-issue rescue.' },
    ],
  },

  {
    slug: 'seis-eis-loss-relief-failed-investments',
    title: 'SEIS / EIS Loss Relief on Failed Investments: How Investors Recover Capital',
    shortTitle: 'Loss Relief',
    serviceSlug: 'seis-eis-advice',
    metaTitle: 'SEIS EIS Loss Relief UK 2026 | Failed Investment Recovery',
    metaDescription: 'How SEIS and EIS loss relief works in 2025-26: capital loss vs income tax loss election, negligible value claims, calculating the loss, timing rules, portfolio-level relief planning.',
    heroHeading: 'SEIS / EIS Loss Relief',
    heroSubtitle: 'The often-overlooked third tax benefit. How the combined effect of income tax relief and loss relief reduces a 45 percent investor\'s net exposure to 27.5 percent on a failed SEIS investment.',
    directQuestion: 'What loss relief is available on a failed SEIS or EIS investment?',
    directAnswer: 'When an SEIS or EIS investment fails (company liquidated or shares become worthless), the investor has a capital loss equal to the cash invested minus the income tax relief already claimed. The loss can be used in two ways: (1) treated as a capital loss against capital gains in the same or subsequent tax years, or (2) elected to be treated as an income tax loss against the investor\'s other income in the same or prior tax year. The income tax loss route is usually more valuable because income tax rates exceed CGT rates.',
    estimatedReadTime: 11,
    lastUpdated: '2026-05-14',
    datePublished: '2026-05-14',
    hasCalculator: false,
    calculatorLabel: '',
    faqs: [
      { question: 'How much is the net cost of a failed SEIS investment for a 45 percent taxpayer?', answer: 'Approximately 27.5 percent of the gross cash invested. A £100,000 SEIS investment that fails: £50,000 SEIS income tax relief at subscription, then a £50,000 capital loss on the worthless shares, which when treated as an income tax loss saves a further £22,500 at the 45 percent rate. Net cost £27,500.' },
      { question: 'What is a negligible value claim?', answer: 'A claim under TCGA 1992 s24 that allows the investor to treat shares as if disposed of even though no transaction has occurred, where the shares have become substantively worthless. The claim can be backdated up to two years for marginal-rate optimisation.' },
      { question: 'Can I claim loss relief if I sell shares to a family member?', answer: 'No. Disposals to connected parties (including spouse, parents, children, siblings) trigger anti-avoidance rules and typically do not qualify for loss relief. The disposal must be to a genuine third party or via insolvency.' },
      { question: 'Is there a cap on income tax loss relief?', answer: 'Yes. The annual cap is the greater of £50,000 or 25 percent of adjusted total income. For most investors this cap is comfortably above the available loss on a single failed investment, but high-net-worth investors with multiple failed positions in the same year can run into it.' },
    ],
  },

  {
    slug: 'eis-seis-reinvestment-relief-cgt-deferral',
    title: 'EIS and SEIS Reinvestment Relief: Deferring or Exempting Capital Gains',
    shortTitle: 'Reinvestment Relief',
    serviceSlug: 'seis-eis-advice',
    metaTitle: 'EIS SEIS Reinvestment Relief UK 2026 | CGT Deferral & Exemption',
    metaDescription: 'EIS reinvestment relief defers capital gains by reinvesting into qualifying shares; SEIS reinvestment relief exempts 50 percent of the gain permanently. The 2025-26 mechanics, timing rules, and estate-planning use.',
    heroHeading: 'EIS and SEIS Reinvestment Relief',
    heroSubtitle: 'The CGT-deferral and CGT-exemption mechanisms for investors reinvesting prior gains into SEIS / EIS-qualifying shares.',
    directQuestion: 'How does SEIS / EIS reinvestment relief work?',
    directAnswer: 'EIS reinvestment relief defers a chargeable capital gain by reinvesting the gain (or part of it) into EIS-qualifying shares; the gain comes back into charge when the EIS shares are disposed of, or is permanently exempt if held until death. SEIS reinvestment relief is different: it exempts 50 percent of the reinvested gain permanently, with no deferral mechanism. EIS reinvestment has no upper limit; SEIS reinvestment is capped at £200,000 of subscription per year.',
    estimatedReadTime: 13,
    lastUpdated: '2026-05-14',
    datePublished: '2026-05-14',
    hasCalculator: false,
    calculatorLabel: '',
    faqs: [
      { question: 'What is the difference between EIS deferral and SEIS exemption?', answer: 'EIS reinvestment defers the gain; the gain comes back into charge on disposal of the EIS shares. SEIS reinvestment exempts 50 percent of the reinvested gain permanently; the other 50 percent is charged in the original disposal year. Different mechanisms for different planning purposes.' },
      { question: 'How long can EIS reinvestment relief defer a gain?', answer: 'Until the EIS shares are disposed of. If held until the investor\'s death, the deferred gain is permanently exempt because death is not a chargeable disposal for CGT purposes. This is the basis of an estate-planning strategy used by older investors with large unrealised gains.' },
      { question: 'Can I reinvest gains from years ago using EIS reinvestment relief?', answer: 'Up to one year before the EIS share issue. EIS shares issued in 2024-25 can defer gains arising any time from 2023-24 to 2027-28 (one year before to three years after). SEIS reinvestment is stricter: same tax year only.' },
      { question: 'Does reinvestment relief affect the EIS subscription cap?', answer: 'No. The reinvestment-relief-via-EIS mechanism has no upper limit on the gain that can be deferred. The £1m annual EIS income tax relief cap applies separately to the income tax relief, not to the reinvestment relief.' },
    ],
  },

  {
    slug: 'seis-eis-carry-back-prior-tax-year',
    title: 'SEIS / EIS Carry-Back: Claiming Income Tax Relief Against the Prior Year',
    shortTitle: 'Carry-Back',
    serviceSlug: 'seis-eis-advice',
    metaTitle: 'SEIS EIS Carry-Back UK 2026 | Claim Against Prior Year',
    metaDescription: 'The SEIS / EIS carry-back mechanism for investors: how to claim income tax relief against the previous tax year, the rules and limits, marginal-rate planning, when carry-back is and is not the right choice.',
    heroHeading: 'SEIS / EIS Carry-Back',
    heroSubtitle: 'How to claim income tax relief against the previous tax year. Marginal-rate planning, cash-flow acceleration, and when not to carry back.',
    directQuestion: 'What is SEIS / EIS carry-back?',
    directAnswer: 'Carry-back is the SEIS / EIS provision that allows an investor to elect to treat all or part of an SEIS or EIS subscription as if it were made in the previous tax year. The income tax relief is then claimed against the prior year\'s tax liability rather than the current year. Useful when the prior year\'s marginal rate was higher, or when faster cash refund is preferred. Subject to the prior year\'s SEIS or EIS subscription cap.',
    estimatedReadTime: 10,
    lastUpdated: '2026-05-14',
    datePublished: '2026-05-14',
    hasCalculator: false,
    calculatorLabel: '',
    faqs: [
      { question: 'Can I carry back part of an SEIS or EIS subscription?', answer: 'Yes. The election is per share issue, not per investor. An investor can split a single subscription across two tax years, electing carry-back on the portion that fits the prior year\'s cap and claiming the rest in the current year.' },
      { question: 'Does carry-back affect when I claim CGT reinvestment relief?', answer: 'No. Carry-back changes only the timing of the income tax relief on the SEIS / EIS subscription. CGT reinvestment relief follows its own rules (EIS: gain crystallised in window from 1 year before to 3 years after share issue; SEIS: same tax year only).' },
      { question: 'How long do I have to amend a prior-year return to add the carry-back?', answer: 'Typically 12 months after the standard filing deadline of the year being amended. So an investor who subscribed in May 2024 has until 31 January 2026 to amend the 2023-24 return.' },
      { question: 'When is carry-back the wrong choice?', answer: 'Where the current year\'s marginal rate is higher than the prior year, where the prior year has unstable tax position or active HMRC enquiry, or where the prior-year amendment window has effectively closed and the administrative friction outweighs the benefit.' },
    ],
  },

  {
    slug: 'seis-eis-share-issue-mechanics',
    title: 'SEIS / EIS Share Issue Mechanics: Class, Consideration, and Companies House',
    shortTitle: 'Share Issue Mechanics',
    serviceSlug: 'seis-eis-advice',
    metaTitle: 'SEIS EIS Share Issue UK 2026 | Class, SH01, Documentation',
    metaDescription: 'The mechanics of actually issuing SEIS / EIS shares: share-class requirements, cash-consideration rule, Companies House SH01 filing, share certificates, stacking SEIS and EIS in the same round, post-issue documentation pack.',
    heroHeading: 'SEIS / EIS Share Issue Mechanics',
    heroSubtitle: 'The right share class, the right consideration, the right Companies House filings, the right share-register entries. The paper trail that survives HMRC compliance review.',
    directQuestion: 'How are SEIS / EIS shares actually issued?',
    directAnswer: 'SEIS / EIS shares must be new ordinary shares with no preferential rights, issued for cash consideration paid up in full at the time of issue. The mechanical sequence: investor pays the subscription price into the company\'s bank account, the company allots the shares with the issue date matching the bank receipt date, files SH01 with Companies House within one month, issues share certificates to investors, and updates the share register. Where SEIS and EIS are stacked in the same round, SEIS shares must be issued before EIS shares.',
    estimatedReadTime: 11,
    lastUpdated: '2026-05-14',
    datePublished: '2026-05-14',
    hasCalculator: false,
    calculatorLabel: '',
    faqs: [
      { question: 'Can SEIS / EIS shares be paid for in services or IP rather than cash?', answer: 'No. SEIS / EIS shares must be issued for cash consideration paid up in full at the time of issue. Non-cash consideration (services, IP, assets) does not qualify; partly-paid shares do not qualify.' },
      { question: 'What share-class amendments are commonly needed before an SEIS / EIS issue?', answer: 'Removing any preferential rights (dividend preferences, liquidation preferences, anti-dilution ratchets, redemption rights) from the share class being issued. The amendment is done via special resolution before the issue.' },
      { question: 'Do SEIS and EIS shares need separate Companies House filings?', answer: 'Each share issue (each allotment) is reported on SH01. Where SEIS and EIS shares are issued on different days within the same round, separate SH01 filings cover each tranche. The filing must occur within one month of the allotment.' },
      { question: 'What documentation does HMRC check at compliance-statement time?', answer: 'The SH01 filings, the share register entries, the subscription agreements, and (sometimes) bank statements showing receipt of the subscription funds. Discrepancies between dates on the SH01 and dates on the SEIS1 / EIS1 compliance statement trigger queries.' },
    ],
  },

  {
    slug: 'seis-eis-investor-matching-round-marketing',
    title: 'SEIS / EIS Round Marketing: Finding Investors and Closing in 90 Days',
    shortTitle: 'Round Marketing',
    serviceSlug: 'seis-eis-advice',
    metaTitle: 'SEIS EIS Round Marketing UK 2026 | Investor Pools & 90-Day Close',
    metaDescription: 'How UK founders actually find SEIS / EIS investors: the three investor pools (individual angels, syndicates, funds), financial-promotion restrictions, equity crowdfunding platforms, the 90-day fundraise timeline.',
    heroHeading: 'SEIS / EIS Round Marketing',
    heroSubtitle: 'Three investor pools, one regulatory framework, and a disciplined 90-day timeline. How real founders fill SEIS and EIS rounds in 2025-26.',
    directQuestion: 'How do UK founders find SEIS and EIS investors?',
    directAnswer: 'UK SEIS / EIS capital sits in three pools: individual angel investors (£10,000-£100,000 cheques, 2-8 week decisions), angel syndicates and networks (£100,000-£500,000 from a lead-driven group, 6-12 week decisions), and SEIS / EIS funds (£200,000-£2m+ from a managed fund, 10-16 week decisions). Most rounds combine pools. Founders raising from individuals must observe the FSMA financial-promotion restrictions (typically by either using a regulated platform like Seedrs or by self-certification of each investor).',
    estimatedReadTime: 12,
    lastUpdated: '2026-05-14',
    datePublished: '2026-05-14',
    hasCalculator: false,
    calculatorLabel: '',
    faqs: [
      { question: 'Which investor pool should I target for a £400,000 SEIS round?', answer: 'Individual angels and small syndicates. A £400,000 SEIS round close to the £250,000 SEIS company lifetime limit (combined with some EIS) is well-suited to 8-15 individual investors at £10,000-£40,000 each, ideally with one syndicate or fund lead as anchor.' },
      { question: 'What are the financial-promotion restrictions on raising from individuals?', answer: 'Under FSMA 2000, promotion of unregulated investments to individuals is limited to certified high-net-worth investors, self-certified sophisticated investors, and certain other categories. Each individual investor must self-certify before the marketing materials can be lawfully shared with them.' },
      { question: 'Do I need to use Seedrs or Crowdcube to raise SEIS / EIS?', answer: 'No. Crowdfunding platforms handle financial-promotion compliance and investor onboarding, but charge 7-8 percent of the round. Founders with existing investor relationships often raise directly outside the platform, handling certification manually to save the fee.' },
      { question: 'How long should a well-run SEIS / EIS round take?', answer: 'Target 60-90 days from round-open to first-close. Longer rounds usually reflect either a poor-fit investor pool (chasing funds for sub-£300,000 rounds) or insufficient warm-introduction prep before the round opens.' },
    ],
  },

];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}
