// components/home/WhatWeDoBest.js
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: 'Custom Kitchen Remodeling',
    description: 'Transform your kitchen into a stunning culinary space with premium materials.',
  },
  {
    title: 'Luxury Bathroom Renovations',
    description: 'Create a spa-like retreat with elegant fixtures and modern design.',
  },
  {
    title: 'Whole-Home Transformations',
    description: 'Complete home remodels that maximize space and functionality.',
  },
  {
    title: 'Energy-Efficient Upgrades',
    description: 'Reduce utility bills with sustainable, eco-friendly home improvements.',
  },
]

export default function WhatWeDoBest() {
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
          
          {/* Content - Left on desktop */}
          <div 
            className={`order-2 lg:order-1 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Small tagline */}
            <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-4 pt-6 sm:pt-0">
              What We Do Best
            </p>
            
            {/* Main Heading */}
            <h2 className="font-['Lato'] text-3xl sm:text-5xl lg:text-6xl font-bold text-[#131c23] leading-tight mb-6">
              Expert Home
              <br />
              <span className="text-[#dc101c]">Remodeling Services</span>
            </h2>
            
            {/* Description */}
            <p className="font-['Open_Sans'] text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              As Olympia's trusted remodeling company, we deliver exceptional craftsmanship 
              and innovative design solutions. From kitchen renovations to complete home 
              transformations, our experienced team brings your vision to life with 
              precision and care.
            </p>
            
            {/* Service List with Red Bullets */}
            <div className="space-y-4 mb-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  {/* Red Bullet */}
                  <div className="mt-2">
                    <div className="w-2 h-2 bg-[#dc101c] rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-['Lato'] text-base sm:text-lg font-bold text-[#131c23] mb-1">
                      {service.title}
                    </h3>
                    <p className="font-['Open_Sans'] text-gray-500 text-xs sm:text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-['Droid_Sans'] bg-[#131c23] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full uppercase tracking-wider text-xs sm:text-sm font-bold hover:bg-[#dc101c] transition-all duration-300 hover:gap-3 group"
            >
              VIEW ALL SERVICES
              <span className="text-base sm:text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Image - Right on desktop */}
          <div 
            className={`order-1 lg:order-2 transition-all duration-700 delay-100 mt-8 lg:mt-0 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative aspect-[4/3] lg:aspect-[6/5] w-full overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/what-we-do-best.jpg"
                alt="KOI Build Co professional home remodeling services in Olympia WA"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}