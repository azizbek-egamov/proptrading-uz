"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Aziz Mahmudov",
    role: "Professional Trader",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Prop trading orqali men oyiga $5000 gacha daromad qilaman. Jamoaning yordami ajoyib!",
    profit: "$15,420",
    period: "3 oy",
  },
  {
    name: "Dilshod Tursunov",
    role: "Forex Trader",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Eng yaxshi prop trading platformasi! Tezkor to'lovlar va professional yordam.",
    profit: "$8,750",
    period: "2 oy",
  },
  {
    name: "Nodira Karimova",
    role: "Day Trader",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Katta kapital bilan savdo qilish imkoniyati berdi. Natijalar ajoyib!",
    profit: "$21,350",
    period: "4 oy",
  },
  {
    name: "Bobur Rahimov",
    role: "Swing Trader",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Professional jamoaning ko'magi bilan yuqori natijalarni qo'lga kiritdim.",
    profit: "$12,890",
    period: "3 oy",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-900/20 to-blue-900/20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
            Mijozlarimizning fikrlari
          </h2>
          <p className="text-gray-400 animate-fade-in-up animate-delay-200">Bizning mijozlarimiz nima deyishadi</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover-lift">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 animate-float">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                        <p className="text-gray-400">{testimonial.role}</p>
                        <div className="flex items-center mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <blockquote className="text-gray-300 text-lg mb-6 italic">"{testimonial.text}"</blockquote>

                    <div className="flex justify-between items-center">
                      <div className="text-green-400 font-bold text-xl">Foyda: {testimonial.profit}</div>
                      <div className="text-gray-400">{testimonial.period}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors hover-scale"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors hover-scale"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </section>
  )
}
