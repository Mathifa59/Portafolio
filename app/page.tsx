import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Projects />
      <Process />
      <Experience />
      <Testimonials />
      <About />
      <Contact />
    </>
  );
}
