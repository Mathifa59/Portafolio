import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import MotionProvider from "@/components/providers/MotionProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://mathiasvasquez.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mathias Vasquez | Generative AI & Backend",
    template: "%s | Mathias Vasquez",
  },
  description:
    "Software Developer enfocado en IA generativa, agentes, backend y búsqueda semántica. Experiencia con Amazon Bedrock, Python, FastAPI y PostgreSQL con pgvector.",
  keywords: [
    "Software Developer",
    "Generative AI",
    "AI Agents",
    "Amazon Bedrock",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "pgvector",
    "MCP",
    "LATAM",
    "Perú",
    "Lima",
    "DevHorses",
    "backend",
    "software architecture",
  ],
  authors: [{ name: "Mathias Vasquez", url: siteUrl }],
  creator: "Mathias Vasquez",
  openGraph: {
    type: "website",
    locale: "es_PE",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "Mathias Vasquez Portfolio",
    title: "Mathias Vasquez | Generative AI & Backend",
    description:
      "Agentes de IA, servicios backend y búsqueda semántica. Explora mi trabajo y mi experiencia en ingeniería de software.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mathias Vasquez - Generative AI & Backend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathias Vasquez | Generative AI & Backend",
    description: "Software, agentes de IA y arquitectura de sistemas.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mathias Vasquez",
  jobTitle: "Software Developer",
  description:
    "Software Developer enfocado en Generative AI, backend y arquitectura de sistemas",
  url: siteUrl,
  email: "mathiwen519@gmail.com",
  telephone: "+51981916198",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lima",
    addressCountry: "PE",
  },
  sameAs: [
    "https://github.com/Mathifa59",
    "https://www.linkedin.com/in/mathias-vasquez/",
  ],
  knowsAbout: [
    "Generative AI",
    "AI Agents",
    "Amazon Bedrock",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Semantic Search",
    "System Architecture",
  ],
  worksFor: {
    "@type": "Organization",
    name: "DevHorses",
    url: "https://www.devhorses.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <LanguageProvider>
          <MotionProvider>
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
          </MotionProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
