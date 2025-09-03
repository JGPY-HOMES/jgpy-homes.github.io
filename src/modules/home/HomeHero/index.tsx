import React from "react";
import { Carousel } from "../../../components/Carousel";
import "./HomeHero.scss";

export const HomeHero: React.FC = () => {
  // 首页轮播图数据
  const carouselItems = [
    {
      id: "1",
      image: "/src/assets/images/hero/1.jpg",
      title: "专业家装设计",
      description: "为您打造温馨舒适的家居环境，让每个空间都充满生活的温度",
      link: "/services",
    },
    {
      id: "2",
      image: "/src/assets/images/hero/2.jpg",
      title: "品质施工服务",
      description: "严格把控施工质量，确保每一个细节都完美呈现",
      link: "/projects",
    },
    {
      id: "3",
      image: "/src/assets/images/hero/3.jpg",
      title: "一站式装修解决方案",
      description: "从设计到施工，从材料到软装，为您提供完整的装修服务",
      link: "/about",
    },
    {
      id: "4",
      image: "/src/assets/images/hero/4.jpg",
      title: "现代简约风格",
      description: "简约而不简单，让空间回归本质，展现生活的美好",
      link: "/projects",
    },
    {
      id: "5",
      image: "/src/assets/images/hero/6.jpg",
      title: "温馨卧室设计",
      description: "打造舒适的睡眠环境，让每个夜晚都充满宁静与温暖",
      link: "/services",
    },
  ];

  return (
    <section className="home-hero">
      <Carousel
        items={carouselItems}
        autoPlay={true}
        interval={6000}
        showArrows={true}
        showIndicators={true}
        variant="default"
      />
    </section>
  );
};
