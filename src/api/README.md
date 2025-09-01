# API 使用说明

## 概述
本项目使用 axios 进行 HTTP 请求，所有数据都存储在 `data/db/` 目录下的 JSON 文件中。

## 项目结构
```
src/
├── api/           # API 服务层
│   ├── company.api.ts
│   ├── contact.api.ts
│   ├── services.api.ts
│   ├── config.ts
│   └── index.ts
├── entities/      # 类型定义和实体
│   ├── company.entity.ts
│   ├── contact.entity.ts
│   ├── services.entity.ts
│   └── index.ts
└── ...
```

## 路径别名配置
项目配置了 `@` 别名，指向 `src` 目录，使导入路径更加清晰：
- `@/` → `src/`
- `@/api` → `src/api`
- `@/entities` → `src/entities`

## 数据文件
- `company.json`: 公司信息
- `contact.json`: 联系页面数据（轮播图、联系信息）
- `services.json`: 服务页面数据（服务列表）

## 数据结构示例

### contact.json 结构
```json
{
  "carousels": [...],        // 轮播图数据
  "contact": {
    "title": "联系信息",
    "subtitle": "多种联系方式，随时为您服务",
    "methods": [...],         // 联系方式列表
    "address": {...}          // 公司地址
  }
}
```

### services.json 结构
```json
{
  "services": [...]          // 服务列表
}
```

## API 服务

### CompanyApi
获取公司信息
```typescript
import { CompanyApi } from '@/api';

const companyInfo = await CompanyApi.getCompanyInfo();
```

### ContactApi
获取联系页面信息
```typescript
import { ContactApi } from '@/api';

// 获取所有联系页面信息
const contactInfo = await ContactApi.getContactInfo();

// 使用数据
const { carousels, contact } = contactInfo;
```

### ServicesApi
获取服务页面信息
```typescript
import { ServicesApi } from '@/api';

// 获取所有服务页面信息
const serviceInfo = await ServicesApi.getServiceInfo();

// 使用数据
const { services } = serviceInfo;
```

## 在页面中使用

### 示例：Contact 页面
```typescript
import React, { useState, useEffect } from 'react';
import { ContactApi, ContactPageData } from '@/api';

export const Contact: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<ContactPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await ContactApi.getContactInfo();
        setContactInfo(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : '获取数据失败');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>加载中...</div>;
  if (error) return <div>错误: {error}</div>;
  if (!contactInfo) return <div>无数据</div>;

  return (
    <div>
      {/* 传递数据给组件 */}
      <ContactHero carousels={contactInfo.carousels} />
      <ContactInfo contact={contactInfo.contact} />
    </div>
  );
};
```

### 示例：Services 页面
```typescript
import React, { useState, useEffect } from 'react';
import { ServicesApi, ServicesPageData } from '@/api';

export const Services: React.FC = () => {
  const [serviceInfo, setServiceInfo] = useState<ServicesPageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ServicesApi.getServiceInfo();
        setServiceInfo(data);
      } catch (error) {
        console.error('获取服务数据失败:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>加载中...</div>;
  if (!serviceInfo) return <div>无数据</div>;

  return (
    <div>
      <ServicesList services={serviceInfo.services} />
      {/* 导航数据可以从服务数据中生成 */}
      <ServiceNavigation services={serviceInfo.services} />
    </div>
  );
};
```

## 类型定义
所有 API 都有完整的 TypeScript 类型定义，类型定义位于 `src/entities/` 目录中：

### 公司相关类型 (`company.entity.ts`)
- `CompanyInfo`: 公司信息

### 联系信息相关类型 (`contact.entity.ts`)
- `Carousel`: 轮播图项目
- `ContactMethod`: 联系方式
- `CompanyAddress`: 公司地址
- `ContactInfo`: 联系信息
- `ContactPageData`: 联系页面数据

### 服务相关类型 (`services.entity.ts`)
- `Service`: 服务信息
- `ServicesPageData`: 服务页面数据

### 导入类型的方式
```typescript
// 方式1: 从 entities 直接导入（推荐）
import { ContactPageData, ServicesPageData } from '@/entities';

// 方式2: 从 api 索引文件导入
import { ContactPageData, ServicesPageData } from '@/api';
```

## 数据设计原则
- **简化接口**: 每个页面只需要一个接口获取所有数据
- **避免重复**: 导航数据从服务数据中生成，避免重复存储
- **单一数据源**: 服务信息只在一个地方维护，确保数据一致性
- **灵活派生**: 通过API方法动态生成所需的数据结构
- **命名规范**: 使用简洁、语义化的命名，避免冗余前缀

## 命名优化说明
- `carouselItems` → `carousels` (更简洁)
- `contactData` → `contact` (去掉冗余后缀)
- `contactMethods` → `methods` (去掉冗余前缀)
- `companyAddress` → `address` (更简洁)

## 错误处理
所有 API 方法都包含错误处理，建议在使用时进行 try-catch 处理。
