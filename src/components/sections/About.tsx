"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};

const technologies = [
  { name: "React", src: "/images/react.svg" },
  { name: "Next.js", src: "/images/nextjs.svg" },
  { name: "Tailwind", src: "/images/tailwindcss.svg" },
  { name: "TypeScript", src: "/images/typescript.svg" },
  { name: "Node.js", src: "/images/nodejs.svg" },
  { name: "Python", src: "/images/python.svg" },
  { name: "Docker", src: "/images/docker.svg" },
  { name: "Figma", src: "/images/figma.svg" },
];

export default function About() {
  const { lang } = useLang();
  const tr = t[lang].about;

  return (
    <section
      id="sobre-mi"
      className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* COLUMNA BIO */}
        <div className="space-y-10 order-2 md:order-1 relative">

          <div
            className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] -z-10 pointer-events-none"
            aria-hidden="true"
          />

          <div className="space-y-3 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
            >
              {tr.heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg font-mono text-emerald-400 font-medium tracking-wide"
            >
              {tr.subtitle}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-400 space-y-6 text-lg leading-relaxed md:text-left font-sans"
          >
            <p>
              {tr.bio1.split("Mathias Vasquez").map((part, i) =>
                i === 0 ? (
                  <span key={i}>
                    {part}
                    <strong className="text-white font-medium">Mathias Vasquez</strong>
                  </span>
                ) : (
                  <span key={i}>
                    {part.split("DevHorses").map((p2, j) =>
                      j === 0 ? (
                        <span key={j}>
                          {p2}
                          <span className="text-emerald-400 font-medium">DevHorses</span>
                        </span>
                      ) : (
                        <span key={j}>{p2}</span>
                      )
                    )}
                  </span>
                )
              )}
            </p>
            <p className="p-5 bg-white/5 border border-white/10 rounded-2xl shadow-inner text-gray-300">
              {tr.bio2.split("resolución de problemas arquitectónicos").map((part, i) =>
                i === 0 ? (
                  <span key={i}>
                    {part}
                    <strong className="text-emerald-400 font-medium">
                      resolución de problemas arquitectónicos
                    </strong>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </p>
            <p>{tr.bio3}</p>
          </motion.div>
        </div>

        {/* COLUMNA STACK */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2"
        >
          <div className="bg-[#111] border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-default">
            <div
              className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] -z-10 group-hover:bg-emerald-500/10 transition-colors duration-1000 translate-x-1/2 -translate-y-1/2"
              aria-hidden="true"
            />

            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-emerald-500 rounded-full animate-pulse" aria-hidden="true" />
              {tr.stackTitle}
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
            >
              {technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                  className="flex flex-col items-center justify-center p-5 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-300 group/tech relative overflow-hidden shadow-lg"
                >
                  <div
                    className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover/tech:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  <div className="mb-3 w-10 h-10 flex items-center justify-center relative z-10">
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="object-contain opacity-60 group-hover/tech:opacity-100 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 grayscale group-hover/tech:grayscale-0"
                    />
                  </div>
                  <span className="text-xs font-mono text-gray-500 group-hover/tech:text-emerald-300 transition-colors relative z-10 w-full text-center truncate">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
