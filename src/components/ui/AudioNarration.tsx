import React from 'react';
import { AudioPlayer } from './audio-player';

interface AudioNarrationProps {
  audioSrc: string;
  autoSync?: boolean;
  className?: string;
  fallbackSrc?: string;
  lazyLoad?: boolean;
}

export const AudioNarration: React.FC<AudioNarrationProps> = ({
  audioSrc,
  autoSync = false,
  className = "",
  fallbackSrc,
  lazyLoad = true
}) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 max-w-md mx-auto ${className}`}>
      {/* Título */}
      <div className="text-center mb-6">
        <h3 className="text-lg font-montserrat font-bold text-gold">
          🎧 Guia de Leitura
        </h3>
      </div>
      
      {/* Controles do Player */}
      <AudioPlayer 
        src={audioSrc}
        autoSync={autoSync}
        className="w-full mb-6"
        fallbackSrc={fallbackSrc}
        lazyLoad={lazyLoad}
      />
      
      {/* Instruções */}
      <div className="p-3 bg-gold/10 rounded-xl border border-gold/20">
        <p className="text-xs text-primary-foreground/70 font-inter text-center">
          💡 <strong>Dica:</strong> Use os controles de velocidade para personalizar sua experiência de leitura.
        </p>
      </div>
    </div>
  );
};