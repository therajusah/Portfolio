import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-portfolio-border dark:border-portfolio-dark-border bg-portfolio-white/80 dark:bg-portfolio-dark-bg/80 backdrop-blur-sm hover:border-portfolio-black dark:hover:border-portfolio-white transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon size={18} className="text-portfolio-black" />
      ) : (
        <Sun size={18} className="text-portfolio-white" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
