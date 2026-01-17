import React from 'react';

export const LocationMap: React.FC = () => {
  return (
    <section className="relative bg-slate-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            So finden Sie uns
          </h2>
          <p className="text-slate-400 mb-2">
            Alte Herrenthey 12-14, 44536 Lünen (Brambauer Gewerbegebiet)
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl border-2 border-red-600/30">
            <div className="absolute inset-0 pointer-events-none z-10 mix-blend-color" style={{ backgroundColor: 'rgba(30, 30, 30, 0.15)' }} />
            <iframe
              title="Standort Wärme Pur GmbH"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.123456789!2d7.4876!3d51.6156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b91a0c0c0c0c0c%3A0x0!2sAlte%20Herrenthey%2012-14%2C%2044536%20L%C3%BCnen!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
              className="w-full h-full border-0"
              style={{ filter: 'grayscale(100%) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          
          <div className="flex justify-center mt-6">
            <a 
              href="https://www.google.com/maps/dir//Alte+Herrenthey+12-14,+44536+Lünen"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl text-center transition-all hover:scale-[1.02] shadow-lg shadow-red-600/30"
            >
              Route planen →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
