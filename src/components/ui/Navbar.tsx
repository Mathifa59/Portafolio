"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
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

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Experiencia", href: "/experiencia" },
    { name: "Sobre mí", href: "/sobre-mi" },
    { name: "Contacto", href: "/contacto" },
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
      {/* Ajustamos padding (py-2 en movil, py-3 en pc) para que no sea muy grueso en celular */}
      <div className="pointer-events-auto flex items-center justify-between px-4 md:px-6 py-2 md:py-3 rounded-full bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 w-full max-w-4xl relative z-50">
        
        {/* Logo */}
        <Link 
            href="/" 
            className="text-lg md:text-xl font-bold hover:opacity-80 transition-opacity text-white shrink-0 z-50"
            onClick={() => setIsMobileMenuOpen(false)}
        >
          Mathias<span className="text-cyan-400">Vasquez</span>.
        </Link>

        {/* Menú Desktop (Se oculta en móvil con 'hidden md:flex') */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link 
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
                      layoutId="activeTab"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Iconos Sociales & Botón Hamburguesa */}
        <div className="flex items-center gap-4 pl-0 md:pl-6 md:border-l border-white/10">
            
            {/* Escritorio: Iconos visibles */}
            <div className="hidden md:flex items-center gap-4">
                <SocialIcon href="https://github.com/Mathifa59" icon={<Github size={18} />} />
                <SocialIcon href="https://www.linkedin.com/in/mathias-vasquez/" icon={<Linkedin size={18} />} />
            </div>

            {/* Móvil: Botón Menú (Ahora es pointer-events-auto explícito) */}
            <button 
                className="md:hidden text-gray-300 hover:text-white p-1"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Abrir menú"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* --- MENÚ DESPLEGABLE MÓVIL (FULL SCREEN OPTIMIZED) --- */}
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
                             const isActive = pathname === link.href;
                             return (
                                <li key={link.name}>
                                    <Link 
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`block px-4 py-4 md:py-3 rounded-xl text-center font-medium transition-colors ${
                                            isActive 
                                            ? "bg-white/10 text-white" 
                                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                             )
                        })}
                    </ul>

                    {/* Iconos sociales grandes para móvil */}
                    <div className="flex justify-center gap-8 mt-4 pt-4 border-t border-white/10">
                        <SocialIcon href="https://github.com/Mathifa59" icon={<Github size={24} />} />
                        <SocialIcon href="https://www.linkedin.com/in/mathias-vasquez/" icon={<Linkedin size={24} />} />
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
    
    {/* FONDO OSCURO DE SEGURIDAD PARA MÓVIL (Overlay) */}
    {/* Si el menú está abierto, oscurecemos el resto de la página */}
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
        <a href={href} target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
            {icon}
        </a>
    )
}