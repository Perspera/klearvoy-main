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

## 发布前检查清单

- [ ] 范围已确认并完成文档记录。
- [ ] PR 已通过评审。
- [ ] CI 检查已通过。
- [ ] 已执行 `.\check.ps1` 且结果通过。
- [ ] 关键链接与联系渠道已验证可用。
- [ ] SEO 基础项已具备（`title`、`description`、canonical）。

## 发布步骤

1. 将 PR 合并到 `main`。
2. 触发部署流水线。
3. 在生产环境验证首页、产品区和联系区。
4. 打发布标签（`release-YYYY-MM-DD`）。

## 回滚步骤

1. 确认最近一个稳定发布标签。
2. 重新部署稳定版本。
3. 记录事故说明，包括原因与后续改进动作。
