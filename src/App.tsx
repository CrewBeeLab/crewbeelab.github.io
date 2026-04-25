import { copy } from './i18n/copy';
import { useLanguage } from './hooks/useLanguage';
import { useLocalizedHead } from './hooks/useLocalizedHead';
import { Footer } from './layout/Footer';
import { Navbar } from './layout/Navbar';
import {
  Faq,
  HeroSection,
  HowItWorks,
  OpenCodeReady,
  SocialProof,
  StatusBar,
  TeamFirstModel,
  WhatYouCanDo,
  WhyItExists
} from './sections';

export default function App() {
  const { language, toggleLanguage } = useLanguage();
  const t = copy[language];

  useLocalizedHead(language, t);

  return (
    <div className="relative font-sans text-ink selection:bg-honey/30">
      <div className="fixed inset-0 bg-paper -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,155,43,0.10),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.45),transparent_42%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(242,170,42,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_42%)] opacity-[var(--theme-glow-opacity)] transition-opacity duration-500 -z-10 pointer-events-none" />
      <div className="bg-grain" />

      <Navbar t={t} onToggleLanguage={toggleLanguage} />

      <main>
        <HeroSection t={t} />
        <StatusBar t={t} />
        <WhatYouCanDo t={t} />
        <WhyItExists t={t} />
        <HowItWorks t={t} />
        <TeamFirstModel t={t} />
        <SocialProof t={t} />
        <OpenCodeReady t={t} />
        <Faq t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
}
