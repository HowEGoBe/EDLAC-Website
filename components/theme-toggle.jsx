'use client';

import { useTheme } from './theme-provider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:border-accent hover:text-accent light:border-slate-300 light:bg-white light:text-slate-800"
      aria-label="Toggle color mode"
    >
      {theme === 'dark' ? 'Light mode' : 'Dark mode'}
    </button>
  );
}
