'use client';

import React from 'react';

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-surface-container-lowest" id="testimonials">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bg-primary rounded-[32px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative z-10">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Anoop Varghese"
              className="w-full h-full object-cover rounded-full border-4 border-primary-container/30 shadow-lg"
            />
          </div>

          <div className="flex-1 relative z-10">
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="material-symbols-outlined text-[#FFD700] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <p className="font-headline-sm md:font-headline-md text-white italic mb-8 leading-relaxed">
              "NursePath wasn't just an agency; they were my career architects. From the first German language lesson in Kochi to my first shift in Munich, their technical guidance was flawless. I felt supported at every bureaucratic turn."
            </p>
            <div className="border-t border-white/20 pt-6">
              <p className="font-title-lg text-white mb-1">Anoop Varghese</p>
              <p className="font-label-lg text-white/80">ICU Specialist, Klinikum München</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
