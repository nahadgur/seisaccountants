// data/guideContent/investorMatchingMarketing.ts
// Full content for the SEIS / EIS Investor Matching and Round Marketing guide.

import { GuideSection } from './rdTaxCredits';

export const investorMatchingMarketingContent: {
  introduction: string[];
  sections: GuideSection[];
  citySectionIntro: string;
} = {
  introduction: [
    "Once Advance Assurance is in hand and the company is ready to raise, the work of actually filling the round begins. SEIS and EIS investor capital is mostly concentrated in three pools: individual angel investors, syndicates and angel networks, and EIS/SEIS-focused funds. Each pool has different commitment sizes, different decision speeds, different documentation expectations, and different round-marketing approaches that work.",
    "This guide covers the structural side of round-marketing for SEIS / EIS companies: identifying which investor pool fits the round size, building the data pack that those pools expect to see, the compliance considerations on round-marketing (the financial-promotion restrictions on raising capital from individuals), the platforms and syndicate routes available to UK founders, and the documentation that needs to be in place before the round opens. The aim is a 60-90 day fundraise, not the 9-month grind that many first-time founders experience.",
  ],
  sections: [
    {
      id: "investor-pools",
      h2: "The three investor pools and what each looks like",
      paragraphs: [
        "The first pool is individual angel investors. These are high-net-worth individuals investing their own capital, typically £10,000-£100,000 per round, often introduced through warm networks or via syndicate platforms. They make decisions on a timeline of 2-8 weeks and care most about the founder, the team, and the qualitative case for the company. The diligence depth is moderate.",
        "The second pool is angel syndicates and networks. Cambridge Angels, London Business Angels, SyndicateRoom, and many regional syndicates pool 5-30 angels under a lead investor who runs diligence and negotiates terms. Total round contributions from one syndicate are typically £100,000-£500,000. Decision timelines run 6-12 weeks. The lead investor's relationship with the founder is the central dynamic; once the lead commits, the others typically follow.",
        "The third pool is SEIS / EIS funds. These are managed funds (Octopus Ventures, SFC Capital, Jenson Funding Partners, Symvan Capital, and many smaller specialist funds) that aggregate capital from individual LPs and invest in growth-stage UK companies. Fund-led rounds are typically £200,000-£2m. Decision timelines run 10-16 weeks because the funds have internal investment-committee processes. Diligence is the deepest of the three pools.",
      ],
      callout: {
        type: 'data',
        heading: 'Where SEIS / EIS capital actually comes from',
        text: 'HMRC published data for 2022-23 shows that individual investors account for the largest share of SEIS / EIS subscriptions by count, but funds and syndicates account for the largest share by capital. A typical £500,000 SEIS+EIS round in 2024-25 has 8-15 individual investors contributing £10,000-£40,000 each alongside one syndicate or fund lead taking the largest single commitment.',
      },
    },
    {
      id: "sizing-the-round",
      h2: "Sizing the round to fit the investor pool",
      paragraphs: [
        "Round size determines which investor pool the company should target. A £200,000-£400,000 SEIS round (close to the £250,000 SEIS company lifetime limit) is well-suited to individual angels and small syndicates. The diligence depth and commitment timeline of larger funds usually does not justify the work for these round sizes; founders chasing fund investment for sub-£300,000 rounds typically waste 3-6 months pursuing fund commitments that never close.",
        "A £400,000-£1m SEIS+EIS combined round fits the syndicate model well. A single lead syndicate provides £150,000-£300,000 as anchor; the rest is filled with individual angels in the syndicate's network. The lead's diligence work also helps the individual investors get comfortable with the round, reducing per-investor friction.",
        "A £1m+ EIS round (with no SEIS or with SEIS exhausted) typically requires fund participation. Individual angels rarely fund single positions of more than £100,000, so reaching £1m+ on individuals alone requires 10-15 angels, which is operationally hard. Fund-led rounds at this size typically have one lead fund taking £500,000-£1m, with smaller co-investors and individual angels filling the rest.",
      ],
    },
    {
      id: "the-data-pack",
      h2: "The data pack investors expect",
      paragraphs: [
        "Every investor pool expects a specific data pack at the start of diligence. Individual angels typically want a pitch deck (10-15 slides covering problem, solution, team, traction, business model, financials, ask), a one-page summary, and a Q&A pack covering frequent questions. The full data room is usually accessed only after first-meeting interest is confirmed.",
        "Syndicates expect everything individual angels expect plus a structured data room: financials (actual and forecast), cap table, customer / contract list, IP register (if applicable), founder CVs, key hire profiles, and product / engineering plan. The syndicate lead runs the diligence and shares the data room with their network only after their own internal commitment.",
        "Funds expect the deepest data pack: full financials going back to incorporation, detailed cohort analysis (for businesses with customer or transaction data), competitive analysis, customer references, founder background checks, and any prior investor correspondence. Diligence questions can take 4-8 weeks even after initial fund interest; specialists prep founders for the level of scrutiny in advance.",
      ],
    },
    {
      id: "financial-promotion-restrictions",
      h2: "Financial-promotion restrictions: who can be marketed to",
      paragraphs: [
        "Raising capital from individuals in the UK is subject to financial-promotion restrictions under FSMA 2000. Promotion of unregulated investments (which most SEIS / EIS rounds are) is limited to specific investor categories: certified high-net-worth individuals, self-certified sophisticated investors, certified sophisticated investors, and certain institutional categories.",
        "In practice, individual angels investing in SEIS / EIS rounds self-certify as sophisticated or high-net-worth investors. The certification is a short statement signed by the investor confirming they meet the criteria. Without the certification, the company cannot legally make the promotion (the pitch deck, the data room access, the meeting itself can constitute a regulated communication).",
        "The simplest path for founders raising from individuals is to use a regulated platform (SyndicateRoom, Seedrs, Crowdcube, AngelList UK) that handles the financial-promotion certification on the investor side as part of platform onboarding. Founders raising directly from individuals outside a platform need to ensure each investor has self-certified before the marketing starts; specialists routinely include a certification template in the data pack.",
      ],
      callout: {
        type: 'warning',
        heading: 'Crowdfunding platforms charge meaningful fees but solve compliance',
        text: 'Equity crowdfunding platforms (Seedrs, Crowdcube) charge 6-7 percent of the funds raised plus completion fees, totaling typically 7-8 percent of the round. The platform handles financial-promotion compliance, investor onboarding, and post-investment investor management. For founders without an existing investor network, the platform fees are usually justified by the access to retail-investor capital. For founders with strong direct investor relationships, raising directly outside the platform is cheaper but requires more compliance handling.',
      },
    },
    {
      id: "round-marketing-channels",
      h2: "Round-marketing channels: where founders actually find investors",
      paragraphs: [
        "For first-time founders without an existing investor network, the practical channels are: warm introductions from existing investors, advisers, or peers; demo days and pitch events (Y Combinator UK demos, Techstars, Founder Catalyst, regional accelerator demo days); equity crowdfunding platforms; and direct outreach to syndicates and funds that publicly state SEIS / EIS investment focus.",
        "Warm introductions consistently produce the highest conversion. An angel investor who meets a founder via mutual connection commits at 3-5x the rate of one who meets via cold outreach. The first 6-8 weeks of a round are usually spent working the warm-introduction tree: existing micro-investors, advisers, and people who have invested in the founder's prior companies.",
        "Demo days and pitch events accelerate the network-building when the founder has no existing investor relationships. The good UK accelerator demo days bring 50-150 angel investors and fund partners; founders who pitch well typically generate 20-40 first-meeting requests, of which 4-8 convert to commitments. The work is concentrated in the 4-week window after demo day; founders who do not capitalise on the warm interest within that window typically lose it.",
      ],
    },
    {
      id: "documentation-before-opening",
      h2: "Documentation that must be in place before the round opens",
      paragraphs: [
        "Before the first investor meeting, the company should have the following in place: Advance Assurance letter from HMRC, current Articles of Association reviewed against SEIS / EIS share-class requirements, draft subscription agreement, draft shareholders' agreement (if applicable), a cap table with the proposed post-round structure, and a data room with the diligence documents organised.",
        "The subscription agreement is the binding document the investor signs. It should specify the share class (new ordinary, ranking pari passu with existing ordinary), the subscription price, the number of shares, the SEIS / EIS qualification confirmation, and any investor-specific terms. A standard subscription agreement template suitable for SEIS / EIS is widely available and most law firms can adapt one for £500-£1,500.",
        "Where the round includes a shareholders' agreement (typical above £200,000 round size), the SA needs to be reviewed against SEIS / EIS qualification. Standard SA provisions like anti-dilution, drag-along, tag-along, and information rights are mostly fine, but specific provisions can disqualify (anti-dilution ratchets are the most common problem). Specialists routinely review SAs before the round opens to flag and remove disqualifying provisions.",
      ],
    },
    {
      id: "the-90-day-target",
      h2: "The 90-day target: a disciplined fundraise timeline",
      paragraphs: [
        "A well-run SEIS / EIS fundraise targets 60-90 days from round-open to first-close. The disciplined timeline: weeks 1-2, finalise the data pack and document chain; weeks 3-6, work the warm-introduction tree with target investors; weeks 7-10, manage diligence with serious investors and negotiate terms; weeks 11-12, close the round and issue shares; weeks 13-18 of the post-issue period, file SEIS1 / EIS1 once the four-month trading-period test is met.",
        "The most common reason rounds drag beyond 90 days is founders chasing too wide an investor pool. Targeting 8-12 high-conviction investors and closing the conversations decisively beats targeting 40 investors and managing a long-tail of low-conviction maybes. Specialists working with founders on round mechanics typically push for early definitive yes/no decisions rather than open-ended diligence.",
        "Where the round genuinely cannot close in 90 days (typical of fund-led rounds with longer investment-committee cycles), the founder should plan for the longer timeline upfront rather than discovering it mid-round. A 6-month fund-led raise should start with 9-12 months of runway, not 4 months; ending the runway mid-raise produces forced terms and weaker outcomes.",
      ],
    },
  ],
  citySectionIntro:
    "Round-marketing for SEIS / EIS companies is a specialised process where the specialist's investor network and platform relationships matter more than geographic proximity. The matching service surfaces specialist accountants whose live caseloads include active SEIS / EIS rounds and who can introduce founders to relevant syndicates and funds.",
};
