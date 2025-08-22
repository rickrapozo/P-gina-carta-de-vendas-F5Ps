# Mind Reboot Studio - Método 5Ps

Uma landing page moderna e otimizada para o método revolucionário de desenvolvimento pessoal "5Ps" - 15 minutos diários para reprogramar sua mente para a prosperidade.

## 🚀 Características

- **Design Responsivo**: Otimizado para desktop e mobile
- **Performance Otimizada**: Carregamento rápido com lazy loading e otimizações específicas para mobile
- **Player de Áudio Integrado**: Narração da carta de vendas com fallback automático
- **SEO Otimizado**: Meta tags completas e structured data
- **Animações Suaves**: Transições e efeitos visuais modernos

## 🛠️ Tecnologias Utilizadas

- **Vite** - Build tool e dev server
- **React 18** - Framework frontend
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn/ui** - Componentes UI
- **Lucide React** - Ícones
- **Framer Motion** - Animações

## 📦 Instalação e Uso

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre no diretório
cd mind-reboot-studio-main

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint
```

## 🎯 Otimizações de Performance

### Mobile-First
- Carregamento diferido de scripts não críticos
- Otimização de imagens com lazy loading
- CSS específico para mobile
- Redução de animações complexas em dispositivos móveis

### Network
- Preconnect hints para recursos externos
- DNS prefetch para domínios críticos
- Carregamento assíncrono do Google Fonts
- Code splitting inteligente

### Build
- Minificação com Terser
- Tree shaking automático
- Chunks otimizados para cache
- Compressão de assets

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── sections/       # Seções da landing page
│   └── ui/            # Componentes de interface
├── config/             # Configurações
├── hooks/              # Custom hooks
├── lib/                # Utilitários
├── pages/              # Páginas
└── types/              # Definições de tipos
```

## 🎨 Customização

### Cores e Tema
As cores principais estão definidas no `tailwind.config.ts`:
- **Gold**: #FFD700 (cor principal)
- **Dark**: #0A0A0A (fundo escuro)
- **Accent**: Gradientes dourados

### Conteúdo
O conteúdo principal está localizado em:
- `src/pages/Index.tsx` - Página principal
- `src/components/sections/` - Seções individuais

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure o build command: `npm run build`
3. Configure o output directory: `dist`
4. Deploy automático a cada push

### Netlify
1. Conecte seu repositório ao Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Outros Provedores
Qualquer provedor de hospedagem estática:
```bash
npm run build
# Upload da pasta 'dist'
```

## 📊 Analytics e Tracking

- **Google Tag Manager**: GTM-TZTDQRC8
- **UTM Pixel**: Configurado para tracking de conversões
- **Facebook Pixel**: Integração para remarketing

## 🔧 Configuração de Áudio

O player de áudio suporta:
- **Fonte Principal**: Supabase Storage
- **Fallback**: Arquivo local em `/public/audio/`
- **Lazy Loading**: Carregamento sob demanda
- **Controles Personalizados**: Interface customizada

## 📱 Suporte a Dispositivos

- **Desktop**: Experiência completa com todas as animações
- **Tablet**: Layout adaptativo
- **Mobile**: Otimizações específicas de performance
- **Acessibilidade**: Suporte a leitores de tela

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor:
1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 📞 Suporte

Para dúvidas ou suporte:
- Abra uma issue no GitHub
- Entre em contato através do site oficial
