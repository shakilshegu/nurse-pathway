'use client';

import { AnimatedReveal } from '@/components/onboarding/shared/AnimatedReveal';

interface MigrationTimelineProps {
  timeline: string | null;
  setTimeline: (val: string) => void;
  show: boolean;
}

const TIMELINE_OPTIONS = [
  {
    id: 'fast',
    label: 'Fast-Track',
    sublabel: 'Within 3–6 months',
    icon: 'bolt',
    description: 'Ready to move quickly with documents in hand',
  },
  {
    id: 'planned',
    label: 'Planned Growth',
    sublabel: 'Next 6–12 months',
    icon: 'calendar_month',
    description: 'Preparing steadily while continuing current role',
  },
];

export function MigrationTimeline({ timeline, setTimeline, show }: MigrationTimelineProps) {
  return (
    <AnimatedReveal show={show}>
      <div className="bg-linear-to-br from-[#F0FAF9] to-[#E8F5F4] rounded-2xl p-5 mb-8 border border-[#C8E6E4]">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-9 h-9 rounded-xl bg-[#006874] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-white text-[18px]">schedule</span>
          </div>
          <div>
            <h3 className="text-[15px] font-bold text-[#1A1C1B]">Migration Timeline</h3>
            <p className="text-[12px] text-[#55656D] mt-0.5">
              When are you planning to start your international career?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {TIMELINE_OPTIONS.map(opt => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setTimeline(opt.id)}
              className={`p-4 rounded-xl bg-white border text-left transition-all duration-200 active:scale-[0.98] group ${
                timeline === opt.id
                  ? 'border-[#006874] shadow-[0_2px_16px_rgba(0,104,116,0.12)] ring-1 ring-[#006874]/20'
                  : 'border-[#D0E8E6] hover:border-[#006874] hover:shadow-sm'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 ${
                    timeline === opt.id
                      ? 'bg-[#006874]'
                      : 'bg-[#E0F2F1] group-hover:bg-[#C8E6E4]'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[17px] ${
                      timeline === opt.id ? 'text-white' : 'text-[#006874]'
                    }`}
                  >
                    {opt.icon}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4
                      className={`text-[14px] font-bold ${
                        timeline === opt.id ? 'text-[#006874]' : 'text-[#1A1C1B]'
                      }`}
                    >
                      {opt.label}
                    </h4>
                    {timeline === opt.id && (
                      <span className="material-symbols-outlined text-[16px] text-[#006874]">
                        check_circle
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-[12px] font-semibold mt-0.5 ${
                      timeline === opt.id ? 'text-[#006874]/70' : 'text-[#006874]'
                    }`}
                  >
                    {opt.sublabel}
                  </p>
                  <p className="text-[11px] text-[#55656D] mt-1">{opt.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </AnimatedReveal>
  );
}
