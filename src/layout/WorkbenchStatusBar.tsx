import type { HomepageContent } from '../i18n/homepageContent';

export const WorkbenchStatusBar = ({ content }: { content: HomepageContent }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] grid grid-cols-3 items-center h-7 bg-[#050505] px-4 font-mono text-[11px] text-white/35">
      <div className="text-left flex items-center gap-3">
        <span className="font-bold tracking-wider">{content.footer.version}</span>
      </div>
      
      <div className="text-center">
        {content.footer.icp ? (
          <a 
            href="https://beian.miit.gov.cn/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-white/35 hover:text-white/90 transition-colors duration-200 decoration-transparent"
          >
            {content.footer.icp}
          </a>
        ) : null}
      </div>
      
      <div className="text-right flex justify-end items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-honey" />
        <span className="tracking-wider">{content.footer.systemStatus}</span>
      </div>
    </div>
  );
};
