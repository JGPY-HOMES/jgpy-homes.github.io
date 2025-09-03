import React from "react";
import { FaBuilding, FaUsers, FaAward, FaCheckCircle } from "react-icons/fa";
import "./CompanyIntro.scss";

export const CompanyIntro: React.FC = () => {
  const introData = {
    title: "河南交个朋友装饰有限公司",
    subtitle: "专业室内外装修设计服务提供商",
    description:
      "成立于2010年，是一家专业从事室内外装修设计的综合性企业。我们拥有专业的设计团队和施工队伍，致力于为客户提供高品质的装修服务。",
    stats: [
      { number: "500+", label: "成功案例", icon: FaCheckCircle },
      { number: "10+", label: "服务年限", icon: FaAward },
      { number: "98%", label: "客户满意度", icon: FaUsers },
      { number: "50+", label: "专业团队", icon: FaBuilding },
    ],
  };

  return (
    <section className="company-intro">
      <div className="container">
        <div className="intro-content">
          <div className="intro-text">
            <h2 className="intro-title">{introData.title}</h2>
            <h3 className="intro-subtitle">{introData.subtitle}</h3>
            <p className="intro-description">{introData.description}</p>

            <div className="intro-stats">
              {introData.stats.map((stat, index) => {
                return (
                  <div key={index} className="stat-item">
                    <div className="stat-content">
                      <span className="stat-number">{stat.number}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="intro-image">
            <img src="/src/assets/images/hero/1.jpg" alt="公司简介" />
          </div>
        </div>
      </div>
    </section>
  );
};
