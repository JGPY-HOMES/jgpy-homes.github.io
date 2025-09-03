// 案例分类树结构
export interface CaseCategory {
  id: string;
  name: string;
  parentId?: string;
  children?: CaseCategory[];
  serviceId: string; // 关联的服务ID
  description?: string;
  image?: string;
  sort: number;
}

// 案例基本信息
export interface Case {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  categoryId: string;
  serviceId: string;
  tags: string[];
  images: string[];
  coverImage: string;
  area?: number; // 面积
  style?: string; // 风格
  budget?: string; // 预算
  duration?: string; // 工期
  location?: string; // 位置
  status: 'completed' | 'in-progress' | 'planning';
  createdAt: string;
  updatedAt: string;
  featured: boolean; // 是否推荐
  viewCount: number;
  likeCount: number;
}

// 案例详情
export interface CaseDetail extends Case {
  content: CaseContent[];
  clientInfo?: {
    name: string;
    feedback: string;
    rating: number;
  };
  designTeam?: {
    designer: string;
    architect?: string;
    projectManager: string;
  };
  materials?: {
    name: string;
    brand: string;
    price?: number;
  }[];
  timeline?: {
    phase: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
}

// 案例内容块
export interface CaseContent {
  type: 'text' | 'image' | 'gallery' | 'video' | 'before-after';
  content: string;
  images?: string[];
  title?: string;
  description?: string;
  order: number;
}

// 案例轮播图数据
export interface CaseCarouselItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  featured: boolean;
}

// 案例列表响应
export interface CaseListResponse {
  cases: Case[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

// 案例筛选参数
export interface CaseFilterParams {
  categoryId?: string;
  serviceId?: string;
  tags?: string[];
  status?: string;
  featured?: boolean;
  area?: {
    min?: number;
    max?: number;
  };
  style?: string;
  budget?: {
    min?: number;
    max?: number;
  };
  page?: number;
  pageSize?: number;
  sortBy?: 'createdAt' | 'viewCount' | 'likeCount' | 'area';
  sortOrder?: 'asc' | 'desc';
}

// 案例页面数据
export interface CasesPageData {
  carousel: CaseCarouselItem[];
  categories: CaseCategory[];
  featuredCases: Case[];
  totalCount: number;
}
