/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false, // Image optimization yoqildi - yuklanish tezlashtirildi
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Compression optimizatsiyasi
  compress: true,
  // Production optimizatsiyasi
  swcMinify: true,
  // Bundle optimizatsiyasi
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig
