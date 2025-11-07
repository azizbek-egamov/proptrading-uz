"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { Phone, Play, ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/mobile-menu"
import HowItWorksSection from "@/components/how-it-works-section"
import ProcessStepsSection from "@/components/process-steps-section"
import SocialProofSection from "@/components/social-proof-section"
import PartnersSection from "@/components/partners-section"
import ShartlarSection from "@/components/shartlar-section"
import KeyslarSection from "@/components/keyslar-section"
import AloqaSection from "@/components/aloqa-section"
import Footer from "@/components/footer"
import VideoModal from "@/components/video-modal"
import ScrollProgress from "@/components/scroll-progress"
// import ParticlesBackground from "@/components/particles-background"
import TestimonialCarousel from "@/components/testimonial-carousel"
import StatsSection from "@/components/stats-section"
import ConsistencyGuideSection from "@/components/consistency-guide-section"
// import InstantLiteSection from "@/components/instant-lite-section" // Removed import for Instant Lite section
import { useIsMobile } from "@/hooks/use-mobile"

// Matnlar JSON formatda
const messages = [
    "Islom 5 000$lik hisobdan 237$ yechdi.",
    "Anvar 25 000$lik hisob xarid qildi!",
    "Laylo 10 000$ challenge'ni muvaffaqiyatli yakunladi — bonus olindi.",
    "Jamshid 2 000$ bilan 1 200$ foyda chiqardi.",
    "Sardor VIP ga o'tib, 50% imtiyoz oldi.",
    "Nilufar 1 500$dan 300$ yechdi — chiqish muvaffaqiyatli.",
    "Bek 50 000$lik prop'ni sotib oldi — welcome aboard!",
    "Malika Start paketini oldi — o'qish boshlandi.",
    "Farhod 7 kun ichida 18% ROI ko'rsatdi.",
    "Shoxrux 3,200$ balansni 740$ ga ko'paytirdi.",
    "Diyor 10 000$ challenge'ni PASS qildi — real account ochildi.",
    "Saida profitni yechib, 420$ olindi.",
    "Odil demo'dan realga o'tdi — tabrik!",
    "Yusuf 25$ depozit qildi — start olindi.",
    "Nil 15 000$ hisobni sotib oldi — level up.",
    "Aziza 2 ta pullik modulni sotib oldi — bilim +1.",
    "Kamol 5 000$ challenge'dan 500$ yechdi — nice.",
    "Alisher PRO paket + prop application yubordi.",
    "Shirin 900$ foyda olib, hisobni yechdi.",
    "Javlon 30-kun ichida 12% konsistensiya ko'rsatdi.",
    "Zebo VIP-kanalga obuna bo'ldi — premium signals.",
    "Umid 50$ depozit olib test boshladi.",
    "Nodir 100% pass — prop'ga yo'l ochildi.",
    "Lola 1,000$ bilan 150$ foyda oldi.",
    "Mirzam 20 000$ hisobni sotib oldi — big move.",
    "Saodat challenge'dan 0% drawdown bilan o'tdi.",
    "Aziz 3 ta kun ichida 2x growth — shunchaki ajoyib.",
    "Shahnoza 2,500$ yechdi — balans yangilandi.",
    "Orif 10 000$ hisobni qayta aktiv qildi.",
    "Dilshod PRO robotni xarid qildi — avtomatik scalping.",
    "Feruza copy-trade funksiyasini yoqdi — follower+1.",
    "Botir 400$ profitni yechib, tashrif buyurdi.",
    "Nodira 5 kun ichida 7% growth — konsistensiya yaxshi.",
    "Qodir 12 000$ challenge'ni olgan — imkoniyat katta.",
    "Maftuna 250$ depozit qilib, demo'dan realga o'tdi.",
    "Ikrom 800$ profit bilan hisobni yechdi.",
    "Sherzod VIP-mentor bilan 1:1 sessiya oldi.",
    "Dilbar 3-kurs modulini tugatdi — sertifikat tayyor.",
    "Ravshan 15 000$ accountni qayta sotib oldi.",
]

export default function PropTradingLanding() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentMessage, setCurrentMessage] = useState("")
  const [messageOpacity, setMessageOpacity] = useState(1)
  const isMobile = useIsMobile()

  // References to sections for smooth scrolling
  const shartlarRef = useRef<HTMLElement>(null)
  const pricingRef = useRef<HTMLElement>(null)
  const keyslarRef = useRef<HTMLElement>(null)
  const aloqaRef = useRef<HTMLElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  // Function to handle smooth scrolling without changing URL
  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      // 14-noyabr 2025, 23:59:59
      const targetDate = new Date(2025, 10, 14, 23, 59, 59).getTime()
      const difference = Math.max(0, targetDate - now)

      const days = Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24)))
      const hours = Math.max(0, Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      const minutes = Math.max(0, Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)))
      const seconds = Math.max(0, Math.floor((difference % (1000 * 60)) / 1000))

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearInterval(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Random matnlarni almashib turadigan useEffect
  useEffect(() => {
    // Dastlabki matnni random tanlash
    const getRandomMessage = () => {
      const randomIndex = Math.floor(Math.random() * messages.length)
      return messages[randomIndex]
    }

    // Birinchi matnni ko'rsatish
    setCurrentMessage(getRandomMessage())

    // Har 4 soniyada yangi matn ko'rsatish
    const messageInterval = setInterval(() => {
      // Fade out animatsiya
      setMessageOpacity(0)
      
      setTimeout(() => {
        // Yangi random matn
        setCurrentMessage(getRandomMessage())
        // Fade in animatsiya
        setMessageOpacity(1)
      }, 300) // 300ms fade out vaqt
    }, 4000) // 4 soniya interval

    return () => {
      clearInterval(messageInterval)
    }
  }, [])

  const formatTime = (time: number) => time.toString().padStart(2, "0")

  const pricingCards = [
    {
      title: "Imtihonli Proplar",
      subtitle: "(etapli) Aksiya 1+1",
      description: "Imtihonli challenge prop hisoblar. 10% target bilan, 4% kunlik va 6% umumiy zarar chegarasi.",
      features: [
        "10% Target talab qilinadi",
        "4% kunlik zarar chegarasi",
        "6% umumiy zarar chegarasi",
        "70-80% profit share",
      ],
      priceRange: "350,000 - 6,450,000 UZS",
      link: "/etapli",
      color: "from-blue-600 to-purple-600",
      featured: true,
    },
    {
      title: "Imtihonsiz - Real proplar",
      subtitle: "(yangi mahsulot)",
      description: "Eng qulay shartlar bilan. 2% kunlik, 4% umumiy zarar va cheklanmagan target.",
      features: ["Cheklanmagan target", "2% kunlik zarar", "4% umumiy zarar", "80% profit share"],
      priceRange: "500,000 - 10,000,000 UZS",
      link: "/instant-lite",
      color: "from-purple-600 to-pink-600",
      featured: false,
    },
    {
      title: "Premium Proplar",
      subtitle: "(tayyor akkauntlar)",
      description: "Imtihondan o'tilgan tayyor hisoblar. Target yo'q, faqat 8% umumiy zarar chegarasi.",
      features: ["Target yo'q", "8% umumiy zarar chegarasi", "Kunlik limit yo'q", "80% profit share"],
      priceRange: "580,000 - 10,000,000 UZS",
      link: "/imtihonsiz",
      color: "from-green-600 to-blue-600",
      featured: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <ScrollProgress />
      {/* <ParticlesBackground /> */}

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-3 bg-black/80 backdrop-blur-md shadow-lg" : "py-5"}`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <a
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-full"></div>
            </div>
            <span className="text-xl md:text-2xl font-bold text-blue-200">PROPTRADING.UZ</span>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection(shartlarRef)}
              className="hover:text-blue-400 transition-colors relative group"
            >
              Shartlar
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection(pricingRef)}
              className="hover:text-blue-400 transition-colors relative group"
            >
              Narxlar
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection(keyslarRef)}
              className="hover:text-blue-400 transition-colors relative group"
            >
              Keyslar
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection(aloqaRef)}
              className="hover:text-blue-400 transition-colors relative group"
            >
              Aloqa
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-blue-400" />
              <span>+998 88 022 33 66</span>
            </div>
            {!isMobile && (
              <>
                <Button onClick={() => scrollToSection(pricingRef)} className="btn-gradient">
                  Prop hisob narxlari!
                </Button>
              </>
            )}
            <div className="lg:hidden">
              <MobileMenu scrollToSection={scrollToSection} refs={{ shartlarRef, pricingRef, keyslarRef, aloqaRef }} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div ref={heroRef} className="pt-28 md:pt-36 pb-16 md:pb-24 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-left text-shadow-lg">
                  Katta <span className="text-blue-400 font-bold">KAPITAL</span>{" "}
                </h1>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-left animate-delay-200 text-shadow-lg">
                  endi muammo emas!
                </h2>
              </div>

              <p className="text-lg md:text-xl text-gray-300 max-w-lg animate-fade-in-up animate-delay-300">
                Prop treyding orqali biz bilan birga <span className="text-blue-400 font-semibold">daromad oling!</span>{" "}
                Katta kapital bilan savdo qiling va yuqori natijalarni qo'lga kiriting.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-400">
                <Button onClick={() => scrollToSection(pricingRef)} className="btn-gradient animate-pulse-glow">
                  Prop hisob olaman!
                </Button>
                <Button
                  variant="outline"
                  className="btn-outline hover-shine bg-transparent"
                  onClick={() => setVideoModalOpen(true)}
                >
                  <Play className="w-5 h-5 mr-2" /> Prop hisob nima ?
                </Button>
                <Link href="/etapli">
                  <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white animate-pulse-glow">
                    🎁 1+1 AKSIYA
                  </Button>
                </Link>
              </div>

              {/* Countdown Timer */}
              <div className="space-y-4 animate-fade-in-up animate-delay-500">
                <div className="flex items-center justify-center lg:justify-start space-x-2 md:space-x-4 text-center">
                  <div className="card-gradient p-2 md:p-4 min-w-[60px] md:min-w-[80px] hover-lift">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-300">
                      {formatTime(timeLeft.days)}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">KUN</div>
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-400">:</div>
                  <div className="card-gradient p-2 md:p-4 min-w-[60px] md:min-w-[80px] hover-lift">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-300">
                      {formatTime(timeLeft.hours)}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">SOAT</div>
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-400">:</div>
                  <div className="card-gradient p-2 md:p-4 min-w-[60px] md:min-w-[80px] hover-lift">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold animate-pulse text-blue-300">
                      {formatTime(timeLeft.minutes)}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">DAQIQA</div>
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-400">:</div>
                  <div className="card-gradient p-2 md:p-4 min-w-[60px] md:min-w-[80px] hover-lift">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold animate-pulse text-blue-300">
                      {formatTime(timeLeft.seconds)}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">SONIYA</div>
                  </div>
                </div>
                <p className="text-center lg:text-left text-xs md:text-sm text-blue-300 uppercase tracking-wider animate-fade-in-up animate-delay-600 font-medium">
                  CHEGIRMALAR TUGASHIGACHA QOLGAN VAQT
                </p>
              </div>
            </div>

            {/* Right Content - Mobile Mockups */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in-right animate-delay-300">
              <div className="relative w-full max-w-md lg:max-w-lg animate-float">
                <Image
                  src="/images/hero-phones.png"
                  alt="Trading Mobile Apps"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain img-hero hover-scale"
                  priority
                />
                {/* Enhanced Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-3xl -z-10 scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl -z-10 scale-125 animate-gradient"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-blue-400 mb-2">Pastga</span>
          <ChevronDown className="w-6 h-6 text-blue-400" />
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900/80 to-black/80 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-fade-in-up">
              Nima uchun <span className="text-blue-400">PROPTRADING.UZ</span> bilan ishlash kerak?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
              Biz sizga eng yaxshi prop trading xizmatlarini taqdim etamiz va muvaffaqiyatga erishishingizga yordam
              beramiz
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-10 h-10 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Katta kapital",
                description:
                  "Bizning prop hisoblarimiz orqali siz katta kapital bilan savdo qilish imkoniyatiga ega bo'lasiz",
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                title: "Xavfsiz va ishonchli",
                description: "Barcha hisoblar xavfsiz muhitda saqlanadi va faqat siz kirish huquqiga egasiz",
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                ),
                title: "Yuqori daromad",
                description: "Siz qilgan foydaning 70-90% sizga tegishli, qolgan qism kompaniya ulushi",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="card-gradient p-8 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-dots opacity-20 -z-10"></div>
      </section>

      {/* Pricing Overview Section */}
      <section ref={pricingRef} id="pricing" className="py-16 md:py-24 scroll-mt-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
              Prop Hisob <span className="text-blue-400">Narxlari</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto animate-fade-in-up animate-delay-200">
              Turli xil ehtiyojlar uchun mo'ljallangan prop trading hisoblarini tanlang
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingCards.map((card, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all duration-300 h-full flex flex-col relative hover-lift animate-fade-in-up ${
                  card.featured
                    ? `bg-gradient-to-br ${card.color} text-white transform scale-105 border-2 border-blue-400 shadow-lg`
                    : "bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-gray-600 hover-glow"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {card.featured && (
                  <span className="absolute top-0 right-0 -mt-3 -mr-3 px-3 py-1 bg-yellow-400 text-gray-900 text-xs font-bold uppercase rounded-full shadow-md rotate-6">
                    Mashhur!
                  </span>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                  <p className={`text-sm ${card.featured ? "text-blue-100" : "text-gray-400"}`}>{card.subtitle}</p>
                </div>

                <p className={`text-sm mb-6 flex-grow ${card.featured ? "text-white" : "text-gray-300"}`}>
                  {card.description}
                </p>

                <div className="space-y-3 mb-6">
                  {card.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${card.featured ? "bg-white/60" : "bg-blue-500"}`}></div>
                      <span className={`text-sm ${card.featured ? "text-white" : "text-gray-300"}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center mb-6">
                  <div className={`font-semibold text-sm mb-1 ${card.featured ? "text-blue-100" : "text-blue-500"}`}>
                    NARX ORALIG'I:
                  </div>
                  <div className={`text-lg font-bold ${card.featured ? "text-white" : "text-blue-400"}`}>
                    {card.priceRange}
                  </div>
                </div>

                <Link href={card.link}>
                  <Button
                    className={`w-full py-3 rounded-full font-semibold hover-lift ${
                      card.featured
                        ? "bg-white text-blue-600 hover:bg-gray-100"
                        : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    }`}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Tariflarni ko'rish</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consistency Guide Section */}
      <ConsistencyGuideSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Process Steps Section */}
      <ProcessStepsSection />

      {/* Social Proof Section */}
      <SocialProofSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonial Carousel */}
      <TestimonialCarousel />

      {/* Shartlar Section */}
      <div ref={shartlarRef}>
        <ShartlarSection />
      </div>

      {/* Keyslar Section */}
      <div ref={keyslarRef}>
        <KeyslarSection />
      </div>

      {/* Aloqa Section */}
      <div ref={aloqaRef}>
        <AloqaSection />
      </div>

      {/* Footer */}
      <Footer />

      {/* Video Modal */}
      <VideoModal isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} />

      {/* Random Messages - Chap pastki burchak */}
      {currentMessage && (
        <div className="fixed bottom-24 md:bottom-6 left-4 md:left-6 z-40 max-w-[calc(100vw-8rem)] md:max-w-sm lg:max-w-md">
          <div
            className="bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-md rounded-lg px-3 py-2 md:px-4 md:py-3 shadow-2xl border border-blue-400/30"
            style={{
              opacity: messageOpacity,
              transition: "opacity 0.3s ease-in-out",
            }}
          >
            <div className="flex items-start space-x-2 md:space-x-3">
              <div className="flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <p className="text-white text-xs md:text-sm lg:text-base font-medium leading-relaxed">
                {currentMessage}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Jivo Chat Widget */}
      <Script 
        src="//code.jivo.ru/widget/uwsXyzIDTA" 
        strategy="lazyOnload"
      />

      {/* Background Pattern - Enhanced */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(59,130,246,0.03)_50%,transparent_51%)] bg-[length:20px_20px]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
    </div>
  )
}
