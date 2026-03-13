"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Wrench, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [mobileMenuOpen]);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl shadow-sm border-b border-border py-2" 
          : "bg-transparent border-b border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 transition-all">
          
          <Link href="/" className="flex items-center gap-3 group z-50">
            <div className={cn(
              "p-2.5 rounded-xl transition-colors duration-300",
              isScrolled ? "bg-primary text-white group-hover:bg-secondary" : "bg-white text-primary"
            )}>
              <Wrench className="h-6 w-6 md:h-7 md:w-7" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-serif font-bold text-xl md:text-2xl tracking-tight leading-none transition-colors",
                isScrolled ? "text-primary" : "text-white"
              )}>Duval</span>
              <span className={cn(
                "text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-colors",
                isScrolled ? "text-muted-foreground" : "text-white/80"
              )}>Plomberie</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 bg-background/50 backdrop-blur-md px-8 py-3 rounded-full border border-border/50 shadow-sm">
            {siteData.navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-semibold transition-all hover:text-secondary relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-secondary after:transition-all hover:after:w-full",
                  pathname === item.href ? "text-secondary after:w-full" : (isScrolled ? "text-foreground/80" : "text-white/90")
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex flex-col items-end mr-2">
              <span className={cn(
                "text-xs font-bold uppercase flex items-center gap-1",
                isScrolled ? "text-red-600" : "text-red-400"
              )}>
                <ShieldAlert className="h-3 w-3" /> Urgence 24/7
              </span>
              <a href={siteData.business.phoneLink} className={cn(
                "text-lg font-bold hover:text-secondary transition-colors",
                isScrolled ? "text-primary" : "text-white"
              )}>
                {siteData.business.phone}
              </a>
            </div>
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-white rounded-xl px-6 h-12 shadow-lg shadow-secondary/20 transition-transform hover:scale-105">
              <a href={siteData.business.phoneLink}>
                <Phone className="mr-2 h-4 w-4" />
                Appeler
              </a>
            </Button>
          </div>

          <button
            className={cn(
              "lg:hidden z-50 rounded-md transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center", /* CORRECTION: Touch target 44px */
              isScrolled ? "text-primary hover:bg-muted" : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? <X className="h-7 w-7 text-foreground" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      <div className={cn(
        "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 lg:hidden transition-all duration-500 ease-in-out flex flex-col pt-28 px-6",
        mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col gap-4">
          {siteData.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "px-4 py-4 rounded-xl text-xl font-serif font-bold transition-colors border border-border/50",
                pathname === item.href ? "bg-primary/5 text-primary border-primary/20" : "text-foreground hover:bg-muted"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pb-12 space-y-4">
          <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-center">
            <ShieldAlert className="h-8 w-8 text-red-600 mx-auto mb-2" />
            <p className="font-bold text-red-700 mb-1">Besoin d&apos;une intervention urgente ?</p>
            <p className="text-sm text-red-600 mb-4">Un technicien est disponible maintenant.</p>
            <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white h-14 text-lg rounded-xl shadow-lg">
              <a href={siteData.business.phoneLink}>
                <Phone className="mr-2 h-5 w-5" />
                {siteData.business.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}