# 胡宇韬个人主页

一个现代化的个人主页，基于 Next.js 和 Tailwind CSS 构建，支持 GitHub Actions 自动部署。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **部署**: GitHub Pages + GitHub Actions

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 部署

本项目配置了 GitHub Actions，当代码推送到 `main` 分支时会自动构建并部署到 GitHub Pages。

部署地址: `https://[username].github.io/huyutao/`

> 注意：首次部署需要在 GitHub 仓库设置中启用 GitHub Pages 并选择 "GitHub Actions" 作为来源。
