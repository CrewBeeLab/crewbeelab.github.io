import { AnimatePresence, motion } from 'motion/react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { GITHUB_URL, navItems } from '../config/site';
import { BeeIcon } from '../components/BeeIcon';
import { LanguageSwitch } from '../components/LanguageSwitch';
import { useDarkMode } from '../hooks/useDarkMode';
import type { HomepageContent } from '../i18n/homepageContent';

export const Navbar = ({ content, onToggleLanguage }: { content: HomepageContent; onToggleLanguage: () => void }) => {
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-paper/90 backdrop-blur-md border-b border-ink/5 py-3.5' : 'bg-transparent py-6 md:py-7'}`}>
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
        <div className="flex shrink-0 items-center gap-4 group cursor-pointer">
          <BeeIcon className="w-8 h-8 text-ink" />
          <span className="text-[14px] font-sans font-bold tracking-[0.2em] uppercase mt-1">CrewBee</span>
        </div>

        <div className="hidden xl:flex flex-1 min-w-0 items-center justify-end gap-5 ml-8">
          {navItems.map((item) => (
            <a key={item.key} href={item.href} className="min-w-20 text-center whitespace-nowrap text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-ink/50 hover:text-ink transition-colors duration-200">
              {content.nav[item.key]}
            </a>
          ))}
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="min-w-20 text-center whitespace-nowrap text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-honey hover:text-honey-soft transition-colors">
            {content.nav.github}
          </a>
          <LanguageSwitch label={content.nav.switchLanguage} ariaLabel={content.nav.switchLanguageLabel} onClick={onToggleLanguage} />
          <button onClick={toggle} className="p-2 rounded-full hover:bg-surface transition-colors text-ink/50 hover:text-ink" aria-label={content.nav.toggleTheme}>
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button className="shrink-0 bg-ink text-paper px-6 py-2.5 border border-ink text-[10px] uppercase font-bold tracking-[0.18em] whitespace-nowrap hover:bg-paper hover:text-ink transition-all min-w-32">{content.nav.installCli}</button>
        </div>

        <div className="xl:hidden flex shrink-0 items-center gap-4">
          <LanguageSwitch label={content.nav.switchLanguage} ariaLabel={content.nav.switchLanguageLabel} onClick={onToggleLanguage} />
          <button onClick={toggle} className="p-2 rounded-full hover:bg-surface transition-colors text-ink/50 hover:text-ink" aria-label={content.nav.toggleTheme}>
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button aria-label={content.nav.toggleMenu} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="xl:hidden absolute top-full left-0 right-0 bg-paper border-b border-ink/5 p-6 flex flex-col gap-6 max-h-[80vh] overflow-y-auto shadow-2xl">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.key} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-widest text-ink hover:text-honey transition-colors">
                  {content.nav[item.key]}
                </a>
              ))}
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-widest text-honey">
                {content.nav.github}
              </a>
              <button onClick={handleMobileLanguageToggle} className="text-xs font-bold uppercase tracking-widest text-ink hover:text-honey transition-colors text-left whitespace-nowrap">
                {content.nav.switchLanguage}
              </button>
            </div>
            <button className="bg-ink text-paper px-6 py-4 border border-ink text-xs uppercase font-bold tracking-[0.2em] hover:bg-paper hover:text-ink transition-all mt-4 w-full">{content.nav.installCli}</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
