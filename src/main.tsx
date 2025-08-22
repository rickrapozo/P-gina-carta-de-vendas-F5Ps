import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Mobile performance optimizations
if (typeof window !== 'undefined') {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
  
  if (isMobile) {
    // Implement lazy loading for images
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    }, observerOptions);
    
    // Observe images when DOM is ready
    const observeImages = () => {
      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    };
    
    // Optimize DOM size by removing unused elements on mobile
    const optimizeDOM = () => {
      // Remove decorative elements that don't add value on mobile
      const decorativeElements = document.querySelectorAll('.hidden.md\\:block, .decoration-only');
      decorativeElements.forEach(el => el.remove());
      
      // Reduce animation complexity
      const animatedElements = document.querySelectorAll('[class*="animate-"]');
      animatedElements.forEach(el => {
        el.style.animationDuration = '0.3s';
        el.style.animationIterationCount = '1';
      });
    };
    
    // Apply optimizations after DOM load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        observeImages();
        optimizeDOM();
      });
    } else {
      observeImages();
      optimizeDOM();
    }
    
    // Reduce reflow by batching DOM reads/writes
    let rafId: number;
    const batchDOMOperations = (callback: () => void) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(callback);
    };
    
    // Export for use in components
    (window as any).mobileOptimizations = {
      batchDOMOperations,
      isMobile: true
    };
  } else {
    (window as any).mobileOptimizations = {
      batchDOMOperations: (callback: () => void) => callback(),
      isMobile: false
    };
  }
}

createRoot(document.getElementById("root")!).render(<App />);
