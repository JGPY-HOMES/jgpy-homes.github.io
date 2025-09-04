#!/bin/bash

# 数据文件复制脚本
echo "📁 开始复制数据文件..."

# 检查 data 文件夹是否存在
if [ ! -d "data" ]; then
    echo "❌ data 文件夹不存在"
    exit 1
fi

# 检查 dist 文件夹是否存在
if [ ! -d "dist" ]; then
    echo "❌ dist 文件夹不存在，请先运行构建"
    exit 1
fi

# 复制 data 文件夹到 dist
echo "📂 复制 data 文件夹..."
cp -r data dist/
if [ $? -ne 0 ]; then
    echo "❌ data 文件夹复制失败"
    exit 1
fi

echo "✅ 数据文件复制完成！"
echo "📁 已复制: dist/data/"
