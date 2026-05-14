// data/guideContent/qualifyingTrades.ts
// Full content for the SEIS / EIS Qualifying Trades guide.

import { GuideSection } from './rdTaxCredits';

export const qualifyingTradesContent: {
  introduction: string[];
  sections: GuideSection[];
  citySectionIntro: string;
} = {
  introduction: [
    "The qualifying-trade test is where most SEIS and EIS applications either pass cleanly or fail at the first hurdle. The schemes are designed for growth-focused, risk-bearing trading businesses, not for asset-backed investment vehicles or low-risk service businesses. HMRC maintains a list of excluded activities; any company whose main business falls into an excluded category cannot qualify for SEIS or EIS regardless of how attractive the underlying business looks to investors.",
    "This guide covers the qualifying-trade test in practical terms: the structure of the test, the full list of excluded activities and how each is defined, the borderline cases that need careful framing, the substantial-trade test that protects the regime from being used for mostly-non-qualifying businesses, and the practical wording patterns that distinguish a qualifying trade from a non-qualifying one in an Advance Assurance application.",
  ],
  sections: [
    {
      id: "the-test",
      h2: "The structure of the qualifying-trade test",
      paragraphs: [
        "The qualifying-trade test asks whether the company carries on a 'qualifying trade' as its main activity. The legislation defines qualifying trade negatively: a trade is qualifying if it is not on the list of excluded activities. There is no positive list of qualifying trades; if the activity is not excluded, and it is being carried on commercially with a view to profit, it qualifies.",
        "The test is applied at the date of the share issue and continuously throughout the three-year qualifying period. A company that qualifies at issue but later pivots into an excluded activity loses the investor relief retrospectively. Specialists tracking SEIS / EIS portfolios re-test the qualifying activity periodically; in practice, the test rarely needs to be re-run unless the company has materially changed its commercial activity.",
        "Where a company carries on multiple activities, the qualifying-trade test is applied to the trade taken as a whole. A mix of qualifying and non-qualifying activities can still qualify if the non-qualifying activities are not a substantial part. The substantial-trade test (covered below) puts a numerical bound on how much non-qualifying activity is permitted.",
      ],
    },
    {
      id: "excluded-activities",
      h2: "The full list of excluded activities",
      paragraphs: [
        "HMRC's Venture Capital Schemes Manual lists the activities that disqualify a company from SEIS / EIS. The full list is reasonably long; the categories that most commonly trip up founders are the property-related categories, the financial-services categories, and the asset-leasing category. Activities not on the list (e.g. SaaS, biotech, fintech-as-software, hardware, e-commerce, services, food and drink production, content production, manufacturing) qualify.",
      ],
      dataTable: {
        caption: "Excluded activities under SEIS / EIS",
        headers: ["Category", "Examples", "Common confusion"],
        rows: [
          ["Dealing in land or in commodities/futures/shares/securities", "Property trading, day trading, commodity broking", "B2B SaaS for property pros is fine; actually trading property is not"],
          ["Property development", "Build-to-sell residential, commercial development", "Built-to-rent operators sometimes qualify if substantial commercial trade beyond rent"],
          ["Banking, insurance, money-lending, hire purchase financing", "Direct lending, insurance underwriting, FX trading", "Brokerage software that does not take principal positions is generally fine"],
          ["Leasing or letting assets on hire (with narrow exceptions)", "Asset-financing, equipment leasing, vehicle hire", "SaaS-as-subscription is not leasing; physical asset rental is"],
          ["Receiving royalties or licence fees (with narrow exceptions for IP created within the company)", "IP licensing companies, royalty holdcos", "Software licensing of IP created by the company qualifies; pure licensing holdcos do not"],
          ["Legal or accounting services", "Law firms, accountancy practices", "LegalTech or AccountingTech (software for legal/accounting pros) is fine"],
          ["Farming, market gardening, forestry, timber production", "Agriculture, fruit farming, forestry", "Agritech software is fine; the underlying farming is not"],
          ["Coal/steel production (state-aid restrictions)", "Coal mining, steel production", "Renewable-energy generation is generally fine"],
          ["Shipbuilding, coal production, steel production", "Heavy industrial categories", "Specific state-aid rules"],
          ["Operating or managing hotels, guest houses, hostels (with very narrow exceptions)", "Hotels, B&Bs, hostels", "Some 'service-led' hotels with substantial trade beyond accommodation can qualify; the test is restrictive"],
          ["Operating or managing nursing or residential care homes", "Care homes, assisted living", "Domiciliary care software is fine; running the homes is not"],
          ["Providing services to a connected company in an excluded trade", "Service company that exists to serve a parent in an excluded trade", "The test goes through to underlying activity"],
        ],
        source: "ITA 2007 ss 191-199 and HMRC Venture Capital Schemes Manual.",
      },
    },
    {
      id: "property-related",
      h2: "Property-related activities: the largest grey area",
      paragraphs: [
        "Property-related activities are the most common source of SEIS / EIS qualifying-trade failures because the excluded categories (dealing in land, property development, leasing assets) cover the headline commercial pathways for many property businesses. Property development companies (build-to-sell residential or commercial) are clearly excluded. Build-to-rent operators are usually excluded unless they have a substantial trading activity beyond rental income.",
        "Property-tech (software for property professionals, residential or commercial) almost always qualifies. The qualifying trade is the software business; the fact that the customers operate in property does not contaminate the SaaS trade. Marketplace businesses (property listings, lettings platforms) similarly qualify as software / marketplace trades.",
        "The borderline cases are: short-term lets businesses (where the operator runs a fleet of holiday properties), property-management companies (where the company holds property as principal), and any business that derives most of its revenue from rents or land disposals. These need careful structuring and a specialist review before applying for Advance Assurance.",
      ],
      callout: {
        type: 'warning',
        heading: 'Property businesses often need to restructure before SEIS / EIS',
        text: 'A property business with mixed activity (some software, some direct property ownership) often cannot qualify as structured. The clean path is to separate the qualifying trade (the software or marketplace) into a fresh company and run the SEIS / EIS round in that company alone. Asset-holding subsidiaries in the same group can hold the property; the operating company is what raises SEIS / EIS investment.',
      },
    },
    {
      id: "financial-services",
      h2: "Financial services: the fintech grey area",
      paragraphs: [
        "Direct financial services (banking, insurance underwriting, money lending, FX trading) are clearly excluded. Most fintech businesses, despite the regulated framing, are actually software businesses providing tools to consumers or to financial institutions. Software-led fintech generally qualifies even when the company holds regulatory permissions that look like they would put it on the excluded list.",
        "The test is the actual revenue model. A neobank that takes deposits and lends them out is excluded (banking). A challenger 'banking app' that holds an EMI licence to provide payment services but does not lend may qualify as a software business; the EMI permission is incidental to a payments-software trade. A peer-to-peer lending marketplace that takes principal positions is excluded (money lending); a marketplace that purely matches without taking principal may qualify.",
        "Insurance is a similar split. Insurance carriers and brokers taking commission on placed policies are typically excluded (insurance / money-lending categories). InsurTech businesses selling software to insurers, or running claims-handling or risk-assessment platforms without taking insurance risk, generally qualify.",
        "The structural advice for borderline fintech is the same as property: separate the qualifying software activity into a standalone company that raises SEIS / EIS, with regulated or principal-position activity in a sibling company that does not raise SEIS / EIS. Specialists familiar with fintech routinely advise on the corporate-structure split.",
      ],
    },
    {
      id: "substantial-trade-test",
      h2: "The substantial-trade test",
      paragraphs: [
        "Where a company carries on multiple activities (some qualifying, some excluded), the test of whether the trade as a whole qualifies is the substantial-trade test. HMRC's practical interpretation is that the excluded activities must not be a 'substantial part' of the trade, with 'substantial' generally meaning 20 percent or less. The test is applied across multiple metrics: turnover, gross assets used, time spent, and capital employed.",
        "A company that derives 15 percent of its revenue from an excluded activity (say, a small lettings sideline alongside the main trade) may still qualify under the substantial-trade test. A company at 25-30 percent is borderline; HMRC's caseworker will scrutinise the trade allocation. A company at 40 percent or above almost certainly fails.",
        "The substantial-trade test is applied at the time of share issue and across the qualifying period. A company that expands an excluded sideline during the three-year qualifying period (e.g. the lettings sideline grows from 10 percent of revenue to 25 percent) can trigger a clawback even if the original assurance was clean. Specialists monitor the trade-allocation ratio over time for portfolios where the test is borderline.",
      ],
    },
    {
      id: "wording-in-application",
      h2: "Wording the qualifying trade in the Advance Assurance application",
      paragraphs: [
        "Advance Assurance applications are evaluated largely on how the trade is described. The wording patterns that get applications approved quickly: a clear, specific description of what the company does, expressed in commercial terms rather than marketing language; an explicit statement of the revenue model; and a clear distinction (where relevant) between the qualifying activity and any sister activity in a connected entity.",
        "Wording patterns that trigger queries: marketing-style descriptions that obscure the underlying activity ('we are revolutionising the way property professionals work' tells HMRC nothing about whether the trade qualifies); regulated-industry descriptions that imply an excluded category ('FCA-authorised financial services platform' implies banking or insurance); and ambiguous descriptions that could be a qualifying trade or an excluded one ('we provide property solutions to investors and developers').",
        "The disciplined wording approach is to describe the trade in plain English, name the customers, name the revenue model, and confirm what the company does NOT do (where this is relevant to distinguishing from an excluded category). Specialists draft this wording iteratively with the founder; getting it right at the first attempt saves 4-6 weeks of follow-up correspondence.",
      ],
    },
  ],
  citySectionIntro:
    "Qualifying-trade tests are a paper exercise based on the company's commercial activity and HMRC's guidance, so the geographic location of the company or its accountant does not affect the analysis. What matters is the specialist's track record getting borderline trades approved in their specific sector. The matching service surfaces specialist accountants whose live caseloads include the structurally similar borderline trades.",
};
