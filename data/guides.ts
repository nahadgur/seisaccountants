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
    metaDescription: 'Everything UK SEIS and EIS founders need to know about R&D tax credits in 2025–26. Qualifying activities, merged scheme rates, how to claim, and an interactive calculator. Updated for HMRC merged scheme.',
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
    title: 'The Complete Guide to SEIS and EIS for UK SEIS and EIS Founders',
    shortTitle: 'SEIS & EIS',
    serviceSlug: 'seis-advance-assurance',
    metaTitle: 'SEIS and EIS for UK SEIS and EIS Founders: Complete 2025–26 Guide | Eligibility, Advance Assurance & Investor Relief',
    metaDescription: 'Everything UK SEIS and EIS founders need to know about SEIS and EIS in 2025–26. Eligibility criteria, advance assurance process, investor tax relief, and an interactive eligibility checker.',
    heroHeading: 'SEIS and EIS for UK SEIS and EIS Founders',
    heroSubtitle: 'The definitive guide to SEIS and EIS eligibility, advance assurance, and investor tax relief for UK SEIS and EIS founders.',
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
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}
