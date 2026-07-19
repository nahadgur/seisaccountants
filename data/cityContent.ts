// data/cityContent.ts
export const cityPageContent = {
  introHeading: (cityName: string) => `SEIS and EIS Specialist Accountants in ${cityName}`,
  introParagraphs: (cityName: string) => [
    `${cityName} is one of the UK's active SEIS and EIS hubs, with founders raising scheme-relieved capital across SaaS, deeptech, biotech, fintech, and consumer brands. The mechanics of these rounds are unforgiving: a poorly drafted advance assurance application loses six weeks; a misdated share certificate breaks SEIS; a missed SEIS1 deadline blocks investor relief. Founders need accountants whose live caseload is dominated by scheme work, not generalist practices that file the occasional advance assurance.`,
    `We cover ${cityName} as SEIS specialists working day-to-day with HMRC's Venture Capital Reliefs team. We handle the full lifecycle: pre-application eligibility review, advance assurance drafting, share issuance and cap table maintenance, SEIS1 and EIS1 compliance statements, SEIS3 and EIS3 investor certificate distribution, and three-year qualifying-period monitoring. Every engagement starts with a fixed written quote, and scheme work is the day-to-day caseload of the practice.`
  ],
  matchingHeading: (cityName: string) => `Why ${cityName} Founders Choose Our SEIS Specialist Accountants`,
  matchingCards: (cityName: string) => [
    { iconName: 'Star', title: "Scheme-Specialist Caseload", desc: `Our ${cityName} SEIS and EIS work is a live caseload, not occasional applications. We have direct relationships with HMRC's VCR team and know what triggers follow-up queries before submission, not after.` },
    { iconName: 'Shield', title: "Advance Assurance Inside the Window", desc: `We reliably get clean advance assurance approvals inside HMRC's published 4-6 week service-level window for ${cityName} founders, by drafting the application narrative to pre-empt the predictable HMRC questions on excluded trades, control, and use of funds.` },
    { iconName: 'Clock', title: "Cap Table That Survives Series A", desc: `Beyond the immediate round, we structure share issuance and cap tables so that prior SEIS positions survive future EIS, EMI, and series A rounds. We understand how investor diligence reads a ${cityName} SEIS cap table.` },
    { iconName: 'CheckCircle', title: "Investor-Ready SEIS3 Distribution", desc: `Investors expect SEIS3 certificates within weeks of HMRC approval, not months. We distribute ${cityName} SEIS3 certificates within days, with covering communication that explains the relief-claim mechanics, so investors come back for follow-on capital.` }
  ],
  sidebarCta: (cityName: string) => ({ heading: `SEIS Accountants in ${cityName}`, description: `Specialist SEIS and EIS accountants in ${cityName}, handling advance assurance, share issuance, SEIS1 compliance, investor certificate distribution, and three-year qualifying-period monitoring.` }),
  sidebarFinance: (cityName: string) => ({ heading: `Annual Retainers for Multi-Round Founders`, description: `We offer ${cityName} multi-round founders annual retainers that bundle the full lifecycle work across a financial year, including qualifying-period monitoring on prior rounds and advance assurance for upcoming rounds.` }),
  bottomCta: (cityName: string) => ({ heading: `Ready to Speak to SEIS Accountants in ${cityName}?`, description: `Specialist scheme accountants who handle your ${cityName} SEIS and EIS lifecycle end-to-end with active HMRC relationships.` }),
  schemaServiceTypes: ["seis-advance-assurance", "eis-advance-assurance", "share-issuance-cap-table", "seis1-eis1-compliance", "investor-tax-certificates", "qualifying-period-monitoring", "rd-tax-credits"],
};
