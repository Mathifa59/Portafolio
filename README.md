# Mathias Vasquez — Portafolio profesional

Portafolio enfocado en IA generativa, servicios backend y arquitectura de software. Construido con Next.js 16, React 19, TypeScript, Tailwind CSS 4 y Framer Motion.

## Desarrollo

```sh
npm install
npm run dev
```

Abre `http://localhost:3000`. Para comprobar y ejecutar la versión de producción:

```sh
npm run lint
npm run build
npm run start
```

## Contenido

- `src/data/translations.ts`: textos completos en español e inglés, experiencia, formación y conocimientos.
- `src/data/projects.ts`: casos técnicos y archivo secundario de proyectos web.
- `app/page.tsx`: presentación, proyectos, experiencia, enfoque y perfil/contacto.
- `app/proyectos/[slug]/page.tsx`: páginas estáticas de SINAPSISTENCIA y Agentic workflows.
- `public/mathias-vasquez-cv.pdf`: CV que se descarga desde la web.
- `app/globals.css`: diseño responsive y estilos de movimiento reducido.

El idioma se conserva en almacenamiento local y actualiza el atributo `lang` del documento. Las animaciones respetan `prefers-reduced-motion`. La navegación móvil admite cierre con Escape y devuelve el foco al botón del menú.

Los casos se basan en el CV proporcionado. SINAPSISTENCIA distingue el trabajo descrito de la integración futura de LLMs/RAG. El caso de ALIGNET presenta capacidades profesionales, sin código interno ni métricas inventadas. Los diagramas son esquemas simplificados, no demos de sistemas operativos.

## Integraciones y publicación

El formulario conserva la integración con Web3Forms, validación nativa, honeypot y estados visibles de envío. Vercel Analytics sigue integrado. El sitio incluye metadatos, datos estructurados, imagen social, sitemap y robots.

Antes de publicar en un dominio distinto, actualiza las URLs en `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` y `app/opengraph-image.tsx`. Las traducciones comparten rutas; los metadatos de indexación están en español.
