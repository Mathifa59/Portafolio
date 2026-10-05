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
        <span className="wordmark">
          mv<span>.</span>
        </span>
        <p>{tr.line}</p>
      </div>
      <span className="footer-credit mono">
        © {new Date().getFullYear()} Mathias Vasquez
        <br />
        {tr.built}
      </span>
      <a href="#main-content">
        {tr.top}
        <ArrowUp size={15} aria-hidden="true" />
      </a>
    </footer>
  );
}
