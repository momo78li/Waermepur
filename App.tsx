import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { Services } from './components/Services';
import { LeadCalculator } from './components/LeadCalculator';
import { USPSection } from './components/USPSection';
import { SustainabilitySection } from './components/SustainabilitySection';
import { Testimonials } from './components/Testimonials';
import { LocationMap } from './components/LocationMap';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { Impressum } from './components/Impressum';
import { Datenschutz } from './components/Datenschutz';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onContactClick={() => setIsModalOpen(true)} />
      
      <main className="flex-grow">
        <Hero onCtaClick={() => setIsModalOpen(true)} />
        <TrustSection />
        <section id="services">
          <Services />
        </section>
        <section id="calculator" className="py-20 bg-slate-900">
          <LeadCalculator onRequestClick={() => setIsModalOpen(true)} />
        </section>
        <USPSection />
        <Testimonials />
        <SustainabilitySection />
        <LocationMap />
      </main>

      <Footer 
        onImpressumClick={() => setIsImpressumOpen(true)} 
        onDatenschutzClick={() => setIsDatenschutzOpen(true)} 
      />
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Impressum isOpen={isImpressumOpen} onClose={() => setIsImpressumOpen(false)} />
      <Datenschutz isOpen={isDatenschutzOpen} onClose={() => setIsDatenschutzOpen(false)} />
    </div>
  );
}
