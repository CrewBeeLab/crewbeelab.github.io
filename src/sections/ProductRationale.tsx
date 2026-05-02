import { motion } from 'motion/react';
import type { LocalizedSectionProps } from './types';

export const ProductRationale = ({ content }: LocalizedSectionProps) => (
  <section id="why-crewbee" className="py-20 md:py-28 lg:py-36 bg-paper-warm/40 border-y border-ink/5 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-honey/5 via-transparent to-transparent pointer-events-none" />
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <h2 className="text-3xl md:text-5xl lg:text-[3.45rem] font-serif leading-[1.08] mb-7 md:mb-9 text-ink">
        {content.why.titleBeforeBreak} <br className="hidden md:block" /> {content.why.titleAfterBreak}
      </h2>
      <p className="text-lg md:text-xl font-serif text-ink/70 leading-[1.72] mb-5">{content.why.paragraphs[0]}</p>
      <p className="text-lg md:text-xl font-serif text-ink/70 leading-[1.72] mb-7">{content.why.paragraphs[1]}</p>
      <p className="text-xl md:text-[1.45rem] font-serif font-bold italic text-ink leading-[1.55]">{content.why.emphasis}</p>
    </motion.div>
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay: 0.08 }} className="relative z-10 mt-12 md:mt-16 grid md:grid-cols-2 gap-4 md:gap-5 max-w-5xl mx-auto px-6 text-left">
      {[
        { title: content.why.beforeAfter.beforeTitle, items: content.why.beforeAfter.before, tone: 'muted' },
        { title: content.why.beforeAfter.afterTitle, items: content.why.beforeAfter.after, tone: 'honey' }
      ].map((column) => (
        <div key={column.title} className="card-paper bg-surface p-6 md:p-7 lg:p-8 relative overflow-hidden">
          <div className={`absolute right-0 top-0 h-28 w-28 rounded-full blur-3xl ${column.tone === 'honey' ? 'bg-honey/18' : 'bg-ink/5'}`} />
          <h3 className="relative mb-5 font-serif text-2xl md:text-[1.65rem] leading-tight text-ink">{column.title}</h3>
          <div className="relative grid gap-3">
            {column.items.map((item) => (
              <div key={item} className="flex items-start gap-3 border border-ink/8 bg-paper/55 px-4 py-3">
                <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${column.tone === 'honey' ? 'bg-honey' : 'bg-ink/25'}`} />
                <span className="font-serif text-base md:text-[1.05rem] leading-[1.55] text-ink/68">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  </section>
);
