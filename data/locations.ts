// data/locations.ts
// Post 2026-05-02 cull. Reduced from 96 cities to 12 GSC-validated.
//
// Tier-A (multi-signal aggregate of combo URL impressions + query mentions):
//   London, Manchester, Cambridge, Guildford, Edgware, Northampton,
//   Nottingham, Newcastle, Wakefield, Cheltenham, Swansea
// Tier-B (single strong signal — page-1 positions worth defending):
//   Salford (pos 1 on "accountants in salford")
//
// Every other city slug 301s to /location/ via wildcard in next.config.js.
// Belt-and-suspenders 308 catch-all in app/location/[city]/page.tsx.

export const LOCATIONS: Record<string, string[]> = {
  "London & South East": ["London", "Edgware", "Cambridge", "Guildford"],
  "Midlands": ["Northampton", "Nottingham"],
  "North West": ["Manchester", "Salford"],
  "North East & Yorkshire": ["Newcastle", "Wakefield"],
  "South West & Wales": ["Cheltenham", "Swansea"],
};

export function getCityBySlug(slug: string): string | undefined {
  const all = Object.values(LOCATIONS).flat();
  return all.find(city => toSlug(city) === slug);
}

export function toSlug(city: string): string {
  return city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

/** All kept city slugs as a flat array (for static params, redirects, etc.) */
export const KEPT_CITY_SLUGS: string[] = Object.values(LOCATIONS).flat().map(toSlug);
