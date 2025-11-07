"use client"

import { TrendingUp, Users, DollarSign, Award } from "lucide-react"
import AnimatedCounter from "./animated-counter"

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: 2500,
    suffix: "+",
    label: "Faol mijozlar",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    value: 15,
    prefix: "$",
    suffix: "M+",
    label: "Umumiy foyda",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: 95,
    suffix: "%",
    label: "Muvaffaqiyat darajasi",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: 5,
    label: "Yillik tajriba",
    color: "from-orange-500 to-red-500",
  },
]

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 via-blue-900/20 to-purple-900/20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">Bizning yutuqlarimiz</h2>
          <p className="text-gray-400 animate-fade-in-up animate-delay-200">
            Raqamlar orqali bizning muvaffaqiyatimizni ko'ring
          </p>
        </div>

        {/* Update the grid layout to be responsive as requested */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover-lift animate-fade-in-up animate-delay-${(index + 1) * 100}`}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 animate-bounce-in animate-delay-${(index + 1) * 200}`}
              >
                <div className="text-white">{stat.icon}</div>
              </div>

              <div className="text-4xl font-bold text-white mb-2">
                <AnimatedCounter
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2000 + index * 200}
                />
              </div>

              <p className="text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>
    </section>
  )
}
