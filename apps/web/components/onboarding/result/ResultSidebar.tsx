import Link from 'next/link';
import { AnimatedReveal } from '@/components/onboarding/shared/AnimatedReveal';

const CHECKLIST = [
  { icon: 'close', label: 'B2 German Language', status: 'Required', color: '#D32F2F' },
  { icon: 'more_horiz', label: 'Degree Attestation', status: 'In Progress', color: '#55656D' },
  { icon: 'radio_button_unchecked', label: 'Clinical Skills Check', status: 'Pending', color: '#9EADB4' },
];

export function ResultSidebar() {
  return (
    <div className="flex flex-col gap-5">
      <AnimatedReveal show delay={280}>
        <div className="bg-[#EBEBE8] rounded-2xl border border-[#DCE5DD] p-6">
          <h3 className="text-[16px] font-bold text-[#1A1C1B] mb-4">What you still need</h3>
          <div className="flex flex-col gap-2.5 mb-5">
            {CHECKLIST.map((item, i) => (
              <AnimatedReveal key={item.label} show delay={480 + i * 80}>
                <div className="bg-white rounded-xl p-3.5 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[20px]" style={{ color: item.color }}>
                      {item.icon}
                    </span>
                    <span className="text-[13px] font-semibold text-[#1A1C1B]">{item.label}</span>
                  </div>
                  <span className="text-[11px] font-bold" style={{ color: item.color }}>{item.status}</span>
                </div>
              </AnimatedReveal>
            ))}
          </div>
          <Link href="/checklist">
            <button className="w-full h-12 bg-[#006874] text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all shadow-sm">
              Open My Checklist
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </Link>
        </div>
      </AnimatedReveal>

      <AnimatedReveal show delay={420}>
        <div className="bg-white rounded-2xl border border-[#E2E3E1] shadow-sm p-6">
          <p className="text-[11px] font-bold text-[#9EADB4] uppercase tracking-[0.08em] mb-3">Alternative route</p>
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-[16px] font-bold text-[#1A1C1B]">UAE (Dubai / Abu Dhabi)</h3>
              <p className="text-[12px] font-semibold text-[#55656D] mt-0.5">Fast-track Licensing</p>
            </div>
            <div className="text-right shrink-0 ml-4">
              <p className="text-[26px] font-bold text-[#006874] tracking-tighter leading-none">82%</p>
              <p className="text-[10px] font-bold text-[#9EADB4] mt-0.5">fit score</p>
            </div>
          </div>
          <div className="pl-3 border-l-2 border-[#E2E3E1] mb-4">
            <p className="text-[13px] text-[#55656D] leading-relaxed">
              A solid alternative if you prefer immediate relocation with zero language requirements.
            </p>
          </div>
          <Link href="#" className="inline-flex items-center gap-1 text-[#006874] font-semibold text-[13px] hover:opacity-75 transition-opacity">
            View details
            <span className="material-symbols-outlined text-[14px]">open_in_new</span>
          </Link>
        </div>
      </AnimatedReveal>
    </div>
  );
}
