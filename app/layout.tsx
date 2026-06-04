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

const siteUrl = "https://mathiasvasquez.dev"; // Actualiza con tu dominio real

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mathias Vasquez | Full Stack Developer",
    template: "%s | Mathias Vasquez",
  },
  description:
    "Full Stack Developer & Founder de DevHorses. Construyo sistemas en Next.js, Node y TypeScript que generan conversiones reales para negocios en LATAM.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "LATAM",
    "Perú",
    "Lima",
    "DevHorses",
    "desarrollo web",
    "software a medida",
  ],
  authors: [{ name: "Mathias Vasquez", url: siteUrl }],
  creator: "Mathias Vasquez",
  openGraph: {
    type: "website",
    locale: "es_PE",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "Mathias Vasquez Portfolio",
    title: "Mathias Vasquez | Full Stack Developer",
    description:
      "De idea a producto en semanas, no meses. Full Stack Developer & Founder de DevHorses.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mathias Vasquez - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathias Vasquez | Full Stack Developer",
    description: "De idea a producto en semanas, no meses.",
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
  jobTitle: "Full Stack Developer",
  description: "Full Stack Developer & Founder de DevHorses",
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
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Full Stack Development",
    "SEO",
    "System Architecture",
  ],
  worksFor: {
    "@type": "Organization",
    name: "DevHorses",
    url: "https://horses-landing.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased text-gray-100 relative overflow-x-hidden`}
      >
        <LanguageProvider>
          <MotionProvider>
            <Navbar />
            <main className="min-h-screen flex flex-col selection:bg-emerald-500/30">
              {children}
            </main>
            <Footer />
          </MotionProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
