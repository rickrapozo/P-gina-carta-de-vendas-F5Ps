// Configuração para hospedagem externa de áudio
// Este arquivo demonstra como otimizar o carregamento de áudio usando CDNs

export interface AudioConfig {
  primary: string;
  fallback?: string;
  provider: 'local' | 'aws-s3' | 'cloudinary' | 'bytescale' | 'custom';
  lazyLoad: boolean;
}

// Configurações para diferentes provedores de CDN
export const audioConfigs = {
  // Configuração local (atual)
  local: {
    primary: '/audio/sales-letter-narration.mp3',
    provider: 'local' as const,
    lazyLoad: true
  },

  // AWS S3 + CloudFront CDN
  // Vantagens: Baixo custo, alta disponibilidade, integração com AWS
  // Custo estimado: ~$0.023/GB armazenamento + $0.085/GB transferência
  awsS3: {
    primary: 'https://d1234567890.cloudfront.net/audio/sales-letter-narration.mp3',
    fallback: '/audio/sales-letter-narration.mp3',
    provider: 'aws-s3' as const,
    lazyLoad: true
  },

  // Cloudinary
  // Vantagens: Otimização automática, múltiplos formatos, fácil integração
  // Custo: Plano gratuito até 25GB, depois $99/mês para 100GB
  cloudinary: {
    primary: 'https://res.cloudinary.com/seu-cloud-name/video/upload/v1/audio/sales-letter-narration.mp3',
    fallback: '/audio/sales-letter-narration.mp3',
    provider: 'cloudinary' as const,
    lazyLoad: true
  },

  // Bytescale (especializado em áudio)
  // Vantagens: Otimização específica para áudio, HLS streaming, redução de 90% bandwidth
  // Custo: $19/mês para 100GB
  bytescale: {
    primary: 'https://upcdn.io/W142hJk/audio/sales-letter-narration.mp3?f=mp3&br=128',
    fallback: '/audio/sales-letter-narration.mp3',
    provider: 'bytescale' as const,
    lazyLoad: true
  },

  // CDN personalizado (exemplo: Cloudflare R2)
  // Vantagens: Sem taxas de saída, baixo custo
  // Custo: $0.015/GB armazenamento, sem taxa de transferência
  custom: {
    primary: 'https://seu-dominio.com/cdn/audio/sales-letter-narration.mp3',
    fallback: '/audio/sales-letter-narration.mp3',
    provider: 'custom' as const,
    lazyLoad: true
  }
};

// Configuração ativa (altere aqui para trocar de provedor)
export const activeAudioConfig: AudioConfig = {
  primary: 'https://wurtjidtmpdpbnzomunu.supabase.co/storage/v1/object/public/audio%20pagina%20f5ps/sales-letter-narration.mp3',
  fallback: '/audio/sales-letter-narration.mp3',
  provider: 'custom' as const,
  lazyLoad: false
};

// Função para otimizar URLs de áudio baseado no provedor
export const optimizeAudioUrl = (config: AudioConfig, options?: {
  bitrate?: number;
  format?: 'mp3' | 'aac' | 'ogg';
  quality?: 'low' | 'medium' | 'high';
}): string => {
  const { bitrate = 128, format = 'mp3', quality = 'medium' } = options || {};
  
  switch (config.provider) {
    case 'cloudinary':
      // Cloudinary: otimização automática de qualidade e formato
      return config.primary.replace('.mp3', `.${format}?q_auto:${quality}`);
    
    case 'bytescale':
      // Bytescale: controle de bitrate e formato via URL
      return `${config.primary.split('?')[0]}?f=${format}&br=${bitrate}`;
    
    case 'aws-s3':
      // AWS S3: sem otimização na URL, mas pode usar Lambda@Edge
      return config.primary;
    
    default:
      return config.primary;
  }
};

// Instruções para implementação
export const implementationGuide = {
  steps: [
    '1. Escolha um provedor de CDN (AWS S3, Cloudinary, Bytescale)',
    '2. Faça upload do arquivo sales-letter-narration.MP3 para o provedor',
    '3. Configure as URLs no audioConfigs acima',
    '4. Altere activeAudioConfig para o provedor desejado',
    '5. Teste o carregamento e fallback',
    '6. Remova o arquivo local da pasta /public/audio (opcional)'
  ],
  
  benefits: [
    '✅ Redução significativa do tamanho do projeto',
    '✅ Carregamento mais rápido via CDN global',
    '✅ Lazy loading para melhor performance inicial',
    '✅ Fallback automático em caso de erro',
    '✅ Otimização automática de qualidade e formato',
    '✅ Redução de custos de bandwidth (até 90% com alguns provedores)'
  ],
  
  recommendations: {
    'Projeto pequeno/médio': 'Cloudinary (plano gratuito) ou Bytescale',
    'Projeto enterprise': 'AWS S3 + CloudFront',
    'Máxima economia': 'Cloudflare R2 + CDN personalizado',
    'Melhor performance de áudio': 'Bytescale (especializado em áudio)'
  }
};