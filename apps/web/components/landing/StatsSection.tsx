'use client';

import React from 'react';
import { fadeUp, useInView } from './utils';

export function StatsSection() {
  const stats = useInView();

  return (
    <section className="py-16 bg-surface-container-lowest">
      <div ref={stats.ref} className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: 'verified_user', value: '98%', label: 'Visa Approval Rate' },
            { icon: 'school', value: '150+', label: 'Expert Educators' },
            { icon: 'public', value: '12', label: 'Partner Hospitals' },
            { icon: 'euro', value: '€3.5k', label: 'Avg. Starting Salary' },
          ].map(({ icon, value, label }, i) => (
            <div
              key={label}
              className="flex flex-col items-center text-center"
              style={fadeUp(stats.visible, i * 60)}
            >
              <span className="material-symbols-outlined text-primary mb-2 text-3xl">{icon}</span>
              <span className="font-headline-md text-headline-md text-primary">{value}</span>
              <span className="font-label-lg text-on-surface-variant">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
