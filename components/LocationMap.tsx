import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export const LocationMap: React.FC = () => {
  return (
    <section className="relative bg-slate-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            So finden Sie uns
          </h2>
          <p className="text-slate-400">
            Besuchen Sie uns in Lünen-Brambauer
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                title="Standort Wärme Pur GmbH"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.123456789!2d7.4876!3d51.6156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b91a0c0c0c0c0c%3A0x0!2sAlte%20Herrenthey%2012-14%2C%2044536%20L%C3%BCnen!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="bg-red-600 p-3 rounded-xl">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Adresse</h3>
                  <p className="text-slate-300">
                    Alte Herrenthey 12-14<br />
                    44536 Lünen<br />
                    <span className="text-slate-500 text-sm">(Brambauer Gewerbegebiet)</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="bg-red-600 p-3 rounded-xl">
                  <Phone className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Kontakt</h3>
                  <a href="tel:+491732515382" className="text-white text-xl font-bold hover:text-red-500 transition-colors">
                    +49 173 25 15 382
                  </a>
                  <p className="text-slate-400 text-sm mt-1">
                    Info@wärmepur.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="bg-red-600 p-3 rounded-xl">
                  <Clock className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Öffnungszeiten</h3>
                  <div className="text-slate-300 text-sm space-y-1">
                    <p>Mo - Do: <span className="text-white">07:30 - 16:30</span></p>
                    <p>Freitag: <span className="text-white">07:30 - 13:30</span></p>
                    <p className="text-red-500 font-semibold">Notdienst 24/7 für Vertragskunden</p>
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/dir//Alte+Herrenthey+12-14,+44536+Lünen"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl text-center transition-all hover:scale-[1.02] shadow-lg shadow-red-600/30"
            >
              Route planen →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
