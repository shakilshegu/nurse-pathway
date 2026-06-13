'use client';

import { useState } from 'react';
import { OnboardingHeader } from '@/components/onboarding/OnboardingHeader';
import { AssessmentCard } from '@/components/onboarding/readiness/AssessmentCard';
import { ReadinessSidebar } from '@/components/onboarding/readiness/ReadinessSidebar';
import { AnimatedReveal } from '@/components/onboarding/shared/AnimatedReveal';
import Link from 'next/link';

export default function ReadinessPage() {
  const [passport, setPassport] = useState('');
  const [goodStanding, setGoodStanding] = useState('');
  const [nursingLicense, setNursingLicense] = useState('');
  const [germanLang, setGermanLang] = useState('');

  const allAnswered =
    passport !== '' && goodStanding !== '' && nursingLicense !== '' && germanLang !== '';

  const answeredCount = [passport, goodStanding, nursingLicense, germanLang].filter(
    v => v !== ''
  ).length;

  return (
    <div className="flex flex-col grow relative bg-[#F9F9F7] overflow-hidden min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-[#E0F2F1] blur-[100px] opacity-40" />
      </div>

      <OnboardingHeader />

      <div className="grow flex flex-col pt-24 pb-40 md:pb-32 px-4 sm:px-6 md:px-8 relative z-10 w-full max-w-250 mx-auto">
        <div className="w-full mb-8">
          <div className="flex items-end justify-between mb-4">
            <h1 className="text-[28px] md:text-[32px] leading-tight font-bold text-[#006874]">
              Readiness Check
            </h1>
            <span className="text-[12px] font-bold text-[#55656D]">Step 3 of 4</span>
          </div>
          <div className="w-full bg-[#E8E8E6] h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#006874] h-full transition-all duration-700 ease-out" style={{ width: '75%' }} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                {[0, 1, 2, 3].map(i => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: i < answeredCount ? '#006874' : '#E2E3E1',
                      transform: i < answeredCount ? 'scale(1.25)' : 'scale(1)',
                    }}
                  />
                ))}
                <span className="text-[12px] font-semibold text-[#55656D] ml-2">
                  {answeredCount} of 4 answered
                </span>
              </div>
              {allAnswered && (
                <span className="text-[12px] font-bold text-[#006874] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">check_circle</span>
                  All complete
                </span>
              )}
            </div>

            <AssessmentCard
              title="Valid International Passport"
              subtitle="Do you have a passport valid for at least 12 months?"
              icon="badge"
              selectedValue={passport}
              onChange={setPassport}
              options={[
                { label: 'Yes, I have it', value: 'yes', icon: 'check' },
                { label: 'Not yet', value: 'no', icon: 'close' },
              ]}
            />
            <AnimatedReveal show={passport !== ''}>
              <AssessmentCard
                title="Good Standing Certificate"
                subtitle="Can you obtain a Good Standing Certificate from your Nursing Council?"
                icon="verified_user"
                selectedValue={goodStanding}
                onChange={setGoodStanding}
                options={[
                  { label: 'Yes', value: 'yes', icon: 'check' },
                  { label: 'Not sure', value: 'not_sure', icon: 'help_outline' },
                ]}
              />
            </AnimatedReveal>
            <AnimatedReveal show={goodStanding !== ''}>
              <AssessmentCard
                title="Active Nursing License"
                subtitle="Is your current nursing registration active and without restrictions?"
                icon="medical_services"
                selectedValue={nursingLicense}
                onChange={setNursingLicense}
                options={[
                  { label: 'Active', value: 'active', icon: 'check_circle' },
                  { label: 'Expired / Pending', value: 'expired', icon: 'pending_actions' },
                ]}
              />
            </AnimatedReveal>
            <AnimatedReveal show={nursingLicense !== ''}>
              <AssessmentCard
                title="German Language Commitment"
                subtitle="Are you willing to undergo intensive German language training (B1/B2)?"
                icon="language"
                selectedValue={germanLang}
                onChange={setGermanLang}
                options={[
                  { label: 'Ready to Start', value: 'ready', icon: 'bolt' },
                  { label: 'Need Info First', value: 'need_info', icon: 'menu_book' },
                ]}
              />
            </AnimatedReveal>
          </div>

          <ReadinessSidebar />
        </div>
      </div>

      <div
        className="fixed bottom-0 left-0 w-full bg-white border-t border-[#E2E3E1] shadow-[0_-4px_24px_rgba(0,0,0,0.04)] z-40 pt-4 pb-4 px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4"
        style={{ paddingBottom: 'max(16px, env(safe-area-inset-bottom))' }}
      >
        <div className="hidden md:block text-[14px] text-[#55656D] font-medium">
          {allAnswered
            ? 'All set! Your personalized plan is ready to generate.'
            : 'Answer all questions to unlock your personalized plan.'}
        </div>
        <p className="md:hidden text-[12px] text-center text-[#9EADB4] font-medium w-full">
          {allAnswered ? 'All set! Tap below to get your plan.' : `${answeredCount} of 4 answered`}
        </p>
        <div className="flex items-center justify-between w-full md:w-auto gap-3 md:gap-4">
          <Link
            href="/profile"
            className="flex items-center justify-center h-12 px-6 rounded-xl border border-[#E2E3E1] text-[#55656D] hover:text-[#006874] hover:border-[#006874] transition-colors text-[14px] font-semibold bg-white"
          >
            Back
          </Link>
          <Link href={allAnswered ? '/result' : '#'} className={!allAnswered ? 'pointer-events-none' : ''}>
            <button
              type="button"
              disabled={!allAnswered}
              className={`h-12 px-8 rounded-xl text-[14px] font-semibold flex items-center gap-2 transition-all duration-200 ${
                allAnswered
                  ? 'bg-[#006874] text-white shadow-md hover:brightness-110 hover:shadow-lg'
                  : 'bg-[#E8EAEA] text-[#9EADB4] cursor-not-allowed'
              }`}
            >
              Get My Plan
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
