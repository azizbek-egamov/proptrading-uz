"use client"

import type React from "react"

import { useState } from "react"
import { X, CheckCircle, Send, Upload, CreditCard, Copy } from "lucide-react"
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
  const [paymentReceipt, setPaymentReceipt] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState<"form" | "payment">("form")
  const [selectedCard, setSelectedCard] = useState<"uzcard" | "visa">("uzcard")

  const cardData = {
    uzcard: {
      number: "8600 1204 1840 9390",
      raw: "8600120418409390",
      name: "UzCard",
      color: "from-blue-600 to-cyan-600"
    },
    visa: {
      number: "4998 9300 0743 1657",
      raw: "4998930007431657",
      name: "Visa",
      color: "from-purple-600 to-pink-600"
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, tradeOption: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    console.log("File selected:", file)

    if (file) {
      console.log("File type:", file.type)
      console.log("File size:", file.size)

      if (!file.type.startsWith("image/")) {
        console.log("Invalid file type")
        alert("Iltimos, faqat rasm fayli yuklang!")
        return
      }

      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        console.log("File too large")
        alert("Fayl hajmi juda katta! Maksimal 10MB rasm yuklash mumkin.")
        return
      }

      setPaymentReceipt(file)
      console.log("File set successfully")
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep("payment")
  }

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    console.log("Form submission started")
    console.log("Payment receipt:", paymentReceipt)
    console.log("Form data:", formData)

    if (!paymentReceipt) {
      console.log("No payment receipt found")
      alert("Iltimos, to'lov chekini yuklang!")
      return
    }

    setIsSubmitting(true)

    try {
      console.log("Creating FormData")
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("accountType", `${accountTitle} ${accountAmount} - ${accountPrice}`)
      formDataToSend.append(
        "message",
        `Manzil: ${formData.address}\nEmail: ${formData.email}\nSavdo turi: ${formData.tradeOption === "self" ? "O'zim savdo qilaman" : "Jamoangiz bilan birga savdo qilish istagim bor"
        }`,
      )
      formDataToSend.append("paymentReceipt", paymentReceipt)

      console.log("Making API request")
      const response = await fetch("/api/submit-request", {
        method: "POST",
        body: formDataToSend,
      })

      console.log("Response status:", response.status)
      console.log("Response ok:", response.ok)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      console.log("Response result:", result)

      if (result.success) {
        console.log("Submission successful")
        setIsSubmitted(true)
      } else {
        throw new Error(result.error || "Xabar yuborishda xatolik")
      }
    } catch (error) {
      console.error("Submission error:", error)
      let errorMessage = "Xabar yuborishda xatolik yuz berdi. Iltimos qaytadan urinib ko'ring."

      if (error instanceof Error) {
        if (error.message.includes("Failed to fetch")) {
          errorMessage = "Internet aloqasi bilan muammo. Iltimos, internetni tekshiring va qaytadan urinib ko'ring."
        } else if (error.message.includes("413")) {
          errorMessage = "Fayl hajmi juda katta. Iltimos, kichikroq rasm yuklang."
        }
      }

      alert(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const copyCardNumber = async () => {
    try {
      await navigator.clipboard.writeText(cardData[selectedCard].raw)
      alert("Karta raqami nusxalandi!")
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl w-full max-w-sm md:max-w-lg lg:max-w-xl relative border border-gray-700 shadow-2xl animate-fade-in-up max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors z-10"
        >
          <X className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>

        <div className="p-4 md:p-5 lg:p-6">
          {!isSubmitted ? (
            <>
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-3 md:p-4 mb-4 md:mb-5">
                <h2 className="text-lg md:text-xl font-bold text-center text-white mb-1">
                  {accountAmount} lik
                  <br />
                  <span className="text-blue-400">{accountTitle}</span> hisob
                  <br />
                  sotib olish
                </h2>
                <p className="text-center text-gray-300 text-xs md:text-sm">
                  {currentStep === "form" ? "Ma'lumotlaringizni kiriting" : "To'lovni amalga oshiring"}
                </p>
              </div>

              {currentStep === "form" ? (
                <form onSubmit={handleFormSubmit} className="space-y-3 md:space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">
                      Ism familiyangiz <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Ismingizni kiriting"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">
                      Yashash manzilingiz <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Manzilingizni kiriting"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">
                      Elektron pochtangizni kiriting <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Email manzilingiz"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">
                      Telefon raqamingiz <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800/80 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="+998 90 123 45 67"
                    />
                  </div>

                  <div className="bg-gray-800/50 rounded-lg p-3 md:p-4 border border-gray-700">
                    <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2 md:mb-3">
                      Qaysi tarzda ishlashmoqchisiz? <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex items-start">
                        <input
                          type="radio"
                          id="option-self"
                          name="tradeOption"
                          checked={formData.tradeOption === "self"}
                          onChange={() => handleRadioChange("self")}
                          className="w-4 h-4 text-blue-600 border-gray-600 focus:ring-blue-500 mt-0.5 bg-gray-700"
                        />
                        <label htmlFor="option-self" className="ml-2 block text-xs md:text-sm text-gray-300">
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
                        <label htmlFor="option-team" className="ml-2 block text-xs md:text-sm text-gray-300">
                          Jamoangiz bilan birga savdo qilish istagim bor!
                        </label>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 mt-3 sm:mt-4"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-sm sm:text-base">To'lovga o'tish</span>
                    </div>
                  </Button>
                </form>
              ) : (
                <form onSubmit={handlePaymentSubmit} className="space-y-4 md:space-y-5">
                  {/* Karta tanlash */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedCard("uzcard")}
                      className={`p-3 rounded-xl border-2 transition-all duration-300 ${selectedCard === "uzcard"
                          ? "border-blue-500 bg-blue-500/20"
                          : "border-gray-600 bg-gray-800/50 hover:border-gray-500"
                        }`}
                    >
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-400 mb-1">💳 UzCard</div>
                        <div className="text-xs text-gray-400">O'zbekiston kartasi</div>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedCard("visa")}
                      className={`p-3 rounded-xl border-2 transition-all duration-300 ${selectedCard === "visa"
                          ? "border-purple-500 bg-purple-500/20"
                          : "border-gray-600 bg-gray-800/50 hover:border-gray-500"
                        }`}
                    >
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-400 mb-1">💎 Visa</div>
                        <div className="text-xs text-gray-400">Xalqaro karta</div>
                      </div>
                    </button>
                  </div>

                  <div className={`bg-gradient-to-r ${selectedCard === "uzcard" ? "from-blue-600/20 to-cyan-600/20 border-blue-500/30" : "from-purple-600/20 to-pink-600/20 border-purple-500/30"} rounded-xl p-3 md:p-4 border`}>
                    <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-3">
                      <CreditCard className={`w-4 h-4 md:w-5 md:h-5 ${selectedCard === "uzcard" ? "text-blue-400" : "text-purple-400"}`} />
                      <h3 className="text-base md:text-lg font-semibold text-white">
                        {cardData[selectedCard].name} orqali to'lov
                      </h3>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-3 md:p-4 border border-gray-700 shadow-2xl">
                      <div className="text-xs text-gray-400 mb-1 md:mb-2">Karta raqami</div>
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="text-sm md:text-lg lg:text-xl font-mono text-white tracking-wide md:tracking-wider font-bold whitespace-nowrap overflow-hidden">
                            {cardData[selectedCard].number}
                          </div>
                        </div>
                        <Button
                          type="button"
                          onClick={copyCardNumber}
                          className="ml-2 md:ml-3 bg-gray-800 hover:bg-gray-700 text-white p-1.5 md:p-2 rounded-lg transition-colors flex-shrink-0"
                          size="sm"
                        >
                          <Copy className="w-3 h-3 md:w-4 md:h-4" />
                        </Button>
                      </div>
                    </div>

                    <p className="text-xs md:text-sm text-gray-400 mt-2 md:mt-3">
                      Narx: <span className="text-white font-semibold">{accountPrice}</span>
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium text-gray-300 mb-2 md:mb-3">
                      To'lov chekini yuklang <span className="text-red-500">*</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 md:p-5 text-center hover:border-gray-500 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        id="payment-receipt"
                        required
                      />
                      <label htmlFor="payment-receipt" className="cursor-pointer">
                        <Upload className="w-6 h-6 md:w-8 md:h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-xs md:text-sm text-gray-300 mb-1">
                          {paymentReceipt ? paymentReceipt.name : "To'lov chekini yuklash uchun bosing"}
                        </p>
                        <p className="text-xs text-gray-500">Faqat rasm fayllari qabul qilinadi</p>
                      </label>
                    </div>
                  </div>

                  <div className="flex space-x-2 md:space-x-3">
                    <Button
                      type="button"
                      onClick={() => setCurrentStep("form")}
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2.5 md:py-3 rounded-lg font-medium transition-all duration-300 text-sm md:text-base"
                    >
                      Orqaga
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting || !paymentReceipt}
                      className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-2.5 md:py-3 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                      onClick={(e) => {
                        console.log("Submit button clicked")
                        // Let the form handle the submission
                      }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-3 h-3 md:w-4 md:h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Yuborilmoqda...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                          <span>Tasdiqlash</span>
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              )}

              <p className="text-center text-xs md:text-sm text-blue-400 mt-3 md:mt-4">
                {currentStep === "form"
                  ? "Ma'lumotlarni to'ldirgach to'lov qismiga o'tasiz!"
                  : "To'lovni amalga oshirgach chekni yuklang!"}
              </p>
            </>
          ) : (
            <div className="text-center py-6 md:py-7">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-5">
                <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                To'lov muvaffaqiyatli qabul qilindi!
              </h3>
              <p className="text-gray-300 mb-4 md:mb-5 text-sm md:text-base px-2">
                Tez orada operatorlarimiz siz bilan bog'lanishadi. Iltimos, telegramda xabarlarni kuting.
              </p>
              <Button
                onClick={onClose}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2.5 sm:py-3 px-6 md:px-8 rounded-lg font-medium text-sm md:text-base"
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
