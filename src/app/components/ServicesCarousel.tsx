import React, { useState, useRef, TouchEvent, useEffect } from 'react';
import { 
  FileCheck, BadgeCheck, MonitorPlay, Bot, Server, Award, ChevronLeft, ChevronRight, Search 
} from 'lucide-react';
import fabrik01Mockup from "../../assets/fabrik01-mockup-v2.png";
import auditRgpdMockup from "../../assets/audit-rgpd-mockup-v4.png";
import dpoMockup from "../../assets/dpo-externalise-mockup-v2.png";
import formationsMockup from "../../assets/formations-mockup.png";
import nis2Logo from "../../assets/nis2-logo.png";
import isoLogo from "../../assets/iso27001-logo.png";
import iaEquipeMockup from "../../assets/ia-equipe-mockup.png";
import vignetteAnalyseSouv from "../../assets/vignette-analyse-souv.jpg";

export interface ServicesCarouselProps {
  onNavigate?: (page: string) => void;
}

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  button: string;
  bg: string;
  iconColor: string;
  icon: React.ElementType;
  image?: string;
  doubleImage?: string;
  coverImage: boolean;
  fitImage?: boolean;
  noShadow?: boolean;
  customScale: number;
  isDark: boolean;
  link?: string;
  isFabrik?: boolean;
}

const CARDS: ServiceCard[] = [
  {
    id: 1,
    title: "Audit & Conformité RGPD",
    description: "Audit de votre SI, registres obligatoires, analyse de vos process et plan d'action priorisé. Pour les TPE, PME et tout type d'organisation.",
    button: "Découvrir l'audit",
    bg: "#DBEAFE",
    iconColor: "#2563EB",
    icon: FileCheck,
    image: auditRgpdMockup,
    coverImage: true,
    customScale: 1.05,
    isDark: false,
    link: "#offres-pricing"
  },
  {
    id: 2,
    title: "DPO Externalisé",
    description: "Data Conforme est nommé DPO auprès de la CNIL. Hotline dédiée, pilotage logiciel, bilans réguliers et gestion complète de votre conformité.",
    button: "Rdv de 30 minutes gratuit",
    bg: "#EDE9FE",
    iconColor: "#7C3AED",
    icon: BadgeCheck,
    image: dpoMockup,
    coverImage: true,
    customScale: 1.01,
    isDark: false,
    link: "https://calendrier.dataconforme.com/jerome.ficat-dataconforme.com/rendez-vous-jerome-ficat?duration=30"
  },
  {
    id: 5,
    title: "Votre IA Conforme & Souveraine",
    description: "Conformité AI Act, audit RGPD de vos outils IA, éthique algorithmique et souveraineté des données. Déployez l'IA en toute confiance.",
    button: "Découvrir",
    bg: "#FAECE7",
    iconColor: "#E06B4D",
    icon: Bot,
    image: iaEquipeMockup,
    coverImage: true,
    customScale: 1.05,
    isDark: false,
    link: "ia-conforme"
  },
  {
    id: 3,
    title: "Formations & Sensibilisation",
    description: "RGPD, AI Act, cybersécurité, IA responsable. Votre formation peut être financée en tout ou partie par votre OPCO. Data conforme est agréée Qualiopi.",
    button: "Voir les formations",
    bg: "#D1FAE5",
    iconColor: "#059669",
    icon: MonitorPlay,
    image: formationsMockup,
    coverImage: true,
    customScale: 1.05,
    isDark: false,
    link: "formation"
  },
  {
    id: 4,
    title: "Développement IA & Automatisation",
    description: "IA locale souveraine, automatisation de workflows, agents conversationnels, analyse prédictive et applications métiers sur mesure. Sans dépendance au cloud américain.",
    button: "Découvrir Fabrik01",
    bg: "#1E3A5F",
    iconColor: "#FFFFFF",
    icon: Server,
    image: fabrik01Mockup,
    coverImage: true,
    customScale: 1.05,
    isDark: true,
    isFabrik: true,
    link: "fabrik01"
  },
  {
    id: 6,
    title: "Analyse de vos sous-traitants",
    description: "Construisez aussi votre indépendance aux logiciels US. Nous analysons pour vous vos dépendances non conformes et non souveraines et vous proposons des alternatives.",
    button: "Discutons-en, Rdv de 30 mn gratuit ici",
    bg: "#FFFFFF",
    iconColor: "#D97706",
    icon: Search,
    image: vignetteAnalyseSouv,
    coverImage: true,
    fitImage: true,
    noShadow: true,
    customScale: 1.0,
    isDark: false,
    link: "https://calendrier.dataconforme.com/jerome.ficat-dataconforme.com/rendez-vous-jerome-ficat?duration=30"
  },
];

export default function ServicesCarousel({ onNavigate }: ServicesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const GAP = 20;

  // Scroll to a given index, centering the card
  const scrollToIndex = (index: number) => {
    if (!containerRef.current || !cardRef.current) return;
    const cardWidth = cardRef.current.offsetWidth;
    const containerWidth = containerRef.current.offsetWidth;
    const targetScroll = index * (cardWidth + GAP) - (containerWidth / 2) + (cardWidth / 2);
    containerRef.current.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' });
  };

  const goTo = (index: number) => {
    const newIndex = (index + CARDS.length) % CARDS.length;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const prev = () => goTo(currentIndex - 1);
  const next = () => goTo(currentIndex + 1);

  // Auto-advance
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => next(), 4000);
    return () => clearInterval(interval);
  }, [isHovered, currentIndex]);

  return (
    <section
      id="services-formations"
      className="w-full bg-[#F8FAFC] pt-12 pb-24 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{`
        .services-scroll::-webkit-scrollbar { display: none; }
        .services-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <div className="max-w-[1400px] mx-auto px-4 md:px-20">
        <h2 className="font-['Manrope:Bold',sans-serif] text-[36px] text-[#0A192F] mb-8 text-center">
          Nos Services &amp; Formations
        </h2>

        {/* Keyword tabs — 2 rows of 3 */}
        <div className="flex flex-col items-center gap-3 mb-12 w-full">
          <div className="flex flex-row flex-wrap justify-center gap-3">
            {CARDS.slice(0, 3).map((card, idx) => (
              <button
                key={`tab-${card.id}`}
                onClick={() => goTo(idx)}
                className={`px-5 py-2.5 rounded-full text-[14px] font-['Inter:Semi_Bold',sans-serif] transition-all duration-300 border ${
                  currentIndex === idx
                    ? 'bg-[#00A9C1] text-white border-[#00A9C1] shadow-[0_4px_12px_rgba(0,169,193,0.3)] scale-105'
                    : 'bg-white text-[#5A6C7D] border-[#E5E9F0] hover:border-[#0047BA] hover:text-[#0047BA]'
                }`}
              >
                {card.title}
              </button>
            ))}
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-3">
            {CARDS.slice(3, 6).map((card, localIdx) => {
              const idx = localIdx + 3;
              return (
                <button
                  key={`tab-${card.id}`}
                  onClick={() => goTo(idx)}
                  className={`px-5 py-2.5 rounded-full text-[14px] font-['Inter:Semi_Bold',sans-serif] transition-all duration-300 border ${
                    currentIndex === idx
                      ? 'bg-[#00A9C1] text-white border-[#00A9C1] shadow-[0_4px_12px_rgba(0,169,193,0.3)] scale-105'
                      : 'bg-white text-[#5A6C7D] border-[#E5E9F0] hover:border-[#0047BA] hover:text-[#0047BA]'
                  }`}
                >
                  {card.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Carousel with side arrows */}
        <div className="relative flex items-center px-0 md:px-14 -mx-4 md:mx-0">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-0 z-10 w-12 h-12 rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.12)] items-center justify-center text-[#1A2340] hover:-translate-y-0.5 hover:text-[#00A9C1] hover:shadow-[0_8px_25px_rgba(0,169,193,0.2)] transition-all duration-300"
            aria-label="Service précédent"
          >
            <ChevronLeft size={26} strokeWidth={2.5} />
          </button>

          {/* Scroll track */}
          <div
            ref={containerRef}
            className="services-scroll flex overflow-x-auto gap-[20px] pb-4 pt-4 w-full px-4 md:px-0 snap-x snap-mandatory"
          >
            {CARDS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  ref={idx === 0 ? cardRef : undefined}
                  className={`flex-shrink-0 snap-center group/card bg-white rounded-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden flex flex-col w-[280px] md:w-[340px] lg:w-[390px] ${idx === 0 ? 'ml-2' : ''} ${idx === CARDS.length - 1 ? 'mr-2' : ''} ${currentIndex === idx ? 'ring-[3px] ring-[#00A9C1] shadow-[0_0_0_6_rgba(0,169,193,0.15)]' : ''}`}
                >
                  {/* Top Image Part */}
                  <div
                    className={`w-full h-[180px] flex items-center justify-center relative overflow-hidden ${card.coverImage ? 'bg-white' : 'p-6'}`}
                    style={{ backgroundColor: card.coverImage ? '#FFFFFF' : card.bg }}
                  >
                    {card.isFabrik && (
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 z-10">
                        <span className="font-['Inter:Semi_Bold',sans-serif] text-[11px] text-white tracking-wide uppercase">Fabrik01</span>
                      </div>
                    )}
                    {card.image ? (
                      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center p-4">
                        {card.doubleImage ? (
                          <div className="flex w-full h-full items-center justify-center gap-4">
                            <img src={card.image} alt={card.title} className="max-w-[45%] max-h-full object-contain group-hover/card:scale-105 transition-transform duration-500 drop-shadow-md rounded-lg" />
                            <img src={card.doubleImage} alt={card.title + " secondary"} className="max-w-[45%] max-h-full object-contain group-hover/card:scale-105 transition-transform duration-500 drop-shadow-md rounded-lg" />
                          </div>
                        ) : (
                          <img
                            src={card.image}
                            alt={card.title}
                            className={`${card.coverImage ? `w-full h-full ${card.fitImage ? 'object-contain' : 'object-cover'} translate-y-[-2px]` : "max-w-full max-h-[140px] w-auto object-contain group-hover/card:scale-105"} transition-transform duration-500 ${card.noShadow ? '' : 'drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]'}`}
                            style={card.coverImage ? { transform: `scale(${card.customScale || 1.05}) translateY(-2px)` } : {}}
                          />
                        )}
                      </div>
                    ) : (
                      <Icon size={72} color={card.iconColor} strokeWidth={1.5} className="group-hover/card:scale-105 transition-transform duration-300 relative z-0" />
                    )}
                  </div>

                  {/* Bottom Text Part */}
                  <div className="p-5 flex flex-col flex-grow bg-white">
                    <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[17px] text-[#1A2340] mb-3 leading-tight">{card.title}</h3>
                    <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#4B5563] leading-[1.65] flex-grow mb-6">{card.description}</p>
                    <a
                      href={card.link?.startsWith('http') || card.link?.startsWith('#') ? card.link : '#'}
                      target={card.link?.startsWith('http') ? "_blank" : "_self"}
                      rel={card.link?.startsWith('http') ? "noopener noreferrer" : ""}
                      onClick={(e) => {
                        if (card.link && !card.link.startsWith('http') && !card.link.startsWith('#')) {
                          e.preventDefault();
                          onNavigate?.(card.link);
                        }
                      }}
                      className="group/link flex items-center gap-1 font-['Inter:Semi_Bold',sans-serif] text-[13px] font-semibold mt-auto no-underline cursor-pointer"
                      style={{ color: card.isDark ? '#0047BA' : card.iconColor }}
                    >
                      {card.button}
                      <span className="transition-transform group-hover/link:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="hidden md:flex absolute right-0 z-10 w-12 h-12 rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.12)] items-center justify-center text-[#1A2340] hover:-translate-y-0.5 hover:text-[#00A9C1] hover:shadow-[0_8px_25px_rgba(0,169,193,0.2)] transition-all duration-300"
            aria-label="Service suivant"
          >
            <ChevronRight size={26} strokeWidth={2.5} />
          </button>
        </div>

        {/* Progress dots - matching testimonials style */}
        <div className="flex justify-center gap-3 mt-12">
          {CARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer 
                ${currentIndex === i ? 'w-8 bg-[#00A9C1]' : 'w-2 bg-[#00A9C1]/20 hover:bg-[#00A9C1]/40'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
