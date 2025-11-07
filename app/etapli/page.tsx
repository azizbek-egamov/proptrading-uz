"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import PurchaseModal from "@/components/purchase-modal"

const pricingOptions = [
  {
    title: "MINI",
    price: "2 500$",
    features: [
      "kunlik zarar miqdori 4% - (100$) dan oshmasligi lozim",
      "umumiy zarar miqdori 6% - (150$) dan oshmasligi lozim",
      "10% target (foyda qilish lozim)",
      "70% - 80% qilingan daromaddan olinadigan ulush",
    ],
    oldPrice: "370 000 UZS",
    price_uzs: "350 000 UZS",
    withdrawal: "REALga o'tgach, 14 kundan so'ng 80% daromadni chiqarish mumkin",
    platform: "Matchtrade | Metatrader 4/5",
    featured: false,
    discount_text: "",
    button_text: "Prop hisobni sotib olish!",
    available: true,
  },
  {
    title: "START",
    price: "5 000$",
    features: [
      "kunlik zarar miqdori 4% - (200$) dan oshmasligi lozim",
      "umumiy zarar miqdori 6% - (300$) dan oshmasligi lozim",
      "10% target (foyda qilish lozim)",
      "70% - 80% qilingan daromaddan olinadigan ulush",
    ],
    oldPrice: "650 000 UZS",
    price_uzs: "600 000 UZS",
    withdrawal: "REALga o'tgach, 14 kundan so'ng 80% daromadni chiqarish mumkin",
    platform: "Metatrader 4/5",
    featured: false,
    discount_text: "",
    button_text: "Prop hisobni sotib olish!",
    available: true,
  },
  {
    title: "START",
    price: "10 000$",
    features: [
      "kunlik zarar miqdori 4% - (400$) dan oshmasligi lozim",
      "umumiy zarar miqdori 6% - (600$) dan oshmasligi lozim",
      "10% target (1000$ foyda qilish lozim)",
      "70% - 80% qilingan daromaddan olinadigan ulush",
    ],
    oldPrice: "990 000 UZS",
    price_uzs: "910 000 UZS",
    withdrawal: "REALga o'tgach, 14 kundan so'ng 80% daromadni chiqarish mumkin",
    platform: "Matchtrade | Metatrader 4/5",
    featured: true,
    discount_text: "",
    button_text: "Prop hisobni sotib olish!",
    available: true,
  },
  {
    title: "STANDART",
    price: "25 000$",
    features: [
      "kunlik zarar miqdori 4% - (1000$) dan oshmasligi lozim",
      "umumiy zarar miqdori 6% - (1500$) dan oshmasligi lozim",
      "10% target (2500$ foyda qilish lozim)",
      "70% - 80% qilingan daromaddan olinadigan ulush",
    ],
    oldPrice: "1 970 000 UZS",
    price_uzs: "1 800 000 UZS",
    withdrawal: "REALga o'tgach, 14 kundan so'ng 80% daromadni chiqarish mumkin",
    platform: "Matchtrade | Metatrader 4/5",
    featured: true,
    discount_text: "",
    button_text: "Prop hisobni sotib olish!",
    available: true,
  },
  {
    title: "OMMAVIY",
    price: "50 000$",
    features: [
      "kunlik zarar miqdori 4% - (2000$) dan oshmasligi lozim",
      "umumiy zarar miqdori 6% - (3000$) dan oshmasligi lozim",
      "10% target (5000$ foyda qilish lozim)",
      "70% - 80% qilingan daromaddan olinadigan ulush",
    ],
    oldPrice: "4 000 000 UZS",
    price_uzs: "3 800 000 UZS",
    withdrawal: "REALga o'tgach, 14 kundan so'ng 80% daromadni chiqarish mumkin",
    platform: "Matchtrade | Metatrader 4/5",
    featured: false,
    discount_text: "",
    button_text: "Prop hisobni sotib olish!",
    available: true,
  },
  {
    title: "PREMIUM",
    price: "100 000$",
    features: [
      "kunlik zarar miqdori 4% - (4000$) dan oshmasligi lozim",
      "umumiy zarar miqdori 6% - (6000$) dan oshmasligi lozim",
      "10% target (10 000$ foyda qilish lozim)",
      "70% - 80% qilingan daromaddan olinadigan ulush",
    ],
    oldPrice: "6 500 000 UZS",
    price_uzs: "6 450 000 UZS",
    withdrawal: "REALga o'tgach, 14 kundan so'ng 80% daromadni chiqarish mumkin",
    platform: "Metatrader 4/5",
    featured: true,
    discount_text: "",
    button_text: "Prop hisobni sotib olish!",
    available: true,
  },
]

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 md:px-8 py-8">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Bosh sahifaga qaytish
        </Link>

        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
            Imtihonli Proplar <span className="text-gray-400">(etapli) Aksiya 1+1</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto animate-fade-in-up animate-delay-200">
            Narxlar servis xizmatlari bilan hisoblangan, bular ichiga konsultatsiya, hisobni nomingizga olib berish,
            sizga ulab berish va unda savdo qilib berish ichiga kiritilgan!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {pricingOptions.map((option, index) => (
            <div
              key={`${option.title}-${index}`}
              className={cn(
                "rounded-2xl p-6 md:p-8 transition-all duration-300 h-full flex flex-col relative",
                "hover-lift animate-fade-in-up",
                `animate-delay-${((index % 3) + 1) * 100}`,
                option.featured
                  ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white transform scale-105 border-2 border-blue-400 shadow-lg"
                  : "bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-gray-600 hover-glow",
                !option.available && "opacity-60 cursor-not-allowed",
              )}
            >
              {option.featured && (
                <span className="absolute top-0 right-0 -mt-3 -mr-3 px-3 py-1 bg-yellow-400 text-gray-900 text-xs font-bold uppercase rounded-full shadow-md rotate-6">
                  Tavsiya etiladi!
                </span>
              )}
              <div className="text-center mb-6">
                <div
                  className={cn(
                    "text-sm font-semibold uppercase tracking-wider mb-2",
                    option.featured ? "text-blue-100" : "text-gray-400",
                  )}
                >
                  {option.title}
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-4">{option.price}</div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {option.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div
                      className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                        option.featured ? "bg-white/20" : "bg-blue-500",
                      )}
                    >
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div className={cn("text-sm", option.featured ? "text-white" : "")}>{feature}</div>
                  </div>
                ))}
              </div>

              <div className="text-center mb-6">
                {option.oldPrice && (
                  <div className={cn("line-through text-lg", option.featured ? "text-red-300" : "text-red-500")}>
                    {option.oldPrice}
                  </div>
                )}
                <div className={cn("font-semibold text-sm mb-1", option.featured ? "text-blue-100" : "text-blue-500")}>
                  NARXI:
                </div>
                <div className={cn("text-2xl font-bold", option.featured ? "text-white" : "text-red-500")}>
                  {option.price_uzs}
                </div>
                {option.discount_text && <div className="text-sm mt-1">{option.discount_text}</div>}
              </div>

              <div className="space-y-4 mb-4">
                <div className="flex items-start space-x-3">
                  <div
                    className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                      option.featured ? "bg-white/20" : "bg-blue-500",
                    )}
                  >
                    <svg
                      className={cn("w-3 h-3", option.featured ? "text-white" : "text-white")}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.95a9.95 9.95 0 110-19.9 9.95 9.95 0 010 19.9zm.384-6.208l.891-2.138a.511.511 0 00-.294-.695 6.7 6.7 0 01-2.04-.956c-.163-.109-.294-.287-.294-.506 0-.465.336-.778.84-.778.33 0 .593.149.794.307l.858-.982c-.556-.539-1.339-.778-1.713-.771v-1.098h-.84v1.098c-1.088.071-1.997.724-1.997 2.037 0 .956.57 1.473 1.57 1.87.723.294 1.231.537 1.231 1.01 0 .444-.425.703-1.003.703-.565 0-.986-.18-1.434-.578l-.725.94c.514.47 1.339.69 1.922.704v1.098h.84v-1.159c1.156-.075 1.942-.816 1.942-1.896 0-.736-.413-1.224-.898-1.519z"></path>
                    </svg>
                  </div>
                  <div className="text-sm">
                    <strong>Yechib olish: </strong>
                    {option.withdrawal}
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div
                    className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                      option.featured ? "bg-white/20" : "bg-blue-500",
                    )}
                  >
                    <svg
                      className={cn("w-3 h-3", option.featured ? "text-white" : "text-white")}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 3H2v13.61h20V3zm0 2.44V6.5H2V5.44h20zM2 14.56V8.5h20v6.06H2z"></path>
                      <path d="M16.53 13.13a.55.55 0 100-1.1.55.55 0 000 1.1zM14.22 13.13a.55.55 0 100-1.1.55.55 0 000 1.1zM11.94 13.13a.55.55 0 100-1.1.55.55 0 000 1.1z"></path>
                    </svg>
                  </div>
                  <div className="text-sm">
                    <strong>Savdo platformasi : </strong>
                    {option.platform}
                  </div>
                </div>
              </div>

              <Button
                className={cn(
                  "w-full py-3 rounded-full font-semibold hover-lift",
                  option.featured
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",
                  !option.available && "bg-gray-600 hover:bg-gray-600 cursor-not-allowed",
                )}
                onClick={() => handleOpenModal(option.title, option.price_uzs, option.price)}
                disabled={!option.available}
              >
                {option.available ? option.button_text : "Hozir mavjud emas"}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-gray-400 text-sm max-w-4xl mx-auto">
            Barcha hisoblarni 10 daqiqa ichida rasmiylashtirlib sizga tezkor servis ko'rsatamiz! Karta orqali to'lov
            qilasiz va yopiq guruhimiz a zosi hamda prop hisob egasi bo'lasiz va biz hisobingizda savdo jarayonlarini
            boshlaymiz, natija qo'l ostingizda bo'ladi (
            <span className="text-blue-400">barcha ma'lumotlar sizga taqdim etiladi 100%</span>) -
          </p>
          <p className="text-red-400 text-sm max-w-4xl mx-auto">
            Imtihonli challenge prop hisoblarda, qaysi jarayonda bo'lishidan qat'iy nazar 3% kunlik 6% umumiy miqdorda
            minus qilinsа kontrakt bekor qilinadi va prop hisob bloklandi va bu holatda javobgarlik u yoki bu shaxs
            zimmasiga yuklatilmaydi, mijoz boshqa yangi prop hisob sotib olsagina savdolar davom ettiriladi!
          </p>
        </div>
      </div>

      {/* Purchase Modal */}
      <PurchaseModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        accountTitle={selectedAccount.title}
        accountPrice={selectedAccount.price}
        accountAmount={selectedAccount.amount}
      />
    </div>
  )
}
