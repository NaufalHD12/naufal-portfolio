import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "@/data/portfolio";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold mb-4 block">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Selected <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From AI-powered platforms to full-stack applications, here are
              some projects I'm proud of.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-hover rounded-2xl overflow-hidden group"
              >
                <Link to={`/project/${project.slug}`} className="block">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <motion.div
                      className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-lg group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: 45 }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>

                  {/* Project Header */}
                  <div className="p-6 pb-4">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.summary}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary/50 text-secondary-foreground text-xs font-mono rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 5 && (
                        <span className="px-2 py-1 text-muted-foreground text-xs">
                          +{project.techStack.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                </Link>

                {/* Project Links */}
                <div className="px-6 pb-6 pt-2 flex items-center gap-3 border-t border-border/50">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    <Github size={16} />
                    View Code
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/NaufalHD12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 glass-hover rounded-xl font-medium text-primary"
              whileHover={{ scale: 1.05 }}
            >
              <Github size={20} />
              Check out my GitHub
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
