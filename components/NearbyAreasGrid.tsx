'use client';

// components/NearbyAreasGrid.tsx - Paper Tape edition

import { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import { getNearbyAreas } from '@/data/nearby-areas';

interface NearbyAreasGridProps {
  cityName: string;
  serviceSlug?: string;
  serviceName?: string;
  initialVisible?: number;
}

export function NearbyAreasGrid({ cityName, serviceName, initialVisible = 10 }: NearbyAreasGridProps) {
  const areas = getNearbyAreas(cityName);
  const [showAll, setShowAll] = useState(false);

  if (areas.length === 0) return null;

  const visibleAreas = showAll ? areas : areas.slice(0, initialVisible);
  const hiddenCount = areas.length - initialVisible;

  const heading = serviceName
    ? `${serviceName}: areas around ${cityName}`
    : `Areas we cover around ${cityName}`;

  const description = serviceName
    ? `Looking for ${serviceName.toLowerCase()} near ${cityName}? Our vetted accountants serve SEIS and EIS founders across ${cityName} and the surrounding areas listed below.`
    : `Our accountants in ${cityName} serve SEIS and EIS founders from across the surrounding area. If your company is based in any of the nearby areas, you are within reach of specialist SEIS accounting services.`;

  return (
    <section className="mb-16">
      <div className="mb-3">
        <span className="eyebrow">NEARBY</span>
      </div>
      <h2 className="font-display text-[24px] md:text-[28px] text-ink-900 mb-3 tracking-tight leading-tight">
        {heading}
      </h2>
      <p className="font-sans text-[14px] text-ink-700 mb-6 leading-relaxed max-w-3xl">
        {description}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {visibleAreas.map(area => (
          <div
            key={area}
            className="flex items-center gap-2 px-3 py-2.5 bg-paper-50 border border-ink-900/10 rounded-sm text-[13px] text-ink-900 hover:bg-white hover:border-brand-500 transition-colors"
          >
            <MapPin className="w-3 h-3 text-brand-500 flex-shrink-0" />
            <span className="truncate">{area}</span>
          </div>
        ))}
      </div>

      {hiddenCount > 0 && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-5 inline-flex items-center gap-2 font-display italic text-[15px] text-brand-500 hover:text-brand-700 transition-colors"
          type="button"
        >
          Show all {areas.length} areas
          <ChevronDown className="w-4 h-4" />
        </button>
      )}

      {showAll && hiddenCount > 0 && (
        <button
          onClick={() => setShowAll(false)}
          className="mt-5 inline-flex items-center gap-2 font-display italic text-[15px] text-brand-500 hover:text-brand-700 transition-colors"
          type="button"
        >
          Show fewer
          <ChevronDown className="w-4 h-4 rotate-180" />
        </button>
      )}

      {/* SEO paragraph */}
      <div className="mt-6 max-w-3xl">
        <p className="font-sans text-[13px] text-ink-500 leading-relaxed">
          Startups from {areas.slice(0, 5).join(', ')}, and other areas around {cityName} regularly use our service to find specialist accountants.{' '}
          {serviceName
            ? `If you need ${serviceName.toLowerCase()} and your startup is in or near ${cityName}, our vetted accountants offer flexible consultation times including evenings and weekends.`
            : `All of our ${cityName} partner accountants are experienced, fully insured, and offer flexible appointment times to suit your startup's schedule.`
          }
        </p>
      </div>
    </section>
  );
}
