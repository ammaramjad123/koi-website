// next.config.mjs - Clean version with no warnings

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 301 REDIRECTS - Preserves SEO from old URLs
  async redirects() {
    return [
      {
        source: '/contact-us-2',
        destination: '/contact-us',
        permanent: true,  // 301 redirect
      },
      {
        source: '/roofting',
        destination: '/roofing',
        permanent: true,  // 301 redirect
      },
    ]
  },
  
  // IMAGE OPTIMIZATION
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // PERFORMANCE
  compress: true,
  trailingSlash: false,
  poweredByHeader: false,
  
  // EXPERIMENTAL FEATURES (optional, remove if you want)
  experimental: {
    optimizeCss: true,  // Optimizes CSS loading
  },

    // ✅ ADD THIS
  allowedDevOrigins: ['192.168.0.105'],
}

export default nextConfig