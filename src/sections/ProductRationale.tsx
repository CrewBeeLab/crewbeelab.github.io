import { motion } from 'motion/react';
import type { LocalizedSectionProps } from './types';

export const ProductRationale = ({ content }: LocalizedSectionProps) => (
  <section id="why-crewbee" className="py-20 md:py-28 lg:py-36 bg-paper-warm/40 border-y border-ink/5 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-honey/5 via-transparent to-transparent pointer-events-none" />
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <h2 className="text-3xl md:text-5xl lg:text-[3.45rem] font-serif italic leading-[1.08] mb-7 md:mb-9 text-ink">
        {content.why.titleBeforeBreak} <br className="hidden md:block" /> {content.why.titleAfterBreak}
      </h2>
      <p className="text-lg md:text-xl font-serif text-ink/70 leading-[1.72] mb-5">{content.why.paragraphs[0]}</p>
      <p className="text-lg md:text-xl font-serif text-ink/70 leading-[1.72] mb-7">{content.why.paragraphs[1]}</p>
      <p className="text-xl md:text-[1.45rem] font-serif font-bold italic text-ink leading-[1.55]">{content.why.emphasis}</p>
    </motion.div>
  </section>
);
