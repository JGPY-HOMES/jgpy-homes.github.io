import React from "react";
import type { TeamExpansion as TeamExpansionType } from "../../../../entities/about.entity";
import "./Recruitment.scss";

interface RecruitmentProps {
  positions: TeamExpansionType["positions"];
}

export const Recruitment: React.FC<RecruitmentProps> = ({ positions }) => {
  return (
    <>
      <div className="recruitment-header">
        <h3 className="panel-title">我们正在寻找优秀的你</h3>
        <p className="panel-description">
          河南交个朋友装饰诚邀有志之士加入我们的团队，共同为客户创造美好的居住空间。
        </p>
      </div>

      <div className="job-listings">
        {positions.map((position, index) => (
          <div key={position.id || index} className="job-card">
            {/* 职位头部信息 */}
            <div className="job-header">
              <div className="job-title-section">
                <h4 className="job-title">{position.title}</h4>
                <div className="job-tags">
                  <span className="tag tag-primary">全职</span>
                  <span className="tag tag-secondary">经验不限</span>
                  <span className="tag tag-success">本科</span>
                </div>
              </div>
              <div className="job-salary">
                <span className="salary-range">8K-15K</span>
                <span className="salary-period">· 13薪</span>
              </div>
            </div>

            {/* 职位描述 */}
            <div className="job-description">
              <p>
                我们正在寻找有经验的设计师加入我们的团队，负责室内设计项目的方案设计和施工图绘制。
              </p>
            </div>

            {/* 职位要求 */}
            <div className="job-requirements">
              <h5 className="section-title">任职要求</h5>
              <ul className="requirements-list">
                {position.requirements.slice(0, 3).map((req, reqIndex) => (
                  <li key={reqIndex}>{req}</li>
                ))}
              </ul>
            </div>

            {/* 福利待遇 */}
            <div className="job-benefits">
              <h5 className="section-title">福利待遇</h5>
              <div className="benefits-tags">
                {position.benefits.slice(0, 4).map((benefit, benIndex) => (
                  <span key={benIndex} className="benefit-tag">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
