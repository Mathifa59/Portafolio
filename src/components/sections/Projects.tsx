"use client";
import { motion, Variants } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { ExternalLink, ArrowRight, Code2, LineChart, Target, Briefcase, Terminal } from "lucide-react";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";
import { t, type Lang } from "@/data/translations";

type ProjectsTr = (typeof t)[Lang]["projects"];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

export default function Projects() {
  const { lang } = useLang();
  const tr = t[lang].projects;

  const featuredProject = projects.find((p) => p.isFeatured) || projects[0];
  const businessProjects = projects.filter((p) => p.category === "business" && !p.isFeatured);
  const technicalProjects = projects.filter((p) => p.category === "technical");

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

      {/* Proyecto principal */}
      <div className="mb-24">
        <FeaturedCard project={featuredProject} tr={tr} />
      </div>

      {/* Soluciones para negocios */}
      {businessProjects.length > 0 && (
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-3 flex items-center gap-3"
          >
            <Briefcase size={22} className="text-emerald-400" aria-hidden="true" />
            {tr.businessTitle}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-sm mb-10 border-b border-white/10 pb-4"
          >
            {tr.businessSub}
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {businessProjects.map((project) => (
              <StandardCard key={project.id} project={project} tr={tr} />
            ))}
          </motion.div>
        </div>
      )}

      {/* Proyectos técnicos */}
      {technicalProjects.length > 0 && (
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-3 flex items-center gap-3"
          >
            <Terminal size={22} className="text-blue-400" aria-hidden="true" />
            {tr.technicalTitle}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-sm mb-10 border-b border-white/10 pb-4"
          >
            {tr.technicalSub}
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {technicalProjects.map((project) => (
              <StandardCard key={project.id} project={project} tr={tr} />
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}

// Badge de Demo / Cliente Real
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

// Tarjeta principal destacada
function FeaturedCard({
  project,
  tr,
}: {
  project: Project;
  tr: ProjectsTr;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group rounded-3xl overflow-hidden bg-[#111] border border-white/10 shadow-2xl relative"
    >
      <div
        className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 xl:grid-cols-2">

        {/* Info */}
        <div className="p-6 sm:p-8 md:p-14 flex flex-col justify-center border-b xl:border-b-0 xl:border-r border-white/10 relative z-10">

          <div className="flex items-center gap-3 mb-6 sm:mb-8 flex-wrap">
            <span className="px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-bold bg-white/5 text-emerald-400 uppercase tracking-widest border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              {project.role}
            </span>
            <ProjectBadge isDemo={project.isDemo} tr={tr} />
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-emerald-200 transition-all duration-500">
            {project.title}
          </h3>

          <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
            <motion.div whileHover={{ x: 5 }} className="transition-transform">
              <h4 className="flex items-center gap-2 text-sm font-bold text-gray-300 mb-3 uppercase tracking-wide">
                <Target size={18} className="text-red-400" aria-hidden="true" />
                {tr.problem}
              </h4>
              <p className="text-gray-400 text-base leading-relaxed">{project.problem}</p>
            </motion.div>

            <motion.div whileHover={{ x: 5 }} className="transition-transform">
              <h4 className="flex items-center gap-2 text-sm font-bold text-gray-300 mb-3 uppercase tracking-wide">
                <Code2 size={18} className="text-blue-400" aria-hidden="true" />
                {tr.solution}
              </h4>
              <p className="text-gray-400 text-base leading-relaxed">{project.solution}</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl transition-transform"
            >
              <h4 className="flex items-center gap-2 text-sm font-bold text-emerald-400 mb-2 uppercase tracking-wide">
                <LineChart size={18} aria-hidden="true" />
                {tr.result}
              </h4>
              <p className="text-emerald-50 text-base font-medium">{project.result}</p>
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10 mt-auto">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1.5 bg-black text-gray-300 rounded-md border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black text-sm font-bold rounded-xl hover:bg-emerald-50 transition-colors group/btn w-fit"
          >
            {tr.liveSite}
            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </div>

        {/* Imagen */}
        <div className="relative h-[250px] sm:h-[350px] xl:h-auto overflow-hidden bg-[#050505] p-4 sm:p-6 md:p-12 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none xl:hidden"
            aria-hidden="true"
          />
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 transition-all duration-700 group-hover:scale-105 group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] group-hover:-rotate-1 z-0">
            <Image
              src={project.image}
              alt={`Captura de pantalla — ${project.title}`}
              fill
              sizes="(max-width: 1280px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}

// Tarjeta estándar
function StandardCard({
  project,
  tr,
}: {
  project: Project;
  tr: ProjectsTr;
}) {
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
      <div className="relative h-40 sm:h-48 w-full overflow-hidden border-b border-white/10">
        <Image
          src={project.image}
          alt={`Captura de pantalla — ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-[#111] via-transparent to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="p-6 sm:p-8 md:p-10 flex flex-col h-full relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                {project.role}
              </span>
              <ProjectBadge isDemo={project.isDemo} tr={tr} />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white pr-4 group-hover:text-emerald-300 transition-colors break-words">
              {project.title}
            </h4>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver ${project.title} en vivo`}
            className="p-3 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-emerald-500 hover:rotate-12 transition-all shrink-0"
          >
            <ExternalLink size={20} aria-hidden="true" />
          </a>
        </div>

        <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
          {project.description}
        </p>

        <div className="mb-6 sm:mb-8 mt-auto p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl group-hover:bg-emerald-500/5 group-hover:border-emerald-500/20 transition-colors">
          <p className="text-xs sm:text-sm text-gray-300">
            <strong className="text-white">{tr.impact}:</strong> {project.result}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
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
