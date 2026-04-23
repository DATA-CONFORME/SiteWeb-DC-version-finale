import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, Search, FileText, UserCheck, HardDrive, GraduationCap, Building2, Laptop, HeartPulse, Factory, Globe2, ChevronDown, ChevronUp } from "lucide-react";
import isoLogo from "../../assets/iso27001-logo.png";
import nis2Logo from "../../assets/nis2-logo.png";
import applicationDpo from "../../assets/application-dpo.jpg";
import applicationIa from "../../assets/application-ia.jpg";

const publicUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export function SectionRGPD() {
  const features = [
    { title: "Une mise aux normes obligatoire", desc: "Le RGPD est obligatoire pour tout type de structure. Nous vous aidons à protéger votre « trésor de guerre » et à limiter les risques.", icon: <ShieldCheck className="w-8 h-8 text-[#00A9C1]" /> },
    { title: "Analyse de votre SI", desc: "Un regard neuf sur vos failles de sécurité. Le DPO vous aide à prévenir les non-conformités informatiques.", icon: <HardDrive className="w-8 h-8 text-[#00A9C1]" /> },
    { title: "ISO 27001", desc: "Mise en place d’un système de management de la sécurité de l’information (SMSI) selon les normes internationales.", icon: <img src={isoLogo} alt="ISO 27001" className="w-10 h-auto object-contain" /> },
    { title: "Analyse de vos process", desc: "Chaque service de votre entreprise a ses pratiques. Sécuriser vos données en adaptant vos usages aux exigences cyber.", icon: <Search className="w-8 h-8 text-[#00A9C1]" /> },
    { title: "Une assistance nécessaire", desc: "Le RGPD exige des connaissances spécialisées. Un Délégué à la Protection des Données (DPO) vous soulage de cette contrainte.", icon: <UserCheck className="w-8 h-8 text-[#00A9C1]" /> },
    { title: "NIS 2 : nouvelle règlementation", desc: "Changement de paradigme pour apporter davantage de protection face aux acteurs malveillants toujours plus performants.", icon: <img src={nis2Logo} alt="NIS 2" className="w-12 h-12 rounded-lg object-cover" /> }
  ];

  return (
    <div id="rgpd-cybersec" className="w-full py-[64px] bg-white relative scroll-mt-32" data-name="Section - RGPD Features">
      <div className="max-w-[1280px] mx-auto px-[32px] relative z-10">
        <div className="text-center mb-[48px] md:mb-[80px]">
          <h2 className="font-['Manrope:Extra_Bold',sans-serif] text-[#0A192F] text-[36px] md:text-[48px] leading-tight tracking-tight mb-[24px]">
            Le RGPD et les normes de Cybersécurité
          </h2>
          <p className="font-['Inter:Regular',sans-serif] text-[16px] md:text-[18px] text-[#5A6A7A] max-w-[800px] mx-auto">
            Devenez résilient face aux risques grâce à un écosystème de conformité complet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {features.map((feat, idx) => (
            <div key={idx} className="group relative bg-[#f8fafc] rounded-[24px] p-[32px] flex flex-col items-start border border-[rgba(0,169,193,0.08)] hover:border-[#00A9C1] hover:shadow-[0_8px_30px_rgb(0,169,193,0.1)] transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 transform group-hover:scale-110">
                {feat.icon}
              </div>
              <div className="w-[56px] h-[56px] rounded-[16px] bg-white flex items-center justify-center shadow-sm mb-[28px] group-hover:bg-[#E6F6F9] transition-colors duration-500">
                {feat.icon}
              </div>
              <h3 className="font-['Manrope:Bold',sans-serif] text-[20px] text-[#0A192F] mb-[16px] group-hover:text-[#0047BA] transition-colors duration-500">
                {feat.title}
              </h3>
              <p className="font-['Inter:Regular',sans-serif] text-[15px] text-[#5A6A7A] leading-[1.65]">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SectionSecteurs() {
  const sectors = [
    { name: "Centres de formation", icon: <GraduationCap size={20} /> },
    { name: "Travail temporaire", icon: <UserCheck size={20} /> },
    { name: "Éditeurs de logiciels", icon: <Laptop size={20} /> },
    { name: "Agences d'urbanisme", icon: <Building2 size={20} /> },
    { name: "ESN & Hébergeurs", icon: <HardDrive size={20} /> },
    { name: "Établissements de santé", icon: <HeartPulse size={20} /> },
    { name: "Entreprises industrielles", icon: <Factory size={20} /> },
  ];

  // Duplicate for seamless infinite loop
  const doubleSectors = [...sectors, ...sectors];

  return (
    <div className="w-full py-[80px] bg-[#0A192F] overflow-hidden" data-name="Section - Sectors">
      <div className="max-w-[1280px] mx-auto px-[32px] mb-12">
        <div className="max-w-[800px]">
          <h2 className="font-['Manrope:Extra_Bold',sans-serif] text-white text-[32px] md:text-[42px] leading-tight mb-[24px]">
            Tous les secteurs sont concernés.
          </h2>
          <p className="font-['Inter:Regular',sans-serif] text-[16px] md:text-[18px] text-[rgba(255,255,255,0.7)]">
            Toutes les sociétés, associations, établissements publics ou privés sont concernés par la conformité, l'IA et la cybersécurité.
            Notre expertise multisectorielle nous permet d'intervenir dans votre secteur d'activité en apportant des expériences provenants d'autres univers.
          </p>
        </div>
      </div>
      
      {/* Infinite Marquee */}
      <div className="relative flex overflow-hidden py-4">
        <div className="flex gap-[24px] animate-marquee whitespace-nowrap">
          {doubleSectors.map((sec, idx) => (
            <div key={idx} className="flex items-center gap-[12px] bg-[rgba(255,255,255,0.05)] backdrop-blur-md px-[28px] py-[16px] rounded-[100px] border border-[rgba(255,255,255,0.1)] text-white font-['Inter:Semi_Bold',sans-serif] hover:bg-[rgba(255,255,255,0.1)] transition-colors cursor-default">
              <span className="text-[#82E600]">{sec.icon}</span>
              {sec.name}
            </div>
          ))}
        </div>
        
        {/* CSS for marquee animation inline if not in global css, but I'll add a style tag for simplicity here */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}} />
      </div>
    </div>
  );
}

export function SectionOffres() {
  const [isDpoExpanded, setIsDpoExpanded] = useState(false);
  const auditFeatures = [
    "Sensibilisation du comité de direction",
    "Accompagnement et formation du relai interne RGPD",
    "Analyse de votre système d'information",
    "Analyse de votre organisation physique",
    "Interview des services",
    "Analyse de votre documentation, ajout et modification",
    "Audit de votre site internet et/ou intranet",
    "Analyse de vos sous-traitants et mise en place d'avenants de sous-traitance",
    "Établissement de votre registre des activités de traitement",
    "Mise en place des autres registres : incidents, sous-traitants, suivi des demandes de droits, recueil des preuves de consentement",
    "Sensibilisation des salariés à la cybersécurité et au RGPD",
    "Rapport d'audit clair et synthétique",
  ];

  return (
    <div id="offres-pricing" className="w-full py-[64px] bg-[#f5f7ff] scroll-mt-32" data-name="Section - Offers Pricing">
      <div className="max-w-[1280px] mx-auto px-[32px]">
        <div className="text-center mb-[40px] md:mb-[56px]">
          <h2 className="font-['Manrope:Extra_Bold',sans-serif] text-[36px] md:text-[48px] text-[#0A192F] leading-tight tracking-tight mb-[16px]">
            Un budget compliance adapté
          </h2>
          <p className="font-['Inter:Regular',sans-serif] text-[16px] md:text-[18px] text-[#5A6A7A]">
            Découvrez notre accompagnement sur-mesure pour initier votre conformité.
          </p>
        </div>

        {/* Two-column layout: audit card + visio CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left: Dark audit card */}
          <div className="lg:col-span-7 relative rounded-[24px] overflow-hidden shadow-2xl" style={{ background: "linear-gradient(160deg, #0A192F 0%, #0E2844 100%)" }}>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A9C1] to-[#82E600]" />

            <div className="px-6 md:px-10 pt-10 pb-6 border-b border-white/10">
              <h3 className="font-['Manrope:Extra_Bold',sans-serif] text-white text-[22px] md:text-[26px]">
                Audit initial de conformité
              </h3>
            </div>

            <div className="px-6 md:px-10 py-8">
              <ul className="space-y-4">
                {auditFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 w-2 h-2 rounded-full bg-[#82E600] mt-[7px]" />
                    <span className="font-['Inter:Regular',sans-serif] text-[15px] text-white/85 leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-6 md:px-10 pb-10">
              <a
                href="https://calendrier.dataconforme.com/jerome.ficat-dataconforme.com/rendez-vous-jerome-ficat?duration=30"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full py-[14px] rounded-[12px] font-['Manrope:Bold',sans-serif] text-[15px] uppercase tracking-widest text-white text-center no-underline cursor-pointer transition-all duration-200 hover:bg-[#82E600] hover:text-[#0A192F]"
                style={{ backgroundColor: "#00A9C1" }}
              >
                Nous consulter
              </a>
            </div>
          </div>

          {/* Right column: DPO & Visio */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* DPO Externalisé Card (Collapsible) */}
            <div 
              id="dpo-pricing-card"
              className="bg-white border border-[rgba(0,169,193,0.15)] rounded-[24px] overflow-hidden shadow-sm flex flex-col transition-all duration-300 scroll-mt-24"
            >
              <div 
                className="p-5 text-white text-center relative"
                style={{ background: "linear-gradient(135deg, #0A192F 0%, #1A2340 100%)" }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full border-2 border-[#82E600] mb-2 overflow-hidden shadow-lg bg-white/10 ring-4 ring-white/5">
                    <img src={publicUrl("jerome-ficat.png")} alt="Jérôme Ficat" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-['Manrope:Bold',sans-serif] text-[17px] mb-0.5">DPO externalisé</h4>
                  <p className="font-['Inter:Medium',sans-serif] text-[10px] text-[#82E600]/80 uppercase tracking-widest">Accompagnement Expert</p>
                </div>
              </div>

              <div className="p-5">
                <ul className="space-y-2 my-5">
                  {[
                    "Nomination DPD auprès de la CNIL",
                    "Hotline RGPD et juridique dédiée",
                    "Gestion via logiciel de conformité",
                    "Suivi et mise à jour des registres",
                    "Rédaction documentation obligatoire",
                    "Assistance violations de données",
                    "Gestion des demandes de droits",
                    "Analyse des sous-traitants",
                    "Rédaction de PIA (impacts)",
                    "Bilans intermédiaires & annuels"
                  ].map((service, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-[#00A9C1] mt-1 shrink-0" />
                      <span className="font-['Inter:Regular',sans-serif] text-[12px] text-[#0A192F] leading-tight">{service}</span>
                    </li>
                  ))}
                </ul>


                <a
                  href="/contact"
                  className="group flex items-center justify-center w-full py-3 rounded-xl font-['Manrope:Bold',sans-serif] text-[14px] bg-[#00A9C1] text-white hover:bg-[#008CA1] transition-all duration-300 no-underline"
                >
                  <span className="mr-2">Demander un devis</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Visio Promo Card (Below DPO) */}
            <a
              href="https://calendrier.dataconforme.com/jerome.ficat-dataconforme.com/rendez-vous-jerome-ficat?duration=30"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-[24px] overflow-hidden no-underline cursor-pointer shadow-md hover:shadow-lg transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #00A9C1 0%, #0076A8 100%)" }}
            >
              <div className="p-5 px-6 flex items-center gap-5">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 text-[20px]">
                  📞
                </div>
                <div className="flex-1">
                  <p className="font-['Manrope:Extra_Bold',sans-serif] text-white text-[16px] leading-tight">30 min de visio offertes</p>
                  <p className="font-['Inter:Regular',sans-serif] text-white/70 text-[11px] leading-tight">Accompagnement gratuit & sans engagement</p>
                </div>
                <div className="text-white">→</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SectionEcosystem() {
  return (
    <div id="pilotage-conformite" className="w-full pt-[64px] pb-[100px] bg-[#0A192F] relative overflow-hidden scroll-mt-32" data-name="Section - Ecosystem">
      <div className="max-w-[1400px] mx-auto px-[32px]">
        {/* Header */}
        <div className="text-center mb-[80px]">
          <h2 className="font-['Manrope:Extra_Bold',sans-serif] text-white text-[32px] md:text-[48px] leading-tight tracking-tight">
            Nous pilotons votre conformité avec un logiciel innovant
          </h2>
        </div>

        <div className="flex flex-col gap-[120px]">
          {/* BLOC A : Application de suivi DPO */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-24 items-center">
            {/* Image GAUCHE */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00A9C1]/20 to-[#82E600]/20 rounded-[32px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img 
                src={applicationDpo} 
                alt="Application de suivi DPO" 
                className="relative w-full h-auto rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10"
              />
            </div>
            {/* Texte DROITE */}
            <div className="flex flex-col items-start order-1 lg:order-2">
              <span className="text-[#82E600] font-['Inter:Semi_Bold',sans-serif] tracking-wider uppercase text-[14px] mb-4">
                Pilotage Digital & Accountability
              </span>
              <h3 className="font-['Manrope:Bold',sans-serif] text-[28px] md:text-[36px] text-white mb-6 leading-tight">
                Votre Conformité RGPD en Temps Réel
              </h3>
              <p className="font-['Inter:Regular',sans-serif] text-[16px] md:text-[18px] text-white/70 leading-[1.7] mb-8">
                La conformité n'est plus une simple contrainte administrative, c'est devenu l'exigence n°1 de vos clients et partenaires. Avec notre application innovante de suivi DPO, transformez vos obligations légales en un véritable différenciateur stratégique. Conçu par des experts qui comprennent votre réalité technique, notre tableau de bord intelligent centralise et simplifie le pilotage de votre mise aux normes.
              </p>
              <div className="grid grid-cols-1 gap-6 mb-10">
                {[
                  { title: "Indicateurs en temps réel", desc: "Vision claire and instantanée de votre maturité et de votre score global." },
                  { title: "Analyse multicritère", desc: "Détection des signaux faibles via des vues radar détaillées (9 axes)." },
                  { title: "Traçabilité & Efficacité", desc: "Gestion des registres et pilotage des actions de la vérification à la clôture." }
                ].map((point, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#82E600]/20 flex items-center justify-center">
                      <CheckCircle2 size={16} className="text-[#82E600]" />
                    </div>
                    <div>
                      <h4 className="text-white font-['Inter:Semi_Bold',sans-serif] text-[16px]">{point.title}</h4>
                      <p className="text-white/50 text-[14px] leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[#82E600] italic font-['Inter:Medium',sans-serif] text-[16px] border-l-2 border-[#82E600] pl-4">
                L'avantage Data Conforme : Prenez des décisions éclairées et gagnez des contrats en prouvant la robustesse de votre écosystème.
              </p>
            </div>
          </div>

          {/* BLOC B : Application Gouvernance IA */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-24 items-center">
            {/* Texte GAUCHE */}
            <div className="flex flex-col items-start order-1">
              <span className="text-[#82E600] font-['Inter:Semi_Bold',sans-serif] tracking-wider uppercase text-[14px] mb-4">
                Maîtrise et Gouvernance des Systèmes d'IA
              </span>
              <h3 className="font-['Manrope:Bold',sans-serif] text-[28px] md:text-[36px] text-white mb-6 leading-tight">
                Préparez-vous à l'IA Act
              </h3>
              <p className="font-['Inter:Regular',sans-serif] text-[16px] md:text-[18px] text-white/70 leading-[1.7] mb-8">
                L'Intelligence Artificielle redéfinit la valeur de votre organisation, mais elle exige de nouveaux standards de confiance. Notre module dédié à l'analyse de risques et à la gouvernance de l'IA vous offre une approche intégrée pour cartographier, évaluer et maîtriser vos systèmes, garantissant ainsi une innovation responsable et durable.
              </p>
              <div className="grid grid-cols-1 gap-6 mb-10">
                {[
                  { title: "Analyse des risques IA", desc: "Cartographie des systèmes critiques et évaluation des menaces (biais, transparence)." },
                  { title: "Gouvernance centralisée", desc: "Pilotage des politiques, rôles et exigences éthiques (explicabilité, robustesse)." },
                  { title: "Preuves automatisées", desc: "Suivi de l'évolution du score de gouvernance et génération automatique de rapports d'audit." }
                ].map((point, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#82E600]/20 flex items-center justify-center">
                      <CheckCircle2 size={16} className="text-[#82E600]" />
                    </div>
                    <div>
                      <h4 className="text-white font-['Inter:Semi_Bold',sans-serif] text-[16px]">{point.title}</h4>
                      <p className="text-white/50 text-[14px] leading-relaxed">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[#82E600] italic font-['Inter:Medium',sans-serif] text-[16px] border-l-2 border-[#82E600] pl-4">
                L'avantage Data Conforme : Sécurisez vos actifs technologiques et faites de la transparence un levier de confiance absolu.
              </p>
            </div>
            {/* Image DROITE */}
            <div className="relative group order-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00A9C1]/20 to-[#82E600]/20 rounded-[32px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img 
                src={applicationIa} 
                alt="Application Gouvernance IA" 
                className="relative w-full h-auto rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10"
              />
            </div>
          </div>
        </div>

        {/* Ambient glows */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#00A9C1] blur-[150px] opacity-10" />
        <div className="absolute bottom-[-50px] left-[-50px] w-[300px] h-[300px] bg-[#82E600] blur-[120px] opacity-10" />
      </div>
    </div>
  );
}
