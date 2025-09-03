import React from 'react';
import { Carousel } from '@/components/Carousel';
import type { CaseCarouselItem } from '@/entities';
import './CasesHero.scss';

interface CasesHeroProps {
  carouselData: CaseCarouselItem[];
}

export const CasesHero: React.FC<CasesHeroProps> = ({ carouselData }) => {
  return (
    <section className="about-hero">
      <Carousel
        items={carouselData}
        autoPlay={true}
        interval={5000}
        showArrows={true}
        showIndicators={true}
        variant="default"
      />
    </section>
  );
};
