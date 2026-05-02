import { Fragment } from 'react';
import { FeatureCard } from '../components/FeatureCard';
import { SectionHeading } from '../components/SectionHeading';
import type { LocalizedSectionProps } from './types';

export const ProductHighlights = ({ content }: LocalizedSectionProps) => (
  <section id="features" className="section-container">
    <SectionHeading centered subtitle={content.features.subtitle}>{content.features.title}</SectionHeading>
    <div className="grid md:grid-cols-2 gap-4 md:gap-5 lg:gap-6 max-w-5xl mx-auto">
      {content.features.cards.map((item, i) => (
        <Fragment key={item.title}>
          <FeatureCard index={i} title={item.title} description={item.desc} className="min-h-[14rem]" />
        </Fragment>
      ))}
    </div>
  </section>
);
