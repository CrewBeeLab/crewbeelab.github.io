import { motion } from 'motion/react';
import { designSystem } from '../config/designSystem';
import type { LocalizedSectionProps } from './types';

export const TeamTemplates = ({ content }: LocalizedSectionProps) => (
  <section id="teams" className="bg-ink text-paper py-20 md:py-28 lg:py-36 px-6">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-14 lg:gap-20 items-center">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <span className={designSystem.typography.badge}>{content.team.badge} //</span>
        <h2 className="text-3xl md:text-5xl lg:text-[3.45rem] font-serif leading-[1.08] mb-5 md:mb-7 text-paper">{content.team.title}</h2>
        <p className="text-lg md:text-[1.35rem] font-serif text-paper/70 leading-[1.68] mb-5 md:mb-7">{content.team.paragraphs[0]}</p>
        <p className="text-base md:text-lg font-serif text-paper/55 leading-[1.68]">{content.team.paragraphs[1]}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className={designSystem.surface.codePanel}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-honey/10 blur-[80px] pointer-events-none transition-opacity group-hover:opacity-100 opacity-50" />
        <div className="font-mono text-xs md:text-sm leading-7 md:leading-8 text-white/80 relative z-10 space-y-1.5 whitespace-nowrap min-w-max">
          <div><span className="text-honey font-bold tracking-widest text-[10px] md:text-[11px] uppercase">CodingTeam/</span></div>
          {content.team.files.map((file) => (
            <div key={file} className="pl-4 md:pl-6 flex items-center gap-3 md:gap-4 hover:text-white transition-colors duration-200"><div className="w-1.5 h-px bg-honey/50" /> {file}</div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
