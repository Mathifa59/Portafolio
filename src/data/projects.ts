export type ProjectCategory = "business" | "technical";

export interface Project {
  id: number;
  title: string;
  role: string;
  category: ProjectCategory;
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
    category: "business",
    description: "Plataforma web corporativa para firma legal con optimización SEO e integración CRM.",
    problem: "Firma legal con 10+ años de trayectoria pero cero presencia digital. Dependían 100% de referidos boca a boca — sin canal predecible de captación de clientes.",
    solution: "Diseñé una web en Next.js optimizada para Core Web Vitals (LCP < 1.5s), implementé SEO técnico con schema markup legal, y conecté formularios a un CRM con seguimiento automatizado de leads.",
    result: "45% de conversión en formularios de contacto. Primera página de Google en 3 términos locales clave en menos de 8 semanas.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Google Analytics", "SEO"],
    link: "https://mv-abogados.vercel.app/", 
    image: "/images/abogados mini.png",
    isFeatured: true
  },
  {
    id: 2,
    title: "Apu Garden Lodge",
    role: "Frontend Developer",
    category: "business",
    description: "Sistema de reservas directas para hotel boutique en Cusco, eliminando dependencia de OTAs.",
    problem: "Hotel boutique pagando 15-20% de comisión por cada reserva en Booking/Expedia. Sin marca digital propia ni canal de venta directa.",
    solution: "Desarrollé un sitio inmersivo con motor de reservas integrado, pasarela de pagos local e internacional, y UX optimizada para turistas que buscan desde móvil.",
    result: "Canal de venta directa operativo con 0% comisiones. Percepción de marca premium que justifica tarifas más altas.",
    tech: ["React", "Tailwind", "UX/UI", "Pasarela de Pagos"],
    link: "https://apu-garden-lodge.vercel.app/",
    image: "/images/hotel mini.png",
    isFeatured: false
  },
  {
    id: 3,
    title: "E-commerce Retail",
    role: "Full Stack Developer",
    category: "business",
    description: "Tienda online completa con catálogo, carrito y checkout optimizado para conversión.",
    problem: "Negocio retail sin canal de venta digital. Ventas limitadas al tráfico físico y sin forma de escalar fuera de su zona geográfica.",
    solution: "Plataforma e-commerce con catálogo dinámico, filtros inteligentes, carrito persistente y flujo de checkout en 3 pasos diseñado para minimizar abandono.",
    result: "Canal de venta online funcional con experiencia de compra fluida y tiempos de carga < 2s.",
    tech: ["Next.js", "TypeScript", "Tailwind", "E-commerce"],
    link: "https://demo-retail.vercel.app/",
    image: "/images/Mini retail.png",
    isFeatured: false
  },
  {
    id: 4,
    title: "Pastelería & Restaurante",
    role: "Frontend Developer",
    category: "business",
    description: "Web para restaurante-pastelería con menú digital, reservas y pedidos online.",
    problem: "Restaurante con alta demanda presencial pero sin presencia digital para captar nuevos clientes ni gestionar pedidos fuera del local.",
    solution: "Sitio con menú visual interactivo, sistema de pedidos online y reservas integradas. Diseño que transmite la identidad artesanal del negocio.",
    result: "Nuevo canal de pedidos online que reduce carga operativa en mostrador y amplía el alcance del negocio.",
    tech: ["React", "Tailwind", "UX/UI", "Responsive"],
    link: "https://demo-restaurante-pasteleria.vercel.app/",
    image: "/images/mini pasteleria.png",
    isFeatured: false
  },
  {
    id: 5,
    title: "Steakhouse Premium",
    role: "Frontend Developer",
    category: "business",
    description: "Landing page premium para restaurante de carnes con reservas y experiencia inmersiva.",
    problem: "Restaurante de carnes premium sin web que refleje su posicionamiento de alta gama. Perdiendo reservas frente a competidores con mejor presencia digital.",
    solution: "Diseño inmersivo con fotografía de producto, animaciones sutiles y sistema de reservas directo. UX enfocada en transmitir exclusividad y calidad.",
    result: "Presencia digital alineada con el posicionamiento premium. Canal de reservas directo sin intermediarios.",
    tech: ["React", "Tailwind", "Animaciones", "UX/UI"],
    link: "https://demo-restaurante-carnes.vercel.app/",
    image: "/images/mini fuego.png",
    isFeatured: false
  },
  {
    id: 6,
    title: "Gimnasio Fitness",
    role: "Frontend Developer",
    category: "business",
    description: "Plataforma web para gimnasio con planes, horarios y captación de membresías online.",
    problem: "Gimnasio dependiendo solo de walk-ins para nuevas membresías. Sin forma de mostrar instalaciones, planes o captar leads digitalmente.",
    solution: "Web con showcase de instalaciones, comparador de planes, horarios de clases y formulario de captación de leads con seguimiento automatizado.",
    result: "Funnel digital de captación de membresías operativo. Reducción de fricción en el proceso de inscripción.",
    tech: ["React", "Tailwind", "Landing Page", "Lead Gen"],
    link: "https://demo-gimnasio-eight.vercel.app/",
    image: "/images/gimnasio mini.png",
    isFeatured: false
  },
  {
    id: 7,
    title: "DevHorses",
    role: "Co-Founder & CTO",
    category: "technical",
    description: "Agencia de ingeniería de software — arquitectura, MVPs y escalamiento técnico para startups.",
    problem: "Emprendedores con ideas validadas pero sin capacidad técnica para ejecutar: prototipos rotos, deuda técnica desde el día 1, y timelines impredecibles.",
    solution: "Fundé DevHorses como estudio de ingeniería. Lidero la arquitectura de sistemas, diseño de bases de datos y pipelines CI/CD. Metodología de entrega iterativa con demos semanales.",
    result: "Múltiples productos llevados de concepto a producción. Reducción promedio de 40% en tiempo de entrega vs. estimaciones iniciales de clientes.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Docker", "CI/CD"],
    link: "https://horses-landing.vercel.app/", 
    image: "/images/DevHorses.png",
    isFeatured: false
  }
];