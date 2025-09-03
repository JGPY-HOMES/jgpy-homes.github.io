import React from 'react';
import type { CompanyValue } from '../../../../entities/about.entity';
import './Values.scss';

interface ValuesProps {
  values: CompanyValue[];
}

export const Values: React.FC<ValuesProps> = ({ values }) => {

  return (
    <>
      <h3 className="panel-title">企业价值观</h3>
      <p className="panel-description">我们的价值观指导着每一个决策和行动，是我们企业文化的核心体现。</p>
      
      {/* 价值观卡片 */}
      <div className="values-grid">
        {values.map((value) => (
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
