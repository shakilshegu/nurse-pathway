'use client';

import { OnboardingHeader } from '@/components/onboarding/OnboardingHeader';
import { AnimatedReveal } from '@/components/onboarding/shared/AnimatedReveal';
import { ResultPrimaryCard } from '@/components/onboarding/result/ResultPrimaryCard';
import { ResultSidebar } from '@/components/onboarding/result/ResultSidebar';

export default function ResultPage() {
  return (
    <div className="flex flex-col grow relative bg-[#F9F9F7] overflow-hidden min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] right-[15%] w-[35%] h-[35%] rounded-full bg-[#E0F2F1] blur-[120px] opacity-40" />
        <div className="absolute bottom-[20%] left-[5%] w-[25%] h-[25%] rounded-full bg-[#E0F2F1] blur-[100px] opacity-30" />
      </div>

      <OnboardingHeader />

      <div className="grow flex flex-col pt-24 pb-16 px-4 sm:px-6 md:px-8 relative z-10 w-full max-w-275 mx-auto">
        <AnimatedReveal show delay={0}>
          <div className="w-full mb-8">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[#006874] text-[18px]">auto_awesome</span>
                  <p className="text-[12px] font-bold text-[#006874] uppercase tracking-[0.08em]">Analysis complete</p>
                </div>
                <h1 className="text-[26px] sm:text-[32px] md:text-[40px] leading-tight font-bold text-[#1A1C1B] tracking-tight">
                  Your Career Roadmap
                </h1>
              </div>
              <span className="text-[12px] font-bold text-[#55656D] shrink-0 ml-4 pt-0.5">Step 4 of 4</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1 h-1.5 bg-[#E8E8E6] rounded-full overflow-hidden">
                <div
                  className="bg-[#006874] h-full rounded-full"
                  style={{ width: '100%', transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s' }}
                />
              </div>
              <p className="text-[13px] font-medium text-[#55656D] shrink-0 hidden md:block">
                We&apos;ve identified your optimal path.
              </p>
            </div>
          </div>
        </AnimatedReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 mb-12">
          <AnimatedReveal show delay={160}>
            <ResultPrimaryCard />
          </AnimatedReveal>
          <ResultSidebar />
        </div>

        <AnimatedReveal show delay={560}>
          <div className="bg-[#F5F5F3] border border-[#E2E3E1] rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#006874] rounded-l-2xl" />
            <div className="pl-4 max-w-3xl">
              <p className="text-[15px] md:text-[17px] text-[#55656D] italic leading-relaxed mb-3">
                &ldquo;NursePath analyzed over 500 successful migration cases this year. Your profile&apos;s
                high clinical proficiency makes you a premium candidate for public university hospitals in Germany.&rdquo;
              </p>
              <p className="text-[13px] font-bold text-[#1A1C1B]">— Dr. Anjali Menon, <span className="font-normal text-[#55656D]">Chief Medical Consultant</span></p>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </div>
  );
}
