import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[5%] right-[10%] w-[35%] h-[35%] rounded-full bg-primary-container-low blur-[120px] opacity-40" />
        <div className="absolute bottom-[10%] left-[5%] w-[25%] h-[25%] rounded-full bg-primary-container-low blur-[100px] opacity-30" />
      </div>

      <header className="px-6 py-6 md:py-8 flex items-center justify-between relative z-10 max-w-container-max mx-auto w-full">
        <Link href="/" className="text-primary font-bold text-title-lg tracking-tight">
          NursePath
        </Link>
        <div className="flex items-center gap-md text-label-lg font-bold text-on-surface-muted">
          <Link href="#" className="hover:text-on-surface transition-colors">Help</Link>
          <Link href="#" className="hover:text-on-surface transition-colors">Global Careers</Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-xs relative z-10 w-full">
        {children}
      </main>

      <footer className="bg-surface-container-high mt-auto relative z-10">
        <div className="max-w-container-max mx-auto px-6 py-6 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-md">
          <div>
            <Link href="/" className="text-primary font-bold text-title-lg tracking-tight mb-xs block">
              NursePath
            </Link>
            <p className="text-label-sm font-bold text-on-surface-muted">
              © 2024 NursePath. Empowering Global Healthcare Careers.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-md md:gap-lg text-label-sm font-bold text-on-surface-muted">
            <Link href="#" className="hover:text-on-surface transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-on-surface transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-on-surface transition-colors">Contact Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
