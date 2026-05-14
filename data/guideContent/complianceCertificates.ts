// data/guideContent/complianceCertificates.ts
// Full content for the SEIS1/EIS1 + SEIS3/EIS3 Compliance Certificates guide.

import { GuideSection } from './rdTaxCredits';

export const complianceCertificatesContent: {
  introduction: string[];
  sections: GuideSection[];
  citySectionIntro: string;
} = {
  introduction: [
    "Once SEIS or EIS shares are issued, the company has between four months and two years to file the compliance statement (SEIS1 or EIS1) with HMRC. HMRC then issues compliance certificates (SEIS3 or EIS3) for each investor. Investors use the SEIS3 / EIS3 to actually claim their relief on their Self-Assessment return. Without the certificate, no investor relief is available regardless of how cleanly the round was structured.",
    "This guide covers the SEIS1 / EIS1 application end-to-end, the HMRC processing timeline, the SEIS3 / EIS3 distribution to investors, the most common reasons HMRC rejects a compliance statement, and the rescue options when something goes wrong. The compliance-certificate stage is where SEIS engagements most commonly fail at the final hurdle, even after a clean advance assurance and a clean share issue, so the documentation discipline matters.",
  ],
  sections: [
    {
      id: "the-compliance-chain",
      h2: "The compliance chain: SEIS1 / EIS1 to SEIS3 / EIS3",
      paragraphs: [
        "The SEIS or EIS compliance flow runs in three stages. First, the company issues SEIS or EIS shares and waits for the qualifying trading-period threshold (four months from issue, or four months from start of trade if later). Second, the company files the SEIS1 (for SEIS shares) or EIS1 (for EIS shares) statement with HMRC's Venture Capital Reliefs Unit. Third, HMRC processes the statement and, on approval, issues SEIS3 / EIS3 certificates to the company for distribution to each investor.",
        "The SEIS3 / EIS3 is the actual investor document. Each investor uses the unique reference number on their SEIS3 / EIS3 to claim income tax relief on their personal Self-Assessment return. Without the certificate, the investor cannot claim the relief, regardless of whether the company actually qualified at the time of issue. Investors who hold SEIS shares without ever receiving their SEIS3 effectively lose the income tax relief they were promised.",
        "The compliance statement must be filed within two years of the end of the tax year in which the shares were issued (so shares issued in May 2024 must have an SEIS1 / EIS1 filed by 5 April 2027). In practice, specialists file as soon as the four-month qualifying trade test is met, typically within 6-8 months of the share issue, to get the SEIS3 / EIS3 certificates to investors in time for their next Self-Assessment cycle.",
      ],
      dataTable: {
        caption: "SEIS1 / EIS1 compliance timeline",
        headers: ["Stage", "Earliest", "Practical timing", "Hard deadline"],
        rows: [
          ["Share issue (start of clock)", "Day 0", "Day 0", "n/a"],
          ["Four-month trading-period test", "4 months after issue or trade start", "4-5 months after issue", "n/a"],
          ["File SEIS1 / EIS1", "After 4-month test", "6-8 months after issue", "2 years after end of tax year of issue"],
          ["HMRC processes compliance statement", "n/a", "4-12 weeks after filing", "n/a"],
          ["SEIS3 / EIS3 certificates issued to company", "n/a", "On HMRC approval", "n/a"],
          ["Company distributes SEIS3 / EIS3 to investors", "n/a", "Within 14 days of receipt", "n/a"],
        ],
        source: "HMRC Venture Capital Reliefs Unit guidance and practitioner-observed timings.",
      },
    },
    {
      id: "filing-seis1-eis1",
      h2: "Filing the SEIS1 / EIS1 compliance statement",
      paragraphs: [
        "The SEIS1 / EIS1 is filed online through HMRC's Venture Capital Schemes Submission Service. The filer needs the company's UTR, Government Gateway credentials, and the details of every SEIS or EIS share issue covered by the statement. A single statement can cover multiple share issues to multiple investors as long as all are within the same scheme (SEIS shares and EIS shares need separate statements).",
        "The statement requires detailed information per investor: full name, current address, National Insurance number, the amount subscribed, the date of issue, and the number of shares acquired. Specialists prepare the data in a spreadsheet from the share register, then transcribe into the HMRC submission. Errors in investor data are the most common cause of SEIS3 / EIS3 distribution problems later (HMRC issues the certificate against the data submitted; if the name or NI number is wrong, the investor cannot reliably claim the relief).",
        "The statement also requires the company to confirm that the qualifying conditions have continued to be met through the four-month trading-period test. This is a positive declaration; if any qualifying condition has been breached (employee count exceeded, gross assets exceeded, trade changed to a non-qualifying activity, share rights changed), the SEIS1 / EIS1 cannot be filed and the investor relief is lost.",
      ],
    },
    {
      id: "common-rejections",
      h2: "Common reasons HMRC rejects a compliance statement",
      paragraphs: [
        "HMRC's processing of SEIS1 / EIS1 statements is more scrutinous than the Advance Assurance stage because this is the binding test. Three rejection patterns dominate. First, share-issue dating problems. The shares must have been issued at the dates declared on the statement, and the company must hold a Companies House filing or SH01 return confirming the issue at that date. A statement claiming shares issued before the SH01 was filed is rejected.",
        "Second, value-received-from-the-company breaches. The investor cannot receive any value back from the company (cash, services, asset transfers, debt repayments) during the qualifying period except ordinary commercial salary or director remuneration. A founder-investor who took an unusual dividend in the first year, or a connected-party investor who had a debt repaid by the company, triggers rejection or partial rejection.",
        "Third, share-rights problems found on inspection. HMRC's caseworker may pull the current Articles of Association and check that the SEIS / EIS shares actually carry the ordinary rights the assurance application described. If the Articles have been amended in a way that creates a preferred share class or a redemption right, the statement is rejected even if advance assurance was previously granted.",
      ],
      callout: {
        type: 'warning',
        heading: 'Partial rejection: one bad investor does not always kill the round',
        text: 'Where one investor in a round has a value-received problem (e.g. received a paid consultancy from the company during the qualifying period), HMRC can issue SEIS3 / EIS3 certificates to the unaffected investors and decline the problem investor. The clean investors get their relief; the problem investor loses theirs. Specialists pre-screen each investor relationship before filing to identify and resolve these issues before submission.',
      },
    },
    {
      id: "distributing-certificates",
      h2: "Distributing SEIS3 / EIS3 certificates to investors",
      paragraphs: [
        "Once HMRC approves the compliance statement, it sends the SEIS3 / EIS3 certificates to the company in a single batch. The company is then responsible for distributing them to the individual investors. Each certificate is a paper document (HMRC has not yet moved to electronic-only despite frequent investor requests) bearing a unique reference, the investor's name and NI number, the amount of relief available, and the relevant tax year.",
        "Investors then claim the relief on their personal Self-Assessment return. The SEIS3 / EIS3 reference goes on the additional information pages (SA101). Most investors expect the certificate within 14 days of HMRC issuing it. Delays of more than 30 days from HMRC issue often produce investor enquiries and reflect poorly on the founder's competence; specialists treat distribution as a same-week task.",
        "Investors should retain the SEIS3 / EIS3 for at least four years after the tax return is filed. HMRC may request a copy on enquiry, and the document is the only evidence the investor has of the relief claim. Companies should keep a copy in the investor file alongside the share register entry.",
      ],
    },
    {
      id: "rescue-options",
      h2: "Rescue options when something goes wrong",
      paragraphs: [
        "Three rescue routes exist when the compliance flow breaks. First, late filing of the SEIS1 / EIS1. The two-year hard deadline (after end of tax year of issue) is genuinely hard; missing it loses all investor relief on those shares. Late filings within the two-year window but after the practical 6-8 month target produce no penalty but inconvenience investors who wanted the relief on the previous tax year's return.",
        "Second, errors found after filing. If the company finds an error in investor data (wrong NI number, wrong subscription amount) after the statement has been filed but before HMRC has issued the certificate, a corrected statement can usually be submitted. If the error is found after the SEIS3 / EIS3 has been issued, the investor can still file Self-Assessment using the certificate; HMRC will typically accept a covering letter explaining a typo. Material errors (wrong investor) require a fresh statement.",
        "Third, retrospective qualifying issues. Where the company has done something that retrospectively breaks the qualifying conditions (e.g. issued a new share class with preferential rights during the three-year qualifying period), the investor relief is at risk of clawback. The rescue is to reverse the breaching action immediately (cancel the new share class, repay the value received). Specialist accountants familiar with HMRC's enforcement patterns can negotiate the rescue, but the investor relief is sometimes lost where the breach is structural.",
      ],
    },
    {
      id: "three-year-qualifying-period",
      h2: "The three-year qualifying period after issue",
      paragraphs: [
        "Investor relief vests over three years from the date of share issue. During that three-year qualifying period, the company must continue to meet the qualifying conditions, and the investor must continue to hold the shares without disposing of them or receiving value back. Breaches during the qualifying period trigger clawback of the income tax relief and loss of the CGT exemption on eventual exit.",
        "The most common qualifying-period breaches are: company exits or share buybacks before three years (investor relief withdrawn unless an HMRC-approved share-for-share exchange continues SEIS / EIS status); investor returns value to themselves (loan repayment, asset transfer, paid consultancy on non-arm's-length terms); company moves into an excluded trade; or the company issues shares with preferential rights that retrospectively change the share class structure.",
        "Acquisitions within the three-year period are the highest-stakes case. A trade sale of the company in years one or two of the qualifying period, structured as a cash exit, claws back the investor's income tax relief and removes the CGT exemption. Specialist tax advisers structure the sale as a share-for-share exchange where possible, with the acquiring company taking on the SEIS / EIS status so the three-year clock continues to run on the new shares. This requires HMRC approval and the acquirer's cooperation.",
      ],
    },
  ],
  citySectionIntro:
    "SEIS1 / EIS1 filings and SEIS3 / EIS3 distributions are administrative tasks that can be done from anywhere; geography of the accountant does not affect the process. What matters is the specialist's familiarity with the Venture Capital Reliefs Unit's review patterns and the specific evidence required for each qualifying test. The matching service surfaces accountants whose live caseloads cover SEIS / EIS compliance work end-to-end.",
};
