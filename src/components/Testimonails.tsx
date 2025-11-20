import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/framer-animations";
import { Quote, CheckCircle2, Calendar } from "lucide-react";

interface Testimonial {
  name: string;
  date: string;
  text: string;
  verified?: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: "Abhishek T.",
    date: "Jul 2025",
    verified: true,
    text: "I've had the pleasure of working with Raju on multiple freelance projects over the past few months, and he has consistently delivered high-quality work every single time. Whether it was tight deadlines, complex requirements, or evolving project scopes, Raju handled everything with professionalism and a strong commitment to excellence. His communication is clear, his turnaround time is impressive, and the results always meet or exceed expectations. I highly recommend Raju to anyone looking for a reliable and skilled freelancer.",
  },
  {
    name: "Ayush S.",
    date: "Jul 2025",
    verified: true,
    text: "I hired Raju for a client project, and he truly delivered beyond expectations. He met every deadline and consistently went the extra mile to ensure the project was delivered on time and with top-notch quality. Raju also maintained excellent coding practices throughout, making collaboration smooth and the codebase clean and maintainable. Highly recommend working with him if you're looking for reliability, skill, and dedication!",
  },
  {
    name: "Sachin H.",
    date: "Jul 2025",
    verified: true,
    text: "He is working on ALCRM. till now my experience is very good. i is delivering the work on time.",
  },
];

const Testimonials = () => {
  return (
    <motion.section
      id="testimonials"
      className="py-12 md:py-16 px-6 md:px-12 max-w-3xl mx-auto scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-portfolio-black dark:text-portfolio-dark-text mb-8"
        variants={fadeIn(0.1)}
      >
        What Clients Say
      </motion.h2>

      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 gap-6"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            className="group relative border border-portfolio-border dark:border-portfolio-dark-border p-6 md:p-8 hover:border-portfolio-black dark:hover:border-portfolio-white transition-all duration-300 bg-portfolio-white/50 dark:bg-portfolio-dark-bg-secondary/30 backdrop-blur-sm rounded-lg hover:shadow-lg"
            variants={fadeIn(0.1 * (index + 1))}
          >
            <Quote
              className="absolute top-6 right-6 text-portfolio-blue/10 dark:text-portfolio-blue/20 group-hover:text-portfolio-blue/20 dark:group-hover:text-portfolio-blue/30 transition-colors duration-300"
              size={40}
            />
            <div className="relative z-10">
              <p className="text-base md:text-lg text-portfolio-black dark:text-portfolio-dark-text leading-relaxed mb-6 font-light italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-portfolio-border/50 dark:border-portfolio-dark-border/50">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-portfolio-black dark:text-portfolio-dark-text">
                        {testimonial.name}
                      </p>
                      {testimonial.verified && (
                        <div className="flex items-center gap-1.5 text-portfolio-blue dark:text-portfolio-blue">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-portfolio-blue dark:text-portfolio-blue"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              fill="currentColor"
                              className="text-portfolio-blue dark:text-portfolio-blue"
                            />
                            <path
                              d="M8 12l2 2 4-4"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-xs font-medium">Verified</span>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-portfolio-gray dark:text-portfolio-dark-text-secondary mt-1">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-12 text-center"
        variants={fadeIn(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.a
          href="https://cal.com/therajusah/30-min-chat"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-portfolio-black dark:bg-portfolio-white text-portfolio-white dark:text-portfolio-black text-base font-medium transition-all duration-300 cursor-pointer rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Calendar size={20} />
          Book a Call to Discuss Your Project
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
