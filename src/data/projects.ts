export interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  image: string;
  isFeatured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "DevHorses Startup",
    role: "Co-Founder & CTO",
    description: "Startup de desarrollo de software enfocada en soluciones digitales escalables. Lidero el equipo técnico transformando ideas en productos de alto impacto.",
    tech: ["Next.js", "React", "Tailwind", "Team Leadership"],
    link: "https://horses-landing.vercel.app/", 
    image: "/images/DevHorses.png", // <--- ACTUALIZADO (Coincide con tu archivo)
    isFeatured: true
  },
  {
    id: 2,
    title: "Apu Garden Lodge",
    role: "Frontend Developer",
    description: "Sitio web turístico para un hotel en Cusco. Diseño inmersivo enfocado en la experiencia del usuario y sistema de reservas directo.",
    tech: ["React", "Tailwind", "UX/UI"],
    link: "https://mathifa59.github.io/Sumaq/",
    image: "/images/Apu Garden Lodge.png", // <--- ACTUALIZADO (Con espacios, tal cual tu archivo)
    isFeatured: false
  },
  {
    id: 3,
    title: "MV & Abogados",
    role: "Full Stack Developer",
    description: "Plataforma web corporativa para firma legal. Optimización SEO, integración con CRM y diseño profesional para captación de clientes.",
    tech: ["Next.js", "TypeScript", "Analytics"],
    link: "https://mv-abogados.vercel.app/", 
    // Como no tienes imagen específica para MV, usamos DevHorses o una genérica por ahora
    image: "/images/MVAbogados.png", // <--- ACTUALIZADO (Con espacios, tal cual tu archivo)
    isFeatured: false
  }
];