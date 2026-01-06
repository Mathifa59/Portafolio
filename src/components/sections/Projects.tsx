"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/projects"; 
import { ExternalLink, Github } from "lucide-react";

// Definimos la estructura aquí mismo para evitar problemas de importación si projects.ts falla
interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
  category: string;
}

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 px-8 md:px-20 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3"
      >
        <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
        Proyectos Destacados
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
        {projects.map((project: Project, index: number) => (
          <BentoCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

// Usamos el tipo Project
function BentoCard({ project, index }: { project: Project; index: number }) {
  const isLarge = index === 0 || index === 3; 

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative group overflow-hidden rounded-2xl bg-slate-900 border border-white/5 hover:border-cyan-500/50 transition-colors duration-500 ${isLarge ? "md:col-span-2" : "md:col-span-1"}`}
    >
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-linear-to-t from-slate-950 via-slate-900/50 to-transparent absolute z-10" />
        
        {project.image ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-40" 
            />
        ) : (
            <div className="w-full h-full bg-slate-800" />
        )}
      </div>

      <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
        <div className="flex gap-2 mb-3 flex-wrap">
            {project.tech.map((t) => (
                <span key={t} className="text-xs font-semibold px-2 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-md backdrop-blur-sm">
                    {t}
                </span>
            ))}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex gap-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <a href={project.link} className="flex items-center gap-1 text-sm font-medium hover:text-cyan-400"> <ExternalLink size={16}/> Demo</a>
            <a href={project.github} className="flex items-center gap-1 text-sm font-medium hover:text-cyan-400"> <Github size={16}/> Código</a>
        </div>
      </div>
    </motion.div>
  );
}