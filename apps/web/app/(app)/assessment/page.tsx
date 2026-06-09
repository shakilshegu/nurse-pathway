'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ReadinessCheckPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleSelect = (question: string, answer: string) => {
    setAnswers({ ...answers, [question]: answer });
  };

  const getButtonClass = (question: string, answer: string) => {
    const isActive = answers[question] === answer;
    return `flex items-center justify-center gap-sm p-md border-2 rounded-xl transition-all duration-200 font-label-lg text-label-lg hover:border-primary-container hover:bg-surface-container-low ${
      isActive
        ? 'active border-primary-container bg-secondary-container text-primary scale-[0.98]'
        : 'border-outline-variant text-on-surface-variant'
    }`;
  };

  const getIconClass = (question: string, answer: string) => {
    const isActive = answers[question] === answer;
    return `material-symbols-outlined ${isActive ? 'text-primary' : ''}`;
  };

  const getIconStyle = (question: string, answer: string) => {
    const isActive = answers[question] === answer;
    return { fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" };
  };

  return (
    <div className="flex-grow pb-32">
      <main className="pt-8 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Progress Header */}
        <div className="mb-lg">
          <div className="flex justify-between items-end mb-xs">
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Readiness Check</h1>
            <span className="font-label-lg text-label-lg text-secondary">Step 3 of 4</span>
          </div>
          <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-primary-container transition-all duration-1000 ease-out" style={{ width: '75%' }}></div>
          </div>
        </div>

        {/* Assessment Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
          
          {/* Question Content */}
          <div className="lg:col-span-7 space-y-md">
            
            {/* Question Block 1: Passport */}
            <section className="bg-surface-container-lowest p-md rounded-xl shadow-sm border border-outline-variant/30">
              <div className="flex items-start gap-md mb-md">
                <div className="bg-secondary-container p-sm rounded-lg text-primary">
                  <span className="material-symbols-outlined">assignment_ind</span>
                </div>
                <div>
                  <h2 className="font-title-lg text-title-lg text-on-surface">Valid International Passport</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Do you have a passport valid for at least 12 months?</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-md">
                <button 
                  className={getButtonClass('passport', 'yes')}
                  onClick={() => handleSelect('passport', 'yes')}
                >
                  <span className={getIconClass('passport', 'yes')} style={getIconStyle('passport', 'yes')}>done</span> 
                  Yes, I have it
                </button>
                <button 
                  className={getButtonClass('passport', 'no')}
                  onClick={() => handleSelect('passport', 'no')}
                >
                  <span className={getIconClass('passport', 'no')} style={getIconStyle('passport', 'no')}>close</span> 
                  Not yet
                </button>
              </div>
            </section>

            {/* Question Block 2: Good Standing */}
            <section className="bg-surface-container-lowest p-md rounded-xl shadow-sm border border-outline-variant/30">
              <div className="flex items-start gap-md mb-md">
                <div className="bg-secondary-container p-sm rounded-lg text-primary">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <h2 className="font-title-lg text-title-lg text-on-surface">Good Standing Certificate</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Can you obtain a Good Standing Certificate from your Nursing Council?</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-md">
                <button 
                  className={getButtonClass('standing', 'yes')}
                  onClick={() => handleSelect('standing', 'yes')}
                >
                  <span className={getIconClass('standing', 'yes')} style={getIconStyle('standing', 'yes')}>done</span> 
                  Yes
                </button>
                <button 
                  className={getButtonClass('standing', 'unsure')}
                  onClick={() => handleSelect('standing', 'unsure')}
                >
                  <span className={getIconClass('standing', 'unsure')} style={getIconStyle('standing', 'unsure')}>help</span> 
                  Not sure
                </button>
              </div>
            </section>

            {/* Question Block 3: Nursing License */}
            <section className="bg-surface-container-lowest p-md rounded-xl shadow-sm border border-outline-variant/30">
              <div className="flex items-start gap-md mb-md">
                <div className="bg-secondary-container p-sm rounded-lg text-primary">
                  <span className="material-symbols-outlined">medical_services</span>
                </div>
                <div>
                  <h2 className="font-title-lg text-title-lg text-on-surface">Active Nursing License</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Is your current nursing registration active and without restrictions?</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-md">
                <button 
                  className={getButtonClass('license', 'active')}
                  onClick={() => handleSelect('license', 'active')}
                >
                  <span className={getIconClass('license', 'active')} style={getIconStyle('license', 'active')}>check_circle</span> 
                  Active
                </button>
                <button 
                  className={getButtonClass('license', 'pending')}
                  onClick={() => handleSelect('license', 'pending')}
                >
                  <span className={getIconClass('license', 'pending')} style={getIconStyle('license', 'pending')}>schedule</span> 
                  Expired/Pending
                </button>
              </div>
            </section>

            {/* Question Block 4: German Willingness */}
            <section className="bg-surface-container-lowest p-md rounded-xl shadow-sm border border-outline-variant/30">
              <div className="flex items-start gap-md mb-md">
                <div className="bg-secondary-container p-sm rounded-lg text-primary">
                  <span className="material-symbols-outlined">language</span>
                </div>
                <div>
                  <h2 className="font-title-lg text-title-lg text-on-surface">German Language Commitment</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Are you willing to undergo intensive German language training (B1/B2)?</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <button 
                  className={getButtonClass('german', 'ready')}
                  onClick={() => handleSelect('german', 'ready')}
                >
                  <span className={getIconClass('german', 'ready')} style={getIconStyle('german', 'ready')}>bolt</span> 
                  Ready to Start
                </button>
                <button 
                  className={getButtonClass('german', 'info')}
                  onClick={() => handleSelect('german', 'info')}
                >
                  <span className={getIconClass('german', 'info')} style={getIconStyle('german', 'info')}>menu_book</span> 
                  Need Info First
                </button>
              </div>
            </section>
          </div>

          {/* Sidebar Info/Context */}
          <aside className="lg:col-span-5 space-y-md">
            <div className="bg-primary-container text-on-primary-container p-lg rounded-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-headline-md text-headline-md mb-md">Why these questions?</h3>
                <p className="font-body-md text-body-md mb-md opacity-90">International migration for healthcare professionals requires specific documentation to ensure a seamless transition and legal compliance in your destination country.</p>
                <ul className="space-y-sm">
                  <li className="flex items-start gap-sm font-label-lg text-label-lg">
                    <span className="material-symbols-outlined text-primary-fixed">info</span>
                    Passports must be valid for visa processing.
                  </li>
                  <li className="flex items-start gap-sm font-label-lg text-label-lg">
                    <span className="material-symbols-outlined text-primary-fixed">info</span>
                    Good Standing proves professional integrity.
                  </li>
                </ul>
              </div>
              {/* Subtle background pattern */}
              <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            <div className="bg-surface-container-high p-md rounded-2xl border-l-4 border-primary">
              <p className="font-body-md text-body-md italic text-on-surface-variant">
                "The readiness check helped me realize exactly what I needed to prepare before I even started my application. It saved me months of back-and-forth."
              </p>
              <div className="mt-md flex items-center gap-sm">
                <div className="w-10 h-10 rounded-full bg-secondary-container">
                  <img 
                    alt="Alumnus Profile" 
                    className="w-full h-full object-cover rounded-full" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuANXSytn5Qrr9rznrV8y-Qeib9R4VXwTm3wBzZBcy-peM7NMsaiozue7mFfPJhadZXfUzFP4PwAsnd4hhEkobt9OIip2C8T5H4jLZBrY9-dmYNYduPtdU6P5wzLfogP8upANbGFV3aA8YN-aJd67ZXSFB6oe6w1PHE-HsVfSrZyXmOh3DdD-9xbKz2Zs4Ep3cCeO0vCoeS7g42xpPfIVqB_edI7Usskg47tV-hMZj6fPDGSqj5iYQMW1mrFmTDu5g1wvvpApBzW_ZI"
                  />
                </div>
                <div>
                  <p className="font-label-lg text-label-lg text-on-surface font-bold">Anjali M.</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">BSc Nursing, Now in Munich</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-surface border-t border-outline-variant/20 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] py-md z-50">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-md">
          <div className="hidden md:block">
            <p className="font-label-lg text-label-lg text-on-surface-variant">You're almost there! Your personalized plan is being generated.</p>
          </div>
          <div className="flex w-full md:w-auto gap-md">
            <Link href="/profile" className="flex-1 md:flex-none">
              <button className="w-full border border-outline px-xl py-3 rounded-lg font-label-lg text-label-lg text-on-surface hover:bg-surface-container-high transition-colors active:scale-95 duration-200 cursor-pointer">
                Back
              </button>
            </Link>
            <Link href="/result" className="flex-[2] md:flex-none">
              <button className="w-full bg-primary-container text-on-primary-container px-xl py-3 rounded-lg font-label-lg text-label-lg shadow-lg hover:brightness-110 active:scale-95 duration-200 cursor-pointer">
                Get My Plan
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
