export type Lang = "es" | "en";

export const t = {
  es: {
    navbar: {
      links: [
        { name: "Inicio", href: "#inicio" },
        { name: "Proyectos", href: "#proyectos" },
        { name: "Experiencia", href: "#experiencia" },
        { name: "Sobre mí", href: "#sobre-mi" },
        { name: "Contacto", href: "#contacto" },
      ],
    },
    hero: {
      badge: "Disponible para proyectos & roles",
      title: "De idea a producto en",
      titleHighlight: "semanas, no meses.",
      description:
        "Full Stack Developer & Founder de DevHorses. Diseño arquitecturas en Next.js, Node y TypeScript que ya generan conversiones reales para firmas legales, hoteles y startups en LATAM.",
      ctaPrimary: "Ver casos de éxito",
      ctaSecondary: "Descargar CV",
    },
    stats: {
      heading: "Resultados que hablan",
      items: [
        { value: "7+", label: "Productos en producción" },
        { value: "45%", label: "Conversión promedio" },
        { value: "<2s", label: "Tiempo de carga (LCP)" },
        { value: "4+", label: "Industrias atendidas" },
      ],
    },
    projects: {
      heading: "Trabajo Destacado",
      subheading: "Cada proyecto resuelve un problema real. Aquí está la evidencia.",
      businessTitle: "Soluciones para Negocios",
      businessSub: "Productos que generan ingresos, reducen costos o abren canales de venta.",
      technicalTitle: "Proyectos Técnicos",
      technicalSub: "Arquitectura, liderazgo técnico y sistemas construidos desde cero.",
      liveSite: "Ver sitio en vivo",
      problem: "El Problema",
      solution: "La Solución",
      result: "El Resultado",
      impact: "Impacto",
      badgeReal: "Cliente Real",
      badgeDemo: "Demo",
    },
    experience: {
      terminalPath: "~/career /history",
    },
    about: {
      heading: "Sobre Mí",
      subtitle: "// software_engineer & founder",
      bio1: "Soy Mathias Vasquez — desarrollador full stack y fundador de DevHorses.",
      bio2: "Construyo software que transforma operaciones de negocio: desde sistemas de reservas directas hasta plataformas corporativas con métricas de conversión comprobables. Mi enfoque no se reduce solo al código, sino a la resolución de problemas arquitectónicos y al impacto en el producto final.",
      bio3: "Actualmente combino el desarrollo de software empresarial en Alignet SAC con el liderazgo técnico y operativo en mi propia agencia de desarrollo.",
      stackTitle: "Stack Principal",
    },
    process: {
      heading: "Cómo trabajo",
      subheading: "Un proceso transparente, sin sorpresas a mitad de camino.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description:
            "Reunión de 30 min para entender el problema real, no solo los síntomas. Defino el alcance con honestidad.",
        },
        {
          number: "02",
          title: "Arquitectura",
          description:
            "Propuesta técnica con stack justificado, estimación honesta y roadmap claro antes de escribir una línea.",
        },
        {
          number: "03",
          title: "Sprints semanales",
          description:
            "Demo cada viernes. Feedback integrado el lunes. Sin silos, sin semanas de silencio.",
        },
        {
          number: "04",
          title: "Deploy & Transfer",
          description:
            "El código es tuyo desde el día 1. Deploy en Vercel o tu infra. Documentación incluida.",
        },
      ],
    },
    testimonials: {
      heading: "Lo que dicen los clientes",
      subheading: "No solo código — resultados que se pueden medir.",
      items: [
        {
          quote:
            "Mathias transformó nuestra firma en un negocio con presencia digital real. En menos de 8 semanas estábamos en primera página de Google en 3 términos clave.",
          author: "MV & Abogados",
          role: "Firma Legal · Lima, Perú",
        },
        {
          quote:
            "El sistema de reservas directas que desarrolló nos liberó de las comisiones de Booking y Expedia. Ahora controlamos nuestro canal de ventas al 100%.",
          author: "Apu Garden Lodge",
          role: "Hotel Boutique · Cusco, Perú",
        },
        {
          quote:
            "Entregó en semanas lo que otros estudios nos cotizaron en meses. La arquitectura soportó desde el lanzamiento sin caídas.",
          author: "Cliente DevHorses",
          role: "Startup · LATAM",
        },
      ],
    },
    contact: {
      heading: "¿Tienes un proyecto en mente?",
      headingHighlight: "Conversemos.",
      description:
        "Ya sea un rol de ingeniería, una consultoría técnica o un producto que necesita salir al mercado — me interesa escucharte. Sin compromiso.",
      emailLabel: "Email",
      phoneLabel: "WhatsApp",
      locationLabel: "Base",
      location: "Lima, Perú (Disponible remoto)",
      availabilityLabel: "Disponibilidad",
      availability: "Abierto a nuevas oportunidades",
      nameField: "Nombre",
      emailField: "Email",
      messageField: "Mensaje",
      messagePlaceholder: "Detalles sobre el rol o proyecto...",
      submit: "Iniciar conversación",
      sending: "Enviando...",
      sent: "¡Mensaje Enviado!",
    },
    footer: {
      copy: "Mathias Vasquez",
      built: "Construido con Next.js & Vercel",
    },
  },

  en: {
    navbar: {
      links: [
        { name: "Home", href: "#inicio" },
        { name: "Projects", href: "#proyectos" },
        { name: "Experience", href: "#experiencia" },
        { name: "About", href: "#sobre-mi" },
        { name: "Contact", href: "#contacto" },
      ],
    },
    hero: {
      badge: "Available for projects & roles",
      title: "From idea to product in",
      titleHighlight: "weeks, not months.",
      description:
        "Full Stack Developer & Founder of DevHorses. I design architectures in Next.js, Node and TypeScript that generate real conversions for law firms, hotels and startups across LATAM.",
      ctaPrimary: "View case studies",
      ctaSecondary: "Download CV",
    },
    stats: {
      heading: "Results that speak",
      items: [
        { value: "7+", label: "Products in production" },
        { value: "45%", label: "Average conversion rate" },
        { value: "<2s", label: "Load time (LCP)" },
        { value: "4+", label: "Industries served" },
      ],
    },
    projects: {
      heading: "Featured Work",
      subheading: "Every project solves a real problem. Here's the evidence.",
      businessTitle: "Business Solutions",
      businessSub: "Products that generate revenue, cut costs or open sales channels.",
      technicalTitle: "Technical Projects",
      technicalSub: "Architecture, technical leadership and systems built from scratch.",
      liveSite: "View live site",
      problem: "The Problem",
      solution: "The Solution",
      result: "The Result",
      impact: "Impact",
      badgeReal: "Real Client",
      badgeDemo: "Demo",
    },
    experience: {
      terminalPath: "~/career /history",
    },
    about: {
      heading: "About Me",
      subtitle: "// software_engineer & founder",
      bio1: "I'm Mathias Vasquez — full stack developer and founder of DevHorses.",
      bio2: "I build software that transforms business operations: from direct booking systems to corporate platforms with measurable conversion metrics. My focus goes beyond code — it's about architectural problem-solving and real product impact.",
      bio3: "Currently combining enterprise software development at Alignet SAC with technical and operational leadership at my own development agency.",
      stackTitle: "Main Stack",
    },
    process: {
      heading: "How I work",
      subheading: "A transparent process — no surprises halfway through.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description:
            "30-min call to understand the real problem, not just the symptoms. I define scope honestly.",
        },
        {
          number: "02",
          title: "Architecture",
          description:
            "Technical proposal with justified stack, honest estimate and clear roadmap before writing a single line.",
        },
        {
          number: "03",
          title: "Weekly sprints",
          description:
            "Demo every Friday. Feedback integrated Monday. No silos, no weeks of silence.",
        },
        {
          number: "04",
          title: "Deploy & Transfer",
          description:
            "Your code from day 1. Deploy on Vercel or your infra. Documentation included.",
        },
      ],
    },
    testimonials: {
      heading: "What clients say",
      subheading: "Not just code — results you can measure.",
      items: [
        {
          quote:
            "Mathias transformed our firm into a business with real digital presence. In under 8 weeks we ranked on Google's first page for 3 key terms.",
          author: "MV & Abogados",
          role: "Law Firm · Lima, Peru",
        },
        {
          quote:
            "The direct booking system he built freed us from Booking and Expedia commissions. We now control our sales channel 100%.",
          author: "Apu Garden Lodge",
          role: "Boutique Hotel · Cusco, Peru",
        },
        {
          quote:
            "He delivered in weeks what other studios quoted us in months. The architecture held up from launch without any downtime.",
          author: "DevHorses Client",
          role: "Startup · LATAM",
        },
      ],
    },
    contact: {
      heading: "Got a project in mind?",
      headingHighlight: "Let's talk.",
      description:
        "Whether it's an engineering role, technical consulting or a product that needs to ship — I want to hear about it. No commitment.",
      emailLabel: "Email",
      phoneLabel: "WhatsApp",
      locationLabel: "Based in",
      location: "Lima, Peru (Remote available)",
      availabilityLabel: "Availability",
      availability: "Open to new opportunities",
      nameField: "Name",
      emailField: "Email",
      messageField: "Message",
      messagePlaceholder: "Details about the role or project...",
      submit: "Start a conversation",
      sending: "Sending...",
      sent: "Message sent!",
    },
    footer: {
      copy: "Mathias Vasquez",
      built: "Built with Next.js & Vercel",
    },
  },
} as const;
