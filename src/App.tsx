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
          {['Why CrewBee', 'How It Works', 'Teams', 'Docs'].map((item) => (
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

export default function App() {
  return (
    <div className="relative">
      <div className="bg-grain" />
      <Navbar />

      {/* Vertical Rail Text */}
      <div className="fixed left-6 bottom-32 z-40 hidden 2xl:flex flex-col items-center gap-12 pointer-events-none">
        <span className="[writing-mode:vertical-lr] text-[9px] font-bold uppercase tracking-[0.4em] text-ink/20 transform rotate-180">
          Modern Oriental Engineering
        </span>
        <div className="w-px h-32 bg-ink/5" />
      </div>

      <div className="fixed right-6 bottom-32 z-40 hidden 2xl:flex flex-col items-center gap-12 pointer-events-none">
        <div className="w-px h-32 bg-ink/5" />
        <span className="[writing-mode:vertical-lr] text-[9px] font-bold uppercase tracking-[0.4em] text-ink/20">
          Established 2026
        </span>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden max-w-[1400px] mx-auto px-6 md:px-16">
        {/* Background gradient from editorial design */}
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full opacity-[0.05] pointer-events-none" style={{ background: 'radial-gradient(circle, #D99B2B 0%, transparent 70%)' }}></div>
        
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div
            className="md:col-span-12 lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <span className="px-4 py-2 border border-ink/20 text-[10px] uppercase tracking-[0.2em] font-bold text-ink/60">
                V1.0.2 // Built for OpenCode
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-10 font-serif tracking-tight leading-[1]">
              Orchestrate intelligence with <span className="italic text-honey">structural grace.</span>
            </h1>
            <p className="text-2xl opacity-60 mb-16 max-w-lg leading-relaxed italic font-serif">
              An open architecture for deep agent coordination. Define teams, map behaviors, and execute with singular ownership.
            </p>
            
            <div className="flex items-center gap-10">
              <button className="btn-primary">
                Read the Manifesto
              </button>
              <div className="h-px w-16 bg-ink/20 hidden sm:block"></div>
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold whitespace-nowrap">Open Source Framework</span>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-12 lg:col-span-5 relative flex items-center justify-center p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-md">
              <div className="absolute inset-0 editorial-border rounded-full scale-110" />
              <div className="absolute inset-0 editorial-border rounded-full scale-125" />
              
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-honey opacity-20 blur-[80px] transform scale-150" />
                  <BeeIcon className="w-48 h-48 md:w-64 md:h-64 text-ink relative z-20" />
                </div>
              </div>
              
              {/* Editorial Floating Cards */}
              <motion.div 
                className="absolute top-0 -right-4 bg-paper/60 backdrop-blur-md border border-ink/5 p-6 shadow-2xl w-56 z-30 flex flex-col"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex justify-between items-center mb-6 border-b border-ink/5 pb-4">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-sans font-bold text-ink">Team Manifest</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-honey" />
                </div>
                <div className="space-y-3">
                  <div className="h-px bg-ink/10 w-full" />
                  <div className="h-px bg-ink/10 w-3/4" />
                  <div className="h-px bg-honey w-1/2" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Status Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-[1400px] mx-auto px-6 md:px-16 pt-16 pb-16 border-t border-ink/10 bg-white/20">
        <div>
          <h4 className="text-[10px] uppercase font-sans font-bold tracking-[0.2em] mb-4 text-ink/40">01 // Structure</h4>
          <p className="text-lg font-serif italic text-ink/80 leading-relaxed">Leader-first entries for complex delegation.</p>
        </div>
        <div>
          <h4 className="text-[10px] uppercase font-sans font-bold tracking-[0.2em] mb-4 text-ink/40">02 // Portability</h4>
          <p className="text-lg font-serif italic text-ink/80 leading-relaxed">Project into OpenCode, Cursor, or CLI.</p>
        </div>
        <div className="col-span-2 flex flex-col items-center md:items-end justify-center">
          <div className="bg-white/40 p-6 font-mono text-[13px] border border-ink/5 flex items-center gap-6 w-full md:w-auto shadow-sm">
            <span className="opacity-40">$</span>
            <span className="tracking-tight font-bold">npm install -g crewbee</span>
            <button className="ml-4 text-honey font-bold hover:text-honey-soft transition-colors tracking-[0.2em] text-[10px] uppercase" onClick={() => navigator.clipboard.writeText('npm install -g crewbee')}>COPY</button>
          </div>
        </div>
      </div>

      {/* Why CrewBee */}
      <section id="why-crewbee" className="section-container">
        <SectionHeading 
          badge="Problem"
          subtitle="Agent workflows are inherently team-shaped. Yet, their structure remains scattered across configurations."
        >
          The Crisis of Scattered Intelligence
        </SectionHeading>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 editorial-border border-l border-t">
          {[
            {
              title: "Fragmented Roles",
              desc: "Prompts and sub-agent configs live in silos. Impossible to version, maintain, or evaluate as a single intellectual unit.",
              icon: "01"
            },
            {
              title: "Flat Hierarchies",
              desc: "Universal prompts degrade context quickly. Complex fixes require deep delegation, not a menu of flat roles.",
              icon: "02"
            },
            {
              title: "Execution Bias",
              desc: "We decoupled planning from execution too early. The insight of a plan is lost if the executor lacks structural autonomy.",
              icon: "03"
            },
            {
              title: "Process Opacity",
              desc: "Agents that merely report final results deny human oversight. We need mid-flight strategic visibility.",
              icon: "04"
            }
          ].map((item, i) => (
            <div key={i} className="p-10 border-r border-b border-ink/10 group hover:bg-white/40 transition-colors">
              <span className="text-[10px] font-bold text-honey mb-8 block font-sans tracking-[0.2em]">{item.icon} //</span>
              <h3 className="text-2xl mb-4 italic leading-tight">{item.title}</h3>
              <p className="text-ink/60 leading-relaxed font-serif italic text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Flow Section */}
      <section id="how-it-works" className="bg-paper-warm/30 py-48 overflow-hidden">
        <div className="section-container">
          <SectionHeading 
            badge="Architecture"
            subtitle="The logic path from structured definitions to formal leadership."
            centered
          >
            The Protocol Flow
          </SectionHeading>

          <div className="relative mt-20">
            {/* Pipeline Background */}
            <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-px bg-ink/10" />
            
            <div className="grid lg:grid-cols-4 gap-12 relative z-10">
              {[
                { 
                  step: "01",
                  title: "Define Protocol",
                  desc: "Create manifest and agent behavior files as versioned code assets.",
                  files: ["team.manifest.yaml", "*.agent.md"]
                },
                { 
                  step: "02",
                  title: "Project Logic",
                  desc: "Project host-agnostic definitions into the target runtime environment.",
                  files: ["Team Library", "Runtime Projection"]
                },
                { 
                  step: "03",
                  title: "Bind Ownership",
                  desc: "Initialize the formal leader who owns the task and session context.",
                  files: ["Formal Leader", "Active Owner"]
                },
                { 
                  step: "04",
                  title: "Execute Task",
                  desc: "Leader delegates work and implements solutions with clear autonomy.",
                  files: ["Consult / Delegate / Execute"]
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="w-16 h-16 bg-ink text-white flex items-center justify-center font-serif italic text-2xl mb-8 self-start">
                    {item.step}
                  </div>
                  <h4 className="text-3xl italic leading-tight mb-4">{item.title}</h4>
                  <p className="text-ink/60 font-serif italic text-lg leading-relaxed mb-8">{item.desc}</p>
                  <div className="border border-ink/5 bg-white/40 p-6 font-mono text-[10px] text-ink/60 space-y-4 uppercase tracking-[0.1em]">
                    {item.files.map((file, j) => (
                      <div key={j} className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-honey" />
                        {file}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Package */}
      <section id="teams" className="section-container">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-12 mb-12">
            <SectionHeading 
              badge="Protocol"
              subtitle="A Team is more than a prompt. It is a structured package of mission, rules, and behaviors."
            >
              The Team Protocol
            </SectionHeading>
          </div>
          
          <div className="lg:col-span-5 space-y-12">
            {[
              { title: "team.manifest.yaml", desc: "Identity, Formal Leadership, and Runtime Metadata." },
              { title: "team.policy.yaml", desc: "Shared Rules, Approval Delegation, and Quality Floor." },
              { title: "*.agent.md", desc: "Structured Behavior Definitions as first-class code assets." }
            ].map((file, i) => (
              <div key={i} className="flex gap-8 group">
                <span className="text-[10px] font-bold text-honey font-sans tracking-[0.2em] mt-2">0{i + 1} //</span>
                <div>
                  <h5 className="text-2xl font-serif leading-tight italic mb-3">{file.title}</h5>
                  <p className="text-ink/60 text-lg font-serif italic leading-relaxed">{file.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white/40 border border-ink/10 p-1 font-serif italic shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-honey/5 blur-3xl pointer-events-none" />
              <div className="border border-ink/5 p-12 bg-white/60">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-ink/10">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-honey">Package Structure // CodingTeam</span>
                  <div className="flex gap-2 text-ink/20">
                    <Workflow className="w-4 h-4" />
                  </div>
                </div>
                <div className="space-y-6 font-mono text-sm text-ink/60">
                   <div className="flex items-center gap-6"><div className="w-2 h-px bg-honey" /> team.manifest.yaml</div>
                   <div className="flex items-center gap-6"><div className="w-2 h-px bg-honey" /> team.policy.yaml</div>
                   <div className="flex items-center gap-6"><div className="w-2 h-px bg-honey" /> leader.agent.md</div>
                   <div className="flex items-center gap-6"><div className="w-2 h-px bg-honey" /> advisor.agent.md</div>
                   <div className="h-px bg-ink/10 w-full my-8" />
                   <div className="italic text-ink/40">Structured assets only. No loose strings.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Coding Team Section */}
      <section className="bg-ink text-white py-48 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-honey/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7">
              <SectionHeading 
                badge="Archetype"
                subtitle="Coding Team: owner-centered, review-backed. Context stays coupled for precision."
              >
                The Coding Model
              </SectionHeading>

              <div className="grid md:grid-cols-2 gap-10 mt-16 font-serif italic text-lg opacity-80 leading-relaxed border-t border-white/10 pt-10">
                <p>
                  CrewBee rejects the forced split of Orchestrator and Executor. For complex software engineering, 
                  <span className="text-honey font-bold"> strategic planning and technical execution must remain coupled.</span>
                </p>
                <div className="space-y-8">
                  <div className="border-l border-honey/40 pl-6">
                    <h4 className="text-white font-sans font-bold text-[10px] uppercase tracking-[0.2em] mb-2 text-honey">Active Owner</h4>
                    <p className="text-white/60">The leader maintains deep codebase context and implements the solution.</p>
                  </div>
                  <div className="border-l border-white/10 pl-6">
                    <h4 className="text-white font-sans font-bold text-[10px] uppercase tracking-[0.2em] mb-2 opacity-30">Reviewer Agent</h4>
                    <p className="text-white/60">Verifies logic, audits security, and ensures strict quality gates are met.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center">
               <div className="w-full aspect-square border border-white/5 bg-white/[0.02] p-12 flex items-center justify-center relative">
                  <div className="absolute inset-0 editorial-border rounded-full scale-75 opacity-5" />
                  
                  {/* Central Node */}
                  <div className="relative z-20">
                     <div className="w-32 h-32 border border-honey flex items-center justify-center bg-ink">
                        <div className="text-center">
                           <div className="text-[10px] text-honey font-bold uppercase tracking-tighter mb-1">Leader</div>
                           <div className="text-lg font-serif italic">Owner</div>
                        </div>
                     </div>
                  </div>

                  {/* Nodes */}
                  <div className="absolute top-12 left-12 w-20 h-20 border border-white/10 flex items-center justify-center text-[10px] uppercase font-bold tracking-widest opacity-40">Explorer</div>
                  <div className="absolute bottom-12 right-12 w-20 h-20 border border-white/10 flex items-center justify-center text-[10px] uppercase font-bold tracking-widest opacity-40">Reviewer</div>
                  <div className="absolute top-1/2 right-4 w-12 h-12 border border-white/10 flex items-center justify-center text-[10px] uppercase font-bold tracking-widest opacity-20 -translate-y-1/2">Doc</div>
                  
                  {/* Lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
                     <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="white" strokeWidth="0.5" />
                     <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="white" strokeWidth="0.5" />
                     <line x1="85%" y1="50%" x2="50%" y2="50%" stroke="white" strokeWidth="0.5" />
                  </svg>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-container border-t border-ink/5 bg-white/20">
        <SectionHeading 
          badge="Audit"
          subtitle="CrewBee defines the structure. Runtimes execute the work."
          centered
        >
          Structural Comparison
        </SectionHeading>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-t border-ink">
            <thead>
              <tr className="border-b-2 border-ink">
                <th className="py-6 pr-8 font-sans font-bold text-xs uppercase tracking-[0.2em] opacity-40">Attribute</th>
                <th className="py-6 pr-8 font-sans font-bold text-[10px] uppercase tracking-[0.2em]">Legacy Approach</th>
                <th className="py-6 pr-8 font-sans font-bold text-[10px] uppercase tracking-[0.2em]">The Issue</th>
                <th className="py-6 font-sans font-bold text-[10px] uppercase tracking-[0.2em] text-honey">CrewBee Philosophy</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-ink/5 hover:bg-white/40 transition-colors">
                <td className="py-10 pr-8 font-bold uppercase tracking-[0.2em] text-[10px] opacity-60">Format</td>
                <td className="py-10 pr-8 font-serif italic text-lg opacity-80">Unstructured Texts</td>
                <td className="py-10 pr-8 font-serif italic text-lg opacity-80">Hard to Version</td>
                <td className="py-10 font-bold italic text-lg text-ink">First-class Team Assets</td>
              </tr>
              <tr className="border-b border-ink/5 hover:bg-white/40 transition-colors">
                <td className="py-10 pr-8 font-bold uppercase tracking-[0.2em] text-[10px] opacity-60">Topology</td>
                <td className="py-10 pr-8 font-serif italic text-lg opacity-80">Flat List of Agents</td>
                <td className="py-10 pr-8 font-serif italic text-lg opacity-80">Context Dilution</td>
                <td className="py-10 font-bold italic text-lg text-ink">Strict Hierarchical Delegation</td>
              </tr>
              <tr className="border-b border-ink/5 hover:bg-white/40 transition-colors">
                <td className="py-10 pr-8 font-bold uppercase tracking-[0.2em] text-[10px] opacity-60">Coupling</td>
                <td className="py-10 pr-8 font-serif italic text-lg opacity-80">Runtime-locked Prompts</td>
                <td className="py-10 pr-8 font-serif italic text-lg opacity-80">Platform Dependency</td>
                <td className="py-10 font-bold italic text-lg text-ink">Host-Agnostic Projection</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Installation Section */}
      <section id="install" className="bg-paper-warm/20 py-48">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <SectionHeading 
                badge="Deployment"
                subtitle="Install CrewBee at the user-level once, and use it across all projects."
              >
                Local Installation
              </SectionHeading>
              
              <div className="space-y-8">
                {[
                  { title: "Universal Access", desc: "Single local install for all projected agents." },
                  { title: "Protocol Health", desc: "Built-in doctor tool for configuration audits." },
                  { title: "Versioned Autonomy", desc: "Keep teams pinned to specific logic versions." }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                     <div className="w-1.5 h-1.5 rounded-full bg-honey" />
                     <p className="text-xl font-serif italic text-ink/60 group-hover:text-ink transition-colors">{item.title} — {item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-ink p-16 text-honey-soft font-mono text-sm leading-relaxed rounded-none relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-honey/5 blur-3xl pointer-events-none" />
                <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-6">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] font-sans text-honey opacity-60">Global CLI // crewbee-dev</span>
                  <Terminal className="w-5 h-5 text-honey opacity-60" />
                </div>
                <div className="space-y-8">
                  <div className="group cursor-default flex items-center justify-between pb-4">
                    <div className="flex items-center">
                      <span className="text-white/20 mr-6 w-4 text-[10px] font-sans">01</span>
                      <span className="text-paper/90 tracking-wide">npm install -g crewbee</span>
                    </div>
                    <button 
                      className="text-[9px] bg-white/5 px-4 py-2 hover:bg-honey hover:text-ink transition-colors uppercase font-bold tracking-[0.2em]"
                      onClick={() => navigator.clipboard.writeText('npm install -g crewbee')}
                    >Copy</button>
                  </div>
                  <div className="flex items-center pb-4 opacity-40">
                    <span className="text-white/20 mr-6 w-4 text-[10px] font-sans">02</span>
                    <span className="text-paper/90 italic font-serif text-lg leading-none mt-1">crewbee install</span>
                  </div>
                  <div className="flex items-center pb-4 opacity-40">
                    <span className="text-white/20 mr-6 w-4 text-[10px] font-sans">03</span>
                    <span className="text-paper/90 italic font-serif text-lg leading-none mt-1">crewbee doctor</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="docs" className="section-container border-b border-ink/5">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] font-sans text-honey mb-6 block">FAQ //</span>
            <h2 className="text-4xl lg:text-5xl mb-8 font-serif italic tracking-tight leading-tight">Clarity <br /> Through <br /> Structure.</h2>
            <p className="text-ink/60 mb-10 max-w-xs font-serif italic text-lg leading-relaxed">Everything you need to know about the Team-first approach.</p>
            <button className="btn-secondary flex items-center gap-4 group uppercase">
              Read the Docs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="lg:col-span-2 space-y-12 pt-0 lg:pt-16">
            {[
              { q: "Is CrewBee a prompt pack?", a: "No. CrewBee utilizes prompt definitions, but its core primitive is the Engineering Team: leader, members, shared policy, and projection logic. It replaces loose text with structured, versionable assets." },
              { q: "Why Leader-first architecture?", a: "Because serious engineering requires legible entry points, rigorous context ownership, and a singular point of failure recovery. Flat un-hierarchical lists of agents confuse both human engineers and the models themselves." },
              { q: "Which hosts are supported?", a: "The current reference MVP is built specifically for OpenCode. However, the Protocol layer (Team and Agent definitions) is strictly host-agnostic and portable to any environment." }
            ].map((faq, i) => (
              <div key={i} className="border-l-[0.5px] border-ink/20 pl-8 pb-4 relative">
                <div className="absolute -left-[5px] top-3 w-2.5 h-px bg-honey" />
                <h4 className="text-2xl font-serif italic mb-4 text-ink">{faq.q}</h4>
                <p className="text-ink/60 font-serif italic text-lg leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="section-container relative overflow-hidden">
        <div className="relative z-10 w-full">
          <SectionHeading 
            badge="Future"
            centered
            subtitle="The roadmap towards managed execution and ecosystem expansion."
          >
            Development Phases
          </SectionHeading>

          <div className="grid md:grid-cols-3 gap-0 border-l border-t border-ink/10 mt-16 text-left">
            {[
              {
                phase: "Current",
                title: "Protocol MVP",
                items: ["Manifest Logic", "Projection Engine", "OpenCode Adapter"]
              },
              {
                phase: "Near",
                title: "Process Visibility",
                items: ["Active Task Viz", "Process Debugger", "Context Snapshots"]
              },
              {
                phase: "Future",
                title: "Team Registry",
                items: ["Asset Market", "Versioned Logic", "Cross-host Sync"]
              }
            ].map((phase, i) => (
              <div key={phase.title} className="p-12 border-r border-b border-ink/10 hover:bg-white/40 transition-colors relative">
                {i === 0 && <div className="absolute top-6 right-6 text-[8px] font-bold px-2 py-0.5 border border-honey text-honey uppercase tracking-[0.2em]">Active</div>}
                <span className="text-honey text-[10px] font-sans font-bold uppercase tracking-[0.2em] mb-6 block">Phase 0{i + 1} //</span>
                <h3 className="text-3xl italic mb-10">{phase.title}</h3>
                <ul className="space-y-4">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-center gap-4 text-ink/60 font-serif italic text-lg hover:text-ink transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-honey" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="section-container border-y border-ink/5">
        <div className="bg-white/40 border border-ink/5 p-16 relative shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-honey/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="relative z-10 grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl lg:text-5xl mb-8 font-serif leading-tight">Crafted by Hand. <br/> Projected for All.</h2>
              <p className="text-ink/60 font-serif italic text-xl leading-relaxed mb-10 max-w-sm">
                CrewBee is an open architecture. Join the discourse, contribute host adapters, or propose new Team models.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="btn-primary">View on GitHub</button>
                <button className="btn-secondary">Technical Docs</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-ink/5">
              {[
                { label: "License", val: "MIT" },
                { label: "Stability", val: "v0.1.2" },
                { label: "Format", val: "TS / YAML" },
                { label: "Ref Host", val: "OpenCode" }
              ].map((stat) => (
                <div key={stat.label} className="bg-paper p-10 text-center hover:bg-white/50 transition-colors">
                  <div className="text-3xl font-serif italic mb-2 text-ink">{stat.val}</div>
                  <div className="text-[9px] uppercase font-bold tracking-[0.2em] text-ink/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-container text-center py-48">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="w-px h-24 bg-honey/40 mx-auto mb-16" />
          <h2 className="text-4xl md:text-5xl italic font-serif leading-tight mb-12">
            "AI should extend human intelligence, not replace human responsibility."
          </h2>
          <p className="text-ink/40 uppercase tracking-[0.3em] font-bold font-sans text-[10px]">
            The CrewBee Core Principle
          </p>
        </motion.div>
      </section>

      <footer className="bg-paper border-t border-ink/5 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-5">
              <div className="flex items-center gap-4 mb-8">
                 <BeeIcon className="w-8 h-8 text-ink" />
                 <span className="text-[14px] font-sans font-bold tracking-[0.2em] uppercase mt-1">CrewBee</span>
              </div>
              <p className="text-xl font-serif italic text-ink/40 max-w-sm leading-relaxed mb-10">
                A Team-first architecture for the next age of structured artificial intelligence.
              </p>
              <div className="flex gap-4">
                 <a href="#" className="w-10 h-10 border border-ink/10 flex items-center justify-center hover:bg-ink hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
                 <a href="#" className="w-10 h-10 border border-ink/10 flex items-center justify-center hover:bg-ink hover:text-white transition-colors"><MessageSquare className="w-4 h-4" /></a>
              </div>
            </div>
            
            <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <h5 className="text-[9px] uppercase font-bold tracking-[0.2em] mb-8 text-ink/30">The Project</h5>
                <ul className="space-y-4 font-serif italic text-lg text-ink/70">
                  <li><a href="#" className="hover:text-honey hover:pl-2 transition-all">Manifesto</a></li>
                  <li><a href="#" className="hover:text-honey hover:pl-2 transition-all">Roadmap</a></li>
                  <li><a href="#" className="hover:text-honey hover:pl-2 transition-all">Governance</a></li>
                </ul>
              </div>
              <div>
                <h5 className="text-[9px] uppercase font-bold tracking-[0.2em] mb-8 text-ink/30">Resources</h5>
                <ul className="space-y-4 font-serif italic text-lg text-ink/70">
                  <li><a href="#" className="hover:text-honey hover:pl-2 transition-all">Documentation</a></li>
                  <li><a href="#" className="hover:text-honey hover:pl-2 transition-all">Host Adapters</a></li>
                  <li><a href="#" className="hover:text-honey hover:pl-2 transition-all">Open Source</a></li>
                </ul>
              </div>
              <div>
                <h5 className="text-[9px] uppercase font-bold tracking-[0.2em] mb-8 text-ink/30">Collaborate</h5>
                <ul className="space-y-4 font-serif italic text-lg text-ink/70">
                  <li><a href="#" className="hover:text-honey hover:pl-2 transition-all">GitHub</a></li>
                  <li><a href="#" className="hover:text-honey hover:pl-2 transition-all">Discord</a></li>
                  <li><a href="#" className="hover:text-honey hover:pl-2 transition-all">Showcase</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-ink/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-20">© 2026 CrewBeeLab // Distributed via OpenCode</span>
            <div className="flex gap-12 text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">
               <a href="#" className="hover:text-honey">Privacy</a>
               <a href="#" className="hover:text-honey">Terms</a>
               <a href="#" className="hover:text-honey">MIT License</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
