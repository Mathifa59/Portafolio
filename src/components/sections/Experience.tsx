"use client";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  const { lang } = useLang();
  const tr = t[lang].experience;
  return (
    <section id="experiencia" className="section-shell section-space">
      <SectionHeading {...tr} />
      <div className="experience-list">
        {tr.entries.map((entry, i) => (
          <Reveal key={entry.company} delay={i * 0.07}>
            <article className="experience-row">
              <div className="experience-company">
                <span className="experience-index mono">0{i + 1}</span>
                <h3>{entry.company}</h3>
                <span className="mono experience-date">{entry.date}</span>
              </div>
              <div className="experience-detail">
                <h4>{entry.role}</h4>
                <p>{entry.summary}</p>
                <ul>
                  {entry.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="tech-list">
                  {entry.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                {i === 0 && (
                  <Link
                    className="text-link"
                    href="/proyectos/agentic-workflows"
                  >
                    {t[lang].projects.explore}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                )}
                {i === 1 && (
                  <a
                    className="text-link"
                    href="https://www.devhorses.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DevHorses
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
