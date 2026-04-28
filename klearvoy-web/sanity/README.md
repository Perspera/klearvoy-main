# Klearvoy Sanity CMS

Sanity CMS 内容管理系统，用于管理 Klearvoy 五金外贸网站的内容。

## 功能特性

- **产品管理**: 管理五金产品信息，支持中英文双语
- **案例管理**: 管理成功案例展示
- **新闻管理**: 管理新闻动态内容
- **页面管理**: 管理页面内容和配置
- **多语言支持**: 支持中英文双语内容管理

## 技术栈

- **Sanity CMS**: 现代化内容管理系统
- **React**: 用户界面框架
- **TypeScript**: 类型安全开发
- **Next.js**: 前端框架集成

## 文件结构

```
sanity/
├── package.json           # 项目依赖配置
├── sanity.config.ts       # Sanity 配置文件
├── tsconfig.json          # TypeScript 配置
├── .sanityrc              # Sanity CLI 配置
├── client.ts              # Sanity 客户端
└── schemaTypes/           # 内容模型定义
    ├── index.ts           # Schema 入口
    ├── product.ts         # 产品模型
    ├── caseStudy.ts       # 案例模型
    ├── news.ts            # 新闻模型
    └── page.ts            # 页面内容模型
```

## 内容模型

### 1. 产品模型 (Product)

| 字段 | 类型 | 说明 |
|------|------|------|
| name | string | 产品名称（英文） |
| nameZh | string | 产品名称（中文） |
| slug | slug | URL 标识符 |
| category | string | 产品分类 |
| description | text | 产品描述（英文） |
| descriptionZh | text | 产品描述（中文） |
| features | array | 特性列表（英文） |
| featuresZh | array | 特性列表（中文） |
| image | image | 主图 |
| gallery | array | 图片库 |
| price | string | 价格 |
| isCustomizable | boolean | 是否可定制 |
| technicalSpecs | object | 技术规格 |

**产品分类选项**:
- wardrobe: 衣柜五金
- board: 板材
- engineering: 工程解决方案
- handle: 拉手和旋钮
- hinge: 铰链
- slide: 滑轨

### 2. 案例模型 (CaseStudy)

| 字段 | 类型 | 说明 |
|------|------|------|
| title | string | 案例标题（英文） |
| titleZh | string | 案例标题（中文） |
| slug | slug | URL 标识符 |
| client | string | 客户名称（英文） |
| clientZh | string | 客户名称（中文） |
| category | string | 案例分类 |
| description | text | 案例描述（英文） |
| descriptionZh | text | 案例描述（中文） |
| image | image | 案例图片 |
| gallery | array | 图片库 |
| date | date | 项目日期 |
| location | string | 项目地点 |
| projectValue | string | 项目价值 |

**案例分类选项**:
- office: 办公
- hotel: 酒店
- residential: 住宅
- commercial: 商业

### 3. 新闻模型 (News)

| 字段 | 类型 | 说明 |
|------|------|------|
| title | string | 新闻标题（英文） |
| titleZh | string | 新闻标题（中文） |
| slug | slug | URL 标识符 |
| category | string | 新闻分类 |
| excerpt | text | 摘要（英文） |
| excerptZh | text | 摘要（中文） |
| content | text | 内容（英文） |
| contentZh | text | 内容（中文） |
| image | image | 特色图片 |
| date | date | 发布日期 |
| author | string | 作者 |
| isFeatured | boolean | 是否精选 |

**新闻分类选项**:
- company: 公司新闻
- product: 产品发布
- industry: 行业新闻
- press: 新闻稿

### 4. 页面内容模型 (Page)

| 字段 | 类型 | 说明 |
|------|------|------|
| title | string | 页面标题（英文） |
| titleZh | string | 页面标题（中文） |
| slug | slug | URL 标识符 |
| pageType | string | 页面类型 |
| metaTitle | string | Meta 标题（英文） |
| metaTitleZh | string | Meta 标题（中文） |
| metaDescription | text | Meta 描述（英文） |
| metaDescriptionZh | text | Meta 描述（中文） |
| heroTitle | string | Hero 标题（英文） |
| heroTitleZh | string | Hero 标题（中文） |
| heroSubtitle | text | Hero 副标题（英文） |
| heroSubtitleZh | text | Hero 副标题（中文） |
| heroImage | image | Hero 背景图片 |
| content | array | 页面内容区块 |
| isPublished | boolean | 是否发布 |

**页面类型选项**:
- home: 首页
- about: 关于我们
- products: 产品中心
- cases: 案例展示
- news: 新闻动态
- download: 资料下载
- contact: 联系我们
- custom: 自定义页面

## 安装步骤

### 1. 安装依赖

```bash
cd sanity
npm install
```

### 2. 登录 Sanity

```bash
sanity login
```

### 3. 创建/连接项目

如果尚未创建项目，请运行：

```bash
sanity init
```

或者使用现有项目 ID 更新 `.sanityrc` 文件：

```json
{
  "api": {
    "projectId": "your-project-id",
    "dataset": "production"
  }
}
```

### 4. 启动开发服务器

```bash
sanity dev
```

访问 http://localhost:3333 即可进入 Sanity Studio。

### 5. 部署到 Sanity

```bash
sanity deploy
```

## 集成到 Next.js

Sanity CMS 已与 Next.js 项目集成，数据获取函数位于 `lib/sanity-fetch.ts`。

### 环境变量

在 `.env.local` 文件中配置以下环境变量：

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

### 数据获取示例

```typescript
import { getProducts, getNews, getCaseStudies } from '../lib/sanity-fetch';

// 获取所有产品
const products = await getProducts();

// 获取所有新闻
const news = await getNews();

// 获取所有案例
const cases = await getCaseStudies();
```

## 开发指南

### 添加新字段

1. 在对应的 schema 文件中添加字段定义
2. 运行 `sanity dev` 重启开发服务器
3. 刷新 Sanity Studio 即可看到新字段

### 数据迁移

使用 Sanity CLI 导入导出数据：

```bash
# 导出数据
sanity dataset export

# 导入数据
sanity dataset import dump.tar.gz
```

## 注意事项

1. **图片优化**: 上传图片时请确保图片尺寸适当，建议最大宽度 1920px
2. **Slug 唯一性**: 确保每个文档的 slug 唯一
3. **多语言内容**: 请同时填写中英文内容，确保网站切换语言时显示正确
4. **数据备份**: 定期导出数据进行备份

## 许可证

MIT License

## 支持

如有问题，请联系开发团队。