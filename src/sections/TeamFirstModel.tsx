import { motion } from 'motion/react';
import type { Copy } from '../i18n/copy';

export const TeamFirstModel = ({ t }: { t: Copy }) => (
  <section id="teams" className="bg-ink text-paper py-24 md:py-32 lg:py-48 px-6">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <span className="inline-block text-[10px] uppercase font-sans font-bold tracking-[0.2em] text-honey mb-4 md:mb-6">{t.team.badge} //</span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic leading-[1.1] mb-6 md:mb-8 text-paper">{t.team.title}</h2>
        <p className="text-lg md:text-2xl font-serif text-paper/70 leading-relaxed mb-6 md:mb-8">{t.team.paragraphs[0]}</p>
        <p className="text-base md:text-lg font-serif text-paper/50 leading-relaxed">{t.team.paragraphs[1]}</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#1a1a1a] p-8 md:p-12 lg:p-16 border border-white/5 shadow-2xl relative overflow-x-auto overflow-y-hidden group md:rounded-lg">
        <div className="absolute top-0 right-0 w-64 h-64 bg-honey/10 blur-[80px] pointer-events-none transition-opacity group-hover:opacity-100 opacity-50" />
        <div className="font-mono text-xs md:text-sm leading-8 text-white/80 relative z-10 space-y-2 whitespace-nowrap min-w-max">
          <div><span className="text-honey font-bold tracking-widest text-[10px] md:text-[11px] uppercase">CodingTeam/</span></div>
          {['team.manifest.yaml', 'team.policy.yaml', 'coding-leader.agent.md', 'reviewer.agent.md', 'TEAM.md'].map((file) => (
            <div key={file} className="pl-4 md:pl-6 flex items-center gap-3 md:gap-4 hover:text-white transition-colors duration-200"><div className="w-1.5 h-px bg-honey/50" /> {file}</div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
