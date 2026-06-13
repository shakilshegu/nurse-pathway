import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="bg-surface-container-lowest rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-[440px] p-8 md:p-10 flex flex-col my-8">
      <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface mb-2 tracking-tight">
        Welcome Back
      </h1>
      <p className="text-on-surface-muted text-label-lg md:text-body-md mb-8 leading-relaxed pr-4">
        Access your nursing career transition dashboard.
      </p>

      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-label-sm font-bold text-on-surface">
            Email or Phone Number
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">
              mail
            </span>
            <input 
              type="text" 
              placeholder="nurse@example.com"
              className="w-full h-[48px] pl-11 pr-4 rounded-xl border border-surface-variant bg-surface-container-lowest text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label className="text-label-sm font-bold text-on-surface">
              Password
            </label>
            <Link href="#" className="text-label-sm font-bold text-primary hover:underline">
              Forgot?
            </Link>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">
              lock
            </span>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full h-[48px] pl-11 pr-4 rounded-xl border border-surface-variant bg-surface-container-lowest text-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        <button 
          type="button"
          className="w-full h-[48px] mt-2 bg-primary hover:opacity-90 text-on-primary rounded-xl font-bold text-body-md flex items-center justify-center gap-2 transition-colors shadow-[0_4px_12px_rgba(0,104,116,0.2)] hover:shadow-[0_6px_16px_rgba(0,104,116,0.3)]"
        >
          Continue
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </form>

      <div className="mt-8 flex flex-col items-center gap-4 border-t border-surface-container-low pt-8">
        <p className="text-label-lg font-medium text-on-surface-muted">
          New to NursePath?{' '}
          <Link href="/signup" className="font-bold text-primary hover:underline">
            Create an account
          </Link>
        </p>

        <div className="inline-flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-full mt-2">
          <span className="material-symbols-outlined text-primary text-[16px] font-medium">
            verified_user
          </span>
          <span className="text-label-sm font-bold text-on-surface-muted">
            Your progress will be saved securely.
          </span>
        </div>
      </div>
    </div>
  );
}
