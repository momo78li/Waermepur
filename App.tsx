import React, { useState } from 'react';
// Wir importieren erstmal NUR das, was sicher da ist:
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { SustainabilitySection } from './components/SustainabilitySection';
import { LocationMap } from './components/LocationMap';

// Falls du Header/Footer noch nicht als Datei hast, nutzen wir Platzhalter,
// damit die App nicht abstürzt.
const HeaderPlaceholder = () => <div className="p-4 bg-white text-center font-bold">HEADER (Kommt gleich)</div>;
const FooterPlaceholder = () => <div className="p-4 bg-slate-900 text-white text-center">FOOTER (Kommt gleich)</div>;

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Einfache Dummy-Funktion, damit der Hero-Button nicht crasht
  const openModal = () => {
    console.log("Modal öffnen geklickt");
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <HeaderPlaceholder />
      
      <main className="flex-grow">
        {/* Hero Sektion */}
        <Hero onCtaClick={openModal} />
        
        {/* Partner Logos */}
        <TrustSection />
        
        {/* Video / Klima Sektion */}
        <SustainabilitySection />
        
        {/* Karte */}
        <LocationMap />
      </main>

      {/* Footer */}
      <FooterPlaceholder />
      
      {/* Modal Platzhalter (nur Text, damit nix abstürzt) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setIsModalOpen(false)}>
           <div className="bg-white p-8 rounded-xl">
             <h2 className="text-xl font-bold">Kontakt-Modal</h2>
             <p>Hier kommt gleich das Formular rein.</p>
             <button onClick={() => setIsModalOpen(false)} className="mt-4 text-red-600 font-bold">Schließen</button>
           </div>
        </div>
      )}
    </div>
  );
}
