import Link from 'next/link';
import { navigation } from '@/lib/site-data';
import ThemeToggle from './theme-toggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur light:border-slate-200 light:bg-slate-50/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-6 py-4 md:px-10">
        <Link href="/" className="text-base font-semibold tracking-wide text-white light:text-slate-900">
          EDLAC Algorithm
        </Link>
        <nav className="hidden items-center gap-4 lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-accent light:text-slate-700">
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
