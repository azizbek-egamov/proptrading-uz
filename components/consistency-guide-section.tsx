"use client"
import { TrendingUp, Target, Shield, CheckCircle } from "lucide-react"

export default function ConsistencyGuideSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900/90 to-black/90 relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-fade-in-up">
            $10,000 hisobda <span className="text-blue-400">consistency 15%</span> saqlash bo'yicha yo'l-yo'riq
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto animate-fade-in-up animate-delay-200">
            $10,000 bilan hisob ochganingizni tasavvur qiling. Sizning maqsadingiz – consistencyni barqaror 15%
            darajasida saqlash, ya'ni bir kunlik katta foyda natijasida butun hisobdagi foiz o'zgarmasligi.
          </p>
        </div>

        {/* Why 15% Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="card-gradient p-8 hover-lift animate-fade-in-left">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">📌 Nima uchun 15%?</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                <span className="text-blue-400 font-semibold">15% consistency</span> – bu barqaror, xavfsiz va prognoz
                qilinadigan o'sish demakdir.
              </p>
              <p>Katta kunlik foyda ($1,000+ kabi) bir zumda consistency ni ko'tarib yuboradi va riskni oshiradi.</p>
            </div>
          </div>

          <div className="card-gradient p-8 hover-lift animate-fade-in-right">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">💡 Qanday qilish kerak:</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="text-blue-400 font-semibold mb-2">Kichik va barqaror daromad olish</h4>
                <p className="text-gray-300">
                  Masalan, har kuni $150–$200 foyda qilish. Bu $10,000 hisobda 1–2% kunlik o'sishga to'g'ri keladi.
                </p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-green-400">
                <h4 className="text-green-400 font-semibold mb-2">Katta bir kunlik foydani oldini olish</h4>
                <p className="text-gray-300">
                  Har kuni maksimal $200–$250 atrofida foyda olishga harakat qilish. Shu bilan consistency tabiiy
                  ravishda 15% darajasida qoladi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategy Example */}
        <div className="card-gradient p-8 mb-12 animate-fade-in-up">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">20 kunlik strategiya misoli:</h3>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-lg border border-blue-500/20">
            <p className="text-lg text-gray-300 mb-4">
              20 kun davomida har kuni $200 foyda qilinsa, umumiy daromad:
              <span className="text-blue-400 font-bold"> $200 × 20 = $4,000</span>
            </p>
            <p className="text-gray-300">
              Shu tarzda bir kunlik eng katta foyda $1,000 dan oshmaydi va consistency 15% atrofida barqaror bo'ladi.
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card-gradient p-8 hover-lift animate-fade-in-left">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
              Natija:
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Katta kunlik "boom" yo'q, barcha foydalar kichik va ketma-ket.
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Risk minimal, hisob o'sishi barqaror.
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Consistency $10,000 hisobda ham 15% atrofida saqlanadi va undan oshmaydi.
              </li>
            </ul>
          </div>

          <div className="card-gradient p-8 hover-lift animate-fade-in-right">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-2xl mr-3">⚡️</span>
              Xulosa:
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Kichik va barqaror foydalarni yig'ing.
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Har kuni eng katta foyda chegarasini belgilab oling ($200–$250).
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Shu bilan $10,000 hisobda barqaror 15% consistency saqlanadi.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10 animate-float"
        style={{ animationDelay: "3s" }}
      ></div>
    </section>
  )
}
