
import { motion } from "framer-motion";
import { fadeIn, slideIn, letterAnimation, floatAnimation, pulseAnimation } from "@/lib/framer-animations";
import { Github, Twitter, Mail, Phone, Linkedin, LucideLinkedin } from "lucide-react";

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
  {
    name: "Phone",
    url: "tel:+917061293830",
    icon: <Phone className="w-5 h-5" />,
  },
];


const Contact = () => {
  const title = "Get In Touch";
  const titleArray = title.split("");

  return (
    <motion.section
      id="contact"
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={fadeIn()}>
        <h2 className="section-title">
          <span className="section-title-number">04.</span>
          Contact
          <span className="section-title-line"></span>
        </h2>
      </motion.div>

      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={slideIn("up")}
      >
        <div className="text-portfolio-white text-2xl md:text-3xl font-semibold mb-6 overflow-hidden">
          {titleArray.map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: i => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.05,
                    duration: 0.5,
                    ease: [0.6, 0.01, -0.05, 0.95],
                  }
                })
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
        
        <motion.p 
          className="text-lg mb-10"
          variants={fadeIn(0.3)}
        >
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll do my best to get back to you!
        </motion.p>

        <ul className="flex flex-wrap justify-center gap-8 mb-10">
          {contactLinks.map((link, index) => (
            <motion.li
              key={link.name}
              variants={fadeIn(0.1 * index)}
              whileHover={{ scale: 1.1 }}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-portfolio-slate-light hover:text-portfolio-accent transition-colors duration-300"
              >
                <motion.span 
                  className="p-4 rounded-full border border-portfolio-lightest"
                  whileHover={{
                    borderColor: "#64ffda",
                    boxShadow: "0 0 10px rgba(100, 255, 218, 0.3)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    variants={floatAnimation}
                    animate="animate"
                  >
                    {link.icon}
                  </motion.div>
                </motion.span>
                <span className="font-mono text-sm">{link.name}</span>
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.div 
          variants={pulseAnimation}
          animate="animate"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <a 
            href="mailto:devraju0808@gmail.com" 
            className="button relative overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-portfolio-accent/10 rounded"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            Say Hello
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
