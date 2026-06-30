import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { POUSADA_INFO } from "../data";
import BookingBar from "./BookingBar";
import { BookingSimulation } from "../types";
import heroPousadaImg from "../assets/images/hero_pousada.jpg";
import deckImg from "../assets/images/deck.jpg";
import breakfastImg from "../assets/images/breakfast.jpg";
import breakfast2Img from "../assets/images/breakfast_2.jpg";
import logoImage from "../assets/images/logo_2025.jpg";

interface HeroProps {
  onSimulate: (simulation: BookingSimulation) => void;
  bookingSimulation: BookingSimulation | null;
  onClearSimulation: () => void;
}

export default function Hero({
  onSimulate,
  bookingSimulation,
  onClearSimulation,
}: HeroProps) {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  const heroImages = [
    {
      src: heroPousadaImg,
      alt: "Vista aérea da pousada Liberty com área externa e entrada",
      description: "Bem-vindo à Pousada Liberty Noronha Sueste: charme, conforto e natureza ao seu redor.",
    },
    {
      src: deckImg,
      alt: "Deck elegante com espreguiçadeiras e paisagem tropical",
      description: "Relaxar no deck com vista para o jardim e o clima tropical de Noronha.",
    },
    {
      src: breakfastImg,
      alt: "Café da manhã servido com frutas, pães e bebidas naturais",
      description: "Café da manhã artesanal incluso, preparado com frutas da estação e sabores locais.",
    },
    {
      src: breakfast2Img,
      alt: "Mesa de café da manhã com croissants, sucos e frutas",
      description: "Comece o dia com uma refeição leve e deliciosa, pensada especialmente para você.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handlePrevHero = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleNextHero = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
  };

  const scrollToAcomodacoes = () => {
    const el = document.getElementById("acomodacoes");
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative bg-stone-50 overflow-hidden pt-28 pb-8 md:pt-36 md:pb-12">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-brand-blue/5 rounded-bl-[100px] -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-stone-100 -z-10 rounded-tr-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pb-8">
          {/* Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green border border-brand-green/20 px-3.5 py-1.5 rounded-full w-max text-xs font-mono font-medium tracking-wide mb-6 animate-pulse"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-green" />
              <span>Praia do Sueste, Fernando de Noronha</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-serif text-stone-900 leading-[1.1] tracking-tight font-bold"
            >
              {POUSADA_INFO.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-brand-blue/90 font-mono text-xs sm:text-sm uppercase tracking-[0.25em] font-bold mt-3"
            >
              {POUSADA_INFO.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-stone-600 text-sm sm:text-base leading-relaxed mt-6 max-w-lg"
            >
              {POUSADA_INFO.description}
            </motion.p>

            {/* Micro Details & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-6"
            >
              <button
                id="hero-scroll-btn"
                onClick={scrollToAcomodacoes}
                className="bg-brand-blue hover:bg-brand-blue/90 text-stone-50 text-xs font-bold uppercase tracking-wider px-7 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2.5 group cursor-pointer"
              >
                Conhecer Suítes
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </button>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-blue border border-stone-50"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow border border-stone-50"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-green border border-stone-50"></span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-0.5 text-brand-yellow">
                    <Star className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow" />
                    <Star className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow" />
                    <Star className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow" />
                    <Star className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow" />
                    <Star className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow" />
                  </div>
                  <span className="text-[11px] font-mono font-medium text-stone-700 block">
                    Avaliação Fantástico na Booking
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Photo Showcase Container */}
          <div className="lg:col-span-7 relative h-[300px] sm:h-[450px] lg:h-[500px] w-full flex items-center justify-center">
            {/* Elegant Outer Frame Decoration */}
            <div className="absolute inset-4 border border-stone-200/60 rounded-[32px] pointer-events-none -z-10 translate-x-3 translate-y-3"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full overflow-hidden rounded-[32px] bg-stone-200 shadow-2xl group border-4 border-white"
            >
              {heroImages.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentHeroIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    fetchPriority={index === 0 ? "high" : undefined}
                    loading={index === 0 ? "eager" : undefined}
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-10000 ease-out scale-100 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {index === currentHeroIndex && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 sm:p-6 backdrop-blur-md">
                      <p className="text-xs uppercase tracking-[0.24em] text-brand-yellow font-bold mb-1">
                        Imagem {index + 1} de {heroImages.length}
                      </p>
                      <p className="text-sm sm:text-base leading-relaxed">
                        {slide.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-stone-900/10 to-transparent z-20"></div>

              {/* Navigation controls */}
              <button
                onClick={handlePrevHero}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-stone-950/50 hover:bg-stone-950/75 text-white p-3 min-w-[44px] min-h-[44px] rounded-full shadow-lg transition-all active:scale-90 opacity-0 group-hover:opacity-100 duration-300 cursor-pointer"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextHero}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-stone-950/50 hover:bg-stone-950/75 text-white p-3 min-w-[44px] min-h-[44px] rounded-full shadow-lg transition-all active:scale-90 opacity-0 group-hover:opacity-100 duration-300 cursor-pointer"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-24 left-0 right-0 z-30 flex justify-center gap-1.5">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentHeroIndex(index)}
                    className={`min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentHeroIndex ? "bg-brand-yellow" : "bg-white/55 hover:bg-white"
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  >
                    <span className={`h-2 rounded-full ${index === currentHeroIndex ? "w-2 bg-stone-950" : "w-2 bg-brand-blue/80"}`} />
                  </button>
                ))}
              </div>

              {/* Float Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white bg-stone-950/45 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-white/10 z-30">
                <div>
                  <p className="text-[10px] font-mono tracking-widest text-stone-300 uppercase">Estilo de Vida</p>
                  <p className="text-sm font-serif font-medium">Sofisticação e conexão nativa</p>
                </div>
                <img
                  src={logoImage}
                  alt="Logo"
                  className="w-8 h-8 rounded-full object-cover border border-brand-yellow/60"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Reservation Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-8"
        >
          <BookingBar
            onSimulate={onSimulate}
            initialSimulation={bookingSimulation}
            onClear={onClearSimulation}
          />
        </motion.div>
      </div>
    </section>
  );
}
