import React from 'react';
import type { TeamExpansion as TeamExpansionType } from '../../../../entities/about.entity';
import './Benefits.scss';

interface BenefitsProps {
  benefits: TeamExpansionType['benefits'];
}

export const Benefits: React.FC<BenefitsProps> = ({ benefits }) => {
  return (
    <>
      <h3 className="panel-title">关爱员工，共创未来</h3>
      <p className="panel-description">我们为员工提供完善的福利待遇，让每个人都能安心工作，快乐生活。</p>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={benefit.id || index} className="benefit-category">
            <h4 className="benefit-category-title">{benefit.category}</h4>
            <ul className="benefit-items">
              {benefit.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
