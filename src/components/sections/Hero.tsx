"use client";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  return (
    // CAMBIO 1: Reduje el padding vertical en móvil (py-12) y mantuve el grande en PC (md:py-20)
    // CAMBIO 2: 'overflow-hidden' evita que animaciones rompan el ancho del móvil
    <section id="inicio" className="min-h-screen flex items-center justify-center px-6 md:px-20 py-12 md:py-20 max-w-7xl mx-auto overflow-hidden">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-center w-full">
        
        {/* COLUMNA IZQUIERDA: TEXTO */}
        {/* CAMBIO 3: 'order-2' en móvil pone el texto DEBAJO de la foto. 'md:order-1' lo pone a la izquierda en PC. */}
        {/* CAMBIO 4: 'items-center text-center' en móvil para que todo quede centrado bajo la foto. 'md:items-start' en PC. */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 order-2 md:order-1">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            // Ajustamos el tamaño del badge en móvil para que no ocupe tanto
            className="mb-4 px-3 py-1 border border-cyan-500/30 rounded-full bg-cyan-950/30 text-cyan-300 text-xs md:text-sm font-medium"
          >
            Disponible para proyectos 🚀
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            // CAMBIO 5: Reduje el texto base a 'text-4xl' en móvil (antes 5xl) para que quepa bien en pantallas angostas.
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight flex flex-col justify-center"
          >
            <span>Hola, soy</span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500 whitespace-nowrap pb-2">
              <Typewriter text="Mathias Vasquez" />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-base md:text-lg mb-8 max-w-lg"
          >
            Desarrollador Full Stack transformando ideas en realidad digital. 
            Especialista en React, Next.js y soluciones modernas.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            // Centramos los botones en móvil
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
          >
            <Link href="/proyectos" className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 w-full sm:w-auto">
              Ver Mis Trabajos <ArrowRight size={18} />
            </Link>
            
            <div className="flex gap-3 justify-center">
               <SocialButton href="https://github.com/Mathifa59" icon={<Github />} />
               <SocialButton href="https://www.linkedin.com/in/mathias-vasquez/" icon={<Linkedin />} />
            </div>
          </motion.div>
        </div>

        {/* COLUMNA DERECHA: FOTO */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center md:justify-end z-10 order-1 md:order-2"
        >
          {/* CAMBIO 6: Tamaño de imagen RESPONSIVE. 
              - w-48 (192px) en móvil: Pequeño y elegante.
              - w-64 (256px) en tablet.
              - w-96 (384px) en PC: Grande e imponente.
          */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full p-1 bg-linear-to-tr from-cyan-400 via-purple-500 to-transparent">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-slate-900">
                <Image 
                  src="/images/MathiasVasquez.jpg" 
                  alt="Mathias Vasquez" 
                  fill
                  priority
                  className="object-cover object-center transform hover:scale-110 transition-transform duration-500" 
                />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// --- COMPONENTES AUXILIARES ---

function SocialButton({ icon, href }: { icon: React.ReactNode, href: string }) {
    return (
      <a href={href} target="_blank" className="p-3 bg-slate-800/50 border border-white/10 rounded-lg text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all">
        {icon}
      </a>
    )
}

// Lógica del efecto de escritura
const Typewriter = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const currentText = displayText;
      const speed = isDeleting ? 50 : 100;

      if (!isDeleting && currentText === text) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        timer = setTimeout(() => setIsDeleting(false), 500);
      } else {
        const nextText = isDeleting 
          ? currentText.substring(0, currentText.length - 1)
          : text.substring(0, currentText.length + 1);
          
        timer = setTimeout(() => setDisplayText(nextText), speed);
      }
    };

    timer = setTimeout(handleType, 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, text]);

  return (
    <span className="inline-flex items-center">
      {displayText}
      <span className="border-r-4 border-cyan-400 ml-1 h-[1em] animate-pulse"></span>
    </span>
  );
};