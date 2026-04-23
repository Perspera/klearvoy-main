# 资源迁移检查清单

使用本清单将外部媒体链接迁移到项目可管理的资源目录中。

## 1) 目标目录结构

- `assets/images/hero/`
- `assets/images/products/`
- `assets/images/company/`
- `assets/images/team/`
- `assets/images/contact/`
- `assets/videos/`
- `assets/catalogs/`

## 2) 命名规则

- 使用小写 kebab-case 命名。
- 名称保持可读、语义清晰且稳定。
- 仅在内容确实变化时增加版本标识。

示例：

- `hero-office-factory.jpg`
- `product-wardrobe-handle-butterfly.png`
- `factory-overview.mp4`

## 3) 迁移步骤

1. 每次只下载一个外部资源。
2. 提交前先压缩图片/视频。
3. 将资源放入正确目录。
4. 更新 `index.htm` 中对应的 `src` URL。
5. 在桌面端和移动端验证渲染效果。
6. 移除废弃引用。

## 4) 优化规则

- 图片优先使用 WebP（必要时回退 PNG/JPG）。
- 在保证清晰度的前提下尽量减小图片体积。
- 首屏以下图片使用 `loading="lazy"`。
- 非自动播放场景下，视频保持 `preload="none"`。

## 5) 验证项

- 不再存在 `raw.githubusercontent.com` 媒体链接（预期保留文件除外）。
- Lighthouse Performance 分数提升。
- 浏览器网络面板无媒体请求报错。
