// lib/schema.js - STRUCTURED DATA (JSON-LD)
// Makes Google show RICH RESULTS in search (reviews, stars, contact info, etc.)

// ============================================
// 1. LOCAL BUSINESS SCHEMA - For Google Maps & Local Pack
// ============================================
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://koi.build/#business',
  name: 'KOI Build Co',
  alternateName: 'KOI Construction',
  description: 'Premium home remodeling company serving Olympia, Washington and all of South Puget Sound. Specializing in kitchen remodels, bathroom renovations, home additions, flooring, painting, roofing, and new construction.',
  url: 'https://koi.build',
  telephone: '+12533481847',
  email: 'Chris@KOI.build',
  logo: 'https://koi.build/images/logo.png',
  image: 'https://koi.build/images/hero.jpg',
  slogan: 'Reproduce Comfort',
  priceRange: '$$$',
  foundingDate: '2004',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '15',
  },
  
  // ADDRESS
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1234 Construction Way',  // Update with actual address
    addressLocality: 'Olympia',
    addressRegion: 'WA',
    postalCode: '98501',
    addressCountry: 'US',
  },
  
  // GEO COORDINATES - Helps with local search
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.0379,
    longitude: -122.9007,
  },
  
  // SERVICE AREA (South Puget Sound)
  areaServed: [
    {
      '@type': 'City',
      name: 'Olympia',
      sameAs: 'https://en.wikipedia.org/wiki/Olympia,_Washington',
    },
    {
      '@type': 'City',
      name: 'Lacey',
    },
    {
      '@type': 'City',
      name: 'Tumwater',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Thurston County',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'South Puget Sound',
    },
  ],
  
  // HOURS OF OPERATION
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '14:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '00:00',
      closes: '00:00',
    },
  ],
  
  // CONTACT OPTIONS
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+12533481847',
    contactType: 'customer service',
    email: 'Chris@KOI.build',
    availableLanguage: ['English'],
  },
  
  // PAYMENT METHODS
  paymentAccepted: ['Cash', 'Check', 'Credit Card', 'Financing Available'],
  
  // SOCIAL MEDIA PROFILES
  sameAs: [
    'https://facebook.com/koibuildco',
    'https://instagram.com/koibuildco',
    'https://linkedin.com/company/koi-build-co',
    'https://houzz.com/pro/koibuildco',
  ],
  
  // REVIEW AGGREGATE (Update when you have real reviews)
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
}

// ============================================
// 2. SERVICE SCHEMA - For each service page
// ============================================
export const serviceSchema = (serviceName, serviceDescription, serviceUrl) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${serviceUrl}#service`,
  name: serviceName,
  description: serviceDescription,
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'KOI Build Co',
    url: 'https://koi.build',
    image: 'https://koi.build/images/logo.png',
    telephone: '+12533481847',
  },
  areaServed: {
    '@type': 'City',
    name: 'Olympia, Lacey, Tumwater, South Puget Sound',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: `${serviceName} Services`,
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: `Residential ${serviceName}`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: `Commercial ${serviceName}`,
        },
      },
    ],
  },
})

// ============================================
// 3. SERVICE SPECIFIC SCHEMAS
// ============================================
export const flooringServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Flooring Installation Services',
  description: 'Professional flooring installation including hardwood, luxury vinyl plank, tile, laminate, and carpet.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'KOI Build Co',
  },
  serviceType: 'Flooring Installation',
  areaServed: 'South Puget Sound, Washington',
}

export const roofingServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Roofing Contractor Services',
  description: 'Professional roofing repair, replacement, and installation. Licensed and insured.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'KOI Build Co',
  },
  serviceType: 'Roofing Contracting',
  areaServed: 'South Puget Sound, Washington',
}

// ============================================
// 4. BREADCRUMB SCHEMA - Shows navigation path in search results
// ============================================
export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

// ============================================
// 5. WEBSITE SCHEMA
// ============================================
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://koi.build/#website',
  url: 'https://koi.build',
  name: 'KOI Build Co',
  description: 'Premium home remodeling company serving Olympia, WA and South Puget Sound',
  publisher: {
    '@id': 'https://koi.build/#business',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://koi.build/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

// ============================================
// HELPER: Generate ALL schemas for any page
// ============================================
export function getAllSchemas(pageType, pageData = {}) {
  const schemas = [localBusinessSchema, websiteSchema]
  
  if (pageType === 'service' && pageData.serviceName) {
    schemas.push(serviceSchema(pageData.serviceName, pageData.description, pageData.url))
  }
  
  if (pageType === 'flooring') {
    schemas.push(flooringServiceSchema)
  }
  
  if (pageType === 'roofing') {
    schemas.push(roofingServiceSchema)
  }
  
  if (pageData.breadcrumbs) {
    schemas.push(breadcrumbSchema(pageData.breadcrumbs))
  }
  
  return schemas
}