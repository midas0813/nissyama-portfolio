'use client';

import { useEffect, useState } from 'react';

export function Stars() {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; delay: string; duration: string }>>([]);

  useEffect(() => {
    const starCount = 50;
    const newStars = Array.from({ length: starCount }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 20}s`,
      duration: `${15 + Math.random() * 10}s`,
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
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
}
