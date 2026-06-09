'use client';

import React, { useState } from 'react';

export default function ChecklistPage() {
  const [activeTab, setActiveTab] = useState('All Tasks');

  const tabs = ['All Tasks', 'Pending', 'In Progress', 'Completed'];

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-lg">
      {/* Header & Progress */}
      <div className="mb-xl">
        <h1 className="font-headline-lg text-headline-lg text-on-surface mb-md">Your Checklist</h1>
        <div className="bg-white p-lg rounded-xl card-shadow flex flex-col md:flex-row gap-lg items-center">
          <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="64" cy="64" fill="transparent" r="56" stroke="#f1f1ef" strokeWidth="8"></circle>
              <circle
                cx="64"
                cy="64"
                fill="transparent"
                r="56"
                stroke="#006874"
                strokeDasharray="351.8"
                strokeDashoffset="140.7"
                strokeLinecap="round"
                strokeWidth="8"
              ></circle>
            </svg>
            <span className="absolute font-headline-md text-headline-md text-primary">60%</span>
          </div>
          <div className="flex-1">
            <h2 className="font-title-lg text-title-lg text-on-surface mb-xs">Almost there, Sarah!</h2>
            <p className="text-body-md text-on-surface-variant mb-md">
              You have 4 tasks pending and 2 in progress. Complete your document verification to unlock the next stage of
              your visa process.
            </p>
            <div className="flex gap-md">
              <div className="flex items-center gap-xs">
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                <span className="text-label-sm text-on-surface-variant">Completed (12)</span>
              </div>
              <div className="flex items-center gap-xs">
                <span className="w-3 h-3 rounded-full bg-secondary-container border border-outline"></span>
                <span className="text-label-sm text-on-surface-variant">Pending (4)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-sm mb-lg border-b border-outline-variant pb-xs overflow-x-auto custom-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-md py-base font-label-lg text-label-lg transition-all whitespace-nowrap cursor-pointer ${
              activeTab === tab
                ? 'border-b-2 border-primary text-primary font-bold'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Checklist Groups */}
      <div className="space-y-xl">
        {/* Category: Documents */}
        <section>
          <div className="flex items-center gap-sm mb-md">
            <span className="material-symbols-outlined text-secondary">folder_open</span>
            <h3 className="font-title-lg text-title-lg text-on-surface">Documents</h3>
          </div>
          <div className="grid grid-cols-1 gap-md">
            {/* Card 1: Completed */}
            <div className="bg-white p-md rounded-xl card-shadow flex flex-col md:flex-row items-start md:items-center justify-between group hover:shadow-md transition-all gap-md">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-on-primary-container"
                    style={{ fontVariationSettings: "'FILL' 0, 'wght' 600" }}
                  >
                    check
                  </span>
                </div>
                <div>
                  <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Nursing License (Home Country)</h4>
                  <p className="text-label-sm text-on-surface-variant">Verified on Oct 12, 2023</p>
                </div>
              </div>
              <div className="flex items-center gap-md w-full md:w-auto justify-between md:justify-end">
                <span className="px-sm py-xs rounded-full bg-primary/10 text-primary text-label-sm font-bold uppercase tracking-wider">
                  Completed
                </span>
                <button className="p-base rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">visibility</span>
                </button>
              </div>
            </div>

            {/* Card 2: In Progress */}
            <div className="bg-white p-md rounded-xl card-shadow flex flex-col md:flex-row items-start md:items-center justify-between group hover:shadow-md transition-all gap-md">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-secondary"
                    style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}
                  >
                    sync
                  </span>
                </div>
                <div>
                  <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Passport Verification</h4>
                  <p className="text-label-sm text-on-surface-variant">Awaiting biometric data confirmation.</p>
                </div>
              </div>
              <div className="flex items-center gap-md w-full md:w-auto justify-between md:justify-end">
                <span className="px-sm py-xs rounded-full bg-secondary-container text-secondary text-label-sm font-bold uppercase tracking-wider">
                  In Progress
                </span>
                <button className="bg-primary text-on-primary px-md py-base rounded-lg font-label-lg text-label-lg hover:opacity-90 transition-all cursor-pointer">
                  Upload File
                </button>
              </div>
            </div>

            {/* Card 3: Pending */}
            <div className="bg-white p-md rounded-xl card-shadow border-l-4 border-error/20 flex flex-col md:flex-row items-start md:items-center justify-between group hover:shadow-md transition-all gap-md">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-error">error_outline</span>
                </div>
                <div>
                  <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Background Check (DBS)</h4>
                  <p className="text-label-sm text-on-surface-variant">Mandatory for German hospital placements.</p>
                </div>
              </div>
              <div className="flex items-center gap-md w-full md:w-auto justify-between md:justify-end">
                <span className="px-sm py-xs rounded-full bg-surface-variant text-on-surface-variant text-label-sm font-bold uppercase tracking-wider">
                  Pending
                </span>
                <button className="bg-primary text-on-primary px-md py-base rounded-lg font-label-lg text-label-lg hover:opacity-90 transition-all cursor-pointer">
                  Start Task
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Category: Language */}
        <section>
          <div className="flex items-center gap-sm mb-md">
            <span className="material-symbols-outlined text-secondary">translate</span>
            <h3 className="font-title-lg text-title-lg text-on-surface">Language Proficiency</h3>
          </div>
          <div className="grid grid-cols-1 gap-md">
            <div className="bg-white p-md rounded-xl card-shadow flex flex-col md:flex-row items-start md:items-center justify-between group hover:shadow-md transition-all gap-md">
              <div className="flex items-center gap-md w-full">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-surface-variant">school</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-sm flex-wrap">
                    <h4 className="font-label-lg text-label-lg text-on-surface font-bold">B2 German Exam Enrollment</h4>
                    <span className="text-label-sm px-xs bg-primary-container/10 text-primary-container rounded">
                      Critical
                    </span>
                  </div>
                  <p className="text-label-sm text-on-surface-variant">Select your preferred exam center and date.</p>
                </div>
              </div>
              <div className="flex items-center gap-md w-full md:w-auto justify-between md:justify-end">
                <span className="px-sm py-xs rounded-full bg-surface-variant text-on-surface-variant text-label-sm font-bold uppercase tracking-wider">
                  Not Started
                </span>
                <button className="bg-primary text-on-primary px-md py-base rounded-lg font-label-lg text-label-lg hover:opacity-90 transition-all cursor-pointer">
                  Book Exam
                </button>
              </div>
            </div>

            <div className="bg-white p-md rounded-xl card-shadow flex flex-col md:flex-row items-start md:items-center justify-between group hover:shadow-md transition-all gap-md">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-primary-container">check</span>
                </div>
                <div>
                  <h4 className="font-label-lg text-label-lg text-on-surface font-bold">OET (English) Certificate</h4>
                  <p className="text-label-sm text-on-surface-variant">Grade B achieved in all modules.</p>
                </div>
              </div>
              <div className="flex items-center gap-md w-full md:w-auto justify-between md:justify-end">
                <span className="px-sm py-xs rounded-full bg-primary/10 text-primary text-label-sm font-bold uppercase tracking-wider">
                  Completed
                </span>
                <button className="p-base rounded-lg border border-outline-variant text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">download</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Category: Process */}
        <section>
          <div className="flex items-center gap-sm mb-md">
            <span className="material-symbols-outlined text-secondary">assignment_turned_in</span>
            <h3 className="font-title-lg text-title-lg text-on-surface">Application Process</h3>
          </div>
          <div className="grid grid-cols-1 gap-md">
            <div className="bg-white p-md rounded-xl card-shadow flex flex-col md:flex-row items-start md:items-center justify-between group hover:shadow-md transition-all gap-md">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary">clinical_notes</span>
                </div>
                <div>
                  <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Curriculum Vitae Optimization</h4>
                  <p className="text-label-sm text-on-surface-variant">Update clinical experience for German standards.</p>
                </div>
              </div>
              <div className="flex items-center gap-md w-full md:w-auto justify-between md:justify-end">
                <span className="px-sm py-xs rounded-full bg-secondary-container text-secondary text-label-sm font-bold uppercase tracking-wider">
                  In Progress
                </span>
                <button className="bg-primary text-on-primary px-md py-base rounded-lg font-label-lg text-label-lg hover:opacity-90 transition-all cursor-pointer">
                  Edit CV
                </button>
              </div>
            </div>

            <div className="bg-white p-md rounded-xl card-shadow opacity-60 flex flex-col md:flex-row items-start md:items-center justify-between group grayscale hover:grayscale-0 transition-all gap-md">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-surface-variant">lock</span>
                </div>
                <div>
                  <h4 className="font-label-lg text-label-lg text-on-surface font-bold">Visa Interview Slot Booking</h4>
                  <p className="text-label-sm text-on-surface-variant">Unlocked after Document Verification is 100% complete.</p>
                </div>
              </div>
              <div className="flex items-center gap-md w-full md:w-auto justify-between md:justify-end">
                <span className="px-sm py-xs rounded-full bg-surface-variant text-on-surface-variant text-label-sm font-bold uppercase tracking-wider">
                  Locked
                </span>
                <button
                  className="p-base rounded-lg bg-surface-variant text-on-surface-variant cursor-not-allowed"
                  disabled
                >
                  <span className="material-symbols-outlined">lock</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Quote/Highlight */}
      <div className="mt-xl p-lg bg-secondary-container/30 border-l-4 border-primary rounded-r-xl">
        <p className="font-body-lg text-body-lg text-secondary">
          "Keep your medical certificates organized by date. German authorities prioritize recent certifications (within
          the last 24 months) for direct entry programs."
        </p>
        <div className="mt-sm flex items-center gap-xs">
          <span
            className="material-symbols-outlined text-primary scale-75"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            lightbulb
          </span>
          <span className="text-label-sm text-primary font-bold">Expert migration tip</span>
        </div>
      </div>
    </div>
  );
}
