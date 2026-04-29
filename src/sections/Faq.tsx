import type { LocalizedSectionProps } from './types';

export const Faq = ({ content }: LocalizedSectionProps) => (
  <section id="docs" className="section-container border-y border-ink/5 bg-paper-warm/20">
    <div className="grid lg:grid-cols-3 gap-10 md:gap-12 lg:gap-14">
      <div className="lg:col-span-1">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] font-sans text-honey mb-4 md:mb-6 block">{content.faq.badge} //</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 md:mb-7 font-serif italic tracking-tight leading-[1.08]">{content.faq.heading[0]} <br className="hidden lg:block" /> {content.faq.heading[1]} <br className="hidden lg:block" /> {content.faq.heading[2]}</h2>
      </div>
      <div className="lg:col-span-2 space-y-7 md:space-y-9">
        {content.faq.items.map((faq) => (
          <div key={faq.q} className="border-l-[0.5px] border-ink/20 pl-6 md:pl-8 pb-4 relative">
            <div className="absolute -left-[4px] top-2 md:top-3 w-2 h-2 rounded-full bg-honey" />
            <h4 className="text-xl md:text-[1.45rem] font-serif italic mb-3 text-ink leading-snug">{faq.q}</h4>
            <p className="text-ink/64 font-serif italic text-base md:text-[1.05rem] leading-[1.68]">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
