interface GoalCardProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  selected: boolean;
  onSelect: (id: string) => void;
}

export function GoalCard({ id, icon, title, description, selected, onSelect }: GoalCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className={`group relative flex sm:flex-col items-center sm:items-center px-5 py-5 sm:py-8 rounded-2xl transition-all duration-300 text-left sm:text-center bg-white active:scale-[0.98] ${
        selected
          ? 'border-2 border-[#006874] shadow-[0_8px_24px_rgba(0,104,116,0.12)]'
          : 'border border-[#E2E3E1] hover:border-[#006874] hover:shadow-md'
      }`}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 mr-4 sm:mr-0 sm:mb-4 transition-colors ${
        selected ? 'bg-[#E0F2F1]' : 'bg-[#F4F4F2] group-hover:bg-[#E0F2F1]'
      }`}>
        <span className={`material-symbols-outlined text-[24px] ${selected ? 'text-[#006874]' : 'text-[#37474F]'}`}>
          {icon}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-[16px] sm:text-[18px] font-bold text-[#1A1C1B] mb-1 sm:mb-2">{title}</h3>
        <p className="text-[12.5px] text-[#55656D] leading-relaxed sm:px-2">{description}</p>
      </div>
      {selected && (
        <span className="material-symbols-outlined text-[20px] text-[#006874] ml-3 sm:hidden shrink-0">check_circle</span>
      )}
    </button>
  );
}
