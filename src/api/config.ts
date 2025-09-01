import axios, { AxiosInstance, AxiosResponse } from 'axios';

// API 基础配置
export const API_CONFIG = {
  baseURL: '/data/db', // 指向 data/db 目录
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  // 添加缓存控制
  cache: 'no-cache',
};

// 创建 axios 实例
export const apiClient: AxiosInstance = axios.create(API_CONFIG);

// 响应拦截器
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    console.error('API 请求错误:', error);
    return Promise.reject(error);
  }
);

// 请求拦截器
apiClient.interceptors.request.use(
  (config) => {
    // 添加时间戳防止缓存
    if (config.method === 'get') {
      config.params = {
        ...config.params,
        _t: Date.now(),
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
