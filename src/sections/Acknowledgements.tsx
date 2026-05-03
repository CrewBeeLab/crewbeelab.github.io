import { AccentLabel } from '../components/AccentLabel';
import { DEMO_URL, FIRST_TASK_DISCUSSION_URL, GET_STARTED_URL, GITHUB_URL, WELCOME_DISCUSSION_URL } from '../config/site';
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
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn-primary bg-paper text-ink hover:bg-paper/90 sm:min-w-44 text-center">{content.acknowledgements.ctas.github}</a>
          <a href={GET_STARTED_URL} className="btn-secondary border-paper/10 bg-white/[0.04] text-paper hover:bg-white/[0.08] sm:min-w-44 text-center">{content.acknowledgements.ctas.quickStart}</a>
          <a href={DEMO_URL} className="btn-secondary border-paper/10 bg-white/[0.04] text-paper hover:bg-white/[0.08] sm:min-w-40 text-center">{content.acknowledgements.ctas.demo}</a>
          <a href={WELCOME_DISCUSSION_URL} target="_blank" rel="noreferrer" className="btn-secondary border-paper/10 bg-white/[0.04] text-paper hover:bg-white/[0.08] sm:min-w-44 text-center">{content.acknowledgements.ctas.discussions}</a>
          <a href={FIRST_TASK_DISCUSSION_URL} target="_blank" rel="noreferrer" className="btn-secondary border-paper/10 bg-white/[0.04] text-paper hover:bg-white/[0.08] sm:min-w-44 text-center">{content.acknowledgements.ctas.firstTaskDiscussion}</a>
        </div>
      </div>
    </div>
  </section>
);
