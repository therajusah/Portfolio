
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/framer-animations";

const About = () => {
  return (
    <motion.section
      id="about"
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={fadeIn()}>
        <h2 className="section-title">
          <span className="section-title-number">01.</span>
          About Me
          <span className="section-title-line"></span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12 items-start">
        <motion.div 
          className="md:col-span-2 space-y-4 text-lg"
          variants={slideIn("right")}
        >
          <p>
            Hello! I'm Raju, a Full Stack Developer passionate about creating interactive applications and experiences on the web. 
            My journey in web development started during college, and I've been building digital experiences ever since.
          </p>
          
          <p>
            I enjoy the entire process of development, from planning and designing to solving real-world problems with code. 
            My goal is to always build products that are fast, accessible, and user-friendly.
          </p>
          
          <p>
            I've had the privilege of working on exciting freelance projects, building MVPs for various startups. 
            I'm always looking to learn new technologies and improve my skills.
          </p>

          <p>I am part of Cohort 3.0 at 100xdevs and currently focused on expanding my knowledge in FullStack development & Devops</p>
        </motion.div>

        <motion.div 
          className="mx-auto"
          variants={fadeIn(0.2)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-60 h-60">
            <div className="absolute inset-0 border-2 border-portfolio-accent rounded-md transform translate-x-4 translate-y-4"></div>
            <div className="w-60 h-60 rounded-md overflow-hidden relative z-10">
              <img 
                src="/assets/66d30b75-b553-4e0f-9cbb-70addddac97d.png" 
                alt="Raju Kumar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
