import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SOCIALS } from "@/data/portfolio";
import { Github, Linkedin, Instagram, Mail, MapPin, Send } from "lucide-react";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Build Something{" "}
              <span className="text-gradient">Amazing</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              I'm currently open to new opportunities and collaborations. Whether you have a project 
              in mind or just want to connect, feel free to reach out!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="mailto:naufalhd12@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg glow"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Say Hello
            </motion.a>
            <motion.a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 glass-hover rounded-xl font-semibold text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, href: SOCIALS.github, label: "GitHub" },
              { icon: Linkedin, href: SOCIALS.linkedin, label: "LinkedIn" },
              { icon: Instagram, href: SOCIALS.instagram, label: "Instagram" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-hover rounded-xl text-muted-foreground hover:text-primary"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                title={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex items-center justify-center gap-2 text-muted-foreground"
          >
            <MapPin size={16} />
            <span>Bandung, Indonesia</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
