import React from 'react';
import { Carousel } from '../../../components/Carousel';
import './ContactHero.scss';

export const ContactHero: React.FC = () => {
  // 联系我们页面的轮播图数据
  const carouselItems = [
    {
      id: '1',
      image: '/src/assets/images/hero/1.jpg',
      title: '专业装修服务',
      description: '为您提供一站式装修解决方案',
      link: '/services'
    },
    {
      id: '2',
      image: '/src/assets/images/hero/2.jpg',
      title: '品质保证',
      description: '严格的质量控制，确保装修品质',
      link: '/about'
    },
    {
      id: '3',
      image: '/src/assets/images/hero/3.jpg',
      title: '贴心服务',
      description: '从设计到施工，全程贴心服务',
      link: '/contact'
    },
    {
      id: '4',
      image: '/src/assets/images/hero/4.jpg',
      title: '创新设计',
      description: '融合现代美学与实用功能',
      link: '/services'
    },
    {
      id: '5',
      image: '/src/assets/images/hero/6.jpg',
      title: '精工细作',
      description: '每一个细节都精心打造',
      link: '/about'
    }
  ];

  return (
    <section className="contact-hero">
      <Carousel 
        items={carouselItems}
        autoPlay={true}
        interval={4000}
        showArrows={true}
        showIndicators={true}
        className="contact-hero__carousel"
        variant="default"
      />
    </section>
  );
};
