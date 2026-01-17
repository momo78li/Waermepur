import React from 'react';
import { Flame, Droplets, Wind } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  backContent: string[];
  icon: React.ReactNode;
  imageUrl: string;
}

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'heating',
      title: 'Heizen & Sparen',
      description: 'Raus aus Öl & Gas. Wir installieren effiziente Wärmepumpen, die Ihren Geldbeutel schonen und vom Staat gefördert werden.',
      backContent: [
        'Bis zu 70% staatliche Förderung',
        'Luft-Wasser & Sole-Wärmepumpen',
        'Komplette Planung & Installation',
        'Hydraulischer Abgleich inklusive',
        'Wartungsverträge verfügbar',
        '25 Jahre Erfahrung'
      ],
      icon: <Flame className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />,
      imageUrl: '/waermepumpe.png'
    },
    {
      id: 'bath',
      title: 'Ihr Traum-Bad',
      description: 'Vom Abriss bis zur letzten Fuge. Badsanierung ohne Stress – auch barrierefrei. Wir planen Ihre Wellness-Oase.',
      backContent: [
        'Komplettbadsanierung aus einer Hand',
        'Barrierefreie Lösungen',
        'Bodengleiche Duschen',
        'Hochwertige Armaturen & Keramik',
        '3D-Badplanung vorab',
        'Alle Gewerke koordiniert'
      ],
      icon: <Droplets className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />,
      imageUrl: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'climate',
      title: 'Prima Klima',
      description: 'Schlafen Sie wieder gut. Leise Klimaanlagen und frische Luft für Ihr Zuhause. Installation und Wartung aus einer Hand.',
      backContent: [
        'Split- & Multi-Split-Klimaanlagen',
        'Extrem leise Geräte (ab 19 dB)',
        'Heizen & Kühlen in einem Gerät',
        'Energieeffizienzklasse A+++',
        'Schnelle Installation',
        'Regelmäßige Wartung möglich'
      ],
      icon: <Wind className="w-6 h-6 md:w-8 md:h-8 text-cyan-500" />,
      imageUrl: '/klimaanlage.png'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-4">
            Unsere Lösungen für Ihr Zuhause
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Kein Fachchinesisch. Wir lösen Ihr Problem schnell, zuverlässig und nachhaltig.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group h-[420px] md:h-[480px] [perspective:1000px]"
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                <div className="absolute inset-0 bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 [backface-visibility:hidden] flex flex-col">
                  <div className="h-40 md:h-52 lg:h-64 overflow-hidden relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <img 
                      src={service.imageUrl} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 z-20 bg-white/95 p-2 md:p-3 rounded-xl shadow-sm">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="p-4 md:p-6 lg:p-8 flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    <div className="text-red-600 font-bold mt-3 md:mt-4 text-sm md:text-base">
                      Mehr erfahren →
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]" style={{ backgroundColor: '#0f172a' }}>
                  <div className="absolute inset-0 rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col" style={{ backgroundColor: '#0f172a' }}>
                    <div className="mb-3 md:mb-4 flex-shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex-shrink-0">
                      {service.title}
                    </h3>
                    <ul className="space-y-2 md:space-y-3 overflow-y-auto flex-grow">
                      {service.backContent.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 md:gap-3 text-slate-300 text-sm md:text-base">
                          <span className="text-red-500 flex-shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
