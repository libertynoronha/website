import React, { useState } from "react";
import { X, Check, BedDouble, Expand, Eye, Users, Calendar, HelpCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Room, BookingSimulation } from "../types";
import { POUSADA_INFO } from "../data";

interface RoomModalProps {
  room: Room;
  onClose: () => void;
  bookingSimulation: BookingSimulation | null;
  onOpenWhatsApp: (message: string) => void;
}

export default function RoomModal({
  room,
  onClose,
  bookingSimulation,
  onOpenWhatsApp,
}: RoomModalProps) {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const images = room.images && room.images.length > 0 ? room.images : [room.imageUrl];

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIdx((prev) => (prev + 1) % images.length);
  };

  // Calculate nights and prices if simulated
  const calculateDetails = () => {
    if (!bookingSimulation) return null;
    const dIn = new Date(bookingSimulation.checkIn);
    const dOut = new Date(bookingSimulation.checkOut);
    const diff = dOut.getTime() - dIn.getTime();
    const nights = Math.ceil(diff / (1000 * 60 * 60 * 24));
    const totalPrice = nights * room.pricePerNight;
    return { nights, totalPrice };
  };

  const details = calculateDetails();

  const handleBookClick = () => {
    let customMessage = "";
    if (bookingSimulation) {
      const formatDate = (dateStr: string) => {
        const parts = dateStr.split("-");
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
      };

      const nightsStr = details ? `${details.nights} ${details.nights === 1 ? "noite" : "noites"}` : "";
      customMessage = `Olá! Gostaria de solicitar uma cotação para a *${room.name}*.\n\n` +
        `• *Entrada:* ${formatDate(bookingSimulation.checkIn)}\n` +
        `• *Saída:* ${formatDate(bookingSimulation.checkOut)}\n` +
        `• *Estadia:* ${nightsStr}\n` +
        `• *Hóspedes:* ${bookingSimulation.guests} ${bookingSimulation.guests === 1 ? "pessoa" : "pessoas"}\n\n` +
        `Poderiam me informar a disponibilidade e os valores para este período? Obrigado!`;
    } else {
      customMessage = `Olá! Gostaria de saber mais informações sobre a disponibilidade e tarifas da *${room.name}*.`;
    }

    onOpenWhatsApp(customMessage);
  };

  return (
    <div
      id={`room-modal-overlay-${room.id}`}
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        id={`room-modal-content-${room.id}`}
        className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative animate-in zoom-in-95 duration-200 flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="btn-close-room-modal"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/85 backdrop-blur hover:bg-white text-stone-700 hover:text-stone-950 p-2.5 rounded-full shadow transition-all focus:outline-none"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Image & Quick Specs */}
        <div className="w-full md:w-1/2 relative h-[280px] md:h-auto bg-stone-100 flex flex-col">
          <div className="relative flex-1 h-full min-h-[240px] overflow-hidden group">
            {images.map((imgUrl, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === currentImgIdx ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={imgUrl}
                  alt={`${room.name} - Imagem ${index + 1}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}

            {room.tag && (
              <span className="absolute top-4 left-4 bg-brand-blue text-stone-50 text-[10px] font-bold tracking-widest uppercase py-1 px-3.5 rounded-full shadow-sm z-20">
                {room.tag}
              </span>
            )}

            {/* Carousel navigation controls */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-stone-900/65 hover:bg-stone-900/85 text-white p-1.5 rounded-full shadow-md transition-all active:scale-90"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-stone-900/65 hover:bg-stone-900/85 text-white p-1.5 rounded-full shadow-md transition-all active:scale-90"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dot Indicators */}
                <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-1.5">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImgIdx(index);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentImgIdx ? "w-5 bg-brand-yellow" : "w-2 bg-white/60 hover:bg-white"
                      }`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Quick Info Bar on Desktop */}
          <div className="hidden md:grid grid-cols-2 gap-px bg-stone-100 border-t border-stone-200">
            <div className="bg-white p-4 text-center">
              <span className="block text-[10px] font-mono text-stone-400 uppercase tracking-wider mb-1">Área útil</span>
              <span className="text-sm font-serif font-bold text-stone-800 flex items-center justify-center gap-1.5">
                <Expand className="w-4 h-4 text-brand-blue" /> {room.size}
              </span>
            </div>
            <div className="bg-white p-4 text-center">
              <span className="block text-[10px] font-mono text-stone-400 uppercase tracking-wider mb-1">Vista da Janela</span>
              <span className="text-sm font-serif font-bold text-stone-800 flex items-center justify-center gap-1.5">
                <Eye className="w-4 h-4 text-brand-blue" /> {room.view}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Room detail texts */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-brand-blue uppercase block">
              Acomodação Exclusiva
            </span>
            <h3 className="text-2xl font-serif font-bold text-stone-900 mt-1 leading-tight">
              {room.name}
            </h3>

            {/* Micro specs on mobile */}
            <div className="flex flex-wrap items-center gap-4 mt-3 py-2 border-y border-stone-100 md:hidden">
              <span className="text-xs font-mono text-stone-500 flex items-center gap-1">
                <Expand className="w-3.5 h-3.5 text-brand-blue" /> {room.size}
              </span>
              <span className="text-xs font-mono text-stone-500 flex items-center gap-1">
                <BedDouble className="w-3.5 h-3.5 text-brand-blue" /> {room.beds}
              </span>
              <span className="text-xs font-mono text-stone-500 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-brand-blue" /> Max: {room.capacity}
              </span>
            </div>

            {/* Description */}
            <p className="text-stone-600 text-sm leading-relaxed mt-4">
              {room.longDescription}
            </p>

            {/* What is included in the room */}
            <div className="mt-6">
              <h4 className="text-xs font-mono font-bold text-stone-800 uppercase tracking-wider mb-3">
                Incluso nesta acomodação:
              </h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {room.amenities.map((amenityName, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-stone-600">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span className="truncate">{amenityName}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing & Call to Action */}
          <div className="mt-8 pt-6 border-t border-stone-100">
            {bookingSimulation && details ? (
              /* Simulation view */
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/50 mb-4 flex justify-between items-center">
                <div className="text-left">
                  <span className="block text-[10px] font-mono text-stone-400 uppercase tracking-widest">
                    Estimativa para {details.nights} {details.nights === 1 ? "noite" : "noites"}
                  </span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-2xl font-serif font-bold text-brand-blue">R$ {details.totalPrice}*</span>
                    <span className="text-xs text-stone-500 font-mono">({details.nights}x R$ {room.pricePerNight})</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 bg-brand-blue/10 text-brand-blue text-[10px] font-mono font-bold uppercase py-1 px-2.5 rounded-full">
                    Sob Consulta
                  </span>
                </div>
              </div>
            ) : (
              /* Regular pricing view */
              <div className="flex items-baseline gap-2 mb-4 justify-between">
                <div>
                  <span className="block text-[10px] font-mono text-stone-400 uppercase tracking-widest">Diária média regular</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-2xl font-serif font-bold text-stone-900">R$ {room.pricePerNight}</span>
                    <span className="text-xs text-stone-500 font-mono">/ noite</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-stone-400 italic">Preço base sob consulta</span>
              </div>
            )}

            {/* Direct WhatsApp trigger */}
            <button
              id={`btn-modal-reserve-wa-${room.id}`}
              onClick={handleBookClick}
              className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-stone-50 text-xs font-bold tracking-wider uppercase py-4 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6c-3.314 0-6 2.686-6 6 0 1.156.328 2.227.891 3.141l-.922 2.703 2.781-.906c.883.516 1.906.813 3.016.813 3.314 0 6-2.686 6-6s-2.686-6-6-6zm3.504 8.821c-.156.438-.797.813-1.219.859-.406.047-.938.063-1.531-.125-.609-.188-1.328-.484-1.922-.844-1.047-.641-1.781-1.563-2.188-2.156-.125-.172-.328-.5-.328-.844s.188-.516.25-.578c.078-.078.172-.125.266-.125.094 0 .188.016.266.016.078.016.156-.031.234.125.078.172.297.719.328.781.031.063.031.141-.016.219-.047.078-.078.141-.156.234-.078.078-.141.141-.219.234-.078.078-.047.156 0 .219.125.188.422.688.891 1.109.609.547 1.125.719 1.281.797.156.078.25.063.313-.016.063-.078.266-.313.344-.422.078-.109.156-.094.234-.063.094.031.578.281.672.328.094.047.156.078.188.125.031.047.031.281-.125.719z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 2.03.6 3.91 1.63 5.49L2 22l4.63-1.6c1.51.91 3.27 1.45 5.17 1.45 5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.63 0-3.15-.46-4.44-1.27l-.32-.19-2.61.9.91-2.67-.2-.32C4.48 15.22 4 13.67 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" />
              </svg>
              Consultar Disponibilidade no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
