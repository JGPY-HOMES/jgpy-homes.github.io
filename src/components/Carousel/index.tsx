import React, { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Carousel.scss";

export interface CarouselItem {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  icon?: string;
  link?: string;
}

export interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showIndicators?: boolean;
  className?: string;
  variant?: "default" | "service"; // 支持不同的样式变体
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  interval = 5000,
  showArrows = true,
  showIndicators = true,
  className = "",
  variant = "default",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % items.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  }, [items.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  }, [items.length, isTransitioning]);

  const goToSlide = useCallback(
    (index: number) => {
      if (!isTransitioning && index !== currentIndex) {
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 300);
      }
    },
    [currentIndex, isTransitioning],
  );

  // 自动播放
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, nextSlide]);

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  if (!items.length) {
    return null;
  }

  return (
    <div className={`carousel carousel--${variant} ${className}`}>
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? "transform 0.3s ease-in-out" : "none",
          }}
        >
          {items.map((item) => (
            <div key={item.id} className="carousel-slide">
              <div className="carousel-image">
                <img src={item.image} alt={item.title} />
                <div className="carousel-overlay">
                  <div className="carousel-content">
                    {item.icon && (
                      <div className="carousel-icon">
                        <span className="icon-text">{item.icon}</span>
                      </div>
                    )}
                    <h1 className="carousel-title">{item.title}</h1>
                    {item.subtitle && (
                      <p className="carousel-subtitle">{item.subtitle}</p>
                    )}
                    {item.description && (
                      <p className="carousel-description">{item.description}</p>
                    )}
                    {item.link && (
                      <a href={item.link} className="btn btn--primary">
                        了解更多
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 导航箭头 */}
        {showArrows && items.length > 1 && (
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
        {showIndicators && items.length > 1 && (
          <div className="carousel-indicators">
            {items.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`跳转到第 ${index + 1} 张图片`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
