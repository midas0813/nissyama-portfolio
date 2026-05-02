'use client';

export function FloatingElements() {
  const shapes = [
    { type: 'circle', size: 60, delay: 0, duration: 20 },
    { type: 'square', size: 40, delay: 2, duration: 25 },
    { type: 'triangle', size: 50, delay: 4, duration: 22 },
    { type: 'circle', size: 70, delay: 1, duration: 18 },
    { type: 'square', size: 45, delay: 3, duration: 24 },
    { type: 'circle', size: 55, delay: 5, duration: 21 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`floating-shape ${shape.type} absolute opacity-10 dark:opacity-5`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${shape.delay}s`,
            animationDuration: `${shape.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
