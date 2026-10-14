"use client";
import { ArrowUp } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";

export default function Footer() {
  const { lang } = useLang();
  const tr = t[lang].footer;
  return (
    <footer className="site-footer section-shell">
      <div>
        <a href="#main-content" className="wordmark" aria-label={tr.top}>
          mv<span>.</span>
        </a>
        <p>{tr.line}</p>
      </div>
      <a
        href="https://www.devhorses.com/"
        target="_blank"
        rel="noopener noreferrer"
        title="DevHorses"
        className="footer-credit mono"
      >
        © {new Date().getFullYear()} Mathias Vasquez
      </a>
      <a href="#main-content" className="footer-top">
        {tr.top}
        <ArrowUp size={15} aria-hidden="true" />
      </a>
    </footer>
  );
}
