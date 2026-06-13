'use client';

import { useState } from 'react';
import { OnboardingHeader } from '@/components/onboarding/OnboardingHeader';
import { OnboardingProgressBar } from '@/components/onboarding/OnboardingProgressBar';
import { ProfileForm } from '@/components/onboarding/profile/ProfileForm';
import { MigrationTimeline } from '@/components/onboarding/profile/MigrationTimeline';
import { ProfileActions } from '@/components/onboarding/profile/ProfileActions';
import { ProTipBanner } from '@/components/onboarding/profile/ProTipBanner';

export default function ProfileDetailsPage() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [qualification, setQualification] = useState('');
  const [experience, setExperience] = useState('');
  const [timeline, setTimeline] = useState<string | null>(null);

  const showTimeline =
    name.trim().length > 0 && location !== '' && qualification !== '' && experience !== '';
  const allComplete = showTimeline && timeline !== null;

  const completedCount = [
    name.trim().length > 0,
    location !== '',
    qualification !== '',
    experience !== '',
    timeline !== null,
  ].filter(Boolean).length;

  return (
    <div className="flex flex-col grow relative bg-[#F9F9F7] overflow-hidden min-h-screen">
      {/* Background ambient gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-[#E0F2F1] blur-[100px] opacity-40" />
      </div>

      <OnboardingHeader />

      <div className="grow flex flex-col pt-24 pb-16 px-4 sm:px-6 md:px-8 relative z-10 w-full max-w-200 mx-auto">
        <OnboardingProgressBar step={2} percentage={50} title="Profile Details" />

        {/* Main card */}
        <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#E2E3E1] p-5 sm:p-6 md:p-8 mb-6">

          {/* Inline profile completion bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[12px] font-semibold text-[#55656D]">Profile completion</p>
              <p className="text-[12px] font-bold text-[#006874]">{completedCount} / 5 fields</p>
            </div>
            <div className="w-full h-1.5 bg-[#F0F0EE] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#006874] rounded-full"
                style={{
                  width: `${(completedCount / 5) * 100}%`,
                  transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
            </div>
          </div>

          <ProfileForm
            name={name}
            setName={setName}
            location={location}
            setLocation={setLocation}
            qualification={qualification}
            setQualification={setQualification}
            experience={experience}
            setExperience={setExperience}
          />

          <MigrationTimeline
            timeline={timeline}
            setTimeline={setTimeline}
            show={showTimeline}
          />

          <ProfileActions
            allComplete={allComplete}
            backHref="/goals"
            nextHref="/readiness"
          />
        </div>

        <ProTipBanner />
      </div>
    </div>
  );
}
