export function ReadinessSidebar() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-[#106D76] text-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-md">
        <h3 className="text-xl font-bold mb-4">Why these questions?</h3>
        <p className="text-[14px] leading-relaxed mb-6 opacity-90">
          International migration for healthcare professionals requires specific documentation
          to ensure a seamless transition and legal compliance in your destination country.
        </p>
        <ul className="space-y-4">
          <li className="flex gap-3 items-start">
            <span className="material-symbols-outlined text-[20px] mt-0.5 opacity-80">info</span>
            <span className="text-[14px] opacity-90">Passports must be valid for visa processing.</span>
          </li>
          <li className="flex gap-3 items-start">
            <span className="material-symbols-outlined text-[20px] mt-0.5 opacity-80">info</span>
            <span className="text-[14px] opacity-90">Good Standing proves professional integrity.</span>
          </li>
        </ul>
      </div>

      <div className="bg-[#EBEBE8] rounded-2xl p-6 relative border border-[#DCE5DD]">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#106D76] rounded-l-2xl" />
        <p className="text-secondary italic text-[14px] leading-relaxed mb-5 relative z-10 pl-2">
          &ldquo;The readiness check helped me realize exactly what I needed to prepare before I
          even started my application. It saved me months of back-and-forth.&rdquo;
        </p>
        <div className="flex items-center gap-3 pl-2">
          <div className="w-10 h-10 rounded-full bg-[#D9E6E6] overflow-hidden shrink-0">
            <img
              src="https://i.pravatar.cc/150?u=anjali"
              alt="Anjali M."
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-[13px] font-bold text-[#1A1C1B]">Anjali M.</p>
            <p className="text-[11px] font-semibold text-[#55656D]">BSc Nursing, Now in Munich</p>
          </div>
        </div>
      </div>
    </div>
  );
}
