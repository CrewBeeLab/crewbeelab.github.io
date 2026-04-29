import { AccentLabel } from '../components/AccentLabel';
import { designSystem } from '../config/designSystem';
import type { LocalizedSectionProps } from './types';

export const Acknowledgements = ({ content }: LocalizedSectionProps) => (
  <section className="relative overflow-hidden border-b border-ink/5 bg-ink text-paper">
    <div className={designSystem.effect.darkAmbientGlow} />
    <div className={designSystem.layout.centeredNarrowSection}>
      <div className="mb-7 flex items-center gap-4">
        <span className="h-px w-10 bg-honey/70" />
        <AccentLabel className="tracking-[0.24em]">{content.acknowledgements.badge} //</AccentLabel>
      </div>

      <div className="max-w-[820px]">
        <h2 className="mb-7 text-3xl md:text-5xl font-sans tracking-tight leading-[1.08] text-paper">{content.acknowledgements.title}</h2>
        <div className="space-y-4 text-base md:text-lg leading-[1.68] text-paper/68">
          {content.acknowledgements.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  </section>
);
