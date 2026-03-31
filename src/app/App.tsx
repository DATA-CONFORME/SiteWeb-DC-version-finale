import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation, Link } from "react-router";
import logoDataConforme from "../assets/logo.png";
import logoDcDegrade from "../assets/logo-dc-degrade.png";
import jeromeFicatImage from "figma:asset/e4d81823abce74b8f71e2af748f5902b137d5ec7.png";
import brainImage from "figma:asset/32941527829b6439a6a0192b836d7968d7d083e6.png";
import formationHeroImage from "figma:asset/b0ce91a4ba3d2da757a976c89d84d80c675c3772.png";
import Main from "../imports/Main";
import Body from "../imports/Body";
import IAConformePage from "./components/IAConformePage";
import ContactPage from "./components/ContactPage";
import TarifsPage from "./components/TarifsPage";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import Fabrik01Page from "./pages/Fabrik01Page";
import FormationPage from "./pages/FormationPage";
import AboutPage from "./pages/AboutPage";
import LegalNoticePage from "./pages/LegalNoticePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TrustCenterPage from "./pages/TrustCenterPage";
import { BookOpen, Clock, Award, Users, FileCheck, Shield, Download, ChevronRight, Building2, HardDrive, CheckCircle2, GraduationCap, ShieldCheck, ScrollText, Lock, Scale, Menu, X } from "lucide-react";
import isoLogo from '../assets/iso27001-logo.png';
import nis2Logo from '../assets/nis2-logo.png';
import qualiopiLogo from '../assets/qualiopi-logo.png';

// Team Images
import teamJerome from '../assets/team-jerome.png';
import teamMatthias from '../assets/team-matthias.png';
import teamNosima from '../assets/team-nosima.png';
import teamMelvin from '../assets/team-melvin.png';
import teamRaphael from '../assets/team-raphael.png';

function Navbar({ currentPage, onNavigate }: { currentPage?: string; onNavigate?: (page: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  // Closes mobile menu if clicked outside or navigated
  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-8 bg-white/95 backdrop-blur-sm shadow-sm"
      style={{ height: "96px" }}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center cursor-pointer relative z-50">
        <img
          src={logoDataConforme}
          alt="Data Conforme"
          className="h-[60px] lg:h-[80px] w-auto object-contain"
        />
      </Link>

      {/* Desktop Navigation links */}
      <div className="hidden lg:flex items-center gap-10 xl:gap-12">
        <div className="relative group">
          <Link
            to="/"
            className={`font-['Inter:Regular',sans-serif] font-normal text-[15px] xl:text-[16px] transition-colors duration-200 whitespace-nowrap cursor-pointer ${path === "/" ? "text-[#00A9C1]" : "text-[#0A192F] hover:text-[#00A9C1]"
              }`}
          >
            Conformité et Opportunités
          </Link>
          {/* Dropdown submenu */}
          <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <div className="bg-white rounded-lg shadow-lg border border-[rgba(0,71,186,0.1)] py-2 min-w-[320px]">
              <Link
                to="/#services-formations"
                className="block w-full text-left px-6 py-3 font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px] hover:bg-[#ECF0FF] hover:text-[#00A9C1] transition-colors duration-200 cursor-pointer"
              >
                Nos Services & Formations
              </Link>
              <Link
                to="/#offres-pricing"
                className="block w-full text-left px-6 py-3 font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px] hover:bg-[#ECF0FF] hover:text-[#00A9C1] transition-colors duration-200 cursor-pointer"
              >
                Budget compliance adapté
              </Link>
              <Link
                to="/#rgpd-cybersec"
                className="block w-full text-left px-6 py-3 font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px] hover:bg-[#ECF0FF] hover:text-[#00A9C1] transition-colors duration-200 cursor-pointer"
              >
                Le RGPD et les normes de Cybersécurités
              </Link>
              <Link
                to="/#pilotage-conformite"
                className="block w-full text-left px-6 py-3 font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px] hover:bg-[#ECF0FF] hover:text-[#00A9C1] transition-colors duration-200 cursor-pointer"
              >
                Pilotage de la conformité
              </Link>
            </div>
          </div>
        </div>
        <div className="relative group">
          <Link
            to="/ia-conforme"
            className={`font-['Inter:Regular',sans-serif] font-normal text-[15px] xl:text-[16px] transition-colors duration-200 whitespace-nowrap cursor-pointer ${path === "/ia-conforme" || path === "/fabrik01" ? "text-[#00A9C1]" : "text-[#0A192F] hover:text-[#00A9C1]"
              }`}
          >
            Intelligence artificielle
          </Link>
          {/* Dropdown submenu */}
          <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <div className="bg-white rounded-lg shadow-lg border border-[rgba(0,71,186,0.1)] py-2 min-w-[200px]">
              <Link
                to="/ia-conforme#ia-services"
                className="block w-full text-left px-6 py-3 font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px] hover:bg-[#ECF0FF] hover:text-[#00A9C1] transition-colors duration-200 cursor-pointer"
              >
                Conformité des IA
              </Link>
              <Link
                to="/fabrik01"
                className="block w-full text-left px-6 py-3 font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[15px] hover:bg-[#ECF0FF] hover:text-[#00A9C1] transition-colors duration-200 cursor-pointer"
              >
                Fabrik01
              </Link>
            </div>
          </div>
        </div>
        <Link
          to="/formation"
          className={`font-['Inter:Regular',sans-serif] font-normal text-[15px] xl:text-[16px] transition-colors duration-200 cursor-pointer ${path === "/formation" ? "text-[#00A9C1]" : "text-[#0A192F] hover:text-[#00A9C1]"
            }`}
        >
          Formation
        </Link>
        <Link
          to="/news"
          className={`font-['Inter:Regular',sans-serif] font-normal text-[15px] xl:text-[16px] transition-colors duration-200 cursor-pointer ${path === "/news" ? "text-[#00A9C1]" : "text-[#0A192F] hover:text-[#00A9C1]"
            }`}
        >
          News
        </Link>
        <Link
          to="/about"
          className={`font-['Inter:Regular',sans-serif] font-normal text-[15px] xl:text-[16px] transition-colors duration-200 cursor-pointer ${path === "/about" ? "text-[#00A9C1]" : "text-[#0A192F] hover:text-[#00A9C1]"
            }`}
        >
          À propos
        </Link>
        <Link
          to="/contact"
          className={`font-['Inter:Regular',sans-serif] font-normal text-[15px] xl:text-[16px] transition-colors duration-200 cursor-pointer ${path === "/contact" ? "text-[#00A9C1]" : "text-[#0A192F] hover:text-[#00A9C1]"
            }`}
        >
          Contact
        </Link>
      </div>

      {/* Desktop CTA Button */}
      <div className="hidden lg:flex items-center">
        <a
          href="https://calendrier.dataconforme.com/jerome.ficat-dataconforme.com/rendez-vous-jerome-ficat?duration=30"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-[10px] rounded-[8px] cursor-pointer shadow-md hover:opacity-90 transition-opacity duration-200 no-underline flex items-center justify-center whitespace-nowrap"
          style={{ backgroundImage: "linear-gradient(135deg, #0047BA 0%, #00A9C1 100%)" }}
        >
          <span className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[15px] xl:text-[16px]">
            RDV gratuit
          </span>
        </a>
      </div>

      {/* Mobile Burger Toggle */}
      <button 
        className="lg:hidden relative z-50 p-2 text-[#0A192F] hover:text-[#00A9C1] transition-colors cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 min-h-screen bg-white z-40 lg:hidden overflow-y-auto transition-transform duration-300 ease-in-out pt-28 px-6 pb-12 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`font-['Inter:Semi_Bold',sans-serif] text-[20px] pb-4 border-b border-gray-100 ${path === "/" ? "text-[#00A9C1]" : "text-[#0A192F]"}`}
          >
            Conformité et Opportunités
          </Link>
          <div className="pl-4 flex flex-col gap-4 border-l-2 border-[#00A9C1]/20 pb-4">
             <Link to="/#services-formations" onClick={() => setIsOpen(false)} className="text-[16px] text-[#5A6C7D]">Nos Services & Formations</Link>
             <Link to="/#offres-pricing" onClick={() => setIsOpen(false)} className="text-[16px] text-[#5A6C7D]">Budget compliance adapté</Link>
             <Link to="/#rgpd-cybersec" onClick={() => setIsOpen(false)} className="text-[16px] text-[#5A6C7D]">Le RGPD et normes</Link>
             <Link to="/#pilotage-conformite" onClick={() => setIsOpen(false)} className="text-[16px] text-[#5A6C7D]">Pilotage automatisé</Link>
          </div>

          <Link
            to="/ia-conforme"
            onClick={() => setIsOpen(false)}
            className={`font-['Inter:Semi_Bold',sans-serif] text-[20px] pb-4 border-b border-gray-100 ${path === "/ia-conforme" || path === "/fabrik01" ? "text-[#00A9C1]" : "text-[#0A192F]"}`}
          >
            Intelligence artificielle
          </Link>
          <div className="pl-4 flex flex-col gap-4 border-l-2 border-[#00A9C1]/20 pb-4">
             <Link to="/ia-conforme#ia-services" onClick={() => setIsOpen(false)} className="text-[16px] text-[#5A6C7D]">Conformité des IA</Link>
             <Link to="/fabrik01" onClick={() => setIsOpen(false)} className="text-[16px] text-[#5A6C7D]">Fabrik01</Link>
          </div>

          <Link
            to="/formation"
            onClick={() => setIsOpen(false)}
            className={`font-['Inter:Semi_Bold',sans-serif] text-[20px] pb-4 border-b border-gray-100 ${path === "/formation" ? "text-[#00A9C1]" : "text-[#0A192F]"}`}
          >
            Formation
          </Link>

          <Link
            to="/news"
            onClick={() => setIsOpen(false)}
            className={`font-['Inter:Semi_Bold',sans-serif] text-[20px] pb-4 border-b border-gray-100 ${path === "/news" ? "text-[#00A9C1]" : "text-[#0A192F]"}`}
          >
            News
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`font-['Inter:Semi_Bold',sans-serif] text-[20px] pb-4 border-b border-gray-100 ${path === "/about" ? "text-[#00A9C1]" : "text-[#0A192F]"}`}
          >
            À propos
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`font-['Inter:Semi_Bold',sans-serif] text-[20px] pb-6 ${path === "/contact" ? "text-[#00A9C1]" : "text-[#0A192F]"}`}
          >
            Contact
          </Link>

          <a
            href="https://calendrier.dataconforme.com/jerome.ficat-dataconforme.com/rendez-vous-jerome-ficat?duration=30"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full py-4 rounded-xl text-center shadow-lg font-['Manrope:Bold',sans-serif] text-[18px] text-white"
            style={{ backgroundImage: "linear-gradient(135deg, #0047BA 0%, #00A9C1 100%)" }}
          >
            RDV gratuit en visio (30mn)
          </a>
        </div>
      </div>
    </nav>
  );
}


export { Navbar };

function Footer({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const handleNavigation = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="w-full bg-[#0A192F] py-16 px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 w-full">
          {/* Column 1 - Data Conforme */}
          <div className="flex flex-col items-center text-center">
            <img src={logoDcDegrade} alt="Data Conforme" className="h-[90px] w-auto object-contain mb-6" />
            <p className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] leading-relaxed">
              Protection de vos données et valeurs
            </p>
          </div>

          {/* Column 2 - Services */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[18px] mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('home')}
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200 cursor-pointer"
                >
                  Conformité RGPD
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('ia-conforme')}
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200 cursor-pointer"
                >
                  IA Responsable
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('formation')}
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200 cursor-pointer"
                >
                  Formation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate && onNavigate('fabrik01')}
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200 cursor-pointer"
                >
                  Fabrik01
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Confiance & Légal */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[18px] mb-6">
              Confiance & Légal
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  onClick={(e) => handleNavigation(e, "legal")}
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ScrollText className="w-3 h-3" /> Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleNavigation(e, "privacy")}
                  className="font-['Inter:Regular',sans-serif] font-normal text-white/80 text-[14px] hover:text-[#00A9C1] transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Lock className="w-3 h-3" /> Politique de confidentialité
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => handleNavigation(e, "trust-center")}
                  className="font-['Inter:Regular',sans-serif] font-normal text-[#82E600] text-[14px] hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-3 h-3" /> Centre de Confiance
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Certifications */}
          <div className="flex flex-col items-center text-center gap-6">
            <div className="bg-white rounded-lg p-4 inline-flex shadow-sm">
              <img src={qualiopiLogo} alt="Certifié Qualiopi" className="h-[100px] w-auto object-contain" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[rgba(236,240,255,0.1)] flex flex-col items-center gap-6 w-full">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-white/60 text-[14px] text-center">
              © 2026. Tous droits réservés. Reproduction interdite. Fabrik01 est une marque déposée de Data Conforme
            </p>
          </div>
          <div className="flex gap-3 items-center justify-center">
            {/* LinkedIn Data Conforme */}
            <a
              href="https://www.linkedin.com/company/dataconforme/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Data Conforme"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-[#0077B5] transition-colors cursor-pointer text-white/70 hover:text-white text-[13px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="font-['Inter:Semi_Bold',sans-serif]">Data Conforme</span>
            </a>
            {/* LinkedIn Jérôme Ficat */}
            <a
              href="https://www.linkedin.com/in/jerome-ficat/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Jérôme Ficat"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-[#0077B5] transition-colors cursor-pointer text-white/70 hover:text-white text-[13px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="font-['Inter:Semi_Bold',sans-serif]">Jérôme Ficat</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export { Footer };

const VALID_PAGES = ["about", "formation", "ia-conforme", "fabrik01", "legal", "privacy", "trust-center", "contact", "tarifs"];

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (page: string) => {
    if (page === "home") navigate("/");
    else navigate("/" + page);
  };

  // Global Scroll Animation Observer
  useEffect(() => {
    // Basic scroll to top if NO hash is present
    if (!location.hash) {
      window.scrollTo(0, 0);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
            // Optional: observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll(
        '[data-name*="Section"], [data-name*="Card"], [data-name*="Grid"], [data-name*="Container"]'
      );
      
      const hashId = location.hash ? location.hash.replace('#', '') : null;

      elements.forEach((el) => {
        const hasStaticOpacity = Array.from(el.classList).some(
          (c) => c.startsWith("opacity-") && c !== "opacity-0" && c !== "opacity-100"
        );
        
        // Skip hidden classes if this is the target of the hash
        if (hashId && (el.id === hashId || el.querySelector(`#${hashId}`))) {
          el.classList.add("opacity-100", "translate-y-0");
          return;
        }

        if (!el.classList.contains("scroll-animated") && !hasStaticOpacity) {
          // Add Tailwind transition classes. Using transforming vars prevents overriding layout transforms.
          el.classList.add(
            "scroll-animated",
            "transition-all",
            "duration-1000",
            "ease-out",
            "opacity-0",
            "translate-y-10"
          );
          observer.observe(el);
        }
      });

      // Handle hash scroll AFTER initial mount and tiny delay
      if (hashId) {
        const element = document.getElementById(hashId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Ensure it's visible even if it didn't match the selector above
          element.classList.remove("opacity-0", "translate-y-10");
          element.classList.add("opacity-100", "translate-y-0");
        }
      }
    }, 150);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [location.pathname, location.hash]);

  return (
    <Routes>
      <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
      <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
      <Route path="/formation" element={<FormationPage onNavigate={handleNavigate} />} />
      <Route path="/ia-conforme" element={<IAConformePage onNavigate={handleNavigate} />} />
      <Route path="/fabrik01" element={<Fabrik01Page onNavigate={handleNavigate} />} />
      <Route path="/legal" element={<LegalNoticePage onNavigate={handleNavigate} />} />
      <Route path="/privacy" element={<PrivacyPolicyPage onNavigate={handleNavigate} />} />
      <Route path="/trust-center" element={<TrustCenterPage onNavigate={handleNavigate} />} />
      <Route path="/contact" element={<ContactPage onNavigate={handleNavigate} />} />
      <Route path="/tarifs" element={<TarifsPage onNavigate={handleNavigate} />} />
      <Route path="/news" element={<NewsPage onNavigate={handleNavigate} />} />
      <Route path="*" element={<HomePage onNavigate={handleNavigate} />} />
    </Routes>
  );
}