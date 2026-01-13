import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Proptrading.Uz – Katta kapital endi muammo emas!',
  description: 'Proptrading.uz orqali prop hisob olish, O‘zbekistondagi eng ishonchli prop trading konsultatsiya markazi.',
  keywords: 'prop hisob olish, prop trading kurslari uzbekistonda, prop trading hisobini qanday ochish, prop company bilan qanday ishlash, prop tradingda xatolardan qanday qochish, prop trading bilan daromad olish, treydingda pul topish, pul topish, katta kapital olish',
  generator: 'ardentsoft.uz',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
