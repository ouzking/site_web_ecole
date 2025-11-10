import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section
      id="accueil"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-800 via-blue-900 to-slate-950 text-white"
    >
      {/* --- Fond animé subtil --- */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[900px] h-[900px] bg-blue-500/20 rounded-full blur-[140px] -top-40 left-1/2 -translate-x-1/2"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* --- Contenu principal --- */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full border border-white/20 backdrop-blur-md">
              <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
              <span className="text-sm font-semibold tracking-wide uppercase">
                Excellence & Innovation
              </span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Bienvenue à l’école <br />
            <span className="text-blue-300">Maman Coumba</span>
          </h1>

          <motion.p
            className="text-lg md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Offrez à votre enfant une éducation fondée sur{" "}
            <span className="font-semibold text-white">l’excellence</span>,{" "}
            <span className="font-semibold text-white">la créativité</span> et{" "}
            <span className="font-semibold text-white">la bienveillance</span>.
            Nous formons les leaders et bâtisseurs de demain.
          </motion.p>

          {/* --- Boutons d’action --- */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-white text-blue-800 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl flex items-center gap-2"
            >
              Inscrivez-vous maintenant
              <ChevronRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("a-propos")}
              className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-blue-900 transition-all"
            >
              Découvrir l’école
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* --- Décorations flottantes dynamiques --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-[10%] w-16 h-16 bg-blue-400/30 rounded-full blur-xl"
          animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-[15%] w-24 h-24 bg-blue-300/25 rounded-full blur-2xl"
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[65%] left-[45%] w-10 h-10 bg-white/10 rounded-full"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      {/* --- Dégradé inférieur pour transition vers la suite --- */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-950 to-transparent" />

      {/* --- Lueur douce autour du texte --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
    </section>
  );
};

export default HeroSection;
