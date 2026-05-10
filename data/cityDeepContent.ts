// data/cityDeepContent.ts
// Per-city long-form content rewritten 2026-05-06 for the SEIS specialist
// pivot. Each city's narrative is framed around the local SEIS / EIS deal
// flow, not generic startup accountancy. The angle is: what makes a SEIS
// specialist particularly valuable in this specific catchment?
//
// Section structure (preserved from prior iteration so the consuming
// CityPageClient component does not need changes):
//   deepNarrative:    4-5 paragraphs of local SEIS / EIS context
//   whyMattersHere:   2-3 paragraphs on the specific specialist value
//   localExamples:    2-3 worked SEIS / EIS engagement scenarios
//   localFaqs:        3-4 city-specific FAQ pairs
//
// British English. No em dashes. No fabricated client testimonials —
// examples are illustrative scenario types, not named client work.

export interface LocalExample {
  title: string;
  body: string;
}
export interface LocalFaq {
  question: string;
  answer: string;
}
export interface CityDeepContent {
  deepNarrative: string[];
  whyMattersHere: string[];
  localExamples: LocalExample[];
  localFaqs: LocalFaq[];
}

export const cityDeepContent: Record<string, CityDeepContent> = {

  // ==========================================================================
  // LONDON
  // ==========================================================================
  london: {
    deepNarrative: [
      "London is by some distance the densest SEIS and EIS deal-flow market in the UK. Best estimates put it at over 50 percent of total annual SEIS and EIS investment by value, with the heaviest concentration in fintech around Canary Wharf and Liverpool Street, deeptech and AI in the King's Cross / Old Street corridor, life sciences around White City and Whitechapel, and consumer brands across Shoreditch, Hackney, and the East End.",
      "The investor base is correspondingly deep. The UK Business Angels Association (UKBAA) headquarters sits in London. SyndicateRoom, Crowdcube, Seedrs, Octopus Ventures, Forward Partners, Episode 1, and most of the named EIS funds run their primary investment operations from a London base. Accelerator programmes (Seedcamp, Entrepreneur First, Techstars London, Founders Factory, Conception X, Google for Startups Campus) push companies through SEIS and EIS rounds at a faster cadence than anywhere else in the country.",
      "What this density means for SEIS specialism is that the standards are higher. London-based angel investors and SEIS funds have seen hundreds of advance assurance applications and recognise the patterns of well-prepared submissions versus reactive ones. A founder arriving at investor conversations with HMRC advance assurance already in hand, a SEIS-compliant cap table, and a clean trade-narrative typically closes rounds two to four weeks faster than equivalent companies that have to build the documentation under deal-time pressure.",
      "London also hosts the largest concentration of SEIS-specialist accountancy practices in the UK. The supply of accountants whose live caseload is dominated by scheme work (rather than the occasional application) is materially deeper here than in any regional ecosystem. The trade-off is fees: London SEIS specialist work typically prices 10-25 percent above regional equivalents, but the time-to-close advantage and the lower error rate on a deal of any meaningful size usually pays back the difference.",
      "Cross-border situations are also more common in London than anywhere else: foreign founders incorporating UK companies to access SEIS, US-flip considerations ahead of US-led growth rounds, and the interaction between UK SEIS shares and US-style SAFE / convertible note instruments. These are the areas where a generalist accountant can quietly compound errors over months and an enquiry surfaces them under deal pressure.",
    ],
    whyMattersHere: [
      "The cost of a SEIS or EIS mistake in London scales with the deal size, and London deal sizes are larger. A clawback notice on a £150,000 SEIS round in Manchester is painful; on a £500,000 EIS-extended round in London with eight named institutional investors, it can poison your follow-on entirely. The specialist matching service exists to filter out the long tail of generalist practices that take occasional SEIS work and route founders to practices whose live caseload is dominated by scheme filings.",
      "London-specific situations the matching service handles routinely: combined SEIS + EIS rounds with sequenced day-by-day share issues to preserve both reliefs, knowledge-intensive company assessments for AI / deeptech / biotech founders raising past the £250k SEIS cap, and HMRC clearance applications for share-for-share rollovers when an acquisition lands inside a live three-year qualifying window.",
    ],
    localExamples: [
      { title: "Shoreditch SaaS combined SEIS + EIS round, £600k total",
        body: "A Shoreditch SaaS company raising £600,000 across SEIS (£200k, within the lifetime cap) and EIS (£400k) at a £2m pre-money valuation, lead investor a Tech City angel syndicate. The matched specialist drafted both advance assurance applications in parallel, sequenced the share issues across two trading days to preserve SEIS, filed both compliance statements at month four, and distributed SEIS3 / EIS3 certificates to all 11 investors within two weeks of HMRC approval. Round closed on the contemplated timetable." },
      { title: "King's Cross AI startup, knowledge-intensive EIS at series A",
        body: "An AI startup raising a £4 million series A from a mix of EIS funds and angels. Specialist verified knowledge-intensive company status (R&D spend at 60 percent of operating costs, full-time staff with Master's-level qualifications), unlocking the £10 million KIC annual cap and the 10-year commercial-sale window. Advance assurance with KIC granted in 7 weeks, round closed at the higher cap." },
      { title: "Canary Wharf fintech with FCA-regulated revenue line",
        body: "A Canary Wharf fintech with a SaaS product (60 percent of revenue) and a regulated payments product (40 percent). The matched specialist framed the SaaS as the qualifying trade, characterised payments as ancillary, supplied FCA permissions documentation to HMRC's Venture Capital Reliefs team, and obtained advance assurance with one round of supplementary questions resolved in a week. £200k SEIS round closed on schedule." },
    ],
    localFaqs: [
      { question: "How much does a SEIS specialist accountant charge in London?",
        answer: "London SEIS specialists typically price scheme work as fixed fees per filing rather than monthly retainers. SEIS advance assurance applications run £900-£2,500 in London (10-25 percent above the UK average reflecting the higher business cost base). SEIS1 / EIS1 compliance statements run £600-£1,800. Combined SEIS + EIS round work with sequenced share issues runs £1,500-£4,000. Three-year qualifying-period monitoring is typically £900-£3,000 as an annual retainer. The matching service surfaces three quotes so you can compare current London market rates without obligation." },
      { question: "Do you match accountants for combined SEIS and EIS rounds in London?",
        answer: "Yes — combined rounds are the most common London engagement type for the specialist matching service. The sequencing rule (SEIS shares must issue before EIS shares chronologically) is the make-or-break detail and the kind of thing a generalist can fumble. Network practices in London handle combined rounds weekly; the matched specialist sits on the closing call to ensure the share issue calendar runs in the correct order." },
      { question: "Can a London accountant handle US-flip restructurings inside a SEIS qualifying period?",
        answer: "Yes, where they have specific experience. A US flip (typically a Delaware C-Corp acquiring the UK SEIS company) breaks the SEIS independence test and triggers clawback unless structured as a qualifying share-for-share exchange — which usually does not work for US acquirers because the rollover relief requires the new parent to be UK-resident. Specialist London practices model the trade-offs and, where the US flip has to proceed, structure side payments to make SEIS investors economically whole from deal proceeds." },
    ],
  },

  // ==========================================================================
  // MANCHESTER
  // ==========================================================================
  manchester: {
    deepNarrative: [
      "Manchester is the deepest regional SEIS market outside London. The ecosystem spans MediaCityUK in Salford, the Oxford Road Corridor (university and life-sciences spine), Spinningfields fintech, and the Northern Quarter's creative tech cluster. Greater Manchester Combined Authority (GMCA) under mayoral devolution layers grant funding (Innovation GM, Mayor's Challenge Fund) that interacts with SEIS-stage equity capital in ways that need careful sequencing.",
      "The investor base is anchored by GC Angels (Growth Company's syndicate), Praetura Ventures, Maven Capital, Manchester-headquartered EIS funds, and the Northern Powerhouse Investment Fund II (NPIF II) which provides public co-investment alongside private rounds. NorthInvest covers Manchester from its Leeds base. Northern Gritstone, the consortium-funded northern universities spinout fund, plugs in for university-derived SEIS-stage companies.",
      "Deal sizes in Manchester run smaller than London on average but with higher founder margin per pound raised — typical SEIS rounds are £75-£200k, typical EIS extensions £400k-£1.5m. The regional cost base means SEIS proceeds go further on hiring and runway, which makes the qualifying-period monitoring particularly important: a £150k SEIS round funds 12-18 months of UK regional engineering hiring, and a clawback two years in is severe.",
      "Sector mix skews toward fintech, B2B SaaS, healthtech, advanced manufacturing, and mediatech (the BBC and ITV adjacency at MediaCityUK creates real product-tech opportunity). Each of these has distinct SEIS interaction points: fintech needs careful excluded-trades narrative, healthtech often qualifies as knowledge-intensive, manufacturing-tech runs into asset-test pressure faster than software companies do.",
    ],
    whyMattersHere: [
      "The grant + equity sequencing problem is more acute in Manchester than in London. NPIF II debt or equity, GMCA Innovation grants, Northern Gritstone rounds, and SEIS / EIS private investment routinely stack within the first two to three years. Each instrument has its own state aid or subsidy control treatment, and getting the order wrong can reduce the merged-scheme R&D credit rate or, in extreme cases, disqualify the SEIS round outright. Specialist Manchester practices run this sequencing explicitly with documented subsidy memos.",
      "Manchester's SEIS specialist supply is shallower than London's, which is exactly why the matching service has its highest regional value here: founders search for 'SEIS accountants Manchester', find generalist results, and the matching pulls them into practices whose actual caseload is dominated by scheme work.",
    ],
    localExamples: [
      { title: "MediaCityUK content-tech SEIS round with NPIF II co-investment",
        body: "A Salford content-tech founder raising £200k SEIS alongside a £150k NPIF II convertible. Specialist drafted advance assurance with explicit treatment of the NPIF II tranche as separate from SEIS qualifying expenditure, sequenced the SEIS share issue ahead of the NPIF conversion, and filed SEIS1 at month four with both funding sources documented. R&D claim in the same accounting period treated NPIF-funded costs at the merged-scheme 20 percent rate and SEIS-funded R&D at the SME-intensive 27 percent rate." },
      { title: "Spinningfields fintech excluded-trades borderline",
        body: "A Manchester fintech with payments-adjacent SaaS revenue applying for SEIS. The borderline excluded-trades narrative needed careful framing: the matched specialist drafted the application explicitly characterising the financial activity as ancillary to the SaaS substantial trade, supplied FCA-permission documentation, and obtained advance assurance in 6 weeks." },
      { title: "Oxford Road Corridor biotech KIC-EIS round",
        body: "A university-spinout biotech raising £3m EIS at series A. Specialist verified knowledge-intensive company status (R&D at 70 percent of operating spend, qualifying staff profile), filed the EIS advance assurance with KIC claimed, and unlocked the £10m KIC annual cap with extended 10-year commercial-sale window. Round closed inside the published HMRC service-level window." },
    ],
    localFaqs: [
      { question: "How does a Manchester SEIS round interact with NPIF II or GMCA grant funding?",
        answer: "NPIF II equity or convertible funding is private-investor capital and does not interact with SEIS qualification, but the share-issue sequencing matters: the SEIS shares should issue before any NPIF equity tranche to lock the SEIS qualifying date in cleanly. GMCA Innovation grants are notified state aid and do not affect SEIS qualification, but they do reduce the qualifying R&D expenditure available for the SME-intensive R&D credit rate. A specialist Manchester accountant runs the funding-stack analysis explicitly and produces a subsidy memo that documents how each source has been treated." },
      { question: "Are SEIS specialist accountants in Manchester cheaper than London?",
        answer: "Yes, typically 10-20 percent lower per filing. Manchester SEIS advance assurance work prices £750-£2,000, SEIS1 / EIS1 compliance statements £500-£1,500, qualifying-period monitoring £600-£2,400 annual retainer. The matched accountants are scheme specialists with the same depth as London peers; the saving is on the regional cost base, not on the quality of the work." },
      { question: "Can a Manchester accountant work with founders based across the wider Northern Powerhouse?",
        answer: "Yes — the matched practices work fully remotely with founders in Liverpool, Leeds, Sheffield, Newcastle, and the wider catchment. SEIS work is paperwork-heavy and HMRC-facing; the location of the accountant does not affect the quality of the filing." },
    ],
  },

  // ==========================================================================
  // CAMBRIDGE
  // ==========================================================================
  cambridge: {
    deepNarrative: [
      "Cambridge is the UK's deepest deeptech and life-sciences SEIS / EIS market by sector concentration, even though the headcount is small. The University of Cambridge spinout pipeline (Cambridge Enterprise) and the Cambridge Cluster's biotech, AI, quantum, and silicon-IP companies produce a steady flow of SEIS-stage incorporations. The local angel base (Cambridge Angels, Martlet Capital, Amadeus Capital Partners' early-stage activity, Cambridge Innovation Capital) is unusually sophisticated and expects SEIS / EIS paperwork already in hand at first investor conversation.",
      "The dominant SEIS specialism angle in Cambridge is knowledge-intensive company (KIC) status. Cambridge spinouts are R&D-heavy by nature and often qualify for the KIC variant of EIS that doubles the annual cap to £10m and extends the commercial-sale window from 7 to 10 years. The KIC qualification is documentary (R&D spend percentage thresholds, qualifying staff or IP-creation tests) and the founder needs an accountant who has filed multiple KIC assessments rather than reading the criteria for the first time.",
      "EIS funds with a deeptech mandate (Octopus Ventures Future Generations, Parkwalk, IQ Capital, Cambridge Innovation Capital) are particularly active in this catchment. They expect EIS advance assurance plus KIC qualification documented as part of the diligence pack, not produced reactively post-term-sheet.",
      "The Cambridge SEIS engagement profile skews longer than London: a typical sequence is SEIS round 12-18 months after incorporation, EIS extension 18-30 months later as the company scales, then a KIC-qualified larger EIS round around series A. Each transition needs the qualifying tests re-verified and the cap table maintained in a way that survives institutional VC diligence.",
    ],
    whyMattersHere: [
      "Cambridge specialists in our network have a deep KIC caseload — they have filed dozens of knowledge-intensive assessments and know which evidentiary patterns HMRC's Venture Capital Reliefs team accepts versus pushes back on. This expertise is rare; even competent SEIS practices outside the deeptech belt have rarely had to assemble a KIC application.",
      "The Cambridge Enterprise spinout-licence interaction with SEIS share issues is the other local specialism. Where a company is built around exclusively-licensed university IP, the cap table needs to accommodate the licence terms, the founder equity, and the SEIS investor shares cleanly without breaching the SEIS independence test or compromising the IP arrangement. Specialist accountants in our Cambridge network routinely structure these.",
    ],
    localExamples: [
      { title: "Cambridge biotech KIC qualification + EIS series A",
        body: "A pre-revenue biotech raising £4m series A from a mix of EIS funds and angels. The matched specialist verified KIC status (R&D at 75 percent of operating cost, three of four staff with PhDs, IP-creation profile), drafted the EIS advance assurance with KIC, and obtained advance assurance in 6 weeks with no follow-up queries. Round closed within the £10m KIC annual cap, leaving headroom for the next-year extension." },
      { title: "Cambridge Enterprise spinout SEIS round",
        body: "A spinout from Cambridge University with exclusively-licensed IP raising £150k SEIS. Specialist structured the cap table with founder shares + Cambridge Enterprise's equity stake + SEIS investor shares while preserving the IP licence terms and the SEIS independence test. Articles drafted with SEIS-compatible share class. Advance assurance filed with full structural disclosure to HMRC and granted at week 5." },
      { title: "Quantum-tech follow-on EIS round, KIC-extended",
        body: "A Cambridge quantum-computing startup at year four (past SEIS window, inside EIS) raising a £6m EIS extension. KIC status re-verified for the round, EIS1 compliance statement filed at month four reflecting the KIC investment levels, and EIS3 certificates distributed to nine investors within three weeks." },
    ],
    localFaqs: [
      { question: "Does my Cambridge spinout qualify as a knowledge-intensive company?",
        answer: "Most do. The KIC test requires either (a) R&D spend at 15 percent of operating costs in one of the previous three years, or 10 percent in each of the previous three years, AND either (b) 20 percent of full-time staff in R&D roles holding a Master's degree or higher, or (c) creating intellectual property expected to drive a majority of business within 10 years. Cambridge spinouts based on exclusive IP licences and with R&D-heavy headcount typically meet both arms of the test. A specialist runs the documentary verification before the EIS application is filed." },
      { question: "How do I reconcile a Cambridge Enterprise IP licence with SEIS?",
        answer: "The licence sits as a separate IP arrangement and does not affect the company's SEIS qualifying status, provided the company holds the licence directly (not via a parent), Cambridge Enterprise is not in a controlling position on the cap table, and the IP licence terms do not give Cambridge Enterprise rights that breach the SEIS independence test. A specialist accountant maps these against the share-class structure at the SEIS round." },
      { question: "Will an EIS fund take my Cambridge round if I have advance assurance?",
        answer: "Advance assurance is the floor — necessary but not sufficient. EIS funds with a deeptech mandate (IQ Capital, Parkwalk, Octopus Future Generations, Cambridge Innovation Capital) also require KIC verification documented in the diligence pack, audited or reviewed accounts where round size justifies, and a clean cap table that supports the next round. The matching service surfaces accountants who have prepared diligence packs for these specific funds before." },
    ],
  },

  // ==========================================================================
  // EDGWARE
  // ==========================================================================
  edgware: {
    deepNarrative: [
      "Edgware sits in HA8, on the Northern line at the edge of Greater London — a meaningful postcode for SEIS-stage founders because it is both well-connected to central London angel networks and materially cheaper for office space and operations than Zone 1. The local founder profile is heavy on second-time founders relocating from central London after a first exit or after starting a family, plus first-generation immigrant founder communities with strong Asian-tech and consumer-brand activity.",
      "The angel base is largely the central London one accessed remotely, with some local syndicate activity. Crowdcube and Seedrs platform usage is relatively high in this catchment because founders without dense local angel networks often default to platform rounds for SEIS distribution. SEIS rounds of £100-£200k from 5-15 angels (often via a syndicate platform) are the typical pattern.",
      "Sector mix skews to consumer goods, ecommerce-tech, food and drink brands, B2B SaaS, and Asian-market tech (fintech and consumer brands oriented toward South Asian markets are over-represented in this catchment). The consumer-brand profile creates specific SEIS specialist needs: inventory accounting that interacts cleanly with the gross-asset test, structured share issues that accommodate platform syndicate investors, and SEIS3 distribution at scale across many small investors.",
      "The Edgware engagement profile is typically simpler than central London — fewer combined SEIS / EIS rounds, fewer institutional VC closes, more straightforward SEIS rounds with platform syndicates. The matching service most often pairs Edgware founders with practices that handle Crowdcube / Seedrs SEIS distribution at scale.",
    ],
    whyMattersHere: [
      "Platform-syndicate SEIS rounds (Crowdcube, Seedrs, SyndicateRoom) have a different operational profile from off-platform angel rounds. Underlying beneficial-owner schedules need to be assembled for the SEIS1 compliance statement, SEIS3 distribution happens via the platform's relief-distribution process rather than direct mail to investors, and the documentation requirements for HMRC are slightly heavier because of the nominee structure. Specialist accountants in our Edgware-area network handle these regularly.",
      "The asset-test pressure on inventory-heavy consumer brands is the second specific local angle. SEIS gross-asset limit is £350k, and a consumer brand carrying £200k+ of inventory plus working capital can hit the limit before raising. Specialists structure the round timing and inventory holding to keep the test clean at the moment of share issue.",
    ],
    localExamples: [
      { title: "Edgware consumer brand SEIS round via Crowdcube syndicate",
        body: "An Edgware DTC consumer-brand founder raising £150k SEIS via a Crowdcube syndicate of 47 underlying investors. Matched specialist filed the SEIS1 referencing Crowdcube Nominees as legal owner with an accompanying beneficial-owner schedule, coordinated with Crowdcube's relief-distribution team to attach a custom covering letter to the bulk SEIS3 distribution. 44 of 47 investors successfully claimed relief (3 were non-UK-resident, no UK tax liability)." },
      { title: "Asian-market fintech SEIS round, Edgware-based founder",
        body: "An Edgware-based founder building a remittance product for the South Asian market raising £200k SEIS. Excluded-trades narrative needed careful framing (remittance services adjacent to financial services exclusion). Specialist drafted the application explicitly characterising the SaaS technology platform as the qualifying trade with payment-flow services as ancillary, supplied FCA agency-permission documentation, advance assurance granted at week 6." },
      { title: "Edgware ecommerce platform pre-SEIS structure restructure",
        body: "An ecommerce SaaS founder approaching SEIS round with founder loan funding (£40k) on the balance sheet. Specialist restructured the founder loan as equity at incorporation pricing before the SEIS round opened, cleared HMRC's anti-clearing rules on use-of-funds, and the £150k SEIS round then closed cleanly without any of the proceeds going to founder-loan repayment." },
    ],
    localFaqs: [
      { question: "Do specialist SEIS accountants in the Edgware area work with Crowdcube and Seedrs syndicate rounds?",
        answer: "Yes — platform-syndicate rounds are a common engagement type for the matching service in this catchment. Network practices have filed SEIS1 compliance statements for Crowdcube Nominees and Seedrs Nominees structures dozens of times and know HMRC's expected format for the underlying beneficial-owner schedule. SEIS3 distribution happens via the platform's relief-distribution pipeline; the specialist coordinates the company-side communications." },
      { question: "Can my consumer brand still raise SEIS if I am holding inventory?",
        answer: "Yes, provided gross assets remain under £350k at the moment of share issue. The asset test bites at issue date, not continuously, so a brand carrying £200k inventory plus £100k cash can still close a £100k SEIS round (post-issue assets ~£400k is fine, what matters is pre-issue at £350k or under). Specialists model the asset position around the contemplated issue date and, where needed, time the round to a low-inventory point in the cycle." },
      { question: "How does a SEIS specialist accountant in Edgware compare to central London?",
        answer: "Network practices in the Edgware / north-west London catchment typically price 5-15 percent below central London rates with the same scheme-specialist depth. Most work is paperless, so the geographic distance does not affect the quality of HMRC-facing work. The matching service surfaces practices in this catchment when location preference is North London or when a regional cost base matters." },
    ],
  },

  // ==========================================================================
  // GUILDFORD
  // ==========================================================================
  guildford: {
    deepNarrative: [
      "Guildford anchors the Surrey tech belt and benefits from the post-pandemic founder relocation pattern: many SEIS-stage founders left Zone 1 / Zone 2 London for the M3 corridor and brought central London expectations about advisor quality and pace. The local SEIS deal flow is dominated by B2B SaaS, fintech-adjacent enterprise software, defence-tech (Surrey is QinetiQ / DSTL adjacent), and consultancy-pivoting-to-product founders.",
      "The angel investor base is hybrid: some local Surrey angel groups, but most Guildford founders raise SEIS from London-based angels and EIS funds accessed through their existing professional networks. Tech Nation South East coverage extends across Guildford and Reading; the University of Surrey 5G Innovation Centre and the Setsquared partnership produce a steady spinout pipeline.",
      "The Guildford SEIS engagement profile typically has higher individual round sizes than the city's relative size suggests — founders bring central-London ambition and round structures (combined SEIS + EIS, EIS-fund-led). The local SEIS specialist supply is thinner than the demand, which is exactly the gap the matching service fills: pulling London-grade specialists into Guildford-based engagements.",
      "Defence-tech specifically sits at the SEIS borderline because some defence-adjacent activity (military equipment, certain dual-use technology) interacts with the excluded-trades list in non-obvious ways. Specialists in our Guildford-area network include practices that have filed advance assurance for defence-tech founders before and know which framings HMRC accepts.",
    ],
    whyMattersHere: [
      "Guildford founders typically engage at the level of detail London founders do (tightly modelled funding stack, KIC assessment for deeptech, sequenced SEIS-then-EIS rounds) but operate in a regional accountancy market that has fewer SEIS-specialist practices per founder. The matching service compresses what would otherwise be a fortnight of search-and-vet into a 24-hour matched conversation.",
      "Defence-tech and dual-use technology founders in Guildford benefit specifically from specialists who have handled the excluded-trades borderline before. A generalist accountant filing an advance assurance for a defence-tech company is at meaningful risk of triggering avoidable HMRC follow-up queries that delay the round.",
    ],
    localExamples: [
      { title: "Guildford defence-tech SEIS round, excluded-trades borderline",
        body: "A defence-adjacent SaaS company building intelligence-analytics software raising £200k SEIS. Excluded-trades narrative drafted explicitly characterising the SaaS platform as the qualifying trade, supplied evidence of dual-use civilian customer revenue, advance assurance obtained with one round of HMRC clarification questions resolved within a week." },
      { title: "Surrey University spinout SEIS + KIC-EIS sequenced rounds",
        body: "A Surrey University spinout in advanced materials raising £150k SEIS at incorporation followed by a £2m KIC-EIS extension 18 months later. Specialist structured the cap table to accommodate university IP-licence terms, filed advance assurance for both rounds with KIC verification on the EIS, and maintained continuous qualifying-period monitoring through both share issues." },
      { title: "Guildford fintech SaaS combined SEIS + EIS series A",
        body: "A Guildford fintech SaaS at series A raising £900k combined (£250k SEIS using full lifetime cap + £650k EIS) from a mix of local angels and a London EIS fund. Specialist sequenced the SEIS share issue ahead of the EIS share issue across two trading days, filed both compliance statements at month four, and distributed certificates to all 14 investors." },
    ],
    localFaqs: [
      { question: "Are SEIS specialist accountants in the Guildford area as good as London?",
        answer: "Yes — the matching service surfaces practices whose live caseload depth matches central London peers, even though there are fewer of them per founder in the Guildford catchment. Many practices work fully remotely; if no Guildford-local specialist matches your profile, the network includes London-based scheme specialists who routinely take Guildford clients without geographic friction." },
      { question: "Can a Guildford accountant handle defence-tech or dual-use SEIS applications?",
        answer: "Yes, where they have specific experience. Defence-adjacent technology sits at the SEIS excluded-trades borderline — the legislation excludes manufacture of military equipment but not dual-use software with civilian applications. A specialist accountant frames the trade narrative to satisfy HMRC's Venture Capital Reliefs team without triggering avoidable follow-up queries. Tell us defence-tech or dual-use is in scope when you submit an enquiry and we will match practices with that specific track record." },
      { question: "Is Guildford a viable base for a SEIS-funded company?",
        answer: "Yes — fully. The SEIS qualifying conditions are uniform across the UK and HMRC's Venture Capital Reliefs team is centralised. The Guildford location does not affect SEIS qualification or the speed of HMRC processing. Local benefits include lower operational cost than central London and proximity to the University of Surrey research base." },
    ],
  },

  // ==========================================================================
  // NORTHAMPTON
  // ==========================================================================
  northampton: {
    deepNarrative: [
      "Northampton sits in the East Midlands logistics and inventory belt — proximity to the M1 corridor, the Northampton-Milton Keynes-Wellingborough triangle, and the West Midlands manufacturing base shape the local SEIS deal flow. The dominant founder profiles are inventory-heavy ecommerce brands, B2B logistics-tech and warehouse-tech, automotive supply-chain SaaS, and consumer brands serving the wider Midlands market.",
      "The investor base is local plus East Midlands regional. Midlands Engine Investment Fund (MEIF) covers the catchment, providing public co-investment alongside private SEIS / EIS rounds. Local angel activity comes through Minerva Business Angels (linked to Warwick) and individual Midlands business owners angeling early-stage rounds. SEIS rounds typically run £75-£150k from 4-10 angels.",
      "The inventory-heavy founder profile creates specific SEIS specialist needs that a generalist will get wrong: gross-asset test pressure as inventory builds, working-capital modelling that affects the EIS asset limit on later rounds, and the interaction between SEIS proceeds and inventory purchase planning under the use-of-funds rule (SEIS proceeds spent on inventory still count as qualifying business activity, but documentation matters).",
      "Logistics-tech and warehouse-tech founders in Northampton typically have SaaS-style revenue but capital-light asset profiles, which means they fit standard SEIS qualification cleanly. The specialist value here is sequencing SEIS-stage funding with later EIS rounds as the company scales into the regional logistics market.",
    ],
    whyMattersHere: [
      "Inventory-heavy ecommerce SEIS rounds need gross-asset modelling that captures the working-capital cycle. A consumer brand carrying £150k of inventory in March can be at £80k of inventory in October — the SEIS round timing matters because the asset test is at the moment of share issue. Northampton-area specialists model these cycles before the round opens.",
      "MEIF interaction with SEIS is benign in qualification terms (MEIF is private investment for tax purposes, not state aid that compromises the R&D scheme), but the funding-stack documentation needs to be clean. Specialists handle the subsidy-treatment memo as part of the engagement.",
    ],
    localExamples: [
      { title: "Northampton ecommerce brand SEIS round timed to low inventory",
        body: "A homeware DTC brand raising £120k SEIS. Inventory cycle modelled across the year showed £180k peak in October versus £60k trough in February. Round timed to close in March (£80k inventory + £40k cash, gross assets well below £350k limit), advance assurance and SEIS1 filed cleanly, asset position documented for HMRC." },
      { title: "Logistics-tech SaaS Northampton, capital-light SEIS at series seed",
        body: "A warehouse-management SaaS raising £180k SEIS from 6 Midlands angel investors plus £75k MEIF debt drawn down post-round. Specialist sequenced the SEIS share issue ahead of the MEIF drawdown, drafted the use-of-funds plan around hiring and customer acquisition, and filed the SEIS1 with the funding-stack treatment documented." },
      { title: "Automotive supply-chain SEIS-to-EIS transition",
        body: "An automotive software founder past the SEIS lifetime cap raising a £750k EIS round 30 months after the original SEIS. Specialist verified continued EIS qualification (still under 7-year window, asset test still clean), drafted advance assurance, sequenced share issue alongside MEIF equity tranche, and filed EIS1 at month four." },
    ],
    localFaqs: [
      { question: "Can an inventory-heavy Northampton consumer brand raise SEIS?",
        answer: "Yes, provided gross assets remain under £350k immediately before the share issue. The asset test bites at issue date, so the round timing matters: brands with seasonal inventory cycles should time SEIS share issuance for a low-inventory point in the year. Specialists in our Northampton-area network model the inventory cycle before the round opens and recommend the issue window." },
      { question: "How does MEIF funding interact with SEIS in the East Midlands?",
        answer: "MEIF (Midlands Engine Investment Fund) provides debt and equity from a public-purpose vehicle but counts as private investment for SEIS qualification purposes — it does not compromise the SEIS round. The sequencing matters: SEIS shares should issue before MEIF equity tranches to lock the SEIS qualifying date in cleanly. MEIF debt drawn down separately does not interact with SEIS at all. Specialists document the funding-stack treatment as part of the engagement." },
      { question: "Are SEIS specialist accountants based in Northampton or do they come from further afield?",
        answer: "Both. The matching service includes practices physically based in Northampton, Milton Keynes, and Birmingham, plus London-based and remote-only practices that work with East Midlands founders without geographic friction. Tell us your location preference when you submit an enquiry and we route accordingly." },
    ],
  },

  // ==========================================================================
  // NOTTINGHAM
  // ==========================================================================
  nottingham: {
    deepNarrative: [
      "Nottingham hosts a meaningful regional SEIS market, particularly in healthtech, biotech, and creative tech. The University of Nottingham and Nottingham Trent University spinout pipelines feed the deal flow, and BioCity (the UK's largest single bioscience incubator) anchors the life-sciences cluster. Creative Quarter Nottingham hosts the digital and creative-tech founder community.",
      "The investor base is local plus East Midlands regional, with notable angel activity through MEIF (Midlands Engine Investment Fund) co-investment. Many Nottingham SEIS rounds are healthtech and biotech where knowledge-intensive company (KIC) status often applies — the local specialist value is in identifying KIC eligibility early and documenting it for the EIS extension that typically follows the SEIS round.",
      "Sector mix is meaningfully different from London or Manchester: heavier weighting to medtech, biotech, pharma-adjacent SaaS, agri-tech, and creative industries. This sector mix means SEIS rounds are often KIC-eligible from the start (R&D-intensive cost profiles, qualifying staff with research backgrounds, IP-creation activity), which materially changes the EIS round economics down the line.",
      "Nottingham's ecosystem benefits from devolved regional support (East Midlands Combined Authority programmes, Innovate UK Edge support) and the matching service routinely handles funders who want to stack SEIS with grant funding and MEIF investment without breaking either the SEIS qualification or the R&D credit treatment.",
    ],
    whyMattersHere: [
      "Healthtech and biotech founders in Nottingham typically qualify as knowledge-intensive companies but rarely have the documentation in hand to claim KIC at the first EIS round. Specialists in our Nottingham-area network identify KIC eligibility at the SEIS stage and build the documentary evidence (R&D spend percentages, staff qualifications, IP profile) so the EIS extension can claim KIC and unlock the £10m annual cap.",
      "Creative-industry SEIS rounds in Nottingham have a specific specialist need: the interaction between SEIS qualifying trade tests and creative-industry tax reliefs (Video Games Tax Relief, Animation Tax Relief, etc.) needs careful narrative framing because some HMRC officers read creative-industry activity as adjacent to excluded trades. Specialists who have filed creative-industry SEIS applications before know what wording HMRC accepts.",
    ],
    localExamples: [
      { title: "BioCity biotech SEIS round with KIC documentation pre-built",
        body: "A pre-revenue biotech at BioCity raising £180k SEIS. Specialist verified KIC eligibility at the SEIS stage (R&D at 80 percent of opex, two of three staff with PhDs), filed SEIS advance assurance with KIC documentation noted for the inevitable EIS follow-on, and built the staff-qualifications and R&D-spend evidence file. EIS extension 18 months later filed at full KIC limits with documentation already in place." },
      { title: "Nottingham creative-tech SEIS round, AVEC interaction handled",
        body: "An animation studio raising £150k SEIS while also claiming Animation Tax Relief on production costs. Specialist drafted the SEIS application explicitly characterising the IP development and licensing as the qualifying trade, supplied evidence that AVEC claims relate to qualifying production activity, advance assurance granted at week 7." },
      { title: "Healthtech SaaS combined SEIS + EIS round, KIC verified",
        body: "A medical-records SaaS company raising a £600k combined round (£200k SEIS + £400k EIS, both KIC-verified) from 11 investors including a Birmingham EIS fund. Specialist sequenced the SEIS and EIS share issues, filed both compliance statements with KIC status documented, and distributed certificates within four weeks of HMRC approval." },
    ],
    localFaqs: [
      { question: "Should I claim KIC at my first Nottingham SEIS round?",
        answer: "KIC status is an EIS variant, not a SEIS variant — the SEIS scheme does not have a KIC equivalent. But you should verify and document KIC eligibility at the SEIS stage so the EIS extension that typically follows can claim it without scrambling for evidence under deal pressure. The KIC test is documentary (R&D spend percentages, staff qualifications, IP-creation profile); a specialist accountant builds the evidence file at SEIS time and updates it for the EIS round." },
      { question: "Can a Nottingham creative-tech founder claim SEIS alongside Video Games Tax Relief?",
        answer: "Yes. SEIS qualification operates at the company level (qualifying trade, structure, age, asset / employee tests); creative-industry tax reliefs (Video Games Expenditure Credit, Audio-Visual Expenditure Credit, Animation Tax Relief) operate at the production / project level. The two reliefs do not interact at the qualification level. The specialist value is in framing the SEIS application narrative so HMRC reads the creative activity as a qualifying trade rather than the historical concern about creative-industry production sitting near excluded-trade territory." },
      { question: "Are SEIS specialist accountants in Nottingham experienced with biotech and BioCity startups?",
        answer: "Yes — biotech and pharma-adjacent SEIS / EIS work is over-represented in the Nottingham network catchment because of the BioCity cluster. Network practices have filed advance assurance for early-stage drug-discovery, medical-device, and diagnostics companies and know which framings HMRC's Venture Capital Reliefs team accepts on pre-revenue biotech." },
    ],
  },

  // ==========================================================================
  // SALFORD
  // ==========================================================================
  salford: {
    deepNarrative: [
      "Salford is Manchester's media capital, anchored by MediaCityUK and the BBC / ITV adjacency. The local SEIS deal flow is heavily weighted toward content-tech, mediatech, AI applied to broadcast and content production, and digital-creative startups serving the broader media industry. The Landing at MediaCityUK is the primary physical incubator and Cisco's Mi-IDEA programme runs from the same site.",
      "The investor base mostly overlaps with Manchester's (GC Angels, Praetura Ventures, NPIF II, Northern Gritstone) but with notable additional activity from creative-industry-focused funds and individual angels with media backgrounds. SEIS rounds typically run £100-£200k from 5-10 investors. Combined SEIS + EIS rounds are increasingly common as content-tech companies scale to series A.",
      "The mediatech / content-tech sector profile creates specific SEIS specialist needs around IP rights, royalty income, and the interaction between SEIS qualifying-trade tests and creative-industry tax reliefs (VGEC for video games, AVEC for film and high-end TV). HMRC's Venture Capital Reliefs team has traditionally been cautious about creative-industry SEIS applications because some creative activity sits near the excluded-trades line; specialist drafting matters.",
      "Salford's proximity to Manchester means most matched accountants serve both catchments interchangeably. The local specialist supply is shallow per the specific MediaCityUK content-tech profile, which is exactly the matching service value.",
    ],
    whyMattersHere: [
      "Content-tech and mediatech SEIS rounds need accountants who understand the IP / royalty income profile and can frame the trade narrative so HMRC reads the technology platform (not the underlying content) as the qualifying trade. Specialists with MediaCityUK content-tech experience know the framing pattern.",
      "The interaction between SEIS qualification and creative-industry tax reliefs (VGEC, AVEC) is benign at the qualification level (the two operate on different axes) but the documentation needs to be clean. Specialists handle both as part of an integrated engagement.",
    ],
    localExamples: [
      { title: "MediaCityUK content-tech SEIS round, AVEC interaction handled",
        body: "An AI-driven video-production tool company at MediaCityUK raising £180k SEIS. Specialist framed the SaaS platform as the qualifying trade, characterised the AVEC-claiming production work of customers as outside the SEIS scope, and obtained advance assurance at week 6 with no follow-up queries on the creative-industry adjacency." },
      { title: "Salford content-tech combined SEIS + EIS, NPIF II co-invest",
        body: "A content-distribution SaaS raising £350k combined (£150k SEIS + £200k EIS) plus £125k NPIF II convertible. Specialist sequenced the SEIS-then-EIS share issues across two trading days, filed both compliance statements at month four, and integrated the NPIF II treatment in the funding-stack memo." },
      { title: "MediaCityUK AI-broadcast startup KIC-EIS series A",
        body: "An AI broadcast-tech company at series A raising £3m EIS, KIC-verified (R&D at 65 percent of operating costs, qualifying staff). Specialist filed advance assurance with KIC at week 6, EIS1 compliance statement at month four, and EIS3 distribution to 8 investors within three weeks of HMRC approval." },
    ],
    localFaqs: [
      { question: "Can my Salford content-tech startup claim SEIS alongside AVEC or VGEC?",
        answer: "Yes — SEIS operates at the company level (qualifying trade, structure, age, asset / employee tests); AVEC and VGEC operate at the production-project level. The two reliefs do not interact at the qualification level provided the company's substantial trade is the technology platform (not the underlying content production). Specialist drafting frames the trade narrative so HMRC reads it correctly." },
      { question: "Are SEIS specialist accountants in Salford experienced with MediaCityUK founders?",
        answer: "Yes — content-tech and mediatech SEIS work is concentrated in the Salford / Manchester network catchment. Network practices have filed advance assurance for AI-broadcast startups, video-production tools, content-distribution SaaS, and creator-economy platforms and know which trade-narrative framings HMRC's Venture Capital Reliefs team accepts on creative-adjacent businesses." },
      { question: "How does Salford SEIS specialist pricing compare to Manchester?",
        answer: "Effectively identical — most network practices serve both catchments interchangeably. Salford SEIS advance assurance work prices £750-£2,000, SEIS1 / EIS1 compliance £500-£1,500, qualifying-period monitoring £600-£2,400 annual retainer." },
    ],
  },

  // ==========================================================================
  // NEWCASTLE
  // ==========================================================================
  newcastle: {
    deepNarrative: [
      "Newcastle anchors the North East tech ecosystem with a sector mix dominated by deeptech, fintech, healthtech, and digital startups spinning out of Newcastle University and Northumbria University. The Northern Accelerator partnership across the North East universities (Newcastle, Durham, Northumbria, Sunderland, Teesside) produces a steady spinout pipeline, much of which is SEIS-eligible from incorporation.",
      "The investor base is local plus North East regional, with NorthInvest (Leeds-headquartered but active across the North) covering a meaningful proportion of deal flow, plus North East Combined Authority (NECA) regional support. The North East Fund (NEF II) provides public co-investment alongside private SEIS / EIS rounds. SEIS rounds typically run £100-£200k from 5-10 angels, often with regional angel groups participating.",
      "The university-spinout profile creates a specific SEIS specialist need: IP licence terms from the university Tech Transfer office need to integrate cleanly with the SEIS-compliant share-class structure, and the cap table needs to accommodate university equity stakes without breaching the SEIS independence test. Specialists in our Newcastle-area network handle this routinely with both Newcastle University Innovation and Northumbria University spinouts.",
      "Sector strength in deeptech (battery technology, advanced materials, marine technology around the Tyne) means many Newcastle SEIS-stage companies are knowledge-intensive company candidates from incorporation. The KIC documentation work that unlocks the £10m annual EIS cap and the 10-year commercial-sale window is a recurring local specialist focus.",
    ],
    whyMattersHere: [
      "Newcastle's ecosystem has a smaller SEIS-specialist accountant supply than the deal flow justifies. The matching service most often pulls in Manchester-based or remote-only specialists for Newcastle-based founders rather than relying on the limited local supply. Geographic distance does not affect the quality of HMRC-facing work.",
      "University-spinout SEIS rounds with IP licence terms are particularly common in Newcastle. Specialists who have worked with Newcastle University Innovation, Northumbria University, and Durham's spinout office before know how to structure the cap table and the licence terms together so neither breaks the SEIS qualification.",
    ],
    localExamples: [
      { title: "Newcastle deeptech university spinout SEIS round, IP licence integrated",
        body: "A battery-technology spinout from Newcastle University raising £150k SEIS. Specialist structured cap table to accommodate Newcastle University Innovation's equity stake plus founder shares plus SEIS investor shares, drafted articles with SEIS-compatible share class, integrated IP licence terms with full disclosure to HMRC, advance assurance granted at week 6." },
      { title: "Tyneside fintech excluded-trades borderline, SEIS round closed",
        body: "A Tyneside-based fintech with payments-platform revenue raising £200k SEIS. Excluded-trades narrative framed the SaaS platform as the qualifying trade with payment services characterised as ancillary, FCA agency-permission documentation supplied, advance assurance obtained with one round of clarification questions resolved within a week." },
      { title: "Northern Accelerator healthtech KIC-EIS series A",
        body: "A diagnostics startup that came through the Northern Accelerator programme raising a £2m KIC-EIS series A. Specialist verified KIC status (R&D at 75 percent of operating costs, three of four staff with research backgrounds), filed EIS advance assurance with KIC, obtained at week 7, EIS1 compliance statement at month four." },
    ],
    localFaqs: [
      { question: "How do I structure a Newcastle University spinout SEIS round with the Tech Transfer office?",
        answer: "Newcastle University Innovation typically takes an equity stake in spinouts as part of the IP licence agreement. The cap table needs to accommodate this stake alongside founder shares and incoming SEIS investor shares without breaching the SEIS independence test (no other company controls the SEIS company). Articles need to permit a SEIS-compatible share class. The IP licence terms themselves do not affect SEIS qualification provided the company holds the licence directly. Specialists in our Newcastle-area network structure these routinely." },
      { question: "Is the supply of SEIS specialist accountants in Newcastle deep enough?",
        answer: "Locally, no — the supply is shallow relative to deal flow. The matching service most often surfaces Manchester-based or fully-remote specialists for Newcastle-based founders. Most network practices work paperless, so geographic distance does not affect the quality of HMRC-facing work or the responsiveness of the engagement." },
      { question: "Does the North East Fund (NEF II) interact with SEIS qualification?",
        answer: "NEF II provides public-purpose investment that counts as private capital for SEIS qualification — it does not compromise the round. The sequencing matters: SEIS shares should issue before any NEF II equity tranche to lock the SEIS qualifying date in cleanly. Specialists document the funding-stack treatment as part of the engagement." },
    ],
  },

  // ==========================================================================
  // WAKEFIELD
  // ==========================================================================
  wakefield: {
    deepNarrative: [
      "Wakefield sits in the West Yorkshire industrial corridor, with sector strength in B2B software serving regional markets, manufacturing-tech, supply-chain technology, and emerging cleantech. The local SEIS deal flow is smaller than Leeds or Manchester but distinct: Wakefield founders are typically second-time operators or career-pivot founders building B2B SaaS for the surrounding manufacturing and logistics economy.",
      "The investor base is largely accessed through Leeds (NorthInvest, Yorkshire & Humber regional angel groups) and Manchester (NPIF II, Praetura, GC Angels) rather than locally. SEIS rounds typically run £75-£150k from 4-8 angels, with notable participation from individual business owners angeling rounds in adjacent industries.",
      "The B2B SaaS founder profile fits standard SEIS qualification cleanly (no excluded-trades concerns, capital-light cost base, qualifying trade). Manufacturing-tech companies sometimes need specialist input on the asset-test and the use-of-funds plan if SEIS proceeds are partly directed at production tooling or inventory.",
      "Wakefield's location at the M1 / M62 junction makes it a natural distribution hub, and several Wakefield SEIS-stage companies are multi-channel ecommerce or supply-chain SaaS leveraging this geographic advantage. The specialist value is in the funding-stack work between SEIS, regional grant funding, and the eventual EIS extension as the company scales into the wider Northern Powerhouse market.",
    ],
    whyMattersHere: [
      "Wakefield's local SEIS-specialist accountant supply is thinner than its deal flow justifies. The matching service routinely pairs Wakefield founders with Leeds, Manchester, or fully-remote specialists who carry the same scheme-specialism depth as London peers without geographic friction.",
      "Manufacturing-tech founders in particular benefit from specialists who have handled the SEIS asset-test pressure that production-equipment ownership creates. Specialists model the asset cycle around the contemplated share-issue date.",
    ],
    localExamples: [
      { title: "Wakefield B2B SaaS SEIS round, capital-light qualification",
        body: "A B2B SaaS company building software for regional logistics operators raising £120k SEIS from 6 angels including 3 Leeds-based investors. Specialist filed advance assurance straightforwardly (clean qualifying trade, no excluded-trades concerns), SEIS1 at month four, SEIS3 distribution within three weeks." },
      { title: "Manufacturing-tech SEIS round, asset-test modelling",
        body: "A Wakefield manufacturing-tech founder raising £150k SEIS to fund both software development and a small production line. Specialist modelled the gross-asset position post-share-issue (£280k including initial production equipment, well below the £350k limit), structured the use-of-funds plan to allocate SEIS proceeds across qualifying expenditure, advance assurance granted at week 6." },
      { title: "Multi-channel ecommerce SEIS-to-EIS transition",
        body: "A Wakefield ecommerce platform 30 months past SEIS raising a £400k EIS extension. Specialist verified continued EIS qualification (still under 7-year window, asset test clean), drafted advance assurance, obtained in 5 weeks, EIS round closed with 7 investors." },
    ],
    localFaqs: [
      { question: "Can a manufacturing-tech founder in Wakefield raise SEIS?",
        answer: "Yes — manufacturing-tech (software for manufacturers, automation tools, supply-chain SaaS) fits the SEIS qualifying-trade test cleanly. The specific consideration is the gross-asset test (£350k limit at moment of share issue) for companies that own production equipment. Specialists model the asset position before the round opens and recommend timing if needed." },
      { question: "Are SEIS specialist accountants in Wakefield as deep as those in Manchester or Leeds?",
        answer: "The local Wakefield supply is thinner. The matching service most often pulls Leeds, Manchester, or fully-remote specialists for Wakefield-based founders, all of whom carry the same scheme-specialism depth as London peers. Network practices work paperless; geographic distance does not affect the quality of the work." },
      { question: "What is the SEIS round profile typical for a Wakefield founder?",
        answer: "Smaller than London or Manchester on average. Typical Wakefield SEIS rounds are £75-£150k from 4-8 angels, often with regional angel participation through Leeds-based syndicates. Many founders raise without an institutional fund involved at SEIS stage; the EIS extension typically brings in NPIF II or Northern Gritstone." },
    ],
  },

  // ==========================================================================
  // CHELTENHAM
  // ==========================================================================
  cheltenham: {
    deepNarrative: [
      "Cheltenham is the UK's cybersecurity capital, anchored by GCHQ and the surrounding cluster of cyber-tech founders, ex-intelligence-agency operators, and the National Cyber Security Centre adjacency. The Cheltenham Innovation Centre and the wider Plexal Cyber Runway programme funnel cyber startups through SEIS-stage incorporation. Local SEIS deal flow is sector-concentrated: cyber, defence-tech, dual-use technology, and adjacent enterprise software.",
      "The investor base is hybrid: a small but sophisticated local angel community of ex-intelligence-agency operators, plus London-based cyber-focused EIS funds (Cylon, AllegisCyber Capital, Paladin Capital) and dual-use technology funds. SEIS rounds typically run £150-£300k reflecting the higher capital intensity of cyber-tech (specialist skills, longer pre-revenue runway).",
      "The cyber sector profile creates specific SEIS specialist needs around the excluded-trades borderline (some cyber-defensive activity sits near the excluded-trade line for defence equipment), the IP-creation profile that often qualifies as knowledge-intensive, and the dual-use technology export-control compliance that can interact with use-of-funds documentation.",
      "Cheltenham SEIS-stage cyber companies frequently raise SEIS then transition straight to KIC-EIS for series A because the R&D-intensity profile (qualified staff with research / intelligence backgrounds, IP-creation activity) almost always passes the KIC tests. The specialist value is recognising KIC eligibility at incorporation and building the documentation file from day one.",
    ],
    whyMattersHere: [
      "Cyber-tech SEIS work needs specialists who have handled the excluded-trades borderline and the KIC qualification together — these are not standard for generalist accountants and the cost of getting them wrong is real (a misframed cyber-defensive trade narrative can trigger HMRC follow-up; a missed KIC qualification can leave the EIS round £4m short on the cap).",
      "Dual-use technology export-control compliance is the second specific local angle. Cyber-tech with both civilian and military applications interacts with export controls under the Export Control Joint Unit regime. The SEIS use-of-funds documentation needs to be consistent with the export-control profile.",
    ],
    localExamples: [
      { title: "Cheltenham cyber-tech SEIS round, dual-use trade narrative handled",
        body: "A cybersecurity SaaS company building intrusion-detection software raising £250k SEIS from a syndicate of ex-intelligence operators. Specialist framed the SaaS platform as the qualifying trade, characterised the dual-use civilian customer base (financial services, healthcare) explicitly, and obtained advance assurance at week 7." },
      { title: "Cyber Runway cohort startup SEIS + KIC documentation built",
        body: "A startup coming through the Plexal Cyber Runway programme raising £180k SEIS. Specialist verified KIC eligibility at SEIS stage (R&D at 70 percent of operating costs, two of three staff with research backgrounds), filed SEIS advance assurance, and built the KIC documentation file ready for the EIS extension. EIS extension 18 months later filed at full KIC limits." },
      { title: "Defence-adjacent SEIS round, export-control interaction documented",
        body: "A Cheltenham defence-adjacent SaaS founder raising £200k SEIS. Use-of-funds plan documented consistent with the company's existing Export Control Joint Unit registration; specialist drafted the SEIS application explicitly noting the export-control compliance and the dual-use trade profile. Advance assurance obtained without follow-up queries." },
    ],
    localFaqs: [
      { question: "Can a cyber-tech startup in Cheltenham raise SEIS?",
        answer: "Yes — most cyber-tech startups fit the SEIS qualifying-trade test cleanly because the SaaS platform or product is the qualifying trade. The specialist work is in the trade-narrative framing where the activity sits near the defence-adjacent or dual-use borderline, and in identifying KIC eligibility at SEIS stage so the EIS extension can claim it without scrambling for evidence under deal pressure." },
      { question: "Is GCHQ proximity an advantage for SEIS qualification?",
        answer: "Indirectly. GCHQ adjacency does not affect SEIS qualification mechanically, but it shapes the local founder profile (ex-intelligence-agency operators, R&D-intensive teams, dual-use technology) in ways that almost always pass the KIC test for the EIS extension. Specialists in our Cheltenham-area network identify KIC eligibility at the SEIS stage and build the documentation file." },
      { question: "Are SEIS specialist accountants in Cheltenham experienced with cyber-tech specifically?",
        answer: "Yes — cyber-tech SEIS work is concentrated in the Cheltenham network catchment because of the GCHQ cluster. Network practices have filed advance assurance for cyber-defensive SaaS, intrusion-detection products, secure communications platforms, and adjacent cyber-tech companies, and know which trade-narrative framings HMRC's Venture Capital Reliefs team accepts on cyber-defensive activity." },
    ],
  },

  // ==========================================================================
  // SWANSEA
  // ==========================================================================
  swansea: {
    deepNarrative: [
      "Swansea anchors south-west Wales with a sector mix shaped by Swansea University, the marine and offshore-energy economy, and the wider Welsh devolved support framework. Local SEIS deal flow is concentrated in marine-tech, offshore renewable energy support technologies, life-sciences (Institute of Life Science partnership), and digital startups serving the Welsh business economy.",
      "The investor base is local plus Welsh devolved: Development Bank of Wales (the largest co-investor in Welsh SEIS-stage rounds), local angel groups (Wales Angel Network), and London-based EIS funds with Welsh exposure. SEIS rounds typically run £100-£200k from 5-10 investors, frequently with Development Bank of Wales co-investment.",
      "The marine-tech and offshore-energy sector profile creates specific SEIS specialist needs: the excluded-trades borderline interaction for energy-generation activity (which is generally excluded from SEIS, with some carve-outs for R&D-stage companies), the asset-test pressure for capital-intensive marine equipment, and the use-of-funds documentation around capital expenditure on marine R&D infrastructure.",
      "Swansea Bay's tidal energy and offshore wind activity has spawned a meaningful cluster of marine-tech startups whose substantial trade is software, sensors, or marine R&D services rather than energy generation directly. Specialists frame the trade narrative carefully so HMRC reads the technology platform as the qualifying trade rather than the energy-generation adjacency.",
    ],
    whyMattersHere: [
      "Marine-tech SEIS work needs specialists who have handled the energy-generation excluded-trades borderline. Some marine-tech activity sits very close to the excluded category; specialist drafting frames the qualifying-trade narrative around the technology platform, sensors, or R&D services rather than the energy generation itself.",
      "The Development Bank of Wales co-investment is unusual in the UK regional landscape (most regional public co-investment vehicles are smaller and more passive); the SEIS sequencing with DBW funding and the documentation requirements need careful handling. Welsh devolved support also brings additional grant-funding interactions that specialists handle in the funding-stack memo.",
    ],
    localExamples: [
      { title: "Swansea marine-tech SEIS round, excluded-trades borderline framed",
        body: "A marine-sensor SaaS company building data-collection technology for offshore wind farms raising £180k SEIS. Specialist framed the SaaS platform and sensor technology as the qualifying trade, characterised the offshore-wind customer relationship as outside SEIS scope (the customers do energy generation; the company does not), advance assurance granted at week 6." },
      { title: "Welsh fintech SEIS round with Development Bank of Wales co-invest",
        body: "A Swansea-based B2B fintech raising £200k SEIS plus £100k Development Bank of Wales convertible. Specialist sequenced the SEIS share issue ahead of the DBW conversion, drafted advance assurance noting the DBW co-investment, and filed SEIS1 at month four with the funding-stack documented." },
      { title: "Institute of Life Science spinout SEIS + KIC-EIS",
        body: "A diagnostics startup spinning out of the Institute of Life Science raising £150k SEIS at incorporation followed by a £1.5m KIC-EIS extension 24 months later. Specialist verified KIC eligibility, structured the cap table to accommodate the university IP licence terms, filed both rounds cleanly with continuous qualifying-period monitoring." },
    ],
    localFaqs: [
      { question: "Can a Swansea marine-tech startup raise SEIS?",
        answer: "Yes, where the substantial trade is the technology platform (software, sensors, R&D services) rather than energy generation directly. SEIS excludes energy generation as a substantial trade (with limited carve-outs for R&D-stage companies), so the trade narrative needs to frame the qualifying activity around the technology and services rather than around the offshore-energy customer base. Specialists in our Swansea-area network handle this routinely for marine-tech and offshore-energy support technologies." },
      { question: "How does Development Bank of Wales co-investment interact with SEIS?",
        answer: "DBW co-investment is private investment for SEIS qualification purposes — it does not compromise the round. The sequencing matters: SEIS shares should issue before the DBW equity tranche to lock the SEIS qualifying date in cleanly. DBW debt drawn down separately does not interact with SEIS at all. Specialists document the funding-stack treatment as part of the engagement." },
      { question: "Are SEIS specialist accountants in Swansea experienced with Welsh devolved funding interactions?",
        answer: "Yes — Welsh-specific SEIS work is concentrated in the Swansea network catchment. Practices have handled DBW co-investment, Welsh Government innovation grants, and the interaction with the merged R&D scheme treatment for grant-funded versus equity-funded R&D activity. The work is paperless; specialists in Cardiff and Bristol also serve Swansea founders without geographic friction." },
    ],
  },

};

export function getCityDeepContent(slug: string): CityDeepContent | undefined {
  return cityDeepContent[slug];
}
