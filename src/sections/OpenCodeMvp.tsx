import { ArrowRight } from 'lucide-react';
import type { LocalizedSectionProps } from './types';

export const OpenCodeMvp = ({ content }: LocalizedSectionProps) => (
  <section className="py-24 md:py-32 lg:py-48 max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic leading-tight mb-6 md:mb-8">{content.opencode.title}</h2>
    <p className="text-lg md:text-2xl font-serif text-ink/70 leading-relaxed mb-10 md:mb-12 max-w-4xl mx-auto">{content.opencode.description}</p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10 md:mb-12 text-left">
      {content.opencode.proofs.map((proof) => (
        <div key={proof} className="border border-ink/8 bg-surface px-4 py-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] text-ink/55">
          {proof}
        </div>
      ))}
    </div>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
      {content.opencode.links.map((item) => (
        <button key={item} className="text-ink font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px] flex items-center gap-2 hover:text-honey transition-colors group">
          {item} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      ))}
    </div>
  </section>
);
