import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/images/logo.jpg';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="河南交个朋友装饰有限公司logo" className="h-10 w-auto" />
              <span className="ml-2 text-xl font-bold">河南交个朋友装饰</span>
            </div>
            <p className="text-gray-400 mb-4">专业室内外装修设计服务提供商，为您打造理想空间。</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-weixin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-weibo text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-qq text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">首页</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">服务</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">案例</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">关于我们</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">服务项目</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">家装设计</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">工装设计</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">软装搭配</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">园林景观</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">装修施工</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-gray-400" />
                <span className="text-gray-400">河南省郑州市金水区花园路126号</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-gray-400" />
                <span className="text-gray-400">400-123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-gray-400" />
                <span className="text-gray-400">contact@hnjygpzs.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© 2025 河南交个朋友装饰有限公司. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};
    