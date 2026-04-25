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
const SITE_URL = 'https://crewbeelab.github.io/';
const LANGUAGE_STORAGE_KEY = 'crewbee-language';
const ZH_PATH_PREFIX = '/zh/';

type Language = 'en' | 'zh';

const languageConfig: Record<Language, { htmlLang: string; ogLocale: string; alternateLabel: string }> = {
  en: { htmlLang: 'en', ogLocale: 'en_US', alternateLabel: 'English' },
  zh: { htmlLang: 'zh-CN', ogLocale: 'zh_CN', alternateLabel: '简体中文' }
};

const isLanguage = (value: string | null): value is Language => value === 'en' || value === 'zh';

const getLocalizedUrl = (language: Language) => {
  return new URL(language === 'zh' ? ZH_PATH_PREFIX : '/', SITE_URL).toString();
};

const getInitialLanguage = (): Language => {
  if (window.location.pathname === '/zh' || window.location.pathname.startsWith(ZH_PATH_PREFIX)) {
    return 'zh';
  }

  const searchLanguage = new URLSearchParams(window.location.search).get('lang');
  if (isLanguage(searchLanguage)) {
    return searchLanguage;
  }

  const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (isLanguage(storedLanguage)) {
    return storedLanguage;
  }

  return 'zh';
};

const upsertMeta = (selector: string, attributes: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
};

const upsertLink = (hreflang: string, href: string, label?: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${hreflang}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'alternate');
    element.setAttribute('hreflang', hreflang);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
  if (label) {
    element.setAttribute('title', label);
  }
};

const upsertCanonical = (href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
};

const navItems = [
  { href: '#features', key: 'features' },
  { href: '#why-crewbee', key: 'why' },
  { href: '#how-it-works', key: 'how' },
  { href: '#teams', key: 'teams' },
  { href: '#docs', key: 'docs' }
] as const;

const copy = {
  en: {
    siteTitle: 'CrewBee | Team-first Agent Teams',
    siteDescription: 'CrewBee is a Team-first Agent Team framework for OpenCode. Define Teams, pick a Leader, and run structured agent workflows in the host you already use.',
    nav: {
      features: 'Features',
      why: 'Why CrewBee',
      how: 'How It Works',
      teams: 'Teams',
      docs: 'Docs',
      github: 'GitHub ↗',
      installCli: 'Install CLI',
      toggleTheme: 'Toggle dark mode',
      toggleMenu: 'Toggle navigation menu',
      switchLanguage: '中文',
      switchLanguageLabel: 'Switch language'
    },
    hero: {
      titlePrefix: 'Turn scattered agents into',
      titleHighlight: 'real teams.',
      description: 'CrewBee is a Team-first Agent Team framework for OpenCode. Define Teams, pick a Leader, and run structured agent workflows in the host you already use.',
      bullets: ['Not a prompt pack.', 'Not a flat agent list.', 'Not another giant runtime.'],
      getStarted: 'Get Started',
      viewGithub: 'View on GitHub',
      floating: ['Define Team', 'Pick Leader', 'Run in OpenCode']
    },
    status: ['OpenCode MVP Ready', 'Team-first Definitions', 'Runtime Projection', 'Delegation Tooling', 'User-level Install', 'Open Source'],
    features: {
      title: 'What you can do with CrewBee',
      subtitle: 'Define once. Run anywhere.',
      cards: [
        { title: 'Define a Team', desc: 'Turn your working style into a reusable Agent Team.' },
        { title: 'Pick a Leader', desc: 'Start from one clear entry point instead of a flat role menu.' },
        { title: 'Delegate with Structure', desc: 'Let the Leader consult, delegate, review, and summarize.' },
        { title: 'Run in OpenCode', desc: 'Use CrewBee-projected agents in your existing OpenCode workflow.' }
      ]
    },
    why: {
      titleBeforeBreak: 'Agent workflows already look like teams.',
      titleAfterBreak: 'The structure is just scattered.',
      paragraphs: [
        'Most agent workflows already have a default entry point, different roles, shared rules, and a preferred execution style.',
        'But the structure often lives across prompts, host configs, and personal habits.'
      ],
      emphasis: 'CrewBee makes that structure explicit, reusable, and runnable.'
    },
    how: {
      title: 'How It Works',
      steps: [
        { step: 'Define', desc: 'Write Team and Agent files.' },
        { step: 'Project', desc: 'CrewBee turns them into host-ready agents.' },
        { step: 'Run', desc: 'Use them in OpenCode with Leader-first delegation.' }
      ]
    },
    team: {
      badge: 'Archetype',
      title: 'The Team-first Model',
      paragraphs: [
        'A Team is not just a prompt. It has a leader, members, shared rules, and reusable Agent profiles.',
        'Everything lives together in a clean package, version-controlled alongside your code.'
      ]
    },
    builders: {
      title: 'For the Builders',
      subtitle: 'Built for people who already maintain agent workflows by hand.',
      cards: [
        { role: 'OpenCode power users', desc: 'Want to run complex delegation workflows natively.' },
        { role: 'Prompt pack maintainers', desc: 'Need a way to version and share structured behavior sets.' },
        { role: 'Agent workflow builders', desc: 'Need transparent rules, not black-box agents.' },
        { role: 'Developers everywhere', desc: 'Want reusable Team structures written as code.' }
      ]
    },
    opencode: {
      title: 'Built for OpenCode first.',
      description: 'CrewBee currently provides a working MVP path for OpenCode: projected agents, config patching, session binding, delegation tooling, and user-level install.',
      links: ['Read installation guide', 'View OpenCode runtime docs']
    },
    faq: {
      badge: 'FAQ',
      heading: ['Clarity', 'Through', 'Structure.'],
      items: [
        { q: 'Is CrewBee a prompt pack?', a: 'No. CrewBee utilizes prompt definitions, but its core primitive is the Engineering Team: leader, members, shared policy, and projection logic.' },
        { q: 'Why Leader-first architecture?', a: 'Because serious engineering requires legible entry points, rigorous context ownership, and a singular point of failure recovery.' },
        { q: 'Which hosts are supported?', a: 'The current reference MVP is built specifically for OpenCode. However, the Protocol layer is host-agnostic and exportable.' }
      ]
    },
    footer: {
      docs: 'Docs',
      license: 'License'
    }
  },
  zh: {
    siteTitle: 'CrewBee | 团队优先的智能体团队',
    siteDescription: 'CrewBee 是一个面向 OpenCode 的团队优先 Agent Team 框架。定义团队、选择 Leader，并在你已经使用的宿主中运行结构化的智能体工作流。',
    nav: {
      features: '功能',
      why: '为什么选择 CrewBee',
      how: '工作方式',
      teams: '团队',
      docs: '文档',
      github: 'GitHub ↗',
      installCli: '安装 CLI',
      toggleTheme: '切换深色模式',
      toggleMenu: '切换导航菜单',
      switchLanguage: 'EN',
      switchLanguageLabel: '切换语言'
    },
    hero: {
      titlePrefix: '把分散的智能体变成',
      titleHighlight: '真正的团队。',
      description: 'CrewBee 是一个面向 OpenCode 的团队优先 Agent Team 框架。定义团队、选择 Leader，并在你已经使用的宿主中运行结构化的智能体工作流。',
      bullets: ['不是提示词包。', '不是扁平的智能体列表。', '不是另一个庞大的运行时。'],
      getStarted: '开始使用',
      viewGithub: '在 GitHub 上查看',
      floating: ['定义团队', '选择 Leader', '在 OpenCode 中运行']
    },
    status: ['OpenCode MVP 就绪', '团队优先定义', '运行时投射', '委派工具链', '用户级安装', '开源'],
    features: {
      title: '你可以用 CrewBee 做什么',
      subtitle: '一次定义，到处运行。',
      cards: [
        { title: '定义一个团队', desc: '把你的工作方式变成可复用的 Agent Team。' },
        { title: '选择一个 Leader', desc: '从清晰的入口开始，而不是在扁平角色菜单中选择。' },
        { title: '结构化委派', desc: '让 Leader 负责咨询、委派、评审和总结。' },
        { title: '在 OpenCode 中运行', desc: '在你现有的 OpenCode 工作流中使用 CrewBee 投射出的智能体。' }
      ]
    },
    why: {
      titleBeforeBreak: '智能体工作流本来就像团队。',
      titleAfterBreak: '只是结构还散落各处。',
      paragraphs: [
        '大多数智能体工作流已经有默认入口、不同角色、共享规则和偏好的执行方式。',
        '但这些结构往往散落在提示词、宿主配置和个人习惯中。'
      ],
      emphasis: 'CrewBee 让这些结构变得显式、可复用、可运行。'
    },
    how: {
      title: '工作方式',
      steps: [
        { step: '定义', desc: '编写 Team 和 Agent 文件。' },
        { step: '投射', desc: 'CrewBee 将它们转换为宿主可用的智能体。' },
        { step: '运行', desc: '在 OpenCode 中以 Leader 优先的方式委派协作。' }
      ]
    },
    team: {
      badge: '原型',
      title: '团队优先模型',
      paragraphs: [
        'Team 不只是一个提示词。它包含 Leader、成员、共享规则和可复用的 Agent 配置。',
        '所有内容都放在一个清晰的包中，并与你的代码一起进行版本管理。'
      ]
    },
    builders: {
      title: '为构建者而生',
      subtitle: '面向那些已经手动维护智能体工作流的人。',
      cards: [
        { role: 'OpenCode 重度用户', desc: '希望原生运行复杂的委派工作流。' },
        { role: '提示词包维护者', desc: '需要一种方式来版本化和共享结构化行为集合。' },
        { role: '智能体工作流构建者', desc: '需要透明的规则，而不是黑盒智能体。' },
        { role: '所有开发者', desc: '希望用代码编写可复用的团队结构。' }
      ]
    },
    opencode: {
      title: '优先为 OpenCode 构建。',
      description: 'CrewBee 当前为 OpenCode 提供了一条可用的 MVP 路径：投射智能体、修补配置、绑定会话、委派工具链以及用户级安装。',
      links: ['阅读安装指南', '查看 OpenCode 运行时文档']
    },
    faq: {
      badge: '常见问题',
      heading: ['清晰性', '来自', '结构。'],
      items: [
        { q: 'CrewBee 是提示词包吗？', a: '不是。CrewBee 会使用提示词定义，但它的核心原语是工程团队：Leader、成员、共享策略和投射逻辑。' },
        { q: '为什么采用 Leader 优先架构？', a: '因为严肃工程需要清晰入口、严格的上下文 ownership，以及单一的失败恢复责任点。' },
        { q: '支持哪些宿主？', a: '当前参考 MVP 专为 OpenCode 构建。不过 Protocol 层与宿主无关，可以导出到其他环境。' }
      ]
    },
    footer: {
      docs: '文档',
      license: '许可证'
    }
  }
} as const;

type Copy = typeof copy.en;

const BeeIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
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

const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = languageConfig[language].htmlLang;
    document.documentElement.dir = 'ltr';
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);

    const nextUrl = new URL(window.location.href);
    nextUrl.pathname = language === 'zh' ? ZH_PATH_PREFIX : '/';
    nextUrl.searchParams.delete('lang');

    const nextPath = `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;
    const currentPath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    if (nextPath !== currentPath) {
      window.history.replaceState({}, '', nextPath);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((current) => {
      const next = current === 'en' ? 'zh' : 'en';
      return next;
    });
  };

  return { language, toggleLanguage };
};

const LanguageSwitch = ({ label, ariaLabel, onClick }: { label: string; ariaLabel: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="px-3 py-2 border border-ink/10 rounded-full text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-ink/50 hover:text-ink hover:bg-surface transition-colors"
    aria-label={ariaLabel}
    aria-pressed="false"
  >
    {label}
  </button>
);

const Navbar = ({ t, onToggleLanguage }: { t: Copy; onToggleLanguage: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggle } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileLanguageToggle = () => {
    onToggleLanguage();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-paper/90 backdrop-blur-md border-b border-ink/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4 group cursor-pointer">
          <BeeIcon className="w-8 h-8 text-ink" />
          <span className="text-[14px] font-sans font-bold tracking-[0.2em] uppercase mt-1">CrewBee</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-ink/50 hover:text-ink transition-colors duration-200"
            >
              {t.nav[item.key]}
            </a>
          ))}
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-honey hover:text-honey-soft transition-colors">
            {t.nav.github}
          </a>
          <LanguageSwitch label={t.nav.switchLanguage} ariaLabel={t.nav.switchLanguageLabel} onClick={onToggleLanguage} />
          <button
            onClick={toggle}
            className="p-2 rounded-full hover:bg-surface transition-colors text-ink/50 hover:text-ink"
            aria-label={t.nav.toggleTheme}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button className="bg-ink text-paper px-6 py-3 border border-ink text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-paper hover:text-ink transition-all">{t.nav.installCli}</button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitch label={t.nav.switchLanguage} ariaLabel={t.nav.switchLanguageLabel} onClick={onToggleLanguage} />
          <button
            onClick={toggle}
            className="p-2 rounded-full hover:bg-surface transition-colors text-ink/50 hover:text-ink"
            aria-label={t.nav.toggleTheme}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button aria-label={t.nav.toggleMenu} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-paper border-b border-ink/5 p-6 flex flex-col gap-6 max-h-[80vh] overflow-y-auto shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xs font-bold uppercase tracking-widest text-ink hover:text-honey transition-colors"
                >
                  {t.nav[item.key]}
                </a>
              ))}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs font-bold uppercase tracking-widest text-honey"
              >
                {t.nav.github}
              </a>
              <button onClick={handleMobileLanguageToggle} className="text-xs font-bold uppercase tracking-widest text-ink hover:text-honey transition-colors text-left">
                {t.nav.switchLanguage}
              </button>
            </div>
            <button className="bg-ink text-paper px-6 py-4 border border-ink text-xs uppercase font-bold tracking-[0.2em] hover:bg-paper hover:text-ink transition-all mt-4 w-full">{t.nav.installCli}</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ children, badge, subtitle, centered = false }: { children: React.ReactNode; badge?: string; subtitle?: string; centered?: boolean }) => (
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

const HeroSection = ({ t }: { t: Copy }) => (
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
          {t.hero.titlePrefix} <span className="italic text-honey">{t.hero.titleHighlight}</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl opacity-70 mb-8 md:mb-10 max-w-xl leading-relaxed font-serif">
          {t.hero.description}
        </p>

        <div className="space-y-3 md:space-y-4 mb-10 md:mb-12 font-sans text-xs md:text-sm tracking-wide opacity-80">
          {t.hero.bullets.map((item) => (
            <div key={item} className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-honey shrink-0" /> {item}</div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 sm:gap-6">
          <a href={GET_STARTED_URL} className="btn-primary text-center">
            {t.hero.getStarted}
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn-secondary flex items-center justify-center gap-2">
            <Github className="w-4 h-4" /> {t.hero.viewGithub}
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

          <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-4 sm:top-10 -left-4 sm:left-0 bg-paper/80 backdrop-blur-md border border-ink/10 p-2 sm:p-3 shadow-xl z-30">
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] whitespace-nowrap">{t.hero.floating[0]}</span>
          </motion.div>
          <motion.div animate={{ y: [5, -5, 5] }} transition={{ duration: 5, repeat: Infinity }} className="absolute bottom-4 sm:bottom-10 -right-8 sm:-right-4 bg-paper/80 backdrop-blur-md border border-ink/10 p-2 sm:p-3 shadow-xl z-30">
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-honey whitespace-nowrap">{t.hero.floating[1]}</span>
          </motion.div>
          <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/2 -left-10 sm:-left-8 bg-paper/80 backdrop-blur-md border border-ink/10 p-2 sm:p-3 shadow-xl z-30 hidden sm:block">
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] whitespace-nowrap">{t.hero.floating[2]}</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const StatusBar = ({ t }: { t: Copy }) => (
  <div className="border-y border-ink/5 bg-surface py-6 overflow-hidden flex whitespace-nowrap w-full">
    <div className="animate-marquee flex gap-24 items-center pl-24 pr-12 text-[10px] uppercase font-bold tracking-[0.2em] opacity-40 min-w-max">
      {[...t.status, ...t.status].map((item, index) => (
        <span key={`${item}-${index}`} className={index % t.status.length === 0 ? 'flex items-center gap-2' : undefined}>
          {index % t.status.length === 0 && <div className="w-1.5 h-1.5 rounded-full bg-honey" />}
          {item}
        </span>
      ))}
    </div>
  </div>
);

const WhatYouCanDo = ({ t }: { t: Copy }) => (
  <section id="features" className="section-container">
    <SectionHeading centered subtitle={t.features.subtitle}>{t.features.title}</SectionHeading>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
      {t.features.cards.map((item, i) => (
        <div key={item.title} className="card-paper p-8 md:p-10 flex flex-col items-start text-left relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-honey/5 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-150 duration-700" />
          <span className="text-[10px] font-bold text-honey mb-6 md:mb-8 block tracking-[0.2em] font-sans">0{i + 1}</span>
          <h3 className="text-xl md:text-2xl mb-3 md:mb-4 italic font-serif leading-tight">{item.title}</h3>
          <p className="text-ink/60 font-serif leading-relaxed text-base md:text-lg">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const WhyItExists = ({ t }: { t: Copy }) => (
  <section id="why-crewbee" className="py-24 md:py-32 lg:py-48 bg-paper-warm/40 border-y border-ink/5 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-honey/5 via-transparent to-transparent pointer-events-none" />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto px-6 text-center relative z-10"
    >
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic leading-[1.1] mb-8 md:mb-12 text-ink">
        {t.why.titleBeforeBreak} <br className="hidden md:block" /> {t.why.titleAfterBreak}
      </h2>
      <p className="text-lg md:text-xl font-serif text-ink/70 leading-relaxed mb-6">
        {t.why.paragraphs[0]}
      </p>
      <p className="text-lg md:text-xl font-serif text-ink/70 leading-relaxed mb-8">
        {t.why.paragraphs[1]}
      </p>
      <p className="text-xl md:text-2xl font-serif font-bold italic text-ink leading-relaxed">
        {t.why.emphasis}
      </p>
    </motion.div>
  </section>
);

const HowItWorks = ({ t }: { t: Copy }) => (
  <section id="how-it-works" className="section-container border-b border-ink/5">
    <SectionHeading centered>{t.how.title}</SectionHeading>
    <div className="max-w-6xl mx-auto mt-20 relative">
      <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-px bg-ink/10" />
      <div className="grid md:grid-cols-3 gap-12 relative z-10">
        {t.how.steps.map((item, i) => {
          const icons = [<Code2 className="w-6 h-6 md:w-8 md:h-8" />, <Layers className="w-6 h-6 md:w-8 md:h-8" />, <Terminal className="w-6 h-6 md:w-8 md:h-8" />];
          return (
            <div key={item.step} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-paper card-paper flex items-center justify-center text-honey rounded-full mb-6 md:mb-8 shadow-sm">
                {icons[i]}
              </div>
              <h4 className="text-2xl md:text-3xl font-serif italic mb-3 md:mb-4 text-ink">{item.step}</h4>
              <p className="text-ink/60 font-serif text-base md:text-lg">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const TeamFirstModel = ({ t }: { t: Copy }) => (
  <section id="teams" className="bg-ink text-paper py-24 md:py-32 lg:py-48 px-6">
    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="inline-block text-[10px] uppercase font-sans font-bold tracking-[0.2em] text-honey mb-4 md:mb-6">
          {t.team.badge} //
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic leading-[1.1] mb-6 md:mb-8 text-paper">{t.team.title}</h2>
        <p className="text-lg md:text-2xl font-serif text-paper/70 leading-relaxed mb-6 md:mb-8">
          {t.team.paragraphs[0]}
        </p>
        <p className="text-base md:text-lg font-serif text-paper/50 leading-relaxed">
          {t.team.paragraphs[1]}
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

const SocialProof = ({ t }: { t: Copy }) => (
  <section className="section-container bg-paper-warm/30 border-b border-ink/5">
    <SectionHeading
      subtitle={t.builders.subtitle}
      centered
    >
      {t.builders.title}
    </SectionHeading>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-16">
      {t.builders.cards.map((item) => (
        <div key={item.role} className="card-paper p-10 flex flex-col items-start bg-surface">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-honey" />
            <div className="text-[10px] font-bold text-ink tracking-[0.2em] uppercase">{item.role}</div>
          </div>
          <p className="font-serif text-ink/70 italic text-lg leading-relaxed flex-grow">“{item.desc}”</p>
        </div>
      ))}
    </div>
  </section>
);

const OpenCodeReady = ({ t }: { t: Copy }) => (
  <section className="py-24 md:py-32 lg:py-48 max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic leading-tight mb-6 md:mb-8">{t.opencode.title}</h2>
    <p className="text-lg md:text-2xl font-serif text-ink/70 leading-relaxed mb-10 md:mb-12">
      {t.opencode.description}
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
      {t.opencode.links.map((item) => (
        <button key={item} className="text-ink font-bold uppercase tracking-[0.2em] text-[10px] md:text-[11px] flex items-center gap-2 hover:text-honey transition-colors group">
          {item} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      ))}
    </div>
  </section>
);

const Faq = ({ t }: { t: Copy }) => (
  <section id="docs" className="section-container border-y border-ink/5 bg-paper-warm/20">
    <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
      <div className="lg:col-span-1">
        <span className="text-[10px] uppercase font-bold tracking-[0.2em] font-sans text-honey mb-4 md:mb-6 block">{t.faq.badge} //</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 font-serif italic tracking-tight leading-tight">{t.faq.heading[0]} <br className="hidden lg:block" /> {t.faq.heading[1]} <br className="hidden lg:block" /> {t.faq.heading[2]}</h2>
      </div>
      <div className="lg:col-span-2 space-y-8 md:space-y-12">
        {t.faq.items.map((faq) => (
          <div key={faq.q} className="border-l-[0.5px] border-ink/20 pl-6 md:pl-8 pb-4 relative">
            <div className="absolute -left-[4px] top-2 md:top-3 w-2 h-2 rounded-full bg-honey" />
            <h4 className="text-xl md:text-2xl font-serif italic mb-3 md:mb-4 text-ink">{faq.q}</h4>
            <p className="text-ink/60 font-serif italic text-base md:text-lg leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = ({ t }: { t: Copy }) => (
  <footer className="bg-paper py-16 md:py-20 px-6 border-t border-ink/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <BeeIcon className="w-8 h-8 md:w-6 md:h-6 text-ink/40" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40">CrewBeeLab © 2026</span>
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40">
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-honey transition-colors">GitHub</a>
        <a href="#docs" className="hover:text-honey transition-colors">{t.footer.docs}</a>
        <a href="#" className="hover:text-honey transition-colors">{t.footer.license}</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const { language, toggleLanguage } = useLanguage();
  const t = copy[language];

  useEffect(() => {
    const localizedUrl = getLocalizedUrl(language);

    document.title = t.siteTitle;
    document.documentElement.lang = languageConfig[language].htmlLang;
    document.documentElement.dir = 'ltr';

    upsertMeta('meta[name="description"]', { name: 'description', content: t.siteDescription });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: t.siteTitle });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: t.siteDescription });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: languageConfig[language].ogLocale });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: localizedUrl });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: t.siteTitle });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: t.siteDescription });

    upsertCanonical(localizedUrl);
    upsertLink('en', getLocalizedUrl('en'), languageConfig.en.alternateLabel);
    upsertLink('zh-CN', getLocalizedUrl('zh'), languageConfig.zh.alternateLabel);
    upsertLink('x-default', getLocalizedUrl('zh'));
  }, [language, t.siteDescription, t.siteTitle]);

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
