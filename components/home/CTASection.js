// components/home/CTASection.js
'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      {/* Banner Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/cta-banner.jpg')",
        }}
      >
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content - Centered on top of banner */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div 
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Small tagline */}
          <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-4">
            Let Our Experts
          </p>
          
          {/* Main Heading */}
          <h2 className="font-['Lato'] text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Answer Your Questions
          </h2>
          
          {/* Description */}
          <p className="font-['Open_Sans'] text-gray-200 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Have questions about your project? Get a free consultation and discover 
            how we can transform your home.
          </p>
          
          {/* CTA Button */}
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-[#dc101c] text-white px-8 py-4 rounded-full font-['Droid_Sans'] uppercase tracking-wider text-sm font-bold hover:bg-white hover:text-[#dc101c] transition-all duration-300 hover:gap-3 group"
          >
            GET STARTED
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}