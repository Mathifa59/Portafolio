export type Lang = "es" | "en";

export const t = {
  es: {
    navbar: {
      work: "Proyectos",
      experience: "Experiencia",
      expertise: "Enfoque",
      contact: "Contacto",
      home: "Ir al inicio",
      menu: "Abrir navegación",
      close: "Cerrar navegación",
      language: "Switch to English",
    },
    hero: {
      eyebrow: "Software Developer · Lima, Perú",
      disciplines: ["Generative AI", "Backend", "Architecture"],
      description:
        "Desarrollo agentes de IA, servicios backend y sistemas de búsqueda semántica. Me interesa cómo las piezas se conectan para construir software útil y comprensible.",
      work: "Explorar mi trabajo",
      cv: "Descargar CV",
      available: "Abierto a oportunidades en IA y software",
      scroll: "Continúa explorando",
      diagram: "Áreas de trabajo · esquema conceptual",
      input: "Entrada",
      context: "Contexto",
      orchestration: "Agentes & servicios",
      tools: "Herramientas",
      output: "Respuesta",
      caption: "De una idea a un sistema que puedes explicar.",
    },
    projects: {
      number: "01",
      eyebrow: "Trabajo seleccionado",
      heading: "Los sistemas detrás\ndel código.",
      description:
        "Una mirada a mi contribución, las decisiones de arquitectura y el estado de cada trabajo.",
      explore: "Explorar caso técnico",
      ongoing: "En desarrollo",
      professional: "Experiencia profesional",
      other: "También he construido para la web",
      otherDescription:
        "Proyectos de desarrollo web y demos de interfaz que complementan mi experiencia en software.",
      client: "Proyecto web",
      demo: "Demo",
      visit: "Visitar sitio",
      image: "Captura del proyecto",
      architecture: "Arquitectura · esquema simplificado",
    },
    experience: {
      number: "02",
      eyebrow: "Trayectoria",
      heading: "Experiencia aplicada.",
      description:
        "IA en procesos de ingeniería, arquitectura de software y desarrollo de productos.",
      entries: [
        {
          company: "ALIGNET SAC",
          role: "Practicante de Programación",
          date: "Nov 2025 — Actualidad",
          summary:
            "Implementación de flujos de IA generativa para análisis de impacto y asistencia durante el ciclo de desarrollo de software.",
          points: [
            "Desarrollo de agentes sobre Amazon Bedrock e integración de herramientas mediante MCP y skills.",
            "Integración de servicios AWS y participación en estándares técnicos y componentes reutilizables.",
            "Modelado de PostgreSQL multi-schema con más de 30 tablas y participación en una plataforma con micro-frontends.",
          ],
          tech: [
            "Amazon Bedrock",
            "MCP",
            "AWS",
            "PostgreSQL",
            "Module Federation",
          ],
        },
        {
          company: "DevHorses",
          role: "Fundador · Desarrollo de software",
          date: "Ene 2026 — Actualidad",
          summary:
            "Diseño y desarrollo de soluciones digitales, desde requerimientos y arquitectura hasta implementación y despliegue.",
          points: [
            "Diseño de arquitecturas full stack, APIs y bases de datos con foco en mantenibilidad.",
            "Desarrollo de automatizaciones y gestión del ciclo completo de proyectos.",
          ],
          tech: ["Full Stack", "APIs", "Arquitectura", "Automatización"],
        },
        {
          company: "MV & Abogados",
          role: "Desarrollo Web y Gestión Digital",
          date: "Ene — Nov 2025",
          summary:
            "Desarrollo de una solución digital de captación de clientes, combinando web y automatización.",
          points: [
            "Traducción de objetivos de negocio en requerimientos funcionales y soluciones técnicas.",
          ],
          tech: ["Desarrollo web", "Automatización", "Analítica"],
        },
      ],
    },
    expertise: {
      number: "03",
      eyebrow: "Conocimientos aplicados",
      heading: "Conectar las piezas.",
      description:
        "Mi foco está en la intersección entre inteligencia artificial, datos e ingeniería de software.",
      areas: [
        {
          title: "Agentes & integración",
          description:
            "Flujos de IA conectados a herramientas y procesos de ingeniería.",
          tech: ["Amazon Bedrock", "AI Agents", "MCP", "Skills"],
          evidence: "Aplicado en ALIGNET",
          href: "/proyectos/agentic-workflows",
        },
        {
          title: "Datos & recuperación",
          description:
            "Búsqueda por similitud y servicios de recuperación semántica.",
          tech: ["PostgreSQL", "pgvector", "SQL", "TF-IDF"],
          evidence: "Aplicado en SINAPSISTENCIA",
          href: "/proyectos/sinapsistencia",
        },
        {
          title: "Backend & arquitectura",
          description:
            "Separación de responsabilidades, APIs e integración de servicios de IA.",
          tech: ["Python", "FastAPI", "Java", "Spring Boot"],
          evidence: "Arquitectura de SINAPSISTENCIA",
          href: "/proyectos/sinapsistencia",
        },
        {
          title: "Cloud & software",
          description:
            "Integración cloud, autenticación y desarrollo colaborativo.",
          tech: ["AWS Lambda", "S3", "Cognito", "Git", "CI/CD"],
          evidence: "Ver experiencia",
          href: "/#experiencia",
        },
      ],
    },
    contact: {
      number: "04",
      eyebrow: "Un poco más sobre mí",
      heading: "Siempre aprendiendo.\nSiempre construyendo.",
      bio: "Soy estudiante de Ingeniería de Software en la UPC, cursando el décimo ciclo. Combino mi experiencia en desarrollo con un interés especial en sistemas de agentes, recuperación de información y arquitectura de plataformas de IA.",
      education: "Formación",
      degree: "Ingeniería de Software · Ciclo 10",
      university: "Universidad Peruana de Ciencias Aplicadas",
      dates: "2022 — Actualidad",
      certificates: "Formación complementaria",
      courses: [
        "Python for Everybody · University of Michigan",
        "IA aplicada a la Ciberseguridad · UPC",
        "Linux, SQL y automatización con Python · Google",
      ],
      title: "Sigamos en contacto.",
      subtitle:
        "Abierto a roles de IA generativa, backend e ingeniería de software.",
      form: "Prefiero escribir aquí",
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      placeholder: "Cuéntame sobre el equipo o la oportunidad…",
      submit: "Enviar mensaje",
      sending: "Enviando…",
      success: "Gracias. Tu mensaje se envió correctamente.",
      error:
        "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme por correo.",
      availability: "Lima, Perú · Disponible para trabajo remoto",
      cv: "Descargar CV",
    },
    footer: {
      line: "Software, sistemas e ideas en evolución.",
      top: "Volver arriba",
      built: "Construido con Next.js",
    },
    case: {
      back: "Volver a proyectos",
      contribution: "Mi contribución",
      architecture: "Cómo se conectan las piezas",
      decisions: "Decisiones técnicas",
      status: "Estado y próximos pasos",
      scope: "Contexto",
      related: "Seguir explorando",
      reference:
        "Esquema simplificado de componentes basado en mi CV; no representa infraestructura operativa en tiempo real.",
      experienceNote:
        "Caso de experiencia profesional presentado a nivel de capacidades, sin código ni información interna de la empresa.",
      cv: "Consultar CV",
      github: "Perfil de GitHub",
    },
  },
  en: {
    navbar: {
      work: "Work",
      experience: "Experience",
      expertise: "Focus",
      contact: "Contact",
      home: "Go to home",
      menu: "Open navigation",
      close: "Close navigation",
      language: "Cambiar a español",
    },
    hero: {
      eyebrow: "Software Developer · Lima, Peru",
      disciplines: ["Generative AI", "Backend", "Architecture"],
      description:
        "I develop AI agents, backend services and semantic search systems. I care about how the pieces connect to build useful software that people can understand.",
      work: "Explore my work",
      cv: "Download CV",
      available: "Open to AI and software opportunities",
      scroll: "Keep exploring",
      diagram: "Areas of focus · conceptual diagram",
      input: "Input",
      context: "Context",
      orchestration: "Agents & services",
      tools: "Tools",
      output: "Response",
      caption: "From an idea to a system you can explain.",
    },
    projects: {
      number: "01",
      eyebrow: "Selected work",
      heading: "The systems behind\nthe code.",
      description:
        "A closer look at my contribution, architecture decisions and the current state of each work.",
      explore: "Explore technical case",
      ongoing: "In development",
      professional: "Professional experience",
      other: "I have also built for the web",
      otherDescription:
        "Web projects and interface demos that complement my software experience.",
      client: "Web project",
      demo: "Demo",
      visit: "Visit website",
      image: "Project screenshot",
      architecture: "Architecture · simplified diagram",
    },
    experience: {
      number: "02",
      eyebrow: "Background",
      heading: "Experience in practice.",
      description:
        "AI in engineering workflows, software architecture and product development.",
      entries: [
        {
          company: "ALIGNET SAC",
          role: "Programming Intern",
          date: "Nov 2025 — Present",
          summary:
            "Implementation of generative AI workflows for impact analysis and assistance throughout the software development lifecycle.",
          points: [
            "Development of agents on Amazon Bedrock and tool integration through MCP and skills.",
            "AWS service integration and contributions to technical standards and reusable components.",
            "Multi-schema PostgreSQL modeling with over 30 tables and contributions to a micro-frontend platform.",
          ],
          tech: [
            "Amazon Bedrock",
            "MCP",
            "AWS",
            "PostgreSQL",
            "Module Federation",
          ],
        },
        {
          company: "DevHorses",
          role: "Founder · Software Development",
          date: "Jan 2026 — Present",
          summary:
            "Design and development of digital solutions, from requirements and architecture to implementation and deployment.",
          points: [
            "Full stack architecture, API and database design with a focus on maintainability.",
            "Automation development and management of the complete project lifecycle.",
          ],
          tech: ["Full Stack", "APIs", "Architecture", "Automation"],
        },
        {
          company: "MV & Abogados",
          role: "Web Development & Digital Management",
          date: "Jan — Nov 2025",
          summary:
            "Development of a digital client acquisition solution combining web development and automation.",
          points: [
            "Translation of business goals into functional requirements and technical solutions.",
          ],
          tech: ["Web development", "Automation", "Analytics"],
        },
      ],
    },
    expertise: {
      number: "03",
      eyebrow: "Applied knowledge",
      heading: "Connecting the pieces.",
      description:
        "My focus is at the intersection of artificial intelligence, data and software engineering.",
      areas: [
        {
          title: "Agents & integration",
          description:
            "AI workflows connected to tools and engineering processes.",
          tech: ["Amazon Bedrock", "AI Agents", "MCP", "Skills"],
          evidence: "Applied at ALIGNET",
          href: "/proyectos/agentic-workflows",
        },
        {
          title: "Data & retrieval",
          description: "Similarity search and semantic retrieval services.",
          tech: ["PostgreSQL", "pgvector", "SQL", "TF-IDF"],
          evidence: "Applied in SINAPSISTENCIA",
          href: "/proyectos/sinapsistencia",
        },
        {
          title: "Backend & architecture",
          description:
            "Separation of responsibilities, APIs and AI service integration.",
          tech: ["Python", "FastAPI", "Java", "Spring Boot"],
          evidence: "SINAPSISTENCIA architecture",
          href: "/proyectos/sinapsistencia",
        },
        {
          title: "Cloud & software",
          description:
            "Cloud integration, authentication and collaborative development.",
          tech: ["AWS Lambda", "S3", "Cognito", "Git", "CI/CD"],
          evidence: "View experience",
          href: "/#experiencia",
        },
      ],
    },
    contact: {
      number: "04",
      eyebrow: "A little more about me",
      heading: "Always learning.\nAlways building.",
      bio: "I am a Software Engineering student at UPC, currently in my tenth semester. I combine development experience with a particular interest in agent systems, information retrieval and AI platform architecture.",
      education: "Education",
      degree: "Software Engineering · Semester 10",
      university: "Universidad Peruana de Ciencias Aplicadas",
      dates: "2022 — Present",
      certificates: "Additional learning",
      courses: [
        "Python for Everybody · University of Michigan",
        "AI applied to Cybersecurity · UPC",
        "Linux, SQL & Python automation · Google",
      ],
      title: "Let's stay in touch.",
      subtitle:
        "Open to generative AI, backend and software engineering roles.",
      form: "I'd rather write here",
      name: "Name",
      email: "Email",
      message: "Message",
      placeholder: "Tell me about the team or opportunity…",
      submit: "Send message",
      sending: "Sending…",
      success: "Thank you. Your message was sent successfully.",
      error:
        "Your message could not be sent. Please try again or email me directly.",
      availability: "Lima, Peru · Available for remote work",
      cv: "Download CV",
    },
    footer: {
      line: "Software, systems and ideas in progress.",
      top: "Back to top",
      built: "Built with Next.js",
    },
    case: {
      back: "Back to projects",
      contribution: "My contribution",
      architecture: "How the pieces connect",
      decisions: "Technical decisions",
      status: "Current state & next steps",
      scope: "Context",
      related: "Keep exploring",
      reference:
        "Simplified component diagram based on my CV; it does not represent live operational infrastructure.",
      experienceNote:
        "Professional experience case presented at a capability level, without internal company code or information.",
      cv: "View CV",
      github: "GitHub profile",
    },
  },
} as const;
