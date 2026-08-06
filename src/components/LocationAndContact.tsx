import React, { useState } from "react";
import { MapPin, Mail, Clock, Check, Sparkles, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { POUSADA_INFO } from "../data";

interface LocationAndContactProps {
  onOpenWhatsApp: (message: string) => void;
}

export default function LocationAndContact({ onOpenWhatsApp }: LocationAndContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Dúvida Geral");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert(t("location.errorForm", { defaultValue: "Por favor, preencha todos os campos obrigatórios." }));
      return;
    }

    // Simulate sending
    setIsSubmitted(true);
  };

  const handleWhatsAppFollowUp = () => {
    const translatedSubject = t(`location.subjects.${subject}`, { defaultValue: subject });
    const formattedMsg = `Olá! Meu nome é *${name}*.\n` +
      `• *E-mail:* ${email}\n` +
      `• *Assunto:* ${translatedSubject}\n` +
      `• *Mensagem:* ${message}\n\n` +
      `Enviei este formulário pelo site e gostaria de um retorno rápido. Obrigado!`;

    onOpenWhatsApp(formattedMsg);
    // Reset
    setName("");
    setEmail("");
    setMessage("");
    setIsSubmitted(false);
  };

  return (
    <section id="localizacao" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Coordinates, Address & Map Simulation */}
          <div className="lg:col-span-6 flex flex-col gap-8 text-left">
            <div>
              <p className="text-xs font-mono tracking-[0.25em] text-brand-blue uppercase font-bold">
                {t("location.subtitle")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-2">
                {t("location.title")}
              </h2>
              <div className="h-1 w-12 bg-brand-green mt-4 rounded"></div>
              <p className="text-stone-700 text-sm sm:text-base mt-4 leading-relaxed">
                {t("location.description")}
              </p>
            </div>

            {/* Quick Contact & Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/50 flex gap-4">
                <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif font-bold text-stone-800 text-sm sm:text-base">{t("location.addressTitle")}</h3>
                  <p className="text-stone-700 text-xs mt-1 leading-relaxed">
                    {POUSADA_INFO.address}, CEP {POUSADA_INFO.cep}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/50 flex gap-4">
                <Clock className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif font-bold text-stone-800 text-sm sm:text-base">{t("location.checkInOutTitle")}</h3>
                  <p className="text-stone-700 text-xs mt-1 leading-relaxed">
                    {t("location.checkInFrom")} {POUSADA_INFO.checkInTime}h<br />
                    {t("location.checkOutUntil")} {POUSADA_INFO.checkOutTime}h
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Interactive Map */}
            <div className="relative h-[350px] w-full rounded-3xl overflow-hidden shadow-lg border border-stone-200/80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.7617734881755!2d-32.43096672415464!3d-3.861220243864026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x63652666d497a3d%3A0x6a310e71d7876cae!2sPousada%20Liberty%20Noronha%20Sueste!5e0!3m2!1spt-BR!2sca!4v1782755908296!5m2!1spt-BR!2sca"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Pousada Liberty Noronha Sueste"
              ></iframe>
            </div>

            {/* Distances and Location metrics */}
            <div className="grid grid-cols-3 gap-2 p-5 rounded-2xl bg-stone-50 border border-stone-200/50 text-center shadow-sm">
              <div className="flex flex-col justify-center py-1">
                <span className="block text-[10px] font-mono font-bold text-brand-blue uppercase tracking-widest mb-1">{t("location.distSea")}</span>
                <span className="text-xs sm:text-sm font-semibold text-stone-800">{t("location.distSeaVal")}</span>
              </div>
              <div className="flex flex-col justify-center border-x border-stone-200 py-1">
                <span className="block text-[10px] font-mono font-bold text-brand-blue uppercase tracking-widest mb-1">{t("location.distCenter")}</span>
                <span className="text-xs sm:text-sm font-semibold text-stone-800">{t("location.distCenterVal")}</span>
              </div>
              <div className="flex flex-col justify-center py-1">
                <span className="block text-[10px] font-mono font-bold text-brand-blue uppercase tracking-widest mb-1">{t("location.distBistros")}</span>
                <span className="text-xs sm:text-sm font-semibold text-stone-800">{t("location.distBistrosVal")}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-6 bg-stone-50 p-6 sm:p-10 rounded-3xl border border-stone-200/50 shadow-sm text-left">
            <div className="mb-6">
              <span className="inline-flex items-center gap-1 bg-brand-blue/10 text-brand-blue text-[10px] font-mono font-bold uppercase py-1 px-3 rounded-full mb-3">
                <Mail className="w-3 h-3 text-brand-blue" /> {t("location.contactChannel")}
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-900">
                {t("location.formTitle")}
              </h3>
              <p className="text-xs text-stone-700 mt-1 leading-relaxed">
                {t("location.formDesc")}
              </p>
            </div>

            {isSubmitted ? (
              /* Success state */
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center py-10 animate-in fade-in duration-300">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4 shadow">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-lg text-stone-900">{t("location.formSuccess")}</h4>
                <p className="text-sm text-stone-600 mt-2 max-w-sm">
                  {t("location.formSuccessDesc", { name, subject: t(`location.subjects.${subject}`, { defaultValue: subject }) })}
                </p>

                {/* Option to trigger WhatsApp with this form data */}
                <div className="mt-8 pt-6 border-t border-emerald-100 w-full">
                  <p className="text-xs font-mono text-emerald-800 mb-4 flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-yellow fill-brand-yellow/20" /> {t("location.waNow")}
                  </p>
                  <button
                    id="btn-form-whatsapp-followup"
                    onClick={handleWhatsAppFollowUp}
                    className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-stone-50 text-xs font-bold tracking-wider uppercase py-3.5 rounded-xl transition-all shadow cursor-pointer"
                  >
                    {t("location.waSend")}
                  </button>
                  <button
                    id="btn-form-reset"
                    onClick={() => setIsSubmitted(false)}
                    className="text-stone-800 hover:text-stone-950 text-xs font-mono mt-4 block mx-auto underline focus:outline-none"
                  >
                    {t("location.writeNew")}
                  </button>
                </div>
              </div>
            ) : (
              /* Inquiry form */
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-stone-600 uppercase mb-2">
                      {t("location.formName")}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t("location.placeholderName")}
                      className="w-full bg-white text-stone-800 text-sm border border-stone-200 focus:border-brand-blue rounded-xl py-3 px-4 transition-all focus:outline-none focus:ring-1 focus:ring-brand-blue/30"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-stone-600 uppercase mb-2">
                      {t("location.formEmail")}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t("location.placeholderEmail")}
                      className="w-full bg-white text-stone-800 text-sm border border-stone-200 focus:border-brand-blue rounded-xl py-3 px-4 transition-all focus:outline-none focus:ring-1 focus:ring-brand-blue/30"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono font-bold text-stone-700 uppercase mb-2">
                    {t("location.formSubject")}
                  </label>
                  <select
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-white text-stone-800 text-sm border border-stone-200 focus:border-brand-blue rounded-xl py-3 px-4 transition-all focus:outline-none focus:ring-1 focus:ring-brand-blue/30"
                  >
                    <option value="Dúvida Geral">{t("location.subjects.Dúvida Geral")}</option>
                    <option value="Cotação de Reservas">{t("location.subjects.Cotação de Reservas")}</option>
                    <option value="Casamentos e Eventos">{t("location.subjects.Casamentos e Eventos")}</option>
                    <option value="Parcerias">{t("location.subjects.Parcerias")}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono font-bold text-stone-700 uppercase mb-2">
                    {t("location.formMessage")}
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t("location.placeholderMessage")}
                    rows={4}
                    className="w-full bg-white text-stone-800 text-sm border border-stone-200 focus:border-brand-blue rounded-xl py-3 px-4 transition-all focus:outline-none focus:ring-1 focus:ring-brand-blue/30 leading-relaxed resize-none"
                  />
                </div>

                <button
                  id="btn-contact-submit"
                  type="submit"
                  className="w-full text-center bg-stone-900 hover:bg-brand-blue text-stone-100 text-xs font-bold tracking-wider uppercase py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  <Send className="w-4 h-4" /> {t("location.btnSend")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
