import type { ReactNode } from 'react';

export const SectionHeading = ({ children, badge, subtitle, centered = false }: { children: ReactNode; badge?: string; subtitle?: string; centered?: boolean }) => (
  <div className={`mb-16 md:mb-20 ${centered ? 'text-center' : ''}`}>
    {badge && (
      <span className="inline-block text-[10px] uppercase font-sans font-bold tracking-[0.2em] text-honey mb-4">
        {badge} //
      </span>
    )}
    <h2 className="text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 leading-tight font-serif italic text-ink">
      {children}
    </h2>
    {subtitle && (
      <p className="text-base md:text-lg lg:text-xl font-serif italic text-ink/60 max-w-2xl mx-auto md:mx-0 leading-relaxed px-4 md:px-0">
        {subtitle}
      </p>
    )}
  </div>
);
