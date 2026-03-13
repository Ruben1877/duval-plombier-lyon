import { Metadata } from "next";
import Image from "next/image";
import { siteData } from "@/lib/site-data";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Galerie Photos | Nos Réalisations en Plomberie",
  description: "Découvrez en images nos dernières réalisations : rénovation de salles de bain, installation de chaudières et travaux de plomberie à Lyon.",
};

export default function GalleryPage() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Header Page */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Nos Réalisations</h1>
          <p className="text-lg text-primary-foreground/80">
            Un aperçu de notre savoir-faire en images. De la réparation technique à la création de salles de bain complètes.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.gallery.map((image, idx) => (
              <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}