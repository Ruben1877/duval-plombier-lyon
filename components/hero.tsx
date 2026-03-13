import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ShieldAlert, ArrowRight, CheckCircle2 } from "lucide-react";
import { siteData } from "@/lib/site-data";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-[85vh] flex items-center bg-primary">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=2000"
          alt="Plombier réparant une fuite"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary z-10" />
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 mb-6 backdrop-blur-md">
              <ShieldAlert className="h-4 w-4 animate-pulse" />
              <span className="text-sm font-bold tracking-wide uppercase">Service d&apos;Urgence Disponible</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={200}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 drop-shadow-sm">
              Fuite d&apos;eau ?<br />
              <span className="text-white/70">Panne de chaudière ?</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={300}>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl leading-relaxed font-medium">
              Ne paniquez pas. Nous intervenons en <strong className="text-white">moins de 30 minutes</strong> à Lyon. Tarifs annoncés avant intervention, aucune mauvaise surprise.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button asChild size="lg" className="relative overflow-hidden bg-secondary hover:bg-secondary/90 text-white rounded-xl h-16 px-8 text-base md:text-lg shadow-[0_0_40px_rgba(var(--secondary),0.3)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(var(--secondary),0.5)] border border-secondary/50 group">
                <a href={siteData.business.phoneLink}>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  <Phone className="mr-3 h-6 w-6" />
                  <div className="flex flex-col items-start">
                    <span className="font-bold leading-none mb-1">Appeler le {siteData.business.phone}</span>
                    <span className="text-xs font-normal text-white/80 leading-none">Disponible 24h/24 et 7j/7</span>
                  </div>
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl h-16 px-8 text-base bg-white/5 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-primary transition-all group">
                <Link href="/contact">
                  Devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={500}>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span>Déplacement rapide</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span>Diagnostic précis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span>Réparation garantie</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}