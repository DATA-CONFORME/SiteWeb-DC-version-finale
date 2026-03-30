import React, { useState } from "react";
import { Navbar, Footer } from "../App";
import { Phone, Mail, Send, CheckCircle2, Globe, ChevronDown, Loader2, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

const INITIAL_FORM = {
  prenom: "",
  nom: "",
  email: "",
  pays: "France",
  tel: "",
  fonction: "",
  secteur: "",
  motif: "",
  message: "",
  consent: false,
};

export default function ContactPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [apiError, setApiError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name]) setErrors(prev => { const n = { ...prev }; delete n[name]; return n; });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.prenom.trim()) newErrors.prenom = "Veuillez remplir ce champ obligatoire.";
    if (!formData.nom.trim()) newErrors.nom = "Veuillez remplir ce champ obligatoire.";
    if (!formData.email.trim()) newErrors.email = "L'e-mail est obligatoire.";
    if (!formData.fonction) newErrors.fonction = "Veuillez préciser votre fonction.";
    if (!formData.secteur) newErrors.secteur = "Veuillez préciser votre secteur d'activité.";
    if (!formData.motif) newErrors.motif = "Veuillez préciser le motif de votre demande.";
    if (!formData.message.trim()) newErrors.message = "Veuillez saisir votre message.";
    if (!formData.consent) newErrors.consent = "Vous devez accepter le traitement de vos données.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("sending");
    setApiError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData(INITIAL_FORM);
      } else {
        const body = await res.json().catch(() => ({}));
        setApiError(body.error ?? "Une erreur est survenue. Veuillez réessayer.");
        setStatus("error");
      }
    } catch {
      setApiError("Impossible de joindre le serveur. Vérifiez votre connexion.");
      setStatus("error");
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#F8FAFB]">
      <Navbar currentPage="contact" onNavigate={onNavigate} />

      {/* Header Section */}
      <section className="relative w-full pt-[140px] pb-12 px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="font-['Manrope:Extra_Bold',sans-serif] text-[#0A192F] text-[56px] tracking-tight mb-4">
            Contactez-nous
          </h1>
          <p className="font-['Inter:Regular',sans-serif] text-[18px] text-[#5A6C7D] max-w-[600px] mx-auto">
            Une question sur le RGPD ou l'IA ? Notre équipe d'experts est à votre écoute pour vous accompagner.
          </p>
        </div>
      </section>

      {/* Main Content: Form + Info */}
      <section className="w-full pb-24 px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Form Side */}
          <div className="lg:col-span-8 bg-white rounded-[32px] p-10 shadow-xl border border-[rgba(0,169,193,0.05)]">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Prénom */}
                <div className="space-y-2">
                  <label className="font-['Inter:Semi_Bold',sans-serif] text-[#0A192F] text-[14px]">Votre prénom*</label>
                  <input
                    type="text"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    placeholder="Prénom"
                    className={`w-full px-5 py-4 rounded-xl bg-[#F8FAFB] border-[1.5px] outline-none transition-all duration-200 font-['Inter:Regular',sans-serif] ${
                      errors.prenom ? 'border-red-400 focus:border-red-500' : 'border-[#E5E9F0] focus:border-[#00A9C1]'
                    }`}
                  />
                  {errors.prenom && <p className="text-red-500 text-[12px] font-['Inter:Medium',sans-serif]">{errors.prenom}</p>}
                </div>

                {/* Nom */}
                <div className="space-y-2">
                  <label className="font-['Inter:Semi_Bold',sans-serif] text-[#0A192F] text-[14px]">Votre nom*</label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Nom"
                    className={`w-full px-5 py-4 rounded-xl bg-[#F8FAFB] border-[1.5px] outline-none transition-all duration-200 font-['Inter:Regular',sans-serif] ${
                      errors.nom ? 'border-red-400 focus:border-red-500' : 'border-[#E5E9F0] focus:border-[#00A9C1]'
                    }`}
                  />
                  {errors.nom && <p className="text-red-500 text-[12px] font-['Inter:Medium',sans-serif]">{errors.nom}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Email Pro */}
                <div className="space-y-2">
                  <label className="font-['Inter:Semi_Bold',sans-serif] text-[#0A192F] text-[14px]">E-mail professionnel*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="exemple@entreprise.com"
                    className={`w-full px-5 py-4 rounded-xl bg-[#F8FAFB] border-[1.5px] outline-none transition-all duration-200 font-['Inter:Regular',sans-serif] ${
                      errors.email ? 'border-red-400 focus:border-red-500' : 'border-[#E5E9F0] focus:border-[#00A9C1]'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-[12px] font-['Inter:Medium',sans-serif]">{errors.email}</p>}
                </div>

                {/* Phone Component */}
                <div className="space-y-2">
                  <label className="font-['Inter:Semi_Bold',sans-serif] text-[#0A192F] text-[14px]">Téléphone</label>
                  <div className="flex gap-3">
                    <div className="relative shrink-0">
                      <select
                        name="pays"
                        value={formData.pays}
                        onChange={handleChange}
                        className="appearance-none h-full pl-5 pr-10 rounded-xl bg-[#F8FAFB] border-[1.5px] border-[#E5E9F0] outline-none focus:border-[#00A9C1] font-['Inter:Regular',sans-serif] transition-all cursor-pointer"
                      >
                        <option value="France">France</option>
                        <option value="Belgique">Belgique</option>
                        <option value="Suisse">Suisse</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A6C7D] pointer-events-none" />
                    </div>
                    <input
                      type="tel"
                      name="tel"
                      value={formData.tel}
                      onChange={handleChange}
                      placeholder="+33 6 00 00 00 00"
                      className="flex-1 px-5 py-4 rounded-xl bg-[#F8FAFB] border-[1.5px] border-[#E5E9F0] outline-none focus:border-[#00A9C1] font-['Inter:Regular',sans-serif] transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Fonction */}
                <div className="space-y-2">
                  <label className="font-['Inter:Semi_Bold',sans-serif] text-[#0A192F] text-[14px]">Fonction*</label>
                  <div className="relative">
                    <select
                      name="fonction"
                      value={formData.fonction}
                      onChange={handleChange}
                      className={`appearance-none w-full px-5 py-4 rounded-xl bg-[#F8FAFB] border-[1.5px] outline-none transition-all cursor-pointer font-['Inter:Regular',sans-serif] ${
                        errors.fonction ? 'border-red-400 focus:border-red-500' : 'border-[#E5E9F0] focus:border-[#00A9C1]'
                      }`}
                    >
                      <option value="">Veuillez sélectionner</option>
                      <option value="CEO / Dirigeant">CEO / Dirigeant / Gérant</option>
                      <option value="RAF / Compta">Responsable Administratif / Financier / Compta</option>
                      <option value="DPO / Juriste">DPO / Juriste / Compliance</option>
                      <option value="DSI / RSSI">DSI / RSSI / Responsable IT</option>
                      <option value="Manager / Chef de service">Responsable de Département / Manager</option>
                      <option value="Autre">Autre</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5A6C7D] pointer-events-none" />
                  </div>
                  {errors.fonction && <p className="text-red-500 text-[12px] font-['Inter:Medium',sans-serif]">{errors.fonction}</p>}
                </div>

                {/* Secteur d'activité */}
                <div className="space-y-2">
                  <label className="font-['Inter:Semi_Bold',sans-serif] text-[#0A192F] text-[14px]">Secteur d'activité*</label>
                  <div className="relative">
                    <select
                      name="secteur"
                      value={formData.secteur}
                      onChange={handleChange}
                      className={`appearance-none w-full px-5 py-4 rounded-xl bg-[#F8FAFB] border-[1.5px] outline-none transition-all cursor-pointer font-['Inter:Regular',sans-serif] ${
                        errors.secteur ? 'border-red-400 focus:border-red-500' : 'border-[#E5E9F0] focus:border-[#00A9C1]'
                      }`}
                    >
                      <option value="">Veuillez sélectionner</option>
                      <option value="Services / Conseil">Services / Conseil</option>
                      <option value="Industrie / Manufacture">Industrie / Manufacture</option>
                      <option value="Santé / Pharmaceutique">Santé / Pharmaceutique</option>
                      <option value="Formation / Éducation">Formation / Éducation</option>
                      <option value="Éditeur / SaaS / ESN">Éditeur de logiciel / SaaS / ESN</option>
                      <option value="Administration / Public">Administration / Secteur Public</option>
                      <option value="Autre">Autre</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5A6C7D] pointer-events-none" />
                  </div>
                  {errors.secteur && <p className="text-red-500 text-[12px] font-['Inter:Medium',sans-serif]">{errors.secteur}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Motif */}
                <div className="space-y-2">
                  <label className="font-['Inter:Semi_Bold',sans-serif] text-[#0A192F] text-[14px]">Motif*</label>
                  <div className="relative">
                    <select
                      name="motif"
                      value={formData.motif}
                      onChange={handleChange}
                      className={`appearance-none w-full px-5 py-4 rounded-xl bg-[#F8FAFB] border-[1.5px] outline-none transition-all cursor-pointer font-['Inter:Regular',sans-serif] ${
                        errors.motif ? 'border-red-400 focus:border-red-500' : 'border-[#E5E9F0] focus:border-[#00A9C1]'
                      }`}
                    >
                      <option value="">Veuillez sélectionner</option>
                      <option value="Audit">Audit RGPD</option>
                      <option value="IA">Projet IA & Souveraineté</option>
                      <option value="DPO">DPO externe</option>
                      <option value="Formation">Formation / IA</option>
                      <option value="Autre">Autre</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5A6C7D] pointer-events-none" />
                  </div>
                  {errors.motif && <p className="text-red-500 text-[12px] font-['Inter:Medium',sans-serif]">{errors.motif}</p>}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="font-['Inter:Semi_Bold',sans-serif] text-[#0A192F] text-[14px]">Message*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Comment pouvons-nous vous aider ?"
                  rows={5}
                  className={`w-full px-5 py-4 rounded-xl bg-[#F8FAFB] border-[1.5px] outline-none font-['Inter:Regular',sans-serif] transition-all duration-200 resize-none ${
                    errors.message ? "border-red-400 focus:border-red-500" : "border-[#E5E9F0] focus:border-[#00A9C1]"
                  }`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-[12px] font-['Inter:Medium',sans-serif]">{errors.message}</p>}
              </div>

              {/* RGPD Consent */}
              <div className="space-y-4">
                <label className="flex items-start gap-4 cursor-pointer group">
                  <div className="relative mt-1">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="peer sr-only"
                    />
                    <div className="w-6 h-6 border-2 border-[#E5E9F0] rounded-md transition-all duration-200 peer-checked:bg-[#00A9C1] peer-checked:border-[#00A9C1]"></div>
                    <CheckCircle2 className="absolute top-0 left-0 w-6 h-6 text-white scale-0 transition-transform duration-200 peer-checked:scale-100 p-1" />
                  </div>
                  <span className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] text-[14px] leading-relaxed">
                    Je consens au traitement de mes données et confirme que j'ai bien pris connaissance de la <button type="button" onClick={() => onNavigate('privacy')} className="text-[#00A9C1] hover:underline font-semibold cursor-pointer">politique de confidentialité</button> de Data conforme (en aucun cas vos données ne seront revendues ou cédées à des tiers).
                  </span>
                </label>
                {errors.consent && <p className="text-red-500 text-[12px] font-['Inter:Medium',sans-serif]">{errors.consent}</p>}
              </div>

              {/* Message d'erreur API */}
              {status === "error" && (
                <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-red-700 text-[14px] font-['Inter:Regular',sans-serif]">{apiError}</p>
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full lg:w-auto px-12 py-5 rounded-xl text-white font-['Manrope:Bold',sans-serif] text-[18px] shadow-lg hover:shadow-xl hover:opacity-95 transition-all duration-200 flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  style={{ backgroundImage: "linear-gradient(135deg, #0047BA 0%, #00A9C1 100%)" }}
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours…
                    </>
                  ) : (
                    <>
                      Envoyer mon message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Confirmation succès */}
            {status === "success" && (
              <div className="mt-8 flex items-start gap-4 p-6 rounded-2xl bg-[#F0FDF4] border border-[#86EFAC]">
                <CheckCircle2 className="w-7 h-7 text-[#22C55E] shrink-0 mt-0.5" />
                <div>
                  <p className="font-['Manrope:Bold',sans-serif] text-[#166534] text-[16px]">Message envoyé avec succès !</p>
                  <p className="font-['Inter:Regular',sans-serif] text-[#166534]/80 text-[14px] mt-1">
                    Notre équipe vous répondra dans les plus brefs délais. Un accusé de réception vous a été adressé par e-mail.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Info Side */}
          <div className="lg:col-span-4 space-y-8">
            {/* Phone Block */}
            <div className="bg-[#0A192F] rounded-[32px] p-8 text-white relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_#00A9C1_0%,_transparent_100%)]"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#00A9C1]/20 flex items-center justify-center mb-6 border border-[#00A9C1]/30">
                  <Phone className="w-7 h-7 text-[#82E600]" />
                </div>
                <h3 className="font-['Manrope:Bold',sans-serif] text-[24px] mb-2">Par téléphone</h3>
                <p className="font-['Inter:Regular',sans-serif] text-white/70 mb-6 text-[15px]">
                  Besoin d'une réponse immédiate ? Appelez-nous directement.
                </p>
                <div className="text-[28px] font-['Manrope:Extra_Bold',sans-serif] text-[#82E600] tracking-tight group-hover:scale-105 transition-transform duration-300">
                  06.20.98.88.16
                </div>
              </div>
            </div>

            {/* Email Block */}
            <div className="bg-white rounded-[32px] p-8 border border-[#E5E9F0] shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#F0F3FF] flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-[#0047BA]" />
                </div>
                <h3 className="font-['Manrope:Bold',sans-serif] text-[20px] text-[#0A192F] mb-2">E-mail</h3>
                <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] mb-4 text-[14px]">
                  Pour toute demande de devis ou de documentation.
                </p>
                <a href="mailto:contact@dataconforme.com" className="font-['Inter:Semi_Bold',sans-serif] text-[#00A9C1] hover:underline">
                  contact@dataconforme.com
                </a>
            </div>

            {/* LinkedIn Data Conforme */}
            <a
              href="https://www.linkedin.com/company/dataconforme/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#0077B5] rounded-[32px] p-6 text-white hover:bg-[#005f92] transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <p className="font-['Manrope:Bold',sans-serif] text-[16px] font-bold">LinkedIn Data Conforme</p>
                <p className="font-['Inter:Regular',sans-serif] text-white/80 text-[13px]">Suivez notre page entreprise</p>
              </div>
            </a>

            {/* LinkedIn Jérôme Ficat */}
            <a
              href="https://www.linkedin.com/in/jerome-ficat/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-[32px] p-6 border border-[#0077B5] text-[#0077B5] hover:bg-[#EEF6FC] transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0077B5]/10 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <p className="font-['Manrope:Bold',sans-serif] text-[16px] font-bold">Jérôme Ficat</p>
                <p className="font-['Inter:Regular',sans-serif] text-[#5A6C7D] text-[13px]">Profil du fondateur</p>
              </div>
            </a>

          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
