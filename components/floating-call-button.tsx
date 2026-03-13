"use client";

import { Phone, Clock } from "lucide-react";
import { siteData } from "@/lib/site-data";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(false);

  // N'afficher le bouton flottant qu'après avoir scrollé un peu
  // pour ne pas masquer le CTA principal du Hero au chargement
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div 
      className={cn(
        "fixed z-50 transition-all duration-500 ease-in-out",
        "bottom-6 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:w-auto",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
    >
      <a
        href={siteData.business.phoneLink}
        className="group relative flex items-center justify-center gap-3 bg-secondary text-white p-4 md:px-8 md:py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(var(--secondary),0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
      >
        {/* Effet de brillance au survol */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
        
        <div className="relative flex items-center justify-center h-10 w-10 bg-white/20 rounded-full shrink-0 group-hover:bg-white/30 transition-colors">
          <Phone className="h-5 w-5 animate-[ring_4s_ease-in-out_infinite]" />
        </div>
        
        <div className="flex flex-col items-start mr-2">
          <span className="text-sm font-bold tracking-wide uppercase leading-none mb-1">
            Urgence 24/7
          </span>
          <span className="text-xs text-white/80 flex items-center gap-1 font-medium">
            <Clock className="h-3 w-3" /> Intervention 30 min
          </span>
        </div>
      </a>
    </div>
  );
}