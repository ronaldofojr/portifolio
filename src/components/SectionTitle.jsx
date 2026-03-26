function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <header className="mb-8 flex max-w-3xl flex-col gap-3">
      <span className="w-fit rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-700 dark:border-brand-500/40 dark:bg-brand-500/10 dark:text-brand-200">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
        {subtitle}
      </p>
    </header>
  );
}

export default SectionTitle;
