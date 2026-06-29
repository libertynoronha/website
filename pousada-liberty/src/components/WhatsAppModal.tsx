import { useState, useEffect } from "react";
import { X, Send, Copy, Check, MessageSquare, ShieldCheck } from "lucide-react";
import { POUSADA_INFO } from "../data";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMessage?: string;
}

export default function WhatsAppModal({
  isOpen,
  onClose,
  defaultMessage = "",
}: WhatsAppModalProps) {
  const [userMsg, setUserMsg] = useState(
    defaultMessage ||
      `Olá! Estou visitando o site de vocês e gostaria de tirar algumas dúvidas sobre tarifas e datas disponíveis.`
  );
  const [copied, setCopied] = useState(false);
  const [sendingSimulated, setSendingSimulated] = useState(false);

  useEffect(() => {
    setUserMsg(
      defaultMessage ||
        `Olá! Estou visitando o site de vocês e gostaria de tirar algumas dúvidas sobre tarifas e datas disponíveis.`
    );
  }, [defaultMessage, isOpen]);

  if (!isOpen) return null;

  // Format the text for WA url encoding
  const formattedWaUrl = `https://api.whatsapp.com/send?phone=${
    POUSADA_INFO.phoneNumeric
  }&text=${encodeURIComponent(userMsg)}`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(userMsg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulateSend = () => {
    setSendingSimulated(true);
    setTimeout(() => {
      setSendingSimulated(false);
      // Trigger the actual open in new tab
      window.open(formattedWaUrl, "_blank", "noopener,noreferrer");
    }, 1200);
  };

  return (
    <div
      id="whatsapp-simulator-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        id="whatsapp-simulator-container"
        className="bg-stone-100 rounded-3xl overflow-hidden max-w-md w-full shadow-2xl relative animate-in zoom-in-95 duration-200 border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Chat Header */}
        <div className="bg-emerald-600 text-stone-50 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="w-2.5 h-2.5 bg-emerald-400 border border-emerald-600 rounded-full absolute bottom-0 right-0 z-10 animate-pulse"></span>
              <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center text-sm font-serif font-bold text-emerald-100 uppercase">
                LN
              </div>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-sm leading-tight">Liberty Noronha Atendimento</h3>
              <span className="text-[10px] text-emerald-200 font-mono tracking-wide">
                Online • Geralmente responde em minutos
              </span>
            </div>
          </div>
          <button
            id="btn-close-wa-simulator"
            onClick={onClose}
            className="p-1.5 hover:bg-emerald-700/60 text-white rounded-full transition-colors focus:outline-none"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info Disclaimer */}
        <div className="bg-brand-green/10 border-b border-brand-green/20 px-4 py-2.5 text-left flex gap-2 items-start">
          <ShieldCheck className="w-4.5 h-4.5 text-brand-green flex-shrink-0 mt-0.5" />
          <p className="text-[10px] text-stone-600 leading-normal">
            Você está simulando o contato com nossa equipe. Abaixo está a mensagem gerada com base em suas escolhas. Clique em <strong>Enviar</strong> para abrir seu WhatsApp.
          </p>
        </div>

        {/* Chat Body (Simulating WA conversations) */}
        <div className="p-4 h-[240px] overflow-y-auto bg-[#efeae2] flex flex-col justify-end gap-3 pattern-dots">
          {/* Welcome automated message */}
          <div className="bg-white text-stone-800 text-xs py-2 px-3.5 rounded-2xl rounded-tl-none max-w-[85%] self-start shadow-sm border border-stone-200/50 text-left">
            <p className="leading-relaxed">
              Olá! Seja bem-vindo ao atendimento da <strong>Pousada Liberty Noronha Sueste</strong>. Como podemos te ajudar hoje?
            </p>
            <span className="block text-[8px] text-stone-400 text-right mt-1">
              Atendimento Automático
            </span>
          </div>

          {/* User prefilled inquiry message */}
          <div className="bg-emerald-100 text-stone-800 text-xs py-2.5 px-3.5 rounded-2xl rounded-tr-none max-w-[85%] self-end shadow-sm border border-emerald-200/40 text-left">
            <p className="whitespace-pre-line leading-relaxed">{userMsg}</p>
            <span className="block text-[8px] text-stone-400 text-right mt-1">
              Sua mensagem gerada
            </span>
          </div>
        </div>

        {/* Custom Input Editor */}
        <div className="bg-white p-3 border-t border-stone-200 flex flex-col gap-2.5">
          <div className="text-left">
            <label className="block text-[9px] font-mono font-bold text-stone-400 uppercase tracking-widest mb-1">
              Editar Mensagem (Opcional):
            </label>
            <textarea
              id="wa-textarea-msg"
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              rows={2}
              className="w-full bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-xs text-stone-700 focus:outline-none focus:border-emerald-500 font-sans leading-relaxed resize-none"
            />
          </div>

          {/* Action Footer */}
          <div className="flex gap-2.5">
            <button
              id="btn-wa-copy"
              onClick={handleCopyText}
              className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-800 text-[11px] font-semibold tracking-wider uppercase py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 border border-stone-200"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copiar Texto
                </>
              )}
            </button>

            <button
              id="btn-wa-submit-trigger"
              onClick={handleSimulateSend}
              disabled={sendingSimulated}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-stone-50 text-[11px] font-bold tracking-wider uppercase py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md disabled:bg-emerald-400"
            >
              {sendingSimulated ? (
                <span className="w-4 h-4 border-2 border-stone-50 border-t-transparent rounded-full animate-spin"></span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" /> Enviar Agora
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
