import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { Services } from './components/Services';
import { LeadCalculator } from './components/LeadCalculator';
import { USPSection } from './components/USPSection';
import { SustainabilitySection } from './components/SustainabilitySection';
import { LocationMap } from './components/LocationMap';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onContactClick={openModal} />
      
      <main className="flex-grow">
        <Hero onCtaClick={openModal} />
        <TrustSection />
        <section id="services">
          <Services onServiceClick={openModal} />
        </section>
        <section id="calculator" className="py-20 bg-slate-900">
          <LeadCalculator onRequestClick={openModal} />
        </section>
        <USPSection />
        <SustainabilitySection />
        <LocationMap />
      </main>

      <Footer />
      
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
