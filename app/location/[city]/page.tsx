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

 const title = `SEIS Accountants in ${cityName} | Vetted ACA/ACCA Specialists`;
 const description = `Find vetted startup accountants in ${cityName}. Specialists in R&D tax credits, SEIS/EIS, company formation and growth planning. Free quotes, no obligation.`;

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
