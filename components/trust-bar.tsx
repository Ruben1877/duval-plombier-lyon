import { ShieldCheck, Banknote, FileCheck2, Wrench } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export function TrustBar() {
  const guarantees = [
    { icon: Banknote, title: "Tarifs Transparents", desc: "Devis annoncé avant travaux" },
    { icon: ShieldCheck, title: "Agréé Assurances", desc: "Dégâts des eaux pris en charge" },
    { icon: FileCheck2, title: "Garantie Décennale", desc: "Ouvrages assurés 10 ans" },
    { icon: Wrench, title: "Artisan Qualifié", desc: "8 ans d'expertise à Lyon" },
  ];

  return (
    <div className="bg-card border-b border-border/50 relative z-20 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-6 md:py-8 divide-x divide-border/50">
          {guarantees.map((item, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
              <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-3 px-2 md:px-6 group">
                <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 shrink-0">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm md:text-base text-foreground leading-tight mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground hidden md:block">{item.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}