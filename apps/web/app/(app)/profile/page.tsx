'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ProfileDetailsPage() {
  const [timeline, setTimeline] = useState<string | null>(null);

  return (
    <div className="flex-grow pt-8 pb-xl px-margin-mobile md:px-margin-desktop relative min-h-screen">
      {/* Visual Background Element */}
      <div className="fixed bottom-0 right-0 -z-10 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary-container to-secondary-fixed filter blur-3xl"></div>
      </div>

      <div className="max-w-[800px] mx-auto">
        {/* Progress Section */}
        <div className="mb-lg">
          <div className="flex justify-between items-end mb-sm">
            <div>
              <span className="font-label-lg text-label-lg text-secondary uppercase tracking-wider">Step 2 of 4</span>
              <h1 className="font-headline-lg text-headline-lg text-primary mt-xs">Profile Details</h1>
            </div>
            <div className="text-right hidden md:block">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Completion: 50%</span>
            </div>
          </div>
          <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-primary-container transition-all duration-500 ease-out" style={{ width: '50%' }}></div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white shadow-sm rounded-xl p-md md:p-lg border border-outline-variant/30">
          <form className="space-y-lg" onSubmit={(e) => e.preventDefault()}>
            {/* Section: Professional Identity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div className="space-y-base">
                <label className="block font-label-lg text-label-lg text-on-surface-variant">Full Name (As per Passport)</label>
                <input 
                  className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:border-primary-container focus:ring-2 focus:ring-primary-container/10 outline-none transition-all" 
                  placeholder="e.g. Anjali Nair" 
                  type="text" 
                />
              </div>
              <div className="space-y-base">
                <label className="block font-label-lg text-label-lg text-on-surface-variant">Current Location</label>
                <div className="relative">
                  <select 
                    className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:border-primary-container focus:ring-2 focus:ring-primary-container/10 outline-none appearance-none transition-all"
                    defaultValue=""
                  >
                    <option disabled value="">Select District / State</option>
                    <option>Ernakulam, Kerala</option>
                    <option>Thiruvananthapuram, Kerala</option>
                    <option>Kozhikode, Kerala</option>
                    <option>Outside Kerala (India)</option>
                    <option>Overseas</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                </div>
              </div>
            </div>

            {/* Section: Experience & Education */}
            <div className="space-y-md">
              <div className="space-y-base">
                <label className="block font-label-lg text-label-lg text-on-surface-variant">Highest Nursing Qualification</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-sm segmented-control">
                  <div>
                    <input className="hidden peer" id="gnm" name="qualification" type="radio" defaultChecked />
                    <label 
                      className="flex items-center justify-center h-12 px-4 border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-all font-label-lg text-label-lg text-on-surface-variant peer-checked:bg-primary-container peer-checked:text-white peer-checked:border-primary-container" 
                      htmlFor="gnm"
                    >
                      GNM
                    </label>
                  </div>
                  <div>
                    <input className="hidden peer" id="bsc" name="qualification" type="radio" />
                    <label 
                      className="flex items-center justify-center h-12 px-4 border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-all font-label-lg text-label-lg text-on-surface-variant peer-checked:bg-primary-container peer-checked:text-white peer-checked:border-primary-container" 
                      htmlFor="bsc"
                    >
                      B.Sc Nursing
                    </label>
                  </div>
                  <div>
                    <input className="hidden peer" id="msc" name="qualification" type="radio" />
                    <label 
                      className="flex items-center justify-center h-12 px-4 border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-all font-label-lg text-label-lg text-on-surface-variant peer-checked:bg-primary-container peer-checked:text-white peer-checked:border-primary-container" 
                      htmlFor="msc"
                    >
                      M.Sc Nursing
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-base">
                <label className="block font-label-lg text-label-lg text-on-surface-variant">Total Clinical Experience</label>
                <div className="relative">
                  <select 
                    className="w-full h-12 px-md bg-white border border-outline-variant rounded-lg focus:border-primary-container focus:ring-2 focus:ring-primary-container/10 outline-none appearance-none transition-all"
                    defaultValue=""
                  >
                    <option disabled value="">Years of Experience</option>
                    <option>Under 1 Year</option>
                    <option>1 - 2 Years</option>
                    <option>2 - 5 Years</option>
                    <option>5+ Years</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                </div>
              </div>
            </div>

            {/* Section: Timeline Strategy */}
            <div className="p-md bg-surface-container-low rounded-xl space-y-md">
              <div className="flex items-start gap-md">
                <div className="p-base bg-primary-container/10 rounded-full">
                  <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-title-lg text-title-lg text-primary">Migration Timeline</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md mt-xs">When are you planning to start your international career?</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
                <button 
                  className={`flex flex-col p-md border rounded-lg bg-white hover:border-primary-container transition-all text-left focus:ring-2 focus:ring-primary-container/10 ${timeline === 'fast' ? 'border-primary-container ring-2 ring-primary-container/10' : 'border-outline-variant'}`} 
                  type="button"
                  onClick={() => setTimeline('fast')}
                >
                  <span className="font-label-lg text-label-lg text-primary">Fast-Track</span>
                  <span className="text-on-surface-variant font-body-md text-sm">Within 3-6 months</span>
                </button>
                <button 
                  className={`flex flex-col p-md border rounded-lg bg-white hover:border-primary-container transition-all text-left focus:ring-2 focus:ring-primary-container/10 ${timeline === 'slow' ? 'border-primary-container ring-2 ring-primary-container/10' : 'border-outline-variant'}`} 
                  type="button"
                  onClick={() => setTimeline('slow')}
                >
                  <span className="font-label-lg text-label-lg text-primary">Planned Growth</span>
                  <span className="text-on-surface-variant font-body-md text-sm">Next 12 months</span>
                </button>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-md pt-base border-t border-surface-container-high">
              <Link href="/goals" className="flex items-center gap-xs font-label-lg text-label-lg text-secondary hover:text-primary transition-colors py-2 px-md">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Back to Step 1
              </Link>
              <Link href="/assessment" className="w-full md:w-auto">
                <button 
                  className="w-full h-12 px-xl bg-primary-container text-white font-label-lg text-label-lg rounded-md hover:bg-primary transition-all active:scale-95 shadow-md flex items-center justify-center gap-2" 
                  type="button"
                >
                  Next
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </Link>
            </div>
          </form>
        </div>

        {/* Contextual Tip */}
        <div className="mt-lg border-l-4 border-primary-container bg-surface-container-low p-md rounded-r-lg">
          <div className="flex gap-md">
            <span className="material-symbols-outlined text-primary-container">lightbulb</span>
            <p className="font-body-md text-body-md text-on-surface-variant italic">
              <strong>Pro Tip:</strong> Most German healthcare facilities prefer nurses with at least 2 years of clinical experience for their B2 sponsorship programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
