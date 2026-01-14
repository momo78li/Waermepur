import React from 'react';

export const LocationMap: React.FC = () => {
  return (
    <section className="relative bg-black py-20">
      {/* MAP */}
      <div className="relative w-full h-[420px] overflow-hidden">
        <iframe
          title="Standort Wärmepur GmbH"
          src="https://www.google.com/maps?q=W%C3%A4rmepur%20GmbH%20L%C3%BCnen&output=embed"
          className="w-full h-full grayscale invert contrast-125"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* OVERLAY CARD */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-black/60 backdrop-blur-md rounded-2xl shadow-xl px-8 py-6 text-center border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Wärmepur GmbH
            </h3>
            <p className="text-slate-300 text-sm mb-4">
              Ihr Partner für moderne Wärmepumpen
            </p>
            <p className="text-red-500 font-medium">
              📍 Lünen · NRW
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
