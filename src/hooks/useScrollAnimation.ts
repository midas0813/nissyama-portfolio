'use client';

import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.12 }
    );

    // Observe the section itself
    observer.observe(el);

    // Observe all children with data-scroll attribute
    const children = el.querySelectorAll('[data-scroll]');
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
}
