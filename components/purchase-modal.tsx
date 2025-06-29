"use client"

import type React from "react"

import { useState } from "react"
import { X, CheckCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PurchaseModalProps {
  isOpen: boolean
  onClose: () => void
  accountTitle: string
  accountPrice: string
  accountAmount: string
}

export default function PurchaseModal({
  isOpen,
  onClose,
  accountTitle,
  accountPrice,
  accountAmount,
}: PurchaseModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    tradeOption: "self", // Default option
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, tradeOption: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/submit-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          accountType: `${accountTitle} (${accountAmount}) - ${accountPrice}`,
          message: `Manzil: ${formData.address}\nEmail: ${formData.email}\nSavdo turi: ${
            formData.tradeOption === "self" ? "O'zim savdo qilaman" : "Jamoangiz bilan birga savdo qilish istagim bor"
          }`
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setIsSubmitted(true)
      } else {
        throw new Error(result.error || 'Xabar yuborishda xatolik')
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Xabar yuborishda xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl w-full max-w-md relative border border-gray-700 shadow-2xl animate-fade-in-up max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6">
          {!isSubmitted ? (
            <>
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-4 mb-6">
                <h2 className="text-xl font-bold text-center text-white mb-1">
                  {accountAmount} lik
                  <br />
                  <span className="text-blue-400">prop hisob</span> sotib olish
                </h2>
                <p className="text-center text-gray-300 text-sm">
                  Ariza yo'llang va uni tasdiqlash uchun telegramdan yozing!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Ism familiyangiz <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ismingizni kiriting"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-1">
                    Yashash manzilingiz <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Manzilingizni kiriting"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Elektron pochtangizni kiriting <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Email manzilingiz"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Telefon raqamingiz <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+998 90 123 45 67"
                  />
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Qaysi tarzda ishlashmoqchisiz? <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <input
                        type="radio"
                        id="option-self"
                        name="tradeOption"
                        checked={formData.tradeOption === "self"}
                        onChange={() => handleRadioChange("self")}
                        className="w-4 h-4 text-blue-600 border-gray-600 focus:ring-blue-500 mt-0.5 bg-gray-700"
                      />
                      <label htmlFor="option-self" className="ml-2 block text-sm text-gray-300">
                        O'zim savdo qilaman, menga faqat hisob olib bering
                      </label>
                    </div>
                    <div className="flex items-start">
                      <input
                        type="radio"
                        id="option-team"
                        name="tradeOption"
                        checked={formData.tradeOption === "team"}
                        onChange={() => handleRadioChange("team")}
                        className="w-4 h-4 text-blue-600 border-gray-600 focus:ring-blue-500 mt-0.5 bg-gray-700"
                      />
                      <label htmlFor="option-team" className="ml-2 block text-sm text-gray-300">
                        Jamoangiz bilan birga savdo qilish istagim bor!
                      </label>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Yuborilmoqda...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Shu prop hisobni sotib olmoqchiman!</span>
                    </div>
                  )}
                </Button>
              </form>

              <p className="text-center text-sm text-blue-400 mt-4">
                Arizani jo'natgach sistema sizni avtomatik tarzda telegramga yo'naltiradi!
              </p>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Arizangiz qabul qilindi!</h3>
              <p className="text-gray-300 mb-6">
                Tez orada operatorlarimiz siz bilan bog'lanishadi. Iltimos, telegramda xabarlarni kuting.
              </p>
              <Button
                onClick={onClose}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-8 rounded-lg font-medium"
              >
                Yopish
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
