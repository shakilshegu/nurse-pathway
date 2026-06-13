import React from 'react';
import Link from 'next/link';

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-body-md bg-[#F9F9F7] min-h-screen flex flex-col">
      {/* Main Canvas */}
      <main className="flex-grow flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 bg-[#F9F9F7] text-[#37474F] relative z-20">
        <div className="flex flex-col items-center md:items-start">
          <p className="font-label-sm text-sm text-[#55656D]">© 2024 NursePath. Empowering Kerala's Healthcare Heroes.</p>
        </div>
        <div className="flex justify-center gap-6">
          <Link href="#" className="text-sm font-semibold hover:text-[#006874] transition-colors underline decoration-[#DCE5DD] underline-offset-4">Privacy Policy</Link>
          <Link href="#" className="text-sm font-semibold hover:text-[#006874] transition-colors underline decoration-[#DCE5DD] underline-offset-4">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
}
