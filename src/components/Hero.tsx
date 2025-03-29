
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/framer-animations";
import { ArrowDownCircle } from "lucide-react";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
      initial="hidden"
      animate="visible"
    >
      <motion.span 
        className="text-portfolio-accent font-mono mb-5 text-lg"
        variants={fadeIn(0.1)}
      >
        Hi, my name is
      </motion.span>
      
      <motion.h1 
        className="text-4xl md:text-7xl font-bold text-portfolio-white mb-4"
        variants={slideIn("left", 0.2)}
      >
        Raju Kumar.
      </motion.h1>
      
      <motion.h2 
        className="text-3xl md:text-6xl font-bold text-portfolio-slate-light mb-6"
        variants={slideIn("left", 0.3)}
      >
        I build things for the web.
      </motion.h2>
      
      <motion.p 
        className="max-w-xl text-lg mb-12 text-portfolio-slate-light"
        variants={fadeIn(0.4)}
      >
        I'm a Full Stack Developer specializing in building exceptional digital experiences. 
        Currently, I'm focused on creating accessible, human-centered products with cutting-edge technologies.
      </motion.p>
      
      <motion.div variants={fadeIn(0.5)}>
        <a href="#projects" className="button">
          Check out my work
        </a>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        variants={fadeIn(0.8)}
        animate={{ 
          y: [0, 10, 0], 
          transition: { 
            repeat: Infinity, 
            duration: 1.5 
          } 
        }}
      >
        <a href="#about">
          <ArrowDownCircle className="text-portfolio-accent w-10 h-10" />
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
