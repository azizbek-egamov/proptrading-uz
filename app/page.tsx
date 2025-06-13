"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Phone, Play, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import PricingSection from "@/components/pricing-section"
import MobileMenu from "@/components/mobile-menu"
import HowItWorksSection from "@/components/how-it-works-section"
import FundedAccountsSection from "@/components/funded-accounts-section"
import ProcessStepsSection from "@/components/process-steps-section"
import SocialProofSection from "@/components/social-proof-section"
import PartnersSection from "@/components/partners-section"
import ShartlarSection from "@/components/shartlar-section"
import KeyslarSection from "@/components/keyslar-section"
import AloqaSection from "@/components/aloqa-section"
import Footer from "@/components/footer"
import VideoModal from "@/components/video-modal"
import ScrollProgress from "@/components/scroll-progress"
import ParticlesBackground from "@/components/particles-background"
import TestimonialCarousel from "@/components/testimonial-carousel"
import StatsSection from "@/components/stats-section"
import FloatingCTA from "@/components/floating-cta" // Import FloatingCTA
import { useIsMobile } from "@/hooks/use-mobile"

export default function PropTradingLanding() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
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
      const targetDate = new Date(now + 24 * 60 * 60 * 1000).getTime() // 24 hours from now
      const difference = targetDate - now

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

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

  const formatTime = (time: number) => time.toString().padStart(2, "0")

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <ScrollProgress />
      <ParticlesBackground />

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
            <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              PROPTRADING.UZ
            </span>
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
              <span>+998 90 001 29 59</span>
            </div>
            {!isMobile && (
              <Button onClick={() => scrollToSection(pricingRef)} className="btn-gradient">
                Prop hisob narxlari!
              </Button>
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
                  PROP treyding
                </h1>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-left animate-delay-200 text-shadow-lg">
                  <span className="gradient-text bg-gradient-to-r from-blue-400 to-cyan-300 animate-gradient">
                    PROFESSIONALLAR
                  </span>{" "}
                  bilan !
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
                <Button variant="outline" className="btn-outline hover-shine" onClick={() => setVideoModalOpen(true)}>
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
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-300">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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

      {/* Pricing Section */}
      <div ref={pricingRef}>
        <PricingSection />
      </div>

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Funded Accounts Section */}
      <FundedAccountsSection />

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

      {/* Floating CTA */}
      <FloatingCTA onPricingClick={() => scrollToSection(pricingRef)} />

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
