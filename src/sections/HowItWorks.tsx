import { Code2, GitBranch, Layers, Network, Terminal } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import type { LocalizedSectionProps } from './types';

const stepIcons = [<Code2 className="w-6 h-6 md:w-8 md:h-8" />, <Layers className="w-6 h-6 md:w-8 md:h-8" />, <GitBranch className="w-6 h-6 md:w-8 md:h-8" />, <Network className="w-6 h-6 md:w-8 md:h-8" />, <Terminal className="w-6 h-6 md:w-8 md:h-8" />];

export const HowItWorks = ({ content }: LocalizedSectionProps) => (
  <section id="how-it-works" className="section-container border-b border-ink/5">
    <SectionHeading centered subtitle={content.how.subtitle}>{content.how.title}</SectionHeading>
    <div className="max-w-6xl mx-auto relative">
      <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-px bg-ink/10" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-9 md:gap-10 lg:gap-8 relative z-10">
        {content.how.steps.map((item, i) => (
          <div key={item.step} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-paper card-paper flex items-center justify-center text-honey rounded-full mb-6 md:mb-8 shadow-sm">{stepIcons[i]}</div>
            <h4 className="text-2xl md:text-[1.7rem] font-serif mb-3 md:mb-4 text-ink leading-tight">{item.step}</h4>
            <p className="text-ink/64 font-serif text-sm md:text-base leading-[1.62] max-w-[16.5rem]">{item.desc}</p>
            {'modes' in item && item.modes && (
              <div className="mt-5 grid w-full max-w-[18rem] gap-3 text-left">
                {item.modes.map((mode) => (
                  <div key={mode.label} className="border-l border-honey/35 pl-4">
                    <div className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-honey">{mode.label}</div>
                    <p className="font-serif text-sm leading-[1.55] text-ink/60">{mode.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);
