"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
    {
        question: "Proptrading.uz nima?",
        answer:
            "Bu platforma, u yerda biz traderlarga prop-kompaniyalarni tushunishga yordam beramiz: tanlash, ro‘yxatdan o‘tish, qoidalarni bilish va pulni chiqarish bo‘yicha.",
    },
    {
        question: "Siz prop-kompaniya misiz?",
        answer:
            "Yo‘q. Biz prop-kompaniya emasmiz, faqat ularning tizimini yaxshi bilamiz va mijozlarga xatolarga yo‘l qo‘ymaslikda yordam beramiz.",
    },
    {
        question: "Qanday yordam berasizlar?",
        answer: (
            <ul className="list-disc list-inside space-y-1">
                <li>To‘g‘ri prop-kompaniyani tanlash</li>
                <li>Ro‘yxatdan to‘g‘ri o‘tish</li>
                <li>Challenj qoidalarini tushunish</li>
                <li>Savdoga tayyorlanish</li>
                <li>Foyda chiqarish bo‘yicha maslahat</li>
                <li>Boshqa tashkiliy masalalar</li>
            </ul>
        ),
    },
    {
        question: "Siz mening hisobimda savdo qilasizmi?",
        answer: "Yo‘q 🙂 Siz o‘zingiz savdo qilasiz. Biz faqat yo‘l-yo‘riq va maslahat beramiz.",
    },
    {
        question: "Daromad kafolatlanadimi?",
        answer:
            "Yo‘q, daromad kafolatlanmaydi, chunki natija traderning o‘ziga va qoidalarni bajarishiga bog‘liq. Lekin biz odatdagi xatolarni oldini olishda yordam beramiz.",
    },
    {
        question: "To‘lovlar qayerdan keladi?",
        answer:
            "Barcha to‘lovlar to‘g‘ridan-to‘g‘ri prop-kompaniyadan — sizning hisobingizga, ularning qoidalari bo‘yicha amalga oshiriladi.",
    },
    {
        question: "Imtihonli prop hisobda to'lov qanday qaytariladi?",
        answer:
            "Imtihonli hisobda 9% profit qilib real bosqichga o'tganingizdan so'ng, birinchi daromad yechish (payout) vaqtida prop hisob uchun to'langan mablag' 100% to'liq qaytariladi.",
    },
    {
        question: "Real imtihonsiz hisobda pul yechish tartibi qanday?",
        answer:
            "Real imtihonsiz hisoblarda birinchi pul yechish 21 kundan keyin, keyingi pul yechishlar esa har 14 kunda amalga oshiriladi va payoutlar soni cheklanmagan.",
    },
    {
        question: "Agar prop-kompaniya qoidalarini buzsam nima bo‘ladi?",
        answer:
            "Muhim: qoidalarni ancha qat’iy bajaring. Biz qoidalarni oldindan tushuntiramiz, lekin savdo bo‘yicha javobgarlik sizga tegishli.",
    },
    {
        question: "To‘lovni qaytarib berasizlarmi?",
        answer:
            "Yo'q. Biz konsultatsiya xizmatlarini taqdim etamiz. Xizmat boshlanganidan so‘ng, uni taqdim etilgan deb hisoblaymiz.",
    },
    {
        question: "Bu xavfsizmi?",
        answer:
            "Biz faqat tekshirilgan prop-kompaniyalar bilan ishlaymiz, ular qoidalarni bajarganingizda haqiqatan ham to‘laydi.",
    },
    {
        question: "Bu ta’limmi yoki investitsiya?",
        answer:
            "Bu faqat konsultatsiya va qo‘llab-quvvatlash. Biz investitsiya qabul qilmaymiz va sizning pullaringizni boshqarmaymiz.",
    },
    {
        question: "Nechanchi yoshdan foydalanish mumkin?",
        answer: "18 yoshdan.",
    },
    {
        question: "Qanday bog‘lanish mumkin?",
        answer: "Barcha kontaktlar va yordam proptrading.uz saytida mavjud — biz doim aloqadamiz.",
    },
]

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                        <HelpCircle className="w-5 h-5 text-blue-400 mr-2" />
                        <span className="text-blue-400 font-medium text-sm">Savol-Javoblar</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent">
                        Ko'p so'raladigan savollar
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Prop trading va bizning xizmatlarimiz haqida eng ko'p beriladigan savollarga javoblar.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto columns-1 md:columns-2 gap-6 space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`group border rounded-2xl transition-all duration-300 break-inside-avoid mb-6 ${openIndex === index
                                ? "bg-gray-800/50 border-blue-500/50 shadow-lg shadow-blue-500/10"
                                : "bg-gray-900/30 border-gray-800 hover:border-gray-700"
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`text-lg font-medium transition-colors ${openIndex === index ? "text-blue-400" : "text-gray-200 group-hover:text-white"}`}>
                                    {faq.question}
                                </span>
                                <span className={`ml-4 p-2 rounded-full transition-all duration-300 ${openIndex === index ? "bg-blue-500/20 text-blue-400 rotate-180" : "bg-gray-800 text-gray-400 group-hover:bg-gray-700"
                                    }`}>
                                    <ChevronDown className="w-5 h-5" />
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-gray-800/50 mt-2">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
