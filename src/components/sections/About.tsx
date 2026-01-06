"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  // Lista actualizada basada en TUS archivos de la carpeta public/images
  const technologies = [
    { name: "React", src: "/images/react.svg", color: "border-cyan-500/20 bg-cyan-950/20" },
    { name: "Next.js", src: "/images/nextdotjs.svg", color: "border-white/20 bg-slate-800/50" },
    { name: "Tailwind", src: "/images/tailwindcss.svg", color: "border-teal-500/20 bg-teal-950/20" },
    { name: "TypeScript", src: "/images/typescript.svg", color: "border-blue-500/20 bg-blue-950/20" },
    { name: "Node.js", src: "/images/nodedotjs.svg", color: "border-green-500/20 bg-green-950/20" },
    { name: "Python", src: "/images/python.svg", color: "border-yellow-500/20 bg-yellow-950/20" },
    { name: "Docker", src: "/images/docker.svg", color: "border-blue-400/20 bg-blue-900/20" },
    { name: "Figma", src: "/images/figma.svg", color: "border-pink-500/20 bg-pink-950/20" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12 bg-slate-950">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* COLUMNA IZQUIERDA: FOTO (Se mantiene igual) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-purple-600 rounded-4x1 blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative aspect-square rounded-4x1 overflow-hidden border border-white/10 shadow-2xl">
            <Image 
              src="/images/MathiasVasquez.jpg" 
              alt="Mathias Vasquez"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Tarjeta Flotante "Available" */}
            <div className="absolute bottom-6 left-6 right-6 bg-slate-900/80 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4 shadow-lg">
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

        {/* COLUMNA DERECHA: BIO Y SKILLS */}
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
            className="text-gray-300 space-y-4 text-lg leading-relaxed"
          >
            <p>
              Soy <strong className="text-white">Mathias Vasquez</strong>, un apasionado desarrollador Full Stack y emprendedor. Actualmente lidero <span className="text-purple-400 font-semibold">DevHorses</span>, una startup enfocada en transformar ideas en soluciones digitales escalables.
            </p>
            <p>
              Me especializo en crear aplicaciones web modernas, rápidas y visualmente impactantes. Mi enfoque combina la <span className="underline decoration-cyan-500 underline-offset-4 decoration-2">ingeniería de software</span> con un diseño intuitivo para resolver problemas reales.
            </p>
          </motion.div>

          {/* Grid de Tecnologías (Iconos Reales) */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Tecnologías</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border ${tech.color} hover:bg-opacity-40 transition-all cursor-default group`}
                >
                  <div className="mb-3 p-2 bg-slate-950/50 rounded-lg group-hover:scale-110 transition-transform relative w-12 h-12 flex items-center justify-center">
                    {/* Renderizamos el SVG real */}
                    <Image 
                        src={tech.src} 
                        alt={tech.name}
                        width={40}
                        height={40}
                        className="object-contain" // Asegura que el icono no se deforme
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}