import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Phone,
  Users,
  Mail,
  Sparkles,
} from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-20 pb-10 relative overflow-hidden">
      {/* Effet décoratif animé */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08),_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* --- Bloc présentation --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shadow-inner">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-extrabold tracking-wide">
              École Maman Coumba
            </h2>
          </div>

          <p className="text-blue-100 leading-relaxed">
            L’école <strong>Maman Coumba</strong> s’engage à offrir une
            éducation d’excellence, du préscolaire à la terminale, dans un
            environnement qui favorise l’éveil intellectuel, moral et social de
            chaque élève.
          </p>
          <p className="text-sm text-blue-200 italic">
            « Excellence et Innovation »
          </p>
        </motion.div>

        {/* --- Bloc contact --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold mb-6 border-b border-blue-400/50 pb-2">
            Contact & Localisation
          </h3>
          <ul className="space-y-4 text-blue-100">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 text-blue-300" />
              <span>Cité Comico 5 Bambilor N°122A, Dakar – Sénégal</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 mt-1 text-blue-300" />
              <span>77 104 75 49</span>
            </li>
            <li className="flex items-start gap-3">
              <Users className="w-5 h-5 mt-1 text-blue-300" />
              <span>
                Directeur Général : <strong>Mr Ousmane Niassy</strong>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 mt-1 text-blue-300" />
              <span>contact@mamacoumba.edu.sn</span>
            </li>
          </ul>
        </motion.div>

        {/* --- Bloc infos scolaires --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold mb-6 border-b border-blue-400/50 pb-2">
            Informations Scolaires
          </h3>
          <ul className="space-y-3 text-blue-100">
            <li>
              🎓 <strong>Niveaux :</strong> Du Préscolaire à la Terminale
            </li>
            <li>
              📚 <strong>Programme :</strong> Conforme au système éducatif
              sénégalais
            </li>
            <li>
              🕐 <strong>Horaires :</strong>
              <br />
              Lundi - Vendredi : 8h00 à 17h00
              <br />
              Samedi : 8h00 à 13h00
            </li>
          </ul>
        </motion.div>
      </div>

      {/* --- Ligne de séparation & crédit --- */}
      <div className="relative mt-12 border-t border-white/20 pt-6 text-center text-blue-200 text-sm">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          © {year} <strong>École Maman Coumba</strong>. Tous droits réservés. |
          Développé avec ❤️ par{" "}
          <span className="text-white font-semibold hover:text-blue-300 transition-colors">
            Fatou Kiné Sy
          </span>
        </motion.p>
      </div>

      {/* --- Petit effet décoratif supplémentaire --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-0 left-0 w-20 h-20 text-blue-300/20"
      >
        <Sparkles className="w-full h-full" />
      </motion.div>
    </footer>
  );
};

export default Footer;
