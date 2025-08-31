import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWeixin, 
  FaWeibo, 
  FaQq,
  FaHome,
  FaTools,
  FaImages,
  FaInfoCircle,
  FaPaintBrush,
  FaBuilding,
  FaCouch,
  FaTree,
  FaHammer
} from 'react-icons/fa';
import logo from '../../assets/images/logo.jpg';
import './Footer.scss';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: '首页', icon: FaHome },
    { path: '/services', label: '服务', icon: FaTools },
    { path: '/projects', label: '案例', icon: FaImages },
    { path: '/about', label: '关于我们', icon: FaInfoCircle },
    { path: '/contact', label: '联系我们', icon: FaPhone },
  ];

  const services = [
    { label: '家装设计', icon: FaHome, anchor: 'home-decoration' },
    { label: '工装设计', icon: FaBuilding, anchor: 'commercial-decoration' },
    { label: '软装搭配', icon: FaCouch, anchor: 'soft-furnishing' },
    { label: '园林景观', icon: FaTree, anchor: 'landscape-design' },
    { label: '装修施工', icon: FaHammer, anchor: 'construction-services' },
  ];

  const socialLinks = [
    { icon: FaWeixin, label: '微信', href: '#', color: '#07C160' },
    { icon: FaWeibo, label: '微博', href: '#', color: '#E6162D' },
    { icon: FaQq, label: 'QQ', href: '#', color: '#12B7F5' },
  ];

  const scrollToAnchor = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      // 动态计算头部高度
      const header = document.querySelector('.header');
      const headerHeight = header ? header.getBoundingClientRect().height : 80;
      
      // 考虑服务模块的padding和视觉空间
      const servicePadding = 64; // $spacing-3xl = 64px
      const additionalOffset = 30; // 额外的视觉空间，确保标题完全可见
      
      // 计算目标滚动位置，让锚点位置在视窗中更合适
      const elementPosition = element.offsetTop - headerHeight - additionalOffset;
      
      // 平滑滚动到目标位置
      window.scrollTo({
        top: Math.max(0, elementPosition),
        behavior: 'smooth'
      });
    }
  };

  const handleServiceClick = (anchor: string) => {
    // 如果当前在服务页面，直接滚动到锚点
    if (window.location.pathname === '/services') {
      scrollToAnchor(anchor);
    } else {
      // 如果不在服务页面，先跳转到服务页面，然后滚动到锚点
      window.location.href = `/services#${anchor}`;
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* 主要内容区域 */}
        <div className="footer__main">
          {/* 公司信息 */}
          <div className="footer__section footer__company-section">
            <div className="footer__logo">
              <img src={logo} alt="交个朋友装饰logo" className="footer__logo-img" />
              <div className="footer__company-info">
                <h3 className="footer__company-name">交个朋友装饰</h3>
                <p className="footer__company-desc">专业室内外装修设计服务提供商，为您打造理想空间。</p>
              </div>
            </div>
            
            <div className="footer__social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  style={{ '--social-color': social.color } as React.CSSProperties}
                  aria-label={social.label}
                >
                  <social.icon />
              </a>
              ))}
            </div>
          </div>

          {/* 快速链接 */}
          <div className="footer__section footer__quick-links">
            <h4 className="footer__section-title">快速链接</h4>
            <nav className="footer__nav">
              {quickLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className="footer__nav-link"
                >
                  <link.icon className="footer__nav-icon" />
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* 服务项目 */}
          <div className="footer__section footer__services">
            <h4 className="footer__section-title">服务项目</h4>
            <nav className="footer__nav">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => handleServiceClick(service.anchor)}
                  className="footer__nav-link"
                  type="button"
                >
                  <service.icon className="footer__nav-icon" />
                  <span>{service.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* 公司资质 */}
          <div className="footer__section footer__qualifications-section">
            <h4 className="footer__section-title">公司资质</h4>
            <div className="footer__qualifications">
              <div className="qualification-item">
                <FaBuilding className="qualification-item__icon" />
                <span className="qualification-item__text">建筑装饰工程专业承包</span>
              </div>
              <div className="qualification-item">
                <FaTools className="qualification-item__icon" />
                <span className="qualification-item__text">室内装饰设计资质</span>
              </div>
              <div className="qualification-item">
                <FaCouch className="qualification-item__icon" />
                <span className="qualification-item__text">软装设计服务认证</span>
              </div>
            </div>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>© {currentYear} 河南交个朋友装饰有限公司. 保留所有权利.</p>
          </div>
          <div className="footer__links">
            <a href="#" className="footer__link">隐私政策</a>
            <a href="#" className="footer__link">服务条款</a>
            <a href="#" className="footer__link">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
    