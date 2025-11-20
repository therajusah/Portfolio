
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/framer-animations";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "AISiteBuilder",
    description:
      "A full-stack AI-powered website builder similar to lovable.dev. Users can generate complete websites from text prompts using Google Gemini AI. Features include real-time code pr  eview in sandboxed environments, Monaco code editor with syntax highlighting, streaming AI responses, and responsive design support. Built with modern tech stack for optimal performance.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Google Gemini AI","E2B", "Node.js", "Express.js", "Monaco Editor"],
    github: "https://github.com/therajusah/AISiteBuilder",
    live: "https://lovable.devraju.dev/",
    date: "November 2025",
    featured: true,
    images: [
      "/assets/aisitebuilder.png",
    ],
  },
  {
    title: "ALCRM",
    description:
      "A career platform offering job listings, resume reviews, mentorship, and interview preparation tools. My role included building this product from scratch, building scalable features, and integrating expert-led services. The result was a robust, user-focused platform that empowers thousands of professionals in their career journey.",
    tech: ["Next.js", "TailwindCSS", "Node.js", "Supabase", "Express.js", "PostgreSQL"],
    live: "https://www.alcrm.in/",
    date: "October 2025",
  },
  {
    title: "TechNest",
    description:
      "A hackathon participation website with an admin panel dashboard to download participants in an Excel file and manage the website.",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    github: "https://github.com/therajusah/TechNest",
    live: "https://technest-yuon.onrender.com/",
    date: "July 2025",
  },
  {
    title: "BEUexamprep",
    description:
      "An exam preparation website for university students where they can download previous year questions, notes, and study materials.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Express.js"],
    github: "https://github.com/therajusah/BEUexamprep_",
    live: "https://beu-examprep.vercel.app/",
    date: "June 2025",
  },
  {
    title: "YouPrep: AI Interview Assistant",
    description:
      "AI-Based Interview Website that helps candidates prepare for interviews through personalized practice sessions powered by Gemini AI.",
    tech: ["Next.js", "TypeScript", "Gemini API", "Tailwind CSS"],
    github: "https://github.com/therajusah/YouPrep",
    live: "https://you-prep.vercel.app/",
    date: "April 2025",
  },
  {
    title: "InstareelDownload",
    description: "A website for downloading Instagram reels, built as a freelance project.",
    tech: ["TypeScript", "Node.js", "Express", "Instagram API"],
    date: "March 2025",

  },
  {
    title: "Myrentmate",
    description: "Rental Platform for PG, Hostel, Flats - developed as a freelance MVP.",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    date: "February 2025",

  },
  {
    title: "Dating Assist",
    description:
      "A Dating assistant app helping users with suggestions and prompts for better conversations.",
    tech: ["React Native", "Gemini AI", "Tailwind CSS", "MongoDB"],
    date: "January 2025",
   
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-12 md:py-16 px-6 md:px-12 max-w-3xl mx-auto scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-portfolio-black dark:text-portfolio-dark-text mb-8"
        variants={fadeIn(0.1)}
      >
        Projects
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 gap-6"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
            live={project.live}
            date={project.date}
            featured={project.featured}
            images={project.images}
            index={index}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
