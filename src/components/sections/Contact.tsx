"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Terminal, Copy, Check, ExternalLink, Send } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  // Función exclusiva para COPIAR
  const handleCopy = () => {
    navigator.clipboard.writeText("mathiwen519@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactMethods = [
    {
      key: "email",
      label: "Email",
      value: "mathiwen519@gmail.com",
      action: "mailto:mathiwen519@gmail.com", // <--- AHORA ABRE EL CORREO
      icon: <Mail className="text-cyan-400" size={20} />,
      color: "hover:border-cyan-500/50 hover:bg-cyan-950/20",
      isLink: true, // Esto lo convierte en un enlace real
      btnText: "Enviar Email",
      btnIcon: <Send size={14} />,
      canCopy: true // Propiedad nueva para mostrar el botón de copiar aparte
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      value: "in/mathias-vasquez",
      action: "https://www.linkedin.com/in/mathias-vasquez/",
      icon: <Linkedin className="text-blue-400" size={20} />,
      color: "hover:border-blue-500/50 hover:bg-blue-950/20",
      isLink: true,
      btnText: "Conectar",
      btnIcon: <ExternalLink size={14} />,
      canCopy: false
    },
    {
      key: "github",
      label: "GitHub",
      value: "github.com/Mathifa59",
      action: "https://github.com/Mathifa59",
      icon: <Github className="text-purple-400" size={20} />,
      color: "hover:border-purple-500/50 hover:bg-purple-950/20",
      isLink: true,
      btnText: "Seguir",
      btnIcon: <ExternalLink size={14} />,
      canCopy: false
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 md:px-20 bg-slate-950">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* COLUMNA IZQUIERDA: TEXTO */}
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-sm font-mono mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    Status: Available for work
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
                    Vamos a <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-cyan-500">
                        Hackear el Futuro
                    </span>
                </h2>
                
                <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                    ¿Tienes un proyecto en mente o quieres colaborar en algo innovador? 
                    Mi terminal siempre está abierta para nuevas ideas. Inicialicemos una conversación.
                </p>
            </motion.div>
        </div>

        {/* COLUMNA DERECHA: TERMINAL */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full"
        >
            <div className="rounded-xl overflow-hidden bg-[#0d1117] border border-white/10 shadow-2xl font-mono text-sm">
                
                {/* Header Terminal */}
                <div className="bg-[#161b22] px-4 py-3 flex items-center justify-between border-b border-white/5">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="text-gray-500 text-xs flex items-center gap-2">
                        <Terminal size={12} />
                        contact.tsx — mathias-portfolio
                    </div>
                    <div className="w-10" />
                </div>

                {/* Body Terminal */}
                <div className="p-6 space-y-6">
                    
                    {/* Comando Simulado */}
                    <div className="flex gap-2 text-gray-400">
                        <span className="text-pink-400">$</span>
                        <span className="text-yellow-200">npx</span>
                        <span className="text-white">init-connection</span>
                        <span className="text-gray-500">--with=Mathias</span>
                    </div>

                    {/* Lista de Métodos */}
                    <div className="space-y-3 pl-4 border-l-2 border-white/10">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={method.key}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 + 0.5 }}
                                className={`group p-4 rounded-lg bg-white/5 border border-white/5 transition-all duration-300 ${method.color}`}
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                    {/* Info Izquierda */}
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 rounded-md bg-slate-950 border border-white/10 group-hover:scale-110 transition-transform">
                                            {method.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-0.5">{method.label}</p>
                                            <div className="flex items-center gap-2">
                                                <p className="text-cyan-100 font-medium break-all">{method.value}</p>
                                                
                                                {/* BOTÓN DE COPIADO RÁPIDO (SOLO PARA EMAIL) */}
                                                {method.canCopy && (
                                                    <button 
                                                        onClick={handleCopy}
                                                        className="p-1 hover:bg-white/10 rounded text-gray-500 hover:text-white transition-colors"
                                                        title="Copiar dirección"
                                                    >
                                                        {copied ? <Check size={12} className="text-green-400"/> : <Copy size={12}/>}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Botón de Acción Principal */}
                                    {method.isLink ? (
                                        <a 
                                            href={method.action as string} 
                                            // Si es mailto no usamos target blank, si es web sí.
                                            target={method.key === 'email' ? "_self" : "_blank"}
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-bold hover:bg-cyan-500/20 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                                        >
                                            {method.btnText} {method.btnIcon}
                                        </a>
                                    ) : (
                                        <button 
                                            className="px-4 py-2 rounded-md bg-white/5 text-gray-300 text-xs font-bold hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                                        >
                                            {method.btnText} {method.btnIcon}
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                        <span className="text-green-400">✔</span>
                        <span className="text-gray-500">Connection established successfully.</span>
                        <motion.span 
                            animate={{ opacity: [0, 1, 0] }} 
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="w-2 h-4 bg-cyan-500"
                        />
                    </div>

                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
}