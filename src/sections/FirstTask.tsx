import { useState } from 'react';
import { Copy } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { GET_STARTED_URL } from '../config/site';
import type { LocalizedSectionProps } from './types';

export const FirstTask = ({ content }: LocalizedSectionProps) => {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content.firstTask.prompt);
      setCopyState('copied');
    } catch (error) {
      console.error('Failed to copy CrewBee prompt', error);
      setCopyState('failed');
    }
  };

  const copyLabel = copyState === 'copied' ? content.firstTask.copied : copyState === 'failed' ? content.firstTask.copyFailed : content.firstTask.copyPrompt;

  return (
    <section id="first-task" className="section-container border-b border-ink/5">
      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-12 lg:gap-14 items-center">
        <SectionHeading subtitle={content.firstTask.subtitle}>{content.firstTask.title}</SectionHeading>
        <div className="card-paper bg-ink text-paper p-6 md:p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-honey/15 blur-[70px]" />
          <div className="relative z-10 mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-honey">Prompt Card</span>
            <div className="flex flex-wrap items-center gap-3">
              <a href={GET_STARTED_URL} className="text-[10px] font-bold uppercase tracking-[0.18em] text-paper/55 transition-colors hover:text-honey">{content.firstTask.quickStartFirst}</a>
              <button type="button" onClick={handleCopy} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-paper/65 transition-colors hover:text-honey">
                <Copy className="h-4 w-4" /> {copyLabel}
              </button>
            </div>
          </div>
          <p className="relative z-10 whitespace-pre-line font-mono text-sm md:text-base leading-[1.8] text-paper/78">{content.firstTask.prompt}</p>
        </div>
      </div>
    </section>
  );
};
