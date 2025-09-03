import React, { useState, useEffect } from 'react';
import type { CaseCategory, CaseFilterParams } from '@/entities';
import './CaseFilter.scss';

interface CaseFilterProps {
  categories: CaseCategory[];
  onFilterChange: (filters: CaseFilterParams) => void;
  currentFilters: CaseFilterParams;
}

export const CaseFilter: React.FC<CaseFilterProps> = ({
  categories,
  onFilterChange,
  currentFilters
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [filterHeight, setFilterHeight] = useState(0);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const filterRef = React.useRef<HTMLDivElement>(null);

  // 监听滚动，实现固定效果
  useEffect(() => {
    const handleScroll = () => {
      if (filterRef.current) {
        const rect = filterRef.current.getBoundingClientRect();
        const shouldBeSticky = rect.top <= 0 && window.innerWidth > 768;
        setIsSticky(shouldBeSticky);
      }
    };

    // 获取筛选器高度
    if (filterRef.current) {
      setFilterHeight(filterRef.current.offsetHeight);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // 切换分类展开状态
  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  // 处理分类选择
  const handleCategorySelect = (categoryId: string) => {
    onFilterChange({
      ...currentFilters,
      categoryId: currentFilters.categoryId === categoryId ? undefined : categoryId,
      page: 1 // 重置页码
    });
  };

  // 处理服务选择
  const handleServiceSelect = (serviceId: string) => {
    onFilterChange({
      ...currentFilters,
      serviceId: currentFilters.serviceId === serviceId ? undefined : serviceId,
      categoryId: undefined, // 清空分类选择
      page: 1 // 重置页码
    });
  };

  // 处理风格筛选
  const handleStyleSelect = (style: string) => {
    onFilterChange({
      ...currentFilters,
      style: currentFilters.style === style ? undefined : style,
      page: 1 // 重置页码
    });
  };

  // 处理状态筛选
  const handleStatusSelect = (status: string) => {
    onFilterChange({
      ...currentFilters,
      status: currentFilters.status === status ? undefined : status,
      page: 1 // 重置页码
    });
  };

  // 处理推荐筛选
  const handleFeaturedToggle = () => {
    onFilterChange({
      ...currentFilters,
      featured: currentFilters.featured === true ? undefined : true,
      page: 1 // 重置页码
    });
  };

  // 清空所有筛选
  const clearAllFilters = () => {
    onFilterChange({
      page: 1
    });
  };

  // 切换移动端筛选器展开状态
  const toggleMobileExpanded = () => {
    setIsMobileExpanded(!isMobileExpanded);
  };

  // 检查是否有活跃的筛选条件
  const hasActiveFilters = currentFilters.serviceId || 
                          currentFilters.categoryId || 
                          currentFilters.style || 
                          currentFilters.status || 
                          currentFilters.featured;

  // 获取所有风格选项
  const getAllStyles = () => {
    const styles = new Set<string>();
    categories.forEach(category => {
      if (category.children) {
        category.children.forEach(child => {
          if (child.name.includes('风格')) {
            styles.add(child.name);
          }
        });
      }
    });
    return Array.from(styles);
  };

  const styles = getAllStyles();

  return (
    <>
      {/* 占位符，防止sticky时布局跳动 */}
      {isSticky && <div style={{ height: filterHeight }} />}
      
      <div 
        ref={filterRef}
        className={`case-filter ${isSticky ? 'case-filter--sticky' : ''} ${isMobileExpanded ? 'case-filter--mobile-expanded' : ''}`}
      >
        <div className="case-filter__container">
          <div className="case-filter__header">
            <h3 className="case-filter__title">筛选条件</h3>
            <div className="case-filter__header-actions">
              <button 
                className="case-filter__clear"
                onClick={clearAllFilters}
              >
                清空筛选
              </button>
              <button 
                className="case-filter__mobile-toggle"
                onClick={toggleMobileExpanded}
              >
                {isMobileExpanded ? '收起' : (hasActiveFilters ? '筛选中' : '展开')}
              </button>
            </div>
          </div>

        <div className="case-filter__content">
          {/* 服务分类 */}
          <div className="case-filter__section">
            <h4 className="case-filter__section-title">服务分类</h4>
            <div className="case-filter__options">
              {categories.map(category => (
                <div key={category.id} className="case-filter__option">
                  <button
                    className={`case-filter__option-button ${
                      currentFilters.serviceId === category.id ? 'case-filter__option-button--active' : ''
                    }`}
                    onClick={() => handleServiceSelect(category.id)}
                  >
                    {category.name}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 具体分类 */}
          {currentFilters.serviceId && (
            <div className="case-filter__section">
              <h4 className="case-filter__section-title">具体分类</h4>
              <div className="case-filter__options">
                {categories
                  .find(cat => cat.id === currentFilters.serviceId)
                  ?.children?.map(category => (
                    <div key={category.id} className="case-filter__option">
                      <button
                        className={`case-filter__option-button ${
                          currentFilters.categoryId === category.id ? 'case-filter__option-button--active' : ''
                        }`}
                        onClick={() => handleCategorySelect(category.id)}
                      >
                        {category.name}
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* 风格筛选 */}
          {styles.length > 0 && (
            <div className="case-filter__section">
              <h4 className="case-filter__section-title">风格</h4>
              <div className="case-filter__options">
                {styles.map(style => (
                  <div key={style} className="case-filter__option">
                    <button
                      className={`case-filter__option-button ${
                        currentFilters.style === style ? 'case-filter__option-button--active' : ''
                      }`}
                      onClick={() => handleStyleSelect(style)}
                    >
                      {style}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 状态筛选 */}
          <div className="case-filter__section">
            <h4 className="case-filter__section-title">状态</h4>
            <div className="case-filter__options">
              <div className="case-filter__option">
                <button
                  className={`case-filter__option-button ${
                    currentFilters.status === 'completed' ? 'case-filter__option-button--active' : ''
                  }`}
                  onClick={() => handleStatusSelect('completed')}
                >
                  已完成
                </button>
              </div>
              <div className="case-filter__option">
                <button
                  className={`case-filter__option-button ${
                    currentFilters.status === 'in-progress' ? 'case-filter__option-button--active' : ''
                  }`}
                  onClick={() => handleStatusSelect('in-progress')}
                >
                  进行中
                </button>
              </div>
              <div className="case-filter__option">
                <button
                  className={`case-filter__option-button ${
                    currentFilters.status === 'planning' ? 'case-filter__option-button--active' : ''
                  }`}
                  onClick={() => handleStatusSelect('planning')}
                >
                  规划中
                </button>
              </div>
            </div>
          </div>

          {/* 推荐筛选 */}
          <div className="case-filter__section">
            <h4 className="case-filter__section-title">推荐</h4>
            <div className="case-filter__options">
              <div className="case-filter__option">
                <button
                  className={`case-filter__option-button ${
                    currentFilters.featured === true ? 'case-filter__option-button--active' : ''
                  }`}
                  onClick={handleFeaturedToggle}
                >
                  推荐案例
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
