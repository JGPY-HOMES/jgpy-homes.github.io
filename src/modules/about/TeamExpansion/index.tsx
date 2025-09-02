import React, { useState } from 'react';
import { FaUserPlus, FaGraduationCap, FaAward, FaHandshake, FaHeart } from 'react-icons/fa';
import type { TeamExpansion as TeamExpansionType } from '../../../entities/about.entity';
import './TeamExpansion.scss';

interface TeamExpansionProps {
  expansionData?: TeamExpansionType;
}

export const TeamExpansion: React.FC<TeamExpansionProps> = ({ expansionData }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!expansionData) {
    return null;
  }

  // 标签页配置
  const tabs = [
    {
      id: 'recruitment',
      label: '人才招聘',
      icon: FaUserPlus,
    },
    {
      id: 'training',
      label: '培训发展',
      icon: FaGraduationCap,
    },
    {
      id: 'culture',
      label: '企业文化',
      icon: FaAward,
    },
    {
      id: 'values',
      label: '企业价值观',
      icon: FaHeart,
    },
    {
      id: 'welfare',
      label: '员工福利',
      icon: FaHandshake,
    }
  ];

  return (
    <section className="team-expansion">
      <div className="container">
        <div className="expansion-header">
          <h2 className="expansion-title">{expansionData.title}</h2>
          <h3 className="expansion-subtitle">{expansionData.subtitle}</h3>
          <p className="expansion-description">{expansionData.description}</p>
        </div>

        <div className="expansion-content">
          {/* 标签页导航 */}
          <div className="tab-navigation">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  <Icon className="tab-icon" />
                  <span className="tab-label">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* 标签页内容 */}
          <div className="tab-content">
            <div className="tab-panel">
              {/* 人才招聘 */}
              {activeTab === 0 && (
                <>
                  <h3 className="panel-title">我们正在寻找优秀的你</h3>
                  <p className="panel-description">河南交个朋友装饰诚邀有志之士加入我们的团队，共同为客户创造美好的居住空间。</p>
                  <div className="positions-list">
                    {expansionData.positions.map((position, index) => (
                      <div key={position.id || index} className="position-card">
                        <h4 className="position-title">{position.title}</h4>
                        <div className="position-details">
                          <div className="requirements">
                            <h5>任职要求：</h5>
                            <ul>
                              {position.requirements.map((req, reqIndex) => (
                                <li key={reqIndex}>{req}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="benefits">
                            <h5>福利待遇：</h5>
                            <ul>
                              {position.benefits.map((benefit, benIndex) => (
                                <li key={benIndex}>{benefit}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* 培训发展 */}
              {activeTab === 1 && (
                <>
                  <h3 className="panel-title">持续学习，共同成长</h3>
                  <p className="panel-description">我们为员工提供全方位的培训和发展机会，帮助每个人在职业生涯中不断进步。</p>
                  <div className="training-programs">
                    {expansionData.trainingPrograms.map((program, index) => (
                      <div key={program.id || index} className="program-card">
                        <div className="program-header">
                          <h4 className="program-title">{program.title}</h4>
                          <span className="program-duration">{program.duration}</span>
                        </div>
                        <p className="program-description">{program.description}</p>
                        <ul className="program-content">
                          {program.content.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* 企业文化 */}
              {activeTab === 2 && (
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
              )}

              {/* 企业价值观 */}
              {activeTab === 3 && (
                <>
                  <h3 className="panel-title">企业价值观</h3>
                  <p className="panel-description">我们的价值观指导着每一个决策和行动，是我们企业文化的核心体现。</p>
                  
                  {/* 核心价值观 */}
                  <div className="company-values">
                    <h4 className="values-section-title">核心价值观</h4>
                    {expansionData.values.map((value, index) => (
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
              )}

              {/* 员工福利 */}
              {activeTab === 4 && (
                <>
                  <h3 className="panel-title">关爱员工，共创未来</h3>
                  <p className="panel-description">我们为员工提供完善的福利待遇，让每个人都能安心工作，快乐生活。</p>
                  <div className="benefits-grid">
                    {expansionData.benefits.map((benefit, index) => (
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
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
