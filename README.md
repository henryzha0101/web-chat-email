This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### 普通页面开发

开发模式运行：

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

打包构建：

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

启动生产服务器：

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

### 邮件预览页面开发

邮件模板开发模式：

```bash
npm run dev:email
# or
yarn dev:email
# or
pnpm dev:email
# or
bun dev:email
```

邮件模板打包构建：

```bash
npm run build:email
# or
yarn build:email
# or
pnpm build:email
# or
bun build:email
```

Output Directory .react-email/.next

### 其他命令

代码检查：

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
# or
bun lint
```

## 访问地址

- 普通页面: [http://localhost:3000](http://localhost:3000)
- 邮件预览页面: 运行 `npm run dev:email` 后会显示预览地址

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 环境变量配置

### 测试环境

```env
# 项目名称
NEXT_PUBLIC_WEBSITE_NAME=AIGF.BEST

# 项目客服邮件
NEXT_PUBLIC_SUPPORT_EMAIL=support@aigf.best

# 外链的项目地址
NEXT_PUBLIC_BASE_URL=https://bestaigirlfriend.app

# 静态资源地址
NEXT_PUBLIC_STATIC_PREFIX=https://pic.winko.ai/email-template

# 邮件模板预览地址
NEXT_PUBLIC_PREVIEW_EMAIL_URL=https://web-chat-email.vercel.app
```

### 正式环境

```env
# 项目名称
NEXT_PUBLIC_WEBSITE_NAME="LUSTY AI"

# 项目客服邮件
NEXT_PUBLIC_SUPPORT_EMAIL=support@lustyai.fun

# 外链的项目地址
NEXT_PUBLIC_BASE_URL=https://lustyai.fun

# 静态资源地址
NEXT_PUBLIC_STATIC_PREFIX=https://pic.lustyai.fun/email-template

# 邮件模板预览地址
NEXT_PUBLIC_PREVIEW_EMAIL_URL=https://web-chat-email-prd-preview.vercel.app
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
