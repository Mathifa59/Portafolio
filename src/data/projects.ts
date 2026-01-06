export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "DevHorses Startup",
    description: "Landing page para agencia de freelancers tecnológicos. Incluye animaciones y formulario de contacto.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "#",
    github: "#",
    image: "",
    category: "Startup"
  },
  {
    id: 2,
    title: "Hotel SUMAQ",
    description: "Plataforma web para hotel en Cusco con sistema de reservas vía EmailJS.",
    tech: ["React", "EmailJS", "CSS Modules"],
    link: "#",
    github: "#",
    image: "",
    category: "Freelance"
  }
];