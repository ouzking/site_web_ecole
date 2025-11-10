import React, { useState, useEffect } from "react";

interface Counter {
  eleves: number;
  enseignants: number;
  annees: number;
}

const Stats: React.FC = () => {
  const [counter, setCounter] = useState<Counter>({
    eleves: 0,
    enseignants: 0,
    annees: 0,
  });

  useEffect(() => {
    const duration = 2000; // durée totale de l’animation (ms)
    const steps = 60; // nombre d’étapes d’animation
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounter({
        eleves: Math.floor((500 * step) / steps),
        enseignants: Math.floor((35 * step) / steps),
        annees: Math.floor((15 * step) / steps),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white relative -mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            
            {/* --- Élèves --- */}
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">{counter.eleves}+</div>
              <div className="text-blue-100 text-lg">Élèves Inscrits</div>
            </div>

            {/* --- Enseignants --- */}
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">{counter.enseignants}+</div>
              <div className="text-blue-100 text-lg">Enseignants Qualifiés</div>
            </div>

            {/* --- Années --- */}
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold mb-2">{counter.annees}+</div>
              <div className="text-blue-100 text-lg">Années d&apos;Excellence</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
