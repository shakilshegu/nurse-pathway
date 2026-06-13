'use client';

import { useState, useEffect } from 'react';

function useCountUp(target: number, delay: number) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const duration = 1600;
      const startTime = Date.now();
      const tick = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, delay]);
  return count;
}

interface ScoreRingProps {
  score: number;
  delay?: number;
}

export function ScoreRing({ score, delay = 700 }: ScoreRingProps) {
  const [animated, setAnimated] = useState(false);
  const count = useCountUp(score, delay);
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - score / 100);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div className="relative flex items-center justify-center">
      <svg width="136" height="136" viewBox="0 0 136 136">
        <circle cx="68" cy="68" r={radius} fill="none" stroke="#E0F2F1" strokeWidth="10" />
        <circle
          cx="68" cy="68" r={radius}
          fill="none"
          stroke="#006874"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={animated ? offset : circumference}
          transform="rotate(-90 68 68)"
          style={{ transition: 'stroke-dashoffset 1.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
        />
        <circle cx="68" cy="68" r="38" fill="none" stroke="#F0FAF9" strokeWidth="1.5" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[32px] font-bold text-[#006874] leading-none">{count}%</span>
        <span className="text-[10px] font-bold text-[#55656D] uppercase tracking-widest mt-1">Fit Score</span>
      </div>
    </div>
  );
}
