// app/location/[city]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locationProfiles } from '@/data/locationProfiles';
import { getCityBySlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { getRobotsForCity } from '@/lib/tiers';
import CityPageClient from '@/components/CityPageClient';
import GeoSchema from '@/components/GeoSchema';

interface Props {
 params: { city: string };
}

export async function generateStaticParams() {
 return Object.keys(locationProfiles).map(slug => ({ city: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const profile = locationProfiles[params.city];
 const cityName = getCityBySlug(params.city);
 if (!profile || !cityName) return {};

 const title = cityName;
 // Describes services this site actually offers. The previous version
 // advertised company formation and growth planning, both retired in the
 // SEIS pivot, so the snippet promised work no page on the site delivers.
 const description = `SEIS and EIS accountants for ${cityName} founders. Advance assurance, share issuance, SEIS1 and EIS1 compliance statements, investor certificates and three-year qualifying-period monitoring. Fixed written quote within 48 hours.`;

 return {
 title,
 description,
 alternates: { canonical: `${siteConfig.url}/location/${params.city}/` },
 robots: getRobotsForCity(params.city),
 openGraph: {
 title,
 description,
 url: `${siteConfig.url}/location/${params.city}/`,
 siteName: siteConfig.name,
 type: 'website',
 },
 };
}

export default function CityPage({ params }: Props) {
 const profile = locationProfiles[params.city];
 const cityName = getCityBySlug(params.city);
 if (!profile || !cityName) notFound();

 return (
 <>
 <GeoSchema
 type="location"
 cityName={cityName}
 locationSlug={params.city}
 siteUrl={siteConfig.url}
 siteName={siteConfig.name}
 region={profile.region}
 dominantIndustries={profile.dominantIndustries}
 />
 <CityPageClient params={params} profile={profile} cityName={cityName} />
 </>
 );
}
