import React from "react";
import {
  FaHome,
  FaBuilding,
  FaCouch,
  FaTree,
  FaHammer,
  FaPaintBrush,
} from "react-icons/fa";
import "./BusinessScope.scss";

export const BusinessScope: React.FC = () => {
  const businessData = [
    {
      title: "别墅装修",
      description: "高端别墅装修设计，打造奢华舒适的生活空间",
      icon: FaHome,
      color: "#4CAF50",
      features: ["空间规划", "风格设计", "材料选择", "施工监理"],
    },
    {
      title: "商业空间",
      description: "商业空间装修设计，提升品牌形象和商业价值",
      icon: FaBuilding,
      color: "#2196F3",
      features: ["办公空间", "商业店铺", "餐饮空间", "展示空间"],
    },
    {
      title: "软装设计",
      description: "专业的软装设计服务，让空间更有温度和个性",
      icon: FaCouch,
      color: "#FF9800",
      features: ["家具搭配", "布艺设计", "饰品装饰", "灯光设计"],
    },
    {
      title: "园林景观",
      description: "室外环境设计，打造自然和谐的景观空间",
      icon: FaTree,
      color: "#8BC34A",
      features: ["庭院设计", "绿化规划", "景观小品", "照明设计"],
    },
    {
      title: "精装修",
      description: "精装修施工服务，确保工程质量和使用寿命",
      icon: FaHammer,
      color: "#795548",
      features: ["水电改造", "木工制作", "油漆施工", "竣工验收"],
    },
    {
      title: "设计咨询",
      description: "提供专业的设计咨询服务，解决装修难题",
      icon: FaPaintBrush,
      color: "#E91E63",
      features: ["方案设计", "预算控制", "材料推荐", "施工指导"],
    },
  ];

  return (
    <section className="business-scope">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">业务范围</h2>
          <p className="section-description">
            我们拥有丰富的项目经验，涵盖家装、工装、软装、园林景观等多个领域，为您提供全方位的装修解决方案
          </p>
        </div>

        <div className="business-grid">
          {businessData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="business-card">
                <div className="card-header">
                  <div
                    className="card-icon"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon />
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                </div>

                <p className="card-description">{item.description}</p>

                <ul className="card-features">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <span className="feature-dot"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
