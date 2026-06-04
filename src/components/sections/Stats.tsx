"use client";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";

export default function Stats() {
  const { lang } = useLang();
  const tr = t[lang].stats;

  return (
    <section
      aria-label={tr.heading}
      className="py-12 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="relative rounded-3xl border border-white/10 bg-[#111] overflow-hidden p-8 md:p-12">
        {/* Glow de fondo */}
        <div
          className="absolute inset-0 bg-linear-to-br from-emerald-500/5 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-500/40 to-transparent"
          aria-hidden="true"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
          {tr.items.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <span className="text-4xl sm:text-5xl font-bold text-emerald-gradient mb-2 tabular-nums">
                {stat.value}
              </span>
              <span className="text-sm text-gray-400 font-mono leading-snug group-hover:text-gray-300 transition-colors">
                {stat.label}
              </span>

              {/* Divisor vertical entre columnas (excepto la última) */}
              {i < tr.items.length - 1 && (
                <div
                  className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10"
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
