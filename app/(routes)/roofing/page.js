"use client";

import ServiceLayout from "@/components/ServiceLayout";

export default function RoofingPage() {
  return (
    <ServiceLayout
      // ========== HERO SECTION ==========
      heroBackgrounds={[
        { id: 1, image: "/roofing-hero-1.jpg", alt: "Professional roof installation Olympia WA" },
        { id: 2, image: "/roofing-hero-2.jpg", alt: "Roof replacement services Lacey WA" },
        { id: 3, image: "/roofing-hero-3.jpg", alt: "Residential roofing contractor Tumwater WA" },
        { id: 4, image: "/roofing-hero-4.jpg", alt: "Emergency roof repair South Puget Sound" },
      ]}
      heroTagline="Professional Roofing Services"
      heroTitle="Expert Roofing"
      heroHighlightedText="Contractor in Olympia"
      heroDescription="Quality roof installation, repair, and replacement. Licensed, insured, and trusted by homeowners across South Puget Sound."
      
      // ========== TRUSTED SECTION ==========
      trustedImage="/roofing-expert.jpg"
      trustedImageAlt="KOI Build Co roofing experts"
      trustedTagline="Why Choose Us"
      trustedTitle="Olympia's Trusted"
      trustedHighlightedText="Roofing Experts"
      trustedDescription="With over 20 years of experience, KOI Build Co has become the go-to roofing contractor for homeowners across South Puget Sound."
      trustedFeatures={[
        "20+ Years of Roofing Experience",
        "Licensed & Insured in Washington State",
        "Free Inspections & Estimates",
        "Manufacturer Warranties Available",
      ]}
      trustedCtaText="SCHEDULE INSPECTION"
      trustedCtaLink="/contact-us"
      
      // ========== FEATURED PROJECTS ==========
      featuredProjects={[
        { title: "Complete Roof Replacement", location: "Olympia, WA", description: "Full asphalt shingle roof replacement.", image: "/roofing-project-1.jpg" },
        { title: "Emergency Roof Repair", location: "Lacey, WA", description: "Storm damage repair with new shingles.", image: "/roofing-project-2.jpg" },
        { title: "Metal Roof Installation", location: "Tumwater, WA", description: "Durable standing seam metal roof.", image: "/roofing-project-3.jpg" },
        { title: "Roof Inspection", location: "Olympia, WA", description: "Complete roof assessment.", image: "/roofing-project-4.jpg" },
        { title: "Flat Roof Replacement", location: "Lacey, WA", description: "Commercial-grade flat roof.", image: "/roofing-project-5.jpg" },
        { title: "Skylight Installation", location: "Olympia, WA", description: "Natural light solutions.", image: "/roofing-project-6.jpg" },
        { title: "Gutter Installation", location: "Olympia, WA", description: "Seamless gutter installation.", image: "/roofing-project-7.jpg" },
        { title: "Soffit & Fascia Repair", location: "Lacey, WA", description: "Soffit and fascia replacement.", image: "/roofing-project-8.jpg" },
        { title: "Ventilation Upgrade", location: "Tumwater, WA", description: "Attic ventilation improvement.", image: "/roofing-project-9.jpg" },
        { title: "Storm Damage Restoration", location: "Olympia, WA", description: "Full restoration after storms.", image: "/roofing-project-10.jpg" },
        { title: "Tile Roof Installation", location: "Lacey, WA", description: "Clay and concrete tile roofing.", image: "/roofing-project-11.jpg" },
        { title: "Roof Coating Services", location: "Olympia, WA", description: "Protective roof coating.", image: "/roofing-project-12.jpg" },
      ]}
      
      // ========== TESTIMONIALS ==========
      testimonials={[
        { name: "Michael R.", location: "Olympia, WA", rating: 5, text: "KOI replaced our entire roof after storm damage. Professional, fast, and quality work.", project: "Roof Replacement" },
        { name: "Sarah & Tom L.", location: "Lacey, WA", rating: 5, text: "Our new metal roof looks amazing. KOI exceeded our expectations.", project: "Metal Roof" },
        { name: "Jennifer K.", location: "Tumwater, WA", rating: 5, text: "Emergency repair was handled quickly and professionally. Saved our home.", project: "Emergency Repair" },
        { name: "David & Lisa M.", location: "Olympia, WA", rating: 5, text: "Great communication, fair pricing, excellent workmanship.", project: "Roof Replacement" },
      ]}
      
      // ========== HELP FEATURES ==========
      helpFeatures={[
        { title: "Free Roof Inspection", description: "We'll assess your roof's condition and provide honest recommendations.", icon: "Shield" },
        { title: "Quality Materials", description: "Premium shingles, underlayment, and flashing for lasting protection.", icon: "ThumbsUp" },
        { title: "Licensed & Insured", description: "Fully licensed roofing contractors with comprehensive coverage.", icon: "CheckCircle" },
        { title: "Fast Turnaround", description: "Most residential roofs completed within 1-3 days.", icon: "Calendar" },
      ]}
      
      helpImages={{
        topLeft: "/roofing-help-1.jpg",
        topRight: "/roofing-help-2.jpg",
        bottomFull: "/roofing-help-3.jpg",
      }}
      
      trustBadges={[
        "Licensed & Insured",
        "20+ Years Experience",
        "Free Estimates",
        "Warranty Included",
        "Emergency Service",
      ]}
      
      // ========== CTA SECTION ==========
      ctaBackgroundImage="/cta-banner3.jpg"
      ctaTagline="Ready to Get Started?"
      ctaTitle="Let's Bring Your Vision to Life"
      ctaDescription="Contact us today for a free, no-obligation consultation."
      ctaButtonText="Get Free Estimate"
      ctaButtonLink="/contact-us"
      ctaPhoneNumber="(253) 348-1847"
      
      // ========== FORM OPTIONS ==========
      formServiceOptions={[
        "Roof Repair",
        "Roof Replacement",
        "New Installation",
        "Roof Inspection",
        "Emergency Service",
        "Other",
      ]}
    />
  );
}