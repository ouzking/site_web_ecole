import React, { useState } from "react";
import { MapPin, Phone, Users, Clock, Send, Mail } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    level: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Merci pour votre demande ! Nous vous contacterons bientôt au 77 104 75 49.");
    setFormData({ name: "", email: "", phone: "", level: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white overflow-hidden"
    >
      {/* Effet de fond animé */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.4),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Titre principal */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Contactez-nous</h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Nous sommes à votre écoute pour toute demande d’information ou d’inscription.
          </p>
          <motion.div
            className="w-24 h-1 bg-white/70 mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Bloc gauche - Informations */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {[
              {
                icon: <MapPin className="w-7 h-7 text-white" />,
                title: "Adresse",
                content: (
                  <>
                    Cité Comico 5 Bambilor N°122A <br /> Dakar, Sénégal
                  </>
                ),
              },
              {
                icon: <Phone className="w-7 h-7 text-white" />,
                title: "Téléphone",
                content: "77 104 75 49",
              },
              {
                icon: <Users className="w-7 h-7 text-white" />,
                title: "Directeur Général",
                content: "Mr Ousmane Niassy",
              },
              {
                icon: <Clock className="w-7 h-7 text-white" />,
                title: "Horaires",
                content: (
                  <>
                    Lundi - Vendredi : 8h00 - 17h00 <br /> Samedi : 8h00 - 13h00
                  </>
                ),
              },
              {
                icon: <Mail className="w-7 h-7 text-white" />,
                title: "Email",
                content: "contact@maman-coumba.sn",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-lg p-6 rounded-2xl hover:bg-white/20 transition-all shadow-sm hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="flex-shrink-0 p-3 bg-blue-500/30 rounded-full">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bloc droit - Formulaire */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white text-gray-800 rounded-3xl p-10 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Effet décoratif */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-80" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">Demande d’inscription</h3>
              <div className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Nom complet"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Sélectionnez un niveau</option>
                  <option value="Préscolaire">Préscolaire</option>
                  <option value="Primaire">Primaire</option>
                  <option value="Collège">Collège</option>
                  <option value="Lycée">Lycée</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Votre message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-xl transition-transform hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  Envoyer la demande
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
