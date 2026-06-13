import React from 'react';

interface OnboardingProgressBarProps {
  step: number;
  totalSteps?: number;
  percentage: number;
  title: string;
}

export function OnboardingProgressBar({ step, totalSteps = 4, percentage, title }: OnboardingProgressBarProps) {
  return (
    <div className="w-full mb-8">
      <div className="mb-2">
        <p className="text-[11px] font-bold text-[#55656D] uppercase tracking-wider mb-1">
          STEP {step} OF {totalSteps}
        </p>
        <div className="flex items-end justify-between">
          <h1 className="text-[28px] md:text-[32px] leading-tight font-bold text-[#006874]">
            {title}
          </h1>
          <span className="text-[11px] font-bold text-[#55656D]">Completion: {percentage}%</span>
        </div>
      </div>
      
      {/* Progress Bar Track */}
      <div className="w-full bg-[#E8E8E6] h-1.5 rounded-full overflow-hidden flex">
        <div 
          className="bg-[#006874] h-full transition-all duration-700 ease-out" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
