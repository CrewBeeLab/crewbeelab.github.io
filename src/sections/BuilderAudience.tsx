import { SectionHeading } from '../components/SectionHeading';
import type { LocalizedSectionProps } from './types';

export const BuilderAudience = ({ content }: LocalizedSectionProps) => (
  <section className="section-container bg-paper-warm/30 border-b border-ink/5">
    <SectionHeading subtitle={content.builders.subtitle} centered>{content.builders.title}</SectionHeading>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6 max-w-7xl mx-auto">
      {content.builders.cards.map((item) => (
        <div key={item.role} className="card-paper p-7 md:p-8 flex flex-col items-start bg-surface min-h-[13rem]">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-honey" />
            <div className="text-[10px] font-bold text-ink tracking-[0.2em] uppercase">{item.role}</div>
          </div>
          <p className="font-serif text-ink/70 text-base md:text-[1.05rem] leading-[1.65] flex-grow">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);
