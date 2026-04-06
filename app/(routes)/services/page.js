// app/services/page.js
import Link from 'next/link'
import Image from 'next/image'
import { 
  Hammer, 
  Home, 
  PaintRoller, 
  Ruler, 
  Wrench, 
  HardDrive,
  CheckCircle,
  Clock,
  Shield,
  ThumbsUp,
  ArrowRight, 
   MapPin,        // ← Add this
  ChevronRight   // ← Add this
} from 'lucide-react'

export const metadata = {
  title: 'Home Remodeling Services Olympia WA | KOI Build Co',
  description: 'Full-service remodeling company in Olympia, Lacey & Tumwater. Kitchen, bathroom, flooring, additions, painting & roofing. Free estimates. (253) 348-1847',
}

const services = [
  {
    title: 'Flooring',
    description: 'Hardwood, luxury vinyl, tile, laminate & carpet installation. Expert craftsmanship for beautiful, durable floors.',
    icon: <HardDrive className="w-8 h-8" />,
    href: '/flooring',
    features: ['Hardwood Installation', 'Luxury Vinyl Plank', 'Tile & Stone', 'Carpet Replacement'],
    image: '/services-flooring.jpg',
    color: 'from-amber-600/20',
  },
  {
    title: 'Home Additions',
    description: 'Expand your living space with custom room additions, sunrooms, master suites, and bonus rooms.',
    icon: <Home className="w-8 h-8" />,
    href: '/additions',
    features: ['Room Additions', 'Sunrooms', 'Master Suites', 'Bonus Rooms'],
    image: '/services-additions.jpg',
    color: 'from-emerald-600/20',
  },
  {
    title: 'New Construction',
    description: 'Custom home building from the ground up. Let us build your dream home with quality materials and expert design.',
    icon: <Ruler className="w-8 h-8" />,
    href: '/new-construction',
    features: ['Custom Homes', 'Design-Build', 'Project Management', 'Quality Assurance'],
    image: '/services-construction.jpg',
    color: 'from-blue-600/20',
  },
  {
    title: 'Painting',
    description: 'Interior and exterior painting services. Transform your home with professional color consultation and flawless finishes.',
    icon: <PaintRoller className="w-8 h-8" />,
    href: '/painting',
    features: ['Interior Painting', 'Exterior Painting', 'Cabinet Painting', 'Color Consultation'],
    image: '/services-painting.jpg',
    color: 'from-rose-600/20',
  },
  {
    title: 'Roofing',
    description: 'Professional roofing repair, replacement, and installation. Protect your home with durable, weather-resistant roofing.',
    icon: <Hammer className="w-8 h-8" />,
    href: '/roofing',
    features: ['Roof Repair', 'Roof Replacement', 'New Installation', 'Emergency Services'],
    image: '/services-roofing.jpg',
    color: 'from-orange-600/20',
  },
  {
    title: 'Full Remodeling',
    description: 'Complete home transformations. From kitchen and bathroom remodels to whole-house renovations.',
    icon: <Wrench className="w-8 h-8" />,
    href: '/services',
    features: ['Kitchen Remodel', 'Bathroom Remodel', 'Whole-House', 'Basement Finishing'],
    image: '/services-remodeling.jpg',
    color: 'from-purple-600/20',
  },
]

const stats = [
  { value: '20+', label: 'Years Experience', icon: <Clock className="w-5 h-5" /> },
  { value: '500+', label: 'Projects Completed', icon: <CheckCircle className="w-5 h-5" /> },
  { value: '100%', label: 'Licensed & Insured', icon: <Shield className="w-5 h-5" /> },
  { value: '4.9', label: 'Client Rating', icon: <ThumbsUp className="w-5 h-5" /> },
]

const steps = [
  { number: '01', title: 'Free Consultation', description: 'We listen to your vision and provide honest assessment and quote.' },
  { number: '02', title: 'Design & Planning', description: 'Our team creates detailed plans, 3D renderings, and handles permits.' },
  { number: '03', title: 'Construction & Completion', description: 'Skilled craftsmen bring your vision to life with regular updates.' },
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      
{/* ========== HERO SECTION ========== */}
<section className="relative text-white min-h-screen flex items-center overflow-hidden">
  
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/hero-bg.jpg')" }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-[#131c23]/75"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center w-full">
    
    <p className="pt-12 font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-4">
      What We Offer
    </p>

    <h1 className="font-['Lato'] text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
      Comprehensive Home
      <br />
      <span className="text-[#dc101c]">Remodeling Services</span>
    </h1>

    <p className="font-['Open_Sans'] text-gray-200 text-base sm:text-lg max-w-2xl mx-auto">
      From flooring to full home transformations, KOI Build Co delivers exceptional 
      craftsmanship and personalized service for every project.
    </p>

  </div>
</section>

      {/* ========== SERVICES GRID SECTION ========== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-2">
              Our Expertise
            </p>
            <h2 className="font-['Lato'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131c23]">
              Services We Provide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
              <div className="relative h-56 overflow-hidden">
  <Image
    src={service.image}
    alt={service.title}
    fill
    className="object-cover group-hover:scale-110 transition-transform duration-700"
    priority={index === 0}
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>

  <div className="absolute bottom-4 left-4 z-20">
    <div className="bg-[#dc101c] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg">
      {service.icon}
    </div>
  </div>
</div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-['Lato'] text-xl font-bold text-[#131c23] mb-2 group-hover:text-[#dc101c] transition">
                    {service.title}
                  </h3>
                  <p className="font-['Open_Sans'] text-gray-500 text-sm mb-4">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3 text-[#dc101c]" />
                        <span className="font-['Open_Sans'] text-gray-600 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 font-['Droid_Sans'] text-[#dc101c] text-sm font-bold hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#dc101c]/10 flex items-center justify-center text-[#dc101c]">
                    {stat.icon}
                  </div>
                </div>
                <div className="font-['Lato'] text-3xl sm:text-4xl font-bold text-[#131c23]">
                  {stat.value}
                </div>
                <div className="font-['Open_Sans'] text-gray-500 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* ========== RESULTS-DRIVEN SERVICES ========== */}
<section className="py-16 sm:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-2">
        Transformations That Speak
      </p>
      <h2 className="font-['Lato'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131c23]">
        See the <span className="text-[#dc101c]">Difference</span> We Make
      </h2>
      <p className="font-['Open_Sans'] text-gray-500 text-base max-w-2xl mx-auto mt-4">
        Real projects. Real results. Real homeowners who trusted us.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Modern Kitchen Transformation",
          location: "Olympia, WA",
          result: "Complete kitchen remodel with custom cabinetry",
          timeline: "Completed in 4 weeks",
          image: "/kitchen-before-after.jpg",
          stats: "+35% Home Value"
        },
        {
          title: "Luxury Bathroom Addition",
          location: "Lacey, WA", 
          result: "Master suite with spa-inspired bathroom",
          timeline: "Completed in 3 weeks",
          image: "/bathroom-before-after.jpg",
          stats: "100% Satisfaction"
        },
        {
          title: "Whole-Home Renovation",
          location: "Tumwater, WA",
          result: "Complete interior and exterior remodel",
          timeline: "Completed in 8 weeks",
          image: "/whole-home-before-after.jpg",
          stats: "Award-Winning Design"
        }
      ].map((project, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden rounded-2xl bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <div className="aspect-[4/3] relative overflow-hidden">

            {/* ✅ ACTUAL IMAGE */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              priority={idx === 0}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <p className="text-white/80 text-xs font-['Droid_Sans'] uppercase tracking-wider">
                {project.location}
              </p>

              <h3 className="text-white text-xl font-bold font-['Lato'] mt-1">
                {project.title}
              </h3>

              <p className="text-gray-200 text-sm mt-2">
                {project.result}
              </p>

              <div className="flex items-center justify-between mt-4">
                <span className="text-[#dc101c] text-sm font-bold">
                  {project.timeline}
                </span>

                <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white text-xs font-bold">
                  {project.stats}
                </span>
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  </div>
</section>




{/* ========== HYPERLOCAL SERVICE MAP ========== */}
<section className="py-16 sm:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
    
    {/* Heading */}
    <div className="text-center mb-12">
      <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-2">
        We Come to You
      </p>

      <h2 className="font-['Lato'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131c23]">
        Service Areas Across
        <br />
        <span className="text-[#dc101c]">South Puget Sound</span>
      </h2>

      <p className="font-['Open_Sans'] text-gray-500 text-base max-w-2xl mx-auto mt-4">
        Proudly serving homeowners throughout Washington's beautiful South Sound region.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Map Section */}
      <div className="lg:col-span-2 bg-gray-100 rounded-2xl overflow-hidden h-96 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172158.4179026828!2d-122.97829075!3d47.0378741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549175b4b399eacb%3A0xdf6d2e0cee50e0e9!2sOlympia%2C%20WA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </div>

      {/* Cities List */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <h3 className="font-['Lato'] text-xl font-bold text-[#131c23] mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-[#dc101c]" />
          Cities We Serve
        </h3>

        <div className="grid grid-cols-2 gap-2">
          {[
            "Olympia", "Lacey", "Tumwater", "Dupont", "Yelm", "Shelton",
            "Roy", "Tenino", "Rainier", "Centralia", "Chehalis", "Winlock"
          ].map((city, idx) => (
            <Link
              key={idx}
              href="/contact-us"
              className="group flex items-center gap-2 text-gray-600 hover:text-[#dc101c] text-sm py-1.5 transition"
            >
              <ChevronRight className="w-3 h-3 text-[#dc101c] opacity-0 group-hover:opacity-100 transition" />
              {city}
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 pt-4 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-xs">
            Don't see your city?{" "}
            <Link
              href="/contact-us"
              className="text-[#dc101c] font-semibold hover:underline"
            >
              Contact Us
            </Link>{" "}
            — we may still serve your area!
          </p>
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
    style={{ backgroundImage: "url('/cta-banner2.jpg')" }}
  >
    {/* Reduced overlay opacity (was /90) */}
    <div className="absolute inset-0 bg-[#131c23]/85"></div>
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