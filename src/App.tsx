import { useEffect, useState } from 'react';
import { homepageContent, type HomepageContent } from './i18n/homepageContent';
import { useLanguage } from './hooks/useLanguage';
import { useLocalizedHead } from './hooks/useLocalizedHead';
import { WorkbenchStatusBar } from './layout/WorkbenchStatusBar';
import { Navbar } from './layout/Navbar';
import {
  Acknowledgements,
  CodingTeam,
  Faq,
  FirstTask,
  HeroSection,
  HowItWorks,
  Installation,
  OpenCodeMvp,
  OpenSourceInspiration,
  ProjectContextRoadmap,
  BuilderAudience,
  StatusBar,
  TeamTemplates,
  WhatWorksToday,
  ProductHighlights,
  ProductRationale
} from './sections';

const getPendingPage = () => {
  if (window.location.hash === '#not-implemented-docs') return 'docs';
  if (window.location.hash === '#not-implemented-workflow') return 'workflow';
  return null;
};

const NotImplementedPage = ({ content, page }: { content: HomepageContent; page: 'docs' | 'workflow' }) => {
  const pageContent = content.notImplemented[page];

  return (
    <main className="min-h-[100svh] px-6 pt-36 md:px-16 md:pt-44">
      <section className="mx-auto flex min-h-[52svh] max-w-3xl flex-col items-center justify-center text-center">
        <span className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-honey">{pageContent.badge} //</span>
        <h1 className="mb-5 text-3xl font-serif leading-[1.08] text-ink md:text-5xl lg:text-[3.35rem]">{pageContent.title}</h1>
        <p className="mb-8 max-w-2xl font-serif text-base leading-[1.68] text-ink/64 md:text-lg">{pageContent.description}</p>
        <a href="#top" className="btn-primary">{pageContent.backHome}</a>
      </section>
    </main>
  );
};

export default function App() {
  const { language, toggleLanguage } = useLanguage();
  const content = homepageContent[language];
  const [pendingPage, setPendingPage] = useState<'docs' | 'workflow' | null>(getPendingPage);

  useLocalizedHead(language, content);

  useEffect(() => {
    const handleHashChange = () => setPendingPage(getPendingPage());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div id="top" className="relative font-sans text-ink selection:bg-honey/30 pb-7">
      <div className="fixed inset-0 bg-paper -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,155,43,0.10),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.45),transparent_42%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(242,170,42,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_42%)] opacity-[var(--theme-glow-opacity)] transition-opacity duration-500 -z-10 pointer-events-none" />
      <div className="bg-grain" />

      <Navbar content={content} onToggleLanguage={toggleLanguage} />

      {pendingPage ? (
        <NotImplementedPage content={content} page={pendingPage} />
      ) : (
      <main>
        <div className="min-h-[calc(100svh-28px)] flex flex-col">
          <HeroSection content={content} />
          <StatusBar content={content} />
        </div>
        <Installation content={content} />
        <ProductRationale content={content} />
        <WhatWorksToday content={content} />
        <HowItWorks content={content} />
        <CodingTeam content={content} />
        <FirstTask content={content} />
        <ProductHighlights content={content} />
        <TeamTemplates content={content} />
        <BuilderAudience content={content} />
        <OpenCodeMvp content={content} />
        <ProjectContextRoadmap content={content} />
        <Faq content={content} />
        <OpenSourceInspiration content={content} />
        <Acknowledgements content={content} />
      </main>
      )}

      <WorkbenchStatusBar content={content} />
    </div>
  );
}
