import apiClient from './config';
import type {
  ServicesPageData
} from '@/entities/services.entity';

export class ServicesApi {
  /**
   * 获取服务页面信息
   */
  static async getServiceInfo(): Promise<ServicesPageData> {
    try {
      const response = await apiClient.get<ServicesPageData>('/services.json');
      return response.data;
    } catch (error) {
      console.error('获取服务页面信息失败:', error);
      throw new Error('获取服务页面信息失败');
    }
  }
}

export default ServicesApi;
