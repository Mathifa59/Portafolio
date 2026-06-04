"use client";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";

export default function Process() {
  const { lang } = useLang();
  const tr = t[lang].process;

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">

      <div className="mb-14 text-center md:text-left">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
        >
          {tr.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-gray-400 text-lg max-w-xl"
        >
          {tr.subheading}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tr.steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="group relative flex flex-col p-7 rounded-2xl bg-[#111] border border-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(16,185,129,0.08)] overflow-hidden"
          >
            {/* Número de fondo decorativo */}
            <span
              className="absolute -top-4 -right-2 text-8xl font-bold text-white/[0.03] select-none pointer-events-none font-mono"
              aria-hidden="true"
            >
              {step.number}
            </span>

            {/* Indicador de paso */}
            <span className="mb-5 text-xs font-mono font-bold text-emerald-500 uppercase tracking-widest">
              {step.number}
            </span>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
              {step.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              {step.description}
            </p>

            {/* Conector a la siguiente tarjeta */}
            {i < tr.steps.length - 1 && (
              <div
                className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px bg-emerald-500/30 z-10"
                aria-hidden="true"
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
