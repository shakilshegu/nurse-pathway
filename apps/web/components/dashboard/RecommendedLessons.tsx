'use client';

import React from 'react';
import Link from 'next/link';

export function RecommendedLessons() {
  return (
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
  );
}
