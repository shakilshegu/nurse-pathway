'use client';

import { useState } from 'react';
import Link from 'next/link';
import { OnboardingHeader } from '@/components/onboarding/OnboardingHeader';
import { OnboardingProgressBar } from '@/components/onboarding/OnboardingProgressBar';
import { GoalCard } from '@/components/onboarding/goals/GoalCard';

const GOAL_OPTIONS = [
  {
    id: 'germany',
    icon: 'location_on',
    title: 'Go to Germany',
    description: 'Secure high-demand nursing roles in top-tier European hospitals with full language support.',
  },
  {
    id: 'uae',
    icon: 'apartment',
    title: 'Go to UAE',
    description: 'Fast-track your career in tax-free hubs like Dubai or Abu Dhabi with streamlined DHA/MOH licensing.',
  },
  {
    id: 'help',
    icon: 'explore',
    title: 'Help me decide',
    description: 'Not sure yet? Compare salary, lifestyle, and requirements for both destinations side-by-side.',
  },
];

export default function GoalSelectionPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex flex-col grow relative bg-[#F9F9F7] overflow-hidden min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#E0F2F1] blur-[100px] opacity-60" />
      </div>

      <OnboardingHeader />

      <div className="grow flex flex-col items-center pt-24 pb-12 px-4 sm:px-6 md:px-8 relative z-10 w-full max-w-250 mx-auto">
        <div className="w-full max-w-200 mb-8">
          <OnboardingProgressBar step={1} percentage={25} title="What do you want to do?" />
          <p className="text-[14px] md:text-[15px] text-[#55656D] leading-relaxed mt-4">
            Select the path that matches your professional aspirations. We&apos;ll tailor your entire migration journey based on this choice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 mb-8 w-full">
          {GOAL_OPTIONS.map(opt => (
            <GoalCard
              key={opt.id}
              {...opt}
              selected={selected === opt.id}
              onSelect={setSelected}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-2.5 bg-[#F0F4F4] px-5 py-2.5 rounded-full mb-6 border border-[#E0E7E8]">
          <span className="material-symbols-outlined text-[16px] text-[#006874]">security</span>
          <span className="text-[12.5px] font-medium text-secondary">Your answers help us create your route plan.</span>
        </div>

        <Link href="/profile" className={!selected ? 'pointer-events-none' : ''}>
          <button
            type="button"
            disabled={!selected}
            className={`w-full sm:w-65 py-3.5 rounded-xl text-[15px] font-semibold transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] ${
              selected
                ? 'bg-[#006874] text-white shadow-md hover:brightness-110'
                : 'bg-[#E8EAEA] text-[#9EADB4] cursor-not-allowed'
            }`}
          >
            Continue
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
