import { CheckCircle } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      title: "Sizga kerakli prop hisobni tanlaysiz!",
      description: "So'rovnoma rasmiylashtirasiz va bizga to'lovni amalga oshirasiz!",
    },
    {
      title: "Biz siz bilan bog'lanamiz va hisobni ro'yxatdan o'tkazamiz!",
      description:
        "20 daqiqa ichida sizga prop hisob ulab beriladi, barcha ma'lumotlar sizga jo'natiladi va kichik konsultatsiya olib boriladi!",
    },
    {
      title: "Hohishingizga qarab savdo qiling!",
      description:
        "Hoh o'zingiz jahon bozorida savdo qiling yoki bizning robotlarga ishonib prop hisobni copytrade ga ulang va kuzating!",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:pl-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prop Trading bilan boshlang!</h2>
              <p className="text-gray-300 text-lg mb-6">
                Professional treyderlar bilan birga katta kapital bilan savdo qiling va yuqori daromad oling.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white">Professional konsultatsiya</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white">24/7 texnik yordam</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white">Tezkor pul yechish</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
