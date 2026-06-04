"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";

export default function Testimonials() {
  const { lang } = useLang();
  const tr = t[lang].testimonials;

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tr.items.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="group flex flex-col p-8 rounded-2xl bg-[#111] border border-white/10 hover:border-emerald-500/20 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(16,185,129,0.07)] relative overflow-hidden"
          >
            {/* Glow hover */}
            <div
              className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              aria-hidden="true"
            />

            {/* Icono de cita */}
            <Quote
              size={28}
              className="text-emerald-500/30 mb-6 shrink-0"
              aria-hidden="true"
            />

            {/* Texto */}
            <blockquote className="text-gray-300 text-base leading-relaxed mb-8 flex-1 italic">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Autor */}
            <footer className="flex items-center gap-3 pt-6 border-t border-white/10">
              {/* Avatar generado con iniciales */}
              <div
                className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <span className="text-emerald-400 text-sm font-bold font-mono">
                  {testimonial.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{testimonial.author}</p>
                <p className="text-gray-500 text-xs font-mono mt-0.5">{testimonial.role}</p>
              </div>
            </footer>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
