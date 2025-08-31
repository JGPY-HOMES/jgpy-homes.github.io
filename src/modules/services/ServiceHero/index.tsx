import React from 'react';
import { SERVICES } from '../../../constants';
import { Carousel } from '../../../components/Carousel';
import './ServiceHero.scss';

export const ServiceHero: React.FC = () => {
  // 创建轮播图数据
  const carouselItems = SERVICES.map(service => ({
    id: service.id,
    image: service.image,
    title: service.name,
    subtitle: service.subtitle || '',
    description: service.description,
    icon: service.icon
  }));

  return (
    <section id="service-hero" className="service-hero">
      <Carousel 
        items={carouselItems}
        autoPlay={true}
        interval={5000}
        showArrows={true}
        showIndicators={true}
        variant="service"
      />
    </section>
  );
};
