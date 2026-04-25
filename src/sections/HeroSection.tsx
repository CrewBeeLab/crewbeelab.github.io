import { motion } from 'motion/react';
import { CheckCircle2, Github } from 'lucide-react';
import { GET_STARTED_URL, GITHUB_URL } from '../config/site';
import { BeeIcon } from '../components/BeeIcon';
import type { Copy } from '../i18n/copy';

export const HeroSection = ({ t }: { t: Copy }) => (
  <section className="relative flex flex-1 items-center overflow-hidden w-full max-w-[1400px] mx-auto px-6 md:px-16 pt-24 pb-8 md:pt-32 md:pb-8 lg:pt-28 lg:pb-6">
    <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full opacity-[0.05] pointer-events-none" style={{ background: 'radial-gradient(circle, var(--theme-honey) 0%, transparent 70%)' }} />

    <div className="grid md:grid-cols-12 gap-12 lg:gap-12 items-center">
      <motion.div className="md:col-span-12 lg:col-span-7" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 lg:mb-6 font-serif tracking-tight leading-[1.1] md:leading-[1.05] md:min-h-[8rem] lg:min-h-[9.5rem]">
          {t.hero.titlePrefix} <span className="italic text-honey">{t.hero.titleHighlight}</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl opacity-70 mb-8 lg:mb-8 max-w-xl leading-relaxed font-serif md:min-h-[7.5rem] lg:min-h-[6.5rem]">{t.hero.description}</p>

        <div className="space-y-3 lg:space-y-3 mb-10 lg:mb-8 font-sans text-xs md:text-sm tracking-wide opacity-80">
          {t.hero.bullets.map((item) => (
            <div key={item} className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-honey shrink-0" /> {item}</div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 sm:gap-6">
          <a href={GET_STARTED_URL} className="btn-primary text-center sm:min-w-44">{t.hero.getStarted}</a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn-secondary flex items-center justify-center gap-2 sm:min-w-52">
            <Github className="w-4 h-4" /> {t.hero.viewGithub}
          </a>
        </div>
      </motion.div>

      <motion.div className="md:col-span-12 lg:col-span-5 relative flex items-center justify-center p-8 md:p-12 mb-10 md:mb-0" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <div className="relative w-full aspect-square max-w-[280px] sm:max-w-md flex items-center justify-center">
          <div className="absolute inset-0 bg-honey/10 blur-[60px] md:blur-[80px] rounded-full" />
          <BeeIcon className="w-40 h-40 md:w-56 md:h-56 text-ink relative z-20" />
          <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 sm:top-10 -left-4 sm:left-0 bg-paper/80 backdrop-blur-md border border-ink/10 p-2 sm:p-3 shadow-xl z-30 min-w-36 text-center">
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] whitespace-nowrap">{t.hero.floating[0]}</span>
          </motion.div>
          <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-4 sm:bottom-10 -right-8 sm:-right-4 bg-paper/80 backdrop-blur-md border border-ink/10 p-2 sm:p-3 shadow-xl z-30 min-w-36 text-center">
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-honey whitespace-nowrap">{t.hero.floating[1]}</span>
          </motion.div>
          <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 -left-10 sm:-left-8 bg-paper/80 backdrop-blur-md border border-ink/10 p-2 sm:p-3 shadow-xl z-30 hidden sm:block min-w-44 text-center">
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] whitespace-nowrap">{t.hero.floating[2]}</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);
