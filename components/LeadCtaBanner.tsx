'use client';

// components/LeadCtaBanner.tsx
// Inline lead-capture banner. Extracted from the blog article template so the
// guide, service, city and index pages can carry the same first-position
// treatment the SEIS diagnostic card already had. Opens the shared lead modal.

export function LeadCtaBanner({
  onOpen,
  heading = 'Raising SEIS or EIS?',
  body = 'Get a fixed quote for SEIS and EIS scheme work, from advance assurance through to investor certificates. Free, no obligation.',
  className = 'my-10',
}: {
  onOpen: () => void;
  heading?: string;
  body?: string;
  className?: string;
}) {
  return (
    <div className={`${className} bg-ink-900 text-paper-100 rounded-sm px-6 py-6 md:px-10 md:py-7 relative overflow-hidden`}>
      <div className="absolute top-0 left-0 w-1 h-full bg-brand-500" aria-hidden="true" />
      <h2 className="font-display text-[18px] lg:text-[21px] text-white leading-snug tracking-tight mb-1.5">
        {heading}
      </h2>
      <p className="font-sans text-[14.5px] text-paper-300 leading-snug mb-4 max-w-2xl">
        {body}
      </p>
      <button onClick={onOpen} className="btn-primary py-2.5" type="button">
        Get a Fixed Quote &nbsp;&rarr;
      </button>
    </div>
  );
}
