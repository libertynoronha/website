import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FAQS_DATA } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section id="faq" className="py-24 bg-stone-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono tracking-[0.25em] text-brand-blue uppercase font-bold">
            Dúvidas Frequentes
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-3">
            Informações Úteis para sua Estadia
          </h2>
          <div className="h-1 w-12 bg-brand-green mx-auto mt-4 rounded"></div>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                id={`faq-accordion-item-${faq.id}`}
                key={faq.id}
                className="bg-white rounded-2xl border border-stone-200/50 overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  id={`faq-toggle-btn-${faq.id}`}
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 font-serif font-bold text-stone-800 hover:text-brand-blue transition-colors focus:outline-none"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <div className="flex-shrink-0 p-1 bg-stone-50 rounded-full text-stone-500">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-stone-100" : "max-h-0"
                  }`}
                >
                  <div className="p-6 sm:p-8 text-stone-600 text-sm leading-relaxed text-left">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/50 max-w-xl mx-auto">
          <p className="text-sm text-stone-600">
            Ainda tem alguma pergunta que não está respondida aqui?
          </p>
          <p className="text-xs font-mono text-stone-400 mt-1">
            Fale conosco diretamente via WhatsApp a qualquer momento!
          </p>
        </div>
      </div>
    </section>
  );
}
