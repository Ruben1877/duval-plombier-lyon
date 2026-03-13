import { siteData } from "@/lib/site-data";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Ils nous font confiance</h2>
          <p className="text-muted-foreground text-lg">
            {"La satisfaction de nos clients est notre priorité absolue. Découvrez leurs retours d'expérience."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteData.testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-muted/30 p-8 rounded-2xl relative border border-border">
              <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/5" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-muted"}`} 
                  />
                ))}
              </div>
              <p className="text-foreground/80 italic mb-6 relative z-10">
                {`\u00AB ${testimonial.text} \u00BB`}
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary font-serif">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}