// components/home/Hero.js
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const backgrounds = [
  { id: 1, image: '/hero-bg-1.jpg', alt: 'Luxury kitchen remodel' },
  { id: 2, image: '/hero-bg-2.jpg', alt: 'Modern bathroom renovation' },
  { id: 3, image: '/hero-bg-3.jpg', alt: 'Beautiful home addition' },
  { id: 4, image: '/hero-bg-4.jpg', alt: 'Elegant flooring installation' },
  { id: 5, image: '/hero-bg-5.jpg', alt: 'Professional painting service' },
  { id: 6, image: '/hero-bg-6.jpg', alt: 'Quality roofing work' },
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? backgrounds.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % backgrounds.length)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {backgrounds.map((bg, index) => (
        <div
          key={bg.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${bg.image}')` }}
        >
          {/* Stronger Overlay - 75% black for better text visibility */}
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
        <div 
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="font-['Lato'] text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
            A BETTER REMODEL
            <br />
            <span className="text-[#dc101c]">BEGINS WITH KOI</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-200 max-w-md mx-auto mt-3 mb-6">
            Olympia's trusted design-build experts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  <Link
    href="/contact-us"
    className="bg-white text-[#dc101c] border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-['Open_Sans_Condensed'] font-bold uppercase tracking-wider text-sm sm:text-base hover:bg-[#dc101c] hover:text-white transition-all duration-300"
  >
    FREE ESTIMATE
  </Link>
  <Link
    href="/services"
    className="bg-[#dc101c] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-['Open_Sans_Condensed'] font-bold uppercase tracking-wider text-sm sm:text-base hover:bg-white hover:text-[#dc101c] hover:border-2 hover:border-[#dc101c] transition-all duration-300"
  >
    OUR SERVICES
  </Link>
</div>
        </div>
      </div>

      {/* Navigation Container - Arrows + Dots in same line (Desktop only) */}
      <div className="absolute bottom-8 left-0 right-0 z-20 hidden sm:flex items-center justify-center gap-4">
       

        {/* Dots */}
        <div className="flex gap-2">
          {backgrounds.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'bg-[#dc101c] w-6 h-2'
                  : 'bg-white/50 hover:bg-white/80 w-2 h-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        
      </div>

      {/* Mobile: Only Dots (no arrows) */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex sm:hidden justify-center gap-2">
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'bg-[#dc101c] w-6 h-1.5'
                : 'bg-white/50 hover:bg-white/80 w-1.5 h-1.5'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

     
    </section>
  )
}