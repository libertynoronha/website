import { useState } from "react";
import { Instagram, Facebook, Compass, Mail, Phone, MapPin } from "lucide-react";
import { POUSADA_INFO } from "../data";
import PrivacyModal from "./PrivacyModal";
import TermsModal from "./TermsModal";
import logoImage from "../assets/images/logo_2025.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="footer-pousada" className="bg-stone-900 text-stone-300 pt-16 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800 text-left">
          
          {/* Logo & Manifesto */}
          <div className="flex flex-col gap-4">
            <button
              id="btn-footer-logo-scroll"
              onClick={scrollToTop}
              className="flex items-center gap-2 group text-left focus:outline-none"
            >
              <img
                src={logoImage}
                alt="Pousada Liberty Noronha Sueste"
                className="w-8 h-8 rounded-full object-cover border border-brand-yellow/60 transition-transform duration-300 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-serif text-lg font-bold text-stone-100 tracking-wide">
                  Liberty Noronha Sueste
                </span>
                <span className="block text-[9px] text-stone-500 tracking-[0.2em] uppercase -mt-1">
                  Fernando de Noronha - Brasil
                </span>
              </div>
            </button>
            <p className="text-xs text-stone-400 leading-relaxed mt-2 max-w-xs">
              Conforto e autenticidade em Fernando de Noronha. O seu ponto de partida ideal para viver toda a beleza e a tranquilidade da ilha, a poucos metros da Praia do Sueste.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase text-stone-100 tracking-wider mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: "Início", id: "hero" },
                { name: "Acomodações", id: "acomodacoes" },
                { name: "Comodidades", id: "comodidades" },
                { name: "Depoimentos", id: "depoimentos" },
                { name: "Localização", id: "localizacao" },
                { name: "FAQ", id: "faq" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(link.id);
                      if (el) {
                        const offset = 80;
                        const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
                        window.scrollTo({ top: pos, behavior: "smooth" });
                      }
                    }}
                    className="hover:text-brand-yellow transition-colors text-stone-400 focus:outline-none cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono font-bold uppercase text-stone-100 tracking-wider mb-1">
              Contato & Reservas
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-0.5" />
                <span className="leading-normal">{POUSADA_INFO.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${POUSADA_INFO.phoneNumeric}`}
                  className="flex items-center gap-2.5 hover:text-brand-yellow transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                  <span>{POUSADA_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${POUSADA_INFO.email}`}
                  className="flex items-center gap-2.5 hover:text-brand-yellow transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                  <span>{POUSADA_INFO.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links & Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono font-bold uppercase text-stone-100 tracking-wider mb-1">
              Redes Sociais
            </h4>
            <div className="flex items-center gap-3.5 mb-4">
              <a
                href={POUSADA_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-stone-800 hover:bg-brand-blue hover:text-white rounded-xl transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href={POUSADA_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-stone-800 hover:bg-brand-blue hover:text-white rounded-xl transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a
                href={POUSADA_INFO.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-stone-800 hover:bg-brand-blue hover:text-white rounded-xl transition-all duration-300"
                aria-label="TripAdvisor"
              >
                <Compass className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>
            &copy; {currentYear} {POUSADA_INFO.name}. Todos os direitos reservados. CNPJ 43.796.811/0001-53.
          </p>
          <div className="flex gap-4">
            <button
              id="btn-open-privacy-policy"
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-stone-400 transition-colors cursor-pointer focus:outline-none"
            >
              Políticas de Privacidade
            </button>
            <span>•</span>
            <button
              id="btn-open-terms-of-use"
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-stone-400 transition-colors cursor-pointer focus:outline-none"
            >
              Termos de Uso
            </button>
          </div>
        </div>

        <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
        <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />

      </div>
    </footer>
  );
}
