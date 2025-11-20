
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/framer-animations";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  date?: string;
  featured?: boolean;
  images?: string[];
  index: number;
}

const ProjectCard = ({
  title,
  description,
  tech,
  github,
  live,
  date,
  featured,
  images = [],
  index,
}: ProjectCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <motion.div
      className="border border-portfolio-border dark:border-portfolio-dark-border p-6 hover:border-portfolio-black dark:hover:border-portfolio-white transition-colors duration-300"
      variants={fadeIn(0.1 * index)}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-portfolio-black dark:text-portfolio-dark-text">
          {title}
        </h3>
        {(github || live) && (
          <div className="flex gap-3 flex-shrink-0">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-gray hover:text-portfolio-blue dark:text-portfolio-dark-text-secondary dark:hover:text-portfolio-blue transition-colors cursor-pointer"
                aria-label={`GitHub repository for ${title}`}
              >
                <Github size={18} />
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-gray hover:text-portfolio-blue dark:text-portfolio-dark-text-secondary dark:hover:text-portfolio-blue transition-colors cursor-pointer"
                aria-label={`Live demo for ${title}`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        )}
      </div>

      {date && (
        <p className="text-sm text-portfolio-gray dark:text-portfolio-dark-text-secondary mb-3">
          {date}
        </p>
      )}

      <p className="text-sm text-portfolio-gray dark:text-portfolio-dark-text-secondary leading-relaxed mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="text-xs px-2 py-1 bg-portfolio-gray/10 dark:bg-portfolio-dark-text/10 text-portfolio-black dark:text-portfolio-dark-text rounded"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
