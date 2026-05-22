# CrewBee 官网 Web 页面美术风格描述文档

> 目的：沉淀 CrewBee 官网当前真实使用的品牌调性、美术风格、颜色、排版、布局、卡片、动效和响应式配置。本文档需要能脱离具体工程实现独立生效，因此只记录可迁移的视觉规则与配置参数。

## 1. 品牌视觉定位

CrewBee 官网当前视觉不是高饱和 SaaS dashboard，也不是传统开源项目 README 风格，而是偏 **温暖、克制、工程化、现代 editorial** 的技术产品官网。

- **温暖可信**：以 honey 金色作为品牌强调色，搭配 warm paper 背景。
- **工程秩序感**：大量使用细边框、编号、网格、mono code panel、completion gate、file tree。
- **低噪声高级感**：整体对比度克制，透明 surface、低 opacity 文本、轻微 glow 和 grain。
- **Team / workflow 资产感**：视觉语言强调“结构、层级、规则、流程”，不是炫技动画。
- **暗色优先但支持亮色**：默认进入 dark mode，同时提供 light / dark 双主题 token。

一句话定义：

> 以 warm paper / ink / honey 为核心色彩，结合低对比 surface、细边框、工程化编号、文件树和克制动效，表达“把分散 Agent 工作方式整理成可维护 Team 资产”的现代技术产品气质。

## 2. 全局设计 token

### 2.1 Layout token

| Token | 当前值 | 用途 |
| --- | --- | --- |
| Header height | `88px` | 固定导航高度与首屏节奏。 |
| Anchor offset desktop | `160px` | 锚点跳转顶部预留。 |
| Anchor offset mobile | `136px` | 移动端锚点跳转顶部预留。 |
| Main section max width | `1320px` | 常规 section 最大宽度。 |
| Hero max width | `1400px` | Hero 更宽，强化首屏气势。 |
| Narrow section max width | `900px` | 居中窄内容区。 |
| Roadmap max width | `1200px` | roadmap / flow 类 section 宽度。 |
| Common card grid max width | `1024px` | 双列卡片区宽度。 |

### 2.2 Light theme color token

| Token | 当前值 | 语义 |
| --- | --- | --- |
| `ink` | `#15120f` | 主文字、深色按钮、深色 section。 |
| `honey` | `#d99b2b` | 品牌强调色、编号、badge、icon、glow。 |
| `honey-soft` | `#e7b95a` | hover / 柔和强调色。 |
| `paper` | `#f7f2e8` | 页面主背景。 |
| `paper-warm` | `#f0e7d7` | 暖色区块背景。 |
| `mist` | `#d8d0c1` | 辅助浅灰暖色。 |
| `surface` | `rgba(255, 255, 255, 0.4)` | 半透明卡片底色。 |
| `surface-hover` | `rgba(255, 255, 255, 0.6)` | 卡片 hover 底色。 |
| `surface-border` | `rgba(21, 18, 15, 0.05)` | 浅色卡片细边框。 |
| `grain-opacity` | `0.025` | 背景纸张颗粒透明度。 |
| `glow-opacity` | `1` | 全局氛围光透明度。 |

### 2.3 Dark theme color token

| Token | 当前值 | 语义 |
| --- | --- | --- |
| `ink` | `#f4efe6` | 暗色模式主文字。 |
| `honey` | `#f4a51c` | 暗色模式品牌强调色。 |
| `honey-soft` | `#e5b85a` | 暗色模式柔和强调色。 |
| `paper` | `#0b0a08` | 暗色模式主背景。 |
| `paper-warm` | `#12100d` | 暗色模式暖黑区块背景。 |
| `mist` | `#1b1814` | 暗色模式辅助深色。 |
| `surface` | `rgba(255, 244, 220, 0.035)` | 暗色半透明卡片底色。 |
| `surface-hover` | `rgba(255, 244, 220, 0.065)` | 暗色卡片 hover 底色。 |
| `surface-border` | `rgba(245, 168, 29, 0.12)` | 暗色卡片 honey 边框。 |
| `grain-opacity` | `0.045` | 暗色背景颗粒透明度。 |
| `glow-opacity` | `0.82` | 暗色全局氛围光透明度。 |

### 2.4 可移植 CSS 变量配置

如需要在其他实现中复刻当前官网视觉，可直接使用以下配置：

```css
:root {
  --header-height: 88px;
  --anchor-offset: 160px;
  --theme-ink: #15120f;
  --theme-honey: #d99b2b;
  --theme-honey-soft: #e7b95a;
  --theme-paper: #f7f2e8;
  --theme-paper-warm: #f0e7d7;
  --theme-mist: #d8d0c1;
  --theme-surface: rgba(255, 255, 255, 0.4);
  --theme-surface-hover: rgba(255, 255, 255, 0.6);
  --theme-surface-border: rgba(21, 18, 15, 0.05);
  --theme-grain-opacity: 0.025;
  --theme-glow-opacity: 1;
}

.dark {
  --theme-ink: #f4efe6;
  --theme-honey: #f4a51c;
  --theme-honey-soft: #e5b85a;
  --theme-paper: #0b0a08;
  --theme-paper-warm: #12100d;
  --theme-mist: #1b1814;
  --theme-surface: rgba(255, 244, 220, 0.035);
  --theme-surface-hover: rgba(255, 244, 220, 0.065);
  --theme-surface-border: rgba(245, 168, 29, 0.12);
  --theme-grain-opacity: 0.045;
  --theme-glow-opacity: 0.82;
}

@media (max-width: 768px) {
  :root {
    --anchor-offset: 136px;
  }
}
```

## 3. 字体与排版配置

### 3.1 字体

当前官网实际字体配置：

```css
--font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
--font-serif: "Inter", ui-sans-serif, system-ui, sans-serif;
```

说明：

- `sans` 与 `serif` 都映射到 Inter。
- 页面中使用 `serif` 更多是为了表达“editorial 段落 / 大标题”的层级语义，不代表实际使用衬线字体。
- 中文页面禁止 italic，避免英文强调样式影响中文可读性。

中文配置：

```css
html[lang="zh-CN"],
html[lang="zh-CN"] * {
  font-style: normal !important;
}
```

### 3.2 标题层级

| 类型 | 当前配置 |
| --- | --- |
| Hero H1 | `text-4xl sm:text-5xl md:text-6xl lg:text-[4.35rem] xl:text-7xl` |
| Hero H1 line-height | `leading-[1.08] md:leading-[1.04]` |
| Section H2 | `text-3xl md:text-5xl lg:text-[3.45rem]` |
| Section H2 line-height | `leading-[1.08]` |
| FAQ H2 | `text-3xl md:text-4xl lg:text-5xl` |
| Card title | `text-lg md:text-xl lg:text-[1.28rem]` |
| Code / role title | `font-mono text-lg md:text-xl` |

### 3.3 正文层级

| 类型 | 当前配置 |
| --- | --- |
| Hero primary paragraph | `text-lg sm:text-xl md:text-[1.35rem] leading-[1.68] opacity-70` |
| Hero supporting paragraph | `text-base md:text-lg leading-[1.7] opacity-65` |
| Section subtitle | `text-base md:text-lg lg:text-[1.18rem] leading-[1.68] text-ink/64` |
| Rationale paragraph | `text-lg md:text-xl leading-[1.72] text-ink/70` |
| Card paragraph | `text-base md:text-[1.02rem] leading-[1.68] text-ink/64` |
| Compact proof text | `text-[10px] md:text-[11px] uppercase tracking-[0.16em]` |

### 3.4 Badge / eyebrow

当前 badge 样式：

```text
font-size: 10px
font-weight: 700
text-transform: uppercase
letter-spacing: 0.2em - 0.22em
color: honey
suffix: //
```

视觉作用：给 section 建立工程标签感，不承担正文解释任务。

## 4. 页面布局配置

### 4.1 全局 section 容器

```text
max-width: 1320px
margin: 0 auto
padding-x: 24px mobile / 48px medium / 64px large
padding-y: 80px mobile / 112px medium / 128px large
```

### 4.2 Hero 布局

```text
max-width: 1400px
layout: 12-column grid
desktop copy span: 7 columns
desktop visual span: 5 columns
gap: 40px mobile / 48px medium+
top padding: 96px mobile / 128px medium / 112px large
```

Hero 视觉结构：

- 左侧：超大标题、两段说明、三条 boundary bullet、CTA 按钮组。
- 右侧：Bee icon、圆形 glow、双 ring、三张漂浮标签。

### 4.3 常规卡片区

```text
grid: 1 column mobile / 2 columns medium+
gap: 16px mobile / 20px medium / 24px large
max-width: 1024px
```

### 4.4 多步骤区

```text
grid: 1 column mobile / 2 columns medium / 4 columns large
desktop connector line: 1px, ink 10% opacity
step icon size: 80px mobile / 96px medium+
step icon shape: circle
```

### 4.5 Coding Team 区

```text
desktop layout: 0.9fr / 1.1fr
gap: 40px mobile / 48px medium / 56px large
left column: sticky at 112px from top
roles grid: 1 column mobile / 2 columns small+
leader card: spans 2 columns on small+
```

### 4.6 Roadmap / flow 区

```text
section max width: 1200px
desktop layout: 0.45fr / 0.55fr
flow node size: 36px
flow connector: 1px ink at 10% opacity
panel: glass surface with backdrop blur
```

## 5. Surface、卡片、按钮配置

### 5.1 基础卡片

当前基础卡片参数：

```text
background: surface
border: 1px solid surface-border
shadow: small
hover shadow: medium
hover background: surface-hover
transition: all 300ms ease-out
```

暗色 hover glow：

```css
box-shadow:
  0 0 0 1px rgba(244, 165, 28, 0.08),
  0 18px 48px rgba(244, 165, 28, 0.055);
```

### 5.2 卡片 padding

```text
standard card: 24px mobile / 28px medium / 32px large
compact card: 24px mobile / 28px medium
code panel: 24px mobile / 40px medium / 48px large
```

### 5.3 卡片装饰

Honey glow：

```text
position: top right
size: 96px x 96px
color: honey at 5% opacity
blur: 24px
hover: scale to 150%
duration: 700ms
```

编号：

```text
format: 01 / 02 / 03
font-size: 10px
font-weight: 700
letter-spacing: 0.2em
color: honey
```

### 5.4 按钮

Primary button：

```text
padding: 28px x 14px mobile, 32px x 16px medium+
background: ink
text: paper
font-size: 11px
font-weight: 700
text-transform: uppercase
letter-spacing: 0.18em
shadow: medium ink 10%
hover: translateY(-2px), stronger shadow, ink 90%
transition: 300ms ease-out
```

Secondary button：

```text
padding: same as primary
background: surface
border: surface-border
text: ink
hover: translateY(-2px), surface-hover, medium shadow
```

按钮视觉约束：

- 当前按钮基本无圆角。
- 重点是工程标签感和轻微 hover 反馈。
- 不使用高饱和渐变按钮。

## 6. 背景、grain 与 glow 配置

### 6.1 全站背景层

当前背景由三层组成：

1. 固定 `paper` 实色底。
2. 固定 radial glow + vertical light gradient。
3. 固定 grain 点阵纹理。

背景 glow 配置：

```css
/* Light */
radial-gradient(circle_at_top_right, rgba(217,155,43,0.10), transparent 34%),
linear-gradient(180deg, rgba(255,255,255,0.45), transparent 42%)

/* Dark */
radial-gradient(circle_at_top_right, rgba(242,170,42,0.16), transparent 34%),
linear-gradient(180deg, rgba(255,255,255,0.04), transparent 42%)
```

### 6.2 Grain

```css
position: fixed;
inset: 0;
opacity: var(--theme-grain-opacity);
pointer-events: none;
background-image: radial-gradient(circle at 1px 1px, rgba(217, 155, 43, 0.55) 1px, transparent 0);
background-size: 18px 18px;
transition: opacity 500ms ease;
```

### 6.3 Section ambient glow

Dark ambient glow：

```css
radial-gradient(circle_at_20%_0%, rgba(217,155,43,0.18), transparent 30%),
radial-gradient(circle_at_85%_70%, rgba(255,255,255,0.06), transparent 28%)
```

Warm ambient glow：

```css
radial-gradient(circle_at_10%_10%, rgba(217,155,43,0.10), transparent 28%),
radial-gradient(circle_at_90%_50%, rgba(21,18,15,0.05), transparent 32%)
```

## 7. 动效配置

### 7.1 页面进入动效

```text
initial: opacity 0, y 20px
animate: opacity 1, y 0
duration: 600ms - 800ms
viewport reveal: once
viewport margin: -80px to -100px
```

### 7.2 Hero 图形动效

Hero 右侧漂浮卡片使用轻量上下浮动：

```text
card 1: y -5 -> 5 -> -5, duration 4s, infinite
card 2: y 5 -> -5 -> 5, duration 5s, infinite
card 3: y -3 -> 3 -> -3, duration 6s, infinite
```

### 7.3 Marquee

```text
animation: marquee 30s linear infinite
from: translateX(0%)
to: translateX(-50%)
```

### 7.4 Hover

```text
buttons: translateY(-2px), shadow increase, 300ms
cards: surface brighten, shadow increase, 300ms
icons: scale 1.05, 500ms
arrows: translateX(4px)
```

动效原则：

- 动效只服务层级和反馈。
- 不做复杂滚动叙事。
- 不使用大幅位移、强弹性、强 3D。

## 8. 组件视觉模式

### 8.1 Hero visual

```text
Bee icon size: 160px mobile / 224px medium+
main glow: honey 10%, blur 60px mobile / 80px medium+
outer ring: honey 15%
inner ring: ink 8%
floating labels: paper 82%, backdrop blur, honey 15% border, shadow-xl
```

### 8.2 Status bar

```text
border: top and bottom ink 5%
background: surface
padding-y: 24px
text: 10px uppercase bold, letter-spacing 0.2em, opacity 40%
gap: 96px
leading dot: honey, 6px circle
animation: marquee
```

### 8.3 Installation terminal panel

```text
background: ink at 92% opacity
text: paper
border: honey 15%
shadow: xl ink 10%
command background: paper 7%
command border: paper 8%
command font: mono, 15px mobile / 18px medium
highlight color: #C98512
```

### 8.4 File tree / code panel

```text
background: #1a1a1a
border: white 5%
shadow: 2xl
border-radius: 8px on medium+
font: mono
text: white 80% / desc white 45%
accent: honey
```

### 8.5 Glass panel

```text
border: ink 8%
background: paper 75%
backdrop blur: medium
shadow: xl ink 5%
padding: 24px mobile / 28px medium / 32px large
```

### 8.6 FAQ timeline

```text
left border: 0.5px ink 20%
dot: honey, 8px circle
question: 20px mobile / 23.2px medium, line-height snug
answer: ink 64%, 16px / 16.8px, line-height 1.68
```

### 8.7 Language switch

```text
min-width: 56px
padding: 12px x 8px
border: ink 10%
border-radius: full
font-size: 10px
font-weight: 700
letter-spacing: 0.2em
text: ink 50%
hover: ink, surface background
```

## 9. Section 级视觉规则

### 9.1 Hero

- 使用最大宽度 `1400px`。
- 保持 12 栏结构。
- 标题是页面最高视觉层级。
- `honey` 只强调 title highlight，不应大面积铺满。
- 右侧图形为品牌氛围，不应替代产品说明。

### 9.2 Product Rationale / Why

- 背景使用 `paper-warm/40`。
- 居中大标题，最大宽度约 `896px`。
- Before / After 使用双卡片结构。
- After 卡片 honey glow 更强，Before 卡片 ink glow 更弱。

### 9.3 Installation

- Section 近似整屏高度。
- 左侧强调“快速开始”和 trust points。
- 右侧使用 terminal panel，传达工程可信度。
- 命令高亮只使用低饱和橙色 `#C98512`。

### 9.4 How it works

- 使用步骤节点 + 细连接线。
- icon 节点必须为圆形卡片。
- 分支说明使用 honey 左边框。

### 9.5 Coding Team

- 左侧说明在桌面 sticky。
- Completion Gate 使用 checklist。
- Leader / owner 角色需要在角色卡片中有更高视觉权重。

### 9.6 Team assets / file tree

- 使用深色 section。
- 文件树面板应保持 mono、低对比、honey 小强调。
- 这一区块表达“工程资产”，不应做成普通 marketing card。

### 9.7 Roadmap

- 使用 warm ambient glow。
- 左侧 flow panel 表达长期上下文 loop。
- 右侧 cards 表达 next-stage capabilities。
- Roadmap 不应抢占 Hero 与核心产品价值层级。

### 9.8 Final CTA

- 使用深色背景。
- 主按钮反转为 paper / ink。
- 次按钮使用低透明白色 surface。
- 保持简洁，不堆叠过多说明。

## 10. 响应式规则

| 断点层级 | 视觉策略 |
| --- | --- |
| Mobile | 单列、`px-6`、大 section 间距保留但减少视觉复杂度。 |
| Medium | 开始出现双列、较大标题、Hero icon 增大。 |
| Large | Hero 12 栏、Coding Team 双栏、How steps 四列。 |
| XL | 导航完整展开，Builder audience 可扩展为五列。 |

移动端约束：

- Hero 漂浮第三标签在小屏隐藏。
- 导航使用下拉 panel。
- CTA 按钮纵向堆叠。
- 卡片保持足够 padding，不压缩成 dashboard 表格。

## 11. 品牌资产规则

Bee icon 当前使用透明背景图形，视觉规则：

```text
object-fit: contain
transition: all 500ms
hover scale: 1.05
light shadow: drop-shadow-sm
dark shadow: 0 0 15px rgba(217,155,43,0.2)
```

Hero 中品牌图形规则：

```text
icon size: 160px mobile / 224px medium+
surrounding glow: honey 10%
ring border: honey 15% and ink 8%
```

## 12. 可继续复用的配置摘要

### 12.1 颜色

```text
Core: ink / paper / honey
Warm surface: paper-warm
Card: surface / surface-hover / surface-border
Dark panel: #1a1a1a
Command highlight: #C98512
```

### 12.2 字体

```text
Primary font: Inter
Fallback: ui-sans-serif, system-ui, sans-serif
Mono only for code, file names, command, role identifiers
Chinese: no italic
```

### 12.3 形状

```text
Cards/buttons: mostly square or very low radius
Icons/nodes/dots: circular
Language switch: pill
Code panel: medium radius only on larger screens
```

### 12.4 透明度

```text
Main text: ink 100%
Paragraph text: ink 64% - 70%
Muted labels: ink 40% - 62%
Surface: 3.5% dark / 40% light
Borders: 5% - 12%
```

### 12.5 阴影

```text
Default card: small shadow
Hover card: medium shadow
Terminal/code panel: xl / 2xl shadow
Dark card hover: very subtle honey glow
```

## 13. 后续扩展约束

新增页面或 section 时建议遵守：

1. **不要引入新主色**：主强调色仍为 honey。
2. **保持低噪声**：避免高饱和大面积渐变、强 3D、复杂插画堆叠。
3. **保持工程结构感**：优先使用编号、流程线、文件树、代码面板、checklist、timeline。
4. **控制圆角**：当前品牌不是强圆角 SaaS 风格，卡片与按钮应保持克制。
5. **动效轻量**：进入、漂浮、hover、marquee 足够，不做复杂滚动叙事。
6. **中英文共用布局**：中文禁止 italic；标题长度通过文案控制，不通过单独改版解决。
7. **Roadmap 低优先级**：技术 proof、diagnostics、adapter 等信息可用紧凑 tag grid，不抢占核心产品价值。
8. **产品页优先表达资产层**：视觉上强调 Team assets、work structure、review-backed workflow，不把 runtime 细节做成主视觉。

## 14. 不建议偏离的方向

- 不要改成高饱和蓝紫渐变 AI 工具风。
- 不要使用大面积玻璃拟态导致可读性下降。
- 不要把 honey 用成大面积背景色。
- 不要使用过多圆角、emoji、卡通装饰削弱工程可信度。
- 不要让代码面板和 proof tag 成为首屏唯一视觉重点。
- 不要把页面做成密集技术文档，仍需保持现代官网的留白和节奏。
