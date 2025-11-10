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
        backgroundColor: scrolled ? "#ffffff" : "rgba(255, 255, 255, 0)",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.08)" : "none",
      }}
      transition={{ duration: 0.3 }}
      className="fixed w-full z-50 backdrop-blur-md transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo + nom */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-md">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1
                className={`text-xl sm:text-2xl font-bold transition-colors ${
                  scrolled ? "text-blue-800" : "text-white"
                }`}
              >
                École Maman Coumba
              </h1>
              <p
                className={`text-xs sm:text-sm transition-colors ${
                  scrolled ? "text-blue-600" : "text-blue-200"
                }`}
              >
                Excellence et Innovation
              </p>
            </div>
          </div>

          {/* Liens desktop */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className={`font-medium transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white hover:text-blue-200"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Bouton mobile */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-md focus:outline-none"
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

      {/* Menu mobile animé */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg border-t border-gray-100"
          >
            <div className="px-5 py-6 space-y-4">
              {links.map((link) => (
                <button
                  key={link.target}
                  onClick={() => {
                    scrollToSection(link.target);
                    setMenuOpen(false);
                  }}
                  className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
