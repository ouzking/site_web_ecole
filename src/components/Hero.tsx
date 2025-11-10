import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section
      id="accueil"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900"
    >
      {/* Motif de fond subtil */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.2) 1px, transparent 1px), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Halo lumineux */}
      <div className="absolute -top-40 left-1/2 w-[800px] h-[800px] bg-blue-400/30 blur-[120px] rounded-full -translate-x-1/2" />

      {/* Contenu principal */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-xl">
            Bienvenue à l’École<br />
            <span className="text-blue-200">Maman Coumba</span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Une éducation fondée sur{" "}
            <span className="font-semibold text-white">l’excellence</span>,{" "}
            <span className="font-semibold text-white">l’innovation</span> et{" "}
            <span className="font-semibold text-white">la bienveillance</span>,
            pour préparer les leaders de demain.
          </motion.p>

          {/* Boutons d’action */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-white text-blue-700 rounded-full font-bold hover:bg-blue-50 transition-transform transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              Inscrivez-vous maintenant
              <ChevronRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => scrollToSection("a-propos")}
              className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-blue-800 transition-all shadow-inner"
            >
              Découvrir l’école
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Éléments décoratifs flottants */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-blue-300 rounded-full opacity-20"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-white rounded-full opacity-10"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      {/* Dégradé inférieur */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-900 to-transparent" />
    </section>
  );
};

export default Hero;
