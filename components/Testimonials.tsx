import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  service: string;
}

export const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Familie Schneider',
      location: 'Lünen',
      text: 'Unsere neue Wärmepumpe läuft seit einem Jahr einwandfrei. Die Heizkosten haben sich halbiert! Herr Iyibak und sein Team haben super Arbeit geleistet.',
      rating: 5,
      service: 'Wärmepumpe'
    },
    {
      id: 2,
      name: 'Thomas M.',
      location: 'Dortmund',
      text: 'Badsanierung in nur 3 Wochen - sauber, pünktlich und genau wie geplant. Die 3D-Planung vorab war super hilfreich. Absolut empfehlenswert!',
      rating: 5,
      service: 'Badsanierung'
    },
    {
      id: 3,
      name: 'Petra und Klaus Weber',
      location: 'Castrop-Rauxel',
      text: 'Endlich können wir im Sommer wieder schlafen! Die Klimaanlage ist flüsterleise und kühlt perfekt. Danke an das gesamte Team!',
      rating: 5,
      service: 'Klimaanlage'
    },
    {
      id: 4,
      name: 'Markus B.',
      location: 'Lünen-Brambauer',
      text: 'Schneller Notdienst am Wochenende - die Heizung lief innerhalb von 2 Stunden wieder. Faire Preise und kompetente Beratung.',
      rating: 5,
      service: 'Heizungsreparatur'
    },
    {
      id: 5,
      name: 'Familie Özdemir',
      location: 'Dortmund-Mengede',
      text: 'Von der Beratung bis zur Installation alles aus einer Hand. Förderanträge wurden komplett übernommen. Wir sparen jetzt 60% Heizkosten!',
      rating: 5,
      service: 'Wärmepumpe'
    },
    {
      id: 6,
      name: 'Sabine K.',
      location: 'Werne',
      text: 'Unser barrierefreies Bad ist ein Traum geworden. Bodengleiche Dusche, alles durchdacht. Vielen Dank für die tolle Umsetzung!',
      rating: 5,
      service: 'Barrierefreies Bad'
    },
    {
      id: 7,
      name: 'Jürgen und Monika H.',
      location: 'Bergkamen',
      text: 'Bereits die zweite Klimaanlage von Wärme Pur. Zuverlässig, professionell und immer erreichbar. Klare Empfehlung!',
      rating: 5,
      service: 'Klimaanlage'
    },
    {
      id: 8,
      name: 'Andreas R.',
      location: 'Lünen',
      text: 'Komplette Heizungsmodernisierung reibungslos abgelaufen. Das Team hat sich um alles gekümmert - auch um den Papierkram mit der KfW.',
      rating: 5,
      service: 'Heizungsmodernisierung'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Das sagen unsere Kunden
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Über 1.000 zufriedene Kunden in 25 Jahren - hier sind einige Stimmen
          </p>
        </div>

        <div className="relative">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-slate-50 transition-colors hidden md:block"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-slate-50 transition-colors hidden md:block"
          >
            <ChevronRight className="w-6 h-6 text-slate-700" />
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2 md:px-12 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="flex-shrink-0 w-[340px] bg-white rounded-2xl p-6 shadow-lg border border-slate-200 snap-start"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#dc2626" className="text-red-600" />
                  ))}
                </div>
                
                <Quote className="text-slate-200 w-10 h-10 mb-2" />
                
                <p className="text-slate-700 leading-relaxed mb-6 min-h-[120px]">
                  {testimonial.text}
                </p>
                
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.location}</p>
                  <span className="inline-block mt-2 text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-medium">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          ← Wischen oder scrollen für mehr Bewertungen →
        </p>
      </div>
    </section>
  );
};
