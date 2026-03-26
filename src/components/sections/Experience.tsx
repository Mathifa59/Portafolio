"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "ALIGNET SAC",
      date: "Nov 2025 - Actualidad",
      location: "Lima, PE",
      description: [
        "Desarrollo frontend utilizando React e integración con backend en Node.js.",
        "Conexión e integración con APIs de Jira para gestión de requerimientos.",
        "Implementación de UI/UX siguiendo lineamientos corporativos estrictos.",
      ],
      color: "border-emerald-500/30 bg-emerald-950/10",
      hoverColor: "hover:border-emerald-500/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]",
      dot: "bg-emerald-500",
      tech: ["React", "Node.js", "Jira API"]
    },
    {
      id: 2,
      role: "Frontend Developer & Consultor",
      company: "MV & ABOGADOS",
      date: "Ene 2025 - Sep 2025",
      location: "Lima, PE",
      description: [
        "Desarrollo de landing page (Next.js) orientada a retención y conversión.",
        "Estrategia SEO on-page y campañas de Meta/Google Ads integradas.",
        "Implementación de analítica avanzada con Google Analytics 4 (ROI +45%).",
      ],
      color: "border-gray-500/30 bg-gray-900/40",
      hoverColor: "hover:border-gray-500/60 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]",
      dot: "bg-gray-500",
      tech: ["Next.js", "SEO", "Google Ads"]
    }
  ];

  return (
    <section id="experiencia" className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
      
      {/* TÍTULO ESTILO TERMINAL */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16 flex items-center gap-3 font-mono"
      >
        <span className="text-emerald-500 text-xl">➜</span>
        <span className="text-gray-300 text-xl">~/career</span>
        <span className="text-gray-500 text-xl">/history</span>
        <span className="animate-pulse bg-emerald-500/50 w-2.5 h-5 block ml-1"></span>
      </motion.div>

      {/* CONTENEDOR PRINCIPAL */}
      <div className="relative ml-3 md:ml-4 pb-12">
        
        {/* LINEA DEL TIMELINE ANIMADA */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-0 top-2 w-px bg-linear-to-b from-emerald-500/50 via-white/10 to-transparent -z-10"
        />

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative pl-8 md:pl-14 group"
            >
              
              {/* PUNTO CONECTOR ANIMADO */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                className="absolute -left-[8px] top-6 w-4 h-4 rounded-full bg-[#0a0a0a] border border-white/30 z-10 flex items-center justify-center group-hover:border-emerald-500 transition-colors"
                style={{ translateX: "-50%" }} // Centrar perfectamente
              >
                  <div className={`w-1.5 h-1.5 rounded-full ${exp.dot} group-hover:scale-150 transition-transform`} />
              </motion.div>

              {/* TARJETA DE EXPERIENCIA */}
              <div className={`relative flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-2xl border ${exp.color} ${exp.hoverColor} transition-all duration-500 w-full bg-[#111] overflow-hidden`}>
                
                {/* Overlay de hover sutil */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* ICONO */}
                <div className="shrink-0 hidden sm:block relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center mt-1 group-hover:border-emerald-500/30 group-hover:-translate-y-1 transition-all">
                    <Briefcase className="text-gray-400 group-hover:text-emerald-400 transition-colors" size={20} />
                  </div>
                </div>

                {/* INFO */}
                <div className="grow relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-2 border-b border-white/5 pb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-mono text-emerald-400/80 mt-1 uppercase tracking-wider font-bold">
                        @{exp.company}
                      </p>
                    </div>

                    <div className="text-xs text-gray-400 font-mono text-left md:text-right mt-2 md:mt-0">
                      <div className="flex items-center md:justify-end gap-2 group-hover:text-white transition-colors">
                          <Calendar size={12} className="text-emerald-500/50" /> {exp.date}
                      </div>
                      <div className="flex items-center md:justify-end gap-2 mt-2 group-hover:text-white transition-colors">
                          <MapPin size={12} className="text-emerald-500/50" /> {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 font-sans text-gray-400 text-base leading-relaxed">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500/40 shrink-0 block group-hover:bg-emerald-500 transition-colors"></span> 
                        <span className="group-hover:text-gray-300 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-2 flex-wrap">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 text-xs font-mono rounded-lg bg-black text-gray-500 border border-white/5 group-hover:border-emerald-500/20 group-hover:text-gray-400 transition-colors shadow-sm">
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