"use client"

import type React from "react"

import { useState } from "react"
import { Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AloqaSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const telegramMessage = `🔥 YANGI MUROJAAT!\n\n👤 Ism: ${formData.name}\n📞 Telefon: ${formData.phone}\n💬 Xabar: ${formData.message}\n\n⏰ Vaqt: ${new Date().toLocaleString("uz-UZ")}`

      const response = await fetch(
        `https://api.telegram.org/bot8105645545:AAEQzQv7sgGiM8cq9wc_mg6I5h2ubuzBCmQ/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: "-1002679316202",
            text: telegramMessage,
            parse_mode: "HTML",
          }),
        },
      )

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", phone: "", message: "" })
      } else {
        throw new Error("Xabar yuborishda xatolik")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Xabar yuborishda xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <section id="aloqa" className="py-16 md:py-24 bg-gradient-to-br from-green-900/20 to-blue-900/20 scroll-mt-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center card-gradient p-8 rounded-2xl shadow-lg">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-in">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Xabaringiz yuborildi!</h2>
            <p className="text-gray-400 mb-8">
              Tez orada bizning menedjerlarimiz siz bilan bog'lanishadi. Odatda bu 10 daqiqa ichida sodir bo'ladi.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="btn-gradient bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              Yana xabar yuborish
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="aloqa"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 scroll-mt-16"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Biz bilan bog'laning</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Savollaringiz bormi? Bizning professional jamoamiz sizga yordam berishga tayyor
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info and Map */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-lg hover-lift">
              <h3 className="text-2xl font-bold text-white mb-6">Aloqa ma'lumotlari</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Telefon raqam</p>
                    <p className="text-white font-semibold text-lg">+998 88 022 33 66</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-md">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Manzil</p>
                    <p className="text-white font-semibold text-lg">O'zbekiston, Urganch</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-[300px] rounded-xl overflow-hidden border border-gray-700 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.2076928894!2d60.63839899999999!3d41.549871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfcf3d4cb3b2c5%3A0x8e2a9d7e6c9e0d11!2zNDHCsDMyJzU5LjUiTiA2MMKwMzgnMTguMiJF!5e0!3m2!1sen!2sus!4v1718126212345!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Proptrading.uz joylashuvi"
                className="rounded-xl"
              ></iframe>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-white mb-3">⚡ Tezkor javob</h4>
              <p className="text-gray-300">
                Bizning menedjerlarimiz 10 daqiqa ichida sizga javob berishadi va barcha savollaringizga yordam beradi.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Xabar yuborish</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Ismingiz *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Ismingizni kiriting"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Telefon raqam *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="+998 90 123 45 67"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Xabaringiz *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
                  placeholder="Savolingiz yoki xabaringizni yozing..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-gradient bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Yuborilmoqda...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="w-4 h-4" />
                    <span>Xabar yuborish</span>
                  </div>
                )}
              </Button>
            </form>

            <p className="text-gray-400 text-sm mt-4">
              * Majburiy maydonlar. Sizning ma'lumotlaringiz xavfsiz saqlanadi.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
