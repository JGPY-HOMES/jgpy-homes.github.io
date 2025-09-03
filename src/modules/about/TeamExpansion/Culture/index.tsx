import React from 'react';
import './Culture.scss';

export const Culture: React.FC = () => {
  return (
    <>
      {/* 企业文化内容 */}
      <div className="culture-content">
        <div className="culture-text">
          <h3 className="culture-title">企业文化</h3>
          <h4 className="culture-subtitle">专业团队</h4>
          <div className="culture-description">
            <p>
              我们秉承专业、诚信、创新、共赢的企业文化，致力于为客户创造美好的居住空间。以客户为中心，以质量求生存，以创新求发展，让每个家庭都能享受高品质的装修服务。
            </p>
            <p>
              我们的团队由经验丰富的设计师和施工人员组成，追求卓越，精益求精，不断提升专业技能和服务水平。诚实守信，透明公开，建立长期稳定的合作关系，成为河南地区最受信赖的装饰品牌。
            </p>
          </div>
        </div>
        <div className="culture-image">
          <img src="/src/assets/images/about/team/1.jpg" alt="企业文化" />
        </div>
      </div>
    </>
  );
};
