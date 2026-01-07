"use client";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 md:px-20 py-20 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 items-center w-full">
        
        {/* COLUMNA IZQUIERDA: TEXTO */}
        <div className="flex flex-col items-start z-10 order-2 md:order-1">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 px-3 py-1 border border-cyan-500/30 rounded-full bg-cyan-950/30 text-cyan-300 text-sm font-medium"
          >
            Disponible para proyectos 🚀
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            // CAMBIO 1: Ajusté la altura mínima para evitar saltos verticales.
            // 'min-h-[3.5em]' reserva espacio para las 2 líneas de texto + un poco de margen.
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight min-h-[3.5em] flex flex-col justify-center"
          >
            <span>Hola, soy</span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500 whitespace-nowrap pb-2">
              {/* CAMBIO 2: 'whitespace-nowrap' evita que el nombre se parta en dos líneas */}
              {/* 'pb-2' es un pequeño padding inferior para el cursor */}
              <Typewriter text="Mathias Vasquez" />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg mb-8 max-w-lg"
          >
            Desarrollador Full Stack transformando ideas en realidad digital. 
            Especialista en React, Next.js y soluciones modernas.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4"
          >
            <Link href="/proyectos" className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
              Ver Mis Trabajos <ArrowRight size={18} />
            </Link>
            
            <div className="flex gap-3">
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
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full p-1 bg-linear-to-tr from-cyan-400 via-purple-500 to-transparent">
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