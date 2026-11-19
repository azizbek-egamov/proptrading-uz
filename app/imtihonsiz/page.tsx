"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Crown, AlertTriangle, ShieldCheck, Calendar, Infinity as InfinityIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import PurchaseModal from "@/components/purchase-modal"
import { realImtihonsizAccounts } from "@/components/pricing-section"

export default function ImtihonsizPricingPage() {
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
        <Link href="/" className="inline-flex items-center text-red-400 hover:text-red-300 mb-8 font-semibold">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Bosh sahifaga qaytish
        </Link>

        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs md:text-sm font-semibold mb-4">
            <Crown className="w-4 h-4 text-yellow-400" />
            <span>XORAZM FX PROFESSIONAL PROP TRADING</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-rose-200 to-red-500">
            REAL IMTIHONsiz hisoblar
          </h1>
          <p className="text-red-300 font-medium text-lg max-w-2xl mx-auto">
            Darhol real hisob bilan savdo qiling va daromad oling!
          </p>
        </div>

        {/* Rules Highlight */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 max-w-6xl mx-auto">
          <div className="bg-gray-900/80 border border-red-500/30 p-5 rounded-2xl">
            <div className="text-2xl font-black text-red-400">21 KUN</div>
            <div className="text-white font-bold text-sm mt-1">Birinchi pul yechish</div>
            <p className="text-xs text-gray-400 mt-1">21 kundan keyin birinchi payoutni oling</p>
          </div>
          <div className="bg-gray-900/80 border border-red-500/30 p-5 rounded-2xl">
            <div className="text-2xl font-black text-red-400">14 KUN</div>
            <div className="text-white font-bold text-sm mt-1">Keyingi yechishlar</div>
            <p className="text-xs text-gray-400 mt-1">Har 14 kunda muntazam pul yechish</p>
          </div>
          <div className="bg-gray-900/80 border border-yellow-500/30 p-5 rounded-2xl">
            <div className="text-2xl font-black text-yellow-400">IMTIHONSIZ</div>
            <div className="text-white font-bold text-sm mt-1">Darhol real hisob</div>
            <p className="text-xs text-gray-400 mt-1">Bosqichlarsiz haqiqiy savdo</p>
          </div>
          <div className="bg-gray-900/80 border border-emerald-500/30 p-5 rounded-2xl">
            <div className="text-2xl font-black text-emerald-400">CHEKSIZ</div>
            <div className="text-white font-bold text-sm mt-1">Cheklanmagan payoutlar</div>
            <p className="text-xs text-gray-400 mt-1">Daromad chegaralanmagan</p>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {realImtihonsizAccounts.map((account, index) => (
            <div
              key={index}
              className={cn(
                "rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-2",
                account.featured
                  ? "bg-gradient-to-b from-gray-900 via-red-950/50 to-gray-900 border-2 border-red-500 shadow-2xl shadow-red-950/50"
                  : "bg-gray-900/70 border border-gray-800 hover:border-red-500/50"
              )}
            >
              {account.badge && (
                <span className="absolute -top-3 right-4 px-3 py-1 bg-gradient-to-r from-red-600 to-rose-500 text-white text-xs font-bold uppercase rounded-full shadow-lg">
                  {account.badge}
                </span>
              )}

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1">
                  REAL IMTIHONSIZ
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-4">{account.amount}</div>

                <div className="space-y-3 mb-6 bg-black/40 p-4 rounded-xl border border-gray-800 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Kunlik minus:</span>
                    <strong className="text-white">{account.dailyLoss} ({account.dailyLossAmount})</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Umumiy minus:</span>
                    <strong className="text-white">{account.totalLoss} ({account.totalLossAmount})</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">1-pul yechish:</span>
                    <strong className="text-yellow-400">{account.firstPayout}</strong>
                  </div>
                  <div className="pt-2 border-t border-gray-800 text-xs text-red-300">
                    Keyingi pul yechishlar har 14 kunda
                  </div>
                </div>
              </div>

              <div>
                <div className="border-t border-gray-800 pt-4 mb-4 text-center">
                  <div className="text-xs text-gray-400 uppercase font-semibold">NARXI (UZS)</div>
                  <div className="text-2xl font-black text-red-400 mt-1">{account.price_uzs}</div>
                </div>

                <Button
                  onClick={() => handleOpenModal("REAL IMTIHONSIZ HISOB", account.price_uzs, account.amount)}
                  className="w-full bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 text-white font-bold py-3.5 rounded-xl shadow-lg"
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
        activeTab="imtihonsiz"
      />
    </div>
  )
}
