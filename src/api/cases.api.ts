import { API_CONFIG } from "./config";

const API_BASE_URL = API_CONFIG.baseURL;
import type {
  Case,
  CaseDetail,
  CaseCategory,
  CaseCarouselItem,
  CaseListResponse,
  CaseFilterParams,
  CasesPageData,
} from "../entities";

// 获取案例轮播图数据
export const getCaseCarousel = async (): Promise<CaseCarouselItem[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/carousel.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch case carousel data");
    }
    const data = await response.json();
    return data.carousel || [];
  } catch (error) {
    console.error("Error fetching case carousel:", error);
    return [];
  }
};

// 获取案例分类数据
export const getCaseCategories = async (): Promise<CaseCategory[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/categories.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch case categories data");
    }
    const data = await response.json();
    return data.categories || [];
  } catch (error) {
    console.error("Error fetching case categories:", error);
    return [];
  }
};

// 获取案例列表
export const getCases = async (
  params: CaseFilterParams = {},
): Promise<CaseListResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/cases.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch cases data");
    }
    const data = await response.json();
    let cases = data.cases || [];

    // 应用筛选条件
    if (params.categoryId) {
      cases = cases.filter(
        (caseItem: Case) => caseItem.categoryId === params.categoryId,
      );
    }
    if (params.serviceId) {
      cases = cases.filter(
        (caseItem: Case) => caseItem.serviceId === params.serviceId,
      );
    }
    if (params.tags && params.tags.length > 0) {
      cases = cases.filter((caseItem: Case) =>
        params.tags!.some((tag) => caseItem.tags.includes(tag)),
      );
    }
    if (params.status) {
      cases = cases.filter(
        (caseItem: Case) => caseItem.status === params.status,
      );
    }
    if (params.featured !== undefined) {
      cases = cases.filter(
        (caseItem: Case) => caseItem.featured === params.featured,
      );
    }
    if (params.area) {
      if (params.area.min !== undefined) {
        cases = cases.filter(
          (caseItem: Case) => (caseItem.area || 0) >= params.area!.min!,
        );
      }
      if (params.area.max !== undefined) {
        cases = cases.filter(
          (caseItem: Case) => (caseItem.area || 0) <= params.area!.max!,
        );
      }
    }
    if (params.style) {
      cases = cases.filter((caseItem: Case) => caseItem.style === params.style);
    }

    // 排序
    if (params.sortBy) {
      cases.sort((a: Case, b: Case) => {
        let aValue: any, bValue: any;
        switch (params.sortBy) {
          case "createdAt":
            aValue = new Date(a.createdAt).getTime();
            bValue = new Date(b.createdAt).getTime();
            break;
          case "viewCount":
            aValue = a.viewCount;
            bValue = b.viewCount;
            break;
          case "likeCount":
            aValue = a.likeCount;
            bValue = b.likeCount;
            break;
          case "area":
            aValue = a.area || 0;
            bValue = b.area || 0;
            break;
          default:
            return 0;
        }

        if (params.sortOrder === "desc") {
          return bValue - aValue;
        } else {
          return aValue - bValue;
        }
      });
    }

    // 分页
    const page = params.page || 1;
    const pageSize = params.pageSize || 12;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedCases = cases.slice(startIndex, endIndex);

    return {
      cases: paginatedCases,
      total: cases.length,
      page,
      pageSize,
      hasMore: endIndex < cases.length,
    };
  } catch (error) {
    console.error("Error fetching cases:", error);
    return {
      cases: [],
      total: 0,
      page: 1,
      pageSize: 12,
      hasMore: false,
    };
  }
};

// 获取案例详情
export const getCaseDetail = async (id: string): Promise<CaseDetail | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/details/${id}.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch case detail data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching case detail:", error);
    return null;
  }
};

// 获取推荐案例
export const getFeaturedCases = async (limit: number = 6): Promise<Case[]> => {
  try {
    const response = await getCases({ featured: true, pageSize: limit });
    return response.cases;
  } catch (error) {
    console.error("Error fetching featured cases:", error);
    return [];
  }
};

// 获取案例页面数据
export const getCasesPageData = async (): Promise<CasesPageData> => {
  try {
    const [carousel, categories, featuredCases] = await Promise.all([
      getCaseCarousel(),
      getCaseCategories(),
      getFeaturedCases(6),
    ]);

    const allCases = await getCases();

    return {
      carousel,
      categories,
      featuredCases,
      totalCount: allCases.total,
    };
  } catch (error) {
    console.error("Error fetching cases page data:", error);
    return {
      carousel: [],
      categories: [],
      featuredCases: [],
      totalCount: 0,
    };
  }
};

// 增加案例浏览量
export const incrementCaseViewCount = async (id: string): Promise<void> => {
  try {
    // 这里可以实现实际的API调用，目前只是模拟
    console.log(`Incrementing view count for case ${id}`);
  } catch (error) {
    console.error("Error incrementing case view count:", error);
  }
};

// 点赞案例
export const likeCase = async (id: string): Promise<boolean> => {
  try {
    // 这里可以实现实际的API调用，目前只是模拟
    console.log(`Liking case ${id}`);
    return true;
  } catch (error) {
    console.error("Error liking case:", error);
    return false;
  }
};
