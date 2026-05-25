// data/blog.ts
// Hub-and-spoke blog for the SEIS/EIS specialist site.
//
// Spokes complement the pillar guides at /guides/[slug] without duplicating
// them. The flagship hub is the guide `seis-eis-guide-uk-startups`; spokes
// carry `hub` + `hubSeriesNumber` so the article route can surface a series
// breadcrumb, an upward link to the pillar guide, and a sibling-spoke list.
//
// No images are wired. `featuredImage` is intentionally omitted from the
// interface, so nothing tries to render a broken/missing image. Decoration on
// the blog routes is gradient/type only, in keeping with the design system.

export interface ContentBlock {
  type: string;          // 'h2' | 'h3' | 'p' | 'list' | 'table'
  text?: string;         // body text for p/h2/h3, or pipe-delimited rows for table
  items?: string[];      // bullet items for list
  headers?: string[];    // optional structured table header cells
  rows?: string[][];     // optional structured table rows
}

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;        // <= 60 chars
  metaDescription: string;  // <= 155 chars
  category: string;
  publishDate: string;      // YYYY-MM-DD
  /** Optional YYYY-MM-DD of the latest substantive revision. Falls back to publishDate. */
  dateModified?: string;
  readingMins?: number;
  excerpt: string;
  /** Slug of the parent hub guide (e.g. 'seis-eis-guide-uk-startups'). */
  hub?: string;
  /** Position within the spoke cluster. Drives "Part X of the series" UI. */
  hubSeriesNumber?: number;
  /** Sibling spoke slugs for in-cluster sidebar linking. */
  relatedSpokes?: string[];
  /**
   * When true, the article is hidden from the public site:
   *  - Excluded from sitemap.xml
   *  - Excluded from blog index listings
   *  - Excluded from generateStaticParams (route returns notFound)
   *  - Page would render with robots: noindex if reached directly
   */
  draft?: boolean;
  content: ContentBlock[];
}

export const blogArticles: BlogArticle[] = [

  // ===========================================================
  // SPOKE 1 of 3 - hub: seis-eis-guide-uk-startups
  // ===========================================================
  {
    slug: 'seis-vs-eis-key-differences-founders-must-know',
    title: 'SEIS vs EIS and the Key Differences Founders Must Know',
    metaTitle: 'SEIS vs EIS: Key Differences for Founders',
    metaDescription: 'SEIS vs EIS compared for UK founders: company age, gross assets, employee limits, how much you can raise, and the investor tax relief each scheme offers.',
    category: 'SEIS & EIS',
    publishDate: '2026-05-25',
    readingMins: 9,
    excerpt: 'SEIS and EIS sit on the same ladder but apply at different stages. This guide compares company age, gross assets, headcount, the amount you can raise, and the relief investors receive.',
    hub: 'seis-eis-guide-uk-startups',
    hubSeriesNumber: 1,
    relatedSpokes: [
      'founders-family-seis-30-percent-connected-person-rule',
      'seis-eis-investment-limits-how-much-you-can-raise',
    ],
    content: [
      { type: 'p', text: 'The Seed Enterprise Investment Scheme (SEIS) and the Enterprise Investment Scheme (EIS) are two HMRC venture capital reliefs that let UK companies offer investors generous income tax and capital gains tax incentives. They are designed to work in sequence rather than competition: SEIS is aimed at the very earliest stage, EIS at the growth stage that follows. This article is part of our SEIS and EIS series and sits underneath the flagship pillar, the complete SEIS and EIS founders guide at /guides/seis-eis-guide-uk-startups/, which you should read first for the full picture.' },
      { type: 'p', text: 'If you have already decided which scheme you are using, two companion articles go deeper on the points founders trip over most. One covers whether founders and their family can benefit from SEIS and the 30% connected-person rule at /blog/founders-family-seis-30-percent-connected-person-rule/. The other sets out exactly how much you can raise under each scheme at /blog/seis-eis-investment-limits-how-much-you-can-raise/. Here we focus on the structural differences that decide which scheme fits your company today.' },

      { type: 'h2', text: 'What SEIS and EIS have in common' },
      { type: 'p', text: 'Before the differences, it helps to fix the shared foundations. Both schemes require ordinary shares to be issued for cash, fully paid up at the time of issue, and carrying no preferential rights to assets on a winding up. Under both, the investor must hold the shares for at least three years from the date of issue, or relief can be withdrawn. Both offer capital gains tax exemption on a qualifying disposal of the shares after that holding period, loss relief if the investment fails, and the ability to carry back relief to the previous tax year.' },
      { type: 'p', text: 'Both schemes also exclude investments structured to give investors a guaranteed exit or protected downside, and both require the company to be carrying on a genuine qualifying trade rather than an excluded activity. The point of the reliefs is to reward genuine risk capital, so anything that removes the risk tends to disqualify the investment. Beyond these common bones, the two schemes diverge sharply on company size, age and the headline relief.' },

      { type: 'h2', text: 'The headline relief, 50% versus 30%' },
      { type: 'p', text: 'The most visible difference is the rate of income tax relief an investor can claim. SEIS gives 50% income tax relief on the amount invested, on up to £200,000 of investment per tax year. EIS gives 30% income tax relief, on a much larger annual ceiling of up to £1,000,000 per tax year, rising to £2,000,000 where at least the amount above £1,000,000 is invested in knowledge-intensive companies.' },
      { type: 'p', text: 'For a founder pitching to angels, the SEIS rate is a powerful tool early on: an investor putting in £20,000 under SEIS can reduce their income tax bill by £10,000, so their net cost is half the headline figure. The same £20,000 under EIS reduces tax by £6,000. The higher SEIS rate reflects the higher risk of backing a company at its very earliest stage.' },

      { type: 'h2', text: 'Company age, the three-year and seven-year tests' },
      { type: 'p', text: 'SEIS is for new companies. To qualify, the company must be carrying on a new qualifying trade that began less than three years before the share issue. EIS allows older companies: the trade must generally have begun no more than seven years before the share issue, extended to ten years for a knowledge-intensive company. The age clock runs from the first commercial sale, not from incorporation, which catches some founders out.' },
      { type: 'p', text: 'There are nuanced rules for companies that received their first risk-finance investment within the relevant window, and for follow-on funding, so the age test is one to confirm with an accountant before you market a round. The broad picture, though, is simple: SEIS for the first three years, EIS for the growth years that follow.' },

      { type: 'h2', text: 'Gross assets and the size of the company' },
      { type: 'p', text: 'SEIS is restricted to small companies. At the time of the SEIS share issue, the company gross assets must not exceed £350,000. EIS allows much larger balance sheets: gross assets must not exceed £15,000,000 immediately before the share issue, and not exceed £16,000,000 immediately after it. These thresholds, like the age tests, are designed to keep each scheme pointed at its intended stage.' },

      { type: 'h2', text: 'Employee headcount limits' },
      { type: 'p', text: 'Headcount is another size gate. An SEIS company must have fewer than 25 full-time-equivalent employees at the date of the share issue. An EIS company must have fewer than 250 full-time-equivalent employees, rising to fewer than 500 for a knowledge-intensive company. Directors count towards these figures, but certain people such as students on vocational training are excluded under the detailed rules.' },

      { type: 'h2', text: 'How much the company can raise' },
      { type: 'p', text: 'The amount a company can raise differs dramatically between the two schemes. A company can raise a maximum of £250,000 in total through SEIS across its lifetime. EIS allows up to £5,000,000 per year and up to £12,000,000 over the company lifetime, rising to £10,000,000 per year and £20,000,000 lifetime for knowledge-intensive companies. All SEIS, EIS and other state-aided risk-finance investment counts towards a combined lifetime limit, so SEIS money raised early reduces the EIS headroom later.' },
      { type: 'p', text: 'A common sequence is to raise the SEIS £250,000 first, then move to EIS for subsequent rounds. The companion article on investment limits at /blog/seis-eis-investment-limits-how-much-you-can-raise/ works through how the two ceilings interact within a single round and across a company lifetime.' },

      { type: 'h2', text: 'Side-by-side comparison' },
      { type: 'p', text: 'The table below summarises the structural differences. Figures reflect HMRC rules for the schemes as commonly applied; always confirm the current thresholds with an accountant before relying on them, because detailed conditions and follow-on rules can change.' },
      {
        type: 'table',
        headers: ['Feature', 'SEIS', 'EIS'],
        rows: [
          ['Income tax relief for investor', '50%', '30%'],
          ['Maximum investor relief per tax year', '£200,000 invested', '£1,000,000 (£2,000,000 with KICs)'],
          ['Company can raise', '£250,000 total', '£5,000,000 per year, £12,000,000 lifetime'],
          ['Maximum company age (trading)', 'Under 3 years', 'Under 7 years (10 for KICs)'],
          ['Gross assets limit', 'Under £350,000', 'Under £15m before, £16m after'],
          ['Employee limit', 'Fewer than 25', 'Fewer than 250 (500 for KICs)'],
          ['Minimum holding period', '3 years', '3 years'],
          ['CGT exemption on disposal', 'Yes', 'Yes'],
        ],
      },

      { type: 'h2', text: 'Can you use both schemes' },
      { type: 'p', text: 'Yes, and many companies do. A company can raise SEIS first and EIS later, and within a single funding round different investors can hold SEIS shares and EIS shares, provided the conditions for each are met. The critical rule is sequencing within a round: SEIS shares must be issued before EIS shares to the extent both reliefs are claimed on the same day of issue, because the SEIS investment has to be in place first. Getting the order and the dates right is a job for an accountant, since a sequencing error can invalidate relief that would otherwise be due.' },

      { type: 'h3', text: 'A typical funding journey' },
      { type: 'p', text: 'A first-time founder might raise £150,000 of SEIS from angels at the idea stage, build a product, then raise £1,500,000 of EIS from a syndicate eighteen months later. The early investors got 50% relief on a higher-risk bet; the later investors got 30% relief on a more developed company. Both stages stayed inside their respective company-level limits, and both sets of investors held for at least three years to keep their relief.' },

      { type: 'h2', text: 'The connected-person rule applies to both' },
      { type: 'p', text: 'One area where the two schemes share a rule but apply it differently is connection. Under both schemes, an investor who, with their associates, holds more than 30% of the company shares, voting rights or rights to assets on a winding up cannot claim relief. There is, however, a key practical difference: SEIS allows a paid director to invest and claim relief, whereas EIS generally does not permit employees to claim, and applies tighter restrictions to directors. The detail of who counts as connected, and how family members are aggregated, is covered in the companion article at /blog/founders-family-seis-30-percent-connected-person-rule/.' },

      { type: 'h2', text: 'Which scheme is right for your round' },
      { type: 'p', text: 'Choosing between SEIS and EIS is rarely a free choice: it is usually dictated by your company age, size and how much you have already raised. If you are under three years trading, below the asset and headcount limits, and have not yet used your SEIS allowance, SEIS gives your investors the strongest incentive and should normally come first. Once you outgrow the SEIS limits, EIS extends the same family of reliefs to larger rounds.' },
      { type: 'p', text: 'Use the checklist below as a quick orientation, then confirm eligibility properly before you market the round.' },
      {
        type: 'list',
        items: [
          'Trading for under three years, fewer than 25 staff, assets under £350,000, raising under £250,000: SEIS is likely the right scheme.',
          'Outgrown one or more SEIS limits, trading under seven years, assets under £15m, raising up to £5m a year: EIS is likely the right scheme.',
          'A knowledge-intensive company: EIS extends the age, headcount and funding limits in your favour.',
          'Unsure which limit you are about to breach: get advance assurance and a structuring review before issuing shares.',
        ],
      },

      { type: 'h2', text: 'Where to go next' },
      { type: 'p', text: 'SEIS and EIS reward founders who plan the sequence early and keep the paperwork clean. The structural differences set out here decide which scheme applies; the companion articles deal with who can benefit and how much you can raise. For the complete picture, including advance assurance and the compliance certificates investors need, start with the flagship pillar at /guides/seis-eis-guide-uk-startups/. Because the rules carry detailed conditions and the figures can change, treat this article as orientation and take professional advice on your specific round.' },
    ],
  },

  // ===========================================================
  // SPOKE 2 of 3 - hub: seis-eis-guide-uk-startups
  // ===========================================================
  {
    slug: 'founders-family-seis-30-percent-connected-person-rule',
    title: 'Can Founders and Their Family Benefit from SEIS, the 30% Connected-Person Rule',
    metaTitle: 'SEIS Founders and Family: 30% Connected Rule',
    metaDescription: 'Can founders and family claim SEIS? How the 30% connected-person rule works, who counts as an associate, and why SEIS treats directors differently to EIS.',
    category: 'SEIS & EIS',
    publishDate: '2026-05-25',
    readingMins: 9,
    excerpt: 'Founders often ask whether they or their family can claim SEIS relief. This guide explains the 30% connected-person rule, who counts as an associate, and where SEIS and EIS diverge.',
    hub: 'seis-eis-guide-uk-startups',
    hubSeriesNumber: 2,
    relatedSpokes: [
      'seis-vs-eis-key-differences-founders-must-know',
      'seis-eis-investment-limits-how-much-you-can-raise',
    ],
    content: [
      { type: 'p', text: 'One of the most common questions founders ask is whether they, or members of their family, can put their own money into the company and claim SEIS relief on it. The answer is a qualified yes for some founders and a firm no for others, and the line is drawn by HMRC connected-person rules. This article is part of our SEIS and EIS series and sits beneath the flagship pillar, the complete SEIS and EIS founders guide at /guides/seis-eis-guide-uk-startups/, which sets out the schemes in full.' },
      { type: 'p', text: 'It pairs with two companion articles. One compares the two schemes in detail, SEIS versus EIS and the key differences founders must know, at /blog/seis-vs-eis-key-differences-founders-must-know/. The other explains how much you can raise under each scheme at /blog/seis-eis-investment-limits-how-much-you-can-raise/. Here we focus on the connection rules that decide whether a founder or relative can claim.' },

      { type: 'h2', text: 'Why connection matters' },
      { type: 'p', text: 'SEIS and EIS exist to channel outside risk capital into young companies. To stop the schemes being used to subsidise a founder backing their own business, HMRC restricts relief for investors who are connected with the company. Connection can arise in two ways: through a financial interest, meaning the size of the shareholding, and through employment, meaning being an employee or, in some cases, a director.' },
      { type: 'p', text: 'If an investor is connected at any time from the date the company was incorporated, or two years before the share issue if later, until three years after the issue, their relief is at risk. The rules look both backwards and forwards, which is why founders need to think about connection across the whole qualifying period, not just on the day they invest.' },

      { type: 'h2', text: 'The 30% financial-interest test' },
      { type: 'p', text: 'The central rule is the 30% test. An investor is connected with the company, and so cannot claim relief, if they, together with their associates, hold or are entitled to acquire more than 30% of any of the following: the ordinary share capital, the issued share capital, the voting rights, or the rights to assets on a winding up. The test is applied to the combined holding of the investor and their associates, not to each person separately.' },
      { type: 'p', text: 'The phrase "entitled to acquire" matters. It captures options, convertible instruments and other rights to shares, not just shares already held. A founder sitting on a large option pool, or with convertible loan notes, may breach the 30% threshold even if their issued shareholding looks modest. This is one reason cap-table planning should happen before, not after, a round.' },

      { type: 'h3', text: 'A worked example' },
      { type: 'p', text: 'Suppose a company has 100,000 ordinary shares. A founder holds 25,000 and their spouse holds 10,000. Because spouses are associates, their holdings are aggregated to 35,000, which is 35% of the share capital. Both are therefore connected and neither can claim SEIS or EIS relief on any further shares they subscribe for, because the combined holding already exceeds 30%. Splitting the investment between them does not help, since associates are added together.' },

      { type: 'h2', text: 'Who counts as an associate' },
      { type: 'p', text: 'The definition of associate is wide and is where families are caught. For these rules, associates include a spouse or civil partner, parents, grandparents and other ancestors, children, grandchildren and other lineal descendants, and business partners. Trustees of a settlement where the investor is a settlor or beneficiary can also be associates.' },
      { type: 'p', text: 'It is just as important to note who is not an associate. The list below sets out family members whose holdings are aggregated with the investor and those whose are not.' },
      {
        type: 'list',
        items: [
          'Counted as associates: spouse or civil partner, parents and grandparents, children and grandchildren, business partners, and certain trustees.',
          'Not counted as associates: brothers and sisters (siblings), uncles and aunts, nephews and nieces, and cousins.',
          'Practical effect: a sibling can often invest and claim relief where a parent or spouse cannot, because siblings are outside the associate definition.',
        ],
      },
      { type: 'p', text: 'Because siblings sit outside the associate net, a brother or sister investing in a founder company can frequently claim relief even though a parent in the same family cannot. This is a genuine planning point, but it must be handled honestly: the investment has to be real risk capital on commercial terms, not a device.' },

      { type: 'h2', text: 'The employment test, where SEIS and EIS diverge' },
      { type: 'p', text: 'The second route to connection is employment, and this is the single biggest difference between the two schemes for founders. Under EIS, an employee of the company is generally connected and cannot claim relief, and a director can usually only claim under restricted conditions. Under SEIS, the rules are more generous: a director, including a paid director, can invest and claim SEIS relief, provided the 30% financial-interest test is not breached.' },
      { type: 'p', text: 'This makes SEIS uniquely useful to founders who are also directors. A founder-director who holds 30% or less of the company can put their own cash into the SEIS round and claim 50% income tax relief on it, something EIS would usually deny them. The catch is the 30% ceiling: most founders hold far more than 30% at the seed stage, which is why this works for some founder-directors and not others.' },

      { type: 'h2', text: 'SEIS and EIS connection rules compared' },
      {
        type: 'table',
        headers: ['Situation', 'SEIS', 'EIS'],
        rows: [
          ['Holds more than 30% with associates', 'Cannot claim', 'Cannot claim'],
          ['Paid director investing', 'Can claim if under 30%', 'Generally cannot claim'],
          ['Employee investing', 'Cannot claim', 'Cannot claim'],
          ['Sibling of founder investing', 'Can claim if under 30%', 'Can claim if under 30%'],
          ['Spouse aggregated with founder', 'Combined holding tested against 30%', 'Combined holding tested against 30%'],
        ],
      },

      { type: 'h2', text: 'The "entitled to acquire" trap' },
      { type: 'p', text: 'It is worth dwelling on the phrase "entitled to acquire", because it is where careful-looking cap tables come unstuck. The 30% test does not only count shares a person already holds; it counts shares they have a right to acquire. That sweeps in unexercised share options, warrants, convertible loan notes and any other instrument that converts into equity. A founder-director who holds 28% of issued shares but has options over a further 5% is treated as entitled to 33% and is therefore connected, even though they have not exercised a single option.' },
      { type: 'p', text: 'The same logic applies to associates. If a founder holds 25% and their spouse holds options over 8%, the aggregated entitlement is 33% and both are connected. Anyone planning to claim relief should map not just the current share register but every option, warrant and convertible that could be called on, and check the combined figure against 30% before issuing the relief-bearing shares.' },

      { type: 'h2', text: 'Timing and the qualifying period' },
      { type: 'p', text: 'Connection is tested across a window, not a single day. For the financial-interest test, the relevant period runs from incorporation, or two years before the share issue if that is later, to three years after the issue. An investor who becomes connected at any point in that window, for example by acquiring more shares or options that push them over 30%, can lose relief retrospectively. Founders raising follow-on rounds should model how each new issue affects existing investors connection status.' },
      { type: 'p', text: 'The forward-looking element is the one founders most often overlook. A relative who claims relief on a clean 20% holding can still lose it if, eighteen months later, a bonus issue or a further subscription pushes their aggregated holding over 30% inside the three-year window. The lesson is to treat each new share issue as a moment to re-test the connection status of everyone who has already claimed, not just the new investors coming in.' },

      { type: 'h2', text: 'Common mistakes that cost relief' },
      { type: 'p', text: 'Most connection problems are avoidable with planning. The errors below recur often enough that they are worth checking against your own cap table before you issue shares.' },
      {
        type: 'list',
        items: [
          'Aggregating spouses by accident: a couple each subscribing for shares whose combined holding tips over 30%.',
          'Forgetting options: a founder under 30% on issued shares but over 30% once unexercised options are counted.',
          'Treating a director investment as automatically EIS-eligible, when EIS usually denies directors relief and SEIS would have allowed it.',
          'Letting a later round push an early investor over 30%, withdrawing relief they had already claimed.',
        ],
      },

      { type: 'h2', text: 'The interaction with the 30% company limits' },
      { type: 'p', text: 'There is a subtle interaction between the personal connection rules and the company-level limits that founders should keep in view. The connection rules cap an individual investor relief; the company limits cap the total the company can raise. A founder-director who is under 30% and claims SEIS on their own subscription still uses up part of the company £250,000 SEIS allowance. So a founder investing personally is not free money: it consumes scheme headroom that an outside angel could otherwise have taken. The companion article on the SEIS and EIS investment limits at /blog/seis-eis-investment-limits-how-much-you-can-raise/ sets out those ceilings in detail.' },

      { type: 'h2', text: 'Documenting it properly' },
      { type: 'p', text: 'Where a founder or family member does claim relief, the paperwork has to stand up. The shares must be ordinary shares issued for cash, fully paid at issue, with no preferential rights, and the subscription has to be on the same commercial terms as any other investor in the round. HMRC can and does query connected-party investments, so the company records, board minutes and the SEIS1 or EIS1 compliance statement need to reflect a genuine arm length subscription. An accountant experienced with the schemes will make sure the connection position is assessed before the shares are issued, not discovered afterwards.' },

      { type: 'h2', text: 'What this means for founders' },
      { type: 'p', text: 'In short, founders can sometimes benefit from SEIS personally, most often as founder-directors holding 30% or less, and family members can sometimes invest depending on how closely related they are. The 30% test and the associate definition are unforgiving, and they interact with options, convertibles and follow-on rounds in ways that are easy to get wrong. Because the rules are detailed and the cost of breaching them is the loss of relief, model your cap table and take professional advice before any founder or relative subscribes for shares.' },
      { type: 'p', text: 'For the full framework, read the flagship pillar at /guides/seis-eis-guide-uk-startups/, and see the companion articles on the scheme differences and the investment limits to complete the picture.' },
    ],
  },

  // ===========================================================
  // SPOKE 3 of 3 - hub: seis-eis-guide-uk-startups
  // ===========================================================
  {
    slug: 'seis-eis-investment-limits-how-much-you-can-raise',
    title: 'How Much You Can Raise, the SEIS and EIS Investment Limits Explained',
    metaTitle: 'SEIS and EIS Investment Limits Explained',
    metaDescription: 'How much can you raise under SEIS and EIS? The £250,000 SEIS cap, the £5m annual and £12m lifetime EIS limits, KIC uplifts, and how the limits interact.',
    category: 'SEIS & EIS',
    publishDate: '2026-05-25',
    readingMins: 9,
    excerpt: 'SEIS and EIS each cap how much a company can raise. This guide explains the £250,000 SEIS limit, the EIS annual and lifetime ceilings, the knowledge-intensive uplifts, and how they combine.',
    hub: 'seis-eis-guide-uk-startups',
    hubSeriesNumber: 3,
    relatedSpokes: [
      'seis-vs-eis-key-differences-founders-must-know',
      'founders-family-seis-30-percent-connected-person-rule',
    ],
    content: [
      { type: 'p', text: 'How much you can raise is one of the first questions any founder asks about SEIS and EIS, and it has more moving parts than the headline numbers suggest. There are limits on what the company can raise, separate limits on what an individual investor can claim relief on, and rules about how SEIS, EIS and other state-aided funding count against a combined lifetime ceiling. This article is part of our SEIS and EIS series, sitting beneath the flagship pillar, the complete SEIS and EIS founders guide at /guides/seis-eis-guide-uk-startups/.' },
      { type: 'p', text: 'It works alongside two companion articles: SEIS versus EIS and the key differences founders must know, at /blog/seis-vs-eis-key-differences-founders-must-know/, and the explanation of whether founders and family can benefit under the 30% connected-person rule, at /blog/founders-family-seis-30-percent-connected-person-rule/. Read together they cover which scheme applies, who can invest, and, here, how much can flow through.' },

      { type: 'h2', text: 'Two kinds of limit' },
      { type: 'p', text: 'It is essential to separate two different ceilings that founders often confuse. The first is the company limit: the total amount the company is allowed to raise under each scheme. The second is the investor limit: the maximum amount on which a single investor can claim income tax relief in a tax year. A round can be constrained by either, so you need to track both when you size and price it.' },

      { type: 'h2', text: 'The SEIS company limit, £250,000' },
      { type: 'p', text: 'A company can raise a maximum of £250,000 in total through SEIS. This is a lifetime cap, not an annual one, so once a company has raised £250,000 of SEIS it cannot raise any more under the scheme, ever. The cap covers all SEIS investment combined, across every SEIS round the company runs.' },
      { type: 'p', text: 'Because the SEIS cap is modest and one-off, most founders use it in a single seed round to maximise the 50% relief on offer to early angels, then graduate to EIS for anything larger. Spending the SEIS allowance carefully matters, since it cannot be replenished.' },

      { type: 'h2', text: 'The EIS company limits, annual and lifetime' },
      { type: 'p', text: 'EIS is far larger. A company can raise up to £5,000,000 per year through EIS and other state-aided risk-finance investment, and up to £12,000,000 over its lifetime. For knowledge-intensive companies the limits are higher: up to £10,000,000 per year and £20,000,000 over the lifetime. The annual figure is measured over a rolling twelve-month period, not a tax year, so the timing of share issues matters.' },
      { type: 'p', text: 'Crucially, the lifetime limit is a combined figure. SEIS investment, EIS investment, Social Investment Tax Relief and certain other risk-finance state aid all count towards the same lifetime ceiling. So the £250,000 of SEIS a company raises early reduces the headroom available under the EIS lifetime limit later.' },

      { type: 'h2', text: 'Company-level limits at a glance' },
      {
        type: 'table',
        headers: ['Limit', 'SEIS', 'EIS', 'EIS (knowledge-intensive)'],
        rows: [
          ['Per year', 'n/a (£250,000 is total)', '£5,000,000', '£10,000,000'],
          ['Lifetime', '£250,000', '£12,000,000', '£20,000,000'],
          ['Counts towards combined lifetime cap', 'Yes', 'Yes', 'Yes'],
        ],
      },

      { type: 'h2', text: 'The investor limits' },
      { type: 'p', text: 'Separate from the company ceilings, each investor faces an annual cap on the amount of investment they can claim income tax relief on. Under SEIS, an investor can claim 50% relief on up to £200,000 invested per tax year. Under EIS, an investor can claim 30% relief on up to £1,000,000 invested per tax year, rising to £2,000,000 per tax year where at least the amount above £1,000,000 is invested in knowledge-intensive companies.' },
      { type: 'p', text: 'These are personal limits, so they apply across all the SEIS or EIS investments an individual makes in a year, not per company. An angel who has already used their full SEIS allowance elsewhere cannot claim further SEIS relief on your round that year, even though your company still has SEIS headroom.' },

      { type: 'h2', text: 'How carry-back affects timing' },
      { type: 'p', text: 'Both schemes allow an investor to carry back relief to the previous tax year, treating the shares as if issued in that earlier year. This effectively lets an investor use two years of personal allowance across a single investment, which can matter for a large subscription late in a tax year. Carry-back is an investor-side timing tool and does not change the company-level limits, but it is worth flagging to investors because it can make a larger ticket affordable for them.' },

      { type: 'h2', text: 'How SEIS and EIS limits interact in a round' },
      { type: 'p', text: 'When a company runs SEIS and EIS together, sequencing and dates govern the limits. SEIS shares must be issued before EIS shares where both reliefs are claimed, because the SEIS investment must be in place first. The SEIS raised counts against the £250,000 SEIS cap and the combined lifetime cap; the EIS raised counts against the EIS annual and lifetime caps.' },
      { type: 'p', text: 'A simple way to picture a blended seed round is below. The figures are illustrative and assume the company is within all eligibility tests.' },
      {
        type: 'list',
        items: [
          'Issue £150,000 of SEIS shares first: counts towards the £250,000 SEIS cap, investors claim 50% relief.',
          'Then issue £600,000 of EIS shares: counts towards the £5m EIS annual cap, investors claim 30% relief.',
          'Total raised in the round: £750,000, with SEIS headroom of £100,000 left for a future SEIS issue.',
          'All £750,000 also counts towards the company combined £12m lifetime cap.',
        ],
      },

      { type: 'h2', text: 'The seven-year and ten-year funding windows' },
      { type: 'p', text: 'The company limits do not sit in isolation; they are tied to age windows. For EIS, the company first risk-finance investment must generally be received within seven years of its first commercial sale, ten years for a knowledge-intensive company. Once that initial investment is made inside the window, follow-on funding can continue beyond it, but the first relief-bearing money has to land in time. A company that waits too long after its first sale to raise EIS can find the door closed even though it is still well under the financial limits. This is why founders who expect to use EIS plan the first round deliberately rather than drifting into it.' },

      { type: 'h2', text: 'The knowledge-intensive uplifts' },
      { type: 'p', text: 'Knowledge-intensive companies (KICs) get more generous limits across the board because they typically need more capital over a longer period. A KIC can raise up to £10,000,000 of EIS per year and £20,000,000 over its lifetime, can be up to ten years old at the time of the share issue rather than seven, and can have up to 500 employees rather than 250. Investors in KICs can also claim EIS relief on up to £2,000,000 a year, provided the amount above £1,000,000 goes into KICs. Whether a company meets the KIC conditions is a technical test best confirmed with an accountant.' },

      { type: 'h2', text: 'Practical planning points' },
      { type: 'p', text: 'The limits are generous, but they reward planning and punish improvisation. The points below are the ones that most often shape how founders size and stage their rounds.' },
      {
        type: 'list',
        items: [
          'Use the SEIS £250,000 early, when the 50% relief is most valuable, rather than dribbling it across several rounds.',
          'Remember the EIS annual limit is a rolling twelve-month figure, so two large issues close together can breach it.',
          'Track the combined lifetime cap: SEIS plus EIS plus other state aid all count against the £12m (or £20m for KICs) ceiling.',
          'Confirm each investor has personal allowance left, since the company cap and the investor cap are independent.',
          'Get advance assurance before marketing, so investors can rely on the eligibility of the round.',
        ],
      },

      { type: 'h2', text: 'When you are likely to hit a limit' },
      { type: 'p', text: 'Most early companies hit the SEIS cap first, simply because £250,000 is reached quickly in a successful seed round. The EIS annual limit becomes the binding constraint for fast-scaling companies raising several million a year, and the lifetime limit eventually caps total EIS-backed fundraising. Knowing which ceiling you are approaching tells you when to switch schemes, when to pace your issues across twelve-month windows, and when EIS fundraising must give way to non-relief capital.' },

      { type: 'h2', text: 'How the limits affect your valuation and dilution' },
      { type: 'p', text: 'The investment limits also shape the commercial shape of a round, not just its tax treatment. Because the SEIS cap is a hard £250,000, a founder cannot simply raise more SEIS to avoid dilution; once the cap is reached, further capital must come from EIS or non-relief sources at whatever valuation the market supports. Sizing the SEIS portion against the equity you are willing to give up at seed valuations is a balancing act, and it interacts with the connection rules covered in the companion article at /blog/founders-family-seis-30-percent-connected-person-rule/. Treat the limits as constraints on the cap table as much as on the tax position.' },

      { type: 'h2', text: 'Getting the numbers right' },
      { type: 'p', text: 'The investment limits are the arithmetic backbone of any SEIS or EIS round, and the cost of getting them wrong is investors losing relief they were promised. The company caps, the investor caps and the combined lifetime ceiling all have to be tracked together, and the interaction with sequencing, carry-back and the KIC uplifts adds further detail. Because the figures and conditions can change and the rules are intricate, use this article as a map and confirm the specifics with an accountant before you set the size of your round.' },
      { type: 'p', text: 'For the complete framework, including advance assurance and the compliance certificates investors need to claim, read the flagship pillar at /guides/seis-eis-guide-uk-startups/, and see the companion articles on the scheme differences and the connected-person rules.' },
    ],
  },

];

/** Find a published or draft article by slug. */
export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}
