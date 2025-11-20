import { motion } from "framer-motion";
import { fadeIn } from "@/lib/framer-animations";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance Projects",
    period: "2024 - Present",
    description: "Building MVPs for startups, full-stack development with React, Node.js, and modern web technologies.",
  },
  {
    role: "Super 30 (2.0)",
    company: "100xDevs",
    period: "2024",
    description: "Intensive full-stack development program focusing on scalable web applications, DevOps, and system design. I was part of the cohort 3.0 and completed the program with flying colors.",
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-12 md:py-16 px-6 md:px-12 max-w-3xl mx-auto scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-portfolio-black dark:text-portfolio-dark-text mb-8"
        variants={fadeIn(0.1)}
      >
        Experience
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="border border-portfolio-border dark:border-portfolio-dark-border p-6 hover:border-portfolio-black dark:hover:border-portfolio-white transition-colors duration-300"
            variants={fadeIn(0.1 * (index + 2))}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
              <h3 className="text-lg font-semibold text-portfolio-black dark:text-portfolio-dark-text">
                {exp.role}
              </h3>
              <span className="text-sm text-portfolio-gray dark:text-portfolio-dark-text-secondary">
                {exp.period}
              </span>
            </div>
            <p className="text-sm font-medium text-portfolio-gray dark:text-portfolio-dark-text-secondary mb-2">
              {exp.company}
            </p>
            <p className="text-sm text-portfolio-gray dark:text-portfolio-dark-text-secondary leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
