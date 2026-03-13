import Link from "next/link";
import { MapPin, Phone, Mail, Wrench } from "lucide-react";
import { siteData } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-white text-primary p-2 rounded-lg">
                <Wrench className="h-6 w-6" />
              </div>
              <div>
                <span className="font-serif font-bold text-xl tracking-tight block leading-none">Duval</span>
                <span className="text-xs font-medium text-primary-foreground/80 uppercase tracking-wider">Plomberie</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs mt-4">
              {siteData.business.tagline}. Experts en dépannage, installation et rénovation pour les particuliers et les professionnels.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 font-serif">Liens rapides</h3>
            <ul className="space-y-3">
              {siteData.navigation.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-primary-foreground/80 hover:text-white transition-colors text-sm flex items-center gap-2">
                    <span className="h-1 w-1 bg-secondary rounded-full"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 font-serif">Contact &amp; Horaires</h3>
            <ul className="space-y-4">
              <li>
                <a href={siteData.business.phoneLink} className="flex items-start gap-3 text-primary-foreground/80 hover:text-white transition-colors text-sm group">
                  <Phone className="h-5 w-5 text-secondary group-hover:text-white transition-colors shrink-0" />
                  <div>
                    <span className="block font-bold text-white">{siteData.business.phone}</span>
                    <span className="text-xs">Urgences : {siteData.business.emergency}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteData.business.email}`} className="flex items-center gap-3 text-primary-foreground/80 hover:text-white transition-colors text-sm group">
                  <Mail className="h-5 w-5 text-secondary group-hover:text-white transition-colors shrink-0" />
                  {siteData.business.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                <span>{siteData.business.address}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/60">
            &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> {siteData.business.name}. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="text-xs text-primary-foreground/60 hover:text-white transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}