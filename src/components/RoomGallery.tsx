import { useState } from "react";
import { BedDouble, Expand, Users, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ROOMS_DATA } from "../data";
import { Room, BookingSimulation } from "../types";
import RoomModal from "./RoomModal";

interface RoomGalleryProps {
  bookingSimulation: BookingSimulation | null;
  onOpenWhatsApp: (message: string) => void;
}

export default function RoomGallery({
  bookingSimulation,
  onOpenWhatsApp,
}: RoomGalleryProps) {
  const { t } = useTranslation();
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  // Helper to calculate total stay price based on dates
  const calculateTotal = (pricePerNight: number) => {
    if (!bookingSimulation) return null;
    const dIn = new Date(bookingSimulation.checkIn);
    const dOut = new Date(bookingSimulation.checkOut);
    const diff = dOut.getTime() - dIn.getTime();
    const nights = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return {
      nights,
      totalPrice: nights * pricePerNight,
    };
  };

  return (
    <section id="acomodacoes" className="pt-12 pb-24 md:pt-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="text-left max-w-2xl">
            <p className="text-xs font-mono tracking-[0.25em] text-brand-blue uppercase font-bold">
              {t('rooms.subtitle')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-2">
              {t('rooms.title')}
            </h2>
            <div className="h-1 w-12 bg-brand-green mt-4 rounded"></div>
            <p className="text-stone-700 text-sm sm:text-base mt-4 leading-relaxed">
              {t('rooms.description')}
            </p>
          </div>

          {/* Quick status message */}
          {bookingSimulation && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center gap-3 w-max max-w-full">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse flex-shrink-0"></span>
              <div className="text-left">
                <span className="block text-xs font-bold text-emerald-800 uppercase tracking-wide">
                  {t('booking.selectedPeriod')}
                </span>
                <span className="block text-[11px] font-mono text-emerald-700">
                  {t('booking.planDates')}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ROOMS_DATA.map((room) => {
            const stayCalculation = calculateTotal(room.pricePerNight);
            // Hide or flag if capacity exceeded
            const isOverCapacity = bookingSimulation && bookingSimulation.guests > room.capacity;

            return (
              <div
                id={`room-card-${room.id}`}
                key={room.id}
                className={`flex flex-col bg-stone-50 rounded-[24px] overflow-hidden border border-stone-200/45 shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-blue/30 group relative ${
                  isOverCapacity ? "opacity-60" : ""
                }`}
              >
                {/* Image & Badges */}
                <div className="relative h-[220px] sm:h-[260px] overflow-hidden bg-stone-200">
                  <img
                    src={room.imageUrl}
                    alt={room.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent"></div>

                  {/* Standard top tag */}
                  {room.tag && (
                    <span className="absolute top-4 left-4 bg-brand-blue/90 backdrop-blur-sm text-stone-100 text-[10px] font-bold tracking-widest uppercase py-1 px-3.5 rounded-full shadow-sm">
                      {room.tag}
                    </span>
                  )}

                  {/* Pricing Badge (Daily rate) */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-[10px] font-mono tracking-widest text-stone-200 uppercase leading-none mb-1">
                      Tarifa média
                    </p>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-xl font-serif font-bold">R$ {room.pricePerNight}</span>
                      <span className="text-xs text-stone-200 font-mono">/ noite</span>
                    </div>
                  </div>
                </div>

                {/* Card Info Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header Details */}
                    <div className="flex items-center gap-1.5 text-stone-700 font-mono text-[10px] uppercase tracking-wider mb-2.5">
                      <span className="flex items-center gap-1">
                        <Expand className="w-3 h-3 text-brand-blue" /> {room.size}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <BedDouble className="w-3 h-3 text-brand-blue" /> {room.beds.split(" ")[2] || "Cama"}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-brand-blue" /> Max {room.capacity}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-stone-900 tracking-wide leading-snug group-hover:text-brand-blue transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-stone-600 text-xs sm:text-sm mt-2.5 leading-relaxed">
                      {room.description}
                    </p>
                  </div>

                  {/* Bottom booking dynamic area */}
                  <div className="mt-6 pt-5 border-t border-stone-200/60">
                    {bookingSimulation && stayCalculation ? (
                      isOverCapacity ? (
                        <div className="bg-red-50 text-red-800 text-[11px] font-bold uppercase tracking-wide py-2 px-3 rounded-xl border border-red-200/50 text-center">
                          Capacidade Excedida ({room.capacity} hóspedes máx)
                        </div>
                      ) : (
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-left">
                            <span className="block text-[9px] font-mono text-stone-600 uppercase tracking-widest leading-none">
                              Estimativa p/ {stayCalculation.nights} {stayCalculation.nights === 1 ? "noite" : "noites"}
                            </span>
                            <span className="text-lg font-serif font-bold text-brand-blue block mt-0.5">
                              R$ {stayCalculation.totalPrice}*
                            </span>
                          </div>
                          <span className="inline-flex items-center gap-1 bg-brand-blue/10 text-brand-blue text-[10px] font-mono font-bold uppercase py-1 px-2.5 rounded-full">
                            Sob Consulta
                          </span>
                        </div>
                      )
                    ) : null}

                    {/* CTA Details Button */}
                    <button
                      id={`btn-open-details-${room.id}`}
                      onClick={() => setSelectedRoom(room)}
                      className="w-full text-center bg-stone-900 hover:bg-brand-blue text-stone-100 text-xs font-bold tracking-wider uppercase py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow group/btn"
                    >
                      Ver Detalhes e Fotos
                      <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Selected Room */}
        {selectedRoom && (
          <RoomModal
            room={selectedRoom}
            onClose={() => setSelectedRoom(null)}
            bookingSimulation={bookingSimulation}
            onOpenWhatsApp={onOpenWhatsApp}
          />
        )}
      </div>
    </section>
  );
}
