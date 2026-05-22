import { motion } from 'motion/react';
import { CheckCircle2, Github } from 'lucide-react';
import { BeeIcon } from '../components/BeeIcon';
import { DEMO_URL, GET_STARTED_URL, GITHUB_URL } from '../config/site';
import type { LocalizedSectionProps } from './types';

export const HeroSection = ({ content }: LocalizedSectionProps) => (
  <section className="relative flex flex-1 items-center overflow-hidden w-full max-w-[1400px] mx-auto px-6 md:px-16 pt-24 pb-14 md:pt-32 md:pb-10 lg:pt-28 lg:pb-8">
    <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full opacity-[0.05] pointer-events-none" style={{ background: 'radial-gradient(circle, var(--theme-honey) 0%, transparent 70%)' }} />

    <div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-12 items-center w-full">
      <motion.div className="order-2 md:order-none md:col-span-12 lg:col-span-7 flex flex-col items-center md:items-start text-center md:text-left" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.35rem] xl:text-7xl mb-5 md:mb-6 font-serif tracking-tight leading-[1.08] md:leading-[1.04] max-w-4xl">
          {content.hero.titlePrefix} <span className="italic text-honey">{content.hero.titleHighlight}</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-[1.35rem] opacity-70 mb-4 max-w-2xl leading-[1.68] font-serif">{content.hero.description}</p>
        <p className="hidden md:block text-base md:text-lg opacity-65 mb-6 md:mb-7 max-w-2xl leading-[1.7] font-serif">{content.hero.supporting}</p>

        <div className="hidden md:block space-y-3 mb-9 md:mb-8 font-sans text-xs md:text-sm tracking-wide opacity-80 max-w-2xl">
          {content.hero.boundaries.map((item) => (
            <div key={item} className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-honey shrink-0" /> {item}</div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3.5 sm:gap-5 w-full md:w-auto mt-6 md:mt-0">
          <a href={GET_STARTED_URL} className="btn-primary text-center w-full sm:w-auto sm:min-w-44">{content.hero.readQuickStart}</a>
          <div className="flex w-full sm:w-auto gap-3.5 sm:gap-5">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn-secondary flex items-center justify-center gap-2 flex-1 sm:flex-none sm:min-w-48">
              <Github className="w-4 h-4" /> {content.hero.viewGithub}
            </a>
            <a href={DEMO_URL} className="hidden sm:flex btn-secondary text-center sm:min-w-44 items-center justify-center">{content.hero.watchDemo}</a>
          </div>
        </div>
      </motion.div>

      <motion.div className="order-1 md:order-none md:col-span-12 lg:col-span-5 relative flex items-center justify-center p-4 md:p-12 mb-2 md:mb-0 scale-[0.8] sm:scale-90 md:scale-100 origin-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <div className="relative w-full aspect-square max-w-[280px] sm:max-w-md flex items-center justify-center">
          <div className="absolute inset-0 bg-honey/10 blur-[60px] md:blur-[80px] rounded-full" />
          <div className="absolute inset-8 rounded-full border border-honey/15" />
          <div className="absolute inset-14 rounded-full border border-ink/8" />
          <BeeIcon alt={content.nav.brand} className="w-40 h-40 md:w-56 md:h-56 text-ink relative z-20" />
          <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 sm:top-10 -left-4 sm:left-0 bg-paper/82 backdrop-blur-md border border-honey/15 p-2 sm:p-3 shadow-xl z-30 min-w-36 text-center hidden sm:block">
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] whitespace-nowrap">{content.hero.floating[0]}</span>
          </motion.div>
          <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-4 sm:bottom-10 -right-8 sm:-right-4 bg-paper/82 backdrop-blur-md border border-honey/15 p-2 sm:p-3 shadow-xl z-30 min-w-36 text-center hidden sm:block">
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-honey whitespace-nowrap">{content.hero.floating[1]}</span>
          </motion.div>
          <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 -left-10 sm:-left-8 bg-paper/82 backdrop-blur-md border border-honey/15 p-2 sm:p-3 shadow-xl z-30 hidden sm:block min-w-44 text-center">
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] whitespace-nowrap">{content.hero.floating[2]}</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);
