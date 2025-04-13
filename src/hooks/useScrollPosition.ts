import { useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
  direction: 'up' | 'down' | null;
  lastY: number;
}

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: null,
    lastY: 0,
  });

  useEffect(() => {
    let ticking = false;
    
    const updatePosition = () => {
      const currentY = window.pageYOffset;
      const direction: ScrollPosition['direction'] = 
        currentY === scrollPosition.lastY ? null :
        currentY > scrollPosition.lastY ? 'down' : 'up';

      const position: ScrollPosition = {
        x: window.pageXOffset,
        y: currentY,
        direction,
        lastY: currentY,
      };

      setScrollPosition(position);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollPosition.lastY]);

  return scrollPosition;
}

export default useScrollPosition;