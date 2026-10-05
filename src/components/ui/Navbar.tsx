"use client";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";

export default function Navbar() {
  const { lang, toggleLang } = useLang();
  const tr = t[lang].navbar;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const trigger = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const links = [
    { id: "proyectos", text: tr.work },
    { id: "experiencia", text: tr.experience },
    { id: "enfoque", text: tr.expertise },
    { id: "contacto", text: tr.contact },
  ];

  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    ["inicio", "proyectos", "experiencia", "enfoque", "contacto"].forEach(
      (id) => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      },
    );
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    const closeOnResize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnResize);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnResize);
    };
  }, [open]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        {lang === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>
      <header className="site-header">
        <motion.div
          className="reading-progress"
          style={{ scaleX: scrollYProgress }}
          aria-hidden="true"
        />
        <div className="nav-shell">
          <Link
            href="/#inicio"
            className="wordmark"
            aria-label={tr.home}
            onClick={() => setOpen(false)}
          >
            mv<span>.</span>
          </Link>
          <nav
            className="desktop-nav"
            aria-label={
              lang === "es" ? "Navegación principal" : "Main navigation"
            }
          >
            {links.map((link) => (
              <Link
                key={link.id}
                href={`/#${link.id}`}
                className={
                  pathname === "/" && active === link.id
                    ? "nav-link is-active"
                    : "nav-link"
                }
                aria-current={
                  pathname === "/" && active === link.id
                    ? "location"
                    : undefined
                }
              >
                {link.text}
              </Link>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              className="language-toggle"
              onClick={toggleLang}
              aria-label={tr.language}
            >
              <span className={lang === "es" ? "selected" : ""}>ES</span>
              <span className="language-divider">/</span>
              <span className={lang === "en" ? "selected" : ""}>EN</span>
            </button>
            <a
              className="nav-github"
              href="https://github.com/Mathifa59"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <button
              ref={trigger}
              className="menu-toggle"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? tr.close : tr.menu}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              ref={panel}
              id="mobile-navigation"
              className="mobile-navigation"
              initial={reduced ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: reduced ? 0 : 0.25 }}
              onBlur={(event) => {
                if (
                  !event.currentTarget.contains(event.relatedTarget) &&
                  event.relatedTarget !== trigger.current
                )
                  setOpen(false);
              }}
            >
              <nav
                aria-label={
                  lang === "es" ? "Navegación móvil" : "Mobile navigation"
                }
              >
                {links.map((link, i) => (
                  <Link
                    href={`/#${link.id}`}
                    key={link.id}
                    onClick={() => setOpen(false)}
                  >
                    <span className="mono">0{i + 1}</span>
                    {link.text}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {open && (
        <button
          className="menu-backdrop"
          onClick={() => setOpen(false)}
          tabIndex={-1}
          aria-label={tr.close}
        />
      )}
    </>
  );
}
