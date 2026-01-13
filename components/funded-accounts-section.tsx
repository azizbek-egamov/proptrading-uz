"use client"

import { useState } from "react"
import { CheckCircle, DollarSign, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import PurchaseModal from "./purchase-modal"

const fundedAccounts = [
  {
    title: "MINI",
    amount: "1 000$",
    features: [
      "8% umumiy yo'qotish bo'lmasligi lozim!",
      "Yo'q - target (foyda chegarasi yo'q)",
      "80% gacha qilingan daromaddan olinadigan ulushingiz",
    ],
    oldPrice: "",
    price: "1 100 000 UZS",
    platform: "Ctrader",
    featured: false,
    available: true,
  },
  {
    title: "MINI",
    amount: "2 500$",
    features: [
      "8% umumiy yo'qotish bo'lmasligi lozim!",
      "Yo'q - target (foyda chegarasi yo'q)",
      "80% gacha qilingan daromaddan olinadigan ulushingiz",
    ],
    oldPrice: "",
    price: "1 800 000 UZS",
    platform: "Metatrader 5",
    featured: false,
    available: true,
  },
  {
    title: "START+",
    amount: "5 000$",
    features: [
      "8% umumiy yo'qotish bo'lmasligi lozim!",
      "Yo'q - target (foyda chegarasi yo'q)",
      "80% gacha qilingan daromaddan olinadigan ulushingiz",
    ],
    oldPrice: "",
    price: "3 300 000 UZS",
    platform: "Ctrader",
    featured: true,
    available: true,
  },
  {
    title: "START+",
    amount: "10 000$",
    features: [
      "8% umumiy yo'qotish bo'lmasligi lozim!",
      "Yo'q - target (foyda chegarasi yo'q)",
      "80% gacha qilingan daromaddan olinadigan ulushingiz",
    ],
    oldPrice: "",
    price: "6 000 000 UZS",
    platform: "Metatrader 5",
    featured: false,
    available: true,
  },
  {
    title: "MEDIUM",
    amount: "25 000$",
    features: [
      "8% umumiy yo'qotish bo'lmasligi lozim!",
      "Yo'q - target (foyda chegarasi yo'q)",
      "80% gacha qilingan daromaddan olinadigan ulushingiz",
    ],
    oldPrice: "",
    price: "12 000 000 UZS",
    platform: "Metatrader 5",
    featured: true,
    available: true,
  },
  {
    title: "PREMIUM",
    amount: "50 000$",
    features: [
      "8% umumiy yo'qotish bo'lmasligi lozim!",
      "Yo'q - target (foyda chegarasi yo'q)",
      "80% gacha qilingan daromaddan olinadigan ulushingiz",
    ],
    oldPrice: "",
    price: "23 000 000 UZS",
    platform: "Metatrader 5",
    featured: false,
    available: true,
  },
  // {
  //   title: "VIP",
  //   amount: "100 000$",
  //   features: [
  //     "8% umumiy yo'qotish bo'lmasligi lozim!",
  //     "Yo'q - target (foyda chegarasi yo'q)",
  //     "80% gacha qilingan daromaddan olinadigan ulushingiz",
  //   ],
  //   oldPrice: "",
  //   price: "10 000 000 UZS",
  //   platform: "Metatrader 5",
  //   featured: false,
  //   available: true,
  // },
]

// const fundedAccounts = [
//   {
//     title: "MINI",
//     amount: "1 000$",
//     features: [
//       "8% umumiy yo'qotish bo'lmasligi lozim!",
//       "Yo'q - target (foyda chegarasi yo'q)",
//       "80% gacha qilingan daromaddan olinadigan ulushingiz",
//     ],
//     oldPrice: "",
//     price: "1 100 000 UZS",
//     platform: "Ctrader",
//     featured: false,
//     available: true,
//   },
//   {
//     title: "MINI",
//     amount: "2 500$",
//     features: [
//       "8% umumiy yo'qotish bo'lmasligi lozim!",
//       "Yo'q - target (foyda chegarasi yo'q)",
//       "80% gacha qilingan daromaddan olinadigan ulushingiz",
//     ],
//     oldPrice: "",
//     price: "1 800 000 UZS",
//     platform: "Metatrader 5",
//     featured: false,
//     available: true,
//   },
//   {
//     title: "START+",
//     amount: "5 000$",
//     features: [
//       "8% umumiy yo'qotish bo'lmasligi lozim!",
//       "Yo'q - target (foyda chegarasi yo'q)",
//       "80% gacha qilingan daromaddan olinadigan ulushingiz",
//     ],
//     oldPrice: "",
//     price: "3 300 000 UZS",
//     platform: "Ctrader",
//     featured: true,
//     available: true,
//   },
//   {
//     title: "START+",
//     amount: "10 000$",
//     features: [
//       "8% umumiy yo'qotish bo'lmasligi lozim!",
//       "Yo'q - target (foyda chegarasi yo'q)",
//       "80% gacha qilingan daromaddan olinadigan ulushingiz",
//     ],
//     oldPrice: "",
//     price: "6 000 000 UZS",
//     platform: "Metatrader 5",
//     featured: false,
//     available: true,
//   },
//   {
//     title: "MEDIUM",
//     amount: "25 000$",
//     features: [
//       "8% umumiy yo'qotish bo'lmasligi lozim!",
//       "Yo'q - target (foyda chegarasi yo'q)",
//       "80% gacha qilingan daromaddan olinadigan ulushingiz",
//     ],
//     oldPrice: "",
//     price: "12 000 000 UZS",
//     platform: "Metatrader 5",
//     featured: true,
//     available: true,
//   },
//   {
//     title: "PREMIUM",
//     amount: "50 000$",
//     features: [
//       "8% umumiy yo'qotish bo'lmasligi lozim!",
//       "Yo'q - target (foyda chegarasi yo'q)",
//       "80% gacha qilingan daromaddan olinadigan ulushingiz",
//     ],
//     oldPrice: "",
//     price: "23 000 000 UZS",
//     platform: "Metatrader 5",
//     featured: false,
//     available: true,
//   },
// ]

export default function FundedAccountsSection() {
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
    <section id="realprop" className="py-16 md:py-24 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Premium Imtihonsiz tayyor REAL proplar
            <br />
            <span className="text-lg text-gray-400">(etapsiz, imtihondan o'tilgan, tayyor akkauntlar)</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            Narxlar servis xizmatlari bilan hisoblangan, bular ichiga konsultatsiya, kuchli signal beruvchi bitta
            indikator, hisobni nomingizga olib berish va pul yechish jarayonlarida ko'maklashish kiritilgan!
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
          {fundedAccounts.map((account, index) => (
            <div
              key={`${account.title}-${index}`}
              className={cn(
                "rounded-2xl p-6 md:p-8 transition-all duration-300 h-full flex flex-col relative",
                `animate-delay-${((index % 3) + 1) * 100}`,
                account.featured
                  ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white transform scale-105 border-2 border-blue-400 shadow-lg"
                  : "bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-gray-600 hover-glow",
                !account.available && "opacity-60 cursor-not-allowed",
              )}
            >
              {account.featured && (
                <span className="absolute top-0 right-0 -mt-3 -mr-3 px-3 py-1 bg-yellow-400 text-gray-900 text-xs font-bold uppercase rounded-full shadow-md rotate-6">
                  Tavsiya etiladi!
                </span>
              )}
              <div className="text-center mb-6">
                <div
                  className={cn(
                    "text-sm font-semibold uppercase tracking-wider mb-2",
                    account.featured ? "text-blue-100" : "text-gray-400",
                  )}
                >
                  {account.title}
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-4">{account.amount}</div>
                <div className="w-12 h-0.5 bg-blue-500 mx-auto"></div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {account.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div
                      className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                        account.featured ? "bg-white/20" : "bg-blue-500",
                      )}
                    >
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div className="text-sm">{feature}</div>
                  </div>
                ))}
              </div>

              <div className="text-center mb-6">
                <div className={cn("font-semibold text-sm mb-1", account.featured ? "text-blue-100" : "text-blue-500")}>
                  NARXI:
                </div>
                {account.oldPrice && (
                  <div className={cn("line-through text-lg mb-1", account.featured ? "text-red-300" : "text-red-500")}>
                    {account.oldPrice}
                  </div>
                )}
                <div className={cn("text-2xl font-bold", account.featured ? "text-white" : "text-red-500")}>
                  {account.price}
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div
                    className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                      account.featured ? "bg-white/20" : "bg-blue-500",
                    )}
                  >
                    <DollarSign className="w-3 h-3 text-white" />
                  </div>
                  <div className="text-sm">
                    <strong>Yechib olish: </strong>
                    qilingan foydadan 14 kundan keyin yechishga so'rov bera olasiz
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div
                    className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                      account.featured ? "bg-white/20" : "bg-blue-500",
                    )}
                  >
                    <TrendingUp className="w-3 h-3 text-white" />
                  </div>
                  <div className="text-sm">
                    <strong>Savdo platformasi: </strong>
                    {account.platform}
                  </div>
                </div>
              </div>

              <Button
                className={cn(
                  "w-full py-3 rounded-full font-semibold mb-4",
                  account.featured
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",
                  !account.available && "bg-gray-600 hover:bg-gray-600 cursor-not-allowed",
                )}
                onClick={() => handleOpenModal(account.title, account.price, account.amount)}
                disabled={!account.available}
              >
                {account.available ? "Prop hisobni sotib olish!" : "Hozir mavjud emas"}
              </Button>

              <div className="text-center">
                <h4 className={cn("font-bold text-sm", account.featured ? "text-white" : "text-yellow-400")}>
                  SIGNAL BERUVCHI
                  <br />
                  INDIKATOR SOVG'A 🎁
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-gray-400 text-sm max-w-4xl mx-auto">
            <strong>Barcha hisoblarni 10 daqiqa ichida rasmiylashtirib sizga tezkor servis ko'rsatamiz!</strong>
            Karta orqali to'lov qilasiz va yopiq guruhimiz a'zosi hamda prop hisob egasi bo'lasiz va biz hisobingizda
            savdo jarayonlarini boshlaymiz, natija qo'l ostingizda bo'ladi{" "}
            <span className="text-blue-400">(barcha ma'lumotlar sizga taqdim etiladi 100%) -</span>
          </p>
          <p className="text-red-400 text-sm max-w-4xl mx-auto">
            <strong>
              Imtihonsiz real prop hisoblarda, qaysi jarayonda bo'lishidan qat'iy nazar umumiy miqdorda 8% minus qilinsa
              kontrakt bekor qilinadi va prop hisob bloklanadi va bu holatda javobgarlik u yoki bu shaxs zimmasiga
              yuklatilmaydi, mijoz boshqa yangi prop hisob sotib olsagina savdolar davom ettiriladi!
            </strong>
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
    </section>
  )
}
