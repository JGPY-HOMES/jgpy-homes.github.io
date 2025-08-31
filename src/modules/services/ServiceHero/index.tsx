import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SERVICES } from '../../../constants';
import './ServiceHero.scss';

interface CarouselItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export const ServiceHero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 创建轮播图数据
  const carouselItems: CarouselItem[] = SERVICES.map(service => ({
    id: service.id,
    image: service.image,
    title: service.name,
    subtitle: service.subtitle || '',
    description: service.description,
    icon: service.icon
  }));

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  }, [carouselItems.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  }, [carouselItems.length, isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  }, [currentIndex, isTransitioning]);

  // 自动播放
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <section id="service-hero" className="service-hero">
      <div className="carousel-container">
        <div 
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 0.3s ease-in-out' : 'none'
          }}
        >
          {carouselItems.map((item, index) => (
            <div key={item.id} className="carousel-slide">
              <div className="carousel-image">
                <img src={item.image} alt={item.title} />
                <div className="carousel-overlay">
                  <div className="carousel-content">
                    <div className="carousel-icon">
                      <span className="icon-text">{item.icon}</span>
                    </div>
                    <h1 className="carousel-title">{item.title}</h1>
                    <p className="carousel-subtitle">{item.subtitle}</p>
                    <p className="carousel-description">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 导航箭头 */}
        {carouselItems.length > 1 && (
          <>
            <button 
              className="carousel-arrow carousel-arrow--prev"
              onClick={prevSlide}
              aria-label="上一张"
            >
              <FaChevronLeft />
            </button>
            <button 
              className="carousel-arrow carousel-arrow--next"
              onClick={nextSlide}
              aria-label="下一张"
            >
              <FaChevronRight />
            </button>
          </>
        )}

        {/* 指示器 */}
        {carouselItems.length > 1 && (
          <div className="carousel-indicators">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`跳转到第 ${index + 1} 张图片`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
