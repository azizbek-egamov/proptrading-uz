import type { Metadata } from 'next'
import Script from 'next/script'
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
      <body>
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=112483551', 'ym');

            ym(112483551, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/112483551"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
        {children}
      </body>
    </html>
  )
}

