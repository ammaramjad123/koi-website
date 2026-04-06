// components/home/Testimonials.js
'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Michael & Karen T.",
    location: "Olympia, WA",
    rating: 5,
    text: "KOI Build Co transformed our outdated kitchen into the heart of our home. Their team was professional, communicative, and the quality is outstanding. We couldn't be happier!",
    project: "Kitchen Remodel"
  },
  {
    name: "David R.",
    location: "Lacey, WA",
    rating: 5,
    text: "From start to finish, KOI exceeded our expectations. They added a master suite to our home and the craftsmanship is flawless. The weekly updates kept us informed throughout.",
    project: "Home Addition"
  },
  {
    name: "Jennifer T.",
    location: "Tumwater, WA",
    rating: 5,
    text: "Professional, communicative, and detail-oriented. Our bathroom renovation looks like something from a magazine. Will definitely use them again for our next project.",
    project: "Bathroom Remodel"
  },
  {
    name: "Robert & Lisa S.",
    location: "Olympia, WA",
    rating: 5,
    text: "KOI rebuilt our deck and it's absolutely stunning. They worked within our budget and finished ahead of schedule. Highly recommend!",
    project: "Deck Construction"
  },
  {
    name: "Amanda C.",
    location: "Lacey, WA",
    rating: 5,
    text: "The team at KOI made our whole-house renovation stress-free. Their attention to detail and communication was impressive. Our home feels brand new!",
    project: "Whole-Home Remodel"
  },
  {
    name: "James W.",
    location: "Tumwater, WA",
    rating: 5,
    text: "Best decision we made was hiring KOI for our flooring installation. The team was punctual, clean, and the results are beautiful.",
    project: "Flooring Installation"
  }
]

export default function Testimonials() {
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
    <section ref={sectionRef} className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-3">
            Real Stories
          </p>
          <h2 className="font-['Lato'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131c23] mb-4">
            What Our <span className="text-[#dc101c]">Homeowners Say</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#dc101c] text-[#dc101c]" />
              ))}
            </div>
            <span className="font-['Lato'] text-2xl font-bold text-[#131c23]">4.9</span>
            <span className="font-['Open_Sans'] text-gray-500">(100+ reviews)</span>
          </div>
        </div>

        {/* 6 Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`group transition-all duration-700 delay-${idx * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Glass Card - World Class */}
              <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/95">
                
                {/* Background Gradient Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#dc101c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Quote Icon */}
                <div className="absolute top-5 right-5">
                  <Quote className="w-8 h-8 text-[#dc101c]/10 group-hover:text-[#dc101c]/20 transition-all duration-300" />
                </div>
                
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#dc101c] text-[#dc101c]" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="font-['Open_Sans'] text-gray-600 text-sm leading-relaxed mb-5">
                  "{testimonial.text}"
                </p>
                
                {/* Elegant Divider */}
                <div className="w-12 h-px bg-gradient-to-r from-[#dc101c] to-transparent group-hover:w-16 transition-all duration-500 mb-4"></div>
                
                {/* Client Name */}
                <p className="font-['Lato'] font-bold text-[#131c23]">
                  {testimonial.name}
                </p>
                
                {/* Location & Project */}
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-gray-400 text-xs">{testimonial.location}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span className="text-[#dc101c] text-xs font-['Droid_Sans'] uppercase tracking-wider">
                    {testimonial.project}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Rating Summary - Clean version */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-gray-50/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-100">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#dc101c] text-[#dc101c]" />
              ))}
            </div>
            <span className="font-['Lato'] font-bold text-[#131c23]">4.9/5</span>
            <span className="text-gray-400 text-sm">|</span>
            <span className="font-['Open_Sans'] text-gray-500 text-sm">100+ happy homeowners</span>
          </div>
        </div>
      </div>
    </section>
  )
}