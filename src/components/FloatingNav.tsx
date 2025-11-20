import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, Github, Mail } from "lucide-react";

const navItems = [
  { name: "Home", icon: <Home size={20} />, href: "#hero" },
  { name: "About", icon: <User size={20} />, href: "#about" },
  { name: "Projects", icon: <Code size={20} />, href: "#projects" },
  { name: "Experience", icon: <Briefcase size={20} />, href: "#experience" },
  { name: "GitHub", icon: <Github size={20} />, href: "#github" },
  { name: "Contact", icon: <Mail size={20} />, href: "#contact" },
];

const FloatingNav = () => {
  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-4 md:bottom-6 left-0 right-0 z-50 flex justify-center items-center px-3 md:px-4"
    >
      <div className="flex items-center gap-0.5 md:gap-1 px-2 md:px-3 py-2 md:py-2.5 bg-portfolio-white/90 dark:bg-portfolio-dark-bg/90 backdrop-blur-lg border border-portfolio-border dark:border-portfolio-dark-border rounded-full shadow-xl mx-auto">
        {navItems.map((item, index) => (
          <motion.a
            key={item.name}
            href={item.href}
            className="p-2 md:p-2.5 text-portfolio-gray dark:text-portfolio-dark-text-secondary hover:text-portfolio-black dark:hover:text-portfolio-white hover:bg-portfolio-gray/10 dark:hover:bg-portfolio-white/10 rounded-full transition-all duration-300 relative group cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.1 }}
          >
            <div className="w-5 h-5 md:w-auto md:h-auto">
              {item.icon}
            </div>
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-portfolio-black/90 dark:bg-portfolio-white/90 text-portfolio-white dark:text-portfolio-black text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none backdrop-blur-sm hidden md:block">
              {item.name}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default FloatingNav;
