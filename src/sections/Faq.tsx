import type { Copy } from '../i18n/copy';

export const Faq = ({ t }: { t: Copy }) => (
  <section id="docs" className="section-container border-y border-ink/5 bg-paper-warm/20">
    <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
      <div className="lg:col-span-1">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] font-sans text-honey mb-4 md:mb-6 block">{t.faq.badge} //</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 font-serif italic tracking-tight leading-tight">{t.faq.heading[0]} <br className="hidden lg:block" /> {t.faq.heading[1]} <br className="hidden lg:block" /> {t.faq.heading[2]}</h2>
      </div>
      <div className="lg:col-span-2 space-y-8 md:space-y-12">
        {t.faq.items.map((faq) => (
          <div key={faq.q} className="border-l-[0.5px] border-ink/20 pl-6 md:pl-8 pb-4 relative">
            <div className="absolute -left-[4px] top-2 md:top-3 w-2 h-2 rounded-full bg-honey" />
            <h4 className="text-xl md:text-2xl font-serif italic mb-3 md:mb-4 text-ink">{faq.q}</h4>
            <p className="text-ink/60 font-serif italic text-base md:text-lg leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
