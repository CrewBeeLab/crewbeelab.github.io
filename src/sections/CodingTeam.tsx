import { CheckCircle2 } from 'lucide-react';
import { FeatureCard } from '../components/FeatureCard';
import { SectionHeading } from '../components/SectionHeading';
import type { LocalizedSectionProps } from './types';

export const CodingTeam = ({ t }: LocalizedSectionProps) => (
  <section id="coding-team" className="section-container border-b border-ink/5">
    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
      <div className="lg:sticky lg:top-28">
        <SectionHeading badge={t.codingTeam.badge} subtitle={t.codingTeam.subtitle}>{t.codingTeam.title}</SectionHeading>
        <div className="card-paper bg-surface p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-honey" />
            <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-ink">{t.codingTeam.gateTitle}</h3>
          </div>
          <div className="space-y-4">
            {t.codingTeam.gates.map((gate) => (
              <div key={gate} className="flex items-start gap-3 text-sm md:text-base font-serif text-ink/68 leading-relaxed">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-honey" />
                <span>{gate}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
        {t.codingTeam.roles.map((role, index) => (
          <FeatureCard
            key={role.name}
            index={index}
            title={role.name}
            description={role.desc}
            className={index === 0 ? 'sm:col-span-2 bg-paper-warm/40' : ''}
            titleClassName="mb-3 font-mono text-lg md:text-xl text-ink"
            descriptionClassName="font-serif text-base md:text-lg leading-relaxed text-ink/62"
          />
        ))}
      </div>
    </div>
  </section>
);
