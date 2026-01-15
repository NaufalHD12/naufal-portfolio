import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/portfolio";
import { ArrowLeft, Github, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, Cpu, BookOpen } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  // Prevent scroll restoration that might cause scrolling to bottom
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/#projects" className="text-primary hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft size={18} />
                Back to Projects
              </Link>
            </motion.div>

            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden mb-12"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-80 object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </motion.div>

            {/* Project Header */}
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.summary}
              </p>
            </motion.header>

            {/* Project Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 glass-hover rounded-xl font-medium"
              >
                <Github size={20} />
                View on GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              )}
            </motion.div>

            <div className="space-y-12">
              
              {/* 1. The Problem */}
              {project.problem && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass rounded-2xl p-6 md:p-8"
                >
                  <h2 className="flex items-center gap-3 text-2xl font-bold mb-6">
                    <AlertTriangle className="w-6 h-6 text-orange-500" />
                    The Problem
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {project.problem.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* 2. The Solution & Features */}
              {(project.solution || project.features) && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass rounded-2xl p-6 md:p-8"
                >
                  <h2 className="flex items-center gap-3 text-2xl font-bold mb-6">
                    <Lightbulb className="w-6 h-6 text-yellow-500" />
                    The Solution
                  </h2>
                  
                  {project.solution && (
                    <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                      {project.solution.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  {project.features && (
                    <div className="bg-secondary/20 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {project.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <span className="text-muted-foreground text-sm md:text-base">
                              {feature.includes(":") ? (
                                <>
                                  <span className="font-semibold text-foreground">{feature.split(":")[0]}:</span>
                                  {feature.substring(feature.indexOf(":") + 1)}
                                </>
                              ) : (
                                feature
                              )}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.section>
              )}

              {/* 3. Technical Implementation */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass rounded-2xl p-6 md:p-8"
              >
                <h2 className="flex items-center gap-3 text-2xl font-bold mb-6">
                  <Cpu className="w-6 h-6 text-blue-500" />
                  Technical Implementation
                </h2>

                {project.techImplementation && (
                  <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                    {project.techImplementation.map((paragraph, index) => (
                      <p key={index}>
                        {paragraph.includes(":") ? (
                          <>
                            <span className="font-semibold text-foreground">{paragraph.split(":")[0]}:</span>
                            {paragraph.substring(paragraph.indexOf(":") + 1)}
                          </>
                        ) : (
                          paragraph
                        )}
                      </p>
                    ))}
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-secondary/50 text-secondary-foreground font-mono text-sm rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* 4. Lessons Learned */}
              {project.lessonsLearned && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass rounded-2xl p-6 md:p-8 border-l-4 border-green-500"
                >
                  <h2 className="flex items-center gap-3 text-2xl font-bold mb-6">
                    <BookOpen className="w-6 h-6 text-green-500" />
                    Lessons Learned
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {project.lessonsLearned.map((paragraph, index) => (
                      <div key={index} className="flex gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                         <p>{paragraph}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}
            
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
