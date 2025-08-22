
import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonails";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.title = "Raju Kumar | Full Stack Developer";
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-dark text-portfolio-slate overflow-x-hidden">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-portfolio-accent z-50 origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
     <div className="mb-5 flex-grow">
     <Testimonials />
     </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
