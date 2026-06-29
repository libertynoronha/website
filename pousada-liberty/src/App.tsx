import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RoomGallery from "./components/RoomGallery";
import Amenities from "./components/Amenities";
import Testimonials from "./components/Testimonials";
import LocationAndContact from "./components/LocationAndContact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";
import WhatsAppModal from "./components/WhatsAppModal";
import { BookingSimulation } from "./types";

export default function App() {
  const [bookingSimulation, setBookingSimulation] = useState<BookingSimulation | null>(null);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [whatsAppMsg, setWhatsAppMsg] = useState("");

  const handleSimulateBooking = (simulation: BookingSimulation) => {
    setBookingSimulation(simulation);

    // Scroll smoothly to accommodations section so they see live room pricing
    setTimeout(() => {
      const el = document.getElementById("acomodacoes");
      if (el) {
        const offset = 80;
        const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
          top: pos,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const handleClearSimulation = () => {
    setBookingSimulation(null);
  };

  const handleOpenWhatsApp = (message: string) => {
    let finalMessage = message;

    if (bookingSimulation) {
      const formatDate = (dateStr: string) => {
        const parts = dateStr.split("-");
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
      };

      const dIn = new Date(bookingSimulation.checkIn);
      const dOut = new Date(bookingSimulation.checkOut);
      const diff = dOut.getTime() - dIn.getTime();
      const nights = Math.ceil(diff / (1000 * 60 * 60 * 24));
      const nightsStr = `${nights} ${nights === 1 ? "diária" : "diárias"}`;

      if (!message.includes("Entrada:") && !message.includes("Entrada*")) {
        if (message.includes("Gostaria de consultar tarifas e disponibilidade de reservas na pousada.")) {
          finalMessage = `Olá! Gostaria de consultar tarifas e disponibilidade de reservas na pousada.\n\n` +
            `• *Entrada:* ${formatDate(bookingSimulation.checkIn)}\n` +
            `• *Saída:* ${formatDate(bookingSimulation.checkOut)}\n` +
            `• *Estadia:* ${nightsStr}\n` +
            `• *Hóspedes:* ${bookingSimulation.guests} ${bookingSimulation.guests === 1 ? "pessoa" : "pessoas"}\n\n` +
            `Poderiam me informar a disponibilidade e os valores para este período? Obrigado!`;
        } else if (message.includes("Gostaria de saber mais informações sobre a disponibilidade e tarifas da")) {
          const roomMatch = message.match(/da \*([^*]+)\*/);
          const roomName = roomMatch ? roomMatch[1] : "";
          finalMessage = `Olá! Gostaria de solicitar uma cotação para a *${roomName || "acomodação"}*.\n\n` +
            `• *Entrada:* ${formatDate(bookingSimulation.checkIn)}\n` +
            `• *Saída:* ${formatDate(bookingSimulation.checkOut)}\n` +
            `• *Estadia:* ${nightsStr}\n` +
            `• *Hóspedes:* ${bookingSimulation.guests} ${bookingSimulation.guests === 1 ? "pessoa" : "pessoas"}\n\n` +
            `Poderiam me informar a disponibilidade e os valores para este período? Obrigado!`;
        } else {
          finalMessage = `${message}\n\n` +
            `• *Entrada:* ${formatDate(bookingSimulation.checkIn)}\n` +
            `• *Saída:* ${formatDate(bookingSimulation.checkOut)}\n` +
            `• *Estadia:* ${nightsStr}\n` +
            `• *Hóspedes:* ${bookingSimulation.guests} ${bookingSimulation.guests === 1 ? "pessoa" : "pessoas"}`;
        }
      }
    }

    setWhatsAppMsg(finalMessage);
    setIsWhatsAppOpen(true);
  };

  const handleTriggerDefaultWhatsApp = () => {
    let msg = "Olá! Vi o site de vocês e gostaria de mais informações sobre reservas e tarifas.";
    if (bookingSimulation) {
      const formatDate = (dateStr: string) => {
        const parts = dateStr.split("-");
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
      };

      const dIn = new Date(bookingSimulation.checkIn);
      const dOut = new Date(bookingSimulation.checkOut);
      const diff = dOut.getTime() - dIn.getTime();
      const nights = Math.ceil(diff / (1000 * 60 * 60 * 24));
      const nightsStr = `${nights} ${nights === 1 ? "diária" : "diárias"}`;

      msg = `Olá! Gostaria de solicitar uma cotação.\n\n` +
        `• *Entrada:* ${formatDate(bookingSimulation.checkIn)}\n` +
        `• *Saída:* ${formatDate(bookingSimulation.checkOut)}\n` +
        `• *Estadia:* ${nightsStr}\n` +
        `• *Hóspedes:* ${bookingSimulation.guests} ${bookingSimulation.guests === 1 ? "pessoa" : "pessoas"}\n\n` +
        `Poderiam me informar a disponibilidade e os valores para este período? Obrigado!`;
    }
    setWhatsAppMsg(msg);
    setIsWhatsAppOpen(true);
  };

  return (
    <div id="pousada-app" className="bg-stone-50 min-h-screen text-stone-800 font-sans selection:bg-brand-blue/10 selection:text-brand-blue">
      {/* Premium Header Menu */}
      <Header onOpenBooking={() => handleOpenWhatsApp("Olá! Gostaria de consultar tarifas e disponibilidade de reservas na pousada.")} />

      {/* Main Sections */}
      <main>
        {/* Editorial Hero with Photo & Booking Engine */}
        <Hero
          onSimulate={handleSimulateBooking}
          bookingSimulation={bookingSimulation}
          onClearSimulation={handleClearSimulation}
        />

        {/* Dynamic Accommodations & Pricing Gallery */}
        <RoomGallery
          bookingSimulation={bookingSimulation}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* Curated Luxury Amenities */}
        <Amenities />

        {/* Real Guest Testimonials & Reviews */}
        <Testimonials />

        {/* Physical Locations & Email Contact Form */}
        <LocationAndContact onOpenWhatsApp={handleOpenWhatsApp} />

        {/* FAQ Accordion Policies */}
        <FAQ />
      </main>

      {/* Footer Branding & Social Media Links */}
      <Footer />

      {/* TIMED FLOAT FAB: Green WhatsApp button */}
      <WhatsAppFAB onClick={handleTriggerDefaultWhatsApp} />

      {/* FAIL-SAFE MODAL: WhatsApp Live Chat Assistant */}
      <WhatsAppModal
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
        defaultMessage={whatsAppMsg}
      />
    </div>
  );
}

