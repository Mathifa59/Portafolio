import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // <--- 1. Usamos Outfit para el toque amigable
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";

// 2. Configuramos la fuente
const outfit = Outfit({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Cargamos varios pesos para tener flexibilidad
  variable: "--font-outfit", // Opcional, por si queremos usarla en variables CSS
});

export const metadata: Metadata = {
  title: "Mathias Vasquez | Desarrollador Full Stack",
  description: "Portafolio profesional de Mathias Vasquez - Software Engineer & Founder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      {/* 3. Aplicamos la clase outfit.className a todo el body */}
      <body className={`${outfit.className} antialiased bg-slate-950 text-white`}>
        
        {/* Barra de navegación flotante */}
        <Navbar />
        
        {/* Contenido principal con padding superior para que no lo tape el menú */}
        <main className="pt-24 min-h-screen">
          {children}
        </main>

        {/* Pie de página global */}
        <Footer />
        
      </body>
    </html>
  );
}