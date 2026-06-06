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
  /** Set false on new drafts; a human sets true after reading to release it to the drip. */
  reviewed?: boolean;
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

  // ===========================================================
  // SPOKE 4 of 6 - hub: seis-eis-guide-uk-startups (DRAFT)
  // ===========================================================
  {
    slug: 'seis-eis-anti-avoidance-tax-motive-trading-substance',
    title: 'SEIS and EIS Anti-Avoidance: The Risk-to-Capital Condition Explained',
    metaTitle: 'SEIS and EIS Anti-Avoidance: Risk-to-Capital',
    metaDescription: 'How the SEIS and EIS risk-to-capital condition blocks tax-motivated investments: the growth and risk tests, and how HMRC applies them.',
    category: 'SEIS & EIS',
    publishDate: '2026-06-01',
    readingMins: 10,
    excerpt: 'HMRC can refuse SEIS or EIS relief if a scheme looks engineered for tax. This guide walks through the no-main-purpose test, the risk-to-capital condition and the GAAR backdrop.',
    hub: 'seis-eis-guide-uk-startups',
    hubSeriesNumber: 4,
    relatedSpokes: [
      'seis-eis-three-year-holding-period-disposal-events',
      'seis-eis-founder-multiple-roles-director-employee-investor',
      'seis-vs-eis-key-differences-founders-must-know',
      'founders-family-seis-30-percent-connected-person-rule',
      'seis-eis-investment-limits-how-much-you-can-raise',
    ],
    draft: true,
    content: [
      { type: 'p', text: 'SEIS and EIS are deliberately generous, and that generosity is policed by a layer of anti-avoidance rules designed to make sure the relief flows to genuine risk capital backing real trading companies. The rules ask whether a transaction looks like investment in a young business or whether it looks like a tax-driven arrangement dressed up as one. This article is part of our SEIS and EIS series and sits beneath the flagship pillar, the complete SEIS and EIS founders guide at /guides/seis-eis-guide-uk-startups/, which is the right starting point if you have not yet read it.' },
      { type: 'p', text: 'It pairs with two companion articles in the same drop. The first walks through the three-year holding period and the disposal events that can withdraw relief at /blog/seis-eis-three-year-holding-period-disposal-events/. The second covers founders holding several roles at once, where the director, employee and investor lines blur, at /blog/seis-eis-founder-multiple-roles-director-employee-investor/. Together the three articles cover the motive test, the holding test and the role test that HMRC apply when they look at a SEIS or EIS round.' },

      { type: 'h2', text: 'Why HMRC police motive at all' },
      { type: 'p', text: 'The schemes exist to subsidise genuine risk-taking by outside investors in young, trading companies. If an arrangement looks like a way to convert other taxable income into reliefed investment, or to take a cash return out of the company while wearing the badge of an SEIS or EIS investor, the policy purpose collapses. The anti-avoidance rules therefore sit alongside every other eligibility condition: even if the company, the shares and the investor all tick the structural boxes, relief can still be denied if the arrangement is judged to have tax avoidance as a main purpose.' },
      { type: 'p', text: 'In practice, that means founders cannot rely on a checklist alone. A round that satisfies the gross assets test, the age test and the connection test can still fail if the wider picture suggests the investment is engineered to extract a tax outcome rather than to fund a trading business. The motive question is the lens through which the rest of the conditions are read.' },

      { type: 'h2', text: 'The "no main purpose of tax avoidance" condition' },
      { type: 'p', text: 'At the heart of the SEIS rules in ITA 2007 Part 5A, and the EIS rules in ITA 2007 Part 5, is a condition that the shares must not have been issued, and the investment must not have been made, as part of a scheme or arrangement the main purpose, or one of the main purposes, of which is the avoidance of tax. The condition is stated broadly on purpose, so that arrangements that pass the mechanical tests can still be caught.' },
      { type: 'p', text: 'Two parts of the wording matter. The first is the word "main": HMRC are not asking whether tax was considered, since tax is openly the point of the relief. They are asking whether tax avoidance was a primary driver of how the deal was structured. The second is the word "scheme or arrangement": the test looks at the whole picture, not just the share issue in isolation. Side agreements, related transactions and circular flows of money are all in scope.' },

      { type: 'h2', text: 'The risk-to-capital condition' },
      { type: 'p', text: 'The risk-to-capital condition was introduced to push the schemes back towards genuine growth investment. It asks two principal-based questions about the issuing company at the time of the share issue. First, does the company have objectives to grow and develop its trade in the long term. Second, is there a significant risk that the investor will suffer a loss of capital that is greater than any net return.' },
      { type: 'p', text: 'A company that fails either limb does not qualify, even if every other box is ticked. The test was designed to filter out asset-backed arrangements offering investors a soft landing, structured exits or preferential returns. It is a principles-based test, so HMRC look at the substance of the company and the deal, not just the legal form of the share class.' },

      { type: 'h2', text: 'Common patterns that draw HMRC scrutiny' },
      { type: 'p', text: 'A handful of structures recur in HMRC enquiries because they each undermine one of the rules above. The list below is not exhaustive, but it captures the shapes most likely to attract a question.' },
      {
        type: 'list',
        items: [
          'Investor money that loops back to the investor through related-party arrangements, loans or service agreements.',
          'Preferential shares that look ordinary but carry preferred dividends, redemption rights or priority on a winding up.',
          'Side letters promising a guaranteed exit, a put option, a buy-back or any other downside protection.',
          'Companies with little trading substance whose main asset is a tax-attractive licence, lease or income stream.',
          'Pre-arranged disposals timed to crystallise CGT exemption without genuine commercial reason.',
          'Investment in a company that depends largely on a related party for its trade or its customers.',
        ],
      },

      { type: 'h2', text: 'The preferential-rights trap' },
      { type: 'p', text: 'Both schemes require the shares to be ordinary shares carrying no present or future preferential right to dividends and no preferential right to assets on a winding up. The rule is stricter than founders expect, because it bites on rights that might never be exercised. A right to a cumulative dividend, a fixed-rate dividend, a priority distribution on liquidation, or any priority over other shareholders, can fail the test even if it has not yet paid out anything.' },
      { type: 'p', text: 'This is one of the most common technical traps for first-time founders who have copied a share class from a US-style term sheet. Preferred shares with liquidation preferences, common in venture deals abroad, do not qualify. The fix is to use plain ordinary shares for SEIS and EIS investors, even where other classes exist for non-relief capital. Where a company has a more complicated capital structure, the share class used for the relief round needs to be checked line by line.' },

      { type: 'h2', text: 'The GAAR backdrop' },
      { type: 'p', text: 'Sitting above the scheme-specific rules is the General Anti-Abuse Rule (GAAR), introduced in the Finance Act 2013. The GAAR can counter arrangements that would otherwise produce a tax advantage but that cannot reasonably be regarded as a reasonable course of action in relation to the tax provisions concerned. It is a backstop applied with caution, but its existence reinforces the message that the SEIS and EIS rules are not a series of mechanical boxes to be gamed.' },
      { type: 'p', text: 'In practice, a round that passes the SEIS or EIS anti-avoidance conditions and the risk-to-capital test is unlikely to be challenged under the GAAR as well. But the GAAR is the reason that aggressive interpretations of the scheme rules carry real risk: even if a technical reading favours the taxpayer, the wider rule may catch the arrangement.' },

      { type: 'h2', text: 'The motive tests at a glance' },
      {
        type: 'table',
        headers: ['Test', 'What it asks', 'Where it lives'],
        rows: [
          ['No main purpose of tax avoidance', 'Was avoidance a main purpose of the share issue or the wider scheme', 'ITA 2007 Part 5 (EIS) and Part 5A (SEIS)'],
          ['Risk-to-capital condition', 'Does the company aim to grow, and is there real risk of capital loss', 'ITA 2007 (introduced FA 2018)'],
          ['Preferential rights', 'Do the shares carry any present or future priority to dividends or assets', 'Within the qualifying-shares rules'],
          ['GAAR', 'Are the arrangements unreasonable in light of the SEIS/EIS provisions', 'Finance Act 2013, Part 5'],
        ],
      },

      { type: 'h2', text: 'Substance over form' },
      { type: 'p', text: 'Across all of the above, the watchword is substance. HMRC look at the company commercial reality: does it have a product, customers or a credible plan to acquire them, employees doing genuine work, a balance sheet that reflects trading activity rather than a shell. They look at the round commercial reality: was it marketed on commercial terms to investors taking real risk, with no side promises softening the downside.' },
      { type: 'p', text: 'A young company will inevitably have less to show on those measures than a mature one, and that is exactly why the schemes exist. The point is not that an early company has to demonstrate revenue, but that it has to demonstrate it is trying to be a trading company rather than a wrapper for a tax outcome. Board minutes, business plans, hiring decisions and customer pipelines are all part of how that substance is evidenced.' },

      { type: 'h2', text: 'Where founders most often go wrong' },
      { type: 'p', text: 'The errors below recur often enough in HMRC enquiries that they are worth checking against your own round before you issue the shares.' },
      {
        type: 'list',
        items: [
          'Issuing a share class with even a small dividend or liquidation preference, then claiming it is "effectively" ordinary.',
          'Promising a specific exit window or a buy-back to attract a reluctant investor.',
          'Routing investor money into a related company, a personal loan or a service contract that returns value to the investor.',
          'Treating a passive holding vehicle as the SEIS or EIS company, where the trade actually sits in a subsidiary or partner entity.',
          'Marketing the round on the basis of "guaranteed" returns or "secured" assets, language that signals failure of the risk-to-capital test.',
        ],
      },

      { type: 'h3', text: 'When you should pause and take advice' },
      { type: 'p', text: 'If any part of your round involves related-party arrangements, side letters, unusual share classes, or a company structure where the trade and the investment sit in different entities, the anti-avoidance rules deserve a careful look before shares are issued. The cost of getting this wrong is not just rejected relief: it can be the unwinding of every investor relief in the round, with reputational consequences for future fundraising.' },

      { type: 'h2', text: 'Advance assurance and disclosure' },
      { type: 'p', text: 'Advance assurance is the practical way to test a round against HMRC view before money is committed. The application asks for the business plan, the latest accounts, draft articles, the share class to be issued and the names of intended investors. Where there is anything unusual in the structure, advance assurance is also the moment to disclose it: HMRC have the information they need to comment, and the founders have a clear signal of whether the structure will hold.' },
      { type: 'p', text: 'Advance assurance is not a guarantee. It is given on the basis of the information supplied and can be revisited if the facts change. But it is the single best tool a founder has for de-risking the motive question before issuing shares, particularly where the round involves anything beyond a vanilla angel subscription on standard ordinary shares.' },

      { type: 'h2', text: 'The interaction with the company-level tests' },
      { type: 'p', text: 'The anti-avoidance rules do not operate in isolation. They sit alongside the other eligibility conditions covered in the flagship pillar at /guides/seis-eis-guide-uk-startups/ and in the earlier spokes on scheme differences at /blog/seis-vs-eis-key-differences-founders-must-know/, connected persons at /blog/founders-family-seis-30-percent-connected-person-rule/ and investment limits at /blog/seis-eis-investment-limits-how-much-you-can-raise/. A round that fails the connected-person test or breaches the company cap is not rescued by good motives; equally, a round that ticks the structural boxes can still be lost on anti-avoidance grounds.' },

      { type: 'h2', text: 'What this means for founders' },
      { type: 'p', text: 'The schemes are open to founders who use them as Parliament intended, and they are unforgiving of founders who try to engineer the rules. If your round looks like a young trading company raising risk capital from outside investors on ordinary shares with no side deals, the motive tests are not something to fear. If any part of the deal departs from that picture, the anti-avoidance rules become the most important paragraphs in the legislation. The detail is complex and the consequences are severe, so for any borderline case treat this article as orientation and take professional advice on the specific facts.' },
    ],
  },

  // ===========================================================
  // SPOKE 5 of 6 - hub: seis-eis-guide-uk-startups (DRAFT)
  // ===========================================================
  {
    slug: 'seis-eis-three-year-holding-period-disposal-events',
    title: 'The 3-Year Holding Period and Disposal Events That Withdraw SEIS or EIS Relief',
    metaTitle: 'SEIS and EIS 3-Year Holding and Disposal Events',
    metaDescription: 'How the SEIS and EIS three-year holding period works, the disposal events that withdraw relief, the sliding-scale clawback and permitted exceptions.',
    category: 'SEIS & EIS',
    publishDate: '2026-06-01',
    readingMins: 9,
    excerpt: 'SEIS and EIS relief is conditional on holding the shares for at least three years. This guide explains the holding clock, the disposal events that withdraw relief, and the permitted exceptions.',
    hub: 'seis-eis-guide-uk-startups',
    hubSeriesNumber: 5,
    relatedSpokes: [
      'seis-eis-anti-avoidance-tax-motive-trading-substance',
      'seis-eis-founder-multiple-roles-director-employee-investor',
      'seis-vs-eis-key-differences-founders-must-know',
      'founders-family-seis-30-percent-connected-person-rule',
      'seis-eis-investment-limits-how-much-you-can-raise',
    ],
    draft: true,
    content: [
      { type: 'p', text: 'SEIS and EIS investors are buying time as well as shares. The headline relief is granted up front, but it only becomes secure once the investor has held the shares, and the company has continued to qualify, for at least three years. Disposing of the shares early, or doing things that count as a disposal under the rules, can claw back the income tax relief and remove the capital gains tax exemption. This article is part of our SEIS and EIS series and sits beneath the flagship pillar, the complete SEIS and EIS founders guide at /guides/seis-eis-guide-uk-startups/.' },
      { type: 'p', text: 'It pairs with the other two new spokes in this drop. The first deals with anti-avoidance and how HMRC test for tax motive over trading substance at /blog/seis-eis-anti-avoidance-tax-motive-trading-substance/. The second covers founders holding several roles at once at /blog/seis-eis-founder-multiple-roles-director-employee-investor/. Together they cover the three big risks to relief after the round closes: motive, holding and role.' },

      { type: 'h2', text: 'What the three-year holding period actually requires' },
      { type: 'p', text: 'The three-year holding period runs from the date the shares were issued, not from the date the relief is claimed and not from the date of the SEIS3 or EIS3 certificate. The investor must hold the shares continuously throughout that period, and the company must remain a qualifying company carrying on a qualifying trade for the same three years. Both halves of the requirement matter: the investor cannot dispose of the shares early, and the company cannot stop qualifying.' },
      { type: 'p', text: 'For most rounds, the practical effect is straightforward: the shares sit on the cap table, the company keeps trading, and the period elapses without incident. Where the period does become a live issue, it is usually because the investor wants liquidity, the company restructures, the company is sold, or the company qualifying status slips. Each of these scenarios has its own rule, and the consequences differ.' },

      { type: 'h2', text: 'Early disposal, the headline rule' },
      { type: 'p', text: 'If the investor disposes of the SEIS or EIS shares within the three-year window in a transaction that is not at arm length, the full amount of income tax relief claimed on those shares is withdrawn. If the disposal is at arm length, the income tax relief is reduced on a sliding basis tied to the proceeds: in broad terms, the lower the proceeds, the smaller the portion of the original relief that survives. The CGT exemption is also lost on an early disposal, so any gain on the shares becomes chargeable.' },
      { type: 'p', text: 'The point of the sliding scale is to distinguish between an investor who exits early for less than they put in, where the policy is not to punish them for taking a loss, and an investor who exits early for a full return, where the relief was effectively a subsidy of a short-term gain. The mechanics are detailed and best run through with an accountant before a sale is signed.' },

      { type: 'h2', text: 'Sliding-scale clawback at a glance' },
      {
        type: 'table',
        headers: ['Scenario', 'Income tax relief', 'CGT exemption on disposal'],
        rows: [
          ['Held for three years or more, sold at arm length', 'Retained', 'Available on gain'],
          ['Sold within three years at arm length, lower proceeds', 'Reduced on a sliding basis', 'Not available'],
          ['Sold within three years at arm length, full or higher proceeds', 'Withdrawn in full', 'Not available'],
          ['Sold within three years not at arm length', 'Withdrawn in full', 'Not available'],
        ],
      },

      { type: 'h2', text: 'What counts as a disposal' },
      { type: 'p', text: 'Disposal is a wider concept than a straight sale. It includes a transfer to another person, a redemption or buy-back of the shares by the company, a gift other than to a spouse or civil partner, the cancellation of the shares, and certain reorganisations that effectively change what the investor holds. Each of these can trigger the clawback rules if it occurs within the three-year period.' },
      { type: 'p', text: 'It is also worth noting that not every change in the company capital structure is a disposal. A bonus issue, a sub-division of shares or a straight share-for-share exchange that meets the qualifying conditions may not count. The question of whether a given event is a disposal is technical and frequently turns on detail, so it is one to flag to an accountant whenever the cap table is about to be restructured during the holding period.' },

      { type: 'h2', text: 'Permitted disposals: death and qualifying share-for-share exchanges' },
      { type: 'p', text: 'The rules contain a small but important set of carve-outs. The most familiar is death: a disposal occasioned by the death of the investor does not trigger clawback. The shares pass with the relief preserved, although the CGT exemption interacts with the rules on inheritance and the base cost of the shares for the personal representatives.' },
      { type: 'p', text: 'The second important carve-out is a qualifying share-for-share exchange. Where the SEIS or EIS company is taken over by another company in exchange for shares, and the conditions for a qualifying takeover are met, the new shares can be treated as if they were the original SEIS or EIS shares. The holding period continues on the new shares rather than resetting, and the relief is not withdrawn. The qualifying conditions are tightly drawn: in broad terms, the acquiring company must issue ordinary shares, the exchange must be the whole or substantially the whole of the original company shares, and certain ownership tests must be met.' },

      { type: 'h2', text: 'Permitted disposals at a glance' },
      {
        type: 'list',
        items: [
          'Death of the investor: relief is preserved on the shares passing to personal representatives.',
          'Qualifying share-for-share exchange on a takeover: the new shares step into the original holding for the three-year clock.',
          'Compulsory winding up for genuine commercial reasons can be treated more sympathetically than a chosen exit, but the rules are detailed.',
        ],
      },

      { type: 'h2', text: 'Company-side events that can withdraw relief' },
      { type: 'p', text: 'The holding clock is not just about the investor. The company must continue to qualify for the same three years, and a number of company-side events can withdraw relief even though the investor has not sold a single share. The most important are the company ceasing to carry on the qualifying trade, the company beginning a substantial non-qualifying activity, the company becoming controlled by another company that fails the conditions, and certain "value received" payments to investors during the period.' },
      { type: 'p', text: 'Value-received rules deserve a separate paragraph. Payments to an SEIS or EIS investor by the company during the qualifying period, including loans, share repurchases of other shares held by them, and certain disposals at undervalue, can withdraw relief whether or not the original shares are sold. The rules are designed to stop the investor effectively recovering their money through the back door while keeping the relief.' },

      { type: 'h2', text: 'When does the clock start' },
      { type: 'p', text: 'A point that sometimes catches founders out: the three-year clock for SEIS and EIS relief runs from the date the shares are issued, not from the date the company started trading, and not from the date of the compliance certificate. For investors who subscribe across several tranches in a single round, each tranche has its own clock from its own issue date. This is one reason that the issuing schedule and the share register need to be kept accurate: an inaccurate issue date can produce a clock that does not match the relief.' },

      { type: 'h3', text: 'Tranches issued on different dates' },
      { type: 'p', text: 'Where a single investor subscribes for shares across two or three issue dates in the same round, the holding period for each tranche runs from its own date. An investor who later wants to sell part of their holding may find that the earliest tranche has cleared the three years while the latest still sits inside the window. Mapping tranches to dates at the time of issue, rather than reconstructing them later, makes the position straightforward when the question comes up.' },

      { type: 'h2', text: 'Why the same rule applies to SEIS and EIS' },
      { type: 'p', text: 'The minimum holding period and the disposal-event consequences are essentially the same under SEIS and EIS: three years from issue, sliding-scale clawback on arm length disposals, full withdrawal on non-arm length disposals, and the death and share-for-share carve-outs. The scheme differences set out in the companion article at /blog/seis-vs-eis-key-differences-founders-must-know/ are about company size, age and limits; the holding rules sit on top of both schemes in the same shape. That is helpful for founders running blended rounds, because the same diligence covers both share classes.' },

      { type: 'h2', text: 'What founders can and cannot do during the three years' },
      { type: 'p', text: 'The holding period sits between investor and company, but it shapes the company own behaviour too. The bullet points below capture the most common actions that put relief at risk and the actions that do not.' },
      {
        type: 'list',
        items: [
          'High risk: buying back SEIS or EIS shares early, repaying value through loans or service contracts, varying share rights to add preferences.',
          'High risk: a substantial change of trade, a switch into excluded activities, or a takeover that does not meet the qualifying share-for-share conditions.',
          'Lower risk: business as usual trading, hiring, customer acquisition and ordinary growth funding from non-relief sources.',
          'Neutral with conditions: bonus issues, share splits and qualifying reorganisations, provided they meet the detailed rules.',
        ],
      },

      { type: 'h2', text: 'Interaction with the anti-avoidance rules' },
      { type: 'p', text: 'The holding rules are also a backstop for the anti-avoidance rules covered in the companion article at /blog/seis-eis-anti-avoidance-tax-motive-trading-substance/. A pre-arranged early exit, or a payment that effectively returns money to the investor inside the three-year window, will fail both the holding tests and the motive tests. The two sets of rules reinforce each other: anti-avoidance catches arrangements engineered up front, while the holding rules catch arrangements that unwind the investment during the period it was meant to support.' },

      { type: 'h2', text: 'The CGT exemption and disposal after three years' },
      { type: 'p', text: 'Provided the shares are held for the full three years and the conditions continue to be met, a disposal after the period is normally exempt from CGT for both SEIS and EIS. The gain can be free of tax, which is a major part of the appeal for investors who back several companies expecting outsized returns from a few. The exemption only applies to the SEIS or EIS shares themselves and only where income tax relief was given and not withdrawn, so an investor whose income tax relief was clawed back also loses the CGT exemption.' },
      { type: 'p', text: 'A clean exit therefore depends not just on letting the three years pass, but on the company continuing to qualify, the investor not receiving disqualifying value, and the disposal itself being on arm length terms. The reward for waiting is significant, but it is contingent.' },

      { type: 'h2', text: 'What this means for founders and investors' },
      { type: 'p', text: 'The three-year holding period is the most predictable rule in the schemes, but it interacts with disposal events, value-received rules, takeovers and the company own qualifying status in ways that are easy to overlook. A relief claim that was rock solid on day one can still be lost two years later through a poorly thought-through share buy-back or an opportunistic takeover. The flagship pillar at /guides/seis-eis-guide-uk-startups/ sets out the wider framework; the related spokes at /blog/seis-eis-anti-avoidance-tax-motive-trading-substance/ and /blog/seis-eis-founder-multiple-roles-director-employee-investor/ deal with the motive and role tests that sit alongside the holding rules. Because the consequences of getting any of this wrong are severe, take professional advice before any disposal, restructure or takeover during the holding period.' },
    ],
  },

  // ===========================================================
  // SPOKE 6 of 6 - hub: seis-eis-guide-uk-startups (DRAFT)
  // ===========================================================
  {
    slug: 'seis-eis-founder-multiple-roles-director-employee-investor',
    title: 'SEIS and EIS for Founder-Directors: The 30% Connected-Person Rule',
    metaTitle: 'SEIS and EIS for Founder-Directors: 30% Rule',
    metaDescription: 'SEIS and EIS for founder-directors: the 30% connected-person limit, why SEIS allows paid directors but EIS generally does not, and how associates count.',
    category: 'SEIS & EIS',
    publishDate: '2026-06-01',
    readingMins: 10,
    excerpt: 'Founders often wear several hats at once. This guide explains how SEIS and EIS treat the director, employee and investor roles, where the schemes diverge, and the business-angel director exception.',
    hub: 'seis-eis-guide-uk-startups',
    hubSeriesNumber: 6,
    relatedSpokes: [
      'seis-eis-anti-avoidance-tax-motive-trading-substance',
      'seis-eis-three-year-holding-period-disposal-events',
      'seis-vs-eis-key-differences-founders-must-know',
      'founders-family-seis-30-percent-connected-person-rule',
      'seis-eis-investment-limits-how-much-you-can-raise',
    ],
    draft: true,
    content: [
      { type: 'p', text: 'Most founders are not just shareholders. They are directors, often paid, sometimes employees on a contract, and increasingly investors putting their own cash into the company alongside outside angels. SEIS and EIS treat each of those hats differently, and the lines move depending on which scheme you are using. This article is part of our SEIS and EIS series and sits beneath the flagship pillar, the complete SEIS and EIS founders guide at /guides/seis-eis-guide-uk-startups/, which you should read for the overall framework.' },
      { type: 'p', text: 'It pairs with the other two new spokes in this drop. The first sets out the anti-avoidance and motive tests at /blog/seis-eis-anti-avoidance-tax-motive-trading-substance/. The second walks through the three-year holding period and disposal events at /blog/seis-eis-three-year-holding-period-disposal-events/. Together the three articles cover the post-issue rules that decide whether a founder relief actually sticks.' },

      { type: 'h2', text: 'Why founder roles matter to the relief' },
      { type: 'p', text: 'The schemes are designed to channel outside risk capital into young trading companies. To stop them being used as a way for founders to subsidise their own income, the rules limit when a person already inside the company, as a director or employee, can claim relief on their own subscription. Those limits sit on top of the connected-person rules covered separately in the spoke at /blog/founders-family-seis-30-percent-connected-person-rule/, and they apply differently to SEIS and EIS.' },
      { type: 'p', text: 'A clean way to think about it: SEIS recognises that the earliest investors in a brand-new company often are the founder-directors themselves and lets them claim, subject to limits. EIS, designed for the growth stage, generally assumes investors are outside the company, with one narrow exception for business-angel directors. The detail of each rule sits below.' },

      { type: 'h2', text: 'SEIS and the director who invests' },
      { type: 'p', text: 'Under SEIS, a director, including a paid director, can subscribe for SEIS shares and claim relief on the subscription, provided the financial-interest test is not breached. The financial-interest test, often called the 30% test, looks at the share capital, voting rights and rights to assets on a winding up held by the investor and their associates. If the combined holding exceeds 30%, the director is connected and the relief is not available, regardless of which scheme is being used.' },
      { type: 'p', text: 'For founder-directors of brand-new companies, the relief on offer is genuine: they can claim 50% income tax relief on up to their personal SEIS allowance for the tax year, provided they hold 30% or less of the company. The catch, of course, is that many founders hold far more than 30% at the very earliest stage, which is why the SEIS director route works best for second or third founders with smaller stakes and for founder-directors who have already brought in external investors and diluted below the threshold.' },

      { type: 'h2', text: 'EIS and the general bar on employees' },
      { type: 'p', text: 'EIS approaches the same question from the opposite direction. As a starting rule, employees of the company are barred from claiming EIS relief on shares in their employer, and directors are also generally treated as connected and cannot claim. The point is to keep the scheme focused on outside investors backing the company growth, rather than on people already drawing income from it.' },
      { type: 'p', text: 'The employee bar is wider than founders sometimes assume. Contracts of employment, executive service agreements, and certain consultancy arrangements that have employee-like features can all trip the rule. A founder who has converted from a director role into a salaried executive can find themselves blocked from EIS on their own subscription even though SEIS would have allowed it earlier. Where the role is genuinely that of a director rather than an employee, the narrow business-angel director exception described below can sometimes apply.' },

      { type: 'h2', text: 'The business-angel director exception' },
      { type: 'p', text: 'EIS contains a narrow exception that allows certain directors to claim relief, often called the business-angel director rule. In broad terms, an unpaid director, or a director who only becomes paid after subscribing for EIS shares, can claim relief on those shares provided strict conditions are met. The director must not have been previously connected with the company in a way that disqualifies them, the remuneration after appointment must be reasonable for the services provided, and the role must be a genuine non-executive contribution.' },
      { type: 'p', text: 'The exception is real, but it is not a workaround for executive founders. The wording of the legislation, the spirit of the rule, and HMRC practice all point towards a person who joined as an investor first and took a board seat to support the company, rather than an existing executive who has restructured their pay to slip inside the wording. As with everything in this area, the safe path is to map the facts against the rule with an accountant before any shares are issued.' },

      { type: 'h2', text: 'Director, employee and investor across the two schemes' },
      {
        type: 'table',
        headers: ['Role', 'SEIS', 'EIS'],
        rows: [
          ['Paid director investing, under 30% holding', 'Can claim', 'Generally cannot claim'],
          ['Unpaid director investing, under 30%', 'Can claim', 'Business-angel director exception may allow it'],
          ['Employee investing', 'Generally cannot claim', 'Generally cannot claim'],
          ['Founder over 30% with associates', 'Cannot claim', 'Cannot claim'],
          ['Outside angel with no role', 'Can claim if all conditions met', 'Can claim if all conditions met'],
        ],
      },

      { type: 'h2', text: 'The qualifying business activity, what the company must be doing' },
      { type: 'p', text: 'The role rules sit alongside a company-side requirement that often gets less attention. The company must be carrying on, or preparing to carry on, a qualifying business activity throughout the relevant period: a new qualifying trade for SEIS, and an existing or new qualifying trade for EIS. The trade must be carried on commercially with a view to profit and must not be wholly or substantially an excluded activity.' },
      { type: 'p', text: 'Excluded activities are listed in detail in the legislation and include, among others, dealing in land, dealing in commodities or shares, banking, insurance, leasing, legal and accountancy services, property development, hotels and nursing homes. The list is technical and the boundaries are sometimes finer than they appear: a company whose trade looks like development might in fact qualify if it sits on the design side of a development chain, and vice versa. Borderline trades are an obvious case for advance assurance.' },

      { type: 'h2', text: 'Why the qualifying activity matters to founders' },
      { type: 'p', text: 'The qualifying-activity rule is not just a check on what the company does at the start. It must continue to qualify throughout the period during which the relief depends on the company, broadly the three-year holding window covered in the companion article at /blog/seis-eis-three-year-holding-period-disposal-events/. A pivot from a qualifying trade into an excluded activity inside that window can withdraw relief, even if the original business plan was rock solid.' },
      { type: 'p', text: 'For founder-investors this is the link between role and relief: a founder claiming SEIS as a director relies not just on personally meeting the role and connection tests, but on the company continuing to meet the qualifying activity test. The relief is genuinely co-dependent on both halves.' },

      { type: 'h2', text: 'Common founder structures and how they fare' },
      { type: 'p', text: 'The shapes below come up often enough that they are worth running through. Each is a starting point for thought, not a definitive answer, because the conditions are layered and the facts always matter.' },
      {
        type: 'list',
        items: [
          'Solo founder-director holding 90% and subscribing for SEIS: blocked by the 30% connection rule, regardless of director status.',
          'Two co-founders each holding 40% with no associate aggregation between them: both blocked under either scheme by the 30% rule.',
          'Three co-founders each holding around 25% with no spouse aggregation: each can potentially claim SEIS on their own subscription, since each is under 30%.',
          'Early employee taking a small EIS subscription as a thank-you: blocked by the employee rule.',
          'External angel who joins the board after subscribing for EIS: potentially within the business-angel director exception, subject to conditions.',
          'Founder-director who restructures pay to look unpaid at the moment of subscription: high risk of failing the exception in substance.',
        ],
      },

      { type: 'h2', text: 'Pay, options and the practical traps' },
      { type: 'p', text: 'Founder pay arrangements interact with the role rules in two specific ways. First, large salary packages or unusual bonus arrangements can colour the question of whether the director role is genuine and whether the remuneration is "reasonable" for the EIS exception. Second, share options granted to a director or employee can count towards the 30% financial-interest test, because the entitlement to acquire shares is included, even before the options are exercised.' },
      { type: 'p', text: 'A founder who is genuinely under 30% on their issued shares but holds options that take them above 30% on a fully-diluted basis is treated as connected. This is a common and avoidable trap: the share register looks compliant, but the option grants tip the balance. The companion article on connection at /blog/founders-family-seis-30-percent-connected-person-rule/ covers the "entitled to acquire" point in more depth.' },

      { type: 'h3', text: 'A worked example for a paid founder-director' },
      { type: 'p', text: 'Suppose a founder-director draws a modest salary, holds 22% of the issued shares, and has been granted options over a further 10% under a forthcoming option pool. On issued shares alone they are under 30%. Once the option entitlement is added in, the combined figure is 32%, which fails the test. The director would not be able to claim SEIS or EIS relief on a personal subscription, even though the salary, the role and the cap-table headline all looked compliant.' },

      { type: 'h2', text: 'When a founder should and should not invest personally' },
      { type: 'p', text: 'Founders often want to invest because it sends a confidence signal to outside angels. The relief can be a meaningful part of the case, but the analysis needs to be done in the right order. The bullet points below capture the conditions under which a founder personal subscription is a sensible plan.' },
      {
        type: 'list',
        items: [
          'The founder is under 30% on a fully-diluted basis after associates are aggregated and options are counted in.',
          'The company is using SEIS, where directors can claim; or the founder is an unpaid director sitting inside the EIS exception.',
          'The shares are plain ordinary shares with no preferential rights, issued on the same commercial terms as outside investors in the round.',
          'The subscription is genuinely from the founder personal funds, not from a related-party loan or a circular arrangement that risks falling foul of the anti-avoidance rules.',
          'The personal allowance and the company-level allowance for the year are both still available.',
        ],
      },

      { type: 'h2', text: 'Where founder roles intersect with anti-avoidance' },
      { type: 'p', text: 'The role rules and the anti-avoidance rules are designed to dovetail. A founder who carefully meets the technical wording of the EIS director exception, but whose arrangement substantively converts salary into reliefed investment, runs straight into the no-main-purpose test discussed at /blog/seis-eis-anti-avoidance-tax-motive-trading-substance/. Equally, a founder whose director investment is part of a wider scheme that returns value back to them through loans or service payments fails both the role rules and the value-received rules in the holding-period spoke at /blog/seis-eis-three-year-holding-period-disposal-events/.' },

      { type: 'h2', text: 'Documenting a founder subscription' },
      { type: 'p', text: 'Where a founder is going to claim on their own subscription, the file should make the analysis explicit. Board minutes should record the share class as ordinary, the terms as identical to those offered to other investors in the round, and any remuneration arrangements as reasonable for the role. The cap table at the time of issue should be modelled on a fully-diluted basis and the connection position recorded. The SEIS1 or EIS1 compliance statement and the SEIS3 or EIS3 certificates should reflect the same facts. Good documentation does not prevent HMRC asking questions; it gives clear answers when they do.' },

      { type: 'h2', text: 'What this means for founders' },
      { type: 'p', text: 'Founder roles, SEIS and EIS work together when the structure is right, and they collide when it is not. SEIS is the scheme that lets founder-directors claim relief on their own money, subject to the 30% ceiling. EIS is the scheme that brings in outside growth capital, with a narrow window for unpaid director investors and a firm bar on employee investors. The qualifying business activity sits underneath both, requiring the company itself to keep trading in a way that satisfies the rules. The detail is technical and the cost of getting it wrong is the loss of relief, so for any founder considering a personal subscription, this article is orientation rather than authority and the specific facts deserve professional advice.' },
      { type: 'p', text: 'For the full framework, read the flagship pillar at /guides/seis-eis-guide-uk-startups/, and pair this article with the other new spokes on anti-avoidance and on the three-year holding period.' },
    ],
  },

  {
    slug: 'seis-eis-advance-assurance-hmrc',
    title: 'How to Secure SEIS and EIS Advance Assurance from HMRC',
    metaTitle: 'SEIS and EIS Advance Assurance Explained',
    metaDescription: 'What SEIS and EIS advance assurance is, why investors expect it, what to include in the application, and how the HMRC process works for early-stage companies.',
    category: 'SEIS & EIS',
    publishDate: '2026-06-05',
    dateModified: '2026-06-05',
    readingMins: 8,
    excerpt: 'Advance assurance is HMRC\'s indication that a share issue is likely to qualify for SEIS or EIS relief. It is not compulsory, but most investors expect it before they commit, which makes it a practical prerequisite for raising under the schemes.',
    hub: 'seis-eis-guide-uk-startups',
    hubSeriesNumber: 7,
    relatedSpokes: ['seis-eis-anti-avoidance-tax-motive-trading-substance', 'seis-eis-three-year-holding-period-disposal-events', 'seis-eis-founder-multiple-roles-director-employee-investor'],
    draft: true,
    reviewed: true,
    content: [
      { type: 'p', text: 'Advance assurance is the opinion HMRC gives, before any shares are issued, that a proposed share issue is likely to qualify for SEIS or EIS relief. It is not a legal requirement, and a company can issue shares and submit a compliance statement without ever asking for it. In practice, though, most investors will not write a cheque without it, because it gives them comfort that the relief they are investing for is likely to be available. That makes advance assurance a practical prerequisite for almost any SEIS or EIS round. This piece ladders up to the [SEIS and EIS guide for UK startups](/guides/seis-eis-guide-uk-startups/).' },

      { type: 'h2', text: 'What advance assurance is and is not' },
      { type: 'p', text: 'Advance assurance is a non-binding indication based on the information the company provides. It tells prospective investors that, on the facts presented, HMRC expects the share issue to meet the conditions for relief. It is not a guarantee: if the company\'s circumstances change, or the information given was incomplete or inaccurate, the relief can still be refused later at the compliance stage. The assurance reflects what HMRC was told, so the quality of the application matters.' },

      { type: 'h2', text: 'The core SEIS conditions the application has to show' },
      { type: 'p', text: 'For SEIS, the company has to fit within the scheme limits, and the application is essentially a demonstration that it does. The headline conditions, confirmed on [GOV.UK](https://www.gov.uk/guidance/venture-capital-schemes-apply-to-use-the-seed-enterprise-investment-scheme), have been stable through 2026.' },
      { type: 'table',
        headers: ['SEIS condition', 'Limit'],
        rows: [
          ['Maximum the company can raise under SEIS (lifetime)', '£250,000'],
          ['Maximum an investor can claim relief on per year', '£200,000'],
          ['Income tax relief rate for investors', '50%'],
          ['Company gross assets before the share issue', 'No more than £350,000'],
          ['Number of full-time equivalent employees', 'Fewer than 25'],
          ['Age of the trade', 'Less than 3 years'],
        ],
      },
      { type: 'p', text: 'EIS sits above SEIS for larger and slightly later-stage raises, with its own higher limits and a 30% relief rate. A company that has exhausted its SEIS allowance commonly moves to EIS for the next tranche, and an advance assurance application can cover the intended structure.' },

      { type: 'h2', text: 'The risk-to-capital condition' },
      { type: 'p', text: 'Both schemes require the share issue to meet the risk-to-capital condition. HMRC has to be satisfied that the company is genuinely seeking to grow and develop its trade over the long term, and that the investment carries a real risk that the investor could lose more capital than they stand to gain in tax relief. Arrangements engineered mainly to deliver tax relief with little genuine commercial risk are outside the schemes. The application needs to show a real growth plan, not a capital-preservation structure dressed up as a startup.' },

      { type: 'h2', text: 'What to include in the application' },
      { type: 'p', text: 'HMRC expects enough information to form a view on whether the share issue qualifies. A strong application typically includes the following, and gaps are the most common reason for delay.' },
      { type: 'list', items: [
        'A business plan and financial forecasts showing how the money will be used to grow the trade.',
        'The latest accounts, if the company has any, and an up-to-date statement of the company\'s structure.',
        'The memorandum and articles of association.',
        'Details of the amounts to be raised and how the funds will be spent.',
        'An up-to-date pitch deck or information memorandum if one is being shown to investors.',
        'Details of prospective investors, which HMRC expects the application to identify rather than leave open-ended.',
      ]},
      { type: 'p', text: 'HMRC will not generally consider a speculative application with no identified prospective investors, so lining up at least some interested investors before applying is part of the preparation, not an afterthought.' },

      { type: 'h2', text: 'How the process and timing work' },
      { type: 'p', text: 'The application is submitted to HMRC\'s Venture Capital Reliefs team. HMRC reviews the information and either issues the advance assurance, asks follow-up questions, or declines. The turnaround is measured in weeks rather than days and varies with HMRC\'s workload, so a company raising to a deadline should apply well ahead of when it needs investors to commit. Once assurance is granted, it supports the round; after the shares are issued and the company has traded or spent the money as required, the company submits the compliance statement to HMRC, which then allows it to issue the relief certificates to investors.' },

      { type: 'h2', text: 'Common questions about advance assurance' },
      { type: 'h3', text: 'Is advance assurance compulsory?' },
      { type: 'p', text: 'No. A company can issue shares and go straight to the compliance statement without advance assurance. But most investors expect it as a condition of investing, so in practice it is hard to run a round without it.' },
      { type: 'h3', text: 'Does advance assurance guarantee the relief?' },
      { type: 'p', text: 'No. It is a non-binding opinion based on the information provided. If the facts change or the information was incomplete, HMRC can still refuse relief at the compliance stage. It significantly reduces the risk but does not remove it.' },
      { type: 'h3', text: 'Do I need named investors before I apply?' },
      { type: 'p', text: 'Generally yes. HMRC expects the application to identify prospective investors rather than be a speculative request, so it is worth securing some genuine investor interest before submitting.' },
      { type: 'h3', text: 'How long does it take?' },
      { type: 'p', text: 'Typically several weeks, depending on HMRC\'s workload and how complete the application is. Build that time into the fundraising timeline rather than applying at the last minute.' },

      { type: 'p', text: 'Advance assurance is where a lot of SEIS and EIS rounds are won or lost on presentation. A specialist adviser can prepare the application so the conditions are clearly evidenced and the risk-to-capital case is made properly, which is the difference between a clean assurance and a round of HMRC follow-up questions.' },
    ],
  },

];

/** Find a published or draft article by slug. */
export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}
