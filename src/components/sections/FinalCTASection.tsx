import { Button } from "@/components/ui/button";

export const FinalCTASection = () => {
  const handleFinalCTA = () => {
    // Track final CTA click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'Final CTA',
        value: 27
      });
    }
    
    // Here you would typically redirect to a payment processor
    alert('Redirecionando para o checkout... (Demo)');
  };

  return (
    <section className="section-padding bg-gradient-to-b from-secondary via-primary to-secondary text-secondary-foreground">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12 animate-fade-in-up">
          {/* The Three Options */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold mb-8">
              A essa altura, você tem{" "}
              <span className="text-gold">três opções claras:</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Option 1 - Do Nothing */}
            <div className="bg-destructive/20 rounded-3xl p-8 border-2 border-destructive/30 text-center">
              <div className="text-5xl mb-4">😴</div>
              <h3 className="text-xl font-montserrat font-bold text-destructive mb-4">
                1. Não fazer nada
              </h3>
              <p className="text-sm font-inter leading-relaxed opacity-90">
                Fechar esta página e continuar no mesmo caminho, correndo o risco real de chegar ao fim da vida com o arrependimento de não ter vivido seu verdadeiro potencial.
              </p>
            </div>
            
            {/* Option 2 - Try Alone */}
            <div className="bg-muted/20 rounded-3xl p-8 border-2 border-muted/30 text-center">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-xl font-montserrat font-bold text-muted-foreground mb-4">
                2. Tentar sozinho
              </h3>
              <p className="text-sm font-inter leading-relaxed opacity-90">
                Continuar pulando de vídeo em vídeo, gastando tempo e energia em técnicas isoladas que já provaram não funcionar para você.
              </p>
            </div>
            
            {/* Option 3 - Accept The Invitation */}
            <div className="bg-gold/20 rounded-3xl p-8 border-2 border-gold animate-glow text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-montserrat font-bold text-gold mb-4">
                3. Aceitar meu convite
              </h3>
              <p className="text-sm font-inter leading-relaxed">
                Investir menos que o valor de uma pizza, com risco zero, em um método testado e comprovado que pode te poupar anos de sofrimento.
              </p>
            </div>
          </div>
          
          {/* Personal Message */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gold/30 text-center">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-gold">
                Uma Mensagem Pessoal
              </h3>
              
              <div className="max-w-3xl mx-auto space-y-6 text-lg font-inter leading-relaxed">
                <p>
                  <span className="font-bold text-gold">Sinceramente, este método não é para quem busca uma pílula mágica.</span> 
                  Ele exige 15 minutos de compromisso diário.
                </p>
                
                <p>
                  É para os poucos que estão <span className="font-bold text-white">genuinamente fartos da mediocridade</span> e prontos para assumir o controle total.
                </p>
                
                <div className="bg-gold/10 rounded-2xl p-6 border border-gold/20">
                  <p className="font-bold text-white mb-4">
                    A maioria das pessoas vai continuar sonhando.
                  </p>
                  <p>
                    Mas se você leu até aqui, suspeito que você não seja como a maioria.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-xl font-montserrat font-bold text-gold">
                    A escolha é sua.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 text-center">
                    <div>
                      <p className="font-bold text-destructive mb-2">O que você tem a perder?</p>
                      <p className="text-sm opacity-80">Apenas a paralisia, a dúvida e a frustração</p>
                    </div>
                    <div>
                      <p className="font-bold text-gold mb-2">O que você tem a ganhar?</p>
                      <p className="text-sm">A vida que você sempre soube que merecia viver</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <p className="text-xl sm:text-2xl font-montserrat font-bold text-gold">
                Se você está pronto para autorizar sua própria transformação...
              </p>
              
              <Button 
                variant="hero" 
                size="xl"
                onClick={handleFinalCTA}
                className="w-full sm:w-auto text-lg sm:text-xl py-6 px-12"
              >
                ✨ QUERO MINHA MENTE PRÓSPERA AGORA!
              </Button>
              
              <p className="text-sm text-secondary-foreground/70 font-inter">
                Acesso Imediato por apenas R$ 27,00 • Garantia Total de 7 Dias
              </p>
            </div>
            
            <div className="bg-gold/10 rounded-2xl p-6 border border-gold/20 max-w-2xl mx-auto">
              <p className="font-playfair italic text-xl text-gold">
                "O momento da decisão é o momento da definição do seu destino."
              </p>
              <p className="text-sm font-montserrat font-bold text-gold mt-2">
                — Ricardo Borges Rapozo
              </p>
            </div>
            
            {/* WhatsApp Contact Button */}
            <div className="mt-12 text-center">
              <a 
                href="https://wa.me/555196359118?text=Ainda%20Tenho%20D%C3%BAvidas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span className="text-xl font-bold">Ainda com Dúvidas?</span>
                </div>
                <span className="text-sm opacity-90">Entre em contato com a nossa equipe pelo WhatsApp agora mesmo.</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};