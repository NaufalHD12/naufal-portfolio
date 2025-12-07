import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TIMELINE, CERTIFICATIONS } from "@/data/portfolio";
import { Briefcase, GraduationCap, Award, ExternalLink } from "lucide-react";

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold mb-4 block">Career Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience & <span className="text-gradient">Education</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Timeline */}
            <div>
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <Briefcase className="text-primary" />
                Timeline
              </h3>
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

                {TIMELINE.map((item, index) => (
                  <motion.div
                    key={item.title + item.subtitle}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-12 pb-8 last:pb-0"
                  >
                    {/* Dot */}
                    <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                    
                    <div className="glass-hover p-5 rounded-xl">
                      <span className="text-primary text-sm font-mono">{item.date}</span>
                      <h4 className="font-bold mt-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.subtitle}</p>
                      <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <Award className="text-primary" />
                Certifications
              </h3>
              <div className="space-y-3">
                {CERTIFICATIONS.map((cert, index) => (
                  <motion.a
                    key={cert.name}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="glass-hover p-4 rounded-xl flex items-center justify-between group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-medium group-hover:text-primary transition-colors">
                      {cert.name}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-3" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
