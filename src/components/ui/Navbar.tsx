"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("#inicio");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Bloquear el scroll del BODY cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  // Intersection Observer para detectar sección activa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "proyectos", "experiencia", "sobre-mi", "contacto"];
      const scrollPosition = window.scrollY + 100; // Offset para detectar antes

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveTab(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Inicio", href: "#inicio" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Experiencia", href: "#experiencia" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <>
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-4 md:pt-6 px-4 pointer-events-none"
    >
      {/* --- BARRA PRINCIPAL (CÁPSULA) --- */}
      <div className="pointer-events-auto flex items-center justify-between px-4 md:px-6 py-2 md:py-3 rounded-full bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 w-full max-w-4xl relative z-50">
        
        {/* Logo */}
        <a 
            href="#inicio" 
            className="text-lg md:text-xl font-bold hover:opacity-80 transition-opacity text-white shrink-0 z-50 font-mono tracking-tight"
            onClick={() => setIsMobileMenuOpen(false)}
        >
          mathias<span className="text-emerald-500">.dev</span>
        </a>

        {/* Menú Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = activeTab === link.href;
            return (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium group block"
                >
                  <span className={`relative z-10 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-400 group-hover:text-white"
                  }`}>
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

        {/* Iconos Sociales & Botón Hamburguesa */}
        <div className="flex items-center gap-4 pl-0 md:pl-6 md:border-l border-white/10">
            
            <div className="hidden md:flex items-center gap-4">
                <SocialIcon href="https://github.com/Mathifa59" icon={<Github size={18} />} />
                <SocialIcon href="https://www.linkedin.com/in/mathias-vasquez/" icon={<Linkedin size={18} />} />
            </div>

            <button 
                className="md:hidden text-gray-300 hover:text-white p-1"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Abrir menú"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* --- MENÚ DESPLEGABLE MÓVIL --- */}
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
                                <li key={link.name}>
                                    <a 
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`block px-4 py-4 md:py-3 rounded-xl text-center font-medium transition-colors ${
                                            isActive 
                                            ? "bg-white/10 text-white" 
                                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                                        }`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                             )
                        })}
                    </ul>

                    <div className="flex justify-center gap-8 mt-4 pt-4 border-t border-white/10">
                        <SocialIcon href="https://github.com/Mathifa59" icon={<Github size={24} />} />
                        <SocialIcon href="https://www.linkedin.com/in/mathias-vasquez/" icon={<Linkedin size={24} />} />
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
    
    {/* FONDO OSCURO DE SEGURIDAD PARA MÓVIL */}
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

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a href={href} target="_blank" className="text-gray-400 hover:text-emerald-500 transition-colors transform hover:scale-110">
            {icon}
        </a>
    )
}