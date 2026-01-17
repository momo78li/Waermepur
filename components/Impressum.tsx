import React from 'react';
import { X } from 'lucide-react';

interface ImpressumProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Impressum: React.FC<ImpressumProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl my-8" onClick={(e) => e.stopPropagation()}>
        
        <div className="sticky top-0 bg-white flex justify-between items-center p-6 border-b border-gray-100 z-10">
          <h2 className="text-2xl font-bold text-slate-900">Impressum</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X size={24} className="text-slate-500" />
          </button>
        </div>

        <div className="p-8 space-y-8">
          
          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              Angaben gemäß § 5 TMG
            </h3>
            <div className="text-slate-700 leading-relaxed">
              <p className="font-semibold text-slate-900">Wärme Pur GmbH</p>
              <p>Alte Herrenthey 12-14</p>
              <p>44536 Lünen</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              Vertreten durch
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Geschäftsführer: Bülent Iyibak
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              Kontakt
            </h3>
            <div className="text-slate-700 leading-relaxed space-y-1">
              <p>Telefon: +49 173 25 15 382</p>
              <p>E-Mail: Info@wärmepur.com</p>
              <p>Website: www.wärmepur.com</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              Registereintrag
            </h3>
            <div className="text-slate-700 leading-relaxed space-y-1">
              <p>Eintragung im Handelsregister</p>
              <p>Registergericht: Amtsgericht Dortmund</p>
              <p>Registernummer: HRB 8817</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              Umsatzsteuer-ID
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE [Nummer]
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              Berufsbezeichnung
            </h3>
            <div className="text-slate-700 leading-relaxed space-y-1">
              <p>Berufsbezeichnung: Meisterbetrieb für Heizung, Sanitär und Klima</p>
              <p>Zuständige Kammer: Handwerkskammer Dortmund</p>
              <p>Verliehen in: Deutschland</p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              EU-Streitschlichtung
            </h3>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              </p>
              <p>
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-red-600 hover:underline break-all"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              Haftung für Inhalte
            </h3>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen 
                Seiten nach den allgemeinen Gesetzen verantwortlich.
              </p>
              <p>
                Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, 
                übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach 
                den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung 
                ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung 
                möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese 
                Inhalte umgehend entfernen.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              Haftung für Links
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir 
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine 
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige 
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              Urheberrecht
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};
