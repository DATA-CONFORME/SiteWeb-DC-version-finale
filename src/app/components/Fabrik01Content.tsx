import React from 'react';
import { 
  CheckCircle2, XCircle, ArrowRight, 
  MessageSquare, Layout, ShieldCheck, 
  Database, Zap, Lock, Globe
} from 'lucide-react';
import fabrik01Logo from '../../assets/fabrik01-noir-transpa.png';
import imgLogicielsUS from '../../assets/logiciels-US.png';

export default function Fabrik01Content({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="w-full bg-white font-['Inter:Regular',sans-serif] text-[#1A2340]">
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-28 px-6 md:px-12 lg:px-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 text-[#0A192F] z-10">
            <img 
              src={fabrik01Logo} 
              alt="Fabrik01 Logo" 
              className="h-16 w-auto mb-8 object-contain"
            />
            <h1 className="text-4xl md:text-6xl font-['Manrope:Extra_Bold',sans-serif] font-extrabold mb-6 leading-[1.1] tracking-tight">
              Pilotage IA <br />
              <span className="text-[#00A9C1]">sur-mesure & sécurisé</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-['Manrope:Bold',sans-serif] font-bold mb-8 text-[#0047BA]">
              Transformez votre organisation
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="https://calendrier.dataconforme.com/jerome.ficat-dataconforme.com/rendez-vous-jerome-ficat?duration=30"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0047BA] hover:bg-[#00358E] text-white px-10 py-4 rounded-lg font-['Manrope:Bold',sans-serif] font-bold transition-all shadow-md text-center text-lg"
              >
                Prenez-RDV
              </a>
            </div>
            <p className="text-[18px] font-['Inter:Regular',sans-serif] text-[#3d494c] max-w-xl leading-relaxed">
              De l'audit stratégique au développement d'applications d'IA sur-mesure, 
              nous forgeons vos outils IA avec le moins de dépendances possibles aux solutions externes et étrangères.
            </p>
            <p className="mt-6 font-['Manrope:Bold',sans-serif] font-bold text-[#00A9C1] flex items-center gap-2">
              <span className="w-8 h-[2px] bg-[#00A9C1]"></span>
              Solutions françaises et souveraines
            </p>
          </div>
          <div className="flex-1 relative translate-x-12 lg:translate-x-20">
            <img 
              src="https://www.fabrik01.fr/images/ImageUne.png" 
              alt="Pilotage IA" 
              className="w-[120%] h-auto max-w-none relative z-10 border-none"
            />
          </div>
        </div>
      </section>

      {/* Notre Méthode Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-[#001E40] to-[#1D638F]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-['Manrope:Extra_Bold',sans-serif] font-extrabold text-white mb-6">
            Notre Méthode
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Une approche structurée en 3 étapes pour transformer votre organisation en déployant de l'IA et des automatisations.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-xl transition-all border border-gray-100 group">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src="https://www.fabrik01.fr/images/formations1.png" 
                alt="Diagnostic" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-lg">1</span>
                <h3 className="text-xl font-bold font-['Manrope:Bold',sans-serif]">Diagnostic et cadrage</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Une formation ou un audit avec vos équipes pour identifier les opportunités concrètes d'intégration de l'IA. 
                Nous aboutissons à des cas d'usages d'implémentation.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-xl transition-all border border-gray-100 group">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src="https://www.fabrik01.fr/images/prog.jpg" 
                alt="Développement" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-lg">2</span>
                <h3 className="text-xl font-bold font-['Manrope:Bold',sans-serif]">Développement IA & Logiciels</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nos ingénieurs créent des applications sur-mesure et souveraines (web/mobiles) avec IA intégrée.
              </p>
              <div className="p-4 bg-blue-50/50 rounded-xl">
                <p className="text-sm font-semibold text-[#1D638F]">
                  Propriété Totale : Le code est à vous, hébergé sur des serveurs français sécurisés.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-xl transition-all border border-gray-100 group">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src="https://www.fabrik01.fr/images/dasboard2.png" 
                alt="Pilotage" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-bold text-lg">3</span>
                <h3 className="text-xl font-bold font-['Manrope:Bold',sans-serif]">Pilotage et suivi</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Centralisation dans un Hub de Pilotage unique avec suivi du ROI et maintenance évolutive continue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Indépendance aux logiciels US Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-['Manrope:Extra_Bold',sans-serif] font-extrabold mb-4">
            A noter : Vous construisez aussi votre <br />
            <span className="text-[#2563EB]">indépendance aux logiciels US</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col items-center">
            {/* Toggle-style labels */}
            <div className="flex gap-4 mb-12">
                <div className="px-6 py-2 bg-slate-600 text-white rounded-full text-sm font-semibold">Before</div>
                <div className="px-6 py-2 bg-[#2563EB] text-white rounded-full text-sm font-semibold">After</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
                {/* Before Column */}
                <div className="flex flex-col items-center lg:items-end w-full">
                    <div className="mb-10 w-full max-w-[400px]">
                        <img 
                            src={imgLogicielsUS} 
                            alt="Logiciels US" 
                            className="w-full h-auto rounded-2xl"
                        />
                    </div>
                    
                    <ul className="space-y-4 text-right">
                        {[
                            "Vos données → Serveurs USA (Cloud Act)",
                            "Utilisées pour entraîner leurs IA",
                            "Outils dépassés par le rythme de l'IA",
                            "Risque RGPD : Amendes jusqu'à 20M€",
                            "Fuites de données et risques IA",
                            "Outils généralistes non adaptés"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center justify-end gap-3 text-gray-500 font-medium text-sm md:text-base">
                                <span>{item}</span>
                                <XCircle size={18} className="text-red-400 shrink-0" />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* After Column */}
                <div className="flex flex-col items-center lg:items-start relative">
                    <div className="mb-10 w-full max-w-[400px]">
                        <img 
                            src="https://www.fabrik01.fr/images/ai-dashboard.png" 
                            alt="Votre IA souveraine" 
                            className="w-full h-auto drop-shadow-2xl"
                        />
                    </div>
                    
                    <ul className="space-y-4 text-left">
                        {[
                            "Vos données = VOTRE propriété",
                            "Restez à la pointe de l'IA en permanence",
                            "Hébergement local ou cloud souverain",
                            "ZÉRO risque RGPD (conforme dès le départ)",
                            "Outils adaptés à VOTRE métier",
                            "Valeur ajoutée de vos équipes décuplée",
                            "Avantage et créativité durable"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-800 font-bold text-sm md:text-base">
                                <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto rounded-[32px] overflow-hidden relative">
            <div className="bg-[#0A192F] p-12 md:p-20 text-center relative z-10 border border-white/5">
                <h2 className="text-3xl md:text-5xl font-['Manrope:Extra_Bold',sans-serif] font-extrabold text-white mb-8">
                    Prêts pour la transformation ?
                </h2>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a 
                        href="https://calendrier.dataconforme.com/jerome.ficat-dataconforme.com/rendez-vous-jerome-ficat?duration=30"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-[#0A192F] hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                    >
                        Prenez RDV <ArrowRight size={18} />
                    </a>
                    <button 
                        onClick={() => onNavigate('contact')}
                        className="border border-white/20 hover:border-white/40 text-white px-10 py-4 rounded-xl font-bold transition-all"
                    >
                        Contactez-nous
                    </button>
                </div>
            </div>
            
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00A9C1]/10 blur-[100px] pointer-events-none" />
        </div>
      </section>

    </div>
  );
}
