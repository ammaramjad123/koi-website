// components/home/ProvenProcess.js
'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We listen to your vision and provide honest assessment.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our team creates detailed plans and 3D renderings.',
  },
  {
    number: '03',
    title: 'Planning',
    description: 'We handle permits, materials, and schedule.',
  },
  {
    number: '04',
    title: 'Construction',
    description: 'Skilled craftsmen bring your vision to life.',
  },
  {
    number: '05',
    title: 'Completion',
    description: 'Final walkthrough and your complete satisfaction.',
  },
]

export default function ProvenProcess() {
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
    <section ref={sectionRef} className="py-16 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-3">
            Get Better Results From
          </p>
          <h2 className="font-['Lato'] text-3xl sm:text-5xl md:text-6xl font-bold text-[#131c23] leading-tight mb-6">
            A Proven Process
          </h2>
          <p className="font-['Open_Sans'] text-gray-600 text-base sm:text-lg leading-relaxed px-4 sm:px-0">
            The process of remodeling can and should be enjoyable! When you find the right team 
            for your project, one that can guide you through every step of a finely tuned process, 
            your design build remodeling experience can be as remarkable as your beautiful, new space.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Step Number */}
              <div className="font-['Lato'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#dc101c] mb-4">
                {step.number}
              </div>
              {/* Step Title */}
              <h3 className="font-['Lato'] text-lg sm:text-xl lg:text-2xl font-bold text-[#131c23] mb-3">
                {step.title}
              </h3>
              {/* Step Description */}
              <p className="font-['Open_Sans'] text-gray-600 text-s sm:text-sm leading-relaxed px-2">
                {step.description}
              </p>
              {/* Divider Line */}
              <div className="w-12 h-0.5 bg-[#dc101c] mx-auto mt-4"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div 
          className={`text-center mt-10 sm:mt-12 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 font-['Droid_Sans'] bg-[#131c23] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full uppercase tracking-wider text-xs sm:text-sm font-bold hover:bg-[#dc101c] transition-all duration-300 hover:gap-3 group"
          >
            TAKE THE 5 STEPS TO SUCCESS
            <span className="text-base sm:text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}