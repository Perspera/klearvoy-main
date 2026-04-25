# Klearvoy 官网项目

Klearvoy 官方网站工程仓库。

当前仓库保留遗留静态入口页（`index.htm`）以保障线上稳定服务，同时引入标准化研发结构，为后续迁移做准备。

## 项目结构

- `index.htm`：当前线上首页（遗留静态入口）。
- `CNAME`：GitHub Pages 自定义域名绑定文件。
- `assets/`：仓库内管理的本地静态资源。
- `docs/`：产品、研发、发布与运维文档。
- `.github/workflows/`：CI 工作流配置。

## 开发流程

1. 从 `main` 创建功能分支：`feature/<topic>`。
2. 若范围变更，优先更新文档（`docs/requirements.md`、`docs/architecture.md`）。
3. 在本地实现并测试变更。
4. 提交 PR，并按 `docs/pr-checklist.md` 完成检查项。
5. 通过评审且 CI 通过后再合并。

## 本地预览与自检

### 1) 本地预览

在仓库根目录执行：

```powershell
cd "f:\APP\klearvoy\klearvoy-main\klearvoy-frontend"
.\preview.ps1
```

默认端口为 `5500`，浏览器访问：

`http://localhost:5500/index.htm`

如需指定端口：

```powershell
.\preview.ps1 8000
```

### 2) 发布前自检

在 `klearvoy-frontend` 目录执行：

```powershell
.\check.ps1
```

当前自检覆盖项：

- 关键文件存在：`index.htm`、`404.html`、`robots.txt`、`sitemap.xml`、`favicon.svg`
- `robots.txt` 包含站点地图地址
- `sitemap.xml` 包含站点主域名
- `404.html` 含 `noindex`
- `index.htm` 正确引用 favicon
- 自动扫描 `index.htm` 中的本地 `src/href` 资源引用并校验文件存在性（缺失会输出清单并失败）

<!-- - 自动探测 `https://www.klearvoy.com/...` 链接可用性（异常时告警，不阻塞通过） -->

## 分支规范

- `main`：可用于生产发布的代码。
- `feature/*`：新功能开发。
- `fix/*`：缺陷修复。
- `chore/*`：维护与工具类改动。
- `docs/*`：文档更新。

## 提交规范

采用 Conventional Commits：

- `feat:` 新功能（feature）。
- `fix:` 缺陷修复（bug fix）。
- `docs:` 文档变更（不涉及功能代码逻辑）。
- `chore:` 杂项维护（构建、依赖、脚本、配置等）。
- `refactor:` 重构（不新增功能、不修复缺陷，仅优化结构）。
- `perf:` 性能优化（提升速度、减少资源消耗）。

示例：

`feat: add product section seo metadata`


# 资源目录

klearvoy-main\klearvoy-web\public\assets
该目录用于存放网站本地静态资源。

## 子目录

- `images/`：所有图片文件。
- `videos/`：公司与产品视频。
- `catalogs/`：可下载的 PDF 目录文件。

为保证一致性，文件名请统一使用小写 kebab-case。

## 开始使用

首先，运行开发服务器：

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
# 或
bun dev
```

<br />

# 发布流程

## 本地预览与自检

### 本地预览

在仓库根目录执行：

```powershell
cd "f:\APP\klearvoy\klearvoy-main\klearvoy-frontend"
.\preview.ps1
```

默认端口为 `5500`，浏览器访问：

`http://localhost:5500/index.htm`

如需指定端口：

```powershell
.\preview.ps1 8000
```

### 发布前自检

在 `klearvoy-frontend` 目录执行：

```powershell
.\check.ps1
```

当前自检覆盖项：

- 关键文件存在：`index.htm`、`404.html`、`robots.txt`、`sitemap.xml`、`favicon.svg`
- `robots.txt` 包含站点地图地址
- `sitemap.xml` 包含站点主域名
- `404.html` 含 `noindex`
- `index.htm` 正确引用 favicon
- 自动扫描 `index.htm` 中的本地 `src/href` 资源引用并校验文件存在性（缺失会输出清单并失败）

<!-- - 自动探测 `https://www.klearvoy.com/...` 链接可用性（异常时告警，不阻塞通过） -->

## 发布前检查清单

- 范围已确认并完成文档记录。
- PR 已通过评审。
- CI 检查已通过。
- 已执行 `.\check.ps1` 且结果通过。
- 关键链接与联系渠道已验证可用。
- SEO 基础项已具备（`title`、`description`、canonical）。

## 发布步骤

1. 将 PR 合并到 `main`。
2. 触发部署流水线。
3. 在生产环境验证首页、产品区和联系区。
4. 打发布标签（`release-YYYY-MM-DD`）。

## 回滚步骤

1. 确认最近一个稳定发布标签。
2. 重新部署稳定版本。
3. 记录事故说明，包括原因与后续改进动作。

