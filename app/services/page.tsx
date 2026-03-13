import { Metadata } from "next";
import type { ElementType } from "react";
import { siteData } from "@/lib/site-data";
import { CTASection } from "@/components/cta-section";
import { Clock, Flame, Bath, Droplet, Wrench, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Nos Services de Plomberie et Chauffage",
  description: "Découvrez l'ensemble de nos prestations : dépannage d'urgence, installation de chaudière, création de salle de bain, recherche de fuite à Lyon.",
};

const iconMap: Record<string, ElementType> = {
  Clock, Flame, Bath, Droplet, Wrench, ShieldCheck
};

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-32">
      <section className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Nos Services d&apos;Expertise</h1>
          <p className="text-lg text-primary-foreground/80">
            Une gamme complète de services en plomberie et chauffage, réalisés dans les règles de l&apos;art avec des matériaux de qualité professionnelle.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {siteData.services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const isEven = index % 2 === 0;
              return (
                <div key={service.id} id={service.id} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                  <div className="w-full md:w-1/2">
                    <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center p-12 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                      <Icon className="w-32 h-32 text-primary opacity-20 absolute -right-8 -bottom-8 transform group-hover:scale-110 transition-transform duration-500" />
                      <Icon className="w-20 h-20 text-secondary relative z-10" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary border border-primary/10">
                      <Icon className="h-4 w-4" />
                      <span className="text-sm font-semibold tracking-wide uppercase">Expertise</span>
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-foreground">{service.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 pt-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-foreground font-medium">
                          <CheckCircle2 className="h-5 w-5 text-secondary mr-3 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}