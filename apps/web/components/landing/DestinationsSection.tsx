'use client';

import React from 'react';
import Link from 'next/link';

export function DestinationsSection() {
  return (
    <section className="py-24 bg-surface-container-lowest" id="destinations">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Choose Your Destination</h2>
            <p className="font-body-lg text-on-surface-variant">Strategic placements in high-growth healthcare markets.</p>
          </div>
          <Link href="/destinations" className="group flex items-center gap-1 font-label-lg text-primary hover:text-primary-container border-b-2 border-primary pb-0.5">
            View All Opportunities
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">north_east</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Germany Card */}
          <div className="bg-surface rounded-2xl overflow-hidden border border-outline-variant shadow-sm flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Germany" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#006874]/20 mix-blend-multiply pointer-events-none"></div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline-sm text-headline-sm text-primary">Germany</h3>
                <span className="bg-[#D1E2EC] text-[#394951] font-semibold px-3 py-1 rounded font-label-sm">B2 Language Required</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['EU Citizenship Pathway', 'Free Tuition for Specialized Certs', 'Family Reunification Support'].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary-container text-[20px]">done_all</span>
                    <span className="font-body-md text-on-surface">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full border border-[#006874] text-primary py-3 rounded-md font-label-lg hover:bg-surface-container-high transition-colors duration-200 cursor-pointer">
                Explore Germany Route
              </button>
            </div>
          </div>

          {/* UAE Card */}
          <div className="bg-surface rounded-2xl overflow-hidden border border-outline-variant shadow-sm flex flex-col">
            <div className="h-64 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="United Arab Emirates" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#006874]/20 mix-blend-multiply pointer-events-none"></div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline-sm text-headline-sm text-primary">United Arab Emirates</h3>
                <span className="bg-[#DCE5DD] text-[#394951] font-semibold px-3 py-1 rounded font-label-sm">Tax-Free Income</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {['Zero Income Tax', 'Subsidized Luxury Housing', 'Rapid 3-Month Migration'].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary-container text-[20px]">done_all</span>
                    <span className="font-body-md text-on-surface">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full border border-[#006874] text-primary py-3 rounded-md font-label-lg hover:bg-surface-container-high transition-colors duration-200 cursor-pointer">
                Explore UAE Route
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
