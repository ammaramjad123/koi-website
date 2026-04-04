// app/contact-us/page.js (Server Component - NO 'use client')
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/contact/ContactForm'

export const metadata = {
  title: 'Contact KOI Build Co | Free Estimate Olympia WA',
  description: 'Get your free remodeling estimate today. Call (253) 348-1847 or fill out our form. Serving Olympia, Lacey, Tumwater & South Puget Sound.',
}

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Phone',
    details: '(253) 348-1847',
    href: 'tel:2533481847',
    color: 'bg-[#dc101c]',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    details: 'Chris@KOI.build',
    href: 'mailto:Chris@KOI.build',
    color: 'bg-[#131c23]',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Service Area',
    details: 'Olympia, Lacey, Tumwater & South Puget Sound',
    href: null,
    color: 'bg-[#dc101c]',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Hours',
    details: 'Mon-Fri: 9am-5pm | Sat: By appointment',
    href: null,
    color: 'bg-[#131c23]',
  },
]

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Full Screen with Background Image */}
<section className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/contact-hero.jpg')",
  }}
>
  {/* Dark Overlay for text readability */}
  <div className="absolute inset-0 bg-black/60"></div>
  
  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
    <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-4">
      Get In Touch
    </p>
    <h1 className="font-['Lato'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
      Let's Bring Your
      <br />
      <span className="text-[#dc101c]">Vision to Life</span>
    </h1>
    <p className="font-['Open_Sans'] text-gray-200 text-base sm:text-lg max-w-2xl mx-auto">
      Ready to transform your home? Contact us today for a free, no-obligation estimate.
    </p>
  </div>
</section>

      {/* Contact Info Cards */}
      <section className="pb-26 pt-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-12">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`${item.color} w-14 h-14 rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                  {item.icon}
                </div>
                <h3 className="font-['Lato'] text-lg font-bold text-[#131c23] mb-2">
                  {item.title}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="font-['Open_Sans'] text-gray-600 hover:text-[#dc101c] transition"
                  >
                    {item.details}
                  </a>
                ) : (
                  <p className="font-['Open_Sans'] text-gray-600">{item.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <div className="mb-8">
                <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-2">
                  Send a Message
                </p>
                <h2 className="font-['Lato'] text-3xl sm:text-4xl font-bold text-[#131c23]">
                  Get Your Free Estimate
                </h2>
                <p className="font-['Open_Sans'] text-gray-500 mt-2">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-64 sm:h-80 w-full bg-gray-200 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21650.68252720245!2d-122.9309788!3d47.0378741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549175b4b399eacb%3A0xdf6d2e0cee50e0e9!2sOlympia%2C%20WA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h3 className="font-['Lato'] text-2xl font-bold text-[#131c23] mb-4">
                  Why Choose KOI Build Co?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#dc101c] rounded-full mt-2"></div>
                    <p className="font-['Open_Sans'] text-gray-600">20+ years of experience</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#dc101c] rounded-full mt-2"></div>
                    <p className="font-['Open_Sans'] text-gray-600">Licensed & insured in Washington State</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#dc101c] rounded-full mt-2"></div>
                    <p className="font-['Open_Sans'] text-gray-600">Free, no-obligation estimates</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#dc101c] rounded-full mt-2"></div>
                    <p className="font-['Open_Sans'] text-gray-600">Satisfaction guaranteed</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-[#131c23] rounded-2xl p-6 sm:p-8 text-center">
                <h3 className="font-['Lato'] text-2xl font-bold text-white mb-4">
                  Need Immediate Help?
                </h3>
                <a
                  href="tel:2533481847"
                  className="inline-flex items-center gap-2 bg-[#dc101c] text-white px-6 py-3 rounded-full font-['Droid_Sans'] font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-[#131c23] transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-sm font-bold mb-2">
              FAQ
            </p>
            <h2 className="font-['Lato'] text-3xl sm:text-4xl font-bold text-[#131c23]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-['Lato'] text-xl font-bold text-[#131c23] mb-2">Do you offer free estimates?</h3>
              <p className="font-['Open_Sans'] text-gray-600">Yes! We provide free, no-obligation estimates for all projects.</p>
            </div>
            <div>
              <h3 className="font-['Lato'] text-xl font-bold text-[#131c23] mb-2">What areas do you serve?</h3>
              <p className="font-['Open_Sans'] text-gray-600">Olympia, Lacey, Tumwater, and all of South Puget Sound.</p>
            </div>
            <div>
              <h3 className="font-['Lato'] text-xl font-bold text-[#131c23] mb-2">Are you licensed and insured?</h3>
              <p className="font-['Open_Sans'] text-gray-600">Yes, KOI Build Co is fully licensed and insured in Washington State.</p>
            </div>
            <div>
              <h3 className="font-['Lato'] text-xl font-bold text-[#131c23] mb-2">How long does a typical remodel take?</h3>
              <p className="font-['Open_Sans'] text-gray-600">Timeline varies by project. We'll provide a detailed schedule during consultation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}