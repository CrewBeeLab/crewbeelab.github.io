import { useState } from 'react';
import { Copy } from 'lucide-react';
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
    <section id="first-task" className="anchor-target section-container border-b border-ink/5">
      <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-8 md:gap-10 lg:gap-12 items-center">
        <div className="max-w-[430px]">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.2em] text-honey">{content.firstTask.badge} //</span>
          <h2 className="mb-4 font-serif text-3xl md:text-5xl lg:text-[3.35rem] leading-[1.08] text-ink">{content.firstTask.title}</h2>
          <p className="mb-7 md:mb-8 font-serif text-base md:text-lg leading-[1.68] text-ink/64">{content.firstTask.subtitle}</p>
          <div className="grid gap-2.5 md:gap-3">
            {content.firstTask.steps.map((step, index) => (
              <div key={step} className="flex min-h-14 items-center gap-4 border-l border-ink/10 bg-surface/60 px-4 py-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-honey/30 bg-honey/10 text-[10px] font-bold tracking-[0.18em] text-honey">0{index + 1}</span>
                <p className="font-serif text-sm md:text-base leading-[1.45] text-ink/72">{step}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card-paper bg-ink text-paper p-6 md:p-8 lg:p-10 relative overflow-hidden self-center">
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
