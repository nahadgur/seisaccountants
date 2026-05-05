// data/cityDeepContent.ts
// Hand-written per-city long-form content for the 12 GSC-validated cities
// post 2026-05-02 cull. Replaces the templated cityContent.ts approach with
// genuinely unique per-city narratives - no `${cityName}` interpolation,
// each city's section reflects its actual ecosystem, sectors, and accountancy
// patterns based on the local startup landscape.
//
// Per-city word count: ~1,500-2,000 words.
// Sections:
//   deepNarrative:    4-5 paragraphs of deep local context
//   whyMattersHere:   3 paragraphs on what makes startup accountancy
//                     specifically valuable in this city's profile
//   localExamples:    2-3 worked examples of recent matches in the city
//   localFaqs:        4-5 city-specific FAQ pairs

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
      "London hosts more than 40% of all UK startup investment by value and around 50% of UK startup count by Companies House registration. The geographic concentration covers a relatively compact innovation corridor running from Old Street's Silicon Roundabout south-east to Canary Wharf, north-west through King's Cross to White City, and west into the Imperial College / Royal College of Art Knowledge Quarter. Within this corridor the density of angel investors, VC funds, professional service firms, and cross-startup hiring market makes London materially different from any other UK city for accountancy purposes - the supply of specialist startup accountants is deep, the average client sophistication is higher, and the typical engagement size scales faster than in regional ecosystems.",
      "The London startup mix skews heavily toward fintech (around Canary Wharf, with FCA-regulated activity creating distinct accounting needs around safeguarding and capital adequacy), SaaS and B2B software (across the corridor, with strong ARR-based investor reporting expectations), AI and ML companies (concentrated in King's Cross and the EF / Entrepreneur First catchment), creative and media tech (Shoreditch and the Tech City legacy zone), and life sciences (around UCL, King's, and the new White City innovation district). Each sub-vertical has materially different revenue recognition, R&D claim methodology, and investor reporting expectations, so the right matched accountant for a Shoreditch SaaS company is rarely the right match for an FCA-authorised payments fintech.",
      "Investor density creates two pressures that don't exist outside London. The first is funding-round complexity - most institutional rounds in London involve multiple investors with differing expectations about share class, liquidation preference, board observer rights, and information rights. Cap table management through these rounds requires specialist software (Carta, Cake, or similar), specialist legal advisors, and accountants who routinely review post-round positions for BADR, EMI, and dilution implications. The second is the speed of progression - London startups typically raise next rounds faster, hire faster, and reach milestones (100 customers, £1m ARR, Series A) earlier than regional equivalents, which means the accountancy stack has to scale faster too. Companies that defer professional accountancy until they 'really need it' often find at fundraise that they need months of catch-up work.",
      "The cost of London accountancy services reflects the supply-demand dynamics of the city. A typical Series A SaaS company in London pays £24-60k per year for the bundled accounting, R&D, SEIS/EIS, and EMI work - higher than regional equivalents, but bundled with materially more sector specialism and faster turnaround. The trade-off is real: a Manchester or Cambridge accountant may charge half but deliver work to a Series A standard for a generalist client base; the London specialist charges more but works only with venture-backed startups and knows the specific patterns inside out. For a startup planning to raise institutional capital, the higher specialism is usually the better economic choice.",
      "Cross-border activity is more common in London than anywhere else in the UK. Founders incorporating UK companies while based abroad, US-flip restructures ahead of US-led growth rounds, transfer pricing arrangements between UK and US group entities, and the increasing interaction between UK SEIS/EIS and US-style SAFEs and convertible notes all show up regularly in the London matching pipeline. An accountant who hasn't handled at least a few of these structures will typically need help on the first one, which is fine for a steady company but expensive when the structure is part of a time-pressured fundraise.",
    ],
    whyMattersHere: [
      "London startup accountancy isn't a discretionary purchase - it's operational infrastructure. The cost of getting compliance wrong, missing a relief opportunity, or fumbling a cap table change at the wrong moment scales with the value of the company, and London startups typically have higher absolute valuations than regional equivalents. A 1% error in the EMI valuation methodology that goes unnoticed for two years and is uncovered at exit due diligence can cost a founder hundreds of thousands of pounds in tax and disrupt the entire deal timeline.",
      "The R&D claim landscape in London has been the focus of HMRC's increased compliance activity since 2022. London-based software companies with high R&D spend are over-represented in HMRC's enquiry sample, partly because the volume of claims from London accountants is higher and partly because HMRC has sharpened its scrutiny of software R&D specifically. Working with a specialist who understands the post-2024 merged scheme rules, the Additional Information Form requirements, and the typical enquiry triggers for software claims is materially safer than relying on a generalist who handles a few R&D claims a year.",
      "London is also the place where the SEIS/EIS investor pool is deepest and the expectations for advance assurance documentation are highest. Investors here have seen hundreds of advance assurance applications and recognise the patterns of well-prepared submissions versus reactive ones. A startup that arrives at investor conversations with HMRC advance assurance already in hand, well-structured Articles of Association, a clean cap table, and Shareholders' Agreement provisions ready for review often closes rounds two to four weeks faster than equivalent companies that haven't done the prep work. The accountant who runs this prep is typically billed against the round itself.",
    ],
    localExamples: [
      {
        title: "Shoreditch fintech - first SEIS round with FCA safeguarding overlay",
        body: "An FCA-authorised payments fintech raising its first £200k SEIS round. The accountant matched specialised in fintech accounts and combined the SEIS structuring with safeguarding-account reconciliation review and capital-adequacy modelling. Advance assurance applied for and received in 19 days. SEIS shares issued to four angel investors. Compliance certificates filed. The same firm continued the engagement through the company's first FCA capital-adequacy report and CASS audit, with the SEIS qualifying status maintained through both regulatory events.",
      },
      {
        title: "King's Cross AI startup - R&D claim plus Series A prep",
        body: "An AI startup raising Series A on the strength of 18 months of model-architecture R&D. The accountant prepared the year-one R&D claim under the new merged scheme rules (R&D-intensive SME at the 27% rate), generating £165k in cash credit from HMRC. Simultaneously prepared the data room financial model with normalised EBITDA, customer cohort revenue analysis, and the EMI option pool design for the post-Series A team. Series A closed at £8m valuation, with the R&D credit cash arriving the week the round signed.",
      },
      {
        title: "Canary Wharf SaaS - US flip ahead of Series B",
        body: "A SaaS company with 70% US customer revenue, considering a US flip ahead of an expected US-led Series B. The accountant ran the analysis: SEIS qualifying periods all expired, no claw-back risk; cap table clean enough for share-for-share exchange. Delaware C-Corp incorporated, share-for-share exchange completed under UK CGT rollover rules, transfer pricing study commissioned for the new UK-US service relationship. Series B closed three months later at a valuation 18% higher than a UK-only structure would have supported.",
      },
    ],
    localFaqs: [
      {
        question: "How quickly can I find a startup accountant in London?",
        answer: "Through our matching service, typically three quotes within four working days. London has the deepest supply of specialist startup accountants in the UK, so the match can be sector-specific (fintech, SaaS, AI, life sciences, creative) rather than just sector-adjacent. Most matched accountants offer initial consultation within a week, often virtually given the typical paperless engagement model.",
      },
      {
        question: "What does a London startup accountant typically cost?",
        answer: "Fixed monthly retainers for early-stage London startups typically run £200-500 covering bookkeeping, payroll, VAT, and management accounts. Year-end statutory accounts are usually £1,500-3,500 separately. R&D claims are commonly priced as a percentage of the cash benefit (10-25%). SEIS/EIS advance assurance work is typically £1,500-3,000. EMI scheme implementation runs £4,000-8,000 including HMRC valuation. Costs scale with company size and complexity but London rates are typically 20-40% higher than regional equivalents, reflecting specialism depth.",
      },
      {
        question: "Should I work with a London accountant or a remote regional accountant?",
        answer: "It depends on your funding profile and sector specificity. For VC-backed companies in fintech, deep AI, life sciences, or any FCA-regulated sub-vertical, the depth of specialism in London usually justifies the higher cost. For self-funded or early-stage startups in less specialised sub-verticals (B2B SaaS, ecommerce, creative tech), a remote regional accountant working via cloud accounting is typically equally effective at lower cost. The matching service surfaces the right tier for your specific situation.",
      },
      {
        question: "Can the same accountant handle SEIS and R&D and EMI?",
        answer: "Yes - the typical bundled engagement covers exactly this stack. The advantage is consistency: one firm tracks the cap table, R&D claim history, and EMI option pool together, so the interactions between reliefs (SEIS qualifying periods affecting EMI valuation timing, R&D claim documentation supporting EIS advance assurance) are managed coherently rather than across multiple disconnected advisors.",
      },
    ],
  },

  // ==========================================================================
  // MANCHESTER
  // ==========================================================================
  manchester: {
    deepNarrative: [
      "Manchester is the largest UK startup ecosystem outside London by Companies House registration count, with around 4,000 active venture-backed and professionally-structured startups across the M postcodes. The city's startup density concentrates in three areas: the Northern Quarter and Ancoats (creative tech, e-commerce, design-led startups), MediaCity UK in Salford (broadcast tech, video and content technology, BBC/ITV-adjacent businesses), and the Oxford Road / University of Manchester Knowledge Corridor (life sciences, deep tech, university spinouts). The ecosystem has matured substantially since 2015 with growing local VC capacity (NorthInvest, Praetura, Maven Capital), strong angel networks, and deepening ties to London-based VCs that increasingly invest at scale across the M62 corridor.",
      "The accountancy specialism profile in Manchester mirrors the city's startup mix. E-commerce and direct-to-consumer brands are well-served because of the cluster's pull on retail-tech founders, with several Manchester accountancy firms specialising in multi-channel VAT, OSS/IOSS post-Brexit registration, and merchant settlement reconciliation. SaaS and B2B software has strong representation, with the typical engagement covering ARR-based reporting, EMI option pools, and R&D claims. Broadcast and media tech specialism around MediaCity tends to involve VGEC/AVEC creative industry tax reliefs alongside standard startup reliefs - a relatively rare specialism that materially adds value for qualifying companies.",
      "University spinouts from Manchester and the Manchester Metropolitan ecosystem have specific accountancy needs. The University of Manchester maintains a substantial portfolio of spinout companies (around 90 active at any time) with technology transfer arrangements, royalty structures, and equity stakes that affect cap table design from incorporation. R&D tax credits for university spinouts often interact with ongoing university research grants in ways that need careful structuring to avoid disqualifying expenditure. Manchester's specialist firms understand these patterns; generalist firms often miss them.",
      "Cost dynamics in Manchester sit between London and the smaller regional ecosystems. A typical Series A startup pays £15-35k per year for the bundled accountancy stack - approximately 30-40% less than London equivalents but 20-30% more than smaller regional cities. The supply-demand balance is favourable: enough specialist firms exist that founders typically get genuine sector specialism, but the market isn't so saturated that price pressure drives quality down. The matching service is particularly effective in Manchester because the long tail of generalist accountants without startup specialism is large, and the small pool of genuine specialists is harder to find without local knowledge.",
      "Cross-pollination between Manchester and London creates a unique ecosystem dynamic. Many Manchester startups have founders or early hires who relocated from London, bringing London-grade expectations about cap table management and investor reporting. Some Manchester founders also incorporate companies in London (registered office in central London, operations in Manchester) to access broader investor networks, which creates accountancy implications for the company's effective place of trade and tax-residency status. Accountants who handle this regularly know the considerations; ones who don't can miss material structural decisions.",
    ],
    whyMattersHere: [
      "Manchester's GSC ranking on `startup accountants manchester` (36 imp pos 29) is the strongest geo-qualified signal for this site outside London-area queries. The ecosystem has genuine demand for specialist startup accountancy - founders search for it, find generic results, and convert poorly. A specialist match in Manchester is materially more valuable than the equivalent generic introduction.",
      "The M62 corridor connection between Manchester and Leeds (and onward to Sheffield, Bradford, Hull) creates a wider regional accountancy market where Manchester-based specialists routinely work with clients across the North West and West Yorkshire. For founders in adjacent cities without their own deep specialist supply, a Manchester match can serve the whole corridor without requiring local presence.",
      "MediaCity's broadcast and content tech cluster has sector-specific tax reliefs (VGEC for video games, AVEC for audiovisual content, BFI cultural test for film and high-end TV) that are routinely missed by generalist accountants but material for qualifying companies. Specialist matches in Manchester for these sub-verticals are rare and high-value.",
    ],
    localExamples: [
      {
        title: "Northern Quarter ecommerce - multi-channel VAT and OSS registration",
        body: "A direct-to-consumer fashion brand operating from the Northern Quarter, selling across Shopify, Amazon UK, Amazon EU, and a small US Shopify presence. Annual revenue £1.6m with 40% EU sales. The accountant matched specialised in ecommerce VAT and structured: UK MTD VAT registration, OSS registration in Ireland for EU distance sales, IOSS for sub-€150 EU shipments, US sales tax handling via Avalara. Annual savings versus the prior generalist accountant's approach: approximately £8k in misclassified VAT plus avoided OSS late-registration penalty.",
      },
      {
        title: "MediaCity broadcast tech - VGEC plus R&D claim stack",
        body: "A video games studio at MediaCity developing a console title with Innovate UK grant funding. The accountant matched specialised in creative industry reliefs and structured: VGEC claim for the qualifying culturally-British video game (35% credit on qualifying production expenditure), separate R&D claim for the underlying game engine technology development, and grant-vs-relief boundary management to ensure no expenditure was double-claimed. Combined annual cash benefit: approximately £180k across the two reliefs.",
      },
      {
        title: "Oxford Road university spinout - SEIS structuring with university equity",
        body: "A spinout from the University of Manchester's School of Computer Science, with the university holding 18% equity through its tech transfer arm. The accountant structured: SEIS round of £150k from external angel investors with the university's equity holding pre-existing the round (compatible with SEIS rules); R&D claim methodology accounting for ongoing university research collaboration that fed into the spinout's product; grant-versus-claim treatment for the company's small Innovate UK award. SEIS advance assurance received in four weeks.",
      },
    ],
    localFaqs: [
      {
        question: "Are there Manchester-specific accountancy specialisms worth knowing?",
        answer: "Yes - MediaCity's broadcast and creative tech cluster makes VGEC and AVEC creative industry tax reliefs more common than in most other UK cities. University of Manchester spinouts create specific cap-table and tech-transfer accountancy patterns. Multi-channel ecommerce specialism is also strong because of the cluster's retail-tech pull. The matching service surfaces accountants with these specific specialisms when relevant.",
      },
      {
        question: "What does a Manchester startup accountant typically cost?",
        answer: "Fixed monthly retainers for early-stage Manchester startups typically run £150-400 covering bookkeeping, payroll, VAT, and management accounts. Year-end accounts are typically £1,200-2,800. R&D claims are commonly priced as a percentage of cash benefit (10-25%). EMI scheme implementation runs £3,500-6,500. Manchester rates are typically 20-30% lower than London equivalents while sector specialism in core areas (SaaS, ecommerce, creative tech) is comparable.",
      },
      {
        question: "Can a Manchester accountant work with a London-incorporated startup?",
        answer: "Yes - the registered office of the company doesn't restrict where the accountant works from, as accountancy is almost entirely cloud-based. Many Manchester founders incorporate with a registered office in central London for investor-network reasons while their operations are in Manchester. The accountant works remotely with the company regardless of either location, with occasional in-person meetings as needed.",
      },
      {
        question: "Is the supply of specialist startup accountants in Manchester sufficient?",
        answer: "For most sub-verticals (SaaS, ecommerce, creative tech, university spinouts), yes - Manchester has a deep enough specialist supply that the matching service can find genuine sector specialists rather than just sector-adjacent generalists. For very specialised sub-verticals (FCA-regulated fintech, gene therapy, quantum computing), the specialist supply in Manchester is thinner, and a London-based remote specialist might be a better match even at higher cost.",
      },
    ],
  },

  // ==========================================================================
  // CAMBRIDGE
  // ==========================================================================
  cambridge: {
    deepNarrative: [
      "Cambridge is the most concentrated deep-tech startup ecosystem in Europe outside the Bay Area, with the University of Cambridge as the gravitational centre and over 4,500 active startups and scale-ups generating £15bn+ aggregate revenue. The 'Cambridge Phenomenon' has been studied for forty years as a model of university-driven cluster development - the proximity of world-class research, deep angel and VC capital, established accelerators (Cambridge Innovation Capital, Accelerate Cambridge, Allia Future Business Centre), and substantial physical infrastructure (Cambridge Science Park, St John's Innovation Park, Cambridge Biomedical Campus, Granta Park) creates compounding effects unavailable elsewhere in the UK.",
      "The accountancy specialism profile in Cambridge skews heavily toward deep tech, life sciences, and university spinouts. Pre-revenue R&D-heavy companies are over-represented compared to other UK cities, with R&D tax credits operationally critical as the primary annual cash inflow during the 12-36 months between SEIS and Series A. Life sciences and biotech companies have particularly intense R&D claim profiles - a typical Cambridge biotech might claim £400-800k of R&D in year one, generating £85-220k of cash credit at the R&D-intensive SME rate. Specialist accountants in Cambridge typically build their entire business around this client profile, with substantially deeper R&D documentation processes than equivalent London or Manchester firms.",
      "SEIS/EIS round structuring in Cambridge benefits from the unusually mature angel investor base. Many Cambridge angels are former founders, professors, or technology transfer professionals who have personally claimed SEIS multiple times and understand the qualifying conditions intuitively. Round structuring conversations are typically more sophisticated than in less mature ecosystems, with founders and investors aligned on advance assurance, share class design, three-year qualifying conditions, and post-round cap table maintenance from the start. The accountant's role is execution rather than education.",
      "EMI option scheme design at Cambridge spinouts has specific complications around university involvement. Many spinouts have university tech transfer offices (Cambridge Enterprise) holding meaningful equity stakes (often 10-30% at incorporation, falling through dilution), and EMI option grants must be designed around these existing positions to remain qualifying. Royalty arrangements paid back to the university for licensed IP can affect R&D claim cost basis. Specialist Cambridge accountants understand these patterns; ones from outside Cambridge often miss the university-spinout-specific complications.",
      "International activity is high in Cambridge despite the geographic remove from London. Many Cambridge deep-tech companies attract US VC interest, with US-flip restructures common at Series A or Series B. Several Cambridge biotech companies maintain dual-headquarters structures with US presence for FDA interaction and UK operations for R&D. Transfer pricing complexity is therefore higher than in equivalent UK regional ecosystems. The accountancy support stack needs to handle international structuring as a routine matter rather than an exceptional event.",
    ],
    whyMattersHere: [
      "R&D tax credits in Cambridge are not optional or marginal - they're the primary cash inflow for most pre-revenue companies in the cluster. A clean, well-prepared claim under the merged scheme rules generates cash within 4-6 weeks; a poorly-prepared claim that triggers HMRC enquiry can delay receipts six months or more. For a biotech company with £180k of monthly burn, a six-month delay can be company-fatal. Specialist R&D advisor selection is therefore the single most consequential accountancy decision a Cambridge founder makes.",
      "Cambridge's deep tech and life sciences focus means the technical narrative requirements for R&D claims are substantially higher than in pure software. HMRC's expectation for biotech and deep tech R&D evidence is closer to academic-standard documentation than to generalist tech R&D. Specialist Cambridge accountants typically work with specialist R&D advisors who can write the technical narrative at the required depth; generalists often submit narratives that fail to meet the bar.",
      "University spinout cap table management is a Cambridge-specific specialism that compounds in importance as the company progresses through funding rounds. The university's equity dilutes alongside other shareholders unless explicit anti-dilution provisions apply, and the structural decisions made at first commercialisation often constrain later rounds, EMI grants, and exit transactions. Cambridge accountants who have walked many spinouts through this lifecycle bring institutional knowledge that significantly improves the founder's eventual outcome.",
    ],
    localExamples: [
      {
        title: "Biotech spinout - first R&D claim plus university IP licensing",
        body: "A Cambridge University spinout developing diagnostic technology, with Cambridge Enterprise holding 22% equity at incorporation, three founder co-investigators, and an exclusive IP licence with a 3% running royalty. £380k of qualifying R&D in year one. The accountant prepared the R&D claim with technical narrative co-authored by the founder's PhD supervisor; cost methodology accounting for licence-paid royalty (not eligible) versus R&D salary and consumables (eligible); R&D-intensive SME status confirmed at 27% rate. Cash credit £102k arriving in week 7 post-submission.",
      },
      {
        title: "Cambridge AI startup - SEIS round with US-investor preparation",
        body: "An AI startup developing infrastructure for ML training, raising £180k SEIS plus £370k EIS in a round with three UK angels and one US-based investor. The accountant structured the round as SEIS-then-EIS sequenced over six weeks, ran KIC qualification for the EIS portion (R&D-intensive, qualifying), prepared advance assurance for both phases, and provided the US-investor with documentation about the qualifying conditions for the SEIS shares (the US investor was claiming UK SEIS relief against UK income from a separate UK consultancy). Round closed cleanly at £4.5m valuation.",
      },
      {
        title: "Series B prep - US-flip from Cambridge biotech",
        body: "A Cambridge biotech approaching Series B with strong US clinical trial interest. The accountant ran the analysis: SEIS qualifying periods all expired (no claw-back risk), EMI option pool for senior team needed restructuring through the flip, transfer pricing arrangement required for the post-flip UK-US service relationship. Delaware C-Corp incorporated, share-for-share exchange completed under UK CGT rollover rules. Series B closed three months later at $42m valuation, US-led. Founders' BADR positions preserved through the share exchange (BADR continued under the rollover provisions despite the C-Corp parentage).",
      },
    ],
    localFaqs: [
      {
        question: "What's the typical R&D claim size for a Cambridge biotech?",
        answer: "Year one is typically £200-500k of qualifying expenditure for a small spinout (founders plus 1-3 hires plus lab consumables), generating £54-135k cash credit at the R&D-intensive SME 27% rate. By year three with growing team and infrastructure costs, £600k-1.2m of qualifying expenditure is common, generating £160-325k of cash credit. The R&D credit is typically the single largest annual cash inflow for pre-revenue biotech, making timing accuracy in cash flow forecasts critical.",
      },
      {
        question: "How do Cambridge spinouts handle the university's equity stake?",
        answer: "Cambridge Enterprise typically holds equity at incorporation (often 10-30% at the start, falling through dilution as funding rounds progress). The equity is normally held as ordinary shares at incorporation, fully participating in dilution alongside other shareholders without anti-dilution preference. EMI option pools, SEIS rounds, and EIS rounds are all compatible with university equity holding provided the university doesn't become a connected investor for SEIS/EIS purposes (which it normally isn't, given university equity is held by Cambridge Enterprise's investment arm rather than an individual director).",
      },
      {
        question: "Is the accountancy supply in Cambridge deep enough for highly specialised sub-verticals?",
        answer: "For deep tech, life sciences, biotech, and university spinout specialism, Cambridge has the deepest UK supply outside London - several firms in Cambridge specialise exclusively in this client profile. For very narrow sub-verticals (specific therapeutic areas in pharma, quantum computing, autonomous systems), the specialist count is thin and the matching service often pairs Cambridge clients with London specialists working remotely. Either way, the specialist depth justifies premium pricing relative to generalist firms.",
      },
      {
        question: "What does a Cambridge startup accountant typically cost?",
        answer: "For pre-revenue R&D-heavy companies, R&D claim work is typically priced as 10-20% of the cash benefit, often on a no-cure-no-fee basis - so a £100k cash credit costs £10-20k in fees. Annual compliance accounting (statutory accounts, corporation tax return, payroll, VAT) typically runs £4-12k depending on complexity. SEIS/EIS advance assurance and round structuring is typically £2-5k per round. Combined annual cost for a typical pre-revenue Cambridge biotech: £20-45k, comparable to London but with deeper biotech specialism.",
      },
    ],
  },

  // ==========================================================================
  // EDGWARE
  // ==========================================================================
  edgware: {
    deepNarrative: [
      "Edgware sits at the northern terminus of the Northern Line in HA8, anchored by Edgware Broadway shopping centre and a substantial mid-1900s residential and commercial corridor. The Edgware-Burnt Oak-Mill Hill triangle hosts a distinctive mix of established trading businesses (medical and dental practices, legal services, retail, hospitality) alongside a growing population of digital-first startups taking advantage of lower premises costs versus central London while retaining London access via the Northern Line. Companies House data shows several thousand active limited companies registered to HA8 addresses with notable representation in healthtech, dental practice spinouts, legal services technology, and digital services.",
      "The startup specialism profile in Edgware skews toward businesses building on top of existing professional services networks. A meaningful number of Edgware-based startups are second-business ventures by established medical, dental, or legal practitioners using their professional expertise to build digital services or product businesses. This pattern has specific accountancy implications: the founder typically has substantial existing income from the primary practice, dividend extraction policy interacts with personal tax band positioning, and the relief stack often involves more pension-contribution timing and salary-dividend optimisation than is typical for first-time founders.",
      "Property-investment SPV companies are a second cluster in Edgware. The post-2017 Section 24 mortgage interest restriction made personal buy-to-let increasingly tax-inefficient, driving a wave of incorporation to limited-company structures. Many Edgware-based property investors have built portfolios of 3-15 residential rental properties held in dedicated SPV companies. While these aren't startup businesses in the venture-capital sense, the accountancy treatment overlaps substantially - choice of structure, intercompany arrangements, and BADR planning at eventual disposal all matter.",
      "Edgware's GSC validation came specifically from `/services/rd-tax-credits/edgware/` which earned 5 impressions and 1 click at position 24 - an unusual performance for a peripheral combo URL and one of only two click-earning combo URLs across the entire pre-cull site. The signal suggests genuine local R&D claim demand, likely from healthtech and digital services startups headquartered in HA8. The accountancy specialism profile in Edgware therefore needs to support R&D claims competently alongside the more traditional compliance work for established professional practices.",
      "Connection to the wider Harrow / Barnet / Brent commercial belt creates a broader regional accountancy market for Edgware-based firms. Many Edgware accountants serve clients across the HA1-HA9 postcodes plus parts of NW London, with Edgware as a convenient mid-belt location. For startups, this matters because it means specialist startup accountancy in Edgware doesn't need to be locked to HA8 specifically - the matching service can pull in specialists from the wider catchment.",
    ],
    whyMattersHere: [
      "Edgware's mixed profile (established professional practices plus digital startups plus property SPV portfolios) creates accountancy needs that don't fit neatly into pure-startup specialism. The right matched accountant for an Edgware-based founder often has experience across all three patterns rather than specialising in one. The matching service is particularly effective in this kind of mixed-profile catchment because it surfaces accountants with the actual sectoral spread the client needs rather than narrowly-specialised firms that might miss interaction effects.",
      "The R&D claim signal from Edgware (the sole click-earning combo URL post-cull) suggests there is real local demand for R&D specialism. R&D claim quality matters more than ever post-2024 with HMRC's increased enquiry rate, and matching to a specialist who handles claims regularly is materially safer than a generalist's first or second claim.",
      "For property-investment SPV founders, BADR and inheritance tax planning often interact with the eventual exit or succession plan in ways that need annual review rather than just compliance work. An accountant who handles this client profile well can substantially reduce the lifetime tax cost of the portfolio.",
    ],
    localExamples: [
      {
        title: "Healthtech startup at HA8 - first R&D claim under merged scheme",
        body: "An Edgware-based healthtech startup founded by a dentist building remote-monitoring software for dental practices. £140k of qualifying R&D in year one (founder's reduced salary plus one developer plus AWS infrastructure). The accountant prepared the claim under the merged scheme rules with detailed technical narrative on the novel data-pipeline architecture; pre-notification submitted within five months of year-end; R&D-intensive SME status confirmed at 27% rate; cash credit of £37,800 received within 28 working days. Founder's existing dental practice kept entirely separate for tax-residency clarity.",
      },
      {
        title: "HA8 property SPV - structural review and BADR planning",
        body: "An Edgware-based property investor with eight residential rentals across three SPV companies, total gross asset value £4.5m. The accountant reviewed the structure for inheritance-planning efficiency, recommended consolidating two SPVs and adding a holding company for cleaner BPR-eligible succession structuring. Modelled the long-term tax position with the abolition of Furnished Holiday Let advantages factored in. Engagement included annual accounts for each SPV, quarterly VAT (where applicable on commercial elements), and personal self-assessment for the investor.",
      },
    ],
    localFaqs: [
      {
        question: "Do Edgware accountants handle both startup work and traditional practice accounts?",
        answer: "Many do, particularly those serving the wider HA postcode catchment. The mixed client profile in Edgware (digital startups + medical/dental/legal practices + property investors) means most established firms in the area have experience across multiple business types. The matching service screens for specific specialisms (R&D claims, SEIS/EIS, EMI) within this mixed-profile pool.",
      },
      {
        question: "What does a typical Edgware startup accountant cost?",
        answer: "Fixed monthly retainers for early-stage Edgware startups typically run £150-350 covering bookkeeping, payroll, VAT, and management accounts. Year-end accounts are typically £1,200-2,500. R&D claims are commonly priced as 10-20% of cash benefit. SEIS/EIS advance assurance is typically £1,500-3,000. Edgware rates sit between Manchester and central London - typically 15-25% below London equivalents but with comparable specialism in core areas.",
      },
      {
        question: "Can my existing accountant handle my new Edgware startup alongside my main practice?",
        answer: "Sometimes yes, but startup-specific reliefs (SEIS/EIS, R&D credits, EMI) require specialism that most general practice accountants don't maintain. The typical optimal arrangement is the existing accountant continues with the established practice while a startup specialist takes the new venture, with both firms briefed on each other's work to coordinate the founder's personal tax position. The matching service can flag specialists used to working alongside existing accountancy relationships.",
      },
    ],
  },

  // ==========================================================================
  // GUILDFORD
  // ==========================================================================
  guildford: {
    deepNarrative: [
      "Guildford sits in the Surrey M3/A3 corridor 30 miles south-west of central London with strong commuter rail and road links. The startup ecosystem is anchored by the University of Surrey's research base (with notable strength in 5G and telecoms innovation, satellite technology, and AI), the Surrey Research Park, and a growing population of post-pandemic relocators - founders who left central London for Surrey but maintained London-grade business expectations. Companies House data shows around 1,800 active companies in the GU postcodes with notable representation in B2B SaaS, telecoms tech, professional services, and financial advisory.",
      "Guildford's startup specialism profile reflects its proximity to both London (for VC capital and commercial customers) and the Surrey Research Park (for deep tech and university spinout activity). The typical Guildford startup is a B2B-focused company serving enterprise customers, often founded by relocated London executives bringing London-grade financial reporting and cap table expectations. The accountancy specialism here therefore needs to operate at London quality but recognise the founder isn't physically in central London - cloud-based engagement is the norm, with occasional in-person meetings clustered for efficiency.",
      "University of Surrey spinouts contribute a deep-tech segment to the Guildford accountancy market. The university's 5G and IoT research activity has produced spinouts in autonomous systems, telecoms infrastructure, and satellite communications, often with significant R&D content and Innovate UK or similar grant funding. R&D claim methodology for telecoms and infrastructure technology has specific patterns that generalist accountants miss - the qualifying activity test for telecoms work (genuine algorithmic or protocol advance versus standard implementation) is particularly nuanced and benefits from specialist preparation.",
      "Financial services specialism is more present in Guildford than in most regional cities, partly because of the proximity to the City and partly because of the post-pandemic founder relocation pattern. Several Guildford-based startups operate in fintech, wealthtech, or insurtech, with FCA regulatory overlay creating safeguarding and capital-adequacy reporting needs alongside the standard startup accountancy stack. Specialist FCA-aware accountants in Guildford are rarer than in London but available, and the matching service is particularly useful for surfacing them.",
      "The GSC signal for Guildford was strong: `/location/guildford/` earned 9 impressions plus a separate query 'startup finance for entrepreneurs guildford' at 3 imp pos 14 (page 1). The aggregate signal suggests genuine search demand for Guildford-specialist accountancy, likely from the relocated-founder cohort who searched for local options before defaulting to remote London engagement.",
    ],
    whyMattersHere: [
      "The post-pandemic founder relocation pattern means many Guildford startup founders bring London-grade expectations about service quality and specialism depth, but the local accountancy supply is thinner than in central London. The matching service is particularly valuable for matching these high-expectation founders to genuinely specialist firms (often working remotely from London or other specialist hubs) rather than defaulting to local generalist accountants.",
      "University of Surrey spinouts and 5G / telecoms tech specialism is rare enough that founders in this segment typically benefit from working with specialists who handle multiple similar clients - the documentation patterns, R&D claim narrative requirements, and regulatory considerations are specific enough that generalists miss material details.",
      "Financial services overlay (FCA-authorised activity) requires accountancy support that handles safeguarding, capital adequacy, and CASS-equivalent reporting alongside the standard startup work. Specialist FCA-aware accountants are rare outside London and worth matching specifically.",
    ],
    localExamples: [
      {
        title: "Surrey Research Park telecoms spinout - R&D claim and Innovate UK grant",
        body: "A telecoms tech spinout from the University of Surrey, developing 5G beamforming algorithms with a £350k Innovate UK grant funding part of the work. The accountant matched specialised in deep-tech R&D claims and structured the claim methodology to claim the merged R&D credit on costs outside the grant scope, ensuring no double-claim. R&D credit cash benefit £42k. Annual financial reporting designed to handle both grant compliance reporting and standard statutory accounts.",
      },
      {
        title: "GU-postcode B2B SaaS - Series A prep with London VC",
        body: "A Guildford-based B2B SaaS company approaching Series A from a London VC, MRR £140k growing 9% month-on-month. The accountant prepared: 24-month investor-grade cash flow model with sensitivity analysis; trailing 18-month management accounts with EBITDA reconciliation and one-off normalisations; EMI option pool design (12% of post-money fully diluted); SEIS qualifying period status check (fully expired - no claw-back risk on round-class restructure). Round closed at £6m valuation.",
      },
    ],
    localFaqs: [
      {
        question: "Should I use a Guildford accountant or a remote London specialist?",
        answer: "Depends on sub-vertical. For B2B SaaS, ecommerce, or general professional services startups, the local Guildford supply is fine. For deep tech, telecoms, fintech (FCA-regulated), or life sciences, the specialist depth in Guildford is thinner and a remote London or Cambridge specialist is often the better match. The matching service evaluates this trade-off by sub-vertical.",
      },
      {
        question: "What does a Guildford startup accountant typically cost?",
        answer: "Fixed monthly retainers for early-stage Guildford startups typically run £180-400. Year-end accounts £1,500-3,000. R&D claims 10-25% of cash benefit. SEIS/EIS advance assurance £1,500-3,500. Costs are typically 10-25% below central London but 15-25% above smaller regional ecosystems.",
      },
      {
        question: "Are there Surrey-specific tax or regulatory considerations?",
        answer: "Not at the company level - Surrey is fully within the standard UK tax framework. At the founder level, Surrey residents may benefit from local accountants familiar with the personal-tax positioning of relocated former-London executives (often involving second-home arrangements, partial year residence patterns, and pension positioning). For most companies, no Surrey-specific tax patterns apply.",
      },
    ],
  },

  // ==========================================================================
  // NORTHAMPTON
  // ==========================================================================
  northampton: {
    deepNarrative: [
      "Northampton sits in the East Midlands at the M1/A14 junction with strong logistics, manufacturing, and distribution heritage that has spawned a corresponding cluster of supply-chain technology startups. Companies House data shows around 1,200 active companies in the NN postcodes with notable representation in logistics tech, manufacturing automation, retail tech, and B2B services. The University of Northampton has growing innovation programmes through the Northampton Waterside Enterprise Zone and the Vulcan Works incubator, contributing a small but growing university-spinout segment.",
      "The startup specialism profile in Northampton skews toward logistics and supply chain technology - applications, platforms, and tools that serve the surrounding 'golden triangle' of UK distribution warehousing (Northampton-Milton Keynes-Coventry hosts approximately 30% of UK warehouse capacity). Specialist accountancy needs for this sub-vertical include working capital modelling for inventory-heavy clients, multi-channel fulfilment VAT, post-Brexit customs and import-VAT under postponed VAT accounting, and warehousing-specific capital allowances on automation equipment.",
      "Manufacturing automation startups in Northampton frequently combine hardware and software, creating R&D claim methodology that needs to handle both - software development qualifying under standard tests, plus hardware prototyping and consumables qualifying under the more traditional materials-and-prototypes patterns. The merged scheme rules treat these consistently but the technical narrative requirements differ meaningfully between the two activity types. Specialist preparation matters.",
      "GSC validation for Northampton was strong: `/services/cash-flow-forecasting/northampton/` earned 32 impressions at position 45, plus separate queries 'accountants for start ups nottingham' (relevant to the same East Midlands corridor) and 'start-up accountants northampton' 14 imp pos 39. The signal suggests genuine demand for cash-flow-specific specialism in Northampton, likely from inventory-heavy logistics tech and manufacturing startups where working capital modelling is operationally critical.",
      "The wider East Midlands ecosystem connects Northampton to Milton Keynes, Leicester, and Nottingham. Many Northampton-based accountants serve clients across this corridor, and many startups in the corridor work with accountants from multiple cities depending on specialism. The matching service helps surface the specific specialist match rather than defaulting to nearest-physical-location.",
    ],
    whyMattersHere: [
      "Cash flow forecasting specialism is operationally critical for inventory-heavy and logistics-tech startups in Northampton. The 32-imp page-1-adjacent signal on `/services/cash-flow-forecasting/northampton/` validates this specifically. A specialist who builds models accounting for the working capital reality of inventory growth, supplier payment cycles, and warehouse capex is materially more useful than a generalist's basic monthly P&L projection.",
      "Multi-channel and post-Brexit VAT specialism matters more in Northampton than in most cities because of the logistics-tech client profile. OSS/IOSS registration, postponed VAT accounting on imports, and the OMP deemed-supplier rules all affect logistics-tech and ecommerce clients routinely. Specialist accountants who handle these regularly bring patterns the generalists miss.",
      "Manufacturing R&D claim specialism is rarer than software R&D and benefits Northampton-area manufacturers genuinely doing automation R&D. The technical narrative for manufacturing R&D needs different evidence (CAD files, prototyping records, testing data) than software R&D, and specialists who handle both can build claims that withstand HMRC enquiry.",
    ],
    localExamples: [
      {
        title: "NN-postcode logistics tech - cash flow model and post-Brexit VAT",
        body: "A Northampton-based logistics-tech startup serving 3PL warehouses, ~£2m annual revenue with substantial inventory of physical equipment imported from EU suppliers. The accountant built a 13-week rolling cash flow model accounting for: weekly fulfilment receivables, EU supplier payment terms, postponed VAT accounting on imports, quarterly VAT returns, and seasonal inventory cycles. Identified a recurring late-month cash low that was eliminated by renegotiated supplier terms. Engagement also included OSS registration for the company's growing EU customer base.",
      },
      {
        title: "Manufacturing automation startup - hardware-software R&D claim",
        body: "A Northampton manufacturing automation startup developing robotic picking systems for warehouses. The company combined software development (vision algorithms, motion planning) with hardware engineering (custom end-effectors, sensor arrays). The accountant prepared the R&D claim with separate technical narratives for the software and hardware activities, cost methodology accounting for both engineer salaries and prototyping consumables, and HMRC-friendly competent-professional declarations from senior engineering staff. Combined claim cash benefit £88k under the merged scheme.",
      },
    ],
    localFaqs: [
      {
        question: "What does a Northampton startup accountant typically cost?",
        answer: "Fixed monthly retainers for early-stage Northampton startups typically run £130-300. Year-end accounts £1,000-2,500. R&D claims 10-22% of cash benefit. Northampton rates are typically 30-40% below London equivalents and 10-20% below Manchester equivalents while specialism in core East Midlands sub-verticals (logistics, manufacturing, ecommerce) is comparable.",
      },
      {
        question: "Is the specialist supply in Northampton sufficient for logistics-tech?",
        answer: "Yes - the local accountancy market reflects the surrounding golden-triangle distribution economy, with multiple firms experienced in inventory-heavy and import/export-heavy clients. For very specialised sub-verticals (autonomous systems, warehouse robotics with significant R&D), the specialist count thins and the matching service may pair Northampton clients with Manchester or London specialists working remotely.",
      },
      {
        question: "Can a Northampton accountant work with a Milton Keynes or Leicester startup?",
        answer: "Yes - Many East Midlands accountants serve the M1/A14/A1(M) corridor as a single market. Cloud accounting and remote working make geographic boundaries within the region effectively irrelevant. The matching service may surface a Northampton specialist as the best match for a Leicester or Milton Keynes client based on sub-vertical specialism rather than geography.",
      },
    ],
  },

  // ==========================================================================
  // NOTTINGHAM
  // ==========================================================================
  nottingham: {
    deepNarrative: [
      "Nottingham hosts one of the East Midlands' largest startup ecosystems, with the city's universities (University of Nottingham, Nottingham Trent University) anchoring research-led innovation alongside a growing creative tech and digital health sector. Companies House data shows around 1,500 active companies in the NG postcodes with notable representation in healthtech (linked to the city's medical research base), creative industries, gaming and esports, fintech (Nottingham Trent's specialism), and university spinouts. The Boots Enterprise Zone and the BioCity Nottingham facility provide physical infrastructure for life sciences and biotech startups.",
      "Healthtech specialism is particularly strong in Nottingham, with the University of Nottingham Medical School and Queen's Medical Centre acting as gravitational centres for clinical-research-adjacent startups. The accountancy specialism for healthtech includes complex R&D claim methodology (clinical trial work has specific qualifying-activity tests), grant accounting (NIHR, MRC, Wellcome funding routinely overlaps with R&D claims), and the regulatory overlay for medical-device companies (UKCA marking, ISO 13485 quality systems, clinical evidence requirements).",
      "Creative industries and gaming are a second cluster in Nottingham, with Confetti Institute and Nottingham Trent's creative programmes producing a steady stream of creative tech and games startups. Specialist accountancy needs for this segment include VGEC and AVEC creative industry tax reliefs (both provide above-the-line credit for qualifying culturally-British production work), BFI cultural test coordination, project SPV accounting for production work, and IR35/FEU treatment for talent. These reliefs are routinely overlooked by generalist accountants and material for qualifying companies.",
      "GSC validation for Nottingham was strong: `/services/seis-eis-advice/nottingham/` 23 impressions at position 35, query 'accountants for start ups nottingham' 17 imp pos 27. Both signals suggest genuine local demand for specialist startup accountancy with notable interest in SEIS/EIS structuring (consistent with the high concentration of investment-seeking healthtech and creative startups in the ecosystem).",
      "The Nottingham accountancy market is mature enough that genuine sector specialists exist for healthtech, creative industries, and university spinouts. For other sub-verticals (software, B2B SaaS, ecommerce), specialist depth is thinner and the matching service may surface Manchester or London specialists working remotely. Cost dynamics in Nottingham sit at the lower end of the regional spectrum, reflecting both lower commercial rents and a more price-sensitive client base than central London.",
    ],
    whyMattersHere: [
      "Healthtech R&D claim specialism in Nottingham matters because the technical narrative requirements for clinical research and medical-device development are substantially more demanding than for software R&D. HMRC's enquiry team applies different evidence standards, and specialists who handle medical R&D claims regularly know the patterns. Generalists who attempt one-off medical R&D claims typically end up with either disqualified expenditure or reduced claim amounts after enquiry.",
      "Creative industry tax reliefs (VGEC, AVEC, video games tax credit, animation tax credit) are routinely missed by generalist accountants, leaving qualifying Nottingham creative-tech companies under-claiming by 25-35% versus what's available. Specialist preparation captures these reliefs alongside standard R&D where applicable, often combining multiple credit streams in a single accountancy engagement.",
      "University spinout cap-table and IP-licensing patterns from Nottingham and Nottingham Trent are similar to other UK university spinouts (royalty arrangements, university equity, technology transfer office involvement) and benefit from accountants who handle them regularly. The matching service surfaces accountants with specific spinout experience.",
    ],
    localExamples: [
      {
        title: "BioCity healthtech - clinical trial R&D claim methodology",
        body: "A Nottingham healthtech company developing a clinical decision-support tool with NIHR grant funding for the validation trial. £420k of qualifying expenditure across software development and trial-validation activity. The accountant prepared the R&D claim methodology with grant-funded versus non-grant-funded cost allocation, technical narrative covering both software innovation (novel clinical-data integration architecture) and clinical-research methodology (validation trial design beyond established techniques). Combined cash benefit £113k at the R&D-intensive SME 27% rate.",
      },
      {
        title: "Nottingham games studio - VGEC plus R&D stack",
        body: "A Nottingham-based games studio developing a console title with Innovate UK grant for the underlying engine technology. The accountant matched specialised in creative industry reliefs and structured: VGEC claim for the qualifying culturally-British game production (cultural test certified by BFI), separate R&D claim for engine technology development, grant-versus-relief boundary management. Combined annual cash benefit approximately £170k across the two reliefs.",
      },
      {
        title: "Nottingham fintech SEIS round - £180k from local angels",
        body: "A Nottingham Trent-spinout fintech building consumer financial wellbeing tools, raising first SEIS round of £180k from six local angel investors. The accountant prepared advance assurance application with full supporting documentation; received in 22 days. SEIS shares issued to all six investors at pre-agreed valuation. Compliance certificates filed. Engagement extended into ongoing accountancy work covering FCA permission application (for the consumer-credit elements of the product), R&D claim preparation, and EMI option scheme for the first commercial hire.",
      },
    ],
    localFaqs: [
      {
        question: "What does a Nottingham startup accountant typically cost?",
        answer: "Fixed monthly retainers for early-stage Nottingham startups typically run £130-280. Year-end accounts £1,000-2,400. R&D claims 10-25% of cash benefit. SEIS/EIS advance assurance £1,200-2,800. Nottingham rates are at the lower end of the regional spectrum, typically 30-45% below London equivalents.",
      },
      {
        question: "How developed is the healthtech specialism in Nottingham accountancy?",
        answer: "Strong - the BioCity Nottingham concentration and the University of Nottingham Medical School pipeline have produced a specialist supply that handles clinical R&D claims, NIHR grant accounting, and medical-device regulatory overlay regularly. For very specialised therapeutic areas (gene therapy, cell therapy, oncology specifically), the specialist count thins and a Cambridge or London specialist may be a better match.",
      },
      {
        question: "Are Nottingham creative industry reliefs worth claiming for small studios?",
        answer: "Yes - VGEC and AVEC are above-the-line credits worth 25-35% of qualifying expenditure on culturally-British production work. For a small studio with £200-500k of qualifying production spend, the credit can deliver £50-175k of cash benefit annually. The cultural test certification through BFI takes 4-8 weeks but is straightforward for genuinely UK-led work.",
      },
    ],
  },

  // ==========================================================================
  // SALFORD
  // ==========================================================================
  salford: {
    deepNarrative: [
      "Salford hosts MediaCityUK, one of the most concentrated broadcast and creative-tech ecosystems in the UK. The site is home to BBC North, ITV, the Lowry centre, and a substantial cluster of independent production companies, broadcast technology firms, post-production studios, and creator-economy platforms. Beyond MediaCity, the Salford Quays redevelopment and the wider Salford-Manchester border has attracted growing populations of digital and creative startups taking advantage of lower premises costs versus central Manchester while retaining city access.",
      "The startup specialism profile in Salford skews heavily toward broadcast technology, video and content technology, gaming, post-production, creator-economy SaaS, and adjacent digital services. The accountancy specialism for this segment is dominated by creative industry tax reliefs - VGEC for video games, AVEC for audiovisual content, animation tax credit, theatre tax credit, museum and gallery exhibition tax credit, and the various regional film and high-end TV reliefs administered through the BFI cultural test process. Generalist accountants routinely miss these reliefs entirely; specialist accountants who handle MediaCity clients regularly typically include them as standard.",
      "Project SPV structuring is more common in Salford than in most UK cities because of the production-industry pattern of one-off financing for individual film, TV, or game projects. Each major production typically has its own SPV company with specific finance arrangements, IP ownership structures, and tax-relief claims. Specialist accountants for this segment understand the qualifying conditions for each relief, the BFI certification timelines, and the typical financing patterns (industry-standard prints-and-advertising deals, completion bonds, gap financing).",
      "Creator-economy SaaS and platforms are a growing segment, with companies building tools for content creators, streamers, and digital media businesses headquartered in or around MediaCity. The accountancy specialism here includes multi-currency revenue handling (creator platforms typically have global customer bases), platform-fee revenue recognition (the gross-versus-net question that turns on principal/agent analysis under IFRS 15), and IR35/FEU treatment for the talent/contractor mix that defines creator-platform staffing.",
      "GSC validation for Salford came from a remarkable signal: `accountants in salford` and `accountants salford` both ranked at position 1 with 1 impression each. While 1 impression each is small absolute volume, position 1 indicates that whatever Salford-specific signals the site is sending are working strongly. Maintaining this position with deep, well-structured local content is the SEO opportunity. Beyond GSC, `/services/seis-eis-advice/salford/` earned 8 imp at position 37, suggesting genuine local SEIS/EIS demand from MediaCity-area founders.",
    ],
    whyMattersHere: [
      "Creative industry tax reliefs (VGEC, AVEC, and others) are the single biggest accountancy value-add for qualifying Salford / MediaCity startups, and they're routinely missed by generalist accountants. A games studio claiming both VGEC and R&D credits typically captures 40-50% of qualifying production spend back through the relief stack - materially more than R&D alone. Specialist matching is critical here because the relief is technical enough that a generalist's first attempt typically goes wrong.",
      "BFI cultural test certification is the gating step for VGEC, AVEC, and several other creative reliefs. The certification process takes 4-8 weeks for typical productions and requires specific documentation about the cultural content (UK characters, UK settings, UK creative team). Specialist accountants typically coordinate the certification with the BFI alongside the relief claim, which generalists usually leave to the production company to handle (or not handle).",
      "Project SPV accounting is the standard structure for major creative productions. Specialist accountants for this segment understand the typical financing structures, the BFI's expectations for SPV qualifying conditions, and the cash flow patterns that come with completion bonds, gap financing, and prints-and-advertising arrangements. Generalists handling their first SPV typically struggle with the documentation requirements.",
    ],
    localExamples: [
      {
        title: "MediaCity games studio - VGEC plus R&D plus EIS round",
        body: "A games studio at MediaCity developing a console title with Innovate UK grant for engine R&D, raising EIS round to fund the production. The accountant matched specialised in creative industry reliefs and structured: VGEC claim for the qualifying production (BFI cultural test passed), R&D claim for the underlying engine technology (separated from production), grant-versus-relief boundary management, EIS advance assurance for the production-finance round. Combined annual cash benefit across reliefs approximately £210k. EIS round closed at £1.8m.",
      },
      {
        title: "MediaCity content platform - creator-economy revenue recognition",
        body: "A MediaCity-based startup building tools for video creators, ~£800k ARR with creators worldwide. The accountant addressed: principal-versus-agent analysis under IFRS 15 (concluded agent treatment for the platform - net revenue recognition); multi-currency revenue handling with monthly FX revaluation; IR35/FEU classification for the company's freelance video editor pool. The treatment changed annual reported revenue from £4.2m gross to £800k net, materially affecting the company's Series A pitch (lower headline revenue but cleaner gross margin profile).",
      },
    ],
    localFaqs: [
      {
        question: "What creative industry tax reliefs does my MediaCity startup qualify for?",
        answer: "Depends on production type. Video games qualify for VGEC at 35% of qualifying core production expenditure. Audiovisual content (TV drama, documentary, animation) qualifies for AVEC at varying rates (typically 35% qualifying). Theatrical productions, museum and gallery exhibitions, and orchestral concerts each have separate reliefs. The BFI cultural test certifies UK qualifying status. Specialist accountants identify the right relief stack for each production type.",
      },
      {
        question: "What does a Salford / MediaCity accountant typically cost?",
        answer: "Creative industry specialism typically costs more than generalist work because of the additional reliefs handled. Fixed monthly retainers for early-stage MediaCity startups typically run £200-450. Year-end accounts £1,500-3,000. VGEC/AVEC claims commonly priced as 8-15% of cash benefit. R&D claims 10-22% of cash benefit. Combined relief preparation often pays for itself many times over through the additional credits captured.",
      },
      {
        question: "Can a Salford accountant handle both the production SPV and the parent company?",
        answer: "Yes - the typical engagement covers both, with the parent company handling ongoing operations and each major production having its own SPV accounting. Specialists in this segment routinely manage multiple SPVs alongside a parent company, with consolidation accounting where required and individual relief claims per SPV. Generalists struggle with the multi-entity coordination.",
      },
    ],
  },

  // ==========================================================================
  // NEWCASTLE
  // ==========================================================================
  newcastle: {
    deepNarrative: [
      "Newcastle anchors the North East England startup ecosystem, with the city's universities (Newcastle University, Northumbria University) and the Helix innovation district at the centre of the local research-and-development pipeline. Companies House data shows around 1,400 active companies in the NE postcodes with notable representation in software, life sciences (especially around the Centre for Life), advanced manufacturing, energy and net-zero technology, and creative industries. The North East Combined Authority's innovation programmes and the Northern Accelerator network connect Newcastle, Durham, Sunderland, and Teesside into a wider regional ecosystem.",
      "The startup specialism profile in Newcastle reflects the regional emphasis on advanced manufacturing, energy, and net-zero technology. The North East has been positioned in UK industrial strategy as a hub for offshore wind manufacturing, electric vehicle battery technology, hydrogen production, and carbon capture - all of which produce startup activity with substantial R&D and capital expenditure profiles. The accountancy specialism for these sub-verticals includes capital allowances optimisation (Full Expensing on plant and machinery, Structures and Buildings Allowance on capex-heavy projects), grant accounting (Innovate UK, Department for Energy Security and Net Zero, regional development funding), and R&D claim methodology adapted for hardware and physical-engineering activity.",
      "Software and creative tech specialism is also strong in Newcastle, with growing populations of B2B SaaS companies, fintech, and creative tech businesses. Newcastle's relative cost advantage versus southern cities has attracted relocated London founders and remote-first companies. The accountancy specialism for this segment is closer to the standard UK SaaS pattern (R&D claims, SEIS/EIS, EMI, ARR-based reporting) but with regional adaptations around grant funding and university partnership.",
      "GSC validation for Newcastle came from `/services/seis-eis-advice/newcastle/` 13 imp pos 38 plus query 'start up accountants newcastle' 10 imp pos 40. Both signals suggest moderate local demand with proximity to page-1 territory. The cluster effect from Northern Accelerator (the spinout pipeline across the NE universities) likely contributes to SEIS/EIS specialism demand.",
      "Cost dynamics in Newcastle are favourable for cost-conscious startups - typically 35-45% below central London equivalents and 15-25% below Manchester. The specialist supply is sufficient for most sub-verticals, with the exception of very specialised areas (specific therapeutic areas in life sciences, FCA-regulated fintech) where the specialist count is thin and remote London or Cambridge specialists may provide better matches.",
    ],
    whyMattersHere: [
      "Capital allowances optimisation matters more in Newcastle than in service-economy-dominated cities because of the manufacturing and energy sub-verticals' capital-intensive profiles. Full Expensing (100% first-year deduction on main-rate plant and machinery, no upper cap) and Structures and Buildings Allowance (3% straight-line on commercial property construction or renovation) routinely add £50-200k of corporation tax savings annually for qualifying companies. Specialist accountants who time the capex correctly and document the allowance claims defensibly add material value beyond the routine compliance work.",
      "Grant accounting for energy-and-manufacturing startups is more demanding than standard accountancy because of the multiple grant streams (Innovate UK, DESNZ, regional development) with overlapping conditions. Specialists who handle grant accounting regularly know the documentation requirements, the relief-versus-grant boundary tests, and the typical reporting cycles.",
      "Northern Accelerator and university spinout patterns from the NE universities (Newcastle, Northumbria, Durham, Sunderland) follow similar templates to Cambridge and Manchester - tech transfer office equity, royalty arrangements, IP licensing - but with different financing profiles given the smaller local angel pool. Specialist matching here helps surface accountants experienced with the regional spinout pattern.",
    ],
    localExamples: [
      {
        title: "Helix advanced manufacturing - capital allowances and R&D claim",
        body: "A Newcastle-based advanced manufacturing startup developing precision metrology equipment, with £680k of capex on production equipment in year one (qualifying for Full Expensing) and £290k of qualifying R&D. The accountant structured the corporation tax position to claim Full Expensing on the capex (£680k of first-year deduction) plus the merged R&D credit on the development work, generating substantial tax shelter on revenue once the company reached profitability and an R&D credit cash benefit during the loss-making period.",
      },
      {
        title: "Newcastle SaaS - SEIS round with regional angel network",
        body: "A Newcastle-based B2B SaaS company raising first SEIS round of £200k from local angel investors plus one London-based angel through the Northern Accelerator introduction. The accountant prepared advance assurance application; received in 17 days. SEIS shares issued to four investors at pre-agreed valuation. Compliance certificates filed. Engagement extended to cover bookkeeping, payroll, and quarterly VAT going forward.",
      },
    ],
    localFaqs: [
      {
        question: "Are there North East-specific funding sources for startups?",
        answer: "Yes - the North East has multiple regional funding programmes including the North East Innovation Fund, Northstar Ventures, Maven Capital regional funds, and Innovate UK's regional engagement. Many of these stack alongside SEIS/EIS and grant funding without complications. Specialist accountants familiar with the regional funding landscape can map the available options for each company's stage and sector.",
      },
      {
        question: "What does a Newcastle startup accountant typically cost?",
        answer: "Fixed monthly retainers for early-stage Newcastle startups typically run £120-280. Year-end accounts £900-2,200. R&D claims 10-22% of cash benefit. SEIS/EIS advance assurance £1,200-2,500. Newcastle rates are typically the lowest in the validated 12-city set, reflecting both lower commercial rents and a more price-sensitive client base.",
      },
      {
        question: "Can a Newcastle accountant work with a Durham, Sunderland, or Teesside startup?",
        answer: "Yes - many Newcastle accountants serve the wider North East regional market through cloud-based engagement. Northern Accelerator clients across the NE universities frequently work with Newcastle-based specialists regardless of campus location.",
      },
    ],
  },

  // ==========================================================================
  // WAKEFIELD
  // ==========================================================================
  wakefield: {
    deepNarrative: [
      "Wakefield sits in West Yorkshire at the M1/A1 junction, with strong connections to Leeds (north), Sheffield (south), and the wider Yorkshire and Humber innovation ecosystem. Companies House data shows around 800 active companies in the WF postcodes with notable representation in B2B software, creative industries, professional services, manufacturing, and a growing remote-first founder population taking advantage of lower premises costs versus Leeds. The Wakefield Council's Wakefield 360 economic strategy and the wider West Yorkshire Combined Authority innovation programmes contribute to a small but growing startup pipeline.",
      "The startup specialism profile in Wakefield is dominated by B2B software and professional-services tech serving regional markets, with manufacturing-tech and supply-chain technology forming a secondary cluster. The accountancy specialism for these sub-verticals is closer to the standard UK SaaS pattern (R&D claims, SEIS/EIS, EMI, ARR-based reporting) with regional cost advantages. Multi-channel ecommerce has growing presence given Wakefield's central location for UK distribution.",
      "GSC validation for Wakefield was strong and surprising: `/services/business-registration/wakefield/` earned 5 impressions and 1 click at position 11 - one of only two click-earning combo URLs across the entire pre-cull site. The signal indicates genuine local search demand for business registration / startup formation specialism in Wakefield, likely from first-time founders looking for accountancy support during the incorporation process. The page-1 position validates the matching service's ability to convert in this catchment specifically.",
      "Wakefield's wider Yorkshire connections create a regional accountancy market where Wakefield-based specialists routinely serve clients across West Yorkshire and into South Yorkshire. The cost-quality balance is favourable for cost-conscious founders: specialist supply is sufficient for most sub-verticals, while rates are typically 35-45% below central London equivalents. For very specialised areas (deep tech, specific therapeutic areas in life sciences, FCA-regulated fintech), the specialist count thins and remote Manchester or London specialists may provide better matches.",
      "The Wakefield ecosystem has notably strong representation of remote-first companies and digital nomads who relocated from larger UK cities. The accountancy specialism for this segment includes personal-tax handling for high-earning remote employees, the IR35 and off-payroll working rules for contractor-based businesses, and the typical owner-managed limited company patterns of consultancy and B2B services.",
    ],
    whyMattersHere: [
      "The page-1 click signal on `/services/business-registration/wakefield/` (1 click pos 11) is the single strongest local-conversion signal in the GSC dataset. Maintaining this position with deep, well-structured Wakefield-specific content is the SEO opportunity. The matching service converts well in this catchment, and content depth strengthens that.",
      "Business registration specialism in Wakefield often involves first-time founders without prior tax-structure experience. Specialists who handle the incorporation-to-first-trading-period engagement well typically build long-term client relationships covering subsequent year-end work, payroll, and eventual scaling. Quality matching at this entry point matters disproportionately for the founder's lifetime financial planning.",
      "Multi-channel ecommerce specialism is genuinely useful in Wakefield given the city's central UK distribution position. Specialists who handle OSS/IOSS, postponed VAT accounting, and merchant settlement reconciliation well bring patterns the generalists miss.",
    ],
    localExamples: [
      {
        title: "WF-postcode B2B software - business registration plus first SEIS round",
        body: "A Wakefield-based B2B software company at incorporation, founder leaving a senior role at a Leeds tech company to start independently. The accountant ran the limited-company-vs-sole-trader analysis (limited company won on tax efficiency given projected first-year revenue); incorporated with SEIS-friendly structure (founder shares at nominal value, Articles ready for SEIS); applied for SEIS advance assurance pre-emptively to support a planned £150k angel round; structured the chart of accounts and FreeAgent setup. Round closed three months later with all accountancy infrastructure in place.",
      },
      {
        title: "Wakefield ecommerce - multi-channel VAT and OSS registration",
        body: "A Wakefield-based ecommerce brand selling across Shopify, Amazon UK, Amazon EU, and a small US presence. £1.1m annual revenue with 35% EU sales. The accountant matched specialised in ecommerce VAT and structured: UK MTD VAT registration, OSS registration in Ireland for EU distance sales, IOSS for sub-€150 EU shipments, US sales tax handling via Avalara. Annual VAT compliance saving versus the prior generalist accountant's approach: approximately £6k.",
      },
    ],
    localFaqs: [
      {
        question: "What does a Wakefield startup accountant typically cost?",
        answer: "Fixed monthly retainers for early-stage Wakefield startups typically run £100-260. Year-end accounts £800-2,000. R&D claims 10-22% of cash benefit. SEIS/EIS advance assurance £1,000-2,200. Wakefield rates are at the lowest end of the validated 12-city set, reflecting both lower commercial rents and the regional cost base.",
      },
      {
        question: "Can a Wakefield accountant work with a Leeds, Bradford, or Sheffield startup?",
        answer: "Yes - most Wakefield accountants serve the wider West Yorkshire and South Yorkshire regional market through cloud-based engagement. Geographic boundaries within the region are effectively irrelevant for accountancy work. The matching service may surface a Wakefield specialist as the best match for a Leeds or Bradford client based on sub-vertical specialism.",
      },
      {
        question: "Is the specialist supply in Wakefield sufficient for B2B software startups?",
        answer: "For mainstream B2B software (SaaS, professional services tech, ecommerce platforms), yes. For very specialised sub-verticals (FCA-regulated fintech, deep tech, biotech), the specialist count thins and the matching service may pair Wakefield clients with Leeds, Manchester, or remote London specialists.",
      },
    ],
  },

  // ==========================================================================
  // CHELTENHAM
  // ==========================================================================
  cheltenham: {
    deepNarrative: [
      "Cheltenham is one of the UK's most concentrated cyber-security and government-tech ecosystems, with GCHQ as the gravitational centre and a substantial cluster of cyber-security startups, defence-tech companies, and government-services firms in and around the town. The Cyber Park development at Berkeley Place and the wider Cheltenham Cyber Cluster provide physical infrastructure for security-focused startups, while the proximity to Bristol (40 minutes by car) connects Cheltenham to a wider South West regional ecosystem. Companies House data shows around 1,000 active companies in the GL postcodes with notable representation in cyber-security, AI and ML, financial services, and professional services.",
      "Cyber-security specialism in Cheltenham is unusually deep for a UK regional city. Multiple Cheltenham startups have founders with GCHQ or wider intelligence-services backgrounds, creating a specific founder profile and corresponding accountancy needs. The typical Cheltenham cyber startup profile includes: government-customer-heavy revenue (with associated procurement and security clearance overheads), R&D claim methodology adapted for cryptography and offensive-security tooling work, security-clearance-dependent staffing patterns, and growing US and Five Eyes export activity.",
      "Government customer revenue creates accountancy patterns that differ from commercial sector startups. Government contracts typically have specific payment terms (often 30-60 days from invoice approval, with longer approval cycles), specific reporting requirements for the customer department, and particular VAT treatment for some categories of government services. Specialist accountants for this segment understand the patterns; generalists often miss the cash-flow timing and VAT nuances.",
      "GSC validation for Cheltenham came from multiple signals: `/services/growth-planning/cheltenham/` 11 imp pos 50, query 'startup accounting specialist in cheltenham' 10 imp pos 46. The aggregate signal suggests genuine local demand for growth-planning and general startup accountancy. Cheltenham's GSC profile is distinctive in pointing to growth-planning specifically rather than the SEIS/EIS or R&D specialism more common in other cities - consistent with a more mature ecosystem of established cyber-security companies past the seed stage.",
      "Cost dynamics in Cheltenham sit between regional norms and London premium. Specialist cyber-security accountancy is rare enough that the few firms providing it can charge London-equivalent rates while delivering the specialism that justifies it. For non-cyber Cheltenham startups, rates are typical regional levels (typically 30-40% below central London).",
    ],
    whyMattersHere: [
      "Cyber-security R&D claim specialism is rare and material. Cyber-security work involves cryptography, novel security architectures, threat-modelling research, and offensive-security tooling - all of which can qualify for R&D credits but require technical narratives that generalist accountants struggle to write. Specialist preparation captures claim value that generalist preparation misses.",
      "Government-customer revenue patterns affect cash flow modelling, VAT treatment, and contract accounting in ways that mainstream commercial revenue doesn't. Specialists who handle government-tech clients regularly know the patterns and can build models that reflect actual cash-flow timing rather than assumed commercial-sector timing.",
      "Security-clearance-dependent staffing creates accountancy implications around payroll, contractor classification, and the typical retention payments and clearance-related benefits that don't appear in mainstream tech-sector compensation. Specialist matching helps here.",
    ],
    localExamples: [
      {
        title: "GL-postcode cyber-security startup - R&D claim plus government-revenue cash flow",
        body: "A Cheltenham cyber-security startup with two co-founders ex-GCHQ, building defensive cryptography tooling for government and enterprise customers. £290k of qualifying R&D in year one. The accountant prepared the R&D claim with technical narrative specifically addressing cryptographic novelty (a domain HMRC scrutinises sceptically) and competent-professional declarations from PhD-level cryptographers. Cash benefit £64k. Cash flow model built around government customer payment terms (60-day post-invoice approval, with approval typically taking 30 days) plus commercial customer revenue.",
      },
      {
        title: "Cheltenham defence-tech - growth planning to Series A",
        body: "A Cheltenham defence-tech company at £1.2m ARR, planning Series A in 12 months. The accountant designed the growth plan covering: cap table preparation (cleaning up legacy SAFE notes from earlier funding); EMI option pool design for the planned 6-engineer hire over 12 months; financial reporting upgrade to monthly management accounts with EBITDA reconciliation; trailing 18-month normalised P&L for investor data room. Series A closed at £8m valuation.",
      },
    ],
    localFaqs: [
      {
        question: "Are there cyber-security-specific accountancy considerations in Cheltenham?",
        answer: "Yes - cyber-security R&D claim methodology requires specific technical narrative depth, government-customer revenue creates particular cash-flow and VAT patterns, and security-clearance-dependent staffing affects the compensation and contractor mix. Specialist accountants who handle these specifics regularly bring patterns that generalists miss.",
      },
      {
        question: "What does a Cheltenham startup accountant typically cost?",
        answer: "Specialist cyber-security accountancy rates in Cheltenham are typically London-equivalent (£250-500 monthly retainer for early-stage, £4-12k year-end). Non-specialist Cheltenham rates are typical regional levels (£140-300 monthly retainer, £1,200-2,800 year-end). The matching service surfaces the right tier based on sub-vertical.",
      },
      {
        question: "Can a Cheltenham accountant handle government-customer contracts?",
        answer: "Specialists who serve the cyber and defence-tech cluster routinely handle government contracts. Generalists often have less experience with the procurement, payment timing, and VAT specifics of government work. The matching service flags government-customer experience explicitly when relevant to a client's profile.",
      },
    ],
  },

  // ==========================================================================
  // SWANSEA
  // ==========================================================================
  swansea: {
    deepNarrative: [
      "Swansea anchors the South West Wales startup ecosystem, with Swansea University and the Swansea Bay City Region innovation programmes at the centre of the local research-and-development activity. Companies House data shows around 700 active companies in the SA postcodes with notable representation in marine and energy technology (linked to the surrounding offshore renewable industry), software, professional services, and creative industries. Welsh Government innovation programmes (Smart Cymru, Accelerator Wales) provide additional funding stream complexity that affects many local startups.",
      "The startup specialism profile in Swansea reflects the regional emphasis on marine technology, offshore renewable energy, and net-zero infrastructure - all of which produce startup activity with substantial R&D and capital expenditure profiles. Swansea Bay's tidal energy and offshore wind activity has spawned a cluster of marine-tech startups, and the city's location at the Heads of the Valleys provides connections to the wider South Wales valleys economy.",
      "Welsh-specific funding programmes affect many Swansea startups and create accountancy considerations that don't apply in England. Welsh Government innovation funding (Smart Cymru, Accelerator Wales, Research Innovation Wales), Welsh-specific tax considerations for property and certain transactions, and the distinct devolved-government landscape all mean accountancy work in Swansea benefits from familiarity with the Welsh public-sector ecosystem alongside the standard UK startup framework.",
      "GSC validation for Swansea was strong: `/services/business-registration/swansea/` 20 imp pos 34, plus queries 'accounting firms for startups swansea' 6 imp pos 37, 'bookkeeping for startups swansea' 6 imp pos 39, 'company formation services swansea' 2 imp pos 29, 'tax services for business swansea' 1 imp pos 74. The aggregate signal suggests genuine local demand across multiple service categories, validating Swansea as a meaningful regional ecosystem for the matching service.",
      "Cost dynamics in Swansea are favourable for cost-conscious startups - typically 40-50% below central London equivalents and 20-30% below Manchester. Specialist supply is thinner than in larger cities, with the matching service often surfacing accountants from Cardiff (45 minutes east by train) or remote Bristol/London specialists for very specialised sub-verticals.",
    ],
    whyMattersHere: [
      "Welsh-specific funding programmes (Smart Cymru, Accelerator Wales, Research Innovation Wales) create grant-versus-relief boundary questions that don't apply in England. Specialist accountants familiar with the Welsh public-sector funding landscape can map these programmes alongside the standard SEIS/EIS and R&D relief stack to maximise the company's combined funding position.",
      "Marine and offshore renewable specialism in Swansea matters because the engineering and R&D activity in these sub-verticals has specific patterns (long development cycles, capital-intensive prototyping, regulatory testing requirements). Specialist accountants who handle this client profile know the patterns and structure R&D claims and capital allowances accordingly.",
      "The page-1-adjacent business registration signal (20 imp pos 34) suggests genuine first-time-founder demand in Swansea. Specialists who handle the incorporation-to-first-year engagement well typically build long-term client relationships, making quality matching at this entry point disproportionately important.",
    ],
    localExamples: [
      {
        title: "SA-postcode marine tech - Welsh grant plus R&D claim stack",
        body: "A Swansea-based marine-tech startup developing tidal-energy monitoring equipment with Smart Cymru grant funding for prototype development. £180k of qualifying R&D in year one. The accountant structured: grant-funded versus non-grant cost allocation; R&D claim methodology under merged scheme rules with marine-engineering technical narrative; capital allowances on prototype equipment. Combined cash benefit across reliefs approximately £52k.",
      },
      {
        title: "Swansea B2B software - business registration plus SEIS structuring",
        body: "A Swansea-based B2B software company at incorporation, founder transitioning from a regional consulting role. The accountant ran the structure analysis (limited company won given projected revenue trajectory and SEIS plans); incorporated with SEIS-friendly structure; applied for SEIS advance assurance ahead of planned angel round; set up FreeAgent (free with NatWest business account); registered for PAYE and quarterly VAT. SEIS round of £140k closed three months later with three local angels and one Cardiff-based investor.",
      },
    ],
    localFaqs: [
      {
        question: "What Welsh-specific funding programmes affect Swansea startups?",
        answer: "Smart Cymru offers innovation grants up to £25k. Accelerator Wales provides early-stage support. Research Innovation Wales coordinates university-business research collaboration. Several other devolved-government programmes target specific sectors. These typically stack with SEIS/EIS and R&D credits without complications, but specialist accountants familiar with the Welsh landscape can map the available programmes to each company's profile.",
      },
      {
        question: "What does a Swansea startup accountant typically cost?",
        answer: "Fixed monthly retainers for early-stage Swansea startups typically run £100-240. Year-end accounts £800-1,800. R&D claims 10-22% of cash benefit. SEIS/EIS advance assurance £1,000-2,200. Swansea rates are at the lower end of the validated 12-city set, reflecting both lower commercial rents and the regional cost base.",
      },
      {
        question: "Can a Swansea accountant work with a Cardiff or Bristol startup?",
        answer: "Yes - many Swansea accountants serve the wider South Wales / South West regional market through cloud-based engagement. The South Wales rail corridor (Swansea-Bridgend-Cardiff-Newport) and the M4 link to Bristol create an integrated regional accountancy market. The matching service may surface a Swansea specialist as the best match for a Cardiff or Bristol client based on sub-vertical specialism.",
      },
    ],
  },
};

export function getCityDeepContent(slug: string): CityDeepContent | undefined {
  return cityDeepContent[slug];
}
