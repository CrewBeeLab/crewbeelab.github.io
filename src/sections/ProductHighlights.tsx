import { Fragment } from 'react';
import { FeatureCard } from '../components/FeatureCard';
import { SectionHeading } from '../components/SectionHeading';
import type { LocalizedSectionProps } from './types';

export const ProductHighlights = ({ content }: LocalizedSectionProps) => (
  <section id="features" className="section-container">
    <SectionHeading centered subtitle={content.features.subtitle}>{content.features.title}</SectionHeading>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
      {content.features.cards.map((item, i) => (
        <Fragment key={item.title}>
          <FeatureCard index={i} title={item.title} description={item.desc} tag={'tag' in item ? item.tag : undefined} className={i === 6 ? 'md:col-span-2 lg:col-span-3 lg:[&>p]:max-w-3xl' : 'min-h-[14rem]'} />
        </Fragment>
      ))}
    </div>
  </section>
);
