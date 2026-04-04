// components/layout/Footer.js
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight 
} from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const serviceLinks = [
    { name: 'Flooring', href: '/flooring' },
    { name: 'Home Additions', href: '/additions' },
    { name: 'New Construction', href: '/new-construction' },
    { name: 'Painting', href: '/painting' },
    { name: 'Roofing', href: '/roofing' },
    { name: 'Full Remodeling', href: '/services' },
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact-us' },
    { name: 'Privacy Policy', href: '/privacy' },
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1 - Brand & Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="KOI Build Co Logo"
                width={140}
                height={70}
                className="object-contain h-12 w-auto"
                priority
              />
            </Link>
            <p className="font-['Open_Sans'] text-gray-700 text-sm leading-relaxed">
              Olympia's trusted remodeling company. Transforming homes across South Puget Sound with exceptional craftsmanship and unparalleled service.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#dc101c] transition-all duration-300 group"
              >
                <FaFacebookF className="w-4 h-4 text-gray-700 group-hover:text-white transition" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#dc101c] transition-all duration-300 group"
              >
                <FaInstagram className="w-4 h-4 text-gray-700 group-hover:text-white transition" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#dc101c] transition-all duration-300 group"
              >
                <FaLinkedinIn className="w-4 h-4 text-gray-700 group-hover:text-white transition" />
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="font-['Droid_Sans'] text-[#131c23] text-sm font-bold uppercase tracking-wider mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 font-['Open_Sans'] text-gray-700 hover:text-[#dc101c] text-sm transition-all duration-300"
                  >
                    <ChevronRight className="w-3 h-3 text-[#dc101c] group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="font-['Droid_Sans'] text-[#131c23] text-sm font-bold uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 font-['Open_Sans'] text-gray-700 hover:text-[#dc101c] text-sm transition-all duration-300"
                  >
                    <ChevronRight className="w-3 h-3 text-[#dc101c] group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h4 className="font-['Droid_Sans'] text-[#131c23] text-sm font-bold uppercase tracking-wider mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#dc101c] mt-0.5 flex-shrink-0" />
                <a href="tel:2533481847" className="font-['Open_Sans'] text-gray-700 hover:text-[#dc101c] text-sm transition">
                  (253) 348-1847
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#dc101c] mt-0.5 flex-shrink-0" />
                <a href="mailto:Chris@KOI.build" className="font-['Open_Sans'] text-gray-700 hover:text-[#dc101c] text-sm transition break-all">
                  Chris@KOI.build
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#dc101c] mt-0.5 flex-shrink-0" />
                <span className="font-['Open_Sans'] text-gray-700 text-sm">
                  Olympia, WA<br />
                  Serving South Puget Sound
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#dc101c] mt-0.5 flex-shrink-0" />
                <span className="font-['Open_Sans'] text-gray-700 text-sm">
                  Mon-Fri: 9am - 5pm<br />
                  Sat: By appointment
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-['Open_Sans'] text-gray-600 text-xs text-center sm:text-left">
              © {currentYear} KOI Build Co. All rights reserved.
            </p>
            <p className="font-['Open_Sans'] text-gray-600 text-xs text-center">
              Licensed & Insured in Washington State
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="font-['Open_Sans'] text-gray-600 hover:text-[#dc101c] text-xs transition">
                Privacy Policy
              </Link>
              <Link href="/sitemap.xml" className="font-['Open_Sans'] text-gray-600 hover:text-[#dc101c] text-xs transition">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}