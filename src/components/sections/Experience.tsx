"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Practicante de Programación",
      company: "ALIGNET SAC",
      date: "Nov 2025 - Actualidad",
      location: "Lima, PE",
      description: [
        "Desarrollo frontend utilizando React e integración con backend en Node.js.",
        "Conexión e integración con APIs de Jira para gestión de requerimientos.",
        "Implementación de UI/UX siguiendo lineamientos corporativos estrictos.",
      ],
      color: "border-blue-500/30 bg-blue-950/10",
      tech: ["React", "Node.js", "Jira API"]
    },
    {
      id: 2,
      role: "Frontend Developer & Consultor",
      company: "MV&ABOGADOS",
      date: "Ene 2025 - Sep 2025",
      location: "Lima, PE",
      description: [
        "Desarrollo de landing page (Next.js) con conversión del 45%.",
        "Estrategia SEO on-page y campañas de Meta/Google Ads.",
        "Analítica avanzada con Google Analytics 4.",
      ],
      color: "border-purple-500/30 bg-purple-950/10",
      tech: ["Next.js", "SEO", "Google Ads"]
    }
  ];

  return (
    // CAMBIOS APLICADOS:
    // 1. Quitamos 'bg-slate-950' para que se vea el fondo global de tu web.
    // 2. Quitamos 'min-h-screen' y 'flex items-center justify-center' para que fluya natural.
    // 3. Usamos 'max-w-7xl mx-auto' para alinear el ancho con Proyectos y About.
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      
      {/* TÍTULO ESTILO TERMINAL */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-16 flex items-center gap-3 font-mono"
      >
        <span className="text-green-500 text-2xl">➜</span>
        <span className="text-cyan-400 text-2xl">~/career</span>
        <span className="text-gray-500 text-2xl">/history</span>
        <span className="animate-pulse bg-gray-500 w-3 h-6 block ml-1"></span>
      </motion.div>

      {/* CONTENEDOR CON BORDE CONTINUO (TIMELINE) */}
      <div className="border-l border-white/10 ml-4 md:ml-6 space-y-12">
        
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            
            {/* PUNTO CONECTOR (Sobre la línea) */}
            <div className="absolute -left-2.25 top-6 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500 z-10 shadow-[0_0_10px_rgba(6,182,212,0.8)]">
                <div className="w-full h-full rounded-full bg-cyan-400 opacity-20 animate-ping" />
            </div>

            {/* TARJETA DE EXPERIENCIA */}
            {/* Mantenemos un fondo suave (bg-slate-900/60) para legibilidad, pero es traslúcido */}
            <div className={`relative flex flex-col md:flex-row gap-6 p-6 rounded-lg border ${exp.color} hover:bg-white/5 transition-all w-full bg-slate-900/60 backdrop-blur-sm`}>
              
              {/* ICONO */}
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-lg bg-[#0d1117] border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <Briefcase className="text-gray-400" size={28} />
                </div>
              </div>

              {/* INFO */}
              <div className="grow font-mono">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                      {exp.role}
                    </h3>
                    <p className="text-base text-cyan-400 font-semibold mt-1">
                      @{exp.company}
                    </p>
                  </div>

                  <div className="text-xs md:text-sm text-gray-500 bg-black/20 px-3 py-2 rounded border border-white/5 h-fit text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-2">
                        <Calendar size={14} /> {exp.date}
                    </div>
                    <div className="flex items-center justify-end gap-2 mt-1">
                        <MapPin size={14} /> {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4 font-sans text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 text-cyan-500 text-xs shrink-0">➜</span> 
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 flex-wrap pt-2 border-t border-white/5">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded bg-white/5 text-gray-400 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}