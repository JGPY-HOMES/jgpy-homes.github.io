// 导入服务图片
import service1 from "../assets/images/services/1.jpg";
import service2 from "../assets/images/services/2.jpg";
import service3 from "../assets/images/services/3.jpg";
import service4 from "../assets/images/services/4.jpg";
import service5 from "../assets/images/services/5.jpg";

export const COMPANY_INFO = {
  name: "河南交个朋友装饰有限公司",
  shortName: "交个朋友装饰",
  slogan: "专业品质，用心服务",
  phone: "400-123-4567",
  email: "contact@hnjygpzs.com",
  address: "河南省郑州市金水区花园路126号",
  workingHours: "周一至周日 9:00-18:00",
};

export const NAV_ITEMS = [
  { path: "/", label: "首页" },
  { path: "/services", label: "服务" },
  { path: "/projects", label: "案例" },
  { path: "/about", label: "关于我们" },
  { path: "/contact", label: "联系我们" },
];

export const SERVICES = [
  {
    id: "service-hero",
    name: "服务项目",
    icon: "🏠",
    subtitle: "专业的装修设计服务，为您打造理想的生活空间",
    description:
      "我们提供从设计到施工的一站式服务，涵盖家装、工装、软装、园林景观等全方位装修需求",
    image: service1,
    features: [],
  },
  {
    id: "home-decoration",
    name: "家装设计",
    icon: "🏡",
    subtitle: "个性化家居设计",
    description:
      "专业的家装设计服务，根据您的需求和预算，为您量身定制温馨舒适的家居环境。从户型分析、风格定位到施工监理，我们提供全流程的专业服务。",
    image: service2,
    features: [
      "个性化设计方案",
      "专业施工团队",
      "全程质量监控",
      "预算合理控制",
    ],
  },
  {
    id: "commercial-decoration",
    name: "工装设计",
    icon: "🏢",
    subtitle: "商业空间设计",
    description:
      "专业的商业空间设计服务，为办公、商业、餐饮等场所提供专业的装修设计方案。注重功能性与美观性的完美结合，提升品牌形象和用户体验。",
    image: service3,
    features: ["商业空间规划", "品牌形象设计", "施工管理服务", "功能布局优化"],
  },
  {
    id: "soft-furnishing",
    name: "软装搭配",
    icon: "🛋️",
    subtitle: "软装设计与搭配",
    description:
      "专业的软装设计服务，通过家具、灯具、布艺、装饰品等软装元素的精心搭配，为您的空间增添温馨与美感，打造舒适宜人的生活环境。",
    image: service4,
    features: ["色彩搭配方案", "家具选配指导", "装饰品搭配", "灯光设计"],
  },
  {
    id: "landscape-design",
    name: "园林景观",
    icon: "🌳",
    subtitle: "景观设计与施工",
    description:
      "专业的园林景观设计服务，结合自然生态与人文美学，为您打造独特的户外空间。从庭院设计到公共景观，我们注重环保与美观的和谐统一。",
    image: service5,
    features: ["庭院景观设计", "植物配置方案", "水景设计施工", "园林小品设计"],
  },
  {
    id: "construction-services",
    name: "装修施工",
    icon: "🔧",
    subtitle: "专业施工服务",
    description:
      "专业的装修施工服务，拥有经验丰富的施工团队和严格的质量管理体系。从基础施工到精装修，我们确保每一个细节都达到最高标准。",
    image: service3,
    features: ["专业施工团队", "质量监控体系", "工期保证服务", "材料品质保证"],
  },
];

export const SERVICE_NAVIGATION = [
  { id: "service-hero", label: "服务项目", icon: "🏠" },
  { id: "home-decoration", label: "家装设计", icon: "🏡" },
  { id: "commercial-decoration", label: "工装设计", icon: "🏢" },
  { id: "soft-furnishing", label: "软装搭配", icon: "🛋️" },
  { id: "landscape-design", label: "园林景观", icon: "🌳" },
  { id: "construction-services", label: "装修施工", icon: "🔧" },
];
