'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export function DashboardHero() {
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.style.strokeDashoffset = '263.89';
      const timer = setTimeout(() => {
        if (circleRef.current) {
          circleRef.current.style.strokeDashoffset = '15.83';
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      {/* Route Status Card */}
      <div className="lg:col-span-8 bg-white rounded-xl card-shadow overflow-hidden relative group">
        <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZgDXphFMGMQiOxg88lebJTJjn2WIAZfvK4ZeUmB8EAVSRGF4nWHfl_mu0wiaFeKPPM9FaAfEADkSnKxe87TWH8KdY7YBqPiGHB0vrshLelXC8XvCSWfon5u1AFAV0lk9FvSk1GLz5zBjkhjLb0gzTNeOlrO32MzzsTY-ZqtsP66Mh2bnZqDDJMDv-8uXaTBpecpkX6IdoTgirImz3lgB7sMB_YBBC_xGMEU7D5Z9fLGiQRoP9c1qevzZlhDj1jtyEPQ3FBDMX63A"
            alt="Germany scenery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#006874] mix-blend-color pointer-events-none"></div>
        </div>
        <div className="relative p-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-lg">
          <div>
            <span className="inline-block px-sm py-xs bg-primary-container text-white text-label-sm rounded-full mb-base">
              Selected Route
            </span>
            <h3 className="font-display-lg text-display-lg text-primary mb-xs">Germany</h3>
            <p className="text-body-lg text-on-surface-variant max-w-md">
              Your pathway to the European healthcare sector is currently in the late-stage verification phase.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-lg bg-surface-container-low rounded-2xl border border-outline-variant/30">
            <div className="relative w-24 h-24 mb-sm">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  className="text-surface-variant"
                  cx="48"
                  cy="48"
                  fill="transparent"
                  r="42"
                  stroke="currentColor"
                  strokeWidth="8"
                ></circle>
                <circle
                  ref={circleRef}
                  className="text-primary transition-all duration-1000"
                  cx="48"
                  cy="48"
                  fill="transparent"
                  r="42"
                  stroke="currentColor"
                  strokeDasharray="263.89"
                  strokeDashoffset="263.89"
                  strokeWidth="8"
                ></circle>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-headline-md font-headline-md text-primary">94%</span>
              </div>
            </div>
            <p className="text-label-lg font-bold text-primary">Readiness</p>
          </div>
        </div>
      </div>
      
      {/* Critical Next Task */}
      <div className="lg:col-span-4 bg-primary text-white rounded-xl p-xl card-shadow flex flex-col justify-between hover:scale-[1.01] transition-transform cursor-pointer">
        <div>
          <div className="flex items-center gap-sm mb-lg">
            <span className="material-symbols-outlined text-primary-fixed">priority_high</span>
            <span className="text-label-lg font-bold uppercase tracking-wider text-primary-fixed">
              Next Action
            </span>
          </div>
          <h4 className="text-headline-lg font-headline-lg mb-sm">Verify B1 Docs</h4>
          <p className="text-body-md opacity-80 mb-xl">
            Your language proficiency certificate needs final notary validation before submission to the German
            Medical Board.
          </p>
        </div>
        <Link href="/documents" className="w-full bg-white text-primary font-bold py-md rounded-lg flex items-center justify-center gap-sm hover:bg-primary-fixed transition-colors cursor-pointer">
          Complete Task
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
}
