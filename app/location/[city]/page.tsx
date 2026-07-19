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
 const description = `SEIS and EIS specialist accountants in ${cityName}. R&D tax credits, advance assurance, company formation and growth planning. Free quote, no obligation.`;

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
