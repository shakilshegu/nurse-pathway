'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden min-h-screen">
      <header
        className={`fixed top-0 w-full z-50 bg-surface dark:bg-surface-container transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <nav className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-16">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-primary-container text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              medical_services
            </span>
            <span className="font-title-lg text-title-lg font-bold text-primary dark:text-inverse-primary">
              NursePath
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#expertise"
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary-container transition-colors duration-200"
            >
              Expertise
            </a>
            <a
              href="#testimonials"
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary-container transition-colors duration-200"
            >
              Testimonials
            </a>
            <a
              href="#why-us"
              className="font-label-lg text-label-lg text-on-surface-variant hover:text-primary-container transition-colors duration-200"
            >
              Why Us
            </a>
          </div>
          <Link href="/dashboard">
            <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-md font-label-lg active:scale-95 duration-200 shadow-sm cursor-pointer">
              Check My Route
            </button>
          </Link>
        </nav>
      </header>

      <main className="pt-16">
        <section className="relative overflow-hidden py-24 md:py-32" style={{ background: 'radial-gradient(circle at top right, var(--color-secondary-fixed) 0%, var(--color-background) 60%)' }}>
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <span className="inline-block bg-secondary-container text-on-secondary-fixed-variant px-4 py-1 rounded-full font-label-sm text-label-sm mb-6 uppercase tracking-wider">
                The Professional Migration Standard
              </span>
              <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">
                Your Personalized <span className="text-primary-container">Copilot</span> for Nurse Migration
              </h1>
              <p className="font-body-lg text-body-lg text-on-secondary-container mb-10 max-w-lg">
                Navigate international licensing, visa sponsorship, and healthcare exams with authoritative precision. From Kerala to the World.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard">
                  <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-md font-title-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-95 shadow-lg w-full cursor-pointer">
                    Check My Route
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </Link>
                <button className="border border-outline text-primary px-8 py-4 rounded-md font-title-lg hover:bg-surface-container-high transition-all active:scale-95 w-full cursor-pointer">
                  Speak to an Advisor
                </button>
              </div>
              <div className="mt-12 flex items-center gap-4 text-on-surface-variant">
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
            <div className="relative hidden md:block">
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

        <section className="py-16 bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary mb-2 text-3xl">verified_user</span>
                <span className="font-headline-md text-headline-md text-primary">98%</span>
                <span className="font-label-lg text-on-surface-variant">Visa Approval Rate</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary mb-2 text-3xl">school</span>
                <span className="font-headline-md text-headline-md text-primary">150+</span>
                <span className="font-label-lg text-on-surface-variant">Expert Educators</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary mb-2 text-3xl">public</span>
                <span className="font-headline-md text-headline-md text-primary">12</span>
                <span className="font-label-lg text-on-surface-variant">Partner Hospitals</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-primary mb-2 text-3xl">euro</span>
                <span className="font-headline-md text-headline-md text-primary">€3.5k</span>
                <span className="font-label-lg text-on-surface-variant">Avg. Starting Salary</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface" id="expertise">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Master Your Migration in 3 Steps</h2>
              <p className="font-body-lg text-body-lg text-on-secondary-container max-w-2xl mx-auto">
                We remove the complexity of international career shifts through a structured, clinical approach.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-outline-variant/30 z-0"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-primary-container flex items-center justify-center mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-primary-container text-4xl">assignment_ind</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2">Route Assessment</h3>
                <p className="text-center font-body-md text-on-surface-variant">AI-driven analysis of your credentials, experience, and destination eligibility in 5 minutes.</p>
              </div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-primary-container flex items-center justify-center mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-primary-container text-4xl">school</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2">Focused Upskilling</h3>
                <p className="text-center font-body-md text-on-surface-variant">Specialized language coaching (German B2) and clinical exam prep (CBT/NCLEX) tailored for you.</p>
              </div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-primary-container flex items-center justify-center mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-primary-container text-4xl">task_alt</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-primary mb-2">Verified Placement</h3>
                <p className="text-center font-body-md text-on-surface-variant">Seamless transition with visa processing and direct interviews with top-tier healthcare providers.</p>
              </div>
            </div>
            <div className="mt-16 flex justify-center">
              <button className="bg-primary-container text-on-primary-container px-10 py-4 rounded-md font-title-lg hover:brightness-110 active:scale-95 shadow-md cursor-pointer">
                Start Free Assessment
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface-container-low dark:bg-surface-container-high py-xl">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
                <span className="font-title-lg text-title-lg font-bold text-primary">NursePath</span>
              </div>
              <p className="font-body-md text-on-secondary-container max-w-sm">
                Building the most reliable pathway for Indian healthcare professionals to access the global job market with dignity and security.
              </p>
            </div>
            <div>
              <h4 className="font-title-lg text-primary mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a className="font-body-md text-on-secondary-container hover:text-primary transition-all" href="#">Expertise</a></li>
                <li><a className="font-body-md text-on-secondary-container hover:text-primary transition-all" href="#">Testimonials</a></li>
                <li><a className="font-body-md text-on-secondary-container hover:text-primary transition-all" href="#">Why Us</a></li>
                <li><a className="font-body-md text-on-secondary-container hover:text-primary transition-all" href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-title-lg text-primary mb-6">Connect</h4>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
                <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined">call</span></a>
                <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined">share</span></a>
              </div>
            </div>
          </div>
          <div className="border-t border-outline-variant pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body-md text-on-secondary-container text-sm">© 2024 NursePath. Empowering Kerala's Healthcare Heroes.</p>
            <div className="flex gap-8">
              <a className="text-sm font-label-sm text-on-secondary-container hover:underline" href="#">Terms of Service</a>
              <a className="text-sm font-label-sm text-on-secondary-container hover:underline" href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
