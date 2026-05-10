// components/TrustBadges.tsx - Paper Tape edition
// Sits directly under the Hero. Background chooses paper-50 (slightly
// brighter than hero's paper-100) so the section visually "lifts" off
// the hero without feeling like a break. Cards are white tiles with
// ink text - maximum readability on the Paper Tape cream base.
//
// Icon treatment: off-centre low-opacity watermark at top-right of each
// card, matching the home page card grids and contact page cards.

import { ShieldCheck, UserCheck, Award, PoundSterling } from 'lucide-react';
import { trustBadges } from '@/data/site';

const iconMap: Record<string, React.ReactNode> = {
 ShieldCheck: <ShieldCheck className="w-28 h-28" />,
 UserCheck: <UserCheck className="w-28 h-28" />,
 Award: <Award className="w-28 h-28" />,
 PoundSterling: <PoundSterling className="w-28 h-28" />,
};

export function TrustBadges() {
 return (
 <section
 className="py-10 md:py-12 border-t border-b border-ink-900/10"
 style={{ backgroundColor: 'var(--paper-50)' }}
 >
 <div className="container-width">
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
 {trustBadges.map((badge) => (
 <div
 key={badge.title}
 className="relative overflow-hidden bg-white px-5 py-5 border border-ink-900/8"
 >
 {/* Watermark icon - off-centre top-right, low opacity */}
 <div
 className="pointer-events-none absolute -top-4 -right-4 text-brand-500 opacity-[0.08] [&_svg]:w-28 [&_svg]:h-28"
 aria-hidden="true"
 >
 {iconMap[badge.icon]}
 </div>
 <div className="relative">
 <p className="font-sans font-semibold text-[13.5px] text-ink-900 leading-snug mb-1">
 {badge.title}
 </p>
 <p className="font-sans text-[12px] text-ink-700 leading-relaxed line-clamp-3">
 {badge.description}
 </p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
