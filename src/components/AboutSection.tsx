import React from "react";
import { Award, Users, Trophy, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface Valeur {
  icon: React.ReactNode;
  titre: string;
  description: string;
}

interface AboutSectionProps {
  scrollToSection?: (sectionId: string) => void;
}

const valeurs: Valeur[] = [
  {
    icon: <Award className="w-10 h-10" />,
    titre: "Excellence",
    description:
      "Nous visons l’excellence pour chaque élève en cultivant la rigueur, la curiosité intellectuelle et la passion d’apprendre.",
  },
  {
    icon: <Users className="w-10 h-10" />,
    titre: "Inclusion",
    description:
      "Une école ouverte à tous, où la diversité est célébrée et chaque élève trouve un environnement bienveillant et valorisant.",
  },
  {
    icon: <Trophy className="w-10 h-10" />,
    titre: "Innovation",
    description:
      "Nous intégrons la technologie, la créativité et la pédagogie active pour préparer les leaders de demain.",
  },
  {
    icon: <Heart className="w-10 h-10" />,
    titre: "Bienveillance",
    description:
      "Chaque élève est accompagné avec respect, écoute et encouragement, afin de révéler son plein potentiel.",
  },
];

const AboutSection: React.FC<AboutSectionProps> = ({ scrollToSection }) => {
  return (
    <section
      id="a-propos"
      className="relative py-32 bg-gradient-to-b from-white via-blue-50/40 to-white overflow-hidden"
    >
      {/* --- Halo décoratif premium --- */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-300/20 blur-[180px] rounded-full -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* --- En-tête animé --- */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <Sparkles className="w-8 h-8 text-blue-600 animate-pulse" />
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Notre <span className="text-blue-600">Mission</span> & Nos{" "}
            <span className="text-blue-700">Valeurs</span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            L’école <strong>Maman Coumba</strong> forme depuis plus d’une
            décennie des jeunes esprits brillants, autonomes et conscients des
            valeurs humaines. Notre mission : inspirer, éduquer et transformer
            pour bâtir un avenir meilleur.
          </p>

          <motion.div
            className="w-32 h-1 bg-blue-600 mx-auto mt-8 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7 }}
          />
        </motion.div>

        {/* --- Contenu principal --- */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Texte principal */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              L’excellence éducative depuis{" "}
              <span className="text-blue-600">2015</span>
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              Située à <strong>Bambilor</strong>, l’école{" "}
              <strong>Maman Coumba</strong> offre un enseignement complet du
              préscolaire à la terminale. Dirigée par{" "}
              <strong>Mr Ousmane Niassy</strong>, elle se distingue par son
              engagement à développer des apprenants responsables, créatifs et
              épanouis.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Notre pédagogie repose sur trois piliers essentiels :
              <br />
              <span className="text-blue-700 font-medium">
                la rigueur académique, l’innovation pédagogique et la
                valorisation de l’humain.
              </span>
            </p>

            {/* --- Boutons d’action avec scroll --- */}
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <button
                onClick={() => scrollToSection?.("niveaux")}
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 hover:bg-blue-700 transition-transform duration-300"
              >
                Découvrir nos programmes
              </button>
              <button
                onClick={() => scrollToSection?.("contact")}
                className="px-8 py-3 border-2 border-blue-600 text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                Rejoindre la communauté
              </button>
            </motion.div>
          </motion.div>

          {/* Cartes des valeurs avec effet 3D */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {valeurs.map((valeur, idx) => (
              <motion.div
                key={idx}
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 
                           shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-white 
                           transition-all duration-500"
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
              >
                <div className="text-blue-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                  {valeur.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {valeur.titre}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {valeur.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
