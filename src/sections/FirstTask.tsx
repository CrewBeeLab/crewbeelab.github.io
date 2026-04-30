import { Copy } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import type { LocalizedSectionProps } from './types';

export const FirstTask = ({ content }: LocalizedSectionProps) => (
  <section id="first-task" className="section-container border-b border-ink/5">
    <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-12 lg:gap-14 items-center">
      <SectionHeading subtitle={content.firstTask.subtitle}>{content.firstTask.title}</SectionHeading>
      <div className="card-paper bg-ink text-paper p-6 md:p-8 lg:p-10 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-honey/15 blur-[70px]" />
        <div className="relative z-10 mb-5 flex items-center justify-between gap-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-honey">Prompt Card</span>
          <Copy className="h-4 w-4 text-paper/45" />
        </div>
        <p className="relative z-10 font-mono text-sm md:text-base leading-[1.8] text-paper/78">{content.firstTask.prompt}</p>
      </div>
    </div>
  </section>
);
