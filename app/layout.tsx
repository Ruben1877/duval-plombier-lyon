import type { Metadata, Viewport } from "next";
import { Montserrat, Merriweather } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingCallButton } from "@/components/floating-call-button";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const merriweather = Merriweather({ 
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1E3A5F",
};

export const metadata: Metadata = {
  title: {
    default: "Duval Plomberie | Plombier Chauffagiste à Lyon",
    template: "%s | Duval Plomberie Lyon"
  },
  description: "Artisan plombier chauffagiste de confiance à Lyon. Dépannage d'urgence 24/7, installation de chaudières, rénovation de salles de bain. Intervention rapide.",
  keywords: ["plombier Lyon", "chauffagiste Lyon", "dépannage plomberie", "urgence plomberie Lyon", "rénovation salle de bain"],
  authors: [{ name: "Duval Plomberie" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://duval-plombier-lyon.fr",
    title: "Duval Plomberie | Plombier Chauffagiste à Lyon",
    description: "Artisan plombier chauffagiste de confiance à Lyon. Dépannage d'urgence 24/7.",
    siteName: "Duval Plomberie",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${merriweather.variable}`}>
      <body className="font-sans flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}