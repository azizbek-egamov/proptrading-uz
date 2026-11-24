"use client"

import { useState } from "react"
import { Bot, CheckCircle2, MessageSquare, Send, Sparkles, X } from "lucide-react"

export default function FloatingAiBot() {
  const [open, setOpen] = useState(false)
  const botUrl = process.env.NEXT_PUBLIC_TELEGRAM_AI_BOT || "https://t.me/xorazmforexadminAI_bot"

  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-40 flex flex-col items-end gap-3">
      {/* Popover / Card */}
      {open && (
        <div className="w-[310px] sm:w-[340px] rounded-2xl border border-cyan-500/40 bg-gradient-to-b from-slate-950 via-slate-900 to-black p-5 shadow-2xl shadow-cyan-950/60 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between border-b border-gray-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-md">
                <Bot className="h-4 w-4" />
              </span>
              <div>
                <strong className="block text-xs font-black text-white">XORAZM FOREX AI BOT</strong>
                <span className="text-[10px] text-cyan-400 font-mono">@xorazmforexadminAI_bot</span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-1 text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
              aria-label="Yopish"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="py-3 space-y-2 text-xs">
            <p className="text-gray-300 leading-relaxed font-medium">
              Bizning rasmiy AI Botimiz quyidagi xizmatlarni 24/7 avtomatik ko‘rsatadi:
            </p>
            <ul className="space-y-1.5 text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Barcha hisob tariflari va qoidalari haqida to‘liq ma’lumot beradi</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Prop hisoblarni to‘g‘ridan-to‘g‘ri sotadi va rasmiylashtiradi</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Mijozning ma’lumotlarini yozib oladi va buyurtmani qabul qiladi</span>
              </li>
            </ul>
          </div>

          <a
            href={botUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-4 py-3 text-xs font-black text-white shadow-lg shadow-cyan-600/30 transition hover:brightness-110"
          >
            <Bot className="h-4 w-4" />
            <span>Telegramda Botni ochish</span>
            <Send className="h-3.5 w-3.5" />
          </a>
        </div>
      )}

      {/* Main Trigger Button */}
      <div className="flex items-center gap-2">
        <a
          href={botUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group hidden sm:flex items-center gap-2.5 rounded-full border-2 border-cyan-400/80 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 py-2.5 px-4 text-xs font-black text-white shadow-2xl shadow-cyan-950/60 transition duration-300 hover:scale-105 hover:border-cyan-300"
          title="Telegram AI Bot: Tariflar va Xarid (@xorazmforexadminAI_bot)"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300"></span>
          </span>
          <Bot className="h-4 w-4 text-cyan-400 transition group-hover:rotate-12" />
          <span>Telegram bot</span>
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-blue-700 via-cyan-600 to-blue-500 text-white shadow-2xl shadow-cyan-500/40 border-2 border-cyan-300/50 transition duration-300 hover:scale-110"
          aria-label="Telegram AI Bot"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75"></span>
            <span className="relative inline-flex h-4 w-4 rounded-full bg-cyan-300 text-[9px] font-black text-slate-950 items-center justify-center">AI</span>
          </span>
          {open ? <X className="h-6 w-6" /> : <Bot className="h-7 w-7" />}
        </button>
      </div>
    </div>
  )
}
