import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { siteData } from "@/lib/site-data";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary z-0"></div>
      <div className="absolute inset-0 bg-pattern opacity-10 z-0"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            {"Besoin d'un plombier en urgence ou d'un devis pour vos travaux ?"}
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10">
            Notre équipe est disponible 7j/7 pour les urgences. Pour vos projets de rénovation, nous vous fournissons un devis détaillé et gratuit sous 48h.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-white rounded-full h-14 px-8 text-base">
              <a href={siteData.business.phoneLink}>
                <Phone className="mr-2 h-5 w-5" />
                Appeler le {siteData.business.phone}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-14 px-8 text-base bg-transparent border-white text-white hover:bg-white hover:text-primary transition-colors">
              <Link href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Demander un devis en ligne
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}