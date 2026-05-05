// data/guideContent/rdTaxCredits.ts
// Full content for the R&D Tax Credits guide.
// Structured as sections with H2/H3 headings, paragraphs, data tables, and callouts.
// All HMRC statistics sourced from published HMRC R&D Tax Credits Statistics (2023-24 release).

export interface DataTable {
  caption: string;
  headers: string[];
  rows: string[][];
  source: string;
}

export interface Callout {
  type: 'definition' | 'data' | 'tip' | 'warning' | 'example';
  heading?: string;
  text: string;
}

export interface Subsection {
  id: string;
  h3: string;
  paragraphs: string[];
  callout?: Callout;
}

export interface GuideSection {
  id: string;
  h2: string;
  paragraphs: string[];
  subsections?: Subsection[];
  dataTable?: DataTable;
  callout?: Callout;
}

export const rdTaxCreditsContent: {
  introduction: string[];
  sections: GuideSection[];
  citySectionIntro: string;
} = {
  introduction: [
    "For most SEIS-backed and EIS-backed UK companies, R&D tax credits are the single largest non-equity cash inflow in the first three years of operation. SEIS and EIS bring investor capital onto the balance sheet at favourable investor economics; the [R&D credit under the merged scheme](https://www.gov.uk/guidance/corporation-tax-research-and-development-rd-relief) returns a meaningful percentage of the underlying R&D spend back to the company itself. Stack the two correctly and a £200,000 SEIS round funding £150,000 of qualifying R&D produces an additional £30,000-£40,500 in HMRC cash on top of the original investor capital.",
    "This guide covers how R&D credits work specifically for companies inside the SEIS / EIS ecosystem: the SEIS + R&D interaction (which does not affect SEIS qualification but does affect cash-flow modelling), the merged scheme rules under HMRC's post-April-2024 regime, what qualifies, how to size and prepare a claim that survives HMRC enquiry, and how to find a specialist accountant whose live caseload covers both SEIS work and R&D filings.",
  ],
  sections: [
    {
      id: "seis-rd-interaction",
      h2: "How do R&D tax credits interact with SEIS and EIS funding?",
      paragraphs: [
        "SEIS and EIS investor capital is private investment for the purpose of the R&D scheme, not state aid or subsidy. That means SEIS / EIS-funded R&D activity is fully claimable under the merged R&D scheme at the standard rate, with no reduction or carve-out applied to the qualifying expenditure base. A SEIS-backed company spending the entirety of a £200,000 SEIS round on qualifying R&D claims R&D credits on the full amount.",
        "This is materially different from the treatment of grant funding. Notified state aid grants (Innovate UK Smart Grants, Wellcome Trust, MRC, certain Horizon Europe schemes) reduce the qualifying R&D expenditure available for the enhanced SME-intensive R&D rate, because the company is treated as having received state aid on those costs. SEIS and EIS rounds carry none of this restriction.",
        "The practical implication for SEIS-backed founders is that the funding-stack matters. Stacking SEIS, EIS, and R&D credits cleanly is one of the recurring engagements for specialist accountants in the SEIS network. Where a company also takes a notified state aid grant in the same period, the qualifying R&D expenditure has to be split between grant-funded costs (claimed at the lower 20 percent merged-scheme rate) and equity-funded costs (claimed at the SME-intensive 27 percent rate, where applicable). Specialists model this split before the financial year-end so the claim treatment is documented at filing time.",
      ],
      callout: {
        type: 'tip',
        heading: 'Cash-flow modelling for SEIS-backed companies',
        text: 'The R&D credit cash payment typically arrives 4-8 weeks after a well-prepared claim is filed alongside the Corporation Tax return. For loss-making early-stage SEIS-backed companies where the credit is the largest single annual cash inflow, the timing assumption can make or break the runway calculation. Specialists model the credit receipt as an uncertain inflow in the month following submission, with a contingency for HMRC enquiry delays of 3-6 months.',
      },
    },
    {
      id: "what-qualifies",
      h2: "What counts as qualifying R&D for a SEIS-backed company?",
      paragraphs: [
        "The most common misconception about R&D tax credits is that they are only for companies with laboratories, researchers, or academic partnerships. HMRC's definition is considerably broader and covers the vast majority of SEIS-stage and EIS-stage tech, biotech, and engineering companies.",
        "The statutory definition requires that your company is seeking an advance in science or technology by resolving a scientific or technological uncertainty, meaning a problem whose solution is not readily available from existing knowledge in the field. This does not require a breakthrough. It requires that your team did not know the answer at the start and had to experiment, iterate, or investigate to find it.",
        "In practice, this covers building a new software architecture that solves a performance problem no known approach has addressed, developing a machine learning model whose output behaviour was uncertain during training, creating a new manufacturing process that overcomes material limitations, or designing a medical device whose clinical performance was not established from prior literature. It also covers failures: work that did not produce the desired outcome still qualifies if it involved genuine technical investigation. For most SEIS-funded software companies in their first two or three years, the substantial part of engineering activity qualifies.",
      ],
      callout: {
        type: 'definition',
        heading: 'HMRC definition: qualifying R&D',
        text: 'A project qualifies for R&D tax credits if it seeks to achieve an advance in overall knowledge or capability in a field of science or technology, and resolves scientific or technological uncertainty, meaning the uncertainty cannot be resolved by a competent professional working in the field consulting publicly available sources.',
      },
      subsections: [
        {
          id: "qualifying-software",
          h3: "Does software development qualify for R&D tax credits?",
          paragraphs: [
            "Yes, software development is one of the most commonly qualifying categories of R&D in the UK, and accounts for a significant proportion of total SME claims. HMRC's information and communication sector (which covers software, SaaS, and digital product companies) is consistently the second-largest sector by number of claims, with over 13,000 claims per year.",
            "Qualifying software R&D typically includes building novel algorithms that solve computational problems without a known prior solution, developing new approaches to data processing, storage, or retrieval that are not available from existing tools, creating AI or machine learning systems whose architecture and performance characteristics were uncertain at the outset, and integrating disparate systems in ways that require solving genuine interoperability challenges.",
            "Routine software development, building a standard e-commerce site using established frameworks, configuring existing software, or styling front-end components, does not qualify. The dividing line is whether your engineers were solving known problems with known tools, or genuinely uncertain technical problems requiring investigation.",
          ],
        },
        {
          id: "qualifying-sectors",
          h3: "Which startup sectors generate the most qualifying R&D?",
          paragraphs: [
            "While any sector can generate qualifying R&D, certain industries produce consistently high volumes of eligible expenditure per company. Life sciences, pharmaceutical, and medical device startups routinely qualify for large claims due to the scientific nature of their development work. Advanced manufacturing, materials science, and engineering companies qualify for process and materials R&D. Fintech companies qualify for algorithm development, risk modelling systems, and security infrastructure work.",
            "Gaming studios qualify for engine development, procedural generation systems, and graphics rendering work that goes beyond what existing engines provide. Cleantech and climate technology companies qualify for energy system modelling, sensor development, and novel material applications. Agricultural technology companies qualify for precision farming systems, crop monitoring algorithms, and biotechnology applications.",
          ],
        },
        {
          id: "not-qualifying",
          h3: "What does not qualify for R&D tax credits?",
          paragraphs: [
            "Certain activities are explicitly excluded from HMRC's definition of qualifying R&D, regardless of how technically complex they appear. Arts, humanities, social sciences, and economics are excluded, qualifying R&D must be in natural science, engineering, or technology. Market research, consumer testing, and commercial feasibility studies do not qualify, even if they involve data analysis.",
            "Capital expenditure on land or buildings does not qualify, though capital expenditure on software and equipment used in R&D does. The cost of obtaining patents and licences is excluded. Work that applies existing techniques to solve known problems, even if the application is sophisticated, does not qualify if a competent professional in the field could have reached the same solution without genuine uncertainty.",
          ],
          callout: {
            type: 'tip',
            heading: 'Practical test',
            text: 'Ask your lead engineer: "At the start of this project, did you know how to solve the core technical challenge?" If the honest answer is no, the project almost certainly contains qualifying R&D. If the answer is yes, document why anyway, HMRC may ask.',
          },
        },
      ],
    },
    {
      id: "merged-scheme-rates",
      h2: "How much can a SEIS or EIS-backed company claim in R&D tax credits under the merged scheme?",
      paragraphs: [
        "The merged R&D scheme, introduced for accounting periods beginning on or after 1 April 2024, replaced the previous two-track system (SME enhanced deduction and RDEC) with a single scheme available to most UK companies.",
        "Under the merged scheme, qualifying companies receive a 20% above-the-line credit on qualifying R&D expenditure. For a paying company (one that is profitable and paying Corporation Tax), the net benefit after tax is approximately 15p for every £1 of qualifying spend at a 25% Corporation Tax rate. For loss-making companies, the credit is fully payable in cash at 20% of qualifying costs, meaning a startup spending £200,000 on qualifying R&D in a year where it makes a loss receives a £40,000 cash payment from HMRC.",
        "R&D-intensive SMEs, defined as companies where qualifying R&D expenditure exceeds 30% of total expenditure in the period, qualify for an enhanced 27% credit rate rather than the standard 20%. This enhanced rate is particularly valuable for early-stage startups where R&D is the primary business activity and operating costs are largely R&D in nature.",
      ],
      dataTable: {
        caption: "Merged R&D scheme credit rates 2024–25",
        headers: ["Company type", "Credit rate", "Net benefit (paying company)", "Net benefit (loss-making)"],
        rows: [
          ["Standard company (non-R&D-intensive)", "20%", "~15% of qualifying spend", "20% cash payable"],
          ["R&D-intensive SME (>30% R&D spend)", "27%", "~20% of qualifying spend", "27% cash payable"],
          ["Vaccine research / certain life sciences", "27%", "~20% of qualifying spend", "27% cash payable"],
        ],
        source: "HMRC R&D Tax Relief Guidance, 2024–25. Corporation Tax rate assumed at 25%.",
      },
      callout: {
        type: 'data',
        heading: 'HMRC published data: UK R&D claims 2022–23',
        text: 'HMRC received 90,315 R&D tax credit claims for 2022–23, supporting £7.7bn in R&D expenditure. The average SME claim was £57,228. The information and communication sector (software, SaaS, digital) filed 13,180 claims, the second largest sector. Manufacturing filed 14,095 claims. Professional, scientific and technical activities filed 12,460.',
      },
      subsections: [
        {
          id: "loss-making-claims",
          h3: "Can a loss-making startup claim R&D tax credits as cash?",
          paragraphs: [
            "Yes, and for most early-stage startups, the loss-making position makes R&D credits more valuable, not less. Under the merged scheme, a company in a loss position receives the credit as a direct cash payment from HMRC at the applicable rate (20% or 27%), rather than as a reduction in a Corporation Tax bill that does not yet exist.",
            "This means a startup spending £300,000 on qualifying R&D in a year where it is loss-making receives either £60,000 (at 20%) or £81,000 (at 27% if R&D-intensive) as a cash payment from HMRC, typically within four to six weeks of a well-prepared claim submission. For pre-revenue startups, this is often the largest single cash inflow in the financial year.",
            "The only restriction on payable credits under the merged scheme is the PAYE/NIC cap: the payable credit cannot exceed £20,000 plus 300% of the company's total PAYE and NIC liability for the period. For startups with a payroll, this cap rarely binds, but very early pre-employee startups should be aware of it.",
          ],
        },
        {
          id: "calculating-claim",
          h3: "How do you calculate the size of an R&D tax credit claim?",
          paragraphs: [
            "Calculating your R&D credit starts with identifying qualifying expenditure across four main cost categories: employee costs (salaries, employer NIC, and pension contributions for employees directly engaged in R&D), externally provided workers (agency workers and contractors at 65% of the payment for merged scheme claims), consumable materials used up or transformed in the R&D process, and software licences and cloud computing costs directly and necessarily used in qualifying R&D.",
            "Not all employee time qualifies, only time spent directly on qualifying R&D projects. If an engineer spends 60% of their time on qualifying R&D and 40% on routine product maintenance, only 60% of their employment costs are includable. Documenting this allocation is one of the most important parts of claim preparation, and one of the areas where specialist accountants add the most value compared to a general practitioner preparing the claim without a technical review.",
            "Subcontractor costs are included at 65% of the qualifying payment under the merged scheme, reflecting HMRC's assumption that the subcontractor receives some benefit from performing the R&D work. Payments to connected parties (related companies, directors) are capped at the lower of the actual payment and the connected party's own cost.",
          ],
        },
      ],
    },
    {
      id: "pre-merger-comparison",
      h2: "What changed with the merged R&D scheme in April 2024?",
      paragraphs: [
        "Prior to April 2024, UK companies could claim R&D tax credits through one of two parallel schemes: the SME enhanced deduction scheme, which allowed small and medium companies to deduct 186% of qualifying expenditure from taxable profits (or claim a 10% payable credit if loss-making), and the Research and Development Expenditure Credit (RDEC) scheme, which applied to large companies and provided an above-the-line credit of 20%.",
        "The merged scheme replaced both with a single 20% above-the-line credit applying to accounting periods beginning on or after 1 April 2024. The practical effect for most startups is a reduction in the headline rate compared with the old SME scheme, but a simplification of the rules, there is now no need to determine whether your company meets the SME definition, and no separate calculation methodology for large company R&D.",
        "The significant exception is the R&D-intensive SME category, which preserves a higher 27% rate for qualifying small companies where R&D expenditure exceeds 30% of total expenditure. This category was specifically designed to protect the most innovation-heavy early-stage companies from the reduction in the standard SME rate, and many pre-revenue or early-revenue startups will qualify.",
      ],
      dataTable: {
        caption: "Old vs. new R&D scheme comparison (SMEs)",
        headers: ["", "Old SME scheme (pre-April 2024)", "Merged scheme (from April 2024)"],
        rows: [
          ["Credit mechanism", "Enhanced deduction (186% of qualifying costs)", "Above-the-line credit (20% or 27%)"],
          ["Benefit for paying company", "~24.7% of qualifying spend at 25% CT", "~15% at 20% / ~20% at 27%"],
          ["Payable credit (loss-making)", "10% of qualifying costs", "20% or 27% of qualifying costs"],
          ["Subcontractor costs included at", "65% (connected parties: cost only)", "65% (connected parties: cost only)"],
          ["Overseas R&D", "Qualifying with limited exceptions", "Qualifying where no equivalent in UK"],
          ["Prior notification required?", "No", "Yes, for first-time claimants and new projects"],
        ],
        source: "HMRC R&D Tax Credit legislation and guidance, Finance Act 2024.",
      },
      callout: {
        type: 'warning',
        heading: 'Prior notification requirement (new from April 2023)',
        text: "Companies claiming R&D tax credits for the first time, or claiming for a new project type they have not claimed before, must submit an [Advance Notification to HMRC](https://www.gov.uk/guidance/tell-hmrc-that-youre-planning-to-claim-research-and-development-rd-tax-relief) within six months of the end of the accounting period in which the qualifying expenditure was incurred. Missing this deadline means you cannot claim for that period. If this is your first R&D claim, notify HMRC before you file your Corporation Tax return.",
      },
    },
    {
      id: "qualifying-costs",
      h2: "What expenditure qualifies for an R&D tax credit claim?",
      paragraphs: [
        "Qualifying expenditure under the merged R&D scheme falls into six main categories. Getting the cost identification right, particularly for employee time and software costs, is where the difference between a well-prepared specialist claim and a self-prepared claim is most pronounced.",
      ],
      subsections: [
        {
          id: "staff-costs",
          h3: "Staff costs (the largest qualifying category for most startups)",
          paragraphs: [
            "Qualifying staff costs include gross salaries, employer National Insurance contributions, and employer pension contributions for employees who directly engage in qualifying R&D activities. Agency workers and contractors are included at 65% of the qualifying payment.",
            "The allocation of staff costs between qualifying and non-qualifying activity is done on a time-apportionment basis. If a developer spends 70% of their time on qualifying R&D projects and 30% on bug fixes and routine maintenance, 70% of their employment cost is includable. Larger companies typically use timesheets; smaller companies can use a reasonable estimate supported by documentation of the projects involved.",
            "Directors who work on R&D qualify in the same way as employees. Founder-engineers who spend significant time on technical development are often the largest single qualifying cost in an early-stage startup's claim, and are frequently excluded from self-prepared claims because founders do not realise their own time qualifies.",
          ],
        },
        {
          id: "software-costs",
          h3: "Software and cloud computing costs",
          paragraphs: [
            "Software licences used directly in qualifying R&D are eligible expenditure under the merged scheme, as are cloud computing costs, including AWS, Google Cloud, and Azure, when those costs are directly and necessarily incurred in performing qualifying R&D activities.",
            "The key qualifier is 'directly and necessarily.' Cloud compute costs for running production infrastructure do not qualify. Cloud compute costs for running model training jobs, running test environments for qualifying R&D, or performing qualifying data processing operations do qualify. Splitting cloud costs between qualifying and non-qualifying use is typically done on a usage basis (CPU hours, storage consumed) rather than cost allocation.",
            "Licence costs for tools like Matlab, specialist simulation software, or scientific computing libraries qualify when the licence is used primarily for qualifying R&D. General-purpose tools like office software do not qualify, even if they are used incidentally in R&D projects.",
          ],
        },
        {
          id: "consumables",
          h3: "Consumable materials",
          paragraphs: [
            "Consumable materials that are used up or transformed in the R&D process qualify at 100% of cost. This category is most significant for hardware, manufacturing, life sciences, and materials science startups where physical prototyping is part of the development process.",
            "A biotech startup consuming reagents in laboratory experiments qualifies for the reagent costs. A hardware startup destroying prototype circuit boards in testing qualifies for the component costs. A food technology company consuming ingredients in recipe development qualifies for the ingredient costs. The material must be consumed in the R&D process, materials that are retained, sold, or incorporated into a finished product do not qualify.",
          ],
        },
      ],
    },
    {
      id: "claim-process",
      h2: "How do you make an R&D tax credit claim in the UK?",
      paragraphs: [
        "R&D tax credits are claimed through your annual Corporation Tax return (CT600), specifically by completing the supplementary CT600L form. Unlike a grant application, there is no separate R&D application form, the claim is made as part of your normal tax filing.",
        "In practice, a well-prepared claim involves three distinct workstreams running in parallel: the technical narrative (documenting the qualifying projects, the scientific or technological uncertainties addressed, and the work done to resolve them), the cost analysis (identifying and quantifying qualifying expenditure across all cost categories), and the tax computation (calculating the credit, applying the applicable rate, and integrating the result into the CT600).",
        "Most specialist R&D accountants conduct an initial review meeting with the founder and technical team to identify qualifying projects, then prepare a technical narrative with the team's input, cross-reference it against financial records to identify qualifying costs, and prepare the CT600L alongside the full Corporation Tax return. The review meeting typically takes two to three hours; the full claim preparation process takes two to four weeks.",
      ],
      callout: {
        type: 'tip',
        heading: 'Time limit for R&D claims',
        text: 'R&D tax credit claims can be made up to two years after the end of the accounting period in which the qualifying expenditure was incurred. This means companies can submit claims retrospectively for the two most recent accounting periods. If your company has been doing qualifying R&D and has never claimed, a retrospective claim for the previous two years is usually the first action a specialist accountant will take.',
      },
      subsections: [
        {
          id: "hmrc-enquiries",
          h3: "How does HMRC review R&D claims, and what triggers an enquiry?",
          paragraphs: [
            "HMRC processes most well-prepared R&D claims without opening a formal enquiry. Claims that are submitted with a full technical narrative, properly documented cost analysis, and accurate CT600L data are typically processed within four to six weeks of submission.",
            "Claims that trigger HMRC enquiries tend to share common characteristics: high claimed costs relative to the company's apparent technical complexity, vague or generic technical narratives that do not specifically describe the uncertainties addressed, inclusion of clearly non-qualifying costs, or material inconsistencies between the technical narrative and the financial records. HMRC's compliance unit has become significantly more active in R&D enquiries since 2022, and poorly prepared claims now face substantially higher scrutiny than they did in previous years.",
            "The best defence against an enquiry is a claim that would satisfy a competent professional reading it cold. The technical narrative should describe specific projects, specific uncertainties, and specific approaches taken to resolve them, not generic descriptions of the company's technology. The cost analysis should be supported by payroll records, timesheets or time estimates, and software contracts that a reviewer can check against the narrative.",
          ],
        },
        {
          id: "timeline",
          h3: "How long does an R&D tax credit claim take from preparation to payment?",
          paragraphs: [
            "A well-prepared claim submitted as part of the Corporation Tax return typically receives payment or tax credit from HMRC within four to six weeks of submission. HMRC's processing target for R&D repayment claims is 28 days for straightforward submissions.",
            "Claims that require additional information from HMRC, or that are selected for compliance checks, take considerably longer, typically three to six months for a standard compliance check, and potentially 12 to 18 months for a formal enquiry. The risk of compliance checks has increased significantly since 2022, making claim quality the most important determinant of timeline.",
          ],
          callout: {
            type: 'data',
            heading: 'Average R&D claim sizes by sector (HMRC 2022–23)',
            text: 'Manufacturing: average claim £112,000. Information and communication (software/SaaS): average claim £68,000. Professional, scientific and technical: average claim £81,000. Financial and insurance activities (fintech): average claim £93,000. Human health and social work (healthtech/medtech): average claim £71,000. Source: HMRC R&D Tax Credits Statistics, September 2024.',
          },
        },
      ],
    },
    {
      id: "documentation",
      h2: "What records does HMRC require for an R&D tax credit claim?",
      paragraphs: [
        "HMRC does not prescribe a specific format for R&D claim documentation, but they expect companies to be able to demonstrate, on request, that the claimed projects were genuinely qualifying, that the costs claimed were actually incurred, and that the allocation of costs between qualifying and non-qualifying activity was reasonable.",
        "In practice, the documentation that best supports an R&D claim consists of a contemporaneous technical record (project notes, code commits, lab notebooks, design documents, or engineering reports created during the R&D work), financial records cross-referenced against the claimed costs (payroll records, contractor invoices, software contracts, purchase receipts), and a time allocation record (timesheets or a documented estimate with supporting rationale) for the employee cost calculation.",
        "The technical narrative submitted with the claim should draw on these underlying records and present a clear, factual account of the qualifying projects. It does not need to reveal commercially sensitive intellectual property, describing the nature of the uncertainty and the approach taken to resolve it is sufficient, without disclosing the specific solution found.",
      ],
      callout: {
        type: 'warning',
        heading: 'Record retention requirement',
        text: 'HMRC can open an enquiry into an R&D claim up to four years after the filing date of the Corporation Tax return in which it was made (or 20 years in cases of fraud). All supporting documentation should be retained for at least six years from the end of the accounting period, including project notes, timesheets, and supplier contracts.',
      },
    },
    {
      id: "sector-specific",
      h2: "R&D tax credits by sector: what qualifies in your industry?",
      paragraphs: [
        "While HMRC's qualifying criteria apply uniformly across all sectors, the practical application differs significantly depending on what your company actually builds. The following sector profiles identify the most commonly qualifying activities and the most frequently missed eligible costs.",
      ],
      subsections: [
        {
          id: "saas-software",
          h3: "SaaS and software companies",
          paragraphs: [
            "SaaS and software startups typically have the highest proportion of qualifying R&D to total expenditure of any sector, because their primary cost is engineering labour and their primary activity is technical development. The qualifying activity threshold is crossed whenever engineers are solving problems that required genuine investigation rather than applying known patterns.",
            "Commonly qualifying activities include building novel database architectures that solve performance or scalability problems not addressed by existing solutions, developing distributed systems with novel consistency or fault-tolerance properties, creating machine learning pipelines where the model architecture and training approach were uncertain, and building real-time processing systems with novel latency or throughput characteristics.",
            "Frequently missed costs include founder-engineer time (directors who are also the technical leads qualify in full), cloud computing costs for model training and test environments, open-source library development where the uncertainty relates to the library's technical approach, and integration work that involved resolving genuine API incompatibilities rather than applying documented integration patterns.",
          ],
        },
        {
          id: "life-sciences",
          h3: "Life sciences, medtech, and healthtech",
          paragraphs: [
            "Life sciences and medtech companies typically have large, well-documented qualifying R&D activities due to the scientific nature of their work, but sometimes underestimate their qualifying costs by excluding work that does not result in a regulatory filing. Pre-clinical research, failed experiments, and discontinued development programmes all qualify if they involved genuine scientific uncertainty.",
            "Qualifying activities include compound or device development, clinical data analysis involving novel statistical methodologies, software development for diagnostic or monitoring devices, and manufacturing process development for novel biologics or devices. Where a company uses Contract Research Organisations (CROs) or Contract Development and Manufacturing Organisations (CDMOs), the subcontractor costs qualify at 65% of the qualifying payment under the merged scheme.",
          ],
        },
        {
          id: "gaming",
          h3: "Gaming studios",
          paragraphs: [
            "UK gaming studios qualify for both R&D tax credits and Video Games Tax Relief (VGTR), two separate schemes that can be claimed simultaneously for qualifying projects. R&D credits apply to technical development work (engine development, rendering systems, physics simulation, AI/NPC behaviour systems) that involves genuine technical uncertainty. VGTR applies to the overall production costs of qualifying British video games.",
            "The distinction between qualifying R&D and routine game development is important. Building a new rendering technique that solves a performance problem not addressed by existing engines qualifies. Configuring Unreal Engine to render a specific art style does not. Developing a novel procedural generation system whose statistical properties were uncertain qualifies. Using established procedural algorithms to generate levels does not.",
          ],
        },
        {
          id: "fintech",
          h3: "Fintech and financial technology",
          paragraphs: [
            "Fintech startups frequently underestimate their R&D credit eligibility because they assume financial modelling and algorithm development are not sufficiently 'scientific' to qualify. HMRC's definition explicitly includes technology, and financial technology involves genuine scientific uncertainty when developing novel risk models, fraud detection systems, trading algorithms, or regulatory compliance automation.",
            "Qualifying fintech R&D typically includes developing novel credit scoring algorithms whose predictive accuracy was uncertain during development, building real-time fraud detection systems using machine learning approaches that required experimental validation, creating regulatory reporting systems that involved solving novel data reconciliation challenges, and developing financial simulation models with novel statistical methodologies.",
          ],
        },
      ],
    },
  ],
  citySectionIntro: "R&D tax credits are available UK-wide and HMRC's Venture Capital Reliefs and R&D teams are centralised, so the scheme has no regional component. What does vary by location is the supply of accountants whose live caseload covers both SEIS / EIS scheme work and R&D filings together — most network practices in the major UK SEIS hubs do both, and the matching service surfaces specialists with genuine sector-specific experience in your catchment.",
};
