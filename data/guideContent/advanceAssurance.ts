// data/guideContent/advanceAssurance.ts
// Full content for the SEIS / EIS Advance Assurance Application guide.

import { GuideSection } from './rdTaxCredits';

export const advanceAssuranceContent: {
  introduction: string[];
  sections: GuideSection[];
  citySectionIntro: string;
} = {
  introduction: [
    "Advance Assurance from HMRC's Venture Capital Reliefs team is the de facto entry ticket to a UK SEIS or EIS round. The schemes themselves do not require advance assurance, but in practice sophisticated angel investors and seed funds will not commit to a round without seeing the assurance letter. The HMRC process takes 6-8 weeks on a clean application and 12+ weeks on anything ambiguous, so the assurance application sits on the critical path of any first-time SEIS raise.",
    "This guide covers the application end-to-end: the qualifying tests the founder needs to evidence before submitting, the exact document pack HMRC expects, the wording patterns that get returned with follow-up questions, the response protocol when HMRC does come back with queries, and the post-assurance steps that keep the company qualifying through to the actual share issue. The goal is a six-week turnaround on the first round, dropping to four weeks on subsequent rounds once the company has an established Venture Capital Reliefs Unit file.",
  ],
  sections: [
    {
      id: "what-is-advance-assurance",
      h2: "What is SEIS / EIS Advance Assurance?",
      paragraphs: [
        "Advance Assurance is a non-binding pre-clearance from HMRC's Venture Capital Reliefs (VCR) team confirming that, on the information provided, the company appears to meet the qualifying conditions for SEIS or EIS. It does not bind HMRC at the point of the actual share issue (the SEIS1 / EIS1 compliance statement is where qualifying is formally tested), but in practice an assurance letter rarely results in a later rejection unless something material has changed.",
        "Investors ask for the assurance letter for two reasons. First, it gives them confidence that the income tax relief and CGT exemption they are pricing into the investment will be available. Second, it shifts the qualifying-trade and corporate-structure risk from the investor to HMRC at the company level. Without the letter, the investor is making their own judgement on whether the company qualifies and is exposed to clawback if HMRC later disagrees.",
        "Founders can technically raise SEIS or EIS investment without advance assurance and rely solely on the SEIS3 / EIS3 certificates issued after the fact. In practice, this works only for friends-and-family rounds or rounds where the investors already have a working relationship with the founder. For any round including angel investors, syndicates, or seed funds, advance assurance is treated as a precondition.",
      ],
      callout: {
        type: 'data',
        heading: 'HMRC processing data: Advance Assurance applications',
        text: 'HMRC publishes target processing times of 4-6 weeks for SEIS / EIS Advance Assurance applications. In practice, the Venture Capital Reliefs Unit\'s queue runs longer in the September-November and February-April peaks, typically pushing first-time applications to 8-12 weeks. Specialist accountants who maintain ongoing relationships with the VCR team often see 4-week turnarounds on clean applications even in peak periods.',
      },
    },
    {
      id: "qualifying-tests",
      h2: "The qualifying tests to evidence before applying",
      paragraphs: [
        "Before drafting an application, the founder needs to confirm the company meets each of the structural qualifying tests. Submitting an application where one test fails wastes 6-8 weeks of HMRC time and the company's runway. The structural tests for SEIS are: company under 3 years from first commercial trade, fewer than 25 full-time-equivalent employees at the time of share issue, gross assets under £350,000 immediately before the SEIS investment, and the company must carry on a qualifying trade as its main business.",
        "For EIS, the equivalent tests are: company under 7 years from first commercial trade (10 years for Knowledge-Intensive Companies), fewer than 250 employees (500 for KICs), gross assets under £15m before the investment and £16m after, and a qualifying trade. EIS also has the risk-to-capital condition: HMRC must accept that the company has objective evidence of growth ambition and that the investment carries genuine risk of capital loss (not a wrapper for low-risk asset-backed activity).",
        "The qualifying trade test is the one where applications most commonly fail. Property development, dealing in land, financial services, asset leasing, hotels (with narrow exceptions for trading hotels meeting specific tests), and many sectors of legal and accounting services are excluded. A company whose stated activity falls into an excluded category cannot qualify regardless of how the application is worded. Founders in borderline sectors (typically property-related fintech, asset-backed lending businesses, or hospitality with mixed revenue streams) should test the qualifying-trade position with a specialist before applying.",
      ],
    },
    {
      id: "document-pack",
      h2: "The document pack HMRC expects",
      paragraphs: [
        "A complete SEIS or EIS Advance Assurance application includes specific documents, not generic startup paperwork. HMRC's Venture Capital Reliefs Unit is looking for evidence that the company qualifies under each test and that the proposed share issue will be structured correctly. The mandatory documents are: a covering letter explaining the trade and the proposed use of funds; the company's current Memorandum and Articles of Association; the most recent statutory or management accounts (or an opening balance sheet for newly-incorporated companies); a business plan with at least 24-month financial forecasts; the company's UTR and a list of all directors and their UTRs; and details of any prior or planned other state aid received.",
        "The covering letter is where the application succeeds or fails. HMRC wants three things: a clear statement of what the company actually does (the qualifying trade described in plain English), a clear statement of how the SEIS or EIS funds will be used (capital expenditure, R&D, working capital, hiring, marketing), and a clear statement of the share class that will be issued (ordinary shares with no preferential rights). Vague or marketing-style language about the company's product or mission delays the assurance even when the underlying business qualifies cleanly.",
        "The investor list is optional but materially speeds up the process. An application with named lead investors and indicative commitment letters is treated by the VCR team as a real round rather than a speculative application; processing times drop notably. For first-time founders without confirmed investors, the application should at least name the round size, the planned issue price, and the planned timing.",
      ],
      callout: {
        type: 'warning',
        heading: 'Article amendments often need to happen before applying',
        text: 'Many off-the-shelf company-formation Articles of Association include share classes or rights that disqualify SEIS / EIS shares. Common issues: preferred dividend rights, redemption rights, anti-dilution clauses with formula-based ratchets, drag-along thresholds set very low, and share class rights that vary materially from ordinary shares. The Articles need to be amended via a special resolution before SEIS / EIS shares are issued, and the amended version submitted with the assurance application. Specialists routinely review and amend Articles as the first step of an SEIS engagement.',
      },
    },
    {
      id: "wording-patterns",
      h2: "Wording patterns that get returned with queries",
      paragraphs: [
        "HMRC's VCR team sees thousands of applications per year and has developed reliable triggers for follow-up questions. Three wording patterns consistently delay applications. First, claiming a qualifying trade in language that overlaps with an excluded trade. Describing a fintech as 'a regulated financial services platform' will trigger queries even if the actual activity is software-licence revenue rather than financial intermediation. The correct framing is to describe the software and revenue model, not the regulated wrapper around it.",
        "Second, vague use-of-funds descriptions. 'Working capital and general business purposes' is the single most common phrase in poorly-drafted applications and the single most common trigger for HMRC queries. The VCR team wants specifics: '£60,000 on engineering hires across the first 12 months, £30,000 on AWS and software licences, £40,000 on a sales-led growth campaign Q3-Q4, £20,000 on professional fees and statutory compliance, £50,000 reserved as operating runway.' Specifics show the company has a real plan; vague descriptions trigger the suspicion that the funds will be used for non-qualifying activity.",
        "Third, share-class language inconsistent with the Articles. The assurance application should describe the proposed SEIS / EIS shares as 'new ordinary shares ranking pari passu with existing ordinary shares with no preferential rights to dividend, capital, or voting.' If the Articles allow preferred shares (even if none are issued), the VCR team will query whether the SEIS / EIS shares could be subordinated in practice and require a clarifying amendment.",
      ],
    },
    {
      id: "response-protocol",
      h2: "Responding to HMRC follow-up questions",
      paragraphs: [
        "Most first-time applications receive at least one round of HMRC follow-up questions, usually within 4-6 weeks of submission. The response window is typically 28 days, but a same-week response keeps the application on the live queue rather than dropping into the longer-tail review pile. The response should answer the specific question asked, attach any supporting evidence requested, and confirm that no material facts have changed since the original submission. Argumentative or defensive responses delay the process; clear factual responses speed it up.",
        "Common follow-up questions and the correct response pattern. 'Please clarify the company's qualifying trade': respond with a specific description of the revenue model and how it differs from any excluded trade. 'Please confirm how the funds will be used': respond with a categorised breakdown if not already provided, ideally tied to milestones in the business plan. 'Please provide further detail on the share rights': respond with the relevant Article reference and a confirmation that no other share class exists or will be created during the qualifying period.",
        "Where the VCR team raises a substantive concern (genuine doubt about qualifying trade, share-rights issue, gross-asset proximity to the threshold), the correct response is often to amend the application rather than argue. Withdraw, amend the Articles or restructure the round, resubmit. This costs 2-4 weeks but is faster than escalating a borderline application to a senior reviewer who may take a harder line than the initial caseworker.",
      ],
    },
    {
      id: "post-assurance",
      h2: "Post-assurance: keeping qualifying through to share issue",
      paragraphs: [
        "An assurance letter typically arrives 6-8 weeks after submission. From that point, the company has the substantive ability to close investor commitments, but the qualifying tests must continue to be met right through to the actual share issue date and for the three-year qualifying period after. Several common mid-process failures void the assurance: issuing different share classes than described, taking the gross-asset test over £350,000 (SEIS) or £15m (EIS) before the issue, exceeding the employee threshold, or commencing trade in an excluded activity.",
        "The most common practical failure is the gross-asset test for SEIS. A company that secures a bridge facility, takes a grant, or recognises a material intangible asset (capitalised software, IP valuation) between assurance and issue may breach the £350,000 cap. The test is taken immediately before the SEIS issue, so timing of bridge facilities and asset recognitions matters. Specialists routinely check the gross-asset position in the week before the planned share-issue date.",
        "The assurance letter is not a permanent green light. It applies to the share issue described in the application. If the company materially changes the trade, the cap-table structure, or the planned use of funds after assurance and before issue, a fresh assurance application is the cleanest path. Investors and lead funds may pause the round until the new assurance is received.",
      ],
      callout: {
        type: 'tip',
        heading: 'Maintaining the file for subsequent rounds',
        text: 'For companies that will raise multiple SEIS / EIS rounds (typical pattern: SEIS at incorporation, EIS once the SEIS limit is reached, KIC EIS in later rounds), maintaining the VCR Unit file is materially faster than starting from scratch. Specialist accountants who file regularly with the VCR team often have direct caseworker continuity across rounds, reducing the assurance turnaround for subsequent applications to 3-4 weeks.',
      },
    },
  ],
  citySectionIntro:
    "Advance Assurance applications are handled centrally by HMRC's Venture Capital Reliefs Unit, not by regional offices, so the geographic location of the company or its accountant does not affect the application directly. What matters is the specialist's recent caseload with the VCR team. The matching service surfaces specialist accountants whose live caseloads are dominated by SEIS / EIS work and who maintain ongoing working relationships with the VCR Unit.",
};
