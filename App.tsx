import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { Services } from './components/Services';
import { USPSection } from './components/USPSection';
import { PromoFlyer } from './components/PromoFlyer';
import { SustainabilitySection } from './components/SustainabilitySection';
import { LeadCalculator } from './components/LeadCalculator';
import { LocationMap } from './components/LocationMap';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onContactClick={openModal} />

      <main className="flex-grow">
        {/* HERO */}
        <Hero onCtaClick={openModal} />

        {/* VIDEO */}
        <section className="bg-black py-12 flex justify-center">
          <div className="w-full max-w-5xl px-4">
            <video
              controls
              preload="metadata"
              playsInline
              className="w-full rounded-xl shadow-lg"
            >
              <source src="/waermepumpe.mp4" type="video/mp4" />
              Dein Browser unterstützt kein Video.
            </video>
          </div>
        </section>

        {/* TRUST */}
        <TrustSection />

        {/* SERVICES */}
        <div id="services">
          <Services onServiceClick={openModal} />
        </div>

        {/* USP */}
        <USPSection />

        {/* PROMO */}
        <PromoFlyer onCtaClick={openModal} />

        {/* SUSTAINABILITY */}
        <SustainabilitySection />

        {/* CALCULATOR */}
        <div id="calculator" className="bg-slate-900 py-16">
          <LeadCalculator onRequestClick={openModal} />
        </div>

        {/* LOCATION MAP – ABSCHLUSS */}
        <LocationMap />
      </main>

      <Footer />

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
