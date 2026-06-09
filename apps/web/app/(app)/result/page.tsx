'use client';

import React from 'react';
import Link from 'next/link';

export default function ResultPage() {
  return (
    <div className="flex-grow pb-32 md:pb-16">
      <main className="pt-8 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Hero Header */}
        <section className="mb-lg">
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">
            Your Career Roadmap
          </h1>
          <p className="text-on-secondary-container font-body-lg text-body-lg">
            Based on your clinical experience and goals, we've identified your optimal path.
          </p>
        </section>

        {/* Bento Grid Results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Primary Recommendation Card */}
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl p-md border border-outline-variant/30 shadow-[0_8px_24px_rgba(0,0,0,0.06)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-md">
              <div className="flex items-center gap-2 bg-primary-container/10 text-primary-container px-3 py-1 rounded-full border border-primary-container/20">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider">Top Match</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-md items-start mt-4">
              <div className="w-full md:w-1/3">
                <div className="aspect-square rounded-xl bg-surface-container overflow-hidden mb-4 relative">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdMVwBclv-9SNj0UWYJLdxa92DhYBEc-_tXKg0Fnw6wnaDd4s-wbIwOE7JTg07Atsny7aDqmp9LqvqeIbpVsDYr10s28OpwsO0qnBtE6e7LBJdOyFcn78L_J0M5hbpCniSBIQSdmVLNOpf19m1fo4qPvo2kq2A9GvIxWtps7Oefhd3qLDPUTQLhDg1S_tsadZbZJ9DNAvMTSqPAymdGpsvWHWB3OwVy3-f94hMeg28SGyafid1WaXI62lg2r4XMoEcqeLVqZxPHOw"
                    alt="Germany"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white font-headline-md text-headline-md block">Germany</span>
                    <span className="text-on-primary-container font-label-sm text-label-sm">EU Blue Card Route</span>
                  </div>
                </div>
                <div className="bg-surface-container-low rounded-lg p-4 flex flex-col items-center">
                  <span className="text-on-surface-variant font-label-sm text-label-sm uppercase">Fit Score</span>
                  <span className="text-primary font-display-lg text-display-lg">94%</span>
                </div>
              </div>
              
              <div className="w-full md:w-2/3 flex flex-col justify-between h-full">
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface mb-sm">Why this route fits you</h2>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <span className="material-symbols-outlined text-primary-container mt-1">medical_services</span>
                      <p className="text-on-surface-variant">
                        <strong className="text-on-surface">Experience Match:</strong> Your 5 years in ICU perfectly aligns with the urgent staffing needs in Bavarian clinical clusters.
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <span className="material-symbols-outlined text-primary-container mt-1">euro_symbol</span>
                      <p className="text-on-surface-variant">
                        <strong className="text-on-surface">Financial Stability:</strong> Starting salary of €42,000 - €50,000 with full social security and healthcare benefits for families.
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <span className="material-symbols-outlined text-primary-container mt-1">language</span>
                      <p className="text-on-surface-variant">
                        <strong className="text-on-surface">Learning Pace:</strong> Your previous B1 certification reduces your migration timeline by an estimated 6 months.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-md pt-md border-t border-outline-variant/30">
                  <h3 className="font-title-lg text-title-lg mb-sm">Next 3 Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-sm">
                    <div className="p-3 bg-surface-container rounded-lg border-l-4 border-primary-container">
                      <span className="text-label-sm font-label-sm text-primary-container block mb-1">01. Verify</span>
                      <span className="text-body-md font-body-md text-on-surface">Upload B1 Docs</span>
                    </div>
                    <div className="p-3 bg-surface-container rounded-lg">
                      <span className="text-label-sm font-label-sm text-on-surface-variant block mb-1">02. Book</span>
                      <span className="text-body-md font-body-md text-on-surface">Counseling Call</span>
                    </div>
                    <div className="p-3 bg-surface-container rounded-lg">
                      <span className="text-label-sm font-label-sm text-on-surface-variant block mb-1">03. Study</span>
                      <span className="text-body-md font-body-md text-on-surface">A1 Review</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 flex flex-col gap-gutter">
            {/* What you still need Card */}
            <div className="bg-surface-container-highest rounded-xl p-md shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-outline-variant/30 h-full">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-sm">What you still need</h2>
              <div className="space-y-4 mb-md">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-error">close</span>
                    <span className="text-on-surface font-body-md">B2 German Language</span>
                  </div>
                  <span className="text-error font-label-sm">Required</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-outline">pending</span>
                    <span className="text-on-surface font-body-md">Degree Attestation</span>
                  </div>
                  <span className="text-on-surface-variant font-label-sm">In Progress</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-outline">circle</span>
                    <span className="text-on-surface font-body-md">Clinical Skills Check</span>
                  </div>
                  <span className="text-on-surface-variant font-label-sm">Pending</span>
                </div>
              </div>
              <Link href="/checklist">
                <button className="w-full bg-primary-container text-on-primary-container py-3 rounded-lg font-title-lg text-title-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-md">
                  <span>Open My Checklist</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </Link>
            </div>

            {/* Secondary Option Card */}
            <div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant/30 shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
              <div className="flex justify-between items-start mb-sm">
                <div>
                  <h3 className="font-title-lg text-title-lg text-on-surface">UAE (Dubai/Abu Dhabi)</h3>
                  <p className="text-on-secondary-container text-label-sm">Fast-track Licensing</p>
                </div>
                <span className="text-primary-container font-headline-md text-headline-md">82%</span>
              </div>
              <p className="text-on-surface-variant text-body-md mb-4 border-l-4 border-secondary-container pl-4">
                A solid alternative if you prefer immediate relocation with zero language requirements.
              </p>
              <button className="text-primary-container font-label-lg text-label-lg flex items-center gap-1 hover:underline cursor-pointer">
                View details <span className="material-symbols-outlined text-sm">open_in_new</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quote / Insight Section */}
        <section className="mt-xl max-w-3xl mx-auto">
          <div className="border-l-4 border-primary-container pl-md py-4 bg-surface-container-low rounded-r-xl">
            <p className="text-body-lg font-body-lg text-on-surface-variant italic">
              "NursePath analyzed over 500 successful migration cases this year. Your profile's high clinical proficiency makes you a premium candidate for public university hospitals in Germany."
            </p>
            <p className="mt-sm text-label-lg font-label-lg text-on-surface-variant">— Dr. Anjali Menon, Chief Medical Consultant</p>
          </div>
        </section>
      </main>
    </div>
  );
}
