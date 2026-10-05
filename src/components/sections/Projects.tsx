"use client";
import { ArrowUpRight, ChevronDown, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { technicalProjects, webProjects } from "@/data/projects";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Architecture from "@/components/ui/Architecture";

export default function Projects() {
  const { lang } = useLang();
  const tr = t[lang].projects;
  return (
    <section id="proyectos" className="section-shell section-space">
      <SectionHeading {...tr} />
      <div className="project-grid">
        {technicalProjects.map((project, i) => {
          const copy = project.content[lang];
          return (
            <Reveal key={project.slug} delay={i * 0.1}>
              <article className={`project-card project-${project.kind}`}>
                <div className="project-visual">
                  <div className="project-visual-header">
                    <span className="mono">
                      0{i + 1} /{" "}
                      {project.kind === "thesis"
                        ? "RETRIEVAL SYSTEM"
                        : "AGENT SYSTEMS"}
                    </span>
                    <span className="project-symbol" aria-hidden="true">
                      {project.kind === "thesis" ? "∿" : "✳"}
                    </span>
                  </div>
                  <Architecture
                    nodes={copy.nodes}
                    label={tr.architecture}
                    compact
                  />
                </div>
                <div className="project-content">
                  <div className="project-meta">
                    <span>{copy.label}</span>
                    <span className="project-status">
                      <i aria-hidden="true" />
                      {project.kind === "thesis" ? tr.ongoing : tr.professional}
                    </span>
                  </div>
                  <h3>
                    <Link href={`/proyectos/${project.slug}`}>
                      {copy.title}
                      <ArrowUpRight aria-hidden="true" size={25} />
                    </Link>
                  </h3>
                  <p>{copy.summary}</p>
                  <div className="tech-list">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                  <Link
                    href={`/proyectos/${project.slug}`}
                    className="text-link"
                  >
                    {tr.explore}
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
      <Reveal>
        <details className="web-archive">
          <summary>
            <div>
              <span className="mono">+ WEB DEVELOPMENT</span>
              <h3>{tr.other}</h3>
            </div>
            <ChevronDown aria-hidden="true" size={21} />
          </summary>
          <div className="archive-content">
            <p>{tr.otherDescription}</p>
            <div className="archive-grid">
              {webProjects.map((project) => (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="archive-card"
                >
                  <div className="archive-image">
                    <Image
                      src={project.image}
                      alt={`${tr.image}: ${project.title}`}
                      fill
                      sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, 30vw"
                    />
                    <span>{project.demo ? tr.demo : tr.client}</span>
                  </div>
                  <div>
                    <h4>
                      {project.title}
                      <ExternalLink size={14} aria-hidden="true" />
                    </h4>
                    <p>{project.description[lang]}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </details>
      </Reveal>
    </section>
  );
}
