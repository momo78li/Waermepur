import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Globe } from 'lucide-react';

interface FooterProps {
  onImpressumClick: () => void;
  onDatenschutzClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onImpressumClick, onDatenschutzClick }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
             <div className="font-black text-2xl tracking-tighter text-white uppercase flex items-center mb-4">
                WÄRME <span className="text-red-600 ml-1">PUR</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Ihr Meisterbetrieb für Heizung, Sanitär und Klima in Lünen-Brambauer. Wir bringen Wärme in Ihr Leben.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-red-500 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><Instagram /></a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="text-white font-bold text-lg mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-red-600 shrink-0 mt-1" size={18} />
                <span>Alte Herrenthey 12-14<br/>D-44536 Lünen<br/><span className="text-slate-500 text-xs uppercase tracking-wide">(Brambauer Gewerbegebiet)</span></span>
              </li>
              <li>
                <a href="tel:+491732515382" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="text-red-600 shrink-0" size={18} />
                  <span className="text-xl font-bold text-white">+49 173 25 15 382</span>
                </a>
              </li>
              <li>
                <a href="mailto:Info@wärmepur.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="text-red-600 shrink-0" size={18} />
                  Info@wärmepur.com
                </a>
              </li>
              <li>
                <a href="https://www.wärmepur.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Globe className="text-red-600 shrink-0" size={18} />
                  www.wärmepur.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="text-white font-bold text-lg mb-6">Öffnungszeiten</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Mo - Do:</span>
                <span className="text-white">07:30 - 16:30 Uhr</span>
              </li>
              <li className="flex justify-between">
                <span>Freitag:</span>
                <span className="text-white">07:30 - 13:30 Uhr</span>
              </li>
              <li className="flex justify-between">
                <span>Sa - So:</span>
                <span className="text-red-500 font-semibold">Notdienst</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-slate-800 rounded-lg border border-slate-700">
               <div className="flex items-center gap-2 mb-2 text-white font-bold">
                 <Clock size={16} className="text-red-500"/> Notdienst 24/7
               </div>
               <p className="text-xs">Für Vertragskunden sind wir auch am Wochenende erreichbar.</p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="text-white font-bold text-lg mb-6">Karriere</h4>
            <p className="mb-4 text-sm">Wir suchen Verstärkung! Du bist Anlagenmechaniker (m/w/d)?</p>
            <a 
              href="mailto:Info@wärmepur.com?subject=Bewerbung als Anlagenmechaniker (m/w/d)&body=Sehr geehrter Herr Iyibak,%0A%0Ahiermit bewerbe ich mich auf die ausgeschriebene Stelle als Anlagenmechaniker.%0A%0AMit freundlichen Grüßen" 
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors border border-white/20"
            >
              Jetzt bewerben
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Wärme Pur GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button onClick={onImpressumClick} className="hover:text-white transition-colors">Impressum</button>
            <button onClick={onDatenschutzClick} className="hover:text-white transition-colors">Datenschutz</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
