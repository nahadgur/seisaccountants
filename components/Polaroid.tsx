// components/Polaroid.tsx
// Image framed as a polaroid photo card with optional purple tape strip,
// caption text, and tilt rotation. Used selectively on hero, service,
// and city pages to carry the Paper Tape visual language.
//
// Usage:
//   <Polaroid
//     src="/images/hero-main.avif"
//     alt="Coworking space"
//     caption="THE FLOOR"
//     tape="top-left"
//     tilt="slight-left"
//   />

import Image from 'next/image';

export type PolaroidTilt =
  | 'none'
  | 'slight-left'
  | 'slight-right'
  | 'left'
  | 'right';

export type PolaroidTape =
  | 'none'
  | 'top'
  | 'top-left'
  | 'top-right';

interface PolaroidProps {
  src: string;
  alt: string;
  caption?: string;
  tape?: PolaroidTape;
  tilt?: PolaroidTilt;
  /** Tailwind aspect ratio class. Default 4/3. */
  aspect?: string;
  /** Tailwind width class. Default w-full. */
  width?: string;
  priority?: boolean;
  className?: string;
}

const tiltClass: Record<PolaroidTilt, string> = {
  'none': '',
  'slight-left':  'polaroid-tilt-slight-left',
  'slight-right': 'polaroid-tilt-slight-right',
  'left':         'polaroid-tilt-left',
  'right':        'polaroid-tilt-right',
};

export function Polaroid({
  src,
  alt,
  caption,
  tape = 'none',
  tilt = 'none',
  aspect = 'aspect-[4/3]',
  width = 'w-full',
  priority = false,
  className = '',
}: PolaroidProps) {
  const tapeStyle = (() => {
    switch (tape) {
      case 'top':       return { top: '-11px', left: '50%', transform: 'translateX(-50%) rotate(-1.5deg)' };
      case 'top-left':  return { top: '-10px', left: '18%', transform: 'rotate(-6deg)' };
      case 'top-right': return { top: '-10px', right: '18%', transform: 'rotate(5deg)' };
      default: return undefined;
    }
  })();

  return (
    <div className={`relative ${width} ${tiltClass[tilt]} ${className}`}>
      {tape !== 'none' && tapeStyle && (
        <span className="tape" style={tapeStyle} aria-hidden="true" />
      )}
      <div className="polaroid">
        <div className={`relative ${aspect} overflow-hidden bg-paper-300`}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
            priority={priority}
          />
        </div>
        {caption && <span className="polaroid-caption">{caption}</span>}
      </div>
    </div>
  );
}

export default Polaroid;
