import React, { useState, useRef, useEffect } from 'react';
import { 
  ShieldCheck, Shield, GraduationCap, FileCheck, Search, Users, ChevronLeft, ChevronRight 
} from 'lucide-react';

import iconRisques from "../../assets/_analyserisques-IA.jpg";
import iconGouvernance from "../../assets/_gouvernance-IA.jpg";
import iconSousTraitance from "../../assets/_analyse-IA-ST.jpg";
import iconFormations from "../../assets/formations-mockup.png";
import iconLivrables from "../../assets/audit-rgpd-mockup.png";
import iconSensibilisation from "../../assets/ia-equipe-mockup.png";

export interface IAExpertiseCarouselProps {
  onNavigate?: (page: string) => void;
}

interface IAExpertiseCard {
  id: number;
  title: string;
  description: string;
  button: string;
  bg: string;
  iconColor: string;
  icon: React.ElementType;
  image?: string;
  isDark: boolean;
  link?: string;
}

const CARDS: IAExpertiseCard[] = [
  {
    id: 1,
    title: "Analyse de risques des systèmes d'IA",
    description: "Identifier, qualifier et réduire les risques liés à chaque cas d'usage IA (données, impact, automatisation, dépendance fournisseurs).",
    button: "En savoir plus",
    bg: "#DBEAFE",
    iconColor: "#2563EB",
    icon: ShieldCheck,
    image: iconRisques,
    isDark: false,
    link: "contact"
  },
  {
    id: 2,
    title: "Gouvernance IA & préparation IA Act",
    description: "Mettre en place une gouvernance claire, traçable et alignée avec vos exigences RGPD et vos futures obligations IA Act.",
    button: "En savoir plus",
    bg: "#EDE9FE",
    iconColor: "#7C3AED",
    icon: Shield,
    image: iconGouvernance,
    isDark: false,
    link: "contact"
  },
  {
    id: 3,
    title: "Formations : usage sécurisé & responsable des IA",
    description: "Former pour gagner en efficacité, sans compromettre vos données, votre conformité ou vos secrets d'affaires.",
    button: "Voir les formations",
    bg: "#D1FAE5",
    iconColor: "#059669",
    icon: GraduationCap,
    image: iconFormations,
    isDark: false,
    link: "formation"
  },
  {
    id: 5,
    title: "Analyse des IA comme sous-traitants (approche DPO)",
    description: "Les outils d'IA agissent souvent comme sous-traitants : contrats, flux, localisation, transferts et responsabilités doivent être maîtrisés.",
    button: "En savoir plus",
    bg: "#1E3A5F",
    iconColor: "#FFFFFF",
    icon: Search,
    image: iconSousTraitance,
    isDark: true,
    link: "contact"
  },
  {
    id: 6,
    title: "Sensibilisation des équipes",
    description: "La conformité IA repose sur les usages humains. Acculturer les équipes permet d'éviter les dérives sans freiner l'innovation.",
    button: "En savoir plus",
    bg: "#F0FDF4",
    iconColor: "#15803D",
    icon: Users,
    image: iconSensibilisation,
    isDark: false,
    link: "contact"
  },
];

export default function IAExpertiseCarousel({ onNavigate }: IAExpertiseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const GAP = 20;

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

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => next(), 4000);
    return () => clearInterval(interval);
  }, [isHovered, currentIndex]);

  return (
    <section
      className="w-full bg-[#f8fafc] pt-12 pb-24 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{`
        .services-scroll::-webkit-scrollbar { display: none; }
        .services-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <div className="max-w-[1400px] mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center mb-12">
           <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1d638f] text-[14px] tracking-[2.8px] uppercase mb-4">
            <p className="leading-[20px]">Nos Services</p>
          </div>
          <h2 className="font-['Manrope:Bold',sans-serif] text-[36px] text-[#0A192F] text-center">
            Expertise de Pointe en IA
          </h2>
        </div>

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
            {CARDS.slice(3).map((card, localIdx) => {
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

        <div className="relative flex items-center px-10 md:px-14">
          <button
            onClick={prev}
            className="absolute left-0 z-10 w-12 h-12 rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.12)] flex items-center justify-center text-[#1A2340] hover:-translate-y-0.5 hover:text-[#00A9C1] hover:shadow-[0_8px_25px_rgba(0,169,193,0.2)] transition-all duration-300"
          >
            <ChevronLeft size={26} strokeWidth={2.5} />
          </button>

          <div
            ref={containerRef}
            className="services-scroll flex overflow-x-auto gap-[20px] pb-4 pt-4 w-full"
          >
            {CARDS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  ref={idx === 0 ? cardRef : undefined}
                  className={`flex-shrink-0 group/card bg-white rounded-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden flex flex-col w-[280px] md:w-[340px] lg:w-[390px] ${idx === 0 ? 'ml-2' : ''} ${idx === CARDS.length - 1 ? 'mr-2' : ''} ${currentIndex === idx ? 'ring-[3px] ring-[#00A9C1] shadow-[0_0_0_6_rgba(0,169,193,0.15)]' : ''}`}
                >
                  <div
                    className="w-full h-[180px] flex items-center justify-center relative overflow-hidden"
                    style={{ backgroundColor: card.bg }}
                  >
                    {card.image ? (
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" 
                      />
                    ) : (
                      <Icon size={72} color={card.iconColor} strokeWidth={1.5} className="group-hover/card:scale-105 transition-transform duration-300 relative z-0" />
                    )}
                  </div>

                  <div className="p-5 flex flex-col flex-grow bg-white">
                    <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[17px] text-[#1A2340] mb-3 leading-tight">{card.title}</h3>
                    <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#4B5563] leading-[1.65] flex-grow mb-6">{card.description}</p>
                    <button
                      onClick={() => onNavigate?.(card.link || 'contact')}
                      className="group/link flex items-center gap-1 font-['Inter:Semi_Bold',sans-serif] text-[13px] font-semibold mt-auto no-underline cursor-pointer border-none bg-transparent"
                      style={{ color: card.isDark ? '#0047BA' : card.iconColor }}
                    >
                      {card.button}
                      <span className="transition-transform group-hover/link:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={next}
            className="absolute right-0 z-10 w-12 h-12 rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.12)] flex items-center justify-center text-[#1A2340] hover:-translate-y-0.5 hover:text-[#00A9C1] hover:shadow-[0_8px_25px_rgba(0,169,193,0.2)] transition-all duration-300"
          >
            <ChevronRight size={26} strokeWidth={2.5} />
          </button>
        </div>

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
