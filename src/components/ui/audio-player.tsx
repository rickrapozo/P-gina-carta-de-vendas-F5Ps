import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from './button';
import { Slider } from './slider';

interface AudioPlayerProps {
  src: string;
  autoSync?: boolean;
  className?: string;
  lazyLoad?: boolean;
  fallbackSrc?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  src,
  autoSync = false,
  className = "",
  lazyLoad = true,
  fallbackSrc
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadStart = () => {
      setIsLoading(true);
      setError(null);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
      console.log('Áudio carregado com sucesso');
    };

    const handleError = (e: Event) => {
      setIsLoading(false);
      // Try fallback source if available and not already tried
      if (fallbackSrc && currentSrc !== fallbackSrc) {
        setCurrentSrc(fallbackSrc);
        setError('Tentando fonte alternativa...');
      } else {
        const target = e.target as HTMLAudioElement;
        const errorMessage = `Erro ao carregar áudio: ${target.error?.message || 'Arquivo não encontrado'}`;
        setError(errorMessage);
        console.error('Erro no áudio:', errorMessage);
      }
    };

    const handleTimeUpdate = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('error', handleError);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentSrc]);

  // Update currentSrc when src changes
  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  const loadAudio = () => {
    if (lazyLoad && !currentSrc && !hasUserInteracted) {
      setCurrentSrc(src);
      setHasUserInteracted(true);
    }
  };

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio || error) return;

    // Load audio on first interaction if lazy loading is enabled
    if (lazyLoad && !currentSrc) {
      loadAudio();
      return;
    }

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => {
        console.error('Erro ao reproduzir áudio:', err);
        // Try fallback source if available
        if (fallbackSrc && currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
          setError('Tentando fonte alternativa...');
        } else {
          setError('Erro ao reproduzir o áudio. Verifique sua conexão.');
        }
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;

    const newTime = (value[0] / 100) * audio.duration;
    audio.currentTime = newTime;
    setProgress(value[0]);
  };

  const handleVolumeChange = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newVolume = value[0] / 100;
    audio.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = volume;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const handlePlaybackRateChange = (rate: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.playbackRate = rate;
    setPlaybackRate(rate);
  };

  if (error) {
    return (
      <div className={`bg-destructive/10 border border-destructive/20 rounded-xl p-4 ${className}`}>
        <div className="text-center">
          <p className="text-destructive font-medium mb-2">⚠️ Erro no Player de Áudio</p>
          <p className="text-sm text-destructive/80">{error}</p>
          <p className="text-xs text-muted-foreground mt-2">
            Verifique se o arquivo existe em: <code>/audio/sales-letter-narration.mp3</code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 ${className}`}>
      <audio ref={audioRef} src={currentSrc} preload={lazyLoad ? "none" : "metadata"} />
      
      {isLoading && (
        <div className="text-center py-4">
          <p className="text-sm text-primary-foreground/70">Carregando áudio...</p>
        </div>
      )}
      
      {!isLoading && (
        <div className="flex items-center justify-center space-x-4">
          {/* Play/Pause Button */}
          <Button
            onClick={togglePlayPause}
            variant="ghost"
            size="lg"
            className="w-12 h-12 rounded-full bg-gold/20 hover:bg-gold/30 border border-gold/30 flex-shrink-0"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-gold" />
            ) : (
              <Play className="w-6 h-6 text-gold ml-0.5" />
            )}
          </Button>

          {/* Volume Control */}
          <div className="flex items-center space-x-2">
            <Button
              onClick={toggleMute}
              variant="ghost"
              size="sm"
              className="p-2 hover:bg-white/10 flex-shrink-0"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-primary-foreground/70" />
              ) : (
                <Volume2 className="w-4 h-4 text-primary-foreground/70" />
              )}
            </Button>
            <Slider
              value={[isMuted ? 0 : volume * 100]}
              onValueChange={handleVolumeChange}
              max={100}
              step={1}
              className="w-16"
            />
          </div>

          {/* Speed Control */}
          <div className="flex items-center space-x-1">
            {[1, 1.2, 1.5].map((rate) => (
              <Button
                key={rate}
                onClick={() => handlePlaybackRateChange(rate)}
                variant="ghost"
                size="sm"
                className={`px-2 py-1 text-xs rounded-lg transition-all flex-shrink-0 ${
                  playbackRate === rate
                    ? 'bg-gold/20 text-gold border border-gold/30'
                    : 'text-primary-foreground/70 hover:bg-white/10'
                }`}
              >
                {rate}x
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};