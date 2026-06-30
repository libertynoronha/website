import { useState, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface WhatsAppFABProps {
  onClick: () => void;
}

export default function WhatsAppFAB({ onClick }: WhatsAppFABProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 4 seconds of page load
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="whatsapp-fab-container" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Interactive Speech Balloon */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85 }}
            className="bg-stone-900 text-stone-50 text-xs py-2.5 px-4 rounded-2xl shadow-xl border border-stone-800 text-left relative flex items-center gap-3.5 max-w-[240px]"
          >
            {/* Pointer arrow */}
            <div className="absolute bottom-[-6px] right-[22px] w-3 h-3 bg-stone-900 rotate-45 border-r border-b border-stone-800"></div>

            <p className="leading-relaxed font-serif font-medium">
              Olá! Como podemos ajudar em sua estadia? 🌊
            </p>

            <button
              id="btn-close-wa-tooltip"
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-stone-300 hover:text-stone-100 focus:outline-none"
              aria-label="Fechar dica"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Pulse Ring FAB Button */}
      <button
        id="btn-whatsapp-floating-fab"
        onClick={() => {
          setShowTooltip(false);
          onClick();
        }}
        className="relative bg-emerald-500 hover:bg-emerald-600 text-stone-50 p-4 rounded-full shadow-2xl transition-transform duration-300 hover:scale-108 active:scale-[0.96] cursor-pointer focus:outline-none group focus:ring-4 focus:ring-emerald-400/30"
        aria-label="Falar conosco no WhatsApp"
      >
        {/* Animated breathing ripple effect */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping opacity-65 scale-110 pointer-events-none group-hover:animate-none"></span>

        <svg
          className="w-7 h-7 fill-current filter drop-shadow-sm"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.454L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.277 0 9.574-4.293 9.577-9.569.001-2.556-1.001-4.959-2.822-6.78-1.82-1.821-4.222-2.82-6.778-2.822-5.28 0-9.577 4.293-9.58 9.569a9.547 9.547 0 001.526 5.14l-.324 1.186 1.171-.307.305-.08 1.155-.302zM17.13 14.12c-.282-.14-1.662-.822-1.921-.916-.258-.094-.446-.14-.633.14-.188.281-.727.915-.892 1.102-.164.187-.328.21-.61.07-.281-.14-1.189-.438-2.264-1.4-.836-.745-1.4-1.664-1.564-1.945-.164-.282-.017-.434.124-.574.127-.126.282-.328.422-.492.141-.164.188-.281.282-.469.094-.188.047-.352-.023-.492-.07-.14-.633-1.524-.868-2.087-.229-.55-.46-.475-.633-.484-.164-.008-.352-.01-.539-.01a1.03 1.03 0 00-.75.352c-.258.281-.984.961-.984 2.344 0 1.383 1.008 2.719 1.149 2.907.14.187 1.984 3.029 4.81 4.248.672.29 1.197.463 1.606.593.676.214 1.292.184 1.778.111.542-.081 1.662-.68 1.896-1.336.234-.656.234-1.22.164-1.336-.07-.117-.258-.188-.54-.328z" />
        </svg>

        {/* Mini Unread Message Notification Dot */}
        <span className="w-3.5 h-3.5 bg-red-500 border-2 border-emerald-500 rounded-full absolute top-1 right-1 flex items-center justify-center"></span>
      </button>
    </div>
  );
}
