
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/framer-animations";
import SkillBadge from "./SkillBadge";

const skills = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "React.js",
  "HTML",
  "CSS",
  "Git",
  "REST API",
  "Responsive Design",
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="section bg-portfolio-dark/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={fadeIn()}>
        <h2 className="section-title">
          <span className="section-title-number">02.</span>
          Skills
          <span className="section-title-line"></span>
        </h2>
      </motion.div>

      <motion.div
        className="text-center"
        variants={staggerContainer}
      >
        <p className="max-w-3xl mx-auto mb-10 text-lg">
          I've worked with a range of technologies in the web development world, from front-end to back-end:
        </p>

        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <SkillBadge key={skill} name={skill} index={index} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
