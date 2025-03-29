
import { motion } from "framer-motion";
import { cardAnimation } from "@/lib/framer-animations";

interface SkillBadgeProps {
  name: string;
  index: number;
}

const SkillBadge = ({ name, index }: SkillBadgeProps) => {
  return (
    <motion.div
      variants={cardAnimation}
      custom={index}
      className="inline-block px-4 py-2 bg-portfolio-light rounded-md text-portfolio-slate-lightest m-2 relative overflow-hidden"
      whileHover={{
        color: "#64ffda",
        backgroundColor: "rgba(100, 255, 218, 0.1)",
        borderColor: "#64ffda",
        y: -5,
        transition: {
          duration: 0.3,
          ease: "easeOut"
        }
      }}
    >
      <motion.span className="relative z-10">{name}</motion.span>
      <motion.div
        className="absolute inset-0 bg-portfolio-accent opacity-0"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ 
          scale: 1,
          opacity: 0.03,
          transition: {
            duration: 0.4
          }
        }}
      />
      <motion.div
        className="absolute -inset-1 rounded opacity-0"
        initial={{ opacity: 0 }}
        whileHover={{ 
          opacity: 0.1,
          transition: {
            duration: 0.4
          }
        }}
        style={{
          background: "radial-gradient(circle at center, #64ffda 0%, transparent 70%)"
        }}
      />
    </motion.div>
  );
};

export default SkillBadge;
