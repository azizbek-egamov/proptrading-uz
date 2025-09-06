"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Clock, Shield, DollarSign, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PurchaseModal from "@/components/purchase-modal"

const instantLiteAccounts = [
  {
    size: "$1,250",
    price: "500,000 UZS",
    dailyLoss: "2% ($25)",
    totalLoss: "4% ($50)",
    isPopular: false,
    accountType: "Instant Lite",
  },
  {
    size: "$2,500",
    price: "750,000 UZS",
    dailyLoss: "2% ($50)",
    totalLoss: "4% ($100)",
    isPopular: false,
    accountType: "Instant Lite",
  },
  {
    size: "$5,000",
    price: "1,150,000 UZS",
    dailyLoss: "2% ($100)",
    totalLoss: "4% ($200)",
    isPopular: false,
    accountType: "Instant Lite",
  },
  {
    size: "$10,000",
    price: "1,750,000 UZS",
    dailyLoss: "2% ($200)",
    totalLoss: "4% ($4,000)",
    isPopular: false,
    accountType: "Instant Lite",
  },
  {
    size: "$25,000",
    price: "2,550,000 UZS",
    dailyLoss: "2% ($500)",
    totalLoss: "4% ($1,000)",
    isPopular: false,
    accountType: "Instant Lite",
  },
  {
    size: "$50,000",
    price: "5,000,000 UZS",
    dailyLoss: "2% ($1,000)",
    totalLoss: "4% ($2,000)",
    isPopular: false,
    accountType: "Instant Lite",
  },
  {
    size: "$100,000",
    price: "10,000,000 UZS",
    dailyLoss: "2% ($2,000)",
    totalLoss: "4% ($4,000)",
    isPopular: false,
    accountType: "Instant Lite",
  },
]

const features = [
  {
    icon: <Target className="w-5 h-5" />,
    title: "Cheklanmagan Target",
    description: "Foyda qilish miqdori cheklanmagan",
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    title: "80% Profit Share",
    description: "Qilingan daromaddan 80% ulush",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "14 Kundan So'ng",
    description: "Yechib olish imkoniyati",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Xavfsiz Platform",
    description: "MT4/5, TradeLocker, DXtrade",
  },
]

export default function InstantLitePage() {
  const [selectedAccount, setSelectedAccount] = useState<any>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handlePurchase = (account: any) => {
    setSelectedAccount(account)
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

        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">Yangi Mahsulot</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Imtihonsiz - Real prop <span className="text-purple-400">Hisoblar</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Eng qulay shartlar bilan prop trading hisoblariga ega bo'ling. Tezkor boshlash va yuqori daromad imkoniyati.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="card-gradient p-6 text-center hover-lift">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4 text-purple-400">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {instantLiteAccounts.map((account, index) => (
            <Card
              key={index}
              className={`card-gradient border-2 hover-lift transition-all duration-300 flex flex-col h-full ${
                index === 0
                  ? "border-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/20 bg-gradient-to-br from-purple-900/30 to-blue-900/30"
                  : "border-gray-700/50 hover:border-purple-500/30"
              }`}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{account.size}</h3>
                  <div
                    className={`text-3xl font-bold mb-1 ${
                      index === 0
                        ? "bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                        : "text-purple-400"
                    }`}
                  >
                    {account.price}
                  </div>
                  <p className="text-sm text-gray-400">Bir martalik to'lov</p>
                </div>

                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">Kunlik zarar:</span>
                    <span className="text-white font-medium">{account.dailyLoss}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">Umumiy zarar:</span>
                    <span className="text-white font-medium">{account.totalLoss}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">Profit Share:</span>
                    <span className="text-green-400 font-medium">80%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">Target:</span>
                    <span className="text-blue-400 font-medium">Cheklanmagan</span>
                  </div>
                </div>

                <Button onClick={() => handlePurchase(account)} className="w-full mt-auto btn-gradient">
                  Hoziroq Sotib Olish
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Purchase Modal */}
      {selectedAccount && (
        <PurchaseModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          accountTitle="Imtihonsiz - Real prop"
          accountAmount={selectedAccount.size}
          accountPrice={selectedAccount.price}
        />
      )}

      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
    </div>
  )
}
