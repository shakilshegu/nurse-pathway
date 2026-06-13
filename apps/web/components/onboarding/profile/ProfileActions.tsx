import Link from 'next/link';

interface ProfileActionsProps {
  allComplete: boolean;
  backHref: string;
  nextHref: string;
}

export function ProfileActions({ allComplete, backHref, nextHref }: ProfileActionsProps) {
  return (
    <div className="pt-6 border-t border-[#E2E3E1] flex items-center justify-between">
      <Link
        href={backHref}
        className="flex items-center gap-2 text-[#55656D] hover:text-[#006874] transition-colors text-[14px] font-semibold"
      >
        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        Back
      </Link>

      <div className="flex items-center gap-3">
        {!allComplete && (
          <p className="text-[12px] text-[#9EADB4] hidden sm:block">
            Complete all fields to continue
          </p>
        )}
        <Link href={nextHref} className={!allComplete ? 'pointer-events-none' : ''}>
          <button
            type="button"
            disabled={!allComplete}
            className={`px-8 py-3 rounded-xl text-[14px] font-semibold flex items-center gap-2 transition-all duration-200 ${
              allComplete
                ? 'bg-[#006874] text-white shadow-md hover:brightness-110 hover:shadow-lg'
                : 'bg-[#E8EAEA] text-[#9EADB4] cursor-not-allowed'
            }`}
          >
            Continue
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
