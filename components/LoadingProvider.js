// components/LoadingProvider.js
'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function LoadingProvider({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    // Preload all important pages on first load
    const pages = ['/', '/services', '/flooring', '/additions', '/painting', '/roofing', '/contact-us']
    pages.forEach(page => {
      // Prefetch each page in background
      fetch(page).catch(() => {})
    })
  }, [])

  return <>{children}</>
}