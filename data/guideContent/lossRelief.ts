// data/guideContent/lossRelief.ts
// Full content for the SEIS / EIS Loss Relief guide.

import { GuideSection } from './rdTaxCredits';

export const lossReliefContent: {
  introduction: string[];
  sections: GuideSection[];
  citySectionIntro: string;
} = {
  introduction: [
    "Loss relief is the often-overlooked third tax benefit of SEIS and EIS investment. The first two (income tax relief at subscription and CGT exemption on exit) get most of the attention because they apply to successful investments. Loss relief applies when the investment fails, which is the statistically more common outcome at the SEIS stage. The combined effect of income tax relief plus loss relief means that a 45 percent additional-rate taxpayer who invests £100,000 in SEIS and the company fails fully has net exposure of approximately £27,500, not £100,000.",
    "This guide covers how SEIS / EIS loss relief actually works: the two routes (capital loss treatment vs income tax loss relief), the calculation under each, the qualifying conditions for the share disposal, the timing rules, and the planning implications for portfolios where multiple SEIS / EIS investments are running simultaneously. Loss relief turns the SEIS / EIS proposition from a high-risk investment into a meaningfully de-risked allocation at the personal-portfolio level.",
  ],
  sections: [
    {
      id: "two-routes",
      h2: "The two routes: capital loss vs income tax loss",
      paragraphs: [
        "When an SEIS or EIS investment fails (the company is liquidated or the shares become worthless), the investor has a capital loss equal to the cash invested minus the income tax relief already claimed. So an investor who put in £100,000 of SEIS and claimed 50 percent income tax relief of £50,000 has an effective cost base of £50,000. The loss on a total wipeout is £50,000, not £100,000.",
        "The investor can then use that £50,000 loss in one of two ways. Route one: treat it as a capital loss against capital gains in the same or subsequent tax years. This is the default treatment. Route two: elect to treat it as an income tax loss against the investor's other income in the same or prior tax year. The income tax loss route is usually the more valuable option, because income tax rates exceed CGT rates for most investors.",
        "The election to use income tax loss relief is made on the investor's Self-Assessment return for the tax year of the disposal. Specialist tax advisers running the investor's annual return will calculate both routes and recommend the higher-relief route based on the investor's broader tax profile (other capital gains available to offset, marginal income tax rate, etc.).",
      ],
      dataTable: {
        caption: "Combined relief on a failed SEIS investment (45% additional-rate taxpayer)",
        headers: ["Stage", "Amount", "Cumulative net cost"],
        rows: [
          ["Cash invested", "£100,000", "£100,000"],
          ["SEIS income tax relief (50%) at subscription", "(£50,000)", "£50,000"],
          ["Loss on shares (cost base £50,000, sold for nil)", "£50,000", "n/a"],
          ["Income tax loss relief on £50,000 at 45%", "(£22,500)", "£27,500"],
          ["Net cost of failed SEIS investment", "n/a", "£27,500"],
        ],
        source: "HMRC ITA 2007 ss 131-151 (share loss relief) and SEIS rates.",
      },
    },
    {
      id: "qualifying-disposal",
      h2: "When does a share disposal qualify for loss relief?",
      paragraphs: [
        "The share disposal must be either a sale of the shares (typically at nominal value or a small negative-equity figure) or a 'negligible value' claim. A negligible value claim allows the investor to treat the shares as if disposed of even though no transaction has occurred, where the shares have become substantively worthless. The negligible value claim is filed with HMRC and, if accepted, fixes the disposal date for capital loss purposes.",
        "Negligible value claims are accepted by HMRC where there is clear evidence the shares are worthless: company in administration with no recovery prospect, company struck off by Companies House, company wound up with no return to shareholders. Speculative claims (company in difficulty but not formally insolvent) are typically rejected and the investor has to wait for a real disposal event.",
        "Disposals to connected parties (including family members) are subject to anti-avoidance rules and typically do not qualify for loss relief. The investor cannot sell the worthless shares to a spouse to crystallise a loss. The disposal must be to a genuine third party or via a recognised insolvency process.",
      ],
      callout: {
        type: 'tip',
        heading: 'Time the negligible value claim for maximum income tax relief',
        text: 'A negligible value claim can be dated up to two years before the claim is actually filed. This flexibility allows the investor to time the loss against the tax year with the highest marginal income tax rate. An investor whose marginal rate dropped from 45 percent to 40 percent in the current year can claim the loss against the prior year at 45 percent.',
      },
    },
    {
      id: "calculation",
      h2: "Calculating the loss",
      paragraphs: [
        "The loss is the difference between the investor's effective cost base and the disposal proceeds. The cost base is the cash subscription amount reduced by any income tax relief actually claimed. So an SEIS investor who subscribed £100,000 and claimed £50,000 in SEIS relief has a £50,000 cost base. An EIS investor who subscribed £100,000 and claimed £30,000 in EIS relief has a £70,000 cost base.",
        "Disposal proceeds are usually nominal: a few pence per share if the shares are sold to an insolvency practitioner, or zero on a negligible value claim. The full cost base then becomes the available loss. For a £50,000 SEIS cost base and zero proceeds, the available loss is £50,000.",
        "Where the investor claimed CGT reinvestment relief (using a prior capital gain to invest in the SEIS / EIS shares with CGT deferred), the calculation is more complex. The deferred gain comes back into charge on disposal of the shares; the loss relief is calculated on the share cost base separately. Specialists run the dual calculation for investors with reinvestment-relief positions.",
      ],
    },
    {
      id: "timing-rules",
      h2: "Timing rules: when can the loss be used?",
      paragraphs: [
        "An income tax loss arising from share disposal can be set against the investor's general income in (a) the tax year of the loss, (b) the tax year before the loss, or (c) both. The claim is made on the Self-Assessment return for the year of the loss, with an election to carry back to the prior year if relevant.",
        "If the loss is treated as a capital loss instead, it can be set against capital gains in the same tax year first; any excess is carried forward indefinitely against future capital gains. Capital losses cannot be carried back; income tax losses can.",
        "The 'cap' on income tax loss relief applies. The annual cap is the greater of £50,000 or 25 percent of the investor's adjusted total income. For most investors, this cap is comfortably above the available loss on a single SEIS or EIS investment. For high-net-worth investors with multiple failed SEIS / EIS positions in the same tax year, the cap can bite; specialists model the allocation across years.",
      ],
    },
    {
      id: "portfolio-effect",
      h2: "Portfolio-level loss relief planning",
      paragraphs: [
        "Sophisticated SEIS / EIS investors think about loss relief at the portfolio level rather than per-investment. The general principle is that the combined effect of income tax relief at subscription plus loss relief on failures dramatically de-risks the SEIS / EIS allocation, but the timing of loss recognition needs to be managed.",
        "Where an investor expects a portfolio of 10 SEIS investments to produce 6-7 failures and 2-3 successes, the loss relief on failures should be claimed in the tax years that produce the best relief: years with high income tax marginal rate, ideally before the successes are realised (which would push the investor into higher marginal rate territory).",
        "Some investors deliberately stagger their SEIS / EIS commitments to balance loss recognition across tax years. Investing the full annual allocation in one year produces a concentration of potential losses; spreading across 3-4 years smooths the loss-relief opportunity. The investor's specific income profile and the expected timing of the portfolio's failures vs successes drives the optimal pattern.",
      ],
    },
    {
      id: "combining-with-reinvestment-relief",
      h2: "Combining loss relief with reinvestment relief",
      paragraphs: [
        "EIS reinvestment relief (covered in detail in a separate guide) allows an investor to defer a prior capital gain by reinvesting the proceeds into an EIS-qualifying company. When that EIS investment subsequently fails, the deferred gain comes back into charge on the disposal of the EIS shares, but the loss on the EIS shares is also available for relief. The combination of effects can leave the investor better off than if they had paid the original CGT.",
        "For SEIS, the equivalent is reinvestment relief which exempts (rather than defers) 50 percent of the reinvested gain. A failed SEIS investment that benefited from reinvestment relief retains the exemption on disposal; the 50 percent never comes back into charge. Combined with income tax loss relief, this can produce very favourable economics on a failed SEIS investment where reinvestment relief was used.",
        "Specialists model the combined position for investors using reinvestment relief alongside SEIS / EIS. The math is non-trivial and the optimal disposal sequence (which year to crystallise the loss in, whether to make a negligible value claim or wait for actual disposal) depends on the investor's broader tax position.",
      ],
    },
  ],
  citySectionIntro:
    "SEIS / EIS loss relief is a personal-tax calculation; the geographic location of the company or the investor's accountant does not affect the analysis. What matters is the specialist's familiarity with the share-loss-relief rules and the broader tax planning around investor portfolios. The matching service surfaces specialist accountants whose live caseloads include SEIS / EIS investors managing portfolio-level loss recognition.",
};
