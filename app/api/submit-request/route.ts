import { type NextRequest, NextResponse } from "next/server"

// Fallback to hardcoded values if environment variables are not set
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "8105645545:AAEQzQv7sgGiM8cq9wc_mg6I5h2ubuzBCmQ"
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "-1002679316202"

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || ""
    let name, phone, accountType, message, paymentReceipt

    if (contentType.includes("multipart/form-data")) {
      // Handle FormData (with file upload)
      try {
        const formData = await request.formData()
        name = formData.get("name") as string
        phone = formData.get("phone") as string
        accountType = formData.get("accountType") as string
        message = formData.get("message") as string
        paymentReceipt = formData.get("paymentReceipt") as File | null
      } catch (formError) {
        console.error("Error parsing FormData:", formError)
        return NextResponse.json({ error: "Invalid form data" }, { status: 400 })
      }
    } else if (contentType.includes("application/json")) {
      // Handle JSON (legacy support)
      try {
        const body = await request.json()
        name = body.name
        phone = body.phone
        accountType = body.accountType
        message = body.message
      } catch (jsonError) {
        console.error("Error parsing JSON:", jsonError)
        return NextResponse.json({ error: "Invalid JSON data" }, { status: 400 })
      }
    } else {
      // If no valid content-type, try FormData first, then JSON
      try {
        const formData = await request.formData()
        name = formData.get("name") as string
        phone = formData.get("phone") as string
        accountType = formData.get("accountType") as string
        message = formData.get("message") as string
        paymentReceipt = formData.get("paymentReceipt") as File | null
      } catch {
        return NextResponse.json({ error: "Invalid request format" }, { status: 400 })
      }
    }

    console.log("Received request:", { name, phone, accountType, message, hasPaymentReceipt: !!paymentReceipt })
    console.log("Telegram config:", {
      botToken: TELEGRAM_BOT_TOKEN ? "Set" : "Not set",
      chatId: TELEGRAM_CHAT_ID,
    })

    // Validate required fields
    if (!name || !phone || !accountType) {
      return NextResponse.json({ error: "Name, phone, and account type are required" }, { status: 400 })
    }

    // Generate request number using timestamp (KV removed)
    const requestNumber = Number.parseInt(Date.now().toString().slice(-6))

    // Format the message for Telegram
    const telegramMessage = `
🔔 *YANGI PROP HISOB SO'ROVI*

👤 *Ism:* ${name}
📱 *Telefon:* ${phone}
💼 *Hisob turi:* ${accountType}
💬 *Xabar:* ${message || "Xabar yo'q"}
${paymentReceipt ? "💳 *To'lov cheki:* Yuklangan" : ""}
    `.trim()

    console.log("Formatted Telegram message:", telegramMessage)

    // Send to Telegram
    try {
      console.log("Sending to Telegram...")

      if (paymentReceipt) {
        // Send photo with caption
        const photoFormData = new FormData()
        photoFormData.append("chat_id", TELEGRAM_CHAT_ID)
        photoFormData.append("photo", paymentReceipt)
        photoFormData.append("caption", telegramMessage)
        photoFormData.append("parse_mode", "Markdown")

        const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`, {
          method: "POST",
          body: photoFormData,
        })

        const telegramResult = await telegramResponse.text()
        console.log("Telegram photo response status:", telegramResponse.status)
        console.log("Telegram photo response:", telegramResult)

        if (!telegramResponse.ok) {
          console.error("Telegram photo API error:", telegramResult)
        } else {
          console.log("Telegram photo message sent successfully")
        }
      } else {
        // Send text message only
        const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: telegramMessage,
            parse_mode: "Markdown",
          }),
        })

        const telegramResult = await telegramResponse.text()
        console.log("Telegram response status:", telegramResponse.status)
        console.log("Telegram response:", telegramResult)

        if (!telegramResponse.ok) {
          console.error("Telegram API error:", telegramResult)
        } else {
          console.log("Telegram message sent successfully")
        }
      }
    } catch (telegramError) {
      console.error("Error sending to Telegram:", telegramError)
      // Still return success to user, but log the error
    }

    return NextResponse.json({
      success: true,
      requestNumber,
      message: "So'rovingiz muvaffaqiyatli yuborildi!",
    })
  } catch (error) {
    console.error("Error processing request:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
