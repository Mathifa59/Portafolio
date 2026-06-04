"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("#inicio");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, toggleLang } = useLang();
  const links = t[lang].navbar.links;
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Bloquear scroll del body en menú móvil
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  // IntersectionObserver para sección activa (más preciso y eficiente que scroll)
  useEffect(() => {
    const sectionIds = ["inicio", "proyectos", "experiencia", "sobre-mi", "contacto"];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveTab(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-4 md:pt-6 px-4 pointer-events-none"
      >
        {/* Barra principal */}
        <div className="pointer-events-auto flex items-center justify-between px-4 md:px-6 py-2 md:py-3 rounded-full bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 w-full max-w-4xl relative z-50">

          {/* Logo */}
          <a
            href="#inicio"
            className="text-lg md:text-xl font-bold hover:opacity-80 transition-opacity text-white shrink-0 z-50 font-mono tracking-tight"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            mathias<span className="text-emerald-500">.dev</span>
          </a>

          {/* Menú desktop */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = activeTab === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium group block"
                  >
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive ? "text-white" : "text-gray-400 group-hover:text-white"
                      }`}
                    >
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavTab"
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Iconos + toggle idioma */}
          <div className="flex items-center gap-3 pl-0 md:pl-6 md:border-l border-white/10">
            <div className="hidden md:flex items-center gap-4">
              <SocialIcon href="https://github.com/Mathifa59" icon={<Github size={18} />} label="GitHub" />
              <SocialIcon href="https://www.linkedin.com/in/mathias-vasquez/" icon={<Linkedin size={18} />} label="LinkedIn" />
            </div>

            {/* Toggle ES/EN */}
            <button
              onClick={toggleLang}
              aria-label="Cambiar idioma"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-bold border border-white/10 bg-white/5 hover:border-emerald-500/40 hover:text-emerald-400 text-gray-400 transition-all"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>

            <button
              className="md:hidden text-gray-300 hover:text-white p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Abrir menú"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto absolute top-full left-0 w-full px-4 mt-2"
            >
              <div className="flex flex-col p-4 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50">
                <ul className="flex flex-col gap-1">
                  {links.map((link) => {
                    const isActive = activeTab === link.href;
                    return (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-4 py-4 rounded-xl text-center font-medium transition-colors ${
                            isActive
                              ? "bg-white/10 text-white"
                              : "text-gray-400 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          {link.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <div className="flex justify-center items-center gap-8 mt-4 pt-4 border-t border-white/10">
                  <SocialIcon href="https://github.com/Mathifa59" icon={<Github size={24} />} label="GitHub" />
                  <SocialIcon href="https://www.linkedin.com/in/mathias-vasquez/" icon={<Linkedin size={24} />} label="LinkedIn" />
                  <button
                    onClick={toggleLang}
                    className="px-4 py-2 rounded-full text-sm font-mono font-bold border border-white/10 bg-white/5 hover:border-emerald-500/40 hover:text-emerald-400 text-gray-400 transition-all"
                  >
                    {lang === "es" ? "EN" : "ES"}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Overlay móvil */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
    </>
  );
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-gray-400 hover:text-emerald-500 transition-colors transform hover:scale-110"
    >
      {icon}
    </a>
  );
}
