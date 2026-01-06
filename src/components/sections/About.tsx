"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  // Rutas actualizadas según tu captura de archivos (versiones blancas)
  const technologies = [
    { name: "React", src: "/images/react (1).svg" },
    { name: "Next.js", src: "/images/nextdotjs (1).svg" },
    { name: "Tailwind", src: "/images/tailwindcss (1).svg" },
    { name: "TypeScript", src: "/images/typescript (1).svg" },
    { name: "Node.js", src: "/images/nodedotjs (1).svg" },
    { name: "Python", src: "/images/python (1).svg" },
    { name: "Docker", src: "/images/docker (1).svg" },
    { name: "Figma", src: "/images/figma (1).svg" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12 bg-slate-950">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* COLUMNA FOTO */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative group flex justify-center md:justify-start"
        >
          {/* Efecto de brillo trasero (Gradient) */}
          <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-purple-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative w-full max-w-md aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
            <Image 
              src="/images/MathiasVasquez.jpg" 
              alt="Mathias Vasquez"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Tarjeta Flotante "Available" */}
            <div className="absolute bottom-6 left-6 right-6 bg-slate-950/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <div>
                <p className="text-white text-sm font-semibold">Disponible para proyectos</p>
                <p className="text-gray-400 text-xs">¡Hablemos de tu idea!</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* COLUMNA BIO */}
        <div className="space-y-8">
          <div className="space-y-2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-white tracking-tight"
            >
              Sobre Mí
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-cyan-400 font-medium"
            >
              Software Engineer & Founder
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 space-y-4 text-lg leading-relaxed font-light"
          >
            <p>
              Soy <strong className="text-white font-semibold">Mathias Vasquez</strong>, un apasionado desarrollador Full Stack y emprendedor. Actualmente lidero <span className="text-purple-400 font-semibold">DevHorses</span>, una startup enfocada en transformar ideas en soluciones digitales escalables.
            </p>
            <p>
              Me especializo en crear aplicaciones web modernas, rápidas y visualmente impactantes. Mi enfoque combina la <span className="underline decoration-cyan-500 underline-offset-4 decoration-2">ingeniería de software</span> con un diseño intuitivo para resolver problemas reales.
            </p>
          </motion.div>

          {/* GRID DE TECNOLOGÍAS (Iconos Blancos) */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-white">Tecnologías</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  // AQUÍ ESTÁ LA MAGIA DEL HOVER:
                  // border-white/10 (sutil) -> hover:border-white (resalta blanco)
                  className="group flex flex-col items-center justify-center p-4 rounded-2xl border border-white/10 bg-white/5 hover:border-white hover:bg-white/10 transition-all duration-300 cursor-default"
                >
                  <div className="mb-3 relative w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Image 
                        src={tech.src} 
                        alt={tech.name}
                        width={40}
                        height={40}
                        className="object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}