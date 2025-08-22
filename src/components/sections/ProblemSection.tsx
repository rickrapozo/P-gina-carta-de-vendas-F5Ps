export const ProblemSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8 animate-fade-in-up">
          {/* Opening Hook */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-primary mb-6">
              A Verdade Que Ninguém Te Contou Sobre o{" "}
              <span className="text-gold">Sucesso</span>
            </h2>
          </div>
          
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-gold/10">
                <p className="text-lg font-inter leading-relaxed text-card-foreground mb-6">
                  <span className="font-bold text-gold">Você já se sentiu como se estivesse dirigindo um carro de corrida com o freio de mão puxado?</span>
                </p>
                
                <p className="text-base font-inter leading-relaxed text-muted-foreground mb-4">
                  Você acelera, o motor ruge, você se esforça... mas simplesmente não sai do lugar.
                </p>
                
                <p className="text-base font-inter leading-relaxed text-card-foreground">
                  Se essa frustração te parece familiar, eu quero que você saiba de duas coisas: 
                  <span className="font-bold text-primary"> você não está sozinho.</span> E 
                  <span className="font-bold text-gold"> o problema não é a sua falta de esforço.</span>
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* The Old Way Problem */}
              <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-6">
                <h3 className="text-xl font-montserrat font-bold text-destructive mb-4">
                  ❌ O Método Defeituoso que Você Conhece
                </h3>
                <p className="text-base font-inter leading-relaxed text-card-foreground">
                  O problema é que 99% dos métodos de desenvolvimento pessoal tratam sua mente como um conjunto de peças soltas. 
                  Eles te vendem "aplicativos" defeituosos — "pense positivo", "use afirmações" — 
                  <span className="font-bold text-destructive"> enquanto o seu sistema operacional continua corrompido.</span>
                </p>
              </div>
              
              {/* The New Revelation */}
              <div className="bg-gold/10 border border-gold/20 rounded-2xl p-6">
                <h3 className="text-xl font-montserrat font-bold text-gold mb-4">
                  ✨ A Descoberta Revolucionária
                </h3>
                <p className="text-base font-inter leading-relaxed text-card-foreground mb-4">
                  A verdade é que sua mente não é um conjunto de peças. 
                  <span className="font-bold text-primary"> É um sistema operacional.</span>
                </p>
                <p className="text-base font-inter leading-relaxed text-card-foreground">
                  O que vou te mostrar hoje não é mais uma técnica isolada. É o primeiro e único método que trata sua mente como o sistema integrado que ela é. 
                  <span className="font-bold text-gold"> Nós não vamos remendar o velho. Nós vamos fazer uma reinstalação completa do seu software mental.</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <p className="text-xl font-montserrat font-bold text-primary mb-4">
              Alinhando Pensamento, Sentimento, Emoção, Ação e Resultado em um fluxo contínuo de poder.
            </p>
            <div className="flex justify-center space-x-2 text-gold">
              {['💭', '💝', '⚡', '🎯', '🏆'].map((emoji, index) => (
                <span key={index} className="text-3xl animate-bounce" style={{animationDelay: `${index * 0.2}s`}}>
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};