import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '胡宇韬 - 个人主页',
  description: '胡宇韬的个人主页 - 算法工程师，专注于具身智能、多模态大模型、三维重建',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  )
}
