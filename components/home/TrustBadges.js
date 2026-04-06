// components/home/TrustBadges.js
'use client'

import { useEffect, useRef, useState } from 'react'
import { Shield, Award, Clock, BadgeCheck, ThumbsUp, Home, Hammer, Users } from 'lucide-react'

const badges = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Licensed & Insured",
    description: "Fully licensed in Washington State with comprehensive insurance coverage",
    color: "from-blue-600/10"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "20+ Years Experience",
    description: "Two decades of exceptional home remodeling expertise",
    color: "from-amber-600/10"
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Locally Owned",
    description: "Proudly serving Olympia and South Puget Sound since 2004",
    color: "from-emerald-600/10"
  },
  {
    icon: <BadgeCheck className="w-6 h-6" />,
    title: "A+ BBB Rating",
    description: "Accredited with Better Business Bureau for excellence",
    color: "from-indigo-600/10"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Family-Owned",
    description: "A family business treating every home like our own with quality and precision",
    color: "from-rose-600/10"
  },
  {
    icon: <ThumbsUp className="w-6 h-6" />,
    title: "100% Satisfaction",
    description: "We don't stop until you're completely happy with the final result",
    color: "from-green-600/10"
  }
]

export default function TrustBadges() {
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
        <div className="text-center mb-12">
          <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-3">
            Why Trust KOI
          </p>
          <h2 className="font-['Lato'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131c23]">
            Built on <span className="text-[#dc101c]">Trust & Excellence</span>
          </h2>
          <p className="font-['Open_Sans'] text-gray-500 text-base max-w-2xl mx-auto mt-4">
            Over 20 years of serving South Puget Sound with integrity and quality craftsmanship.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className={`group transition-all duration-700 delay-${idx * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Minimal Glass Card */}
              <div className="relative flex items-start gap-4 p-5 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-300/50 hover:border-[#dc101c]/20 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                
                {/* Icon Container with Hover Effect */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#dc101c]/10 to-transparent flex items-center justify-center text-[#dc101c] group-hover:scale-110 transition-transform duration-300">
                    {badge.icon}
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-[#dc101c]/0 group-hover:bg-[#dc101c]/5 transition-all duration-300 -z-10"></div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-['Lato'] text-base font-bold text-[#131c23] mb-1">
                    {badge.title}
                  </h3>
                  <p className="font-['Open_Sans'] text-gray-500 text-xs leading-relaxed">
                    {badge.description}
                  </p>
                </div>

                {/* Minimal accent line - appears on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#dc101c] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement Bar */}
        <div className="mt-12 pt-8 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#dc101c]"></div>
              <span className="text-gray-500 text-xs">Verified License</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#dc101c]"></div>
              <span className="text-gray-500 text-xs">Full Insurance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#dc101c]"></div>
              <span className="text-gray-500 text-xs">Bonded Contractor</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#dc101c]"></div>
              <span className="text-gray-500 text-xs">EPA Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#dc101c]"></div>
              <span className="text-gray-500 text-xs">Lead-Safe Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}