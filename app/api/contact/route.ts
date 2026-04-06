import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // 콘솔 로그 (개발용)
    console.log('=== 견적 문의 접수 ===')
    console.log('성명:', body.name)
    console.log('연락처:', body.phone)
    console.log('현장명:', body.site)
    console.log('현장위치:', body.location)
    console.log('시작일:', body.startDate)
    console.log('종료일:', body.endDate)
    console.log('장비:', body.equipment)
    console.log('답변방법:', body.reply)
    console.log('기타사항:', body.memo)
    console.log('접수시간:', new Date().toLocaleString('ko-KR'))
    console.log('=====================')

    // TODO: Google Sheets 연동
    // const { google } = await import('googleapis')
    // const auth = new google.auth.GoogleAuth({
    //   credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}'),
    //   scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    // })
    // const sheets = google.sheets({ version: 'v4', auth })
    // await sheets.spreadsheets.values.append({
    //   spreadsheetId: process.env.GOOGLE_SHEET_ID,
    //   range: 'Sheet1!A:J',
    //   valueInputOption: 'USER_ENTERED',
    //   requestBody: {
    //     values: [[
    //       new Date().toLocaleString('ko-KR'),
    //       body.name,
    //       body.phone,
    //       body.site,
    //       body.location,
    //       body.startDate,
    //       body.endDate,
    //       body.equipment?.join(', '),
    //       body.reply,
    //       body.memo,
    //     ]],
    //   },
    // })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
