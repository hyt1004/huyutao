# 胡宇韬的个人主页

这是一个简洁的学术风格个人主页，基于 GitHub Pages 部署。

## 快速开始

### 本地预览

由于使用了 `scroll-behavior: smooth`，建议使用本地服务器预览：

```bash
# 方法1: 使用 Python
python -m http.server 8000

# 方法2: 使用 Node.js (npx)
npx serve .

# 方法3: 使用 VS Code Live Server 扩展
```

然后在浏览器中打开 `http://localhost:8000`

### 部署到 GitHub Pages

1. 创建 GitHub 仓库，将代码推送到仓库
2. 进入仓库 **Settings** → **Pages**
3. 在 **Source** 中选择 `main` 分支和 `/ (root)` 目录
4. 点击 **Save**
5. 等待几分钟后，你的网站将部署到 `https://你的用户名.github.io/仓库名`

## 自定义修改

### 更新个人信息

编辑 `index.html` 文件中的个人信息：
- 姓名、联系方式
- 教育背景
- 论文列表
- 项目经历
- 获奖情况

### 修改样式

编辑 `css/style.css` 文件来自定义颜色、字体等样式。

## 技术栈

- HTML5
- CSS3 (Flexbox, Grid, CSS Variables)
- Vanilla JavaScript
- Font Awesome Icons (CDN)
- Google Fonts

## 许可证

MIT License
