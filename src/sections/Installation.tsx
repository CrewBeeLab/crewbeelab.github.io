import { useEffect, useState } from 'react';
import { ArrowRight, Copy } from 'lucide-react';
import { GITHUB_URL } from '../config/site';
import type { LocalizedSectionProps } from './types';

const installationLinkHrefs = [GITHUB_URL, '#docs', GITHUB_URL] as const;

const renderCommand = (command: string) => {
  const parts = command.split(/(crewbee@latest|--with-opencode)/g);

  return parts.map((part, index) => {
    if (part === 'crewbee@latest' || part === '--with-opencode') {
      return <span key={`${part}-${index}`} className="text-honey">{part}</span>;
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
};

const renderInlineCode = (text: string) => {
  const parts = text.split(/(`[^`]+`)/g);

  return parts.map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={`${part}-${index}`} className="rounded border border-ink/10 bg-ink/5 px-1.5 py-0.5 font-mono text-[0.9em] text-ink/78">{part.slice(1, -1)}</code>;
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
};

export const Installation = ({ content }: LocalizedSectionProps) => {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');

  useEffect(() => {
    if (copyState === 'idle') return;

    const timeout = window.setTimeout(() => setCopyState('idle'), 1800);
    return () => window.clearTimeout(timeout);
  }, [copyState]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content.installation.command);
      setCopyState('copied');
    } catch (error) {
      console.error('Failed to copy CrewBee install command', error);
      setCopyState('failed');
    }
  };

  const copyLabel = copyState === 'copied' ? content.installation.copied : copyState === 'failed' ? content.installation.copyFailed : content.installation.copy;

  return (
    <section id="installation" className="section-container border-b border-ink/5 pt-16 md:pt-20 lg:pt-24">
      <div className="grid gap-8 md:gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
        <div className="max-w-[520px]">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.22em] text-honey">{content.installation.badge} //</span>
          <h2 className="mb-4 font-serif text-3xl leading-[1.08] text-ink md:text-5xl lg:text-[3.35rem]">{content.installation.title}</h2>
          <p className="mb-5 font-serif text-base leading-[1.68] text-ink/68 md:text-lg">{content.installation.subtitle}</p>
          <p className="border-l border-honey/30 bg-surface/55 px-4 py-3 font-serif text-sm leading-[1.65] text-ink/62 md:text-base">{content.installation.note}</p>
        </div>

        <div className="card-paper relative overflow-hidden border-honey/15 bg-ink p-4 text-paper shadow-xl shadow-ink/10 md:p-5 lg:justify-self-end lg:w-full lg:max-w-[700px]">
          <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-honey/14 blur-[70px]" />
          <div className="relative z-10 mb-4 flex items-center justify-between gap-4 border-b border-paper/8 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-honey/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-paper/14" />
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-paper/38 sm:inline">{content.installation.commandLabel}</span>
              <button type="button" onClick={handleCopy} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-paper/62 transition-colors hover:text-honey">
                <Copy className="h-4 w-4" /> {copyLabel}
              </button>
            </div>
          </div>
          <pre className="relative z-10 overflow-x-auto whitespace-pre rounded-sm bg-black/18 px-4 py-4 font-mono text-sm leading-relaxed text-paper/82 md:text-base"><code>{renderCommand(content.installation.command)}</code></pre>
        </div>
      </div>

      <div className="mt-7 grid gap-3 md:mt-8 md:grid-cols-3">
        {content.installation.steps.map((step, index) => (
          <div key={step.title} className="card-paper flex min-h-32 flex-col justify-between p-5 md:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-honey">0{index + 1}</span>
              <span className="h-px flex-1 bg-ink/8" />
            </div>
            <h3 className="mb-2 text-base font-bold tracking-tight text-ink md:text-lg">{step.title}</h3>
            <p className="font-serif text-sm leading-[1.65] text-ink/62 md:text-[15px]">{renderInlineCode(step.desc)}</p>
          </div>
        ))}
      </div>

      <div className="mt-7 flex flex-col gap-4 md:mt-8 lg:flex-row lg:items-center lg:justify-between">
        <p className="font-serif text-sm leading-[1.65] text-ink/58 md:text-base">{content.installation.afterSetup}</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-end">
          {content.installation.links.map((link, index) => (
            <a key={link} href={installationLinkHrefs[index] ?? GITHUB_URL} target={index === 0 || index === 2 ? '_blank' : undefined} rel={index === 0 || index === 2 ? 'noreferrer' : undefined} className="group inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/62 transition-colors hover:text-honey">
              {link} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
