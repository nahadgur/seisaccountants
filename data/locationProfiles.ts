// data/locationProfiles.ts
// Data lives in locationProfilesData.json, no string escaping issues possible.

import profilesData from './locationProfilesData.json';

export interface LocationProfile {
  slug: string;
  name: string;
  region: string;
  businessDistrict: string;
  dominantIndustries: string[];
  universities: string[];
  chamber: string;
  accelerators: string[];
  regulatoryNotes: string;
  localContext: string;
  keyBusinessHubs: string[];
}

export const locationProfiles = profilesData as unknown as Record<string, LocationProfile>;

export function getLocationProfile(slug: string): LocationProfile | undefined {
  return locationProfiles[slug];
}

export function getProfilesByRegion(region: string): LocationProfile[] {
  return Object.values(locationProfiles).filter(p => p.region === region);
}
