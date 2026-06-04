"use client";
import { motion, Variants } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";
import { t, type Lang } from "@/data/translations";

type ProjectsTr = (typeof t)[Lang]["projects"];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

export default function Projects() {
  const { lang } = useLang();
  const tr = t[lang].projects;

  return (
    <section id="proyectos" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">

      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
        >
          {tr.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl leading-relaxed"
        >
          {tr.subheading}
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} tr={tr} />
        ))}
      </motion.div>
    </section>
  );
}

// Badge Demo / Cliente Real
function ProjectBadge({ isDemo, tr }: { isDemo?: boolean; tr: ProjectsTr }) {
  if (isDemo) {
    return (
      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 uppercase tracking-widest">
        {tr.badgeDemo}
      </span>
    );
  }
  return (
    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-widest">
      {tr.badgeReal}
    </span>
  );
}

// Tarjeta de proyecto
function ProjectCard({ project, tr }: { project: Project; tr: ProjectsTr }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group flex flex-col rounded-3xl bg-[#111] border border-white/10 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden h-full shadow-lg hover:shadow-[0_10px_40px_rgba(16,185,129,0.1)] relative"
    >
      <div
        className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        aria-hidden="true"
      />

      {/* Miniatura */}
      <div className="relative h-44 sm:h-52 w-full overflow-hidden border-b border-white/10">
        <Image
          src={project.image}
          alt={`Captura de pantalla — ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-[#111] via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="p-6 sm:p-8 flex flex-col h-full relative z-10">

        {/* Cabecera */}
        <div className="flex justify-between items-start mb-5">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                {project.role}
              </span>
              <ProjectBadge isDemo={project.isDemo} tr={tr} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white pr-4 group-hover:text-emerald-300 transition-colors break-words">
              {project.title}
            </h3>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver ${project.title} en vivo`}
            className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-emerald-500 hover:rotate-12 transition-all shrink-0"
          >
            <ExternalLink size={18} aria-hidden="true" />
          </a>
        </div>

        {/* Descripción */}
        <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Resultado */}
        <div className="mt-auto mb-6 p-4 bg-white/5 border border-white/10 rounded-xl group-hover:bg-emerald-500/5 group-hover:border-emerald-500/20 transition-colors">
          <p className="text-sm text-gray-300">
            <strong className="text-white">{tr.impact}:</strong> {project.result}
          </p>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-gray-500 px-2 py-1 bg-black rounded border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
