import React, { useRef } from "react";
import { FaUsers, FaLightbulb, FaTools, FaHandshake } from "react-icons/fa";
import type { TeamIntro as TeamIntroType } from "../../../entities/about.entity";
import { AnimatedNumber } from "../../../components/AnimatedNumber";
import "./TeamIntro.scss";

interface TeamIntroProps {
  teamData?: TeamIntroType;
}

export const TeamIntro: React.FC<TeamIntroProps> = ({ teamData }) => {
  const statsRef = useRef<HTMLDivElement>(null);

  // 图标映射
  const iconMap: { [key: string]: any } = {
    users: FaUsers,
    lightbulb: FaLightbulb,
    tools: FaTools,
    handshake: FaHandshake,
  };

  if (!teamData) {
    return null;
  }

  return (
    <section id="team" className="team-intro">
      <div className="container">
        <div className="team-header">
          <h2 className="team-title">{teamData.title}</h2>
          <h3 className="team-subtitle">{teamData.subtitle}</h3>
          <p className="team-description">{teamData.description}</p>
        </div>

        {/* 团队数据统计 */}
        <div ref={statsRef} className="team-stats">
          {teamData.stats.map((stat, index) => {
            const Icon = iconMap[stat.icon] || FaUsers;
            return (
              <div key={stat.id || index} className={`stat-item`}>
                <div className="stat-icon-wrapper">
                  <div className="stat-icon">
                    <Icon />
                  </div>
                  <div className="icon-glow"></div>
                </div>
                <div className={`stat-number`}>
                  <AnimatedNumber
                    value={stat.number}
                    duration={2000}
                    delay={index * 200}
                  />
                </div>
                <div className={`stat-label`}>{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
                <div className="stat-decoration"></div>
              </div>
            );
          })}
        </div>

        {/* 团队成员 */}
        <div className="team-features">
          {teamData.features.map((member, index) => (
            <div key={member.id || index} className="feature-card">
              <div className="feature-image">
                <img src={member.image} alt={member.name} />
                <div className="image-overlay">
                  <h4 className="overlay-title">{member.name}</h4>
                  <p className="overlay-position">{member.position}</p>
                </div>
              </div>
              <div className="feature-content">
                <h4 className="feature-title">{member.name}</h4>
                <p className="feature-position">{member.position}</p>
                <p className="feature-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
