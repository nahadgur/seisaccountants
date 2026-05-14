// data/guideContent/reinvestmentRelief.ts
// Full content for the EIS Reinvestment Relief / SEIS Reinvestment Relief guide.

import { GuideSection } from './rdTaxCredits';

export const reinvestmentReliefContent: {
  introduction: string[];
  sections: GuideSection[];
  citySectionIntro: string;
} = {
  introduction: [
    "Reinvestment relief is the SEIS / EIS mechanism that allows an investor to defer or exempt a chargeable capital gain by reinvesting the proceeds into qualifying SEIS or EIS shares. For a higher-rate investor sitting on a large unrealised capital gain (typically property, business asset, or share sale), reinvestment relief is one of the few legal routes to reduce or defer the CGT liability without altering the underlying disposal.",
    "This guide covers both flavours of reinvestment relief: EIS reinvestment relief (which defers the gain until the EIS shares are disposed of) and SEIS reinvestment relief (which exempts 50 percent of the gain permanently, with no deferral mechanism). The two reliefs have different rules, different timing constraints, and different interactions with the underlying SEIS / EIS regime. This guide explains both end-to-end with worked examples.",
  ],
  sections: [
    {
      id: "eis-reinvestment-relief",
      h2: "EIS reinvestment relief: deferring a chargeable gain",
      paragraphs: [
        "EIS reinvestment relief allows an investor with a chargeable capital gain to reinvest the gain (or part of it) into EIS-qualifying shares and defer the CGT charge until the EIS shares are disposed of. There is no upper limit on the gain that can be deferred (unlike the £1m annual subscription cap for EIS income tax relief, which only applies to that relief). The deferral can be substantial: a £2m capital gain from selling a business can be fully deferred by reinvesting £2m into EIS shares.",
        "The deferral is exactly that: the gain is not exempted, just postponed. When the EIS shares are eventually disposed of, the deferred gain comes back into charge, calculated at the rates and rules in force at that later date. If the EIS investment is held until the investor's death, the deferred gain is permanently exempt because death is not a chargeable disposal for CGT purposes. This is sometimes used as part of an estate-planning strategy by older investors with large unrealised gains.",
        "The reinvestment must occur within a window: one year before the original gain or three years after. The shares must be EIS-qualifying when issued (subject to the usual qualifying-trade and structural tests). The investor must hold the shares for at least three years to retain the deferral; early disposal before three years triggers the deferred gain to come back into charge in addition to whatever happens to the EIS shares.",
      ],
      callout: {
        type: 'data',
        heading: 'EIS reinvestment relief usage',
        text: 'HMRC published data shows that approximately 15-20 percent of EIS subscriptions each year use the reinvestment relief mechanism. This concentration of capital is typically from investors with substantial recent business or property disposals; the gain-deferral effect is the primary driver of the investment rather than the income-tax-relief mechanism that motivates standard angel investors.',
      },
    },
    {
      id: "seis-reinvestment-relief",
      h2: "SEIS reinvestment relief: 50 percent permanent exemption",
      paragraphs: [
        "SEIS reinvestment relief works differently. Where an investor reinvests a chargeable gain into SEIS-qualifying shares, 50 percent of the gain reinvested is exempted from CGT permanently. The other 50 percent remains chargeable in the original disposal year. There is no deferral mechanism; the relief is binary (50 percent exempted, 50 percent charged in the original year).",
        "The SEIS reinvestment relief is capped at £200,000 per tax year (matching the SEIS subscription limit per investor). So an investor with a £500,000 capital gain can reinvest up to £200,000 into SEIS shares in the same tax year, exempting £100,000 of the gain permanently. The remaining £400,000 of the gain is taxable in the original disposal year.",
        "The economics of SEIS reinvestment relief are very favourable. The investor saves CGT on £100,000 of the gain (typical higher-rate CGT saving: £24,000 at the 24 percent residential rate, £20,000 at the 20 percent main rate). The investor also gets the standard SEIS income tax relief of 50 percent on the £200,000 subscription (£100,000). Combined relief on a £200,000 SEIS subscription using reinvestment relief can exceed £124,000 in the same tax year.",
      ],
    },
    {
      id: "worked-example-eis",
      h2: "Worked example: EIS reinvestment relief in practice",
      paragraphs: [
        "Consider an investor who sells a business in 2024-25 for a £1,500,000 chargeable gain. At 20 percent CGT (assuming main rate; higher rate or BADR rates would change the figures), the immediate CGT liability is £300,000. The investor decides to reinvest £1,000,000 of the gain into EIS-qualifying shares spread across a portfolio of seed and growth companies in 2025-26.",
        "Step 1: the £1,000,000 reinvestment defers £1,000,000 of the original gain. The chargeable gain in 2024-25 reduces from £1,500,000 to £500,000, saving £200,000 of CGT in that year. The deferred gain ($1,000,000) attaches to the EIS shares.",
        "Step 2: the investor also claims standard EIS income tax relief on the £1,000,000 subscription (30 percent of £1,000,000 = £300,000 income tax saved, subject to having sufficient income tax liability to absorb the relief).",
        "Step 3: in year 4 or later, the investor disposes of the EIS shares. If the shares have grown to £1,500,000, the disposal triggers: the £1,000,000 deferred gain comes back into charge, plus a £500,000 gain on the EIS shares themselves (CGT-exempt because of the EIS 3-year holding). Net CGT on disposal: £200,000 (on the deferred gain reinstated at 20 percent, assuming rates unchanged). If the shares have lost value and are disposed of at £500,000, the deferred gain still comes back into charge (£1m) but the loss on the EIS shares (£500,000 cost base minus £500,000 proceeds, so nil loss in cash terms but the £300k income tax relief stays clean). The investor has crystallised £200,000 CGT on the deferred gain on a failed investment, but saved £300,000 of income tax along the way.",
      ],
    },
    {
      id: "worked-example-seis",
      h2: "Worked example: SEIS reinvestment relief in practice",
      paragraphs: [
        "Consider an investor with a £400,000 chargeable gain in 2024-25. They reinvest £200,000 (the SEIS annual limit) into SEIS-qualifying shares in the same tax year. The reinvestment exempts 50 percent of the £200,000 reinvested, i.e. £100,000 of the gain becomes permanently CGT-exempt.",
        "Year-end CGT calculation: original gain £400,000, less SEIS reinvestment exemption £100,000, equals chargeable gain of £300,000. CGT at 20 percent (main rate, assuming higher-rate taxpayer with no BADR): £60,000. Compare to £80,000 CGT in the no-reinvestment case; the SEIS reinvestment relief has saved £20,000 of CGT.",
        "On top of that, the £200,000 SEIS subscription itself attracts standard SEIS income tax relief of 50 percent, i.e. £100,000 of income tax saved (subject to sufficient income tax liability). So the £200,000 reinvestment has produced £20,000 of CGT relief plus £100,000 of income tax relief in the same tax year: a combined £120,000 of immediate tax benefit on a £200,000 investment. Even if the SEIS investment fails, the loss relief mechanism then kicks in (covered in the dedicated loss relief guide).",
      ],
    },
    {
      id: "timing-rules",
      h2: "Timing rules: when reinvestment must occur",
      paragraphs: [
        "EIS reinvestment relief: the EIS shares must be issued within a four-year window around the original gain: one year before the gain or three years after. So a gain crystallising in March 2024 can be deferred by EIS shares issued any time from March 2023 to March 2027.",
        "SEIS reinvestment relief: stricter. The SEIS shares must be issued in the same tax year as the gain. There is no prior-year option and no extended forward window. An investor with a gain in 2024-25 must subscribe for SEIS shares in 2024-25 to use the relief.",
        "The relief is claimed on the investor's Self-Assessment return for the original disposal year. For EIS reinvestment relief on shares issued in a later tax year, the return for the disposal year is amended once the shares are issued and the SEIS3 / EIS3 certificate is received. Specialists typically defer filing the return for the disposal year until the EIS shares are issued and the certificate is in hand.",
      ],
      callout: {
        type: 'warning',
        heading: 'Reinvestment relief is independent of the income-tax-relief subscription cap',
        text: 'The £200,000 SEIS / £1m EIS income tax relief caps apply only to the income tax relief itself. EIS reinvestment relief has no upper limit on the gain that can be deferred (so an investor can defer £5m of gain by subscribing £5m to EIS, even though only £1m of that subscription gets income tax relief). SEIS reinvestment relief is capped at £200,000 of subscription per year, but the exemption of £100,000 of gain attached to that £200,000 subscription is independent of how the income tax relief is calculated.',
      },
    },
    {
      id: "qualifying-conditions",
      h2: "Qualifying conditions for reinvestment relief",
      paragraphs: [
        "Reinvestment relief is contingent on the investor and the share issue meeting the standard SEIS / EIS qualifying conditions. If the SEIS / EIS qualification fails (because the company is in an excluded trade, or the investor is connected, or the share class is wrong), the reinvestment relief is also lost. The investor returns to the original CGT position as if no relief was claimed.",
        "The 'no value received' rule applies to reinvestment relief in the same way as to standard SEIS / EIS. An investor who receives value back from the company during the three-year qualifying period loses both the income tax relief and the reinvestment relief, with consequent recalculation of the prior-year tax return.",
        "EIS reinvestment relief specifically: the EIS shares must be held for at least three years to maintain the deferral. Disposal before three years triggers the deferred gain to come back into charge in the year of disposal, in addition to whatever happens to the EIS shares themselves. Specialists model the holding-period commitment carefully when advising clients on using reinvestment relief.",
      ],
    },
    {
      id: "estate-planning-use",
      h2: "Estate planning and the death-exempt deferral",
      paragraphs: [
        "EIS reinvestment relief has an unusual estate-planning property: if the EIS shares are held until the investor's death, the deferred gain is permanently exempt because death is not a chargeable disposal. The investor's estate inherits the shares at probate value with a fresh CGT cost base, and the deferred gain disappears.",
        "This produces an unusual planning strategy for older investors with large unrealised gains. Reinvesting the gain into EIS shares defers the CGT; holding the EIS shares until death permanently exempts the gain. The EIS shares also qualify for Business Property Relief from IHT after two years of holding (subject to the usual conditions), so a properly-structured EIS holding can be both CGT-exempt and IHT-exempt at the investor's death.",
        "The strategy requires the EIS shares to actually qualify throughout the holding period; a corporate event that disqualifies the EIS shares (acquisition, share-rights changes) before death can crystallise the deferred gain into the estate. Specialists with estate-planning experience model the long-term holding risks against the tax benefit.",
      ],
    },
  ],
  citySectionIntro:
    "Reinvestment relief is a tax calculation done on the investor's Self-Assessment return; the geographic location of the investor's accountant does not affect the mechanics. What matters is the specialist's experience modelling the combined CGT + income tax + loss-relief picture across the qualifying period. The matching service surfaces specialist accountants whose live caseloads include reinvestment-relief planning for investors with substantial recent disposals.",
};
