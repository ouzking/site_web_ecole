import React from "react";
import { ChevronRight, X, Award } from "lucide-react";
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
        "Éveil et développement des tout-petits dans un cadre bienveillant.",
      details:
        "De 3 à 5 ans : Petite section, Moyenne section, Grande section. Programme d’éveil sensoriel, activités ludiques, initiation à la lecture et à l’écriture, développement de la motricité fine et globale.",
    },
    {
      icon: "📚",
      titre: "Primaire",
      description: "Acquisition des bases fondamentales et curiosité intellectuelle.",
      details:
        "Du CI au CM2 : Enseignement bilingue (français/arabe), mathématiques, sciences, éducation physique et sportive, arts plastiques et musique. Développement de la discipline, du respect et du travail en équipe.",
    },
    {
      icon: "🔬",
      titre: "Collège",
      description: "Consolidation des connaissances et ouverture au monde.",
      details:
        "De la 6ème à la 3ème : Programme national enrichi, sciences physiques et SVT, langues vivantes (anglais, espagnol), informatique, méthodologie et préparation au BFEM.",
    },
    {
      icon: "🎓",
      titre: "Lycée",
      description: "Préparation à l’excellence et à l’enseignement supérieur.",
      details:
        "Seconde, Première et Terminale : Séries L, S et STEG. Enseignement rigoureux, cours de renforcement, accompagnement à l’orientation et préparation intensive au BAC.",
    },
  ];

  return (
    <section id="niveaux" className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Décor lumineux */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_30%_30%,#3b82f6,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- TITRE --- */}
        <div className="text-center mb-20">
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
            Du Préscolaire à la Terminale — un parcours complet d&apos;excellence et d&apos;épanouissement.
          </motion.p>
        </div>

        {/* --- CARTES DES NIVEAUX --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {niveaux.map((niveau, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100 hover:shadow-2xl hover:-translate-y-3 transition-all"
            >
              <div className="text-6xl mb-4">{niveau.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{niveau.titre}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{niveau.description}</p>
              <button
                onClick={() => setSelectedNiveau(niveau)}
                className="mt-4 flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
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
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
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
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-6xl">{selectedNiveau.icon}</div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{selectedNiveau.titre}</h3>
                      <p className="text-blue-600 font-semibold">École Maman Coumba</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedNiveau(null)}
                    className="text-gray-400 hover:text-gray-600 transition"
                  >
                    <X className="w-8 h-8" />
                  </button>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">{selectedNiveau.details}</p>

                <div className="bg-blue-50 rounded-2xl p-6 mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    Points forts
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Enseignants qualifiés et passionnés</li>
                    <li>✓ Classes à effectif réduit</li>
                    <li>✓ Suivi individuel et encadrement bienveillant</li>
                    <li>✓ Infrastructures modernes et sécurisées</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      setSelectedNiveau(null);
                      scrollToSection("contact");
                    }}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                  >
                    Inscrire mon enfant
                  </button>
                  <button
                    onClick={() => setSelectedNiveau(null)}
                    className="px-6 py-3 border-2 border-gray-300 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all"
                  >
                    Fermer
                  </button>
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
