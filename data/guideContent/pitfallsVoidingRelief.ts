// data/guideContent/pitfallsVoidingRelief.ts
// Full content for the SEIS / EIS Pitfalls That Void Relief guide.

import { GuideSection } from './rdTaxCredits';

export const pitfallsVoidingReliefContent: {
  introduction: string[];
  sections: GuideSection[];
  citySectionIntro: string;
} = {
  introduction: [
    "SEIS and EIS relief is generous but conditional. HMRC has built a structural framework of rules that protect the regime from abuse, and a breach of any one of them can void investor relief on the affected shares. Some breaches are obvious (issuing the wrong share class, exceeding the gross-assets test). Others are subtle and routinely catch first-time founders: a founder taking a connected-party consultancy payment from the company, a director loan account that goes overdrawn during the qualifying period, share rights amended after issue, or a relative of a founder buying SEIS shares.",
    "This guide covers the structural pitfalls that void SEIS / EIS relief, organised by category: share-class and corporate-structure breaches, value-received-by-investor breaches, related-party breaches, qualifying-period breaches, and pre-arranged-exit breaches. Each section names the test, the typical real-world trigger, and the rescue option where one exists.",
  ],
  sections: [
    {
      id: "share-class-breaches",
      h2: "Share-class and corporate-structure breaches",
      paragraphs: [
        "SEIS / EIS shares must be new ordinary shares with no preferential rights to dividends, capital, or asset distribution. They cannot be redeemable. They cannot carry rights that vary materially from the existing ordinary shares. Founders who issue shares with even minor preferences (a small dividend preference, a liquidation waterfall position, an anti-dilution ratchet) lose investor relief entirely on those shares.",
        "The most common share-class breach is using an off-the-shelf shareholders' agreement template that includes anti-dilution provisions or liquidation preferences for the seed investors. These are standard in venture capital but disqualify SEIS / EIS. The clean path is to issue ordinary shares to SEIS / EIS investors, with any preference structure reserved for later rounds where the investors are not seeking SEIS / EIS relief.",
        "A related pitfall is creating a second share class during the three-year qualifying period that retrospectively changes the rights of the SEIS / EIS shares. A founder who issues 'Series Seed Preferred' shares with liquidation preference to a new investor in year 2 may unintentionally subordinate the existing SEIS / EIS ordinary shares; HMRC may treat this as having created a preferential right against the ordinary class and clawback the SEIS / EIS relief.",
      ],
      callout: {
        type: 'warning',
        heading: 'Anti-dilution ratchets are the single most common share-class breach',
        text: 'Standard early-stage shareholders\' agreements often include weighted-average or full-ratchet anti-dilution clauses for seed investors. These create a preferential right because the SEIS / EIS shareholders effectively get protection against future down-rounds that the existing ordinary shareholders do not have. HMRC consistently treats anti-dilution as a preferential right and disqualifies the shares. The fix is to drop anti-dilution from the SEIS / EIS round and reintroduce it only at the next priced round where the new investors are not seeking SEIS / EIS.',
      },
    },
    {
      id: "value-received-breaches",
      h2: "Value-received-by-investor breaches",
      paragraphs: [
        "An SEIS / EIS investor must not receive value back from the company during the qualifying period, with narrow exceptions for ordinary commercial salary or arm's-length transactions. 'Value' is interpreted broadly: cash payments, asset transfers, debt repayment, loans, free services, payment of personal expenses, and any other non-commercial economic benefit. The test is applied during the three-year qualifying period after the share issue.",
        "Common value-received breaches: an angel investor who is also a paid consultant to the company on non-arm's-length terms (consultancy fees treated as a return of capital); a founder-investor who has the company repay a director loan they made before the SEIS investment (loan repayment is a return of value); an investor who has the company pay for personal expenses (training courses, travel, hospitality); an investor who has the company transfer an asset to them at undervalue.",
        "The test does not catch ordinary commercial salary or director remuneration on arm's-length terms. A founder-investor employed by the company on a market-rate salary is fine. An angel investor providing genuine paid advisory services at market rates is fine. The breach is when the payment is not commercially justified or exceeds the value of the services provided.",
      ],
    },
    {
      id: "related-party-breaches",
      h2: "Related-party breaches",
      paragraphs: [
        "SEIS / EIS investors must not be 'connected' to the company within the meaning of the legislation. Connected parties (founders, directors, employees, and their close relatives) cannot claim SEIS / EIS relief on shares in the company. The test is applied at the time of issue and continuously during the qualifying period; an investor who becomes connected after the issue (by becoming a director, for example) loses relief.",
        "The relative-of-founder rule catches many first-time SEIS rounds. The definition of 'relative' includes spouses, civil partners, parents, children, siblings, and lineal descendants. An angel investor who happens to be the founder's father or sister cannot claim SEIS / EIS relief on shares in their family member's company. The founder's spouse, even if not on the cap table at any other point, cannot subscribe for SEIS / EIS shares.",
        "The connected-party test also affects existing shareholders. A founder who already holds 30 percent or more of the share capital cannot subscribe for further SEIS / EIS shares (the 30 percent rule). The connected-party threshold is applied to the family group, not just the individual: if the founder holds 25 percent and their spouse holds 10 percent, the family group is at 35 percent, above the 30 percent threshold.",
      ],
      callout: {
        type: 'tip',
        heading: 'The 30 percent rule is round-by-round, not a permanent cap',
        text: 'The 30 percent rule applies at the date of share issue. A founder who holds 35 percent at the SEIS / EIS round cannot subscribe for SEIS / EIS shares in that round. But if the founder dilutes below 30 percent through subsequent rounds and the company raises further SEIS / EIS in a later issue, the founder may be eligible at that point. Specialists track the cap-table dilution path to keep founder-investors available for later rounds.',
      },
    },
    {
      id: "qualifying-period-breaches",
      h2: "Qualifying-period breaches",
      paragraphs: [
        "The three-year qualifying period after share issue is when most retrospective breaches occur. The company can change its trade, exceed the employee threshold, exceed the gross-assets test (£350,000 SEIS / £15m EIS), or change the share-rights structure in ways that void the original qualifying status.",
        "The trade change is the most subtle. A company that starts as a SaaS business (qualifying) and pivots into asset-backed lending (excluded) during year 2 of the qualifying period retrospectively loses SEIS / EIS qualification. Investor relief is clawed back. The pivot need not be intentional; sometimes growth into adjacent revenue lines creates a non-qualifying activity that exceeds the substantial-trade threshold.",
        "Employee and gross-assets thresholds are easier to monitor. A company approaching 25 FTEs (SEIS limit) or 250 FTEs (EIS limit) can manage the timing of hiring; a company approaching the gross-assets threshold can manage the timing of asset acquisitions, capitalised software, or grant receipts. Specialists check the thresholds quarterly during the qualifying period for portfolios near the cap.",
      ],
    },
    {
      id: "pre-arranged-exit-breaches",
      h2: "Pre-arranged-exit and pre-arranged-share-buyback breaches",
      paragraphs: [
        "A defining principle of SEIS / EIS is that the investor must be putting capital at genuine risk. If the investor has a pre-arranged exit (a put option against the company, an indemnity from the founders, a guaranteed buyback at a defined price), the risk is removed and the relief is disqualified. The 'no pre-arranged exit' rule is enforced strictly.",
        "Practical applications: convertible loan notes that automatically convert to a put option at maturity are not SEIS / EIS shares (they have a guaranteed-exit feature). Share-purchase agreements with founder warranties that effectively indemnify the SEIS / EIS investor against capital loss can fail the risk test. Tag-along rights and drag-along rights are normally fine because they preserve the upside; put options and guaranteed redemptions are not.",
        "The risk-to-capital condition in EIS adds another layer. HMRC must be satisfied that the company is genuinely growth-focused with realistic risk of capital loss. Asset-backed businesses (where the asset value protects the investor's downside) and businesses set up specifically to use the EIS regime as a tax shelter (rather than for genuine growth investment) fail this test.",
      ],
    },
    {
      id: "rescue-options",
      h2: "Rescue options when a breach is found",
      paragraphs: [
        "Some breaches can be rescued before HMRC enforces clawback; others cannot. The general principle: structural breaches discovered before the SEIS1 / EIS1 compliance statement is filed can usually be fixed by amending the structure and refiling; breaches found after the SEIS3 / EIS3 has been issued are usually unrecoverable.",
        "Share-class breaches: amend the Articles to remove the preferential rights, with shareholder approval. The shares are then re-qualified from the date of the Articles amendment. Note that this does not retrospectively cure the period during which the breaching rights existed; HMRC may take the view that the shares were not qualifying at issue.",
        "Value-received breaches: where the value can be repaid (loan repaid back to company, asset returned, consultancy fees reversed), HMRC may treat the breach as cured. The repayment must be unequivocal and commercially genuine, not a paper-only reversal.",
        "Connected-party breaches: typically not curable. An investor who is a relative of a founder cannot become unrelated. The shares should be transferred to a non-connected party or accepted as non-qualifying. Specialists pre-screen the investor list before share issue to catch this.",
      ],
    },
  ],
  citySectionIntro:
    "Pitfalls that void relief are general structural rules; the geographic location of the company or its accountant does not affect the analysis. What matters is the specialist's experience identifying borderline situations before the share issue rather than after, when the rescue options narrow. The matching service surfaces specialist accountants who run pre-issue compliance checks on every SEIS / EIS engagement.",
};
