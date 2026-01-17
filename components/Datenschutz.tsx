import React from 'react';
import { X } from 'lucide-react';

interface DatenschutzProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Datenschutz: React.FC<DatenschutzProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl my-8" onClick={(e) => e.stopPropagation()}>
        
        <div className="sticky top-0 bg-white flex justify-between items-center p-6 border-b border-gray-100 z-10">
          <h2 className="text-2xl font-bold text-slate-900">Datenschutzerklärung</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X size={24} className="text-slate-500" />
          </button>
        </div>

        <div className="p-8 space-y-8">

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              1. Datenschutz auf einen Blick
            </h3>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              </p>
              <p>
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
                werden können.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              2. Verantwortliche Stelle
            </h3>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="font-semibold text-slate-900">Wärme Pur GmbH</p>
                <p>Geschäftsführer: Bülent Iyibak</p>
                <p>Alte Herrenthey 12-14</p>
                <p>44536 Lünen</p>
                <p className="mt-2">Telefon: +49 173 25 15 382</p>
                <p>E-Mail: Info@wärmepur.com</p>
              </div>
              <p>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein 
                oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von 
                personenbezogenen Daten entscheidet.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              3. Hosting
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Die externen Hostingdienste dienen dem Zweck der Vertragserfüllung gegenüber 
              unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im 
              Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres 
              Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              4. Ihre Rechte
            </h3>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>Sie haben folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              5. Widerruf Ihrer Einwilligung
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung 
              möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. 
              Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom 
              Widerruf unberührt.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              6. Beschwerderecht
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht 
              bei einer Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen 
              Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes Nordrhein-Westfalen.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              7. Speicherdauer
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer 
              genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck 
              für die Datenverarbeitung entfällt.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              8. Cookies
            </h3>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine 
                Datenpakete und richten auf Ihrem Endgerät keinen Schaden an.
              </p>
              <p>
                Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) 
                oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              9. Kontaktaufnahme
            </h3>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, wird Ihre Anfrage 
                inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) 
                zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
              </p>
              <p>
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
                sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur 
                Durchführung vorvertraglicher Maßnahmen erforderlich ist.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              10. Google Maps
            </h3>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland 
                Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p>
                Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung 
                unserer Online-Angebote und einer leichten Auffindbarkeit der von uns auf der 
                Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von 
                Art. 6 Abs. 1 lit. f DSGVO dar.
              </p>
              <p>
                Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung 
                von Google:
              </p>
              <p>
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-red-600 hover:underline"
                >
                  https://policies.google.com/privacy
                </a>
              </p>
            </div>
          </section>

          <div className="pt-4 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Stand: Januar 2026
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
