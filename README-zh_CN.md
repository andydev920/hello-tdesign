# Hello TDesign

<p align="center">
  <a href="https://tdesign.tencent.com/starter/vue-next/#/dashboard/base" target="_blank">
    <img alt="TDesign Logo" width="200" src="https://tdesign.gtimg.com/starter/brand-logo.svg">
  </a>
</p>

<p align="center">
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/vite.svg" alt="node compatibility"></a>
  <a href="https://github.com/Tencent/tdesign-vue-next/blob/develop/LICENSE">
    <img src="https://img.shields.io/npm/l/tdesign-vue-next.svg?sanitize=true" alt="License">
  </a>
  <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/Vue-3.5.13-4FC08D?logo=vue.js" alt="Vue"></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-6.2.2-646CFF?logo=vite" alt="Vite"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.4.3-3178C6?logo=typescript" alt="TypeScript"></a>
</p>

<p align="center">
  <a href="http://tdesign.yueyait.com/">在线预览</a>
  ·
  <a href="https://tdesign.tencent.com/starter/">使用文档</a>
  ·
  <a href="./README.md">English</a>
  ·
  <a href="./README-ja_JP.md">日本語</a>
</p>

## 📖 项目简介

Hello TDesign 是一个基于现代 Web 技术构建的企业级前端应用模板。它基于 **TDesign Vue Next**，使用 **Vue 3**、**Vite**、**Pinia**、**TypeScript** 和 **Less** 开发。该项目为构建现代化管理后台和企业应用提供了完整的解决方案。

## ✨ 核心特性

### 🌍 **多语言支持**
- **中文 (简体中文)** - 完整的中文本地化
- **English** - 完整的英文翻译
- **日本語** - 完整的日文本地化
- **动态字体切换** - 根据语言自动应用合适的字体
- **容错机制** - 优雅处理缺失的翻译

### 🎨 **现代化 UI/UX**
- **毛玻璃效果** - 美观的半透明设计元素
- **响应式布局** - 针对桌面、平板和移动端优化
- **深色/浅色主题** - 无缝的主题切换
- **自定义配色方案** - 灵活的主题定制
- **苹果系统字体** - 跨平台的原生字体体验

### 📱 **丰富的页面模板**
- **仪表盘** - 带有图表和统计数据的概览仪表盘
- **列表管理** - 多种列表页面类型（基础、卡片、筛选、树形）
- **表单页面** - 全面的表单示例（基础、分步）
- **详情页面** - 各种详情页面布局
- **财务管理** - 完整的财务仪表板
- **用户中心** - 用户配置和设置
- **登录/注册** - 身份验证页面

### 🛠 **开发者体验**
- **TypeScript** - 完整的类型安全和智能提示
- **Vite** - 极速的开发和构建
- **ESLint + Prettier** - 代码质量和格式化
- **Stylelint** - CSS/Less 代码规范
- **Husky** - Git 钩子质量控制
- **Mock.js** - 开发环境 API 模拟

### 🏗 **架构设计**
- **组件化** - 可复用和可维护的组件
- **基于路由的配置** - 带有元信息的集中式路由
- **状态管理** - 使用 Pinia 进行全局状态管理
- **API 层** - 基于 Axios 的 HTTP 客户端和拦截器
- **权限系统** - 基于角色的访问控制
- **面包屑导航** - 自动生成面包屑

## 🚀 快速开始

### 环境要求

- **Node.js** >= 18.18.0
- **pnpm**（推荐）或 npm

### 安装步骤

```bash
# 克隆仓库
git clone <repository-url>
cd hello-tdesign

# 安装依赖
pnpm install

# 启动开发服务器（带模拟数据）
pnpm run dev:mock

# 或者不带模拟数据启动
pnpm run dev
```

### 可用脚本

```bash
# 开发
pnpm run dev:mock    # 带模拟数据启动
pnpm run dev         # 启动开发服务器
pnpm run dev:linux   # Linux 启动（不自动打开浏览器）

# 构建
pnpm run build       # 生产环境构建
pnpm run build:test  # 测试环境构建
pnpm run build:site  # 站点构建
pnpm run preview     # 预览构建的应用

# 代码质量
pnpm run lint        # ESLint 检查
pnpm run lint:fix    # ESLint 修复
pnpm run stylelint   # Stylelint 检查
pnpm run stylelint:fix # Stylelint 修复
pnpm run build:type  # TypeScript 类型检查

# 测试
pnpm run test        # 运行测试（计划中）
pnpm run test:coverage # 覆盖率报告（计划中）
```

## 📁 项目结构

```
hello-tdesign/
├── public/                 # 静态资源
├── src/
│   ├── api/               # API 层
│   │   ├── model/         # 数据模型
│   │   ├── detail.ts      # 详情 API
│   │   ├── list.ts        # 列表 API
│   │   └── permission.ts  # 权限 API
│   ├── assets/            # 静态资源
│   ├── components/        # 可复用组件
│   │   ├── common-table/  # 表格组件
│   │   ├── department-selector/ # 部门选择器
│   │   ├── page-header/   # 页面标题和面包屑
│   │   └── ...            # 其他组件
│   ├── config/            # 配置文件
│   ├── constants/         # 常量和枚举
│   ├── hooks/             # Vue 组合式函数
│   ├── layouts/           # 布局组件
│   │   ├── components/    # 布局子组件
│   │   └── index.vue      # 主布局
│   ├── locales/           # 国际化
│   │   ├── lang/          # 语言文件
│   │   │   ├── zh_CN/     # 中文
│   │   │   ├── en_US/     # 英文
│   │   │   └── ja_JP/     # 日文
│   │   ├── index.ts       # i18n 设置
│   │   └── useLocale.ts   # 语言工具
│   ├── pages/             # 页面组件
│   │   ├── dashboard/     # 仪表盘页面
│   │   ├── list/          # 列表页面
│   │   ├── form/          # 表单页面
│   │   ├── detail/        # 详情页面
│   │   ├── finance/       # 财务页面
│   │   ├── user/          # 用户页面
│   │   └── login/         # 认证页面
│   ├── router/            # Vue Router
│   │   ├── modules/       # 路由模块
│   │   └── index.ts       # 路由设置
│   ├── store/             # Pinia 状态管理
│   │   └── modules/       # 状态模块
│   ├── style/             # 全局样式
│   │   ├── font-multilang.less # 多语言字体
│   │   ├── layout.less    # 布局样式
│   │   └── variables.less  # CSS 变量
│   ├── types/             # TypeScript 定义
│   ├── utils/             # 工具函数
│   │   ├── request/       # HTTP 客户端
│   │   └── route/         # 路由工具
│   ├── App.vue            # 根组件
│   └── main.ts            # 应用入口
├── mock/                  # 模拟数据
├── docs/                  # 文档
├── package.json           # 依赖配置
├── vite.config.ts         # Vite 配置
├── tsconfig.json          # TypeScript 配置
└── README.md              # 本文件
```

## 🎯 核心功能

### 多语言实现

项目实现了全面的国际化：

- **动态语言切换** - 实时语言切换无需页面刷新
- **字体优化** - 根据语言自动切换字体
- **容错系统** - 优雅处理缺失的翻译
- **基于路由的标题** - 自动页面标题翻译

```typescript
// 语言切换示例
const { changeLocale, locale } = useLocale();
changeLocale('ja_JP'); // 切换到日文
```

### 组件架构

#### 页面标题组件
- **自动面包屑生成** 从路由配置
- **动态标题和副标题** 从路由元信息
- **多语言支持** 带容错机制
- **一致的样式** 跨所有页面

#### 通用表格组件
- **高级筛选** 多条件筛选
- **部门选择器** 带弹窗对话框
- **批量操作**（导出、导入、创建）
- **响应式设计** 移动端优化

#### 部门选择器组件
- **多选支持** 带复选框支持
- **搜索功能** 实时筛选
- **分页** 客户端分页管理
- **跨页选择** 持久化选择

### 样式系统

#### 毛玻璃效果
```less
.glassmorphism {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

#### 多语言字体
```less
// 根据语言自动切换字体
body.lang-zh_CN { font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif; }
body.lang-ja_JP { font-family: 'Hiragino Kaku Gothic ProN', 'Yu Gothic UI', sans-serif; }
body.lang-en_US { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
```

## 🔧 配置

### 环境变量

为不同环境创建 `.env` 文件：

```bash
# .env.development
VITE_BASE_URL=/api
VITE_APP_TITLE=Hello TDesign

# .env.production
VITE_BASE_URL=https://api.example.com
VITE_APP_TITLE=Hello TDesign
```

### 主题定制

修改 `src/style/variables.less` 进行主题定制：

```less
// 主色调
--td-brand-color: #0052d9;
--td-brand-color-light: #266fe8;
--td-brand-color-focus: #0052d9;

// 背景色
--td-bg-color-page: #f5f7fa;
--td-bg-color-container: #ffffff;
```

## 📱 浏览器支持

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge >=84                                                                                                                                                                                                        | Firefox >=83                                                                                                                                                                                                      | Chrome >=84                                                                                                                                                                                                   | Safari >=14.1                                                                                                                                                                                                 |

## 🤝 贡献指南

我们欢迎贡献！请遵循以下指南：

### 开发工作流

1. **Fork** 仓库
2. **创建** 功能分支（`git checkout -b feature/amazing-feature`）
3. **提交** 更改（`git commit -m 'Add amazing feature'`）
4. **推送** 到分支（`git push origin feature/amazing-feature`）
5. **打开** Pull Request

### 代码标准

- **ESLint** - 遵循配置的 ESLint 规则
- **Prettier** - 使用 Prettier 进行代码格式化
- **TypeScript** - 保持类型安全
- **提交规范** - 使用 [Conventional Commits](https://www.conventionalcommits.org/)

### 提交信息格式

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

示例：
- `feat(auth): add login functionality`
- `fix(table): resolve pagination issue`
- `docs(readme): update installation guide`

## 📄 许可证

本项目基于 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [TDesign](https://tdesign.tencent.com/) - 设计系统
- [Vue.js](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Vite](https://vitejs.dev/) - 构建工具
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [Pinia](https://pinia.vuejs.org/) - 状态管理

## 📞 支持

- **文档**: [TDesign Starter 文档](https://tdesign.tencent.com/starter/)
- **问题**: [GitHub Issues](https://github.com/your-repo/issues)
- **讨论**: [GitHub Discussions](https://github.com/your-repo/discussions)

---

<p align="center">
  由 Hello TDesign 团队用 ❤️ 制作
</p>