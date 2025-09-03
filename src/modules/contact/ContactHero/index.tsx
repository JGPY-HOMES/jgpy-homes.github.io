import React from "react";
import { Carousel } from "../../../components/Carousel";
import type { Carousel as CarouselType } from "../../../entities/contact.entity";
import "./ContactHero.scss";

interface ContactHeroProps {
  carousels?: CarouselType[];
}

export const ContactHero: React.FC<ContactHeroProps> = ({ carousels }) => {
  // 如果没有数据则不渲染
  if (!carousels || carousels.length === 0) {
    return null;
  }

  return (
    <section className="contact-hero">
      <Carousel
        items={carousels}
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
