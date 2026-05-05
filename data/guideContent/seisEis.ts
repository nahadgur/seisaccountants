// data/guideContent/seisEis.ts
// Full content for the SEIS/EIS Guide.
// All HMRC statistics sourced from HMRC EIS/SEIS Statistics (October 2024 release).

import { GuideSection } from './rdTaxCredits';

export const seisEisContent: {
  introduction: string[];
  sections: GuideSection[];
  citySectionIntro: string;
} = {
  introduction: [
    "SEIS and EIS are the central reliefs UK founders use to attract early investor capital, and the central focus of every accountant in the seisaccountants.uk specialist network. The schemes themselves are well-defined; what fails them in practice is the documentation chain — the advance assurance application, the share-class structure at issue, the SEIS1 and EIS1 compliance statements, the SEIS3 and EIS3 investor certificate distribution, and the three-year qualifying-period monitoring after the round closes.",
    "This guide is the structural reference for founders running through that chain. It covers eligibility for SEIS, EIS, and knowledge-intensive EIS; the documentation HMRC's Venture Capital Reliefs team expects at each stage; the share class and cap table requirements; and the qualifying-period tests that protect investor relief from clawback. Where you would benefit from a specialist running the actual filings, the matching service surfaces accountants whose live caseload is dominated by SEIS work.",
  ],
  sections: [
    {
      id: "seis-vs-eis",
      h2: "What is the difference between SEIS and EIS?",
      paragraphs: [
        "SEIS (Seed Enterprise Investment Scheme) and EIS (Enterprise Investment Scheme) are two related but distinct HMRC schemes designed to encourage investment in early-stage UK companies by offering significant tax reliefs to investors. They have different eligibility criteria, different investment limits, and different investor tax relief rates, but they are designed to be used sequentially, with most companies graduating from SEIS to EIS as they grow.",
        "SEIS is for the earliest-stage companies: fewer than three years old, fewer than 25 employees, gross assets below £350,000. It offers investors 50% income tax relief on investments up to £200,000 per investor per tax year, meaning an investor who puts in £20,000 can reclaim £10,000 from HMRC regardless of what happens to the company. EIS is for larger companies with higher investment requirements: up to seven years old (ten for Knowledge-Intensive Companies), fewer than 250 employees, gross assets below £15m. It offers 30% investor income tax relief on investments up to £1m per investor per year.",
        "The two schemes cannot be used simultaneously for the same share issue, but a company can issue SEIS shares first and then, once the SEIS limit is exhausted, issue EIS shares in a subsequent round (or even the same round, on a later trading day). This sequenced SEIS-then-EIS pattern is the most common round structure for first priced raises in our network.",
      ],
      dataTable: {
        caption: "SEIS vs EIS: key criteria comparison",
        headers: ["Criterion", "SEIS", "EIS", "EIS (Knowledge-Intensive)"],
        rows: [
          ["Company age at share issue", "Under 3 years", "Under 7 years", "Under 10 years"],
          ["Maximum employees (FTE)", "Fewer than 25", "Fewer than 250", "Fewer than 500"],
          ["Gross assets before investment", "Under £350,000", "Under £15m", "Under £15m"],
          ["Maximum investment per company", "£250,000 lifetime", "£5m per year (£12m lifetime)", "£10m per year (£20m lifetime)"],
          ["Investor income tax relief", "50%", "30%", "30%"],
          ["Max investor relief per year", "£200,000 invested", "£1m invested (£2m for KIC)", "£2m invested"],
          ["CGT exemption on exit?", "Yes (after 3 years)", "Yes (after 3 years)", "Yes (after 3 years)"],
          ["CGT reinvestment relief?", "Yes", "Yes", "Yes"],
          ["Loss relief available?", "Yes", "Yes", "Yes"],
        ],
        source: "HMRC EIS and SEIS guidance, 2024–25. SEIS thresholds updated August 2023.",
      },
      callout: {
        type: 'data',
        heading: 'HMRC published data: SEIS and EIS activity 2022–23',
        text: 'In 2022–23, 3,495 companies used SEIS to raise £236m from 22,260 investors. In the same year, 3,985 companies used EIS to raise £2.0bn from 52,880 investors. Since SEIS launched in 2012, over £2.2bn has been raised. Since EIS launched in 1994, over £25bn has been raised by more than 36,500 companies. Source: HMRC EIS/SEIS Statistics, October 2024.',
      },
    },
    {
      id: "seis-eligibility",
      h2: "Does my company qualify for SEIS?",
      paragraphs: [
        "SEIS eligibility is determined at the point of share issuance, the moment you issue qualifying shares to an investor. All of the following conditions must be met at that moment. A company that meets the criteria when it applies for advance assurance can still fail to qualify if its circumstances change before shares are actually issued.",
      ],
      callout: {
        type: 'definition',
        heading: 'SEIS eligibility checklist',
        text: 'To qualify for SEIS at the point of share issuance: (1) The company must be incorporated in the UK. (2) It must be fewer than three years old. (3) It must have gross assets of £350,000 or less immediately before the share issue. (4) It must have fewer than 25 full-time equivalent employees. (5) It must not be listed on a recognised stock exchange. (6) It must not have previously issued EIS shares or received VCT investment. (7) It must carry on a qualifying trade, or intend to within two years of incorporation. (8) The shares issued must be new, fully paid, ordinary shares with no preferential rights to assets on winding up.',
      },
      subsections: [
        {
          id: "seis-qualifying-trades",
          h3: "Which trades qualify for SEIS, and which are excluded?",
          paragraphs: [
            "Most technology, software, manufacturing, and product businesses qualify for SEIS. The excluded activities are specific and generally relate to sectors where the government does not consider investment incentives to be necessary or appropriate. If your business does not fall into one of the excluded categories, it almost certainly carries on a qualifying trade.",
            "Excluded activities include property development and dealing, financial activities (banking, insurance, money-lending, hire purchase, and most financial services), legal and accountancy services, farming and market gardening, hotels and nursing homes operated by the company, shipbuilding, coal and steel production, and the generation or export of electricity, heat, or gas in most forms. Leasing and letting of assets is also excluded if it constitutes a substantial part of the trade.",
            "There is an important distinction between a company that carries on some excluded activities and one whose trade consists substantially of excluded activities. A software company that also earns some revenue from property rental is not necessarily disqualified, but if the property rental becomes substantial relative to the software business, it can affect eligibility. Your accountant should review the proportion of excluded activity if any part of your revenue comes from an excluded source.",
          ],
          callout: {
            type: 'tip',
            heading: 'Fintech and financial services',
            text: 'Fintech is one of the most frequently questioned areas for SEIS eligibility. Companies developing financial software, lending platforms, or payment technology can qualify, the excluded activity is carrying on financial services (lending money, providing credit, underwriting insurance), not building software that facilitates those activities. A company that builds credit scoring software qualifies; a company that directly extends credit to consumers does not. The distinction matters and should be reviewed by a specialist accountant before advance assurance is applied for.',
          },
        },
        {
          id: "seis-share-structure",
          h3: "What share structure does SEIS require?",
          paragraphs: [
            "SEIS shares must be new ordinary shares that carry no preferential rights to dividends or to the company's assets on a winding up, and no right of redemption. In practice, this means that the most common startup share structures, including standard preference shares used in institutional venture rounds, do not qualify for SEIS. The shares issued under SEIS must sit in a class that has no liquidation preference over ordinary shares.",
            "Most early-stage SEIS-stage companies issue a single class of ordinary shares for their SEIS round and then create a separate preference share class for later institutional investment. This is the standard approach recommended by startup solicitors and does not create any issue with SEIS qualification, provided the SEIS ordinary shares genuinely carry no preferential rights to assets on winding up relative to any other class of ordinary share.",
            "Anti-dilution provisions, drag-along rights, and tag-along rights are generally acceptable. Liquidation preferences, cumulative dividends, and redemption rights are not compatible with SEIS share qualification.",
          ],
        },
        {
          id: "seis-investor-rules",
          h3: "Are there rules about who can invest under SEIS?",
          paragraphs: [
            "SEIS investors must be UK taxpayers to claim income tax relief, the relief operates by reducing the investor's UK income tax liability in the year of investment. Non-UK residents can invest in SEIS companies, but they cannot claim the income tax relief if they have no UK income tax liability. The CGT exemption requires the gain to be a UK CGT liability.",
            "Employees and directors of the company can invest under SEIS with one important restriction: a director who is paid a salary by the company can invest under SEIS, but an employee (non-director) who is paid a salary cannot receive SEIS relief on their investment. This rule is designed to prevent SEIS from being used as a tax-advantaged compensation mechanism for existing staff.",
            "Investors must hold their SEIS shares for a minimum of three years from the date of share issue to retain the income tax relief and qualify for the CGT exemption on disposal. If shares are disposed of within three years, the income tax relief is clawed back.",
          ],
        },
      ],
    },
    {
      id: "eis-eligibility",
      h2: "Does my company qualify for EIS?",
      paragraphs: [
        "EIS has more generous thresholds than SEIS, allowing older, larger companies to qualify, but maintains most of the same qualifying trade restrictions and share structure requirements. Companies often transition from SEIS to EIS as they grow past the SEIS employee and asset thresholds, using the two schemes sequentially to support multiple funding rounds.",
        "The key EIS eligibility conditions are: the company must be incorporated in the UK (or have a permanent establishment in the UK), it must be fewer than seven years old at the time of the first EIS investment (extended to ten years for Knowledge-Intensive Companies), gross assets must be below £15m before investment and £16m after, the company must have fewer than 250 full-time equivalent employees, and it must carry on a qualifying trade.",
      ],
      subsections: [
        {
          id: "kic-rules",
          h3: "What are Knowledge-Intensive Companies and why do they get better EIS terms?",
          paragraphs: [
            "Knowledge-Intensive Companies (KICs) are a category of EIS-qualifying company that receives more generous investment limits and age thresholds in recognition of the longer development timescales typical of deep-tech, life sciences, and other research-intensive businesses.",
            "To qualify as a KIC, a company must meet at least one of two conditions: either it has spent more than 15% of its operating costs on innovation activities in the year preceding the share issue, or it has spent more than 10% of its operating costs on innovation in each of the three years preceding the issue. Additionally, the company must be creating, acquiring, or licensing intellectual property as a significant part of its business.",
            "KICs can access EIS for up to ten years after their first commercial sale (rather than seven), can have up to 500 employees (rather than 250), can raise up to £10m per year under EIS (rather than £5m), and can access the higher £2m per investor annual relief limit. For life sciences, deeptech, and engineering companies with long development cycles, the KIC classification is worth identifying and confirming with a specialist accountant before any EIS advance assurance application.",
          ],
          callout: {
            type: 'data',
            heading: 'KIC activity in 2022–23',
            text: 'In 2022–23, Knowledge-Intensive Companies accounted for 30% of all EIS investment by value, raising £604m from 1,215 companies. The average KIC investment round was £497,000, compared with £286,000 for standard EIS companies. Life sciences and deep-tech companies dominate KIC activity. Source: HMRC EIS Statistics, October 2024.',
          },
        },
        {
          id: "eis-investor-relief",
          h3: "What tax reliefs do EIS investors actually receive?",
          paragraphs: [
            "EIS investors receive four distinct tax reliefs, each of which has independent value. Understanding all four matters because they collectively make EIS investment materially different from an equivalent unrelieved investment in a private company, and explaining them clearly to potential investors is part of investor-readiness.",
            "The primary relief is 30% income tax relief on the amount invested, claimable against income tax in the year of investment or carried back to the previous tax year. On a £100,000 investment, this is £30,000 of income tax reclaimed from HMRC. The second relief is capital gains tax exemption: gains on EIS shares held for three or more years are exempt from CGT on disposal, regardless of the size of the gain. The third relief is CGT deferral: existing CGT liabilities can be deferred by reinvesting the gain into EIS shares, with the deferred gain not becoming payable until the EIS shares are sold. The fourth relief is loss relief: if the company fails and the shares become worthless, investors can claim loss relief at their marginal income tax rate on the net loss (investment minus income tax relief already received).",
          ],
          callout: {
            type: 'example',
            heading: 'EIS investor relief: worked example',
            text: 'An investor in the 45% additional rate band invests £50,000 in an EIS-qualifying startup. They claim £15,000 income tax relief immediately. If the company fails completely, their net loss is £35,000 (£50,000 minus £15,000 relief), on which they can claim 45% loss relief, a further £15,750 from HMRC. Their effective net loss on a complete failure is £19,250 on a £50,000 investment, or 38.5p in the pound. If the company succeeds and the shares treble in value to £150,000, the entire £100,000 gain is CGT-free.',
          },
        },
      ],
    },
    {
      id: "advance-assurance",
      h2: "How do you get SEIS or EIS advance assurance from HMRC?",
      paragraphs: [
        "Advance assurance is a written statement from HMRC confirming that your company and proposed share issue will qualify for SEIS or EIS relief. It is not legally binding, HMRC can refuse to honour it if the company's circumstances change between assurance and share issuance, but it gives investors sufficient confidence to commit funds before the statutory compliance statements are issued after the investment.",
        "Most professional investors and angel networks in the UK expect advance assurance to be in place before they will sign a term sheet. Getting advance assurance is not a guarantee of investment, but the absence of it is frequently a deal-blocker at the early stage.",
      ],
      dataTable: {
        caption: "SEIS/EIS advance assurance: timeline and process",
        headers: ["Stage", "What happens", "Typical timeframe"],
        rows: [
          ["Application preparation", "Accountant prepares the advance assurance application including company details, proposed share structure, description of trade, and planned use of funds", "1–2 weeks"],
          ["HMRC submission", "Application submitted to HMRC's Venture Capital Reliefs team by post or email", "Day 1"],
          ["HMRC processing", "HMRC reviews the application and may request additional information", "4–8 weeks (target)"],
          ["Assurance letter issued", "HMRC issues a letter confirming the company will qualify, subject to continued compliance", "Week 4–8"],
          ["Share issuance", "Company can now issue qualifying shares to investors with confidence in EIS/SEIS eligibility", "At close of funding round"],
          ["Compliance statement (EIS3/SEIS3)", "After shares are issued and the company has begun trading, HMRC issues compliance statements for investors to claim relief", "3–6 months after investment"],
        ],
        source: "HMRC Venture Capital Reliefs guidance. Processing times as of 2024; HMRC's actual times vary by volume.",
      },
      callout: {
        type: 'warning',
        heading: 'Common advance assurance mistakes',
        text: 'The most common reasons HMRC rejects or delays advance assurance applications: (1) Vague description of the trade, HMRC needs enough detail to confirm the trade is qualifying. (2) Proposed share structure includes preferential rights that disqualify the shares. (3) Company has already issued shares that affect the qualifying conditions. (4) Substantial excluded activity not disclosed upfront. (5) State Aid received before application that affects SEIS eligibility. A specialist accountant should prepare the application, self-prepared applications have materially higher rates of rejection and delay.',
      },
      subsections: [
        {
          id: "before-assurance",
          h3: "What should a founder do before applying for advance assurance?",
          paragraphs: [
            "Before submitting an advance assurance application, your accountant should review the company's existing share structure for any terms that would disqualify the SEIS shares, confirm that the company's trade is qualifying and that no substantial excluded activities exist, check whether any State Aid has been received that could affect SEIS eligibility, and confirm that the company meets all the age, employee, and asset thresholds at the anticipated date of share issuance.",
            "This pre-application review typically takes two to three hours with a specialist accountant and is the step most frequently skipped by founders who prepare their own applications. The consequence of submitting without this review is either an HMRC rejection (typically on grounds of share structure or excluded activity) or, more seriously, issuing shares that appear to qualify but are subsequently found to be disqualifying, which triggers clawback of investor tax relief.",
          ],
        },
        {
          id: "state-aid-interaction",
          h3: "How does State Aid affect SEIS eligibility for Scottish, Welsh, and Northern Irish startups?",
          paragraphs: [
            "SEIS is itself a State Aid scheme, and accepting other State Aid alongside SEIS investment can affect eligibility. For startups in Scotland, Wales, and Northern Ireland, this is a particularly important planning issue because regional development bodies, Scottish Enterprise, Business Wales, and Invest NI, regularly provide grant funding that carries State Aid status.",
            "The practical rule is that a company can receive de minimis State Aid (up to €300,000 over three years from all sources) without affecting SEIS eligibility. Many small grants from regional bodies fall within this threshold and do not create a problem. Larger grants or grants with full State Aid notification carry a higher risk of interaction and should be reviewed by your accountant before acceptance if SEIS shares have not yet been issued.",
            "The safe sequencing for Scottish, Welsh, and Northern Irish startups is to obtain SEIS advance assurance and issue qualifying shares before accepting any significant regional grant funding. If grant funding is accepted first, the State Aid position of that grant must be confirmed as de minimis before the SEIS advance assurance application is submitted.",
          ],
        },
      ],
    },
    {
      id: "maintaining-compliance",
      h2: "How do you maintain SEIS and EIS compliance after the investment?",
      paragraphs: [
        "Obtaining advance assurance and issuing qualifying shares is the beginning of SEIS and EIS compliance, not the end. Both schemes impose ongoing conditions that the company must satisfy for the three-year period following the share issue. Breaching these conditions during the three-year window triggers clawback of investor tax relief, which is an investor relations and legal exposure that founders underestimate at the time of investment.",
        "The primary ongoing compliance requirements are: the company must continue to carry on the qualifying trade for three years, it must not become quoted on a recognised stock exchange within three years, it must use the invested funds for the qualifying business activity within two years of investment, and it must not make a return of value to SEIS/EIS investors within three years (including share buybacks or arrangements that effectively return capital).",
      ],
      callout: {
        type: 'warning',
        heading: 'Acquisition risk: the most common compliance breach',
        text: 'The most common cause of SEIS and EIS compliance failure is an acquisition within the three-year holding period. If the company is acquired within three years of the share issue, investors may lose their income tax relief and CGT exemption depending on the structure of the acquisition. Share-for-share exchanges where investors receive shares in an acquiring company that itself qualifies for EIS can preserve relief, but this requires careful structuring in advance of any acquisition. If you receive acquisition interest within the three-year window, inform your accountant before accepting any offer.',
      },
      subsections: [
        {
          id: "compliance-statements",
          h3: "What are EIS3 and SEIS3 compliance statements?",
          paragraphs: [
            "After shares have been issued and the company has begun trading, HMRC issues compliance statements to the company, EIS3 for EIS investments and SEIS3 for SEIS investments. These statements are the documents that investors use to claim their income tax relief on their self-assessment tax returns. Without the compliance statements, investors cannot claim their relief.",
            "Compliance statements are issued by HMRC after the company submits a compliance statement (EIS1 or SEIS1) confirming that all qualifying conditions have been met since the share issue. The typical timeline is three to six months after the investment, HMRC needs the company to have been trading for a period before it will issue compliance statements, to verify that the qualifying trade has been genuinely commenced.",
            "Delays in issuing compliance statements are a common source of investor frustration and can damage the company's fundraising reputation. A specialist accountant managing your EIS/SEIS compliance will submit the EIS1/SEIS1 promptly once the conditions are met, and follow up with HMRC if statements are not issued within the expected period.",
          ],
        },
      ],
    },
    {
      id: "crowdfunding",
      h2: "Can SEIS and EIS shares be issued via crowdfunding platforms?",
      paragraphs: [
        "Yes, several UK crowdfunding platforms are specifically designed to facilitate SEIS and EIS investment at scale, including Crowdcube, Seedrs (now Republic Europe), and SeedLegals. These platforms handle the share issuance process, investor communications, and (in most cases) the advance assurance and compliance statement process as part of their service.",
        "Crowdfunding under SEIS and EIS works identically to direct angel investment from an HMRC perspective, the qualifying conditions are the same, the advance assurance process is the same, and the compliance statements are issued in the same way. The platform typically acts as a nominee shareholder, holding shares on behalf of multiple individual investors, which simplifies the company's cap table while each investor retains their personal SEIS or EIS relief.",
        "The main consideration for crowdfunding platforms is that SEIS and EIS shares issued through a nominee structure must still meet all qualifying conditions individually for each underlying investor. Platform investors who are employees of the company, or who have previously received preferential rights, may be disqualified from relief even if other investors on the same platform are not.",
      ],
      callout: {
        type: 'tip',
        heading: 'Valuation and SEIS/EIS',
        text: 'HMRC does not prescribe a valuation methodology for SEIS or EIS share issues, but it does require that the shares are issued at a price that represents the actual market value of the company at the time of issue. HMRC has a Shares and Assets Valuation team that reviews valuations on enquiry. If your company has previously issued shares at a lower price, issuing SEIS shares at a significantly higher price in a short timeframe can attract scrutiny. A specialist accountant should confirm that the proposed share price is defensible before advance assurance is sought.',
      },
    },
    {
      id: "common-mistakes",
      h2: "What are the most common SEIS and EIS mistakes founders make?",
      paragraphs: [
        "After reviewing hundreds of SEIS and EIS advance assurance applications, the specialist accountants in our network consistently identify the same set of structural and timing mistakes that either disqualify companies from the schemes or create compliance risks after investment is received.",
      ],
      subsections: [
        {
          id: "mistake-timing",
          h3: "Issuing shares before obtaining advance assurance",
          paragraphs: [
            "The most consequential timing mistake is issuing shares to investors before advance assurance is obtained. Once shares are issued, the company cannot retroactively obtain advance assurance, HMRC only provides advance assurance for proposed share issues, not for shares already issued. Companies that have issued shares without advance assurance can still apply to HMRC for a compliance statement, but the process is more complex and investors face uncertainty about their relief throughout.",
            "The correct sequence is: (1) agree investment terms in principle, (2) instruct accountant to prepare advance assurance application, (3) receive HMRC assurance letter, (4) issue shares. This sequence typically adds four to eight weeks to the fundraising timeline, which should be communicated to investors at the term sheet stage.",
          ],
        },
        {
          id: "mistake-structure",
          h3: "Preference share structures that disqualify SEIS/EIS",
          paragraphs: [
            "Companies that have previously incorporated with preference share structures, often because they used a US-style incorporation template or received early VC investment, sometimes find that their existing share structure disqualifies subsequent SEIS or EIS rounds. Preference shares with liquidation preferences, cumulative dividend rights, or redemption rights are incompatible with SEIS and EIS qualifying conditions if the SEIS or EIS shares rank below them on a winding up.",
            "The fix is usually to restructure the existing preference shares before the SEIS round, converting them to ordinary shares or amending the rights to remove the preferential winding-up treatment. This restructuring must be completed and confirmed with HMRC before the advance assurance application is submitted.",
          ],
        },
        {
          id: "mistake-funds",
          h3: "Using SEIS/EIS funds for non-qualifying purposes",
          paragraphs: [
            "SEIS and EIS both require that the funds raised are used for the qualifying business activity within two years of the investment. Using SEIS or EIS funds to repay director loans, buy out existing shareholders, or fund activities outside the qualifying trade disqualifies those funds from relief, and can trigger clawback of investor relief already claimed.",
            "The most common non-qualifying use is repayment of pre-investment director loans. Founders who have lent money to their company to fund early operations often plan to repay those loans from a SEIS round. HMRC regards this as a return of capital rather than use for qualifying business activity, and it disqualifies the corresponding proportion of the SEIS investment from relief. Director loans should be dealt with separately, typically by converting them to equity before the SEIS round, rather than repaid from SEIS proceeds.",
          ],
        },
      ],
    },
  ],
  citySectionIntro: "SEIS and EIS advance assurance applications are submitted to HMRC's Venture Capital Reliefs team centrally — there is no regional component to the actual filing. What matters by location is the supply of accountants whose live caseload is dominated by scheme work and who have specific experience with the sector and any regional funding interactions (NPIF II in the North, MEIF in the Midlands, Development Bank of Wales, regional grant programmes) in your catchment. The matching service surfaces practices in each major UK SEIS hub.",
};
