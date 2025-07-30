import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaTools, FaImages, FaInfoCircle, FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from '../../assets/images/logo.jpg';
import './Header.scss';

export const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 关闭菜单
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // 导航项配置
  const navItems = [
    { path: '/', label: '首页', icon: FaHome },
    { path: '/services', label: '服务', icon: FaTools },
    { path: '/projects', label: '案例', icon: FaImages },
    { path: '/about', label: '关于我们', icon: FaInfoCircle },
    { path: '/contact', label: '联系我们', icon: FaPhone },
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <NavLink to="/" className="logo-link" onClick={closeMenu}>
            <img src={logo} alt="河南交个朋友装饰有限公司logo" className="header__logo-img" />
            <div className="logo-text">
              <span className="logo-text__chinese">河南交个朋友装饰</span>
              <span className="logo-text__english">Make a good home</span>
            </div>
          </NavLink>
        </div>

        {/* 桌面端导航 */}
        <nav className="header__nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'nav-link--active' : ''}`
                }
                onClick={closeMenu}
              >
                <Icon className="nav-link__icon" />
                <span className="nav-link__text">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* 移动端菜单按钮 */}
        <button 
          className="header__menu-btn"
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-label="切换菜单"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 移动端导航菜单 */}
      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__overlay" onClick={closeMenu}></div>
        <div className="mobile-menu__content">
          <div className="mobile-menu__header">
                         <div className="mobile-menu__logo">
               <img src={logo} alt="河南交个朋友装饰有限公司logo" className="mobile-menu__logo-img" />
               <span className="mobile-menu__title">河南交个朋友装饰</span>
             </div>
            <button className="mobile-menu__close" onClick={closeMenu}>
              <FaTimes />
            </button>
          </div>
          
          <nav className="mobile-menu__nav">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => 
                    `mobile-nav-link ${isActive ? 'mobile-nav-link--active' : ''}`
                  }
                  onClick={closeMenu}
                >
                  <Icon className="mobile-nav-link__icon" />
                  <span className="mobile-nav-link__text">{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          <div className="mobile-menu__footer">
            <div className="mobile-menu__contact">
              <div className="contact-item">
                <FaPhone className="contact-item__icon" />
                <span className="contact-item__text">400-123-4567</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-item__icon" />
                <span className="contact-item__text">contact@hnjygpzs.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
    