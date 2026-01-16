import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { SKILLS } from "@/data/portfolio";

const ALL_TAB = "All";

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(ALL_TAB);

  const currentCategory = SKILLS.find(cat => cat.title === activeCategory);
  const allSkills = SKILLS.flatMap(cat => cat.skills);

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold mb-4 block">Technical Skills</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit spanning web development, AI/ML, cloud infrastructure, and other modern technologies.
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {/* All Tab */}
            <button
              onClick={() => setActiveCategory(ALL_TAB)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === ALL_TAB
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "glass hover:bg-white/10 text-muted-foreground hover:text-foreground"
              }`}
            >
              All
            </button>
            {SKILLS.map((category) => (
              <button
                key={category.title}
                onClick={() => setActiveCategory(category.title)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.title
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "glass hover:bg-white/10 text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.title}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {(activeCategory === ALL_TAB ? allSkills : currentCategory?.skills || []).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass p-5 rounded-xl flex flex-col items-center justify-center gap-3 cursor-default group border border-white/5 hover:border-primary/30 hover:bg-white/5 transition-all"
                >
                  <skill.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
