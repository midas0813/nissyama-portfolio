'use client';

import { useEffect, useState } from 'react';

export function ParallaxSection({ children }: { children: React.ReactNode }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="relative"
      style={{
        transform: `translateY(${scrollY * 0.1}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </div>
  );
}
