import { SectionHeading } from '../components/SectionHeading';
import type { Copy } from '../i18n/copy';

export const SocialProof = ({ t }: { t: Copy }) => (
  <section className="section-container bg-paper-warm/30 border-b border-ink/5">
    <SectionHeading subtitle={t.builders.subtitle} centered>{t.builders.title}</SectionHeading>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-16">
      {t.builders.cards.map((item) => (
        <div key={item.role} className="card-paper p-10 flex flex-col items-start bg-surface">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-honey" />
            <div className="text-[10px] font-bold text-ink tracking-[0.2em] uppercase">{item.role}</div>
          </div>
          <p className="font-serif text-ink/70 italic text-lg leading-relaxed flex-grow">“{item.desc}”</p>
        </div>
      ))}
    </div>
  </section>
);
