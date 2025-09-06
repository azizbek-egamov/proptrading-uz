import Image from "next/image"

export default function PartnersSection() {
  const partners = [
    { name: "MetaTrader", logo: "/placeholder.svg?height=60&width=120" },
    { name: "cTrader", logo: "/placeholder.svg?height=60&width=120" },
    { name: "TradingView", logo: "/placeholder.svg?height=60&width=120" },
    { name: "FTMO", logo: "/placeholder.svg?height=60&width=120" },
    { name: "MyForexFunds", logo: "/placeholder.svg?height=60&width=120" },
    { name: "The5ers", logo: "/placeholder.svg?height=60&width=120" },
  ]
  // Duplicate for seamless loop
  const marqueePartners = [...partners, ...partners]

  return (
    <section className="py-16 md:py-24 bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Bizning hamkorlarimiz</h2>
          <p className="text-gray-400">Dunyoning eng yaxshi trading platformalari va prop firm'lari bilan ishlaymiz</p>
        </div>

        <div className="relative overflow-x-hidden">
          <div
            className="flex items-center gap-8 animate-marquee hover:[animation-play-state:paused]"
            style={{ minWidth: '100%', whiteSpace: 'nowrap' }}
          >
            {marqueePartners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center min-w-[180px]">
                <div className="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:bg-white/10 transition-all duration-300 w-full h-20 flex items-center justify-center">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Add this to your global CSS (e.g. styles/globals.css):
// @keyframes marquee {
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-50%); }
// }
// .animate-marquee {
//   animation: marquee 30s linear infinite;
// }
