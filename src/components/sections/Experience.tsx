"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowRight, Rocket } from "lucide-react";
import Image from "next/image";

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
    tech: ["React", "Node.js", "Jira API"],
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
    tech: ["Next.js", "SEO", "Google Ads"],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-4xl mx-auto">

      {/* Título estilo terminal */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16 flex items-center gap-3 font-mono"
        aria-label="Historial de carrera"
      >
        <span className="text-emerald-500 text-xl" aria-hidden="true">➜</span>
        <span className="text-gray-300 text-xl">~/career</span>
        <span className="text-gray-500 text-xl">/history</span>
        <span className="animate-pulse bg-emerald-500/50 w-2.5 h-5 block ml-1" aria-hidden="true" />
      </motion.div>

      {/* ── CARD DESTACADA: DevHorses ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-20 group rounded-3xl overflow-hidden bg-[#111] border border-blue-500/20 shadow-2xl relative hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] transition-all duration-500"
      >
        {/* Glow de fondo */}
        <div
          className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />
        {/* Línea superior de acento */}
        <div
          className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 xl:grid-cols-2">

          {/* Lado izquierdo: info */}
          <div className="p-8 md:p-12 flex flex-col justify-center border-b xl:border-b-0 xl:border-r border-white/10 relative z-10">

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">
                Co-Founder &amp; CTO
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-white/5 text-gray-400 border border-white/10 uppercase tracking-widest flex items-center gap-1.5">
                <Rocket size={10} aria-hidden="true" /> Startup propia
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-widest">
                2024 – Actualidad
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-200 transition-colors duration-500">
              DevHorses
            </h3>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Fundé y lidero <span className="text-white font-medium">DevHorses</span>, estudio de ingeniería de software para startups y negocios en LATAM. Arquitectura de sistemas, diseño de bases de datos, pipelines CI/CD y metodología de entrega iterativa con demos semanales.
            </p>

            {/* Logros clave */}
            <ul className="space-y-3 mb-8">
              {[
                "Múltiples productos llevados de concepto a producción.",
                "Reducción del 40% en tiempo de entrega vs. estimaciones de clientes.",
                "Clientes activos en industrias legal, hospitalidad, agro-tech y retail.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/60 shrink-0 group-hover:bg-blue-400 transition-colors" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Next.js", "Node.js", "PostgreSQL", "Docker", "CI/CD"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1.5 bg-black text-gray-300 rounded-md border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="https://horses-landing.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm font-bold rounded-xl hover:bg-blue-500/20 hover:border-blue-400/50 transition-all w-fit group/btn"
            >
              Ver DevHorses
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </div>

          {/* Lado derecho: imagen + stat */}
          <div className="relative h-52 xl:h-auto overflow-hidden bg-[#050505] p-8 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent xl:hidden pointer-events-none z-10"
              aria-hidden="true"
            />
            <div className="relative w-full h-full rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] z-0">
              <Image
                src="/images/dev-horses.png"
                alt="DevHorses — Estudio de ingeniería de software"
                fill
                sizes="(max-width: 1280px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </motion.div>

      {/* ── TIMELINE: experiencia en empresas ── */}
      <div className="relative ml-3 md:ml-4 pb-12">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-0 top-2 w-px bg-linear-to-b from-emerald-500/50 via-white/10 to-transparent -z-10"
          aria-hidden="true"
        />

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative pl-8 md:pl-14 group"
            >
              {/* Punto conector */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                className="absolute -left-[8px] top-6 w-4 h-4 rounded-full bg-[#0a0a0a] border border-white/30 z-10 flex items-center justify-center group-hover:border-emerald-500 transition-colors"
                style={{ translateX: "-50%" }}
                aria-hidden="true"
              >
                <div className={`w-1.5 h-1.5 rounded-full ${exp.dot} group-hover:scale-150 transition-transform`} />
              </motion.div>

              {/* Tarjeta */}
              <div
                className={`relative flex flex-col md:flex-row gap-4 sm:gap-6 p-5 sm:p-6 md:p-8 rounded-2xl border ${exp.color} ${exp.hoverColor} transition-all duration-500 w-full bg-[#111] overflow-hidden`}
              >
                <div
                  className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Icono */}
                <div className="shrink-0 hidden sm:block relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center mt-1 group-hover:border-emerald-500/30 group-hover:-translate-y-1 transition-all">
                    <Briefcase
                      className="text-gray-400 group-hover:text-emerald-400 transition-colors"
                      size={20}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Info */}
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
                        <Calendar size={12} className="text-emerald-500/50" aria-hidden="true" />
                        <time>{exp.date}</time>
                      </div>
                      <div className="flex items-center md:justify-end gap-2 mt-2 group-hover:text-white transition-colors">
                        <MapPin size={12} className="text-emerald-500/50" aria-hidden="true" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 font-sans text-gray-400 text-base leading-relaxed">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500/40 shrink-0 block group-hover:bg-emerald-500 transition-colors"
                          aria-hidden="true"
                        />
                        <span className="group-hover:text-gray-300 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-2 flex-wrap">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-mono rounded-lg bg-black text-gray-500 border border-white/5 group-hover:border-emerald-500/20 group-hover:text-gray-400 transition-colors shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
