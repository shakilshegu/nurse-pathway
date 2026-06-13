'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-white dark:bg-surface-container transition-[box-shadow] duration-150 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <nav className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-16">
        <div className="flex items-center gap-2">
          <span
            className="material-symbols-outlined text-[#006874] text-[32px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            medical_services
          </span>
          <span className="text-[22px] font-bold text-[#006874] tracking-tight">
            NursePath
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#expertise"
            className="font-label-lg text-label-lg text-on-surface hover:text-primary transition-colors duration-200"
          >
            Expertise
          </a>
          <a
            href="#testimonials"
            className="font-label-lg text-label-lg text-on-surface hover:text-primary transition-colors duration-200"
          >
            Testimonials
          </a>
          <a
            href="#why-us"
            className="font-label-lg text-label-lg text-on-surface hover:text-primary transition-colors duration-200"
          >
            Why Us
          </a>
        </div>
        <Link href="/dashboard">
          <button
            className="bg-primary text-white px-6 py-2.5 rounded-md font-label-lg hover:brightness-110 shadow-sm cursor-pointer transition-all duration-200"
            onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
            onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Check My Route
          </button>
        </Link>
      </nav>
    </header>
  );
}
