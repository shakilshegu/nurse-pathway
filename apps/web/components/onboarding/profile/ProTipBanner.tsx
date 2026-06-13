export function ProTipBanner() {
  return (
    <div className="bg-[#E0F2F1]/50 border-l-4 border-[#006874] p-4 rounded-r-lg flex items-start gap-3">
      <span className="material-symbols-outlined text-[#006874] text-[20px] mt-0.5">lightbulb</span>
      <p className="text-[13px] text-secondary italic leading-relaxed">
        <span className="font-bold mr-1">Pro Tip:</span> 
        Most German healthcare facilities prefer nurses with at least 2 years of clinical experience for their B2 sponsorship programs.
      </p>
    </div>
  );
}
