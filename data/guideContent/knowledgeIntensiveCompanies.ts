// data/guideContent/knowledgeIntensiveCompanies.ts
// Full content for the Knowledge-Intensive Companies (KIC) EIS guide.

import { GuideSection } from './rdTaxCredits';

export const knowledgeIntensiveCompaniesContent: {
  introduction: string[];
  sections: GuideSection[];
  citySectionIntro: string;
} = {
  introduction: [
    "Knowledge-Intensive Company (KIC) status is the enhanced EIS regime designed for R&D-heavy or innovation-led UK companies that need more time and more capital than standard EIS allows. KIC EIS extends the company-age limit from 7 to 10 years, doubles the annual investment limit from £5m to £10m, raises the employee limit from 250 to 500, and lets investors claim relief on up to £2m per year (compared to £1m for standard EIS, provided at least £1m is invested in KICs).",
    "This guide covers the two routes into KIC status (the R&D-intensity test and the innovation condition), how the tests interact with prior R&D claims, how to evidence the conditions in an Advance Assurance application, the round-by-round assessment that means a company can be a KIC for some rounds and not others, and the practical use cases where KIC EIS materially changes the fundraising path. KIC is genuinely impactful for deep-tech, biotech, and complex software companies; for the typical SaaS scale-up that does not meet the tests, standard EIS is the right route.",
  ],
  sections: [
    {
      id: "kic-vs-standard-eis",
      h2: "KIC EIS vs standard EIS: what actually differs",
      paragraphs: [
        "The headline benefit of KIC status is more runway and more capital. A standard EIS company has a 7-year window from first commercial trade to raise EIS investment and a £5m annual EIS cap (£12m lifetime). A KIC has 10 years and a £10m annual cap (£20m lifetime). For an R&D-heavy company where the early years are pre-revenue and the technical risk takes 5-7 years to resolve, the additional three years of EIS eligibility is the difference between being able to raise an EIS Series B and not.",
        "The investor-side limits also differ. Standard EIS lets an individual investor claim 30 percent relief on up to £1m per tax year. KIC EIS allows up to £2m per year, provided at least £1m of that goes into KIC-status companies. This matters for high-net-worth investors who want to scale their EIS allocation; without KIC status in the cap stack, they are constrained.",
        "The qualifying tests, share rights, three-year qualifying period, and SEIS1 / EIS1 compliance flow are otherwise identical between standard EIS and KIC EIS. KIC is not a separate scheme; it is an enhanced regime within EIS with extended limits.",
      ],
      dataTable: {
        caption: "Standard EIS vs Knowledge-Intensive EIS limits",
        headers: ["Limit", "Standard EIS", "Knowledge-Intensive EIS"],
        rows: [
          ["Company age at first EIS issue", "Under 7 years", "Under 10 years"],
          ["Maximum employees (FTE)", "Fewer than 250", "Fewer than 500"],
          ["Maximum annual EIS investment", "£5m", "£10m"],
          ["Lifetime EIS limit", "£12m", "£20m"],
          ["Investor max relief per year", "£1m invested", "£2m invested (if £1m+ in KICs)"],
          ["Investor income tax relief rate", "30%", "30% (identical)"],
        ],
        source: "HMRC EIS guidance and ITA 2007 ss 175-181 (KIC conditions).",
      },
    },
    {
      id: "rd-intensity-test",
      h2: "Route 1: the R&D intensity test",
      paragraphs: [
        "The R&D intensity test qualifies a company as a KIC based on the proportion of operating costs that are R&D expenditure. There are two ways to meet the test. The first option: in at least one of the three years immediately preceding the EIS issue, the company's R&D or innovation expenditure was at least 15 percent of its total operating costs. The second option: in each of the three years preceding the issue, the R&D or innovation spend was at least 10 percent of operating costs.",
        "The test uses operating costs as the denominator, not turnover. For a pre-revenue deep-tech company, almost all costs are R&D-relevant, so meeting the 15 percent test is straightforward. For a company with material non-R&D operating costs (sales team, marketing, customer support), the test gets harder. Many R&D-led companies that intuitively feel like KICs fail the operating-cost ratio because their commercial activity has grown faster than their R&D spend.",
        "Operating costs are defined broadly: staff costs, premises, professional fees, technology infrastructure, and so on. They do not include capital expenditure, interest, depreciation, or specific exclusions. R&D expenditure is defined consistently with HMRC's R&D tax credit definitions, so a company with a recent R&D claim has the numerator already documented in its CT600 filing.",
      ],
      callout: {
        type: 'tip',
        heading: 'Evidence the R&D intensity test from your R&D claim',
        text: 'For companies that have made an R&D tax credit claim in the relevant preceding years, the R&D expenditure figure is already in the CT600L. Using the same figure for the KIC R&D intensity test provides consistent, HMRC-verifiable evidence. Companies that have not previously claimed R&D should consider doing so before applying for KIC EIS, both for the credit itself and for the audit-quality documentation it produces.',
      },
    },
    {
      id: "innovation-condition",
      h2: "Route 2: the innovation condition",
      paragraphs: [
        "The innovation condition is an alternative route to KIC status for companies that do not meet the R&D intensity ratio. The conditions are subjective and require HMRC's judgement. The company must be engaged in the creation of intellectual property (IP) and reasonably expect that the substantial majority of its business will be carrying out activities related to that IP within 10 years.",
        "In practice, the innovation condition is most often used by patent-led businesses (biotech, hardware, complex chemistry), specialised software businesses where the IP is core to commercial activity, and research-led companies whose R&D spend does not yet show in the operating cost ratio because the business is very small. HMRC requires evidence: patent applications or grants, peer-reviewed publications, government grant awards in R&D-relevant categories, and a clear plan for commercial exploitation of the IP.",
        "The condition is judged at the time of the share issue and is forward-looking; HMRC is not asking whether the company has already commercialised the IP but whether it reasonably expects to. The evidential bar is higher than the R&D intensity test because there is no numerical hurdle to clear, just a qualitative case to make. Specialists generally recommend the R&D intensity route when the company can meet either test.",
      ],
    },
    {
      id: "advance-assurance-for-kic",
      h2: "Advance Assurance for KIC EIS",
      paragraphs: [
        "An Advance Assurance application for KIC EIS is structured like a standard EIS application but adds explicit evidence of KIC status. The covering letter should state which KIC route the company is using (R&D intensity or innovation condition) and provide the supporting evidence. For R&D intensity, attach the most recent R&D tax credit claim documentation showing the R&D spend percentage. For the innovation condition, attach patent applications, grant award letters, or other IP-creation evidence.",
        "HMRC's Venture Capital Reliefs Unit treats KIC applications with additional scrutiny because the enhanced limits are commercially valuable and HMRC wants to avoid the regime being used by non-qualifying companies. Expect more follow-up questions than a standard EIS Advance Assurance and a longer processing window. The 8-10 week processing time is realistic; specialists with KIC caseload experience often see 6 weeks but new founders should plan for longer.",
        "The KIC assessment is round-by-round, not a permanent designation. A company that qualifies as a KIC for its Series A may not qualify for its Series B if the R&D intensity has dropped (because the company has scaled its commercial operations faster than R&D spend) or if the innovation condition has been satisfied and is no longer prospective. Each new Advance Assurance has to re-evidence KIC status.",
      ],
    },
    {
      id: "use-cases",
      h2: "Practical use cases where KIC materially changes the path",
      paragraphs: [
        "KIC matters most in three specific scenarios. Scenario one: deep-tech and hardware companies with 5-7 year technical development cycles. The standard 7-year EIS window is not enough; the company hits 7 years still pre-revenue and loses access to EIS investment just as it is ready to commercialise. KIC's 10-year window extends EIS eligibility into the commercialisation phase.",
        "Scenario two: biotech and life sciences with regulatory pathway timelines. Drug discovery, medical devices, and diagnostics often need 8-12 years from incorporation to commercial sale because of clinical trials and regulatory approval. KIC EIS is structurally designed for these companies; standard EIS rarely works.",
        "Scenario three: R&D-led software with substantial pre-product investment. AI infrastructure, quantum-resistant cryptography, novel database architectures, advanced robotics software. These companies spend 3-5 years building the core technology before commercial revenue is meaningful. The KIC R&D intensity test is easy for them to meet, and the £10m annual cap supports the larger Series A and Series B rounds these companies typically require.",
      ],
      callout: {
        type: 'data',
        heading: 'KIC EIS by the numbers',
        text: 'HMRC published data for 2022-23 shows that approximately 12 percent of EIS-raised capital was invested in companies with KIC status, with KIC investment concentrated in biotech, deep-tech, and complex software. The average KIC round size is materially larger than the standard EIS average (typically £2-4m vs £400-800k), reflecting the capital intensity of qualifying sectors.',
      },
    },
    {
      id: "transitioning-to-kic",
      h2: "Transitioning from standard EIS to KIC status",
      paragraphs: [
        "Many companies start out qualifying for standard EIS and later need to transition to KIC status to extend the runway. The transition is done at the time of an Advance Assurance for a new round: the application states that the company now qualifies as a KIC and provides the supporting evidence. There is no formal 're-designation' process; the new assurance and subsequent compliance statement evidence the KIC status for that issue.",
        "Companies that have raised standard EIS in earlier rounds and now want to raise as a KIC need to consider the company-age test. The 10-year clock for KIC EIS runs from first commercial trade, not from incorporation; companies that started commercial trading later than incorporation may have more KIC runway than their headline age suggests. The first commercial trade date is the company's own evidence-based judgement, supported by the trade activity log.",
        "Where a company's R&D intensity is borderline (close to 15 percent but not clearly above), specialists sometimes recommend timing the EIS issue for a year when the R&D ratio is highest. A clean 15 percent in the most recent year is more defensible than a 14.8 percent that requires HMRC to find against the company. The flexibility to time issues across financial year-ends is one of the levers specialists use.",
      ],
    },
  ],
  citySectionIntro:
    "KIC EIS applications are processed by HMRC's Venture Capital Reliefs Unit centrally, so the geographic location of the company or its accountant does not affect processing. What matters is the specialist's experience with KIC R&D intensity evidence and innovation-condition documentation. The matching service surfaces specialist accountants whose live caseloads include KIC EIS engagements.",
};
