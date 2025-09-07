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
  <a href="http://tdesign.tencent.com/starter/vue-next/">ライブプレビュー</a>
  ·
  <a href="https://tdesign.tencent.com/starter/">ドキュメント</a>
  ·
  <a href="./README.md">English</a>
  ·
  <a href="./README-zh_CN.md">简体中文</a>
</p>

## 📖 プロジェクト概要

Hello TDesign は、モダンなWeb技術で構築されたエンタープライズレベルのフロントエンドアプリケーションテンプレートです。**TDesign Vue Next** をベースに、**Vue 3**、**Vite**、**Pinia**、**TypeScript**、**Less** を使用して開発されています。このプロジェクトは、モダンな管理ダッシュボードとエンタープライズアプリケーションの構築に完全なソリューションを提供します。

## ✨ 主要機能

### 🌍 **多言語サポート**
- **中国語 (简体中文)** - 完全な中国語ローカライゼーション
- **English** - 完全な英語翻訳
- **日本語** - 完全な日本語ローカライゼーション
- **動的フォント切り替え** - 言語に応じて適切なフォントを自動適用
- **フォールバック機能** - 翻訳の欠落を優雅に処理

### 🎨 **モダンなUI/UX**
- **グラスモーフィズム効果** - 美しい半透明デザイン要素
- **レスポンシブレイアウト** - デスクトップ、タブレット、モバイルに最適化
- **ダーク/ライトテーマ** - シームレスなテーマ切り替え
- **カスタムカラースキーム** - 柔軟なテーマカスタマイズ
- **Appleシステムフォント** - プラットフォーム間でのネイティブフォント体験

### 📱 **豊富なページテンプレート**
- **ダッシュボード** - チャートと統計データを含む概要ダッシュボード
- **リスト管理** - 複数のリストページタイプ（基本、カード、フィルター、ツリー）
- **フォームページ** - 包括的なフォーム例（基本、ステップバイステップ）
- **詳細ページ** - 様々な詳細ページレイアウト
- **財務管理** - 完全な財務ダッシュボード
- **ユーザーセンター** - ユーザープロファイルと設定
- **ログイン/登録** - 認証ページ

### 🛠 **開発者体験**
- **TypeScript** - 完全な型安全性とIntelliSense
- **Vite** - 高速な開発とビルド
- **ESLint + Prettier** - コード品質とフォーマット
- **Stylelint** - CSS/Lessコード標準
- **Husky** - Gitフックによる品質管理
- **Mock.js** - 開発環境でのAPIモック

### 🏗 **アーキテクチャ**
- **コンポーネントベース** - 再利用可能で保守性の高いコンポーネント
- **ルートベースの設定** - メタ情報を含む集中化されたルーティング
- **状態管理** - グローバル状態管理のためのPinia
- **API層** - インターセプター付きAxiosベースのHTTPクライアント
- **権限システム** - ロールベースのアクセス制御
- **パンくずナビゲーション** - 自動パンくず生成

## 🚀 クイックスタート

### 前提条件

- **Node.js** >= 18.18.0
- **pnpm**（推奨）またはnpm

### インストール手順

```bash
# リポジトリをクローン
git clone <repository-url>
cd hello-tdesign

# 依存関係をインストール
pnpm install

# 開発サーバーを起動（モックデータ付き）
pnpm run dev:mock

# またはモックデータなしで起動
pnpm run dev
```

### 利用可能なスクリプト

```bash
# 開発
pnpm run dev:mock    # モックデータ付きで起動
pnpm run dev         # 開発サーバーを起動
pnpm run dev:linux   # Linuxで起動（自動ブラウザ開かない）

# ビルド
pnpm run build       # 本番環境ビルド
pnpm run build:test  # テスト環境ビルド
pnpm run build:site  # サイトビルド
pnpm run preview     # ビルドされたアプリをプレビュー

# コード品質
pnpm run lint        # ESLintチェック
pnpm run lint:fix    # ESLint修正
pnpm run stylelint   # Stylelintチェック
pnpm run stylelint:fix # Stylelint修正
pnpm run build:type  # TypeScript型チェック

# テスト
pnpm run test        # テストを実行（予定）
pnpm run test:coverage # カバレッジレポート（予定）
```

## 📁 プロジェクト構造

```
hello-tdesign/
├── public/                 # 静的アセット
├── src/
│   ├── api/               # API層
│   │   ├── model/         # データモデル
│   │   ├── detail.ts      # 詳細API
│   │   ├── list.ts        # リストAPI
│   │   └── permission.ts  # 権限API
│   ├── assets/            # 静的リソース
│   ├── components/        # 再利用可能コンポーネント
│   │   ├── common-table/  # テーブルコンポーネント
│   │   ├── department-selector/ # 部門セレクター
│   │   ├── page-header/   # ページヘッダーとパンくず
│   │   └── ...            # その他のコンポーネント
│   ├── config/            # 設定ファイル
│   ├── constants/         # 定数と列挙型
│   ├── hooks/             # Vueコンポジション関数
│   ├── layouts/           # レイアウトコンポーネント
│   │   ├── components/    # レイアウトサブコンポーネント
│   │   └── index.vue      # メインレイアウト
│   ├── locales/           # 国際化
│   │   ├── lang/          # 言語ファイル
│   │   │   ├── zh_CN/     # 中国語
│   │   │   ├── en_US/     # 英語
│   │   │   └── ja_JP/     # 日本語
│   │   ├── index.ts       # i18n設定
│   │   └── useLocale.ts   # ロケールユーティリティ
│   ├── pages/             # ページコンポーネント
│   │   ├── dashboard/     # ダッシュボードページ
│   │   ├── list/          # リストページ
│   │   ├── form/          # フォームページ
│   │   ├── detail/        # 詳細ページ
│   │   ├── finance/       # 財務ページ
│   │   ├── user/          # ユーザーページ
│   │   └── login/         # 認証ページ
│   ├── router/            # Vue Router
│   │   ├── modules/       # ルートモジュール
│   │   └── index.ts       # ルーター設定
│   ├── store/             # Pinia状態管理
│   │   └── modules/       # 状態モジュール
│   ├── style/             # グローバルスタイル
│   │   ├── font-multilang.less # 多言語フォント
│   │   ├── layout.less    # レイアウトスタイル
│   │   └── variables.less  # CSS変数
│   ├── types/             # TypeScript定義
│   ├── utils/             # ユーティリティ関数
│   │   ├── request/       # HTTPクライアント
│   │   └── route/         # ルートユーティリティ
│   ├── App.vue            # ルートコンポーネント
│   └── main.ts            # アプリケーションエントリーポイント
├── mock/                  # モックデータ
├── docs/                  # ドキュメント
├── package.json           # 依存関係設定
├── vite.config.ts         # Vite設定
├── tsconfig.json          # TypeScript設定
└── README.md              # このファイル
```

## 🎯 コア機能

### 多言語実装

プロジェクトは包括的な国際化を実装：

- **動的言語切り替え** - ページリロードなしでリアルタイム言語切り替え
- **フォント最適化** - 言語に基づく自動フォント切り替え
- **フォールバックシステム** - 翻訳の欠落を優雅に処理
- **ルートベースのタイトル** - 自動ページタイトル翻訳

```typescript
// 言語切り替えの例
const { changeLocale, locale } = useLocale();
changeLocale('ja_JP'); // 日本語に切り替え
```

### コンポーネントアーキテクチャ

#### ページヘッダーコンポーネント
- **自動パンくず生成** ルート設定から
- **動的タイトルとサブタイトル** ルートメタ情報から
- **多言語サポート** フォールバック機能付き
- **一貫したスタイリング** 全ページで

#### 共通テーブルコンポーネント
- **高度なフィルタリング** 複数条件フィルタリング
- **部門セレクター** ポップアップダイアログ付き
- **バッチ操作**（エクスポート、インポート、作成）
- **レスポンシブデザイン** モバイル最適化

#### 部門セレクターコンポーネント
- **複数選択サポート** チェックボックスサポート付き
- **検索機能** リアルタイムフィルタリング
- **ページネーション** クライアントサイドページネーション管理
- **ページ間選択** 選択の永続化

### スタイルシステム

#### グラスモーフィズム効果
```less
.glassmorphism {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

#### 多言語フォント
```less
// 言語に基づく自動フォント切り替え
body.lang-zh_CN { font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif; }
body.lang-ja_JP { font-family: 'Hiragino Kaku Gothic ProN', 'Yu Gothic UI', sans-serif; }
body.lang-en_US { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
```

## 🔧 設定

### 環境変数

異なる環境用に `.env` ファイルを作成：

```bash
# .env.development
VITE_BASE_URL=/api
VITE_APP_TITLE=Hello TDesign

# .env.production
VITE_BASE_URL=https://api.example.com
VITE_APP_TITLE=Hello TDesign
```

### テーマカスタマイズ

`src/style/variables.less` を修正してテーマをカスタマイズ：

```less
// プライマリカラー
--td-brand-color: #0052d9;
--td-brand-color-light: #266fe8;
--td-brand-color-focus: #0052d9;

// 背景色
--td-bg-color-page: #f5f7fa;
--td-bg-color-container: #ffffff;
```

## 📱 ブラウザサポート

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Edge >=84                                                                                                                                                                                                        | Firefox >=83                                                                                                                                                                                                      | Chrome >=84                                                                                                                                                                                                   | Safari >=14.1                                                                                                                                                                                                 |

## 🤝 貢献ガイド

貢献を歓迎します！以下のガイドラインに従ってください：

### 開発ワークフロー

1. **Fork** リポジトリ
2. **機能ブランチを作成**（`git checkout -b feature/amazing-feature`）
3. **変更をコミット**（`git commit -m 'Add amazing feature'`）
4. **ブランチにプッシュ**（`git push origin feature/amazing-feature`）
5. **Pull Requestを開く**

### コード標準

- **ESLint** - 設定されたESLintルールに従う
- **Prettier** - Prettierを使用してコードフォーマット
- **TypeScript** - 型安全性を維持
- **コミット規約** - [Conventional Commits](https://www.conventionalcommits.org/) を使用

### コミットメッセージ形式

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

例：
- `feat(auth): add login functionality`
- `fix(table): resolve pagination issue`
- `docs(readme): update installation guide`

## 📄 ライセンス

このプロジェクトはMITライセンスの下でライセンスされています - 詳細は [LICENSE](LICENSE) ファイルを参照してください。

## 🙏 謝辞

- [TDesign](https://tdesign.tencent.com/) - デザインシステム
- [Vue.js](https://vuejs.org/) - プログレッシブJavaScriptフレームワーク
- [Vite](https://vitejs.dev/) - ビルドツール
- [TypeScript](https://www.typescriptlang.org/) - 型安全性
- [Pinia](https://pinia.vuejs.org/) - 状態管理

## 📞 サポート

- **ドキュメント**: [TDesign Starter ドキュメント](https://tdesign.tencent.com/starter/)
- **問題**: [GitHub Issues](https://github.com/your-repo/issues)
- **ディスカッション**: [GitHub Discussions](https://github.com/your-repo/discussions)

---

<p align="center">
  Hello TDesign チームが ❤️ で作成
</p>
