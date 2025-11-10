import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Users, GraduationCap, Award, Sparkles } from "lucide-react";

// 🔹 Composant compteur animé avec effet scintillant
const AnimatedNumber: React.FC<{ value: number; duration?: number }> = ({
  value,
  duration = 2,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({ count: value, transition: { duration, ease: "easeOut" } });
    }
  }, [inView, controls, value, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ count: 0 }}
      animate={controls}
      onUpdate={(latest: any) => {
        if (ref.current) {
          ref.current.textContent = Math.floor(latest.count).toString();
        }
      }}
      className="relative inline-block"
    >
      {/* ✨ effet scintillant autour du chiffre */}
      <motion.span
        className="absolute -top-3 -right-3 text-blue-200"
        animate={{ opacity: [0, 1, 0], scale: [0.8, 1.3, 0.8] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="w-4 h-4" />
      </motion.span>
    </motion.span>
  );
};

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-10 h-10 text-blue-100 mb-3" />,
      value: 500,
      label: "Élèves Inscrits",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-blue-100 mb-3" />,
      value: 35,
      label: "Enseignants Qualifiés",
    },
    {
      icon: <Award className="w-10 h-10 text-blue-100 mb-3" />,
      value: 10,
      label: "Années d'Excellence",
    },
  ];

  return (
    <section
      id="stats"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white"
    >
      {/* --- Halo décoratif --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-400/20 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-2xl p-10 md:p-16 text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* --- Effet de lueur douce --- */}
          <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-sm rounded-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center justify-center relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="transform hover:scale-110 transition-transform duration-300"
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 10 }}
                >
                  {stat.icon}
                </motion.div>

                {/* --- Compteur animé avec effet scintillant --- */}
                <div className="text-6xl font-extrabold mb-2 flex items-center justify-center gap-1">
                  <AnimatedNumber value={stat.value} />+
                </div>

                <div className="text-blue-100 text-lg font-medium tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
