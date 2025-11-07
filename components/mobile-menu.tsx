"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void
  refs: {
    shartlarRef: React.RefObject<HTMLElement>
    pricingRef: React.RefObject<HTMLElement>
    keyslarRef: React.RefObject<HTMLElement>
    aloqaRef: React.RefObject<HTMLElement>
  }
}

export default function MobileMenu({ scrollToSection, refs }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = (ref: React.RefObject<HTMLElement>) => {
    scrollToSection(ref)
    closeMenu()
  }

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu()
    } else {
      openMenu()
    }
  }

  const openMenu = () => {
    setIsAnimating(true)
    setIsOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeMenu = () => {
    setIsAnimating(true)
    setIsOpen(false)
    document.body.style.overflow = ""
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1070 && isOpen) {
        closeMenu()
      }
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  return (
    <div className="lg:hidden">
      <Button variant="ghost" size="sm" onClick={toggleMenu} className="text-white p-2">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Fixed overlay that appears immediately when menu is opened */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/95 backdrop-blur-lg z-50" onClick={closeMenu}>
          <div
            className={`absolute top-0 right-0 w-full h-full bg-gradient-to-b from-gray-900 to-black p-6 transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-8">
              <Button variant="ghost" size="sm" onClick={closeMenu} className="text-white p-2">
                <X className="w-6 h-6" />
              </Button>
            </div>

            <div className="flex flex-col space-y-6">
              <button
                className="block w-full text-left py-3 text-xl font-medium border-b border-gray-800 hover:text-blue-400 transition-colors"
                onClick={() => handleClick(refs.shartlarRef)}
              >
                Shartlar
              </button>
              <button
                className="block w-full text-left py-3 text-xl font-medium border-b border-gray-800 hover:text-blue-400 transition-colors"
                onClick={() => handleClick(refs.pricingRef)}
              >
                Narxlar
              </button>
              <button
                className="block w-full text-left py-3 text-xl font-medium border-b border-gray-800 hover:text-blue-400 transition-colors"
                onClick={() => handleClick(refs.keyslarRef)}
              >
                Keyslar
              </button>
              <button
                className="block w-full text-left py-3 text-xl font-medium border-b border-gray-800 hover:text-blue-400 transition-colors"
                onClick={() => handleClick(refs.aloqaRef)}
              >
                Aloqa
              </button>

              <div className="pt-6 flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-lg font-medium">+998 50 001 29 59</span>
              </div>

              <Button
                onClick={() => {
                  handleClick(refs.pricingRef)
                }}
                className="btn-gradient mt-4"
              >
                Prop hisob olish
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
