# 架构与技术选型

## 当前状态

- 现有站点为遗留单页静态站：`index.htm`。
- 域名通过 `CNAME` 配置。

## 标准化目标

### 阶段 1（当前仓库）

- 保持静态服务稳定运行。
- 引入文档、研发流程与发布规范。

### 阶段 2（Next.js 迁移）

- 新建 Next.js 仓库或独立目录。
- 采用组件化架构与内容模块化组织。
- 基于 CI/CD 的部署流程。

## 推荐技术栈（Next.js 方案）

- 框架：Next.js（App Router）
- 样式：Tailwind CSS
- 部署：Vercel
- CDN/DNS/边缘安全：Cloudflare
- 监控：UptimeRobot + Sentry
- 分析：GA4 或 Plausible

## 质量门禁

- CI 必须通过 Lint 与构建检查。
- 合并到 `main` 前必须完成 Pull Request 评审。
- 部署前必须完成发布检查清单。
