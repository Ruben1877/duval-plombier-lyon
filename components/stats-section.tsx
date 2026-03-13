import { siteData } from "@/lib/site-data";
import { CheckCircle2, Users, Clock, Award } from "lucide-react";

export function StatsSection() {
  const stats = [
    { label: "Années d'expérience", value: siteData.business.experienceYears, icon: Award, suffix: "+" },
    { label: "Interventions réussies", value: siteData.business.interventions, icon: CheckCircle2, suffix: "" },
    { label: "Clients satisfaits", value: siteData.business.satisfaction, icon: Users, suffix: "" },
    { label: "Délai d'intervention", value: "30", icon: Clock, suffix: " min" },
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-primary-foreground/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4">
              <stat.icon className="h-8 w-8 text-secondary mb-4 opacity-80" />
              <div className="text-4xl md:text-5xl font-bold font-serif mb-2 flex items-baseline">
                {stat.value}
                <span className="text-2xl text-secondary ml-1">{stat.suffix}</span>
              </div>
              <p className="text-sm text-primary-foreground/80 font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}