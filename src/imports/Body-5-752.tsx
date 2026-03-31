import svgPaths from "./svg-pyljap6vtq";
import { useState } from "react";
import IAExpertiseCarousel from "../app/components/IAExpertiseCarousel";
import imgImage from "figma:asset/9eb164b83cfe1b0f846b807a601ccd48ec7b5f13.png";
import imgNewIllustration from "figma:asset/d6a914330bc92f16edcd48dd03c3d95a969f7c86.png";
import { ServiceCard } from "./ServiceCard";

function Container() {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none" data-name="Container">
      <div className="absolute bg-size-[512px_512px] bg-top-left h-[791.5px] left-0 top-0 w-full lg:w-[1280px]" data-name="Image" style={{ backgroundImage: `url('${imgImage}')` }} />
    </div>
  );
}

function Heading() {
  return (
    <div className="flex flex-col items-start relative w-full" data-name="Heading 1">
      <h1 className="m-0 font-['Manrope:Extra_Bold',sans-serif] leading-[1.1] text-white tracking-[-1.0px] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] text-left">
        IA Conforme :<br />
        Maîtrisez<br />
        l'Intelligence<br />
        Artificielle
      </h1>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex flex-col items-start w-full relative max-w-[576px]" data-name="Container">
      <p className="m-0 font-['Inter:Regular',sans-serif] font-normal leading-[1.6] text-[#cbe6ff] text-[16px] sm:text-[18px] md:text-[20px] w-full text-left">
        Naviguez sereinement dans l'EU AI Act. Assurez un déploiement sécurisé, éthique et conforme de vos systèmes d'intelligence artificielle.
      </p>
    </div>
  );
}

function Button() {
  return (
    <a 
      href="https://calendrier.dataconforme.com/jerome.ficat-dataconforme.com/30min"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#9eff5c] flex items-center justify-center px-[24px] sm:px-[32px] py-[12px] sm:py-[16px] rounded-xl no-underline hover:opacity-90 transition-opacity cursor-pointer w-full sm:w-auto min-h-[50px] sm:min-h-[60px] shrink-0" 
      data-name="Button"
    >
      <span className="font-['Manrope:Bold',sans-serif] font-bold leading-none text-[#082100] text-[16px] sm:text-[18px] text-center whitespace-nowrap">
        Réserver un Audit IA
      </span>
    </a>
  );
}

function Button1() {
  return (
    <a 
      href={`${import.meta.env.BASE_URL}plan_audit_ia.pdf`}
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-[#305271] backdrop-blur-md border border-[rgba(255,255,255,0.1)] flex items-center justify-center px-[24px] sm:px-[32px] py-[12px] sm:py-[16px] rounded-xl hover:bg-[rgba(255,255,255,0.1)] transition-colors cursor-pointer no-underline w-full sm:w-auto min-h-[50px] sm:min-h-[60px] shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.1)]" 
      data-name="Button"
    >
      <span className="font-['Manrope:Bold',sans-serif] font-bold leading-none text-white text-[16px] sm:text-[18px] text-center whitespace-nowrap">
        L'Audit Fabrik01
      </span>
    </a>
  );
}

function Container4() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2 sm:pt-4 relative w-full max-w-[576px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex flex-col gap-6 sm:gap-[32px] items-start relative w-full z-10" data-name="Container">
      <Heading />
      <Container3 />
      <Container4 />
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="w-full relative flex items-center justify-center lg:justify-end z-10" data-name="Overlay+Border+OverlayBlur">
      <img 
        src={imgNewIllustration} 
        alt="IA Conforme Illustration" 
        className="w-full h-auto max-w-[400px] md:max-w-[500px] lg:max-w-[700px] 2xl:max-w-[850px] object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
      />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 max-w-[1280px] w-full relative z-10" data-name="Container">
      <div className="w-full lg:w-[50%] xl:w-[45%] flex justify-start relative order-2 lg:order-1">
        <Container2 />
      </div>
      <div className="w-full lg:w-[50%] xl:w-[55%] flex justify-center lg:justify-end items-center relative order-1 lg:order-2">
        <OverlayBorderOverlayBlur />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative flex flex-col items-center w-full px-6 md:px-[32px] lg:px-[64px] py-16 md:py-[80px] lg:py-[128px] overflow-hidden" data-name="Hero Section" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 30, 64) 0%, rgb(29, 99, 143) 100%)" }}>
      <Container />
      <Container1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#001e40] text-[36px] text-center tracking-[-0.9px] w-[520.28px]">
        <p className="leading-[40px]">{`Le Cadre de Confiance pour l'IA`}</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[48px] justify-center leading-[24px] not-italic relative shrink-0 text-[#43474f] text-[16px] text-center w-[659.8px]">
        <p className="mb-0">Une approche structurée pour transformer les contraintes réglementaires en avantages</p>
        <p>compétitifs durables.</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[100px] right-[40px] top-[40px] w-[80px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 100">
        <g id="Container">
          <path d={svgPaths.p3ccfba00} fill="var(--fill-0, #003366)" fillOpacity="0.1" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#001e40] text-[30px] w-full">
        <p className="leading-[36px]">Gestion des Risques</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] relative shrink-0 w-[448px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[72px] justify-center leading-[24px] not-italic relative shrink-0 text-[#43474f] text-[16px] w-[445.73px]">
        <p className="mb-0">Identification proactive des vulnérabilités algorithmiques et</p>
        <p className="mb-0">mise en place de barrières de sécurité robustes pour</p>
        <p>protéger votre organisation.</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f0f3ff] col-[1/span_7] justify-self-stretch relative rounded-[32px] row-1 self-stretch shrink-0" data-name="Background">
      <div className="flex flex-col justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-end p-[40px] relative size-full">
          <Container17 />
          <Heading3Margin />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[19px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19">
        <g id="Container">
          <path d={svgPaths.p19ed9400} fill="var(--fill-0, #001E40)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#8dfd52] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[48px]" data-name="Background">
      <Container19 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white w-full">
        <p className="leading-[36px]">Conformité EU AI Act</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[#a7c8ff] text-[16px] w-full">
        <p className="mb-0">Alignement rigoureux avec la nouvelle réglementation</p>
        <p className="mb-0">européenne pour garantir la légalité de vos opérations</p>
        <p>IA.</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container21 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#001e40] col-[8/span_5] justify-self-stretch relative rounded-[32px] row-1 self-stretch shrink-0" data-name="Background">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[40px] relative size-full">
          <Background7 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_500px] h-[500px] relative shrink-0 w-full" data-name="Container">
      <Background5 />
      <Background6 />
    </div>
  );
}

function SectionCoreMessagingAsymmetricBentoGrid() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] items-center left-0 max-w-[1280px] mx-auto px-[32px] py-[96px] right-0 top-[871.5px]" data-name="Section - Core Messaging: Asymmetric Bento Grid">
      <Container14 />
      <Container16 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1d638f] text-[14px] tracking-[2.8px] uppercase w-[136.05px]">
        <p className="leading-[20px]">Nos Services</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#001e40] text-[36px] tracking-[-0.9px] w-[415.05px]">
        <p className="leading-[40px]">Expertise de Pointe en IA</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[415.05px]" data-name="Container">
      <Container25 />
      <Heading4 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[9px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 9">
        <g id="Container">
          <path d={svgPaths.p19756be0} fill="var(--fill-0, #1D638F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[7.99px] items-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#1d638f] text-[16px] text-center w-[162.77px]">
        <p className="leading-[24px]">Voir tous les services</p>
      </div>
      <Container26 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Button2 />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 size-[22.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 22.5">
        <g id="Container">
          <path d={svgPaths.p1f052000} fill="var(--fill-0, #1D638F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background8() {
  return (
    <div className="absolute bg-[#dee8ff] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[56px] top-[32px]" data-name="Background">
      <Container28 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[120px]" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#001e40] text-[20px] w-[223.48px]">
        <p className="leading-[28px]">Audit de Conformité IA</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[164px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[78px] justify-center leading-[26px] not-italic relative shrink-0 text-[#43474f] text-[16px] w-[318.5px]">
        <p className="mb-0">{`Évaluation complète de vos systèmes d'IA`}</p>
        <p className="mb-0">{`selon les critères de l'AI Act et les`}</p>
        <p>standards ISO/IEC 42001.</p>
      </div>
    </div>
  );
}

function Separator() {
  return <div className="absolute border-[rgba(195,198,209,0.2)] border-solid border-t h-px left-[32px] right-[32px] top-[274px]" data-name="Separator" />;
}

function Container30() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p1041200} fill="var(--fill-0, #72DF36)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container30 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#001b3c] text-[14px] w-[169.45px]">
        <p className="leading-[20px]">Classification des risques</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p1041200} fill="var(--fill-0, #72DF36)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container31 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#001b3c] text-[14px] w-[137.75px]">
        <p className="leading-[20px]">Évaluation technique</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[32px] right-[32px] top-[307px]" data-name="List">
      <Item />
      <Item1 />
    </div>
  );
}

// Service 1: Analyse de risques
function Card() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className={`bg-white relative rounded-[24px] shadow-[0px_12px_32px_0px_rgba(0,27,60,0.06)] shrink-0 flex flex-col transition-all duration-300 ${isExpanded ? 'h-[480px]' : 'h-[200px]'}`}>
      <div className="absolute bg-[#dee8ff] flex items-center justify-center left-[32px] rounded-[16px] size-[56px] top-[32px]">
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="#1D638F" />
        </svg>
      </div>
      <div className="absolute left-[32px] right-[80px] top-1/2 -translate-y-1/2">
        <h3 className="font-['Manrope:Extra_Bold',sans-serif] text-[#001e40] text-[20px] leading-[28px]">
          Analyse de risques des systèmes d'IA
        </h3>
      </div>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute right-[32px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-[#f0f3ff] transition-colors cursor-pointer"
        aria-label={isExpanded ? "Réduire" : "Développer"}
      >
        <svg 
          className={`w-[20px] h-[20px] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="#1D638F"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {/* Contenu déroulant */}
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute left-[32px] right-[32px] top-[164px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#43474f] text-[16px] leading-[24px]">
            Identifier, qualifier et réduire les risques liés à chaque cas d'usage IA (données, impact, automatisation, dépendance fournisseurs).
          </p>
        </div>
        <div className="absolute border-[rgba(195,198,209,0.2)] border-solid border-t h-px left-[32px] right-[32px] top-[290px]" />
        <div className="absolute flex flex-col gap-[10px] left-[32px] right-[32px] top-[320px]">
          <div className="flex gap-[12px] items-start">
            <div className="relative shrink-0 size-[15px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <g><path d={svgPaths.p1041200} fill="var(--fill-0, #72DF36)" /></g>
              </svg>
            </div>
            <span className="font-['Inter:Regular',sans-serif] text-[#001b3c] text-[14px] leading-[20px] flex-1">
              Cartographie des usages et données
            </span>
          </div>
          <div className="flex gap-[12px] items-start">
            <div className="relative shrink-0 size-[15px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <g><path d={svgPaths.p1041200} fill="var(--fill-0, #72DF36)" /></g>
              </svg>
            </div>
            <span className="font-['Inter:Regular',sans-serif] text-[#001b3c] text-[14px] leading-[20px] flex-1">
              Qualification des risques juridique, sécurité, éthique
            </span>
          </div>
          <div className="flex gap-[12px] items-start">
            <div className="relative shrink-0 size-[15px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <g><path d={svgPaths.p1041200} fill="var(--fill-0, #72DF36)" /></g>
              </svg>
            </div>
            <span className="font-['Inter:Regular',sans-serif] text-[#001b3c] text-[14px] leading-[20px] flex-1">
              Recommandations & priorisation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 size-[22.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 22.5">
        <g id="Container">
          <path d={svgPaths.pe46afb0} fill="var(--fill-0, #1D638F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background9() {
  return (
    <div className="absolute bg-[#dee8ff] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[56px] top-[32px]" data-name="Background">
      <Container32 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[120px]" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#001e40] text-[20px] w-[262.91px]">
        <p className="leading-[28px]">Gouvernance des Données</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[164px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[78px] justify-center leading-[26px] not-italic relative shrink-0 text-[#43474f] text-[16px] w-[289.22px]">
        <p className="mb-0">Gestion de la qualité, du biais et de</p>
        <p className="mb-0">{`l'intégrité des jeux de données utilisés`}</p>
        <p>{`pour l'entraînement.`}</p>
      </div>
    </div>
  );
}

function Separator1() {
  return <div className="absolute border-[rgba(195,198,209,0.2)] border-solid border-t h-px left-[32px] right-[32px] top-[274px]" data-name="Separator" />;
}

function Container34() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p1041200} fill="var(--fill-0, #72DF36)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container34 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#001b3c] text-[14px] w-[126.11px]">
        <p className="leading-[20px]">Détection des biais</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p1041200} fill="var(--fill-0, #72DF36)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container35 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#001b3c] text-[14px] w-[153.88px]">
        <p className="leading-[20px]">Pipeline de qualité data</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[32px] right-[32px] top-[307px]" data-name="List">
      <Item2 />
      <Item3 />
    </div>
  );
}

// Service 2: Gouvernance IA
function Card1() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className={`bg-white relative rounded-[24px] shadow-[0px_12px_32px_0px_rgba(0,27,60,0.06)] shrink-0 flex flex-col transition-all duration-300 ${isExpanded ? 'h-[480px]' : 'h-[200px]'}`}>
      <div className="absolute bg-[#dee8ff] flex items-center justify-center left-[32px] rounded-[16px] size-[56px] top-[32px]">
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z" fill="#1D638F" />
        </svg>
      </div>
      <div className="absolute left-[32px] right-[80px] top-1/2 -translate-y-1/2">
        <h3 className="font-['Manrope:Extra_Bold',sans-serif] text-[#001e40] text-[20px] leading-[28px]">
          Gouvernance IA & préparation IA Act
        </h3>
      </div>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute right-[32px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-[#f0f3ff] transition-colors cursor-pointer"
        aria-label={isExpanded ? "Réduire" : "Développer"}
      >
        <svg 
          className={`w-[20px] h-[20px] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="#1D638F"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute left-[32px] right-[32px] top-[164px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#43474f] text-[16px] leading-[24px]">
            Mettre en place une gouvernance claire, traçable et alignée avec vos exigences RGPD et vos futures obligations IA Act.
          </p>
        </div>
        <div className="absolute border-[rgba(195,198,209,0.2)] border-solid border-t h-px left-[32px] right-[32px] top-[290px]" />
        <div className="absolute flex flex-col gap-[10px] left-[32px] right-[32px] top-[320px]">
          <div className="flex gap-[12px] items-start">
            <div className="relative shrink-0 size-[15px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <g><path d={svgPaths.p1041200} fill="var(--fill-0, #72DF36)" /></g>
              </svg>
            </div>
            <span className="font-['Inter:Regular',sans-serif] text-[#001b3c] text-[14px] leading-[20px] flex-1">
              Rôles & responsabilités, circuit de validation
            </span>
          </div>
          <div className="flex gap-[12px] items-start">
            <div className="relative shrink-0 size-[15px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <g><path d={svgPaths.p1041200} fill="var(--fill-0, #72DF36)" /></g>
              </svg>
            </div>
            <span className="font-['Inter:Regular',sans-serif] text-[#001b3c] text-[14px] leading-[20px] flex-1">
              Politiques d'usage & supervision humaine
            </span>
          </div>
          <div className="flex gap-[12px] items-start">
            <div className="relative shrink-0 size-[15px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <g><path d={svgPaths.p1041200} fill="var(--fill-0, #72DF36)" /></g>
              </svg>
            </div>
            <span className="font-['Inter:Regular',sans-serif] text-[#001b3c] text-[14px] leading-[20px] flex-1">
              Documentation & traçabilité complète
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Container">
          <path d={svgPaths.p1b7bc280} fill="var(--fill-0, #1D638F)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background10() {
  return (
    <div className="absolute bg-[#dee8ff] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[56px] top-[32px]" data-name="Background">
      <Container36 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[120px]" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#001e40] text-[20px] w-[302.64px]">
        <p className="leading-[28px]">Accompagnement Stratégique</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[164px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[78px] justify-center leading-[26px] not-italic relative shrink-0 text-[#43474f] text-[16px] w-[317.63px]">
        <p className="mb-0">{`Mise en œuvre d'une culture "Privacy-by-`}</p>
        <p className="mb-0">{`Design" et intégration de l'IA dans votre`}</p>
        <p>vision métier.</p>
      </div>
    </div>
  );
}

function Separator2() {
  return <div className="absolute border-[rgba(195,198,209,0.2)] border-solid border-t h-px left-[32px] right-[32px] top-[274px]" data-name="Separator" />;
}

function Container38() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p1041200} fill="var(--fill-0, #72DF36)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container38 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#001b3c] text-[14px] w-[122.84px]">
        <p className="leading-[20px]">Privacy-by-Design</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p1041200} fill="var(--fill-0, #72DF36)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container39 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#001b3c] text-[14px] w-[151.86px]">
        <p className="leading-[20px]">Formations sur mesure</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[32px] right-[32px] top-[307px]" data-name="List">
      <Item4 />
      <Item5 />
    </div>
  );
}

// Service 3: Formations
function Card2() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className={`bg-white relative rounded-[24px] shadow-[0px_12px_32px_0px_rgba(0,27,60,0.06)] shrink-0 flex flex-col transition-all duration-300 ${isExpanded ? 'h-[480px]' : 'h-[200px]'}`}>
      <div className="absolute bg-[#dee8ff] flex items-center justify-center left-[32px] rounded-[16px] size-[56px] top-[32px]">
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" fill="#1D638F" />
        </svg>
      </div>
      <div className="absolute left-[32px] right-[80px] top-1/2 -translate-y-1/2">
        <h3 className="font-['Manrope:Extra_Bold',sans-serif] text-[#001e40] text-[20px] leading-[28px]">
          Formations : usage sécurisé & responsable des IA
        </h3>
      </div>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute right-[32px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-[#f0f3ff] transition-colors cursor-pointer"
        aria-label={isExpanded ? "Réduire" : "Développer"}
      >
        <svg 
          className={`w-[20px] h-[20px] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="#1D638F"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute left-[32px] right-[32px] top-[164px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#43474f] text-[16px] leading-[24px]">
            Former pour gagner en efficacité, sans compromettre vos données, votre conformité ou vos secrets d'affaires.
          </p>
        </div>
        <div className="absolute border-[rgba(195,198,209,0.2)] border-solid border-t h-px left-[32px] right-[32px] top-[290px]" />
        <div className="absolute flex flex-col gap-[10px] left-[32px] right-[32px] top-[320px]">
          <div className="flex gap-[12px] items-start">
            <div className="relative shrink-0 size-[15px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <g><path d={svgPaths.p1041200} fill="var(--fill-0, #72DF36)" /></g>
              </svg>
            </div>
            <span className="font-['Inter:Regular',sans-serif] text-[#001b3c] text-[14px] leading-[20px] flex-1">
              Hygiène IA : prompts & confidentialité
            </span>
          </div>
          <div className="flex gap-[12px] items-start">
            <div className="relative shrink-0 size-[15px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <g><path d={svgPaths.p1041200} fill="var(--fill-0, #72DF36)" /></g>
              </svg>
            </div>
            <span className="font-['Inter:Regular',sans-serif] text-[#001b3c] text-[14px] leading-[20px] flex-1">
              Sécurité : prévention des fuites
            </span>
          </div>
          <div className="flex gap-[12px] items-start">
            <div className="relative shrink-0 size-[15px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <g><path d={svgPaths.p1041200} fill="var(--fill-0, #72DF36)" /></g>
              </svg>
            </div>
            <span className="font-['Inter:Regular',sans-serif] text-[#001b3c] text-[14px] leading-[20px] flex-1">
              RGPD & charte d'usage opérationnelle
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Nouvelle Section: Services réels - Les 6 services à remplacer les 3 existants

// Icône Check pour toutes les listes
function ServiceCheckIcon() {
  return (
    <div className="relative shrink-0 size-[15px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g>
          <path d={svgPaths.p1041200} fill="var(--fill-0, #72DF36)" />
        </g>
      </svg>
    </div>
  );
}

// Card3: Livrables & preuves
function Card3() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className={`bg-white relative rounded-[24px] shadow-[0px_12px_32px_0px_rgba(0,27,60,0.06)] shrink-0 flex flex-col transition-all duration-300 ${isExpanded ? 'h-[480px]' : 'h-[200px]'}`}>
      <div className="absolute bg-[#dee8ff] flex items-center justify-center left-[32px] rounded-[16px] size-[56px] top-[32px]">
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#1D638F" />
        </svg>
      </div>
      <div className="absolute left-[32px] right-[80px] top-1/2 -translate-y-1/2">
        <h3 className="font-['Manrope:Extra_Bold',sans-serif] text-[#001e40] text-[20px] leading-[28px]">
          Livrables & preuves (audit-ready)
        </h3>
      </div>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute right-[32px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-[#f0f3ff] transition-colors cursor-pointer"
        aria-label={isExpanded ? "Réduire" : "Développer"}
      >
        <svg 
          className={`w-[20px] h-[20px] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="#1D638F"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute left-[32px] right-[32px] top-[164px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#43474f] text-[16px] leading-[24px]">
            Une démarche utile si elle est prouvable. Nous produisons des livrables exploitables en interne et présentables en audit.
          </p>
        </div>
        <div className="absolute border-[rgba(195,198,209,0.2)] border-solid border-t h-px left-[32px] right-[32px] top-[290px]" />
        <div className="absolute flex flex-col gap-[10px] left-[32px] right-[32px] top-[320px]">
          <div className="flex gap-[12px] items-start">
            <ServiceCheckIcon />
            <span className="font-['Inter:Regular',sans-serif] text-[#001b3c] text-[14px] leading-[20px] flex-1">
              Cartographie IA + registres associés
            </span>
          </div>
          <div className="flex gap-[12px] items-start">
            <ServiceCheckIcon />
            <span className="font-['Inter:Regular',sans-serif] text-[#001b3c] text-[14px] leading-[20px] flex-1">
              Rapport d'analyse de risques + plan d'actions
            </span>
          </div>
          <div className="flex gap-[12px] items-start">
            <ServiceCheckIcon />
            <span className="font-['Inter:Regular',sans-serif] text-[#001b3c] text-[14px] leading-[20px] flex-1">
              Politiques & procédures opérationnelles
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Card4: Analyse sous-traitants
function Card4() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className={`bg-white relative rounded-[24px] shadow-[0px_12px_32px_0px_rgba(0,27,60,0.06)] shrink-0 flex flex-col transition-all duration-300 ${isExpanded ? 'h-[480px]' : 'h-[200px]'}`}>
      <div className="absolute bg-[#dee8ff] flex items-center justify-center left-[32px] rounded-[16px] size-[56px] top-[32px]">
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="#1D638F" />
        </svg>
      </div>
      <div className="absolute left-[32px] right-[80px] top-1/2 -translate-y-1/2">
        <h3 className="font-['Manrope:Extra_Bold',sans-serif] text-[#001e40] text-[20px] leading-[28px]">
          Analyse des IA comme sous-traitants (approche DPO)
        </h3>
      </div>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute right-[32px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-[#f0f3ff] transition-colors cursor-pointer"
        aria-label={isExpanded ? "Réduire" : "Développer"}
      >
        <svg 
          className={`w-[20px] h-[20px] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="#1D638F"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute left-[32px] right-[32px] top-[164px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#43474f] text-[16px] leading-[24px]">
            Les outils d'IA agissent souvent comme sous-traitants : contrats, flux, localisation, transferts et responsabilités doivent être maîtrisés.
          </p>
        </div>
        <div className="absolute border-[rgba(195,198,209,0.2)] border-solid border-t h-px left-[32px] right-[32px] top-[290px]" />
        <div className="absolute flex flex-col gap-[10px] left-[32px] right-[32px] top-[320px]">
          <div className="flex gap-[12px] items-start">
            <ServiceCheckIcon />
            <span className="font-['Inter:Regular',sans-serif] text-[#001b3c] text-[14px] leading-[20px] flex-1">
              Analyse contractuelle fournisseurs
            </span>
          </div>
          <div className="flex gap-[12px] items-start">
            <ServiceCheckIcon />
            <span className="font-['Inter:Regular',sans-serif] text-[#001b3c] text-[14px] leading-[20px] flex-1">
              Évaluation des flux & localisation
            </span>
          </div>
          <div className="flex gap-[12px] items-start">
            <ServiceCheckIcon />
            <span className="font-['Inter:Regular',sans-serif] text-[#001b3c] text-[14px] leading-[20px] flex-1">
              Recommandations d'encadrement
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Card5: Sensibilisation
function Card5() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className={`bg-white relative rounded-[24px] shadow-[0px_12px_32px_0px_rgba(0,27,60,0.06)] shrink-0 flex flex-col transition-all duration-300 ${isExpanded ? 'h-[480px]' : 'h-[200px]'}`}>
      <div className="absolute bg-[#dee8ff] flex items-center justify-center left-[32px] rounded-[16px] size-[56px] top-[32px]">
        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="#1D638F" />
        </svg>
      </div>
      <div className="absolute left-[32px] right-[80px] top-1/2 -translate-y-1/2">
        <h3 className="font-['Manrope:Extra_Bold',sans-serif] text-[#001e40] text-[20px] leading-[28px]">
          Sensibilisation des équipes
        </h3>
      </div>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute right-[32px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-[#f0f3ff] transition-colors cursor-pointer"
        aria-label={isExpanded ? "Réduire" : "Développer"}
      >
        <svg 
          className={`w-[20px] h-[20px] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="#1D638F"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute left-[32px] right-[32px] top-[164px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#43474f] text-[16px] leading-[24px]">
            La conformité IA repose sur les usages humains. Acculturer les équipes permet d'éviter les dérives sans freiner l'innovation.
          </p>
        </div>
        <div className="absolute border-[rgba(195,198,209,0.2)] border-solid border-t h-px left-[32px] right-[32px] top-[290px]" />
        <div className="absolute flex flex-col gap-[10px] left-[32px] right-[32px] top-[320px]">
          <div className="flex gap-[12px] items-start">
            <ServiceCheckIcon />
            <span className="font-['Inter:Regular',sans-serif] text-[#001b3c] text-[14px] leading-[20px] flex-1">
              Ateliers adaptés aux profils
            </span>
          </div>
          <div className="flex gap-[12px] items-start">
            <ServiceCheckIcon />
            <span className="font-['Inter:Regular',sans-serif] text-[#001b3c] text-[14px] leading-[20px] flex-1">
              Comprendre les risques IA
            </span>
          </div>
          <div className="flex gap-[12px] items-start">
            <ServiceCheckIcon />
            <span className="font-['Inter:Regular',sans-serif] text-[#001b3c] text-[14px] leading-[20px] flex-1">
              Cas concrets & règles prêtes à déployer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[repeat(2,auto)] relative shrink-0 w-full" data-name="Container">
      <ServiceCard
        icon={
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="#1D638F" />
          </svg>
        }
        title="Analyse de risques des systèmes d'IA"
        description="Identifier, qualifier et réduire les risques liés à chaque cas d'usage IA (données, impact, automatisation, dépendance fournisseurs)."
        features={[
          "Cartographie des usages et données",
          "Qualification des risques juridique, sécurité, éthique",
          "Recommandations & priorisation"
        ]}
      />
      <ServiceCard
        icon={
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z" fill="#1D638F" />
          </svg>
        }
        title="Gouvernance IA & préparation IA Act"
        description="Mettre en place une gouvernance claire, traçable et alignée avec vos exigences RGPD et vos futures obligations IA Act."
        features={[
          "Rôles & responsabilités, circuit de validation",
          "Politiques d'usage & supervision humaine",
          "Documentation & traçabilité complète"
        ]}
      />
      <ServiceCard
        icon={
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" fill="#1D638F" />
          </svg>
        }
        title="Formations : usage sécurisé & responsable des IA"
        description="Former pour gagner en efficacité, sans compromettre vos données, votre conformité ou vos secrets d'affaires."
        features={[
          "Hygiène IA : prompts & confidentialité",
          "Sécurité : prévention des fuites",
          "RGPD & charte d'usage opérationnelle"
        ]}
      />
      <ServiceCard
        icon={
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#1D638F" />
          </svg>
        }
        title="Livrables & preuves (audit-ready)"
        description="Une démarche utile si elle est prouvable. Nous produisons des livrables exploitables en interne et présentables en audit."
        features={[
          "Cartographie IA + registres associés",
          "Rapport d'analyse de risques + plan d'actions",
          "Politiques & procédures opérationnelles"
        ]}
      />
      <ServiceCard
        icon={
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="#1D638F" />
          </svg>
        }
        title="Analyse des IA comme sous-traitants (approche DPO)"
        description="Les outils d'IA agissent souvent comme sous-traitants : contrats, flux, localisation, transferts et responsabilités doivent être maîtrisés."
        features={[
          "Analyse contractuelle fournisseurs",
          "Évaluation des flux & localisation",
          "Recommandations d'encadrement"
        ]}
      />
      <ServiceCard
        icon={
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="#1D638F" />
          </svg>
        }
        title="Sensibilisation des équipes"
        description="La conformité IA repose sur les usages humains. Acculturer les équipes permet d'éviter les dérives sans freiner l'innovation."
        features={[
          "Ateliers adaptés aux profils",
          "Comprendre les risques IA",
          "Cas concrets & règles prêtes à déployer"
        ]}
      />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container27 />
    </div>
  );
}

function SectionServicesGrid({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="relative flex flex-col items-center w-full" data-name="Section - Services Grid">
      <IAExpertiseCarousel onNavigate={onNavigate} />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] justify-center leading-[45px] not-italic relative shrink-0 text-[36px] text-white w-full">
        <p className="mb-0">Souveraineté des Données</p>
        <p>{`& Éthique de l'IA`}</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[29.25px] not-italic relative shrink-0 text-[#a7c8ff] text-[18px] w-full">
        <p className="mb-0">{`Nous croyons que l'innovation ne doit jamais se faire au`}</p>
        <p className="mb-0">{`détriment de l'éthique. Notre méthodologie place la`}</p>
        <p className="mb-0">protection des droits fondamentaux au cœur de chaque</p>
        <p>algorithme.</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p15aec574} fill="var(--fill-0, #8DFD52)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Overlay">
      <Container45 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[241.42px]">
        <p className="leading-[28px]">Confiance Algorithmique</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[40px] justify-center leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(167,200,255,0.8)] w-[385.69px]">
        <p className="mb-0">Garantir des résultats explicables et transparents pour vos</p>
        <p>utilisateurs finaux.</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative self-stretch shrink-0 w-[385.69px]" data-name="Container">
      <Heading9 />
      <Container47 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Overlay />
      <Container46 />
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.pf778600} fill="var(--fill-0, #8DFD52)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Overlay">
      <Container49 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[254px]">
        <p className="leading-[28px]">Souveraineté & Éthique</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[40px] justify-center leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(167,200,255,0.8)] w-[420.14px]">
        <p className="mb-0">{`Garantir le contrôle de vos données et l'intégrité`}</p>
        <p>éthique de vos systèmes IA.</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative self-stretch shrink-0 w-[420.14px]" data-name="Container">
      <Heading10 />
      <Container51 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Overlay1 />
      <Container50 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Container48 />
    </div>
  );
}

function Container41() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[32px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Heading8 />
      <Container42 />
      <Container43 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
          <p className="leading-[32px]">Prêt à sécuriser votre IA ?</p>
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[24px] not-italic relative shrink-0 text-[#a7c8ff] text-[16px] w-full">
          <p className="mb-0">Discutez avec nos experts des défis spécifiques à</p>
          <p>{`votre secteur d'activité.`}</p>
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a7c8ff] text-[16px] w-full">
          <p className="leading-[normal]">Email professionnel</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#036] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[25px] py-[19px] relative w-full">
          <Container54 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(195,198,209,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#1d638f] content-stretch flex items-center justify-center py-[16px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[157.02px]">
        <p className="leading-[24px]">Contacter un Expert</p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pt-[8px] relative w-full">
        <Input />
        <Button3 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.05)] relative rounded-[24px] shrink-0 w-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[57px] pt-[41px] px-[41px] relative w-full">
        <Heading11 />
        <Container53 />
        <Form />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-center justify-self-stretch py-[41.5px] relative row-1 self-start shrink-0" data-name="Container">
      <OverlayBorderOverlayBlur1 />
    </div>
  );
}

function Container40() {
  return (
    <div className="gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_447px] relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container52 />
    </div>
  );
}

function SovereigntySection() {
  return (
    <div className="relative bg-[#001e40] flex flex-col items-center w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] mx-auto overflow-clip px-6 md:px-[80px] py-16 md:py-[100px] rounded-[24px] md:rounded-[40px] shadow-xl" data-name="Sovereignty & Ethics Section">
      <div className="absolute bg-[rgba(29,99,143,0.2)] blur-[50px] right-[-80px] rounded-[12px] size-[320px] top-[-80px]" data-name="Overlay+Blur" />
      <div className="absolute bg-[rgba(141,253,82,0.1)] blur-[50px] bottom-[-80px] left-[-80px] rounded-[12px] size-[320px]" data-name="Overlay+Blur" />
      <div className="max-w-[1000px] w-full relative z-10">
        <Container41 />
      </div>
    </div>
  );
}

function CtaSection({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="relative bg-[#f9f9ff] flex flex-col gap-8 items-center w-full px-6 md:px-[32px] py-16 md:py-[96px]" data-name="CTA Section">
      <div className="flex flex-col items-center w-full max-w-[920px]">
        <h2 className="m-0 font-['Manrope:Extra_Bold',sans-serif] text-[#001e40] text-[28px] md:text-[36px] text-center leading-[1.2] text-balance mb-4">
          Prenez une longueur d'avance sur la réglementation
        </h2>
        <p className="m-0 font-['Inter:Regular',sans-serif] text-[#43474f] text-[16px] md:text-[18px] text-center leading-[1.5] text-balance max-w-[670px]">
          Ne laissez pas la conformité freiner votre innovation. Nos experts vous accompagnent de l'audit à l'exploitation.
        </p>
      </div>
      
      <div className="flex justify-center w-full">
        <button 
          onClick={() => onNavigate && onNavigate('contact')}
          className="bg-[#001e40] flex items-center justify-center px-[48px] py-[20px] rounded-[12px] no-underline hover:opacity-90 transition-opacity cursor-pointer border-none shadow-xl" 
        >
          <span className="font-['Manrope:Extra_Bold',sans-serif] text-[18px] md:text-[20px] text-center text-white">
            Contacter un Expert
          </span>
        </button>
      </div>
    </div>
  );
}

function Main({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="flex flex-col gap-12 md:gap-24 relative w-full overflow-hidden pb-20" data-name="Main">
      <HeroSection />
      <SectionServicesGrid onNavigate={onNavigate} />
      <SovereigntySection />
      <CtaSection onNavigate={onNavigate} />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0" data-name="Paragraph">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center relative shrink-0 text-[20px] text-white w-[146.72px]">
        <p className="leading-[28px]">Data Conforme</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center not-italic relative shrink-0 text-[#94a3b8] text-[14px] tracking-[0.35px] w-[477.05px]">
        <p className="leading-[20px]">© 2024 Data Conforme. Fabrik01 est une marque de Data Conforme.</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] tracking-[0.35px] w-[122.13px]">
        <p className="leading-[20px]">Mentions Légales</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] tracking-[0.35px] w-[187.13px]">
        <p className="leading-[20px]">Politique de Confidentialité</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] tracking-[0.35px] w-[54.44px]">
        <p className="leading-[20px]">Contact</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[32px] h-[20px] items-start relative shrink-0" data-name="Nav">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 16.6667">
        <g id="Container">
          <path d={svgPaths.p1e78c320} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Link">
      <Container59 />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[8.333px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 8.33333">
        <g id="Container">
          <path d={svgPaths.p3a06da80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="Link">
      <Container60 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Container">
      <Link3 />
      <Link4 />
    </div>
  );
}

function Container57() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] pr-[0.02px] relative w-full">
          <Paragraph />
          <Nav />
          <Container58 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#001e40] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[48px] pt-[49px] px-[32px] relative w-full">
        <Container57 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#001e40] text-[24px] tracking-[-1.2px] w-[133.38px]">
        <p className="leading-[32px]">IA Conforme</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#001e40] text-[16px] tracking-[-0.4px] w-[71.28px]">
        <p className="leading-[24px]">Solutions</p>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0" data-name="Link:margin">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#001e40] text-[16px] tracking-[-0.4px] w-[75.73px]">
        <p className="leading-[24px]">Formation</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#1d638f] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#1d638f] text-[16px] tracking-[-0.4px] w-[85.16px]">
        <p className="leading-[24px]">Conformité</p>
      </div>
    </div>
  );
}

function LinkMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0" data-name="Link:margin">
      <Link6 />
    </div>
  );
}

function LinkMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0" data-name="Link:margin">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#001e40] text-[16px] tracking-[-0.4px] w-[86.91px]">
        <p className="leading-[24px]">Ressources</p>
      </div>
    </div>
  );
}

function Nav1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Nav">
      <Link5 />
      <LinkMargin />
      <LinkMargin1 />
      <LinkMargin2 />
    </div>
  );
}

function Button6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Button">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Button">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #001E40)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[12px]" data-name="Button" style={{ backgroundImage: "linear-gradient(160.907deg, rgb(0, 30, 64) 0%, rgb(29, 99, 143) 100%)" }}>
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white w-[56px]">
        <p className="leading-[20px]">Contact</p>
      </div>
    </div>
  );
}

function ButtonCssTransform() {
  return (
    <div className="content-stretch flex flex-col h-[36px] items-start justify-center py-[0.9px] relative shrink-0" data-name="Button:css-transform">
      <div className="flex h-[34.2px] items-center justify-center relative shrink-0 w-[98.8px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none scale-x-95 scale-y-95">
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex gap-[26.6px] items-center pr-[2.6px] relative shrink-0" data-name="Container">
      <Button6 />
      <ButtonCssTransform />
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[32px] py-[16px] relative w-full">
          <Container62 />
          <Nav1 />
          <Container63 />
        </div>
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[#f9f9ff] content-stretch flex flex-col items-start left-0 shadow-[0px_12px_32px_0px_rgba(0,27,60,0.06)] top-0 w-[1280px]" data-name="Header - TopAppBar">
      <Container61 />
    </div>
  );
}

export default function Body({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="bg-[#f9f9ff] content-stretch flex flex-col items-start pb-[2.5px] relative size-full" data-name="Body">
      <Main onNavigate={onNavigate} />
      <HeaderTopAppBar />
    </div>
  );
}