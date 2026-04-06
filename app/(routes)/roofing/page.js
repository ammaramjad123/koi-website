// app/roofing/page.js
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { CheckCircle, Shield, Calendar, ThumbsUp, ChevronLeft, ChevronRight, Phone, Mail, Star, ArrowRight } from 'lucide-react'

// ========== HERO BACKGROUNDS (4 IMAGES) ==========
const backgrounds = [
  { id: 1, image: '/roofing-hero-1.jpg', alt: 'Professional roofing installation' },
  { id: 2, image: '/roofing-hero-2.jpg', alt: 'New roof replacement' },
  { id: 3, image: '/roofing-hero-3.jpg', alt: 'Residential roofing services' },
  { id: 4, image: '/roofing-hero-4.jpg', alt: 'Emergency roof repair' },
]

// ========== FEATURED PROJECTS ==========
const featuredProjects = [
  // SLIDE 1 - First 6 images (3 top, 3 bottom)
  { title: 'Complete Roof Replacement', location: 'Olympia, WA', description: 'Full asphalt shingle roof replacement for a family home.', image: '/roofing-project-1.jpg' },
  { title: 'Emergency Roof Repair', location: 'Lacey, WA', description: 'Storm damage repair with new shingles and underlayment.', image: '/roofing-project-2.jpg' },
  { title: 'Metal Roof Installation', location: 'Tumwater, WA', description: 'Durable standing seam metal roof for energy efficiency.', image: '/roofing-project-3.jpg' },
  { title: 'Roof Inspection & Maintenance', location: 'Olympia, WA', description: 'Complete roof assessment and preventive maintenance.', image: '/roofing-project-4.jpg' },
  { title: 'Flat Roof Replacement', location: 'Lacey, WA', description: 'Commercial-grade flat roof installation with warranty.', image: '/roofing-project-5.jpg' },
  { title: 'Skylight Installation', location: 'Olympia, WA', description: 'Natural light solutions with premium skylight installation.', image: '/roofing-project-6.jpg' },
  
  // SLIDE 2 - Next 6 images (3 top, 3 bottom)
  { title: 'Gutter Installation', location: 'Olympia, WA', description: 'Seamless gutter installation with leaf guards.', image: '/roofing-project-7.jpg' },
  { title: 'Soffit & Fascia Repair', location: 'Lacey, WA', description: 'Complete soffit and fascia replacement and repair.', image: '/roofing-project-8.jpg' },
  { title: 'Ventilation Upgrade', location: 'Tumwater, WA', description: 'Attic ventilation improvement for energy efficiency.', image: '/roofing-project-9.jpg' },
  { title: 'Storm Damage Restoration', location: 'Olympia, WA', description: 'Full restoration after severe weather damage.', image: '/roofing-project-10.jpg' },
  { title: 'Tile Roof Installation', location: 'Lacey, WA', description: 'Beautiful clay and concrete tile roofing.', image: '/roofing-project-11.jpg' },
  { title: 'Roof Coating Services', location: 'Olympia, WA', description: 'Protective roof coating for extended life.', image: '/roofing-project-12.jpg' },
]

// ========== TESTIMONIALS ==========
const testimonials = [
  { name: "Michael R.", location: "Olympia, WA", rating: 5, text: "KOI replaced our entire roof after storm damage. The team was professional, fast, and the quality is outstanding. Highly recommend!", project: "Roof Replacement" },
  { name: "Sarah & Tom L.", location: "Lacey, WA", rating: 5, text: "From estimate to completion, KOI exceeded our expectations. Our new roof looks amazing and was done ahead of schedule.", project: "Metal Roof Installation" },
  { name: "Jennifer K.", location: "Tumwater, WA", rating: 5, text: "Emergency repair was handled quickly and professionally. They saved our home from further damage. Thank you KOI!", project: "Emergency Repair" },
  { name: "David & Lisa M.", location: "Olympia, WA", rating: 5, text: "Great communication, fair pricing, and excellent workmanship. Our roof has never looked better.", project: "Full Replacement" },
]

// ========== HOW WE HELP SECTION DATA ==========
const helpFeatures = [
  { title: "Free Roof Inspection", description: "We'll assess your roof's condition and provide honest recommendations.", icon: <Shield className="w-6 h-6" /> },
  { title: "Quality Materials", description: "We use only premium shingles, underlayment, and flashing for lasting protection.", icon: <ThumbsUp className="w-6 h-6" /> },
  { title: "Licensed & Insured", description: "Fully licensed roofing contractors with comprehensive insurance coverage.", icon: <CheckCircle className="w-6 h-6" /> },
  { title: "Fast Turnaround", description: "Most residential roofs completed within 1-3 days with minimal disruption.", icon: <Calendar className="w-6 h-6" /> }
]

export default function RoofingPage() {



// Slider state
const [currentSlide, setCurrentSlide] = useState(0)
const totalSlides = Math.ceil(featuredProjects.length / 6) // 2 slides for 12 images

const prevSlide = () => {
  setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
}

const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % totalSlides)
}

const goToSlide = (index) => {
  setCurrentSlide(index)
}


  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [hoveredProject, setHoveredProject] = useState(null)
  
  // Animation states for each section
  const [sectionsVisible, setSectionsVisible] = useState({
    hero: false,
    trusted: false,
    featured: false,
    testimonial: false,
    help: false,
    contact: false,
    cta: false
  })
  
  const sectionRefs = {
    hero: useRef(null),
    trusted: useRef(null),
    featured: useRef(null),
    testimonial: useRef(null),
    help: useRef(null),
    contact: useRef(null),
    cta: useRef(null)
  }

  // Intersection Observer for all sections
  useEffect(() => {
    const observers = []
    
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (!ref.current) return
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setSectionsVisible(prev => ({ ...prev, [key]: true }))
            observer.unobserve(entry.target)
          }
        },
        { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
      )
      
      observer.observe(ref.current)
      observers.push(observer)
    })
    
    return () => observers.forEach(observer => observer.disconnect())
  }, [])

  // Hero image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % backgrounds.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Testimonial slider
  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="bg-white overflow-hidden">
      
      {/* ========== SECTION 1: HERO ========== */}
      <section ref={sectionRefs.hero} className="relative h-screen w-full overflow-hidden">
        {backgrounds.map((bg, index) => (
          <div key={bg.id} className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${index === currentHeroIndex ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage: `url('${bg.image}')` }}>
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
        ))}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10">
          <div className={`transition-all duration-1000 delay-200 transform ${sectionsVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-4 animate-pulse">Professional Roofing Services</p>
            <h1 className="font-['Lato'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">Expert Roofing<br /><span className="text-[#dc101c]">Contractor in Olympia</span></h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto mt-4 mb-8">Quality roof installation, repair, and replacement. Licensed, insured, and trusted by homeowners across South Puget Sound.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact-us" className="bg-white text-[#dc101c] border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-['Droid_Sans'] font-bold uppercase tracking-wider text-sm sm:text-base hover:bg-[#dc101c] hover:text-white transition-all duration-300 hover:scale-105">FREE ESTIMATE</Link>
              <Link href="#contact-form" className="bg-[#dc101c] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-['Droid_Sans'] font-bold uppercase tracking-wider text-sm sm:text-base hover:bg-white hover:text-[#dc101c] hover:border-2 hover:border-[#dc101c] transition-all duration-300 hover:scale-105">SCHEDULE INSPECTION</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
          {backgrounds.map((_, index) => (
            <button key={index} onClick={() => setCurrentHeroIndex(index)} className={`transition-all duration-300 rounded-full ${index === currentHeroIndex ? 'bg-[#dc101c] w-6 sm:w-8 h-1.5 sm:h-2' : 'bg-white/50 hover:bg-white/80 w-1.5 sm:w-2 h-1.5 sm:h-2'}`} />
          ))}
        </div>
      </section>

      {/* ========== SECTION 2: TRUSTED EXPERTS ========== */}
      <section ref={sectionRefs.trusted} className="py-16 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className={`order-1 lg:order-1 transition-all duration-700 delay-100 transform ${sectionsVisible.trusted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="relative aspect-[4/3] lg:aspect-[6/5] w-full overflow-hidden rounded-2xl shadow-xl group">
                <Image src="/roofing-expert.jpg" alt="KOI Build Co roofing experts" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
            </div>
            <div className={`order-2 lg:order-2 transition-all duration-700 delay-200 transform ${sectionsVisible.trusted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-4">Why Choose Us</p>
              <h2 className="font-['Lato'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131c23] leading-tight mb-6">Olympia's Trusted <span className="text-[#dc101c]">Roofing Experts</span></h2>
              <p className="font-['Open_Sans'] text-gray-600 text-base sm:text-lg leading-relaxed mb-8">With over 20 years of experience, KOI Build Co has become the go-to roofing contractor for homeowners across South Puget Sound.</p>
              <div className="space-y-3 mb-8">
                {['20+ Years of Roofing Experience', 'Licensed & Insured in Washington State', 'Free Inspections & Estimates', 'Manufacturer Warranties Available'].map((item, idx) => (
                  <div key={idx} className={`flex items-center gap-3 transition-all duration-500 delay-${idx * 100} transform ${sectionsVisible.trusted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: `${idx * 100 + 300}ms` }}>
                    <div className="w-2 h-2 bg-[#dc101c] rounded-full"></div>
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact-us" className="inline-flex items-center gap-2 font-['Droid_Sans'] bg-[#131c23] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full uppercase tracking-wider text-xs sm:text-sm font-bold hover:bg-[#dc101c] transition-all duration-300 hover:gap-3 hover:scale-105 group">SCHEDULE INSPECTION <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" /></Link>
            </div>
          </div>
        </div>
      </section>

    {/* ========== SECTION 3: FEATURED PROJECTS (6 IMAGES PER SLIDE - 2 ROWS OF 3) ========== */}
<section ref={sectionRefs.featured} className="py-16 sm:py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
    <div className={`text-center mb-12 transition-all duration-700 transform ${sectionsVisible.featured ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-3">Our Work</p>
      <h2 className="font-['Lato'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131c23]">Featured <span className="text-[#dc101c]">Roofing Projects</span></h2>
      <p className="font-['Open_Sans'] text-gray-500 text-base max-w-2xl mx-auto mt-4">Real results from homeowners who trusted us with their roofs.</p>
    </div>

    <div className="relative">
      {/* Slider Container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* SLIDE 1 - First 6 images (3x2 grid) */}
          <div className="flex-shrink-0 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.slice(0, 6).map((project, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-700 delay-${Math.min(idx * 100, 500)} transform ${
                    sectionsVisible.featured ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div 
                    className="group relative overflow-hidden rounded-2xl cursor-pointer"
                    onMouseEnter={() => setHoveredProject(idx)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="relative h-[280px] sm:h-[320px] lg:h-[380px] w-full overflow-hidden bg-gray-200 shadow-lg rounded-2xl transition-all duration-500 hover:shadow-2xl">
                      {/* Image */}
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 text-sm transition-transform duration-700 group-hover:scale-110">
                        Project Image
                      </div>
                      
                      {/* Dark Overlay - appears on hover (desktop only) */}
                      <div className={`hidden lg:block absolute inset-0 transition-all duration-500 rounded-2xl ${
                        hoveredProject === idx ? 'bg-black/70 opacity-100' : 'bg-black/0 opacity-0'
                      }`}></div>
                      
                      {/* Mobile: Always visible dark gradient */}
                      <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl"></div>
                      
                      {/* White Outline Card */}
                      <div className="absolute inset-4 sm:inset-5 border-2 border-white rounded-xl overflow-hidden">
                        
                        {/* DESKTOP: Text hidden, slides up on hover */}
                        <div className={`hidden lg:block absolute bottom-0 left-0 right-0 p-4 sm:p-5 transition-all duration-500 ${
                          hoveredProject === idx ? 'translate-y-0' : 'translate-y-full'
                        }`}>
                          <p className="font-['Lato'] text-xs sm:text-sm italic mb-1 text-white/80">
                            {project.location}
                          </p>
                          <h3 className="font-['Lato'] text-base sm:text-lg lg:text-xl font-bold leading-tight text-white">
                            {project.title}
                          </h3>
                          <p className="font-['Open_Sans'] text-gray-200 text-xs sm:text-sm mt-2 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="h-0.5 bg-[#dc101c] w-10 mt-3"></div>
                        </div>
                        
                        {/* MOBILE: Text always visible, inside white outline card */}
                        <div className="lg:hidden absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                          <p className="font-['Lato'] text-[10px] sm:text-xs italic mb-0.5 text-white/80">
                            {project.location}
                          </p>
                          <h3 className="font-['Lato'] text-xs sm:text-sm font-bold leading-tight text-white">
                            {project.title}
                          </h3>
                          <p className="font-['Open_Sans'] text-gray-200 text-[10px] sm:text-xs mt-1 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="h-0.5 bg-[#dc101c] w-6 sm:w-8 mt-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SLIDE 2 - Next 6 images (3x2 grid) */}
          <div className="flex-shrink-0 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.slice(6, 12).map((project, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-700 delay-${Math.min(idx * 100, 500)} transform ${
                    sectionsVisible.featured ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${(idx + 6) * 100}ms` }}
                >
                  <div 
                    className="group relative overflow-hidden rounded-2xl cursor-pointer"
                    onMouseEnter={() => setHoveredProject(idx + 6)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="relative h-[280px] sm:h-[320px] lg:h-[380px] w-full overflow-hidden bg-gray-200 shadow-lg rounded-2xl transition-all duration-500 hover:shadow-2xl">
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 text-sm transition-transform duration-700 group-hover:scale-110">
                        Project Image
                      </div>
                      
                      <div className={`hidden lg:block absolute inset-0 transition-all duration-500 rounded-2xl ${
                        hoveredProject === idx + 6 ? 'bg-black/70 opacity-100' : 'bg-black/0 opacity-0'
                      }`}></div>
                      
                      <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl"></div>
                      
                      <div className="absolute inset-4 sm:inset-5 border-2 border-white rounded-xl overflow-hidden">
                        
                        <div className={`hidden lg:block absolute bottom-0 left-0 right-0 p-4 sm:p-5 transition-all duration-500 ${
                          hoveredProject === idx + 6 ? 'translate-y-0' : 'translate-y-full'
                        }`}>
                          <p className="font-['Lato'] text-xs sm:text-sm italic mb-1 text-white/80">
                            {project.location}
                          </p>
                          <h3 className="font-['Lato'] text-base sm:text-lg lg:text-xl font-bold leading-tight text-white">
                            {project.title}
                          </h3>
                          <p className="font-['Open_Sans'] text-gray-200 text-xs sm:text-sm mt-2 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="h-0.5 bg-[#dc101c] w-10 mt-3"></div>
                        </div>
                        
                        <div className="lg:hidden absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                          <p className="font-['Lato'] text-[10px] sm:text-xs italic mb-0.5 text-white/80">
                            {project.location}
                          </p>
                          <h3 className="font-['Lato'] text-xs sm:text-sm font-bold leading-tight text-white">
                            {project.title}
                          </h3>
                          <p className="font-['Open_Sans'] text-gray-200 text-[10px] sm:text-xs mt-1 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="h-0.5 bg-[#dc101c] w-6 sm:w-8 mt-2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Navigation Row - Arrows and Dots on the SAME LINE */}
    <div className={`flex items-center justify-center gap-4 mt-8 transition-all duration-700 delay-500 transform ${
      sectionsVisible.featured ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      <button
        onClick={prevSlide}
        className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-[#dc101c] hover:text-white hover:border-[#dc101c] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
        aria-label="Previous projects"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex gap-2">
        {[...Array(totalSlides)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === idx
                ? 'bg-[#dc101c] w-6 sm:w-8 h-1.5 sm:h-2'
                : 'bg-gray-300 hover:bg-gray-400 w-1.5 sm:w-2 h-1.5 sm:h-2'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <button
        onClick={nextSlide}
        className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-[#dc101c] hover:text-white hover:border-[#dc101c] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
        aria-label="Next projects"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  </div>
</section>

    {/* ========== SECTION 4: TESTIMONIAL BANNER ========== */}
<section ref={sectionRefs.testimonial} className="py-16 sm:py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
    <div className={`relative bg-gradient-to-r from-[#131c23] to-[#1a2430] rounded-2xl overflow-hidden shadow-xl transition-all duration-700 delay-100 transform ${sectionsVisible.testimonial ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className="absolute top-0 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-[#dc101c]/10 rounded-full blur-3xl"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 lg:p-12">
        {/* Left Side - Testimonial Content */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#dc101c] text-[#dc101c]" />))}
          </div>
          <p className="font-['Open_Sans'] text-gray-200 text-base sm:text-lg lg:text-xl italic leading-relaxed">
            "{testimonials[activeTestimonial].text}"
          </p>
          <div className="mt-4 sm:mt-6">
            <p className="font-['Lato'] font-bold text-white text-base sm:text-lg">
              {testimonials[activeTestimonial].name}
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              {testimonials[activeTestimonial].location} • {testimonials[activeTestimonial].project}
            </p>
          </div>
          <div className="flex gap-3 mt-4 sm:mt-6">
            <button onClick={prevTestimonial} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#dc101c] text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button onClick={nextTestimonial} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#dc101c] text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
        
        {/* Right Side - Image */}
        <div className="relative flex justify-center items-center order-1 lg:order-2 mb-4 lg:mb-0">
          <div className="w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-all duration-500 hover:scale-105">
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 text-xs sm:text-sm">
              Client Photo
            </div>
          </div>
          {/* Decorative circle - hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute -bottom-4 -right-4 w-24 h-24 bg-[#dc101c] rounded-full opacity-20 animate-pulse"></div>
        </div>
      </div>
      
      {/* Dots Navigation - Responsive padding */}
      <div className="flex justify-center gap-2 pb-4 sm:pb-6 pt-0">
        {testimonials.map((_, idx) => (
          <button 
            key={idx} 
            onClick={() => setActiveTestimonial(idx)} 
            className={`transition-all duration-300 rounded-full ${
              idx === activeTestimonial 
                ? 'bg-[#dc101c] w-6 sm:w-8 h-1.5 sm:h-2' 
                : 'bg-white/30 hover:bg-white/50 w-1.5 sm:w-2 h-1.5 sm:h-2'
            }`}
          />
        ))}
      </div>
    </div>
  </div>
</section>

     {/* ========== SECTION 5: HOW WE CAN HELP ========== */}
<section ref={sectionRefs.help} className="py-16 sm:py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className={`text-center mb-12 transition-all duration-700 transform ${sectionsVisible.help ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-3">How We Can Help</p>
      <h2 className="font-['Lato'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131c23]">Comprehensive <span className="text-[#dc101c]">Roofing Solutions</span></h2>
      <p className="font-['Open_Sans'] text-gray-500 text-base max-w-2xl mx-auto mt-4">From emergency repairs to complete replacements, we provide full-service roofing solutions tailored to your home's needs.</p>
    </div>

    {/* Main Content Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      
      {/* Left Side - Features List */}
      <div className={`space-y-6 transition-all duration-700 delay-100 transform ${sectionsVisible.help ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        {helpFeatures.map((feature, idx) => (
          <div 
            key={idx} 
            className={`flex items-start gap-5 p-5 bg-gray-50 rounded-2xl transition-all duration-500 hover:shadow-md hover:-translate-y-1 transform ${
              sectionsVisible.help ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: `${idx * 100 + 200}ms` }}
          >
            <div className="w-14 h-14 rounded-xl bg-[#dc101c]/10 flex items-center justify-center text-[#dc101c] flex-shrink-0 transition-all duration-300">
              {feature.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-['Lato'] font-bold text-[#131c23] text-lg mb-1">{feature.title}</h3>
              <p className="font-['Open_Sans'] text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
        
        {/* CTA Button */}
        <div className="pt-4">
          <Link 
            href="/contact-us" 
            className="inline-flex items-center gap-2 bg-[#131c23] text-white px-8 py-4 rounded-full font-['Droid_Sans'] text-sm font-bold hover:bg-[#dc101c] transition-all duration-300 hover:gap-3 hover:scale-105 group"
          >
            GET FREE ESTIMATE 
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Right Side - Images Grid - Clean layout */}
      <div className={`transition-all duration-700 delay-300 transform ${sectionsVisible.help ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
        <div className="grid grid-cols-2 gap-4">
          {/* Top Left Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="aspect-square w-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
              <div className="text-center">
                <div className="text-3xl mb-2">🏠</div>
                Roofing<br />Image 1
              </div>
            </div>
          </div>
          
          {/* Top Right Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="aspect-square w-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
              <div className="text-center">
                <div className="text-3xl mb-2">🔨</div>
                Roofing<br />Image 2
              </div>
            </div>
          </div>
          
          {/* Bottom Full Width Image */}
          <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="aspect-[16/9] w-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
              <div className="text-center">
                <div className="text-3xl mb-2">🏗️</div>
                Roofing Image 3 - Full Width
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Trust Badges Row */}
    <div className={`mt-12 pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-6 transition-all duration-700 delay-500 transform ${sectionsVisible.help ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-[#dc101c] rounded-full"></div>
        <span className="text-gray-500 text-xs">Licensed & Insured</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-[#dc101c] rounded-full"></div>
        <span className="text-gray-500 text-xs">20+ Years Experience</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-[#dc101c] rounded-full"></div>
        <span className="text-gray-500 text-xs">Free Estimates</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-[#dc101c] rounded-full"></div>
        <span className="text-gray-500 text-xs">Warranty Included</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-[#dc101c] rounded-full"></div>
        <span className="text-gray-500 text-xs">Emergency Service</span>
      </div>
    </div>
  </div>
</section>

    {/* ========== SECTION 6: CONTACT FORM ========== */}
<section ref={sectionRefs.contact} id="contact-form" className="py-16 sm:py-24 bg-white overflow-hidden">
  <div className="w-full lg:w-4/5 lg:mx-auto px-6 sm:px-6 lg:px-8">
    <div className={`text-center mb-10 transition-all duration-700 transform ${sectionsVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-3">Get In Touch</p>
      <h2 className="font-['Lato'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131c23]">Let Our Experts <span className="text-[#dc101c]">Answer Your Questions</span></h2>
      <p className="font-['Open_Sans'] text-gray-500 text-base max-w-2xl mx-auto mt-4">Schedule your free consultation today. Our team is ready to help.</p>
    </div>
    
    <div className={`max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-700 delay-200 transform ${sectionsVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Side - Image */}
        <div className="relative h-64 lg:h-auto overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#131c23]/80 to-[#dc101c]/80 z-10"></div>
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 text-sm">
            <div className="relative z-20 text-center text-white p-6">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="font-['Lato'] text-2xl font-bold mb-2">Free Roof Inspection</h3>
              <p className="text-white/80 text-sm">Schedule your no-obligation consultation today</p>
            </div>
          </div>
        </div>
        
        {/* Right Side - Form */}
        <div className="p-6 sm:p-8">
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="font-['Droid_Sans'] text-[#131c23] text-sm font-bold mb-2 block">Full Name *</label>
                <input type="text" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#dc101c] focus:ring-1 focus:ring-[#dc101c] transition-all duration-300 focus:scale-[1.02]" placeholder="John Smith" />
              </div>
              <div>
                <label className="font-['Droid_Sans'] text-[#131c23] text-sm font-bold mb-2 block">Email *</label>
                <input type="email" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#dc101c] focus:ring-1 focus:ring-[#dc101c] transition-all duration-300 focus:scale-[1.02]" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="font-['Droid_Sans'] text-[#131c23] text-sm font-bold mb-2 block">Phone</label>
                <input type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#dc101c] focus:ring-1 focus:ring-[#dc101c] transition-all duration-300 focus:scale-[1.02]" placeholder="(253) 348-1847" />
              </div>
              <div>
                <label className="font-['Droid_Sans'] text-[#131c23] text-sm font-bold mb-2 block">Service Needed *</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#dc101c] focus:ring-1 focus:ring-[#dc101c] transition-all duration-300 focus:scale-[1.02] bg-white">
                  <option>Roof Repair</option>
                  <option>Roof Replacement</option>
                  <option>New Installation</option>
                  <option>Roof Inspection</option>
                  <option>Emergency Service</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            
            <div className="mb-5">
              <label className="font-['Droid_Sans'] text-[#131c23] text-sm font-bold mb-2 block">Message *</label>
              <textarea rows={4} required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-[#dc101c] focus:ring-1 focus:ring-[#dc101c] transition-all duration-300 focus:scale-[1.02] resize-none" placeholder="Tell us about your roofing project..."></textarea>
            </div>
            
            <button type="submit" className="w-full bg-[#dc101c] text-white py-4 rounded-xl font-['Droid_Sans'] font-bold uppercase tracking-wider text-sm hover:bg-[#131c23] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              SCHEDULE FREE INSPECTION
            </button>
            
            <p className="text-gray-400 text-xs text-center mt-4">Free estimate • No obligation • Licensed & insured</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

     {/* ========== FINAL CTA SECTION ========== */}
<section className="relative py-20 sm:py-28 overflow-hidden">
  {/* Background with lighter overlay */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/cta-banner3.jpg')" }}
  >
    {/* Reduced overlay opacity (was /90) */}
    <div className="absolute inset-0 bg-[#131c23]/79"></div>
  </div>
  
  <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
    <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-4">
      Ready to Get Started?
    </p>

    <h2 className="font-['Lato'] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
      Let's Bring Your Vision to Life
    </h2>

    <p className="font-['Open_Sans'] text-gray-200 text-base sm:text-lg max-w-2xl mx-auto mb-8">
      Contact us today for a free, no-obligation consultation. 
      We'll answer your questions and provide a detailed estimate.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      
      <Link
        href="/contact-us"
        className="inline-flex items-center justify-center gap-2 bg-[#dc101c] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-['Droid_Sans'] font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-white hover:text-[#131c23] transition-all duration-300 group w-auto sm:min-w-[200px]"
      >
        Get Free Estimate
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>

      <a
        href="tel:2533481847"
        className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-['Droid_Sans'] font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-white hover:text-[#131c23] transition-all duration-300 group w-auto sm:min-w-[200px]"
      >
        Call (253) 348-1847
      </a>

    </div>

    <p className="text-gray-300 text-xs mt-6">
      Free estimate • No obligation • Licensed & insured
    </p>
  </div>
</section>
    </div>
  )
}