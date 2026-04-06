// components/home/FAQs.js
'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: "How long does a typical remodeling project take?",
    answer: "Project timelines vary based on scope and complexity. A kitchen remodel typically takes 4-6 weeks, while a full home renovation may take 8-12 weeks. During your free consultation, we'll provide a detailed timeline specific to your project."
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes! We provide free, no-obligation estimates for all projects. We'll visit your home, discuss your vision, take measurements, and provide a detailed quote with transparent pricing."
  },
  {
    question: "Are you licensed and insured in Washington State?",
    answer: "Absolutely. KOI Build Co is fully licensed, bonded, and insured in Washington State. We carry comprehensive liability insurance and workers' compensation for your peace of mind."
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve Olympia, Lacey, Tumwater, and all of South Puget Sound. Contact us to see if we serve your specific location."
  },
  {
    question: "Do you handle permits and inspections?",
    answer: "Yes, we manage all necessary permits and coordinate with local building departments. We ensure every project meets or exceeds code requirements."
  },
  {
    question: "What is your payment schedule?",
    answer: "We offer flexible payment plans. Typically, we require a deposit to begin, with progress payments tied to project milestones. Final payment is due upon completion and your satisfaction."
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Yes, we stand behind our craftsmanship with a 2-year workmanship warranty on all projects. Materials also carry manufacturer warranties."
  },
  {
    question: "How do I get started?",
    answer: "Simply call us at (253) 348-1847 or fill out our contact form. We'll schedule a free consultation to discuss your project and provide an estimate."
  }
]

export default function FAQs() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState(null)
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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-white overflow-hidden">
      {/* 80% width on desktop, full width on mobile */}
      <div className="w-full lg:w-4/5 lg:mx-auto px-6 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-4 py-1.5 mb-4">
            <HelpCircle className="w-4 h-4 text-[#dc101c]" />
            <span className="font-['Droid_Sans'] text-[#dc101c] uppercase tracking-[3px] text-xs font-bold">
              Got Questions?
            </span>
          </div>
          <h2 className="font-['Lato'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#131c23] mb-4">
            Frequently Asked <span className="text-[#dc101c]">Questions</span>
          </h2>
          <p className="font-['Open_Sans'] text-gray-500 text-base max-w-2xl mx-auto">
            Everything you need to know about working with KOI Build Co.
          </p>
        </div>

        {/* FAQs - Vertical Stack (One after another) */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${Math.min(idx * 50, 300)}ms` }}
            >
              {/* Glass Card with Number */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-300/50 hover:border-[#dc101c]/20 transition-all duration-300 overflow-hidden">
                
                {/* Question Button with Number */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center gap-4 p-5 text-left cursor-pointer group"
                >
                  {/* Number - Visible on all screens */}
                  <span className="w-8 h-8 rounded-full bg-gray-100 text-[#131c23] text-sm font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-[#dc101c] group-hover:text-white transition-all duration-300">
                    {idx + 1}
                  </span>
                  
                  <span className="font-['Lato'] text-base font-semibold text-[#131c23] group-hover:text-[#dc101c] transition-colors duration-300 flex-1 pr-4">
                    {faq.question}
                  </span>
                  
                  <div className={`w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                    openIndex === idx ? 'bg-[#dc101c] text-white' : 'group-hover:bg-gray-200'
                  }`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`} />
                  </div>
                </button>
                
                {/* Answer Panel */}
                <div className={`transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-5 pb-5 pt-0 pl-[68px]">
                    <div className="w-12 h-px bg-gradient-to-r from-[#dc101c] to-transparent mb-3"></div>
                    <p className="font-['Open_Sans'] text-gray-500 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions Bar */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-5 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#dc101c]/10 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-[#dc101c]" />
              </div>
              <div>
                <p className="font-['Lato'] font-bold text-[#131c23]">Still have questions?</p>
                <p className="text-gray-500 text-xs">We're here to help</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:2533481847"
                className="px-5 py-2.5 bg-[#131c23] text-white rounded-full font-['Droid_Sans'] text-sm font-bold hover:bg-[#dc101c] transition-all duration-300"
              >
                Call Us
              </a>
              <a
                href="/contact-us"
                className="px-5 py-2.5 border border-[#dc101c] text-[#dc101c] rounded-full font-['Droid_Sans'] text-sm font-bold hover:bg-[#dc101c] hover:text-white transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}