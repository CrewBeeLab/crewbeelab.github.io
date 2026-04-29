import { AccentLabel } from '../components/AccentLabel';
import { SectionHeading } from '../components/SectionHeading';
import { designSystem } from '../config/designSystem';
import type { LocalizedSectionProps } from './types';

export const ProjectContext = ({ t }: LocalizedSectionProps) => (
  <section id="project-context" className="relative overflow-hidden bg-paper-warm/35 border-b border-ink/5">
    <div className={designSystem.effect.warmAmbientGlow} />
    <div className="section-container relative">
      <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-start">
        <div>
          <SectionHeading badge={t.projectContext.badge} subtitle={t.projectContext.subtitle}>{t.projectContext.title}</SectionHeading>
          <div className="grid gap-5">
            {t.projectContext.cards.map((card) => (
              <div key={card.title} className={designSystem.surface.compactCard}>
                <h3 className="mb-3 text-xl md:text-2xl font-serif italic text-ink">{card.title}</h3>
                <p className="font-serif text-base md:text-lg leading-relaxed text-ink/62">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-honey/10 blur-[90px]" />
          <div className={designSystem.surface.glassPanel}>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-honey" />
              <AccentLabel>Project Context Loop</AccentLabel>
            </div>
            <div className="space-y-5">
              {t.projectContext.flow.map((step, index) => (
                <div key={step} className="relative flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-honey/30 bg-honey/10 text-[10px] font-bold tracking-[0.18em] text-honey">0{index + 1}</div>
                    {index < t.projectContext.flow.length - 1 && <div className="h-full min-h-8 w-px bg-ink/10" />}
                  </div>
                  <p className="pb-5 font-serif text-base md:text-lg leading-relaxed text-ink/68">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={designSystem.effect.cardHoneyGlow} />
  </section>
);
