import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

// 환경 변수가 없을 경우를 대비한 기본 도메인 설정
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ptcrane1.co.kr'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: '충남크레인 | 카고·유압·거미크레인 전문기업',
    template: '%s | 충남크레인 ',
  },

  description:
    '충남크레인은 평택 합정동에 소재한 크레인 전문 기업입니다. 평택·안성·천안·오산 전 지역 카고크레인, 유압크레인, 거미크레인, 스카이차 임대 전문. 20년 노하우로 안전제일, 신속정확을 약속드립니다. TEL: 041-588-7003',

  keywords: [
    '충남크레인', '평택크레인', '안성크레인', '천안크레인', '오산크레인', 
    '아산크레인', '카고크레인', '유압크레인', '거미크레인', '스카이차', '크레인임대'
  ],

  authors: [{ name: '충남크레인' }],
  creator: '충남크레인',
  publisher: '충남크레인',

  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },

  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteUrl,
    siteName: '충남크레인',
    title: '충남크레인 | 평택·충남권 No.1 크레인 전문기업',
    description: '평택 소재 충남크레인입니다. 안성·천안·오산 카고·유압·거미크레인, 스카이 고소작업차 임대 전문. 안전하고 정확한 작업을 보장합니다.',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: '충남크레인 평택 현장 작업 사진',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: '충남크레인 | 평택·충남권 No.1 크레인 전문기업',
    description: '평택·안성·천안·오산 크레인 임대 전문. 20년 노하우, 안전제일주의 충남크레인.',
    images: [`${siteUrl}/og-image.jpg`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: '3XmLHmXXBIIWxIZBne3Vf-BIv7AwTqFoogbTHznY0MY',
  },

  other: {
    'naver-site-verification': '1199f999576be5559843cb2c237c69bab3d743b2',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: '#F5F0E8',
          fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        {/* 구조화된 데이터(JSON-LD) - 검색 엔진 노출 최적화 */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': siteUrl,
              name: '충남크레인',
              alternateName: '충남크레인',
              telephone: '041-588-7003',
              url: siteUrl,
              image: `${siteUrl}/og-image.jpg`,
              description: '평택 합정동 소재, 충남 및 경기 남부 지역 크레인 및 고소작업차 임대 전문 기업',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '합정동 915-3',
                addressLocality: '평택시',
                addressRegion: '경기도',
                postalCode: '17901',
                addressCountry: 'KR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 36.985,
                longitude: 127.095,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
                  'Friday', 'Saturday', 'Sunday'
                ],
                opens: '00:00',
                closes: '23:59',
              },
              priceRange: '₩₩',
            }),
          }}
        />

        {children}
      </body>
    </html>
  )
}