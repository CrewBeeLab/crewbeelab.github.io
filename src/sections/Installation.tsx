import { useEffect, useState } from 'react';
import { ArrowRight, Check, Copy } from 'lucide-react';
import { GITHUB_URL, INSTALLATION_GUIDE_URL } from '../config/site';
import type { LocalizedSectionProps } from './types';

const installationLinkHrefs = [INSTALLATION_GUIDE_URL, GITHUB_URL] as const;

const renderCommand = (command: string) => {
  const parts = command.split(/(crewbee@latest|--with-opencode)/g);

  return parts.map((part, index) => {
    if (part === 'crewbee@latest' || part === '--with-opencode') {
      return <span key={`${part}-${index}`} className="font-medium text-[#C98512] [filter:none] [text-shadow:none]">{part}</span>;
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
    <section className="section-container flex flex-col justify-center border-b border-ink/5 pt-24 pb-24 md:min-h-[calc(100svh-var(--header-height))] md:pt-32 md:pb-28 lg:pt-36 lg:pb-32 xl:pt-40 xl:pb-36">
      <div className="grid gap-8 md:gap-12 lg:grid-cols-[0.42fr_0.54fr] lg:items-center lg:gap-16 xl:gap-20">
        <div id="installation" className="anchor-target max-w-[500px]">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.22em] text-honey">{content.installation.badge} //</span>
          <h2 className="mb-4 max-w-[13ch] font-serif text-3xl leading-[1.08] text-ink md:text-5xl lg:text-[3.35rem]">{content.installation.title}</h2>
          <p className="mb-5 max-w-[34rem] font-serif text-base leading-[1.68] text-ink/68 md:text-lg">{content.installation.subtitle}</p>
          <div className="grid gap-2.5 text-sm font-medium leading-snug text-ink/58 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {content.installation.trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-honey/25 bg-honey/10 text-honey"><Check className="h-3 w-3" /></span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden border border-honey/15 bg-ink/[0.92] p-4 text-paper shadow-xl shadow-ink/10 transition-all duration-300 dark:shadow-honey/5 md:p-5 lg:w-full lg:max-w-[680px] lg:justify-self-end">
          <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-honey/10 blur-[70px]" />
          <div className="relative z-10 mb-3 flex items-center justify-between gap-4 border-b border-paper/10 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-honey/70" />
              <span className="h-2 w-2 rounded-full bg-paper/20" />
              <span className="h-2 w-2 rounded-full bg-paper/14" />
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden text-[10px] font-bold uppercase tracking-[0.2em] text-paper/45 sm:inline">{content.installation.commandLabel}</span>
              <button type="button" onClick={handleCopy} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-paper/62 transition-colors hover:text-honey">
                <Copy className="h-4 w-4" /> {copyLabel}
              </button>
            </div>
          </div>
          <pre className="relative z-10 overflow-x-auto whitespace-pre rounded-sm border border-paper/8 bg-paper/7 px-4 py-3.5 font-mono text-[15px] font-medium leading-relaxed tracking-[-0.01em] text-paper/88 [-webkit-font-smoothing:antialiased] [text-rendering:geometricPrecision] md:text-lg"><code>{renderCommand(content.installation.command)}</code></pre>
          <p className="relative z-10 mt-3 font-serif text-sm leading-[1.6] text-paper/54 md:text-[15px]">{content.installation.commandNote}</p>
        </div>
      </div>

      <div className="mt-14 grid gap-0 border-y border-ink/8 md:mt-16 md:grid-cols-3 md:divide-x md:divide-ink/8 lg:mt-20 xl:mt-24">
        {content.installation.steps.map((step, index) => (
          <div key={step.title} className="px-0 py-5 md:px-6 md:py-6 lg:px-7">
            <div className="mb-3 flex items-baseline gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-honey">0{index + 1}</span>
              <h3 className="text-base font-bold tracking-tight text-ink md:text-lg">{step.title}</h3>
            </div>
            <p className="max-w-[25rem] font-serif text-sm leading-[1.65] text-ink/62 md:text-[15px]">{renderInlineCode(step.desc)}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-4 md:mt-12 lg:mt-14 lg:flex-row lg:items-baseline lg:justify-between">
        <p className="max-w-2xl font-serif text-base leading-[1.65] text-ink/62 md:text-[1.05rem]">{content.installation.afterSetup}</p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-end">
          {content.installation.links.map((link, index) => (
            <a key={link} href={installationLinkHrefs[index] ?? GITHUB_URL} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-ink/66 transition-colors hover:text-honey">
              {link} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
