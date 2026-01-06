"use client";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // <--- CAMBIO 1: Importamos el componente optimizado

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 md:px-20 py-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        
        {/* COLUMNA IZQUIERDA: TEXTO (Sin cambios) */}
        <div className="flex flex-col items-start z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 px-3 py-1 border border-cyan-500/30 rounded-full bg-cyan-950/30 text-cyan-300 text-sm font-medium"
          >
            Disponible para proyectos 🚀
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Hola, soy <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Mathias Vasquez
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg mb-8 max-w-lg"
          >
            Desarrollador Full Stack transformando ideas en realidad digital. 
            Especialista en React, Next.js y soluciones modernas.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4"
          >
            <Link href="/proyectos" className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:scale-105 transition-transform flex items-center gap-2">
              Ver Mis Trabajos <ArrowRight size={18} />
            </Link>
            
            <div className="flex gap-3">
               <SocialButton href="#" icon={<Github />} />
               <SocialButton href="#" icon={<Linkedin />} />
            </div>
          </motion.div>
        </div>

        {/* COLUMNA DERECHA: FOTO */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center md:justify-end z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full -z-10 transform scale-110" />
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-purple-500 to-transparent">
            {/* CAMBIO 2: Añadimos 'relative' aquí para que Image sepa dónde ubicarse */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-slate-900">
                {/* CAMBIO 3: Usamos el componente Image */}
                <Image 
                  src="/images/MathiasVasquez.jpg" 
                  alt="Mathias Vasquez" 
                  fill // Esto hace que ocupe todo el espacio del padre
                  priority // Esto le dice a Google que cargue esta imagen PRIMERO (Mejora SEO)
                  className="object-cover transform hover:scale-110 transition-transform duration-500" 
                />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function SocialButton({ icon, href }: { icon: React.ReactNode, href: string }) {
    return (
      <a href={href} className="p-3 bg-slate-800/50 border border-white/10 rounded-lg text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all">
        {icon}
      </a>
    )
}