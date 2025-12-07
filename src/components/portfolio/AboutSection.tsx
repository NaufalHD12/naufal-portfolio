import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Server, Zap } from "lucide-react";

const highlights = [
  { icon: Server, label: "Backend Development", description: "Building robust APIs & microservices" },
  { icon: Brain, label: "AI & Machine Learning", description: "Creating intelligent solutions" },
  { icon: Code2, label: "Full-Stack Capable", description: "End-to-end development" },
  { icon: Zap, label: "High Performance", description: "Optimized & scalable systems" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold mb-4 block">About Me</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Passionate About Building{" "}
                <span className="text-gradient">Intelligent Systems</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I'm a Software Engineering student at Universitas Pendidikan Indonesia with a 3.81 GPA, 
                specializing in Backend and AI Engineering. I love turning complex problems into elegant, 
                scalable solutions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With experience from internships at Pertamina and Home Credit, I've developed 
                AI-powered automation systems and credit scoring models achieving 96% accuracy. 
                I'm currently expanding my skills in full-stack development with React.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="glass px-6 py-3 rounded-xl">
                  <span className="text-3xl font-bold text-gradient">3.81</span>
                  <span className="text-muted-foreground ml-2">GPA</span>
                </div>
                <div className="glass px-6 py-3 rounded-xl">
                  <span className="text-3xl font-bold text-gradient">11+</span>
                  <span className="text-muted-foreground ml-2">Projects</span>
                </div>
                <div className="glass px-6 py-3 rounded-xl">
                  <span className="text-3xl font-bold text-gradient">8+</span>
                  <span className="text-muted-foreground ml-2">Certifications</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Highlight Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-hover p-6 rounded-2xl group"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
