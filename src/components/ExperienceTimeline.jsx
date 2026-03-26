function ExperienceTimeline({ items }) {
  return (
    <ol className="relative ml-3 border-l border-brand-200 pl-8 dark:border-brand-500/40">
      {items.map((item, index) => (
        <li key={item.role} className="mb-10 last:mb-0">
          <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-4 border-white bg-brand-500 dark:border-slate-950" />
          <article className="section-card">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                {item.role}
              </h3>
              <span className="text-sm font-semibold text-brand-700 dark:text-brand-300">
                {item.company}
              </span>
              <span className="rounded-full border border-slate-300 px-2 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-300">
                {item.period}
              </span>
              <span className="rounded-full border border-brand-200 bg-brand-50 px-2 py-1 text-xs font-bold text-brand-700 dark:border-brand-500/40 dark:bg-brand-500/10 dark:text-brand-200">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              {item.description}
            </p>

            <ul className="mt-4 space-y-2">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex gap-2 text-sm text-slate-700 dark:text-slate-200">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {responsibility}
                </li>
              ))}
            </ul>

            <p className="mt-4 rounded-xl border border-brand-100 bg-brand-50/70 px-4 py-3 text-sm font-medium text-brand-800 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-100">
              Impacto: {item.impact}
            </p>
          </article>
        </li>
      ))}
    </ol>
  );
}

export default ExperienceTimeline;
