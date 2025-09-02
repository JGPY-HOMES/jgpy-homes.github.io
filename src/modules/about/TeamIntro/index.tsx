import React, { useState, useEffect, useRef } from 'react';
import { FaUsers, FaLightbulb, FaTools, FaHandshake } from 'react-icons/fa';
import type { TeamIntro as TeamIntroType } from '../../../entities/about.entity';
import { AnimatedNumber } from '../../../components/AnimatedNumber';
import './TeamIntro.scss';

interface TeamIntroProps {
  teamData?: TeamIntroType;
}

export const TeamIntro: React.FC<TeamIntroProps> = ({ teamData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // 图标映射
  const iconMap: { [key: string]: any } = {
    users: FaUsers,
    lightbulb: FaLightbulb,
    tools: FaTools,
    handshake: FaHandshake,
  };

  // 监听滚动，当统计区域进入视口时触发动画
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

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
              <div key={stat.id || index} className={`stat-item ${isVisible ? 'animate' : ''}`}>
                <div className="stat-icon-wrapper">
                  <div className="stat-icon">
                    <Icon />
                  </div>
                  <div className="icon-glow"></div>
                </div>
                <div className={`stat-number ${isVisible ? 'animate' : ''}`}>
                  {isVisible ? (
                    <AnimatedNumber 
                      value={stat.number} 
                      duration={2000} 
                      delay={index * 200}
                    />
                  ) : (
                    stat.number
                  )}
                </div>
                <div className={`stat-label ${isVisible ? 'animate' : ''}`}>{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
                <div className="stat-decoration"></div>
              </div>
            );
          })}
        </div>

        {/* 团队特色 */}
        <div className="team-features">
          {teamData.features.map((feature, index) => (
            <div key={feature.id || index} className="feature-card">
              <div className="feature-image">
                <img src={feature.image} alt={feature.title} />
                <div className="image-overlay">
                  <h4 className="overlay-title">{feature.title}</h4>
                </div>
              </div>
              <div className="feature-content">
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
