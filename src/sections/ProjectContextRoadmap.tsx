import { AccentLabel } from '../components/AccentLabel';
import { SectionHeading } from '../components/SectionHeading';
import { designSystem } from '../config/designSystem';
import type { LocalizedSectionProps } from './types';

export const ProjectContextRoadmap = ({ content }: LocalizedSectionProps) => (
  <section id="project-context" className="relative overflow-hidden bg-paper-warm/35 border-b border-ink/5">
    <div className={designSystem.effect.warmAmbientGlow} />
    <div className="section-container relative">
      <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 md:gap-12 lg:gap-14 items-start">
        <div>
          <SectionHeading badge={content.projectContext.badge} subtitle={content.projectContext.subtitle}>{content.projectContext.title}</SectionHeading>
          <div className="grid gap-4 md:gap-5">
            {content.projectContext.cards.map((card) => (
              <div key={card.title} className={designSystem.surface.compactCard}>
                <h3 className="mb-2.5 text-xl md:text-[1.38rem] font-serif text-ink leading-snug">{card.title}</h3>
                <p className="font-serif text-base md:text-[1.05rem] leading-[1.65] text-ink/64">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-honey/10 blur-[90px]" />
          <div className={designSystem.surface.glassPanel}>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-honey" />
              <AccentLabel>Project Context Loop</AccentLabel>
            </div>
            <div className="space-y-4">
              {content.projectContext.flow.map((step, index) => (
                <div key={step} className="relative flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-honey/30 bg-honey/10 text-[10px] font-bold tracking-[0.18em] text-honey">0{index + 1}</div>
                    {index < content.projectContext.flow.length - 1 && <div className="h-full min-h-8 w-px bg-ink/10" />}
                  </div>
                  <p className="pb-4 font-serif text-base md:text-[1.05rem] leading-[1.65] text-ink/68">{step}</p>
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
