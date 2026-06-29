import { Star, MessageSquareQuote } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-stone-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono tracking-[0.25em] text-brand-blue uppercase font-bold">
            Opinião dos Hóspedes
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-3">
            O que Dizem Quem Já Se Hospedou
          </h2>
          <div className="h-1 w-12 bg-brand-green mx-auto mt-4 rounded"></div>
          <p className="text-stone-500 text-sm sm:text-base mt-4 leading-relaxed">
            Nada nos deixa mais realizados do que saber que pudemos proporcionar momentos de paz e recarga para as energias de nossos clientes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              id={`testimonial-card-${testimonial.id}`}
              key={testimonial.id}
              className="bg-white p-8 rounded-[24px] border border-stone-200/40 shadow-sm hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between relative"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-8 text-stone-100 group-hover:text-brand-blue/10 transition-colors pointer-events-none">
                <MessageSquareQuote className="w-12 h-12 stroke-[1px] rotate-180" />
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-brand-yellow mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <p className="font-serif font-bold text-stone-800 text-sm sm:text-base">
                    {testimonial.author}
                  </p>
                  <p className="text-[11px] font-mono text-stone-400 mt-0.5">
                    {testimonial.city}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-brand-blue font-bold bg-brand-blue/10 px-2.5 py-1 rounded-full">
                  {testimonial.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
