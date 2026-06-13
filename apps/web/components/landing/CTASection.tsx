'use client';

import React from 'react';

export function CTASection() {
  return (
    <section className="py-32 bg-surface text-center">
      <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-display-md md:font-display-lg text-primary mb-6">Ready to start your global journey?</h2>
        <p className="font-body-lg text-on-surface-variant mb-12">
          Our advisors are ready to map out your specific trajectory. Take the first step with a no-obligation credential review.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button
            className="bg-primary text-white px-8 py-4 rounded-md font-label-lg hover:brightness-110 shadow-md transition-all duration-200 w-full sm:w-auto cursor-pointer"
            onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
            onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Get My Career Roadmap
          </button>
          <button
            className="border border-outline text-primary px-8 py-4 rounded-md font-label-lg hover:bg-surface-container-high transition-colors duration-200 w-full sm:w-auto cursor-pointer"
            onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
            onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Compare Destinations
          </button>
        </div>
      </div>
    </section>
  );
}
