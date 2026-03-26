function ProjectGrid({ projects }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.name}
          className="section-card group flex h-full flex-col justify-between border-slate-200/70 transition hover:-translate-y-1 hover:border-brand-300"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-300">
              {project.role}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-slate-900 dark:text-white">
              {project.name}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.description}
            </p>
          </div>

          <div className="mt-6">
            <div className="mb-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="tag">
                  {technology}
                </span>
              ))}
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 transition group-hover:border-brand-400 group-hover:text-brand-700 dark:border-slate-700 dark:text-slate-200 dark:group-hover:border-brand-400 dark:group-hover:text-brand-300"
            >
              Ver mais
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ProjectGrid;
