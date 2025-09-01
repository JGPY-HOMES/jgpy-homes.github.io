import apiClient from './config';
import { CompanyInfo } from '@/entities/company.entity';

export class CompanyApi {
  /**
   * 获取公司信息
   */
  static async getCompanyInfo(): Promise<CompanyInfo> {
    try {
      const response = await apiClient.get<CompanyInfo>('/company.json');
      return response.data;
    } catch (error) {
      console.error('获取公司信息失败:', error);
      throw new Error('获取公司信息失败');
    }
  }
}

export default CompanyApi;
