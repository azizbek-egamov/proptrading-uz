export default function ProcessStepsSection() {
  const steps = [
    {
      number: "01",
      title: "Barchasi ma'qul bo'lsa siz ushbu sayt orqali prop hisob uchun buyurtma jo'natasiz!",
    },
    {
      number: "02",
      title: "10 daqiqa ichida bizning menedjerlar siz bilan bog'lanishadi",
    },
    {
      number: "03",
      title: "Tanlagan prop hisobingiz bo'yicha menedjer bergan rekvizitlarga to'lov qilasiz!",
    },
    {
      number: "04",
      title: "10 daqiqa ichida prop hisob rasmiylashtirilib sizga barchasi ulab beriladi!",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-900/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white">Biz qanday ishlaymiz ?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-y-1/2"></div>
                )}
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">{step.title}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">20 daqiqa va siz katta kapitallik investorsiz!</h2>
        </div>
      </div>
    </section>
  )
}
