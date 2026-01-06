export interface Project {
  id: number;
  title: string;
  role: string; // Nuevo campo para especificar tu rol
  description: string;
  tech: string[];
  link: string;
  github?: string; // Opcional por si es privado
  image: string;
  isFeatured?: boolean; // Para saber cuál destacar
}

export const projects: Project[] = [
  {
    id: 1,
    title: "DevHorses Startup",
    role: "Co-Founder & CTO",
    description: "Startup de desarrollo de software enfocada en soluciones digitales escalables. Lidero el equipo técnico transformando ideas en productos de alto impacto.",
    tech: ["Next.js", "React", "Tailwind", "Team Leadership"],
    link: "https://devhorses.com", // Cambia esto si tienes la URL exacta
    image: "/images/devhorses.png",
    isFeatured: true // ESTE ES EL PROYECTO DESTACADO
  },
  {
    id: 2,
    title: "Apu Garden Lodge",
    role: "Frontend Developer",
    description: "Sitio web turístico para un hotel en Cusco. Diseño inmersivo enfocado en la experiencia del usuario y sistema de reservas directo.",
    tech: ["React", "Tailwind", "UX/UI"],
    link: "https://apugardenlodge.com/", // Link actualizado
    image: "/images/sumaq-hotel.png",
    isFeatured: false
  },
  {
    id: 3,
    title: "MV & Abogados",
    role: "Full Stack Developer",
    description: "Plataforma web corporativa para firma legal. Optimización SEO, integración con CRM y diseño profesional para captación de clientes.",
    tech: ["Next.js", "WordPress", "Analytics"],
    link: "#", // <--- Pega aquí el link cuando lo tengas
    image: "/images/devhorses.png", // Usa una imagen genérica o sube el logo del estudio
    isFeatured: false
  }
];