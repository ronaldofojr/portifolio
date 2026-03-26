function Navbar({ items, darkMode, onToggleDarkMode }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/85 backdrop-blur-md transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:px-7 lg:px-8">
        <a href="#hero" className="font-display text-lg font-bold tracking-wide text-slate-900 dark:text-white">
          Ronaldo Ferreira
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={onToggleDarkMode}
          className="rounded-full border border-slate-300 px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-700 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-300"
          type="button"
          aria-label="Alternar modo escuro"
        >
          {darkMode ? "Modo Claro" : "Modo Escuro"}
        </button>
      </nav>

      <div className="border-t border-slate-200/60 px-4 pb-3 pt-2 md:hidden dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-3">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-slate-300/90 px-3 py-1 text-xs font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
