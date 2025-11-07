"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import PurchaseModal from "@/components/purchase-modal"

const preSalePackages = [
  {
    title: "START PACKAGE",
    price: "999 000 so'm",
    features: ["Boshlang'ich darajadagi treyderlar uchun", "Professional ko'rsatmalar", "Texnik yordam"],
  },
  {
    title: "ZETA PACKAGE",
    price: "3 900 000 so'm",
    features: ["O'rta darajadagi treyderlar uchun", "Kengaytirilgan imkoniyatlar", "Premium texnik yordam"],
    featured: true,
  },
  {
    title: "PROP PACKAGE",
    price: "9 000 000 so'm",
    features: ["Professional treyderlar uchun", "Barcha imkoniyatlar ochiq", "VIP texnik yordam"],
  },
]

export default function PreSalePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState({
    title: "",
    price: "",
  })

  useEffect(() => {
    const targetDate = new Date("2025-11-15T23:59:59").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time: number) => time.toString().padStart(2, "0")

  const handleOpenModal = (title: string, price: string) => {
    setSelectedPackage({ title, price })
    setModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 md:px-8 py-8">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Bosh sahifaga qaytish
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
            🎉 <span className="text-yellow-400">PRE SALE</span> – AKSIYA
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            15-noyabrgacha chegirmadagi prop paketlardan birini tanlang!
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-16 animate-fade-in-up animate-delay-300">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Aksiya tugashiga qolgan vaqt:</h2>
          <div className="flex items-center justify-center space-x-2 md:space-x-4">
            <div className="card-gradient p-4 md:p-6 min-w-[80px] md:min-w-[100px] hover-lift">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400">
                {formatTime(timeLeft.days)}
              </div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-2">KUN</div>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-yellow-400">:</div>
            <div className="card-gradient p-4 md:p-6 min-w-[80px] md:min-w-[100px] hover-lift">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400">
                {formatTime(timeLeft.hours)}
              </div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-2">SOAT</div>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-yellow-400">:</div>
            <div className="card-gradient p-4 md:p-6 min-w-[80px] md:min-w-[100px] hover-lift">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 animate-pulse">
                {formatTime(timeLeft.minutes)}
              </div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-2">DAQIQA</div>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-yellow-400">:</div>
            <div className="card-gradient p-4 md:p-6 min-w-[80px] md:min-w-[100px] hover-lift">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 animate-pulse">
                {formatTime(timeLeft.seconds)}
              </div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-2">SONIYA</div>
            </div>
          </div>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {preSalePackages.map((pkg, index) => (
            <div
              key={index}
              className={cn(
                "rounded-2xl p-8 transition-all duration-300 h-full flex flex-col relative hover-lift animate-fade-in-up",
                pkg.featured
                  ? "bg-gradient-to-br from-yellow-600 to-orange-600 text-white transform scale-105 border-2 border-yellow-400 shadow-lg"
                  : "bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-gray-600 hover-glow",
              )}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {pkg.featured && (
                <span className="absolute top-0 right-0 -mt-3 -mr-3 px-3 py-1 bg-red-500 text-white text-xs font-bold uppercase rounded-full shadow-md rotate-6">
                  Eng mashhur!
                </span>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">{pkg.price}</div>
                <div className="w-12 h-0.5 bg-yellow-500 mx-auto"></div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div
                      className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                        pkg.featured ? "bg-white/20" : "bg-yellow-500",
                      )}
                    >
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div className="text-sm">{feature}</div>
                  </div>
                ))}
              </div>

              <Button
                className={cn(
                  "w-full py-3 rounded-full font-semibold hover-lift",
                  pkg.featured
                    ? "bg-white text-orange-600 hover:bg-gray-100"
                    : "bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white",
                )}
                onClick={() => handleOpenModal(pkg.title, pkg.price)}
              >
                Tanlash
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-6 md:p-8 border border-blue-500/30 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Batafsil ma'lumot:</h3>
          <a
            href="https://t.me/proptrader2025/986"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 text-lg font-semibold"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
            </svg>
            Telegram kanalimizga o'ting
          </a>
        </div>
      </div>

      {/* Purchase Modal */}
      <PurchaseModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        accountTitle={selectedPackage.title}
        accountPrice={selectedPackage.price}
        accountAmount="PRE SALE"
      />
    </div>
  )
}
