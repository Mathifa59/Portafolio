import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { technicalProjects } from "@/data/projects";
import CaseStudy from "@/components/sections/CaseStudy";

export function generateStaticParams() {
  return technicalProjects.map(({ slug }) => ({ slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = technicalProjects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: project.content.es.title,
    description: project.content.es.summary,
    alternates: { canonical: `/proyectos/${slug}` },
    openGraph: {
      title: `${project.content.es.title} | Mathias Vasquez`,
      description: project.content.es.summary,
      url: `/proyectos/${slug}`,
    },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = technicalProjects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <CaseStudy project={project} />;
}
