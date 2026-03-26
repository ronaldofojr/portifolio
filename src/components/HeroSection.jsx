function HeroSection({ hero }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="animate-floatIn">
        <span className="mb-5 inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-700 dark:border-brand-500/40 dark:bg-brand-500/10 dark:text-brand-200">
          Portfolio Executivo
        </span>

        <h1 className="font-display text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          {hero.name}
        </h1>

        <p className="mt-4 text-xl font-semibold text-brand-700 dark:text-brand-300 sm:text-2xl">
          {hero.title}
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
          {hero.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projetos"
            className="rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:translate-y-[-2px] hover:bg-brand-700"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="rounded-xl border border-slate-300 bg-white/80 px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-300"
          >
            Falar comigo
          </a>
        </div>
      </div>

      <div className="section-card relative overflow-hidden">
        <div className="absolute -right-6 -top-8 h-28 w-28 rounded-full bg-brand-200/60 blur-2xl dark:bg-brand-500/30" />
        <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Foco em valor</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          Gestão de projetos orientada por resultado, governança prática e colaboração entre áreas para manter produto, negócio e engenharia alinhados.
        </p>
        <ul className="mt-6 space-y-3">
          <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            Liderança de squads multidisciplinares
          </li>
          <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            Visão de produto com execução técnica
          </li>
          <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            Entregas previsíveis e alinhadas ao negócio
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeroSection;
