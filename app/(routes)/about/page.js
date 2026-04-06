// app/about/page.js
import Link from 'next/link'
import Image from 'next/image'
import { 
  CheckCircle, 
  Award, 
  Users, 
  Calendar, 
  Hammer, 
  Heart,
  Star,
  ArrowRight,
  Quote
} from 'lucide-react'

export const metadata = {
  title: 'About KOI Build Co | Olympia\'s Trusted Remodeling Experts',
  description: 'Learn about KOI Build Co\'s story, mission, and commitment to quality craftsmanship. Family-owned, locally operated since 2004.',
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      
     {/* ========== HERO SECTION ========== */}
<section
  className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/about-hero.jpg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/67"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
    <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-4">
      Our Story
    </p>

    <h1 className="font-['Lato'] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
      Building Dreams
      <br />
      <span className="text-[#dc101c]">One Home at a Time</span>
    </h1>

    <p className="font-['Open_Sans'] text-gray-200 text-base sm:text-lg max-w-2xl mx-auto">
      For over two decades, KOI Build Co has been the trusted name in home remodeling 
      across South Puget Sound — delivering craftsmanship, integrity, and excellence.
    </p>
  </div>
</section>

{/* ========== OUR PHILOSOPHY SECTION ========== */}
<section className="py-16 sm:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-3">
          Our Philosophy
        </p>
        <h2 className="font-['Lato'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131c23] mb-6">
          Built on Integrity.
          <br />
          <span className="text-[#dc101c]">Driven by Excellence.</span>
        </h2>
        <p className="font-['Open_Sans'] text-gray-600 text-lg leading-relaxed mb-6">
          As the owner of KOI Build Co, I approach every project like it’s my own home—no shortcuts, clear communication, and craftsmanship that holds up for decades.
        </p>
        <p className="font-['Open_Sans'] text-gray-500 text-base leading-relaxed mb-8">
          My philosophy is simple: do it right the first time, be honest about costs and timelines, and sweat the details so you don’t have to. I’m obsessed with process and planning, but I never forget that we’re ultimately building spaces for real families, not just floor plans. Personally overseeing each project from design to final walkthrough.
        </p>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#dc101c]" />
            <span className="text-sm text-gray-700">20+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#dc101c]" />
            <span className="text-sm text-gray-700">500+ Projects Complete</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#dc101c]" />
            <span className="text-sm text-gray-700">100% Satisfaction</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
          
          {/* ✅ Actual Image Added */}
          <Image
            src="/owner-photo.jpg"
            alt="Owner Picture"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-tr from-[#dc101c]/0 to-transparent"></div>
        </div>

        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#dc101c] rounded-full opacity-10 -z-10"></div>
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#131c23] rounded-full opacity-5 -z-10"></div>
      </div>

    </div>
  </div>
</section>

      
      {/* ========== OUR VALUES SECTION ========== */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-2">
              What We Stand For
            </p>
            <h2 className="font-['Lato'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131c23]">
              Our Core <span className="text-[#dc101c]">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Hammer className="w-8 h-8" />,
                title: "Quality Craftsmanship",
                desc: "We never cut corners. Every project receives the same attention to detail we'd give our own home."
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Client First",
                desc: "Your vision guides everything we do. We listen, communicate, and deliver what you want."
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "On-Time Delivery",
                desc: "We respect your time and schedule, completing projects when we promise — no excuses."
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#dc101c]/10 flex items-center justify-center text-[#dc101c] mb-5 group-hover:bg-[#dc101c] group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="font-['Lato'] text-xl font-bold text-[#131c23] mb-3">
                  {value.title}
                </h3>
                <p className="font-['Open_Sans'] text-gray-500 text-sm">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TEAM SECTION ========== */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-2">
              The Faces Behind KOI
            </p>
            <h2 className="font-['Lato'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131c23]">
              Meet Your <span className="text-[#dc101c]">Team</span>
            </h2>
            <p className="font-['Open_Sans'] text-gray-500 text-base max-w-2xl mx-auto mt-4">
              Passionate professionals dedicated to bringing your vision to life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Christopher Johlfs",
                role: "Founder & Lead Designer",
                bio: "With over 20 years in the industry, Christopher brings passion and precision to every project.",
                image: "/team/christopher.jpg"
              },
              {
                name: "Sarah Johnson",
                role: "Project Manager",
                bio: "Sarah ensures every project runs smoothly, on time, and exceeds expectations.",
                image: "/team/sarah.jpg"
              },
              {
                name: "Mike Peterson",
                role: "Lead Craftsman",
                bio: "Mike's attention to detail and craftsmanship is what sets KOI apart.",
                image: "/team/mike.jpg"
              }
            ].map((member, idx) => (
              <div key={idx} className="group text-center">
                <div className="relative mb-5 overflow-hidden rounded-2xl">
                  <div className="bg-gray-200 h-80 rounded-2xl flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                    Team Photo
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl"></div>
                </div>
                <h3 className="font-['Lato'] text-xl font-bold text-[#131c23] mb-1">
                  {member.name}
                </h3>
                <p className="font-['Droid_Sans'] text-[#dc101c] text-sm mb-2">
                  {member.role}
                </p>
                <p className="font-['Open_Sans'] text-gray-500 text-sm px-4">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIAL SECTION ========== */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Quote className="w-16 h-16 text-[#dc101c]/20 absolute -top-6 -left-6" />
              <div className="bg-white rounded-2xl p-8 shadow-lg relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#dc101c] text-[#dc101c]" />
                  ))}
                </div>
                <p className="font-['Open_Sans'] text-gray-600 text-lg italic mb-6">
                  "KOI Build Co transformed our outdated kitchen into the heart of our home. 
                  Their team was professional, communicative, and the quality is outstanding. 
                  We couldn't be happier!"
                </p>
                <div>
                  <p className="font-['Lato'] font-bold text-[#131c23]">Michael & Karen T.</p>
                  <p className="text-gray-400 text-sm">Olympia, WA</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-3">
                Don't Just Take Our Word
              </p>
              <h2 className="font-['Lato'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131c23] mb-5">
                What Our
                <br />
                <span className="text-[#dc101c]">Homeowners Say</span>
              </h2>
              <p className="font-['Open_Sans'] text-gray-500 text-base mb-6">
                We've had the privilege of transforming hundreds of homes across South Puget Sound. 
                But don't just take our word for it — hear from the families we've served.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 font-['Droid_Sans'] text-[#dc101c] text-sm font-bold hover:gap-3 transition-all duration-300 group"
              >
                Ready to Transform Your Home?
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
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