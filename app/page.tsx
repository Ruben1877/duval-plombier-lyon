import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services-section";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Plombier Chauffagiste à Lyon — Urgence 24h/24 | Duval Plomberie",
  description: "Artisan plombier chauffagiste à Lyon depuis 8 ans. Dépannage urgence 7j/7 en moins de 30 min, installation chaudières, rénovation salles de bain. Devis gratuit.",
  alternates: {
    canonical: "https://duval-plombier-lyon.fr",
  },
};

export default function Home() {
  // Structured Data pour le SEO Local
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteData.business.name,
    "image": "https://duval-plombier-lyon.fr" + siteData.gallery[0].url,
    "description": siteData.business.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "47 rue de la République",
      "addressLocality": "Lyon",
      "postalCode": "69002",
      "addressCountry": "FR"
    },
    "telephone": siteData.business.phone,
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:00",
        "closes": "20:00"
      }
    ],
    "url": "https://duval-plombier-lyon.fr"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}