# 部署指南

本项目配置了自动部署到 GitHub Pages 的完整流程。

## 🚀 部署方式

### 1. 手动部署
```bash
npm run deploy
```

### 2. 自动部署（推荐）
当你在 `main` 或 `master` 分支提交代码时，会自动触发部署流程。

## 📋 部署流程

1. **代码检查** - 运行 ESLint 检查代码质量
2. **代码格式化** - 使用 Prettier 格式化代码
3. **项目构建** - 使用 Vite 构建生产版本
4. **部署到 GitHub Pages** - 使用 gh-pages 部署到 GitHub Pages

## 🔧 配置说明

### Husky Git Hooks
- **pre-commit**: 提交前自动运行代码格式化和检查
- **post-commit**: 提交后询问是否部署（仅在 main/master 分支）

### 部署脚本 (`scripts/deploy.sh`)
- 检查当前分支
- 检查未提交的更改
- 安装依赖（如需要）
- 运行代码检查
- 构建项目
- 部署到 GitHub Pages

## 🌐 网站地址

部署成功后，网站将在以下地址访问：
- **GitHub Pages**: https://jgpy-homes.github.io

## 📝 使用说明

### 开发流程
1. 在功能分支开发
2. 提交代码（会自动运行 pre-commit 检查）
3. 合并到 main 分支
4. 在 main 分支提交时会询问是否部署

### 分支策略
- `main/master` 分支：生产环境，提交后自动部署
- 其他分支：开发分支，不会自动部署

## 🛠️ 故障排除

### 构建失败
```bash
# 检查 TypeScript 错误
npm run build

# 检查代码格式
npm run lint
npm run format
```

### 部署失败
1. 确保在正确的分支上
2. 确保没有未提交的更改
3. 检查 GitHub Pages 设置
4. 确保有 gh-pages 权限

### 权限问题
```bash
# 给脚本添加执行权限
chmod +x scripts/deploy.sh
chmod +x .husky/pre-commit
chmod +x .husky/post-commit
```

## 📦 依赖说明

- **husky**: Git hooks 管理
- **gh-pages**: GitHub Pages 部署工具
- **eslint**: 代码质量检查
- **prettier**: 代码格式化

## 🔄 更新部署配置

如果需要修改部署配置，可以编辑以下文件：
- `scripts/deploy.sh` - 部署脚本
- `.husky/pre-commit` - 提交前检查
- `.husky/post-commit` - 提交后部署
- `vite.config.ts` - 构建配置
