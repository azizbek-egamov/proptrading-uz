"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const RESULTS_COUNT = 9
const TRADE_RESULTS_COUNT = 5

export default function SocialProofSection() {
  const proofImages = Array.from({ length: RESULTS_COUNT }, (_, index) => ({
    src: `/results/${index + 1}.jpg`,
    label: `Natija ${index + 1}`,
  }))

  const tradeImages = Array.from({ length: TRADE_RESULTS_COUNT }, (_, index) => ({
    src: `/results/trade/trading-chart-${index + 1}.jpeg`,
    label: `Trade ${index + 1}`,
  }))

  const [activeImage, setActiveImage] = useState<{ src: string; label: string } | null>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImage(null)
      }
    }

    if (activeImage) {
      document.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeImage])

  const openModal = (image: { src: string; label: string }) => {
    setActiveImage(image)
  }

  const closeModal = () => {
    setActiveImage(null)
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mijozlarimizning natijalari</h2>
          <p className="text-blue-100 text-lg">Bizning mijozlarimiz qanday natijalar qo'lga kiritayotganini ko'ring</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {proofImages.map(({ src, label }) => (
            <div
              key={src}
              role="button"
              tabIndex={0}
              onClick={() => openModal({ src, label })}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault()
                  openModal({ src, label })
                }
              }}
              aria-label={`${label}ni kattalashtirib ko'rish`}
              className="group cursor-zoom-in flex-[0_0_calc(50%-1rem)] sm:flex-[0_0_calc(33.333%-1.5rem)] md:flex-[0_0_calc(25%-1.5rem)] lg:flex-[0_0_calc(20%-1.5rem)] max-w-[220px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700"
            >
              <div className="relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 transform group-hover:scale-105 shadow-lg">
                <div className="relative aspect-[4/3] w-full bg-black/20">
                  <Image
                    src={src}
                    alt={label}
                    fill
                    sizes="(min-width: 1024px) 200px, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-semibold">{label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider and Trade gallery */}
      <div className="container mx-auto px-4 md:px-8 mt-12 md:mt-16">
        <div className="border-t border-white/30 pt-8 md:pt-10">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {tradeImages.map(({ src, label }) => (
              <div
                key={src}
                role="button"
                tabIndex={0}
                onClick={() => openModal({ src, label })}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    openModal({ src, label })
                  }
                }}
                aria-label={`${label}ni kattalashtirib ko'rish`}
                className="group cursor-zoom-in flex-[0_0_calc(50%-1rem)] sm:flex-[0_0_calc(33.333%-1.5rem)] md:flex-[0_0_calc(25%-1.5rem)] lg:flex-[0_0_calc(20%-1.5rem)] max-w-[360px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700"
              >
                <Image
                  src={src}
                  alt={label}
                  width={800}
                  height={1600}
                  sizes="(min-width: 1024px) 360px, (min-width: 768px) 33vw, 50vw"
                  className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/3] bg-black rounded-xl overflow-hidden shadow-2xl">
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-3 right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white text-xl leading-none transition hover:bg-white hover:text-black"
                aria-label="Yopish"
              >
                &times;
              </button>
              <Image
                src={activeImage.src}
                alt={activeImage.label}
                fill
                sizes="(min-width: 1536px) 1024px, (min-width: 1280px) 70vw, (min-width: 768px) 80vw, 90vw"
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-4 text-center text-white text-lg font-semibold">{activeImage.label}</p>
          </div>
        </div>
      )}
    </section>
  )
}
