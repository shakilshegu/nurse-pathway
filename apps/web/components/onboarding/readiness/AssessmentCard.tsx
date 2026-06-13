'use client';

export interface AssessmentOption {
  label: string;
  value: string;
  icon?: string;
}

interface AssessmentCardProps {
  title: string;
  subtitle: string;
  icon: string;
  options: AssessmentOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}

export function AssessmentCard({
  title,
  subtitle,
  icon,
  options,
  selectedValue,
  onChange,
}: AssessmentCardProps) {
  const isAnswered = selectedValue !== '';

  return (
    <div
      className={`bg-white rounded-2xl p-5 md:p-6 mb-4 border transition-all duration-300 ${
        isAnswered
          ? 'border-[#C8E6E4] shadow-[0_2px_16px_rgba(0,104,116,0.07)]'
          : 'border-[#E2E3E1] shadow-sm'
      }`}
    >
      <div className="flex items-start gap-4 mb-5">
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
            isAnswered ? 'bg-[#006874]' : 'bg-[#E0F2F1]'
          }`}
        >
          <span
            className={`material-symbols-outlined text-[20px] ${
              isAnswered ? 'text-white' : 'text-[#006874]'
            }`}
          >
            {icon}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-[15px] md:text-[16px] font-bold text-[#1A1C1B]">{title}</h3>
            {isAnswered && (
              <span className="material-symbols-outlined text-[18px] text-[#006874] shrink-0 mt-0.5">
                check_circle
              </span>
            )}
          </div>
          <p className="text-[13px] text-[#55656D] mt-0.5">{subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map(option => {
          const isSelected = selectedValue === option.value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={`h-12 rounded-xl border text-[13px] font-semibold flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.97] ${
                isSelected
                  ? 'bg-[#006874] border-[#006874] text-white shadow-sm'
                  : 'bg-white border-[#E2E3E1] text-[#55656D] hover:border-[#006874] hover:text-[#006874]'
              }`}
            >
              {option.icon && (
                <span className="material-symbols-outlined text-[18px]">{option.icon}</span>
              )}
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
