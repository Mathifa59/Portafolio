import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      
      {/* Decoración de fondo (Luces) */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none -z-10" />
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[128px] pointer-events-none -z-10" />

      {/* Solo mostramos el Hero, el Footer ya viene del layout */}
      <Hero />
      
    </main>
  );
}