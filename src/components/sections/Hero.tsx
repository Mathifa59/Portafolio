"use client";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";

export default function Hero() {
  const { lang } = useLang();
  const tr = t[lang].hero;

  return (
    <section
      id="inicio"
      className="min-h-svh flex items-center justify-center px-4 sm:px-6 md:px-12 pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 max-w-7xl mx-auto overflow-hidden relative"
    >
      {/* Luz de fondo animada */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10"
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center w-full mt-10 md:mt-0">

        {/* COLUMNA IZQUIERDA: TEXTO */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 order-2 md:order-1 md:col-span-8">

          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="mb-8 px-5 py-2 border border-emerald-500/30 rounded-full bg-emerald-950/20 text-emerald-400 text-xs md:text-sm font-mono flex items-center gap-3 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {tr.badge}
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              {tr.title}{" "}
              <span className="text-emerald-gradient">{tr.titleHighlight}</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl leading-relaxed"
          >
            {tr.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
          >
            <a
              href="#proyectos"
              className="px-8 py-4 border border-white/10 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto shadow-[0_0_30px_rgba(255,255,255,0.15)] group"
            >
              {tr.ctaPrimary}
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" aria-hidden="true" />
            </a>

            <a
              href="/mathias-vasquez-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto group"
            >
              <Download size={18} className="text-gray-400 group-hover:text-emerald-400 transition-colors" aria-hidden="true" />
              {tr.ctaSecondary}
            </a>
          </motion.div>
        </div>

        {/* COLUMNA DERECHA: FOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="relative flex justify-center md:justify-end z-10 order-1 md:order-2 md:col-span-4"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80"
          >
            {/* Anillo decorativo */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-dashed border-emerald-500/20 rounded-full -z-20"
              aria-hidden="true"
            />

            {/* Panel de cristal */}
            <div
              className="absolute inset-0 border border-white/10 rounded-2xl rotate-6 scale-105 bg-white/5 backdrop-blur-3xl -z-10 shadow-2xl transition-transform duration-500 hover:rotate-12"
              aria-hidden="true"
            />

            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 bg-[#0a0a0a] group shadow-[0_0_50px_rgba(16,185,129,0.1)]">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none mix-blend-multiply" aria-hidden="true" />

              <Image
                src="/images/MathiasVasquez.jpg"
                alt="Mathias Vasquez, Full Stack Developer"
                fill
                priority
                sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 320px"
                className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />

              {/* Reflejo de luz */}
              <div
                className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
