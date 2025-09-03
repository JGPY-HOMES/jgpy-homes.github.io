import React from "react";
import { FaHome, FaPaintBrush, FaTools, FaCouch } from "react-icons/fa";
import "./Services.scss";

const services = [
  {
    id: 1,
    icon: FaHome,
    title: "室内设计",
    description: "专业室内设计服务，为您打造理想的生活空间",
    features: ["空间规划", "风格设计", "色彩搭配", "功能布局"],
  },
  {
    id: 2,
    icon: FaPaintBrush,
    title: "装修施工",
    description: "专业施工团队，严格把控质量，确保完美呈现",
    features: ["水电改造", "木工制作", "油漆施工", "竣工验收"],
  },
  {
    id: 3,
    icon: FaCouch,
    title: "软装设计",
    description: "精选家具软装，让空间更有温度和质感",
    features: ["家具选择", "布艺搭配", "饰品装饰", "绿植布置"],
  },
  {
    id: 4,
    icon: FaTools,
    title: "工程监理",
    description: "全程监理服务，确保工程质量和进度",
    features: ["质量监督", "进度控制", "材料验收", "竣工验收"],
  },
];

export const Services: React.FC = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">核心服务</h2>
          <p className="section-description">
            我们提供专业的室内设计、装修施工、软装设计和工程监理服务，为您打造完美的空间体验
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <div key={service.id} className="service-card card">
              <div className="service-card__icon">
                <service.icon />
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <ul className="service-card__features">
                {service.features.map((feature, index) => (
                  <li key={index} className="service-card__feature">
                    {feature}
                  </li>
                ))}
              </ul>
              <a href={`/services/${service.id}`} className="btn btn--outline">
                了解更多
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
