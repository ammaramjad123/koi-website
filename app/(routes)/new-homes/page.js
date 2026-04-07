"use client";

import ServiceLayout from "@/components/ServiceLayout";

export default function NewHomesPage() {
  return (
    <ServiceLayout
      // ========== HERO SECTION ==========
      heroBackgrounds={[
        { id: 1, image: "/newhomes-hero-1.jpg", alt: "Custom home construction Olympia WA" },
        { id: 2, image: "/newhomes-hero-2.jpg", alt: "New home building Lacey WA" },
        { id: 3, image: "/newhomes-hero-3.jpg", alt: "Modern home construction Tumwater WA" },
        { id: 4, image: "/newhomes-hero-4.jpg", alt: "Luxury home building South Puget Sound" },
      ]}
      heroTagline="Custom Home Builder"
      heroTitle="Build Your Dream Home"
      heroHighlightedText="With KOI Build Co"
      heroDescription="Custom home construction from the ground up. Quality craftsmanship, personalized design, and exceptional service across South Puget Sound."
      
      // ========== TRUSTED SECTION ==========
      trustedImage="/newhomes-expert.jpg"
      trustedImageAlt="KOI Build Co custom home builders"
      trustedTagline="Why Choose Us"
      trustedTitle="Olympia's Trusted"
      trustedHighlightedText="Home Builder"
      trustedDescription="With over 20 years of experience, KOI Build Co has become the go-to custom home builder for families across South Puget Sound. We specialize in creating dream homes from the ground up."
      trustedFeatures={[
        "20+ Years of Home Building Experience",
        "Licensed & Insured in Washington State",
        "Custom Design & Architecture",
        "Energy-Efficient Construction",
      ]}
      trustedCtaText="SCHEDULE CONSULTATION"
      trustedCtaLink="/contact-us"
      
      // ========== FEATURED PROJECTS ==========
      featuredProjects={[
        { title: "Modern Farmhouse", location: "Olympia, WA", description: "Custom farmhouse with modern finishes and open concept.", image: "/newhomes-project-1.jpg" },
        { title: "Craftsman Style Home", location: "Lacey, WA", description: "Beautiful craftsman home with custom millwork.", image: "/newhomes-project-2.jpg" },
        { title: "Contemporary Luxury", location: "Tumwater, WA", description: "High-end contemporary home with premium materials.", image: "/newhomes-project-3.jpg" },
        { title: "Rambler Design", location: "Olympia, WA", description: "Single-level rambler with vaulted ceilings.", image: "/newhomes-project-4.jpg" },
        { title: "Two-Story Traditional", location: "Lacey, WA", description: "Classic two-story home with spacious layout.", image: "/newhomes-project-5.jpg" },
        { title: "Eco-Friendly Home", location: "Olympia, WA", description: "Sustainable home with energy-efficient features.", image: "/newhomes-project-6.jpg" },
        { title: "Custom Spec Home", location: "Olympia, WA", description: "Bespoke home designed to client specifications.", image: "/newhomes-project-7.jpg" },
        { title: "Waterfront Property", location: "Lacey, WA", description: "Luxury home with stunning water views.", image: "/newhomes-project-8.jpg" },
        { title: "Mountain View Estate", location: "Tumwater, WA", description: "Sprawling estate with mountain views.", image: "/newhomes-project-9.jpg" },
        { title: "Urban Infill", location: "Olympia, WA", description: "Modern home designed for urban living.", image: "/newhomes-project-10.jpg" },
        { title: "Custom Ranch", location: "Lacey, WA", description: "Spacious ranch-style home with acreage.", image: "/newhomes-project-11.jpg" },
        { title: "Luxury Townhome", location: "Olympia, WA", description: "High-end townhome in desirable community.", image: "/newhomes-project-12.jpg" },
      ]}
      
      // ========== TESTIMONIALS ==========
      testimonials={[
        { name: "John & Sarah P.", location: "Olympia, WA", rating: 5, text: "KOI built our dream home from the ground up. Exceptional quality!", project: "Custom Home" },
        { name: "Michael T.", location: "Lacey, WA", rating: 5, text: "Great communication throughout the build. Completed on time and budget.", project: "New Construction" },
        { name: "Lisa & David R.", location: "Tumwater, WA", rating: 5, text: "KOI exceeded our expectations. Made home building stress-free.", project: "Custom Build" },
        { name: "Jennifer C.", location: "Olympia, WA", rating: 5, text: "Professional, skilled, and truly cares about quality. Highly recommend!", project: "New Home" },
      ]}
      
      // ========== HELP FEATURES ==========
      helpFeatures={[
        { title: "Custom Design", description: "We work with you to create a home that fits your lifestyle.", icon: "Shield" },
        { title: "Quality Materials", description: "We use only premium materials from trusted manufacturers.", icon: "ThumbsUp" },
        { title: "Licensed & Insured", description: "Fully licensed general contractors with comprehensive insurance.", icon: "CheckCircle" },
        { title: "Project Management", description: "Dedicated project manager overseeing every aspect of construction.", icon: "Calendar" },
      ]}
      
      helpImages={{
        topLeft: "/newhomes-help-1.jpg",
        topRight: "/newhomes-help-2.jpg",
        bottomFull: "/newhomes-help-3.jpg",
      }}
      
      trustBadges={[
        "Licensed & Insured",
        "20+ Years Experience",
        "Custom Designs",
        "Quality Materials",
        "Project Management",
      ]}
      
      // ========== CTA SECTION ==========
      ctaBackgroundImage="/cta-banner3.jpg"
      ctaTagline="Ready to Build Your Dream Home?"
      ctaTitle="Let's Bring Your Vision to Life"
      ctaDescription="Contact us today for a free, no-obligation consultation."
      ctaButtonText="Get Free Estimate"
      ctaButtonLink="/contact-us"
      ctaPhoneNumber="(253) 348-1847"
      
      // ========== FORM OPTIONS ==========
      formServiceOptions={[
        "Custom Home",
        "Spec Home",
        "Townhome",
        "Multi-Family",
        "Ranch Style",
        "Other",
      ]}
    />
  );
}