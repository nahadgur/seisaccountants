// data/locations.ts
// Post 2026-05-02 cull reduced from 96 cities to 12 GSC-validated.
// 2026-05-06 expansion adds 14 major cities and large towns covering
// England, Wales and Scotland (no Northern Ireland), bringing the kept
// set to 26. Each new entry has a full locationProfile, deep-content
// SEIS narrative, and (where not already present) hub content. The 14
// new slugs were removed from RETIRED_CITY_SLUGS in next.config.js so
// they no longer 301 to /location/.
//
// Every other city slug still 301s to /location/ via wildcard in
// next.config.js. Belt-and-suspenders 308 catch-all in
// app/location/[city]/page.tsx.

export const LOCATIONS: Record<string, string[]> = {
  "London & South East": ["London", "Edgware", "Cambridge", "Guildford", "Brighton", "Oxford", "Reading", "Watford"],
  "Midlands": ["Birmingham", "Leicester", "Northampton", "Nottingham"],
  "North West": ["Manchester", "Liverpool", "Salford"],
  "North East & Yorkshire": ["Newcastle", "Leeds", "Sheffield", "Wakefield"],
  "South West & Wales": ["Bristol", "Bath", "Cheltenham", "Cardiff", "Swansea"],
  "Scotland": ["Edinburgh", "Glasgow"],
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
