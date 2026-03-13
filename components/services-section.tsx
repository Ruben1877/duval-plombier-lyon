import type { ElementType } from "react";
import { siteData } from "@/lib/site-data";
import { Clock, Flame, Bath, Droplet, Wrench, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

const iconMap: Record<string, ElementType> = {
  Clock, Flame, Bath, Droplet, Wrench, ShieldCheck
};

export function ServicesSection() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Expertise & Savoir-faire</h2>
            <p className="text-muted-foreground text-lg">
              {"De la réparation d'urgence à la rénovation complète, nous appliquons les mêmes standards de rigueur et de qualité."}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {siteData.services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const isEmergency = service.id === "urgence" || service.id === "fuites";
            
            return (
              <ScrollReveal key={service.id} animation="fade-up" delay={index * 100}>
                <div className={`group bg-card rounded-3xl p-8 border ${isEmergency ? 'border-secondary/30 shadow-secondary/5' : 'border-border/50'} shadow-lg hover:shadow-xl hover:border-secondary/50 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col relative overflow-hidden`}>
                  
                  {isEmergency && (
                    <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
                      Priorité
                    </div>
                  )}

                  <div className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500 ${isEmergency ? 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white' : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">{service.title}</h3>
                  <p className="text-muted-foreground mb-8 line-clamp-3 flex-grow text-base leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm font-medium text-foreground/80">
                        <div className={`h-1.5 w-1.5 rounded-full mr-3 ${isEmergency ? 'bg-secondary' : 'bg-primary/40'}`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button asChild variant="ghost" className="w-full justify-between group/btn hover:text-secondary hover:bg-secondary/5 mt-auto border border-border/50 rounded-xl h-12">
                    <Link href={`/services#${service.id}`}>
                      Détails de la prestation
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}