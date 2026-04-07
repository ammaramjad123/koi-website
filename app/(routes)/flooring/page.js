"use client";

import ServiceLayout from "@/components/ServiceLayout";

export default function FlooringPage() {
  return (
    <ServiceLayout
      // ========== HERO SECTION ==========
      heroBackgrounds={[
        { id: 1, image: "/flooring-hero-1.jpg", alt: "Professional hardwood flooring installation Olympia WA" },
        { id: 2, image: "/flooring-hero-2.jpg", alt: "Luxury vinyl plank flooring Lacey WA" },
        { id: 3, image: "/flooring-hero-3.jpg", alt: "Tile flooring installation Tumwater WA" },
        { id: 4, image: "/flooring-hero-4.jpg", alt: "Laminate flooring replacement South Puget Sound" },
      ]}
      heroTagline="Professional Flooring Services"
      heroTitle="Expert Flooring"
      heroHighlightedText="Installation in Olympia"
      heroDescription="Hardwood, luxury vinyl, tile, and carpet installation. Premium materials, expert craftsmanship, and exceptional service across South Puget Sound."
      
      // ========== TRUSTED SECTION ==========
      trustedImage="/flooring-expert.jpg"
      trustedImageAlt="KOI Build Co flooring experts"
      trustedTagline="Why Choose Us"
      trustedTitle="Olympia's Trusted"
      trustedHighlightedText="Flooring Experts"
      trustedDescription="With over 20 years of experience, KOI Build Co has become the go-to flooring contractor for homeowners across South Puget Sound. We specialize in all types of flooring installation and refinishing."
      trustedFeatures={[
        "20+ Years of Flooring Experience",
        "Licensed & Insured in Washington State",
        "Free In-Home Consultations",
        "Premium Materials & Warranties",
      ]}
      trustedCtaText="SCHEDULE CONSULTATION"
      trustedCtaLink="/contact-us"
      
      // ========== FEATURED PROJECTS ==========
      featuredProjects={[
        { title: "Hardwood Floor Installation", location: "Olympia, WA", description: "Beautiful oak hardwood flooring throughout main living areas.", image: "/flooring-project-1.jpg" },
        { title: "Luxury Vinyl Plank", location: "Lacey, WA", description: "Waterproof luxury vinyl plank installation in kitchen and bathrooms.", image: "/flooring-project-2.jpg" },
        { title: "Tile Flooring", location: "Tumwater, WA", description: "Custom tile design and installation for entryway and bathrooms.", image: "/flooring-project-3.jpg" },
        { title: "Carpet Replacement", location: "Olympia, WA", description: "Premium carpet installation for bedrooms and living areas.", image: "/flooring-project-4.jpg" },
        { title: "Laminate Flooring", location: "Lacey, WA", description: "Durable laminate flooring for high-traffic family rooms.", image: "/flooring-project-5.jpg" },
        { title: "Floor Refinishing", location: "Olympia, WA", description: "Professional hardwood floor sanding and refinishing.", image: "/flooring-project-6.jpg" },
        { title: "Bamboo Flooring", location: "Olympia, WA", description: "Eco-friendly bamboo flooring installation.", image: "/flooring-project-7.jpg" },
        { title: "Cork Flooring", location: "Lacey, WA", description: "Comfortable cork flooring for home offices.", image: "/flooring-project-8.jpg" },
        { title: "Concrete Polishing", location: "Tumwater, WA", description: "Modern polished concrete floors for basements.", image: "/flooring-project-9.jpg" },
        { title: "Staircase Remodel", location: "Olympia, WA", description: "Custom staircase flooring with hardwood treads.", image: "/flooring-project-10.jpg" },
        { title: "Commercial Flooring", location: "Lacey, WA", description: "Durable commercial flooring solutions.", image: "/flooring-project-11.jpg" },
        { title: "Floor Leveling", location: "Olympia, WA", description: "Professional subfloor preparation and leveling.", image: "/flooring-project-12.jpg" },
      ]}
      
      // ========== TESTIMONIALS ==========
      testimonials={[
        { name: "Jennifer M.", location: "Olympia, WA", rating: 5, text: "KOI transformed our old carpet into beautiful hardwood floors. Outstanding quality!", project: "Hardwood Installation" },
        { name: "Mark & Lisa T.", location: "Lacey, WA", rating: 5, text: "Our luxury vinyl plank floors look amazing. KOI did a perfect job.", project: "LVP Installation" },
        { name: "Rachel S.", location: "Tumwater, WA", rating: 5, text: "The tile work in our bathroom is stunning. Attention to detail unmatched.", project: "Tile Installation" },
        { name: "David P.", location: "Olympia, WA", rating: 5, text: "Great communication and excellent workmanship. Our floors never looked better.", project: "Floor Refinishing" },
      ]}
      
      // ========== HELP FEATURES ==========
      helpFeatures={[
        { title: "Free Flooring Consultation", description: "We'll assess your space and recommend the best flooring options.", icon: "Shield" },
        { title: "Premium Materials", description: "Quality flooring from trusted manufacturers like Shaw and Mohawk.", icon: "ThumbsUp" },
        { title: "Licensed & Insured", description: "Fully licensed flooring contractors with comprehensive insurance.", icon: "CheckCircle" },
        { title: "Fast Installation", description: "Most flooring projects completed within 1-5 days with minimal disruption.", icon: "Calendar" },
      ]}
      
      helpImages={{
        topLeft: "/flooring-help-1.jpg",
        topRight: "/flooring-help-2.jpg",
        bottomFull: "/flooring-help-3.jpg",
      }}
      
      trustBadges={[
        "Licensed & Insured",
        "20+ Years Experience",
        "Free Estimates",
        "Premium Materials",
        "Professional Installation",
      ]}
      
      // ========== CTA SECTION ==========
      ctaBackgroundImage="/cta-banner3.jpg"
      ctaTagline="Ready to Transform Your Floors?"
      ctaTitle="Let's Bring Your Vision to Life"
      ctaDescription="Contact us today for a free, no-obligation consultation."
      ctaButtonText="Get Free Estimate"
      ctaButtonLink="/contact-us"
      ctaPhoneNumber="(253) 348-1847"
      
      // ========== FORM OPTIONS ==========
      formServiceOptions={[
        "Hardwood Flooring",
        "Luxury Vinyl Plank",
        "Tile Flooring",
        "Carpet Installation",
        "Laminate Flooring",
        "Floor Refinishing",
        "Other",
      ]}
    />
  );
}