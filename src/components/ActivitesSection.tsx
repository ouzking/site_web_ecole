import React from "react";
import { motion } from "framer-motion";
import { Building2, Monitor, UtensilsCrossed, Dumbbell } from "lucide-react";

interface Activite {
  titre: string;
  desc: string;
  icon: React.ReactNode;
}

const activites: Activite[] = [
  {
    titre: "Salle Informatique",
    desc: "Des outils numériques performants et des logiciels éducatifs pour un apprentissage connecté au monde.",
    icon: <Monitor className="w-10 h-10 text-blue-600" />,
  },
  {
    titre: "Cantine Scolaire",
    desc: "Des repas équilibrés et sains, préparés chaque jour pour nourrir corps et esprit dans un cadre convivial.",
    icon: <UtensilsCrossed className="w-10 h-10 text-blue-600" />,
  },
  {
    titre: "Espaces Sportifs",
    desc: "Terrains multisports : football, basket, athlétisme — pour promouvoir l’esprit d’équipe et la santé.",
    icon: <Dumbbell className="w-10 h-10 text-blue-600" />,
  },
];

const ActivitesSection: React.FC = () => {
  return (
    <section
      id="activites"
      className="relative py-32 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden"
    >
      {/* --- Halo lumineux décoratif --- */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/10 blur-[160px] rounded-full -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* --- En-tête de section --- */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Building2 className="w-12 h-12 text-blue-600 mx-auto mb-6 animate-pulse" />
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Nos <span className="text-blue-700">Infrastructures</span> Modernes
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un environnement d’apprentissage complet, stimulant et sécurisé — 
            conçu pour élever chaque élève vers l’excellence académique et personnelle.
          </p>
          <motion.div
            className="w-32 h-1 bg-blue-600 mx-auto mt-8 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7 }}
          />
        </motion.div>

        {/* --- Grille des activités --- */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {activites.map((activite, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-lg border border-gray-100 
                         hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
            >
              {/* Lumière subtile au survol */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-blue-100/40 to-transparent" />

              <div className="relative z-10 text-center">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {activite.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {activite.titre}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {activite.desc}
                </p>
              </div>

              {/* Lueur animée en bas */}
              <motion.div
                className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-600 rounded-full group-hover:w-2/3 transition-all duration-700 -translate-x-1/2"
                initial={{ width: 0 }}
                whileHover={{ width: "66%" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitesSection;
