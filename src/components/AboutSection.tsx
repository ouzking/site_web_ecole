import React from "react";
import { Award, Users, Trophy, Star } from "lucide-react";
import { motion } from "framer-motion";

interface Valeur {
  icon: React.ReactNode;
  titre: string;
  description: string;
}

const valeurs: Valeur[] = [
  {
    icon: <Award className="w-8 h-8" />,
    titre: "Excellence",
    description: "Nous visons l’excellence pour chaque élève, en cultivant la rigueur et la passion d’apprendre.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    titre: "Inclusion",
    description: "Nous croyons en une école ouverte à tous, où chaque enfant trouve sa place et s’épanouit.",
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    titre: "Innovation",
    description: "Nous intégrons les outils numériques et les méthodes modernes pour un apprentissage actif et engageant.",
  },
  {
    icon: <Star className="w-8 h-8" />,
    titre: "Bienveillance",
    description: "Chaque élève est accompagné avec respect, écoute et encouragement pour révéler son plein potentiel.",
  },
];

const AboutSection: React.FC = () => {
  return (
    <section
      id="a-propos"
      className="relative py-28 bg-gradient-to-br from-blue-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Effet décoratif */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Titre principal */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Notre <span className="text-blue-600">Mission</span> & Nos Valeurs
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Former des esprits brillants, des cœurs bienveillants et des citoyens responsables,
            à travers une éducation d’excellence enracinée dans les valeurs humaines.
          </p>
          <motion.div
            className="w-28 h-1 bg-blue-600 mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        {/* Contenu */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texte principal */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-gray-900 leading-snug">
              L’excellence éducative depuis{" "}
              <span className="text-blue-600 font-bold">2010</span>
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              L’École <strong>Maman Coumba</strong> est un établissement d’excellence situé à Bambilor,
              offrant un parcours complet du préscolaire à la terminale. Sous la vision inspirante de{" "}
              <strong>Mr Ousmane Niassy</strong>, nous plaçons l’humain, la discipline et la réussite
              au cœur de notre démarche éducative.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Notre pédagogie repose sur trois piliers : la rigueur académique, 
              l’innovation technologique et le développement personnel. 
              Ensemble, ils forment la base d’un apprentissage durable et inspirant.
            </p>
          </motion.div>

          {/* Cartes des valeurs */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {valeurs.map((valeur, idx) => (
              <motion.div
                key={idx}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-gray-100 
                           hover:shadow-2xl hover:-translate-y-2 hover:bg-white transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
              >
                <div className="text-blue-600 mb-4">{valeur.icon}</div>
                <h4 className="font-semibold text-gray-900 text-lg mb-2">{valeur.titre}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{valeur.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
