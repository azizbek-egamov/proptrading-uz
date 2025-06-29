import { NextRequest, NextResponse } from 'next/server'
import { getNextRequestNumber } from '@/lib/request-counter'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, accountType, message } = body

    // Validate required fields
    if (!name || !phone || !accountType) {
      return NextResponse.json(
        { error: 'Name, phone, and account type are required' },
        { status: 400 }
      )
    }

    // Get the next request number
    const requestNumber = getNextRequestNumber()

    // Format the message for Telegram
    const telegramMessage = `
🔔 *YANGI PROP HISOB SO'ROVI #${requestNumber}*

👤 *Ism:* ${name}
📱 *Telefon:* ${phone}
💼 *Hisob turi:* ${accountType}
💬 *Xabar:* ${message || 'Xabar yo\'q'}

📅 *Sana:* ${new Date().toLocaleString('uz-UZ')}
    `.trim()

    // Send to Telegram if configured
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      try {
        const telegramResponse = await fetch(
          `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chat_id: TELEGRAM_CHAT_ID,
              text: telegramMessage,
              parse_mode: 'Markdown',
            }),
          }
        )

        if (!telegramResponse.ok) {
          console.error('Telegram API error:', await telegramResponse.text())
        }
      } catch (telegramError) {
        console.error('Error sending to Telegram:', telegramError)
      }
    }

    return NextResponse.json({
      success: true,
      requestNumber,
      message: 'So\'rovingiz muvaffaqiyatli yuborildi!'
    })

  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 
