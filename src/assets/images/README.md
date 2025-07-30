# 图片资源说明

本目录包含项目中使用的所有图片资源，采用SVG格式以确保最佳性能和可缩放性。

## 目录结构

```
src/assets/images/
├── hero/           # 轮播图图片
│   ├── hero-1.svg  # 现代客厅设计
│   ├── hero-2.svg  # 厨房设计
│   └── hero-3.svg  # 卧室设计
├── services/       # 服务相关图片
│   ├── interior-design.svg  # 室内设计服务
│   └── construction.svg     # 施工服务
├── about/          # 关于我们图片
│   └── about-us.svg        # 公司介绍图片
├── projects/       # 项目案例图片
│   ├── project-1.svg       # 现代客厅案例
│   └── project-2.svg       # 厨房设计案例
└── index.ts        # 图片资源索引文件
```

## 图片特点

- **格式**: SVG矢量图形
- **主题色**: 使用品牌主色调 #2F6B4F
- **风格**: 扁平化设计风格
- **尺寸**: 响应式设计，可自适应不同屏幕尺寸

## 使用方法

### 1. 直接引用
```tsx
<img src="/src/assets/images/hero/hero-1.svg" alt="现代客厅设计" />
```

### 2. 使用索引文件
```tsx
import { images } from '@/assets/images';

<img src={images.hero.hero1} alt="现代客厅设计" />
```

### 3. 在组件中使用
```tsx
import { heroImages } from '@/assets/images';

const carouselItems = [
  {
    id: 1,
    image: heroImages.hero1,
    title: '专业家装设计',
    description: '为您打造温馨舒适的家居环境'
  }
];
```

## 设计规范

### 色彩搭配
- 主色调: #2F6B4F (深绿色)
- 辅助色: #4A8B6F (中绿色)
- 深色: #1E4A3A (深绿色)
- 强调色: #5CB85C (亮绿色)
- 背景色: #F8F9FA (浅灰色)

### 设计原则
1. **扁平化**: 使用简洁的几何图形
2. **一致性**: 保持统一的视觉风格
3. **可读性**: 确保在不同尺寸下都清晰可辨
4. **品牌性**: 体现公司专业、可靠的形象

## 维护说明

- 新增图片时请遵循现有的命名规范
- 更新图片时请同步更新 `index.ts` 文件
- 保持SVG代码的简洁性和可维护性
- 定期检查图片在不同设备上的显示效果 