"use client";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  
  const links = [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Experiencia", href: "/experiencia" },
    { name: "Sobre mí", href: "/sobre-mi" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 w-full max-w-4xl">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold hover:opacity-80 transition-opacity text-white">
          Mathias<span className="text-cyan-400">Vasquez</span>.
        </Link>

        {/* Menú Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium group block"
                >
                  {/* Texto del enlace */}
                  <span className={`relative z-10 transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-400 group-hover:text-white"
                  }`}>
                    {link.name}
                  </span>

                  {/* EFECTO HOVER: Luz de fondo al pasar el mouse */}
                  <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* INDICADOR ACTIVO: Pequeño punto debajo (más sutil que la sombra) */}
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

        {/* Iconos Sociales */}
        <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <SocialIcon href="https://github.com/Mathifa59" icon={<Github size={18} />} />
            <SocialIcon href="https://www.linkedin.com/in/mathias-vasquez/" icon={<Linkedin size={18} />} />
        </div>
      </div>
    </motion.nav>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a href={href} target="_blank" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
            {icon}
        </a>
    )
}