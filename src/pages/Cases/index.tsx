import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { CasesHero, CaseFilter, CaseList } from "@/modules/cases";
import { getCasesPageData } from "@/api";
import type { CaseCategory, CaseFilterParams } from "@/entities";
import { Loading } from "@/components/Loading";
import "./Cases.scss";

export const Cases: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState<CaseCategory[]>([]);
  const [carouselData, setCarouselData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<CaseFilterParams>({
    page: 1,
    pageSize: 12,
  });

  // 初始化页面数据
  useEffect(() => {
    loadPageData();
  }, []);

  // 从URL参数初始化筛选条件
  useEffect(() => {
    const categoryId = searchParams.get("category");
    const serviceId = searchParams.get("service");
    const style = searchParams.get("style");
    const status = searchParams.get("status");
    const featured = searchParams.get("featured");

    setFilters((prev) => ({
      ...prev,
      categoryId: categoryId || undefined,
      serviceId: serviceId || undefined,
      style: style || undefined,
      status: status || undefined,
      featured: featured === "true" ? true : undefined,
      page: 1,
    }));
  }, [searchParams]);

  const loadPageData = async () => {
    setLoading(true);
    try {
      const data = await getCasesPageData();
      setCategories(data.categories);
      setCarouselData(data.carousel);
    } catch (error) {
      console.error("Error loading cases page data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters: CaseFilterParams) => {
    setFilters(newFilters);

    // 更新URL参数
    const params = new URLSearchParams();
    if (newFilters.categoryId) params.set("category", newFilters.categoryId);
    if (newFilters.serviceId) params.set("service", newFilters.serviceId);
    if (newFilters.style) params.set("style", newFilters.style);
    if (newFilters.status) params.set("status", newFilters.status);
    if (newFilters.featured) params.set("featured", "true");

    setSearchParams(params);
  };

  if (loading) {
    return (
      <div className="cases-page cases-page--loading">
        <Loading />
      </div>
    );
  }

  return (
    <div className="cases-page">
      {/* 轮播图区域 */}
      <CasesHero carouselData={carouselData} />

      {/* 主要内容区域 */}
      <div className="cases-page__main">
        <div className="cases-page__container">
          <div className="cases-page__layout">
            {/* 左侧筛选区域 */}
            <div className="cases-page__sidebar">
              <CaseFilter
                categories={categories}
                onFilterChange={handleFilterChange}
                currentFilters={filters}
              />
            </div>

            {/* 右侧案例列表区域 */}
            <div className="cases-page__content">
              <CaseList
                filters={filters}
                onFiltersChange={handleFilterChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
