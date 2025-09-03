import React from "react";
import { Carousel } from "../../../components/Carousel";
import type { Carousel as CarouselType } from "../../../entities/about.entity";
import "./AboutHero.scss";

interface AboutHeroProps {
  carousels?: CarouselType[];
}

export const AboutHero: React.FC<AboutHeroProps> = ({ carousels = [] }) => {
  return (
    <section className="about-hero">
      <Carousel
        items={carousels}
        autoPlay={true}
        interval={5000}
        showArrows={true}
        showIndicators={true}
        variant="default"
      />
    </section>
  );
};
