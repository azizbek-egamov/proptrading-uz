"use client"

import { useState } from "react"
import Image from "next/image"
import {
  CheckCircle,
  ShieldCheck,
  Zap,
  Award,
  Crown,
  Clock,
  AlertTriangle,
  RefreshCw,
  Infinity as InfinityIcon,
  Calendar,
  Sparkles,
  ArrowRight,
  TrendingUp,
  FileText,
  Eye,
  X,
  Target
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import PurchaseModal from "./purchase-modal"

// 1. IMTIHONLI PROP HISOBLAR (Flyer 2)
export const imtihonliPropAccounts = [
  {
    amount: "12 500 $",
    amountNum: 12500,
    price_uzs: "1 300 000 UZS",
    targetProfit: "1 125 $",
    targetPercent: "9%",
    dailyLoss: "4% (500 $)",
    totalLoss: "6% (750 $)",
    refundNote: "First payoutda 1 300 000 UZS qaytariladi",
    payoutDays: "14 kundan keyin",
    featured: false,
    badge: null,
  },
  {
    amount: "25 000 $",
    amountNum: 25000,
    price_uzs: "2 500 000 UZS",
    targetProfit: "2 250 $",
    targetPercent: "9%",
    dailyLoss: "4% (1 000 $)",
    totalLoss: "6% (1 500 $)",
    refundNote: "First payoutda 2 500 000 UZS qaytariladi",
    payoutDays: "14 kundan keyin",
    featured: true,
    badge: "Ommabop",
  },
  {
    amount: "50 000 $",
    amountNum: 50000,
    price_uzs: "4 800 000 UZS",
    targetProfit: "4 500 $",
    targetPercent: "9%",
    dailyLoss: "4% (2 000 $)",
    totalLoss: "6% (3 000 $)",
    refundNote: "First payoutda 4 800 000 UZS qaytariladi",
    payoutDays: "14 kundan keyin",
    featured: true,
    badge: "Tavsiya etiladi",
  },
  {
    amount: "100 000 $",
    amountNum: 10000,
    price_uzs: "8 200 000 UZS",
    targetProfit: "9 000 $",
    targetPercent: "9%",
    dailyLoss: "4% (4 000 $)",
    totalLoss: "6% (6 000 $)",
    refundNote: "First payoutda 8 200 000 UZS qaytariladi",
    payoutDays: "14 kundan keyin",
    featured: false,
    badge: null,
  },
  {
    amount: "200 000 $",
    amountNum: 200000,
    price_uzs: "14 000 000 UZS",
    targetProfit: "18 000 $",
    targetPercent: "9%",
    dailyLoss: "4% (8 000 $)",
    totalLoss: "6% (12 000 $)",
    refundNote: "First payoutda 14 000 000 UZS qaytariladi",
    payoutDays: "14 kundan keyin",
    featured: false,
    badge: "VIP Kapital",
  },
]

// 2. REAL IMTIHONSIZ HISOBLAR (Flyer 1)
export const realImtihonsizAccounts = [
  {
    amount: "10 000 $",
    amountNum: 10000,
    price_uzs: "4 400 000 UZS",
    dailyLoss: "3%",
    dailyLossAmount: "300 $",
    totalLoss: "6%",
    totalLossAmount: "600 $",
    firstPayout: "21 kundan keyin",
    nextPayout: "Har 14 kunda",
    featured: false,
    badge: null,
  },
  {
    amount: "25 000 $",
    amountNum: 25000,
    price_uzs: "9 000 000 UZS",
    dailyLoss: "3%",
    dailyLossAmount: "750 $",
    totalLoss: "6%",
    totalLossAmount: "1 500 $",
    firstPayout: "21 kundan keyin",
    nextPayout: "Har 14 kunda",
    featured: true,
    badge: "Ommabop",
  },
  {
    amount: "50 000 $",
    amountNum: 50000,
    price_uzs: "15 000 000 UZS",
    dailyLoss: "3%",
    dailyLossAmount: "1 500 $",
    totalLoss: "6%",
    totalLossAmount: "3 000 $",
    firstPayout: "21 kundan keyin",
    nextPayout: "Har 14 kunda",
    featured: true,
    badge: "Tavsiya etiladi",
  },
  {
    amount: "100 000 $",
    amountNum: 100000,
    price_uzs: "28 000 000 UZS",
    dailyLoss: "3%",
    dailyLossAmount: "3 000 $",
    totalLoss: "6%",
    totalLossAmount: "6 000 $",
    firstPayout: "21 kundan keyin",
    nextPayout: "Har 14 kunda",
    featured: false,
    badge: "VIP Kapital",
  },
]

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<"imtihonli" | "imtihonsiz">("imtihonli")
  const [modalOpen, setModalOpen] = useState(false)
  const [previewPoster, setPreviewPoster] = useState<string | null>(null)
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
    <section id="pricing" className="py-16 md:py-24 scroll-mt-16 bg-gradient-to-b from-black via-gray-950 to-black text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs md:text-sm font-semibold mb-4 tracking-wide uppercase">
            <Crown className="w-4 h-4 text-yellow-400" />
            <span>XORAZM FX PROFESSIONAL PROP TRADING</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Rasmiy <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 to-red-400">PROP HISOBLAR</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Bigger Capital, Bigger Opportunities. XF jamoasi 100% kafolat beradi!
          </p>
        </div>

        {/* 2 Tabs Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 max-w-2xl mx-auto p-2 bg-gray-900/90 backdrop-blur-md rounded-2xl border border-gray-800 shadow-2xl">
          <button
            type="button"
            onClick={() => setActiveTab("imtihonli")}
            className={cn(
              "w-full sm:w-1/2 py-3.5 px-6 rounded-xl font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center space-x-2.5 select-none",
              activeTab === "imtihonli"
                ? "bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white shadow-lg shadow-cyan-900/40 scale-[1.02] border border-cyan-400/40"
                : "text-gray-400 hover:text-white hover:bg-gray-800/60"
            )}
          >
            <Zap className="w-5 h-5 text-yellow-300" />
            <span>IMTIHONLI PROP HISOBLAR</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("imtihonsiz")}
            className={cn(
              "w-full sm:w-1/2 py-3.5 px-6 rounded-xl font-bold text-sm md:text-base transition-all duration-300 flex items-center justify-center space-x-2.5 select-none",
              activeTab === "imtihonsiz"
                ? "bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-lg shadow-red-900/50 scale-[1.02] border border-red-500/50"
                : "text-gray-400 hover:text-white hover:bg-gray-800/60"
            )}
          >
            <Crown className="w-5 h-5 text-yellow-300" />
            <span>REAL IMTIHONSIZ HISOBLAR</span>
          </button>
        </div>

        {/* Tab Panels */}
        <div className="relative">
          
          {/* TAB 1: IMTIHONLI PROP HISOBLAR */}
          <div
            aria-hidden={activeTab !== "imtihonli"}
            className={cn(
              "space-y-10 transition-opacity duration-300",
              activeTab === "imtihonli"
                ? "relative opacity-100 pointer-events-auto"
                : "absolute inset-x-0 top-0 opacity-0 pointer-events-none"
            )}
          >
            {/* Header Banner & Rules */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 via-blue-950/40 to-gray-900 border border-cyan-500/40 p-6 md:p-8 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-800">
                <div className="space-y-2 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    PROFESSIONAL PROP TRADING
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                    IMTIHONLI PROP HISOBLAR
                  </h3>
                  <p className="text-cyan-200 text-sm md:text-base font-medium">
                    O'Z MAHORATINGIZNI KOMPANIYA PULLARIDA KO'RSATING VA DAROMAD OLING!
                  </p>
                </div>

                {/* 100% Kafolat Badge */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-yellow-500/10 to-amber-500/20 border border-yellow-500/40 shadow-lg">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 to-amber-300 flex items-center justify-center text-black font-extrabold shadow-md">
                      <Crown className="w-5 h-5 fill-current" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-yellow-400 font-bold tracking-wider">XF JAMOASI</div>
                      <div className="text-sm font-black text-white">100% KAFOLAT BERADI</div>
                    </div>
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setPreviewPoster("/images/imtihonli-prop.jpg")}
                    className="border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/60 hover:text-white text-xs gap-1.5 h-11"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="hidden sm:inline">Plakatni ko'rish</span>
                  </Button>
                </div>
              </div>

              {/* 3 Core Rules from Flyer */}
              <div className="grid sm:grid-cols-3 gap-4 pt-6">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-900/80 border border-cyan-500/20">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-cyan-400 font-semibold uppercase">Foyda maqsadi</div>
                    <div className="text-sm font-bold text-white mt-0.5">Imtihondan o'tish uchun 9% daromad</div>
                    <p className="text-xs text-gray-400 mt-1">Belgilangan 9% daromad qilgach, hisob darhol realga o'tadi.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-900/80 border border-emerald-500/20">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-emerald-400 font-semibold uppercase">Prop puli qaytariladi</div>
                    <div className="text-sm font-bold text-white mt-0.5">Birinchi payoutda 100% refund</div>
                    <p className="text-xs text-gray-400 mt-1">Real hisobga o'tgandan so'ng birinchi daromad yechishda prop to'lovi qaytariladi.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-900/80 border border-yellow-500/20">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-yellow-400 font-semibold uppercase">Pul yechish</div>
                    <div className="text-sm font-bold text-white mt-0.5">14 kundan keyin pul yechish</div>
                    <p className="text-xs text-gray-400 mt-1">Real hisobda 14 kundan keyin daromadni bemalol yechib olish mumkin.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid of Accounts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {imtihonliPropAccounts.map((acc, idx) => (
                <div
                  key={`imtihonli-${idx}`}
                  className={cn(
                    "rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1.5",
                    acc.featured
                      ? "bg-gradient-to-b from-gray-900 via-blue-950/40 to-gray-900 border-2 border-cyan-400/80 shadow-2xl shadow-cyan-950/60"
                      : "bg-gray-900/70 border border-gray-800 hover:border-cyan-500/40 hover:bg-gray-900/90"
                  )}
                >
                  {acc.badge && (
                    <span className="absolute -top-3 right-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold uppercase rounded-full shadow-lg">
                      {acc.badge}
                    </span>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                        IMTIHONLI PROP HISOB
                      </span>
                      <span className="text-xs text-gray-400 font-mono">XF PROP</span>
                    </div>

                    <div className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
                      {acc.amount}
                    </div>

                    {/* Features list matching flyer columns */}
                    <div className="space-y-2.5 mb-6 text-sm text-gray-300 bg-black/40 p-3.5 rounded-xl border border-gray-800">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 flex items-center gap-1.5">
                          <Target className="w-4 h-4 text-cyan-400" />
                          Realga o'tish (9%):
                        </span>
                        <strong className="text-yellow-400 font-bold">{acc.targetProfit}</strong>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 flex items-center gap-1.5">
                          <AlertTriangle className="w-4 h-4 text-cyan-400" />
                          Kunlik minus limiti:
                        </span>
                        <strong className="text-white">{acc.dailyLoss}</strong>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-cyan-400" />
                          Umumiy minus limiti:
                        </span>
                        <strong className="text-white">{acc.totalLoss}</strong>
                      </div>

                      <div className="flex items-center justify-between pt-1 border-t border-gray-800/80 text-xs text-emerald-400">
                        <span className="flex items-center gap-1">
                          <RefreshCw className="w-3.5 h-3.5" />
                          Prop to'lovi:
                        </span>
                        <span className="font-semibold">Payoutda 100% qaytadi</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="border-t border-gray-800 pt-4 mb-4 text-center">
                      <div className="text-xs text-gray-400 tracking-wider uppercase font-semibold">PROP NARXI (UZS)</div>
                      <div className="text-2xl font-black text-cyan-400 mt-1">{acc.price_uzs}</div>
                    </div>

                    <Button
                      type="button"
                      onClick={() => handleOpenModal("IMTIHONLI PROP HISOB", acc.price_uzs, acc.amount)}
                      className="w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-cyan-950/40 transition-all text-base"
                    >
                      Sotib olish
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table View Comparison */}
            <div className="overflow-x-auto rounded-2xl border border-gray-800 bg-gray-900/60 p-4 md:p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base md:text-lg font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  Imtihonli hisoblar to'liq taqqoslash jadvali
                </h4>
                <span className="text-xs text-cyan-400 font-mono">xorazmforex.uz</span>
              </div>
              <table className="w-full text-left text-sm text-gray-300">
                <thead className="bg-gray-800/80 text-xs uppercase text-cyan-300 border-b border-gray-700">
                  <tr>
                    <th className="py-3 px-4">Hisob Miqdori</th>
                    <th className="py-3 px-4">Prop Narxi (UZS)</th>
                    <th className="py-3 px-4">Realga o'tish (9%)</th>
                    <th className="py-3 px-4">Kunlik minus limiti</th>
                    <th className="py-3 px-4">Umumiy minus limiti</th>
                    <th className="py-3 px-4 text-center">Amal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {imtihonliPropAccounts.map((acc, i) => (
                    <tr key={`table-imtihonli-${i}`} className="hover:bg-cyan-950/20 transition-colors">
                      <td className="py-3.5 px-4 font-black text-white text-base">{acc.amount}</td>
                      <td className="py-3.5 px-4 font-bold text-cyan-400">{acc.price_uzs}</td>
                      <td className="py-3.5 px-4 font-bold text-yellow-400">{acc.targetProfit}</td>
                      <td className="py-3.5 px-4 text-gray-200">{acc.dailyLoss}</td>
                      <td className="py-3.5 px-4 text-gray-200">{acc.totalLoss}</td>
                      <td className="py-3.5 px-4 text-center">
                        <Button
                          size="sm"
                          onClick={() => handleOpenModal("IMTIHONLI PROP HISOB", acc.price_uzs, acc.amount)}
                          className="bg-cyan-600 hover:bg-cyan-500 text-white text-xs px-4"
                        >
                          Tanlash
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* TAB 2: REAL IMTIHONSIZ HISOBLAR */}
          <div
            aria-hidden={activeTab !== "imtihonsiz"}
            className={cn(
              "space-y-10 transition-opacity duration-300",
              activeTab === "imtihonsiz"
                ? "relative opacity-100 pointer-events-auto"
                : "absolute inset-x-0 top-0 opacity-0 pointer-events-none"
            )}
          >
            {/* Header Banner & Rules */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 via-red-950/40 to-gray-900 border border-red-500/40 p-6 md:p-8 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-800">
                <div className="space-y-2 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    PROFESSIONAL PROP TRADING
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                    REAL IMTIHONSIZ HISOBLAR
                  </h3>
                  <p className="text-red-200 text-sm md:text-base font-medium">
                    Darhol real hisob bilan savdo qiling va daromad oling!
                  </p>
                </div>

                {/* 100% Kafolat Badge */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-yellow-500/10 to-amber-500/20 border border-yellow-500/40 shadow-lg">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 to-amber-300 flex items-center justify-center text-black font-extrabold shadow-md">
                      <Crown className="w-5 h-5 fill-current" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-yellow-400 font-bold tracking-wider">XF JAMOASI</div>
                      <div className="text-sm font-black text-white">100% KAFOLAT BERADI</div>
                    </div>
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setPreviewPoster("/images/real-imtihonsiz.jpg")}
                    className="border-red-500/40 text-red-300 hover:bg-red-950/60 hover:text-white text-xs gap-1.5 h-11"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="hidden sm:inline">Plakatni ko'rish</span>
                  </Button>
                </div>
              </div>

              {/* 4 Core Features from Flyer 1 */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-900/80 border border-red-500/20">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0 font-black text-sm">
                    21
                  </div>
                  <div>
                    <div className="text-xs text-red-400 font-semibold uppercase">1-pul yechish</div>
                    <div className="text-sm font-bold text-white mt-0.5">21 kundan keyin</div>
                    <p className="text-xs text-gray-400 mt-1">Birinchi payout 21 kunlik savdodan so'ng amalga oshiriladi.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-900/80 border border-red-500/20">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0 font-black text-sm">
                    14
                  </div>
                  <div>
                    <div className="text-xs text-red-400 font-semibold uppercase">Keyingi yechishlar</div>
                    <div className="text-sm font-bold text-white mt-0.5">Har 14 kundan</div>
                    <p className="text-xs text-gray-400 mt-1">Har 2 haftada muntazam va barqaror foyda yechib oling.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-900/80 border border-yellow-500/20">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-yellow-400 font-semibold uppercase">Imtihonsiz</div>
                    <div className="text-sm font-bold text-white mt-0.5">Darhol real hisob</div>
                    <p className="text-xs text-gray-400 mt-1">Hech qanday challenge yo'q, xarid qilgan kuningizdan daromad oling.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-gray-900/80 border border-emerald-500/20">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <InfinityIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-emerald-400 font-semibold uppercase">Cheklovlarsiz</div>
                    <div className="text-sm font-bold text-white mt-0.5">Cheklanmagan payout</div>
                    <p className="text-xs text-gray-400 mt-1">Foyda chegarasi yo'q — qancha topsangiz, shuncha yechasiz.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid of Accounts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {realImtihonsizAccounts.map((acc, idx) => (
                <div
                  key={`imtihonsiz-${idx}`}
                  className={cn(
                    "rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1.5",
                    acc.featured
                      ? "bg-gradient-to-b from-gray-900 via-red-950/50 to-gray-900 border-2 border-red-500/80 shadow-2xl shadow-red-950/60"
                      : "bg-gray-900/70 border border-gray-800 hover:border-red-500/40 hover:bg-gray-900/90"
                  )}
                >
                  {acc.badge && (
                    <span className="absolute -top-3 right-4 px-3 py-1 bg-gradient-to-r from-red-600 to-rose-500 text-white text-xs font-bold uppercase rounded-full shadow-lg">
                      {acc.badge}
                    </span>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                        REAL IMTIHONSIZ
                      </span>
                      <span className="text-xs text-gray-400 font-mono">XF PROP</span>
                    </div>

                    <div className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
                      {acc.amount}
                    </div>

                    {/* Features matching flyer columns */}
                    <div className="space-y-2.5 mb-6 text-sm text-gray-300 bg-black/40 p-3.5 rounded-xl border border-gray-800">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 flex items-center gap-1.5">
                          <AlertTriangle className="w-4 h-4 text-red-400" />
                          Kunlik minus:
                        </span>
                        <strong className="text-white">{acc.dailyLoss} ({acc.dailyLossAmount})</strong>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-red-400" />
                          Umumiy minus:
                        </span>
                        <strong className="text-white">{acc.totalLoss} ({acc.totalLossAmount})</strong>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-red-400" />
                          1-pul yechish:
                        </span>
                        <strong className="text-yellow-400">{acc.firstPayout}</strong>
                      </div>

                      <div className="flex items-center justify-between pt-1 border-t border-gray-800/80 text-xs text-red-300">
                        <span className="flex items-center gap-1">
                          <InfinityIcon className="w-3.5 h-3.5" />
                          Payoutlar:
                        </span>
                        <span className="font-semibold">{acc.nextPayout} (cheksiz)</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="border-t border-gray-800 pt-4 mb-4 text-center">
                      <div className="text-xs text-gray-400 tracking-wider uppercase font-semibold">NARXI (UZS)</div>
                      <div className="text-2xl font-black text-red-400 mt-1">{acc.price_uzs}</div>
                    </div>

                    <Button
                      type="button"
                      onClick={() => handleOpenModal("REAL IMTIHONSIZ HISOB", acc.price_uzs, acc.amount)}
                      className="w-full bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-red-950/40 transition-all text-base"
                    >
                      Sotib olish
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table View Comparison */}
            <div className="overflow-x-auto rounded-2xl border border-gray-800 bg-gray-900/60 p-4 md:p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-base md:text-lg font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-red-400" />
                  Real Imtihonsiz hisoblar to'liq taqqoslash jadvali
                </h4>
                <span className="text-xs text-red-400 font-mono">xorazmforex.uz</span>
              </div>
              <table className="w-full text-left text-sm text-gray-300">
                <thead className="bg-gray-800/80 text-xs uppercase text-red-300 border-b border-gray-700">
                  <tr>
                    <th className="py-3 px-4">Hisob Miqdori</th>
                    <th className="py-3 px-4">Narxi (UZS)</th>
                    <th className="py-3 px-4">Kunlik minus limiti</th>
                    <th className="py-3 px-4">Umumiy minus limiti</th>
                    <th className="py-3 px-4">Pul yechish tartibi</th>
                    <th className="py-3 px-4 text-center">Amal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {realImtihonsizAccounts.map((acc, i) => (
                    <tr key={`table-imtihonsiz-${i}`} className="hover:bg-red-950/20 transition-colors">
                      <td className="py-3.5 px-4 font-black text-white text-base">{acc.amount}</td>
                      <td className="py-3.5 px-4 font-bold text-red-400">{acc.price_uzs}</td>
                      <td className="py-3.5 px-4 text-gray-200">{acc.dailyLoss} ({acc.dailyLossAmount})</td>
                      <td className="py-3.5 px-4 text-gray-200">{acc.totalLoss} ({acc.totalLossAmount})</td>
                      <td className="py-3.5 px-4 text-yellow-300">21 kun / har 14 kunda</td>
                      <td className="py-3.5 px-4 text-center">
                        <Button
                          size="sm"
                          onClick={() => handleOpenModal("REAL IMTIHONSIZ HISOB", acc.price_uzs, acc.amount)}
                          className="bg-red-600 hover:bg-red-500 text-white text-xs px-4"
                        >
                          Tanlash
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer Contact Banner from Flyer */}
        <div className="mt-12 p-6 rounded-2xl bg-gray-900/80 border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Savollaringiz bormi? Mutaxassis yordami</div>
              <div className="text-xs text-gray-400">Rasmiy Telegram Admin: <a href="https://t.me/xfprop" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-bold hover:underline">@xfprop</a> | Platforma: <span className="text-gray-300 font-bold">xorazmforex.uz</span></div>
            </div>
          </div>
          <a
            href="https://t.me/xfprop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-md"
          >
            <span>Admin bilan bog'lanish</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Poster Lightbox Modal */}
      {previewPoster && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setPreviewPoster(null)}>
          <div className="relative max-w-3xl w-full bg-gray-950 rounded-2xl border border-gray-700 p-2 overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setPreviewPoster(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center border border-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full h-[75vh]">
              <Image
                src={previewPoster}
                alt="Rasmiy Tarif Plakati"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Purchase Modal */}
      <PurchaseModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        accountTitle={selectedAccount.title}
        accountPrice={selectedAccount.price}
        accountAmount={selectedAccount.amount}
        activeTab={activeTab}
      />
    </section>
  )
}
