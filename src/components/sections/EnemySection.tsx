export const EnemySection = () => {
  return <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold mb-8">
            Se você ainda não chegou lá, quero que ouça isto com atenção:
            <br />
            <span className="text-gold text-4xl sm:text-5xl lg:text-6xl block mt-4">
              A CULPA NÃO É SUA.
            </span>
          </h2>
        </div>

        <div className="space-y-8">
          {/* The Real Enemy */}
          <div className="bg-destructive/20 border-2 border-destructive rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <span className="text-6xl mb-4 block">🎭</span>
              <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-destructive mb-4">
                O Verdadeiro Inimigo Revelado
              </h3>
            </div>
            
            <div className="space-y-6 text-lg font-inter leading-relaxed">
              <p>
                <span className="font-bold text-gold">Você não falhou por falta de esforço ou inteligência.</span> 
                Você falhou porque estava usando as ferramentas erradas, lutando contra um inimigo que nem sabia que existia.
              </p>
              
              <p className="bg-white/10 rounded-xl p-6 border-l-4 border-destructive">
                <span className="font-bold text-destructive">Seu verdadeiro inimigo é a indústria do "pensamento positivo" superficial.</span>
              </p>
              
              <p>
                Por décadas, gurus e autores te disseram para "apenas pensar positivo" e "visualizar o sucesso". 
                <span className="font-bold text-gold"> MAS eles convenientemente esconderam a verdade:</span> 
                isso é inútil se o seu sistema emocional e subconsciente estiverem programados para a escassez.
              </p>
            </div>
          </div>

          {/* The Industry Lies */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-gold/20">
              <h4 className="text-xl font-montserrat font-bold text-destructive mb-4">
                ❌ O Que Eles Te Venderam
              </h4>
              <ul className="space-y-3 text-base font-inter">
                <li className="flex items-start space-x-3 bg-slate-50">
                  <span className="text-destructive font-bold">•</span>
                  <span className="text-slate-950">"Apenas pense positivo"</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-destructive font-bold">•</span>
                  <span className="text-slate-950">"Visualize e acontecerá"</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-destructive font-bold">•</span>
                  <span className="text-slate-950">"Repita afirmações diariamente"</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-destructive font-bold">•</span>
                  <span className="text-slate-950">"O problema está na sua mentalidade"</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gold/10 rounded-2xl p-8 border border-gold">
              <h4 className="text-xl font-montserrat font-bold text-gold mb-4">
                ✅ A Verdade Que Esconderam
              </h4>
              <ul className="space-y-3 text-base font-inter">
                <li className="flex items-start space-x-3">
                  <span className="text-gold font-bold">•</span>
                  <span>Sua mente é um SISTEMA integrado</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gold font-bold">•</span>
                  <span>Todos os 5 pilares devem trabalhar juntos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gold font-bold">•</span>
                  <span>O subconsciente precisa ser reprogramado</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-gold font-bold">•</span>
                  <span>Técnicas isoladas NUNCA funcionam</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Revelation */}
          <div className="bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 rounded-3xl p-8 lg:p-12 border border-gold/30">
            <div className="text-center">
              <span className="text-5xl block mb-6">💡</span>
              <h3 className="text-2xl sm:text-3xl font-montserrat font-bold text-gold mb-6">
                Eles Te Venderam Band-Aids Para Uma Cirurgia
              </h3>
              <div className="max-w-3xl mx-auto space-y-6 text-lg font-inter leading-relaxed">
                <p>
                  Eles te venderam uma promessa vazia, um band-aid para uma ferida profunda, 
                  e <span className="font-bold text-white">te deixaram se sentindo um fracasso quando não funcionou.</span>
                </p>
                <p className="bg-white/10 rounded-xl p-6 border border-gold/30 font-playfair italic text-xl text-gold">
                  "Hoje, nós expomos essa mentira e te entregamos o manual de instruções completo."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};