import apiClient from "./config";
import type { ContactPageData } from "@/entities/contact.entity";

export class ContactApi {
  /**
   * 获取联系页面信息
   */
  static async getContactInfo(): Promise<ContactPageData> {
    try {
      const response = await apiClient.get<ContactPageData>("/contact.json");
      return response.data;
    } catch (error) {
      console.error("获取联系页面信息失败:", error);
      throw new Error("获取联系页面信息失败");
    }
  }
}

export default ContactApi;
