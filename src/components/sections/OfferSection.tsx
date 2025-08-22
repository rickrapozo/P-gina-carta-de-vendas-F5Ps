import { Button } from "@/components/ui/button";

export const OfferSection = () => {
  const handleCTA = () => {
    // Track CTA click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'Offer CTA',
        value: 27
      });
    }
    
    // Redirect to payment page
    window.open('https://pay.cakto.com.br/sregdp8', '_blank');
  };

  return (
    <section id="offer-section" className="section-padding bg-gradient-to-b from-background via-muted to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-primary mb-6">
            Veja como você pode começar{" "}
            <span className="text-gold">hoje</span>{" "}
            a instalar este novo sistema operacional...
          </h2>
        </div>

        {/* Main Offer */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-2xl border-2 border-gold/30 mb-8">
          <div className="text-center space-y-8">
            {/* Product Presentation */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-primary">
                📚 Fator Essencial – O Protocolo de Reinstalação Mental 5P
              </h3>
              <p className="text-lg font-inter text-muted-foreground leading-relaxed">
                Eu compilei todo o passo a passo, os exercícios e as ferramentas no e-book completo
              </p>
            </div>

            {/* Value Anchor */}
            <div className="bg-muted rounded-2xl p-6 border border-gold/20">
              <p className="text-lg font-inter leading-relaxed text-card-foreground mb-4">
                <span className="font-bold text-primary">O valor de destravar seu potencial é incalculável.</span> 
                Cursos que prometem menos que isso custam facilmente mais de R$ 500.
              </p>
              <p className="text-base font-inter text-muted-foreground">
                Mas meu objetivo é criar uma ponte, não uma barreira.
              </p>
            </div>

            {/* Pricing */}
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-xl font-inter text-muted-foreground mb-2">
                  Por isso, hoje, seu investimento não será de{" "}
                  <span className="line-through text-destructive">R$ 197</span>... 
                  nem de <span className="line-through text-destructive">R$ 97</span>.
                </p>
                
                <div className="bg-gradient-to-r from-gold to-gold-light rounded-3xl p-8 border-4 border-gold-dark animate-glow">
                  <p className="text-sm font-montserrat font-bold text-gold-foreground/80 mb-2">
                    Seu acesso vitalício ao manual completo da sua mente próspera é de apenas:
                  </p>
                  <div className="text-6xl sm:text-7xl font-montserrat font-bold text-gold-foreground mb-4">
                    R$ 27
                    <span className="text-2xl align-top">,00</span>
                  </div>
                  <p className="text-base font-inter text-gold-foreground/90">
                    💎 Acesso Imediato • 💫 Garantia Total • 🎁 + 4 Bônus Exclusivos
                  </p>
                </div>
              </div>
            </div>

            {/* Main CTA */}
            <div className="space-y-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={handleCTA}
                className="w-full text-lg sm:text-xl py-6"
              >
                🚀 QUERO MEU ACESSO POR R$ 27!
              </Button>
              
              <p className="text-sm text-muted-foreground font-inter">
                ✅ Pagamento 100% Seguro • ✅ Acesso Imediato • ✅ Garantia de 7 Dias
              </p>
            </div>
          </div>
        </div>

        {/* Payment Security */}
        <div className="text-center bg-white/50 rounded-2xl p-6 border border-gold/20">
          <div className="flex justify-center items-center space-x-6 mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-green-500">🔒</span>
              <span className="text-sm font-inter">SSL Seguro</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">💳</span>
              <span className="text-sm font-inter">Cartão/PIX</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-purple-500">⚡</span>
              <span className="text-sm font-inter">Acesso Imediato</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground font-inter">
            Processamento seguro garantido. Seus dados estão protegidos.
          </p>
        </div>
      </div>
    </section>
  );
};