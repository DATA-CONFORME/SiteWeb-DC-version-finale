import { useState } from "react";
import { BookOpen, Clock, Award, Users, FileCheck, Shield, ChevronRight, CheckCircle2 } from "lucide-react";
import { Navbar, Footer } from "../App";
import qualiopiLogo from '../../assets/qualiopi-logo.png';

export function HorizontalAntiGravityStrip() {
  const stats = [
    { value: "+200", label: "Professionnels formés" },
    { value: "100%", label: "Taux de satisfaction" },
    { value: "+6 ans", label: "Années d'expérience" },
    { value: "100%", label: "Certifié Qualiopi" },
  ];

  return (
    <section className="w-full py-12 bg-white border-y border-[#E5E9F0] overflow-hidden relative">
      <div className="flex animate-horizontal-scroll whitespace-nowrap">
        {/* Two sets of items for seamless loop */}
        {[...stats, ...stats, ...stats, ...stats].map((stat, i) => (
          <div key={i} className="flex flex-col items-center justify-center min-w-[350px] px-12">
            <div className="text-[52px] font-['Manrope:Extra_Bold',sans-serif] text-[#0047BA] leading-none mb-2 drop-shadow-[0_0_15px_rgba(0,71,186,0.15)]">
              {stat.value}
            </div>
            <div className="text-[14px] font-['Inter:Semi_Bold',sans-serif] text-[#5A6C7D] uppercase tracking-[3px] text-center">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      {/* Side gradients for smooth fade in/out */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}

export default function FormationPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [showRGPDDetails, setShowRGPDDetails] = useState(false);
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar currentPage="formation" onNavigate={onNavigate} />

      {/* Hero Section - Centered without image */}
      <section className="relative w-full pt-[96px] overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFB 100%)' }}>
        <div className="max-w-[1000px] mx-auto px-8 py-24 text-center">
          <h1 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[56px] leading-[1.1] mb-6">
            Développez vos compétences en conformité
          </h1>
          
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[20px] leading-[1.6] mb-8 max-w-[800px] mx-auto">
            Des formations pratiques et certifiantes pour maîtriser le RGPD, l'IA Act et la cybersécurité, animées par des experts terrain.
          </p>
          
          <div className="flex justify-center gap-4">
            <button className="px-8 py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer" style={{ background: 'linear-gradient(135deg, #0047BA 0%, #00A9C1 100%)' }}>
              <span className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[16px]">
                Voir nos formations
              </span>
            </button>
            
            <button 
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white border-2 border-[#E5E9F0] rounded-lg transition-all duration-200 hover:border-[#0047BA] hover:bg-[#F8FAFB] cursor-pointer"
            >
              <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[16px]">
                Demander un devis
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar replaced with Anti-Gravity Marquee */}
      <HorizontalAntiGravityStrip />

      {/* Programs Section */}
      <section className="w-full py-24 px-8 bg-[#F8FAFB]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[48px] mb-4">
              Nos formations
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[20px] max-w-[700px] mx-auto">
              Des programmes conçus pour vous accompagner dans votre mise en conformité
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Program 1: DPO */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5E9F0]">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #0047BA 0%, #00A9C1 100%)' }}>
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[24px] mb-4 leading-tight">
                Formation d’un référent interne RGPD
              </h3>
              
              <p className="font-['Inter:SemiBold',sans-serif] font-semibold text-[#0047BA] text-[15px] mb-4">
                Afin de rendre son organisation conforme au RGPD
              </p>

              <div className="mb-6">
                <p className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[16px] mb-2">Objectifs :</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00A9C1] shrink-0 mt-1" />
                    <span className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[14px]">Connaître et comprendre les obligations liées au RGPD.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00A9C1] shrink-0 mt-1" />
                    <span className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[14px]">Être capable de mettre en application les obligations de conformité RGPD au sein de son entreprise.</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3 mb-8 pb-8 border-b border-[#E5E9F0]">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E8F5F0] flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#00A9C1]" />
                  </div>
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px]">
                    de 0,5 jours à 5 jours (3h30 à 35h), selon le besoin exprimé
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E8F5F0] flex items-center justify-center">
                    <Award className="w-4 h-4 text-[#00A9C1]" />
                  </div>
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px]">
                    Certification incluse
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E8F5F0] flex items-center justify-center">
                    <Users className="w-4 h-4 text-[#00A9C1]" />
                  </div>
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px]">
                    En présentiel ou distanciel
                  </span>
                </div>
              </div>
              
              <button 
                onClick={() => setShowRGPDDetails(!showRGPDDetails)}
                className="w-full py-3 px-6 rounded-lg border-2 border-[#0047BA] hover:bg-[#F8FAFB] transition-all duration-200 group flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#0047BA] text-[16px]">
                  {showRGPDDetails ? "Voir moins" : "En savoir plus"}
                </span>
                <ChevronRight className={`w-4 h-4 text-[#0047BA] transition-transform duration-200 ${showRGPDDetails ? 'rotate-90' : ''}`} />
              </button>

              {/* Expandable Details Menu */}
              <div className={`overflow-hidden transition-all duration-300 ${showRGPDDetails ? 'max-h-[800px] mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 bg-[#F8FAFB] rounded-xl border border-[#E5E9F0] space-y-4">
                  <div className="space-y-3">
                    {[
                      "Connaître son système d’information",
                      "Être capable d’analyser son organisation physique",
                      "Réaliser la documentation interne obligatoire",
                      "Auditer son site internet et/ou intranet",
                      "Établir son registre des activités de traitement",
                      "Mettre en place les autres registres : incidents, sous-traitants, suivi des demandes de droits, recueil des preuves de consentement",
                      "Plannifier des sensibilisation des salariés à la cybersécurité et au RGPD",
                      "Tester un logiciel de gestion du RGPD"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0047BA] mt-2 shrink-0" />
                        <span className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[14px] leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-[#E5E9F0]">
                    <p className="font-['Inter:SemiBold',sans-serif] font-semibold text-[#0A192F] text-[14px]">
                      Action de formation individuelle ou de groupe
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Program 2: IA Act */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#0047BA]">
              <div className="absolute -top-3 right-8">
                <div className="px-4 py-1 rounded-full bg-[#0047BA]">
                  <span className="font-['Inter:Bold',sans-serif] font-bold text-white text-[12px] uppercase tracking-wider">
                    Populaire
                  </span>
                </div>
              </div>
              
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #00A9C1 0%, #82E600 100%)' }}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[28px] mb-4">
                IA Act & Conformité
              </h3>
              
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[16px] leading-[1.6] mb-6">
                Maîtrisez la réglementation européenne sur l'IA et mettez en place une gouvernance responsable de vos systèmes d'IA.
              </p>
              
              <div className="space-y-3 mb-8 pb-8 border-b border-[#E5E9F0]">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E8F5F0] flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#00A9C1]" />
                  </div>
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px]">
                    3 jours (21 heures)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E8F5F0] flex items-center justify-center">
                    <Award className="w-4 h-4 text-[#00A9C1]" />
                  </div>
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px]">
                    Attestation de formation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E8F5F0] flex items-center justify-center">
                    <Users className="w-4 h-4 text-[#00A9C1]" />
                  </div>
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px]">
                    Format sur-mesure disponible
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 w-full">
                <a 
                  href={`${import.meta.env.BASE_URL}programme_formation_ia.pdf`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg flex items-center justify-center text-center no-underline cursor-pointer"
                  style={{ background: 'linear-gradient(135deg, #0047BA 0%, #00A9C1 100%)' }}
                >
                  <span className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[15px]">
                    Programme de formation
                  </span>
                </a>
                
                <a 
                  href={`${import.meta.env.BASE_URL}Fiche_Produit_IA_Qualiopi.pdf`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 rounded-lg border-2 border-[#0047BA] hover:bg-[#F8FAFB] transition-colors duration-200 flex items-center justify-center text-center no-underline cursor-pointer"
                >
                  <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#0047BA] text-[15px]">
                    Fiche de formation
                  </span>
                </a>
              </div>
            </div>

            {/* Program 3: Cybersécurité */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5E9F0]">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #82E600 0%, #0047BA 100%)' }}>
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[28px] mb-4">
                Cybersécurité
              </h3>
              
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[16px] leading-[1.6] mb-6">
                Protégez vos données et systèmes. Formation pratique aux enjeux de cybersécurité pour dirigeants et équipes IT.
              </p>
              
              <div className="space-y-3 mb-8 pb-8 border-b border-[#E5E9F0]">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E8F5F0] flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#00A9C1]" />
                  </div>
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px]">
                    2 jours (14 heures)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E8F5F0] flex items-center justify-center">
                    <Award className="w-4 h-4 text-[#00A9C1]" />
                  </div>
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px]">
                    Cas pratiques inclus
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E8F5F0] flex items-center justify-center">
                    <Users className="w-4 h-4 text-[#00A9C1]" />
                  </div>
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px]">
                    Tous niveaux
                  </span>
                </div>
              </div>
              
              <button className="w-full py-3 px-6 rounded-lg border-2 border-[#0047BA] hover:bg-[#0047BA] transition-colors duration-200 group cursor-pointer">
                <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#0047BA] group-hover:text-white text-[16px]">
                  En savoir plus
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-24 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[48px] mb-4">
              Pourquoi choisir nos formations ?
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[20px] max-w-[700px] mx-auto">
              Une approche unique combinant expertise juridique et maîtrise technique
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0047BA15 0%, #00A9C115 100%)' }}>
                <BookOpen className="w-10 h-10 text-[#0047BA]" />
              </div>
              <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[24px] mb-3">
                Expertise terrain
              </h3>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[16px] leading-[1.6]">
                Formateurs praticiens avec plus de 20 ans d'expérience en protection des données et transformation digitale.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden">
                <img src={qualiopiLogo} alt="Qualiopi" className="w-full h-full object-contain p-2" />
              </div>
              <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[24px] mb-3">
                Certifications reconnues
              </h3>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[16px] leading-[1.6]">
                Organisme certifié Qualiopi. Votre formation peut être financée jusqu'à 50% par votre OPCO et donne accès à des certifications professionnelles valorisantes.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #82E60015 0%, #0047BA15 100%)' }}>
                <Users className="w-10 h-10 text-[#82E600]" />
              </div>
              <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[24px] mb-3">
                Approche pratique
              </h3>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[16px] leading-[1.6]">
                Cas concrets, ateliers et mises en situation pour une application immédiate dans votre contexte professionnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-8" style={{ background: 'linear-gradient(135deg, #0047BA 0%, #00A9C1 100%)' }}>
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[48px] leading-tight mb-6">
            Prêt à vous former ?
          </h2>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-white/90 text-[20px] leading-[1.6] mb-10">
            Contactez-nous pour construire ensemble votre parcours de formation personnalisé.
          </p>
          
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white hover:bg-gray-100 rounded-lg transition-colors duration-200 shadow-lg cursor-pointer"
            >
              <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#0047BA] text-[16px]">
                Nous contacter
              </span>
            </button>
            
            <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg transition-colors duration-200 cursor-pointer">
              <span className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[16px]">
                Télécharger le catalogue
              </span>
            </button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
