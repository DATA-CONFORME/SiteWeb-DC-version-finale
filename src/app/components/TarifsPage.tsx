import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Navbar } from "../App";

const plans = [
  {
    id: "basic",
    title: "Basic",
    subtitle: "Pour démarrer votre conformité",
    highlight: false,
    monthlyPrice: 214,
    annualPrice: 200,
    stripeLink: "https://buy.stripe.com/aEU7w12c46Yo73q28b",
    ctaLabel: "Démarrer avec Basic",
    features: [
      "Hotline et support email",
      "Veille juridique et technique permanente",
      "Documentation RGPD via des modèles",
      "Pas de conservation de vos registres",
    ],
  },
  {
    id: "serenite",
    title: "Sérénité",
    subtitle: "L'offre la plus populaire",
    highlight: true,
    monthlyPrice: 428,
    annualPrice: 400,
    stripeLink: "https://buy.stripe.com/9AQcQlaIA3Mc0F2001",
    ctaLabel: "Choisir Sérénité",
    features: [
      "Nomination officielle du DPO auprès de la CNIL",
      "Mise à disposition d'un logiciel de pilotage conformité",
      "Contrôle de 10 sous-traitants / an",
      "Points de contrôle cybersécurité avec votre équipe IT",
      "Sensibilisation annuelle des équipes",
      "Tenue complète et permanente de vos registres obligatoires",
      "Appui juridique et technique continu",
    ],
  },
  {
    id: "serenite-pro",
    title: "Sérénité Pro",
    subtitle: "Protection maximale",
    highlight: false,
    monthlyPrice: 750,
    annualPrice: 700,
    stripeLink: "https://calendrier.dataconforme.com/jerome.ficat-dataconforme.com/rendez-vous-jerome-ficat?duration=45",
    ctaLabel: "Prendre rendez-vous",
    features: [
      "Toutes les fonctionnalités du pack Sérénité",
      "Conduite du plan cybersécurité et conformité avancée",
      "Présentiel dans l'entreprise",
      "Rédaction de PSSI, PRA, PCA, Chartes",
      "Évaluation de l'usage de l'intelligence artificielle",
      "2 sensibilisations d'équipes / an",
      "Simulations de phishing et tests d'ingénierie sociale",
      "Contrôle illimité des sous-traitants",
      "Cellule de crise en cas d'incident cyber",
    ],
  },
];

export default function TarifsPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <div
      className="min-h-screen w-full"
      style={{ background: "linear-gradient(135deg, #0A192F 0%, #0E2844 50%, #0A192F 100%)" }}
    >
      <Navbar currentPage="tarifs" onNavigate={onNavigate || (() => {})} />
      {/* Header */}
      <div className="text-center pt-[140px] pb-16 px-8">
        {/* Logo / brand badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full mb-8">
          <div className="w-2 h-2 rounded-full bg-[#82E600]" />
          <span className="font-['Inter:Semi_Bold',sans-serif] text-white/80 text-[13px] uppercase tracking-widest">
            Data Conforme — Tarifs DPO
          </span>
        </div>

        <h1 className="font-['Manrope:Extra_Bold',sans-serif] text-white text-[52px] leading-tight mb-4">
          Choisissez votre offre
        </h1>
        <p className="font-['Inter:Regular',sans-serif] text-white/60 text-[18px] max-w-[580px] mx-auto">
          Des accompagnements conformité sur-mesure pour toutes les structures,
          avec un DPO certifié dédié.
        </p>

        {/* Billing Toggle */}
        <div className="inline-flex items-center gap-0 bg-white/10 backdrop-blur-md rounded-full p-1.5 mt-10 border border-white/20">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-7 py-2.5 rounded-full font-['Inter:Semi_Bold',sans-serif] text-[15px] transition-all duration-200 cursor-pointer ${
              billing === "monthly"
                ? "bg-white text-[#0A192F] shadow-md"
                : "text-white/60 hover:text-white"
            }`}
          >
            Mensuel
          </button>
          <button
            onClick={() => setBilling("annual")}
            className={`px-7 py-2.5 rounded-full font-['Inter:Semi_Bold',sans-serif] text-[15px] transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              billing === "annual"
                ? "bg-white text-[#0A192F] shadow-md"
                : "text-white/60 hover:text-white"
            }`}
          >
            Annuel
            <span
              className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                billing === "annual"
                  ? "bg-[#82E600] text-[#0A192F]"
                  : "bg-white/20 text-white"
              }`}
            >
              -7%
            </span>
          </button>
        </div>
      </div>

      {/* Plans */}
      <div className="max-w-[1200px] mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] items-start">
          {plans.map((plan) => {
            const price =
              billing === "monthly" ? plan.monthlyPrice : plan.annualPrice;
            const savings = (plan.monthlyPrice - plan.annualPrice) * 12;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-[28px] overflow-hidden transition-all duration-300 ${
                  plan.highlight
                    ? "ring-2 ring-[#82E600] shadow-[0_0_60px_rgba(130,230,0,0.15)]"
                    : "ring-1 ring-white/10"
                }`}
                style={{
                  background: plan.highlight
                    ? "linear-gradient(160deg, #0D2744 0%, #102A4A 100%)"
                    : "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A9C1] to-[#82E600]" />
                )}

                <div className="p-8">
                  {plan.highlight && (
                    <div className="inline-block bg-gradient-to-r from-[#00A9C1] to-[#82E600] text-[#0A192F] text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                      ⭐ Le plus populaire
                    </div>
                  )}

                  <h2
                    className={`font-['Manrope:Extra_Bold',sans-serif] text-[30px] mb-1 ${
                      plan.highlight ? "text-white" : "text-white/90"
                    }`}
                  >
                    {plan.title}
                  </h2>
                  <p
                    className={`font-['Inter:Regular',sans-serif] text-[13px] mb-6 ${
                      plan.highlight ? "text-[#82E600]" : "text-white/40"
                    }`}
                  >
                    {plan.subtitle}
                  </p>

                  {/* Price */}
                  <div className="flex items-end gap-2 mb-2">
                    {plan.id === "serenite-pro" && (
                      <span className="text-white/40 font-['Inter:Regular',sans-serif] text-[16px] mb-2">
                        à partir de
                      </span>
                    )}
                    <span
                      className={`font-['Manrope:Extra_Bold',sans-serif] text-[56px] leading-none ${
                        plan.highlight ? "text-white" : "text-white/80"
                      }`}
                    >
                      {price}€
                    </span>
                    <span className="text-white/40 font-['Inter:Regular',sans-serif] text-[15px] mb-2">
                      / mois
                    </span>
                  </div>

                  {billing === "annual" && (
                    <p className="text-[#82E600] font-['Inter:Semi_Bold',sans-serif] text-[13px] mb-6">
                      ✓ Économisez {savings}€ / an
                    </p>
                  )}

                  {billing === "monthly" && <div className="mb-6" />}

                  <a
                    href={plan.stripeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-[15px] rounded-[14px] font-['Inter:Semi_Bold',sans-serif] text-[16px] text-center no-underline transition-all duration-200 cursor-pointer ${
                      plan.highlight
                        ? "bg-gradient-to-r from-[#00A9C1] to-[#82E600] text-[#0A192F] hover:opacity-90 shadow-lg"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                    }`}
                  >
                    {plan.ctaLabel}
                  </a>
                </div>

                <div className="h-px w-full bg-white/10" />

                <div className="p-8 flex-grow">
                  <p className="font-['Inter:Semi_Bold',sans-serif] text-white/40 text-[12px] uppercase tracking-widest mb-5">
                    Inclus dans ce plan
                  </p>
                  <ul className="space-y-4">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`shrink-0 w-5 h-5 mt-0.5 ${
                            plan.highlight
                              ? "text-[#82E600]"
                              : "text-[#00A9C1]"
                          }`}
                        />
                        <span className="font-['Inter:Regular',sans-serif] text-[14px] text-white/70 leading-snug">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="https://calendrier.dataconforme.com/jerome.ficat-dataconforme.com/rendez-vous-jerome-ficat?duration=30"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-2xl text-white no-underline hover:bg-white/20 transition-all duration-200 cursor-pointer"
          >
            <span className="text-2xl">📞</span>
            <div className="text-left">
              <p className="font-['Manrope:Bold',sans-serif] text-white text-[16px]">
                Premier entretien visio de 30 min offert
              </p>
              <p className="font-['Inter:Regular',sans-serif] text-white/50 text-[13px]">
                Discutez de vos enjeux avec un DPO certifié sans engagement.
              </p>
            </div>
          </a>

          <p className="font-['Inter:Regular',sans-serif] text-white/30 text-[13px] mt-8">
            © 2026 Data Conforme. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
}
