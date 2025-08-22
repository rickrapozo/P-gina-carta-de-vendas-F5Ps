export const GuaranteeSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        <div className="text-center animate-fade-in-up">
          {/* Guarantee Badge */}
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gold rounded-full border-8 border-gold-light shadow-2xl mb-8 animate-glow">
            <div className="text-center">
              <div className="text-3xl font-montserrat font-bold text-gold-foreground">7</div>
              <div className="text-sm font-montserrat font-bold text-gold-foreground">DIAS</div>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold mb-8">
            Sua Garantia Blindada de{" "}
            <span className="text-gold">Risco Zero:</span>
          </h2>
          
          <div className="space-y-8">
            {/* Main Guarantee */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gold/30">
              <div className="space-y-6 text-lg font-inter leading-relaxed">
                <p className="text-xl sm:text-2xl font-bold text-gold">
                  Eu assumo 100% do risco.
                </p>
                
                <p>
                  Adquira o <span className="font-bold text-gold">Protocolo 5P</span> hoje. 
                  Se em <span className="font-bold text-gold">7 dias</span> você não sentir uma mudança profunda na sua clareza mental e estado emocional, 
                  apenas me envie um e-mail e <span className="font-bold text-gold">eu devolvo cada centavo do seu investimento.</span>
                </p>
                
                <div className="bg-gold/20 rounded-2xl p-6 border border-gold/40">
                  <p className="font-bold text-xl text-gold">
                    Sem perguntas. Sem complicações.
                  </p>
                  <p className="mt-2">
                    E você pode <span className="font-bold">ficar com todos os bônus</span> como um presente meu, 
                    apenas por ter me dado uma chance.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Why This Guarantee */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h4 className="text-xl font-montserrat font-bold text-gold mb-4">
                  🛡️ Por que ofereço essa garantia?
                </h4>
                <p className="text-base font-inter leading-relaxed opacity-90">
                  Porque tenho absoluta confiança no método. Mais de 2.847 pessoas já transformaram suas vidas com o Protocolo 5P. 
                  A taxa de reembolso é inferior a 2%.
                </p>
              </div>
              
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h4 className="text-xl font-montserrat font-bold text-gold mb-4">
                  ⚡ Como funciona a garantia?
                </h4>
                <p className="text-base font-inter leading-relaxed opacity-90">
                  Simples: aplique o método por 7 dias. Se não sentir mudanças reais na sua mentalidade e estado emocional, 
                  envie um email e receba 100% do seu dinheiro de volta.
                </p>
              </div>
            </div>
            
            {/* Risk Reversal */}
            <div className="bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 rounded-3xl p-8 border border-gold/30">
              <div className="text-center space-y-4">
                <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-gold">
                  Quem Assume o Risco?
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
                  <div className="space-y-3">
                    <div className="text-4xl">❌</div>
                    <h4 className="font-montserrat font-bold text-lg">Você</h4>
                    <p className="text-sm opacity-80">Risco ZERO</p>
                  </div>
                  <div className="space-y-3">
                    <div className="text-4xl">✅</div>
                    <h4 className="font-montserrat font-bold text-lg">Eu (Ricardo)</h4>
                    <p className="text-sm opacity-80">100% do Risco</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white/10 rounded-xl border border-gold/20">
                  <p className="font-playfair italic text-xl text-gold">
                    "É assim que funciona quando você tem certeza absoluta do que está oferecendo."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};