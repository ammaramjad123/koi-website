// app/page.js
import Hero from '@/components/home/Hero'
import ProjectTypes from '@/components/home/ProjectTypes'
import TrustedExperts from '@/components/home/TrustedExperts'
import WhatWeDoBest from '@/components/home/WhatWeDoBest'
import ProvenProcess from '@/components/home/ProvenProcess'
import CTASection from '@/components/home/CTASection'

export const metadata = {
  title: 'Top Remodeling Company in Olympia WA | KOI Build Co',
  description: 'Transform your home with KOI Build Co, Olympia\'s trusted luxury remodeling company.',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectTypes />
      <TrustedExperts />
       <WhatWeDoBest />
      <ProvenProcess />
      <CTASection />
    </main>
  )
}