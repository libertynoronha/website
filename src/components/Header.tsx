import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { POUSADA_INFO } from "../data";
import logoImage from "../assets/images/logo_2025.jpg";

interface HeaderProps {
  onOpenBooking: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) {
      setIsMobileMenuOpen(false);
      return;
    }

    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    setIsMobileMenuOpen(false);
    requestAnimationFrame(() => {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  };

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-stone-50/90 backdrop-blur-md border-b border-stone-200/50 py-4 shadow-sm"
          : "bg-gradient-to-b from-stone-900/40 to-transparent py-6 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          id="btn-logo-home"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group text-left focus:outline-none"
        >
          <img
            src={logoImage}
            alt="Pousada Liberty Noronha Sueste"
            className="w-8 h-8 rounded-full object-cover border border-brand-yellow/60 transition-transform duration-300 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div>
            <span
              className={`font-serif text-lg sm:text-xl font-bold tracking-wide transition-colors ${
                isScrolled ? "text-brand-blue" : "text-white"
              }`}
            >
              Liberty Noronha Sueste
            </span>
            <span
              className={`block text-[10px] tracking-[0.2em] uppercase -mt-1 ${
                isScrolled ? "text-stone-600" : "text-stone-300"
              }`}
            >
              Fernando de Noronha - Brasil
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Início", id: "hero" },
            { label: "Acomodações", id: "acomodacoes" },
            { label: "Comodidades", id: "comodidades" },
            { label: "Depoimentos", id: "depoimentos" },
            { label: "FAQ", id: "faq" },
          ].map((item) => (
            <button
              id={`nav-link-${item.id}`}
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-brand-blue focus:outline-none relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-brand-blue hover:after:w-full after:transition-all ${
                isScrolled ? "text-stone-600" : "text-stone-200 hover:text-white after:bg-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button & Contact */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            id="link-phone-header"
            href={`tel:${POUSADA_INFO.phoneNumeric}`}
            className={`flex items-center gap-2 text-xs font-mono tracking-wider transition-colors hover:text-brand-blue ${
              isScrolled ? "text-stone-600" : "text-stone-200"
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            {POUSADA_INFO.phone}
          </a>
          <button
            id="btn-header-reserve"
            onClick={onOpenBooking}
            className={`text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
              isScrolled
                ? "bg-brand-blue text-stone-50 hover:bg-brand-blue/90 border-brand-blue hover:shadow-md"
                : "bg-white/10 border-white/20 text-white hover:bg-white hover:text-stone-950"
            }`}
          >
            Consultar Tarifas
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            id="btn-mobile-reserve-top"
            onClick={onOpenBooking}
            className={`text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border transition-all ${
              isScrolled
                ? "bg-brand-blue text-stone-50 hover:bg-brand-blue/90 border-brand-blue"
                : "bg-white/15 border-white/20 text-white hover:bg-white hover:text-stone-900"
            }`}
          >
            Consultar
          </button>
          <button
            id="btn-mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors focus:outline-none ${
              isScrolled ? "text-stone-700 hover:bg-stone-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Abrir Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden fixed inset-0 top-[65px] bg-stone-950/50 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="bg-stone-50 border-b border-stone-200 shadow-xl px-4 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-1">
              {[
                { label: "Início", id: "hero" },
                { label: "Acomodações", id: "acomodacoes" },
                { label: "Comodidades", id: "comodidades" },
                { label: "Depoimentos", id: "depoimentos" },
                { label: "FAQ", id: "faq" },
              ].map((item) => (
                <button
                  id={`mobile-nav-link-${item.id}`}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left font-serif text-lg py-3 px-2 border-b border-stone-100 text-stone-700 hover:text-brand-blue transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <a
                id="mobile-nav-phone"
                href={`tel:${POUSADA_INFO.phoneNumeric}`}
                className="flex items-center gap-3 text-sm font-mono text-stone-600 py-2 px-2"
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                {POUSADA_INFO.phone}
              </a>
              <button
                id="btn-mobile-drawer-reserve"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full text-center text-sm font-semibold tracking-wider uppercase bg-brand-blue text-white py-3 rounded-xl hover:bg-brand-blue/90 active:scale-[0.98] transition-all cursor-pointer"
              >
                Consultar Disponibilidade
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
