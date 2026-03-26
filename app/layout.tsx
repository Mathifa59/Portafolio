import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";

// Configuración de las fuentes
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Mathias Vasquez | Desarrollador de Software",
  description: "Portafolio de Mathias Vasquez, desarrollador de software construyendo sistemas digitales que escalan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased text-gray-100 relative overflow-x-hidden`}>
        
        {/* Barra de navegación flotante */}
        <Navbar />
        
        {/* Contenido principal de la One-Page */}
        <main className="min-h-screen flex flex-col selection:bg-emerald-500/30">
          {children}
        </main>

        <Footer />
        
      </body>
    </html>
  );
}