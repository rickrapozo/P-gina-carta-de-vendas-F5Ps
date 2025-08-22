export const PromiseSection = () => {
  const benefits = [
    {
      icon: "🔨",
      title: "Derrubar o Muro Invisível",
      description: "Sabe aquela barreira que te congela na hora de negociar um aumento, de iniciar aquele projeto ou de se abrir para um relacionamento? Vamos implodi-la, tijolo por tijolo."
    },
    {
      icon: "🔥",
      title: "Transformar Ansiedade em Combustível",
      description: "Imagine usar a ansiedade não como um veneno que te paralisa, mas como um GPS que te aponta a direção. Você vai aprender a decodificar o medo e transformá-lo na energia mais pura para a ação."
    },
    {
      icon: "🌱",
      title: "Ativar sua Realidade Próspera",
      description: "Uma vida onde conversas sobre dinheiro se tornam fáceis, oportunidades inesperadas aparecem na sua caixa de entrada e você acorda com uma certeza calma e poderosa de que está no controle."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background via-muted to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-primary mb-6">
            É por isso que você se importa...
          </h2>
          <p className="text-xl sm:text-2xl font-inter text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Porque no fundo, você sabe que{" "}
            <span className="font-playfair italic text-gold font-semibold">nasceu para ser e ter muito mais.</span>
            <br />
            Esta é a sua chance real de finalmente:
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group glass-card p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <span className="text-6xl block mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </span>
                <h3 className="text-xl font-montserrat font-bold text-primary group-hover:text-gold transition-colors duration-300">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-base font-inter leading-relaxed text-card-foreground/90">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Success Vision */}
        <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 rounded-3xl p-8 lg:p-12 border border-gold/20">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-primary mb-6">
              Imagine acordar amanhã sabendo que...
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {[
                "Você tem total controle sobre seus pensamentos e emoções",
                "Cada desafio se torna uma oportunidade de crescimento",
                "Sua confiança é inabalável, não importa a situação",
                "O dinheiro flui naturalmente para sua vida",
                "Seus relacionamentos são profundos e gratificantes", 
                "Você vive o propósito que sempre sentiu no coração"
              ].map((vision, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-gold text-xl font-bold">✓</span>
                  <p className="font-inter text-card-foreground">{vision}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-white/10 rounded-2xl border border-gold/30">
              <p className="text-lg font-playfair italic text-gold">
                "Esta não é uma fantasia. Esta é a vida que te espera do outro lado da sua transformação."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};