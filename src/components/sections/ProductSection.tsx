import { useState } from "react";

export const ProductSection = () => {
  const [openPillar, setOpenPillar] = useState<number | null>(null);

  const pillars = [
    {
      id: 1,
      icon: "💭",
      title: "P1 - Pensamento",
      subtitle: "O Arquiteto",
      description: "Se você sofre com a autocrítica, usará a técnica do \"Reset Mental\" para silenciar o crítico interno e instalar crenças fortalecedoras que são a fundação da prosperidade.",
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-400/30"
    },
    {
      id: 2,
      icon: "🧭",
      title: "P2 - Sentimento",
      subtitle: "O GPS",
      description: "Se a ansiedade te domina, você aprenderá a usá-la como um guia, decodificando suas mensagens e gerando sentimentos de paz e confiança sob demanda.",
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-400/30"
    },
    {
      id: 3,
      icon: "⚡",
      title: "P3 - Emoção",
      subtitle: "O Combustível",
      description: "Se você vive sem energia, aprenderá a gerar emoções de alta octanagem, como entusiasmo e determinação, para te impulsionar para a ação massiva.",
      color: "from-orange-500/20 to-orange-600/20",
      borderColor: "border-orange-400/30"
    },
    {
      id: 4,
      icon: "🎯",
      title: "P4 - Ação",
      subtitle: "O Motor",
      description: "Se a procrastinação é sua inimiga, você usará o \"Movimento Criador\" para transformar grandes objetivos em pequenas ações diárias, criando um momentum imparável.",
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-400/30"
    },
    {
      id: 5,
      icon: "🏆",
      title: "P5 - Resultado",
      subtitle: "A Colheita",
      description: "Aqui, você alinha seu mundo interno de tal forma que os resultados externos — mais dinheiro, melhores relacionamentos, sucesso — se materializam como consequência natural.",
      color: "from-gold to-gold-light",
      borderColor: "border-gold"
    }
  ];

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold mb-6">
            Veja exatamente como o{" "}
            <span className="text-gold">Protocolo de Reinstalação Mental 5P</span>{" "}
            funciona:
          </h2>
          <p className="text-xl sm:text-2xl font-inter leading-relaxed max-w-4xl mx-auto opacity-90">
            É um sistema de{" "}
            <span className="font-bold text-gold">15 minutos diários</span>{" "}
            que alinha os 5 pilares da sua mente para que os resultados no mundo externo se tornem{" "}
            <span className="font-bold text-gold">inevitáveis.</span>
          </p>
        </div>

        {/* Interactive 5P System */}
        <div className="space-y-6 mb-12">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`bg-gradient-to-r ${pillar.color} backdrop-blur-sm rounded-3xl border ${pillar.borderColor} overflow-hidden transition-all duration-300 hover:scale-102 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => setOpenPillar(openPillar === pillar.id ? null : pillar.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl sm:text-5xl">{pillar.icon}</span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-montserrat font-bold">
                        {pillar.title}
                      </h3>
                      <p className="text-white font-playfair italic">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="text-2xl transition-transform duration-300">
                    {openPillar === pillar.id ? '−' : '+'}
                  </div>
                </div>
                
                {openPillar === pillar.id && (
                  <div className="mt-6 pt-6 border-t border-white/20 animate-fade-in-up">
                    <p className="text-lg font-inter leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* System Integration */}
        <div className="bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 rounded-3xl p-8 lg:p-12 border border-gold/30">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-gold mb-6">
              O Poder Está na Integração
            </h3>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg font-inter leading-relaxed">
                Ao contrário dos métodos tradicionais que tratam cada área isoladamente, 
                <span className="font-bold text-gold"> o Protocolo 5P sincroniza todos os pilares simultaneamente.</span>
              </p>
              
              <div className="bg-white/10 rounded-2xl p-6 border border-gold/20">
                <div className="flex justify-center items-center space-x-4 text-3xl mb-4">
                  {['💭', '🧭', '⚡', '🎯', '🏆'].map((emoji, index) => (
                    <div key={index} className="relative">
                      <span className="animate-pulse" style={{animationDelay: `${index * 0.3}s`}}>
                        {emoji}
                      </span>
                      {index < 4 && (
                        <span className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-gold text-xl">
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                <p className="font-playfair italic text-gold text-xl">
                  "Quando todos os pilares trabalham em harmonia, a transformação se torna automática."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};