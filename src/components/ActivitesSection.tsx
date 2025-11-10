import React from "react";
import { motion } from "framer-motion";

interface Activite {
  titre: string;
  desc: string;
  img: string; // Icône ou emoji temporaire
}

const activites: Activite[] = [
  { titre: "Laboratoire Scientifique", desc: "Expériences pratiques, curiosité et rigueur pour comprendre le monde qui nous entoure.", img: "🔬" },
  { titre: "Bibliothèque Moderne", desc: "Plus de 5000 ouvrages et un espace de lecture inspirant pour nourrir l’esprit et la culture.", img: "📚" },
  { titre: "Terrains de Sport", desc: "Football, basketball, athlétisme… des espaces conçus pour la santé, l’esprit d’équipe et la performance.", img: "⚽" },
  { titre: "Salle Informatique", desc: "Des outils numériques de pointe pour un apprentissage interactif et connecté.", img: "💻" },
  { titre: "Arts & Culture", desc: "Théâtre, musique, peinture et danse : l’expression artistique au cœur de notre pédagogie.", img: "🎨" },
  { titre: "Cantine Scolaire", desc: "Repas équilibrés et sains, préparés chaque jour pour le bien-être de nos élèves.", img: "🍽️" },
];

const ActivitesSection: React.FC = () => {
  return (
    <section
      id="activites"
      className="relative py-28 bg-gradient-to-br from-white via-blue-50 to-gray-50 overflow-hidden"
    >
      {/* Effet décoratif subtil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* En-tête */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Nos <span className="text-blue-600">Infrastructures</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Un cadre d’apprentissage moderne, stimulant et sécurisé — conçu pour révéler le meilleur de chaque élève.
          </p>
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        {/* Grille d'activités */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {activites.map((activite, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-md border border-gray-100 
                         hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.98 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ scale: 1.04 }}
            >
              {/* Décor lumineux au survol */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 
                              bg-gradient-to-tr from-blue-100/30 to-transparent transition duration-500" />

              <div className="relative z-10">
                <div className="text-6xl mb-5 drop-shadow-sm">{activite.img}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{activite.titre}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {activite.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitesSection;
