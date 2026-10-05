"use client";
import { ArrowLeft, ArrowUpRight, Check, CircleDashed } from "lucide-react";
import Link from "next/link";
import { technicalProjects, type TechnicalProject } from "@/data/projects";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";
import Reveal from "@/components/ui/Reveal";
import Architecture from "@/components/ui/Architecture";

export default function CaseStudy({ project }: { project: TechnicalProject }) {
  const { lang } = useLang();
  const tr = t[lang].case;
  const copy = project.content[lang];
  const next = technicalProjects.find((item) => item.slug !== project.slug)!;
  return (
    <article className="case-study section-shell">
      <Reveal>
        <Link href="/#proyectos" className="text-link case-back">
          <ArrowLeft size={16} aria-hidden="true" />
          {tr.back}
        </Link>
        <div className="eyebrow">{copy.label}</div>
        <h1>{copy.title}</h1>
        <p className="case-lead">{copy.summary}</p>
        <div className="tech-list">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </Reveal>
      <Reveal className="case-context">
        <span className="eyebrow">{tr.scope}</span>
        <p>{copy.context}</p>
        {project.kind === "experience" && (
          <p className="case-note">{tr.experienceNote}</p>
        )}
      </Reveal>
      <Reveal className="case-architecture">
        <h2>{tr.architecture}</h2>
        <Architecture
          nodes={copy.nodes}
          label={t[lang].projects.architecture}
        />
        <p className="case-note">{tr.reference}</p>
      </Reveal>
      <div className="case-contributions">
        <Reveal>
          <span className="eyebrow">01 / CONTRIBUTIONS</span>
          <h2>{tr.contribution}</h2>
        </Reveal>
        <Reveal>
          <ol>
            {copy.contributions.map((item, i) => (
              <li key={item}>
                <span className="mono">0{i + 1}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
      <section className="case-decisions">
        <Reveal>
          <span className="eyebrow">02 / DESIGN</span>
          <h2>{tr.decisions}</h2>
        </Reveal>
        <div className="decision-grid">
          {copy.decisions.map((decision, i) => (
            <Reveal key={decision.title} delay={i * 0.08}>
              <div>
                <span className="mono">0{i + 1}</span>
                <h3>{decision.title}</h3>
                <p>{decision.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="case-status">
        <Reveal>
          <span className="eyebrow">03 / PROGRESS</span>
          <h2>{tr.status}</h2>
        </Reveal>
        <div className="case-status-grid">
          <Reveal>
            <div className="status-panel">
              <Check size={21} aria-hidden="true" />
              <h3>{copy.implementedLabel}</h3>
              <ul>
                {copy.implemented.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="status-panel future">
              <CircleDashed size={21} aria-hidden="true" />
              <h3>{copy.futureLabel}</h3>
              <ul>
                {copy.future.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
      <Reveal className="case-links">
        <a
          href="/mathias-vasquez-cv.pdf"
          className="button button-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          {tr.cv}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <a
          href="https://github.com/Mathifa59"
          className="text-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {tr.github}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </Reveal>
      <Reveal>
        <Link className="next-case" href={`/proyectos/${next.slug}`}>
          <div>
            <span className="eyebrow">{tr.related}</span>
            <h2>{next.content[lang].title}</h2>
          </div>
          <ArrowUpRight size={35} aria-hidden="true" />
        </Link>
      </Reveal>
    </article>
  );
}
