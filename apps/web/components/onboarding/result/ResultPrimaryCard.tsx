import Image from 'next/image';
import { AnimatedReveal } from '@/components/onboarding/shared/AnimatedReveal';
import { ScoreRing } from './ScoreRing';

const REASONS = [
  {
    icon: 'work_outline',
    title: 'Experience Match',
    body: 'Your 5 years in ICU perfectly aligns with the urgent staffing needs in Bavarian clinical clusters.',
  },
  {
    icon: 'payments',
    title: 'Financial Stability',
    body: 'Starting salary of €42,000 – €50,000 with full social security and healthcare benefits for families.',
  },
  {
    icon: 'language',
    title: 'Learning Pace',
    body: 'Your previous B1 certification reduces your migration timeline by an estimated 6 months.',
  },
];

const ACTIONS = [
  { step: '01', verb: 'Verify', label: 'Upload B1 Docs' },
  { step: '02', verb: 'Book', label: 'Counseling Call' },
  { step: '03', verb: 'Study', label: 'A1 Review' },
];

export function ResultPrimaryCard() {
  return (
    <div className="bg-white rounded-2xl shadow-[0_4px_32px_rgba(0,0,0,0.06)] border border-[#E2E3E1] overflow-hidden">
      <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-[#F0F0EE]">
        <span className="text-[12px] font-bold text-[#9EADB4] uppercase tracking-[0.08em]">
          Primary recommendation
        </span>
        <div className="bg-[#E0F2F1] text-[#006874] text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[14px]">check_circle</span>
          Top Match
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-55 shrink-0 flex flex-col md:flex-col sm:flex-row sm:h-48 md:h-auto">
          <div className="relative sm:flex-1 md:flex-none h-48 sm:h-full md:h-56 bg-[#006874] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Germany"
              fill
              className="object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#003A42] via-[#006874]/20 to-transparent" />
            <div className="absolute bottom-4 left-5">
              <h3 className="text-[22px] font-bold text-white mb-0.5">Germany</h3>
              <p className="text-[11px] font-semibold text-white/75 tracking-wide">EU Blue Card Route</p>
            </div>
          </div>
          <div className="sm:flex-1 md:flex-none flex items-center justify-center p-5 bg-[#FAFAFA] border-t sm:border-t-0 sm:border-l md:border-t md:border-l-0 border-[#F0F0EE]">
            <ScoreRing score={94} delay={700} />
          </div>
        </div>

        <div className="flex flex-col grow p-4 sm:p-6">
          <h3 className="text-[17px] font-bold text-[#1A1C1B] mb-5">Why this route fits you</h3>

          <div className="flex flex-col gap-4 mb-6">
            {REASONS.map((item, i) => (
              <AnimatedReveal key={item.icon} show delay={420 + i * 110}>
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#E0F2F1] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#006874] text-[17px]">{item.icon}</span>
                  </div>
                  <div className="pt-0.5">
                    <p className="text-[13px] font-bold text-[#1A1C1B] mb-0.5">{item.title}</p>
                    <p className="text-[13px] text-[#55656D] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>

          <div className="mt-auto pt-5 border-t border-[#F0F0EE]">
            <p className="text-[11px] font-bold text-[#006874] uppercase tracking-[0.08em] mb-3">
              Next 3 Actions
            </p>
            <div className="grid grid-cols-3 gap-2">
              {ACTIONS.map((action, i) => (
                <AnimatedReveal key={action.step} show delay={760 + i * 80}>
                  <div className="bg-[#F9F9F7] border border-[#E2E3E1] rounded-xl p-3 hover:border-[#006874] hover:shadow-sm transition-all cursor-pointer group flex flex-col items-start gap-1 active:scale-[0.98]">
                    <p className="text-[10px] font-bold text-[#9EADB4] group-hover:text-[#006874] uppercase tracking-wider transition-colors">
                      {action.step}. {action.verb}
                    </p>
                    <p className="text-[12px] font-semibold text-[#1A1C1B]">{action.label}</p>
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
