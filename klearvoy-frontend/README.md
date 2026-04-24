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

## 发布流程

完整流程见 `docs/release-process.md`。

## 下一步迭代计划

1. 保持当前静态页面稳定运行。
2. 在独立仓库或 `/next-app` 目录搭建新的 Next.js 项目。
3. 验证页面对齐与 SEO 表现。
4. 通过可控灰度切换生产流量。
