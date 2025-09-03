import React from 'react';
import './Values.scss';

export const Values: React.FC = () => {
  // 企业价值观数据
  const companyValues = [
    {
      id: 1,
      title: '专业',
      description: '追求卓越，精益求精',
      icon: '⚡'
    },
    {
      id: 2,
      title: '诚信',
      description: '诚实守信，透明公开',
      icon: '🤝'
    },
    {
      id: 3,
      title: '创新',
      description: '持续创新，拥抱变化',
      icon: '🚀'
    },
    {
      id: 4,
      title: '共赢',
      description: '互利共赢，共同发展',
      icon: '🎯'
    }
  ];

  return (
    <>
      <h3 className="panel-title">企业价值观</h3>
      <p className="panel-description">我们的价值观指导着每一个决策和行动，是我们企业文化的核心体现。</p>
      
      {/* 价值观卡片 */}
      <div className="values-grid">
        {companyValues.map((value) => (
          <div key={value.id} className="value-card">
            <div className="value-icon">{value.icon}</div>
            <h4 className="value-title">{value.title}</h4>
            <p className="value-description">{value.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
