"use client";

import ServiceLayout from "@/components/ServiceLayout";

export default function AdditionsPage() {
  return (
    <ServiceLayout
      // ========== HERO SECTION ==========
      heroBackgrounds={[
        { id: 1, image: "/additions-hero-1.jpg", alt: "Home addition construction Olympia WA" },
        { id: 2, image: "/additions-hero-2.jpg", alt: "Second story addition Lacey WA" },
        { id: 3, image: "/additions-hero-3.jpg", alt: "Sunroom addition Tumwater WA" },
        { id: 4, image: "/additions-hero-4.jpg", alt: "Master suite addition South Puget Sound" },
      ]}
      heroTagline="Professional Home Addition Services"
      heroTitle="Expand Your Living Space"
      heroHighlightedText="With KOI Build Co"
      heroDescription="Custom home additions, sunrooms, master suites, and bonus rooms. Professional design-build services across South Puget Sound."
      
      // ========== TRUSTED SECTION ==========
      trustedImage="/additions-expert.jpg"
      trustedImageAlt="KOI Build Co home addition experts"
      trustedTagline="Why Choose Us"
      trustedTitle="Olympia's Trusted"
      trustedHighlightedText="Addition Experts"
      trustedDescription="With over 20 years of experience, KOI Build Co has become the go-to home addition contractor for homeowners across South Puget Sound. We specialize in expanding your living space with quality craftsmanship."
      trustedFeatures={[
        "20+ Years of Addition Experience",
        "Licensed & Insured in Washington State",
        "Free Design Consultations",
        "Permit & Zoning Expertise",
      ]}
      trustedCtaText="SCHEDULE CONSULTATION"
      trustedCtaLink="/contact-us"
      
      // ========== FEATURED PROJECTS ==========
      featuredProjects={[
        { title: "Second Story Addition", location: "Olympia, WA", description: "Added a full second story with 3 bedrooms and 2 bathrooms.", image: "/additions-project-1.jpg" },
        { title: "Master Suite Addition", location: "Lacey, WA", description: "Luxurious master bedroom with spa-inspired bathroom.", image: "/additions-project-2.jpg" },
        { title: "Sunroom Addition", location: "Tumwater, WA", description: "Beautiful four-season sunroom with panoramic windows.", image: "/additions-project-3.jpg" },
        { title: "Family Room Extension", location: "Olympia, WA", description: "Spacious family room addition with vaulted ceilings.", image: "/additions-project-4.jpg" },
        { title: "Garage Conversion", location: "Lacey, WA", description: "Converted attached garage into functional living space.", image: "/additions-project-5.jpg" },
        { title: "In-Law Suite", location: "Olympia, WA", description: "Private in-law suite with separate entrance.", image: "/additions-project-6.jpg" },
        { title: "Home Office Addition", location: "Olympia, WA", description: "Custom home office with built-in bookshelves.", image: "/additions-project-7.jpg" },
        { title: "Mudroom Addition", location: "Lacey, WA", description: "Functional mudroom with custom storage.", image: "/additions-project-8.jpg" },
        { title: "Bonus Room Addition", location: "Tumwater, WA", description: "Versatile bonus room for media or play area.", image: "/additions-project-9.jpg" },
        { title: "Kitchen Bump-Out", location: "Olympia, WA", description: "Expanded kitchen footprint with breakfast nook.", image: "/additions-project-10.jpg" },
        { title: "Screened Porch", location: "Lacey, WA", description: "Screened porch for bug-free outdoor enjoyment.", image: "/additions-project-11.jpg" },
        { title: "ADU Construction", location: "Olympia, WA", description: "Detached ADU for rental income or guests.", image: "/additions-project-12.jpg" },
      ]}
      
      // ========== TESTIMONIALS ==========
      testimonials={[
        { name: "Robert & Susan M.", location: "Olympia, WA", rating: 5, text: "KOI added a master suite to our home. The results are stunning!", project: "Master Suite Addition" },
        { name: "Jennifer L.", location: "Lacey, WA", rating: 5, text: "Our sunroom addition is now our favorite room in the house.", project: "Sunroom Addition" },
        { name: "Mark & Karen B.", location: "Tumwater, WA", rating: 5, text: "The second story addition transformed our home completely.", project: "Second Story Addition" },
        { name: "David W.", location: "Olympia, WA", rating: 5, text: "Great communication and excellent workmanship on our family room.", project: "Family Room Extension" },
      ]}
      
      // ========== HELP FEATURES ==========
      helpFeatures={[
        { title: "Free Design Consultation", description: "We'll discuss your vision and provide expert recommendations.", icon: "Shield" },
        { title: "Permit Management", description: "We handle all permits, zoning, and building code compliance.", icon: "ThumbsUp" },
        { title: "Licensed & Insured", description: "Fully licensed general contractors with comprehensive insurance.", icon: "CheckCircle" },
        { title: "On-Time Delivery", description: "Most additions completed within 8-12 weeks with regular updates.", icon: "Calendar" },
      ]}
      
      helpImages={{
        topLeft: "/additions-help-1.jpg",
        topRight: "/additions-help-2.jpg",
        bottomFull: "/additions-help-3.jpg",
      }}
      
      trustBadges={[
        "Licensed & Insured",
        "20+ Years Experience",
        "Free Estimates",
        "Permit Management",
        "Design-Build",
      ]}
      
      // ========== CTA SECTION ==========
      ctaBackgroundImage="/cta-banner3.jpg"
      ctaTagline="Ready to Expand Your Home?"
      ctaTitle="Let's Bring Your Vision to Life"
      ctaDescription="Contact us today for a free, no-obligation consultation."
      ctaButtonText="Get Free Estimate"
      ctaButtonLink="/contact-us"
      ctaPhoneNumber="(253) 348-1847"
      
      // ========== FORM OPTIONS ==========
      formServiceOptions={[
        "Master Suite",
        "Sunroom",
        "Second Story",
        "Family Room",
        "ADU",
        "Other",
      ]}
    />
  );
}