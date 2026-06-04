"use client";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Loader2, Calendar, Phone } from "lucide-react";
import { useState, useId } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";

export default function Contact() {
  const { lang } = useLang();
  const tr = t[lang].contact;
  const formId = useId();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append("access_key", "75650892-05e1-4e7b-802d-796b232c1420");
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);
      form.append("subject", `Nuevo mensaje de ${formData.name} desde tu portafolio`);
      // Honeypot anti-spam (Web3Forms lo soporta)
      form.append("botcheck", "");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 4000);
    }
  };

  return (
    <section
      id="contacto"
      className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* COLUMNA IZQUIERDA */}
        <div className="space-y-10">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              {tr.heading}{" "}
              <span className="text-emerald-500">{tr.headingHighlight}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg leading-relaxed max-w-lg"
            >
              {tr.description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <ContactItem
              icon={<Mail size={20} aria-hidden="true" />}
              label={tr.emailLabel}
              content={
                <a
                  href="mailto:mathiwen519@gmail.com"
                  className="text-white font-medium hover:text-emerald-400 transition-colors"
                >
                  mathiwen519@gmail.com
                </a>
              }
            />

            <ContactItem
              icon={<Phone size={20} aria-hidden="true" />}
              label={tr.phoneLabel}
              content={
                <a
                  href="https://wa.me/51981916198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:text-emerald-400 transition-colors"
                >
                  +51 981 916 198
                </a>
              }
            />

            <ContactItem
              icon={<MapPin size={20} aria-hidden="true" />}
              label={tr.locationLabel}
              content={<p className="text-white font-medium">{tr.location}</p>}
            />

            <ContactItem
              icon={<Calendar size={20} aria-hidden="true" />}
              label={tr.availabilityLabel}
              content={
                <p className="text-emerald-400 font-medium flex items-center gap-2">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  {tr.availability}
                </p>
              }
            />
          </motion.div>
        </div>

        {/* COLUMNA DERECHA: FORMULARIO */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-[#111] border border-white/10 p-6 sm:p-8 md:p-10 rounded-2xl relative overflow-hidden"
          >
            <div
              className="absolute top-0 right-0 w-full h-px bg-linear-to-r from-transparent via-emerald-500/50 to-transparent"
              aria-hidden="true"
            />

            {/* Honeypot anti-spam oculto */}
            <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" tabIndex={-1} readOnly />

            <div className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor={`${formId}-name`} className="text-sm font-medium text-gray-400">
                    {tr.nameField}
                  </label>
                  <input
                    type="text"
                    id={`${formId}-name`}
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-hidden focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all font-mono text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor={`${formId}-email`} className="text-sm font-medium text-gray-400">
                    {tr.emailField}
                  </label>
                  <input
                    type="email"
                    id={`${formId}-email`}
                    name="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-hidden focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all font-mono text-sm"
                    placeholder="john@empresa.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor={`${formId}-message`} className="text-sm font-medium text-gray-400">
                  {tr.messageField}
                </label>
                <textarea
                  id={`${formId}-message`}
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-hidden focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none font-mono text-sm"
                  placeholder={tr.messagePlaceholder}
                />
              </div>

              {/* Región live para feedback de accesibilidad */}
              <div aria-live="polite" aria-atomic="true" className="sr-only">
                {submitStatus === "success" && tr.sent}
                {submitStatus === "error" && "Error al enviar. Intenta nuevamente."}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed active:scale-95"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                    {tr.sending}
                  </>
                ) : submitStatus === "success" ? (
                  <span className="text-emerald-700">{tr.sent}</span>
                ) : (
                  <>
                    {tr.submit}
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      aria-hidden="true"
                    />
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  content,
}: {
  icon: React.ReactNode;
  label: string;
  content: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 group cursor-default">
      <div className="w-12 h-12 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors text-gray-400 group-hover:text-emerald-500 shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500 font-mono mb-1">{label}</p>
        {content}
      </div>
    </div>
  );
}
