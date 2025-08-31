import React, { useEffect, useRef } from 'react';
import './BaiduMap.scss';

interface BaiduMapProps {
  className?: string;
}

export const BaiduMap: React.FC<BaiduMapProps> = ({ className = '' }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // 动态加载百度地图API
    const loadBaiduMap = () => {
      if (window.BMap) {
        initMap();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://api.map.baidu.com/api?v=3.0&ak=RSF4c00s9xwliCcXXPixEl1pJZ1NqiTw&callback=initBaiduMap`;
      script.async = true;

      // 定义全局回调函数
      (window as any).initBaiduMap = () => {
        initMap();
      };

      document.head.appendChild(script);
    };

    const initMap = () => {
      if (!mapRef.current || !window.BMap) return;

      try {
        // 创建地图实例
        const map = new (window as any).BMap.Map(mapRef.current);
        mapInstanceRef.current = map;

        // 设置地图中心点（郑州市金水区花园路126号附近）
        const point = new (window as any).BMap.Point(113.665412, 34.757975);
        map.centerAndZoom(point, 15);

        // 启用滚轮缩放
        map.enableScrollWheelZoom(true);

        // 添加缩放控件
        map.addControl(new (window as any).BMap.NavigationControl());
        map.addControl(new (window as any).BMap.ScaleControl());

        // 添加标记点
        const marker = new (window as any).BMap.Marker(point);
        map.addOverlay(marker);

        // 创建信息窗口
        const infoWindow = new (window as any).BMap.InfoWindow(
          `
          <div style="padding: 10px; max-width: 250px;">
            <h4 style="margin: 0 0 8px 0; color: #2c3e50; font-size: 16px;">
              河南交个朋友装饰有限公司
            </h4>
            <p style="margin: 0 0 6px 0; color: #34495e; font-size: 14px;">
              <strong>地址：</strong>河南省郑州市金水区花园路126号
            </p>
            <p style="margin: 0 0 6px 0; color: #34495e; font-size: 14px;">
              <strong>电话：</strong>400-123-4567
            </p>
            <p style="margin: 0; color: #7f8c8d; font-size: 13px;">
              位于郑州市中心区域，交通便利，地铁1号线花园路站步行5分钟可达
            </p>
          </div>
        `,
          {
            width: 280,
            height: 120,
            title: '公司位置',
          }
        );

        // 点击标记显示信息窗口
        marker.addEventListener('click', () => {
          map.openInfoWindow(infoWindow, point);
        });

        // 默认显示信息窗口
        map.openInfoWindow(infoWindow, point);

        // 添加地图样式
        try {
          map.setMapStyle({
            style: 'midnight',
          });
        } catch (error) {
          console.log('地图样式设置失败，使用默认样式');
        }
      } catch (error) {
        console.error('百度地图初始化失败:', error);
        // 如果地图加载失败，显示备用内容
        if (mapRef.current) {
          mapRef.current.innerHTML = `
            <div class="map-fallback">
              <div class="map-fallback__content">
                <h3>地图加载中...</h3>
                <p>如果地图无法显示，请检查网络连接</p>
                <div class="map-fallback__info">
                  <h4>河南交个朋友装饰有限公司</h4>
                  <p><strong>地址：</strong>河南省郑州市金水区花园路126号</p>
                  <p><strong>交通：</strong>地铁1号线花园路站步行5分钟可达</p>
                </div>
              </div>
            </div>
          `;
        }
      }
    };

    loadBaiduMap();

    // 清理函数
    return () => {
      if (
        mapInstanceRef &&
        mapInstanceRef.current &&
        mapInstanceRef.current.destroy
      ) {
        mapInstanceRef.current.destroy();
      }
      // 清理全局回调
      delete (window as any).initBaiduMap;
    };
  }, []);

  return (
    <div className={`baidu-map ${className}`}>
      <div className="baidu-map__header">
        <h3 className="baidu-map__title">公司位置</h3>
        <p className="baidu-map__subtitle">河南省郑州市金水区花园路126号</p>
      </div>
      <div className="baidu-map__container" ref={mapRef}></div>
    </div>
  );
};
