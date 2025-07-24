
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/framer-animations";
import ProjectCard from "./ProjectCard";

const projects = [
  {
  title: "ALCRM",
    description: "A career platform offering job listings, resume reviews, mentorship, and interview preparation tools. My role included building this product from scratch, building scalable features, and integrating expert-led services. The result was a robust, user-focused platform that empowers thousands of professionals in their career journey. It includes two dashboards: an Admin and a User.",
    tech: ["Next.js", "TailwindCSS", "Node.js", "Supabase", "Express.js", "PostgreSQL"],
    live: "https://www.alcrm.in/",
  },
  {
    title: "TechNest",
    description: "A hackathon participation website with an admin panel dashboard to download participants in an Excel file and manage the website.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    github: "https://github.com/therajusah/TechNest",
    live: "https://technest-yuon.onrender.com/",
  },
  {
    title: "BEUexamprep",
    description: "An exam preparation website for university students where they can download previous year questions, notes, and study materials.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Express.js"],
    github: "https://github.com/therajusah/BEUexamprep_",
    live: "https://beu-examprep.vercel.app/",
  },
  {
    title: "YouPrep",
    description: "AI-Based Interview Website that helps candidates prepare for interviews through personalized practice sessions.",
    tech: ["Next.js", "TypeScript", "Gemini API", "Tailwind CSS"],
    github: "https://github.com/therajusah/YouPrep",
    live: "https://you-prep.vercel.app/",
  },
  {
    title: "InstareelDownload",
    description: "A website for downloading Instagram reels, built as a freelance project.",
    tech: ["TypeScript", "Node.js", "Express", "Instagram API"],
  },
  {
    title: "Myrentmate",
    description: "Rental Platform for PG, Hostel, Flats - developed as a freelance MVP.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
  },
  {
    title: "Dating Assist",
    description: "A Dating assistant app helping users with suggestions and prompts for better conversations.",
    tech: ["React Native", "Gemini AI", "Tailwind CSS", "MongoDB"],
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div variants={fadeIn()}>
        <h2 className="section-title">
          <span className="section-title-number">03.</span>
          Projects
          <span className="section-title-line"></span>
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
            live={project.live}
            index={index}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
