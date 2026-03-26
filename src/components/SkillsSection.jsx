function SkillCategory({ title, items }) {
  return (
    <article className="section-card">
      <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

function SkillsSection({ skills }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      <SkillCategory title="Gestão" items={skills.management} />
      <SkillCategory title="Produto" items={skills.product} />
      <SkillCategory title="Técnico" items={skills.technical} />
    </div>
  );
}

export default SkillsSection;
