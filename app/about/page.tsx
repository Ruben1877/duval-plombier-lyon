import { Metadata } from "next";
import Image from "next/image";
import { siteData } from "@/lib/site-data";
import { CTASection } from "@/components/cta-section";
import { Shield, Target, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "À Propos | Notre Entreprise de Plomberie",
  description: "Découvrez l'histoire, les valeurs et les engagements de Duval Plomberie, votre artisan de confiance à Lyon depuis 8 ans.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-32">
      <section className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Notre Histoire &amp; Nos Valeurs</h1>
          <p className="text-lg text-primary-foreground/80">
            Plus qu&apos;une entreprise, nous sommes des artisans passionnés par notre métier et dédiés au confort de nos clients lyonnais.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl font-serif font-bold text-primary">L&apos;artisanat au cœur de notre démarche</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fondée il y a {siteData.business.experienceYears} ans par un passionné du métier, l&apos;entreprise <strong>{siteData.business.name}</strong> s&apos;est rapidement imposée comme une référence de fiabilité et de qualité dans la région lyonnaise.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Face aux pratiques parfois opaques du secteur, nous avons fait le choix de la <strong>transparence totale</strong>. Devis détaillés, tarifs annoncés avant intervention, et conseils personnalisés sont les piliers de notre relation client.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Aujourd&apos;hui, nous sommes fiers d&apos;avoir accompagné plus de {siteData.business.interventions} foyers et professionnels dans leurs projets et leurs urgences.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=1000"
                  alt="Artisan plombier au travail"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Nos Engagements</h2>
            <p className="text-muted-foreground text-lg">
              Ce qui fait notre différence au quotidien sur le terrain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border text-center">
              <div className="mx-auto h-16 w-16 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold font-serif mb-3">Réactivité</h3>
              <p className="text-muted-foreground">
                Une fuite ne prévient pas. C&apos;est pourquoi nous maintenons un service d&apos;astreinte pour intervenir en moins de 30 minutes sur les urgences, 7j/7.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border text-center">
              <div className="mx-auto h-16 w-16 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold font-serif mb-3">Transparence</h3>
              <p className="text-muted-foreground">
                Aucune mauvaise surprise. Nos tarifs sont clairs, nos devis sont gratuits et nous n&apos;effectuons aucune réparation sans votre accord préalable.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border text-center">
              <div className="mx-auto h-16 w-16 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                <HeartHandshake className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold font-serif mb-3">Qualité</h3>
              <p className="text-muted-foreground">
                Nous travaillons exclusivement avec des marques reconnues et garantissons l&apos;ensemble de nos installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}