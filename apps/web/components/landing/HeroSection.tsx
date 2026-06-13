'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { fadeUp, EASE_OUT } from './utils';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative overflow-hidden py-16 md:py-20"
      style={{ background: 'radial-gradient(circle at top right, var(--color-secondary-fixed) 0%, var(--color-background) 60%)' }}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <span
            className="inline-block bg-secondary-container text-on-secondary-fixed-variant px-4 py-1 rounded-full font-label-sm text-label-sm mb-6 uppercase tracking-wider"
            style={fadeUp(mounted, 0)}
          >
            The Professional Migration Standard
          </span>
          <h1
            className="font-display-lg text-display-lg text-primary mb-6 leading-tight"
            style={fadeUp(mounted, 60)}
          >
            Your Personalized <span className="text-primary-container">Copilot</span> for Nurse Migration
          </h1>
          <p
            className="font-body-lg text-body-lg text-on-secondary-container mb-10 max-w-128"
            style={fadeUp(mounted, 120)}
          >
            Navigate international licensing, visa sponsorship, and healthcare exams with authoritative precision. From Kerala to the World.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4"
            style={fadeUp(mounted, 180)}
          >
            <Link href="/dashboard" className="w-full sm:w-auto">
              <button
                className="bg-primary-container text-on-primary-container px-6 py-3 rounded-md font-label-lg flex items-center justify-center gap-2 hover:brightness-110 shadow-sm w-full cursor-pointer"
                style={{ transition: `transform 160ms ${EASE_OUT}, filter 160ms ${EASE_OUT}` }}
                onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
                onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                Check My Route
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </button>
            </Link>
            <button
              className="border border-outline text-primary px-6 py-3 rounded-md font-label-lg hover:bg-surface-container-high w-full sm:w-auto cursor-pointer"
              style={{ transition: `transform 160ms ${EASE_OUT}, background-color 200ms ease` }}
              onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.97)')}
              onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              Speak to an Advisor
            </button>
          </div>
          <div
            className="mt-12 flex items-center gap-4 text-on-surface-variant"
            style={fadeUp(mounted, 240)}
          >
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full border-2 border-surface bg-slate-200 flex items-center justify-center overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDi3Bcw5fWBkbPFnJts1uUyyyQGWkfwB4TXhLrfyxXS7wDSJMYJBJVHPAfkrqib1nZ7x-hCNv9jktYPkVGkmslVVHSY8RZPffoHZpgmoNhp1wromCVQ9AB64qVadAHfV9__liHBXc7amlhBWgbJiOSYyrTQitfTCTC6q1B9eJR1-Lnu8n137fVySSv312ZtWVhrMWzwnq10N4AurDHBSiYm7Dcgh8aehSLzVdlw7aSgtvnvWVqoPau7qUDENq0CtGY7TZ9k7lj8aY"
                  alt="Avatar 1"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-surface bg-slate-200 flex items-center justify-center overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH3mc-ONg5rZevXHo_puT9auKtYBcDXQH0z9H0Z1yvX5Ol0X8E1EkukZf0x2VNi7-OwuF1twR5Th0gjXJOT_wqXElvAls9SVcuYKrUkO2V1ALvPmQSDcJanpVBrqu9zQMaJ1kOahT5pzzWbEKL0J4Y-bSyL4NxHpH_Ilrwt5UOOSZyOBDePh9oGAxQb-L9WMeNcuHHi-zn1dC5I5HLld3HMqeJLLL8XxRTXZ2MwMvwB_hR9FWl5F44xD9quKp_Z7q1UJEfgix7TD0"
                  alt="Avatar 2"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-surface bg-slate-200 flex items-center justify-center overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWaMfu__ph7uu85rAzS9R-b689Reu1GWvV9_tdbeckp3MMa1R0Pz36R5ANTDwVsgsThOvVJBX-oxPL2KDU2j9Smrbc7LsmMOUL_GlYpoISN755pTmAFCWwNmYiTgoMW-yIF5dS5UXrPZ2ar7X1Ny1pfh_ZpYg46YYxADtsndOu5FwPtPETz_7c1D-_VQTwA_GwwSHgKpwZzT0GRPJquvM1mMID7gFC2k39LcgtFE5b6DWA0EnL677tfjmus90ISsdGc5Q8tVCQsl0"
                  alt="Avatar 3"
                />
              </div>
            </div>
            <span className="font-label-lg">Joined by 2,000+ Kerala Nursing Heroes</span>
          </div>
        </div>
        <div className="relative hidden md:block" style={fadeUp(mounted, 100)}>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-container opacity-5 rounded-full blur-3xl"></div>
          <div className="bg-white rounded-3xl p-6 card-shadow relative z-10 border border-outline-variant/30">
            <img
              className="rounded-xl w-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw_EpEbVnZ9TDohmlYM2NqfC5WTzR3ZrrAhuUPj7Gp6dpMBPPZnBjIVRsZBKMcMY3YZUHfUooG0XtNrJmAv4-5Ee8s9Nk-BJUXlji79KI8JhAoTL03BRAnQbiDaJdL1gXCQoazaglXZlfrWxX7YVsL3kWjPZaKDyTJZpxjFCnQuia2KhzCSyKZrkxNJfUHpVPpTligP46fCCmWuZPAyyz8OHqhXzrGuxW6ViSYPoOu9TPtYdKot_rnnha0yC0goPVMeNUIFQ0MSIw"
              alt="Dashboard Preview"
            />
            <div className="mt-6 flex justify-between items-center bg-surface-container-low p-4 rounded-xl">
              <div>
                <p className="text-label-sm font-label-sm text-on-surface-variant">Active Destination</p>
                <p className="text-title-lg font-title-lg text-primary">Hamburg, Germany</p>
              </div>
              <span className="material-symbols-outlined text-primary-container text-3xl">
                flight_takeoff
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
