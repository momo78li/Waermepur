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

        <div className="p-6 prose prose-slate max-w-none">
          <h3>Angaben gemäß § 5 TMG</h3>
          <p>
            <strong>Wärme Pur GmbH</strong><br />
            Alte Herrenthey 12-14<br />
            44536 Lünen<br />
            Deutschland
          </p>

          <h3>Vertreten durch</h3>
          <p>Geschäftsführer: [Name des Geschäftsführers]</p>

          <h3>Kontakt</h3>
          <p>
            Telefon: +49 173 25 15 382<br />
            E-Mail: Info@wärmepur.com<br />
            Website: www.wärmepur.com
          </p>

          <h3>Registereintrag</h3>
          <p>
            Eintragung im Handelsregister<br />
            Registergericht: Amtsgericht Dortmund<br />
            Registernummer: HRB [Nummer]
          </p>

          <h3>Umsatzsteuer-ID</h3>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE [Nummer]
          </p>

          <h3>Berufsbezeichnung und berufsrechtliche Regelungen</h3>
          <p>
            Berufsbezeichnung: Meisterbetrieb für Heizung, Sanitär und Klima<br />
            Zuständige Kammer: Handwerkskammer Dortmund<br />
            Verliehen in: Deutschland
          </p>

          <h3>Streitschlichtung</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h3>Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach 
            den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter 
            jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
            oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
            der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <h3>Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss 
            haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte 
            der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h3>Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
            deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
            außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen 
            Autors bzw. Erstellers.
          </p>
        </div>
      </div>
    </div>
  );
};
