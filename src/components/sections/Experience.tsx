"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
// import Image from "next/image"; // Descomenta si usas los logos

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
      logo: "/images/logo-alignet.png", 
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
      logo: "/images/logo-mv.png",
      color: "border-purple-500/30 bg-purple-950/10",
      tech: ["Next.js", "SEO", "Google Ads"]
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 md:px-12 bg-slate-950">
      <div className="max-w-6xl w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 flex items-center gap-3 font-mono"
        >
          <span className="text-green-500 text-2xl">➜</span>
          <span className="text-cyan-400 text-2xl">~/career</span>
          <span className="text-gray-500 text-2xl">/history</span>
          <span className="animate-pulse bg-gray-500 w-3 h-6 block ml-1"></span>
        </motion.div>

        {/* Contenedor relativo para la línea de tiempo */}
        <div className="relative space-y-8 ml-4 md:ml-0">
          
          {/* --- CORRECCIÓN: Línea de tiempo continua --- */}
          {/* Esta línea ahora es una sola barra larga detrás de todo */}
          <div className="absolute left-8 top-4 bottom-4 w-px bg-white/10 hidden md:block h-full z-0" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10" // Z-10 para estar sobre la línea
            >
              <div className={`relative flex flex-col md:flex-row gap-6 p-6 rounded-lg border ${exp.color} hover:bg-white/5 transition-all w-full bg-slate-950/80`}>
                
                {/* LOGO / ICONO */}
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-[#0d1117] border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform relative z-20">
                    {/* <Image src={exp.logo} alt={exp.company} width={64} height={64} className="object-cover rounded-md" /> */}
                    <Briefcase className="text-gray-400 group-hover:text-white" size={28} />
                  </div>
                </div>

                {/* CONTENIDO */}
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

                    <div className="text-xs md:text-sm text-gray-500 bg-black/20 px-3 py-2 rounded border border-white/5 h-fit text-right">
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
                        <span className="mt-1.5 text-cyan-500 text-xs">Login...</span> 
                        {item}
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

      </div>
    </section>
  );
}