import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer"; // <--- 1. IMPORTAR FOOTER

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mathias Vasquez | Desarrollador Full Stack",
  description: "Portafolio profesional de Mathias Vasquez.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white`}
      >
        <Navbar />
        
        <main className="pt-24 min-h-screen">
          {children}
        </main>

        <Footer /> {/* <--- 2. USAR FOOTER AQUÍ AL FINAL */}
      </body>
    </html>
  );
}