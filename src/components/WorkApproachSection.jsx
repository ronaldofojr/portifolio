function WorkApproachSection({ items }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article
          key={item}
          className="section-card flex items-start gap-3 border-brand-100/80 dark:border-brand-500/30"
        >
          <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-500" />
          <p className="text-sm font-semibold leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
            {item}
          </p>
        </article>
      ))}
    </div>
  );
}

export default WorkApproachSection;
