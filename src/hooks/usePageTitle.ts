import { useEffect } from 'react';

// 设置页面标题的工具函数
export const setPageTitle = (title: string) => {
  document.title = title;
};

// 页面标题 Hook
export const usePageTitle = (title: string) => {
  useEffect(() => {
    setPageTitle(title);
  }, [title]);
};
