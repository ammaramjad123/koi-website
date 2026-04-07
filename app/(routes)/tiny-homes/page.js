"use client";

import ServiceLayout from "@/components/ServiceLayout";

export default function TinyHomesPage() {
  return (
    <ServiceLayout
      // ========== HERO SECTION ==========
      heroBackgrounds={[
        { id: 1, image: "/tinyhomes-hero-1.jpg", alt: "Tiny home construction Olympia WA" },
        { id: 2, image: "/tinyhomes-hero-2.jpg", alt: "Custom tiny home builder Lacey WA" },
        { id: 3, image: "/tinyhomes-hero-3.jpg", alt: "Sustainable tiny homes Tumwater WA" },
        { id: 4, image: "/tinyhomes-hero-4.jpg", alt: "Modern tiny house South Puget Sound" },
      ]}
      heroTagline="Custom Tiny Home Builder"
      heroTitle="Live Simply. Live Better."
      heroHighlightedText="With KOI Build Co"
      heroDescription="Custom tiny homes designed for efficiency, sustainability, and modern living. Perfect for downsizing, guest houses, or rental income."
      
      // ========== TRUSTED SECTION ==========
      trustedImage="/tinyhomes-expert.jpg"
      trustedImageAlt="KOI Build Co tiny home construction experts"
      trustedTagline="Why Choose Us"
      trustedTitle="Olympia's Trusted"
      trustedHighlightedText="Tiny Home Builder"
      trustedDescription="With over 20 years of experience, KOI Build Co has become the go-to tiny home builder for homeowners across South Puget Sound. We specialize in creating efficient, sustainable, beautifully designed small spaces."
      trustedFeatures={[
        "20+ Years of Construction Experience",
        "Licensed & Insured in Washington State",
        "Custom Designs for Any Lifestyle",
        "Sustainable & Energy-Efficient",
      ]}
      trustedCtaText="SCHEDULE CONSULTATION"
      trustedCtaLink="/contact-us"
      
      // ========== FEATURED PROJECTS ==========
      featuredProjects={[
        { title: "Modern Studio Tiny Home", location: "Olympia, WA", description: "400 sq ft studio with loft sleeping area and full kitchen.", image: "/tinyhomes-project-1.jpg" },
        { title: "Rustic Cabin Style", location: "Lacey, WA", description: "350 sq ft rustic tiny home with wood-burning stove.", image: "/tinyhomes-project-2.jpg" },
        { title: "Two-Bedroom Tiny Home", location: "Tumwater, WA", description: "600 sq ft tiny home with two bedrooms and office nook.", image: "/tinyhomes-project-3.jpg" },
        { title: "Wheelchair Accessible", location: "Olympia, WA", description: "ADA-compliant tiny home with wide doorways and roll-in shower.", image: "/tinyhomes-project-4.jpg" },
        { title: "Off-Grid Tiny Home", location: "Lacey, WA", description: "Solar-powered tiny home with composting toilet and rainwater collection.", image: "/tinyhomes-project-5.jpg" },
        { title: "Farmhouse Tiny Home", location: "Olympia, WA", description: "Charming farmhouse-style tiny home with porch.", image: "/tinyhomes-project-6.jpg" },
        { title: "Minimalist Design", location: "Olympia, WA", description: "Ultra-efficient 280 sq ft minimalist tiny home.", image: "/tinyhomes-project-7.jpg" },
        { title: "Loft & Storage Focus", location: "Lacey, WA", description: "Smart storage solutions throughout this 450 sq ft design.", image: "/tinyhomes-project-8.jpg" },
        { title: "Family Tiny Home", location: "Tumwater, WA", description: "800 sq ft tiny home designed for a family of four.", image: "/tinyhomes-project-9.jpg" },
        { title: "Luxury Tiny Home", location: "Olympia, WA", description: "High-end finishes and premium appliances in 500 sq ft.", image: "/tinyhomes-project-10.jpg" },
        { title: "Wheelhouse Tiny Home", location: "Lacey, WA", description: "Unique geometric design with panoramic windows.", image: "/tinyhomes-project-11.jpg" },
        { title: "ADU Tiny Home", location: "Olympia, WA", description: "Tiny home designed specifically as rental ADU.", image: "/tinyhomes-project-12.jpg" },
      ]}
      
      // ========== TESTIMONIALS ==========
      testimonials={[
        { name: "Sarah M.", location: "Olympia, WA", rating: 5, text: "My tiny home is perfect! KOI understood exactly what I wanted and delivered beyond expectations.", project: "Modern Studio" },
        { name: "James & Linda W.", location: "Lacey, WA", rating: 5, text: "We downsized to a KOI tiny home and couldn't be happier. Quality craftsmanship throughout.", project: "Farmhouse Tiny Home" },
        { name: "Rachel T.", location: "Tumwater, WA", rating: 5, text: "KOI built an off-grid tiny home for our property. Sustainable and beautiful!", project: "Off-Grid Tiny Home" },
        { name: "Mike S.", location: "Olympia, WA", rating: 5, text: "Great communication and attention to detail. My tiny home is a masterpiece.", project: "Luxury Tiny Home" },
      ]}
      
      // ========== HELP FEATURES ==========
      helpFeatures={[
        { title: "Free Tiny Home Consultation", description: "We'll discuss your lifestyle needs and design the perfect tiny home.", icon: "Shield" },
        { title: "Sustainable Materials", description: "Eco-friendly building materials and energy-efficient designs.", icon: "ThumbsUp" },
        { title: "Licensed & Insured", description: "Fully licensed contractors with comprehensive insurance coverage.", icon: "CheckCircle" },
        { title: "Custom Designs", description: "Every tiny home is uniquely designed for your specific needs.", icon: "Calendar" },
      ]}
      
      helpImages={{
        topLeft: "/tinyhomes-help-1.jpg",
        topRight: "/tinyhomes-help-2.jpg",
        bottomFull: "/tinyhomes-help-3.jpg",
      }}
      
      trustBadges={[
        "Licensed & Insured",
        "20+ Years Experience",
        "Sustainable Building",
        "Custom Designs",
        "Energy Efficient",
      ]}
      
      // ========== CTA SECTION ==========
      ctaBackgroundImage="/cta-banner3.jpg"
      ctaTagline="Ready to Simplify Your Life?"
      ctaTitle="Let's Build Your Tiny Home"
      ctaDescription="Contact us today for a free, no-obligation consultation."
      ctaButtonText="Get Free Estimate"
      ctaButtonLink="/contact-us"
      ctaPhoneNumber="(253) 348-1847"
      
      // ========== FORM OPTIONS ==========
      formServiceOptions={[
        "Studio Tiny Home",
        "1-Bedroom Tiny Home",
        "2-Bedroom Tiny Home",
        "Off-Grid Tiny Home",
        "Wheelchair Accessible",
        "Other",
      ]}
    />
  );
}