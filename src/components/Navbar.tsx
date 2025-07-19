
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/framer-animations";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  url: string;
}

const navLinks: NavLink[] = [
  { name: "About", url: "#about" },
  { name: "Skills", url: "#skills" },
  { name: "Projects", url: "#projects" },
  { name: "Contact", url: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-portfolio-dark/90 backdrop-blur-sm py-4 shadow-md" : "py-6"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div variants={fadeIn(0.1)}>
          <a href="#" className="text-portfolio-accent font-mono text-lg font-semibold">
            &lt;RK /&gt;
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, i) => (
              <motion.li key={link.name} variants={fadeIn(0.1 * (i + 1))}>
                <a href={link.url} className="nav-link">
                  <span className="nav-number">0{i + 1}.</span>
                  {link.name}
                </a>
              </motion.li>
            ))}
            <motion.li variants={fadeIn(0.5)}>
              <a 
                href="https://shorturl.at/2EmfQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button"
              >
                Resume
              </a>
            </motion.li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <motion.div variants={fadeIn(0.5)} className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-portfolio-accent"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </motion.div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed top-0 right-0 h-screen w-[70%] bg-portfolio-light z-50 flex flex-col p-8">
            <div className="flex justify-end mb-8">
              <Button
                variant="ghost"
                size="icon"
                className="text-portfolio-accent"
                onClick={() => setIsOpen(false)}
              >
                <X />
              </Button>
            </div>
            <ul className="flex flex-col space-y-6">
              {navLinks.map((link, i) => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    className="nav-link block py-2 text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="nav-number">0{i + 1}.</span>
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
