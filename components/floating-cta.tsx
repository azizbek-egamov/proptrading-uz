"use client"

import { useState, useEffect } from "react"
import { ShoppingCart, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FloatingCTAProps {
  onPricingClick: () => void
}

export default function FloatingCTA({ onPricingClick }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const threshold = 1000 // Show after scrolling 1000px

      if (scrolled > threshold && !isDismissed) {
        setIsVisible(true)
      } else if (scrolled <= threshold) {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  if (isDismissed) return null

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="relative">
        <Button
          onClick={onPricingClick}
          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-4 rounded-full shadow-2xl animate-pulse-glow hover-lift magnetic-btn"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Prop hisob olish!
        </Button>
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
      </div>
    </div>
  )
}
