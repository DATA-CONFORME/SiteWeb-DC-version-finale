import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Navbar, Footer } from "../App";
import applicationImage from "../../assets/application.jpg";

const plan = {
  id: "serenite-collectivite",
  title: "Sérénité Collectivité",
  subtitle: "Protection maximale",
  monthlyPrice: 950,
  stripeLink: "https://calendrier.dataconforme.com/jerome.ficat-dataconforme.com/rendez-vous-jerome-ficat?duration=30",
  ctaLabel: "Choisir Sérénité Collectivité",
  features: [
    "Nomination officielle du DPO auprès de la CNIL",
    "Mise à disposition d'un logiciel de pilotage conformité",
    "Tenue complète et permanente de vos registres obligatoires",
    "Appui juridique et technique continu",
    "Veille, appuis juridique et technique continus",
    "Conduite du plan cybersécurité et conformité avancée",
    "Présentiel dans la collectivité",
    "Rédaction de politiques de sécurité (PSSI, PRA, PCA)",
    "Chartes informatique, intelligence artificielle, télétravail",
    "Évaluation de l'usage de l'intelligence artificielle",
    "2 sensibilisations d'équipes / an",
    "Simulations de phishing et tests d'ingénierie sociale",
    "Contrôle illimité des sous-traitants",
    "Cellule de crise en cas d'incident cyber",
  ],
};

export default function TarifsCollectivitesPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar onNavigate={onNavigate || (() => {})} />
      
      {/* Header */}
      <div className="text-center pt-[180px] pb-16 px-8">
        {/* Brand badge */}
        <div className="inline-flex items-center gap-2 bg-[#F0F7FF] border border-[#0047BA]/10 px-5 py-2 rounded-full mb-8">
          <div className="w-2 h-2 rounded-full bg-[#00A9C1]" />
          <span className="font-['Inter:Semi_Bold',sans-serif] text-[#0047BA] text-[13px] uppercase tracking-widest">
            Offre Collectivités — Data Conforme
          </span>
        </div>

        <h1 className="font-['Manrope:Extra_Bold',sans-serif] text-[#0A192F] text-[48px] lg:text-[56px] leading-tight mb-6">
          Sérénité Collectivité
        </h1>
        <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] text-[18px] lg:text-[20px] max-w-[700px] mx-auto leading-relaxed">
          Un accompagnement premium dédié aux collectivités territoriales pour une conformité totale et une cybersécurité renforcée.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 items-start justify-center">
          
          {/* Left: Pilotage Digital Section */}
          <div className="flex flex-col gap-8 pt-4">
            <div className="relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0F7FF] border border-[#0047BA]/10 mb-6 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#82E600] animate-pulse" />
                  <span className="font-['Inter:Semi_Bold',sans-serif] text-[#0A192F] text-[12px] uppercase tracking-widest">
                    Digitalisation & Accountability
                  </span>
                </div>
                
                <h3 className="font-['Manrope:Extra_Bold',sans-serif] text-[36px] lg:text-[42px] leading-tight mb-6">
                  <span className="text-[#0A192F]">Votre application innovante de suivis DPO</span><br />
                  <span className="text-[#72CB00]">Incluse dans votre abonnement</span>
                </h3>
                
                <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] text-[18px] leading-relaxed max-w-[600px] mb-10">
                  Votre tableau de bord intelligent centralise et simplifie le pilotage de votre conformité. Accédez à vos registres, gérez vos sous-traitants et suivez vos plans d'action en un clic.
                </p>

                <div className="rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 bg-white p-2">
                  <img 
                    src={applicationImage} 
                    alt="Application Pilotage Digital" 
                    className="w-full h-auto rounded-[18px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Pricing Card */}
          <div 
            className="relative flex flex-col rounded-[28px] overflow-hidden border border-[#0047BA]/10 ring-2 ring-[#82E600] shadow-[0_32px_64px_-16px_rgba(130,230,0,0.2)] bg-white"
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00A9C1] to-[#82E600]" />

            <div className="p-8 lg:p-9">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="font-['Manrope:Extra_Bold',sans-serif] text-[26px] text-[#0A192F] mb-1">
                    {plan.title}
                  </h2>
                  <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] text-[13px]">
                    {plan.subtitle}
                  </p>
                </div>
                <div className="bg-[#82E600]/10 text-[#2D5A00] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Premium
                </div>
              </div>

              {/* Price */}
              <div className="flex items-end gap-2 mb-8">
                <span className="font-['Manrope:Extra_Bold',sans-serif] text-[48px] leading-none text-[#0A192F]">
                  {plan.monthlyPrice}€
                </span>
                <span className="text-[#5A6C7D] font-['Inter:Medium',sans-serif] text-[15px] mb-2">
                  / mois HT
                </span>
              </div>

              <a
                href={plan.stripeLink}
                className="block w-full py-[15px] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] text-[15px] text-center no-underline transition-all duration-300 cursor-pointer bg-[#0A192F] text-white hover:bg-[#0047BA] hover:shadow-lg hover:-translate-y-0.5"
              >
                {plan.ctaLabel}
              </a>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0047BA]/10 to-transparent" />

            <div className="p-8 lg:p-9 bg-[#F8FAFC]">
              <p className="font-['Inter:Semi_Bold',sans-serif] text-[#0A192F] text-[11px] uppercase tracking-widest mb-6">
                Inclus dans votre accompagnement :
              </p>
              <ul className="grid grid-cols-1 gap-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="shrink-0 w-5 h-5 rounded-full bg-white border border-[#00A9C1]/20 flex items-center justify-center mt-0.5 shadow-sm">
                      <CheckCircle2 className="w-3 h-3 text-[#00A9C1]" />
                    </div>
                    <span className="font-['Inter:Regular',sans-serif] text-[13px] text-[#42526E] leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-[#F0F7FF] rounded-[24px] p-8 md:p-10 border border-[#0047BA]/5">
            <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-3xl">
              🤝
            </div>
            <div className="text-left">
              <h3 className="font-['Manrope:Bold',sans-serif] text-[#0A192F] text-[20px] mb-2">
                Besoin d'un devis personnalisé ?
              </h3>
              <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] text-[15px] max-w-[500px]">
                Nos experts sont à votre disposition pour adapter cette offre aux spécificités de votre collectivité.
              </p>
            </div>
            <a 
              href="/contact"
              className="mt-4 md:mt-0 px-8 py-4 bg-white text-[#0A192F] font-['Inter:Semi_Bold',sans-serif] rounded-[12px] border border-[#0047BA]/10 hover:bg-[#F8FAFC] transition-all cursor-pointer whitespace-nowrap shadow-sm"
              onClick={(e) => {
                e.preventDefault();
                onNavigate && onNavigate('contact');
              }}
            >
              Contacter un expert
            </a>
          </div>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
