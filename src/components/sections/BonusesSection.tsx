export const BonusesSection = () => {
  const bonuses = [
    {
      title: "BÔNUS 1: O Arsenal Emocional",
      value: "R$ 189",
      description: "Um workshop de neurociência dos Sentimentos e Emoções, para transformar medo em poder e ansiedade em ação em menos de 5 minutos.",
      icon: "🧠",
      highlight: "Neurociência Aplicada"
    },
    {
      title: "BÔNUS 2: Biblioteca Premium de Aceleração",
      value: "R$ 139", 
      description: "Mais de 50 títulos em PDF para turbinar seu desenvolvimento contínuo.",
      icon: "📚",
      highlight: "50+ Títulos Exclusivos"
    },
    {
      title: "BÔNUS 3: Acesso a 2 Cursos Avançados",
      value: "R$ 189",
      description: "Mergulhe na Análise Corporal e na Neurociência da Lei da Atração para aprofundar seus resultados.",
      icon: "🎓",
      highlight: "Cursos Completos"
    },
    {
      title: "BÔNUS 4: O Círculo dos Realizadores",
      value: "R$ 417",
      description: "3 meses de acesso à nossa comunidade VIP para accountability e networking de alto nível.",
      icon: "👥",
      highlight: "Comunidade VIP - 3 Meses"
    }
  ];

  const totalBonusValue = bonuses.reduce((sum, bonus) => {
    const value = parseInt(bonus.value.replace('R$ ', ''));
    return sum + value;
  }, 0);

  return (
    <section className="section-padding bg-gradient-to-b from-muted via-background to-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-primary mb-6">
            E para tornar essa decisão um completo{" "}
            <span className="text-gold">"no-brainer"</span>...
          </h2>
          <p className="text-xl sm:text-2xl font-inter text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ao agir <span className="font-bold text-gold">AGORA</span>, você recebe{" "}
            <span className="font-bold text-primary">4 bônus de ação rápida:</span>
          </p>
        </div>

        {/* Bonuses Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className="bg-card rounded-3xl p-8 shadow-lg border border-gold/20 hover:shadow-xl hover:border-gold/40 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-5xl">{bonus.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-montserrat font-bold text-primary mb-2">
                      {bonus.title}
                    </h3>
                    <div className="flex items-center space-x-3">
                      <span className="bg-gold text-gold-foreground px-3 py-1 rounded-full text-sm font-bold">
                        Valor: {bonus.value}
                      </span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {bonus.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-base font-inter leading-relaxed text-card-foreground">
                {bonus.description}
              </p>
              
              <div className="mt-6 pt-4 border-t border-gold/20">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-inter text-muted-foreground">
                    Incluído GRÁTIS
                  </span>
                  <span className="text-green-500 font-bold text-xl">✓</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value */}
        <div className="bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 rounded-3xl p-8 lg:p-12 border-2 border-gold/30">
          <div className="text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-gold">
              Valor Total dos Bônus:
            </h3>
            
            <div className="space-y-4">
              <div className="text-5xl sm:text-6xl font-montserrat font-bold text-gold">
                R$ {totalBonusValue.toLocaleString('pt-BR')}
              </div>
              
              <p className="text-xl font-inter text-white max-w-2xl mx-auto">
                Tudo isso <span className="font-bold text-gold">GRATUITAMENTE</span> quando você adquire o{" "}
                <span className="font-bold">Fator Essencial</span> hoje!
              </p>
            </div>
            
            {/* Value Comparison */}
            <div className="bg-white/50 rounded-2xl p-6 border border-gold/30 max-w-2xl mx-auto">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-sm font-inter text-white mb-2">Se comprado separadamente:</p>
                  <p className="text-2xl font-montserrat font-bold text-primary line-through">
                    R$ {(totalBonusValue + 27).toLocaleString('pt-BR')}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-inter text-white mb-2">Seu investimento hoje:</p>
                  <p className="text-3xl font-montserrat font-bold text-gold">
                    R$ 27
                  </p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gold/20">
                <p className="text-lg font-playfair italic text-gold text-center">
                  "Uma economia de mais de {Math.round(((totalBonusValue + 27 - 27) / (totalBonusValue + 27)) * 100)}%!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};