import Projects from "@/components/sections/Projects"; // Importamos el componente visual

export default function ProyectosPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      
      {/* Encabezado de la página */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Mis <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">Proyectos</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Una selección de mis trabajos más recientes. Desde aplicaciones web complejas hasta landing pages optimizadas.
        </p>
      </div>

      {/* Aquí renderizamos el componente del Grid que ya creamos antes */}
      <Projects />
      
    </main>
  );
}