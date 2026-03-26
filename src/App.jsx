import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SectionTitle from "./components/SectionTitle";
import AboutSection from "./components/AboutSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectGrid from "./components/ProjectGrid";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import WorkApproachSection from "./components/WorkApproachSection";
import Footer from "./components/Footer";
import {
  about,
  contact,
  experiences,
  hero,
  navItems,
  projects,
  skills,
  workApproach,
} from "./data/portfolioData";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark;

    setDarkMode(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const sectionOffsetClass = useMemo(() => "scroll-mt-24", []);

  const handleToggleDarkMode = () => {
    setDarkMode((previousValue) => {
      const nextValue = !previousValue;
      document.documentElement.classList.toggle("dark", nextValue);
      window.localStorage.setItem("theme", nextValue ? "dark" : "light");
      return nextValue;
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-300/30 blur-3xl dark:bg-brand-700/30" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-900/30" />
      </div>

      <Navbar
        items={navItems}
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-5 pb-16 pt-28 sm:px-7 lg:px-8">
        <section id="hero" className={sectionOffsetClass}>
          <HeroSection hero={hero} />
        </section>

        <section id="sobre" className={sectionOffsetClass}>
          <SectionTitle
            eyebrow="Quem eu sou"
            title="Sobre mim"
            subtitle="Liderança orientada a entrega, com base técnica para acelerar decisões e execução."
          />
          <AboutSection about={about} />
        </section>

        <section id="experiencia" className={sectionOffsetClass}>
          <SectionTitle
            eyebrow="Trajetória"
            title="Experiência Profissional"
            subtitle="Progressão interna baseada em aumento de responsabilidade e liderança."
          />
          <ExperienceTimeline items={experiences} />
        </section>

        <section id="projetos" className={sectionOffsetClass}>
          <SectionTitle
            eyebrow="Destaques"
            title="Projetos estratégicos"
            subtitle="Resultados orientados a produto, governança de projeto e execução técnica de qualidade."
          />
          <ProjectGrid projects={projects} />
        </section>

        <section id="como-trabalho" className={sectionOffsetClass}>
          <SectionTitle
            eyebrow="Maturidade de gestão"
            title="Como eu trabalho"
            subtitle="Método de trabalho para garantir alinhamento, previsibilidade e entrega contínua de valor."
          />
          <WorkApproachSection items={workApproach} />
        </section>

        <section id="skills" className={sectionOffsetClass}>
          <SectionTitle
            eyebrow="Competências"
            title="Skills"
            subtitle="Conjunto de práticas de gestão e tecnologia aplicadas em contextos de alta colaboração."
          />
          <SkillsSection skills={skills} />
        </section>

        <section id="contato" className={sectionOffsetClass}>
          <SectionTitle
            eyebrow="Vamos conversar"
            title="Contato"
            subtitle="Aberto a oportunidades em empresas de tecnologia que valorizam liderança, visão de produto e execução."
          />
          <ContactSection contact={contact} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
