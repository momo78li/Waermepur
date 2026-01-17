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

        <div className="p-6 prose prose-slate max-w-none">
          <h3>1. Datenschutz auf einen Blick</h3>
          
          <h4>Allgemeine Hinweise</h4>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
            Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen 
            Sie persönlich identifiziert werden können.
          </p>

          <h4>Datenerfassung auf dieser Website</h4>
          <p>
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:<br /><br />
            Wärme Pur GmbH<br />
            Alte Herrenthey 12-14<br />
            44536 Lünen<br />
            Telefon: +49 173 25 15 382<br />
            E-Mail: Info@wärmepur.com
          </p>

          <h3>2. Hosting</h3>
          <p>
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter: Die externen Hostingdienste dienen 
            dem Zweck der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 
            lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres 
            Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
          </p>

          <h3>3. Allgemeine Hinweise und Pflichtinformationen</h3>
          
          <h4>Datenschutz</h4>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
            Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften 
            sowie dieser Datenschutzerklärung.
          </p>

          <h4>Hinweis zur verantwortlichen Stelle</h4>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
            Wärme Pur GmbH<br />
            Alte Herrenthey 12-14<br />
            44536 Lünen<br /><br />
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit 
            anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
          </p>

          <h4>Speicherdauer</h4>
          <p>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
            verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
          </p>

          <h4>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
          <p>
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können 
            eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf 
            erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>

          <h4>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
          <p>
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer 
            Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der 
            Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen seinen Sitz hat.
          </p>

          <h3>4. Datenerfassung auf dieser Website</h3>
          
          <h4>Cookies</h4>
          <p>
            Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten 
            auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung 
            (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
          </p>

          <h4>Anfrage per E-Mail, Telefon oder WhatsApp</h4>
          <p>
            Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, wird Ihre Anfrage inklusive aller 
            daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres 
            Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre 
            Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher 
            Maßnahmen erforderlich ist.
          </p>

          <h3>5. Plugins und Tools</h3>
          
          <h4>Google Maps</h4>
          <p>
            Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google"), 
            Gordon House, Barrow Street, Dublin 4, Irland. Mit Hilfe dieses Dienstes können wir Karteninhalte 
            auf unserer Website einbinden.
          </p>
          <p>
            Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer 
            Online-Angebote und einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. 
            Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
          </p>
          <p>
            Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: 
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
              https://policies.google.com/privacy
            </a>
          </p>

          <h3>6. Ihre Rechte</h3>
          <p>Sie haben folgende Rechte:</p>
          <ul>
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
          </ul>

          <p className="text-sm text-slate-500 mt-8">
            Stand: Januar 2026
          </p>
        </div>
      </div>
    </div>
  );
};
