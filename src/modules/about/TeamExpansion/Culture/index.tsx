import React from 'react';
import './Culture.scss';

export const Culture: React.FC = () => {
  return (
    <>
      <h3 className="panel-title">企业文化</h3>
      <p className="panel-description">我们秉承专业、诚信、创新、共赢的企业文化，为员工创造良好的工作环境和发展平台。</p>
      
      {/* 企业文化理念 */}
      <div className="culture-principles">
        <h4 className="principles-section-title">企业文化理念</h4>
        <div className="principles-grid">
          <div className="principle-item">
            <h5>使命</h5>
            <p>为客户创造美好的居住空间，让每个家庭都能享受高品质的装修服务</p>
          </div>
          <div className="principle-item">
            <h5>愿景</h5>
            <p>成为河南地区最受信赖的装饰品牌，引领行业标准</p>
          </div>
          <div className="principle-item">
            <h5>理念</h5>
            <p>以客户为中心，以质量求生存，以创新求发展</p>
          </div>
        </div>
      </div>

      {/* 企业文化特色 */}
      <div className="culture-features">
        <h4 className="features-section-title">企业文化特色</h4>
        <div className="features-grid">
          <div className="feature-item">
            <h5>专业精神</h5>
            <p>追求卓越，精益求精，不断提升专业技能和服务水平</p>
          </div>
          <div className="feature-item">
            <h5>诚信经营</h5>
            <p>诚实守信，透明公开，建立长期稳定的合作关系</p>
          </div>
          <div className="feature-item">
            <h5>创新驱动</h5>
            <p>持续创新，拥抱变化，引领行业发展趋势</p>
          </div>
          <div className="feature-item">
            <h5>共赢合作</h5>
            <p>互利共赢，共同发展，创造多方价值</p>
          </div>
        </div>
      </div>
    </>
  );
};
