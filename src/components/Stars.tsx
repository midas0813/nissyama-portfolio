'use client';

import { useEffect, useState } from 'react';

interface StarData {
  id: number;
  left: string;
  top: string;
  twinkleDuration: string;
  floatDuration: string;
  delay: string;
  size: string;
}

export function Stars() {
  const [stars, setStars] = useState<StarData[]>([]);

  useEffect(() => {
    const newStars: StarData[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${80 + Math.random() * 30}%`,   // start below visible area so they float up into view
      twinkleDuration: `${2 + Math.random() * 3}s`,
      floatDuration: `${12 + Math.random() * 14}s`,
      delay: `${Math.random() * 20}s`,
      size: Math.random() > 0.7 ? '3px' : '2px',
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="stars">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDuration: `${star.twinkleDuration}, ${star.floatDuration}`,
            animationDelay: `${star.delay}, ${star.delay}`,
          }}
        />
      ))}
    </div>
  );
}
