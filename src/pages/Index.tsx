
import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonails";
import GitHubGraph from "@/components/GitHubGraph";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CursorEffect from "@/components/CursorEffect";
import ThemeToggle from "@/components/ThemeToggle";
import FloatingNav from "@/components/FloatingNav";
import { Spotlight } from "@/components/ui/Spotlight";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";

const Index = () => {
  useEffect(() => {
    document.title = "Raju Kumar | Full Stack Developer";
  }, []);

  return (
    <>
      <SmoothScroll />
      <div className="min-h-screen w-full bg-portfolio-white dark:bg-black dark:bg-grid-white/[0.03] bg-grid-black/[0.03] text-portfolio-black dark:text-portfolio-dark-text transition-colors duration-300 relative md:cursor-none overflow-hidden">
        <div className="fixed inset-0 z-0">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="rgba(0, 153, 255, 0.5)"
          />
          <BackgroundBeams className="opacity-20" />
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>

        <CursorEffect />
        <ThemeToggle />
        <FloatingNav />

        <div className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <GitHubGraph />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
