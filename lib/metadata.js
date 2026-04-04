// lib/metadata.js - MASTER SEO CONFIGURATION
// All SEO settings are controlled from this ONE file

// Default metadata used across the ENTIRE website
export const defaultMetadata = {
  // BASIC SEO
  title: 'KOI Build Co | Premium Home Remodeling Olympia WA',
  description: 'Olympia\'s trusted luxury remodeling company. Kitchen, bathroom, flooring, additions & more. Free estimates. (253) 348-1847',
  keywords: 'remodeling Olympia WA, home renovation South Puget Sound, kitchen remodel, bathroom remodel, flooring contractor, home additions Lacey, roofing Tumwater, custom homes, painting services, KOI Build Co',
  
  // AUTHOR & VIEWPORT
  authors: [{ name: 'KOI Build Co', url: 'https://koi.build' }],
  creator: 'KOI Build Co',
  publisher: 'KOI Build Co',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  
  // ROBOTS - Controls how search engines crawl
  robots: {
    index: true,      // Allow indexing
    follow: true,     // Follow links
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // CANONICAL - Prevents duplicate content issues
  alternates: {
    canonical: 'https://koi.build',
  },
  
  // OPEN GRAPH (for Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://koi.build',
    siteName: 'KOI Build Co',
    title: 'KOI Build Co | Olympia WA Remodeling',
    description: 'Transform your home with Olympia\'s trusted remodeling experts. Kitchen, bathroom, flooring, additions & more.',
    images: [
      {
        url: 'https://koi.build/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KOI Build Co Luxury Home Remodeling',
      },
    ],
    emails: ['Chris@KOI.build'],
    phoneNumbers: ['+12533481847'],
  },
  
  // TWITTER (for X/Twitter sharing)
  twitter: {
    card: 'summary_large_image',
    site: '@koibuildco',
    creator: '@koibuildco',
    title: 'KOI Build Co | Olympia WA Remodeling',
    description: 'Transform your home with Olympia\'s trusted remodeling experts.',
    images: ['https://koi.build/images/twitter-image.jpg'],
  },
  
  // VERIFICATION (for Google Search Console & Bing)
  verification: {
    google: 'your-google-verification-code',  // <-- REPLACE with your actual code after deployment
    yandex: 'your-yandex-verification-code', // <-- Optional
    yahoo: 'your-yahoo-verification-code',   // <-- Optional
    other: {
      me: ['Chris@KOI.build', 'https://koi.build'],
    },
  },
  
  // APPLE & PWA (for mobile users)
  appleWebApp: {
    title: 'KOI Build Co',
    statusBarStyle: 'black-translucent',
    capable: true,
  },
  
  // ADDITIONAL META TAGS
  category: 'Home Improvement',
  classification: 'Home Remodeling Contractor',
  other: {
    'geo.region': 'US-WA',
    'geo.placename': 'Olympia',
    'geo.position': '47.0379;-122.9007',
    'ICBM': '47.0379, -122.9007',
  },
}

// PAGE-SPECIFIC METADATA - Each page gets its OWN optimized SEO
export const pageMetadata = {
  // HOMEPAGE - Most important
  home: {
    title: 'Top Remodeling Company in Olympia WA | KOI Build Co',
    description: 'Transform your home with KOI Build Co, Olympia\'s trusted remodeling company. Expert in renovations, additions, roofing, flooring & more. Free estimates since 2004.',
    keywords: 'remodeling company Olympia WA, home renovation, kitchen remodel, bathroom remodel, contractor',
  },
  
  // SERVICES OVERVIEW
  services: {
    title: 'Home Remodeling Services Olympia WA | KOI Build Co',
    description: 'Full-service remodeling company in Olympia, Lacey & Tumwater. Kitchen, bathroom, flooring, additions, painting & roofing. Free estimates. (253) 348-1847',
    keywords: 'remodeling services Olympia, home renovation South Puget Sound, general contractor',
  },
  
  // FLOORING - High volume local search term
  flooring: {
    title: 'Flooring Installation Olympia WA | Hardwood, Tile, Vinyl | KOI Build Co',
    description: 'Professional flooring services in South Puget Sound. Hardwood, luxury vinyl plank, tile, laminate & carpet. Free in-home estimates. (253) 348-1847',
    keywords: 'flooring Olympia WA, hardwood installation, vinyl plank flooring, tile installation, carpet replacement',
  },
  
  // ADDITIONS - High value service
  additions: {
    title: 'Home Additions Olympia WA | Room Extensions & Sunrooms | KOI Build Co',
    description: 'Expand your living space with custom home additions in Olympia, Lacey & Tumwater. Sunrooms, master suites, bonus rooms, garage conversions. Free consultation.',
    keywords: 'home additions Olympia WA, room additions, sunroom builder, master suite addition, bonus room',
  },
  
  // NEW CONSTRUCTION
  'new-construction': {
    title: 'New Home Construction Olympia WA | Custom Home Builder | KOI Build Co',
    description: 'Custom home builder serving South Puget Sound. From design to completion, we build your dream home. Luxury new construction. Free consultation.',
    keywords: 'new home construction Olympia WA, custom home builder, luxury home builder, residential construction',
  },
  
  // PAINTING
  painting: {
    title: 'Painting Services Olympia WA | Interior & Exterior | KOI Build Co',
    description: 'Professional painting services in Olympia, Lacey & Tumwater. Interior, exterior, cabinet painting, color consultation. Free estimates. (253) 348-1847',
    keywords: 'painting Olympia WA, interior painter, exterior painting, house painter, cabinet painting',
  },
  
  // ROOFING
  roofing: {
    title: 'Roofing Contractor Olympia WA | Repair & Replacement | KOI Build Co',
    description: 'Licensed roofing contractor serving South Puget Sound. Roof repair, replacement, installation. Asphalt, metal, tile roofing. Free estimates. (253) 348-1847',
    keywords: 'roofing Olympia WA, roof repair, roof replacement, roofing contractor, asphalt shingle, metal roof',
  },
  
  // CONTACT
  contact: {
    title: 'Contact KOI Build Co | Free Estimate Olympia WA',
    description: 'Get your free remodeling estimate today. Call (253) 348-1847 or fill out our form. Serving Olympia, Lacey, Tumwater & all of South Puget Sound.',
    keywords: 'contact KOI Build Co, remodeling estimate Olympia, free quote, home renovation consultation',
  },
  
  // PRIVACY
  privacy: {
    title: 'Privacy Policy | KOI Build Co',
    description: 'Read KOI Build Co\'s privacy policy to understand how we collect, use, and protect your personal information.',
    keywords: 'privacy policy, data protection, terms of service',
    robots: { index: false, follow: true },  // Don't index privacy page
  },
}

// HELPER FUNCTION - Use this in your page.js files
// Example: export const metadata = getPageMetadata('flooring')
export function getPageMetadata(pageName) {
  const specific = pageMetadata[pageName] || pageMetadata.services
  return {
    ...defaultMetadata,
    title: specific.title,
    description: specific.description,
    keywords: specific.keywords || defaultMetadata.keywords,
    alternates: {
      canonical: `https://koi.build/${pageName === 'home' ? '' : pageName}`,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: specific.title,
      description: specific.description,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: specific.title,
      description: specific.description,
    },
    robots: specific.robots || defaultMetadata.robots,
  }
}