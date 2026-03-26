"use client";
import { motion, Variants } from "framer-motion";
import { projects, Project } from "@/data/projects"; 
import { ExternalLink, ArrowRight, Code2, LineChart, Target } from "lucide-react";
import Image from "next/image";

// Variantes para la animación en cascada (Stagger)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export default function Projects() {
  const featuredProject = projects.find(p => p.isFeatured) || projects[0];
  const standardProjects = projects.filter(p => !p.isFeatured);

  return (
    <section id="proyectos" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      
      <div className="mb-16">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
        >
          Trabajo Destacado
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl leading-relaxed"
        >
          Sistemas construidos para resolver cuellos de botella reales y generar crecimiento cuantificable en los negocios.
        </motion.p>
      </div>

      {/* --- SECCIÓN 1: PROYECTO PRINCIPAL (CON VERDADERO ROI) --- */}
      <div className="mb-24">
        <FeaturedCard project={featuredProject} />
      </div>

      {/* --- SECCIÓN 2: OTROS PROYECTOS --- */}
      <div>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-white mb-10 border-b border-white/10 pb-4"
        >
          Más Proyectos
        </motion.h3>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {standardProjects.map((project) => (
            <StandardCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>

    </section>
  );
}

// --- COMPONENTE TARJETA DESTACADA (Enfocada en negocio) ---
function FeaturedCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group rounded-3xl overflow-hidden bg-[#111] border border-white/10 shadow-2xl relative"
    >
      <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="grid grid-cols-1 xl:grid-cols-2">
        
        {/* Lado Izquierdo: Info */}
        <div className="p-8 md:p-14 flex flex-col justify-center border-b xl:border-b-0 xl:border-r border-white/10 relative z-10">
          
          <div className="flex items-center gap-3 mb-8">
             <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-white/5 text-emerald-400 uppercase tracking-widest border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
               {project.role}
             </span>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-emerald-200 transition-all duration-500">
            {project.title}
          </h3>
          
          {/* Bloques de Problema/Solución/Resultado */}
          <div className="space-y-8 mb-12">
            <motion.div whileHover={{ x: 5 }} className="transition-transform">
              <h4 className="flex items-center gap-2 text-sm font-bold text-gray-300 mb-3 uppercase tracking-wide">
                <Target size={18} className="text-red-400" /> El Problema
              </h4>
              <p className="text-gray-400 text-base leading-relaxed">{project.problem}</p>
            </motion.div>
            
            <motion.div whileHover={{ x: 5 }} className="transition-transform">
              <h4 className="flex items-center gap-2 text-sm font-bold text-gray-300 mb-3 uppercase tracking-wide">
                <Code2 size={18} className="text-blue-400" /> La Solución
              </h4>
              <p className="text-gray-400 text-base leading-relaxed">{project.solution}</p>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} className="p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl transition-transform">
              <h4 className="flex items-center gap-2 text-sm font-bold text-emerald-400 mb-2 uppercase tracking-wide">
                <LineChart size={18} /> El Resultado
              </h4>
              <p className="text-emerald-50 text-base font-medium">{project.result}</p>
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10 mt-auto">
            {project.tech.map((t) => (
              <span key={t} className="text-xs font-mono px-3 py-1.5 bg-black text-gray-300 rounded-md border border-white/10">
                {t}
              </span>
            ))}
          </div>

          <div>
            <a 
              href={project.link} 
              target="_blank"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black text-sm font-bold rounded-xl hover:bg-emerald-50 transition-colors group/btn"
            >
              Ver sitio en vivo
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Lado Derecho: Imagen */}
        <div className="relative h-[400px] xl:h-auto overflow-hidden bg-[#050505] p-6 md:p-12 flex items-center justify-center">
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none xl:hidden" />
            
            {/* Contenedor de "dispositivo" para la imagen con perspectiva 3D al hover */}
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 transition-all duration-700 group-hover:scale-105 group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] group-hover:-rotate-1 z-0">
                <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover object-top"
                />
            </div>
        </div>

      </div>
    </motion.div>
  );
}

// --- COMPONENTE TARJETA ESTÁNDAR ---
function StandardCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group flex flex-col rounded-3xl bg-[#111] border border-white/10 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden h-full shadow-lg hover:shadow-[0_10px_40px_rgba(16,185,129,0.1)] relative"
    >
      <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
        <div className="flex justify-between items-start mb-8">
            <div>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-4 block">
                    {project.role}
                </span>
                <h4 className="text-2xl font-bold text-white truncate pr-4 group-hover:text-emerald-300 transition-colors">
                    {project.title}
                </h4>
            </div>
            <a href={project.link} target="_blank" className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-emerald-500 hover:rotate-12 transition-all shrink-0">
                <ExternalLink size={20} />
            </a>
        </div>
        
        <p className="text-gray-400 text-base mb-8 leading-relaxed">
          {project.description}
        </p>

        {/* Highlight Result if available */}
        <div className="mb-8 mt-auto p-4 bg-white/5 border border-white/10 rounded-xl group-hover:bg-emerald-500/5 group-hover:border-emerald-500/20 transition-colors">
            <p className="text-sm text-gray-300"><strong className="text-white">Impacto:</strong> {project.result}</p>
        </div>

        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
           {project.tech.map((t) => (
              <span key={t} className="text-xs font-mono text-gray-500 px-2 py-1 bg-black rounded border border-white/5">
                {t}
              </span>
           ))}
        </div>
      </div>
    </motion.div>
  );
}