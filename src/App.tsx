import { useState } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/Hero";
import AboutSection from "./components/AboutSection";
import NiveauxSection from "./components/NiveauxSection";
import ActivitesSection from "./components/ActivitesSection";
import Stats from "./components/Stats";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

interface Niveau {
  icon: string;
  titre: string;
  description: string;
  details: string;
}

const App: React.FC = () => {
  const [selectedNiveau, setSelectedNiveau] = useState<Niveau | null>(null);

  // --- Scroll fluide vers une section ---
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="font-sans bg-gray-50 scroll-smooth">
      {/* --- Barre de navigation --- */}
      <Navigation scrollToSection={scrollToSection} />

      {/* --- Section d'accueil (Hero) --- */}
      <HeroSection scrollToSection={scrollToSection} />

      {/* --- Section À propos --- */}
      <AboutSection />

      {/* --- Section Niveaux d’enseignement --- */}
      <NiveauxSection
        selectedNiveau={selectedNiveau}
        setSelectedNiveau={setSelectedNiveau}
        scrollToSection={scrollToSection}
      />

      {/* --- Section Activités --- */}
      <ActivitesSection />

      {/* --- Statistiques --- */}
      <Stats />

      {/* --- Section Contact --- */}
      <ContactSection />

      {/* --- Pied de page --- */}
      <Footer />
    </div>
  );
};

export default App;
