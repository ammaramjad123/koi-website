// components/home/ProjectTypes.js
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const projects = [
  {
    title: 'Flooring',
    tagline: 'premium',
    href: '/flooring',
    image: '/flooring.jpg',
  },
  {
    title: 'Home Additions',
    tagline: 'exquisite',
    href: '/additions',
    image: '/additions.jpg',
  },
  {
    title: 'New Construction',
    tagline: 'exceptional',
    href: '/new-construction',
    image: '/new-construction.jpg',
  },
  {
    title: 'Painting',
    tagline: 'masterful',
    href: '/painting',
    image: '/painting.jpg',
  },
  {
    title: 'Roofing',
    tagline: 'durable',
    href: '/roofing',
    image: '/roofing.jpg',
  },
  {
    title: 'Full Remodeling',
    tagline: 'luxury',
    href: '/services',
    image: '/remodeling.jpg',
  },
]

export default function ProjectTypes() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
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
    <section ref={sectionRef} className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center mb-10 sm:mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold">
            Project Types
          </p>
          <h2 className="font-['Lato'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#131c23] mt-2">
            What We Specialize In
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.href}
              className="group block w-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-[280px] sm:h-[320px] lg:h-[380px] w-full overflow-hidden bg-gray-200 shadow-lg rounded-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Dark Overlay - ONLY ON HOVER */}
                  <div className={`absolute inset-0 transition-all duration-300 rounded-2xl ${
                    hoveredIndex === index ? 'bg-black/70 opacity-100' : 'bg-black/0 opacity-0'
                  }`}></div>
                  
                  {/* Subtle dark gradient at bottom for text readability (ALWAYS VISIBLE) */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl"></div>
                  
                  {/* White Outline Card */}
                  <div className="absolute inset-4 sm:inset-5 border-2 border-white rounded-xl">
                    {/* Content */}
                    <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5">
                      {/* Tagline */}
                      <p className={`font-['Lato'] text-xs sm:text-sm italic mb-1 transition-all duration-300 ${
                        hoveredIndex === index ? 'text-white/80' : 'text-white'
                      }`}>
                        {project.tagline}
                      </p>
                      {/* Title */}
                      <h3 className={`font-['Lato'] text-base sm:text-lg lg:text-xl font-bold leading-tight transition-all duration-300 ${
                        hoveredIndex === index ? 'text-white' : 'text-white'
                      }`}>
                        {project.title}
                      </h3>
                      {/* Red Line */}
                      <div className={`h-0.5 bg-[#dc101c] transition-all duration-300 mt-2 ${
                        hoveredIndex === index ? 'w-10 opacity-100' : 'w-0 opacity-0'
                      }`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Link */}
        <div 
          className={`text-center mt-10 sm:mt-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-['Droid_Sans'] text-[#dc101c] uppercase tracking-wider text-xs sm:text-sm font-bold hover:gap-3 transition-all duration-300"
          >
            VIEW ALL PROJECT TYPES
            <span className="text-base sm:text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}