import { NextRequest, NextResponse } from 'next/server'
import { getNextRequestNumber, getFallbackRequestNumber } from '@/lib/request-counter'

// Fallback to hardcoded values if environment variables are not set
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8105645545:AAEQzQv7sgGiM8cq9wc_mg6I5h2ubuzBCmQ'
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '-1002679316202'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, accountType, message } = body

    console.log('Received request:', { name, phone, accountType, message })
    console.log('Telegram config:', { 
      botToken: TELEGRAM_BOT_TOKEN ? 'Set' : 'Not set', 
      chatId: TELEGRAM_CHAT_ID 
    })

    // Validate required fields
    if (!name || !phone || !accountType) {
      return NextResponse.json(
        { error: 'Name, phone, and account type are required' },
        { status: 400 }
      )
    }

    // Get the next request number (try KV first, fallback to timestamp-based)
    let requestNumber: number
    try {
      requestNumber = await getNextRequestNumber()
      console.log('Generated request number from KV:', requestNumber)
    } catch (error) {
      console.error('KV error, using fallback:', error)
      requestNumber = getFallbackRequestNumber()
      console.log('Generated fallback request number:', requestNumber)
    }

    // Format the message for Telegram
    const telegramMessage = `
🔔 *YANGI PROP HISOB SO'ROVI #${requestNumber}*

👤 *Ism:* ${name}
📱 *Telefon:* ${phone}
💼 *Hisob turi:* ${accountType}
💬 *Xabar:* ${message || 'Xabar yo\'q'}

📅 *Sana:* ${new Date().toLocaleString('uz-UZ')}
    `.trim()

    console.log('Formatted Telegram message:', telegramMessage)

    // Send to Telegram
    try {
      console.log('Sending to Telegram...')
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

      const telegramResult = await telegramResponse.text()
      console.log('Telegram response status:', telegramResponse.status)
      console.log('Telegram response:', telegramResult)

      if (!telegramResponse.ok) {
        console.error('Telegram API error:', telegramResult)
        // Still return success to user, but log the error
      } else {
        console.log('Telegram message sent successfully')
      }
    } catch (telegramError) {
      console.error('Error sending to Telegram:', telegramError)
      // Still return success to user, but log the error
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
