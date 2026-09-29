import CosmicBackground from "./components/CosmicBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="cosmic-app-wrapper">
      {/* 60FPS Twinkling Starfield Canvas */}
      <CosmicBackground />

      {/* Modern Fixed Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
