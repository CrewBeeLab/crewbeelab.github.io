import { DOCS_URL, GITHUB_URL } from '../config/site';
import { BeeIcon } from '../components/BeeIcon';
import type { HomepageContent } from '../i18n/homepageContent';

export const Footer = ({ content }: { content: HomepageContent }) => (
  <footer className="bg-paper py-14 md:py-16 px-6 border-t border-ink/5">
    <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <BeeIcon className="w-8 h-8 md:w-6 md:h-6 text-ink/40" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40">CrewBeeLab © 2026</span>
      </div>
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40">
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-honey transition-colors">GitHub</a>
        <a href={DOCS_URL} className="hover:text-honey transition-colors">{content.footer.docs}</a>
      </div>
    </div>
  </footer>
);
