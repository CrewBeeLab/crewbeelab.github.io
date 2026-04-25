import { Code2, Layers, Terminal } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import type { Copy } from '../i18n/copy';

const stepIcons = [<Code2 className="w-6 h-6 md:w-8 md:h-8" />, <Layers className="w-6 h-6 md:w-8 md:h-8" />, <Terminal className="w-6 h-6 md:w-8 md:h-8" />];

export const HowItWorks = ({ t }: { t: Copy }) => (
  <section id="how-it-works" className="section-container border-b border-ink/5">
    <SectionHeading centered>{t.how.title}</SectionHeading>
    <div className="max-w-6xl mx-auto mt-20 relative">
      <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-px bg-ink/10" />
      <div className="grid md:grid-cols-3 gap-12 relative z-10">
        {t.how.steps.map((item, i) => (
          <div key={item.step} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-paper card-paper flex items-center justify-center text-honey rounded-full mb-6 md:mb-8 shadow-sm">{stepIcons[i]}</div>
            <h4 className="text-2xl md:text-3xl font-serif italic mb-3 md:mb-4 text-ink">{item.step}</h4>
            <p className="text-ink/60 font-serif text-base md:text-lg">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
