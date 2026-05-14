// data/guideContent/shareIssueMechanics.ts
// Full content for the SEIS / EIS Share Issue Mechanics guide.

import { GuideSection } from './rdTaxCredits';

export const shareIssueMechanicsContent: {
  introduction: string[];
  sections: GuideSection[];
  citySectionIntro: string;
} = {
  introduction: [
    "Once Advance Assurance is in hand and investors have committed, the actual issue of SEIS or EIS shares is where many founders stumble. The legal and HMRC tests for a qualifying SEIS / EIS share issue are specific: the right share class, the right consideration, the right Companies House filings, and the right share-register entries. Get any of these wrong and the shares are not qualifying, regardless of how clean the assurance was.",
    "This guide covers the share-issue mechanics that determine whether the issue qualifies: the SEIS / EIS share-class requirements, the cash-consideration rule, the Companies House SH01 filing, the share-certificate generation, the share-register updates, the order of issues when SEIS and EIS are stacked in the same round, and the documentation that the SEIS1 / EIS1 compliance statement will eventually reference. The aim is a clean paper trail that survives HMRC scrutiny at compliance-statement time.",
  ],
  sections: [
    {
      id: "share-class-requirements",
      h2: "Share-class requirements: ordinary shares with no preferences",
      paragraphs: [
        "SEIS / EIS shares must be new ordinary shares with no preferential rights to dividends, capital, or asset distribution. They cannot be redeemable. They cannot carry rights that vary materially from existing ordinary shares. The share class must be created (or already exist) under the company's Articles of Association in a form that meets the SEIS / EIS test.",
        "Many companies that have raised friends-and-family rounds previously have Articles that include preferred share classes (often inherited from incorporation templates or imposed by early investors). These need to be amended before SEIS / EIS shares are issued, otherwise the SEIS / EIS shares will be deemed to have potentially subordinate rights and disqualify.",
        "The amendment is done via a special resolution of the existing shareholders (75 percent threshold). The new Articles should explicitly state that the SEIS / EIS ordinary shares rank equally with all other ordinary shares for dividends, capital distributions on winding-up, and voting. No preference, no priority, no redemption right.",
      ],
      callout: {
        type: 'warning',
        heading: 'Even \'minor\' preference clauses disqualify',
        text: 'Founders sometimes argue that small preferences (a 5 percent annual cumulative dividend, a £1 liquidation preference, a redemption right exercisable only on a specific event) should not disqualify SEIS / EIS shares because the economic effect is trivial. HMRC takes a hard line: any preference, however small, disqualifies. The cure is to remove the preference clauses entirely from the share class being issued, not to argue that they are immaterial.',
      },
    },
    {
      id: "cash-consideration-rule",
      h2: "The cash consideration rule",
      paragraphs: [
        "SEIS / EIS shares must be issued for cash consideration paid up in full at the time of issue. Issues for non-cash consideration (services, IP, assets) do not qualify. Partly-paid shares do not qualify; the full subscription price must be received by the company on or before the date of issue.",
        "The cash payment must come from the investor's own funds, not from a loan from the company or a connected party. An investor whose subscription is funded by a loan from the company itself loses the relief; the test is that the investment is genuine new capital flowing into the company from outside.",
        "The funds must be received by the company before the shares are recorded as issued in the share register. The mechanical sequence: investor pays the subscription price into the company's bank account, the company confirms receipt, the company allots the shares with the issue date matching the bank receipt date, the SH01 is filed with Companies House. Issuing shares before funds are received is technically a breach even if the funds arrive shortly afterwards.",
      ],
    },
    {
      id: "companies-house-filing",
      h2: "Companies House SH01 filing",
      paragraphs: [
        "Every share issue must be reported to Companies House within one month using the SH01 form (return of allotment of shares). The SH01 specifies the date of allotment, the number of shares of each class, the nominal value, the amount paid up per share, and the consideration received. For SEIS / EIS shares, the SH01 typically specifies new ordinary shares paid up in full in cash.",
        "The SH01 filing date is important because it provides Companies House evidence that the shares were actually issued on the claimed date. HMRC's VCR team may cross-check the SH01 against the SEIS1 / EIS1 compliance statement; a discrepancy between the dates claimed on the compliance statement and the dates on the SH01 will trigger an enquiry.",
        "Where shares are issued in tranches (a typical SEIS round may close in multiple tranches as different investors complete their subscription), each tranche needs its own SH01 (or a combined SH01 covering all allotments since the last filing). Late filing attracts late-filing penalties at Companies House, but the SEIS / EIS qualification is unaffected as long as the issue date is correctly recorded.",
      ],
    },
    {
      id: "share-certificates",
      h2: "Share certificates and share register",
      paragraphs: [
        "On allotment, the company issues a share certificate to each investor and updates the share register. The share certificate evidences the investor's ownership and is required for them to claim SEIS / EIS relief later (HMRC may request a copy as part of an enquiry). The share register is the legal record of who owns which shares; it must reflect the new allotments accurately.",
        "Share certificate templates are widely available; the certificate must specify the company name, the share class, the number of shares, the certificate number, the date of issue, and the holder's name. Best practice for SEIS / EIS issues is to note the certificate as 'SEIS shares' or 'EIS shares' to flag the investor relief status, though this is not a legal requirement.",
        "The share register updates should be made on the same day as the allotment. Cloud company-secretarial platforms (Inform Direct, Goodlord Company Secretary, simple spreadsheets in well-managed founder-led companies) handle this routinely. The register must be retained at the company's registered office and made available for inspection by shareholders or HMRC if requested.",
      ],
    },
    {
      id: "stacking-seis-and-eis",
      h2: "Stacking SEIS and EIS in the same round",
      paragraphs: [
        "A common round structure stacks SEIS and EIS in the same fundraise: the first tranche of investment is raised as SEIS shares (up to the £250,000 SEIS lifetime company limit), with the remainder raised as EIS shares. The mechanical sequence matters: SEIS shares must be issued before EIS shares in the same round, because SEIS qualification requires no prior EIS investment in the company.",
        "Specifically, the EIS legislation excludes companies that have previously raised SEIS investment from raising further SEIS in the future, but allows EIS after SEIS. The reverse is not permitted; once EIS has been raised, no further SEIS can be raised in that company. Founders running a stacked round therefore close the SEIS tranche first (with its own SH01 and share certificates) and then close the EIS tranche, typically on a subsequent trading day.",
        "The compliance flow is parallel: SEIS1 is filed for the SEIS tranche; EIS1 is filed separately for the EIS tranche. SEIS3 certificates are issued to SEIS investors; EIS3 certificates are issued to EIS investors. Some investors may receive both certificates if they subscribed to both tranches.",
      ],
      callout: {
        type: 'tip',
        heading: 'Same-day vs different-day SEIS / EIS closes',
        text: 'In strict practice, SEIS and EIS shares can be issued on different trading days within the same calendar day, e.g. SEIS at 9am and EIS at 4pm. However, the safest pattern is to close SEIS on day 1 and EIS on day 2 or later. This produces a cleaner paper trail and removes any ambiguity about which class was issued first. Specialists routinely time the close this way.',
      },
    },
    {
      id: "documentation-pack",
      h2: "The post-issue documentation pack",
      paragraphs: [
        "After the share issue closes, the company should hold a complete documentation pack for each investor and each tranche. The pack supports the SEIS1 / EIS1 compliance statement filing months later and the SEIS3 / EIS3 certificate distribution to investors. Missing documentation at compliance-statement time is the single most common cause of delayed filings.",
        "Per-investor documentation: subscription agreement (signed by both parties), evidence of payment (bank statement showing the receipt of subscription funds), share certificate issued to the investor, and entry in the share register. Where the investor's address or details may change before the SEIS3 / EIS3 is issued (typical 6-9 months later), the company should record a stable contact channel.",
        "Per-tranche documentation: SH01 filing receipt from Companies House, board resolution approving the allotment (signed minutes), updated share register, and any side agreements (e.g. amended Articles, shareholders' agreement, investor letter of allocation). All of this should be in a shared SEIS / EIS folder that the specialist accountant can access when filing the SEIS1 / EIS1.",
      ],
    },
    {
      id: "common-mistakes",
      h2: "Common mistakes that complicate the compliance statement",
      paragraphs: [
        "Three patterns commonly complicate the SEIS1 / EIS1 filing later. First, dating mistakes. Founders sometimes pre-date or post-date share certificates to match expected investor expectations rather than the actual fund-receipt date. HMRC may discover the discrepancy when matching the SH01 to the compliance statement and reject the filing.",
        "Second, missing SH01 filings. Companies House filings get forgotten, especially for early tranches in a multi-tranche close. The compliance statement requires SH01 evidence for each allotment; missing filings have to be regularised before the SEIS1 / EIS1 can be filed.",
        "Third, share-class confusion. Companies that have issued multiple share classes over time sometimes find that the SEIS / EIS shares were not specifically created as a new class, and the existing ordinary shares carry small preferences that disqualify. The fix is to verify the share class structure at allotment time and amend the Articles if needed before the issue, not after.",
      ],
    },
  ],
  citySectionIntro:
    "Share-issue mechanics are corporate-secretarial work supported by HMRC compliance knowledge; the geographic location of the company or its accountant does not affect the process. What matters is the specialist's experience running clean SEIS / EIS issues from board resolution through SEIS3 / EIS3 distribution. The matching service surfaces specialist accountants whose live caseloads include SEIS / EIS share-issue documentation and Companies House filings.",
};
