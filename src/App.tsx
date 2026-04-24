import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Github, 
  Terminal, 
  Users, 
  Workflow, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  Code2, 
  Search, 
  CheckCircle2,
  AlertCircle,
  Menu,
  X,
  History,
  Lightbulb,
  MessageSquare
} from 'lucide-react';
import React, { useState, useEffect } from 'react';

const BeeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Inner halo */}
    <circle cx="50" cy="50" r="35" fill="#d99b2b" fillOpacity="0.1" />
    
    {/* Body */}
    <path d="M50 25C47.2386 25 45 27.2386 45 30V35V38.1691C40.4079 40.5181 37 45.1054 37 50.5C37 57.6797 42.8203 63.5 50 63.5C57.1797 63.5 63 57.6797 63 50.5C63 45.1054 59.5921 40.5181 55 38.1691V35V30C55 27.2386 52.7614 25 50 25ZM50 66.5C55.0831 66.5 60.5 70.5 60.5 78.5C60.5 86.5 50 95 50 95C50 95 39.5 86.5 39.5 78.5C39.5 70.5 44.9169 66.5 50 66.5Z" fill="#d99b2b" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    <path d="M37.5 53.5C37.5 60.4036 43.0964 66 50 66C56.9036 66 62.5 60.4036 62.5 53.5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />

    {/* Upper Wings */}
    <path d="M47.5 45C33.5 -5 5 15 5 35C5 55 25 50 49 52" fill="#e7b95a" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M52.5 45C66.5 -5 95 15 95 35C95 55 75 50 51 52" fill="#e7b95a" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

    {/* Lower Wings */}
    <path d="M48.5 52C28.5 52 15 55 15 65C15 75 35 70 47.5 63" fill="#f6f0e5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M51.5 52C71.5 52 85 55 85 65C85 75 65 70 52.5 63" fill="#f6f0e5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

    {/* Antennae */}
    <path d="M45 27C45 22 40 15 35 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M55 27C55 22 60 15 65 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

        <div className="hidden md:flex items-center gap-10">
          {['Features', 'Why CrewBee', 'How It Works', 'Teams', 'Docs'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
              className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-ink/40 hover:text-ink transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <a href="https://github.com" className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-honey">
            GitHub ↗
          </a>
          <button className="bg-ink text-paper px-6 py-3 border border-ink text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-paper hover:text-ink transition-all">Install CLI</button>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-paper border-b border-ink/5 p-6 flex flex-col gap-4"
          >
            {['Why CrewBee', 'How It Works', 'Teams', 'Install', 'Docs'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-bold uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
            <button className="btn-primary w-full mt-4">Get Started</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, badge, subtitle, centered = false }: { children: React.ReactNode, badge?: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-24 ${centered ? 'text-center' : ''}`}>
    {badge && (
      <span className="inline-block text-[10px] uppercase font-sans font-bold tracking-[0.2em] text-honey mb-6">
        {badge} //
      </span>
    )}
    <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-[1.1] font-serif italic">{children}</h2>
    {subtitle && (
      <p className="text-xl md:text-2xl font-serif italic text-ink/60 max-w-2xl mx-auto md:mx-0 leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

const Card = ({ children, className = "", key }: { children: React.ReactNode, className?: string, key?: React.Key }) => (
  <div key={key} className={`card-paper p-10 ${className}`}>
    {children}
  </div>
);

const HeroSection = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden max-w-[1400px] mx-auto px-6 md:px-16">
    <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full opacity-[0.05] pointer-events-none" style={{ background: 'radial-gradient(circle, #D99B2B 0%, transparent 70%)' }}></div>
    
    <div className="grid md:grid-cols-12 gap-12 items-center">
      <motion.div
        className="md:col-span-12 lg:col-span-7"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 font-serif tracking-tight leading-[1.05]">
          Turn scattered agents into <span className="italic text-honey">real teams.</span>
        </h1>
        <p className="text-xl md:text-2xl opacity-70 mb-10 max-w-xl leading-relaxed font-serif">
          CrewBee is a Team-first Agent Team framework for OpenCode. Define Teams, pick a Leader, and run structured agent workflows in the host you already use.
        </p>
        
        <div className="space-y-4 mb-12 font-sans text-sm tracking-wide opacity-80">
          <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-honey" /> Not a prompt pack.</div>
          <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-honey" /> Not a flat agent list.</div>
          <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-honey" /> Not another giant runtime.</div>
        </div>
        
        <div className="flex flex-wrap items-center gap-6">
          <button className="btn-primary">
            Get Started
          </button>
          <button className="btn-secondary flex items-center gap-2">
            <Github className="w-4 h-4" /> View on GitHub
          </button>
        </div>
      </motion.div>

      <motion.div 
        className="md:col-span-12 lg:col-span-5 relative flex items-center justify-center p-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="relative w-full aspect-square max-w-md flex items-center justify-center">
          <div className="absolute inset-0 bg-honey/10 blur-[80px] rounded-full" />
          <BeeIcon className="w-48 h-48 md:w-56 md:h-56 text-ink relative z-20" />
          
          {/* Floating Nodes */}
          <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 left-0 bg-paper/80 backdrop-blur-md border border-ink/10 p-3 shadow-xl z-30">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Define Team</span>
          </motion.div>
          <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-10 -right-4 bg-paper/80 backdrop-blur-md border border-ink/10 p-3 shadow-xl z-30">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-honey">Pick Leader</span>
          </motion.div>
          <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 -left-8 bg-paper/80 backdrop-blur-md border border-ink/10 p-3 shadow-xl z-30">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Run in OpenCode</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const StatusBar = () => (
  <div className="border-y border-ink/5 bg-white/20 py-6 overflow-hidden flex whitespace-nowrap w-full">
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
    <SectionHeading>What you can do with CrewBee</SectionHeading>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-ink/5">
      {[
        { title: "Define a Team", desc: "Turn your working style into a reusable Agent Team." },
        { title: "Pick a Leader", desc: "Start from one clear entry point instead of a flat role menu." },
        { title: "Delegate with Structure", desc: "Let the Leader consult, delegate, review, and summarize." },
        { title: "Run in OpenCode", desc: "Use CrewBee-projected agents in your existing OpenCode workflow." }
      ].map((item, i) => (
        <div key={i} className="p-10 border-r border-b border-ink/5 hover:bg-white/40 transition-colors bg-white/20">
          <span className="text-[10px] font-bold text-honey mb-6 block tracking-[0.2em]">0{i + 1}</span>
          <h3 className="text-xl mb-4 italic font-serif leading-tight">{item.title}</h3>
          <p className="text-ink/60 font-serif leading-relaxed text-base">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const WhyItExists = () => (
  <section id="why-crewbee" className="py-32 bg-paper-warm/30 border-y border-ink/5">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-serif italic leading-tight mb-10 text-ink">
        Agent workflows already look like teams. <br className="hidden md:block" /> The structure is just scattered.
      </h2>
      <p className="text-xl font-serif text-ink/70 leading-relaxed mb-6">
        Most agent workflows already have a default entry point, different roles, shared rules, and a preferred execution style. 
      </p>
      <p className="text-xl font-serif text-ink/70 leading-relaxed mb-6">
        But the structure often lives across prompts, host configs, and personal habits.
      </p>
      <p className="text-xl font-serif font-bold text-ink leading-relaxed">
        CrewBee makes that structure explicit, reusable, and runnable.
      </p>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="section-container">
    <SectionHeading centered>How It Works</SectionHeading>
    <div className="max-w-5xl mx-auto mt-20 relative">
      <div className="hidden md:block absolute top-[40px] left-8 right-8 h-px bg-ink/10" />
      <div className="grid md:grid-cols-3 gap-16 relative z-10">
        {[
          { step: "Define", desc: "Write Team and Agent files.", icon: <Code2 className="w-5 h-5" /> },
          { step: "Project", desc: "CrewBee turns them into host-ready agents.", icon: <Layers className="w-5 h-5" /> },
          { step: "Run", desc: "Use them in OpenCode with Leader-first delegation.", icon: <Terminal className="w-5 h-5" /> }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center bg-paper p-8">
            <div className="w-20 h-20 bg-white border border-ink/5 flex items-center justify-center text-honey rounded-full mb-8 shadow-sm">
              {item.icon}
            </div>
            <h4 className="text-2xl font-serif italic mb-4">{item.step}</h4>
            <p className="text-ink/60 font-serif">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TeamFirstModel = () => (
  <section id="teams" className="bg-ink text-paper py-32 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-serif italic leading-tight mb-8">The Team-first Model</h2>
        <p className="text-xl font-serif text-paper/70 leading-relaxed mb-8">
          A Team is not just a prompt. It has a leader, members, shared rules, and reusable Agent profiles.
        </p>
        <p className="text-lg font-serif text-paper/50 leading-relaxed">
          Everything lives together in a clean package, version-controlled alongside your code.
        </p>
      </div>
      <div className="bg-[#1a1a1a] p-8 border border-white/10 font-mono text-sm leading-8 text-white/80 shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 right-0 w-32 h-32 bg-honey/10 blur-[50px] pointer-events-none" />
         <div><span className="text-honey font-bold">CodingTeam/</span></div>
         <div className="pl-6 flex items-center gap-3"><div className="w-1 h-px bg-honey/50" /> team.manifest.yaml</div>
         <div className="pl-6 flex items-center gap-3"><div className="w-1 h-px bg-honey/50" /> team.policy.yaml</div>
         <div className="pl-6 flex items-center gap-3"><div className="w-1 h-px bg-honey/50" /> coding-leader.agent.md</div>
         <div className="pl-6 flex items-center gap-3"><div className="w-1 h-px bg-honey/50" /> reviewer.agent.md</div>
         <div className="pl-6 flex items-center gap-3"><div className="w-1 h-px bg-honey/50" /> TEAM.md</div>
      </div>
    </div>
  </section>
);

const SocialProof = () => (
  <section className="section-container bg-white/20 border-b border-ink/5">
    <SectionHeading 
      subtitle="Built for people who already maintain agent workflows by hand."
      centered
    >
      For the Builders
    </SectionHeading>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {[
        { role: "OpenCode power users", desc: "Want to run complex delegation workflows natively." },
        { role: "Prompt pack maintainers", desc: "Need a way to version and share structured behavior sets." },
        { role: "Agent workflow builders", desc: "Need transparent rules, not black-box agents." },
        { role: "Developers everywhere", desc: "Want reusable Team structures written as code." }
      ].map((item, i) => (
        <div key={i} className="bg-white p-8 border border-ink/5 shadow-sm">
          <div className="text-[10px] font-bold text-honey tracking-[0.2em] uppercase mb-4">{item.role}</div>
          <p className="font-serif text-ink/70 italic text-lg leading-relaxed">"{item.desc}"</p>
        </div>
      ))}
    </div>
  </section>
);

const OpenCodeReady = () => (
  <section className="py-32 max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-serif italic leading-tight mb-8">Built for OpenCode first.</h2>
    <p className="text-xl font-serif text-ink/70 leading-relaxed mb-12">
      CrewBee currently provides a working MVP path for OpenCode: projected agents, config patching, session binding, delegation tooling, and user-level install.
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
      <button className="text-honey font-bold uppercase tracking-[0.2em] text-[10px] flex items-center gap-2 hover:text-ink transition-colors">
        Read installation guide <ArrowRight className="w-3 h-3" />
      </button>
      <button className="text-honey font-bold uppercase tracking-[0.2em] text-[10px] flex items-center gap-2 hover:text-ink transition-colors">
        View OpenCode runtime docs <ArrowRight className="w-3 h-3" />
      </button>
    </div>
  </section>
);

const Faq = () => (
  <section id="docs" className="section-container border-y border-ink/5 bg-paper-warm/20">
    <div className="grid lg:grid-cols-3 gap-16">
      <div className="lg:col-span-1">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] font-sans text-honey mb-6 block">FAQ //</span>
        <h2 className="text-4xl lg:text-5xl mb-8 font-serif italic tracking-tight leading-tight">Clarity <br /> Through <br /> Structure.</h2>
      </div>
      <div className="lg:col-span-2 space-y-12">
        {[
          { q: "Is CrewBee a prompt pack?", a: "No. CrewBee utilizes prompt definitions, but its core primitive is the Engineering Team: leader, members, shared policy, and projection logic." },
          { q: "Why Leader-first architecture?", a: "Because serious engineering requires legible entry points, rigorous context ownership, and a singular point of failure recovery." },
          { q: "Which hosts are supported?", a: "The current reference MVP is built specifically for OpenCode. However, the Protocol layer is host-agnostic and exportable." }
        ].map((faq, i) => (
          <div key={i} className="border-l-[0.5px] border-ink/20 pl-8 pb-4 relative">
            <div className="absolute -left-[4px] top-3 w-2 h-2 rounded-full bg-honey" />
            <h4 className="text-2xl font-serif italic mb-4 text-ink">{faq.q}</h4>
            <p className="text-ink/60 font-serif italic text-lg leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-paper py-20 px-6 border-t border-ink/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-4">
        <BeeIcon className="w-6 h-6 text-ink/40" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40">CrewBeeLab © 2026</span>
      </div>
      <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40">
        <a href="#" className="hover:text-honey transition-colors">GitHub</a>
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
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,155,43,0.10),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.45),transparent_42%)] -z-10 pointer-events-none" />
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
