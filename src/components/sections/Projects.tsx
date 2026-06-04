"use client";
import { motion, Variants } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { ExternalLink, ArrowRight, Code2, LineChart, Target, CheckCircle2, FlaskConical } from "lucide-react";
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

  const featured   = projects.find((p) => p.isFeatured);
  const realOthers = projects.filter((p) => !p.isFeatured && !p.isDemo);
  const demos      = projects.filter((p) => p.isDemo);

  return (
    <section id="proyectos" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">

      {/* Encabezado */}
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

      {/* ── 1. PROYECTO DESTACADO ── */}
      {featured && (
        <div className="mb-24">
          <SectionLabel
            icon={<CheckCircle2 size={16} aria-hidden="true" />}
            label={tr.featuredLabel}
            color="emerald"
          />
          <FeaturedCard project={featured} tr={tr} />
        </div>
      )}

      {/* ── 2. OTROS CLIENTES REALES ── */}
      {realOthers.length > 0 && (
        <div className="mb-24">
          <SectionLabel
            icon={<CheckCircle2 size={16} aria-hidden="true" />}
            label={tr.realClientsTitle}
            color="emerald"
          />
          <p className="text-gray-500 text-sm mb-8 border-b border-white/10 pb-4">
            {tr.realClientsSub}
          </p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {realOthers.map((p) => (
              <RealClientCard key={p.id} project={p} tr={tr} />
            ))}
          </motion.div>
        </div>
      )}

      {/* ── 3. DEMOS ── */}
      {demos.length > 0 && (
        <div>
          {/* Cabecera con aviso */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
            <SectionLabel
              icon={<FlaskConical size={16} aria-hidden="true" />}
              label={tr.demosTitle}
              color="yellow"
            />
            <p className="text-xs font-mono text-yellow-500/70 bg-yellow-500/5 border border-yellow-500/20 rounded-full px-3 py-1 w-fit">
              {tr.demosSub}
            </p>
          </div>
          <div className="h-px bg-yellow-500/10 mb-8" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {demos.map((p) => (
              <DemoCard key={p.id} project={p} tr={tr} />
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
}

/* ─── Etiqueta de sección ─── */
function SectionLabel({
  icon,
  label,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  color: "emerald" | "yellow";
}) {
  const styles = {
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    yellow:  "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  };
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-bold uppercase tracking-widest mb-6 ${styles[color]}`}
    >
      {icon}
      {label}
    </div>
  );
}

/* ─── Card Destacada (Selekta) ─── */
function FeaturedCard({ project, tr }: { project: Project; tr: ProjectsTr }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group rounded-3xl overflow-hidden bg-[#111] border border-emerald-500/20 shadow-2xl relative hover:border-emerald-500/40 hover:shadow-[0_0_50px_rgba(16,185,129,0.12)] transition-all duration-500"
    >
      <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-500/60 to-transparent" aria-hidden="true" />

      <div className="grid grid-cols-1 xl:grid-cols-2">

        {/* Info */}
        <div className="p-8 md:p-14 flex flex-col justify-center border-b xl:border-b-0 xl:border-r border-white/10 relative z-10">

          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-white/5 text-emerald-400 border border-emerald-500/20 uppercase tracking-widest">
              {project.role}
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-widest flex items-center gap-1.5">
              <CheckCircle2 size={10} aria-hidden="true" /> {tr.badgeReal}
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-emerald-200 transition-all duration-500">
            {project.title}
          </h3>

          <div className="space-y-6 mb-10">
            <motion.div whileHover={{ x: 5 }} className="transition-transform">
              <h4 className="flex items-center gap-2 text-xs font-bold text-gray-300 mb-3 uppercase tracking-widest">
                <Target size={14} className="text-red-400" aria-hidden="true" /> {tr.problem}
              </h4>
              <p className="text-gray-400 text-base leading-relaxed">{project.problem}</p>
            </motion.div>

            <motion.div whileHover={{ x: 5 }} className="transition-transform">
              <h4 className="flex items-center gap-2 text-xs font-bold text-gray-300 mb-3 uppercase tracking-widest">
                <Code2 size={14} className="text-blue-400" aria-hidden="true" /> {tr.solution}
              </h4>
              <p className="text-gray-400 text-base leading-relaxed">{project.solution}</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }} className="p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl transition-transform">
              <h4 className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-2 uppercase tracking-widest">
                <LineChart size={14} aria-hidden="true" /> {tr.result}
              </h4>
              <p className="text-emerald-50 text-base font-medium">{project.result}</p>
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech) => (
              <span key={tech} className="text-xs font-mono px-3 py-1.5 bg-black text-gray-300 rounded-md border border-white/10">
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
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </div>

        {/* Imagen */}
        <div className="relative h-64 xl:h-auto overflow-hidden bg-[#050505] p-6 md:p-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent z-10 pointer-events-none xl:hidden" aria-hidden="true" />
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 transition-all duration-700 group-hover:scale-105 group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.2)] group-hover:-rotate-1 z-0">
            <Image
              src={project.image}
              alt={`Captura de pantalla — ${project.title}`}
              fill
              sizes="(max-width: 1280px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}

/* ─── Card Cliente Real (sin highlight) ─── */
function RealClientCard({ project, tr }: { project: Project; tr: ProjectsTr }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group flex flex-col rounded-3xl bg-[#111] border border-white/10 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden h-full shadow-lg hover:shadow-[0_10px_40px_rgba(16,185,129,0.1)] relative"
    >
      <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />

      {/* Imagen */}
      <div className="relative h-44 sm:h-52 w-full overflow-hidden border-b border-white/10">
        <Image
          src={project.image}
          alt={`Captura de pantalla — ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#111] via-transparent to-transparent" aria-hidden="true" />
      </div>

      <div className="p-6 sm:p-8 flex flex-col h-full relative z-10">
        <div className="flex justify-between items-start mb-5">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">{project.role}</span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-widest flex items-center gap-1">
                <CheckCircle2 size={9} aria-hidden="true" /> {tr.badgeReal}
              </span>
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

        <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">{project.description}</p>

        <div className="mt-auto mb-6 p-4 bg-emerald-500/5 border border-emerald-500/15 rounded-xl">
          <p className="text-sm text-gray-300">
            <strong className="text-emerald-400">{tr.impact}:</strong> {project.result}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
          {project.tech.map((tech) => (
            <span key={tech} className="text-xs font-mono text-gray-500 px-2 py-1 bg-black rounded border border-white/5">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Card Demo (muted, compacta) ─── */
function DemoCard({ project, tr }: { project: Project; tr: ProjectsTr }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group flex flex-col rounded-2xl bg-[#0d0d0d] border border-white/5 hover:border-yellow-500/20 transition-all duration-500 overflow-hidden h-full relative opacity-75 hover:opacity-100"
    >
      {/* Imagen pequeña */}
      <div className="relative h-32 w-full overflow-hidden border-b border-white/5">
        <Image
          src={project.image}
          alt={`Demo — ${project.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0d0d0d] via-black/30 to-transparent" aria-hidden="true" />

        {/* Badge flotante */}
        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 uppercase tracking-widest flex items-center gap-1">
          <FlaskConical size={8} aria-hidden="true" /> {tr.badgeDemo}
        </span>
      </div>

      <div className="p-5 flex flex-col h-full relative z-10">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-base font-bold text-gray-400 group-hover:text-white transition-colors break-words pr-2">
            {project.title}
          </h3>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver demo — ${project.title}`}
            className="p-2 bg-white/5 rounded-full text-gray-600 hover:text-yellow-400 hover:bg-yellow-500/10 transition-all shrink-0"
          >
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>

        <p className="text-gray-600 text-xs mb-4 leading-relaxed group-hover:text-gray-500 transition-colors line-clamp-3">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
          {project.tech.map((tech) => (
            <span key={tech} className="text-[10px] font-mono text-gray-700 px-2 py-0.5 bg-black rounded border border-white/5 group-hover:text-gray-600 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
