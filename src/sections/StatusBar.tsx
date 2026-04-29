import type { LocalizedSectionProps } from './types';

export const StatusBar = ({ content }: LocalizedSectionProps) => (
  <div className="border-y border-ink/5 bg-surface py-6 overflow-hidden flex whitespace-nowrap w-full">
    <div className="animate-marquee flex gap-24 items-center pl-24 pr-12 text-[10px] uppercase font-bold tracking-[0.2em] opacity-40 min-w-max">
      {[...content.status, ...content.status].map((item, index) => (
        <span key={`${item}-${index}`} className={index % content.status.length === 0 ? 'flex items-center gap-2' : undefined}>
          {index % content.status.length === 0 && <div className="w-1.5 h-1.5 rounded-full bg-honey" />}
          {item}
        </span>
      ))}
    </div>
  </div>
);
