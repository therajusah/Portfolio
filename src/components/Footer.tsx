
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/framer-animations";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="py-8 px-6 md:px-12 max-w-3xl mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn()}
    >
      <p className="text-portfolio-gray dark:text-portfolio-dark-text-secondary text-sm">
        Built with ❤️ by Raju Kumar © {currentYear}
      </p>
    </motion.footer>
  );
};

export default Footer;
