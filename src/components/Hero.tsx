
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/framer-animations";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center py-12 px-6 md:px-12 max-w-4xl mx-auto relative text-center"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="mb-8"
        variants={fadeIn(0.1)}
      >
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-portfolio-border dark:border-portfolio-dark-border">
          <img
            src="/assets/raju.png"
            alt="Raju Kumar"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      <motion.div
        className="mb-6"
        variants={fadeIn(0.2)}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-portfolio-black dark:text-portfolio-dark-text mb-4 leading-tight">
          Raju Kumar
        </h1>
        <p className="text-base md:text-lg text-portfolio-gray dark:text-portfolio-dark-text-secondary leading-relaxed max-w-2xl mx-auto">
          Freelance Full Stack Developer specializing in building exceptional digital experiences. 
          I craft modern web applications that power innovative products and deliver seamless, 
          user-centric solutions for businesses worldwide.
        </p>
      </motion.div>
      <motion.div
        className="text-sm md:text-base text-portfolio-gray dark:text-portfolio-dark-text-secondary"
        variants={fadeIn(0.3)}
      >
        <p>React | Next.js | Node.js | TypeScript | MongoDB | PostgreSQL | Express.js | Tailwind CSS | Git | REST API | Supabase | React Native | AI Integration</p>
      </motion.div>
      <motion.div
        className="mt-8 flex flex-wrap items-center justify-center gap-4"
        variants={fadeIn(0.4)}
      >
        <a
          href="https://cal.com/therajusah/30-min-chat"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-portfolio-black dark:bg-portfolio-white text-portfolio-white dark:text-portfolio-black text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
        >
          Hire Me
        </a>
        <a
          href="https://drive.google.com/file/d/1KjYqLvpDP27CQSHTMDab4PJjT6yBVr3f/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border-2 border-portfolio-black dark:border-portfolio-white text-portfolio-black dark:text-portfolio-white text-sm font-medium transition-all duration-300 hover:bg-portfolio-black hover:text-portfolio-white dark:hover:bg-portfolio-white dark:hover:text-portfolio-black hover:scale-105 cursor-pointer"
        >
          Resume
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
