'use client';

import { useState, useEffect } from 'react';

interface AnimatedRevealProps {
  show: boolean;
  children: React.ReactNode;
  delay?: number;
}

export function AnimatedReveal({ show, children, delay = 0 }: AnimatedRevealProps) {
  const [revealed, setRevealed] = useState(false);
  const [visible, setVisible] = useState(false);

  // Effect 1: one-way gate — mount when show becomes true
  useEffect(() => {
    if (show && !revealed) {
      setRevealed(true);
    }
  }, [show, revealed]);

  // Effect 2: animate in after mount — runs once when revealed flips to true.
  // Separated so Effect 1's re-render doesn't cancel this timer via cleanup.
  useEffect(() => {
    if (!revealed) return;
    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
    }, delay);
    return () => clearTimeout(timer);
  }, [revealed, delay]);

  if (!revealed) return null;

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(14px)',
        transition: 'opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1), transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
}
