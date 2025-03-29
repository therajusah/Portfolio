
import { motion } from "framer-motion";
import { fadeIn, rotateAnimation } from "@/lib/framer-animations";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="py-8 px-6 text-center text-portfolio-slate-light font-mono text-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn()}
    >
      <motion.div
        className="flex justify-center items-center gap-2 mx-auto"
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          className="w-5 h-5 text-portfolio-accent opacity-70"
          variants={rotateAnimation}
          animate="animate"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </motion.div>
        <p>
          Designed & Built by Raju Kumar &copy; {currentYear}
        </p>
      </motion.div>
      
      <motion.div 
        className="text-xs mt-3 opacity-70"
        initial={{ opacity: 0 }}
        whileInView={{ 
          opacity: 0.7,
          transition: {
            delay: 0.5,
            duration: 0.8
          }
        }}
        viewport={{ once: true }}
      >
        Built with React, Tailwind CSS, and Framer Motion
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
