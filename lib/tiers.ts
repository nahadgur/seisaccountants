// lib/tiers.ts
// Post 2026-05-02 cull. The tier system is retained as thin shims so existing
// callers compile, but with only 12 GSC-validated cities all kept indexed,
// the tiering distinction no longer drives any behaviour.

export type LocationTier = 1;

export function getCityTier(_locationSlug: string): LocationTier {
  return 1;
}

export function isCityNoindexed(_locationSlug: string): boolean {
  return false;
}

export function isCityInSitemap(_locationSlug: string): boolean {
  return true;
}

export function getRobotsForCity(_locationSlug: string): { index: boolean; follow: boolean } {
  return { index: true, follow: true };
}

export const TIER_COUNTS = {
  tier1: 12,
  tier2: 0,
  tier3: 0,
  total: 12,
};
