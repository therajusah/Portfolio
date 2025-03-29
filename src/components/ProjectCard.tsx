
import { motion } from "framer-motion";
import { cardAnimation, hoverScale } from "@/lib/framer-animations";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  index: number;
}

const ProjectCard = ({ title, description, tech, github, live, index }: ProjectCardProps) => {
  return (
    <motion.div
      className="project-card bg-portfolio-light"
      variants={cardAnimation}
      whileHover={hoverScale}
      custom={index}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-5">
          <h3 className="text-portfolio-white text-xl font-semibold">{title}</h3>
          <div className="flex gap-4">
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-portfolio-slate-light hover:text-portfolio-accent"
                aria-label={`GitHub repository for ${title}`}
              >
                <Github size={20} />
              </a>
            )}
            {live && (
              <a 
                href={live} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-portfolio-slate-light hover:text-portfolio-accent"
                aria-label={`Live demo for ${title}`}
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <p className="text-portfolio-slate-light mb-5 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span key={item} className="text-portfolio-slate-lightest text-xs font-mono">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
