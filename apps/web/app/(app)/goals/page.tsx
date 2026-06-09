'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function GoalSelectionPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const isOptionSelected = (id: string) => selectedOption === id;

  return (
    <div className="flex-grow pt-8 pb-xl px-margin-mobile md:px-margin-desktop relative min-h-screen">
      {/* Background Atmospheric Effect */}
      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-fixed blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-secondary-fixed blur-[100px]"></div>
      </div>

      <div className="max-w-[800px] mx-auto">
        {/* Progress indicator */}
        <div className="mb-12">
          <div className="flex justify-between w-full mb-2">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Step 1 of 4</span>
            <span className="font-label-sm text-label-sm text-primary font-bold">25% Complete</span>
          </div>
          <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
            <div className="bg-primary-container h-full transition-all duration-700 ease-out" style={{ width: '25%' }}></div>
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-xl">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-sm">
            What do you want to do?
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mx-auto">
            Select the path that matches your professional aspirations. We'll tailor your entire migration journey based on this choice.
          </p>
        </div>

        {/* Bento Grid of Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-xl">
          {/* Option: Germany */}
          <button
            className={`group relative flex flex-col items-center p-xl rounded-xl transition-all duration-300 hover:shadow-lg hover:border-primary-container text-center ${
              isOptionSelected('germany')
                ? 'border-2 border-primary-container bg-surface-container shadow-md'
                : 'bg-surface-container-lowest border border-outline-variant'
            }`}
            onClick={() => setSelectedOption('germany')}
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-md transition-colors ${
                isOptionSelected('germany') ? 'bg-primary-container' : 'bg-surface-container-high group-hover:bg-primary-container'
              }`}
            >
              <span
                className={`material-symbols-outlined text-[32px] ${
                  isOptionSelected('germany') ? 'text-on-primary-container' : 'text-on-secondary-container group-hover:text-on-primary-container'
                }`}
              >
                location_on
              </span>
            </div>
            <h3 className="font-title-lg text-title-lg text-on-surface mb-xs">Go to Germany</h3>
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              Secure high-demand nursing roles in top-tier European hospitals with full language support.
            </p>
            <div className={`absolute top-4 right-4 transition-opacity ${isOptionSelected('germany') ? 'opacity-100' : 'opacity-0'}`}>
              <span className="material-symbols-outlined text-primary-container">check_circle</span>
            </div>
          </button>

          {/* Option: UAE */}
          <button
            className={`group relative flex flex-col items-center p-xl rounded-xl transition-all duration-300 hover:shadow-lg hover:border-primary-container text-center ${
              isOptionSelected('uae')
                ? 'border-2 border-primary-container bg-surface-container shadow-md'
                : 'bg-surface-container-lowest border border-outline-variant'
            }`}
            onClick={() => setSelectedOption('uae')}
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-md transition-colors ${
                isOptionSelected('uae') ? 'bg-primary-container' : 'bg-surface-container-high group-hover:bg-primary-container'
              }`}
            >
              <span
                className={`material-symbols-outlined text-[32px] ${
                  isOptionSelected('uae') ? 'text-on-primary-container' : 'text-on-secondary-container group-hover:text-on-primary-container'
                }`}
              >
                apartment
              </span>
            </div>
            <h3 className="font-title-lg text-title-lg text-on-surface mb-xs">Go to UAE</h3>
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              Fast-track your career in tax-free hubs like Dubai or Abu Dhabi with streamlined DHA/MOH licensing.
            </p>
            <div className={`absolute top-4 right-4 transition-opacity ${isOptionSelected('uae') ? 'opacity-100' : 'opacity-0'}`}>
              <span className="material-symbols-outlined text-primary-container">check_circle</span>
            </div>
          </button>

          {/* Option: Help Me Decide */}
          <button
            className={`group relative flex flex-col items-center p-xl rounded-xl transition-all duration-300 hover:shadow-lg hover:border-primary-container text-center ${
              isOptionSelected('help')
                ? 'border-2 border-primary-container bg-surface-container shadow-md'
                : 'bg-surface-container-lowest border border-outline-variant'
            }`}
            onClick={() => setSelectedOption('help')}
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-md transition-colors ${
                isOptionSelected('help') ? 'bg-primary-container' : 'bg-surface-container-high group-hover:bg-primary-container'
              }`}
            >
              <span
                className={`material-symbols-outlined text-[32px] ${
                  isOptionSelected('help') ? 'text-on-primary-container' : 'text-on-secondary-container group-hover:text-on-primary-container'
                }`}
              >
                explore
              </span>
            </div>
            <h3 className="font-title-lg text-title-lg text-on-surface mb-xs">Help me decide</h3>
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              Not sure yet? Compare salary, lifestyle, and requirements for both destinations side-by-side.
            </p>
            <div className={`absolute top-4 right-4 transition-opacity ${isOptionSelected('help') ? 'opacity-100' : 'opacity-0'}`}>
              <span className="material-symbols-outlined text-primary-container">check_circle</span>
            </div>
          </button>
        </div>

        {/* Trust Note & Action */}
        <div className="flex flex-col items-center gap-md">
          <div className="flex items-center gap-xs text-on-secondary-container bg-secondary-container/30 px-md py-xs rounded-full">
            <span className="material-symbols-outlined text-body-md" style={{ fontVariationSettings: "'FILL' 1" }}>
              security
            </span>
            <span className="font-label-sm text-label-sm">Your answers help us create your route plan.</span>
          </div>
          
          <Link href="/profile" className={`w-full md:w-64 ${!selectedOption ? 'pointer-events-none' : ''}`}>
            <button
              className="w-full bg-primary-container text-on-primary-container py-4 px-xl rounded-md font-label-lg text-label-lg shadow-sm hover:brightness-110 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!selectedOption}
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
