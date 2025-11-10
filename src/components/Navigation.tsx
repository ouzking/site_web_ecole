import React, { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🎯 Effet de détection du scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🌐 Liens de navigation
  const links = [
    { label: "Accueil", target: "accueil" },
    { label: "À propos", target: "a-propos" },
    { label: "Niveaux", target: "niveaux" },
    { label: "Activités", target: "activites" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: scrolled
          ? "rgba(255, 255, 255, 0.9)"
          : "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(20px)",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
      }}
      transition={{ duration: 0.4 }}
      className="fixed w-full z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex justify-between items-center h-20">
          {/* 🔷 Logo + Nom */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("accueil")}>
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center shadow-lg"
            >
              <GraduationCap className="w-7 h-7 text-white" />
            </motion.div>
            <div>
              <h1
                className={`text-xl sm:text-2xl font-extrabold tracking-tight transition-colors ${
                  scrolled ? "text-blue-800" : "text-white"
                }`}
              >
                École Maman Coumba
              </h1>
              <p
                className={`text-xs sm:text-sm font-medium transition-colors ${
                  scrolled ? "text-blue-600" : "text-blue-200"
                }`}
              >
                Excellence & Innovation
              </p>
            </div>
          </div>

          {/* 💻 Liens Desktop */}
          <div className="hidden md:flex space-x-10">
            {links.map((link, index) => (
              <motion.button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                whileHover={{ scale: 1.05 }}
                className={`relative font-semibold text-sm tracking-wide transition-all ${
                  scrolled
                    ? "text-gray-800 hover:text-blue-700"
                    : "text-white hover:text-blue-200"
                }`}
              >
                {link.label}
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-blue-600 transition-all duration-300"
                />
              </motion.button>
            ))}
          </div>

          {/* 📱 Bouton Mobile */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-md focus:outline-none transition"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? (
              <X
                className={`w-7 h-7 transition-colors ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`w-7 h-7 transition-colors ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* 🌙 Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-xl"
          >
            <div className="px-5 py-6 space-y-4">
              {links.map((link, index) => (
                <motion.button
                  key={link.target}
                  onClick={() => {
                    scrollToSection(link.target);
                    setMenuOpen(false);
                  }}
                  whileHover={{ x: 6 }}
                  className="block w-full text-left text-gray-800 hover:text-blue-600 font-medium tracking-wide text-lg"
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.div
                className="pt-4 border-t border-gray-100 text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                © {new Date().getFullYear()} École Maman Coumba. Tous droits réservés.
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
