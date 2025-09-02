import apiClient from './config';
import type { AboutPageData } from '@/entities/about.entity';

export class AboutApi {
  /**
   * 获取关于我们页面信息
   */
  static async getAboutInfo(): Promise<AboutPageData> {
    try {
      const response = await apiClient.get<AboutPageData>('/about.json');
      return response.data;
    } catch (error) {
      console.error('获取关于我们页面信息失败:', error);
      throw new Error('获取关于我们页面信息失败');
    }
  }
}

export default AboutApi;
