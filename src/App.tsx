import { homepageContent } from './i18n/homepageContent';
import { useLanguage } from './hooks/useLanguage';
import { useLocalizedHead } from './hooks/useLocalizedHead';
import { Footer } from './layout/Footer';
import { Navbar } from './layout/Navbar';
import {
  Acknowledgements,
  CodingTeam,
  Faq,
  FirstTask,
  HeroSection,
  HowItWorks,
  OpenCodeMvp,
  ProjectContextRoadmap,
  BuilderAudience,
  StatusBar,
  TeamTemplates,
  ProductHighlights,
  ProductRationale
} from './sections';

export default function App() {
  const { language, toggleLanguage } = useLanguage();
  const content = homepageContent[language];

  useLocalizedHead(language, content);

  return (
    <div className="relative font-sans text-ink selection:bg-honey/30">
      <div className="fixed inset-0 bg-paper -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,155,43,0.10),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.45),transparent_42%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(242,170,42,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_42%)] opacity-[var(--theme-glow-opacity)] transition-opacity duration-500 -z-10 pointer-events-none" />
      <div className="bg-grain" />

      <Navbar content={content} onToggleLanguage={toggleLanguage} />

      <main>
        <div className="min-h-dvh flex flex-col">
          <HeroSection content={content} />
          <StatusBar content={content} />
        </div>
        <ProductRationale content={content} />
        <ProductHighlights content={content} />
        <HowItWorks content={content} />
        <CodingTeam content={content} />
        <FirstTask content={content} />
        <ProjectContextRoadmap content={content} />
        <TeamTemplates content={content} />
        <BuilderAudience content={content} />
        <OpenCodeMvp content={content} />
        <Faq content={content} />
        <Acknowledgements content={content} />
      </main>

      <Footer content={content} />
    </div>
  );
}
