import React from 'react';
import type { TeamExpansion as TeamExpansionType } from '../../../../entities/about.entity';
import './Values.scss';

interface ValuesProps {
  values: TeamExpansionType['values'];
}

export const Values: React.FC<ValuesProps> = ({ values }) => {
  return (
    <>
      <h3 className="panel-title">企业价值观</h3>
      <p className="panel-description">我们的价值观指导着每一个决策和行动，是我们企业文化的核心体现。</p>
      
      {/* 核心价值观 */}
      <div className="company-values">
        <h4 className="values-section-title">核心价值观</h4>
        {values.map((value, index) => (
          <div key={value.id || index} className="value-card">
            <div className="value-icon">{value.icon}</div>
            <h4 className="value-title">{value.title}</h4>
            <p className="value-description">{value.description}</p>
          </div>
        ))}
      </div>

      {/* 价值观实践 */}
      <div className="values-practice">
        <h4 className="practice-section-title">价值观实践</h4>
        <div className="practice-grid">
          <div className="practice-item">
            <h5>客户至上</h5>
            <p>始终以客户需求为导向，提供超越期望的服务体验</p>
          </div>
          <div className="practice-item">
            <h5>团队协作</h5>
            <p>倡导团队精神，相互支持，共同成长</p>
          </div>
          <div className="practice-item">
            <h5>持续学习</h5>
            <p>保持学习热情，不断提升个人和团队能力</p>
          </div>
          <div className="practice-item">
            <h5>责任担当</h5>
            <p>勇于承担责任，积极主动，追求卓越</p>
          </div>
        </div>
      </div>
    </>
  );
};
