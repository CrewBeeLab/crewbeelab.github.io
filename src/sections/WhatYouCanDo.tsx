import { SectionHeading } from '../components/SectionHeading';
import type { Copy } from '../i18n/copy';

export const WhatYouCanDo = ({ t }: { t: Copy }) => (
  <section id="features" className="section-container">
    <SectionHeading centered subtitle={t.features.subtitle}>{t.features.title}</SectionHeading>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
      {t.features.cards.map((item, i) => (
        <div key={item.title} className="card-paper p-8 md:p-10 flex flex-col items-start text-left relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-honey/5 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-150 duration-700" />
          <span className="text-[10px] font-bold text-honey mb-6 md:mb-8 block tracking-[0.2em] font-sans">0{i + 1}</span>
          <h3 className="text-xl md:text-2xl mb-3 md:mb-4 italic font-serif leading-tight">{item.title}</h3>
          <p className="text-ink/60 font-serif leading-relaxed text-base md:text-lg">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
