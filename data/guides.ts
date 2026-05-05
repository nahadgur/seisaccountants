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
    title: 'The Complete Guide to R&D Tax Credits for UK Startups',
    shortTitle: 'R&D Tax Credits',
    serviceSlug: 'rd-tax-credits',
    metaTitle: 'R&D Tax Credits for UK Startups: Complete 2025–26 Guide | How Much Can You Claim?',
    metaDescription: 'Everything UK startup founders need to know about R&D tax credits in 2025–26. Qualifying activities, merged scheme rates, how to claim, and an interactive calculator. Updated for HMRC merged scheme.',
    heroHeading: 'R&D Tax Credits for UK Startups',
    heroSubtitle: 'The complete guide to qualifying, claiming, and maximising R&D tax credits under the 2024 merged scheme. Updated for the current HMRC rates.',
    directQuestion: 'What are R&D tax credits for UK startups?',
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
    title: 'The Complete Guide to SEIS and EIS for UK Startups',
    shortTitle: 'SEIS & EIS',
    serviceSlug: 'seis-advance-assurance',
    metaTitle: 'SEIS and EIS for UK Startups: Complete 2025–26 Guide | Eligibility, Advance Assurance & Investor Relief',
    metaDescription: 'Everything UK startup founders need to know about SEIS and EIS in 2025–26. Eligibility criteria, advance assurance process, investor tax relief, and an interactive eligibility checker.',
    heroHeading: 'SEIS and EIS for UK Startups',
    heroSubtitle: 'The definitive guide to SEIS and EIS eligibility, advance assurance, and investor tax relief for UK startup founders.',
    directQuestion: 'What is SEIS and how does it work for UK startups?',
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
    slug: 'startup-tax-relief-uk',
    title: 'The Complete Guide to UK Startup Tax Reliefs',
    shortTitle: 'Startup Tax Relief',
    serviceSlug: 'seis-advance-assurance',
    metaTitle: 'UK Startup Tax Relief: Complete 2025–26 Guide | SEIS, EIS, R&D Credits & EMI Schemes',
    metaDescription: 'Every UK startup tax relief explained in one place: SEIS, EIS, R&D tax credits, EMI option schemes, Annual Investment Allowance, and creative industry reliefs. Updated for 2025–26.',
    heroHeading: 'UK Startup Tax Reliefs: The Complete Guide',
    heroSubtitle: 'Every HMRC relief available to UK startups in 2025–26, how they interact, and which to claim first.',
    directQuestion: 'What tax reliefs can a UK startup claim?',
    directAnswer: 'UK startups can access SEIS (50% investor income tax relief), EIS (30% investor relief for larger rounds), R&D tax credits (20–27% cashback on qualifying development expenditure), EMI share option schemes (discounted options for employees), Annual Investment Allowance (100% capital deduction on equipment), and sector-specific reliefs including Video Games Tax Relief, Animation Tax Relief, and High-End TV Tax Relief.',
    estimatedReadTime: 14,
    lastUpdated: '2025-11-01',
    hasCalculator: false,
    calculatorLabel: '',
    howToSteps: [
      { name: 'Identify all potentially applicable reliefs', text: 'Review your sector, activities, and corporate structure against the full relief stack with an accountant. A typical tech startup stack: R&D credits, SEIS, EIS, EMI options, Annual Investment Allowance, and creative industry reliefs for qualifying sectors.' },
      { name: 'Sequence the reliefs', text: 'Some reliefs must be planned at incorporation (SEIS advance assurance, articles of association that support EMI), some at first year-end (R&D credits), and some continuously (AIA on equipment, creative reliefs on qualifying production spend).' },
      { name: 'Document qualifying activity as it happens', text: 'Keep contemporaneous records of R&D technical uncertainty, board minutes for SEIS share issues, EMI grant valuations, and invoices for AIA-qualifying equipment. Reconstructing these later invites HMRC challenge and typically produces smaller claims.' },
      { name: 'Submit claims at the right points in the compliance cycle', text: 'R&D is claimed via the CT600 Corporation Tax return; SEIS and EIS compliance is submitted via SEIS1/EIS1 statements within 24 months of share issue; EMI is reported via the annual return on the ERS online service.' },
      { name: 'Monitor grant and state aid interactions', text: 'Notified state aid grants disqualify matching expenditure from the merged R&D scheme. Grant-funded projects need specific accountant review before year-end so you do not lose either the grant or the credit.' },
    ],
    faqs: [
      { question: 'Which reliefs must be planned at incorporation?', answer: 'SEIS advance assurance should be submitted before any shares are issued, because SEIS shares cannot be issued to existing shareholders. Articles of association must support SEIS-compatible ordinary share classes with full voting rights and no preference. EMI option schemes need to be in place before the first grant, with HMRC-agreed valuations. R&D credits, Annual Investment Allowance, and creative reliefs can be planned at any point during the year.' },
      { question: 'Can a grant-funded startup still claim R&D tax credits?', answer: 'Yes, but with restrictions. The merged R&D scheme treats notified state aid grants as disqualifying: expenditure funded by a notified state aid grant cannot also claim an R&D credit. Non-notified subsidies (including most Innovate UK grant types after the 2024 reforms) do not trigger the same restriction but may reduce the qualifying cost base. The calculation is project-specific, so grant interactions need modelling before year-end.' },
      { question: 'How does EMI interact with SEIS and EIS?', answer: 'EMI option schemes and SEIS or EIS share issues are compatible but need co-ordination. SEIS and EIS require the company to meet qualifying tests at the date of share issue; EMI grants do not trigger those tests directly, but exercised options count toward employee and asset limits. The typical pattern is: SEIS and EIS rounds issue new investor shares; EMI options are granted from a designated option pool and only become shares on exercise, typically after specific vesting conditions.' },
      { question: 'What are creative industry tax reliefs and which startups qualify?', answer: 'The UK offers tax reliefs for qualifying productions in video games (Video Games Expenditure Credit), film and high-end TV (Audio-Visual Expenditure Credit), animation, children\'s TV, theatre, orchestras, and museums and galleries. The new Expenditure Credit regime replaced the older relief schemes from January 2024 onwards. A qualifying startup receives a credit typically worth 25–30% of qualifying core expenditure net of Corporation Tax, depending on the scheme and the company\'s profit position. Each relief requires passing a cultural test.' },
      { question: 'What records do I need to support relief claims?', answer: 'For R&D: technical narratives, project timesheets, contemporaneous records of the uncertainty, and a cost breakdown by category (staff, subcontractors, software, consumables). For SEIS and EIS: board minutes approving the share issue, the SEIS1 or EIS1 compliance certificate from HMRC, and investor records. For AIA: invoices and an asset register. HMRC requires records to be kept for at least six years.' },
    ],
  },
  {
    slug: 'cash-flow-forecasting-startups',
    title: 'The Complete Guide to Cash Flow Forecasting for UK Startups',
    shortTitle: 'Cash Flow Forecasting',
    serviceSlug: 'qualifying-period-monitoring',
    metaTitle: 'Cash Flow Forecasting for UK Startups: Complete 2025–26 Guide | 13-Week & 18-Month Models',
    metaDescription: 'How to build and maintain cash flow forecasts for UK startups in 2025–26. 13-week operational models, 18-month investor models, and an interactive runway calculator.',
    heroHeading: 'Cash Flow Forecasting for UK Startups',
    heroSubtitle: 'How to build the financial models that keep startups alive and investors confident.',
    directQuestion: 'How does cash flow forecasting work for a UK startup?',
    directAnswer: 'Cash flow forecasting for UK startups involves maintaining two parallel models: a rolling 13-week week-by-week operational model that gives four to eight weeks of early warning before cash constraints, and an 18-month monthly model for investor and lender conversations. The 13-week model is updated weekly using actual bank movements; the 18-month model is refreshed monthly and updated immediately after any material change to commercial assumptions.',
    estimatedReadTime: 14,
    lastUpdated: '2025-11-01',
    hasCalculator: true,
    calculatorLabel: 'Startup Runway Calculator',
    howToSteps: [
      { name: 'Build the 13-week operational model', text: 'List all incoming receipts (customer invoices with expected payment dates, funding drawdowns, R&D credit expected dates), all outgoing payments (suppliers, payroll with PAYE and NI, VAT returns, Corporation Tax instalments, capital expenditure), and the week-by-week closing bank balance.' },
      { name: 'Build the 18-month strategic model', text: 'Extend the same categories to monthly granularity across the full planning horizon. Include scenario variants: base case, bear case with downside assumptions, and bull case with accelerated growth. Separate what you control from what you assume.' },
      { name: 'Stress-test the forecast', text: 'Run scenarios where the largest customer churns, the next funding round slips by six months, and a key hire leaves and needs expensive replacement. Identify the earliest point at which runway falls below six months in each scenario.' },
      { name: 'Update on a weekly and monthly cadence', text: 'Update the 13-week model on a fixed day each week using actual bank movements. Update the 18-month model monthly with the previous month\'s actuals reconciled to the model, plus any commercial assumption changes since.' },
      { name: 'Define action thresholds and trigger them', text: 'Set specific thresholds tied to specific decisions: runway below nine months triggers fundraising start; debtor days above sixty triggers a credit control review. The point of the forecast is to force timely action, not to describe a situation.' },
    ],
    faqs: [
      { question: 'What is the difference between a 13-week and an 18-month cash flow forecast?', answer: 'The 13-week rolling cash flow is an operational tool, updated weekly with actual bank movements, designed to give four to eight weeks of warning before a cash crunch. The 18-month monthly forecast is a strategic and investor tool, refreshed monthly, designed to model runway, fundraising timing, and strategic decisions. Well-run startups maintain both simultaneously rather than choosing one.' },
      { question: 'How should I model R&D tax credit receipts in my forecast?', answer: 'Model the credit as a single inflow in the month following claim submission, typically four to eight weeks after the Corporation Tax return goes in. Apply a probability-weighted haircut (90% of the credit is a reasonable planning assumption) to account for HMRC enquiries or claim reductions. If the credit is material to runway, split into optimistic and conservative cases and plan against the conservative one.' },
      { question: 'What is a realistic working capital assumption for a B2B SaaS startup?', answer: 'A B2B SaaS startup with customer payment terms of 30 days plus a 14-day internal processing lag typically sees 45–60 debtor days in practice. Factor in 30 days of supplier payment terms on the payable side. Net working capital needs are typically 10–15% of annual recurring revenue at steady state, rising above 20% during aggressive growth phases.' },
      { question: 'How often should I rebuild my cash flow forecast from scratch?', answer: 'The 13-week rolling model should be extended (not rebuilt) weekly, with a full methodology review every quarter. The 18-month model should be rebuilt at major inflection points: funding round close, material pivot in commercial strategy, significant team change, or substantive revenue model shift. Rebuilding too frequently breaks year-on-year comparison data; rebuilding too rarely leaves the model based on stale assumptions.' },
      { question: 'What should I do when my forecast shows runway below six months?', answer: 'Three parallel tracks: (1) fundraising conversations begin immediately if they have not already; (2) operational cost reduction identifies the largest controllable expense lines, typically payroll and non-essential SaaS subscriptions, timed to protect critical hires; (3) revenue acceleration prioritises shortening sales cycles for existing pipeline rather than generating new pipeline. At six months out the goal is preserving optionality. At three months out, hard scope decisions become necessary.' },
    ],
  },
  {
    slug: 'startup-business-registration-uk',
    title: 'The Complete Guide to Registering a Startup in the UK',
    shortTitle: 'Business Registration',
    serviceSlug: 'share-issuance-cap-table',
    metaTitle: 'How to Register a Startup in the UK: Complete 2025–26 Guide | Ltd Company, SEIS Structuring & HMRC Setup',
    metaDescription: 'Step-by-step guide to registering a UK startup in 2025–26. Companies House registration, choosing the right structure, HMRC registrations, and SEIS/EIS advance assurance preparation.',
    heroHeading: 'Registering a UK Startup: The Complete Guide',
    heroSubtitle: 'Everything you need to register your UK startup correctly from day one, structure, timing, and HMRC setup.',
    directQuestion: 'What is the process for registering a startup in the UK?',
    directAnswer: 'Registering a UK startup involves incorporating a limited company with Companies House (£12 online, typically 24 hours), registering for Corporation Tax with HMRC within three months of starting to trade, registering for VAT if turnover will exceed £90,000, and setting up PAYE if hiring employees. For startups planning to raise investment, applying for SEIS advance assurance from HMRC before issuing any shares is an additional critical step.',
    estimatedReadTime: 12,
    lastUpdated: '2025-11-01',
    hasCalculator: false,
    calculatorLabel: '',
    howToSteps: [
      { name: 'Choose the legal structure', text: 'Limited company for most growth-orientated startups (supports SEIS, EIS, EMI, R&D credits); sole trader for solo founders with simple operations and no funding plans; LLP rarely for growth-orientated startups because it disqualifies most reliefs.' },
      { name: 'Incorporate at Companies House', text: 'File form IN01 online for a £12 fee with standard 24-hour turnaround. Provide the company name, registered office address, director and shareholder details, and model articles of association to be replaced with investor-ready articles before raising.' },
      { name: 'Complete HMRC registrations', text: 'Corporation Tax registration happens automatically on incorporation, with the UTR arriving by post within 10 working days. PAYE must be registered before the first salary is paid. VAT is registered voluntarily if advantageous; mandatory once taxable turnover exceeds £90,000 in a rolling 12-month period.' },
      { name: 'Set up statutory and operational infrastructure', text: 'Open a business bank account (expect 2–4 weeks for KYC with most UK business banks), set up accounting software (Xero or QuickBooks), register with the ICO if processing personal data, and arrange registered agent support for company secretarial work if founder-managed setup is not feasible.' },
      { name: 'Prepare for early-stage investor readiness', text: 'Replace the model articles with investor-ready articles (share classes, pre-emption rights, drag and tag provisions), set up the cap table with a founder share issue and an EMI option pool reservation, and submit SEIS advance assurance if fundraising is expected within 12 months.' },
    ],
    faqs: [
      { question: 'How long does it take to register a UK startup?', answer: 'Companies House online incorporation is 24 hours for the filing itself. The full end-to-end process (incorporation, Corporation Tax UTR arrival, PAYE setup, bank account, VAT if voluntary, and investor-ready articles) typically takes four to six weeks. The bank account is usually the longest single step; compliance-heavy banks take three to six weeks on new startups, particularly those with novel business models or overseas directors.' },
      { question: 'What is the difference between sole trader, LLP, and limited company?', answer: 'Sole traders pay income tax at 20–45% plus National Insurance on all profits, with unlimited personal liability. Limited companies pay Corporation Tax at a 19% small profits rate on profits under £50,000, rising to a 25% main rate on profits over £250,000 with marginal relief tapering between, and offer limited personal liability plus access to SEIS, EIS, R&D credits, and EMI. LLPs provide limited liability but partners pay income tax on their share of profits and cannot use most startup reliefs. Almost every growth-orientated startup should incorporate as a limited company.' },
      { question: 'Do I need a business bank account?', answer: 'A limited company must use a business bank account by UK banking regulation, as personal accounts cannot be used for company transactions. Sole traders can use a personal account but most accountants strongly recommend a dedicated business account for clarity and HMRC audit protection. Open the business account at incorporation; waiting for the Corporation Tax UTR is normal, and most banks open the account and allow limited operations while KYC completes.' },
      { question: 'What are investor-ready articles of association?', answer: 'Investor-ready articles replace Companies House\'s default model articles with provisions investors require: share class structures (Ordinary, SEIS Preferred, A Preferred), pre-emption rights on share issues and transfers, drag-along and tag-along rights, share vesting and leaver provisions for founders, anti-dilution protections, board composition rules, and consent thresholds for major decisions. Model articles are inadequate for SEIS or EIS fundraising; replacement typically happens before the first priced round.' },
      { question: 'Can I register a startup from outside the UK?', answer: 'Yes. UK company incorporation is open to non-UK residents and does not require a UK citizen or resident director. The practical challenges are: securing a registered office address (usually via an accountant address service or a registered agent), opening a UK business bank account (most banks require at least one director with UK residency or a substantive UK presence), and managing company tax residency (if management and control sit outside the UK, the company may not be UK tax-resident, disqualifying SEIS, EIS, and R&D reliefs). Non-UK founders should take specialist advice before incorporating.' },
    ],
  },
  {
    slug: 'growth-planning-uk-startups',
    title: 'The Complete Guide to Growth Planning for UK Startups',
    shortTitle: 'Growth Planning',
    serviceSlug: 'qualifying-period-monitoring',
    metaTitle: 'Growth Planning for UK Startups: Complete 2025–26 Guide | Financial Models, Series A Readiness & EMI',
    metaDescription: 'How UK startups build credible growth plans for Series A and beyond. Financial modelling, EMI option schemes, capital efficiency, and an interactive Series A readiness scorecard.',
    heroHeading: 'Growth Planning for UK Startups',
    heroSubtitle: 'How to build the financial architecture that takes a UK startup from early revenue to Series A and beyond.',
    directQuestion: 'What should a UK startup growth plan include?',
    directAnswer: 'A credible UK startup growth plan includes a three-year integrated financial model with monthly granularity in year one, documented revenue assumptions tied to specific commercial milestones, a headcount plan linked to the revenue model, a capital requirements schedule showing precisely when and why capital is needed, and an HMRC relief optimisation layer showing how R&D credits, EMI options, and EIS reduce effective cash requirements.',
    estimatedReadTime: 15,
    lastUpdated: '2025-11-01',
    hasCalculator: true,
    calculatorLabel: 'Series A Readiness Scorecard',
    howToSteps: [
      { name: 'Build the financial model', text: 'Three-statement model covering income statement, balance sheet, and cash flow with monthly granularity for the next 24 months and quarterly for the following 24. Tie assumptions to operational drivers (customers, ARPU, churn, CAC) rather than top-line growth rates.' },
      { name: 'Set up the EMI option scheme', text: 'Register the scheme with HMRC, agree valuations at each grant date (HMRC offers valuation pre-clearance for qualifying schemes), reserve a 10–20% option pool in the cap table, and document grants consistently across rounds.' },
      { name: 'Prepare for Series A due diligence', text: 'Clean statutory accounts for completed periods with management accounts bridging to the current month, a data room covering contracts (customer, supplier, employment, IP), tax diligence materials (Corporation Tax history, VAT, PAYE, R&D claim history, SEIS and EIS compliance), and financial forecasts extending three years.' },
      { name: 'Plan group structure', text: 'Consider UK subsidiaries for specific product lines or markets, international subsidiaries for US or EU expansion with transfer pricing documentation, and holding-company structure if a US flip or eventual acquisition is in view.' },
      { name: 'Plan for exit', text: 'BADR for founder disposals (10% CGT rate up to £1 million lifetime limit, two-year holding period, 5% shareholding required), SSE for corporate shareholders, and potential family investment company or trust structures for larger founder positions. Exit planning typically starts two years before the expected event.' },
    ],
    faqs: [
      { question: 'When should a startup start formal growth planning?', answer: 'Growth planning becomes valuable when the startup has consistent revenue, a repeatable sales motion, and a medium-term vision beyond the current runway. In practice, that is usually six months after product-market fit, or at the point of preparing for Series A fundraising, whichever comes first. Growth planning done too early (pre-product-market fit) wastes time on assumptions that will change; done too late (mid-fundraise) creates last-minute scrambling and weaker investor negotiation position.' },
      { question: 'What does a typical Series A EMI scheme look like?', answer: 'At Series A, a well-structured EMI scheme typically covers 15–20% of the post-money fully diluted cap table as the option pool. Individual grants are in the 0.1–2% range depending on role and seniority, with grant prices set at HMRC-agreed market value at the time of grant. The £250,000 per-employee unexercised cap and £3 million scheme-wide cap apply throughout. Most schemes use four-year vesting with a one-year cliff as the standard pattern.' },
      { question: 'Should I do a US flip before or after Series A?', answer: 'The most common timing is between Series A and Series B, when substantial US customer revenue is established and US-led investment is likely. Flipping at or before Series A risks restricting UK tax efficiency unnecessarily if the company does not end up US-focused. Flipping after Series B is often too late because the larger cap table makes restructuring complex and expensive. The flip ends further SEIS and EIS at the UK level and introduces US tax and transfer pricing obligations, so timing is a judgment call involving both UK and US tax specialists.' },
      { question: 'What is Business Asset Disposal Relief and how should founders plan for it?', answer: 'BADR (formerly Entrepreneurs\' Relief) provides a 10% CGT rate on qualifying disposals up to a £1 million lifetime limit, compared with standard CGT rates of 10–20%. To qualify on a founder disposal: at least 5% of ordinary share capital and voting rights, held for at least two years before disposal, and the company must be a trading company or holding company of a trading group throughout. Planning typically starts two years before the expected exit event to ensure the qualifying period is comfortably met, and often involves family investment company or trust structures for larger positions that would exceed the £1 million cap.' },
      { question: 'What is SSE and when does it apply?', answer: 'Substantial Shareholding Exemption (SSE) exempts a corporate shareholder from Corporation Tax on capital gains arising from the disposal of a substantial shareholding (10% or more of ordinary share capital) in a trading company or trading group, subject to holding-period and trading-activity conditions. SSE matters in growth planning for startups that acquire other businesses (the corporate acquirer benefits on eventual disposal) and for startups eventually acquired by corporate buyers (who prefer SSE-eligible structures). It is the corporate equivalent of founder-level BADR.' },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}
