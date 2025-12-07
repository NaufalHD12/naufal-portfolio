import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if we're on a project detail page
  const isProjectDetail = location.pathname.startsWith('/project/');

  // Handle navigation based on current page
  const handleNavClick = (href: string) => {
    if (isProjectDetail) {
      // Navigate to main page with the section
      window.location.href = `/${href}`;
    } else {
      // Smooth scroll to section on current page
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 left-4 right-4 z-50 transition-all duration-300 flex justify-center"
    >
      <div
        className={`glass rounded-full shadow-2xl px-8 py-3`}
      >
        <div className="flex items-center justify-center gap-6 md:gap-8">
          <motion.button
            onClick={() => (window.location.href = "/")}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/my-photo.png"
              alt="Naufal HD"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to NH text if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML =
                    '<span class="text-2xl font-bold text-gradient">NH</span>';
                }
              }}
            />
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          <motion.button
            onClick={() => handleNavClick("#contact")}
            className="hidden md:block px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground ml-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-20 left-12 right-12 z-40 glass rounded-2xl shadow-2xl border border-border/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    handleNavClick(link.href);
                    setIsOpen(false);
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2 text-center hover:bg-primary/5 rounded-lg px-3 w-full"
                >
                  {link.label}
                </button>
              ))}
              <div className="border-t border-border/20 pt-4 mt-2 flex justify-center">
                <button
                  onClick={() => {
                    handleNavClick("#contact");
                    setIsOpen(false);
                  }}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Let's Talk
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
