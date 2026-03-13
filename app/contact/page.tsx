import { Metadata } from "next";
import { siteData } from "@/lib/site-data";
import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Contactez-nous | Devis et Urgences",
  description: "Besoin d'un plombier à Lyon ? Contactez Duval Plomberie par téléphone ou via notre formulaire pour un devis gratuit ou un dépannage urgent.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-32">
      <section className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Contact &amp; Devis</h1>
            <p className="text-lg text-primary-foreground/80">
              Une urgence ? Un projet ? Notre équipe est à votre écoute.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            <div className="w-full lg:w-1/3 space-y-8">
              <ScrollReveal animation="slide-right" delay={100}>
                <div className="bg-secondary/10 border border-secondary/20 p-6 rounded-2xl flex items-start gap-4 hover:bg-secondary/20 transition-colors">
                  <Zap className="text-secondary h-8 w-8 shrink-0 animate-pulse" />
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Urgence Dépannage</h3>
                    <p className="text-muted-foreground text-sm mb-3">Intervention en 30 min &bull; {siteData.business.emergency}</p>
                    <a href={siteData.business.phoneLink} className="text-2xl font-bold text-secondary hover:underline block">
                      {siteData.business.phone}
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-right" delay={200}>
                <div className="space-y-6 bg-muted/30 p-8 rounded-2xl border border-border">
                  <h3 className="text-2xl font-serif font-bold text-primary">Nos Coordonnées</h3>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Adresse</p>
                      <p className="text-muted-foreground">{siteData.business.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Email</p>
                      <a href={`mailto:${siteData.business.email}`} className="text-muted-foreground hover:text-secondary transition-colors">
                        {siteData.business.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Horaires d&apos;ouverture</p>
                      <p className="text-muted-foreground">{siteData.business.hours}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="w-full lg:w-2/3">
              <ScrollReveal animation="slide-left" delay={300}>
                <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-xl shadow-primary/5">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-serif font-bold text-primary">Demande de Devis</h3>
                    <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                      <Clock className="h-4 w-4" />
                      Réponse sous 2h
                    </div>
                  </div>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">Nom complet *</label>
                        <input type="text" id="name" required aria-required="true" className="w-full h-12 px-4 rounded-md border border-input bg-background text-sm focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" placeholder="Jean Dupont" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground">Téléphone *</label>
                        <input type="tel" id="phone" required aria-required="true" className="w-full h-12 px-4 rounded-md border border-input bg-background text-sm focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" placeholder="06 00 00 00 00" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-foreground">Type de besoin *</label>
                      <select id="service" required aria-required="true" className="w-full h-12 px-4 rounded-md border border-input bg-background text-sm focus:ring-2 focus:ring-secondary focus:border-transparent transition-all">
                        <option value="">Sélectionnez une option</option>
                        <option value="urgence">Dépannage d&apos;urgence</option>
                        <option value="devis">Demande de devis (Rénovation, Installation)</option>
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">Votre message *</label>
                      <textarea id="message" rows={4} required aria-required="true" className="w-full p-4 rounded-md border border-input bg-background text-sm focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none" placeholder="Décrivez brièvement votre besoin..."></textarea>
                    </div>

                    <Button type="submit" className="w-full h-14 text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-[1.02]">
                      Envoyer ma demande
                    </Button>
                    
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-6 pt-6 border-t border-border">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ShieldCheck className="h-4 w-4 text-secondary" /> Garantie Décennale
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-secondary" /> Devis 100% Gratuit
                      </div>
                    </div>
                  </form>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}