import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Achievements from "@/sections/Achievements";

export default function Home() {
  return (
    <main className="bg-[#0a0f1c] text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}