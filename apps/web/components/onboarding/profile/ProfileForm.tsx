'use client';

import { AnimatedSelect } from '@/components/onboarding/shared/AnimatedSelect';
import { AnimatedReveal } from '@/components/onboarding/shared/AnimatedReveal';

const INDIAN_STATES = [
  { value: 'kerala', label: 'Kerala' },
  { value: 'karnataka', label: 'Karnataka' },
  { value: 'maharashtra', label: 'Maharashtra' },
  { value: 'delhi', label: 'Delhi NCR' },
  { value: 'tamil_nadu', label: 'Tamil Nadu' },
  { value: 'andhra_pradesh', label: 'Andhra Pradesh' },
  { value: 'telangana', label: 'Telangana' },
  { value: 'gujarat', label: 'Gujarat' },
  { value: 'rajasthan', label: 'Rajasthan' },
  { value: 'punjab', label: 'Punjab' },
  { value: 'uttar_pradesh', label: 'Uttar Pradesh' },
  { value: 'west_bengal', label: 'West Bengal' },
  { value: 'madhya_pradesh', label: 'Madhya Pradesh' },
  { value: 'bihar', label: 'Bihar' },
  { value: 'odisha', label: 'Odisha' },
  { value: 'other', label: 'Other State / UT' },
];

const EXPERIENCE_OPTIONS = [
  { value: 'less_1', label: 'Less than 1 year' },
  { value: '1_2', label: '1 – 2 years' },
  { value: '2_5', label: '2 – 5 years' },
  { value: '5_plus', label: '5+ years' },
];

const QUALIFICATIONS = ['GNM', 'B.Sc Nursing', 'M.Sc Nursing'];

interface ProfileFormProps {
  name: string;
  setName: (v: string) => void;
  location: string;
  setLocation: (v: string) => void;
  qualification: string;
  setQualification: (v: string) => void;
  experience: string;
  setExperience: (v: string) => void;
}

export function ProfileForm({
  name, setName,
  location, setLocation,
  qualification, setQualification,
  experience, setExperience,
}: ProfileFormProps) {
  const showQualification = name.trim().length > 0 && location !== '';
  const showExperience = showQualification && qualification !== '';

  return (
    <>
      {/* Group 1 — Identity (always visible) */}
      <div className="mb-6">
        <p className="text-[11px] font-bold text-[#006874] uppercase tracking-[0.08em] mb-4">
          Personal Details
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-[13px] font-semibold text-secondary mb-2">
              Full Name{' '}
              <span className="text-[#9EADB4] font-normal">(as per passport)</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. Anjali Nair"
              className="w-full h-12 px-4 rounded-xl border border-[#E2E3E1] text-[14px] text-[#1A1C1B] bg-white placeholder:text-[#9EADB4] focus:outline-none focus:border-[#006874] focus:ring-2 focus:ring-[#006874]/15 transition-all duration-200 font-medium"
            />
          </div>
          <div>
            <label className="block text-[13px] font-semibold text-secondary mb-2">
              Current Location
            </label>
            <AnimatedSelect
              placeholder="Select your state"
              options={INDIAN_STATES}
              value={location}
              onChange={setLocation}
            />
          </div>
        </div>
      </div>

      {/* Group 2 — Qualification (reveals when name + location filled) */}
      <AnimatedReveal show={showQualification}>
        <div className="mb-6">
          <div className="w-full h-px bg-[#F0F0EE] mb-6" />
          <p className="text-[11px] font-bold text-[#006874] uppercase tracking-[0.08em] mb-4">
            Nursing Background
          </p>
          <label className="block text-[13px] font-semibold text-secondary mb-3">
            Highest Nursing Qualification
          </label>
          <div className="flex flex-wrap gap-3">
            {QUALIFICATIONS.map(qual => (
              <button
                key={qual}
                type="button"
                onClick={() => setQualification(qual)}
                className={`flex-1 min-w-22.5 h-12 rounded-xl border text-[13px] font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-[0.97] ${
                  qualification === qual
                    ? 'bg-[#006874] border-[#006874] text-white shadow-md'
                    : 'bg-white border-[#E2E3E1] text-[#55656D] hover:border-[#006874] hover:text-[#006874]'
                }`}
              >
                {qualification === qual && (
                  <span className="material-symbols-outlined text-[15px]">check</span>
                )}
                {qual}
              </button>
            ))}
          </div>
        </div>
      </AnimatedReveal>

      {/* Group 3 — Experience (reveals when qualification selected) */}
      <AnimatedReveal show={showExperience}>
        <div className="mb-8">
          <label className="block text-[13px] font-semibold text-secondary mb-2">
            Total Clinical Experience
          </label>
          <AnimatedSelect
            placeholder="Select years of experience"
            options={EXPERIENCE_OPTIONS}
            value={experience}
            onChange={setExperience}
          />
        </div>
      </AnimatedReveal>
    </>
  );
}
