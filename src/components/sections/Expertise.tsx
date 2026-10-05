"use client";
import { ArrowUpRight, Braces, Cloud, Database, Workflow } from "lucide-react";
import Link from "next/link";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
const icons = [Workflow, Database, Braces, Cloud];

export default function Expertise() {
  const { lang } = useLang();
  const tr = t[lang].expertise;
  return (
    <section id="enfoque" className="section-shell section-space">
      <SectionHeading {...tr} />
      <div className="expertise-grid">
        {tr.areas.map((area, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={area.title} delay={i * 0.06}>
              <article className="expertise-card">
                <div className="expertise-top">
                  <Icon size={24} aria-hidden="true" />
                  <span className="mono">0{i + 1}</span>
                </div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div className="tech-list">
                  {area.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <Link href={area.href} className="text-link">
                  {area.evidence}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
