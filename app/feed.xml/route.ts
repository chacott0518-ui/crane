import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://www.ptcrane1.co.kr'
  const now = new Date().toUTCString()

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>㈜평택크레인</title>
      <link>${baseUrl}</link>
      <description>평택·안성·천안·오산 카고·유압·거미크레인 임대 전문</description>
      <language>ko-kr</language>
      <pubDate>${now}</pubDate>
      <lastBuildDate>${now}</lastBuildDate>
      <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
      <item>
        <title>㈜평택크레인 서비스 안내</title>
        <link>${baseUrl}</link>
        <description>카고크레인, 유압크레인, 거미크레인, 스카이차 고소작업 전문</description>
        <pubDate>${now}</pubDate>
        <guid>${baseUrl}</guid>
      </item>
    </channel>
  </rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  })
}