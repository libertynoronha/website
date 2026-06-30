import React from "react";
import { motion } from "framer-motion";
import { Coffee, Wifi, Waves, Sun, ShieldCheck, Compass } from "lucide-react";
import { AMENITIES_DATA } from "../data";

// Map icon strings to Lucide components
const IconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Wifi: Wifi,
  Coffee: Coffee,
  Waves: Waves,
  Sun: Sun,
  ShieldCheck: ShieldCheck,
  Compass: Compass,
};

export default function Amenities() {
  return (
    <section id="comodidades" className="py-24 bg-stone-100 relative overflow-hidden">
      {/* Background Accent Deco */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-96 bg-brand-blue/5 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono tracking-[0.25em] text-brand-blue uppercase font-bold">
            Serviços Exclusivos
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-3">
            Comodidades Projetadas para o seu Descanso
          </h2>
          <div className="h-1 w-12 bg-brand-green mx-auto mt-4 rounded"></div>
          <p className="text-stone-700 text-sm sm:text-base mt-4 leading-relaxed">
            Oferecemos uma curadoria de services pensados milimetricamente para que sua única preocupação seja aproveitar a brisa e as ondas do mar.
          </p>
        </div>

        {/* Grid of Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {AMENITIES_DATA.map((amenity, index) => {
            const IconComponent = IconMap[amenity.iconName] || Compass;
            return (
              <motion.div
                id={`amenity-card-${amenity.id}`}
                key={amenity.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white p-8 rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-md transition-all duration-300 group hover:border-brand-blue/30 text-left"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-stone-50 rounded-xl group-hover:bg-brand-blue/10 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-stone-700 group-hover:text-brand-blue transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-serif font-bold text-stone-800 tracking-wide group-hover:text-stone-950 transition-colors">
                    {amenity.name}
                  </h3>
                </div>
                <p className="text-stone-700 text-sm leading-relaxed group-hover:text-stone-800 transition-colors">
                  {amenity.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bonus visual note */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-stone-600 italic">
            * Todas as comodidades acima estão 100% inclusas no valor da diária regular. Sem taxas ocultas.
          </p>
          <p className="text-xs font-mono text-stone-600 italic">
            * O Apoio a Passeios atua exclusivamente na indicação de parceiros. Valores, reservas e condições são definidos diretamente com os prestadores de serviço.
          </p>
        </div>
      </div>
    </section>
  );
}
