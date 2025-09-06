import Image from "next/image"

export default function SocialProofSection() {
  const proofImages = [
    "/placeholder.svg?height=300&width=400&text=Natija+1",
    "/placeholder.svg?height=300&width=400&text=Natija+2",
    "/placeholder.svg?height=300&width=400&text=Natija+3",
    "/placeholder.svg?height=300&width=400&text=Natija+4",
    "/placeholder.svg?height=300&width=400&text=Natija+5",
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mijozlarimizning natijalari</h2>
          <p className="text-blue-100 text-lg">Bizning mijozlarimiz qanday natijalar qo'lga kiritayotganini ko'ring</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {proofImages.map((image, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 transform group-hover:scale-105 shadow-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Natija ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-semibold">Natija {index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
