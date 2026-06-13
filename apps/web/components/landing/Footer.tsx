'use client';

import React from 'react';

export function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-surface-container-high py-xl">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
              <span className="font-title-lg text-title-lg font-bold text-primary">NursePath</span>
            </div>
            <p className="font-body-md text-on-secondary-container max-w-96">
              Building the most reliable pathway for Indian healthcare professionals to access the global job market with dignity and security.
            </p>
          </div>
          <div>
            <h4 className="font-title-lg text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a className="font-body-md text-on-secondary-container hover:text-primary transition-colors duration-150" href="#">Expertise</a></li>
              <li><a className="font-body-md text-on-secondary-container hover:text-primary transition-colors duration-150" href="#">Testimonials</a></li>
              <li><a className="font-body-md text-on-secondary-container hover:text-primary transition-colors duration-150" href="#">Why Us</a></li>
              <li><a className="font-body-md text-on-secondary-container hover:text-primary transition-colors duration-150" href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-title-lg text-primary mb-6">Connect</h4>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-150" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
              <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-150" href="#"><span className="material-symbols-outlined">call</span></a>
              <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-150" href="#"><span className="material-symbols-outlined">share</span></a>
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
  );
}
