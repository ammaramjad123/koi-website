// app/page.js
import Hero from '@/components/home/Hero'
import ProjectTypes from '@/components/home/ProjectTypes'
import TrustedExperts from '@/components/home/TrustedExperts'
import WhatWeDoBest from '@/components/home/WhatWeDoBest'
import ProvenProcess from '@/components/home/ProvenProcess'
import CTASection from '@/components/home/CTASection'
import Testimonials from '@/components/home/Testimonials'
import TrustBadges from '@/components/home/TrustBadges'
import FAQs from '@/components/home/FAQs'
import BeforeAfter from '@/components/home/BeforeAfter'
import GoogleMap from '@/components/home/GoogleMap'

export const metadata = {
  title: 'KOI Build Co | Top Home Remodeling & Construction in Olympia, Lacey & Tumwater WA',
  description: 'Olympia\'s trusted home remodeling company. Expert kitchen & bathroom remodeling, home additions, flooring, roofing, painting & new construction. Free estimates. Licensed & insured. Serving Lacey, Tumwater & South Puget Sound. Call (253) 348-1847.',
  keywords: 'home remodeling Olympia WA, kitchen remodel Lacey, bathroom renovation Tumwater, home additions South Puget Sound, flooring contractor, roofing company, painting services, new construction, KOI Build Co',
  authors: [{ name: 'KOI Build Co' }],
  openGraph: {
    title: 'KOI Build Co | Top Home Remodeling in Olympia, Lacey & Tumwater WA',
    description: 'Olympia\'s trusted home remodeling company. Expert kitchen & bathroom remodeling, home additions, flooring, roofing & painting. Free estimates.',
    url: 'https://koi.build',
    siteName: 'KOI Build Co',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KOI Build Co | Top Home Remodeling in Olympia WA',
    description: 'Olympia\'s trusted home remodeling company. Free estimates. Call (253) 348-1847',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://koi.build',
  },
}

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectTypes />
      <Testimonials />
      <TrustBadges />
      <TrustedExperts />
      <WhatWeDoBest />
      <ProvenProcess />
      <BeforeAfter />
      <FAQs />
      <GoogleMap />
      <CTASection />
    </main>
  )
}