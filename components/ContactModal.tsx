import React from 'react';
import { X, MessageCircle, Mail, Phone } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const phoneNumber = '+491732515382';
  const email = 'Info@wärmepur.com';
  const whatsappMessage = encodeURIComponent('Hallo, ich interessiere mich für Ihre Leistungen und hätte gerne ein unverbindliches Angebot.');

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
        
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-slate-900">Kontakt aufnehmen</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X size={20} className="text-slate-500" />
          </button>
        </div>

        <div className="p-6">
          <p className="text-slate-600 mb-6">
            Wählen Sie Ihre bevorzugte Kontaktmethode. Wir melden uns schnellstmöglich bei Ihnen!
          </p>
          
          <div className="space-y-4">
            <a 
              href={`https://wa.me/${phoneNumber.replace(/\s/g, '').replace('+', '')}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 w-full p-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-all hover:scale-[1.02] shadow-lg shadow-green-500/30"
            >
              <MessageCircle size={28} />
              <div className="text-left">
                <div className="text-lg">WhatsApp</div>
                <div className="text-sm font-normal opacity-90">Direkt schreiben</div>
              </div>
            </a>

            <a 
              href={`mailto:${email}?subject=Anfrage über Website&body=Hallo,%0A%0Aich interessiere mich für Ihre Leistungen und hätte gerne ein unverbindliches Angebot.%0A%0AMit freundlichen Grüßen`}
              className="flex items-center gap-4 w-full p-4 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold transition-all hover:scale-[1.02] shadow-lg shadow-slate-800/30"
            >
              <Mail size={28} />
              <div className="text-left">
                <div className="text-lg">E-Mail senden</div>
                <div className="text-sm font-normal opacity-90">{email}</div>
              </div>
            </a>

            <a 
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-4 w-full p-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all hover:scale-[1.02] shadow-lg shadow-red-600/30"
            >
              <Phone size={28} />
              <div className="text-left">
                <div className="text-lg">Anrufen</div>
                <div className="text-sm font-normal opacity-90">{phoneNumber}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
