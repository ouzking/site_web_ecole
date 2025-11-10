import React from "react";
import { ChevronRight, X, Award, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Niveau {
  icon: string;
  titre: string;
  description: string;
  details: string;
}

interface NiveauxSectionProps {
  selectedNiveau: Niveau | null;
  setSelectedNiveau: React.Dispatch<React.SetStateAction<Niveau | null>>;
  scrollToSection: (sectionId: string) => void;
}

const NiveauxSection: React.FC<NiveauxSectionProps> = ({
  selectedNiveau,
  setSelectedNiveau,
  scrollToSection,
}) => {
  const niveaux: Niveau[] = [
    {
      icon: "🎨",
      titre: "Préscolaire",
      description:
        "Éveil, autonomie et découverte dans un environnement bienveillant.",
      details:
        "De 3 à 5 ans — Petite, Moyenne et Grande section. Nos enfants découvrent les bases de la lecture, du dessin, de la coordination et de la socialisation dans un cadre chaleureux.",
    },
    {
      icon: "📚",
      titre: "Primaire",
      description: "Apprentissage fondamental et curiosité intellectuelle.",
      details:
        "Du CI au CM2 — enseignement bilingue (français/arabe), mathématiques, sciences, éducation artistique et sportive. Nous formons des élèves confiants, curieux et responsables.",
    },
    {
      icon: "🔬",
      titre: "Collège",
      description: "Consolidation des savoirs et ouverture au monde moderne.",
      details:
        "De la 6e à la 3e — programme enrichi : langues vivantes, sciences expérimentales, TIC, accompagnement personnel et préparation au BFEM.",
    },
    {
      icon: "🎓",
      titre: "Lycée",
      description: "Excellence académique et préparation à l’enseignement supérieur.",
      details:
        "Seconde, Première et Terminale — filières L, S, STEG. Préparation au Bac, méthodologie de travail, développement de projets, leadership et orientation professionnelle.",
    },
  ];

  return (
    <section
      id="niveaux"
      className="py-28 bg-gradient-to-b from-blue-50 via-white to-blue-100 relative overflow-hidden"
    >
      {/* 💠 Arrière-plan décoratif (désactivé pour les clics) */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_25%_20%,#60a5fa,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- TITRE --- */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center gap-3 px-5 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold text-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            Parcours d’apprentissage
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nos Niveaux d&apos;Enseignement
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Du préscolaire au lycée, un accompagnement personnalisé vers
            l&apos;excellence et l&apos;épanouissement.
          </motion.p>
        </div>

        {/* --- CARTES DES NIVEAUX --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-20">
          {niveaux.map((niveau, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl shadow-lg border border-blue-100 p-8 relative overflow-hidden transition-all duration-500 hover:shadow-2xl cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="text-6xl mb-5">{niveau.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {niveau.titre}
              </h3>
              <p className="text-gray-600 mb-5 leading-relaxed">
                {niveau.description}
              </p>
              <button
                onClick={() => setSelectedNiveau(niveau)}
                className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                En savoir plus <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* --- MODAL DE DÉTAIL --- */}
        <AnimatePresence>
          {selectedNiveau && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNiveau(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header modal */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-6xl">{selectedNiveau.icon}</div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {selectedNiveau.titre}
                      </h3>
                      <p className="text-blue-600 font-semibold">
                        École Maman Coumba
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedNiveau(null)}
                    className="text-gray-400 hover:text-gray-600 transition"
                  >
                    <X className="w-8 h-8" />
                  </button>
                </div>

                {/* Détails */}
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {selectedNiveau.details}
                </p>

                {/* Points forts */}
                <div className="bg-blue-50 rounded-2xl p-6 mb-6 border border-blue-100">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    Points forts
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Enseignants qualifiés et passionnés</li>
                    <li>✓ Classes à effectif réduit</li>
                    <li>✓ Suivi personnalisé</li>
                    <li>✓ Environnement sécurisé et moderne</li>
                  </ul>
                </div>

                {/* Boutons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => {
                      setSelectedNiveau(null);
                      scrollToSection("contact");
                    }}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                  >
                    Inscrire mon enfant
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedNiveau(null)}
                    className="px-6 py-3 border-2 border-gray-300 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all"
                  >
                    Fermer
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default NiveauxSection;
