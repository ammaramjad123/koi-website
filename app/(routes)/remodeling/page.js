"use client";

import ServiceLayout from "@/components/ServiceLayout";

export default function RemodelingPage() {
  return (
    <ServiceLayout
      // ========== HERO SECTION ==========
      heroBackgrounds={[
        { id: 1, image: "/remodeling-hero-1.jpg", alt: "Complete home remodeling Olympia WA" },
        { id: 2, image: "/remodeling-hero-2.jpg", alt: "Kitchen remodel Lacey WA" },
        { id: 3, image: "/remodeling-hero-3.jpg", alt: "Bathroom renovation Tumwater WA" },
        { id: 4, image: "/remodeling-hero-4.jpg", alt: "Whole house renovation South Puget Sound" },
      ]}
      heroTagline="Complete Home Transformations"
      heroTitle="Expert Home"
      heroHighlightedText="Remodeling Services"
      heroDescription="Kitchen and bathroom remodels, whole-house renovations, and basement finishing. Transform your home with expert craftsmanship and personalized design."
      
      // ========== TRUSTED SECTION ==========
      trustedImage="/remodeling-expert.jpg"
      trustedImageAlt="KOI Build Co remodeling experts"
      trustedTagline="Why Choose Us"
      trustedTitle="Olympia's Trusted"
      trustedHighlightedText="Remodeling Contractors"
      trustedDescription="With over 20 years of experience, KOI Build Co has become the go-to remodeling contractor for homeowners across South Puget Sound. We specialize in complete home transformations that enhance beauty and functionality."
      trustedFeatures={[
        "20+ Years of Remodeling Experience",
        "Licensed & Insured in Washington State",
        "Free Design Consultations",
        "Quality Craftsmanship Guaranteed",
      ]}
      trustedCtaText="SCHEDULE CONSULTATION"
      trustedCtaLink="/contact-us"
      
      // ========== FEATURED PROJECTS ==========
      featuredProjects={[
        { title: "Modern Kitchen Remodel", location: "Olympia, WA", description: "Complete kitchen transformation with quartz countertops and custom cabinetry.", image: "/remodeling-project-1.jpg" },
        { title: "Luxury Bathroom Renovation", location: "Lacey, WA", description: "Spa-inspired bathroom with walk-in shower and freestanding tub.", image: "/remodeling-project-2.jpg" },
        { title: "Whole-Home Renovation", location: "Tumwater, WA", description: "Complete interior and exterior remodel of 1970s rambler.", image: "/remodeling-project-3.jpg" },
        { title: "Basement Finishing", location: "Olympia, WA", description: "Finished basement with home theater and wet bar.", image: "/remodeling-project-4.jpg" },
        { title: "Open Concept Living", location: "Lacey, WA", description: "Removed walls to create bright, open living space.", image: "/remodeling-project-5.jpg" },
        { title: "Master Suite Addition", location: "Olympia, WA", description: "Added master bedroom with ensuite bathroom and walk-in closet.", image: "/remodeling-project-6.jpg" },
        { title: "Kitchen & Dining Combo", location: "Olympia, WA", description: "Combined kitchen and dining room into one functional space.", image: "/remodeling-project-7.jpg" },
        { title: "Guest Bathroom Update", location: "Lacey, WA", description: "Complete guest bathroom renovation with modern finishes.", image: "/remodeling-project-8.jpg" },
        { title: "Home Office Conversion", location: "Tumwater, WA", description: "Converted spare bedroom into professional home office.", image: "/remodeling-project-9.jpg" },
        { title: "Laundry Room Remodel", location: "Olympia, WA", description: "Functional laundry room with custom storage and sink.", image: "/remodeling-project-10.jpg" },
        { title: "Living Room Update", location: "Lacey, WA", description: "Living room remodel with new flooring, paint, and lighting.", image: "/remodeling-project-11.jpg" },
        { title: "Exterior Facelift", location: "Olympia, WA", description: "New siding, windows, and paint for complete exterior transformation.", image: "/remodeling-project-12.jpg" },
      ]}
      
      // ========== TESTIMONIALS ==========
      testimonials={[
        { name: "Karen & Mike S.", location: "Olympia, WA", rating: 5, text: "KOI completely transformed our outdated kitchen. It's now the heart of our home!", project: "Kitchen Remodel" },
        { name: "Jennifer L.", location: "Lacey, WA", rating: 5, text: "Our bathroom renovation exceeded expectations. Beautiful craftsmanship.", project: "Bathroom Renovation" },
        { name: "Robert T.", location: "Tumwater, WA", rating: 5, text: "KOI handled our whole-home renovation. Professional, on-time, and quality work.", project: "Whole-Home Renovation" },
        { name: "Lisa M.", location: "Olympia, WA", rating: 5, text: "Great communication throughout the project. Our basement is now our favorite room.", project: "Basement Finishing" },
      ]}
      
      // ========== HELP FEATURES ==========
      helpFeatures={[
        { title: "Free Design Consultation", description: "We'll discuss your vision and provide expert recommendations.", icon: "Shield" },
        { title: "Quality Materials", description: "Premium materials and finishes from trusted brands.", icon: "ThumbsUp" },
        { title: "Licensed & Insured", description: "Fully licensed contractors with comprehensive insurance.", icon: "CheckCircle" },
        { title: "Project Management", description: "Dedicated project manager overseeing every aspect of your remodel.", icon: "Calendar" },
      ]}
      
      helpImages={{
        topLeft: "/remodeling-help-1.jpg",
        topRight: "/remodeling-help-2.jpg",
        bottomFull: "/remodeling-help-3.jpg",
      }}
      
      trustBadges={[
        "Licensed & Insured",
        "20+ Years Experience",
        "Free Estimates",
        "Quality Guaranteed",
        "Design-Build",
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
        "Kitchen Remodel",
        "Bathroom Remodel",
        "Whole-Home Renovation",
        "Basement Finishing",
        "Living Room Remodel",
        "Other",
      ]}
    />
  );
}