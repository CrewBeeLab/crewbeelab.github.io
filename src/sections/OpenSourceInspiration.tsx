import type { LocalizedSectionProps } from './types';

export const OpenSourceInspiration = ({ content }: LocalizedSectionProps) => (
  <section className="relative overflow-hidden border-b border-ink/5 bg-paper-warm/30">
    <div className="mx-auto max-w-[960px] px-6 md:px-12 lg:px-16 py-24 md:py-32 lg:py-36">
      <div className="relative">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-honey/10 blur-[70px]" />
        <div className="relative text-left">
          <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.2em] text-honey">{content.inspired.badge} //</span>
          <h2 className="mb-6 font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] text-ink">{content.inspired.title}</h2>
          <div className="space-y-5">
            {content.inspired.paragraphs.map((paragraph) => (
              <p key={paragraph} className="font-serif text-lg md:text-xl leading-[1.72] text-ink/66">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
