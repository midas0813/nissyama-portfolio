'use client';

import { useEffect, useState } from 'react';

interface Particle {
  id: string;
  x: number;
  y: number;
  color: string;
  angle: number;
  velocity: number;
  life: number;
}

interface Firework {
  id: string;
  x: number;
  y: number;
  particles: Particle[];
  createdAt: number;
}

export function FireworksEffect() {
  const [fireworks, setFireworks] = useState<Firework[]>([]);

  const colors = [
    '#10b981', // green-500
    '#34d399', // green-400
    '#6ee7b7', // green-300
    '#fbbf24', // amber-400
    '#f59e0b', // amber-500
    '#ef4444', // red-500
    '#f97316', // orange-500
  ];

  const createFirework = () => {
    const x = Math.random() * 100;
    const y = Math.random() * 60 + 10; // 10-70% from top
    const particleCount = 30 + Math.floor(Math.random() * 20);
    const particles: Particle[] = [];
    const baseColor = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount;
      particles.push({
        id: `${Date.now()}-${i}`,
        x,
        y,
        color: Math.random() > 0.3 ? baseColor : colors[Math.floor(Math.random() * colors.length)],
        angle,
        velocity: 2 + Math.random() * 3,
        life: 1,
      });
    }

    return {
      id: `firework-${Date.now()}`,
      x,
      y,
      particles,
      createdAt: Date.now(),
    };
  };

  useEffect(() => {
    // Create initial fireworks
    const initialFireworks = [createFirework(), createFirework()];
    setFireworks(initialFireworks);

    // Create new fireworks periodically
    const interval = setInterval(() => {
      setFireworks((prev) => {
        // Remove old fireworks
        const filtered = prev.filter((fw) => Date.now() - fw.createdAt < 3000);
        
        // Add new firework randomly
        if (Math.random() > 0.3 && filtered.length < 5) {
          return [...filtered, createFirework()];
        }
        return filtered;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {fireworks.map((firework) => (
        <div key={firework.id}>
          {firework.particles.map((particle) => (
            <div
              key={particle.id}
              className="firework-particle absolute rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                backgroundColor: particle.color,
                width: '4px',
                height: '4px',
                boxShadow: `0 0 6px ${particle.color}, 0 0 12px ${particle.color}`,
                '--angle': `${particle.angle}rad`,
                '--velocity': particle.velocity,
              } as React.CSSProperties}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
