import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { PromiseSection } from "@/components/sections/PromiseSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { EnemySection } from "@/components/sections/EnemySection";
import { UrgencySection } from "@/components/sections/UrgencySection";
import { AuthorSection } from "@/components/sections/AuthorSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { BonusesSection } from "@/components/sections/BonusesSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const observeElements = () => {
      const elements = document.querySelectorAll('.fade-in-up');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );
      
      elements.forEach((el) => observer.observe(el));
      
      return () => observer.disconnect();
    };
    
    // Initialize animations after component mount
    const cleanup = observeElements();
    
    // Track page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Fator Essencial - Método 5Ps Landing Page',
        page_location: window.location.href
      });
    }
    
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Fator Essencial - Método 5Ps",
            "description": "Método revolucionário de 15 minutos diários para reprogramar sua mente para a prosperidade. Transforme ansiedade em combustível e derrube barreiras invisíveis.",
            "image": "https://lovable.dev/opengraph-image-p98pqg.png",
            "brand": {
              "@type": "Person",
              "name": "Ricardo Borges Rapozo"
            },
            "offers": {
              "@type": "Offer",
              "price": "27.00",
              "priceCurrency": "BRL",
              "availability": "https://schema.org/InStock",
              "validFrom": new Date().toISOString(),
              "priceValidUntil": new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2847"
            }
          })
        }}
      />

      {/* Main Landing Page Sections */}
      <main>
        {/* 1. Hero Section - The Hook */}
        <HeroSection />
        
        {/* 2. Problem Section - Emotional Connection */}
        <ProblemSection />
        
        {/* 3. Promise Section - Future Vision */}
        <PromiseSection />
        
        {/* 4. Social Proof - Real-World Evidence */}
        <TestimonialsSection />
        
        {/* 5. Common Enemy - Justifying Past Failures */}
        <EnemySection />
        
        {/* 6. Urgency Section - The Stakes */}
        <UrgencySection />
        
        {/* 7. Credibility Section - Meet the Author */}
        <AuthorSection />
        
        {/* 8. Product Presentation - How It Works (5Ps) */}
        <ProductSection />
        
        {/* 9. The Offer & Pricing */}
        <OfferSection />
        
        {/* 10. Bonuses Section */}
        <BonusesSection />
        
        {/* 11. Guarantee Section */}
        <GuaranteeSection />
        
        {/* 12. Final CTA & Urgency */}
        <FinalCTASection />
      </main>
      
      
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-inter text-secondary-foreground/80">
              © 2024 Fator Essencial - Método 5Ps. Todos os direitos reservados.
            </p>
            <p className="text-xs font-inter text-secondary-foreground/60">
              Ricardo Borges Rapozo • Especialista em Neurociência Comportamental
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 text-xs text-secondary-foreground/60">
            <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-gold transition-colors">Contato</a>
          </div>
          
          <div className="pt-4 border-t border-secondary-foreground/20">
            <p className="text-xs font-inter text-secondary-foreground/60 max-w-2xl mx-auto leading-relaxed">
              Este produto não substitui o acompanhamento médico ou psicológico profissional. 
              Os resultados podem variar de pessoa para pessoa. Consulte sempre um profissional qualificado.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;