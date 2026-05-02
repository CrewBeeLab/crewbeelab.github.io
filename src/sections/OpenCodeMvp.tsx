import { ArrowRight } from 'lucide-react';
import { GET_STARTED_URL, GITHUB_URL } from '../config/site';
import type { LocalizedSectionProps } from './types';

const integrationLinkHrefs = [GITHUB_URL, GET_STARTED_URL, '#docs'] as const;

export const OpenCodeMvp = ({ content }: LocalizedSectionProps) => (
  <section className="py-20 md:py-28 lg:py-36 max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-5xl lg:text-[3.45rem] font-serif leading-[1.08] mb-5 md:mb-7">{content.opencode.title}</h2>
    <p className="text-lg md:text-[1.35rem] font-serif text-ink/70 leading-[1.68] mb-8 md:mb-10 max-w-4xl mx-auto">{content.opencode.description}</p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-9 md:mb-10 text-left">
      {content.opencode.proofs.map((proof) => (
        <div key={proof} className="border border-ink/8 bg-surface px-4 py-3.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.16em] text-ink/58 leading-snug">
          {proof}
        </div>
      ))}
    </div>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8">
      {content.opencode.links.map((item, index) => (
        <a key={item} href={integrationLinkHrefs[index] ?? GET_STARTED_URL} target={index === 0 ? '_blank' : undefined} rel={index === 0 ? 'noreferrer' : undefined} className="text-ink font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px] flex items-center gap-2 hover:text-honey transition-colors group">
          {item} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      ))}
    </div>
  </section>
);
