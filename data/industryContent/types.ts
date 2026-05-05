// data/industryContent/types.ts
// Shared types for industry rich content. Each new industry added to the site
// exports an IndustryContent object from its own file and registers here.

export interface IndustryPlaybookSection {
  /** Section heading displayed as h3. */
  heading: string;
  /** Body prose. Paragraphs are split on \n\n at render time. */
  body: string;
}

export interface IndustryFaq {
  question: string;
  answer: string;
}

export interface IndustryBenefit {
  title: string;
  desc: string;
}

export interface IndustryContent {
  /** Must match the industry slug in data/industries.ts. */
  slug: string;
  /** Overview section paragraphs, displayed under Section 01. */
  overview: string[];
  /** Benefit cards, displayed under Section 02. Four cards read best. */
  benefits: IndustryBenefit[];
  /** The long-form playbook sections. Section 03, the core of the page. */
  playbook: IndustryPlaybookSection[];
  /** Fit check intro sentence, displayed above the candidate bullets. */
  fitCheckIntro: string;
  /** Fit check candidate bullets, displayed under Section 04. */
  fitCheck: string[];
  /** FAQ entries for Section 05 and the FAQPage schema. */
  faqs: IndustryFaq[];
}

import { saasContent } from './saas';
import { techStartupsContent } from './tech-startups';
import { fintechContent } from './fintech';
import { ecommerceContent } from './ecommerce';
import { lifeSciencesContent } from './life-sciences';
import { creativeContent } from './creative';

/**
 * Registry of all industry content, keyed by industry slug.
 * New industries: add the import above and the entry below.
 */
export const industryContent: Record<string, IndustryContent> = {
  'saas-startups': saasContent,
  'tech-startups': techStartupsContent,
  'fintech-startups': fintechContent,
  'ecommerce-startups': ecommerceContent,
  'life-sciences-startups': lifeSciencesContent,
  'creative-media-startups': creativeContent,
};

export function getIndustryContent(slug: string): IndustryContent | undefined {
  return industryContent[slug];
}
