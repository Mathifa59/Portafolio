"use client";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";

export default function Footer() {
  const { lang } = useLang();
  const tr = t[lang].footer;
  const navLinks = t[lang].navbar.links;

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mathias-vasquez/",
      icon: <Linkedin size={18} aria-hidden="true" />,
      color: "hover:text-[#0a66c2]",
    },
    {
      name: "GitHub",
      href: "https://github.com/Mathifa59",
      icon: <Github size={18} aria-hidden="true" />,
      color: "hover:text-white",
    },
    {
      name: "Email",
      href: "mailto:mathiwen519@gmail.com",
      icon: <Mail size={18} aria-hidden="true" />,
      color: "hover:text-emerald-500",
      isMail: true,
    },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-[#050505]">

      {/* Links de navegación rápida */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-10 pb-6">
        <nav aria-label="Navegación del footer">
          <ul className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-emerald-400 transition-colors font-mono"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Divisor */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="h-px bg-white/5" />
      </div>

      {/* Fila inferior */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs sm:text-sm text-gray-500 text-center">
          <p className="font-mono">© {new Date().getFullYear()} {tr.copy}</p>
          <span className="hidden md:inline text-gray-700" aria-hidden="true">|</span>
          <p>{tr.built}</p>
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.isMail ? "_self" : "_blank"}
              rel="noopener noreferrer"
              aria-label={link.name}
              className={`flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors group ${link.color}`}
            >
              {link.icon}
              <span className="sr-only sm:not-sr-only">{link.name}</span>
              <ArrowUpRight
                size={14}
                className="opacity-0 -ml-1 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
