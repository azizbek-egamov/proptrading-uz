"use client"

import type React from "react"

import { useState, useEffect, useRef, lazy, Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { Phone, Play, ChevronDown, ArrowRight, CheckCircle, DollarSign, TrendingUp, Clock, Shield, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/mobile-menu"
import ScrollProgress from "@/components/scroll-progress"
import { useIsMobile } from "@/hooks/use-mobile"
import PurchaseModal from "@/components/purchase-modal"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

// Lazy load katta komponentlar - faqat kerak bo'lganda yuklanadi
const HowItWorksSection = lazy(() => import("@/components/how-it-works-section"))
const ProcessStepsSection = lazy(() => import("@/components/process-steps-section"))
const SocialProofSection = lazy(() => import("@/components/social-proof-section"))
const PartnersSection = lazy(() => import("@/components/partners-section"))
const ShartlarSection = lazy(() => import("@/components/shartlar-section"))
const KeyslarSection = lazy(() => import("@/components/keyslar-section"))
const AloqaSection = lazy(() => import("@/components/aloqa-section"))
const Footer = lazy(() => import("@/components/footer"))
const VideoModal = lazy(() => import("@/components/video-modal"))
const TestimonialCarousel = lazy(() => import("@/components/testimonial-carousel"))
const StatsSection = lazy(() => import("@/components/stats-section"))
const ConsistencyGuideSection = lazy(() => import("@/components/consistency-guide-section"))

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

    // Throttle scroll handler - performance optimizatsiyasi
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY
          setIsScrolled(scrollPosition > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

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

    // Har 25 soniyada yangi matn ko'rsatish
    const messageInterval = setInterval(() => {
      // Fade out animatsiya
      setMessageOpacity(0)
      
      setTimeout(() => {
        // Yangi random matn
        setCurrentMessage(getRandomMessage())
        // Fade in animatsiya
        setMessageOpacity(1)
      }, 300) // 300ms fade out vaqt
    }, 25000) // 25 soniya interval

    return () => {
      clearInterval(messageInterval)
    }
  }, [])

  const formatTime = (time: number) => time.toString().padStart(2, "0")

  // Imtihonli Proplar tariflari
  const etapliPricingOptions = [
    {
      title: "MINI",
      price: "2 500$",
      price_uzs: "350 000 UZS",
      oldPrice: "370 000 UZS",
      features: [
        "kunlik zarar miqdori 4% - (100$) dan oshmasligi lozim",
        "umumiy zarar miqdori 6% - (150$) dan oshmasligi lozim",
        "10% target (foyda qilish lozim)",
        "70% - 80% qilingan daromaddan olinadigan ulush",
      ],
      withdrawal: "REALga o'tgach, 14 kundan so'ng 80% daromadni chiqarish mumkin",
      platform: "Matchtrade | Metatrader 4/5",
      featured: false,
      category: "Imtihonli Proplar",
    },
    {
      title: "START",
      price: "5 000$",
      price_uzs: "600 000 UZS",
      oldPrice: "650 000 UZS",
      features: [
        "kunlik zarar miqdori 4% - (200$) dan oshmasligi lozim",
        "umumiy zarar miqdori 6% - (300$) dan oshmasligi lozim",
        "10% target (foyda qilish lozim)",
        "70% - 80% qilingan daromaddan olinadigan ulush",
      ],
      withdrawal: "REALga o'tgach, 14 kundan so'ng 80% daromadni chiqarish mumkin",
      platform: "Metatrader 4/5",
      featured: false,
      category: "Imtihonli Proplar",
    },
    {
      title: "START",
      price: "10 000$",
      price_uzs: "910 000 UZS",
      oldPrice: "990 000 UZS",
      features: [
        "kunlik zarar miqdori 4% - (400$) dan oshmasligi lozim",
        "umumiy zarar miqdori 6% - (600$) dan oshmasligi lozim",
        "10% target (1000$ foyda qilish lozim)",
        "70% - 80% qilingan daromaddan olinadigan ulush",
      ],
      withdrawal: "REALga o'tgach, 14 kundan so'ng 80% daromadni chiqarish mumkin",
      platform: "Matchtrade | Metatrader 4/5",
      featured: true,
      category: "Imtihonli Proplar",
    },
    {
      title: "STANDART",
      price: "25 000$",
      price_uzs: "1 800 000 UZS",
      oldPrice: "1 970 000 UZS",
      features: [
        "kunlik zarar miqdori 4% - (1000$) dan oshmasligi lozim",
        "umumiy zarar miqdori 6% - (1500$) dan oshmasligi lozim",
        "10% target (2500$ foyda qilish lozim)",
        "70% - 80% qilingan daromaddan olinadigan ulush",
      ],
      withdrawal: "REALga o'tgach, 14 kundan so'ng 80% daromadni chiqarish mumkin",
      platform: "Matchtrade | Metatrader 4/5",
      featured: true,
      category: "Imtihonli Proplar",
    },
    {
      title: "OMMAVIY",
      price: "50 000$",
      price_uzs: "3 800 000 UZS",
      oldPrice: "4 000 000 UZS",
      features: [
        "kunlik zarar miqdori 4% - (2000$) dan oshmasligi lozim",
        "umumiy zarar miqdori 6% - (3000$) dan oshmasligi lozim",
        "10% target (5000$ foyda qilish lozim)",
        "70% - 80% qilingan daromaddan olinadigan ulush",
      ],
      withdrawal: "REALga o'tgach, 14 kundan so'ng 80% daromadni chiqarish mumkin",
      platform: "Matchtrade | Metatrader 4/5",
      featured: false,
      category: "Imtihonli Proplar",
    },
    {
      title: "PREMIUM",
      price: "100 000$",
      price_uzs: "6 450 000 UZS",
      oldPrice: "6 500 000 UZS",
      features: [
        "kunlik zarar miqdori 4% - (4000$) dan oshmasligi lozim",
        "umumiy zarar miqdori 6% - (6000$) dan oshmasligi lozim",
        "10% target (10 000$ foyda qilish lozim)",
        "70% - 80% qilingan daromaddan olinadigan ulush",
      ],
      withdrawal: "REALga o'tgach, 14 kundan so'ng 80% daromadni chiqarish mumkin",
      platform: "Metatrader 4/5",
      featured: true,
      category: "Imtihonli Proplar",
    },
  ]

  // Imtihonsiz - Real proplar tariflari
  const instantLiteAccounts = [
    {
      title: "Instant Lite",
      price: "$1,250",
      price_uzs: "500,000 UZS",
      dailyLoss: "2% ($25)",
      totalLoss: "4% ($50)",
      featured: false,
      category: "Imtihonsiz - Real proplar",
    },
    {
      title: "Instant Lite",
      price: "$2,500",
      price_uzs: "750,000 UZS",
      dailyLoss: "2% ($50)",
      totalLoss: "4% ($100)",
      featured: false,
      category: "Imtihonsiz - Real proplar",
    },
    {
      title: "Instant Lite",
      price: "$5,000",
      price_uzs: "1,150,000 UZS",
      dailyLoss: "2% ($100)",
      totalLoss: "4% ($200)",
      featured: false,
      category: "Imtihonsiz - Real proplar",
    },
    {
      title: "Instant Lite",
      price: "$10,000",
      price_uzs: "1,750,000 UZS",
      dailyLoss: "2% ($200)",
      totalLoss: "4% ($4,000)",
      featured: false,
      category: "Imtihonsiz - Real proplar",
    },
    {
      title: "Instant Lite",
      price: "$25,000",
      price_uzs: "2,550,000 UZS",
      dailyLoss: "2% ($500)",
      totalLoss: "4% ($1,000)",
      featured: false,
      category: "Imtihonsiz - Real proplar",
    },
    {
      title: "Instant Lite",
      price: "$50,000",
      price_uzs: "5,000,000 UZS",
      dailyLoss: "2% ($1,000)",
      totalLoss: "4% ($2,000)",
      featured: false,
      category: "Imtihonsiz - Real proplar",
    },
    {
      title: "Instant Lite",
      price: "$100,000",
      price_uzs: "10,000,000 UZS",
      dailyLoss: "2% ($2,000)",
      totalLoss: "4% ($4,000)",
      featured: false,
      category: "Imtihonsiz - Real proplar",
    },
  ]

  // Premium Proplar tariflari
  const fundedAccounts = [
    {
      title: "MINI",
      price: "1 000$",
      price_uzs: "1 100 000 UZS",
      features: [
        "8% umumiy yo'qotish bo'lmasligi lozim!",
        "Yo'q - target (foyda chegarasi yo'q)",
        "80% gacha qilingan daromaddan olinadigan ulushingiz",
      ],
      withdrawal: "qilingan foydadan 14 kundan keyin yechishga so'rov bera olasiz",
      platform: "Ctrader",
      featured: false,
      category: "Premium Proplar",
    },
    {
      title: "MINI",
      price: "2 500$",
      price_uzs: "1 800 000 UZS",
      features: [
        "8% umumiy yo'qotish bo'lmasligi lozim!",
        "Yo'q - target (foyda chegarasi yo'q)",
        "80% gacha qilingan daromaddan olinadigan ulushingiz",
      ],
      withdrawal: "qilingan foydadan 14 kundan keyin yechishga so'rov bera olasiz",
      platform: "Metatrader 5",
      featured: false,
      category: "Premium Proplar",
    },
    {
      title: "START+",
      price: "5 000$",
      price_uzs: "3 300 000 UZS",
      features: [
        "8% umumiy yo'qotish bo'lmasligi lozim!",
        "Yo'q - target (foyda chegarasi yo'q)",
        "80% gacha qilingan daromaddan olinadigan ulushingiz",
      ],
      withdrawal: "qilingan foydadan 14 kundan keyin yechishga so'rov bera olasiz",
      platform: "Ctrader",
      featured: true,
      category: "Premium Proplar",
    },
    {
      title: "START+",
      price: "10 000$",
      price_uzs: "6 000 000 UZS",
      features: [
        "8% umumiy yo'qotish bo'lmasligi lozim!",
        "Yo'q - target (foyda chegarasi yo'q)",
        "80% gacha qilingan daromaddan olinadigan ulushingiz",
      ],
      withdrawal: "qilingan foydadan 14 kundan keyin yechishga so'rov bera olasiz",
      platform: "Metatrader 5",
      featured: false,
      category: "Premium Proplar",
    },
    {
      title: "MEDIUM",
      price: "25 000$",
      price_uzs: "12 000 000 UZS",
      features: [
        "8% umumiy yo'qotish bo'lmasligi lozim!",
        "Yo'q - target (foyda chegarasi yo'q)",
        "80% gacha qilingan daromaddan olinadigan ulushingiz",
      ],
      withdrawal: "qilingan foydadan 14 kundan keyin yechishga so'rov bera olasiz",
      platform: "Metatrader 5",
      featured: true,
      category: "Premium Proplar",
    },
    {
      title: "PREMIUM",
      price: "50 000$",
      price_uzs: "23 000 000 UZS",
      features: [
        "8% umumiy yo'qotish bo'lmasligi lozim!",
        "Yo'q - target (foyda chegarasi yo'q)",
        "80% gacha qilingan daromaddan olinadigan ulushingiz",
      ],
      withdrawal: "qilingan foydadan 14 kundan keyin yechishga so'rov bera olasiz",
      platform: "Metatrader 5",
      featured: false,
      category: "Premium Proplar",
    },
  ]

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
                  loading="eager"
                  quality={85}
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

          {/* Imtihonli Proplar */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center text-blue-400">Imtihonli Proplar</h3>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-8 text-center">
              Narxlar servis xizmatlari bilan hisoblangan, bular ichiga konsultatsiya, hisobni nomingizga olib berish,
              sizga ulab berish va unda savdo qilib berish ichiga kiritilgan!
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {etapliPricingOptions.map((option, index) => (
                <div
                  key={`etapli-${index}`}
                  className={cn(
                    "rounded-2xl p-6 md:p-8 transition-all duration-300 h-full flex flex-col relative hover-lift animate-fade-in-up",
                    option.featured
                      ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white transform scale-105 border-2 border-blue-400 shadow-lg"
                      : "bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-gray-600 hover-glow",
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
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
                        <div className={cn("text-sm", option.featured ? "text-white" : "text-gray-300")}>
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mb-6">
                    {option.oldPrice && (
                      <div className={cn("line-through text-lg", option.featured ? "text-red-300" : "text-red-500")}>
                        {option.oldPrice}
                      </div>
                    )}
                    <div
                      className={cn("font-semibold text-sm mb-1", option.featured ? "text-blue-100" : "text-blue-500")}
                    >
                      NARXI:
                    </div>
                    <div className={cn("text-2xl font-bold", option.featured ? "text-white" : "text-red-500")}>
                      {option.price_uzs}
                    </div>
                  </div>

                  <div className="space-y-4 mb-4">
                    <div className="flex items-start space-x-3">
                      <div
                        className={cn(
                          "w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                          option.featured ? "bg-white/20" : "bg-blue-500",
                        )}
                      >
                        <DollarSign className="w-3 h-3 text-white" />
                      </div>
                      <div className={cn("text-sm", option.featured ? "text-white" : "text-gray-300")}>
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
                        <TrendingUp className="w-3 h-3 text-white" />
                      </div>
                      <div className={cn("text-sm", option.featured ? "text-white" : "text-gray-300")}>
                        <strong>Savdo platformasi: </strong>
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
                    )}
                    onClick={() => handleOpenModal(option.title, option.price_uzs, option.price)}
                  >
                    Prop hisobni sotib olish!
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

          {/* Divider */}
          <div className="my-16 flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            <div className="mx-4 w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </div>

          {/* Imtihonsiz - Real proplar */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">Yangi Mahsulot</Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center text-purple-400">
                Imtihonsiz - Real proplar
              </h3>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Eng qulay shartlar bilan prop trading hisoblariga ega bo'ling. Tezkor boshlash va yuqori daromad imkoniyati.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="card-gradient p-6 text-center hover-lift">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4 text-purple-400">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Cheklanmagan Target</h3>
                <p className="text-sm text-gray-300">Foyda qilish miqdori cheklanmagan</p>
              </div>
              <div className="card-gradient p-6 text-center hover-lift">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4 text-purple-400">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">80% Profit Share</h3>
                <p className="text-sm text-gray-300">Qilingan daromaddan 80% ulush</p>
              </div>
              <div className="card-gradient p-6 text-center hover-lift">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4 text-purple-400">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">14 Kundan So'ng</h3>
                <p className="text-sm text-gray-300">Yechib olish imkoniyati</p>
              </div>
              <div className="card-gradient p-6 text-center hover-lift">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4 text-purple-400">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Xavfsiz Platform</h3>
                <p className="text-sm text-gray-300">MT4/5, TradeLocker, DXtrade</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {instantLiteAccounts.map((account, index) => (
                <div
                  key={`instant-${index}`}
                  className={cn(
                    "rounded-2xl p-6 transition-all duration-300 h-full flex flex-col relative hover-lift animate-fade-in-up bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-purple-500/30",
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{account.price}</h3>
                    <div className="text-3xl font-bold mb-1 text-purple-400">{account.price_uzs}</div>
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

                  <Button
                    onClick={() => handleOpenModal("Imtihonsiz - Real prop", account.price_uzs, account.price)}
                    className="w-full mt-auto btn-gradient"
                  >
                    Hoziroq Sotib Olish
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="my-16 flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            <div className="mx-4 w-2 h-2 rounded-full bg-purple-500"></div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </div>

          {/* Premium Proplar */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center text-green-400">Premium Proplar</h3>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-8 text-center">
              Narxlar servis xizmatlari bilan hisoblangan, bular ichiga konsultatsiya, kuchli signal beruvchi bitta
              indikator, hisobni nomingizga olib berish va pul yechish jarayonlarida ko'maklashish kiritilgan!
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {fundedAccounts.map((account, index) => (
                <div
                  key={`premium-${index}`}
                  className={cn(
                    "rounded-2xl p-6 md:p-8 transition-all duration-300 h-full flex flex-col relative hover-lift animate-fade-in-up",
                    account.featured
                      ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white transform scale-105 border-2 border-blue-400 shadow-lg"
                      : "bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-gray-600 hover-glow",
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
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
                    <div className="text-4xl md:text-5xl font-bold mb-4">{account.price}</div>
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
                    <div
                      className={cn("font-semibold text-sm mb-1", account.featured ? "text-blue-100" : "text-blue-500")}
                    >
                      NARXI:
                    </div>
                    <div className={cn("text-2xl font-bold", account.featured ? "text-white" : "text-red-500")}>
                      {account.price_uzs}
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
                        {account.withdrawal}
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
                    )}
                    onClick={() => handleOpenModal(account.title, account.price_uzs, account.price)}
                  >
                    Prop hisobni sotib olish!
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
        </div>
      </section>

      {/* Consistency Guide Section */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <ConsistencyGuideSection />
      </Suspense>

      {/* How It Works Section */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <HowItWorksSection />
      </Suspense>

      {/* Process Steps Section */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <ProcessStepsSection />
      </Suspense>

      {/* Social Proof Section */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <SocialProofSection />
      </Suspense>

      {/* Partners Section */}
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <PartnersSection />
      </Suspense>

      {/* Stats Section */}
      <Suspense fallback={<div className="min-h-[300px]" />}>
        <StatsSection />
      </Suspense>

      {/* Testimonial Carousel */}
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <TestimonialCarousel />
      </Suspense>

      {/* Shartlar Section */}
      <div ref={shartlarRef}>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <ShartlarSection />
        </Suspense>
      </div>

      {/* Keyslar Section */}
      <div ref={keyslarRef}>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <KeyslarSection />
        </Suspense>
      </div>

      {/* Aloqa Section */}
      <div ref={aloqaRef}>
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <AloqaSection />
        </Suspense>
      </div>

      {/* Footer */}
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <Footer />
      </Suspense>

      {/* Video Modal */}
      <Suspense fallback={null}>
        <VideoModal isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
      </Suspense>

      {/* Purchase Modal */}
      <PurchaseModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        accountTitle={selectedAccount.title}
        accountPrice={selectedAccount.price}
        accountAmount={selectedAccount.amount}
      />

      {/* Random Messages - Chap pastki burchak */}
      {currentMessage && (
        <div className="fixed bottom-6 left-4 md:left-6 z-40 max-w-[calc(100vw-8rem)] md:max-w-sm lg:max-w-md">
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
