import React from 'react'

const benefits = [
  {
    number: '01',
    accent: 'teal',
    title: 'Vous gagnez plus de contrats',
    body: "En B2B, la conformité rassure vos partenaires et fait la différence lors des appels d'offres.",
  },
  {
    number: '02',
    accent: 'blue',
    title: 'Votre marketing est plus performant',
    body: 'Le respect de vos prospects et clients est un gage de confiance qui améliore vos résultats.',
  },
  {
    number: '03',
    accent: 'green',
    title: 'Vous augmentez la valeur de votre entreprise',
    body: "Un atout indispensable pour rassurer les investisseurs lors d'une levée de fonds, d'une vente ou d'une fusion.",
  },
  {
    number: '04',
    accent: 'purple',
    title: 'Vous innovez en toute sécurité',
    body: "L'IA a besoin de données. Data Conforme vous aide à l'intégrer sans risque et à trouver des solutions souveraines.",
  },
  {
    number: '05',
    accent: 'orange',
    title: 'Vous fidélisez vos talents',
    body: 'Une marque employeur forte passe par le respect des données RH de vos collaborateurs.',
  },
]

const accentColors: Record<string, string> = {
  teal:   'bg-teal',
  blue:   'bg-blue-accent',
  green:  'bg-green-accent',
  purple: 'bg-purple-accent',
  orange: 'bg-orange-accent',
}

export default function BenefitsSection() {
  return (
    <section className="bg-section-bg pt-8 pb-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="block w-7 h-0.5 rounded bg-teal" />
          <span className="text-teal text-[11px] font-semibold tracking-[0.12em] uppercase">
            Pourquoi se conformer
          </span>
        </div>

        {/* Titre */}
        <h2 className="text-center font-poppins font-bold text-navy text-[clamp(28px,3.5vw,42px)] leading-tight mb-5">
          De l'obligation légale<br />
          <em className="font-normal italic text-teal">à l'opportunité</em>
        </h2>

        {/* Sous-titre */}
        <p className="text-center text-[#6b7a99] font-light text-base leading-relaxed max-w-[520px] mx-auto mb-14">
          L'IA Act et le RGPD redéfinissent la valeur de votre organisation.
          La conformité est devenue l'exigence n°1 de vos clients et partenaires.
        </p>

        {/* Ligne 1 — 3 cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {benefits.slice(0, 3).map((b) => (
            <BenefitCard key={b.number} {...b} />
          ))}
        </div>

        {/* Ligne 2 — 2 cartes centrées */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-[66%] mx-auto">
          {benefits.slice(3).map((b) => (
            <BenefitCard key={b.number} {...b} />
          ))}
        </div>

      </div>
    </section>
  )
}

function BenefitCard({
  number,
  accent,
  title,
  body,
}: {
  number: string
  accent: string
  title: string
  body: string
}) {
  return (
    <div className="relative bg-card-bg rounded-2xl border border-navy/5 shadow-[0_4px_24px_rgba(15,32,68,0.08)] px-7 py-9 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(15,32,68,0.13)]">

      {/* Numéro décoratif arrière-plan */}
      <span
        aria-hidden="true"
        className="absolute top-3 right-4 font-bold text-[88px] leading-none text-navy/[0.05] select-none pointer-events-none tracking-[-4px]"
      >
        {number}
      </span>

      {/* Barre accent colorée */}
      <div className={`w-10 h-[3px] rounded-full mb-5 ${accentColors[accent]}`} />

      {/* Contenu */}
      <h3 className="font-poppins font-semibold text-navy text-[17px] leading-snug mb-3">
        {title}
      </h3>
      <p className="text-[#6b7a99] text-sm font-light leading-relaxed">
        {body}
      </p>

    </div>
  )
}
