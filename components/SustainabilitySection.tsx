import React from 'react';
import { Leaf, Sun, PiggyBank, Play } from 'lucide-react';

export const SustainabilitySection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
            <Leaf size={16} /> Nachhaltiges Handwerk
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">Gut für das Klima.<br /><span className="text-red-600">Besser für Ihren Geldbeutel.</span></h2>
          <p className="text-lg text-slate-600 leading-relaxed">Als Handwerker tragen wir Verantwortung für Brambauer und die Umwelt. Wir setzen auf modernste Technologien, die Emissionen senken und Ihre Heizkosten langfristig minimieren.</p>
        </div>

        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video group">
            <iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/dz6dj3pQh1Q?rel=0&modestbranding=1" title="Wärme Pur Erklärvideo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full"></iframe>
          </div>
          <div className="flex justify-center mt-8">
             <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 px-6 py-3 rounded-full shadow-sm">
                <div className="bg-red-100 p-2 rounded-full"><Play size={18} className="text-red-600 fill-red-600" /></div>
                <div><div className="font-bold text-slate-900 text-sm">So funktioniert das Prinzip Wärmepumpe</div><div className="text-slate-500 text-xs">Einfach erklärt: Die Technik der Zukunft in wenigen Minuten.</div></div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-red-100 transition-colors">
            <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-red-600"><Leaf size={28} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">CO₂ massiv senken</h3>
            <p className="text-slate-600 leading-relaxed text-sm">Mit einer modernen Wärmepumpe sparen Sie bis zu 70% CO₂ gegenüber einer alten Ölheizung ein.</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-orange-100 transition-colors">
            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600"><Sun size={28} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Unabhängig werden</h3>
            <p className="text-slate-600 leading-relaxed text-sm">Machen Sie sich frei von steigenden Gas- und Ölpreisen. Nutzen Sie die kostenlose Energie der Umwelt.</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-100 transition-colors">
            <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-red-600"><PiggyBank size={28} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Staatlich gefördert</h3>
            <p className="text-slate-600 leading-relaxed text-sm">Der Staat zahlt mit! Wir helfen Ihnen dabei, die maximale Förderung zu sichern.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
