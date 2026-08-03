// data/cityHubContent.ts
//
// Rich local content for the city hub pages at /location/<slug>/ that carry
// genuine local substance: a real startup ecosystem explanation, the
// accelerators, universities, funds and angel routes that actually operate
// there, and the SEIS or EIS decisions that ecosystem tends to produce.
//
// VOICE: first party. Accountancy is delivered directly by Tidy Money Ltd
// (see data/provider.ts). There is no accountant panel, no partner network,
// and no "three quotes". Any sentence beginning "Accountants in our X
// network" is a defect, not a style choice.
//
// LOCAL CLAIM RULE: these pages describe the ecosystem, not a local office.
// Delivery is national and remote. Never imply a physical presence, a local
// adviser, or a local client list. Ecosystem facts must be checkable against
// the named institution.
//
// SCOPE: 8 cities. The 2026-05-02 cull kept 12 city routes; the other four
// (Edgware, Cambridge, Salford, Wakefield) run on data/cityDeepContent.ts
// plus the location profile. Twelve further entries (Birmingham, Leeds,
// Bristol, Edinburgh, Hull, Bath, Brighton, Cardiff, Oxford, Liverpool,
// Reading, Sheffield) were removed on 2026-08-03: every one of those slugs
// 301s to /location/ via next.config.js, so the content was unreachable and
// carried the worst of the retired marketplace copy.
//
// British English throughout. No em dashes. Apostrophes as ’.

export interface CityHubServiceBlurb {
  serviceSlug: string;
  headline: string;
  hook: string;
}

export interface CityHubFaq {
  question: string;
  answer: string;
}

export interface CityHubContent {
  slug: string;
  introDeep: string;
  ecosystemDeep: string;
  /** What the local ecosystem changes about the scheme work. First party. */
  whyMatchHere: string;
  serviceBlurbs: CityHubServiceBlurb[];
  faqs: CityHubFaq[];
  closer: string;
}

/**
 * Service blurbs were previously duplicated verbatim across every city, which
 * meant a single wording error had to be fixed twenty times. They are now
 * generated from one template.
 *
 * Note the advance assurance hook: it describes the drafting work, not an
 * HMRC turnaround. The previous wording ("drafted to clear HMRC inside the
 * published 4-6 week service-level window") promised a decision window we do
 * not control and cannot state. See hmrcWording.noTiming in data/provider.ts.
 */
function serviceBlurbsFor(cityName: string): CityHubServiceBlurb[] {
  return [
    {
      serviceSlug: 'share-issuance-cap-table',
      headline: `Share Issuance and Cap Table in ${cityName}`,
      hook: 'Articles, board minutes, subscription documents, share certificates, SH01 filings and the register of members, sequenced so every earlier SEIS and EIS position survives the next round.',
    },
    {
      serviceSlug: 'seis-advance-assurance',
      headline: `SEIS Advance Assurance in ${cityName}`,
      hook: 'Eligibility review, the advance assurance narrative, the investor evidence pack, and the follow-up correspondence the Venture Capital Reliefs team raises on the trade, control and use of funds.',
    },
    {
      serviceSlug: 'rd-tax-credits',
      headline: `R&D Tax Credits in ${cityName}`,
      hook: 'Merged-scheme claims prepared alongside the scheme work, with technical narratives and cost schedules reconciled to the statutory accounts.',
    },
    {
      serviceSlug: 'eis-advance-assurance',
      headline: `EIS Advance Assurance in ${cityName}`,
      hook: 'EIS applications for raises beyond the SEIS lifetime cap, including the risk-to-capital narrative, knowledge-intensive assessment, and SEIS-to-EIS sequencing inside one round.',
    },
    {
      serviceSlug: 'seis1-eis1-compliance',
      headline: `SEIS1 and EIS1 Compliance in ${cityName}`,
      hook: 'Compliance statements built from reconciled source data, filed once the four-month trading condition is met, and carried through to the SEIS3 or EIS3 certificate batch.',
    },
    {
      serviceSlug: 'qualifying-period-monitoring',
      headline: `Three-Year Qualifying Monitoring in ${cityName}`,
      hook: 'Annual qualifying-conditions review and transaction-by-transaction clearance across the three-year window, so a pivot, acquisition or change of control is assessed before it happens rather than after.',
    },
  ];
}

export const cityHubContent: Record<string, CityHubContent> = {
  london: {
    slug: 'london',
    introDeep:
      "London is the densest startup ecosystem in the UK, covering fintech, SaaS, life sciences, creative technology, and deep tech across clusters from Silicon Roundabout in EC1 and EC2 to the King’s Cross Knowledge Quarter and the White City Innovation District. Accelerators including Seedcamp, Entrepreneur First, Techstars London, Level39 at Canary Wharf, and Google for Startups Campus move companies from incorporation to seed round faster than anywhere else in the country. The University Innovation arms of UCL, Imperial College London, and King’s College London each generate a steady pipeline of spinouts. For founders operating here, the SEIS and EIS paperwork is rarely the hard part on its own. The hard part is getting it done in the order the round demands.",
    ecosystemDeep:
      "London’s startup ecosystem is defined by the combination of sheer density and specialist concentration. Silicon Roundabout and the King’s Cross Knowledge Quarter host the majority of the capital’s fintech and SaaS startups, with fintech scale-ups increasingly concentrated around Canary Wharf where Level39 runs programmes close to the FCA and the major banks. The White City Innovation District, anchored by Imperial College London, concentrates deep tech, medtech, and AI startups, and the Whitechapel Life Sciences district supports biomedical commercialisation from Barts and the London Medical School.\n\nAccelerator activity spans Seedcamp, Entrepreneur First, Techstars London, Founders Factory, Conception X, and Google for Startups Campus, each with distinct investment structures and cohort cadences. Investor density is the highest in Europe, coordinated through the UK Business Angels Association (UKBAA), Angel Investment Network, and sector-specific syndicates. The Mayor of London Co-Investment Fund, delivered through MMC Ventures, provides public co-investment alongside private rounds. EMI share option usage is the heaviest per capita in the UK, driven by salary pressure from the US tech companies operating at King’s Cross and Canary Wharf. R&D tax credit claims are unusually large in absolute terms given the scale of fintech, SaaS, and life sciences R&D activity.",
    whyMatchHere:
      "The London timetable is what changes the scheme work. A round that would take eighteen months to assemble elsewhere is often expected to close in six to nine months here, and the documentation has to keep pace with it: advance assurance submitted early enough to be in hand when the term sheet lands, articles and share rights settled before the first subscription, and the share issue sequenced so SEIS shares are allotted before any EIS shares in a combined round.\n\nThe accelerator structures add their own decisions. Seedcamp, Entrepreneur First and Techstars each take equity on their own terms, and the resulting cap table has to leave room for an EMI pool and for SEIS and EIS-qualifying ordinary shares without breaching the independence or connected-person tests. We work through that sequence with founders here as a planned programme rather than reconstructing it under deal pressure.",
    serviceBlurbs: serviceBlurbsFor('London'),
    faqs: [
      {
        question: 'Do you work with pre-seed London founders, or only once a round is agreed?',
        answer:
          'Both. A good deal of the work starts before there is a round to speak of, when a founder is deciding whether the trade qualifies at all and what the articles need to say. For companies coming through Seedcamp, Entrepreneur First, Techstars London or Founders Factory, the early work usually covers the articles and share rights, the eligibility review, and the advance assurance application, then extends into the compliance statement once the round closes. Starting at incorporation is materially cheaper than restructuring a cap table later, because unpicking a share issue after the event is not always possible.',
      },
      {
        question: 'My round has both SEIS and EIS investors in it. Does that change the London timetable?',
        answer:
          'It changes the sequence more than the timetable. SEIS shares must be issued before any EIS shares in the same company, and the SEIS1 compliance statement has to be submitted before the EIS1 for the round to work as intended. Where a London round is being assembled quickly with a mixed investor list, the practical constraint is usually getting the subscription documents and board resolutions to match that order, not the HMRC step. We set the order out at the start of the engagement so the closing mechanics do not have to be revisited.',
      },
      {
        question: 'Can you handle US expansion once the company scales past the EIS round?',
        answer:
          'Yes, though it is worth flagging at the outset rather than mid-round. A UK-US flip, a Delaware subsidiary or a change of control can each interact with a live SEIS or EIS qualifying period, and a restructure inside the three years can withdraw relief that investors have already claimed. The point to raise it is before the structure is agreed, not after. Tell us at enquiry if US expansion is in view and the qualifying-period position gets assessed as part of the quote.',
      },
    ],
    closer:
      'Whether you are incorporating around Silicon Roundabout, joining a Seedcamp or Entrepreneur First cohort, or spinning out through UCL Innovation and Enterprise or Imperial Enterprise Lab, we handle the SEIS and EIS chain end to end: eligibility, advance assurance, share issuance, compliance statements, investor certificates and the three-year monitoring that follows.',
  },

  manchester: {
    slug: 'manchester',
    introDeep:
      "Manchester is the UK’s largest regional tech ecosystem outside London, with particular depth in fintech, mediatech at MediaCityUK, health and life sciences along Oxford Road, and advanced manufacturing. The Greater Manchester Combined Authority (GMCA) under mayoral devolution runs a meaningful set of innovation, skills, and growth grant programmes that interact with private funding in ways that are structurally different from London’s investor-led landscape. Manchester Science Partnerships, the Mi-IDEA Cisco partnership, The Landing at MediaCityUK, and the University of Manchester Innovation Factory (UMI3) anchor the physical and commercialisation infrastructure.",
    ecosystemDeep:
      "Manchester’s ecosystem runs across several distinct clusters. The Oxford Road Corridor, Europe’s largest single university and hospital spine, concentrates health, life sciences, and research-led spinouts. MediaCityUK in Salford hosts BBC, ITV, and an adjacent cluster of media and digital content startups, with The Landing incubator as the primary physical base. Manchester Science Partnerships operates the long-established science park estate, including the Citylabs life sciences site, and runs Mi-IDEA as a joint programme with Cisco. Spinningfields and the central business district concentrate fintech and professional services; Ancoats and the Northern Quarter host the creative and digital community.\n\nThe University of Manchester Innovation Factory (UMI3) manages commercialisation from Europe’s largest single-site university, working with Northern Gritstone, the shared northern universities’ spinout fund. Manchester Metropolitan University and the University of Salford contribute their own innovation programmes. AccelerateME supports student founders directly.\n\nOn the funding side, GC Angels (the Growth Company’s angel syndicate), Praetura Ventures, Maven Capital Partners, and NorthInvest (Leeds-headquartered but active across the North) are the most active early-stage investors. Northern Powerhouse Investment Fund II provides debt and equity capital. GMCA grant programmes and the Mayor’s Challenge Fund add a public funding layer that interacts with subsidy control rules across all the private instruments.",
    whyMatchHere:
      "Manchester founders more often than not arrive at a SEIS or EIS round having already taken public money. GMCA grants, Northern Powerhouse Investment Fund II debt or equity, Northern Gritstone or Praetura equity and private angel investment tend to stack across the first two or three years, and each instrument carries its own subsidy control treatment.\n\nThat matters for the schemes in two specific ways. Money received from a grant does not count as risk finance, but the use-of-funds narrative in an advance assurance application still has to explain what the SEIS or EIS money itself will be spent on, separately from the grant-funded activity. And where a public body takes equity rather than making a grant, the independence and connected-person tests need checking before the shares are issued rather than after. We prepare the subsidy position and the use-of-funds narrative together, so the advance assurance application does not have to be explained twice.",
    serviceBlurbs: serviceBlurbsFor('Manchester'),
    faqs: [
      {
        question: 'I have taken a GMCA grant. Does that stop my company qualifying for SEIS?',
        answer:
          'A grant does not by itself disqualify a company. Grant income is not risk finance investment, so it does not consume the SEIS lifetime limit or the annual and lifetime risk finance limits that apply to EIS. What it does affect is the use-of-funds narrative: HMRC will want to see what the SEIS or EIS subscription money is being spent on, and that has to be distinguishable from the activity the grant already funds. Where a grant is conditional on specific expenditure, the two need documenting separately from the start.',
      },
      {
        question: 'Northern Powerhouse Investment Fund II is taking equity in my round. Does that break the schemes?',
        answer:
          'Not automatically, but it needs checking before the shares are issued. The relevant questions are whether the fund becomes a connected person or a non-qualifying investor, whether its share class carries any preferential rights that would fail the ordinary-share requirement for SEIS and EIS shares, and whether the arrangement gives any investor protected downside, which would fail the risk-to-capital condition. Each of those is answerable in advance. None of them is fixable after the allotment, which is why the share class design has to happen first.',
      },
    ],
    closer:
      'Whether you are along the Oxford Road Corridor, at MediaCityUK, in a Manchester Science Partnerships building or spinning out through UMI3, we handle the SEIS and EIS chain end to end and take the grant and public-equity interactions into account as part of it.',
  },

  northampton: {
    slug: 'northampton',
    introDeep:
      "Northampton’s startup activity concentrates in high-performance motorsport engineering (anchored by Silverstone Park’s large supply chain), logistics and distribution driven by the Golden Triangle location, and sustainable manufacturing supported through the iCon Environmental Innovation Centre. The University of Northampton’s Waterside Campus, opened in 2018, anchors the city’s innovation activity, and the University’s Innovation Centre provides flexible office units alongside the Fuelling Innovation programme and Student Enterprise Accelerator. East Midlands Freeport’s outer boundary includes Northamptonshire but primary tax sites sit at East Midlands Airport, East Midlands Intermodal Park, and Ratcliffe-on-Soar rather than Northampton itself.",
    ecosystemDeep:
      "Northampton’s startup base is narrower than the major metropolitan centres but has distinctive depth in several sectors. Silverstone Park, twenty miles west of Northampton, hosts one of Europe’s largest concentrations of high-performance motorsport engineering businesses, with a supply chain that regularly spins out new ventures from engineers leaving the racing teams. Founders moving from these backgrounds typically bring deep technical development activity with them.\n\nThe University of Northampton’s Waterside Campus, opened in 2018, is the anchor for city centre innovation activity. The University of Northampton Innovation Centre provides forty-two flexible office units, a cafe, and conference space, and connects to the University’s Fuelling Innovation programme and Student Enterprise Accelerator. The iCon Environmental Innovation Centre at Daventry supports environmental innovation startups with specialised facilities for green and sustainable technology sectors.\n\nFunding routes flow through Midlands Engine Investment Fund II, Mercia Asset Management, and Midven, with West Northamptonshire Council and North Northamptonshire Council providing local business support. Angel activity is smaller and more informal than in larger cities, routed through the Silverstone supply chain, the University Innovation Centre, and iCon introductions. Brackmills and Moulton Park concentrate logistics and light manufacturing.",
    whyMatchHere:
      "The sector mix around Northampton produces a sharper qualifying-trade question than a general tech hub does. A motorsport engineering business supplying parts into the Silverstone chain is usually a straightforward qualifying trade, but a business whose revenue comes substantially from leasing equipment, or from receiving royalties on a design it does not itself exploit, sits much closer to the excluded activities list. A logistics venture at Brackmills or Moulton Park may find that a large part of what it does looks like the provision of services to a connected party.\n\nThose are answerable questions, but they are worth answering before an advance assurance application goes in rather than in response to an HMRC query six weeks later. We start the engagement with the eligibility review for that reason.",
    serviceBlurbs: serviceBlurbsFor('Northampton'),
    faqs: [
      {
        question: 'Does East Midlands Freeport status affect my SEIS or EIS position?',
        answer:
          "East Midlands Freeport’s primary tax sites are at East Midlands Airport (Castle Donington), East Midlands Intermodal Park, and Ratcliffe-on-Soar. Northampton is within the wider outer boundary but is not a designated tax site, so for a company based at Brackmills, Moulton Park or the University Innovation Centre the freeport reliefs do not apply. Freeport status and the venture capital schemes are separate regimes in any event: freeport reliefs attach to qualifying investment at a designated site, and do not change whether a company qualifies for SEIS or EIS. Where a company does plan operations at a tax site, the relevant scheme question is usually whether the expenditure fits the use-of-funds narrative already given to HMRC.",
      },
      {
        question: 'I am spinning out of the Silverstone supply chain. Does my former employer relationship cause a problem?',
        answer:
          'It can, and it is worth checking early. Two tests are usually in play. The first is whether the new company is carrying on a trade previously carried on by another person, which can affect eligibility. The second is the connected-person test, which looks at whether an investor, or someone associated with them, controls the company or holds more than thirty per cent of the shares or voting power. Where a former employer, a supply chain partner or a founder’s family member is investing, that test needs running against the actual shareholdings before the round rather than assumed.',
      },
    ],
    closer:
      'Whether you are at the University of Northampton Innovation Centre, at the iCon Environmental Innovation Centre, or spinning out of the Silverstone Park supply chain, we handle the eligibility question first and then the SEIS and EIS chain that follows from it.',
  },

  swansea: {
    slug: 'swansea',
    introDeep:
      "Swansea sits inside the Welsh tax regime, which includes Welsh rates of Income Tax set by the Senedd, Land Transaction Tax in place of SDLT on commercial property, and Development Bank of Wales funding with terms set by the Welsh Government. Swansea University’s Bay Campus, the Institute of Life Science at Singleton Park, SA1 Swansea Waterfront, TechHub Swansea, and Tramshed Tech Swansea support a growing tech base across life sciences and medical devices, digital services, marine energy, and steel processing. Celtic Freeport’s primary tax sites at Port Talbot and Milford Haven create additional relief layers for qualifying manufacturing and energy investment.",
    ecosystemDeep:
      "Swansea’s startup ecosystem concentrates around three nodes: the university, the waterfront, and the life sciences cluster at Singleton Park. Swansea University operates both the city-centre Singleton campus and the large Bay Campus on Fabian Way, which hosts IMPACT (the Institute for Innovative Materials Processing and Numerical Technologies) and supports engineering and materials spinouts. The Institute of Life Science (ILS) at Singleton Park is the anchor life sciences and medical devices incubator, with research collaboration across NHS Wales Hywel Dda and Swansea Bay health boards. AgorIP supports commercialisation from Swansea University research.\n\nTechHub Swansea provides co-working, mentoring, and community for SaaS and digital founders. Tramshed Tech opened its Swansea site to serve the growing Swansea Bay tech base, running programmes including the GreenTech Accelerator, UniVentures, Convergent Content, and Convergent Scaler. The Alacrity Foundation in Newport runs graduate-led venture building for the Swansea Bay region. University of Wales Trinity Saint David operates IQ SW1, an innovation quarter in the city centre.\n\nFunding flows through the Development Bank of Wales (debt and equity), Angels Invest Wales (DBW’s national angel network), Welsh Government innovation funds, and the Swansea Bay City Deal. Celtic Freeport covers Port Talbot and Milford Haven, with Swansea Bay in the outer boundary. The adjacent Pentre Awel life sciences and wellness district at Llanelli extends the cluster beyond Swansea proper.",
    whyMatchHere:
      "SEIS and EIS are UK-wide reliefs and are not devolved, so a Swansea company qualifies on exactly the same tests as a company in Surrey. What the Welsh setting changes is what sits around the round.\n\nDevelopment Bank of Wales terms are the main one. Where DBW takes equity rather than lending, its share class and its shareholding percentage both need checking against the ordinary-share requirement and the connected-person threshold before the allotment. Where it lends, the question is usually whether any security or conversion feature gives an investor protected downside, which would fail the risk-to-capital condition. Welsh rates of Income Tax matter on the investor side rather than the company side: a Welsh-resident investor still claims SEIS or EIS income tax relief against a UK-wide liability, but they need enough of that liability in the year to absorb it.",
    serviceBlurbs: serviceBlurbsFor('Swansea'),
    faqs: [
      {
        question: 'Do Welsh rates of Income Tax change what my SEIS investors can claim?',
        answer:
          'Not the rate of the relief. SEIS income tax relief is fifty per cent of the amount subscribed and EIS relief is thirty per cent, and neither depends on the investor’s marginal rate or on where in the UK they live. What matters is that the investor has enough UK income tax liability in the relevant year to absorb the relief, because it reduces a liability rather than generating a payment. A Welsh-resident investor works out that liability under Welsh rates. The practical effect is on how much relief a given investor can actually use, not on their entitlement.',
      },
      {
        question: 'Does Celtic Freeport status interact with SEIS or EIS?',
        answer:
          'They are separate regimes. Celtic Freeport covers Port Talbot and Milford Haven, with Swansea Bay in the outer boundary, and its reliefs attach to qualifying investment at a designated tax site: enhanced capital allowances, Land Transaction Tax relief, business rates relief and employer National Insurance relief. None of that changes whether a company qualifies for SEIS or EIS. The point where they touch is the use-of-funds narrative: if the SEIS or EIS subscription is going to fund plant at a freeport site, that is what the advance assurance application should say.',
      },
    ],
    closer:
      "Whether you are at Swansea University’s Bay Campus, at the Institute of Life Science, at SA1 Swansea Waterfront, at TechHub Swansea or at Tramshed Tech, we handle the SEIS and EIS chain end to end and check the Development Bank of Wales and grant interactions before the shares are issued.",
  },

  nottingham: {
    slug: 'nottingham',
    introDeep:
      "Nottingham hosts the UK’s largest bioscience incubator at BioCity Nottingham, alongside the University of Nottingham Innovation Park (UNIP, one of only four UK University Enterprise Zones) and the Ingenuity Lab student and alumni enterprise programme. The city’s startup profile is unusually weighted toward life sciences, digital health, and GreenTech. Mercia Asset Management dominates regional private investment, and Midlands Engine Investment Fund II provides structured debt and equity capital. The Creative Quarter at Sneinton and Hockley concentrates the creative and digital base alongside the science and life sciences corridors.",
    ecosystemDeep:
      "Nottingham’s ecosystem has real depth in bioscience and digital health. BioCity Nottingham was founded in 2002 by the University of Nottingham and Nottingham Trent University and has grown into the UK’s largest bioscience innovation and incubation centre, now run by the Pioneer Group. It provides wet lab, office, and shared scientific infrastructure. The University of Nottingham Innovation Park (UNIP) is one of only four UK University Enterprise Zones, founded in 2008. Its Technology Entrepreneurship Centre supports technology-driven startups linked to university research. Ingenuity Lab has supported over 180 student businesses and runs the Ingenuity Impact Programme with embedded investment. The Castle Meadow Campus extends UNIP in the city centre.\n\nNottingham Trent University’s Dryden Enterprise Centre complements the commercialisation pipeline. Medilink Midlands coordinates the wider Midlands medical technology cluster and provides NHS and MHRA pathway introductions.\n\nOn the funding side, Mercia Asset Management is the dominant regional investor, with both angel syndicates and managed funds. Midlands Engine Investment Fund II provides debt and equity. The Creative Quarter at Sneinton and Hockley concentrates creative and digital startups.",
    whyMatchHere:
      "A bioscience company raising in Nottingham runs into the venture capital schemes at an awkward point in its own development. The trade often has not started in any commercial sense: the company is doing research, and revenue is years away. SEIS requires the company to have been carrying on the qualifying trade for at least four months before the SEIS1 can be submitted, and both schemes require a genuine trade rather than preparation for one.\n\nThat is workable, but it makes the date the trade began a load-bearing fact rather than an administrative detail, and it is the fact most often recorded badly. The other recurring issue is university equity: a UNIP or BioCity spinout usually carries a university shareholding from a licensing or assignment agreement, and that stake has to be checked against the thirty per cent connected-person threshold and the independence requirement before the round. We deal with both at the eligibility review rather than at the compliance statement.",
    serviceBlurbs: serviceBlurbsFor('Nottingham'),
    faqs: [
      {
        question: 'My bioscience company has no revenue yet. Has the qualifying trade started?',
        answer:
          'Possibly, and the answer matters more than founders expect. Trading for these purposes does not require revenue, but it does require the company to be carrying on the trade rather than preparing to carry it on. Research and development activity carried on with a view to a trade the company will carry on can count as part of the qualifying business activity for EIS, and SEIS has its own preparatory-work provisions. What is not workable is a vague or reconstructed start date. The date needs to be identifiable from board minutes, contracts or accounting records at the time, because the SEIS1 cannot be submitted until four months after the trade began.',
      },
      {
        question: 'The university holds equity in my spinout. Does that break SEIS or EIS?',
        answer:
          'Usually not, but it has to be checked rather than assumed. Two thresholds are relevant. The independence condition requires that the company is not under the control of another company. The connected-person test treats an investor as connected where they, with their associates, control the company or hold more than thirty per cent of the ordinary share capital, the voting power, or the assets on a winding up. A typical minority university stake from a licensing agreement sits well below both, but the share class also has to be examined: any preferential right to assets or dividends can take the shares outside the ordinary-share requirement.',
      },
    ],
    closer:
      'Whether you are at BioCity, at the University of Nottingham Innovation Park, at Castle Meadow Campus or at the Dryden Enterprise Centre, we start with the trade start date and the spinout shareholding, then run the SEIS and EIS chain from there.',
  },

  cheltenham: {
    slug: 'cheltenham',
    introDeep:
      "Cheltenham has become one of the most sector-concentrated startup cities in the UK, built on cyber security and driven by proximity to GCHQ. Hub8, under Plexal’s majority ownership, operates co-working space specifically for cyber, digital, and creative startups. The MX Innovation Centre extends Hub8’s capacity. The Golden Valley Development, a 200-hectare cyber and tech development beside GCHQ, will host the Cyber Innovation Centre at its heart alongside over a million square feet of commercial space for cyber, AI, and national security tech. NCSC For Startups, a National Cyber Security Centre programme delivered by Plexal, provides structured cyber founder support.",
    ecosystemDeep:
      "Cheltenham’s cyber concentration is unusually deep for a city of its size. Decades of GCHQ proximity have generated a sustained pipeline of engineers founding or co-founding cyber security companies, and the supporting infrastructure has been built deliberately over the last decade.\n\nHub8 operates co-working space for cyber, digital, and creative startups. The MX Innovation Centre is a twenty thousand square foot flagship space extending Hub8’s capacity. The Golden Valley Development is a 200-hectare development beside GCHQ, supported in partnership by Cheltenham Borough Council, HBD, and Plexal, designed to host the Cyber Innovation Centre and over a million square feet of cyber and tech commercial space.\n\nNCSC For Startups is a structured programme delivered by Plexal in partnership with the National Cyber Security Centre, providing cyber founders with sector expertise and government customer introductions. CyLon, London-based but nationally active, is the main cyber-focused accelerator and investor working with Cheltenham startups. Surevine, a 2008 GCHQ spinout, now operates out of Hub8. The University of Gloucestershire’s Growth Hub provides broader small business support. Local angel activity concentrates around GCHQ alumni and ex-intelligence community founders.",
    whyMatchHere:
      "Two things recur in Cheltenham cyber rounds. The first is the qualifying trade question for companies whose revenue comes from government or defence customers. Providing services under contract is a qualifying trade; receiving royalties or licence fees is an excluded activity unless the company itself created the intellectual property in question. For a cyber company licensing its own detection technology that is usually straightforward, but it needs stating properly in the advance assurance narrative rather than glossed.\n\nThe second is what happens later. Cyber and national security companies regularly trigger National Security and Investment Act notification at a subsequent round, and a mandatory notification can involve a change of control. A change of control inside a live three-year qualifying period can withdraw relief from investors who have already claimed it. That is a monitoring question rather than an application question, and it is the reason the share class design at the SEIS round is worth getting right the first time.",
    serviceBlurbs: serviceBlurbsFor('Cheltenham'),
    faqs: [
      {
        question: 'My cyber company licenses its own technology. Is that an excluded activity?',
        answer:
          'Receiving royalties or licence fees is on the excluded activities list, but there is a specific carve-out where the company itself created the whole or the greater part of the intellectual property from which the royalties or fees derive. A cyber company licensing detection or analysis technology it developed in house will normally fall inside that carve-out. What causes difficulty is intellectual property acquired from elsewhere, or created by a related company, or where the licensing income is incidental to a business that is otherwise substantially about holding rights. The advance assurance narrative should set out who created the intellectual property and when.',
      },
      {
        question: 'Could an NSI Act notification later on affect my investors’ relief?',
        answer:
          'It can, indirectly. The notification itself is not the problem. The problem is that the transaction triggering it may involve a change of control of the company, and a change of control inside the three-year qualifying period is one of the events that can cause relief to be withdrawn from investors who have already claimed it. There are limited circumstances where relief survives, for example certain share-for-share exchanges that meet the statutory conditions and where advance clearance has been obtained. That is a question to take to HMRC before the transaction completes, not after.',
      },
    ],
    closer:
      'Whether you are at Hub8, at the MX Innovation Centre, on an NCSC For Startups cohort or in the wider GCHQ-adjacent cluster, we handle the qualifying trade question, the SEIS and EIS chain, and the three-year monitoring that matters most in this sector.',
  },

  newcastle: {
    slug: 'newcastle',
    introDeep:
      "Newcastle’s startup ecosystem has been re-shaped by Newcastle Helix, a 24-acre innovation district hosting the National Innovation Centre for Data (NICD), the National Innovation Centre for Ageing, and The Catalyst life sciences building. The Northern Accelerator spinout programme spans five north east universities (Newcastle, Durham, Sunderland, Teesside, and Northumbria). PROTO at Gateshead Quays is the UK’s first dedicated digital production facility for immersive technology. Ignite is the long-running early-stage accelerator. The North East Mayoral Combined Authority (NEMCA), established in 2024, is beginning to unlock devolved innovation funding.",
    ecosystemDeep:
      "Newcastle’s ecosystem is anchored by Newcastle Helix, a 24-acre innovation district developed by Newcastle University, Newcastle City Council, and private partners. The Helix hosts NICD, the National Innovation Centre for Ageing, The Catalyst life sciences building, and commercial tenants. Newcastle University’s Business Development Directorate manages commercialisation and spinouts. Northumbria University BizSpace supports earlier-stage student enterprise.\n\nThe Northern Accelerator consortium extends spinout support across Newcastle, Durham, Sunderland, Teesside, and Northumbria Universities. PROTO at Gateshead Quays is the UK’s first dedicated digital production facility for immersive technology. Ignite is a long-running early-stage accelerator for high-scaling tech startups, with a three-month pre-accelerator and a six-month accelerator programme. TusPark UK operates workspace and a maker space with 3D printing, laser cutting, and digital fabrication capacity for rapid prototyping.\n\nOn the funding side, the North East Innovation Fund, managed by Northstar Ventures, is the most active local VC covering seed and Series A rounds. NPIF II delivery partners operate across the region. Angel Academe is active in the North East. NETPark at Sedgefield, County Durham, extends the innovation district network within the Northern Accelerator catchment. Ouseburn Valley in Newcastle concentrates a distinct creative and tech cluster.",
    whyMatchHere:
      "The Northern Accelerator route produces the cap table question that dominates Newcastle scheme work. A spinout from any of the five universities typically incorporates with a licensing or assignment agreement and a minority university equity stake already in place, and often with an academic founder who remains employed by the university.\n\nBoth facts need testing before a SEIS round. The university stake goes against the thirty per cent connected-person threshold and the independence condition. The academic founder’s position matters because an employee or director of the company who is also a substantial shareholder can be a connected person for their own subscription, which would deny them relief on shares they subscribe for. Neither is usually fatal, but both are cheaper to establish at incorporation than to discover when the SEIS1 is being prepared.",
    serviceBlurbs: serviceBlurbsFor('Newcastle'),
    faqs: [
      {
        question: 'How does a Northern Accelerator spinout structure affect SEIS or EIS eligibility?',
        answer:
          'Northern Accelerator is a consortium of Newcastle, Durham, Sunderland, Teesside and Northumbria Universities. A spinout typically incorporates with a licensing or assignment agreement with the relevant university and a minority university equity stake. The stake is usually well below the thirty per cent threshold that makes an investor a connected person, so eligibility is normally preserved, but it has to be measured against the actual share capital rather than assumed. The independence condition also requires the company not to be under the control of another company. The share class structure needs to accommodate the university holding alongside founder shares, an option pool, and SEIS or EIS-qualifying ordinary shares.',
      },
      {
        question: 'I am an academic founder and I want to invest in my own round. Can I claim SEIS relief?',
        answer:
          'It depends on your position in the company rather than on your academic post. An individual connected with the company cannot claim SEIS or EIS relief on their subscription. Connection arises through employment, through being a director in certain circumstances, or through holding more than thirty per cent of the share capital, voting power or assets, counting the holdings of associates. For SEIS there is a specific allowance for directors, and the rules on when a paid director can still qualify differ between the two schemes. This is worth resolving before you subscribe, because relief denied for connection cannot be recovered afterwards.',
      },
    ],
    closer:
      'Whether you are at Newcastle Helix, at PROTO, on an Ignite cohort or spinning out through Northern Accelerator, we start with the cap table and the connection tests, then run the SEIS and EIS chain from eligibility through to three-year monitoring.',
  },

  guildford: {
    slug: 'guildford',
    introDeep:
      "Guildford hosts one of the UK’s most sector-concentrated startup ecosystems, built around gaming (inheriting the talent base from Electronic Arts, Media Molecule, Criterion Games, and the wider developer community), satellite and space technology at Surrey Satellite Technology Ltd and Surrey Space Centre, and AI and 5G research at the 5G Innovation Centre at the University of Surrey. Surrey Research Park, managed by the University of Surrey, supports approximately 200 businesses. SETsquared Surrey, based at Surrey Research Park, is part of the SETsquared partnership. The S100 Club provides structured angel investment access.",
    ecosystemDeep:
      "Guildford’s ecosystem is distinctive for its depth in gaming, satellite and space, and AI and wireless research. Surrey Research Park is planned, developed, funded, and managed by the University of Surrey as a wholly owned university enterprise unit, contributing an estimated 590 million pounds of gross value added and 6,220 jobs to the Guildford economy. The Surrey Technology Centre is one of thirty-one buildings on the site.\n\nSETsquared Surrey, based at Surrey Research Park, runs a dedicated tech start-up incubator. The S100 Club is the SETsquared Surrey-facilitated angel investment network for investors interested in early-stage tech. The 5G/6G Innovation Centre at the University of Surrey is one of the UK’s primary mobile and wireless research sites. Surrey Space Centre hosts the academic base of the satellite and space cluster, with Surrey Satellite Technology Ltd (now part of Airbus Defence and Space) as the anchor commercial employer.\n\nGuildford’s gaming cluster reflects decades of studio activity. Electronic Arts, Media Molecule (Sony), Criterion Games (EA), and Supermassive Games are among the major employers. Defence and security tech is strong on Surrey Research Park. British Business Bank Enterprise Capital Funds are active alongside the S100 Club network. London proximity means many Guildford founders raise from mixed Guildford and London syndicates.",
    whyMatchHere:
      "Guildford throws up two scheme questions that most cities do not. For a games studio, the split between Video Games Expenditure Credit and R&D tax credits has to be settled early, because the same expenditure cannot be claimed under both, and the way costs are categorised at incorporation determines whether the split is defensible later. That is an R&D question rather than a SEIS one, but it sits in the same set of accounting policies.\n\nFor a space or defence-adjacent company, the harder question is the excluded activities boundary. Research and development leading to a trade the company will carry on is fine. A business whose substance is holding and licensing intellectual property it did not create, or receiving royalties on someone else’s design, is not. Space sector companies also sit close to National Security and Investment Act notification at later rounds, with the same change-of-control exposure inside a live qualifying period that applies to cyber companies.",
    serviceBlurbs: serviceBlurbsFor('Guildford'),
    faqs: [
      {
        question: 'Can a Guildford games studio claim both Video Games Expenditure Credit and R&D tax credits?',
        answer:
          'Not on the same expenditure. The two are mutually exclusive at the level of individual costs, so the categorisation has to be clean. Broadly, work resolving genuine scientific or technological uncertainty (engine development, novel rendering approaches, new middleware) tends toward R&D, and core production expenditure on a qualifying video game (level design, content creation, audio) tends toward VGEC. What causes problems at enquiry is a cost base that was never separated in the first place and has to be split retrospectively. Setting the accounting policies at incorporation is what makes the split defensible.',
      },
      {
        question: 'Does the S100 Club require a particular share structure?',
        answer:
          'Not by rule. The S100 Club is the angel network SETsquared Surrey facilitates for incubator members, and participation does not impose a share class requirement. What the investors themselves expect is a clean cap table: ordinary founder shares, a sensibly sized option pool, and SEIS or EIS eligibility either confirmed or visibly in progress. That is worth preparing for on its own terms, because SEIS and EIS shares must be ordinary shares carrying no preferential right to dividends or to assets on a winding up, and articles drafted without that in mind often need replacing before the first subscription.',
      },
    ],
    closer:
      'Whether you are at Surrey Research Park, through SETsquared Surrey, at the 5G Innovation Centre or in the Guildford gaming, satellite or defence clusters, we settle the qualifying trade and expenditure questions first, then run the SEIS and EIS chain from there.',
  },
};

export function getCityHubContent(slug: string): CityHubContent | undefined {
  return cityHubContent[slug];
}
