import { FeatureCard } from '../components/FeatureCard';
import { SectionHeading } from '../components/SectionHeading';
import type { LocalizedSectionProps } from './types';

export const WhatYouCanDo = ({ t }: LocalizedSectionProps) => (
  <section id="features" className="section-container">
    <SectionHeading centered subtitle={t.features.subtitle}>{t.features.title}</SectionHeading>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
      {t.features.cards.map((item, i) => (
        <FeatureCard key={item.title} index={i} title={item.title} description={item.desc} tag={'tag' in item ? item.tag : undefined} className={i === 6 ? 'md:col-span-2 lg:col-span-3' : ''} />
      ))}
    </div>
  </section>
);
