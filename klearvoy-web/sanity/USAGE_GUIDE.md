# Sanity CMS 管理控制台使用指南

## 目录

1. [概述](#概述)
2. [登录与访问](#登录与访问)
3. [仪表盘概览](#仪表盘概览)
4. [内容管理](#内容管理)
   - [产品管理](#产品管理)
   - [案例管理](#案例管理)
   - [新闻管理](#新闻管理)
   - [页面管理](#页面管理)
5. [内容创建与编辑](#内容创建与编辑)
6. [发布与预览](#发布与预览)
7. [搜索与过滤](#搜索与过滤)
8. [内容组织](#内容组织)
9. [最佳实践](#最佳实践)
10. [常见问题](#常见问题)

---

## 概述

Sanity CMS 是一个现代化的内容管理系统，为 Klearvoy 五金外贸网站提供强大的内容管理能力。通过 Sanity Studio，您可以轻松管理产品、案例、新闻和页面内容，并支持中英文双语。

---

## 登录与访问

### 本地开发环境

```bash
# 进入 Sanity 目录
cd klearvoy-web/sanity

# 启动开发服务器
sanity dev
```

访问地址：http://localhost:3333/

### 线上环境

访问地址：https://k68hiu2m.sanity.studio/

### 登录方式

1. 使用 Google 账号登录
2. 使用邮箱和密码登录

---

## 仪表盘概览

登录后，您将看到 Sanity Studio 的主界面：

### 左侧导航栏

| 图标 | 名称 | 功能 |
|------|------|------|
| 📦 | Desk | 内容管理主界面 |
| ⚙️ | Structure | 内容结构管理 |
| 👁️ | Vision | GraphQL 查询工具 |
| 📊 | Settings | 系统设置 |

### 内容类型

在 Desk 视图中，您可以看到以下内容类型：

- **Products** - 产品管理
- **Case Studies** - 案例展示
- **News** - 新闻动态
- **Pages** - 页面内容

---

## 内容管理

### 产品管理

#### 产品列表

点击左侧导航的 **Products** 查看所有产品：

- 显示产品名称、分类、创建日期
- 支持搜索和过滤
- 点击产品名称进入编辑页面

#### 产品字段说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| Name | 文本 | ✅ | 产品名称（英文） |
| Name (Chinese) | 文本 | | 产品名称（中文） |
| Slug | Slug | ✅ | URL 标识符，自动生成 |
| Category | 下拉 | ✅ | 产品分类 |
| Description | 文本 | ✅ | 产品描述（英文） |
| Description (Chinese) | 文本 | | 产品描述（中文） |
| Features | 标签 | | 特性列表（英文） |
| Features (Chinese) | 标签 | | 特性列表（中文） |
| Image | 图片 | ✅ | 主图 |
| Gallery | 图片数组 | | 图片库 |
| Price | 文本 | | 价格 |
| Is Customizable | 布尔 | | 是否可定制 |
| Technical Specs | 对象 | | 技术规格 |

#### 产品分类

| 值 | 显示名称 |
|----|----------|
| wardrobe | Wardrobe Hardware |
| board | Board Materials |
| engineering | Engineering Solutions |
| handle | Handles & Knobs |
| hinge | Hinges |
| slide | Slides |

---

### 案例管理

#### 案例字段说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| Title | 文本 | ✅ | 案例标题（英文） |
| Title (Chinese) | 文本 | | 案例标题（中文） |
| Slug | Slug | ✅ | URL 标识符 |
| Client | 文本 | ✅ | 客户名称（英文） |
| Client (Chinese) | 文本 | | 客户名称（中文） |
| Category | 下拉 | | 案例分类 |
| Description | 文本 | ✅ | 案例描述（英文） |
| Description (Chinese) | 文本 | | 案例描述（中文） |
| Image | 图片 | ✅ | 案例图片 |
| Gallery | 图片数组 | | 图片库 |
| Date | 日期 | | 项目日期 |
| Location | 文本 | | 项目地点 |
| Project Value | 文本 | | 项目价值 |

#### 案例分类

| 值 | 显示名称 |
|----|----------|
| office | Office |
| hotel | Hotel |
| residential | Residential |
| commercial | Commercial |

---

### 新闻管理

#### 新闻字段说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| Title | 文本 | ✅ | 新闻标题（英文） |
| Title (Chinese) | 文本 | | 新闻标题（中文） |
| Slug | Slug | ✅ | URL 标识符 |
| Category | 下拉 | | 新闻分类 |
| Excerpt | 文本 | ✅ | 摘要（英文） |
| Excerpt (Chinese) | 文本 | | 摘要（中文） |
| Content | 文本 | ✅ | 内容（英文） |
| Content (Chinese) | 文本 | | 内容（中文） |
| Image | 图片 | | 特色图片 |
| Date | 日期 | ✅ | 发布日期 |
| Author | 文本 | | 作者 |
| Is Featured | 布尔 | | 是否精选 |

#### 新闻分类

| 值 | 显示名称 |
|----|----------|
| company | Company News |
| product | Product Launch |
| industry | Industry News |
| press | Press Release |

---

### 页面管理

#### 页面字段说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| Title | 文本 | ✅ | 页面标题（英文） |
| Title (Chinese) | 文本 | | 页面标题（中文） |
| Slug | Slug | ✅ | URL 标识符 |
| Page Type | 下拉 | ✅ | 页面类型 |
| Meta Title | 文本 | | SEO 标题（英文） |
| Meta Title (Chinese) | 文本 | | SEO 标题（中文） |
| Meta Description | 文本 | | SEO 描述（英文） |
| Meta Description (Chinese) | 文本 | | SEO 描述（中文） |
| Hero Title | 文本 | | 英雄区标题（英文） |
| Hero Title (Chinese) | 文本 | | 英雄区标题（中文） |
| Hero Subtitle | 文本 | | 英雄区副标题（英文） |
| Hero Subtitle (Chinese) | 文本 | | 英雄区副标题（中文） |
| Hero Image | 图片 | | 英雄区背景图 |
| Is Published | 布尔 | | 是否发布 |

#### 页面类型

| 值 | 显示名称 |
|----|----------|
| home | Home |
| about | About |
| products | Products |
| cases | Cases |
| news | News |
| download | Download |
| contact | Contact |
| custom | Custom |

---

## 内容创建与编辑

### 创建新内容

1. 在左侧导航点击对应的内容类型
2. 点击右上角 **+ Add document** 按钮
3. 填写必填字段
4. 点击右上角 **Publish** 按钮发布

### 编辑现有内容

1. 在内容列表中点击要编辑的项目
2. 修改字段内容
3. 点击右上角 **Save** 保存草稿，或 **Publish** 发布

### 字段操作技巧

#### 图片上传
- 点击图片字段的上传区域
- 支持拖拽上传
- 可以裁剪和调整图片

#### Slug 生成
- 输入标题后，点击 Slug 字段的 **Generate** 按钮自动生成
- 可以手动修改

#### 日期选择
- 点击日期字段打开日历选择器
- 支持手动输入日期格式：YYYY-MM-DD

#### 布尔字段
- 点击开关切换状态

---

## 发布与预览

### 保存草稿

点击右上角 **Save** 按钮保存草稿：
- 草稿不会在网站上显示
- 可以随时继续编辑

### 发布内容

点击右上角 **Publish** 按钮发布：
- 发布后内容会立即在网站上显示
- 可以设置发布时间

### 取消发布

对于已发布的内容：
1. 点击右上角的 **...** 菜单
2. 选择 **Unpublish**
3. 确认取消发布

### 版本历史

1. 点击右上角的 **...** 菜单
2. 选择 **History**
3. 可以查看历史版本并恢复

---

## 搜索与过滤

### 全局搜索

1. 点击左上角的搜索图标
2. 输入关键词搜索
3. 支持搜索所有内容类型

### 按类型过滤

在 Desk 视图中：
- 点击左侧内容类型图标过滤
- 支持按创建日期排序

### 高级过滤

1. 点击内容列表上方的 **Filter** 按钮
2. 设置过滤条件
3. 应用过滤

---

## 内容组织

### 文档顺序

1. 在内容列表中，按住项目拖动
2. 调整显示顺序
3. 顺序会影响网站上的显示

### 批量操作

1. 选中多个项目（按住 Ctrl 点击）
2. 点击批量操作按钮
3. 执行批量删除或其他操作

---

## 最佳实践

### 内容管理规范

1. **多语言内容**：对于中英文双语字段，请确保同时填写
2. **图片优化**：上传图片前压缩，建议最大宽度 1920px
3. **Slug 规范**：使用小写字母和连字符，避免特殊字符
4. **内容审核**：发布前检查内容准确性

### SEO 优化

1. **Meta Title**：50-60 字符，包含关键词
2. **Meta Description**：150-160 字符，描述页面内容
3. **图片 Alt 文本**：填写图片描述，帮助搜索引擎理解

### 安全注意事项

1. 不要分享登录凭证
2. 定期更新密码
3. 限制 API Token 权限

---

## 常见问题

### Q1: 无法登录 Sanity Studio

**解决方案**：
- 检查网络连接
- 确认使用正确的账号登录
- 清除浏览器缓存

### Q2: 内容发布后不显示

**解决方案**：
- 确认内容已发布（不是草稿）
- 检查页面类型设置
- 刷新网站缓存

### Q3: 图片上传失败

**解决方案**：
- 检查图片格式（支持 JPG、PNG、WebP）
- 检查图片大小（最大 10MB）
- 检查网络连接

### Q4: 如何批量导入数据

**解决方案**：
- 使用 Sanity CLI 导入：
  ```bash
  sanity dataset import dump.tar.gz
  ```
- 确保数据格式正确

### Q5: 如何备份数据

**解决方案**：
- 导出数据集：
  ```bash
  sanity dataset export
  ```
- 定期备份到本地或云端

---

## 技术支持

如遇问题，请联系开发团队或查看官方文档：
- [Sanity 官方文档](https://www.sanity.io/docs)
- [Sanity Studio 指南](https://www.sanity.io/docs/studio)

---

**版本**: v1.0  
**日期**: 2026年4月  
**适用项目**: Klearvoy Hardware CMS