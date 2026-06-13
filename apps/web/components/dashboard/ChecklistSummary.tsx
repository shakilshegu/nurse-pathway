'use client';

import React from 'react';
import Link from 'next/link';

export function ChecklistSummary() {
  return (
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
  );
}
