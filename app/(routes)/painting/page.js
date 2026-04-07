"use client";

import ServiceLayout from "@/components/ServiceLayout";

export default function PaintingPage() {
  return (
    <ServiceLayout
      // ========== HERO SECTION ==========
      heroBackgrounds={[
        { id: 1, image: "/painting-hero-1.jpg", alt: "Professional interior painting Olympia WA" },
        { id: 2, image: "/painting-hero-2.jpg", alt: "Exterior house painting Lacey WA" },
        { id: 3, image: "/painting-hero-3.jpg", alt: "Cabinet painting services Tumwater WA" },
        { id: 4, image: "/painting-hero-4.jpg", alt: "Commercial painting South Puget Sound" },
      ]}
      heroTagline="Professional Painting Services"
      heroTitle="Expert Painting"
      heroHighlightedText="Contractor in Olympia"
      heroDescription="Interior and exterior painting, cabinet refinishing, and commercial painting. Premium paints, expert craftsmanship, and exceptional service."
      
      // ========== TRUSTED SECTION ==========
      trustedImage="/painting-expert.jpg"
      trustedImageAlt="KOI Build Co painting experts"
      trustedTagline="Why Choose Us"
      trustedTitle="Olympia's Trusted"
      trustedHighlightedText="Painting Experts"
      trustedDescription="With over 20 years of experience, KOI Build Co has become the go-to painting contractor for homeowners across South Puget Sound. We specialize in transforming spaces with quality craftsmanship and premium paints."
      trustedFeatures={[
        "20+ Years of Painting Experience",
        "Licensed & Insured in Washington State",
        "Free Color Consultations",
        "Premium Low-VOC Paints",
      ]}
      trustedCtaText="SCHEDULE CONSULTATION"
      trustedCtaLink="/contact-us"
      
      // ========== FEATURED PROJECTS ==========
      featuredProjects={[
        { title: "Whole House Interior", location: "Olympia, WA", description: "Complete interior painting with modern color palette.", image: "/painting-project-1.jpg" },
        { title: "Exterior Home Painting", location: "Lacey, WA", description: "Full exterior transformation with weather-resistant paint.", image: "/painting-project-2.jpg" },
        { title: "Kitchen Cabinet Painting", location: "Tumwater, WA", description: "Cabinet refinishing for a fresh new look.", image: "/painting-project-3.jpg" },
        { title: "Accent Wall Design", location: "Olympia, WA", description: "Custom accent wall with bold color and texture.", image: "/painting-project-4.jpg" },
        { title: "Deck & Fence Staining", location: "Lacey, WA", description: "Professional staining for outdoor wood surfaces.", image: "/painting-project-5.jpg" },
        { title: "Commercial Office", location: "Olympia, WA", description: "Complete office repaint for professional environment.", image: "/painting-project-6.jpg" },
        { title: "Ceiling & Trim", location: "Olympia, WA", description: "Detailed ceiling and trim painting.", image: "/painting-project-7.jpg" },
        { title: "Nursery Painting", location: "Lacey, WA", description: "Custom nursery with soft colors.", image: "/painting-project-8.jpg" },
        { title: "Basement Finishing", location: "Tumwater, WA", description: "Complete basement paint and finish work.", image: "/painting-project-9.jpg" },
        { title: "Garage Floor Epoxy", location: "Olympia, WA", description: "Durable epoxy coating for garage floor.", image: "/painting-project-10.jpg" },
        { title: "Cabinetry Refinishing", location: "Lacey, WA", description: "Cabinet refinishing for updated look.", image: "/painting-project-11.jpg" },
        { title: "Historic Home Restoration", location: "Olympia, WA", description: "Specialized painting for historic properties.", image: "/painting-project-12.jpg" },
      ]}
      
      // ========== TESTIMONIALS ==========
      testimonials={[
        { name: "Sarah M.", location: "Olympia, WA", rating: 5, text: "KOI transformed our living room with beautiful paint colors. Flawless finish!", project: "Interior Painting" },
        { name: "Tom & Linda R.", location: "Lacey, WA", rating: 5, text: "Our home exterior looks brand new. Excellent workmanship!", project: "Exterior Painting" },
        { name: "Jennifer K.", location: "Tumwater, WA", rating: 5, text: "The cabinet painting made our kitchen look like new. Highly recommend!", project: "Cabinet Painting" },
        { name: "Michael B.", location: "Olympia, WA", rating: 5, text: "Great communication and excellent workmanship. Our office looks amazing.", project: "Commercial Painting" },
      ]}
      
      // ========== HELP FEATURES ==========
      helpFeatures={[
        { title: "Free Color Consultation", description: "We'll help you select the perfect colors and finishes for your space.", icon: "Shield" },
        { title: "Premium Paints", description: "We use only high-quality, low-VOC paints from trusted brands.", icon: "ThumbsUp" },
        { title: "Licensed & Insured", description: "Fully licensed painting contractors with comprehensive insurance.", icon: "CheckCircle" },
        { title: "Quick Turnaround", description: "Most residential painting projects completed within 2-5 days.", icon: "Calendar" },
      ]}
      
      helpImages={{
        topLeft: "/painting-help-1.jpg",
        topRight: "/painting-help-2.jpg",
        bottomFull: "/painting-help-3.jpg",
      }}
      
      trustBadges={[
        "Licensed & Insured",
        "20+ Years Experience",
        "Free Estimates",
        "Color Consultation",
        "Premium Paints",
      ]}
      
      // ========== CTA SECTION ==========
      ctaBackgroundImage="/cta-banner3.jpg"
      ctaTagline="Ready to Transform Your Home?"
      ctaTitle="Let's Bring Your Vision to Life"
      ctaDescription="Contact us today for a free, no-obligation consultation."
      ctaButtonText="Get Free Estimate"
      ctaButtonLink="/contact-us"
      ctaPhoneNumber="(253) 348-1847"
      
      // ========== FORM OPTIONS ==========
      formServiceOptions={[
        "Interior Painting",
        "Exterior Painting",
        "Cabinet Painting",
        "Commercial Painting",
        "Deck Staining",
        "Other",
      ]}
    />
  );
}