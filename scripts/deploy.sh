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

# 运行代码检查
echo "🔍 运行代码检查..."
npm run lint || exit 1

# 构建项目（包含数据文件复制）
echo "📦 构建项目..."
npm run build || exit 1

# 部署到 GitHub Pages
echo "🌐 部署到 GitHub Pages..."
npx gh-pages -d dist --message "🚀 Deploy: $(date '+%Y-%m-%d %H:%M:%S')" || exit 1

echo "✅ 部署完成！"
echo "🌍 网站地址: https://jgpy-homes.github.io"
echo "📝 部署时间: $(date '+%Y-%m-%d %H:%M:%S')"