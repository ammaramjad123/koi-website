// components/home/TrustedExperts.js
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function TrustedExperts() {
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
    <section ref={sectionRef} className="py-16 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Image - Mobile first, Left on desktop - ROUNDED EDGES, NO WHITE BORDER */}
          <div 
            className={`order-1 lg:order-1 transition-all duration-700 delay-100 mt-8 lg:mt-0 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative aspect-[4/3] lg:aspect-[6/5] w-full overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/trusted-experts.jpg"
                alt="KOI Build Co luxury home remodeling"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Content - Right on desktop */}
          <div 
            className={`order-2 lg:order-2 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Small tagline */}
            <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-4 pt-6 sm:pt-0">
              Your Family's Story
            </p>
            
            {/* Main Heading */}
            <h2 className="font-['Lato'] text-3xl sm:text-5xl lg:text-6xl font-bold text-[#131c23] leading-tight mb-6">
              Begins at Home
            </h2>
            
            {/* Description */}
            <p className="font-['Open_Sans'] text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Let our trusted design-build experts create your perfect setting. 
              From early planning through a lifetime of memories, our team is 
              committed to delivering exceptional results, unparalleled service, 
              and a remodeling experience you can enjoy.
            </p>
            
            {/* Bullet points */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#dc101c] rounded-full"></div>
                <span className="font-['Open_Sans'] text-gray-700 text-sm sm:text-base">20+ Years of Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#dc101c] rounded-full"></div>
                <span className="font-['Open_Sans'] text-gray-700 text-sm sm:text-base">Licensed & Insured in Washington State</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#dc101c] rounded-full"></div>
                <span className="font-['Open_Sans'] text-gray-700 text-sm sm:text-base">Serving Olympia, Lacey & Tumwater</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 font-['Droid_Sans'] bg-[#131c23] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full uppercase tracking-wider text-xs sm:text-sm font-bold hover:bg-[#dc101c] transition-all duration-300 hover:gap-3 group"
            >
              LEARN MORE ABOUT KOI
              <span className="text-base sm:text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}