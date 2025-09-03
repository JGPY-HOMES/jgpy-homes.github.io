import React from "react";
import { FaHistory, FaBullseye, FaUsers, FaAward } from "react-icons/fa";
import "./AboutUs.scss";

export const AboutUs: React.FC = () => {
  const aboutData = {
    title: "关于我们",
    subtitle: "专业·诚信·品质·服务",
    description:
      "河南交个朋友装饰有限公司成立于2010年，是一家专业从事室内外装修设计的综合性企业。十余年来，我们始终坚持以客户需求为导向，以专业设计为核心，以优质服务为保障，致力于为客户打造温馨舒适的生活空间。",
    features: [
      {
        icon: FaHistory,
        title: "十年经验",
        description: "十余年行业经验，累计服务客户超过500家",
      },
      {
        icon: FaBullseye,
        title: "专业团队",
        description: "拥有专业的设计师和施工团队，技术精湛",
      },
      {
        icon: FaUsers,
        title: "客户至上",
        description: "以客户需求为中心，提供个性化定制服务",
      },
      {
        icon: FaAward,
        title: "品质保证",
        description: "严格的质量管理体系，确保每个项目的高品质",
      },
    ],
  };

  return (
    <section className="about-us">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">{aboutData.title}</h2>
            <h3 className="about-subtitle">{aboutData.subtitle}</h3>
            <p className="about-description">{aboutData.description}</p>

            <div className="about-features">
              {aboutData.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">
                      <Icon />
                    </div>
                    <div className="feature-content">
                      <h4 className="feature-title">{feature.title}</h4>
                      <p className="feature-description">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="about-image">
            <img src="/src/assets/images/hero/2.jpg" alt="关于我们" />
            <div className="image-overlay">
              <div className="overlay-content">
                <h3>专业团队</h3>
                <p>资深设计师 + 技术精湛的施工团队</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
