#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * 构建后图片压缩脚本
 * 专门用于压缩 dist/assets/ 和 dist/data/ 中的图片
 */

class DistImageCompressor {
  constructor(options = {}) {
    this.options = {
      quality: options.quality || 50, // 进一步降低质量以获得更小文件
      maxWidth: options.maxWidth || 800, // 最大宽度800px
      maxHeight: options.maxHeight || 600, // 最大高度600px
      targetFileSize: options.targetFileSize || 20 * 1024, // 目标文件大小20KB
      outputFormat: options.outputFormat || 'jpeg',
      backup: false, // 构建后不需要备份
      ...options
    };
    
    this.stats = {
      processed: 0,
      skipped: 0,
      errors: 0,
      originalSize: 0,
      compressedSize: 0
    };
  }

  /**
   * 检查是否安装了 sharp
   */
  checkDependencies() {
    try {
      require('sharp');
      return true;
    } catch (error) {
      console.log('❌ 未找到 sharp 库，正在安装...');
      try {
        execSync('npm install sharp --save-dev', { stdio: 'inherit' });
        console.log('✅ sharp 库安装成功');
        return true;
      } catch (installError) {
        console.error('❌ sharp 库安装失败:', installError.message);
        return false;
      }
    }
  }

  /**
   * 获取文件大小（字节）
   */
  getFileSize(filePath) {
    try {
      return fs.statSync(filePath).size;
    } catch (error) {
      return 0;
    }
  }

  /**
   * 格式化文件大小
   */
  formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  /**
   * 压缩单个图片
   */
  async compressImage(inputPath, outputPath) {
    try {
      const sharp = require('sharp');
      const originalSize = this.getFileSize(inputPath);
      
      let pipeline = sharp(inputPath);
      
      // 获取图片信息
      const metadata = await pipeline.metadata();
      
      // 计算新的尺寸
      let { width, height } = metadata;
      if (width > this.options.maxWidth || height > this.options.maxHeight) {
        const ratio = Math.min(
          this.options.maxWidth / width,
          this.options.maxHeight / height
        );
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }
      
      // 应用压缩设置
      pipeline = pipeline.resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true
      });
      
      // 动态调整质量以达到目标文件大小
      let quality = this.options.quality;
      let compressedSize = 0;
      let attempts = 0;
      const maxAttempts = 5;
      
      do {
        // 根据输出格式设置压缩参数
        let currentPipeline = pipeline.clone();
        switch (this.options.outputFormat.toLowerCase()) {
          case 'jpeg':
          case 'jpg':
            currentPipeline = currentPipeline.jpeg({ 
              quality: quality,
              progressive: true,
              mozjpeg: true
            });
            break;
          case 'png':
            currentPipeline = currentPipeline.png({ 
              quality: quality,
              compressionLevel: 9
            });
            break;
          case 'webp':
            currentPipeline = currentPipeline.webp({ 
              quality: quality
            });
            break;
          default:
            currentPipeline = currentPipeline.jpeg({ quality: quality });
        }
        
        // 写入压缩后的图片
        await currentPipeline.toFile(outputPath);
        compressedSize = this.getFileSize(outputPath);
        
        // 如果文件大小超过目标大小，降低质量
        if (compressedSize > this.options.targetFileSize && quality > 15) {
          quality = Math.max(15, quality - 8);
          attempts++;
        } else {
          break;
        }
      } while (compressedSize > this.options.targetFileSize && attempts < maxAttempts);
      
      const compressionRatio = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
      
      this.stats.processed++;
      this.stats.originalSize += originalSize;
      this.stats.compressedSize += compressedSize;
      
      const sizeStatus = compressedSize <= this.options.targetFileSize ? '✅' : '⚠️';
      console.log(`${sizeStatus} ${path.basename(inputPath)}: ${this.formatFileSize(originalSize)} → ${this.formatFileSize(compressedSize)} (${compressionRatio}% 压缩, 质量: ${quality})`);
      
      return {
        success: true,
        originalSize,
        compressedSize,
        compressionRatio: parseFloat(compressionRatio),
        finalQuality: quality
      };
      
    } catch (error) {
      this.stats.errors++;
      console.error(`❌ 压缩失败 ${inputPath}:`, error.message);
      return { success: false, error: error.message };
    }
  }

  /**
   * 处理单个文件或目录
   */
  async processPath(inputPath) {
    const stat = fs.statSync(inputPath);
    
    if (stat.isDirectory()) {
      // 处理目录
      const files = fs.readdirSync(inputPath);
      for (const file of files) {
        const fullPath = path.join(inputPath, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // 递归处理子目录
          await this.processPath(fullPath);
        } else if (this.isImageFile(file)) {
          // 处理图片文件
          await this.processImageFile(fullPath);
        }
      }
    } else if (this.isImageFile(inputPath)) {
      // 处理单个图片文件
      await this.processImageFile(inputPath);
    }
  }

  /**
   * 处理单个图片文件
   */
  async processImageFile(inputPath) {
    // 检查是否需要跳过
    if (this.shouldSkip(inputPath)) {
      this.stats.skipped++;
      console.log(`⏭️  跳过: ${path.basename(inputPath)}`);
      return;
    }

    // 创建临时文件
    const tempPath = inputPath + '.tmp';
    
    // 压缩图片
    const result = await this.compressImage(inputPath, tempPath);
    
    if (result.success) {
      // 如果压缩成功且压缩率大于3%，替换原文件
      if (result.compressionRatio > 3) {
        fs.copyFileSync(tempPath, inputPath);
        console.log(`🔄 已替换: ${path.basename(inputPath)}`);
      } else {
        console.log(`ℹ️  压缩率较低，保留原文件: ${path.basename(inputPath)}`);
      }
      
      // 删除临时文件
      if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath);
      }
    }
  }

  /**
   * 检查是否为图片文件
   */
  isImageFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
  }

  /**
   * 检查是否应该跳过该文件
   */
  shouldSkip(filePath) {
    // 跳过太小的文件
    const size = this.getFileSize(filePath);
    if (size < 5120) return true; // 小于5KB的文件跳过
    
    // 跳过临时文件
    if (filePath.endsWith('.tmp')) return true;
    
    return false;
  }

  /**
   * 打印统计信息
   */
  printStats() {
    console.log('\n📊 构建后图片压缩统计:');
    console.log(`   处理文件: ${this.stats.processed}`);
    console.log(`   跳过文件: ${this.stats.skipped}`);
    console.log(`   错误文件: ${this.stats.errors}`);
    console.log(`   原始大小: ${this.formatFileSize(this.stats.originalSize)}`);
    console.log(`   压缩大小: ${this.formatFileSize(this.stats.compressedSize)}`);
    console.log(`   目标大小: ${this.formatFileSize(this.options.targetFileSize)} (每张图片)`);
    console.log(`   最大尺寸: ${this.options.maxWidth}x${this.options.maxHeight}px`);
    
    if (this.stats.originalSize > 0) {
      const totalCompression = ((this.stats.originalSize - this.stats.compressedSize) / this.stats.originalSize * 100).toFixed(1);
      console.log(`   总压缩率: ${totalCompression}%`);
      console.log(`   节省空间: ${this.formatFileSize(this.stats.originalSize - this.stats.compressedSize)}`);
    }
  }

  /**
   * 压缩 dist 目录中的图片
   */
  async compressDistImages() {
    const distPaths = ['dist/assets', 'dist/data/images'];
    
    for (const distPath of distPaths) {
      if (fs.existsSync(distPath)) {
        console.log(`\n📁 处理目录: ${distPath}`);
        await this.processPath(distPath);
      } else {
        console.log(`⚠️  目录不存在: ${distPath}`);
      }
    }
  }
}

/**
 * 主函数
 */
async function main() {
  const compressor = new DistImageCompressor({
    quality: 50, // 初始质量50%
    maxWidth: 800, // 最大宽度800px
    maxHeight: 600, // 最大高度600px
    targetFileSize: 20 * 1024, // 目标文件大小20KB
    outputFormat: 'jpeg',
    backup: false
  });

  // 检查依赖
  if (!compressor.checkDependencies()) {
    process.exit(1);
  }

  console.log('🚀 开始压缩构建后的图片...\n');

  try {
    // 压缩 dist 目录中的图片
    await compressor.compressDistImages();
    
    // 打印统计信息
    compressor.printStats();
    
    console.log('\n✅ 构建后图片压缩完成！');
    
  } catch (error) {
    console.error('❌ 压缩过程中发生错误:', error.message);
    process.exit(1);
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  main().catch(console.error);
}

module.exports = DistImageCompressor;
