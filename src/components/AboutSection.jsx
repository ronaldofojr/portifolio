function AboutSection({ about }) {
  return (
    <div className="section-card grid gap-5">
      {about.paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default AboutSection;
