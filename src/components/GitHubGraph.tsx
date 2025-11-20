
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/framer-animations";
import { Github } from "lucide-react";

const GitHubGraph = () => {
  const username = "therajusah";

  return (
    <motion.section
      id="github"
      className="py-12 md:py-16 px-6 md:px-12 max-w-3xl mx-auto scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-portfolio-black dark:text-portfolio-dark-text mb-8"
        variants={fadeIn(0.1)}
      >
        GitHub Heatmap
      </motion.h2>

      <motion.div variants={fadeIn(0.2)}>
        <div className="w-full overflow-x-auto">
          <img
            src={`https://ghchart.rshah.org/${username}`}
            alt="GitHub Contribution Graph"
            className="w-full"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default GitHubGraph;
