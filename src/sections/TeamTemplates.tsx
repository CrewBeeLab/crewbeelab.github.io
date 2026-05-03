import { motion } from 'motion/react';
import { designSystem } from '../config/designSystem';
import type { LocalizedSectionProps } from './types';

export const TeamTemplates = ({ content }: LocalizedSectionProps) => (
  <section className="bg-ink text-paper py-20 md:py-28 lg:py-36 px-6">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-14 lg:gap-20 items-center">
      <motion.div id="teams" className="anchor-target" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <span className={designSystem.typography.badge}>{content.team.badge} //</span>
        <h2 className="text-3xl md:text-5xl lg:text-[3.45rem] font-serif leading-[1.08] mb-5 md:mb-7 text-paper">{content.team.title}</h2>
        <p className="text-lg md:text-[1.35rem] font-serif text-paper/70 leading-[1.68] mb-5 md:mb-7">{content.team.paragraphs[0]}</p>
        <p className="text-base md:text-lg font-serif text-paper/55 leading-[1.68]">{content.team.paragraphs[1]}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#1a1a1a] p-6 md:p-8 lg:p-10 border border-white/5 shadow-2xl relative overflow-hidden group md:rounded-lg">
        <div className="absolute top-0 right-0 w-64 h-64 bg-honey/10 blur-[80px] pointer-events-none transition-opacity group-hover:opacity-100 opacity-50" />
        <div className="relative z-10 space-y-4 font-mono text-xs md:text-sm text-white/80">
          <div><span className="text-honey font-bold tracking-widest text-[10px] md:text-[11px] uppercase">CodingTeam/</span></div>
          {content.team.files.map((file) => (
            <div key={file.name} className="pl-4 md:pl-6 grid gap-1 border-l border-white/8 transition-colors duration-200 hover:border-honey/40">
              <div className="flex items-center gap-3 text-white/88"><div className="w-1.5 h-px bg-honey/50" /> {file.name}</div>
              <div className="pl-4 text-[11px] md:text-xs leading-relaxed text-white/45 font-sans">{file.desc}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
