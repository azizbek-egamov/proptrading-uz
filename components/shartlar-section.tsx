import { CheckCircle, AlertTriangle, Shield, Clock } from "lucide-react"

export default function ShartlarSection() {
  const terms = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Hisob xavfsizligi",
      description: "Barcha hisoblar xavfsiz muhitda saqlanadi va faqat siz kirish huquqiga egasiz.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Savdo vaqti",
      description: "Savdo 24/5 rejimida, bozor ochiq bo'lgan barcha vaqtlarda amalga oshiriladi.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Profit ulushi",
      description: "Siz qilgan foydaning 70-90% sizga tegishli, qolgan qism kompaniya ulushi.",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Risk boshqaruvi",
      description: "Belgilangan zarar chegaralarini buzish hisobni bloklashga olib keladi.",
    },
  ]

  const rules = [
    "Hisobda faqat o'zingiz savdo qiling yoki bizning tavsiya etilgan robotlardan foydalaning",
    "Kunlik va umumiy zarar chegaralarini qat'iy rioya qiling",
    "Hisobni uchinchi shaxslarga bermang yoki ularga kirish huquqi bermang",
    "Barcha savdo operatsiyalari monitoring qilinadi",
    "Pul yechish uchun kamida 14 kun kutish talab etiladi",
    "Hisobni bloklanishi holatida qayta tiklab bo'lmaydi",
    "Barcha shartlarni buzish hisobni darhol yopishga olib keladi",
  ]

  return (
    <section id="shartlar" className="py-16 md:py-24 bg-gray-900/30 scroll-mt-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Shartlar va qoidalar</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Prop trading hisoblaridan foydalanish uchun asosiy shartlar va qoidalar bilan tanishib chiqing
          </p>
        </div>

        {/* Key Terms */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {terms.map((term, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 text-white">
                {term.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{term.title}</h3>
              <p className="text-gray-400">{term.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Rules */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
            Muhim qoidalar
          </h3>
          <div className="space-y-4">
            {rules.map((rule, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-300">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Warning */}
        <div className="mt-8 bg-red-900/20 border border-red-500/30 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold text-red-400 mb-2">Muhim ogohlantirish!</h4>
              <p className="text-gray-300">
                Prop trading yuqori risk bilan bog'liq. Sarmoyangizni yo'qotish ehtimoli mavjud. Faqat yo'qotishga
                tayyor bo'lgan mablag' bilan savdo qiling. Moliyaviy maslahat uchun professional konsultantlarga
                murojaat qiling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
