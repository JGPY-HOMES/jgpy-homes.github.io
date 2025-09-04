# 图片压缩脚本使用说明

本项目提供了多个图片压缩脚本，用于优化网站图片大小，提升加载速度。

## 脚本说明

### 1. 开发阶段图片压缩

#### `compress-images.js` (Node.js版本)
- **用途**: 压缩 `data/images/` 目录中的原始图片
- **特点**: 使用 Sharp 库，支持多种格式，自动备份原文件
- **使用方法**: `npm run compress-images`

#### `compress-images.sh` (Shell版本)
- **用途**: 压缩 `data/images/` 目录中的原始图片
- **特点**: 使用系统内置工具 (sips/ImageMagick)，无需额外依赖
- **使用方法**: `npm run compress-images:shell`

### 2. 构建后图片压缩

#### `compress-dist-images.js`
- **用途**: 压缩构建后的 `dist/assets/` 和 `dist/data/` 中的图片
- **特点**: 更激进的压缩设置，不备份原文件
- **自动执行**: 在 `npm run build` 时自动运行

## 使用方法

### 开发阶段压缩原始图片

```bash
# 使用 Node.js 版本 (推荐)
npm run compress-images

# 使用 Shell 版本
npm run compress-images:shell

# 压缩并清理备份文件
npm run compress-images:cleanup
```

### 构建时自动压缩

```bash
# 构建项目，会自动压缩 dist 中的图片
npm run build
```

### 手动压缩构建后的图片

```bash
# 单独压缩构建后的图片
npm run compress-dist-images
```

## 压缩参数

### 开发阶段压缩参数
- **质量**: 80% (可调整)
- **最大尺寸**: 1920x1080
- **输出格式**: JPEG
- **备份**: 是

### 构建后压缩参数
- **质量**: 75% (更激进)
- **最大尺寸**: 1920x1080
- **输出格式**: JPEG
- **备份**: 否

## 支持的图片格式

- JPEG (.jpg, .jpeg)
- PNG (.png)
- WebP (.webp)

## 压缩效果

根据测试，通常可以实现：
- **原始图片**: 20-50% 的压缩率
- **构建后图片**: 30-70% 的压缩率

## 注意事项

1. **备份**: 开发阶段压缩会自动备份原文件，构建后压缩不会备份
2. **小文件**: 小于 5-10KB 的文件会被跳过
3. **压缩率**: 如果压缩率低于 3-5%，会保留原文件
4. **依赖**: Node.js 版本需要 Sharp 库，会自动安装

## 故障排除

### Sharp 库安装失败
```bash
# 手动安装 Sharp
npm install sharp --save-dev

# 或者使用 Shell 版本
npm run compress-images:shell
```

### 权限问题
```bash
# 给脚本添加执行权限
chmod +x scripts/compress-images.sh
```

### 内存不足
- 减少同时处理的图片数量
- 降低压缩质量参数
- 分批处理图片

## 自定义配置

可以通过修改脚本中的参数来自定义压缩设置：

```javascript
const compressor = new ImageCompressor({
  quality: 80,        // 压缩质量 (1-100)
  maxWidth: 1920,     // 最大宽度
  maxHeight: 1080,    // 最大高度
  outputFormat: 'jpeg', // 输出格式
  backup: true        // 是否备份
});
```

## 性能优化建议

1. **开发阶段**: 使用较高的质量设置 (80-90%)
2. **生产构建**: 使用较低的质量设置 (70-80%)
3. **大图片**: 考虑使用 WebP 格式获得更好的压缩率
4. **响应式图片**: 为不同设备生成不同尺寸的图片
