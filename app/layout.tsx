import type { Metadata } from "next";
import { Outfit } from "next/font/google"; 
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";

// Configuración de la fuente
const outfit = Outfit({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-outfit",
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
      {/* CORRECCIONES IMPORTANTES AQUÍ:
         1. Quitamos 'bg-slate-950': Para que NO tape el fondo de grid de tu globals.css.
         2. Agregamos 'relative': Para asegurar el posicionamiento correcto.
         3. Agregamos 'overflow-x-hidden': Refuerzo extra de seguridad para móviles.
      */}
      <body className={`${outfit.className} antialiased text-slate-50 relative overflow-x-hidden`}>
        
        {/* Barra de navegación */}
        <Navbar />
        
        {/* Contenido principal */}
        {/* pt-24 asegura que el Navbar fijo no tape el inicio de tu web */}
        <main className="pt-24 min-h-screen flex flex-col">
          {children}
        </main>

        {/* Pie de página */}
        <Footer />
        
      </body>
    </html>
  );
}