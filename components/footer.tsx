import { Instagram, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Shartlar", href: "#shartlar" },
    { name: "Narxlar", href: "#pricing" },
    { name: "Keyslar", href: "#keyslar" },
    { name: "Aloqa", href: "#aloqa" },
  ]

  const services = [
    "Prop Trading hisoblar",
    "Professional konsultatsiya",
    "Signal beruvchi indikatorlar",
    "24/7 texnik yordam",
    "Copy trading xizmati",
    "Risk management",
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800/50">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-full"></div>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                PROPTRADING.UZ
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional prop trading xizmatlari. Katta kapital bilan savdo qiling va yuqori daromad oling.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/xorazmforex/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover-lift"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a
                href="https://t.me/thexorazmforex"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover-lift"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@XorazmForex"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover-lift"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-gray-400 hover:text-white" />
              </a>
              <a
                href="https://t.me/+2C4gMfiKi-gyMDEy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-all duration-300 hover-lift"
                aria-label="Telegram Group"
              >
                <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.543 2.467a2.3 2.3 0 0 0-2.356-.183L3.21 10.09c-1.01.484-.96 1.885.08 2.29l3.89 1.5 1.48 4.73c.29.93 1.47 1.18 2.09.44l2.07-2.36 3.98 3.1c.82.64 2.02.16 2.22-.86l3.42-15.16a2.3 2.3 0 0 0-.88-2.264z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative">
              Xizmatlar
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 relative">
              Aloqa
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
            </h3>
            <div className="space-y-4">
              <p className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-400">+998 50 001 29 59</span>
              </p>
              <p className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400">O'zbekiston, Urganch</span>
              </p>
              <p className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-400">info@proptrading.uz</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800/50 text-center">
          <p className="text-gray-500">&copy; {currentYear} PROPTRADING.UZ. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}
