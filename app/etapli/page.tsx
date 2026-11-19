"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Target, RefreshCw, Calendar, Crown, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import PurchaseModal from "@/components/purchase-modal"
import { imtihonliPropAccounts } from "@/components/pricing-section"

export default function EtapliPricingPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedAccount, setSelectedAccount] = useState({
    title: "",
    price: "",
    amount: "",
  })

  const handleOpenModal = (title: string, price: string, amount: string) => {
    setSelectedAccount({
      title,
      price,
      amount,
    })
    setModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-850 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 md:px-8 py-8">
        <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 font-semibold">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Bosh sahifaga qaytish
        </Link>

        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs md:text-sm font-semibold mb-4">
            <Crown className="w-4 h-4 text-yellow-400" />
            <span>XORAZM FX PROFESSIONAL PROP TRADING</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-400">
            IMTIHONli PROP hisoblar
          </h1>
          <p className="text-cyan-300 font-medium text-lg max-w-2xl mx-auto">
            O'Z MAHORATINGIZNI KOMPANIYA PULLARIDA KO'RSATING VA DAROMAD OLING!
          </p>
        </div>

        {/* Rules Highlight */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          <div className="bg-gray-900/80 border border-cyan-500/30 p-5 rounded-2xl flex items-start gap-3">
            <Target className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-white font-bold text-base">Realga o'tish (9%)</div>
              <p className="text-xs text-gray-300 mt-1">Imtihondan o'tish uchun 9% daromad ishlash kerak</p>
            </div>
          </div>
          <div className="bg-gray-900/80 border border-emerald-500/30 p-5 rounded-2xl flex items-start gap-3">
            <RefreshCw className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-white font-bold text-base">100% Refund</div>
              <p className="text-xs text-gray-300 mt-1">Real hisobga o'tgandan so'ng birinchi payoutda prop puli qaytariladi</p>
            </div>
          </div>
          <div className="bg-gray-900/80 border border-yellow-500/30 p-5 rounded-2xl flex items-start gap-3">
            <Calendar className="w-6 h-6 text-yellow-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-white font-bold text-base">14 kunda pul yechish</div>
              <p className="text-xs text-gray-300 mt-1">Real hisobda 14 kundan keyin pul yechib olish mumkin</p>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {imtihonliPropAccounts.map((option, index) => (
            <div
              key={index}
              className={cn(
                "rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-2",
                option.featured
                  ? "bg-gradient-to-b from-gray-900 via-blue-950/40 to-gray-900 border-2 border-cyan-400 shadow-2xl shadow-cyan-950/50"
                  : "bg-gray-900/70 border border-gray-800 hover:border-cyan-500/50"
              )}
            >
              {option.badge && (
                <span className="absolute -top-3 right-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold uppercase rounded-full shadow-lg">
                  {option.badge}
                </span>
              )}

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                  IMTIHONLI PROP
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-4">{option.amount}</div>

                <div className="space-y-3 mb-6 bg-black/40 p-4 rounded-xl border border-gray-800 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Target (9%):</span>
                    <strong className="text-yellow-400 font-bold">{option.targetProfit}</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Kunlik minus:</span>
                    <strong className="text-white">{option.dailyLoss}</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Umumiy minus:</span>
                    <strong className="text-white">{option.totalLoss}</strong>
                  </div>
                  <div className="pt-2 border-t border-gray-800 text-xs text-emerald-400">
                    Birinchi payoutda {option.price_uzs} to'liq qaytariladi
                  </div>
                </div>
              </div>

              <div>
                <div className="border-t border-gray-800 pt-4 mb-4 text-center">
                  <div className="text-xs text-gray-400 uppercase font-semibold">PROP NARXI (UZS)</div>
                  <div className="text-2xl font-black text-cyan-400 mt-1">{option.price_uzs}</div>
                </div>

                <Button
                  onClick={() => handleOpenModal("IMTIHONLI PROP HISOB", option.price_uzs, option.amount)}
                  className="w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3.5 rounded-xl shadow-lg"
                >
                  Sotib olish
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PurchaseModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        accountTitle={selectedAccount.title}
        accountPrice={selectedAccount.price}
        accountAmount={selectedAccount.amount}
        activeTab="imtihonli"
      />
    </div>
  )
}
