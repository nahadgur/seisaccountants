// data/guideContent/carryBack.ts
// Full content for the SEIS / EIS Carry-Back guide.

import { GuideSection } from './rdTaxCredits';

export const carryBackContent: {
  introduction: string[];
  sections: GuideSection[];
  citySectionIntro: string;
} = {
  introduction: [
    "SEIS / EIS carry-back is the underused mechanism that lets an investor treat their SEIS or EIS subscription as if it occurred in the previous tax year, claiming the income tax relief against that prior year's tax liability instead of the current year. For investors whose income or marginal rate was higher in the prior year, or for investors who simply subscribed to a round after the tax year had closed and want the relief sooner rather than later, carry-back is a meaningful planning lever.",
    "This guide covers the carry-back mechanism end-to-end: the rules and limits, the practical timing of the claim on Self-Assessment, the interaction with the SEIS / EIS income tax relief caps, the cross-year tax planning opportunities, and the situations where carry-back is and is not the right choice. Specialists routinely model both the current-year and carry-back positions for investors deciding how to claim their SEIS / EIS relief.",
  ],
  sections: [
    {
      id: "what-is-carry-back",
      h2: "What is SEIS / EIS carry-back?",
      paragraphs: [
        "Carry-back is the SEIS / EIS provision that allows an investor to elect to treat all or part of their SEIS or EIS subscription as if it were made in the previous tax year. The relief is then claimed against the previous year's income tax liability rather than the current year. This affects only the income tax relief; CGT exemption, reinvestment relief, and loss relief have their own timing rules unaffected by the carry-back election.",
        "The mechanism exists because investors often subscribe to SEIS / EIS rounds in the early months of a new tax year (April through July) where the company's round closes immediately after the previous tax year ended. Without carry-back, the investor would have to wait 12+ months to claim relief on their next Self-Assessment return. Carry-back lets them claim the relief immediately against the just-ended tax year, generating a refund within months rather than waiting a year.",
        "Carry-back is not limited to early-year subscriptions. An investor can elect to carry back a subscription made at any point in the tax year, as long as the prior year's Self-Assessment return is open for amendment (typically within two years of the original filing deadline).",
      ],
    },
    {
      id: "limits-and-rules",
      h2: "Limits and rules: how much can be carried back?",
      paragraphs: [
        "The full subscription amount can be carried back, subject to the income tax relief caps in the prior year. For SEIS, the prior year's £200,000 subscription cap must accommodate the carried-back amount. For EIS, the prior year's £1m cap (or £2m for KIC) must accommodate it. An investor who has already used their full SEIS or EIS cap in the prior year cannot carry back additional subscriptions to that year.",
        "The cap interaction is important. An investor who subscribed £150,000 to SEIS in 2023-24 and wants to carry back £100,000 of a 2024-25 SEIS subscription can do so only if total 2023-24 SEIS activity stays within the £200,000 cap (so a maximum of £50,000 can be carried back). The remaining £50,000 stays as a 2024-25 claim.",
        "The carry-back is per share issue, not per investor. An investor can elect to carry back the entire subscription, none of it, or any specified portion. The flexibility allows the investor to split a subscription across two tax years for marginal-rate optimisation purposes.",
      ],
      callout: {
        type: 'tip',
        heading: 'Carry-back is per share issue, not per round',
        text: 'An investor making multiple SEIS / EIS subscriptions in a single tax year can elect carry-back independently for each issue. So an investor with £100,000 SEIS subscribed in May 2024 and £150,000 SEIS subscribed in November 2024 can carry back the May subscription to 2023-24 and leave the November subscription as a 2024-25 claim, or any other split that fits their tax position.',
      },
    },
    {
      id: "making-the-claim",
      h2: "Making the claim on Self-Assessment",
      paragraphs: [
        "The carry-back election is made on the investor's Self-Assessment return for the year of the actual subscription (the current year), with the carried-back amount also reflected in the prior-year return. If the prior-year return has already been filed without the SEIS / EIS claim, the investor amends the prior-year return to include it.",
        "The amendment window for prior-year returns is typically until 12 months after the standard filing deadline of the year being amended. So an investor who subscribed to SEIS in May 2024 has until 31 January 2026 to amend the 2023-24 Self-Assessment return to include the carry-back claim (the standard amendment window of 12 months after the 2023-24 filing deadline of 31 January 2025).",
        "The investor needs the SEIS3 / EIS3 certificate from the company before claiming. Where the certificate is issued shortly before the prior-year amendment window closes, specialists prioritise the SEIS1 / EIS1 filing to ensure the SEIS3 / EIS3 arrives in time. Where the certificate is delayed past the amendment window, the investor loses the option to carry back and must claim against the current year instead.",
      ],
    },
    {
      id: "marginal-rate-planning",
      h2: "Marginal-rate planning: when to carry back",
      paragraphs: [
        "The primary planning use of carry-back is matching the relief to the year of highest income tax marginal rate. An investor whose income was at the 45 percent additional rate in 2023-24 but has dropped to the 40 percent higher rate in 2024-25 benefits from carrying back the relief to 2023-24, gaining an extra 5 percent of relief per £1 of subscription.",
        "For SEIS, the income tax relief is 50 percent regardless of the investor's marginal rate, so the marginal-rate argument does not apply directly. However, SEIS relief is only available against actual income tax liability; an investor who would not have enough income tax liability in the current year to absorb the SEIS relief may still need to carry back to ensure the relief actually gets used. The 50 percent rate is a cap, not a guaranteed refund.",
        "For EIS, the 30 percent rate is also flat, but again the limiting factor is the investor's income tax liability. An investor with high income in 2023-24 (sale of a business, large dividend, partnership distribution) but lower income in 2024-25 might use carry-back to maximise the EIS relief against the higher-income year.",
      ],
    },
    {
      id: "cashflow-considerations",
      h2: "Cash flow considerations: getting the refund faster",
      paragraphs: [
        "Beyond marginal-rate planning, carry-back is often used purely for cash flow timing. An investor who subscribes to SEIS in May 2024 has two options: (a) wait until they file their 2024-25 Self-Assessment in January 2026 to claim the relief, with the refund arriving February-March 2026, or (b) carry back to 2023-24, amend the 2023-24 return, and receive the refund within 6-12 weeks of the amendment being filed.",
        "Option (b) accelerates the cash refund by 12-15 months. For investors with portfolio-level SEIS / EIS commitments (typically those subscribing £50,000+ per year), the cash flow benefit of carry-back can be material; the refund is then often redeployed into the next round.",
        "The trade-off is the administrative burden of amending the prior year's return. Where the investor has a simple tax position (PAYE income only), the amendment is straightforward. Where the prior year had multiple income sources, capital gains, or complex deductions, the amendment requires careful recalculation. Specialists typically include carry-back analysis in the SEIS / EIS investor onboarding to flag the option at the right point.",
      ],
    },
    {
      id: "interaction-other-reliefs",
      h2: "Interaction with reinvestment relief and other claims",
      paragraphs: [
        "Carry-back affects only the income tax relief on the SEIS / EIS subscription. It does not change the timing of CGT reinvestment relief, which follows its own rules (EIS reinvestment relief allows shares within 1 year before or 3 years after the gain; SEIS reinvestment relief requires same tax year). The CGT and income tax aspects of the same subscription can therefore be claimed in different years.",
        "An investor who subscribes to SEIS in May 2024 (2024-25 tax year) using gains from a property sale in March 2024 (2023-24 tax year): the SEIS reinvestment relief must be claimed in 2023-24 (same year as the gain, given SEIS reinvestment rules) but the SEIS income tax relief can be claimed in either 2023-24 (via carry-back) or 2024-25 (default). Specialists model both options and recommend the higher-value position.",
        "Loss relief on a subsequent failure is calculated against the year of disposal of the shares, not the year the income tax relief was claimed. So the carry-back choice does not affect the timing of any future loss relief; it only affects when the original income tax relief is recovered.",
      ],
    },
    {
      id: "when-not-to-carry-back",
      h2: "When carry-back is not the right choice",
      paragraphs: [
        "Carry-back is not always advantageous. Three scenarios where keeping the relief in the current year is better. First, where the current year has a higher marginal rate than the prior year (rare but possible, especially for investors moving from PAYE to self-employment or who have unusual income spikes).",
        "Second, where the prior year's tax position is unstable or under HMRC review. Amending a return that is already under enquiry adds complexity and may attract additional scrutiny. Investors with active HMRC enquiries on prior years typically defer SEIS / EIS amendments until the enquiry concludes.",
        "Third, where the prior-year amendment window has closed or is about to close. An investor who subscribed in March 2025 has very little time before the prior-year (2023-24) amendment window closes on 31 January 2026; the administrative friction of fast-tracking an amendment can outweigh the benefit. In this case, simply claiming the relief in the current year (2024-25) is cleaner.",
      ],
    },
  ],
  citySectionIntro:
    "SEIS / EIS carry-back is a Self-Assessment matter handled centrally; the geographic location of the investor's accountant does not affect the mechanics. What matters is the specialist's familiarity with the cross-year planning and the timing of SEIS3 / EIS3 certificate availability vs amendment windows. The matching service surfaces specialist accountants whose live caseloads include cross-year SEIS / EIS investor planning.",
};
