export interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
  link: string;
  github?: string;
  image: string;
  isFeatured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "MV & Abogados",
    role: "Full Stack Developer",
    description: "Plataforma web corporativa para firma legal con optimización SEO e integración CRM.",
    problem: "Firma legal tradicional sin presencia digital efectiva ni canal de captación de clientes online predecible.",
    solution: "Arquitectura Next.js optimizada para Core Web Vitals, estructuración SEO on-page y campañas de Meta/Google Ads integradas con un CRM.",
    result: "45% de tasa de conversión de leads y posicionamiento en primera página de Google para términos locales clave.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Analytics"],
    link: "https://mv-abogados.vercel.app/", 
    image: "/images/MVAbogados.png",
    isFeatured: true
  },
  {
    id: 2,
    title: "Apu Garden Lodge",
    role: "Frontend Developer",
    description: "Plataforma de reservas directas para hotel boutique en Cusco.",
    problem: "Alta dependencia de OTAs (Booking, Expedia) con comisiones del 15-20% por reserva y nula identidad visual propia.",
    solution: "Desarrollo de sitio web inmersivo con sistema de reservas directo, pasarela de pagos y experiencia fluida orientada al turista internacional.",
    result: "Creación de un canal de venta directa libre de comisiones y mejora en la percepción de marca premium.",
    tech: ["React", "Tailwind", "UX/UI"],
    link: "https://mathifa59.github.io/Sumaq/",
    image: "/images/Apu Garden Lodge.png",
    isFeatured: false
  },
  {
    id: 3,
    title: "DevHorses",
    role: "Co-Founder & CTO",
    description: "Agencia de desarrollo de software enfocada en MVPs y escalamiento técnico.",
    problem: "Emprendedores locales con ideas válidas pero incapacidad de ejecutar y escalar productos de software robustos.",
    solution: "Fundé DevHorses para proveer ingeniería como servicio. Lidero la arquitectura, el diseño de bases de datos y la entrega continua de productos.",
    result: "Construcción exitosa de múltiples proyectos para clientes, desde la validación del concepto hasta el despliegue en producción.",
    tech: ["Next.js", "Node.js", "Architecture", "Leadership"],
    link: "https://horses-landing.vercel.app/", 
    image: "/images/DevHorses.png",
    isFeatured: false
  }
];