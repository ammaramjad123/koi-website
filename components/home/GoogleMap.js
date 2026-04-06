// components/home/GoogleMap.js
'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin, Navigation, ExternalLink, Maximize2 } from 'lucide-react'

export default function GoogleMap() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
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

  // Olympia, WA coordinates
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172158.4179026828!2d-122.97829075!3d47.0378741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5491c9c1ae285569%3A0x4f146197e2881b83!2sOlympia%2C%20WA%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-3">
            Visit Us
          </p>
          <h2 className="font-['Lato'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131c23] mb-4">
            We're Located in <span className="text-[#dc101c]">Olympia, WA</span>
          </h2>
          <p className="font-['Open_Sans'] text-gray-500 text-base max-w-2xl mx-auto">
            Proudly serving homeowners throughout South Puget Sound from our home base in Washington's capital city.
          </p>
        </div>

        {/* Map Container - Glass Card Style */}
        <div className={`transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500">
            
            {/* Map Header with Location Info */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#dc101c]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#dc101c]" />
                </div>
                <div>
                  <p className="font-['Lato'] font-bold text-[#131c23]">Olympia, Washington</p>
                  <p className="text-gray-400 text-xs">Serving South Puget Sound & Surrounding Areas</p>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://maps.google.com/?q=Olympia,WA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-[#dc101c] hover:text-white rounded-full text-xs font-['Droid_Sans'] transition-all duration-300"
                >
                  <ExternalLink className="w-3 h-3" />
                  Open in Google Maps
                </a>
                <a
                  href="https://maps.google.com/?saddr=Current+Location&daddr=Olympia,WA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#131c23] text-white hover:bg-[#dc101c] rounded-full text-xs font-['Droid_Sans'] transition-all duration-300"
                >
                  <Navigation className="w-3 h-3" />
                  Get Directions
                </a>
              </div>
            </div>
            
            {/* Map Embed */}
            <div className="relative w-full h-96 sm:h-[500px] bg-gray-100">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                title="KOI Build Co Service Area - Olympia, Washington"
                onLoad={() => setIsLoaded(true)}
              />
              
              {/* Loading Overlay */}
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="w-8 h-8 border-2 border-[#dc101c] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              
              {/* Subtle Gradient Overlay at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/20 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Map Footer - Service Area Info */}
            <div className="p-5 bg-gray-50/50">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-[#dc101c]/20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#dc101c]"></div>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#dc101c]/20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#dc101c]"></div>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#dc101c]/20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#dc101c]"></div>
                    </div>
                  </div>
                  <span className="text-gray-500 text-xs">Serving 30+ cities across South Puget Sound</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize2 className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-400 text-xs">Click map to explore service area</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Cities List */}
        <div className={`mt-8 text-center transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="font-['Droid_Sans'] text-gray-400 text-xs uppercase tracking-wider mb-3">
            Popular Service Areas
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {["Olympia", "Lacey", "Tumwater", "Dupont", "Yelm", "Shelton", "Centralia", "Chehalis"].map((city, idx) => (
              <span key={idx} className="text-gray-500 text-xs hover:text-[#dc101c] transition-colors duration-300 cursor-default">
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}