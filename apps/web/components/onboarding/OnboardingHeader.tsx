import React from 'react';
import Link from 'next/link';

export function OnboardingHeader() {
  return (
    <header className="fixed top-0 left-0 w-full h-[72px] px-6 md:px-12 flex items-center justify-between border-b border-[#E2E3E1] bg-[#F9F9F7] z-50">
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2 text-[#006874] hover:opacity-80 transition-opacity">
          <span className="font-title-lg font-bold">NursePath</span>
        </Link>
      </div>
      
      <div>
        <Link href="/" className="flex items-center gap-2 text-[13px] font-semibold text-[#55656D] hover:text-[#006874] transition-colors">
          <span className="material-symbols-outlined text-[18px]">close</span>
          Save & Exit
        </Link>
      </div>
    </header>
  );
}
