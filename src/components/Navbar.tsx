
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/framer-animations";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

interface NavLink {
  name: string;
  url: string;
}

const navLinks: NavLink[] = [
  { name: "Home", url: "#hero" },
  { name: "Projects", url: "#projects" },
  { name: "About", url: "#about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      className="fixed top-0 w-full z-50 bg-portfolio-white/80 dark:bg-portfolio-dark-bg-secondary/80 backdrop-blur-md py-4 md:py-5 border-b border-portfolio-border dark:border-portfolio-dark-border transition-all duration-300"
    >
      <div className="container max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          <motion.div variants={fadeIn(0.1)} className="flex-shrink-0">
            <a href="#hero" className="text-base md:text-lg font-mono font-medium text-portfolio-black dark:text-portfolio-dark-text hover:text-portfolio-blue transition-colors cursor-pointer">
              RK
            </a>
          </motion.div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8 items-center">
              {navLinks.map((link, i) => (
                <motion.li key={link.name} variants={fadeIn(0.1 * (i + 2))}>
                  <a
                    href={link.url}
                    className="nav-link text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.button
            variants={fadeIn(0.5)}
            onClick={toggleTheme}
            className="hidden md:flex items-center justify-center w-9 h-9 border border-portfolio-border dark:border-portfolio-dark-border hover:border-portfolio-black dark:hover:border-portfolio-white transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon size={16} className="text-portfolio-black" />
            ) : (
              <Sun size={16} className="text-portfolio-white" />
            )}
          </motion.button>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="text-portfolio-black dark:text-portfolio-dark-text"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              className="text-portfolio-black dark:text-portfolio-dark-text"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="fixed top-0 left-0 h-screen w-full bg-portfolio-white dark:bg-portfolio-dark-bg z-40 flex flex-col p-8 pt-24">
            <ul className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-portfolio-black dark:text-portfolio-dark-text hover:text-portfolio-blue transition-colors text-base block py-2 font-medium cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
