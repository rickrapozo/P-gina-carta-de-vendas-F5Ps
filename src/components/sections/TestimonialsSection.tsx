export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria",
      title: "De Ansiosa a Empreendedora Confiante",
      story: "Maria era uma profissional dedicada E sonhava em abrir sua própria agência de marketing. MAS, toda vez que ela se sentava para escrever o plano de negócios, uma voz interna cruel sussurrava \"você não é boa o suficiente\", paralisando-a com uma ansiedade avassaladora.",
      result: "PORTANTO, depois de aplicar o Protocolo 5P para realinhar seu Pensamento e Emoção, ela não apenas calou a voz da dúvida em 90 dias, como usou a antiga ansiedade para fechar seu primeiro contrato de cinco dígitos.",
      rating: 5,
      highlight: "Primeiro contrato de cinco dígitos em 90 dias"
    },
    {
      name: "João",
      title: "O Fim de 15 Anos de Procrastinação",
      story: "João era um engenheiro brilhante E tinha um potencial enorme. MAS sua vida financeira era um caos completo, sabotada por 15 anos de procrastinação crônica que o deixava endividado e envergonhado.",
      result: "PORTANTO, ao aplicar a conexão Emoção-Ação (P3-P4), ele criou um momentum tão poderoso que quitou mais de R$ 30.000 em dívidas em 60 dias e recuperou uma autoconfiança que não sentia desde a faculdade.",
      rating: 5,
      highlight: "R$ 30.000 em dívidas quitadas em 60 dias"
    },
    {
      name: "Ana",
      title: "Transformação Completa de Mindset",
      story: "Ana lutava com baixa autoestima E sempre se sabotava quando as oportunidades apareciam. MAS aplicando o método 5P de forma consistente, ela reprogramou completamente sua mentalidade.",
      result: "PORTANTO, em 4 meses conseguiu a promoção que desejava há anos, dobrou sua renda e hoje lidera uma equipe de 15 pessoas com total confiança.",
      rating: 5,
      highlight: "Dobrou a renda e conquistou liderança"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xl ${i < rating ? 'text-gold' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold mb-6">
            Eu entendo se você estiver cético.
            <br />
            <span className="text-gold">Mas veja a prova...</span>
          </h2>
          <p className="text-lg sm:text-xl font-inter leading-relaxed max-w-4xl mx-auto opacity-90">
            Nosso método não se baseia em achismos, mas em neurociência e resultados reais. 
            E as histórias abaixo <span className="font-bold text-gold">não são exceções, são o padrão.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Rating */}
              <div className="flex justify-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-montserrat font-bold text-gold text-center mb-6">
                {testimonial.title}
              </h3>
              
              {/* Story Structure */}
              <div className="space-y-4 mb-6">
                <div className="bg-white/10 rounded-xl p-4 border-l-4 border-primary-foreground/30">
                  <p className="text-sm font-inter leading-relaxed opacity-90">
                    {testimonial.story}
                  </p>
                </div>
                
                <div className="bg-gold/20 rounded-xl p-4 border-l-4 border-gold">
                  <p className="text-sm font-inter leading-relaxed font-medium">
                    {testimonial.result}
                  </p>
                </div>
              </div>
              
              {/* Highlight Badge */}
              <div className="bg-gold text-gold-foreground rounded-full px-4 py-2 text-center">
                <p className="text-sm font-montserrat font-bold">
                  {testimonial.highlight}
                </p>
              </div>
              
              {/* Attribution */}
              <div className="text-center mt-4">
                <p className="font-montserrat font-bold text-gold">
                  — {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="bg-white/10 rounded-3xl p-8 border border-gold/20">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-montserrat font-bold text-gold">2.847+</p>
              <p className="font-inter text-primary-foreground/80">Vidas Transformadas</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-montserrat font-bold text-gold">94%</p>
              <p className="font-inter text-primary-foreground/80">Taxa de Sucesso</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-montserrat font-bold text-gold">15min</p>
              <p className="font-inter text-primary-foreground/80">Por Dia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};