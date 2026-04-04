// components/layout/Navbar.js
'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone, Home, Grid, Info, Mail } from "lucide-react";

const services = [
  {
    title: "Flooring",
    path: "/flooring",
    desc: "Hardwood, tile & luxury vinyl installation",
    icon: "🪵",
  },
  {
    title: "Additions",
    path: "/additions",
    desc: "Expand your living space",
    icon: "🏗️",
  },
  {
    title: "New Construction",
    path: "/new-construction",
    desc: "Custom home building",
    icon: "🏘️",
  },
  {
    title: "Painting",
    path: "/painting",
    desc: "Interior & exterior painting",
    icon: "🎨",
  },
  {
    title: "Roofing",
    path: "/roofing",
    desc: "Repair & replacement",
    icon: "🏠",
  },
  {
    title: "Remodeling",
    path: "/services",
    desc: "Complete home transformations",
    icon: "🔨",
  },
];

const navLinks = [
  { label: "Home", path: "/", icon: <Home size={18} /> },
  { label: "Services", path: "/services", icon: <Grid size={18} />, hasDropdown: true },
  { label: "About", path: "/about", icon: <Info size={18} /> },
  { label: "Contact", path: "/contact-us", icon: <Mail size={18} /> },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const pathname = usePathname();

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20); // Changed from 40 to 20 - triggers transparency change sooner

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  // Dynamic styles based on scroll - THIS IS THE ONLY ADDITION
  const navbarBg = scrolled 
    ? "bg-white/95 backdrop-blur-md border border-gray-100 rounded-full shadow-lg" 
    : "bg-transparent";
  
  const navTextColor = scrolled
    ? "text-[#4b5563]"
    : "text-white";
  
  const buttonBg = scrolled
    ? "bg-[#131c23] hover:bg-[#dc101c]"
    : "bg-white/20 backdrop-blur-sm hover:bg-[#dc101c]";
  
  const buttonTextColor = scrolled
    ? "text-white"
    : "text-white";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="pt-3 sm:pt-4 transition-all duration-500">
            <div
              className={`relative mx-auto flex items-center justify-between transition-all duration-500 ${
                scrolled
                  ? "bg-white/95 backdrop-blur-md border border-gray-100 rounded-full shadow-lg px-4 py-2 sm:px-6 sm:py-3"
                  : "bg-transparent px-4 py-3 sm:px-6 sm:py-3" // Changed from bg-white/80 to bg-transparent
              }`}
            >
              {/* LOGO with Image */}
              <Link
                href="/"
                className="flex items-center gap-2"
              >
              <Image
  src="/logo.png"
  alt="KOI Build Co Logo"
  width={220}
  height={390}
  className="object-contain transition-all duration-300 w-38 sm:w-50 "
  priority
/>
                
              </Link>

              {/* DESKTOP NAVIGATION - LARGER TEXT */}
              <nav className="hidden items-center gap-8 lg:flex">
                {navLinks.map((link) => (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => link.hasDropdown && setOpenDropdown(true)}
                    onMouseLeave={() => link.hasDropdown && setOpenDropdown(false)}
                  >
                    <Link
                      href={link.path}
                      className={`group relative flex items-center gap-1 whitespace-nowrap text-[18px] font-medium transition-colors ${
                        isActive(link.path)
                          ? "text-[#dc101c]"
                          : `${navTextColor} hover:text-[#dc101c]`
                      }`}
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            openDropdown ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>

                    {/* SERVICES DROPDOWN */}
                    {link.hasDropdown && (
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[680px] max-w-[90vw] transition-all duration-300 ${
                          openDropdown
                            ? "pointer-events-auto translate-y-0 opacity-100"
                            : "pointer-events-none -translate-y-2 opacity-0"
                        }`}
                      >
                        <div className="rounded-2xl bg-white p-6 shadow-xl border border-gray-100">
                          <div className="grid grid-cols-2 gap-4">
                            {services.map((item, i) => (
                              <Link
                                key={i}
                                href={item.path}
                                className="group flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-gray-50"
                              >
                                <div className="text-2xl">{item.icon}</div>
                                <div>
                                  <h4 className="font-semibold text-[#131c23] group-hover:text-[#dc101c] transition text-[16px]">
                                    {item.title}
                                  </h4>
                                  <p className="text-sm text-gray-500">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                            <Link
                              href="/services"
                              className="text-sm text-[#dc101c] hover:underline font-medium"
                            >
                              View All Services →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* RIGHT SIDE - PHONE BUTTON - LARGER */}
              <a
                href="tel:2533481847"
                className={`hidden lg:flex items-center gap-2 px-6 py-3 rounded-full transition font-['Open_Sans_Condensed'] font-bold uppercase tracking-wider text-base ${buttonBg} ${buttonTextColor}`}
              >
                <Phone size={18} />
                (253) 348-1847
              </a>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMobileOpen(true)}
                className={`flex h-10 w-10 items-center justify-center rounded-full transition lg:hidden ${navTextColor}`}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div className="relative h-full w-full overflow-y-auto px-4 pt-4 pb-8">
          <div className="mx-auto min-h-[calc(100vh-2rem)] max-w-2xl rounded-2xl bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setMobileOpen(false)}
              >
               <Image
  src="/logo.png"
  alt="KOI Build Co Logo"
  width={102}
  height={102}
  className="object-contain w-44 sm:w-28 h-auto"
/>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition"
              >
                <X size={22} />
              </button>
            </div>

            {/* Navigation Links - LARGER TEXT FOR MOBILE */}
            <div className="p-5">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className={`px-4 py-4 rounded-xl text-xl font-medium transition ${
                    pathname === "/"
                      ? "bg-[#dc101c]/10 text-[#dc101c]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>

                {/* Services Dropdown in Mobile */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`w-full flex items-center justify-between px-4 py-4 rounded-xl text-xl font-medium transition ${
                      pathname.includes("/services") || pathname.includes("/flooring") || pathname.includes("/roofing")
                        ? "bg-[#dc101c]/10 text-[#dc101c]"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    Services
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  
                  {mobileServicesOpen && (
                    <div className="ml-4 mt-3 space-y-2 border-l-2 border-gray-200 pl-4">
                      {services.map((item, i) => (
                        <Link
                          key={i}
                          href={item.path}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition text-base"
                          onClick={() => setMobileOpen(false)}
                        >
                          <span className="text-2xl">{item.icon}</span>
                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/about"
                  className={`px-4 py-4 rounded-xl text-xl font-medium transition ${
                    pathname === "/about"
                      ? "bg-[#dc101c]/10 text-[#dc101c]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  About
                </Link>

                <Link
                  href="/contact-us"
                  className={`px-4 py-4 rounded-xl text-xl font-medium transition ${
                    pathname === "/contact-us"
                      ? "bg-[#dc101c]/10 text-[#dc101c]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </Link>
              </div>

              {/* Mobile CTA Button - LARGER */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href="tel:2533481847"
                  className="flex items-center justify-center gap-2 w-full bg-[#131c23] text-white px-5 py-4 rounded-full hover:bg-[#dc101c] transition font-semibold text-lg"
                >
                  <Phone size={20} />
                  Call (253) 348-1847
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}