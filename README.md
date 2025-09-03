# 河南交个朋友装饰有限公司官网

基于 React + TypeScript + Vite 构建的响应式企业官网，支持三端适配（PC、平板、移动端），并兼容低版本浏览器。

## 项目介绍

本项目是河南交个朋友装饰有限公司的官方网站，展示公司业务、案例展示、品牌理念及联系方式等核心内容，采用现代化前端技术栈开发，确保跨设备访问体验一致。

## 技术栈

- **核心框架**：React 18
- **类型检查**：TypeScript
- **构建工具**：Vite
- **样式解决方案**：Tailwind CSS + SCSS
- **路由管理**：React Router v6
- **PWA 支持**：vite-plugin-pwa
- **代码规范**：ESLint + Prettier

## 项目结构

```
react-ts-vite-project/
├── public/                 # 静态资源（HTML入口、图标等）
├── src/
│   ├── css/                # 全局样式
│   │   └── global.scss     # 全局SCSS样式
│   ├── assets/             # 资源文件（图片、字体等）
│   │   └── images/         # 图片资源
│   ├── components/         # 通用组件
│   │   ├── Header/         # 页头组件
│   │   ├── Footer/         # 页脚组件
│   │   ├── Banner/         # 轮播图组件
│   │   └── ...
│   ├── constants/          # 常量定义
│   ├── enums/              # 枚举类型
│   ├── pages/              # 页面组件
│   │   ├── Home/           # 首页
│   │   ├── About/          # 关于我们
│   │   ├── Services/       # 服务项目
│   │   ├── Projects/       # 案例展示
│   │   └── Contact/        # 联系我们
│   ├── router/             # 路由配置
│   ├── types/              # TypeScript类型定义
│   ├── utils/              # 工具函数
│   ├── App.tsx             # 应用入口组件
│   └── main.tsx            # 程序入口文件
├── .env.development        # 开发环境变量
├── .env.production         # 生产环境变量
├── tailwind.config.js      # Tailwind配置
├── vite.config.ts          # Vite配置
└── tsconfig.json           # TypeScript配置
```

## 功能特性

1. **响应式设计**：适配PC、平板、手机等多终端设备
2. **PWA支持**：支持离线访问和添加到桌面
3. **性能优化**：代码分割、懒加载、资源预加载
4. **浏览器兼容**：兼容IE11及现代浏览器
5. **SEO友好**：语义化HTML结构
6. **动画效果**：页面过渡、交互反馈动画

## 快速开始

### 前置要求

- Node.js ≥ 14.14.0
- npm ≥ 6.14.0 或 yarn ≥ 1.22.0

### 安装依赖

```bash
# 使用npm
npm install

# 或使用yarn
yarn install
```

### 开发环境

```bash
# 启动开发服务器（默认端口3000）
npm run dev

# 或
yarn dev
```

访问 http://localhost:3000 查看效果

### 构建生产版本

```bash
# 构建生产环境资源
npm run build

# 或
yarn build
```

构建产物将生成在 `dist` 目录下

### 预览生产版本

```bash
# 预览构建结果
npm run preview

# 或
yarn preview
```

## 浏览器兼容性

- 现代浏览器（Chrome、Firefox、Safari、Edge最新版本）
- IE 11（通过Babel编译支持）
- 主流移动浏览器（微信浏览器、Safari Mobile、Chrome Mobile）

## 部署说明

1. 执行 `npm run build` 生成生产环境资源
2. 将 `dist` 目录下的文件部署到Web服务器（如Nginx、Apache）
3. 服务器配置示例（Nginx）：

```nginx
server {
    listen 80;
    server_name www.jiaogepengyouzs.com;
    root /path/to/dist;
    index index.html;

    # 支持SPA路由
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 缓存静态资源
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, max-age=2592000";
    }
}
```

## 维护与扩展

- 新增页面：在 `pages` 目录下创建组件，在 `router/index.ts` 中配置路由
- 新增组件：在 `components` 目录下创建组件文件夹，包含 `.tsx` 和样式文件
- 新增样式变量：在 `css/variables.scss` 中定义，全局可引用
- 新增图片资源：放入 `assets/images` 目录，通过 `@/assets/images/xxx` 引用

## 许可证

本项目为企业内部使用，版权归河南交个朋友装饰有限公司所有。