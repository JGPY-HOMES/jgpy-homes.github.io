import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header bg-white shadow-md fixed w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="河南交个朋友装饰有限公司logo" className="h-10 w-auto" />
            <span className="ml-2 text-xl font-bold text-primary">河南交个朋友装饰</span>
          </NavLink>
        </div>

        {/* 桌面导航 */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary font-medium' : 'text-gray-700 hover:text-primary transition-colors'}>首页</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'text-primary font-medium' : 'text-gray-700 hover:text-primary transition-colors'}>服务</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-primary font-medium' : 'text-gray-700 hover:text-primary transition-colors'}>案例</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-primary font-medium' : 'text-gray-700 hover:text-primary transition-colors'}>关于我们</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-primary font-medium' : 'text-gray-700 hover:text-primary transition-colors'}>联系我们</NavLink>
        </nav>

        {/* 移动端菜单按钮 */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      {/* 移动端导航菜单 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary font-medium py-2' : 'text-gray-700 hover:text-primary py-2 transition-colors'} onClick={toggleMenu}>首页</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'text-primary font-medium py-2' : 'text-gray-700 hover:text-primary py-2 transition-colors'} onClick={toggleMenu}>服务</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-primary font-medium py-2' : 'text-gray-700 hover:text-primary py-2 transition-colors'} onClick={toggleMenu}>案例</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-primary font-medium py-2' : 'text-gray-700 hover:text-primary py-2 transition-colors'} onClick={toggleMenu}>关于我们</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-primary font-medium py-2' : 'text-gray-700 hover:text-primary py-2 transition-colors'} onClick={toggleMenu}>联系我们</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};
    