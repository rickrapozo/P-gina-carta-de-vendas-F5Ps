import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Shield, Cookie } from "lucide-react";

interface LGPDPopupProps {
  onAccept: () => void;
  onDecline: () => void;
  isVisible: boolean;
}

export const LGPDPopup = ({ onAccept, onDecline, isVisible }: LGPDPopupProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onDecline}
      />
      
      {/* Popup */}
      <div 
        className={`fixed bottom-4 right-4 md:max-w-xs z-50 transform transition-all duration-500 ease-out ${
          isAnimating 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-full opacity-0 scale-95'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gold/20 p-4 relative overflow-hidden">
          {/* Gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-primary to-gold"></div>
          
          {/* Close button */}
          <button
            onClick={onDecline}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-3 h-3 text-gray-500" />
          </button>
          
          {/* Content */}
          <div className="space-y-3">
            {/* Header */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-6 h-6 bg-gold/10 rounded-full">
                <Cookie className="w-3 h-3 text-gold" />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-sm text-gray-900">
                  Cookies
                </h3>
              </div>
            </div>
            
            {/* Message */}
            <div>
              <p className="text-xs font-inter text-gray-600 leading-relaxed">
                Utilizamos cookies para melhorar sua experiência e analisar nosso tráfego.
              </p>
            </div>
            
            {/* Actions */}
            <div className="flex gap-2">
              <Button
                onClick={onAccept}
                className="flex-1 bg-gold hover:bg-gold/90 text-white font-montserrat font-medium text-xs py-2 rounded-lg transition-all duration-300"
              >
                Aceitar
              </Button>
              
              <Button
                onClick={onDecline}
                variant="outline"
                className="flex-1 border-gray-300 text-gray-600 hover:bg-gray-50 font-montserrat font-medium text-xs py-2 rounded-lg transition-all duration-300"
              >
                Recusar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};