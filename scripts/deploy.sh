#!/bin/bash

# 部署脚本 - 河南交个朋友装饰有限公司官网
echo "🚀 开始部署流程..."

# 检查是否在正确的分支上
current_branch=$(git branch --show-current)
if [ "$current_branch" != "main" ] && [ "$current_branch" != "master" ]; then
    echo "⚠️  当前分支: $current_branch，建议在 main 或 master 分支上部署"
    read -p "是否继续部署? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ 部署已取消"
        exit 1
    fi
fi

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  检测到未提交的更改，请先提交代码"
    git status --short
    exit 1
fi

# 安装依赖（如果需要）
if [ ! -d "node_modules" ] || [ "package.json" -nt "node_modules" ]; then
    echo "📦 安装依赖..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ 依赖安装失败"
        exit 1
    fi
fi

# 运行代码检查
echo "🔍 运行代码检查..."
npm run lint
if [ $? -ne 0 ]; then
    echo "❌ 代码检查失败，请修复错误后重试"
    exit 1
fi

# 构建项目
echo "📦 构建项目..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ 构建失败"
    exit 1
fi

# 检查构建输出目录
if [ ! -d "dist" ]; then
    echo "❌ 构建输出目录 dist 不存在"
    exit 1
fi

# 部署到 GitHub Pages
echo "🌐 部署到 GitHub Pages..."

# 检查是否安装了 gh-pages
if ! command -v npx &> /dev/null; then
    echo "❌ npx 未安装，请先安装 Node.js"
    exit 1
fi

# 使用 gh-pages 部署
npx gh-pages -d dist --message "🚀 Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

if [ $? -ne 0 ]; then
    echo "❌ 部署失败"
    exit 1
fi

echo "✅ 部署完成！"
echo "🌍 网站地址: https://jgpy-homes.github.io"
echo "📝 部署时间: $(date '+%Y-%m-%d %H:%M:%S')"
