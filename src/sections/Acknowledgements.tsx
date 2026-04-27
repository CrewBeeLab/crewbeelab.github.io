import type { Copy } from '../i18n/copy';

export const Acknowledgements = ({ t }: { t: Copy }) => (
  <section className="relative overflow-hidden border-b border-ink/5 bg-ink text-paper">
    <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_0%,rgba(217,155,43,0.18),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(255,255,255,0.06),transparent_28%)]" />
    <div className="relative mx-auto max-w-[900px] px-6 py-24 md:py-28 lg:py-32">
      <div className="mb-8 flex items-center gap-4">
        <span className="h-px w-10 bg-honey/70" />
        <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-honey">{t.acknowledgements.badge} //</span>
      </div>

      <div className="max-w-[820px]">
        <h2 className="mb-8 text-3xl md:text-5xl font-sans tracking-tight text-paper">{t.acknowledgements.title}</h2>
        <div className="space-y-5 text-base md:text-lg leading-relaxed text-paper/68">
          {t.acknowledgements.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  </section>
);
