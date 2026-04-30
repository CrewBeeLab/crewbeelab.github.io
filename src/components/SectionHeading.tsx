import type { ReactNode } from 'react';

export const SectionHeading = ({ children, badge, subtitle, centered = false }: { children: ReactNode; badge?: string; subtitle?: string; centered?: boolean }) => (
  <div className={`mb-11 md:mb-14 lg:mb-16 ${centered ? 'text-center' : ''}`}>
    {badge && (
      <span className="inline-block text-[10px] uppercase font-sans font-bold tracking-[0.2em] text-honey mb-4">
        {badge} //
      </span>
    )}
    <h2 className="text-3xl md:text-5xl lg:text-[3.45rem] mb-4 md:mb-5 leading-[1.08] font-serif text-ink">
      {children}
    </h2>
    {subtitle && (
      <p className={`text-base md:text-lg lg:text-[1.18rem] font-serif text-ink/64 max-w-3xl leading-[1.68] px-1 md:px-0 ${centered ? 'mx-auto' : 'mx-auto md:mx-0'}`}>
        {subtitle}
      </p>
    )}
  </div>
);
