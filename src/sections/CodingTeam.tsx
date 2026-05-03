import { Fragment } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FeatureCard } from '../components/FeatureCard';
import { SectionHeading } from '../components/SectionHeading';
import type { LocalizedSectionProps } from './types';

export const CodingTeam = ({ content }: LocalizedSectionProps) => (
  <section className="section-container border-b border-ink/5">
    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-12 lg:gap-14 items-start">
      <div className="lg:sticky lg:top-28">
        <SectionHeading id="coding-team" className="anchor-target" badge={content.codingTeam.badge} subtitle={content.codingTeam.subtitle}>{content.codingTeam.title}</SectionHeading>
        <div className="card-paper bg-surface p-6 md:p-7 lg:p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-honey" />
            <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-ink">{content.codingTeam.gateTitle}</h3>
          </div>
          <div className="space-y-3 md:space-y-3.5">
            {content.codingTeam.gates.map((gate) => (
              <div key={gate} className="flex items-start gap-3 text-sm md:text-[0.98rem] font-serif text-ink/68 leading-relaxed">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
                <span>{gate}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
        {content.codingTeam.roles.map((role, index) => (
          <Fragment key={role.name}>
            <FeatureCard
              index={index}
              title={role.name}
              description={role.desc}
              className={index === 0 ? 'sm:col-span-2 bg-paper-warm/40' : 'min-h-[13.5rem]'}
              titleClassName="mb-3 font-mono text-lg md:text-xl text-ink"
              descriptionClassName="font-serif text-base md:text-[1.05rem] leading-[1.65] text-ink/64"
            />
          </Fragment>
        ))}
      </div>
    </div>
  </section>
);
