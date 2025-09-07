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
  <a href="http://tdesign.yuayait.com/">Live Preview</a>
  ·
  <a href="https://tdesign.tencent.com/starter/">Documentation</a>
  ·
  <a href="./README-zh_CN.md">简体中文</a>
  ·
  <a href="./README-ja_JP.md">日本語</a>
</p>

## 📖 Introduction

Hello TDesign is a comprehensive enterprise-level frontend application template built with modern web technologies. It's based on **TDesign Vue Next** and developed with **Vue 3**, **Vite**, **Pinia**, **TypeScript**, and **Less**. This project provides a complete solution for building modern admin dashboards and enterprise applications.

## ✨ Features

### 🌍 **Multi-language Support**
- **Chinese (简体中文)** - Complete Chinese localization
- **English** - Full English translation
- **Japanese (日本語)** - Complete Japanese localization
- **Dynamic font switching** - Automatically applies appropriate fonts for each language
- **Fallback mechanism** - Graceful handling of missing translations

### 🎨 **Modern UI/UX**
- **Glassmorphism effects** - Beautiful translucent design elements
- **Responsive layout** - Optimized for desktop, tablet, and mobile
- **Dark/Light themes** - Seamless theme switching
- **Custom color schemes** - Flexible theme customization
- **Apple system fonts** - Native font experience across platforms

### 📱 **Rich Page Templates**
- **Dashboard** - Overview dashboard with charts and statistics
- **List Management** - Multiple list page types (base, card, filter, tree)
- **Form Pages** - Comprehensive form examples (base, step-by-step)
- **Detail Pages** - Various detail page layouts
- **Finance Management** - Complete financial dashboard
- **User Center** - User profile and settings
- **Login/Register** - Authentication pages

### 🛠 **Developer Experience**
- **TypeScript** - Full type safety and IntelliSense
- **Vite** - Lightning-fast development and build
- **ESLint + Prettier** - Code quality and formatting
- **Stylelint** - CSS/Less code standards
- **Husky** - Git hooks for quality control
- **Mock.js** - API mocking for development

### 🏗 **Architecture**
- **Component-based** - Reusable and maintainable components
- **Route-based configuration** - Centralized routing with meta information
- **State management** - Pinia for global state
- **API layer** - Axios-based HTTP client with interceptors
- **Permission system** - Role-based access control
- **Breadcrumb navigation** - Automatic breadcrumb generation

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.18.0
- **pnpm** (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd hello-tdesign

# Install dependencies
pnpm install

# Start development server with mock data
pnpm run dev:mock

# Or start without mock data
pnpm run dev
```

### Available Scripts

```bash
# Development
pnpm run dev:mock    # Start with mock data
pnpm run dev         # Start development server
pnpm run dev:linux   # Start on Linux (no auto-open)

# Building
pnpm run build       # Production build
pnpm run build:test  # Test environment build
pnpm run build:site  # Site build
pnpm run preview     # Preview built app

# Code Quality
pnpm run lint        # ESLint check
pnpm run lint:fix    # ESLint fix
pnpm run stylelint   # Stylelint check
pnpm run stylelint:fix # Stylelint fix
pnpm run build:type  # TypeScript type check

# Testing
pnpm run test        # Run tests (planned)
pnpm run test:coverage # Coverage report (planned)
```

## 📁 Project Structure

```
hello-tdesign/
├── public/                 # Static assets
├── src/
│   ├── api/               # API layer
│   │   ├── model/         # Data models
│   │   ├── detail.ts      # Detail API
│   │   ├── list.ts        # List API
│   │   └── permission.ts  # Permission API
│   ├── assets/            # Static resources
│   ├── components/        # Reusable components
│   │   ├── common-table/  # Table component
│   │   ├── department-selector/ # Department selector
│   │   ├── page-header/   # Page header with breadcrumb
│   │   └── ...            # Other components
│   ├── config/            # Configuration files
│   ├── constants/         # Constants and enums
│   ├── hooks/             # Vue composition functions
│   ├── layouts/           # Layout components
│   │   ├── components/    # Layout sub-components
│   │   └── index.vue      # Main layout
│   ├── locales/           # Internationalization
│   │   ├── lang/          # Language files
│   │   │   ├── zh_CN/     # Chinese
│   │   │   ├── en_US/     # English
│   │   │   └── ja_JP/     # Japanese
│   │   ├── index.ts       # i18n setup
│   │   └── useLocale.ts   # Locale utilities
│   ├── pages/             # Page components
│   │   ├── dashboard/     # Dashboard pages
│   │   ├── list/          # List pages
│   │   ├── form/          # Form pages
│   │   ├── detail/        # Detail pages
│   │   ├── finance/       # Finance pages
│   │   ├── user/          # User pages
│   │   └── login/         # Auth pages
│   ├── router/            # Vue Router
│   │   ├── modules/       # Route modules
│   │   └── index.ts       # Router setup
│   ├── store/             # Pinia stores
│   │   └── modules/       # Store modules
│   ├── style/             # Global styles
│   │   ├── font-multilang.less # Multi-language fonts
│   │   ├── layout.less    # Layout styles
│   │   └── variables.less  # CSS variables
│   ├── types/             # TypeScript definitions
│   ├── utils/             # Utility functions
│   │   ├── request/       # HTTP client
│   │   └── route/         # Route utilities
│   ├── App.vue            # Root component
│   └── main.ts            # Application entry
├── mock/                  # Mock data
├── docs/                  # Documentation
├── package.json           # Dependencies
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## 🎯 Key Features

### Multi-language Implementation

The project implements comprehensive internationalization with:

- **Dynamic language switching** - Real-time language change without page reload
- **Font optimization** - Automatic font switching based on language
- **Fallback system** - Graceful handling of missing translations
- **Route-based titles** - Automatic page title translation

```typescript
// Language switching example
const { changeLocale, locale } = useLocale();
changeLocale('ja_JP'); // Switch to Japanese
```

### Component Architecture

#### Page Header Component
- **Automatic breadcrumb generation** from route configuration
- **Dynamic title and subtitle** from route meta
- **Multi-language support** with fallback
- **Consistent styling** across all pages

#### Common Table Component
- **Advanced filtering** with multiple criteria
- **Department selector** with popup dialog
- **Batch operations** (export, import, create)
- **Responsive design** with mobile optimization

#### Department Selector Component
- **Multi-selection** with checkbox support
- **Search functionality** with real-time filtering
- **Pagination** with client-side management
- **Cross-page selection** persistence

### Styling System

#### Glassmorphism Effects
```less
.glassmorphism {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

#### Multi-language Fonts
```less
// Automatic font switching based on language
body.lang-zh_CN { font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif; }
body.lang-ja_JP { font-family: 'Hiragino Kaku Gothic ProN', 'Yu Gothic UI', sans-serif; }
body.lang-en_US { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
```

## 🔧 Configuration

### Environment Variables

Create `.env` files for different environments:

```bash
# .env.development
VITE_BASE_URL=/api
VITE_APP_TITLE=Hello TDesign

# .env.production
VITE_BASE_URL=https://api.example.com
VITE_APP_TITLE=Hello TDesign
```

### Theme Customization

Modify `src/style/variables.less` for theme customization:

```less
// Primary colors
--td-brand-color: #0052d9;
--td-brand-color-light: #266fe8;
--td-brand-color-focus: #0052d9;

// Background colors
--td-bg-color-page: #f5f7fa;
--td-bg-color-container: #ffffff;
```

## 📱 Browser Support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge >=84                                                                                                                                                                                                        | Firefox >=83                                                                                                                                                                                                      | Chrome >=84                                                                                                                                                                                                   | Safari >=14.1                                                                                                                                                                                                 |

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards

- **ESLint** - Follow the configured ESLint rules
- **Prettier** - Use Prettier for code formatting
- **TypeScript** - Maintain type safety
- **Commit Convention** - Use [Conventional Commits](https://www.conventionalcommits.org/)

### Commit Message Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

Examples:
- `feat(auth): add login functionality`
- `fix(table): resolve pagination issue`
- `docs(readme): update installation guide`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TDesign](https://tdesign.tencent.com/) - The design system
- [Vue.js](https://vuejs.org/) - The progressive JavaScript framework
- [Vite](https://vitejs.dev/) - The build tool
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Pinia](https://pinia.vuejs.org/) - State management

## 📞 Support

- **Documentation**: [TDesign Starter Docs](https://tdesign.tencent.com/starter/)
- **Issues**: [GitHub Issues](https://github.com/your-repo/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-repo/discussions)

---

<p align="center">
  Made with ❤️ by the Hello TDesign Team
</p>