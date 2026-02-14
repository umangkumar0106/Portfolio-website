import { useState, useEffect, useRef, useCallback } from 'react';

export const useScroll = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastTimeRef = useRef(0);

  const handleScroll = useCallback(() => {
    const now = Date.now();
    // Throttle to 16ms (60fps) for optimal performance
    if (now - lastTimeRef.current < 16) return;
    
    lastTimeRef.current = now;
    
    const scrolled = window.pageYOffset;
    setIsScrolled(scrolled > 100);
    
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { scrollProgress, isScrolled };
};
