import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import type { Case, CaseFilterParams } from "@/entities";
import { getCases } from "@/api";
import { Loading } from "@/components/Loading";
import "./CaseList.scss";

interface CaseListProps {
  filters: CaseFilterParams;
  onFiltersChange: (filters: CaseFilterParams) => void;
}

export const CaseList: React.FC<CaseListProps> = ({ filters }) => {
  const navigate = useNavigate();
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // 加载案例数据
  const loadCases = useCallback(
    async (page: number = 1, append: boolean = false) => {
      setLoading(true);
      try {
        const response = await getCases({
          ...filters,
          page,
          pageSize: 12,
        });

        if (append) {
          setCases((prev) => [...prev, ...response.cases]);
        } else {
          setCases(response.cases);
        }

        setHasMore(response.hasMore);
        setCurrentPage(page);
      } catch (error) {
        console.error("Error loading cases:", error);
      } finally {
        setLoading(false);
      }
    },
    [filters],
  );

  // 初始加载和筛选变化时重新加载
  useEffect(() => {
    setCurrentPage(1);
    loadCases(1, false);
  }, [loadCases]);

  // 加载更多
  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      loadCases(currentPage + 1, true);
    }
  }, [loading, hasMore, currentPage, loadCases]);

  // 滚动加载
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 1000
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMore]);

  // 跳转到案例详情
  const handleCaseClick = (caseId: string) => {
    navigate(`/cases/${caseId}`);
  };

  // 格式化面积显示
  const formatArea = (area?: number) => {
    return area ? `${area}㎡` : "面积待定";
  };

  // 格式化预算显示
  const formatBudget = (budget?: string) => {
    return budget || "预算待定";
  };

  // 获取状态显示文本
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

  // 获取状态样式类
  const getStatusClass = (status: string) => {
    switch (status) {
      case "completed":
        return "case-card__status--completed";
      case "in-progress":
        return "case-card__status--in-progress";
      case "planning":
        return "case-card__status--planning";
      default:
        return "";
    }
  };

  if (loading && cases.length === 0) {
    return (
      <div className="case-list case-list--loading">
        <Loading />
      </div>
    );
  }

  if (cases.length === 0 && !loading) {
    return (
      <div className="case-list case-list--empty">
        <div className="case-list__empty-content">
          <div className="case-list__empty-icon">📋</div>
          <h3 className="case-list__empty-title">暂无案例</h3>
          <p className="case-list__empty-description">
            当前筛选条件下没有找到相关案例，请尝试调整筛选条件
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="case-list">
      <div className="case-list__grid">
        {cases.map((caseItem) => (
          <div
            key={caseItem.id}
            className="case-card"
            onClick={() => handleCaseClick(caseItem.id)}
          >
            <div className="case-card__image-container">
              <img
                src={caseItem.coverImage}
                alt={caseItem.title}
                className="case-card__image"
                loading="lazy"
              />
              {caseItem.featured && (
                <div className="case-card__featured-badge">推荐</div>
              )}
              <div
                className={`case-card__status ${getStatusClass(caseItem.status)}`}
              >
                {getStatusText(caseItem.status)}
              </div>
            </div>

            <div className="case-card__content">
              <h3 className="case-card__title">{caseItem.title}</h3>
              {caseItem.subtitle && (
                <p className="case-card__subtitle">{caseItem.subtitle}</p>
              )}
              <p className="case-card__description">{caseItem.description}</p>

              <div className="case-card__meta">
                <div className="case-card__meta-item">
                  <span className="case-card__meta-label">面积:</span>
                  <span className="case-card__meta-value">
                    {formatArea(caseItem.area)}
                  </span>
                </div>
                <div className="case-card__meta-item">
                  <span className="case-card__meta-label">预算:</span>
                  <span className="case-card__meta-value">
                    {formatBudget(caseItem.budget)}
                  </span>
                </div>
                {caseItem.style && (
                  <div className="case-card__meta-item">
                    <span className="case-card__meta-label">风格:</span>
                    <span className="case-card__meta-value">
                      {caseItem.style}
                    </span>
                  </div>
                )}
              </div>

              <div className="case-card__tags">
                {caseItem.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="case-card__tag">
                    {tag}
                  </span>
                ))}
                {caseItem.tags.length > 3 && (
                  <span className="case-card__tag case-card__tag--more">
                    +{caseItem.tags.length - 3}
                  </span>
                )}
              </div>

              <div className="case-card__stats">
                <div className="case-card__stat">
                  <span className="case-card__stat-icon">👁️</span>
                  <span className="case-card__stat-value">
                    {caseItem.viewCount}
                  </span>
                </div>
                <div className="case-card__stat">
                  <span className="case-card__stat-icon">❤️</span>
                  <span className="case-card__stat-value">
                    {caseItem.likeCount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {loading && cases.length > 0 && (
        <div className="case-list__loading-more">
          <Loading />
          <span>加载更多案例...</span>
        </div>
      )}

      {!hasMore && cases.length > 0 && (
        <div className="case-list__no-more">
          <p>已加载全部案例</p>
        </div>
      )}
    </div>
  );
};
