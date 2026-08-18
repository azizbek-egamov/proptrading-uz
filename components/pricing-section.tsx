"use client"

import { useState } from "react"
import { CheckCircle, ShieldCheck, Wallet, Zap, Award, Star, Clock, AlertTriangle, Monitor, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import PurchaseModal from "./purchase-modal"

// 1. REAL PREMIUM HISOBLAR (image copy 2.png)
const realPremiumAccounts = [
  { amount: "1 000$", price_uzs: "1 000 000 UZS", featured: false },
  { amount: "2 500$", price_uzs: "1 500 000 UZS", featured: false },
  { amount: "5 000$", price_uzs: "3 000 000 UZS", featured: false },
  { amount: "10 000$", price_uzs: "5 500 000 UZS", featured: true },
  { amount: "25 000$", price_uzs: "10 500 000 UZS", featured: true },
  { amount: "50 000$", price_uzs: "20 000 000 UZS", featured: false },
  { amount: "75 000$", price_uzs: "30 000 000 UZS", featured: false },
  { amount: "100 000$", price_uzs: "45 000 000 UZS", featured: false },
]

// 2. IMTIHONLI HISOBLAR (image copy.png)
const imtihonliAccounts = [
  { amount: "5 000$", price_uzs: "800 000 UZS", featured: false },
  { amount: "10 000$", price_uzs: "1 300 000 UZS", featured: false },
  { amount: "15 000$", price_uzs: "1 800 000 UZS", featured: false },
  { amount: "25 000$", price_uzs: "2 600 000 UZS", featured: true },
  { amount: "50 000$", price_uzs: "4 500 000 UZS", featured: true },
  { amount: "100 000$", price_uzs: "7 300 000 UZS", featured: false },
  { amount: "200 000$", price_uzs: "12 500 000 UZS", featured: false },
  { amount: "400 000$", price_uzs: "35 000 000 UZS", featured: false },
]

// 3. REAL LITE HISOBLAR (image.png)
const realLiteAccounts = [
  { amount: "2 500$", price_uzs: "500 000 UZS", dailyProfit: "15$ - 25$", featured: false },
  { amount: "5 000$", price_uzs: "800 000 UZS", dailyProfit: "25$ - 50$", featured: false },
  { amount: "10 000$", price_uzs: "1 700 000 UZS", dailyProfit: "50$ - 100$", featured: true },
  { amount: "25 000$", price_uzs: "3 000 000 UZS", dailyProfit: "100$ - 250$", featured: true },
  { amount: "50 000$", price_uzs: "5 000 000 UZS", dailyProfit: "250$ - 500$", featured: false },
]

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<"premium" | "imtihonli" | "lite">("premium")

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
    <section id="pricing" className="py-16 md:py-24 scroll-mt-16 bg-gradient-to-b from-black via-gray-900/90 to-black text-white relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-4">
            <Award className="w-4 h-4" />
            <span>PROP HISOBLAR KATALOGI</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            O'zingizga mos <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-red-500">PROP hisobni</span> tanlang
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Onlayn va offlayn yordam, konsultatsiya hamda rasmiylashtiruv xizmati bilan birga taklif etiladi.
          </p>
        </div>

        {/* Tab Switcher Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 max-w-3xl mx-auto p-2 bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-800 shadow-2xl">
          <button
            type="button"
            onClick={() => setActiveTab("premium")}
            className={cn(
              "w-full sm:w-1/3 py-3.5 px-5 rounded-xl font-bold text-sm md:text-base transition-all duration-200 flex items-center justify-center space-x-2 select-none",
              activeTab === "premium"
                ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-900/40 scale-[1.02]"
                : "text-gray-400 hover:text-white hover:bg-gray-800/60"
            )}
          >
            <CrownIcon className="w-5 h-5" />
            <span>REAL PREMIUM</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("imtihonli")}
            className={cn(
              "w-full sm:w-1/3 py-3.5 px-5 rounded-xl font-bold text-sm md:text-base transition-all duration-200 flex items-center justify-center space-x-2 select-none",
              activeTab === "imtihonli"
                ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-900/40 scale-[1.02]"
                : "text-gray-400 hover:text-white hover:bg-gray-800/60"
            )}
          >
            <Zap className="w-5 h-5" />
            <span>IMTIHONLI HISOBLAR</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("lite")}
            className={cn(
              "w-full sm:w-1/3 py-3.5 px-5 rounded-xl font-bold text-sm md:text-base transition-all duration-200 flex items-center justify-center space-x-2 select-none",
              activeTab === "lite"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/40 scale-[1.02]"
                : "text-gray-400 hover:text-white hover:bg-gray-800/60"
            )}
          >
            <ShieldCheck className="w-5 h-5" />
            <span>REAL LITE HISOBLAR</span>
          </button>
        </div>

        {/* Tab Panels Container — relative wrapper so inactive panels sit absolute,
            keeping the container height stable and preventing any scroll jump */}
        <div className="relative">
          
          {/* TAB 1: REAL PREMIUM HISOBLAR */}
          <div
            aria-hidden={activeTab !== "premium"}
            className={cn(
              "space-y-10 transition-opacity duration-300",
              activeTab === "premium"
                ? "relative opacity-100 pointer-events-auto"
                : "absolute inset-x-0 top-0 opacity-0 pointer-events-none"
            )}
          >
            {/* Rules Banner */}
            <div className="grid md:grid-cols-3 gap-6 bg-gradient-to-r from-red-950/40 via-gray-900 to-gray-900 p-6 md:p-8 rounded-3xl border border-red-500/30">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-600/20 text-red-500 rounded-2xl border border-red-500/30">
                  <AlertTriangle className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-red-400">Yagona Qoida: 8% Minus Qilmang</h4>
                  <p className="text-sm text-gray-300 mt-1">Hisob balansingiz 8% dan ko'proq kamayishiga yo'l qo'ymang.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-600/20 text-blue-400 rounded-2xl border border-blue-500/30">
                  <Wallet className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-300">Pul Yechish Imkoniyati</h4>
                  <p className="text-sm text-gray-300 mt-1">Hisob olganingizdan 14 kundan keyin pul yechishingiz mumkin.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-emerald-600/20 text-emerald-400 rounded-2xl border border-emerald-500/30">
                  <Monitor className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-emerald-300">Xizmat Haqilari</h4>
                  <p className="text-sm text-gray-300 mt-1">Onlayn: <strong className="text-white">200 000 UZS</strong> | Offlayn: <strong className="text-white">300 000 UZS</strong></p>
                </div>
              </div>
            </div>

            {/* Grid of Accounts — flex wrap so last row centers */}
            <div className="flex flex-wrap justify-center gap-6">
              {realPremiumAccounts.map((acc, idx) => (
                <div
                  key={`premium-${idx}`}
                  className={cn(
                    "w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1.5",
                    acc.featured
                      ? "bg-gradient-to-b from-gray-900 via-red-950/40 to-gray-900 border-2 border-red-500/80 shadow-xl shadow-red-950/50"
                      : "bg-gray-900/60 border border-gray-800 hover:border-red-500/40 hover:bg-gray-900/90"
                  )}
                >
                  {acc.featured && (
                    <span className="absolute -top-3 right-4 px-3 py-1 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold uppercase rounded-full shadow-md">
                      Eng Ko'p Tanlangan
                    </span>
                  )}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-red-400 mb-1">REAL PREMIUM</div>
                    <div className="text-3xl font-extrabold text-white mb-4">{acc.amount}</div>
                    
                    <div className="space-y-2 mb-6 text-sm text-gray-300">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-red-400 shrink-0" />
                        <span>Maksimal minus: <strong>8%</strong></span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-red-400 shrink-0" />
                        <span>Pul yechish: <strong>14 kun</strong></span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="border-t border-gray-800 pt-4 mb-4 text-center">
                      <div className="text-xs text-gray-400">HISOB NARXI</div>
                      <div className="text-xl font-bold text-red-400 mt-0.5">{acc.price_uzs}</div>
                    </div>

                    <Button
                      type="button"
                      onClick={() => handleOpenModal("REAL PREMIUM", acc.price_uzs, acc.amount)}
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-3 rounded-xl shadow-lg transition-all"
                    >
                      Sotib olish
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TAB 2: IMTIHONLI HISOBLAR */}
          <div
            aria-hidden={activeTab !== "imtihonli"}
            className={cn(
              "space-y-10 transition-opacity duration-300",
              activeTab === "imtihonli"
                ? "relative opacity-100 pointer-events-auto"
                : "absolute inset-x-0 top-0 opacity-0 pointer-events-none"
            )}
          >
            {/* Rules Banner */}
            <div className="grid md:grid-cols-3 gap-6 bg-gradient-to-r from-blue-950/40 via-gray-900 to-gray-900 p-6 md:p-8 rounded-3xl border border-blue-500/30">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-600/20 text-blue-400 rounded-2xl border border-blue-500/30">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-300">Zarar Limitlari</h4>
                  <p className="text-sm text-gray-300 mt-1">Kunlik <strong>3%</strong> max zarar | Umumiy <strong>6%</strong> max zarar.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyan-600/20 text-cyan-400 rounded-2xl border border-cyan-500/30">
                  <Zap className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-cyan-300">Foyda Maqsadi va Pul Yechish</h4>
                  <p className="text-sm text-gray-300 mt-1">Target <strong>10%</strong>. Realga o'tgach darhol pul yechiladi + hisob puli qaytariladi.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-emerald-600/20 text-emerald-400 rounded-2xl border border-emerald-500/30">
                  <Users className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-emerald-300">Xizmat Haqilari</h4>
                  <p className="text-sm text-gray-300 mt-1">Onlayn: <strong className="text-white">200 000 UZS</strong> | Offlayn: <strong className="text-white">300 000 UZS</strong></p>
                </div>
              </div>
            </div>

            {/* Grid of Accounts — flex wrap so last row centers */}
            <div className="flex flex-wrap justify-center gap-6">
              {imtihonliAccounts.map((acc, idx) => (
                <div
                  key={`imtihonli-${idx}`}
                  className={cn(
                    "w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1.5",
                    acc.featured
                      ? "bg-gradient-to-b from-gray-900 via-blue-950/40 to-gray-900 border-2 border-cyan-500/80 shadow-xl shadow-blue-950/50"
                      : "bg-gray-900/60 border border-gray-800 hover:border-cyan-500/40 hover:bg-gray-900/90"
                  )}
                >
                  {acc.featured && (
                    <span className="absolute -top-3 right-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold uppercase rounded-full shadow-md">
                      Tavsiya Etiladi
                    </span>
                  )}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">IMTIHONLI HISOB</div>
                    <div className="text-3xl font-extrabold text-white mb-4">{acc.amount}</div>

                    <div className="space-y-2 mb-6 text-sm text-gray-300">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>Kunlik zarar: <strong>3% max</strong></span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>Umumiy zarar: <strong>6% max</strong></span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>Foyda maqsadi: <strong>10% target</strong></span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="border-t border-gray-800 pt-4 mb-4 text-center">
                      <div className="text-xs text-gray-400">HISOB NARXI</div>
                      <div className="text-xl font-bold text-cyan-400 mt-0.5">{acc.price_uzs}</div>
                    </div>

                    <Button
                      type="button"
                      onClick={() => handleOpenModal("IMTIHONLI HISOB", acc.price_uzs, acc.amount)}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3 rounded-xl shadow-lg transition-all"
                    >
                      Sotib olish
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TAB 3: REAL LITE HISOBLAR */}
          <div
            aria-hidden={activeTab !== "lite"}
            className={cn(
              "space-y-10 transition-opacity duration-300",
              activeTab === "lite"
                ? "relative opacity-100 pointer-events-auto"
                : "absolute inset-x-0 top-0 opacity-0 pointer-events-none"
            )}
          >
            {/* Rules Banner */}
            <div className="grid md:grid-cols-3 gap-6 bg-gradient-to-r from-purple-950/40 via-gray-900 to-gray-900 p-6 md:p-8 rounded-3xl border border-purple-500/30">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-600/20 text-purple-400 rounded-2xl border border-purple-500/30">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-purple-300">Zarar Limitlari</h4>
                  <p className="text-sm text-gray-300 mt-1">Kunlik minus <strong>3%</strong> max | Umumiy minus <strong>4%</strong> max.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-indigo-600/20 text-indigo-400 rounded-2xl border border-indigo-500/30">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-indigo-300">Pul Yechish Muddatlari</h4>
                  <p className="text-sm text-gray-300 mt-1">Birinchi savdo ochilgan kundan 10 kundan keyin pul yechish mumkin.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-emerald-600/20 text-emerald-400 rounded-2xl border border-emerald-500/30">
                  <Monitor className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-emerald-300">Xizmat Haqilari</h4>
                  <p className="text-sm text-gray-300 mt-1">Onlayn: <strong className="text-white">200 000 UZS</strong> | Offlayn: <strong className="text-white">300 000 UZS</strong></p>
                </div>
              </div>
            </div>

            {/* Grid of Accounts — flex wrap so last row (2 cards) centers */}
            <div className="flex flex-wrap justify-center gap-6">
              {realLiteAccounts.map((acc, idx) => (
                <div
                  key={`lite-${idx}`}
                  className={cn(
                    "w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1.5",
                    acc.featured
                      ? "bg-gradient-to-b from-gray-900 via-purple-950/40 to-gray-900 border-2 border-purple-500/80 shadow-xl shadow-purple-950/50"
                      : "bg-gray-900/60 border border-gray-800 hover:border-purple-500/40 hover:bg-gray-900/90"
                  )}
                >
                  {acc.featured && (
                    <span className="absolute -top-3 right-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-xs font-bold uppercase rounded-full shadow-md">
                      Ommabop Lite
                    </span>
                  )}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-1">REAL LITE HISOB</div>
                    <div className="text-3xl font-extrabold text-white mb-4">{acc.amount}</div>

                    <div className="space-y-3 mb-6 text-sm text-gray-300">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>Kunlik minus: <strong>3% max</strong></span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>Umumiy minus: <strong>4% max</strong></span>
                      </div>
                      <div className="p-3 bg-purple-900/30 rounded-xl border border-purple-500/20 text-xs">
                        <div className="text-purple-300 font-semibold mb-1">Kun Stabil Daromad Chegarasi:</div>
                        <div className="text-base font-bold text-white">{acc.dailyProfit}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="border-t border-gray-800 pt-4 mb-4 text-center">
                      <div className="text-xs text-gray-400">HISOB NARXI</div>
                      <div className="text-xl font-bold text-purple-400 mt-0.5">{acc.price_uzs}</div>
                    </div>

                    <Button
                      type="button"
                      onClick={() => handleOpenModal("REAL LITE HISOB", acc.price_uzs, acc.amount)}
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-3 rounded-xl shadow-lg transition-all"
                    >
                      Sotib olish
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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

function CrownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 16L3 5l5.5 5L12 3l3.5 7L21 5l-2 11H5z" />
    </svg>
  )
}
