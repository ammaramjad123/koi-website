// components/home/BeforeAfter.js
'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { MoveLeft, MoveRight, Maximize2 } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "Modern Kitchen Transformation",
    location: "Olympia, WA",
    beforeImage: "/kitchen-before.jpg",
    afterImage: "/kitchen-after.jpg",
    description: "Complete kitchen remodel with custom cabinetry, quartz countertops, and premium appliances.",
    timeline: "6 weeks",
    investment: "$45k - $65k",
    features: ["Custom Cabinetry", "Quartz Countertops", "New Appliances", "LED Lighting"]
  },
  {
    id: 2,
    title: "Luxury Master Bathroom",
    location: "Lacey, WA",
    beforeImage: "/bathroom-before.jpg",
    afterImage: "/bathroom-after.jpg",
    description: "Spa-inspired bathroom renovation with walk-in shower, freestanding tub, and heated floors.",
    timeline: "4 weeks",
    investment: "$35k - $50k",
    features: ["Walk-in Shower", "Freestanding Tub", "Heated Floors", "Dual Vanity"]
  },
  {
    id: 3,
    title: "Open Concept Living",
    location: "Tumwater, WA",
    beforeImage: "/living-before.jpg",
    afterImage: "/living-after.jpg",
    description: "A dated, worn living room with scuffed hardwood floors, aging walls, and an old fireplace was completely transformed into a bright, ultra-luxury modern space.",
    timeline: "8 weeks",
    investment: "$60k - $85k",
    features: ["Wall Removal", "New Flooring", "Recessed Lighting", "Custom Built-ins"]
  }
]

export default function BeforeAfter() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeProject, setActiveProject] = useState(0)
  const [slidePosition, setSlidePosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const sectionRef = useRef(null)
  const containerRef = useRef(null)

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

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSlidePosition(Math.min(Math.max(percentage, 0), 100))
  }

  const handleTouchMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSlidePosition(Math.min(Math.max(percentage, 0), 100))
  }

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-3">
            Transformations
          </p>
          <h2 className="font-['Lato'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131c23] mb-4">
            See the <span className="text-[#dc101c]">Difference</span>
          </h2>
          <p className="font-['Open_Sans'] text-gray-500 text-base max-w-2xl mx-auto">
            Real projects. Real results. Real transformations from our satisfied homeowners.
          </p>
        </div>

        {/* Project Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {projects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveProject(idx)
                setSlidePosition(50)
              }}
              className={`px-5 py-2.5 rounded-full font-['Droid_Sans'] text-sm font-bold transition-all duration-300 ${
                activeProject === idx
                  ? 'bg-[#dc101c] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Before/After Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Side - Interactive Slider */}
          <div className="relative">
            <div 
              ref={containerRef}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] cursor-ew-resize"
              onMouseMove={handleMouseMove}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => setIsDragging(false)}
            >
             {/* After Image (Full) */}
<div className="absolute inset-0">
  <Image
    src={projects[activeProject].afterImage}
    alt="After"
    fill
    className="object-cover"
    priority
  />
</div>
              
            {/* Before Image (Clipped) */}
<div
  className="absolute inset-0 overflow-hidden"
  style={{ width: `${slidePosition}%` }}
>
  <Image
    src={projects[activeProject].beforeImage}
    alt="Before"
    fill
    className="object-cover"
  />
</div>
              
              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
                style={{ left: `${slidePosition}%` }}
                onMouseDown={() => setIsDragging(true)}
                onTouchStart={() => setIsDragging(true)}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <MoveLeft className="w-4 h-4 text-[#131c23]" />
                  <MoveRight className="w-4 h-4 text-[#131c23]" />
                </div>
              </div>
              
              {/* Labels */}
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg z-10">
                <span className="text-white text-xs font-bold">BEFORE</span>
              </div>
              <div className="absolute bottom-4 right-4 bg-[#dc101c]/90 backdrop-blur-sm px-3 py-1.5 rounded-lg z-10">
                <span className="text-white text-xs font-bold">AFTER</span>
              </div>
            </div>
            
            {/* Drag Instruction */}
            <p className="text-center text-gray-400 text-xs mt-3 flex items-center justify-center gap-2">
              <MoveLeft className="w-3 h-3" />
              Drag to compare
              <MoveRight className="w-3 h-3" />
            </p>
          </div>

          {/* Right Side - Project Details */}
          <div className={`space-y-6 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-[#dc101c]/10 text-[#dc101c] text-xs font-['Droid_Sans'] rounded-full">
                  Featured Project
                </span>
              </div>
              <h3 className="font-['Lato'] text-2xl sm:text-3xl font-bold text-[#131c23] mb-2">
                {projects[activeProject].title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{projects[activeProject].location}</p>
              <p className="font-['Open_Sans'] text-gray-600 text-base leading-relaxed mb-6">
                {projects[activeProject].description}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-gray-400 text-xs mb-1">Timeline</p>
                <p className="font-['Lato'] font-bold text-[#131c23]">{projects[activeProject].timeline}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-gray-400 text-xs mb-1">Investment Range</p>
                <p className="font-['Lato'] font-bold text-[#131c23]">{projects[activeProject].investment}</p>
              </div>
            </div>

            {/* Features List */}
            <div>
              <p className="font-['Droid_Sans'] text-[#131c23] text-sm font-bold mb-3">Key Features</p>
              <div className="flex flex-wrap gap-2">
                {projects[activeProject].features.map((feature, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-gray-100 rounded-full text-gray-600 text-xs">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-[#131c23] text-white px-6 py-3 rounded-full font-['Droid_Sans'] text-sm font-bold hover:bg-[#dc101c] transition-all duration-300 group"
              >
                Start Your Transformation
                <Maximize2 className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-4 mt-10">
          {projects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveProject(idx)
                setSlidePosition(50)
              }}
              className={`group relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                activeProject === idx ? 'border-[#dc101c] shadow-lg' : 'border-transparent hover:border-gray-300'
              }`}
            >
              <div className="relative w-full h-full">
  <Image
    src={project.afterImage}
    alt={project.title}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-300"
  />
</div>
              {activeProject === idx && (
                <div className="absolute inset-0 bg-[#dc101c]/20"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}