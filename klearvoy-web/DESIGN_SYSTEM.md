# Klearvoy 硬件 - 设计系统

## 设计理念
专业、现代和简约的设计，专注于展示高质量的五金家具产品。

## 配色方案

### 主色调
- **主色**: `#171717` (深灰/黑色) - 用于标题、主要文本和行动按钮
- **次要色**: `#6B7280` (中灰色) - 用于正文和描述
- **背景色**: `#FFFFFF` (白色) - 主要背景颜色
- **卡片背景**: `#FAFAFA` (浅灰色) - 卡片和区块背景

### 强调色
- **强调色**: `#C4A484` (暖米色) - 用于高亮和微妙的强调
- **深强调色**: `#B8860B` (深米色) - 用于悬停状态

### 边框色
- **边框**: `#E5E7EB` (浅灰色) - 用于边框和分隔线

## 字体系统

### 字体家族
- **标题字体**: `Segoe UI` (无衬线体) - 现代、专业的标题外观
- **正文字体**: `Segoe UI` (无衬线体) - 清晰、易读的正文

### 字体大小
- **H1**: `text-5xl md:text-6xl lg:text-7xl` (英雄标题)
- **H2**: `text-4xl md:text-5xl` (区块标题)
- **H3**: `text-xl` (卡片标题)
- **正文**: `text-base` (常规文本)
- **小字**: `text-sm` (标签、元数据)

### 字体粗细
- **细体**: `300` (微妙的文本)
- **常规**: `400` (正文)
- **中等**: `500` (强调文本)
- **半粗**: `600` (强烈强调和标题)
- **粗体**: `700` (重要标题)

## 间距

### 容器宽度
- **小**: `max-w-4xl` (窄区块)
- **中**: `max-w-6xl` (标准区块)
- **大**: `max-w-7xl` (宽区块)

### 区块内边距
- **紧凑**: `py-12` (小区块)
- **标准**: `py-20` (常规区块)
- **大**: `py-24` (英雄区块)

### 网格间距
- **小**: `gap-4` (紧凑网格)
- **中**: `gap-6` (标准网格)
- **大**: `gap-8` (宽网格)

## 组件

### 产品卡片
```tsx
<div className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-smooth duration-300">
  <div className="relative h-48 overflow-hidden">
    <Image
      src={product.image}
      alt={product.title}
      fill
      className="object-cover group-hover:scale-105 transition-smooth duration-500"
      quality={80}
    />
  </div>
  <div className="p-4">
    <h3 className="text-lg font-heading text-primary mb-1">{product.title}</h3>
    <p className="text-secondary text-sm mb-3">{product.description}</p>
    <Link href={product.link} className="text-sm font-medium text-accent hover:text-accent-dark transition-smooth">
      查看详情 →
    </Link>
  </div>
</div>
```

### 导航链接
```tsx
<Link
  href={link.href}
  className="text-sm font-medium text-secondary hover:text-primary transition-smooth cursor-pointer tracking-wide relative group"
>
  {link.name}
  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
</Link>
```

### 按钮（主按钮）
```tsx
<button className="bg-primary text-white px-8 py-3 text-sm font-medium tracking-wide hover:bg-secondary transition-smooth cursor-pointer rounded-sm">
  按钮文本
</button>
```

### 按钮（次按钮）
```tsx
<button className="border-2 border-primary text-primary px-8 py-3 text-sm font-medium tracking-wide hover:bg-primary hover:text-white transition-smooth cursor-pointer rounded-sm">
  按钮文本
</button>
```

## 布局模式

### 英雄区块
- 全宽背景图片带遮罩
- 居中内容，白色文字
- 两个行动按钮（主按钮和次按钮）
- 高度: `h-[85vh]`

### 产品网格
- 响应式网格: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6`
- 带悬停效果的产品卡片
- 一致的间距和对齐

### 关于区块
- 桌面端双列布局
- 左侧文字，右侧图片
- 清晰的排版和间距

### 统计区块
- 深色背景 (`bg-primary`)
- 白色文字
- 四列网格展示统计数据
- 居中内容

## 交互设计

### 悬停效果
- **产品卡片**: 图片缩放 1.05 倍，增加阴影
- **导航链接**: 从左到右的下划线动画
- **按钮**: 颜色变化，平滑过渡
- **所有交互元素**: `cursor-pointer` 类

### 过渡效果
- **标准**: `transition-smooth` (0.3秒 cubic-bezier)
- **快速**: `transition-colors duration-200`
- **慢速**: `duration-500` 用于图片缩放

## 响应式设计

### 断点
- **移动端**: `375px` - 单列，堆叠布局
- **平板**: `768px` - 双列，调整间距
- **桌面端**: `1024px` - 三列，完整布局
- **大桌面**: `1440px` - 最大宽度容器

### 移动端考虑
- 堆叠式导航菜单
- 单列网格
- 触摸友好的按钮尺寸（最小 44px 高度）
- 移动端优化图片

## 无障碍设计

### 颜色对比度
- 所有文本符合 WCAG AA 标准（最小 4.5:1）
- 交互元素有清晰的视觉反馈
- 颜色不是状态的唯一指示器

### 键盘导航
- 所有交互元素可通过键盘访问
- 可见的焦点状态
- 逻辑的 Tab 顺序

### 屏幕阅读器
- 所有图片都有正确的 alt 文本
- 语义化 HTML 结构
- 需要的地方添加 ARIA 标签

## 避免的反模式

1. **不使用表情符号图标** - 使用 SVG 图标（Heroicons、Lucide）
2. **悬停时不产生布局偏移** - 使用颜色/不透明度过渡，不使用缩放变换
3. **不使用不可见边框** - 在浅色模式下使用 `border-gray-200`
4. **不使用低对比度文本** - 静音文本最小使用 `#475569` (slate-600)
5. **不使用不一致的间距** - 使用一致的最大宽度和内边距

## 性能指南

1. **图片优化**
   - 使用 Next.js Image 组件
   - 设置适当的质量（80-90）
   - 对非关键图片使用 `loading="lazy"`
   - 对折叠以下内容实现懒加载

2. **代码分割**
   - 对重型组件使用动态导入
   - 懒加载非关键区块
   - 优化包大小

3. **CSS 优化**
   - 使用 Tailwind 工具类
   - 最小化自定义 CSS
   - 在 Next.js 中启用 CSS 优化

## 品牌指南

### Logo
- **文本**: "KLEARVOY"
- **字体**: Cinzel，半粗体
- **颜色**: 主色 (#171717)
- **字间距**: 宽 (tracking-wider)

### 品牌语调
- 专业且权威
- 清晰简洁
- 专注于质量和可靠性
- 国际化吸引力（B2B 受众）

### 摄影
- 高质量产品图片
- 干净、极简的背景
- 一致的灯光和角度
- 专业的呈现