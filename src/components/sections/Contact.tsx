"use client";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Loader2, Calendar, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  return (
    <section id="contacto" className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* COLUMNA IZQUIERDA: TEXTO E INFO */}
        <div className="space-y-10">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              ¿Tienes un proyecto en mente? <span className="text-emerald-500">Conversemos.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg leading-relaxed max-w-lg"
            >
              Ya sea un rol de ingeniería, una consultoría técnica o un producto que necesita salir al mercado — me interesa escucharte. Sin compromiso, solo una conversación para ver si hay fit.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors">
                <Mail className="text-gray-400 group-hover:text-emerald-500 transition-colors" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-mono mb-1">Email</p>
                <a href="mailto:mathiwen519@gmail.com" className="text-white font-medium hover:text-emerald-400 transition-colors">
                  mathiwen519@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors">
                <Phone className="text-gray-400 group-hover:text-emerald-500 transition-colors" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-mono mb-1">WhatsApp</p>
                <a href="https://wa.me/51981916198" target="_blank" className="text-white font-medium hover:text-emerald-400 transition-colors">
                  +51 981 916 198
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors">
                <MapPin className="text-gray-400 group-hover:text-emerald-500 transition-colors" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-mono mb-1">Base</p>
                <p className="text-white font-medium">Lima, Perú (Disponible remoto)</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors">
                <Calendar className="text-gray-400 group-hover:text-emerald-500 transition-colors" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-mono mb-1">Disponibilidad</p>
                <p className="text-emerald-400 font-medium flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Abierto a nuevas oportunidades
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* COLUMNA DERECHA: FORMULARIO */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="bg-[#111] border border-white/10 p-8 md:p-10 rounded-2xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-full h-1 bg-linear-to-r from-transparent via-emerald-500/50 to-transparent" />

            <div className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-hidden focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all font-mono text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-hidden focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all font-mono text-sm"
                    placeholder="john@empresa.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Mensaje</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-hidden focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none font-mono text-sm"
                  placeholder="Detalles sobre el rol o proyecto..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Enviando...
                  </>
                ) : submitStatus === "success" ? (
                  "¡Mensaje Enviado!"
                ) : (
                  <>
                    Iniciar conversación
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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