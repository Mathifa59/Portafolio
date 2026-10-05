import type { Lang } from "./translations";

type CaseCopy = {
  title: string;
  label: string;
  summary: string;
  context: string;
  contributions: string[];
  decisions: { title: string; text: string }[];
  implemented: string[];
  future: string[];
  implementedLabel: string;
  futureLabel: string;
  nodes: { title: string; subtitle: string }[];
};
export type TechnicalProject = {
  slug: string;
  kind: "thesis" | "experience";
  tech: string[];
  content: Record<Lang, CaseCopy>;
};

export const technicalProjects: TechnicalProject[] = [
  {
    slug: "sinapsistencia",
    kind: "thesis",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Spring Boot",
      "Angular",
    ],
    content: {
      es: {
        title: "SINAPSISTENCIA",
        label: "Tesis · IA & arquitectura de software",
        summary:
          "Servicios de IA, búsqueda semántica y una arquitectura que separa interfaz, lógica de negocio y procesamiento de datos.",
        context:
          "Proyecto de tesis de Ingeniería de Software, en desarrollo desde enero de 2026. Integra servicios de Machine Learning, recuperación de información y gestión documental en una arquitectura end-to-end.",
        contributions: [
          "Diseño de la arquitectura con Angular, Spring Boot, FastAPI y PostgreSQL.",
          "Implementación de PostgreSQL con pgvector para almacenamiento vectorial y búsqueda por similitud.",
          "Desarrollo de servicios de IA con Python y FastAPI, y modelos de clasificación de riesgo y recomendación con Random Forest y TF-IDF.",
          "Diseño e integración de APIs entre servicios de negocio, modelos de IA y gestión documental.",
        ],
        decisions: [
          {
            title: "Responsabilidades separadas",
            text: "La interfaz, los servicios de negocio y los servicios de IA tienen componentes diferenciados. Esta separación permite desarrollar cada responsabilidad de forma explícita.",
          },
          {
            title: "Recuperación en PostgreSQL",
            text: "pgvector incorpora almacenamiento vectorial y búsqueda por similitud a la capa de datos. El proyecto utiliza estas capacidades para recuperación semántica y recomendación.",
          },
          {
            title: "IA detrás de APIs",
            text: "Python y FastAPI exponen los servicios de IA para integrarlos con los componentes de negocio mediante APIs.",
          },
        ],
        implementedLabel: "Trabajo descrito en el CV",
        futureLabel: "Dirección de desarrollo",
        implemented: [
          "Almacenamiento vectorial y mecanismos de búsqueda semántica.",
          "Servicios de IA y modelos de clasificación y recomendación.",
          "Integración de APIs entre los componentes del sistema.",
        ],
        future: [
          "Integración de LLMs y componentes RAG: la arquitectura está preparada para incorporarlos.",
          "Documentar evaluaciones reproducibles de recuperación y modelos antes de publicar métricas de calidad.",
        ],
        nodes: [
          { title: "Angular", subtitle: "Interfaz" },
          { title: "Spring Boot", subtitle: "Servicios de negocio" },
          { title: "FastAPI · Python", subtitle: "Servicios de IA" },
          { title: "PostgreSQL + pgvector", subtitle: "Datos & recuperación" },
        ],
      },
      en: {
        title: "SINAPSISTENCIA",
        label: "Thesis · AI & software architecture",
        summary:
          "AI services, semantic search and an architecture that separates the interface, business logic and data processing.",
        context:
          "Software Engineering thesis project, in development since January 2026. It integrates Machine Learning services, information retrieval and document management in an end-to-end architecture.",
        contributions: [
          "Architecture design using Angular, Spring Boot, FastAPI and PostgreSQL.",
          "Implementation of PostgreSQL with pgvector for vector storage and similarity search.",
          "AI service development with Python and FastAPI, and risk classification and recommendation models using Random Forest and TF-IDF.",
          "API design and integration between business services, AI models and document management.",
        ],
        decisions: [
          {
            title: "Separated responsibilities",
            text: "The interface, business services and AI services have distinct components. This separation makes each responsibility explicit during development.",
          },
          {
            title: "Retrieval in PostgreSQL",
            text: "pgvector brings vector storage and similarity search to the data layer. The project uses these capabilities for semantic retrieval and recommendation.",
          },
          {
            title: "AI behind APIs",
            text: "Python and FastAPI expose AI services for integration with business components through APIs.",
          },
        ],
        implementedLabel: "Work described in my CV",
        futureLabel: "Development direction",
        implemented: [
          "Vector storage and semantic search mechanisms.",
          "AI services and classification and recommendation models.",
          "API integration between system components.",
        ],
        future: [
          "LLM and RAG component integration: the architecture is prepared to incorporate them.",
          "Document reproducible retrieval and model evaluations before publishing quality metrics.",
        ],
        nodes: [
          { title: "Angular", subtitle: "Interface" },
          { title: "Spring Boot", subtitle: "Business services" },
          { title: "FastAPI · Python", subtitle: "AI services" },
          { title: "PostgreSQL + pgvector", subtitle: "Data & retrieval" },
        ],
      },
    },
  },
  {
    slug: "agentic-workflows",
    kind: "experience",
    tech: ["Amazon Bedrock", "AI Agents", "MCP", "Skills", "AWS"],
    content: {
      es: {
        title: "Agentic workflows",
        label: "ALIGNET · IA generativa",
        summary:
          "Agentes y herramientas de IA generativa aplicados al análisis de impacto y al ciclo de desarrollo de software.",
        context:
          "Como practicante de programación en ALIGNET SAC, participo en la implementación de flujos de IA generativa y el desarrollo de agentes sobre Amazon Bedrock. Este caso resume las áreas de trabajo descritas en mi CV.",
        contributions: [
          "Implementación de flujos basados en agentes, MCP y skills para asistir procesos de desarrollo.",
          "Desarrollo de agentes generativos sobre Amazon Bedrock e integración de herramientas de IA.",
          "Participación en el diseño de componentes reutilizables y definición de estándares técnicos.",
          "Integración de servicios cloud, incluyendo AWS Lambda, S3, CloudFront, Cognito y CodeArtifact.",
        ],
        decisions: [
          {
            title: "Herramientas conectadas al flujo",
            text: "La experiencia incluye agentes, MCP y skills como componentes de asistencia en procesos de ingeniería de software.",
          },
          {
            title: "Componentes reutilizables",
            text: "Mi participación incluye el diseño de componentes y estándares para facilitar el desarrollo de soluciones basadas en IA.",
          },
          {
            title: "Integración con servicios cloud",
            text: "El trabajo también abarca integración de servicios AWS y mecanismos de autenticación y acceso a servicios.",
          },
        ],
        implementedLabel: "Áreas de contribución",
        futureLabel: "Lo que quiero seguir profundizando",
        implemented: [
          "Flujos de asistencia y análisis de impacto durante el desarrollo de software.",
          "Agentes sobre Bedrock e integración de herramientas.",
          "Componentes reutilizables, documentación e integración cloud.",
        ],
        future: [
          "Evaluación sistemática del comportamiento de agentes y la selección de herramientas.",
          "Observabilidad, trazabilidad y equilibrio entre calidad, latencia y costo.",
        ],
        nodes: [
          { title: "AI Agents", subtitle: "Flujos de asistencia" },
          { title: "Amazon Bedrock", subtitle: "IA generativa" },
          { title: "MCP & Skills", subtitle: "Herramientas & capacidades" },
          { title: "AWS Services", subtitle: "Integración cloud" },
        ],
      },
      en: {
        title: "Agentic workflows",
        label: "ALIGNET · Generative AI",
        summary:
          "Generative AI agents and tools applied to impact analysis and the software development lifecycle.",
        context:
          "As a programming intern at ALIGNET SAC, I contribute to generative AI workflows and agent development on Amazon Bedrock. This case summarizes the areas of work described in my CV.",
        contributions: [
          "Implementation of agent, MCP and skill-based workflows to assist development processes.",
          "Generative agent development on Amazon Bedrock and AI tool integration.",
          "Contributions to reusable components and technical standards.",
          "Cloud service integration, including AWS Lambda, S3, CloudFront, Cognito and CodeArtifact.",
        ],
        decisions: [
          {
            title: "Tools connected to workflows",
            text: "The experience includes agents, MCP and skills as assistance components in software engineering processes.",
          },
          {
            title: "Reusable components",
            text: "My contributions include component design and standards to support the development of AI-based solutions.",
          },
          {
            title: "Cloud service integration",
            text: "The work also covers AWS service integration and service authentication and access mechanisms.",
          },
        ],
        implementedLabel: "Areas of contribution",
        futureLabel: "What I want to explore further",
        implemented: [
          "Assistance and impact analysis workflows throughout software development.",
          "Bedrock agents and tool integration.",
          "Reusable components, documentation and cloud integration.",
        ],
        future: [
          "Systematic evaluation of agent behavior and tool selection.",
          "Observability, traceability and quality, latency and cost trade-offs.",
        ],
        nodes: [
          { title: "AI Agents", subtitle: "Assistance workflows" },
          { title: "Amazon Bedrock", subtitle: "Generative AI" },
          { title: "MCP & Skills", subtitle: "Tools & capabilities" },
          { title: "AWS Services", subtitle: "Cloud integration" },
        ],
      },
    },
  },
];

export const webProjects = [
  {
    title: "Selekta Food",
    image: "/images/selekta-mini.png",
    link: "https://www.selektafood.com/",
    demo: false,
    description: {
      es: "Sitio corporativo agro-tech",
      en: "Agro-tech corporate website",
    },
  },
  {
    title: "MV & Abogados",
    image: "/images/abogados-mini.png",
    link: "https://mv-abogados.vercel.app/",
    demo: false,
    description: {
      es: "Presencia digital para firma legal",
      en: "Digital presence for a law firm",
    },
  },
  {
    title: "Apu Garden Lodge",
    image: "/images/hotel-mini.png",
    link: "https://apu-garden-lodge.vercel.app/",
    demo: false,
    description: {
      es: "Sitio web para hotel boutique",
      en: "Boutique hotel website",
    },
  },
  {
    title: "E-commerce Retail",
    image: "/images/mini-retail.png",
    link: "https://demo-retail.vercel.app/",
    demo: true,
    description: { es: "Demo de tienda online", en: "Online store demo" },
  },
  {
    title: "Pastelería & Restaurante",
    image: "/images/mini-pasteleria.png",
    link: "https://demo-restaurante-pasteleria.vercel.app/",
    demo: true,
    description: {
      es: "Demo de restaurante y pastelería",
      en: "Restaurant and bakery demo",
    },
  },
  {
    title: "Steakhouse Premium",
    image: "/images/mini-fuego.png",
    link: "https://demo-restaurante-carnes.vercel.app/",
    demo: true,
    description: {
      es: "Demo de restaurante premium",
      en: "Premium restaurant demo",
    },
  },
  {
    title: "Gimnasio Fitness",
    image: "/images/gimnasio-mini.png",
    link: "https://demo-gimnasio-eight.vercel.app/",
    demo: true,
    description: {
      es: "Demo de sitio para gimnasio",
      en: "Fitness website demo",
    },
  },
];
