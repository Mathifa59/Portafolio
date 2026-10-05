"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Download,
} from "lucide-react";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";
import SystemVisual from "@/components/ui/SystemVisual";

export default function Hero() {
  const { lang } = useLang();
  const tr = t[lang].hero;
  const reduced = useReducedMotion();
  const entrance = (delay: number) => ({
    initial: reduced ? (false as const) : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      delay: reduced ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });
  return (
    <section id="inicio" className="hero section-shell">
      <div className="hero-grid">
        <div className="hero-copy">
          <motion.div {...entrance(0.05)} className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {tr.eyebrow}
          </motion.div>
          <motion.h1 {...entrance(0.12)}>
            Mathias
            <br />
            <span>
              Vasquez<span className="name-period">.</span>
            </span>
          </motion.h1>
          <motion.div {...entrance(0.22)} className="hero-disciplines">
            {tr.disciplines.map((item, i) => (
              <span key={item}>
                {i > 0 && <i aria-hidden="true">/</i>}
                {item}
              </span>
            ))}
          </motion.div>
          <motion.p {...entrance(0.3)} className="hero-description">
            {tr.description}
          </motion.p>
          <motion.div {...entrance(0.38)} className="hero-actions">
            <a href="#proyectos" className="button button-primary">
              {tr.work}
              <ArrowDownRight size={19} aria-hidden="true" />
            </a>
            <a
              href="/mathias-vasquez-cv.pdf"
              className="button button-quiet"
              download
            >
              <Download size={17} aria-hidden="true" />
              {tr.cv}
            </a>
          </motion.div>
        </div>
        <motion.div {...entrance(0.3)} className="hero-system">
          <div className="hero-profile">
            <Image
              src="/images/MathiasVasquez.jpg"
              alt="Mathias Vasquez"
              width={48}
              height={48}
              priority
            />
            <div>
              <span>Mathias Vasquez</span>
              <small className="mono">building & learning</small>
            </div>
            <a
              href="https://www.linkedin.com/in/mathias-vasquez/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight size={19} />
            </a>
          </div>
          <SystemVisual />
          <p className="system-caption">{tr.caption}</p>
        </motion.div>
      </div>
      <motion.div {...entrance(0.55)} className="hero-bottom">
        <span>
          <span className="status-dot" aria-hidden="true" />
          {tr.available}
        </span>
        <a href="#proyectos">
          {tr.scroll}
          <ArrowDown size={15} aria-hidden="true" />
        </a>
      </motion.div>
    </section>
  );
}
