# 案例页面模块

## 概述

案例页面模块提供了完整的案例展示功能，包括案例列表、筛选、详情查看等功能。

## 功能特性

### 1. 案例轮播图 (CasesHero)

- 展示精选案例的轮播图
- 支持自动播放和手动切换
- 响应式设计，适配各种屏幕尺寸

### 2. 案例筛选 (CaseFilter)

- 基于服务分类的树形筛选结构
- 支持按风格、状态、推荐等条件筛选
- 固定滚动效果，提升用户体验
- 实时更新URL参数，支持分享和书签

### 3. 案例列表 (CaseList)

- 网格布局展示案例卡片
- 支持无限滚动加载
- 案例卡片包含封面图、标题、描述、标签等信息
- 显示浏览量、点赞数等统计数据

### 4. 案例详情 (CaseDetail)

- 完整的案例详情展示
- 支持多种内容类型：文本、图片、图库等
- 客户反馈、设计团队、项目时间线等信息
- 响应式设计

## 数据结构

### 案例分类 (CaseCategory)

```typescript
interface CaseCategory {
  id: string;
  name: string;
  parentId?: string;
  children?: CaseCategory[];
  serviceId: string;
  description?: string;
  image?: string;
  sort: number;
}
```

### 案例信息 (Case)

```typescript
interface Case {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  categoryId: string;
  serviceId: string;
  tags: string[];
  images: string[];
  coverImage: string;
  area?: number;
  style?: string;
  budget?: string;
  duration?: string;
  location?: string;
  status: "completed" | "in-progress" | "planning";
  createdAt: string;
  updatedAt: string;
  featured: boolean;
  viewCount: number;
  likeCount: number;
}
```

## 数据文件

### 1. 分类数据

- 文件位置: `data/db/projects/categories.json`
- 包含基于服务分类的树形结构

### 2. 案例列表

- 文件位置: `data/db/projects/cases.json`
- 包含所有案例的基本信息

### 3. 案例详情

- 文件位置: `data/db/projects/details/[case-id].json`
- 每个案例的详细信息和内容

### 4. 轮播图数据

- 文件位置: `data/db/projects/carousel.json`
- 案例页面轮播图的数据

## API 接口

### 获取案例列表

```typescript
getCases(params: CaseFilterParams): Promise<CaseListResponse>
```

### 获取案例详情

```typescript
getCaseDetail(id: string): Promise<CaseDetail | null>
```

### 获取案例分类

```typescript
getCaseCategories(): Promise<CaseCategory[]>
```

### 获取轮播图数据

```typescript
getCaseCarousel(): Promise<CaseCarouselItem[]>
```

## 路由配置

- `/cases` - 案例列表页面
- `/cases/:id` - 案例详情页面

## 使用示例

```typescript
import { Cases } from '@/pages/Cases';
import { CaseDetail } from '@/pages/CaseDetail';

// 在路由中使用
<Route path="/cases" element={<Cases />} />
<Route path="/cases/:id" element={<CaseDetail />} />
```

## 样式定制

所有组件都使用 SCSS 编写，支持主题定制：

- `CasesHero.scss` - 轮播图样式
- `CaseFilter.scss` - 筛选组件样式
- `CaseList.scss` - 案例列表样式
- `CaseDetail.scss` - 案例详情样式

## 响应式设计

所有组件都支持响应式设计：

- 桌面端：完整功能展示
- 平板端：适配中等屏幕
- 移动端：优化触摸操作

## 性能优化

- 图片懒加载
- 无限滚动加载
- 组件按需加载
- 缓存策略
