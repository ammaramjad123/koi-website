"use client";

import ServiceLayout from "@/components/ServiceLayout";

export default function DeckPatioPage() {
  return (
    <ServiceLayout
      // ========== HERO SECTION ==========
      heroBackgrounds={[
        { id: 1, image: "/deck-hero-1.jpg", alt: "Custom deck construction Olympia WA" },
        { id: 2, image: "/deck-hero-2.jpg", alt: "Patio installation Lacey WA" },
        { id: 3, image: "/deck-hero-3.jpg", alt: "Outdoor living space Tumwater WA" },
        { id: 4, image: "/deck-hero-4.jpg", alt: "Pergola and patio cover South Puget Sound" },
      ]}
      heroTagline="Custom Outdoor Living"
      heroTitle="Transform Your Backyard"
      heroHighlightedText="With KOI Build Co"
      heroDescription="Custom decks, patios, pergolas, and outdoor kitchens. Create the perfect outdoor living space for entertaining and relaxation."
      
      // ========== TRUSTED SECTION ==========
      trustedImage="/deck-expert.jpg"
      trustedImageAlt="KOI Build Co deck and patio experts"
      trustedTagline="Why Choose Us"
      trustedTitle="Olympia's Trusted"
      trustedHighlightedText="Deck & Patio Builders"
      trustedDescription="With over 20 years of experience, KOI Build Co has become the go-to outdoor living contractor for homeowners across South Puget Sound. We specialize in creating beautiful, functional outdoor spaces."
      trustedFeatures={[
        "20+ Years of Deck Building Experience",
        "Licensed & Insured in Washington State",
        "Free Design Consultations",
        "Premium Treated Lumber & Composites",
      ]}
      trustedCtaText="SCHEDULE CONSULTATION"
      trustedCtaLink="/contact-us"
      
      // ========== FEATURED PROJECTS ==========
      featuredProjects={[
        { title: "Multi-Level Deck", location: "Olympia, WA", description: "Two-story deck with built-in seating and lighting.", image: "/deck-project-1.jpg" },
        { title: "Paver Patio with Fire Pit", location: "Lacey, WA", description: "Custom paver patio with gas fire pit and seating wall.", image: "/deck-project-2.jpg" },
        { title: "Covered Pergola", location: "Tumwater, WA", description: "Louvered pergola with retractable canopy.", image: "/deck-project-3.jpg" },
        { title: "Outdoor Kitchen", location: "Olympia, WA", description: "Full outdoor kitchen with grill, sink, and fridge.", image: "/deck-project-4.jpg" },
        { title: "Composite Deck", location: "Lacey, WA", description: "Low-maintenance composite deck with aluminum railing.", image: "/deck-project-5.jpg" },
        { title: "Flagstone Patio", location: "Olympia, WA", description: "Natural flagstone patio with garden borders.", image: "/deck-project-6.jpg" },
        { title: "Wrap-Around Deck", location: "Olympia, WA", description: "Wrap-around deck with covered porch section.", image: "/deck-project-7.jpg" },
        { title: "Pool Deck", location: "Lacey, WA", description: "Slip-resistant decking around swimming pool.", image: "/deck-project-8.jpg" },
        { title: "Rooftop Terrace", location: "Tumwater, WA", description: "Urban rooftop terrace with city views.", image: "/deck-project-9.jpg" },
        { title: "Screened Porch", location: "Olympia, WA", description: "Screened porch with vaulted ceiling and fan.", image: "/deck-project-10.jpg" },
        { title: "Deck & Patio Combo", location: "Lacey, WA", description: "Combination elevated deck and ground-level patio.", image: "/deck-project-11.jpg" },
        { title: "Pergola with Lights", location: "Olympia, WA", description: "Pergola with integrated LED lighting and fans.", image: "/deck-project-12.jpg" },
      ]}
      
      // ========== TESTIMONIALS ==========
      testimonials={[
        { name: "Mike & Karen S.", location: "Olympia, WA", rating: 5, text: "Our new deck is stunning! KOI did an amazing job from design to completion.", project: "Custom Deck" },
        { name: "Lisa R.", location: "Lacey, WA", rating: 5, text: "The patio and fire pit transformed our backyard. Perfect for entertaining!", project: "Paver Patio" },
        { name: "Tom W.", location: "Tumwater, WA", rating: 5, text: "Great craftsmanship on our pergola. Exactly what we wanted.", project: "Pergola" },
        { name: "Jennifer L.", location: "Olympia, WA", rating: 5, text: "KOI built our outdoor kitchen and we use it every weekend. Highly recommend!", project: "Outdoor Kitchen" },
      ]}
      
      // ========== HELP FEATURES ==========
      helpFeatures={[
        { title: "Free Design Consultation", description: "We'll discuss your vision and create a custom outdoor living plan.", icon: "Shield" },
        { title: "Premium Materials", description: "Trex, TimberTech, Azek composites and premium treated lumber.", icon: "ThumbsUp" },
        { title: "Licensed & Insured", description: "Fully licensed contractors with comprehensive insurance coverage.", icon: "CheckCircle" },
        { title: "Fast Installation", description: "Most decks completed within 1-2 weeks with minimal disruption.", icon: "Calendar" },
      ]}
      
      helpImages={{
        topLeft: "/deck-help-1.jpg",
        topRight: "/deck-help-2.jpg",
        bottomFull: "/deck-help-3.jpg",
      }}
      
      trustBadges={[
        "Licensed & Insured",
        "20+ Years Experience",
        "Free Estimates",
        "Composite Specialists",
        "Custom Design",
      ]}
      
      // ========== CTA SECTION ==========
      ctaBackgroundImage="/cta-banner3.jpg"
      ctaTagline="Ready to Transform Your Outdoor Space?"
      ctaTitle="Let's Bring Your Vision to Life"
      ctaDescription="Contact us today for a free, no-obligation consultation."
      ctaButtonText="Get Free Estimate"
      ctaButtonLink="/contact-us"
      ctaPhoneNumber="(253) 348-1847"
      
      // ========== FORM OPTIONS ==========
      formServiceOptions={[
        "Custom Deck",
        "Paver Patio",
        "Pergola",
        "Outdoor Kitchen",
        "Screened Porch",
        "Other",
      ]}
    />
  );
}