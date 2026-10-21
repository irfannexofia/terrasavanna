import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://terrasavanna.com'),
  title: {
    default: 'Terra Savanna — Ruang yang terasa pulang',
    template: '%s | Terra Savanna',
  },
  description:
    'Terra Savanna — studio interior design, build, dan custom furniture untuk ruang yang terasa pulang.',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: 'Terra Savanna',
  },
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        {children}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,
'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1606467243864128');fbq('track','PageView');`}
        </Script>
        <noscript><img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1606467243864128&ev=PageView&noscript=1" alt="" /></noscript>
      </body>
    </html>
  )
}

