import ricardoImage from "@/assets/ricardo-author.jpg";
export const AuthorSection = () => {
  return <section className="section-padding bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-bold text-primary mb-6">
            "Mas por que eu deveria{" "}
            <span className="text-gold">confiar em você?"</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Author Image */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="relative inline-block">
              <img src={ricardoImage} alt="Ricardo Borges Rapozo - Criador do Método 5Ps" className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl object-cover shadow-lg border-4 border-gold/30" />
              <div className="absolute -bottom-4 -right-4 bg-gold text-gold-foreground rounded-2xl px-4 py-2 shadow-lg">
                <p className="font-montserrat font-bold text-sm">
                  ✨ Criador do Método 5Ps
                </p>
              </div>
            </div>
          </div>
          
          {/* Author Story */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-6 text-lg font-inter leading-relaxed">
              <p>
                <span className="font-bold text-primary">Meu nome é Ricardo Borges Rapozo.</span> E eu não criei este método a partir de teorias de livros. 
                <span className="font-bold text-gold"> Eu o extraí da minha própria ruína.</span>
              </p>
              
              <div className="bg-card rounded-2xl p-6 border-l-4 border-destructive/50">
                <p className="text-base leading-relaxed text-card-foreground">
                  Lembro-me do dia em que meu primeiro negócio faliu. Eu estava sentado no chão do meu escritório vazio, 
                  com uma pilha de contas não pagas ao meu lado, sentindo um nó gelado no estômago.
                </p>
                <p className="mt-4 font-semibold text-destructive">
                  Não era sobre o dinheiro. Era a vergonha. A sensação de ter feito tudo "certo" e, 
                  mesmo assim, ter fracassado miseravelmente.
                </p>
              </div>
              
              <div className="bg-gold/10 rounded-2xl p-6 border-l-4 border-gold">
                <p className="text-base leading-relaxed text-card-foreground mb-4">
                  Foi nesse momento de desespero que percebi: 
                  <span className="font-bold text-primary"> o problema não estava no meu esforço. Estava no meu "software" interno.</span>
                </p>
                <p className="text-base leading-relaxed text-card-foreground">
                  Mergulhei obsessivamente na neurociência e psicologia, e o que descobri me chocou: 
                  <span className="font-bold text-gold"> os maiores realizadores do mundo operavam, intuitivamente, com esses 5 Pilares perfeitamente alinhados.</span>
                </p>
              </div>
            </div>
            
            {/* Credentials */}
            <div className="bg-gradient-to-r from-primary/10 via-gold/10 to-primary/10 rounded-2xl p-6 border border-gold/20">
              <h4 className="text-xl font-montserrat font-bold text-primary mb-4 text-center">
                Credenciais & Reconhecimentos
              </h4>
              <div className="grid sm:grid-cols-2 gap-4 text-sm font-inter">
                <div className="space-y-2">
                  <p className="flex items-center space-x-2">
                    <span className="text-gold">✓</span>
                    <span>Especialista em Neurociência Comportamental</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-gold">✓</span>
                    <span>Mentor de 2.847+ empreendedores</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center space-x-2">
                    <span className="text-gold">✓</span>
                    <span>5+ anos de pesquisa aplicada</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span className="text-gold">✓</span>
                    <span>Palestrante </span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Personal Declaration */}
            <div className="text-center bg-white/50 rounded-2xl p-6 border border-gold/30">
              <p className="text-xl font-playfair italic text-primary">
                "Eu sou o primeiro caso de sucesso deste método. Ele não é apenas minha criação; 
                <span className="font-bold text-gold"> ele é a minha história de redenção."</span>
              </p>
              <div className="mt-4">
                <p className="font-montserrat font-bold text-gold">
                  — Ricardo Borges Rapozo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};