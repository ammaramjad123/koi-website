// components/contact/ContactForm.js
'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

const services = [
  'Select a service',
  'Flooring',
  'Home Additions',
  'New Construction',
  'Painting',
  'Roofing',
  'Full Remodeling',
  'Other',
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // TODO: Integrate EmailJS here
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      })
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="font-['Droid_Sans'] text-[#131c23] text-sm font-bold mb-2 block">
          Full Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#dc101c] focus:ring-1 focus:ring-[#dc101c] transition font-['Open_Sans']"
          placeholder="John Smith"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="font-['Droid_Sans'] text-[#131c23] text-sm font-bold mb-2 block">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#dc101c] focus:ring-1 focus:ring-[#dc101c] transition font-['Open_Sans']"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="font-['Droid_Sans'] text-[#131c23] text-sm font-bold mb-2 block">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#dc101c] focus:ring-1 focus:ring-[#dc101c] transition font-['Open_Sans']"
            placeholder="(253) 348-1847"
          />
        </div>
      </div>

      <div>
        <label className="font-['Droid_Sans'] text-[#131c23] text-sm font-bold mb-2 block">
          Service Interested In *
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#dc101c] focus:ring-1 focus:ring-[#dc101c] transition font-['Open_Sans'] bg-white"
        >
          {services.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="font-['Droid_Sans'] text-[#131c23] text-sm font-bold mb-2 block">
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#dc101c] focus:ring-1 focus:ring-[#dc101c] transition font-['Open_Sans'] resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#dc101c] text-white py-4 rounded-xl font-['Droid_Sans'] font-bold uppercase tracking-wider text-sm hover:bg-[#131c23] transition-all duration-300 flex items-center justify-center gap-2 group"
      >
        {isSubmitting ? (
          'Sending...'
        ) : (
          <>
            SEND MESSAGE
            <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>

      {submitStatus === 'success' && (
        <div className="bg-green-50 text-green-700 p-4 rounded-xl font-['Open_Sans'] text-sm text-center">
          Thank you! We'll contact you shortly.
        </div>
      )}
    </form>
  )
}