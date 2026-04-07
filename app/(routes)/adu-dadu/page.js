"use client";

import ServiceLayout from "@/components/ServiceLayout";

export default function ADUDADUPage() {
  return (
    <ServiceLayout
      // ========== HERO SECTION ==========
      heroBackgrounds={[
        { id: 1, image: "/adu-hero-1.jpg", alt: "ADU construction Olympia WA" },
        { id: 2, image: "/adu-hero-2.jpg", alt: "DADU building Lacey WA" },
        { id: 3, image: "/adu-hero-3.jpg", alt: "Detached accessory dwelling unit Tumwater WA" },
        { id: 4, image: "/adu-hero-4.jpg", alt: "Garage conversion ADU South Puget Sound" },
      ]}
      heroTagline="ADU & DADU Specialists"
      heroTitle="Add Value to Your Property"
      heroHighlightedText="With KOI Build Co"
      heroDescription="Accessory Dwelling Units (ADU) and Detached ADUs (DADU). Maximize your property value with versatile additional living spaces."
      
      // ========== TRUSTED SECTION ==========
      trustedImage="/adu-expert.jpg"
      trustedImageAlt="KOI Build Co ADU and DADU construction experts"
      trustedTagline="Why Choose Us"
      trustedTitle="Olympia's Trusted"
      trustedHighlightedText="ADU & DADU Builders"
      trustedDescription="With over 20 years of experience, KOI Build Co has become the go-to ADU contractor for homeowners across South Puget Sound. We specialize in creating additional living spaces that maximize property value."
      trustedFeatures={[
        "20+ Years of Construction Experience",
        "Licensed & Insured in Washington State",
        "Free ADU Design Consultations",
        "Permit & Zoning Experts",
      ]}
      trustedCtaText="SCHEDULE CONSULTATION"
      trustedCtaLink="/contact-us"
      
      // ========== FEATURED PROJECTS ==========
      featuredProjects={[
        { title: "Detached DADU", location: "Olympia, WA", description: "600 sq ft detached ADU with kitchen and bathroom.", image: "/adu-project-1.jpg" },
        { title: "Garage Conversion", location: "Lacey, WA", description: "Converted attached garage into 1-bedroom living space.", image: "/adu-project-2.jpg" },
        { title: "Basement ADU", location: "Tumwater, WA", description: "Finished basement with separate entrance and kitchenette.", image: "/adu-project-3.jpg" },
        { title: "Over-Garage ADU", location: "Olympia, WA", description: "ADU built above existing garage with private stairs.", image: "/adu-project-4.jpg" },
        { title: "Backyard Cottage", location: "Lacey, WA", description: "Charming backyard cottage with private patio.", image: "/adu-project-5.jpg" },
        { title: "Multigenerational Suite", location: "Olympia, WA", description: "Attached ADU for aging parents with accessibility features.", image: "/adu-project-6.jpg" },
        { title: "Studio ADU", location: "Olympia, WA", description: "Compact 400 sq ft studio with efficient layout.", image: "/adu-project-7.jpg" },
        { title: "Two-Story DADU", location: "Lacey, WA", description: "Two-story detached ADU with 2 bedrooms.", image: "/adu-project-8.jpg" },
        { title: "Carriage House", location: "Tumwater, WA", description: "Carriage house ADU with garage and apartment above.", image: "/adu-project-9.jpg" },
        { title: "Accessible ADU", location: "Olympia, WA", description: "ADA-compliant ADU with roll-in shower and wide doors.", image: "/adu-project-10.jpg" },
        { title: "Rental Income ADU", location: "Lacey, WA", description: "ADU designed specifically for long-term rental income.", image: "/adu-project-11.jpg" },
        { title: "Home Office ADU", location: "Olympia, WA", description: "ADU converted to professional home office space.", image: "/adu-project-12.jpg" },
      ]}
      
      // ========== TESTIMONIALS ==========
      testimonials={[
        { name: "Robert T.", location: "Olympia, WA", rating: 5, text: "Our ADU now generates $1,800/month in rental income. Best investment we ever made!", project: "Detached DADU" },
        { name: "Susan L.", location: "Lacey, WA", rating: 5, text: "KOI converted our garage into a beautiful ADU for my mother. She loves her independence.", project: "Garage Conversion" },
        { name: "Mark & Julie R.", location: "Tumwater, WA", rating: 5, text: "The team handled all permits and zoning. Stress-free process from start to finish.", project: "Backyard Cottage" },
        { name: "David C.", location: "Olympia, WA", rating: 5, text: "KOI built a DADU for rental income. Quality work and great communication throughout.", project: "Detached ADU" },
      ]}
      
      // ========== HELP FEATURES ==========
      helpFeatures={[
        { title: "Free ADU Consultation", description: "We'll assess your property and discuss ADU possibilities and ROI.", icon: "Shield" },
        { title: "Permit & Zoning Experts", description: "We handle all permits, zoning requirements, and code compliance.", icon: "ThumbsUp" },
        { title: "Licensed & Insured", description: "Fully licensed contractors with comprehensive insurance coverage.", icon: "CheckCircle" },
        { title: "Turnkey Solutions", description: "From design to completion, we deliver move-in ready ADUs.", icon: "Calendar" },
      ]}
      
      helpImages={{
        topLeft: "/adu-help-1.jpg",
        topRight: "/adu-help-2.jpg",
        bottomFull: "/adu-help-3.jpg",
      }}
      
      trustBadges={[
        "Licensed & Insured",
        "20+ Years Experience",
        "Permit Experts",
        "ROI Focused",
        "Turnkey Delivery",
      ]}
      
      // ========== CTA SECTION ==========
      ctaBackgroundImage="/cta-banner3.jpg"
      ctaTagline="Ready to Add an ADU to Your Property?"
      ctaTitle="Let's Bring Your Vision to Life"
      ctaDescription="Contact us today for a free, no-obligation consultation."
      ctaButtonText="Get Free Estimate"
      ctaButtonLink="/contact-us"
      ctaPhoneNumber="(253) 348-1847"
      
      // ========== FORM OPTIONS ==========
      formServiceOptions={[
        "Detached ADU (DADU)",
        "Attached ADU",
        "Garage Conversion",
        "Basement ADU",
        "Backyard Cottage",
        "Other",
      ]}
    />
  );
}