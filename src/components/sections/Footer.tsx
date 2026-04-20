"use client";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/mathias-vasquez/", 
      icon: <Linkedin size={18} />,
      color: "hover:text-[#0a66c2]",
      isMail: false
    },
    { 
      name: "GitHub", 
      href: "https://github.com/Mathifa59", 
      icon: <Github size={18} />,
      color: "hover:text-white",
      isMail: false
    },
    { 
      name: "Email", 
      href: "mailto:mathiwen519@gmail.com",
      icon: <Mail size={18} />,
      color: "hover:text-emerald-500",
      isMail: true
    },
  ];

  return (
    <footer className="relative pt-10 pb-10 px-4 sm:px-6 md:px-12 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs sm:text-sm text-gray-500 text-center">
          <p className="font-mono">© {new Date().getFullYear()} Mathias Vasquez</p>
          <span className="hidden md:inline text-gray-700">|</span>
          <p>Diseñado e implementado con Next.js & TailwindCSS</p>
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.isMail ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors group ${link.color}`}
            >
              {link.icon}
              <span className="sr-only sm:not-sr-only">{link.name}</span>
              <ArrowUpRight size={14} className="opacity-0 -ml-1 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
        
      </div>
    </footer>
  );
}