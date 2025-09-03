import React, { useEffect, useState } from "react";
import "./PageLoader.scss";

interface PageLoaderProps {
  isLoading: boolean;
  onLoadComplete?: () => void;
  children: React.ReactNode;
}

export const PageLoader: React.FC<PageLoaderProps> = ({
  isLoading,
  onLoadComplete,
  children,
}) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowContent(true);
        onLoadComplete?.();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading, onLoadComplete]);

  return (
    <>
      {isLoading && (
        <div className="page-loader">
          <div className="page-loader__content">
            <div className="construction-house">
              {/* 房子主体 */}
              <div className="house-body">
                <div className="house-roof"></div>
                <div className="house-wall">
                  <div className="house-door"></div>
                  <div className="house-window house-window--left"></div>
                  <div className="house-window house-window--right"></div>
                </div>
              </div>

              {/* 装修工具 */}
              <div className="construction-tools">
                <div className="tool tool--hammer">
                  <div className="hammer-handle"></div>
                  <div className="hammer-head"></div>
                </div>
                <div className="tool tool--paintbrush">
                  <div className="paintbrush-handle"></div>
                  <div className="paintbrush-bristles"></div>
                </div>
                <div className="tool tool--saw">
                  <div className="saw-handle"></div>
                  <div className="saw-blade"></div>
                </div>
              </div>

              {/* 装饰元素 */}
              <div className="decorations">
                <div className="flower flower--1"></div>
                <div className="flower flower--2"></div>
                <div className="flower flower--3"></div>
                <div className="tree"></div>
              </div>

              {/* 进度条 */}
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>

              <div className="loading-text">
                <span className="loading-text__main">正在装修您的小屋</span>
                <span className="loading-text__sub">请稍候...</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`page-content ${showContent ? "page-content--visible" : ""}`}
      >
        {children}
      </div>
    </>
  );
};
