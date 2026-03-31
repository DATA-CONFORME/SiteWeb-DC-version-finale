import teamImage from "figma:asset/f4ce6425b714fa3a43b2bdce4c81882315e6fe05.png";
import { SectionRGPD, SectionSecteurs, SectionOffres, SectionEcosystem } from "../app/components/OldSiteSections";
import { Footer } from "../app/App";
import ServicesCarousel from "../app/components/ServicesCarousel";
import heroIllustration from "figma:asset/53e0a23a3adb6c4bc33708448daf06ff9a49f921.png";
import svgPaths from "./svg-2sqwfkv5kr";
import imgCybersecurityInterface from "figma:asset/15bdec7e0b0fb784d49f88bf54bf7523e1051e4f.png";
import imgServerInfrastructure from "figma:asset/ee3de47921ca488ba9f51b39e9b32147fee48add.png";
import { ChevronRight } from "lucide-react";
import logoFabrik01 from "../assets/logo-fabrik01-blanc.png";
import TestimonialsSection from "../app/components/TestimonialsSection";
import { LogoBand } from "../app/components/LogoBand";

/* ─── Design Tokens (palette Data Conforme) ──────────────────────────────
   Primary   : #00A9C1  (teal / cyan)
   Secondary : #82E600  (lime green)
   Tertiary  : #0047BA  (blue)
   Neutral   : #0A192F  (dark navy)
──────────────────────────────────────────────────────────────────────── */

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] justify-center not-italic relative shrink-0 text-[#0A192F] text-[48px] text-center w-full max-w-[720px] mx-auto">
        <p className="leading-[48px] text-center w-full">Expertise Multidimensionnelle</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[28px] not-italic relative shrink-0 text-[#3d494c] text-[18px] text-center w-full max-w-[718px] mx-auto">
        <p className="mb-0 w-full text-center text-balance">Nos pôles d'excellence répondent aux exigences les plus strictes de la gouvernance moderne des données.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[768px] relative shrink-0 w-full mx-auto" data-name="Container">
      <Heading1 />
      <Container2 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] right-0 top-[68px]" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[32px] relative shrink-0 text-[#0A192F] text-[24px]">
        <p>Cyber-Résilience</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] right-[8px] top-[116px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-start leading-[26px] not-italic relative shrink-0 text-[#3d494c] text-[16px]">
        <p className="m-0">Infrastructure robuste conçue par Fabrik01 pour résister aux menaces les plus sophistiquées. Protection proactive et détection en temps réel.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[224px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute h-[40px] left-[8px] top-[4px] w-[32px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 40">
            {/* Primary teal icon */}
            <path d={svgPaths.p3c781640} fill="var(--fill-0, #00A9C1)" id="Icon" />
          </svg>
        </div>
        <Heading2 />
        <Container5 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          {/* Secondary dark checkmark */}
          <path d={svgPaths.p6e98980} fill="var(--fill-0, #3D7000)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container6 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0A192F] text-[14px] w-[143.75px]">
        <p className="leading-[20px]">Audit de vulnérabilité</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          <path d={svgPaths.p6e98980} fill="var(--fill-0, #3D7000)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <Container7 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0A192F] text-[14px] w-[152.81px]">
        <p className="leading-[20px]">Réponse aux incidents</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative w-full">
        <Item />
        <Item1 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[33px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(0,71,186,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <List />
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative w-full">
        <HorizontalBorder />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-1 lg:grid-cols-[repeat(3,minmax(0,1fr))] lg:grid-rows-[__299.75px_194px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-white lg:col-span-1 justify-self-stretch relative lg:row-[1/span_2] self-start shrink-0 rounded-2xl overflow-hidden shadow-sm" data-name="High Card">
        <div className="content-stretch flex flex-col items-start justify-between p-[32px] relative w-full h-full">
          <Container4 />
          <Margin />
        </div>
      </div>
      <div
        className="lg:col-[2/span_2] justify-self-stretch relative lg:row-start-1 self-start shrink-0 rounded-2xl overflow-hidden shadow-sm"
        data-name="Wide Card"
        style={{ backgroundImage: "linear-gradient(159.692deg, #0047BA 0%, #00A9C1 100%)" }}
      >
        <div className="content-stretch flex flex-col items-start p-[32px] sm:p-[40px] relative w-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start w-full max-w-[448px] relative shrink-0" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
              <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] md:text-[30px] text-white w-full">
                <p className="leading-[36px]">Gouvernance IA & RGPD</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start lg:pb-[16px] relative shrink-0 w-full" data-name="Container">
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[29.25px] not-italic relative shrink-0 text-[16px] md:text-[18px] text-[rgba(200,230,255,0.92)] w-full">
                <p className="mb-0">Naviguez dans la complexité de l'AI Act avec une</p>
                <p className="mb-0">sérénité totale. Nous transformons les contraintes</p>
                <p>réglementaires en avantages compétitifs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#D4E3FF] lg:col-[2/span_2] h-auto lg:h-[194px] justify-self-stretch relative lg:row-start-2 shrink-0 rounded-2xl p-[32px]" data-name="Small Card 1">
        <div className="relative lg:absolute lg:left-[35.5px] size-[25px] lg:top-[37.25px] mb-4 lg:mb-0" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
            <path d={svgPaths.p34a70300} fill="var(--fill-0, #0047BA)" id="Icon" />
          </svg>
        </div>
        <div className="relative lg:absolute content-stretch flex flex-col items-start lg:left-[35.5px] lg:right-[35.5px] lg:top-[82px] mb-2 lg:mb-0" data-name="Heading 4">
          <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[28px] relative shrink-0 text-[#0A192F] text-[20px]">
            <p>Audit de Conformité</p>
          </div>
        </div>
        <div className="relative lg:absolute content-stretch flex flex-col items-start lg:left-[35.5px] lg:right-[35.5px] lg:top-[130px]" data-name="Container">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-start leading-[20px] not-italic relative shrink-0 text-[#3d494c] text-[14px]">
            <p className="m-0">Analyse exhaustive de votre écosystème digital.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[inherit] px-[24px] relative w-full">
          <Container1 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function SectionBentoGridServices() {
  return (
    /* Light accent background (#ECF0FF) instead of old #f0f3ff */
    <div className="relative bg-[#ECF0FF] content-stretch flex flex-col items-center w-full py-[48px] px-6 md:px-0" data-name="Section - Bento Grid Services">
      <Container />
    </div>
  );
}

/* Figma-to-code nested containers removed for cleaner layout */

function Button1() {
  return (
    /* Tertiary blue CTA button */
    <a 
      href="https://calendrier.dataconforme.com/jerome.ficat-dataconforme.com/rendez-vous-jerome-ficat?duration=30" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-[#0047BA] flex items-center justify-center px-[40px] py-[16px] rounded-[8px] no-underline hover:opacity-90 transition-opacity w-full md:w-auto" 
      data-name="Button"
    >
      <span className="font-['Manrope:Bold',sans-serif] font-bold text-[18px] text-white">Discutons-en</span>
    </a>
  );
}

/* Figma-to-code Container15 removed */

function SectionCtAsSocialProof() {
  return (
    <div className="relative w-full overflow-hidden bg-white" data-name="Section - CTAs / Social Proof">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full max-w-[1280px] mx-auto px-6 py-12 md:py-16 gap-8 md:gap-0">
        <div className="flex flex-col gap-4 w-full md:max-w-[450px]">
          <h2 className="m-0 font-['Manrope:Bold',sans-serif] font-bold leading-[1.2] text-[#0A192F] text-[28px] md:text-[32px] w-full break-words">
            Prêt pour que votre organisation renforce ses actifs ?
          </h2>
          <p className="m-0 font-['Inter:Regular',sans-serif] font-normal leading-[1.5] text-[#3d494c] text-[16px] w-full break-words">
            Rejoignez les organisations qui se protègent et en font un atout concurrentiel
          </p>
        </div>
        <div className="w-full md:w-auto flex shrink-0 mt-4 md:mt-0">
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute inset-0 opacity-5" data-name="Container">
      {/* Primary teal blur */}
      <div className="absolute bg-[#00A9C1] blur-[60px] right-0 rounded-[12px] size-[800px] top-0" data-name="Background+Blur" />
      {/* Secondary dark green blur */}
      <div className="absolute bg-[#3D7000] blur-[50px] bottom-0 left-0 rounded-[12px] size-[600px]" data-name="Background+Blur" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[960px] justify-center leading-[0] left-[173.13px] not-italic opacity-[0.03] text-white text-[640px] top-[346px] w-[933.75px]">
        <p className="leading-[960px]">DC</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#0A192F] text-[16px] tracking-[1.6px] uppercase w-[309.41px]">
          <p className="leading-[24px]">Sécurité de Données Premium</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    /* Accent light (#D4E3FF = Tertiary tint) badge */
    <div className="bg-[#D4E3FF] content-stretch flex gap-[8px] items-center px-[13px] py-[5px] relative rounded-[12px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(0,71,186,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      {/* Secondary dark dot */}
      <div className="bg-[#3D7000] rounded-[12px] shrink-0 size-[8px]" data-name="Background" />
      <Container19 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] justify-center leading-[42px] md:leading-[72px] not-italic relative shrink-0 text-white text-[42px] md:text-[72px] tracking-[-1.8px] w-full">
        <p>Protégez vos données et valeurs</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start w-full max-w-[576px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[32.5px] not-italic relative shrink-0 text-white/90 text-[18px] md:text-[20px] w-full mt-4 md:mt-0">
        <p className="mb-0">Data conforme sécurise vos actifs numériques et aide votre</p>
        <p className="mb-0">organisation à progresser en maturité cyber.</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <a
      href="#offres-pricing"
      className="bg-[#82E600] content-stretch flex flex-col items-center justify-center px-[32px] py-[18px] relative rounded-[8px] shrink-0 hover:opacity-90 transition-opacity cursor-pointer no-underline w-full sm:w-auto"
      data-name="Button"
    >
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#082100] text-[18px] text-center w-full">
        <p className="leading-[28px] whitespace-nowrap">Notre accompagnement</p>
      </div>
    </a>
  );
}

function Button3() {
  return (
    <a 
      href="https://calendrier.dataconforme.com/jerome.ficat-dataconforme.com/rendez-vous-jerome-ficat?duration=30"
      target="_blank"
      rel="noopener noreferrer"
      className="content-stretch flex flex-col items-center justify-center px-[34px] py-[18px] relative rounded-[8px] shrink-0 hover:bg-white/10 transition-colors cursor-pointer no-underline w-full sm:w-auto mt-4 sm:mt-0" 
      data-name="Button"
    >
      <div aria-hidden="true" className="absolute border-2 border-white/30 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-white text-[18px] text-center w-full">
        <p className="leading-[28px] whitespace-nowrap">Prendre un RDV</p>
      </div>
    </a>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-0 sm:gap-[16px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container18() {
  return (
    <div className="lg:col-start-1 content-stretch flex flex-col gap-[32px] items-start justify-self-stretch relative lg:row-start-1 self-center shrink-0 w-full" data-name="Container">
      <Heading />
      <Container20 />
      <Container21 />
    </div>
  );
}

function CybersecurityInterface() {
  return (
    <div className="h-[400px] pointer-events-none relative rounded-[4px] shrink-0 w-full" data-name="Cybersecurity Interface">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden rounded-[4px]">
        <img alt="" className="absolute h-[129.5%] left-0 max-w-none top-[-14.75%] w-full" src={imgCybersecurityInterface} />
      </div>
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[30px] relative shrink-0 w-[24px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 30">
        <g id="Container">
          {/* Secondary lime icon on dark card */}
          <path d={svgPaths.p3d5d680} fill="var(--fill-0, #82E600)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[140.03px]">
        <p className="leading-[24px]">100% Compliance</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(236,240,255,0.7)] w-[116.47px]">
        <p className="leading-[20px]">Fabrik01 Certified</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140.03px]" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Background() {
  return (
    /* Neutral dark card badge */
    <div className="absolute bg-[#0A192F] bottom-[-23px] left-[-23px] rounded-[8px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
        <Container22 />
      </div>
    </div>
  );
}

function BackgroundBorder1WithTeam() {
  return (
    <div className="hidden lg:block lg:col-start-2 justify-self-stretch relative lg:row-start-1 self-center shrink-0 overflow-visible" data-name="Hero Illustration">
      <img
        alt="Équipe Data Conforme - conformité et sécurité des données"
        src={heroIllustration}
        className="absolute w-[115%] max-w-none h-auto object-contain"
        style={{ top: "50%", left: "-8%", transform: "translateY(-50%)" }}
      />
    </div>
  );
}

function Container17() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="gap-x-[64px] gap-y-[32px] lg:gap-y-[64px] grid grid-cols-1 lg:grid-cols-[repeat(2,minmax(0,1fr))] lg:grid-rows-[_484px] max-w-[inherit] px-[24px] relative w-full">
        <Container18 />
        <BackgroundBorder1WithTeam />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div 
      className="relative content-stretch flex flex-col items-center w-full overflow-clip pb-[48px] pt-[140px]" 
      data-name="Hero Section"
      style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 30, 64) 0%, rgb(29, 99, 143) 100%)" }}
    >
      <Container16 />
      <Container17 />
    </div>
  );
}

function StatCard({ percentage, description }: { percentage: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-[48px] bg-white rounded-[16px] border border-[rgba(0,71,186,0.1)] shadow-sm">
      <div className="flex flex-col items-center gap-[16px]">
        <div className="font-['Manrope:Extra_Bold',sans-serif] text-[64px] leading-[72px] bg-clip-text bg-gradient-to-r from-[#0047BA] to-[#00A9C1] text-transparent">
          {percentage}
        </div>
        <div className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-[#3d494c] text-center max-w-[320px]">
          {description}
        </div>
      </div>
    </div>
  );
}

function PillarCard({ emoji, label }: { emoji: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-[12px] p-[32px] bg-white rounded-[12px] border border-[rgba(0,71,186,0.08)]">
      <div className="text-[48px] leading-[48px]">{emoji}</div>
      <div className="font-['Manrope:Bold',sans-serif] text-[16px] leading-[24px] text-[#0A192F] text-center">
        {label}
      </div>
    </div>
  );
}


function SectionStats() {
  return (
    <div className="relative bg-[#f8fafc] w-full py-[48px]" data-name="Section - Stats">
      <div className="max-w-[1200px] mx-auto px-[24px]">
        
        {/* Main Stats Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] items-center mb-[48px]">
          {/* Left: Intro Text */}
          <div className="lg:col-span-12 mb-12 flex flex-col items-center text-center">
            <h3 className="font-['Manrope:Bold',sans-serif] text-[36px] text-[#0A192F] mb-8">
              De l'obligation légale à l'opportunité
            </h3>
            <p className="font-['Inter:Regular',sans-serif] text-[18px] leading-[30px] text-[#5A6A7A] max-w-3xl mx-auto">
              La conformité n'est plus une simple contrainte administrative. C'est devenu l'exigence n°1 de vos clients et partenaires. L'IA Act et le RGPD imposent des standards de confiance qui redéfinissent la valeur de votre organisation sur le marché.
            </p>
          </div>

          {/* Stats Grid - 4 items */}
          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[32px]">
            <div className="flex flex-col gap-[12px] bg-white p-6 rounded-xl border border-[rgba(0,71,186,0.05)] shadow-sm">
              <span className="font-['Manrope:Extra_Bold',sans-serif] text-[42px] text-[#0047BA] leading-none">76%</span>
              <p className="text-[14px] leading-[20px] text-[#5A6A7A]">Des consommateurs n'achètent pas si la confiance data est absente.</p>
            </div>
            <div className="flex flex-col gap-[12px] bg-white p-6 rounded-xl border border-[rgba(0,71,186,0.05)] shadow-sm">
              <span className="font-['Manrope:Extra_Bold',sans-serif] text-[42px] text-[#00A9C1] leading-none">72%</span>
              <p className="text-[14px] leading-[20px] text-[#5A6A7A]">Des PME européennes cherchent une meilleure souveraineté numérique.</p>
            </div>
            <div className="flex flex-col gap-[12px] bg-white p-6 rounded-xl border border-[rgba(0,71,186,0.05)] shadow-sm">
              <span className="font-['Manrope:Extra_Bold',sans-serif] text-[42px] text-[#82E600] leading-none">75%</span>
              <p className="text-[14px] leading-[20px] text-[#5A6A7A]">Des candidats privilégient les entreprises à impact social et éthique.</p>
            </div>
            <div className="flex flex-col gap-[12px] bg-white p-6 rounded-xl border border-[rgba(0,71,186,0.05)] shadow-sm">
              <span className="font-['Manrope:Extra_Bold',sans-serif] text-[42px] text-[#0A192F] leading-none">94%</span>
              <p className="text-[14px] leading-[20px] text-[#5A6A7A]">Des entreprises voient leurs ventes bloquées sans garanties privacy.</p>
            </div>
          </div>
        </div>

        {/* Pillars & Conclusion Row */}
        <div className="bg-white rounded-[24px] p-[40px] border border-[rgba(0,71,186,0.1)] shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-center">
            {/* Left: Pillars grid */}
            <div className="grid grid-cols-2 gap-[16px]">
              <div className="flex items-center gap-[12px] p-[20px] bg-[#f8fafc] rounded-[16px] border border-[rgba(0,71,186,0.05)]">
                <span className="text-[28px]">🛡️</span>
                <span className="font-['Inter:Semi_Bold',sans-serif] text-[15px] text-[#0A192F]">Conformité</span>
              </div>
              <div className="flex items-center gap-[12px] p-[20px] bg-[#f8fafc] rounded-[16px] border border-[rgba(0,71,186,0.05)]">
                <span className="text-[28px]">🇫🇷</span>
                <span className="font-['Inter:Semi_Bold',sans-serif] text-[15px] text-[#0A192F]">Souveraineté</span>
              </div>
              <div className="flex items-center gap-[12px] p-[20px] bg-[#f8fafc] rounded-[16px] border border-[rgba(0,71,186,0.05)]">
                <span className="text-[28px]">💎</span>
                <span className="font-['Inter:Semi_Bold',sans-serif] text-[15px] text-[#0A192F]">Éthique</span>
              </div>
              <div className="flex items-center gap-[12px] p-[20px] bg-[#f8fafc] rounded-[16px] border border-[rgba(0,71,186,0.05)]">
                <span className="text-[28px]">🤖</span>
                <span className="font-['Inter:Semi_Bold',sans-serif] text-[15px] text-[#0A192F]">IA Responsable</span>
              </div>
            </div>

            {/* Right: Conclusion */}
            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-[#00A9C1] rounded-full hidden lg:block"></div>
              <p className="font-['Inter:Regular',sans-serif] text-[18px] leading-[30px] text-[#344155]">
                Transformer votre conformité en un <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#0047BA]">différenciateur stratégique</span> est le meilleur moyen de fidéliser vos partenaires et de rassurer vos investisseurs dans un environnement saturé par l'IA technologique.
              </p>
            </div>
          </div>
        </div>

        {/* Sources block */}
        <div className="mt-8 pt-8 border-t border-[rgba(0,71,186,0.1)]">
          <h4 className="font-['Manrope:Bold',sans-serif] text-[14px] uppercase tracking-wider text-[#0A192F] mb-6 flex items-center gap-2">
            <span className="w-6 h-[1px] bg-[#00A9C1]"></span>
            Sources (≥ 2020)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <div className="flex items-start gap-3">
              <span className="text-[#00A9C1] font-bold text-[13px] mt-0.5">01</span>
              <p className="text-[13px] text-[#5A6A7A] leading-relaxed">
                <span className="font-semibold text-[#0A192F]">Cisco — Consumer Privacy Survey 2022 (PDF)</span><br/>
                Étude sur la perception de la vie privée par les consommateurs. 
                <a href="https://www.cisco.com/c/dam/en_us/about/doing_business/trust-center/docs/cisco-consumer-privacy-survey-2022.pdf" target="_blank" rel="noopener noreferrer" className="ml-2 text-[#0047BA] hover:underline font-medium italic">Consulter</a>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#00A9C1] font-bold text-[13px] mt-0.5">02</span>
              <p className="text-[13px] text-[#5A6A7A] leading-relaxed">
                <span className="font-semibold text-[#0A192F]">team.blue — European SMEs seek greater Data Sovereignty… (2025)</span><br/>
                Rapport sur la souveraineté des données pour les PME européennes.
                <a href="https://press.team.blue/252488-european-smes-seek-greater-data-sovereignty-amid-rising-trust-concerns-reveals-team-blue-report/" target="_blank" rel="noopener noreferrer" className="ml-2 text-[#0047BA] hover:underline font-medium italic">Consulter</a>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#00A9C1] font-bold text-[13px] mt-0.5">03</span>
              <p className="text-[13px] text-[#5A6A7A] leading-relaxed">
                <span className="font-semibold text-[#0A192F]">PwC — Global Workforce Hopes & Fears Survey 2022</span><br/>
                Enquête sur les attentes des employés envers leurs employeurs.
                <a href="https://www.pwc.com/gx/en/issues/workforce/hopes-and-fears-2022.html" target="_blank" rel="noopener noreferrer" className="ml-2 text-[#0047BA] hover:underline font-medium italic">Consulter</a>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#00A9C1] font-bold text-[13px] mt-0.5">04</span>
              <p className="text-[13px] text-[#5A6A7A] leading-relaxed">
                <span className="font-semibold text-[#0A192F]">Cisco — Data Privacy Benchmark Study 2024 (PDF)</span><br/>
                Étude sur l'impact business de la protection des données.
                <a href="https://www.cisco.com/c/dam/en_us/about/doing_business/trust-center/docs/cisco-privacy-benchmark-study-2024.pdf" target="_blank" rel="noopener noreferrer" className="ml-2 text-[#0047BA] hover:underline font-medium italic">Consulter</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServerInfrastructure() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Server Infrastructure">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[119.44%] left-0 max-w-none top-[-9.72%] w-full" src={imgServerInfrastructure} />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bottom-[0.25px] content-stretch flex flex-col items-start justify-center left-1/2 opacity-10 right-0 top-0" data-name="Container">
      <ServerInfrastructure />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      {/* Secondary lime accent label */}
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#82E600] text-[14px] tracking-[2.8px] uppercase w-full">
        <p className="leading-[20px]">Synergie Technologique</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] font-bold justify-center leading-[48px] relative shrink-0 text-[48px] text-white w-full">
        <p className="mb-0">Fabrik01 : Le Cœur de notre</p>
        <p>Excellence Technique.</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[29.25px] not-italic relative shrink-0 text-[18px] text-[rgba(236,240,255,0.8)] w-full">
        <p className="mb-0">{`Chaque solution Data Conforme est propulsée par l'ingénierie de pointe de`}</p>
        <p className="mb-0">Fabrik01. Ce partenariat garantit une intégration parfaite entre conseil</p>
        <p>stratégique et exécution technologique de haute précision.</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-center text-white w-[92.59px]">
        <p className="leading-[36px]">99.9%</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(236,240,255,0.6)] text-center tracking-[1.2px] uppercase w-[101.33px]">
        <p className="leading-[16px]">Disponibilité</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[101.33px]" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Extra_Bold',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-center text-white w-[51.77px]">
        <p className="leading-[36px]">ISO</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(236,240,255,0.6)] text-center tracking-[1.2px] uppercase w-[107.77px]">
        <p className="leading-[16px]">Certifié 27001</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[107.77px]" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[32px] items-center pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <div className="bg-[rgba(255,255,255,0.1)] h-[48px] shrink-0 w-px" data-name="Vertical Divider" />
      <Container35 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <Container29 />
      <Heading7 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Fabrik01BrandingSection({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="relative content-stretch flex flex-col items-center w-full overflow-clip px-[24px] py-[48px] md:py-[80px]" data-name="Fabrik01 Branding Section">
      <div className="bg-[#0A192F] relative rounded-[32px] shrink-0 w-full max-w-[1200px] overflow-hidden flex flex-col items-center justify-center p-[40px] md:p-[80px] group border border-[#1A293F] text-center shadow-2xl">
      
        <div className="flex flex-col items-center max-w-[800px] relative z-10">
          <img src={logoFabrik01} alt="Fabrik01" className="h-[64px] w-auto mb-8" />
          <h2 className="font-['Manrope:Bold',sans-serif] text-[36px] md:text-[48px] text-white leading-tight mb-10">
            Le Cœur de notre Excellence Technique.
          </h2>
          <button 
            onClick={() => onNavigate && onNavigate('fabrik01')}
            className="px-10 py-5 rounded-[12px] cursor-pointer shadow-[0_8px_30px_rgba(130,230,0,0.2)] hover:shadow-[0_8px_30px_rgba(130,230,0,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
            style={{ backgroundColor: "#82E600" }}
          >
            <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[18px]">
              En savoir plus
            </span>
            <ChevronRight className="w-6 h-6 text-[#0A192F]" />
          </button>
        </div>
        
        {/* Subtle decorative background elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(0,169,193,0.1)_0%,transparent_70%)] pointer-events-none mix-blend-screen" />
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(130,230,0,0.05)_0%,transparent_70%)] pointer-events-none mix-blend-screen" />
      </div>
    </div>
  );
}

export default function Main({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="relative w-full flex flex-col" data-name="Main">
      <HeroSection />
      
      {/* Logos clients */}
      <LogoBand />
      <SectionStats />

      {/* Services Carousel */}
      <ServicesCarousel onNavigate={onNavigate} />
      
      
      {/* Old Site Injected Sections */}
      <SectionOffres />
      <SectionSecteurs />
      <SectionRGPD />
      <SectionEcosystem />

      <TestimonialsSection />
      <SectionCtAsSocialProof />
      <Footer onNavigate={onNavigate} />
    </div>
  );
}