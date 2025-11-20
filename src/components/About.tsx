
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/framer-animations";

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "Git & GitHub",
  "REST APIs",
  "Supabase",
  "React Native",
  "AI Integration",
  "DevOps Basics",
];

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-12 md:py-16 px-6 md:px-12 max-w-3xl mx-auto scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-portfolio-black dark:text-portfolio-dark-text mb-6"
        variants={fadeIn(0.1)}
      >
        About
      </motion.h2>

      <motion.div className="space-y-4 text-base md:text-lg text-portfolio-gray dark:text-portfolio-dark-text-secondary leading-relaxed" variants={fadeIn(0.2)}>
        <p>
          Hello! I'm Raju, a Full Stack Developer passionate about creating interactive
          applications and experiences on the web. My journey in web development started
          during college, and I've been building digital experiences ever since.
        </p>

        <p>
          I enjoy the entire process of development, from planning and designing to solving
          real-world problems with code. My goal is to always build products that are fast,
          accessible, and user-friendly.
        </p>

        <p>
          I've had the privilege of working on exciting freelance projects, building MVPs
          for various startups. I am part of Cohort 3.0 at 100xdevs and currently focused
          on expanding my knowledge in FullStack development & DevOps.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;
