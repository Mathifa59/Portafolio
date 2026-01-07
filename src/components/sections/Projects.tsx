"use client";
import { motion } from "framer-motion";
import { projects, Project } from "@/data/projects"; 
import { ExternalLink, ArrowRight, Rocket } from "lucide-react"; // Importamos Rocket para el icono de startup
import Image from "next/image";

export default function Projects() {
  // Filtramos: DevHorses por un lado, el resto por otro
  const startupProject = projects.find(p => p.title.includes("DevHorses")) || projects[0];
  const freelanceProjects = projects.filter(p => p.id !== startupProject.id);

  return (
    <section id="proyectos" className="py-10 px-6 md:px-12 max-w-7xl mx-auto">
      
      {/* --- SECCIÓN 1: MI STARTUP (PROTAGONISTA) --- */}
      <div className="mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
            <Rocket className="text-purple-400" size={32} />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Mi Startup
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Liderando la innovación tecnológica y el desarrollo de producto.
            </p>
          </div>
        </motion.div>

        {/* Tarjeta Gigante Exclusiva para la Startup */}
        <FeaturedCard project={startupProject} />
      </div>

      {/* --- SECCIÓN 2: OTROS PROYECTOS (FREELANCE) --- */}
      <div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-10 border-t border-white/10 pt-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
            Portafolio de Proyectos
          </h3>
          <p className="text-gray-400">
            Soluciones web desarrolladas para clientes y empresas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {freelanceProjects.map((project, index) => (
            <StandardCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

    </section>
  );
}

// --- COMPONENTE TARJETA STARTUP (Premium & Grande) ---
function FeaturedCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative group rounded-4x1 overflow-hidden border border-purple-500/20 bg-slate-900/40 shadow-2xl shadow-purple-900/20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 min-h-112.5">
        
        {/* Lado Izquierdo: Info (3 columnas) */}
        <div className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-center relative z-20 bg-slate-900/60 backdrop-blur-sm lg:border-r border-white/5">
          <div className="mb-6">
             <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-purple-600 text-white shadow-lg shadow-purple-500/30 tracking-wide uppercase">
               {project.role}
             </span>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-purple-300 transition-all">
            {project.title}
          </h3>
          
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.tech.map((t) => (
              <span key={t} className="text-xs font-semibold px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg border border-white/5">
                {t}
              </span>
            ))}
          </div>

          <div>
            <a 
              href={project.link} 
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-purple-50 transition-colors shadow-lg hover:shadow-purple-500/20 group/btn"
            >
              Visitar Sitio Oficial 
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Lado Derecho: Imagen (3 columnas) */}
        <div className="lg:col-span-3 relative h-64 lg:h-auto overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent z-10 lg:bg-linear-to-l" />
          <Image 
            src={project.image} 
            alt={project.title} 
            fill
            className="object-cover object-top-left group-hover:scale-105 transition-transform duration-1000"
          />
        </div>

      </div>
    </motion.div>
  );
}

// --- COMPONENTE TARJETA FREELANCE (Standard) ---
function StandardCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col h-full"
    >
      {/* Imagen */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
        <Image 
          src={project.image} 
          alt={project.title} 
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Botón flotante */}
        <div className="absolute top-4 right-4 z-20">
            <a href={project.link} target="_blank" className="p-3 bg-slate-950/80 backdrop-blur-md rounded-full text-white hover:text-cyan-400 border border-white/10 transition-colors block">
                <ExternalLink size={20} />
            </a>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col grow">
        <div className="mb-4">
            <h4 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
            <span className="text-xs font-bold text-cyan-500 uppercase tracking-wider">{project.role}</span>
        </div>
        
        <p className="text-gray-400 text-sm mb-6 6grow leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
           {project.tech.map((t) => (
              <span key={t} className="text-[10px] font-medium px-2 py-1 rounded bg-slate-800 text-gray-400 border border-slate-700">
                {t}
              </span>
           ))}
        </div>
      </div>
    </motion.div>
  );
}