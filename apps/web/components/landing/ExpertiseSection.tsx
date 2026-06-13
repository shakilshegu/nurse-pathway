'use client';

import React from 'react';
import { fadeUp, useInView, EASE_OUT } from './utils';

export function ExpertiseSection() {
  const steps = useInView();

  return (
    <section className="py-24 bg-surface" id="expertise">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Master Your Migration in 3 Steps</h2>
          <p className="font-body-lg text-body-lg text-on-secondary-container max-w-2xl mx-auto">
            We remove the complexity of international career shifts through a structured, clinical approach.
          </p>
        </div>
        <div ref={steps.ref} className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-outline-variant/30 z-0"></div>

          {[
            { icon: 'assignment_ind', title: 'Route Assessment', desc: 'AI-driven analysis of your credentials, experience, and destination eligibility in 5 minutes.' },
            { icon: 'school', title: 'Focused Upskilling', desc: 'Specialized language coaching (German B2) and clinical exam prep (CBT/NCLEX) tailored for you.' },
            { icon: 'task_alt', title: 'Verified Placement', desc: 'Seamless transition with visa processing and direct interviews with top-tier healthcare providers.' },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="relative z-10 flex flex-col items-center"
              style={fadeUp(steps.visible, i * 80)}
            >
              <div className="w-24 h-24 rounded-full bg-white border-2 border-primary-container flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-primary-container text-4xl">{icon}</span>
              </div>
              <h3 className="font-title-lg text-title-lg text-primary mb-2">{title}</h3>
              <p className="text-center font-body-md text-on-surface-variant">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <button
            className="bg-primary-container text-on-primary-container px-8 py-3 rounded-md font-label-lg hover:brightness-110 shadow-sm cursor-pointer"
            style={{ transition: `transform 160ms ${EASE_OUT}, filter 160ms ${EASE_OUT}` }}
            onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
            onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Start Free Assessment
          </button>
        </div>
      </div>
    </section>
  );
}
