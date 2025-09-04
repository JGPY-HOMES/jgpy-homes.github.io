import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCaseDetail, incrementCaseViewCount } from "@/api";
import type { CaseDetail as CaseDetailType } from "@/entities";
import { Loading } from "@/components/Loading";
import { usePageTitle } from "../../hooks";
import "./CaseDetail.scss";

export const CaseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [caseDetail, setCaseDetail] = useState<CaseDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // 设置动态页面标题
  usePageTitle(
    caseDetail?.title 
      ? `${caseDetail.title} - 河南交个朋友装饰有限公司`
      : `案例详情 ${id || ''} - 河南交个朋友装饰有限公司`
  );

  useEffect(() => {
    if (id) {
      loadCaseDetail(id);
    }
  }, [id]);

  const loadCaseDetail = async (caseId: string) => {
    setLoading(true);
    setError(null);
    try {
      const detail = await getCaseDetail(caseId);
      if (detail) {
        setCaseDetail(detail);
        // 增加浏览量
        await incrementCaseViewCount(caseId);
      } else {
        setError("案例不存在");
      }
    } catch (err) {
      setError("加载案例详情失败");
      console.error("Error loading case detail:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate("/cases");
  };

  const formatArea = (area?: number) => {
    return area ? `${area}㎡` : "面积待定";
  };

  const formatBudget = (budget?: string) => {
    return budget || "预算待定";
  };

  const formatDuration = (duration?: string) => {
    return duration || "工期待定";
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "已完成";
      case "in-progress":
        return "进行中";
      case "planning":
        return "规划中";
      default:
        return "未知";
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "completed":
        return "case-detail__status--completed";
      case "in-progress":
        return "case-detail__status--in-progress";
      case "planning":
        return "case-detail__status--planning";
      default:
        return "";
    }
  };

  const renderContent = (content: any) => {
    switch (content.type) {
      case "text":
        return (
          <div key={content.order} className="case-detail__content-text">
            {content.title && (
              <h3 className="case-detail__content-title">{content.title}</h3>
            )}
            <p className="case-detail__content-description">
              {content.content}
            </p>
          </div>
        );
      case "image":
        return (
          <div key={content.order} className="case-detail__content-image">
            {content.title && (
              <h3 className="case-detail__content-title">{content.title}</h3>
            )}
            <img
              src={content.content}
              alt={content.title || "案例图片"}
              className="case-detail__content-img"
            />
            {content.description && (
              <p className="case-detail__content-caption">
                {content.description}
              </p>
            )}
          </div>
        );
      case "gallery":
        return (
          <div key={content.order} className="case-detail__content-gallery">
            {content.title && (
              <h3 className="case-detail__content-title">{content.title}</h3>
            )}
            <div className="case-detail__gallery-grid">
              {content.images?.map((image: string, index: number) => (
                <img
                  key={index}
                  src={image}
                  alt={`${content.title || "案例图片"} ${index + 1}`}
                  className="case-detail__gallery-img"
                />
              ))}
            </div>
            {content.description && (
              <p className="case-detail__content-caption">
                {content.description}
              </p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="case-detail case-detail--loading">
        <Loading />
      </div>
    );
  }

  if (error || !caseDetail) {
    return (
      <div className="case-detail case-detail--error">
        <div className="case-detail__error-content">
          <h2>案例不存在</h2>
          <p>抱歉，您访问的案例不存在或已被删除。</p>
          <button onClick={handleBack} className="case-detail__back-button">
            返回案例列表
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="case-detail">
      <div className="case-detail__container">
        {/* 返回按钮 */}
        <button onClick={handleBack} className="case-detail__back-button">
          ← 返回案例列表
        </button>

        {/* 案例头部信息 */}
        <div className="case-detail__header">
          <div className="case-detail__header-content">
            <div className="case-detail__badges">
              {caseDetail.featured && (
                <span className="case-detail__featured-badge">推荐</span>
              )}
              <span
                className={`case-detail__status ${getStatusClass(caseDetail.status)}`}
              >
                {getStatusText(caseDetail.status)}
              </span>
            </div>
            <h1 className="case-detail__title">{caseDetail.title}</h1>
            {caseDetail.subtitle && (
              <p className="case-detail__subtitle">{caseDetail.subtitle}</p>
            )}
            <p className="case-detail__description">{caseDetail.description}</p>

            <div className="case-detail__meta">
              <div className="case-detail__meta-item">
                <span className="case-detail__meta-label">面积:</span>
                <span className="case-detail__meta-value">
                  {formatArea(caseDetail.area)}
                </span>
              </div>
              <div className="case-detail__meta-item">
                <span className="case-detail__meta-label">预算:</span>
                <span className="case-detail__meta-value">
                  {formatBudget(caseDetail.budget)}
                </span>
              </div>
              <div className="case-detail__meta-item">
                <span className="case-detail__meta-label">工期:</span>
                <span className="case-detail__meta-value">
                  {formatDuration(caseDetail.duration)}
                </span>
              </div>
              {caseDetail.style && (
                <div className="case-detail__meta-item">
                  <span className="case-detail__meta-label">风格:</span>
                  <span className="case-detail__meta-value">
                    {caseDetail.style}
                  </span>
                </div>
              )}
              {caseDetail.location && (
                <div className="case-detail__meta-item">
                  <span className="case-detail__meta-label">位置:</span>
                  <span className="case-detail__meta-value">
                    {caseDetail.location}
                  </span>
                </div>
              )}
            </div>

            <div className="case-detail__tags">
              {caseDetail.tags.map((tag, index) => (
                <span key={index} className="case-detail__tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="case-detail__stats">
              <div className="case-detail__stat">
                <span className="case-detail__stat-icon">👁️</span>
                <span className="case-detail__stat-value">
                  {caseDetail.viewCount}
                </span>
                <span className="case-detail__stat-label">浏览</span>
              </div>
              <div className="case-detail__stat">
                <span className="case-detail__stat-icon">❤️</span>
                <span className="case-detail__stat-value">
                  {caseDetail.likeCount}
                </span>
                <span className="case-detail__stat-label">点赞</span>
              </div>
            </div>
          </div>

          <div className="case-detail__header-image">
            <img
              src={caseDetail.coverImage}
              alt={caseDetail.title}
              className="case-detail__cover-image"
            />
          </div>
        </div>

        {/* 案例内容 */}
        <div className="case-detail__content">
          {caseDetail.content
            .sort((a, b) => a.order - b.order)
            .map(renderContent)}
        </div>

        {/* 客户反馈 */}
        {caseDetail.clientInfo && (
          <div className="case-detail__client-feedback">
            <h3 className="case-detail__section-title">客户反馈</h3>
            <div className="case-detail__feedback-content">
              <div className="case-detail__feedback-header">
                <div className="case-detail__client-info">
                  <h4 className="case-detail__client-name">
                    {caseDetail.clientInfo.name}
                  </h4>
                  <div className="case-detail__rating">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className={`case-detail__star ${
                          i < caseDetail.clientInfo!.rating
                            ? "case-detail__star--filled"
                            : ""
                        }`}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="case-detail__feedback-text">
                {caseDetail.clientInfo.feedback}
              </p>
            </div>
          </div>
        )}

        {/* 设计团队 */}
        {caseDetail.designTeam && (
          <div className="case-detail__design-team">
            <h3 className="case-detail__section-title">设计团队</h3>
            <div className="case-detail__team-grid">
              <div className="case-detail__team-member">
                <span className="case-detail__team-role">设计师</span>
                <span className="case-detail__team-name">
                  {caseDetail.designTeam.designer}
                </span>
              </div>
              {caseDetail.designTeam.architect && (
                <div className="case-detail__team-member">
                  <span className="case-detail__team-role">建筑师</span>
                  <span className="case-detail__team-name">
                    {caseDetail.designTeam.architect}
                  </span>
                </div>
              )}
              <div className="case-detail__team-member">
                <span className="case-detail__team-role">项目经理</span>
                <span className="case-detail__team-name">
                  {caseDetail.designTeam.projectManager}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 项目时间线 */}
        {caseDetail.timeline && caseDetail.timeline.length > 0 && (
          <div className="case-detail__timeline">
            <h3 className="case-detail__section-title">项目时间线</h3>
            <div className="case-detail__timeline-list">
              {caseDetail.timeline.map((phase, index) => (
                <div key={index} className="case-detail__timeline-item">
                  <div className="case-detail__timeline-marker"></div>
                  <div className="case-detail__timeline-content">
                    <h4 className="case-detail__timeline-phase">
                      {phase.phase}
                    </h4>
                    <div className="case-detail__timeline-dates">
                      {phase.startDate} - {phase.endDate}
                    </div>
                    <p className="case-detail__timeline-description">
                      {phase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
