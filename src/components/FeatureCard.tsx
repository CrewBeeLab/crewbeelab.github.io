import type { ReactNode } from 'react';
import { designSystem } from '../config/designSystem';

interface FeatureCardProps {
  index?: number;
  title: ReactNode;
  description: ReactNode;
  tag?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const formatIndex = (index: number) => `0${index + 1}`;

export const FeatureCard = ({ index, title, description, tag, className = '', titleClassName = designSystem.typography.cardTitle, descriptionClassName = designSystem.typography.cardText }: FeatureCardProps) => (
  <div className={`${designSystem.surface.card} ${className}`}>
    <div className={designSystem.effect.cardHoneyGlow} />
    {(typeof index === 'number' || tag) && (
      <div className="mb-5 md:mb-7 flex items-center gap-3">
        {typeof index === 'number' && <span className={designSystem.typography.index}>{formatIndex(index)}</span>}
        {tag && <span className="border border-honey/30 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-honey">{tag}</span>}
      </div>
    )}
    <h3 className={titleClassName}>{title}</h3>
    <p className={descriptionClassName}>{description}</p>
  </div>
);
