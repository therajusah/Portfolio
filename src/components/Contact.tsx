
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/framer-animations";
import { Github, Twitter, Mail, Linkedin } from "lucide-react";

const contactLinks = [
  {
    name: "GitHub",
    url: "https://github.com/therajusah",
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: "Twitter",
    url: "https://x.com/therajusah",
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/therajusah",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: "Email",
    url: "mailto:devraju0808@gmail.com",
    icon: <Mail className="w-5 h-5" />,
  },
];

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-12 md:py-16 px-6 md:px-12 max-w-3xl mx-auto scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="flex flex-wrap gap-6 justify-center" variants={fadeIn(0.1)}>
        {contactLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolio-gray dark:text-portfolio-dark-text-secondary hover:text-portfolio-black dark:hover:text-portfolio-white transition-colors cursor-pointer"
            variants={fadeIn(0.1 * index)}
            aria-label={link.name}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Contact;
