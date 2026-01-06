"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/mathias-vasquez/", 
      icon: <Linkedin size={20} />,
      color: "hover:text-blue-500",
      isMail: false
    },
    { 
      name: "GitHub", 
      href: "https://github.com/Mathifa59", 
      icon: <Github size={20} />,
      color: "hover:text-purple-500",
      isMail: false
    },
    { 
      name: "Email", 
      href: "mailto:mathiwen519@gmail.com", // <--- CORREGIDO: Abre el correo directo
      icon: <Mail size={20} />,
      color: "hover:text-cyan-400",
      isMail: true
    },
  ];

  return (
    <footer className="relative pt-20 pb-10 px-8 md:px-20 border-t border-white/5 bg-slate-950 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white"
          >
            ¿Creamos algo <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">
              increíble?
            </span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-md">
            Siempre estoy abierto a discutir nuevos proyectos, ideas de startups u oportunidades de colaboración.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.isMail ? "_self" : "_blank"} // _self para mailto, _blank para webs
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all group ${link.color}`}
            >
              <span className="flex items-center gap-3 font-medium text-gray-300 group-hover:text-white transition-colors">
                {link.icon}
                {link.name}
              </span>
              <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          ))}
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
        <p>© 2026 Mathias Vasquez. Codeado con Next.js & Tailwind.</p>
      </div>
    </footer>
  );
}