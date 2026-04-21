import { Navbar, Footer } from "../App";
import teamJerome from '../../assets/team-jerome.png';
import teamNosima from '../../assets/team-nosima.png';
import teamMelvin from '../../assets/team-melvin.png';
import teamRaphael from '../../assets/team-raphael.png';
import { ShieldCheck, Lock, Users, ChevronRight } from "lucide-react";
import jeromeFicatImage from "figma:asset/e4d81823abce74b8f71e2af748f5902b137d5ec7.png";
import brainImage from "figma:asset/32941527829b6439a6a0192b836d7968d7d083e6.png";

export default function AboutPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <Navbar currentPage="about" onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="relative w-full pt-[140px] pb-[80px] bg-white text-center">
        <div className="max-w-[1000px] mx-auto px-8 relative z-10">
          <h1 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[48px] md:text-[56px] leading-[1.1] mb-6">
            À propos de <span className="text-[#00A9C1]">Data Conforme</span>
          </h1>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[20px] leading-relaxed max-w-[800px] mx-auto">
            Une équipe pluridisciplinaire d'experts réunissant l'excellence juridique et technologique pour sécuriser et propulser vos projets.
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-[200px] bg-gradient-to-t from-[#F8FAFC] to-white/0 pointer-events-none" />
      </section>

      {/* L'Equipe Section */}
      <section className="w-full py-20 px-8 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[40px] mb-4">
              Notre Équipe
            </h2>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[#5A6C7D] text-[18px]">
              L'alliance de l'expertise juridique et technologique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Jérôme Ficat", role: "Fondateur & CEO / Expert RGPD", desc: "Juriste TECH, DPO certifié depuis 2020. Plus de 50 audits RGPD et Cyber. Fondateur de Data conforme et Fabrik01", image: teamJerome, level: "SENIOR" },
              { name: "Nosimahéfa Rakotoarisoa", role: "Expert RGPD & IA Souveraine, juriste", desc: "Analyse et accompagnement RGPD/AI Act, assistant Délégué à la Protection des Données.", image: teamNosima, level: "JUNIOR" },
              { name: "Melvin Bouyssou", role: "Dev. IA & Automatisation", desc: "Développement web, IA et création d'automatisations complexes.", image: teamMelvin, level: "JUNIOR" },
              { name: "Raphaël SANTOS", role: "Business Developer", desc: "Développement et lancement des offres de transformation IA pour les organisations.", image: teamRaphael, level: "JUNIOR" }
            ].map((member, idx) => (
              <div key={idx} className="relative bg-white p-8 rounded-2xl shadow-sm border border-[#E5E9F0] hover:shadow-md transition-shadow">
                {member.level && (
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-['Manrope:Bold',sans-serif] tracking-wider ${member.level === 'SENIOR'
                      ? 'bg-[#0047BA]/10 text-[#0047BA]'
                      : 'bg-[#00A9C1]/10 text-[#00A9C1]'
                    }`}>
                    {member.level}
                  </div>
                )}
                <div className="w-20 h-20 rounded-full bg-[#00A9C1]/10 flex items-center justify-center mb-6 overflow-hidden border-2 border-[#00A9C1]/20">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[22px] mb-2">{member.name}</h3>
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#00A9C1] text-[14px] uppercase tracking-wide mb-4">{member.role}</p>
                <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] text-[15px] leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs Section */}
      <section className="w-full py-20 px-8 bg-white border-b border-[#E5E9F0]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[40px] mb-4">
              Nos Valeurs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#0047BA] to-[#00A9C1] rounded-2xl flex items-center justify-center mb-6 -rotate-3">
                <ShieldCheck className="text-white w-8 h-8" />
              </div>
              <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[24px] mb-4">Excellence</h3>
              <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] text-[16px] leading-relaxed">
                Nous visons l'excellence dans chaque projet, en combinant expertise technique et compréhension métier.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#00A9C1] to-[#82E600] rounded-2xl flex items-center justify-center mb-6 rotate-3">
                <Lock className="text-white w-8 h-8" />
              </div>
              <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[24px] mb-4">Transparence</h3>
              <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] text-[16px] leading-relaxed">
                Une communication claire et honnête avec nos clients. Pas de promesses irréalistes, que des résultats concrets.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#82E600] to-[#0A192F] rounded-2xl flex items-center justify-center mb-6 -rotate-3">
                <Users className="text-white w-8 h-8" />
              </div>
              <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[24px] mb-4">Partenariat</h3>
              <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] text-[16px] leading-relaxed">
                Nous construisons des relations long terme basées sur la confiance, le respect et le succès mutuel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mot du fondateur (Avant-dernier) */}
      <section className="w-full py-20 px-8" style={{ background: "linear-gradient(135deg, #0A192F 0%, #1A293F 100%)" }}>
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-white text-[36px] mb-6">Le mot du fondateur</h2>
            <h3 className="font-['Manrope:Bold',sans-serif] font-bold text-[#00A9C1] text-[20px] mb-6">Jérôme Ficat</h3>

            <p className="font-['Inter:Regular',sans-serif] font-normal text-white/90 text-[18px] leading-relaxed mb-6 italic border-l-4 border-[#00A9C1] pl-6">
              "Après 20 ans d'expérience dans le digital et 5 ans en tant que DPO, j'ai créé Data Conforme par passion pour aider mes clients à maîtriser leurs risques juridiques et cybersécurité. Notre plus grand défi aujourd'hui ? L'intelligence artificielle qu'il faut pouvoir encadrer pour innover de manière éthique et souveraine."
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 rounded-[8px] cursor-pointer shadow-[0_8px_30px_rgba(130,230,0,0.2)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
                style={{ backgroundColor: '#82E600' }}
              >
                <span className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[16px]">
                  Prendre rendez-vous
                </span>
                <ChevronRight className="w-5 h-5 text-[#0A192F]" />
              </button>
              <a
                href="https://www.linkedin.com/in/jerome-ficat/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-[8px] cursor-pointer hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 border-2 border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="font-['Manrope:Bold',sans-serif] font-bold text-[16px]">Jérôme Ficat</span>
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-[#00A9C1] rounded-2xl rotate-6 opacity-20"></div>
            <img
              src={jeromeFicatImage}
              alt="Jérôme Ficat"
              className="w-[350px] md:w-[450px] h-auto object-contain rounded-2xl relative z-10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Specificité section */}
      <section className="w-full py-20 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-center mb-12">
            <img
              src={brainImage}
              alt="Intelligence Artificielle"
              className="w-[200px] h-auto object-contain"
            />
          </div>

          <h2 className="font-['Manrope:Bold',sans-serif] font-bold text-[#0047BA] text-[36px] text-center mb-12">
            Spécificité de Data conforme : Des juristes qui parlent "TECH"
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[18px] leading-relaxed mb-8">
              <span className="font-bold">Contrairement aux consultants purement juridiques</span>, nous comprenons votre
              réalité technique.
            </p>

            <p className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[16px] leading-relaxed mb-6">
              Juristes de formation, chaque collaborateur est formé au digital et traduit les obligations RGPD en
              solutions concrètes pour votre système d'information.
            </p>

            <div className="my-8">
              <p className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[18px] mb-6">
                Pourquoi cette approche change tout ?
              </p>

              <div className="space-y-4 ml-6">
                <div className="flex items-start gap-3">
                  <span className="text-[#00A9C1] text-[20px] font-bold">✓</span>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[16px] leading-relaxed">
                    <span className="font-bold">Compréhension de vos infrastructures</span> : Serveurs, réseaux,
                    applications... nous parlons votre langage technique
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#00A9C1] text-[20px] font-bold">✓</span>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[16px] leading-relaxed">
                    <span className="font-bold">Audit de votre SI</span> : Vision indépendante sur vos failles, vos
                    prestataires, vos vulnérabilités réelles
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#00A9C1] text-[20px] font-bold">✓</span>
                  <p className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[16px] leading-relaxed">
                    <span className="font-bold">Nous faisons des ponts</span> : Entre vos équipes IT et votre direction,
                    entre conformité et performance
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="font-['Manrope:Bold',sans-serif] font-bold text-[#0A192F] text-[18px] mb-4">
                Le résultat ?
              </p>
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[#0A192F] text-[16px] leading-relaxed">
                La protection de vos données devient un atout stratégique, et non une contrainte administrative.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
