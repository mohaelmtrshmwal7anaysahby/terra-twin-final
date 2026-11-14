import React from 'react';

/** Lightweight loading state shown while a route chunk downloads. */
export const PageLoader: React.FC<{ label?: string }> = ({ label = 'Loading' }) => (
  <div role="status" aria-live="polite" className="flex min-h-[60vh] items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-14 w-14" aria-hidden="true">
        <span className="absolute inset-0 rounded-full border border-[#2A9D9F]/30" />
        <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#2A9D9F] motion-reduce:animate-none" />
        <span className="absolute inset-[18px] rounded-full bg-tt-sand/70" />
      </div>
      <span className="font-mono-tabular text-xs tracking-widest text-tt-slate dark:text-tt-mist">
        {label}
      </span>
    </div>
  </div>
);
