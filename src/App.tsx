import { motion, AnimatePresence } from 'motion/react';
import { 
  Github,
  Terminal,
  Layers,
  ArrowRight,
  Code2,
  CheckCircle2,
  Menu,
  X,
  Moon,
  Sun
} from 'lucide-react';
import React, { useState, useEffect } from 'react';

const GITHUB_URL = 'https://github.com/CrewBeeLab/CrewBee';
const GET_STARTED_URL = '#docs';

const BeeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <img
    src="/assets/images/crewbee-icon-nobg.png"
    alt="CrewBee"
    className={`${className} object-contain transition-all duration-500 hover:scale-105 drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(217,155,43,0.2)]`}
  />
);

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (localStorage.theme === 'light') {
      setIsDark(false);
      root.classList.remove('dark');
    } else {
      setIsDark(true);
      root.classList.add('dark');
    }
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      root.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return { isDark, toggle };
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggle } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-paper/90 backdrop-blur-md border-b border-ink/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
          <BeeIcon className="w-8 h-8 text-ink" />
          <span className="text-[14px] font-sans font-bold tracking-[0.2em] uppercase mt-1">CrewBee</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Why CrewBee', 'How It Works', 'Teams', 'Docs'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
              className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-ink/50 hover:text-ink transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-honey hover:text-honey-soft transition-colors">
            GitHub ↗
          </a>
          <button 
            onClick={toggle} 
            className="p-2 rounded-full hover:bg-surface transition-colors text-ink/50 hover:text-ink"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button className="bg-ink text-paper px-6 py-3 border border-ink text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-paper hover:text-ink transition-all">Install CLI</button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggle} 
            className="p-2 rounded-full hover:bg-surface transition-colors text-ink/50 hover:text-ink"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-paper border-b border-ink/5 p-6 flex flex-col gap-6 max-h-[80vh] overflow-y-auto shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {['Features', 'Why CrewBee', 'How It Works', 'Teams', 'Docs'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs font-bold uppercase tracking-widest text-ink hover:text-honey transition-colors"
                >
                  {item}
                </a>
              ))}
              <a 
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-bold uppercase tracking-widest text-honey"
              >
                GitHub ↗
              </a>
            </div>
            <button className="bg-ink text-paper px-6 py-4 border border-ink text-xs uppercase font-bold tracking-[0.2em] hover:bg-paper hover:text-ink transition-all mt-4 w-full">Install CLI</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, badge, subtitle, centered = false }: { children: React.ReactNode, badge?: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-16 md:mb-20 ${centered ? 'text-center' : ''}`}>
    {badge && (
      <span className="inline-block text-[10px] uppercase font-sans font-bold tracking-[0.2em] text-honey mb-4">
        {badge} //
      </span>
    )}
    <h2 className="text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 leading-tight font-serif italic text-ink">
      {children}
    </h2>
    {subtitle && (
      <p className="text-base md:text-lg lg:text-xl font-serif italic text-ink/60 max-w-2xl mx-auto md:mx-0 leading-relaxed px-4 md:px-0">
        {subtitle}
      </p>
    )}
  </div>
);

const HeroSection = () => (
  <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden max-w-[1400px] mx-auto px-6 md:px-16">
    <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full opacity-[0.05] pointer-events-none" style={{ background: 'radial-gradient(circle, var(--theme-honey) 0%, transparent 70%)' }}></div>
    
    <div className="grid md:grid-cols-12 gap-12 lg:gap-12 items-center">
      <motion.div
        className="md:col-span-12 lg:col-span-7"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8 font-serif tracking-tight leading-[1.1] md:leading-[1.05]">
          Turn scattered agents into <span className="italic text-honey">real teams.</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl opacity-70 mb-8 md:mb-10 max-w-xl leading-relaxed font-serif">
          CrewBee is a Team-first Agent Team framework for OpenCode. Define Teams, pick a Leader, and run structured agent workflows in the host you already use.
        </p>
        
        <div className="space-y-3 md:space-y-4 mb-10 md:mb-12 font-sans text-xs md:text-sm tracking-wide opacity-80">
          <div className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-honey shrink-0" /> Not a prompt pack.</div>
          <div className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-honey shrink-0" /> Not a flat agent list.</div>
          <div className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-honey shrink-0" /> Not another giant runtime.</div>
        </div>
        
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 sm:gap-6">
          <a href={GET_STARTED_URL} className="btn-primary text-center">
            Get Started
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn-secondary flex items-center justify-center gap-2">
            <Github className="w-4 h-4" /> View on GitHub
          </a>
        </div>
      </motion.div>

      <motion.div 
        className="md:col-span-12 lg:col-span-5 relative flex items-center justify-center p-8 md:p-12 mb-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative w-full aspect-square max-w-[280px] sm:max-w-md flex items-center justify-center">
          <div className="absolute inset-0 bg-honey/10 blur-[60px] md:blur-[80px] rounded-full" />
          <BeeIcon className="w-40 h-40 md:w-56 md:h-56 text-ink relative z-20" />
          
          {/* Floating Nodes */}
          <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 sm:top-10 -left-4 sm:left-0 bg-paper/80 backdrop-blur-md border border-ink/10 p-2 sm:p-3 shadow-xl z-30">
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] whitespace-nowrap">Define Team</span>
          </motion.div>
          <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-4 sm:bottom-10 -right-8 sm:-right-4 bg-paper/80 backdrop-blur-md border border-ink/10 p-2 sm:p-3 shadow-xl z-30">
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-honey whitespace-nowrap">Pick Leader</span>
          </motion.div>
          <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 -left-10 sm:-left-8 bg-paper/80 backdrop-blur-md border border-ink/10 p-2 sm:p-3 shadow-xl z-30 hidden sm:block">
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] whitespace-nowrap">Run in OpenCode</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const StatusBar = () => (
  <div className="border-y border-ink/5 bg-surface py-6 overflow-hidden flex whitespace-nowrap w-full">
    <div className="animate-marquee flex gap-24 items-center pl-24 pr-12 text-[10px] uppercase font-bold tracking-[0.2em] opacity-40 min-w-max">
      <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-honey" /> OpenCode MVP Ready</span>
      <span>Team-first Definitions</span>
      <span>Runtime Projection</span>
      <span>Delegation Tooling</span>
      <span>User-level Install</span>
      <span>Open Source</span>
      
      <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-honey" /> OpenCode MVP Ready</span>
      <span>Team-first Definitions</span>
      <span>Runtime Projection</span>
      <span>Delegation Tooling</span>
      <span>User-level Install</span>
      <span>Open Source</span>
    </div>
  </div>
);

const WhatYouCanDo = () => (
  <section id="features" className="section-container">
    <SectionHeading centered subtitle="Define once. Run anywhere.">What you can do with CrewBee</SectionHeading>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
      {[
        { title: "Define a Team", desc: "Turn your working style into a reusable Agent Team." },
        { title: "Pick a Leader", desc: "Start from one clear entry point instead of a flat role menu." },
        { title: "Delegate with Structure", desc: "Let the Leader consult, delegate, review, and summarize." },
        { title: "Run in OpenCode", desc: "Use CrewBee-projected agents in your existing OpenCode workflow." }
      ].map((item, i) => (
        <div key={i} className="card-paper p-8 md:p-10 flex flex-col items-start text-left relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-honey/5 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-150 duration-700" />
          <span className="text-[10px] font-bold text-honey mb-6 md:mb-8 block tracking-[0.2em] font-sans">0{i + 1}</span>
          <h3 className="text-xl md:text-2xl mb-3 md:mb-4 italic font-serif leading-tight">{item.title}</h3>
          <p className="text-ink/60 font-serif leading-relaxed text-base md:text-lg">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const WhyItExists = () => (
  <section id="why-crewbee" className="py-24 md:py-32 lg:py-48 bg-paper-warm/40 border-y border-ink/5 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-honey/5 via-transparent to-transparent pointer-events-none" />
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto px-6 text-center relative z-10"
    >
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic leading-[1.1] mb-8 md:mb-12 text-ink">
        Agent workflows already look like teams. <br className="hidden md:block" /> The structure is just scattered.
      </h2>
      <p className="text-lg md:text-xl font-serif text-ink/70 leading-relaxed mb-6">
        Most agent workflows already have a default entry point, different roles, shared rules, and a preferred execution style. 
      </p>
      <p className="text-lg md:text-xl font-serif text-ink/70 leading-relaxed mb-8">
        But the structure often lives across prompts, host configs, and personal habits.
      </p>
      <p className="text-xl md:text-2xl font-serif font-bold italic text-ink leading-relaxed">
        CrewBee makes that structure explicit, reusable, and runnable.
      </p>
    </motion.div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="section-container border-b border-ink/5">
    <SectionHeading centered>How It Works</SectionHeading>
    <div className="max-w-6xl mx-auto mt-20 relative">
      <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-px bg-ink/10" />
      <div className="grid md:grid-cols-3 gap-12 relative z-10">
        {[
          { step: "Define", desc: "Write Team and Agent files.", icon: <Code2 className="w-6 h-6 md:w-8 md:h-8" /> },
          { step: "Project", desc: "CrewBee turns them into host-ready agents.", icon: <Layers className="w-6 h-6 md:w-8 md:h-8" /> },
          { step: "Run", desc: "Use them in OpenCode with Leader-first delegation.", icon: <Terminal className="w-6 h-6 md:w-8 md:h-8" /> }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-paper card-paper flex items-center justify-center text-honey rounded-full mb-6 md:mb-8 shadow-sm">
              {item.icon}
            </div>
            <h4 className="text-2xl md:text-3xl font-serif italic mb-3 md:mb-4 text-ink">{item.step}</h4>
            <p className="text-ink/60 font-serif text-base md:text-lg">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TeamFirstModel = () => (
  <section id="teams" className="bg-ink text-paper py-24 md:py-32 lg:py-48 px-6">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-block text-[10px] uppercase font-sans font-bold tracking-[0.2em] text-honey mb-4 md:mb-6">
          Archetype //
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic leading-[1.1] mb-6 md:mb-8 text-paper">The Team-first Model</h2>
        <p className="text-lg md:text-2xl font-serif text-paper/70 leading-relaxed mb-6 md:mb-8">
          A Team is not just a prompt. It has a leader, members, shared rules, and reusable Agent profiles.
        </p>
        <p className="text-base md:text-lg font-serif text-paper/50 leading-relaxed">
          Everything lives together in a clean package, version-controlled alongside your code.
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-[#1a1a1a] p-8 md:p-12 lg:p-16 border border-white/5 shadow-2xl relative overflow-x-auto overflow-y-hidden group md:rounded-lg"
      >
         <div className="absolute top-0 right-0 w-64 h-64 bg-honey/10 blur-[80px] pointer-events-none transition-opacity group-hover:opacity-100 opacity-50" />
         <div className="font-mono text-xs md:text-sm leading-8 text-white/80 relative z-10 space-y-2 whitespace-nowrap min-w-max">
           <div><span className="text-honey font-bold tracking-widest text-[10px] md:text-[11px] uppercase">CodingTeam/</span></div>
           <div className="pl-4 md:pl-6 flex items-center gap-3 md:gap-4 hover:text-white transition-colors duration-200"><div className="w-1.5 h-px bg-honey/50" /> team.manifest.yaml</div>
           <div className="pl-4 md:pl-6 flex items-center gap-3 md:gap-4 hover:text-white transition-colors duration-200"><div className="w-1.5 h-px bg-honey/50" /> team.policy.yaml</div>
           <div className="pl-4 md:pl-6 flex items-center gap-3 md:gap-4 hover:text-white transition-colors duration-200"><div className="w-1.5 h-px bg-honey/50" /> coding-leader.agent.md</div>
           <div className="pl-4 md:pl-6 flex items-center gap-3 md:gap-4 hover:text-white transition-colors duration-200"><div className="w-1.5 h-px bg-honey/50" /> reviewer.agent.md</div>
           <div className="pl-4 md:pl-6 flex items-center gap-3 md:gap-4 hover:text-white transition-colors duration-200"><div className="w-1.5 h-px bg-honey/50" /> TEAM.md</div>
         </div>
      </motion.div>
    </div>
  </section>
);

const SocialProof = () => (
  <section className="section-container bg-paper-warm/30 border-b border-ink/5">
    <SectionHeading 
      subtitle="Built for people who already maintain agent workflows by hand."
      centered
    >
      For the Builders
    </SectionHeading>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-16">
      {[
        { role: "OpenCode power users", desc: "Want to run complex delegation workflows natively." },
        { role: "Prompt pack maintainers", desc: "Need a way to version and share structured behavior sets." },
        { role: "Agent workflow builders", desc: "Need transparent rules, not black-box agents." },
        { role: "Developers everywhere", desc: "Want reusable Team structures written as code." }
      ].map((item, i) => (
        <div key={i} className="card-paper p-10 flex flex-col items-start bg-surface">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-honey" />
            <div className="text-[10px] font-bold text-ink tracking-[0.2em] uppercase">{item.role}</div>
          </div>
          <p className="font-serif text-ink/70 italic text-lg leading-relaxed flex-grow">"{item.desc}"</p>
        </div>
      ))}
    </div>
  </section>
);

const OpenCodeReady = () => (
  <section className="py-24 md:py-32 lg:py-48 max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic leading-tight mb-6 md:mb-8">Built for OpenCode first.</h2>
    <p className="text-lg md:text-2xl font-serif text-ink/70 leading-relaxed mb-10 md:mb-12">
      CrewBee currently provides a working MVP path for OpenCode: projected agents, config patching, session binding, delegation tooling, and user-level install.
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
      <button className="text-ink font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px] flex items-center gap-2 hover:text-honey transition-colors group">
        Read installation guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
      <button className="text-ink font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px] flex items-center gap-2 hover:text-honey transition-colors group">
        View OpenCode runtime docs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </section>
);

const Faq = () => (
  <section id="docs" className="section-container border-y border-ink/5 bg-paper-warm/20">
    <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
      <div className="lg:col-span-1">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] font-sans text-honey mb-4 md:mb-6 block">FAQ //</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 font-serif italic tracking-tight leading-tight">Clarity <br className="hidden lg:block" /> Through <br className="hidden lg:block" /> Structure.</h2>
      </div>
      <div className="lg:col-span-2 space-y-8 md:space-y-12">
        {[
          { q: "Is CrewBee a prompt pack?", a: "No. CrewBee utilizes prompt definitions, but its core primitive is the Engineering Team: leader, members, shared policy, and projection logic." },
          { q: "Why Leader-first architecture?", a: "Because serious engineering requires legible entry points, rigorous context ownership, and a singular point of failure recovery." },
          { q: "Which hosts are supported?", a: "The current reference MVP is built specifically for OpenCode. However, the Protocol layer is host-agnostic and exportable." }
        ].map((faq, i) => (
          <div key={i} className="border-l-[0.5px] border-ink/20 pl-6 md:pl-8 pb-4 relative">
            <div className="absolute -left-[4px] top-2 md:top-3 w-2 h-2 rounded-full bg-honey" />
            <h4 className="text-xl md:text-2xl font-serif italic mb-3 md:mb-4 text-ink">{faq.q}</h4>
            <p className="text-ink/60 font-serif italic text-base md:text-lg leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-paper py-16 md:py-20 px-6 border-t border-ink/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <BeeIcon className="w-8 h-8 md:w-6 md:h-6 text-ink/40" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40">CrewBeeLab © 2026</span>
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40">
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-honey transition-colors">GitHub</a>
        <a href="#" className="hover:text-honey transition-colors">Docs</a>
        <a href="#" className="hover:text-honey transition-colors">License</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="relative font-sans text-ink selection:bg-honey/30">
      <div className="fixed inset-0 bg-paper -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,155,43,0.10),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.45),transparent_42%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(242,170,42,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_42%)] opacity-[var(--theme-glow-opacity)] transition-opacity duration-500 -z-10 pointer-events-none" />
      <div className="bg-grain" />
      
      <Navbar />

      <main>
        <HeroSection />
        <StatusBar />
        <WhatYouCanDo />
        <WhyItExists />
        <HowItWorks />
        <TeamFirstModel />
        <SocialProof />
        <OpenCodeReady />
        <Faq />
      </main>

      <Footer />
    </div>
  );
}
