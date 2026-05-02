import { Fragment } from 'react';
import { FeatureCard } from '../components/FeatureCard';
import { SectionHeading } from '../components/SectionHeading';
import type { LocalizedSectionProps } from './types';

export const WhatWorksToday = ({ content }: LocalizedSectionProps) => (
  <section id="works-today" className="section-container border-b border-ink/5">
    <SectionHeading badge={content.worksToday.badge} centered subtitle={content.worksToday.subtitle}>{content.worksToday.title}</SectionHeading>
    <div className="grid md:grid-cols-2 gap-4 md:gap-5 lg:gap-6 max-w-5xl mx-auto">
      {content.worksToday.cards.map((item, index) => (
        <Fragment key={item.title}>
          <FeatureCard index={index} title={item.title} description={item.desc} className="min-h-[13rem]" />
        </Fragment>
      ))}
    </div>
  </section>
);
