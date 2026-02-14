import { useState, useEffect, useRef, useCallback } from 'react';

export const useCursorFollower = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const lastTimeRef = useRef(0);

  const handleMouseMove = useCallback((e) => {
    const now = Date.now();
    // Throttle to 16ms (60fps) for optimal performance
    if (now - lastTimeRef.current >= 16) {
      lastTimeRef.current = now;
      setCursorPos({ x: e.clientX, y: e.clientY });
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return cursorPos;
};
