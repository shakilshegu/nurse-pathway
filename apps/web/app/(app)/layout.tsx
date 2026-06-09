'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="font-body-md overflow-x-hidden bg-surface min-h-screen">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* SideNavBar */}
      <aside className={`fixed left-0 top-0 h-full p-md border-r border-outline-variant bg-surface-container-low dark:bg-surface-container-lowest w-64 z-50 transform transition-transform duration-300 md:translate-x-0 flex flex-col ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="mb-xl px-sm flex justify-between items-center">
          <Link href="/" className="block">
            <h1 className="text-title-lg font-title-lg font-bold text-primary dark:text-primary-fixed">NursePath</h1>
            <p className="text-label-sm text-on-surface-variant">Career Migration</p>
          </Link>
          <button 
            className="md:hidden text-on-surface cursor-pointer p-1"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex-1 space-y-xs">
          <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-sm bg-primary-container text-on-primary-container rounded-lg px-sm py-base active:scale-[0.98] transition-all">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-lg text-label-lg">Dashboard</span>
          </Link>
          <Link href="/checklist" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-sm text-on-surface-variant hover:bg-surface-variant rounded-lg px-sm py-base transition-all">
            <span className="material-symbols-outlined">checklist</span>
            <span className="font-label-lg text-label-lg">Checklist</span>
          </Link>
          <Link href="/goals" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-sm text-on-surface-variant hover:bg-surface-variant rounded-lg px-sm py-base transition-all">
            <span className="material-symbols-outlined">flag</span>
            <span className="font-label-lg text-label-lg">Goal Selection</span>
          </Link>
          <Link href="/profile" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-sm text-on-surface-variant hover:bg-surface-variant rounded-lg px-sm py-base transition-all">
            <span className="material-symbols-outlined">person</span>
            <span className="font-label-lg text-label-lg">Profile</span>
          </Link>
          <Link href="/assessment" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-sm text-on-surface-variant hover:bg-surface-variant rounded-lg px-sm py-base transition-all">
            <span className="material-symbols-outlined">assignment_turned_in</span>
            <span className="font-label-lg text-label-lg">Assessment</span>
          </Link>
          <Link href="/result" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-sm text-on-surface-variant hover:bg-surface-variant rounded-lg px-sm py-base transition-all">
            <span className="material-symbols-outlined">map</span>
            <span className="font-label-lg text-label-lg">Route</span>
          </Link>
        </nav>
        <div className="mt-auto space-y-xs pt-md">
          <div className="bg-primary/5 rounded-xl p-md mb-md border border-primary/10">
            <p className="text-label-sm text-primary font-bold mb-xs">Premium Access</p>
            <p className="text-label-sm text-on-surface-variant mb-sm">Get 1-on-1 legal review.</p>
            <button className="w-full bg-primary text-white py-xs rounded-lg text-label-lg hover:opacity-90 transition-opacity cursor-pointer">Upgrade Plan</button>
          </div>
          <Link href="/settings" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-sm text-on-surface-variant hover:bg-surface-variant rounded-lg px-sm py-base transition-all">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-lg text-label-lg">Settings</span>
          </Link>
          <Link href="/support" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-sm text-on-surface-variant hover:bg-surface-variant rounded-lg px-sm py-base transition-all">
            <span className="material-symbols-outlined">help</span>
            <span className="font-label-lg text-label-lg">Support</span>
          </Link>
        </div>
      </aside>

      {/* Main Canvas */}
      <main className="md:ml-64 min-h-screen flex flex-col">
        {/* TopAppBar */}
        <header className="sticky top-0 w-full z-30 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 bg-surface dark:bg-surface-dim shadow-sm max-w-container-max mx-auto">
          <div className="flex items-center gap-md">
            <button 
              className="md:hidden text-on-surface cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h2 className="font-headline-md text-headline-md text-on-surface">Overview</h2>
          </div>
          <div className="flex items-center gap-md">
            <div className="hidden md:flex items-center gap-lg">
              <Link href="#" className="text-primary font-bold border-b-2 border-primary pb-1 font-label-lg">Expertise</Link>
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors font-label-lg">Testimonials</Link>
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors font-label-lg">Why Us</Link>
            </div>
            <div className="flex items-center gap-sm">
              <button className="p-xs text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden border border-outline-variant">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5qvpKqv4MViqLHm24fibciUrxDJwCBPJv9RUv98E7ezkrfbP0XGdg6WLD2ASHA9VAwhVHDwQWLx8G9vM0jU86aCl0FiA5r3zMs9zMR2wMimDzz4cInKqXQg9iKLIfpNeAThWvQb4ED1Dhop7JL8e0EgUZYSyycBIHLcem_HrRvFb6WFJl1YyvlwrhTzh9XTf1HmSV5E-SewGhWZgWxGzdraRhBuevIeu9DsSrlwq7fofykmyT497c1sRqPNupeJFSDr6CQSBOoG0" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1">
          {children}
        </div>

        {/* Footer */}
        <footer className="w-full py-lg px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-md bg-surface-container-highest dark:bg-surface-container-high mt-xl">
          <div className="flex flex-col items-center md:items-start gap-xs">
            <h6 className="text-title-lg font-title-lg font-bold text-primary dark:text-primary-fixed">NursePath</h6>
            <p className="font-label-sm text-label-sm text-on-surface-variant text-center md:text-left">© 2024 NursePath. Empowering Global Healthcare Careers.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-md">
            <Link href="#" className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors">Contact Support</Link>
            <Link href="#" className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary transition-colors">Careers</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
