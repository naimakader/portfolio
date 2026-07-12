import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Section separator */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="h-px bg-bg-border" />
        </div>

        <Projects />

        <div className="max-w-5xl mx-auto px-6">
          <div className="h-px bg-bg-border" />
        </div>

        <About />

        <div className="max-w-5xl mx-auto px-6">
          <div className="h-px bg-bg-border" />
        </div>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
