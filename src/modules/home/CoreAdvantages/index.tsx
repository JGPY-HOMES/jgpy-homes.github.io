import React from 'react';
import { FaStar, FaClock, FaShieldAlt, FaHandshake, FaLightbulb, FaHeart, FaBullseye } from 'react-icons/fa';
import './CoreAdvantages.scss';

export const CoreAdvantages: React.FC = () => {
  const advantagesData = [
          {
        title: '专业设计',
        description: '拥有专业的设计团队，提供个性化设计方案',
        icon: FaBullseye,
        color: '#FFD700',
        details: ['资深设计师', '个性化定制', '3D效果图', '方案优化']
      },
    {
      title: '品质保证',
      description: '严格的质量管理体系，确保每个项目的高品质',
      icon: FaShieldAlt,
      color: '#4CAF50',
      details: ['材料精选', '工艺精湛', '质量检测', '售后保障']
    },
    {
      title: '工期准时',
      description: '科学的项目管理，确保按时交付，不延误工期',
      icon: FaClock,
      color: '#2196F3',
      details: ['进度管理', '节点控制', '及时沟通', '按时交付']
    },
    {
      title: '服务贴心',
      description: '全程贴心服务，从设计到施工，从售前到售后',
      icon: FaHeart,
      color: '#E91E63',
      details: ['一对一服务', '全程跟进', '及时响应', '满意度高']
    },
    {
      title: '价格透明',
      description: '明码标价，无隐形收费，让您消费更放心',
      icon: FaHandshake,
      color: '#FF9800',
      details: ['明码标价', '无隐形收费', '预算控制', '性价比高']
    },
    {
      title: '口碑良好',
      description: '多年积累的良好口碑，客户满意度持续领先',
      icon: FaStar,
      color: '#9C27B0',
      details: ['客户好评', '案例丰富', '回头率高', '推荐率高']
    }
  ];

  return (
    <section className="core-advantages">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">核心优势</h2>
          <p className="section-description">
            我们以专业的技术、优质的服务、合理的价格，为客户提供最满意的装修体验
          </p>
        </div>
        
        <div className="advantages-grid">
          {advantagesData.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div key={index} className="advantage-card">
                <div className="advantage-icon" style={{ backgroundColor: advantage.color }}>
                  <Icon />
                </div>
                
                <div className="advantage-content">
                  <h3 className="advantage-title">{advantage.title}</h3>
                  <p className="advantage-description">{advantage.description}</p>
                  
                  <div className="advantage-details">
                    {advantage.details.map((detail, detailIndex) => (
                      <span key={detailIndex} className="detail-tag">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}; 