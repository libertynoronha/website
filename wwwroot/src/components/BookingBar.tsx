import React, { useState } from "react";
import { Calendar, Users, Sparkles, X } from "lucide-react";
import { BookingSimulation } from "../types";

interface BookingBarProps {
  onSimulate: (simulation: BookingSimulation) => void;
  initialSimulation?: BookingSimulation | null;
  onClear?: () => void;
  inline?: boolean;
}

export default function BookingBar({
  onSimulate,
  initialSimulation,
  onClear,
  inline = false,
}: BookingBarProps) {
  // Set default dates if none exist
  const getTodayStr = (offsetDays = 0) => {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    return d.toISOString().split("T")[0];
  };

  const [checkIn, setCheckIn] = useState(
    initialSimulation?.checkIn || getTodayStr(1)
  );
  const [checkOut, setCheckOut] = useState(
    initialSimulation?.checkOut || getTodayStr(4)
  );
  const [guests, setGuests] = useState(initialSimulation?.guests || 2);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!checkIn || !checkOut) {
      setErrorMsg("Por favor, selecione as datas de entrada e saída.");
      return;
    }

    const dIn = new Date(checkIn);
    const dOut = new Date(checkOut);

    if (dIn >= dOut) {
      setErrorMsg("A data de saída deve ser após a data de entrada.");
      return;
    }

    onSimulate({
      checkIn,
      checkOut,
      guests,
    });
  };

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const dIn = new Date(checkIn);
    const dOut = new Date(checkOut);
    const diff = dOut.getTime() - dIn.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();

  return (
    <div
      id="booking-simulation-container"
      className={`w-full ${
        inline
          ? "bg-stone-100 p-4 rounded-2xl border border-stone-200/60"
          : "bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-stone-100 max-w-5xl mx-auto -mt-16 relative z-30"
      }`}
    >
      {!inline && (
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
          <p className="text-xs font-mono font-medium tracking-widest text-stone-500 uppercase flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-yellow fill-brand-yellow/30" /> Planejar sua Estadia (Orçamento por WhatsApp)
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4 lg:items-end">
        {/* Check In */}
        <div className="flex-1 min-w-[150px]">
          <label className="block text-xs font-mono font-semibold text-stone-600 uppercase mb-2 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-stone-400" /> Entrada
          </label>
          <div className="relative">
            <input
              id="booking-check-in-input"
              type="date"
              min={getTodayStr()}
              value={checkIn}
              onChange={(e) => {
                setCheckIn(e.target.value);
                // Adjust checkout if needed
                const dIn = new Date(e.target.value);
                const dOut = new Date(checkOut);
                if (dIn >= dOut) {
                  const newOut = new Date(dIn);
                  newOut.setDate(newOut.getDate() + 3);
                  setCheckOut(newOut.toISOString().split("T")[0]);
                }
              }}
              className="w-full bg-stone-50 hover:bg-stone-100/80 focus:bg-white text-stone-800 text-sm border border-stone-200 focus:border-brand-blue rounded-xl py-3 px-4 transition-all focus:outline-none focus:ring-1 focus:ring-brand-blue/30 font-medium"
            />
          </div>
        </div>

        {/* Check Out */}
        <div className="flex-1 min-w-[150px]">
          <label className="block text-xs font-mono font-semibold text-stone-600 uppercase mb-2 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-stone-400" /> Saída
          </label>
          <div className="relative">
            <input
              id="booking-check-out-input"
              type="date"
              min={checkIn ? getTodayStr(1) : getTodayStr()}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-stone-50 hover:bg-stone-100/80 focus:bg-white text-stone-800 text-sm border border-stone-200 focus:border-brand-blue rounded-xl py-3 px-4 transition-all focus:outline-none focus:ring-1 focus:ring-brand-blue/30 font-medium"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="w-full lg:w-[160px]">
          <label className="block text-xs font-mono font-semibold text-stone-600 uppercase mb-2 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-stone-400" /> Hóspedes
          </label>
          <div className="relative flex items-center">
            <button
              id="booking-guests-dec-btn"
              type="button"
              onClick={() => setGuests((g) => Math.max(1, g - 1))}
              className="absolute left-1 flex items-center justify-center w-8 h-8 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-700 transition-colors focus:outline-none text-sm font-bold"
            >
              -
            </button>
            <input
              id="booking-guests-display"
              type="text"
              readOnly
              value={`${guests} ${guests === 1 ? "Pessoa" : "Pessoas"}`}
              className="w-full bg-stone-50 text-center text-stone-800 text-sm border border-stone-200 rounded-xl py-3 px-10 font-semibold"
            />
            <button
              id="booking-guests-inc-btn"
              type="button"
              onClick={() => setGuests((g) => Math.min(4, g + 1))}
              className="absolute right-1 flex items-center justify-center w-8 h-8 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-700 transition-colors focus:outline-none text-sm font-bold"
            >
              +
            </button>
          </div>
        </div>

        {/* Action Button */}
        <div className="w-full lg:w-auto flex gap-2">
          <button
            id="btn-simulate-submit"
            type="submit"
            className="flex-1 lg:flex-none text-center bg-brand-blue hover:bg-brand-blue/90 text-stone-50 text-xs font-bold tracking-wider uppercase px-8 py-4 rounded-xl transition-all shadow-md active:scale-[0.98] cursor-pointer min-w-[140px]"
          >
            {initialSimulation ? "Atualizar" : "Ver Opções"}
          </button>

          {initialSimulation && onClear && (
            <button
              id="btn-simulate-clear"
              type="button"
              onClick={onClear}
              className="p-3 bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-700 rounded-xl transition-colors focus:outline-none"
              title="Limpar simulação"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </form>

      {/* Nights Indicator */}
      {nights > 0 && !errorMsg && (
        <p className="text-xs font-mono text-stone-500 mt-3 flex items-center gap-1.5">
          Período simulado: <strong className="text-brand-blue font-semibold">{nights} {nights === 1 ? "diária" : "diárias"}</strong> de estadia.
        </p>
      )}

      {errorMsg && (
        <p className="text-xs font-mono text-red-600 mt-3 font-semibold">
          {errorMsg}
        </p>
      )}
    </div>
  );
}
