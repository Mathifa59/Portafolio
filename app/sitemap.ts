import type { MetadataRoute } from "next";
import { technicalProjects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mathiasvasquez.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...technicalProjects.map(({ slug }) => ({
      url: `https://mathiasvasquez.dev/proyectos/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
