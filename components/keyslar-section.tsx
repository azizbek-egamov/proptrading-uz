import Image from "next/image"
import { TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function KeyslarSection() {
  const successStories = [
    {
      name: "Aziz M.",
      profit: "$12,450",
      period: "3 oy",
      account: "MEDIUM ($15,000)",
      image: "/placeholder.svg?height=80&width=80&text=AM",
    },
    {
      name: "Dilshod T.",
      profit: "$8,720",
      period: "2 oy",
      account: "START ($7,000)",
      image: "/placeholder.svg?height=80&width=80&text=DT",
    },
    {
      name: "Nodira K.",
      profit: "$21,350",
      period: "4 oy",
      account: "PREMIUM ($100,000)",
      image: "/placeholder.svg?height=80&width=80&text=NK",
    },
  ]

  const tradingStrategies = [
    {
      title: "Scalping",
      description: "Qisqa vaqt ichida kichik foyda olish strategiyasi",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Swing Trading",
      description: "Bir necha kun yoki hafta davomida pozitsiyalarni ushlab turish",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Day Trading",
      description: "Bir kun ichida savdolarni ochish va yopish",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Position Trading",
      description: "Uzoq muddatli trend asosida savdo qilish",
      color: "from-green-500 to-teal-500",
    },
  ]

  return (
    <section id="keyslar" className="py-16 md:py-24 bg-gray-900/30 scroll-mt-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Muvaffaqiyat keyslarimiz</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Bizning mijozlarimiz qanday natijalarni qo'lga kiritishmoqda va qanday strategiyalardan foydalanishmoqda
          </p>
        </div>

        {/* Success Stories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover-lift"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{story.name}</h3>
                  <p className="text-gray-400">{story.account}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Foyda:</span>
                  <span className="text-green-400 font-bold">{story.profit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Davr:</span>
                  <span className="text-white">{story.period}</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                    style={{ width: `${70 + index * 10}%` }}
                  ></div>
                </div>
              </div>

              <div className="text-sm text-gray-400">
                "Prop trading orqali men moliyaviy erkinlikka erishdim va o'z bilimlarimni amalda qo'llash imkoniyatiga
                ega bo'ldim."
              </div>
            </div>
          ))}
        </div>

        {/* Trading Strategies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Eng samarali savdo strategiyalari</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tradingStrategies.map((strategy, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover-glow"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${strategy.color} flex items-center justify-center mb-4`}
                >
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{strategy.title}</h4>
                <p className="text-gray-400">{strategy.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 md:p-12 border border-blue-500/30 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Siz ham muvaffaqiyatli treyderlar qatoriga qo'shiling!
              </h3>
              <p className="text-gray-300 mb-6">
                Bizning prop trading platformamiz orqali katta kapital bilan savdo qiling va yuqori daromad oling.
                Professional treyderlar jamoasi sizga yordam beradi.
              </p>
              <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover-lift">
                Prop hisob olish
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 shadow-xl">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Boshlang'ich kapital:</span>
                      <span className="text-white font-bold">$10,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">O'rtacha oylik foyda:</span>
                      <span className="text-green-400 font-bold">$2,500 - $4,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Profit ulushi:</span>
                      <span className="text-white font-bold">80%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Boshlash uchun kerak:</span>
                      <span className="text-white font-bold">910,000 UZS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
