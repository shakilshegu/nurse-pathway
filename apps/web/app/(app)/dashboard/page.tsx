'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
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
    <>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-lg space-y-lg">
        {/* Hero Stats: Route and Progress */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Route Status Card */}
          <div className="lg:col-span-8 bg-white rounded-xl card-shadow overflow-hidden relative group">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZgDXphFMGMQiOxg88lebJTJjn2WIAZfvK4ZeUmB8EAVSRGF4nWHfl_mu0wiaFeKPPM9FaAfEADkSnKxe87TWH8KdY7YBqPiGHB0vrshLelXC8XvCSWfon5u1AFAV0lk9FvSk1GLz5zBjkhjLb0gzTNeOlrO32MzzsTY-ZqtsP66Mh2bnZqDDJMDv-8uXaTBpecpkX6IdoTgirImz3lgB7sMB_YBBC_xGMEU7D5Z9fLGiQRoP9c1qevzZlhDj1jtyEPQ3FBDMX63A"
                alt="Germany scenery"
                className="w-full h-full object-cover"
              />
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

        {/* Main Dashboard Layout: Bento Grid Style */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Checklist Summary */}
          <div className="bg-white rounded-xl p-xl card-shadow border border-outline-variant/20 flex flex-col">
            <div className="flex items-center justify-between mb-lg">
              <h5 className="text-title-lg font-title-lg text-primary">Checklist Summary</h5>
              <span className="material-symbols-outlined text-secondary">more_horiz</span>
            </div>
            <div className="space-y-md flex-1">
              <div className="flex items-center gap-md p-sm rounded-lg hover:bg-surface-container-low transition-colors">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-label-lg font-bold">Nursing License</p>
                  <p className="text-label-sm text-on-surface-variant">Validated by ZAB</p>
                </div>
              </div>
              <div className="flex items-center gap-md p-sm rounded-lg hover:bg-surface-container-low transition-colors">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-label-lg font-bold">Work Experience</p>
                  <p className="text-label-sm text-on-surface-variant">3+ years verified</p>
                </div>
              </div>
              <div className="flex items-center gap-md p-sm rounded-lg hover:bg-surface-container-low transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary-container/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined animate-pulse">pending</span>
                </div>
                <div className="flex-1">
                  <p className="text-label-lg font-bold">B1 Language Exam</p>
                  <p className="text-label-sm text-on-surface-variant">Reviewing documents</p>
                </div>
              </div>
            </div>
            <Link href="/checklist" className="mt-xl text-primary font-bold text-label-lg flex items-center gap-xs hover:underline cursor-pointer">
              View Detailed Checklist
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </Link>
          </div>

          {/* Recommended Lessons */}
          <div className="bg-white rounded-xl p-xl card-shadow border border-outline-variant/20">
            <div className="flex items-center justify-between mb-lg">
              <h5 className="text-title-lg font-title-lg text-primary">Recommended Lessons</h5>
              <span className="material-symbols-outlined text-secondary">auto_awesome</span>
            </div>
            <div className="space-y-lg">
              <Link href="/prep" className="block group cursor-pointer">
                <div className="aspect-video rounded-lg overflow-hidden mb-sm border border-outline-variant/30">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx9Xq2q-7lf1vt02WdKky6RDFUPZA4fBWbOjoIlkQL_cElPra0ueHB0xOHAEb3asuAw5h82VykTWjXbtAUntJJwBieohW0fZpSh1NmJJ1Ir75jMyMUz2ZIYO0b0JKOLfo3r_flsHhYknNu8Zw0wMFGtRynMkZH2OBm0Nd5KulY5isNeqwtxh1qYznaSiMtp7DtTu6p2GyizjmUbcgRGfe-3FzBnQG9YfDO6fz0qOmUduXH4HSTuVSEsu1TVW5uZg_J33v-5TA9fYU"
                    alt="Medical German lesson"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-label-lg font-bold group-hover:text-primary transition-colors">
                  Medical German: Patient Intake
                </p>
                <p className="text-label-sm text-on-surface-variant">Module 4 • 15 mins</p>
              </Link>
              <div className="flex items-center gap-md pt-base border-t border-outline-variant/20">
                <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">play_circle</span>
                </div>
                <div>
                  <p className="text-label-lg font-bold line-clamp-1">German Healthcare System 101</p>
                  <p className="text-label-sm text-on-surface-variant">Next: Ethics & Compliance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Updates & Feed */}
          <div className="bg-white rounded-xl p-xl card-shadow border border-outline-variant/20">
            <div className="flex items-center justify-between mb-lg">
              <h5 className="text-title-lg font-title-lg text-primary">Updates</h5>
              <span className="material-symbols-outlined text-secondary">rss_feed</span>
            </div>
            <div className="space-y-base overflow-y-auto max-h-[360px] pr-xs">
              <div className="p-md rounded-lg bg-surface-container-low border-l-4 border-primary">
                <p className="text-label-sm text-primary font-bold mb-xs">Policy Change • 2h ago</p>
                <p className="text-body-md text-on-surface-variant mb-base">
                  New simplified visa process for specialist nurses in Munich region. Read more.
                </p>
                <Link href="/updates" className="text-label-sm font-bold underline">
                  Read Article
                </Link>
              </div>
              <div className="p-md rounded-lg bg-surface-container-low">
                <p className="text-label-sm text-secondary font-bold mb-xs">Success Story • 1d ago</p>
                <p className="text-body-md text-on-surface-variant">
                  "NursePath helped me move to Hamburg in just 6 months!" — Maria R.
                </p>
              </div>
              <div className="p-md rounded-lg bg-surface-container-low">
                <p className="text-label-sm text-secondary font-bold mb-xs">System • 3d ago</p>
                <p className="text-body-md text-on-surface-variant">
                  Maintenance scheduled for Sunday at 02:00 UTC. Your data is safe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Exam Prep Section */}
        <section className="bg-surface-container-highest/20 rounded-2xl p-xl border border-outline-variant/30">
          <div className="flex flex-col md:flex-row gap-xl items-center">
            <div className="flex-1 space-y-md">
              <h5 className="text-headline-md font-headline-md text-primary">Intensive Exam Prep</h5>
              <p className="text-body-lg text-on-surface-variant border-l-4 border-primary pl-md italic">
                "The key to the German medical board exam isn't just knowledge—it's understanding the cultural context
                of care."
              </p>
              <div className="flex gap-md flex-wrap">
                <div className="bg-white px-md py-sm rounded-lg card-shadow">
                  <p className="text-label-sm text-on-surface-variant">Practice Score</p>
                  <p className="text-title-lg font-bold text-primary">
                    82% <span className="text-label-sm font-normal text-secondary">+5% weekly</span>
                  </p>
                </div>
                <div className="bg-white px-md py-sm rounded-lg card-shadow">
                  <p className="text-label-sm text-on-surface-variant">Flashcards</p>
                  <p className="text-title-lg font-bold text-primary">
                    1,240 <span className="text-label-sm font-normal text-secondary">mastered</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-80">
              <Link href="/prep" className="group w-full bg-primary text-white p-lg rounded-xl flex flex-col items-center gap-sm active:scale-95 transition-all cursor-pointer">
                <span className="material-symbols-outlined text-display-lg">model_training</span>
                <span className="text-title-lg font-title-lg">Enter Focus Mode</span>
                <span className="text-label-sm opacity-70">Block distractions for 45 mins</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* FAB for Task Creation */}
      <Link href="/documents" className="fixed bottom-margin-mobile right-margin-mobile md:bottom-margin-desktop md:right-margin-desktop w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center group hover:w-48 transition-all duration-300 overflow-hidden active:scale-95 cursor-pointer z-50">
        <span className="material-symbols-outlined">add</span>
        <span className="max-w-0 group-hover:max-w-xs transition-all duration-300 whitespace-nowrap ml-0 group-hover:ml-2 font-bold text-label-lg opacity-0 group-hover:opacity-100">
          Quick Document
        </span>
      </Link>
    </>
  );
}
