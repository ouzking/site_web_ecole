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

  const infos = [
    {
      icon: <MapPin className="w-7 h-7 text-white" />,
      title: "Adresse",
      content: <>Cité Comico 5 Bambilor N°122A <br /> Dakar, Sénégal</>,
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
      content: <>Lundi - Vendredi : 8h00 - 17h00 <br /> Samedi : 8h00 - 13h00</>,
    },
    {
      icon: <Mail className="w-7 h-7 text-white" />,
      title: "Email",
      content: "contact@maman-coumba.sn",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900 text-white overflow-hidden"
    >
      {/* Effets décoratifs dynamiques */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.25),transparent_60%)] opacity-30" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-indigo-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Titre principal */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Restons <span className="text-blue-300">en contact</span>
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Vous avez une question, une demande d’inscription ou besoin d’informations ?  
            Notre équipe se fera un plaisir de vous répondre rapidement.
          </p>
          <motion.div
            className="w-28 h-1 bg-gradient-to-r from-blue-300 to-indigo-400 mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.7 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Bloc gauche - Infos */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {infos.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-5 bg-white/10 backdrop-blur-xl p-6 rounded-2xl 
                           border border-white/20 hover:bg-white/20 hover:shadow-lg 
                           transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 opacity-90" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Demande d’inscription</h3>
              <div className="space-y-5">
                {[
                  { name: "name", type: "text", placeholder: "Nom complet" },
                  { name: "email", type: "email", placeholder: "Adresse email" },
                  { name: "phone", type: "tel", placeholder: "Téléphone" },
                ].map((input) => (
                  <input
                    key={input.name}
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                    value={(formData as any)[input.name]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
                  />
                ))}

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
                  placeholder="Votre message..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-xl font-bold 
                             flex items-center justify-center gap-2 hover:shadow-xl hover:scale-[1.03] transition-transform"
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
